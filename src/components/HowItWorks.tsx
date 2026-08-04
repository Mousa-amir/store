const BUY_STEPS = [
  {
    n: "01",
    title: "Browse the Archive",
    text: "Explore all 60 pieces across Avant-Garde Apparel, Haute Timepieces and Cyber-Luxury Tech using the category filters or search bar.",
  },
  {
    n: "02",
    title: "Add to Your Bag",
    text: "Hover any product card and select “Add to Bag”. Your selections are held locally in the cart drawer — no account required to start.",
  },
  {
    n: "03",
    title: "Review & Confirm",
    text: "Open the cart drawer to adjust quantities, remove items, and review your running total before proceeding.",
  },
  {
    n: "04",
    title: "Submit Your Order",
    text: "Complete the Direct Order Form at the bottom of the page with your email and order message — our concierge team replies within 24 hours to finalize payment and shipping.",
  },
];

const RETURN_STEPS = [
  {
    n: "01",
    title: "60-Day Window",
    text: "Every AURELIA piece ships with a generous 60-day return window from the delivery date, no questions asked.",
  },
  {
    n: "02",
    title: "Request an RMA",
    text: "Message our concierge via the Direct Order Form referencing your order number to receive a prepaid return authorization label.",
  },
  {
    n: "03",
    title: "Pack Securely",
    text: "Return items in their original packaging with all authenticity cards, dust bags and protective casing intact.",
  },
  {
    n: "04",
    title: "Refund or Exchange",
    text: "Once inspected by our quality team (3–5 business days), choose a full refund to your original payment method or a store credit exchange.",
  },
];

function StepList({ steps }: { steps: typeof BUY_STEPS }) {
  return (
    <ol className="space-y-8">
      {steps.map((s) => (
        <li key={s.n} className="reveal flex gap-5">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0a1128] font-display text-sm text-white">
            {s.n}
          </span>
          <div>
            <h4 className="font-display text-lg text-[#0a1128]">{s.title}</h4>
            <p className="mt-1.5 font-body text-sm leading-relaxed text-[#0a1128]/60">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#f4f7fd] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-accent text-xs uppercase tracking-[0.35em] text-blue-700">Guidance</p>
          <h2 className="font-display text-4xl text-[#0a1128] sm:text-5xl">How It Works</h2>
          <p className="mt-4 font-body text-sm text-[#0a1128]/55">
            A transparent, concierge-driven path from discovery to doorstep — and back again, should you
            ever need it.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-lg shadow-[#0a1128]/5 ring-1 ring-[#0a1128]/5 sm:p-10">
            <p className="mb-8 font-accent text-xs uppercase tracking-[0.3em] text-blue-700">How To Buy</p>
            <StepList steps={BUY_STEPS} />
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-lg shadow-[#0a1128]/5 ring-1 ring-[#0a1128]/5 sm:p-10">
            <p className="mb-8 font-accent text-xs uppercase tracking-[0.3em] text-blue-700">How To Return</p>
            <StepList steps={RETURN_STEPS} />
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { icon: "🛡", title: "Authenticity Guarantee", text: "Every timepiece and tech object ships with a signed certificate of authenticity." },
            { icon: "🚚", title: "Insured Global Shipping", text: "Fully insured, tracked delivery to over 140 countries at no extra cost." },
            { icon: "💬", title: "Concierge Support", text: "A dedicated stylist and technician team available around the clock via the order form." },
          ].map((c) => (
            <div key={c.title} className="reveal rounded-2xl border border-[#0a1128]/10 bg-white p-6">
              <span className="text-2xl">{c.icon}</span>
              <h5 className="mt-3 font-display text-base text-[#0a1128]">{c.title}</h5>
              <p className="mt-1.5 font-body text-xs leading-relaxed text-[#0a1128]/55">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
