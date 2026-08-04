import { useStore } from "../context/StoreContext";
import { formatPrice } from "../data/products";

export default function CartDrawer() {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQty, cartTotal } = useStore();

  return (
    <>
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 z-[80] bg-[#060a1a]/60 backdrop-blur-sm transition-opacity duration-500 ${
          isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#0a1128]/10 px-6 py-5">
          <h3 className="font-display text-xl text-[#0a1128]">Your Bag ({cart.length})</h3>
          <button
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0a1128]/15 text-[#0a1128] hover:border-blue-600 hover:text-blue-700"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <span className="text-3xl">🛍️</span>
              <p className="font-body text-sm text-[#0a1128]/50">Your bag is empty. Start exploring the archive.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {cart.map((line) => (
                <li key={line.product.id} className="flex gap-4">
                  <img
                    src={line.product.image}
                    alt={line.product.name}
                    className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-display text-sm leading-snug text-[#0a1128]">{line.product.name}</p>
                      <button
                        onClick={() => removeFromCart(line.product.id)}
                        aria-label="Remove item"
                        className="text-[#0a1128]/35 hover:text-red-600"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="mt-1 font-body text-xs text-[#0a1128]/45">{line.product.category}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-[#0a1128]/15 px-1">
                        <button
                          onClick={() => updateQty(line.product.id, line.qty - 1)}
                          className="flex h-7 w-7 items-center justify-center text-[#0a1128]"
                        >
                          −
                        </button>
                        <span className="w-5 text-center font-body text-sm">{line.qty}</span>
                        <button
                          onClick={() => updateQty(line.product.id, line.qty + 1)}
                          className="flex h-7 w-7 items-center justify-center text-[#0a1128]"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-display text-sm text-[#0a1128]">
                        {formatPrice(line.product.price * line.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-[#0a1128]/10 px-6 py-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-accent text-xs uppercase tracking-wide text-[#0a1128]/60">Estimated Total</span>
            <span className="font-display text-xl text-[#0a1128]">{formatPrice(cartTotal)}</span>
          </div>
          <a
            href="#order"
            onClick={() => setCartOpen(false)}
            data-cursor-hover
            className="block w-full rounded-full bg-[#0a1128] py-4 text-center font-accent text-xs uppercase tracking-[0.2em] text-white transition hover:bg-blue-700"
          >
            Proceed to Order Form
          </a>
        </div>
      </aside>
    </>
  );
}
