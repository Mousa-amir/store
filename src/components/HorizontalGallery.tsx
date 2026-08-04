import { useRef } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const featured = products.filter((p) => p.tag === "New" || p.tag === "Limited").slice(0, 10);

export default function HorizontalGallery() {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: number) => {
    rowRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#f4f7fd] py-24">
      <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6 px-6 lg:px-10">
        <div>
          <p className="mb-3 font-accent text-xs uppercase tracking-[0.35em] text-blue-700">Editor's Selection</p>
          <h2 className="font-display text-4xl text-[#0a1128] sm:text-5xl">Fresh &amp; Limited Drops</h2>
          <p className="mt-3 max-w-lg font-body text-sm text-[#0a1128]/55">
            Drag, swipe or scroll horizontally to browse this rotating edit of new arrivals and
            limited-run pieces before they retire permanently.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => scrollBy(-1)}
            data-cursor-hover
            aria-label="Scroll left"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0a1128]/15 bg-white text-[#0a1128] transition hover:border-blue-600 hover:text-blue-700"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(1)}
            data-cursor-hover
            aria-label="Scroll right"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0a1128]/15 bg-white text-[#0a1128] transition hover:border-blue-600 hover:text-blue-700"
          >
            →
          </button>
        </div>
      </div>

      <div ref={rowRef} className="snap-row mt-10">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} wide />
        ))}
      </div>
    </section>
  );
}
