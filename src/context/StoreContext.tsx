import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { type Product } from "../data/products";

export interface CartLine {
  product: Product;
  qty: number;
}

interface StoreState {
  cart: CartLine[];
  wishlist: number[];
  isCartOpen: boolean;
  toastMessage: string | null;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  toggleWishlist: (id: number) => void;
  isWishlisted: (id: number) => boolean;
  setCartOpen: (open: boolean) => void;
  cartCount: number;
  cartTotal: number;
}

const StoreContext = createContext<StoreState | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const flashToast = useCallback((msg: string) => {
    setToastMessage(msg);
    window.setTimeout(() => setToastMessage((cur) => (cur === msg ? null : cur)), 2200);
  }, []);

  const addToCart = useCallback(
    (product: Product) => {
      setCart((prev) => {
        const existing = prev.find((line) => line.product.id === product.id);
        if (existing) {
          return prev.map((line) =>
            line.product.id === product.id ? { ...line, qty: line.qty + 1 } : line
          );
        }
        return [...prev, { product, qty: 1 }];
      });
      flashToast(`${product.name} added to bag`);
      setCartOpen(true);
    },
    [flashToast]
  );

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((line) => line.product.id !== id));
  }, []);

  const updateQty = useCallback((id: number, qty: number) => {
    setCart((prev) =>
      prev
        .map((line) => (line.product.id === id ? { ...line, qty: Math.max(1, qty) } : line))
        .filter((line) => line.qty > 0)
    );
  }, []);

  const toggleWishlist = useCallback(
    (id: number) => {
      setWishlist((prev) => {
        if (prev.includes(id)) {
          flashToast("Removed from wishlist");
          return prev.filter((w) => w !== id);
        }
        flashToast("Saved to wishlist");
        return [...prev, id];
      });
    },
    [flashToast]
  );

  const isWishlisted = useCallback((id: number) => wishlist.includes(id), [wishlist]);

  const cartCount = useMemo(() => cart.reduce((sum, l) => sum + l.qty, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((sum, l) => sum + l.qty * l.product.price, 0), [cart]);

  const value: StoreState = {
    cart,
    wishlist,
    isCartOpen,
    toastMessage,
    addToCart,
    removeFromCart,
    updateQty,
    toggleWishlist,
    isWishlisted,
    setCartOpen,
    cartCount,
    cartTotal,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
