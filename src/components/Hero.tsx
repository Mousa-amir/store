import { useEffect, useRef } from "react";

export default function Hero() {
  const layerBackRef = useRef<HTMLDivElement | null>(null);
  const layerMidRef = useRef<HTMLDivElement | null>(null);
  const layerFrontRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (layerBackRef.current) layerBackRef.current.style.transform = `translate3d(0, ${y * 0.2}px, 0) scale(1.1)`;
      if (layerMidRef.current) layerMidRef.current.style.transform = `translate3d(0, ${y * 0.42}px, 0)`;
      if (layerFrontRef.current) layerFrontRef.current.style.transform = `translate3d(0, ${y * 0.6}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-[#060a1a]"
    >
      {/* Layer 1 — deep background image, slowest */}
      <div ref={layerBackRef} className="parallax-layer">
        <img
          src="/images/hero-bg.jpg"
          alt="Abstract navy and blue luxury fluid backdrop"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a1a]/60 via-[#0a1128]/70 to-[#060a1a]" />
      </div>

      {/* Layer 2 — mid, radial glows */}
      <div ref={layerMidRef} className="parallax-layer">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-blue-600/30 blur-[110px]" />
        <div className="absolute right-[10%] top-[38%] h-96 w-96 rounded-full bg-blue-400/20 blur-[130px]" />
      </div>

      {/* Layer 3 — foreground grid / vignette, fastest */}
      <div ref={layerFrontRef} className="parallax-layer pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
        <p className="reveal mb-6 flex items-center gap-3 font-accent text-xs uppercase tracking-[0.4em] text-blue-300">
          <span className="h-px w-10 bg-blue-400" /> Est. 2012 — Curated Digital Atelier
        </p>
        <h1 className="reveal max-w-4xl font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-[5.2rem]">
          Wear the future.
          <br />
          <span className="text-shimmer">Own the rare.</span>
        </h1>
        <p className="reveal mt-8 max-w-xl font-body text-base leading-relaxed text-white/70 sm:text-lg">
          AURELIA curates a private collection of avant-garde apparel, haute timepieces and
          cyber-luxury tech — sixty singular objects, engineered for people who refuse the ordinary.
        </p>
        <div className="reveal mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#collection"
            data-cursor-hover
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-accent text-xs uppercase tracking-[0.2em] text-[#0a1128] transition hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          >
            Explore Collection
          </a>
          <a
            href="#story"
            data-cursor-hover
            className="font-accent text-xs uppercase tracking-[0.2em] text-white/80 underline-offset-8 transition hover:text-white hover:underline"
          >
            Our Story ↓
          </a>
        </div>

        <div className="reveal mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/15 pt-8">
          {[
            ["60+", "Curated Objects"],
            ["12k", "Global Members"],
            ["4.9★", "Client Rating"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-2xl text-white sm:text-3xl">{n}</p>
              <p className="mt-1 font-body text-xs uppercase tracking-wide text-white/50">{l}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <span className="h-9 w-px animate-pulse bg-white/40" />
      </div>
    </section>
  );
}
