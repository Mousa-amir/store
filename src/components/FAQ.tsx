const FAQS = [
  {
    q: "Are payments processed on this page?",
    a: "No. AURELIA does not collect card details or passwords on-site. Every order is finalized manually and securely through our concierge team after you submit the Direct Order Form below.",
  },
  {
    q: "How long does shipping take?",
    a: "Most orders ship within 3–5 business days of confirmation and arrive within 7–14 days depending on destination, fully insured and tracked door-to-door.",
  },
  {
    q: "Can I customize a timepiece or apparel piece?",
    a: "Select pieces support light customization (strap material, sizing, engraving). Mention your request in the order message field and our team will follow up with options.",
  },
  {
    q: "What is your return policy?",
    a: "You have 60 days from delivery to request a return or exchange. See the “How To Return” section above for the full step-by-step process.",
  },
  {
    q: "Do you restock sold-out pieces?",
    a: "Limited-tag pieces are produced in fixed runs and are not restocked. New-tag pieces rotate into the permanent archive if demand and material availability allow.",
  },
  {
    q: "Is there a word limit on the order form message?",
    a: "Yes — to keep requests concise for our team, order messages are capped at 100 words with a live counter shown beneath the textarea.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-white py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <p className="mb-3 font-accent text-xs uppercase tracking-[0.35em] text-blue-700">Support</p>
          <h2 className="font-display text-4xl text-[#0a1128] sm:text-5xl">Frequently Asked Questions</h2>
        </div>

        <div className="mt-14 divide-y divide-[#0a1128]/10 rounded-3xl border border-[#0a1128]/10">
          {FAQS.map((f, i) => (
            <details key={i} className="faq-item group px-6 py-5 sm:px-8" open={i === 0}>
              <summary className="flex items-center justify-between gap-6">
                <span className="font-display text-base text-[#0a1128] sm:text-lg">{f.q}</span>
                <span className="faq-icon flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#f4f7fd] font-body text-lg text-[#0a1128] transition-transform duration-300">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-[#0a1128]/60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
