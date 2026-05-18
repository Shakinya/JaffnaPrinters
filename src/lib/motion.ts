import type { Transition, Variants } from 'framer-motion';

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.03 },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const defaultTransition: Transition = {
  duration: 0.55,
  ease: easeOut,
};

export const floatAnimation = {
  y: [0, -18, 0],
  x: [0, 8, 0],
};

export const floatTransition: Transition = {
  duration: 7,
  repeat: Infinity,
  ease: 'easeInOut',
};

export const cardHover = {
  y: -6,
  scale: 1.02,
  transition: { duration: 0.25, ease: easeOut },
};
