import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type CartLine = {
  packId: string;
  quantity: number;
  flavours: string[];
};

type CartValue = {
  lines: CartLine[];
  count: number;
  add: (line: CartLine) => void;
  clear: () => void;
};

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const add = useCallback((line: CartLine) => {
    setLines((prev) => {
      const i = prev.findIndex(
        (l) => l.packId === line.packId && l.flavours.join() === line.flavours.join(),
      );
      if (i === -1) return [...prev, line];
      const next = [...prev];
      next[i] = { ...next[i]!, quantity: next[i]!.quantity + line.quantity };
      return next;
    });
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartValue>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      add,
      clear,
    }),
    [lines, add, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
