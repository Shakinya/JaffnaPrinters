import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  ArrowRight,
  Eye,
  ShoppingCart,
  X,
  Check,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import GradientButton from '../components/ui/GradientButton';
import PageHero from '../components/ui/PageHero';
import { QuantityControl } from '../components/cart/CartSidebar';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { useCart } from '../context/CartContext';
import { products, productCategories, type Product } from '../data/products';
import { getProductWhatsAppUrl } from '../lib/whatsapp';
import { pageHeroBackgrounds } from '../data/pageHeroBackgrounds';
import { cardHover, defaultTransition } from '../lib/motion';

interface ProductActionButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'default' | 'cart' | 'whatsapp';
  active?: boolean;
  compact?: boolean;
}

function ProductActionButton({
  label,
  onClick,
  href,
  variant = 'default',
  active,
  compact = false,
}: ProductActionButtonProps) {
  const variants = {
    default: compact
      ? 'bg-gray-200 text-gray-600 border border-gray-400 hover:bg-gray-800 hover:text-white hover:border-slate-800'
      : 'bg-white/95 text-brand-charcoal hover:bg-white hover:text-white shadow-md',
    cart: active
      ? 'bg-brand-red text-white border border-brand-red shadow-md shadow-brand-red/30'
      : compact
        ? 'bg-red-100 text-red-600 border border-red-300 hover:bg-brand-red hover:text-white hover:border-brand-red'
        : 'bg-white/95 text-brand-charcoal hover:bg-brand-red hover:text-white shadow-md',
    whatsapp: compact
      ? 'bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white hover:border-[#25D366]'
      : 'bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-md shadow-[#25D366]/30',
  };

  const baseClass = compact
    ? `flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-300 ${variants[variant]}`
    : `flex flex-col items-center justify-center gap-1 min-w-[4.25rem] px-2 py-2 rounded-xl text-[10px] font-display font-semibold transition-all duration-300 ${variants[variant]}`;

  const content = compact ? (
    <>
      {variant === 'default' && <Eye className="w-4 h-4" />}
      {variant === 'cart' && (active ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />)}
      {variant === 'whatsapp' && <WhatsAppIcon className="w-4 h-4" />}
    </>
  ) : (
    <>
      {variant === 'default' && <Eye className="w-4 h-4" />}
      {variant === 'cart' && (active ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />)}
      {variant === 'whatsapp' && <WhatsAppIcon className="w-4 h-4" />}
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={baseClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={label} title={label} className={baseClass}>
      {content}
    </button>
  );
}

function ProductDetailModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { getQuantity, setCartItem, isInCart, openCart } = useCart();
  const [quantity, setQuantity] = useState(() => Math.max(1, getQuantity(product.id) || 1));

  useEffect(() => {
    setQuantity(Math.max(1, getQuantity(product.id) || 1));
  }, [product.id, getQuantity]);

  const inCart = isInCart(product.id);

  const handleAddToCart = () => {
    setCartItem(product, quantity);
    openCart();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} details`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={defaultTransition}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-slate-600 hover:text-brand-red flex items-center justify-center shadow-md transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid sm:grid-cols-2">
          <div className="aspect-[4/3] sm:aspect-auto sm:min-h-[320px] bg-slate-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 sm:p-8 flex flex-col">
            <span className="text-xs text-brand-red-600 font-bold tracking-wider uppercase font-display mb-2">
              {product.category}
            </span>
            <h2 className="font-display font-bold text-slate-900 text-2xl mb-3">{product.name}</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((f) => (
                <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                  {f}
                </span>
              ))}
            </div>

            <div className="mb-6">
              <p className="text-xs font-display font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Quantity
              </p>
              <QuantityControl
                quantity={quantity}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                onIncrease={() => setQuantity((q) => q + 1)}
              />
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
              <ProductActionButton
                label={inCart ? 'Update Cart' : 'Add to Cart'}
                variant="cart"
                active={inCart}
                onClick={handleAddToCart}
              />
              <ProductActionButton
                label="Order Now"
                variant="whatsapp"
                href={getProductWhatsAppUrl(product, quantity)}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductCard({
  product,
  index,
  inCart,
  onViewDetail,
  onAddToCart,
}: {
  product: Product;
  index: number;
  inCart: boolean;
  onViewDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={cardHover}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-brand-red/30 hover:shadow-card transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.popular && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-btn bg-brand-red text-white text-xs font-bold font-display">
            <Star className="w-3 h-3 fill-white" /> Popular
          </div>
        )}
      </div>
      <div className="p-5 sm:p-6 flex gap-3 items-start">
        <div className="flex-1 min-w-0">
          <span className="text-xs text-brand-red-600 font-bold tracking-wider uppercase font-display">
            {product.category}
          </span>
          <h3 className="font-display font-bold text-slate-900 text-xl mb-2 leading-tight">{product.name}</h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{product.description}</p>
        </div>
        <div className="flex flex-col gap-2 shrink-0">
          <ProductActionButton
            label="View details"
            variant="default"
            compact
            onClick={() => onViewDetail(product)}
          />
          <ProductActionButton
            label={inCart ? 'Added to cart' : 'Add to cart'}
            variant="cart"
            compact
            active={inCart}
            onClick={() => onAddToCart(product)}
          />
          <ProductActionButton
            label="Order now on WhatsApp"
            variant="whatsapp"
            compact
            href={getProductWhatsAppUrl(product, 1)}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [cartNotice, setCartNotice] = useState<string | null>(null);
  const { addToCart, isInCart } = useCart();

  useEffect(() => {
    if (!cartNotice) return;
    const timer = window.setTimeout(() => setCartNotice(null), 2600);
    return () => window.clearTimeout(timer);
  }, [cartNotice]);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (activeCategory !== 'All' && product.category !== activeCategory) return false;
      return true;
    });
  }, [activeCategory]);

  const handleQuickAdd = (product: Product) => {
    addToCart(product, 1);
    setCartNotice(`${product.name} added to cart`);
  };

  return (
    <div className="overflow-hidden">
      <PageHero
        badge="Print Products"
        minHeight="md"
        title={
          <>
            Everything You Need<br />
            <span className="text-gradient">to Print & Brand</span>
          </>
        }
        description="Browse by category — promotional items, corporate print, events, signage, awards, and more."
        backgroundImage={pageHeroBackgrounds.products.src}
        backgroundAlt={pageHeroBackgrounds.products.alt}
      />

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <p className="text-center text-xs font-display font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Main Categories
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 sm:gap-3 mb-6 justify-center"
          >
            {productCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-btn text-sm font-semibold font-display transition-colors duration-300 ${
                  activeCategory === cat
                    ? 'text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-red hover:text-brand-red'
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="product-filter-pill"
                    className="absolute inset-0 bg-brand-red rounded-btn shadow-md shadow-brand-red/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>

          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-slate-500 text-sm">
              Showing <span className="font-semibold text-slate-900">{filtered.length}</span> product
              {filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'All' && (
                <span className="text-slate-400">
                  {' '}
                  in <span className="text-slate-700">{activeCategory}</span>
                </span>
              )}
            </p>
            <GradientButton to="/contact" size="sm">
              Request Custom Print
            </GradientButton>
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                    inCart={isInCart(product.id)}
                    onViewDetail={setDetailProduct}
                    onAddToCart={handleQuickAdd}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 rounded-2xl bg-white border border-slate-100"
              >
                <p className="text-slate-600 font-medium">No products match this filter.</p>
                <button
                  type="button"
                  onClick={() => setActiveCategory('All')}
                  className="mt-4 text-sm font-semibold text-brand-red font-display hover:underline"
                >
                  View all products
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader badge="How It Works" title="Ordering is" highlight="Easy" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Choose Product', desc: 'Pick a category that fits your need.' },
              { step: '02', title: 'Share Details', desc: 'Send us your artwork, specifications, and quantity.' },
              { step: '03', title: 'Approve Proof', desc: 'We create a digital proof for your approval.' },
              { step: '04', title: 'Receive Order', desc: 'Your order is printed and delivered to you.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-brand-red/15 font-display font-black text-7xl leading-none mb-4">{s.step}</div>
                <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-red">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="red-surface-panel max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-3">
              Can&apos;t find what you need?
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-6 max-w-lg mx-auto">
              We offer fully custom print solutions. Contact our team for a free quote.
            </p>
            <GradientButton to="/contact" variant="light" size="lg" className="w-full sm:w-auto justify-center">
              Talk to Us <ArrowRight className="w-5 h-5 shrink-0" />
            </GradientButton>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {detailProduct && (
          <ProductDetailModal product={detailProduct} onClose={() => setDetailProduct(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartNotice && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] px-5 py-3 rounded-btn bg-brand-charcoal text-white text-sm font-display font-semibold shadow-xl flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-brand-gold shrink-0" />
            {cartNotice}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
