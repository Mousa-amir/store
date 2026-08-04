import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const WORD_LIMIT = 100;

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

export default function OrderForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const wordCount = useMemo(() => countWords(message), [message]);
  const isOverLimit = wordCount > WORD_LIMIT;
  const isNearLimit = wordCount >= WORD_LIMIT - 15 && !isOverLimit;

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const words = value.trim().split(/\s+/).filter(Boolean);

    if (words.length > WORD_LIMIT) {
      const truncated = words.slice(0, WORD_LIMIT).join(" ");
      setMessage(truncated);
      return;
    }
    setMessage(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isOverLimit || !email || !message) return;

    setLoading(true);

    const templateParams = {
      user_email: email,
      product_name: "Custom Order Request",
      total_price: message,
    };

    emailjs
      .send(
        "service_3av9lsq",
        "template_6fjus7r",
        templateParams,
        "zwXRxuCi3DmA-6QZx"
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to send order email:", error);
        alert("Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section id="order" className="relative overflow-hidden bg-[#f4f7fd] py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="mb-3 font-accent text-xs uppercase tracking-[0.35em] text-blue-700">Concierge</p>
          <h2 className="font-display text-4xl text-[#0a1128] sm:text-5xl">Direct Order Form</h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm text-[#0a1128]/55">
            Ready to acquire a piece, request a custom fit, or start a return? Send a direct message to
            our concierge desk — no account or payment details are collected here.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-6 rounded-3xl bg-white p-8 shadow-xl shadow-[#0a1128]/5 ring-1 ring-[#0a1128]/5 sm:p-10"
        >
          <div>
            <label htmlFor="order-email" className="mb-2 block font-accent text-xs uppercase tracking-wide text-[#0a1128]/70">
              User Email Address
            </label>
            <input
              id="order-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[#0a1128]/15 bg-white px-5 py-3.5 font-body text-sm text-[#0a1128] placeholder:text-[#0a1128]/30 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="order-message" className="font-accent text-xs uppercase tracking-wide text-[#0a1128]/70">
                Your Order Message
              </label>
            </div>
            <textarea
              id="order-message"
              name="message"
              required
              rows={6}
              value={message}
              onChange={handleMessageChange}
              placeholder="Tell us which piece(s) you'd like, sizing, engraving requests, or a return/exchange reference number…"
              className={`w-full resize-none rounded-xl border bg-white px-5 py-3.5 font-body text-sm text-[#0a1128] placeholder:text-[#0a1128]/30 focus:outline-none transition-colors ${
                isOverLimit ? "border-red-500 focus:border-red-500" : "border-[#0a1128]/15 focus:border-blue-600"
              }`}
            />
            <div className="mt-2 flex items-center justify-between">
              <span
                className={`font-accent text-[11px] uppercase tracking-wide transition-colors ${
                  isOverLimit ? "font-bold text-red-600" : isNearLimit ? "text-amber-600" : "text-[#0a1128]/40"
                }`}
              >
                Words: {wordCount} / {WORD_LIMIT}
              </span>
              {isOverLimit && (
                <span className="font-body text-[11px] font-semibold text-red-600">Limit reached — text truncated</span>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isOverLimit || !email || !message || loading}
            data-cursor-hover
            className={`w-full rounded-full py-4 font-accent text-xs uppercase tracking-[0.2em] transition ${
              isOverLimit || !email || !message || loading
                ? "cursor-not-allowed bg-[#0a1128]/20 text-[#0a1128]/50"
                : "bg-[#0a1128] text-white hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : submitted ? "Message Sent ✓" : "Send Order Message"}
          </button>

          <p className="text-center font-body text-[11px] text-[#0a1128]/40">
            We never ask for passwords or card numbers through this form. All checkout details are
            confirmed securely by our concierge team via email.
          </p>
        </form>
      </div>
    </section>
  );
}
