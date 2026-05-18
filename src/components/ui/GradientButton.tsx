import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface GradientButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function GradientButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: GradientButtonProps) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const variants = {
    primary: 'bg-gradient-to-r from-brand-red to-brand-gold text-slate-900 font-semibold shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50',
    outline: 'border-2 border-brand-gold text-brand-gold font-semibold hover:bg-brand-gold hover:text-slate-900',
    ghost: 'text-white font-semibold hover:text-brand-gold',
  };

  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full font-display transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={baseClass}
    >
      {children}
    </motion.span>
  );

  if (to) return <Link to={to}>{content}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  return <button onClick={onClick}>{content}</button>;
}
