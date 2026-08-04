import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  radius: number;
  hue: number;
}

/**
 * Full-viewport canvas that maps mouse-movement velocity vectors into a
 * fluid, trailing particle-ripple simulation rendered via requestAnimationFrame.
 */
export default function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];
    const pointer = { x: width / 2, y: height / 2, px: width / 2, py: height / 2, vx: 0, vy: 0 };
    let rafId = 0;
    let idleTimer = 0;

    const spawn = (x: number, y: number, vx: number, vy: number) => {
      const speed = Math.min(Math.hypot(vx, vy), 60);
      const count = Math.max(1, Math.round(speed / 6));
      for (let i = 0; i < count; i++) {
        particles.push({
          x,
          y,
          vx: vx * 0.06 + (Math.random() - 0.5) * 1.6,
          vy: vy * 0.06 + (Math.random() - 0.5) * 1.6,
          life: 0,
          maxLife: 46 + Math.random() * 30,
          radius: 4 + Math.random() * (6 + speed / 10),
          hue: 205 + Math.random() * 45,
        });
      }
      if (particles.length > 420) particles.splice(0, particles.length - 420);
    };

    const onMove = (e: PointerEvent) => {
      pointer.px = pointer.x;
      pointer.py = pointer.y;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.vx = pointer.x - pointer.px;
      pointer.vy = pointer.y - pointer.py;
      idleTimer = 0;
      spawn(pointer.x, pointer.y, pointer.vx, pointer.vy);
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      idleTimer += 1;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;

        const t = p.life / p.maxLife;
        if (t >= 1) {
          particles.splice(i, 1);
          continue;
        }
        const alpha = (1 - t) * 0.35;
        const radius = p.radius * (1 + t * 1.8);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 62%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(${p.hue + 15}, 85%, 50%, ${alpha * 0.5})`);
        gradient.addColorStop(1, "hsla(220, 80%, 30%, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} id="fluid-canvas" aria-hidden="true" />;
}
