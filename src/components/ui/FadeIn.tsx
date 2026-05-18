import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, fadeLeft, fadeRight, scaleIn, defaultTransition } from '../../lib/motion';

type Direction = 'up' | 'left' | 'right' | 'scale';

const variants = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
};

interface FadeInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  className,
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={variants[direction]}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
