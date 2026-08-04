const COLUMNS = [
  {
    title: "Shop",
    links: ["Avant-Garde Apparel", "Haute Timepieces", "Cyber-Luxury Tech", "New Arrivals", "Limited Editions"],
  },
  {
    title: "Support",
    links: ["How To Buy", "How To Return", "Shipping Info", "FAQ", "Direct Order Form"],
  },
  {
    title: "Company",
    links: ["Our Story", "Sustainability", "Careers", "Press", "Affiliates"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#060a1a] pt-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-2xl text-white">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500" />
              AURELIA
            </a>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-white/50">
              A private digital atelier curating 60 rare objects across apparel, timepieces and
              cyber-luxury tech — designed to be owned for decades, not seasons.
            </p>
            <div className="mt-6 flex gap-3">
              {["𝕏", "in", "◎", "▶"].map((icon) => (
                <a
                  key={icon}
                  href="#top"
                  data-cursor-hover
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm text-white/70 transition hover:border-blue-400 hover:text-blue-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="font-accent text-xs uppercase tracking-[0.2em] text-white/40">{col.title}</h5>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-body text-sm text-white/65 transition hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="font-body text-xs text-white/40">© {new Date().getFullYear()} AURELIA Luxury Atelier. All rights reserved.</p>
          <p className="font-body text-xs text-white/40">
            Developed by <span className="font-accent text-white/80">Mousa</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
