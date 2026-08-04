import { useRef, type MouseEvent } from "react";
import { type Product, formatPrice } from "../data/products";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ product, wide = false }: { product: Product; wide?: boolean }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const wished = isWishlisted(product.id);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-py * 8}deg) rotateY(${px * 10}deg) translateY(-6px)`;
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`tilt-card group relative flex flex-shrink-0 flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-[#0a1128]/8 shadow-lg shadow-[#0a1128]/5 hover:shadow-2xl hover:shadow-blue-900/15 ${
        wide ? "w-[300px] sm:w-[340px]" : "w-full"
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f4f7fd]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1128]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {product.tag && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 font-accent text-[10px] uppercase tracking-wide text-white ${
              product.tag === "Sale" ? "bg-blue-700" : product.tag === "New" ? "bg-[#0a1128]" : "bg-amber-600"
            }`}
          >
            {product.tag}
          </span>
        )}

        <button
          onClick={() => toggleWishlist(product.id)}
          data-cursor-hover
          aria-label="Toggle wishlist"
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur transition ${
            wished ? "bg-blue-700 text-white" : "bg-white/80 text-[#0a1128] hover:bg-white"
          }`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill={wished ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
            <path d="M12 21s-7.5-4.6-10-9.1C.5 8.5 2 5 5.6 4.3 8 3.8 10 5 12 7.4c2-2.4 4-3.6 6.4-3.1C22 5 23.5 8.5 22 11.9 19.5 16.4 12 21 12 21z" />
          </svg>
        </button>

        <button
          onClick={() => addToCart(product)}
          data-cursor-hover
          className="absolute inset-x-3 bottom-3 translate-y-14 rounded-full bg-white/95 py-3 text-center font-accent text-[11px] uppercase tracking-[0.15em] text-[#0a1128] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Add to Bag — {formatPrice(product.price)}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-blue-700/80">{product.category}</p>
        <h3 className="mt-1.5 font-display text-lg leading-snug text-[#0a1128]">{product.name}</h3>
        <p className="mt-1.5 line-clamp-2 font-body text-xs leading-relaxed text-[#0a1128]/55">{product.blurb}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg text-[#0a1128]">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="font-body text-xs text-[#0a1128]/35 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            data-cursor-hover
            aria-label="Add to cart"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0a1128]/15 text-[#0a1128] transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
