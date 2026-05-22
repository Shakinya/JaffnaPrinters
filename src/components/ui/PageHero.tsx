import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeDown, fadeUp, staggerContainer, defaultTransition } from '../../lib/motion';

interface PageHeroProps {
  badge: string;
  title: ReactNode;
  description: string;
  minHeight?: 'sm' | 'md' | 'lg';
}

const heights = {
  sm: 'min-h-[32vh]',
  md: 'min-h-[38vh]',
  lg: 'min-h-[42vh]',
};

export default function PageHero({ badge, title, description, minHeight = 'lg' }: PageHeroProps) {
  return (
    <section className={`relative ${heights[minHeight]} flex items-end bg-slate-50 overflow-hidden pt-[7.5rem]`}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
      <motion.div
        className="absolute top-1/3 -right-20 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom relative z-10 pb-14 sm:pb-16">
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.span
            variants={fadeDown}
            transition={defaultTransition}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-btn bg-brand-red/10 text-brand-red text-xs font-semibold font-display tracking-widest uppercase mb-5"
          >
            {badge}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.08 }}
            className="font-display font-bold text-brand-charcoal text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.16 }}
            className="text-slate-600 text-lg sm:text-xl max-w-2xl"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
