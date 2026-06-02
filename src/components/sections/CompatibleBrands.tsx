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
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-items-center ${
            compact ? 'gap-5 sm:gap-7 lg:gap-8' : 'gap-6 sm:gap-8 lg:gap-10'
          }`}
        >
          {compatibleBrands.map((brand) => (
            <motion.div
              key={brand.id}
              variants={fadeUp}
              whileHover={{ scale: 1.06, y: -4 }}
              transition={defaultTransition}
              className="flex items-center justify-center w-full px-2"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} — compatible print brand`}
                className={`w-auto max-w-full object-contain transition-opacity duration-300 hover:opacity-90 ${
                  compact ? 'h-12 sm:h-16 lg:h-24' : 'h-14 sm:h-[4.5rem] lg:h-28'
                }`}
                loading="lazy"
              />
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
