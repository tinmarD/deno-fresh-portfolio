// islands/Particles.tsx
import { useEffect, useRef } from "preact/hooks";

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !(window as any).particlesJS) return;

    // Initialize particles.js
    (window as any).particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#aaaaaa" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#aaaaaa",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: .4,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
        },
      },
    });

    return () => {
      // Cleanup (optional)
      const canvas = containerRef.current?.querySelector("canvas");
      if (canvas) canvas.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="particles-js"
      style={{ width: "100%", height: "600px" }}
    />
  );
}
