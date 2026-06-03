import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Minus, Plus, ShoppingCart, Check } from 'lucide-react';
import { useCart, type CartItem } from '../../context/CartContext';
import { buildCartOrderUrl } from '../../lib/whatsapp';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

function QuantityControl({
  quantity,
  onDecrease,
  onIncrease,
  compact = false,
}: {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  compact?: boolean;
}) {
  const btnClass = compact
    ? 'w-6 h-6 rounded-md border border-slate-200 text-slate-500 hover:border-brand-red hover:text-brand-red flex items-center justify-center transition-colors bg-white'
    : 'w-8 h-8 rounded-lg border border-slate-200 text-slate-600 hover:border-brand-red hover:text-brand-red flex items-center justify-center transition-colors';

  return (
    <div className="inline-flex items-center gap-1">
      <button type="button" onClick={onDecrease} aria-label="Decrease quantity" className={btnClass}>
        <Minus className="w-3 h-3" />
      </button>
      <span className={`font-display font-bold text-brand-charcoal min-w-[1.25rem] text-center ${compact ? 'text-xs' : 'text-base'}`}>
        {quantity}
      </span>
      <button type="button" onClick={onIncrease} aria-label="Increase quantity" className={btnClass}>
        <Plus className="w-3 h-3" />
      </button>
    </div>
  );
}

function CartCheckbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <label className="relative flex items-center justify-center shrink-0 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
        aria-label={label}
      />
      <span
        className={`w-4 h-4 rounded-[5px] border-2 flex items-center justify-center transition-all duration-200 ${
          checked ? 'border-brand-red bg-brand-red' : 'border-slate-300 bg-white hover:border-slate-400'
        }`}
      >
        {checked && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
      </span>
    </label>
  );
}

export default function CartSidebar() {
  const { items, totalItems, isOpen, closeCart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const prevCartIdsRef = useRef<string[]>([]);

  useEffect(() => {
    const currentIds = items.map((item) => item.product.id);
    setSelectedIds((prev) => {
      const next = new Set<string>();
      for (const id of currentIds) {
        if (prev.has(id)) {
          next.add(id);
        } else if (!prevCartIdsRef.current.includes(id)) {
          next.add(id);
        }
      }
      return next;
    });
    prevCartIdsRef.current = currentIds;
  }, [items]);

  const selectedItems = useMemo(
    () => items.filter((item) => selectedIds.has(item.product.id)),
    [items, selectedIds],
  );

  const selectedCount = useMemo(
    () => selectedItems.reduce((sum, item) => sum + item.quantity, 0),
    [selectedItems],
  );

  const allSelected = items.length > 0 && selectedIds.size === items.length;
  const orderUrl = selectedItems.length > 0 ? buildCartOrderUrl(selectedItems) : '';

  const toggleItem = (productId: string, checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(productId);
      else next.delete(productId);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(items.map((item) => item.product.id)));
    }
  };

  const handleClearCart = () => {
    clearCart();
    setSelectedIds(new Set());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/45 backdrop-blur-[3px]"
            onClick={closeCart}
            aria-label="Close cart"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 38 }}
            className="fixed top-0 right-0 bottom-0 z-[120] w-[min(100vw,19.5rem)] sm:w-[20rem] bg-white shadow-[-8px_0_40px_rgba(15,23,42,0.12)] flex flex-col border-l border-slate-100"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="shrink-0 px-4 pt-4 pb-3 border-b border-slate-100 bg-gradient-to-b from-slate-50/90 to-white">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <ShoppingCart className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display font-bold text-brand-charcoal text-base leading-tight truncate">
                      Your Cart
                    </h2>
                    <p className="text-slate-500 text-[11px] mt-0.5">
                      {totalItems} item{totalItems !== 1 ? 's' : ''} total
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-brand-charcoal flex items-center justify-center transition-colors shrink-0"
                  aria-label="Close cart panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {items.length > 0 && (
                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={handleClearCart}
                    className="text-[11px] font-display font-semibold text-slate-500 hover:text-brand-red transition-colors"
                  >
                    Clear Cart
                  </button>
                  <button
                    type="button"
                    onClick={toggleSelectAll}
                    className="text-[11px] font-display font-semibold text-brand-red hover:text-brand-red-700 transition-colors"
                  >
                    {allSelected ? 'Deselect all' : 'Select all'}
                  </button>
                </div>
              )}
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-3 py-3">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 px-2">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
                    <ShoppingCart className="w-7 h-7" />
                  </div>
                  <p className="font-display font-semibold text-slate-700 text-sm mb-1">Your cart is empty</p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Add products from All Products, then order via WhatsApp.
                  </p>
                </div>
              ) : (
                <ul className="space-y-2.5">
                  {items.map(({ product, quantity }: CartItem) => {
                    const isSelected = selectedIds.has(product.id);
                    return (
                      <li
                        key={product.id}
                        className={`rounded-xl border p-2.5 transition-all duration-200 ${
                          isSelected
                            ? 'border-brand-red/25 bg-brand-red/[0.03] shadow-sm'
                            : 'border-slate-100 bg-slate-50/60 opacity-80'
                        }`}
                      >
                        <div className="flex gap-2.5">
                          <div className="pt-1">
                            <CartCheckbox
                              checked={isSelected}
                              onChange={(checked) => toggleItem(product.id, checked)}
                              label={`Select ${product.name} for order`}
                            />
                          </div>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover shrink-0 bg-white border border-slate-100"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] font-display font-bold uppercase tracking-wider text-brand-red truncate">
                              {product.category}
                            </p>
                            <h3 className="font-display font-bold text-slate-900 text-xs leading-snug line-clamp-2">
                              {product.name}
                            </h3>
                            <div className="mt-1.5 flex items-center justify-between gap-1">
                              <QuantityControl
                                compact
                                quantity={quantity}
                                onDecrease={() => updateQuantity(product.id, quantity - 1)}
                                onIncrease={() => updateQuantity(product.id, quantity + 1)}
                              />
                              <button
                                type="button"
                                onClick={() => removeFromCart(product.id)}
                                className="w-6 h-6 rounded-md text-slate-400 hover:text-brand-red hover:bg-red-50 flex items-center justify-center transition-colors"
                                aria-label={`Remove ${product.name} from cart`}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="shrink-0 border-t border-slate-100 p-3 bg-white space-y-2.5">
                <div className="flex items-center justify-between text-xs px-0.5">
                  <span className="text-slate-500">Selected for order</span>
                  <span className="font-display font-bold text-brand-charcoal">
                    {selectedCount} item{selectedCount !== 1 ? 's' : ''}
                  </span>
                </div>

                {selectedItems.length > 0 ? (
                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-display font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-[#25D366] via-[#20bd5a] to-[#1da851] hover:from-[#22c55e] hover:via-[#1fb855] hover:to-[#18924a] shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                      <WhatsAppIcon className="w-4 h-4" />
                    </span>
                    Order via WhatsApp
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-slate-400 font-display font-semibold text-sm bg-slate-100 cursor-not-allowed"
                  >
                    <WhatsAppIcon className="w-4 h-4 opacity-50" />
                    Select items to order
                  </button>
                )}

                <p className="text-[10px] text-center text-slate-400 leading-relaxed px-1">
                  Only checked items will be sent to WhatsApp
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export { QuantityControl };
