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
  sm: 'min-h-[40vh]',
  md: 'min-h-[45vh]',
  lg: 'min-h-[55vh]',
};

export default function PageHero({ badge, title, description, minHeight = 'lg' }: PageHeroProps) {
  return (
    <section className={`relative ${heights[minHeight]} flex items-end bg-slate-900 overflow-hidden pt-24`}>
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="container-custom relative z-10 pb-16 sm:pb-20">
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.span
            variants={fadeDown}
            transition={defaultTransition}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold font-display tracking-widest uppercase mb-5"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-brand-gold"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {badge}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.08 }}
            className="font-display font-bold text-white text-5xl sm:text-6xl leading-tight mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.16 }}
            className="text-slate-400 text-xl max-w-2xl"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
