import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import { compatibleBrands } from '../../data/brands';
import { fadeUp, staggerContainer, defaultTransition } from '../../lib/motion';

interface CompatibleBrandsProps {
  subtitle?: string;
  showCta?: boolean;
  className?: string;
  compact?: boolean;
}

export default function CompatibleBrands({
  subtitle = 'Genuine parts, consumables, and technical support for industry-leading print equipment.',
  showCta = true,
  className = '',
  compact = false,
}: CompatibleBrandsProps) {
  return (
    <section className={`section-padding bg-white border-y border-slate-100/80 ${className}`}>
      <div className="container-custom">
        <SectionHeader
          badge="Compatible Brands"
          title="Trusted"
          highlight="Partners"
          subtitle={subtitle}
          compact={compact}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className={`grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 max-w-4xl mx-auto ${
            compact ? 'lg:max-w-3xl' : 'lg:max-w-5xl'
          }`}
        >
          {compatibleBrands.map((brand) => (
            <motion.div
              key={brand.id}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={defaultTransition}
              className="w-full"
            >
              <div
                className={`brand-logo-tile flex flex-col items-center justify-center gap-2 rounded-2xl border transition-all duration-300 hover:border-brand-red/25 hover:shadow-md ${
                  brand.darkLogo
                    ? 'bg-white border-slate-200/90 shadow-sm'
                    : 'bg-slate-50 border-slate-100 hover:bg-white'
                } ${compact ? 'px-3 py-4 sm:px-4 sm:py-5' : 'px-4 py-5 sm:px-5 sm:py-6'}`}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} — compatible print brand`}
                  className={`w-auto max-w-full object-contain ${
                    compact ? 'h-10 sm:h-12 lg:h-14' : 'h-11 sm:h-14 lg:h-16'
                  }`}
                  loading="lazy"
                />
                <span className="font-display text-[0.65rem] sm:text-xs font-semibold text-slate-500 tracking-wide uppercase">
                  {brand.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {showCta && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-center text-slate-500 text-sm max-w-lg mx-auto leading-relaxed ${compact ? 'mt-6' : 'mt-10'}`}
          >
            Need parts or service for your press?{' '}
            <Link
              to="/printtech"
              className="font-semibold text-brand-red font-display hover:text-brand-red-700 transition-colors"
            >
              Explore PrintTech
            </Link>
          </motion.p>
        )}
      </div>
    </section>
  );
}
