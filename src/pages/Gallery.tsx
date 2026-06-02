import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import GradientButton from '../components/ui/GradientButton';
import { galleryItems, galleryCategories } from '../data/gallery';
import { fadeUp, staggerContainer, defaultTransition, cardHover } from '../lib/motion';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const lightboxItem = lightboxId
    ? galleryItems.find((item) => item.id === lightboxId) ?? null
    : null;

  return (
    <div className="overflow-hidden">
      <PageHero
        badge="Our Work"
        minHeight="sm"
        title={
          <>
            Print &amp; Design<br />
            <span className="text-highlight">Gallery</span>
          </>
        }
        description="Browse recent printing, signage, corporate, and event work from Jaffna Printers — quality you can see before you order."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Portfolio"
            title="Featured"
            highlight="Projects"
            subtitle="Filter by category to explore samples across our core print services."
            compact
          />

          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-btn text-sm font-display font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-gradient text-white shadow-md shadow-brand-red/25'
                    : 'bg-slate-50 text-slate-600 border border-slate-100 hover:border-brand-red/25 hover:text-brand-red'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.figure
                  key={item.id}
                  layout
                  variants={fadeUp}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={defaultTransition}
                  whileHover={cardHover}
                  className={`break-inside-avoid group relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 cursor-pointer ${
                    item.tall ? 'sm:mb-1' : ''
                  }`}
                  onClick={() => setLightboxId(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxId(item.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between gap-3">
                    <div>
                      <span className="text-[10px] sm:text-xs font-display font-bold uppercase tracking-wider text-brand-gold">
                        {item.category}
                      </span>
                      <p className="font-display font-bold text-white text-base sm:text-lg leading-tight mt-0.5">
                        {item.title}
                      </p>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 group-hover:bg-brand-red transition-colors duration-300">
                      <ZoomIn className="w-4 h-4" aria-hidden />
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-12">No items in this category yet.</p>
          )}
        </div>
      </section>

      <section className="section-padding bg-slate-50 border-t border-slate-100">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-brand-charcoal text-2xl sm:text-3xl mb-3">
            Want something like this?
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Share your idea or reference image — we&apos;ll quote materials, finishes, and delivery for your project.
          </p>
          <GradientButton to="/contact" size="lg">
            Request a Quote
          </GradientButton>
        </div>
      </section>

      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm"
            onClick={() => setLightboxId(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxItem.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={defaultTransition}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxId(null)}
                className="absolute -top-12 right-0 sm:-right-2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                <div>
                  <p className="text-brand-gold text-xs font-display font-bold uppercase tracking-wider">
                    {lightboxItem.category}
                  </p>
                  <p className="font-display font-bold text-xl">{lightboxItem.title}</p>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary text-sm px-6 py-2.5 shrink-0 justify-center"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
