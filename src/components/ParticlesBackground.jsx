import { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      if (innerWidth > 0) {
        const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
        const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1

        const rotateX = -y *2; // max rotation 1.5 degrees
        const rotateY = x * 2; // max rotation 1.5 degrees

        containerRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particleOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 1500,
          },
        },
        color: {
          value: "#f50062",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 1,
        },
        size: {
          value: { min: 4, max: 7 },
        },
        links: {
          color: "#f50062",
          distance: 200,
          enable: true,
          opacity: 0.7, // strong but not overpowering
          width: 2,
          triangles: {
            enable: false, // no filled areas
          },
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: "out",
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
            distance: 50
          },
        },
      },
      retina_detect: true,
    }),
    []
  );

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    transition: "transform 0.1s ease-out",
  };

  if (init) {
    return (
      <div ref={containerRef} style={containerStyle}>
        <Particles id="tsparticles" options={particleOptions} />
      </div>
    );
  }

  return <></>;
};

export default ParticlesBackground; 