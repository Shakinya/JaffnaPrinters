import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { products, type Product } from '../data/products';

const CART_STORAGE_KEY = 'jaffna-product-cart-v2';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoredCartEntry {
  id: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  setCartItem: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getQuantity: (productId: string) => number;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

function loadCartFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const stored: StoredCartEntry[] = JSON.parse(raw);
    return stored
      .map(({ id, quantity }) => {
        const product = products.find((p) => p.id === id);
        if (!product || quantity < 1) return null;
        return { product, quantity };
      })
      .filter((item): item is CartItem => Boolean(item));
  } catch {
    return [];
  }
}

function saveCartToStorage(items: CartItem[]) {
  const payload: StoredCartEntry[] = items.map(({ product, quantity }) => ({
    id: product.id,
    quantity,
  }));
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(payload));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(loadCartFromStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveCartToStorage(items);
  }, [items, hydrated]);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const addToCart = useCallback((product: Product, quantity = 1) => {
    const qty = Math.max(1, Math.floor(quantity));
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item,
        );
      }
      return [...prev, { product, quantity: qty }];
    });
  }, []);

  const setCartItem = useCallback((product: Product, quantity: number) => {
    const qty = Math.floor(quantity);
    if (qty <= 0) {
      setItems((prev) => prev.filter((item) => item.product.id !== product.id));
      return;
    }
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: qty } : item,
        );
      }
      return [...prev, { product, quantity: qty }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    const qty = Math.floor(quantity);
    if (qty <= 0) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item,
      ),
    );
  }, []);

  const getQuantity = useCallback(
    (productId: string) => items.find((item) => item.product.id === productId)?.quantity ?? 0,
    [items],
  );

  const isInCart = useCallback(
    (productId: string) => items.some((item) => item.product.id === productId),
    [items],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      totalItems,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((open) => !open),
      addToCart,
      setCartItem,
      removeFromCart,
      clearCart,
      updateQuantity,
      getQuantity,
      isInCart,
    }),
    [items, totalItems, isOpen, addToCart, setCartItem, removeFromCart, clearCart, updateQuantity, getQuantity, isInCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
