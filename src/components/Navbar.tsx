import { useEffect, useState } from "react";
import { useStore } from "../context/StoreContext";

const LINKS = [
  { href: "#collection", label: "Collection" },
  { href: "#story", label: "Our Story" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#order", label: "Order Form" },
];

export default function Navbar() {
  const { cartCount, wishlist, setCartOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(10,17,40,0.08)] py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl tracking-wide text-[#0a1128]" data-cursor-hover>
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-600 to-[#0a1128]" />
          AURELIA
        </a>

        <nav className="hidden items-center gap-9 font-accent text-[13px] uppercase tracking-[0.14em] text-[#0a1128]/80 lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="relative py-1 transition hover:text-blue-700 group" data-cursor-hover>
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-[#0a1128]/15 text-[#0a1128] transition hover:border-blue-600 hover:text-blue-700 sm:flex"
            aria-label="Wishlist"
            data-cursor-hover
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 21s-7.5-4.6-10-9.1C.5 8.5 2 5 5.6 4.3 8 3.8 10 5 12 7.4c2-2.4 4-3.6 6.4-3.1C22 5 23.5 8.5 22 11.9 19.5 16.4 12 21 12 21z" />
            </svg>
            {wishlist.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-700 text-[10px] font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setCartOpen(true)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#0a1128]/15 text-[#0a1128] transition hover:border-blue-600 hover:text-blue-700"
            aria-label="Open cart"
            data-cursor-hover
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6 4.5 2H2" />
              <circle cx="9.5" cy="20" r="1.4" />
              <circle cx="17.5" cy="20" r="1.4" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#0a1128] text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0a1128]/15 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-1 border-t border-[#0a1128]/10 bg-white px-6 py-4 lg:hidden">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2.5 font-accent text-sm uppercase tracking-wide text-[#0a1128]">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
