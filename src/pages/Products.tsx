import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import GradientButton from '../components/ui/GradientButton';
import PageHero from '../components/ui/PageHero';
import {
  products,
  productCategories,
  getSubcategoriesForCategory,
  type Product,
} from '../data/products';
import { cardHover } from '../lib/motion';

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={cardHover}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-brand-red/30 hover:shadow-card transition-shadow duration-400"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600"
          style={{ transform: 'scale(1.01)' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.01)')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {product.popular && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-btn bg-brand-red text-white text-xs font-bold font-display">
            <Star className="w-3 h-3 fill-white" /> Popular
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm text-brand-charcoal font-semibold text-sm rounded-btn font-display hover:bg-brand-red hover:text-white transition-colors duration-300"
          >
            Get Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <span className="text-xs text-brand-red-600 font-bold tracking-wider uppercase font-display">
          {product.category}
        </span>
        <h3 className="font-display font-bold text-slate-900 text-xl mb-2">{product.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {product.features.map((f) => (
            <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
              {f}
            </span>
          ))}
        </div>
        <Link
          to="/contact"
          className="flex items-center gap-1.5 text-sm font-semibold text-brand-red-600 font-display hover:gap-2.5 transition-all duration-300"
        >
          Request a Quote <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('All');

  const subcategories = useMemo(
    () => getSubcategoriesForCategory(activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    setActiveSubcategory('All');
  }, [activeCategory]);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (activeCategory !== 'All' && product.category !== activeCategory) return false;
      if (activeSubcategory !== 'All' && product.name !== activeSubcategory) return false;
      return true;
    });
  }, [activeCategory, activeSubcategory]);

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

          <AnimatePresence mode="wait">
            {subcategories.length > 0 && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mb-8"
              >
                <p className="text-center text-xs font-display font-semibold uppercase tracking-widest text-slate-500 mb-3">
                  Subcategories
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['All', ...subcategories].map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => setActiveSubcategory(sub)}
                      className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium font-display border transition-colors duration-300 ${
                        activeSubcategory === sub
                          ? 'bg-brand-red text-white border-brand-red shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-brand-red/40 hover:text-brand-red'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-slate-500 text-sm">
              Showing <span className="font-semibold text-slate-900">{filtered.length}</span> product
              {filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'All' && (
                <span className="text-slate-400">
                  {' '}
                  in <span className="text-slate-700">{activeCategory}</span>
                  {activeSubcategory !== 'All' && (
                    <>
                      {' '}
                      · <span className="text-slate-700">{activeSubcategory}</span>
                    </>
                  )}
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
                  <ProductCard key={product.id} product={product} index={i} />
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
                  onClick={() => {
                    setActiveCategory('All');
                    setActiveSubcategory('All');
                  }}
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
              { step: '01', title: 'Choose Product', desc: 'Pick a category and subcategory that fits your need.' },
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
    </div>
  );
}
