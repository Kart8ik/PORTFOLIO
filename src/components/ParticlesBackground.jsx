import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

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
        enable: true,
        zIndex: -1,
      },
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: "#f50062",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.8,
        },
        size: {
          value: { min: 1, max: 4 },
        },
        links: {
          color: "#f50062",
          distance: 200,
          enable: true,
          opacity: 0.6,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          outModes: "out",
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          grab: {
            distance: 160,
            links: {
              opacity: 1,
            },
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      retina_detect: true,
    }),
    []
  );

  if (init) {
    return <Particles id="tsparticles" options={particleOptions} />;
  }

  return <></>;
};

export default ParticlesBackground; 