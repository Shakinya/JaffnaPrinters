import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, defaultTransition } from '../../lib/motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  light = false,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className={`mb-14 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <motion.div
          variants={fadeUp}
          transition={defaultTransition}
          className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}
        >
          <motion.span
            className="h-px bg-brand-gold origin-right"
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase font-display">
            {badge}
          </span>
          <motion.span
            className="h-px bg-brand-gold origin-left"
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        transition={{ ...defaultTransition, delay: 0.05 }}
        className={`font-display font-bold text-4xl sm:text-5xl leading-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-slate-300' : 'text-slate-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
