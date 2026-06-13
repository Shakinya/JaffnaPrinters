import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import GradientButton from '../components/ui/GradientButton';
import { galleryItems, galleryCategories, type GalleryItem } from '../data/gallery';
import { defaultTransition, viewportOnce } from '../lib/motion';
import { splitIntoMasonryColumns, useMasonryColumnCount } from '../lib/masonry';
import { pageHeroBackgrounds } from '../data/pageHeroBackgrounds';

function GalleryPin({
  item,
  onOpen,
  index,
}: {
  item: GalleryItem;
  onOpen: (id: string) => void;
  index: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{
        duration: 0.38,
        delay: index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="gallery-pin group"
      onClick={() => onOpen(item.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(item.id);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="gallery-pin-img"
        loading="lazy"
        decoding="async"
      />
      <span className="gallery-pin-zoom" aria-hidden>
        <Expand className="w-4 h-4" />
      </span>
      <figcaption className="gallery-pin-overlay">
        <span className="gallery-pin-category">{item.category}</span>
        <span className="gallery-pin-title">{item.title}</span>
      </figcaption>
    </motion.figure>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const columnCount = useMasonryColumnCount();

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const masonryColumns = useMemo(
    () => splitIntoMasonryColumns(filtered, columnCount),
    [filtered, columnCount],
  );

  const lightboxItem =
    lightboxIndex !== null ? filtered[lightboxIndex] ?? null : null;

  const openLightbox = useCallback((id: string) => {
    const index = filtered.findIndex((item) => item.id === id);
    if (index >= 0) setLightboxIndex(index);
  }, [filtered]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null || filtered.length === 0 ? null : (i - 1 + filtered.length) % filtered.length,
    );
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null || filtered.length === 0 ? null : (i + 1) % filtered.length,
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeCategory]);

  return (
    <div className="overflow-hidden mt-5">
      <PageHero
        badge="Our Work"
        minHeight="sm"
        title={
          <>
            Print &amp; Design<br />
            <span className="text-highlight">Gallery</span>
          </>
        }
        description= {
          <span className="text-slate-100">"Browse recent printing, signage, corporate, and event work from Jaffna Printers — quality you can see before you order."
          </span>
        }  
        backgroundImage={pageHeroBackgrounds.gallery.src}
        backgroundAlt={pageHeroBackgrounds.gallery.alt}
      />

      <section className="section-padding bg-gradient-to-b from-white via-slate-50/40 to-white">
        <div className="container-custom">
          <SectionHeader
            badge="Portfolio"
            title="Featured"
            highlight="Projects"
            subtitle={`${galleryItems.length} samples across corporate branding, events, signage, and personalized print.`}
            compact
          />

          <div className="gallery-filter-bar" role="tablist" aria-label="Filter gallery by category">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`gallery-filter-btn ${
                  activeCategory === cat ? 'gallery-filter-btn--active' : 'gallery-filter-btn--idle'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="gallery-masonry"
              aria-label="Gallery masonry grid"
            >
              {masonryColumns.map((column, columnIndex) => (
                <div key={`${activeCategory}-col-${columnIndex}`} className="gallery-masonry-col">
                  <AnimatePresence mode="popLayout">
                    {column.map((item, itemIndex) => (
                      <GalleryPin
                        key={item.id}
                        item={item}
                        onOpen={openLightbox}
                        index={columnIndex + itemIndex * masonryColumns.length}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-12">No items in this category yet.</p>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightboxItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="gallery-lightbox-close"
              aria-label="Close preview"
            >
              <X className="w-5 h-5 shrink-0" />
              <span>Close</span>
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={defaultTransition}
              className="relative w-full max-w-[min(95vw,1400px)] flex flex-col items-center pt-12 sm:pt-14"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                key={lightboxItem.id}
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full max-h-[min(78vh,900px)] object-contain rounded-xl shadow-2xl"
              />

              <div className="mt-4 text-center max-w-lg px-2">
                <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-bold font-display uppercase tracking-wider text-brand-red bg-white/10 mb-2">
                  {lightboxItem.category}
                </span>
                <h3 className="font-display font-bold text-white text-lg sm:text-xl">
                  {lightboxItem.title}
                </h3>
                {filtered.length > 1 && (
                  <p className="mt-2 text-white/50 text-sm">
                    {lightboxIndex + 1} / {filtered.length}
                  </p>
                )}
              </div>

              <div className="mt-5 flex flex-col items-center gap-3">
                <Link
                  to="/contact"
                  className="btn-primary text-sm px-6 py-2.5 justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  Get a Quote
                </Link>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="text-white/60 hover:text-white text-sm font-medium transition-colors"
                >
                  Tap outside or press Esc to close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
