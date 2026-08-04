const ITEMS = [
  "Free Insured Worldwide Shipping",
  "60-Day Return Window",
  "Lifetime Authenticity Guarantee",
  "Handled by Master Artisans",
  "24/7 Concierge Support",
  "Carbon-Neutral Packaging",
];

export default function TrustMarquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-[#0a1128]/10 bg-[#0a1128] py-4">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-8">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="whitespace-nowrap font-accent text-xs uppercase tracking-[0.25em] text-white/80">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
