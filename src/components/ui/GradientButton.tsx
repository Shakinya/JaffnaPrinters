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
    md: 'px-7 py-3 text-base',
    lg: 'px-8 py-3.5 text-base',
  };

  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'text-brand-red font-semibold font-display hover:text-brand-red-600 bg-transparent',
  };

  const baseClass = `inline-flex items-center justify-center gap-2 rounded-btn font-display transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClass}
    >
      {children}
    </motion.span>
  );

  if (to) return <Link to={to}>{content}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  return <button onClick={onClick}>{content}</button>;
}
