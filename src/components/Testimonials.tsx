const REVIEWS = [
  {
    name: "Isabelle Marchetti",
    role: "Creative Director, Paris",
    quote:
      "The Aetheris Chrono-IV is unlike anything in my collection. The finishing rivals houses charging triple the price.",
    rating: 5,
  },
  {
    name: "Kenji Osato",
    role: "Product Designer, Tokyo",
    quote:
      "Ordering through the direct form felt personal — a real human replied within hours to confirm every detail.",
    rating: 5,
  },
  {
    name: "Amara Osei",
    role: "Architect, Lagos",
    quote:
      "Vanguard Matte Trench is architecture you can wear. The silhouette holds its structure beautifully after months of use.",
    rating: 5,
  },
  {
    name: "Lucas Ferreira",
    role: "Tech Investor, Lisbon",
    quote:
      "Onyx Horizon Pods sound incredible, and the returns process for my exchange was refreshingly painless.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#0a1128] py-28">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 font-accent text-xs uppercase tracking-[0.35em] text-blue-300">Client Voices</p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">Trusted by Tastemakers</h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <div key={r.name} className="reveal flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex gap-1 text-blue-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < r.rating ? "opacity-100" : "opacity-25"}>★</span>
                ))}
              </div>
              <p className="flex-1 font-body text-sm leading-relaxed text-white/75">“{r.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-sm text-white">{r.name}</p>
                <p className="font-body text-xs text-white/45">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
