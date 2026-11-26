import { useEffect, useRef } from 'react';
import { CRTEffect, presets } from 'crt-fx';

const DEFAULT_CRT_OPTIONS = {
  ...presets.trinitron,
  phosphor: { style: 'aperture-grille', scale: 1.0, intensity: 0.35 },
  scanlines: { intensity: 0.28, count: 600, sharpness: 0.45 },
  noise: { intensity: 0.04, flickerIntensity: 0.015, speed: 1 },
  vignette: { strength: 0.05, radius: 0.8 },
  // Handled by the live DOM SVG filter (#crt-post-fx) below so they affect real page pixels
  bloom: { enabled: false },
  chromatic: { enabled: false },
  colorBleed: { enabled: false },
};

const DEFAULT_POST_FX = {
  chromaticOffset: 1.5, // RGB channel shift in px
  colorBleedRadius: 5, // Horizontal smear radius in px
  colorBleedOffset: 2.5, // Trailing smear direction offset in px
  colorBleedStrength: 0.18, // 0..1 blend of horizontal smear
  bloomThreshold: 0.2, // 0..1 brightness cutoff for bloom
  bloomRadius: 6, // Bloom glow spread in px
  bloomStrength: 0.45, // Bloom additive intensity
};

function createWhiteSource(width, height) {
  const source = document.createElement('canvas');
  source.width = Math.max(1, Math.min(width, 1920));
  source.height = Math.max(1, Math.min(height, 1080));
  const ctx = source.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, source.width, source.height);
  }
  return source;
}

const CRTOverlay = ({ options = DEFAULT_CRT_OPTIONS, postFx = DEFAULT_POST_FX }) => {
  const canvasRef = useRef(null);

  const fx = { ...DEFAULT_POST_FX, ...postFx };
  const bloomSlope = 1 / Math.max(0.05, 1 - fx.bloomThreshold);
  const bloomIntercept = -fx.bloomThreshold * bloomSlope;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let crt;
    try {
      crt = new CRTEffect(canvas, options);
    } catch (err) {
      console.warn('CRTOverlay: WebGL unavailable, skipping CRT effect.', err);
      return;
    }

    let disposed = false;
    let resizeTimer = null;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const loadViewportMask = async () => {
      if (disposed) return;
      const source = createWhiteSource(window.innerWidth, window.innerHeight);
      await crt.loadImage(source);
      if (disposed) return;
      if (prefersReducedMotion) {
        crt.renderOnce();
      } else {
        crt.start();
      }
    };

    loadViewportMask();

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(loadViewportMask, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      disposed = true;
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      crt.dispose();
    };
  }, [options]);

  return (
    <>
      <svg
        aria-hidden="true"
        style={{ position: 'fixed', width: 0, height: 0, pointerEvents: 'none' }}
      >
        <defs>
          <filter
            id="crt-post-fx"
            x="-2%"
            y="-2%"
            width="104%"
            height="104%"
            colorInterpolationFilters="sRGB"
          >
            {/* 1. Chromatic Aberration: split R/G/B and offset R & B horizontally */}
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="redChannel"
            />
            <feOffset in="redChannel" dx={fx.chromaticOffset} dy="0" result="redShifted" />

            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="greenChannel"
            />

            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="blueChannel"
            />
            <feOffset in="blueChannel" dx={-fx.chromaticOffset} dy="0" result="blueShifted" />

            <feBlend in="redShifted" in2="greenChannel" mode="screen" result="rg" />
            <feBlend in="rg" in2="blueShifted" mode="screen" result="chromatic" />

            {/* 2. Color Bleed: asymmetric horizontal trailing smear */}
            <feGaussianBlur
              in="chromatic"
              stdDeviation={`${fx.colorBleedRadius} 0`}
              result="bleedBlur"
            />
            <feOffset in="bleedBlur" dx={fx.colorBleedOffset} dy="0" result="bleedShifted" />
            <feComposite
              in="chromatic"
              in2="bleedShifted"
              operator="arithmetic"
              k1="0"
              k2={1 - fx.colorBleedStrength}
              k3={fx.colorBleedStrength}
              k4="0"
              result="withBleed"
            />

            {/* 3. Bloom: isolate bright highlights, blur, and additively glow */}
            <feComponentTransfer in="withBleed" result="brightPass">
              <feFuncR type="linear" slope={bloomSlope} intercept={bloomIntercept} />
              <feFuncG type="linear" slope={bloomSlope} intercept={bloomIntercept} />
              <feFuncB type="linear" slope={bloomSlope} intercept={bloomIntercept} />
            </feComponentTransfer>
            <feGaussianBlur
              in="brightPass"
              stdDeviation={fx.bloomRadius}
              result="bloomBlur"
            />
            <feComposite
              in="withBleed"
              in2="bloomBlur"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3={fx.bloomStrength}
              k4="0"
            />
          </filter>
        </defs>
      </svg>

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'multiply',
        }}
      />
    </>
  );
};

export default CRTOverlay;
