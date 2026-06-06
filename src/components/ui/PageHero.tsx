import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeDown, fadeUp, staggerContainer, defaultTransition } from '../../lib/motion';

interface PageHeroProps {
  badge: string;
  title: ReactNode;
  description: string;
  minHeight?: 'sm' | 'md' | 'lg';
  backgroundImage: string;
  backgroundAlt?: string;
}

const heights = {
  sm: 'min-h-[32vh]',
  md: 'min-h-[36vh]',
  lg: 'min-h-[40vh]',
};

export default function PageHero({
  badge,
  title,
  description,
  minHeight = 'lg',
  backgroundImage,
  backgroundAlt = '',
}: PageHeroProps) {
  return (
    <section
      className={`page-hero page-hero--image relative ${heights[minHeight]} flex items-end overflow-hidden`}
    >
      <div className="page-hero-media" aria-hidden>
        <img
          src={backgroundImage}
          alt=""
          className="page-hero-bg"
          loading="eager"
          decoding="async"
        />
        <div className="page-hero-vignette" />
        <div className="page-hero-overlay" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red z-20" />

      <div className="container-custom relative z-10 pb-8 sm:pb-10">
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.span
            variants={fadeDown}
            transition={defaultTransition}
            className="page-hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-btn text-brand-red text-xs font-semibold font-display tracking-widest uppercase mb-4"
          >
            {badge}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.08 }}
            className="font-display font-bold text-brand-charcoal text-3xl sm:text-4xl lg:text-5xl leading-tight mb-3 drop-shadow-sm"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.16 }}
            className="text-slate-700 text-base sm:text-lg max-w-2xl font-medium"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {backgroundAlt ? (
        <span className="sr-only">{backgroundAlt}</span>
      ) : null}
    </section>
  );
}
