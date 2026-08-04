export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-white py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="reveal relative">
          <div className="absolute -left-6 -top-6 h-full w-full rounded-[2rem] border border-blue-600/20" />
          <img
            src="/images/about-bg.jpg"
            alt="Minimalist luxury boutique interior with navy velvet accents"
            className="relative h-[520px] w-full rounded-[2rem] object-cover shadow-2xl shadow-[#0a1128]/20"
          />
          <div className="absolute -bottom-8 -right-6 w-56 rounded-2xl bg-white p-5 shadow-2xl shadow-[#0a1128]/15 ring-1 ring-[#0a1128]/5">
            <p className="font-display text-3xl text-[#0a1128]">13yrs</p>
            <p className="mt-1 font-body text-xs uppercase tracking-wide text-[#0a1128]/50">
              Of independent design &amp; craftsmanship
            </p>
          </div>
        </div>

        <div className="reveal flex flex-col justify-center">
          <p className="mb-4 font-accent text-xs uppercase tracking-[0.35em] text-blue-700">Our Story</p>
          <h2 className="font-display text-4xl leading-tight text-[#0a1128] sm:text-5xl">
            Built for the few who
            <br /> notice everything.
          </h2>
          <p className="mt-6 font-body leading-relaxed text-[#0a1128]/65">
            AURELIA began in a small Milan workshop in 2012 as a rebellion against disposable fashion
            and mass-produced tech. What started as a three-person atelier crafting one-off timepieces
            has grown into a global — yet deliberately small — house of design, uniting horologists,
            avant-garde tailors and hardware engineers under a single obsession: objects that outlive
            trend cycles.
          </p>
          <p className="mt-4 font-body leading-relaxed text-[#0a1128]/65">
            Every product in our 60-piece rotating collection is vetted by an internal council of three
            creative directors. If it doesn't pass their bar for material integrity, wearability and
            longevity, it never reaches the shelf. That is the AURELIA promise — fewer things, made
            extraordinarily well.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#0a1128]/10 pt-8 sm:grid-cols-4">
            {[
              ["Milan", "Founded"],
              ["3", "Categories"],
              ["60+", "Objects"],
              ["100%", "Vetted"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-2xl text-[#0a1128]">{n}</p>
                <p className="mt-1 font-body text-[11px] uppercase tracking-wide text-[#0a1128]/45">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
