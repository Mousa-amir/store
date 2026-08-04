import { useMemo, useState } from "react";
import { categories, products, type Category } from "../data/products";
import ProductCard from "./ProductCard";

const TABS: (Category | "All")[] = ["All", ...categories];
const PAGE_SIZE = 12;

export default function ProductGrid() {
  const [tab, setTab] = useState<(Category | "All")>("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesTab = tab === "All" || p.category === tab;
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      return matchesTab && matchesQuery;
    });
  }, [tab, query]);

  const shown = filtered.slice(0, visible);

  return (
    <section id="collection" className="relative bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="mb-3 font-accent text-xs uppercase tracking-[0.35em] text-blue-700">The Full Archive</p>
          <h2 className="font-display text-4xl text-[#0a1128] sm:text-5xl">60 Objects. Three Worlds.</h2>
          <p className="mt-4 max-w-xl font-body text-sm text-[#0a1128]/55">
            Filter the complete AURELIA archive by category, or search for a specific piece by name.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-2 rounded-full bg-[#f4f7fd] p-1.5">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                  setVisible(PAGE_SIZE);
                }}
                data-cursor-hover
                className={`rounded-full px-5 py-2.5 font-accent text-xs uppercase tracking-wide transition ${
                  tab === t ? "bg-[#0a1128] text-white shadow-md" : "text-[#0a1128]/60 hover:text-[#0a1128]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-sm">
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Search the archive…"
              className="w-full rounded-full border border-[#0a1128]/15 bg-white px-5 py-3 pl-11 font-body text-sm text-[#0a1128] placeholder:text-[#0a1128]/35 focus:border-blue-600"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0a1128]/35"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          <p className="font-body text-xs text-[#0a1128]/40">
            Showing {shown.length} of {filtered.length} pieces
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((p) => (
            <div key={p.id} className="reveal">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center font-body text-sm text-[#0a1128]/50">
            No pieces match your search. Try another keyword.
          </p>
        )}

        {visible < filtered.length && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              data-cursor-hover
              className="rounded-full border border-[#0a1128]/20 px-9 py-4 font-accent text-xs uppercase tracking-[0.2em] text-[#0a1128] transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Load More Pieces
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
