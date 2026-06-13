import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import { compatibleBrands } from '../../data/brands';
import type { Brand } from '../../data/brands';

interface CompatibleBrandsProps {
  subtitle?: string;
  showCta?: boolean;
  className?: string;
  compact?: boolean;
}

function BrandTile({ brand, compact }: { brand: Brand; compact: boolean }) {
  const logoClass = compact ? 'h-10 sm:h-12' : 'h-11 sm:h-14';

  return (
    <div
      className={`brand-marquee-tile flex flex-col items-center justify-center gap-2 rounded-2xl border transition-colors duration-300 ${
        brand.darkLogo
          ? 'bg-white border-slate-200/90 shadow-sm'
          : 'bg-slate-50 border-slate-100'
      } ${compact ? 'px-4 py-4 sm:px-5 sm:py-5' : 'px-5 py-5 sm:px-6 sm:py-6'}`}
    >
      <img
        src={brand.logo}
        alt={`${brand.name} — compatible print brand`}
        className={`w-auto max-w-full object-contain ${logoClass}`}
        loading="lazy"
        decoding="async"
      />
      <span className="font-display text-[0.65rem] sm:text-xs font-semibold text-slate-500 tracking-wide uppercase whitespace-nowrap">
        {brand.name}
      </span>
    </div>
  );
}

export default function CompatibleBrands({
  subtitle = 'Genuine parts, consumables, and technical support for industry-leading print equipment.',
  showCta = true,
  className = '',
  compact = false,
}: CompatibleBrandsProps) {
  const marqueeBrands = [...compatibleBrands, ...compatibleBrands];

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
      </div>

      <div className="brand-marquee mt-2 sm:mt-4 max-w-6xl mx-auto" aria-label="Compatible print brands">
        <div className="brand-marquee-track">
          {marqueeBrands.map((brand, index) => (
            <BrandTile key={`${brand.id}-${index}`} brand={brand} compact={compact} />
          ))}
        </div>
      </div>

      {showCta && (
        <div className="container-custom">
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
        </div>
      )}
    </section>
  );
}
