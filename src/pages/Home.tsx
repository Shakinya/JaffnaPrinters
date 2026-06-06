import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, CheckCircle, Building2, User,
  Zap, Shield, Award, ChevronRight, Quote,
  Globe, Printer, Package, Palette, BadgeDollarSign,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import GradientButton from '../components/ui/GradientButton';
import FadeIn from '../components/ui/FadeIn';
import ScrollIndicator from '../components/ui/ScrollIndicator';
import CompatibleBrands from '../components/sections/CompatibleBrands';
import { products, testimonials } from '../data/products';
import { companyStats, companyInfo } from '../data/site';
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  staggerFast,
  defaultTransition,
  cardHover,
  dockItem,
  viewportOnce,
} from '../lib/motion';

const valueProps: { icon: LucideIcon; line1: string; line2: string }[] = [
  { icon: Printer, line1: 'High Quality', line2: 'Printing' },
  { icon: Package, line1: 'Parts & Tools', line2: 'Import' },
  { icon: Palette, line1: 'Creative', line2: 'Design' },
  { icon: BadgeDollarSign, line1: 'Affordable', line2: 'Price' },
];

const serviceBar = [
  { icon: Building2, title: 'B2B Printing', desc: 'Corporate & bulk orders' },
  { icon: User, title: 'B2C Printing', desc: 'Personal & event printing' },
  { icon: Award, title: 'Premium Quality', desc: 'ISO-certified production' },
  { icon: Globe, title: 'Import & Export', desc: 'Print machinery parts & tools' },
  { icon: Star, title: 'Customer Satisfaction', desc: '99% happy clients' },
];

const b2bFeatures = [
  'Bulk order discounts up to 40%',
  'Dedicated account manager',
  'Net 30 payment terms',
  'Custom design services',
  'Priority production queue',
  'White-label packaging options',
];

const b2cFeatures = [
  'No minimum order quantity',
  'Online order tracking',
  'Same-day pickup available',
  'Free design consultation',
  'Multiple payment options',
  'PrintTech parts & tools sourcing',
];

function HeroCopy() {
  return (
    <>
      <motion.div
        variants={fadeLeft}
        transition={defaultTransition}
        className="hero-eyebrow"
      >
        <span className="hero-eyebrow-dot" aria-hidden />
        <span className="hero-eyebrow-text">Northern Sri Lanka&apos;s Print Experts</span>
      </motion.div>

      <motion.h1
        variants={fadeLeft}
        transition={{ ...defaultTransition, delay: 0.04 }}
        className="flex flex-col leading-[0.9]"
      >
        <span
          className="
            text-[2.35rem]
            sm:text-[4rem]
            font-black
            uppercase
            tracking-[-2px]
            text-black
            mb-3
          "
        >
          WE PRINT
        </span>

        <span
          className="
            text-[2.35rem]
            sm:text-[4rem]
            font-black
            uppercase
            tracking-[-3px]
            text-red-700
            mb-3.5
          "
        >
          YOUR VISION
        </span>
      </motion.h1>

      <motion.div
        variants={fadeLeft}
        transition={{ ...defaultTransition, delay: 0.04 }}
        className="hero-divider"
        aria-hidden
      />

      <motion.div
        variants={fadeLeft}
        transition={{ ...defaultTransition, delay: 0.05 }}
        className="text-brand-charcoal text-[15px] sm:text-[16px] leading-snug mb-5 max-w-sm"
      >
        <p className="font-semibold">Premium Printing Solutions for</p>
        <p className="font-bold">Businesses &amp; Individuals</p>
      </motion.div>

      <motion.div
        variants={fadeLeft}
        transition={{ ...defaultTransition, delay: 0.1 }}
        className="hero-value-props"
        aria-label="Why choose JaffnaPrinters"
      >
        {valueProps.map(({ icon: Icon, line1, line2 }) => (
          <div key={`${line1}-${line2}`} className="hero-value-prop">
            <div className="hero-value-prop-icon" aria-hidden>
              <Icon className="w-[18px] h-[18px] sm:w-5 sm:h-5" strokeWidth={1.5} />
            </div>
            <p className="hero-value-prop-label">
              <span>{line1}</span>
              <span>{line2}</span>
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeLeft}
        transition={{ ...defaultTransition, delay: 0.14 }}
        className="hero-cta"
      >
        <GradientButton to="/products" size="md" className="hero-cta-primary">
          Explore Products <ArrowRight className="w-4 h-4" />
        </GradientButton>
        <Link to="/contact" className="btn-hero-ghost">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </>
  );
}

const whyUs = [
  {
    icon: Globe,
    title: 'Import & Export',
    desc: 'Genuine printing machine parts, tools, and consumables sourced and supplied through our PrintTech division.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    desc: 'ISO-certified production with color-accurate proofing before every print run.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    desc: 'Recognized as the top printing provider in Northern Sri Lanka for 5 consecutive years.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    desc: 'Quick production on print orders with priority handling for urgent business and event needs.',
  },
];

export default function Home() {
  const featuredProducts = products.filter((p) => p.popular);

  return (
    <div className="overflow-hidden">
      {/* HERO — full-width banner + overlay copy + floating service dock */}
      <section className="hero-cinematic">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          transition={defaultTransition}
          className="hero-cinematic-stage"
        >
          <div className="hero-cinematic-media">
            <img
              src="/hero4.png"
              alt="JaffnaPrinters product showcase — bags, apparel, business cards, packaging, mugs, and print materials"
              className="hero-cinematic-bg"
              loading="eager"
              fetchPriority="high"
              width={1707}
              height={682}
            />
            <div className="hero-cinematic-vignette" />
          </div>
          <div className="hero-cinematic-overlay" aria-hidden />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="hero-cinematic-content"
          >
            <HeroCopy />
          </motion.div>

          <ScrollIndicator />
        </motion.div>

        <div className="container-custom relative z-20 -mt-5 sm:-mt-10 lg:-mt-9">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            <div className="hero-dock">
              <motion.div
                variants={staggerFast}
                initial="hidden"
                animate="show"
                className="hero-dock-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-3 xl:gap-4"
              >
                {serviceBar.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    variants={dockItem}
                    transition={{ ...defaultTransition, delay: 0.28 + i * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="hero-dock-item"
                  >
                    <motion.div
                      className="hero-dock-icon-red"
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
                    </motion.div>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-brand-charcoal text-sm leading-tight">
                        {title}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5 leading-snug">{desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-brand-charcoal py-8 lg:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container-custom relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6"
          >
            {companyStats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="stat-card cursor-default"
              >
                <div className="font-display font-extrabold text-brand-gold text-3xl sm:text-4xl lg:text-5xl drop-shadow-sm">
                  {s.value}
                </div>
                <div className="text-white/75 text-sm font-medium mt-2 tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <FadeIn direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card ring-1 ring-slate-100 group"
              >
                <motion.img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="JaffnaPrinters team"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-brand-gradient/0 group-hover:bg-brand-gradient/10 transition-colors duration-500" />
              </motion.div>
            </FadeIn>

            <FadeIn direction="right">
              <SectionHeader
                badge="Who We Are"
                title="Jaffna's Premier"
                highlight="Print House"
                centered={false}
                compact
              />
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5">
                For over {companyInfo.yearsExperienceLabel} years, JaffnaPrinters has been the cornerstone of quality print production in Northern Sri Lanka.
              </p>
              <GradientButton to="/about">
                Learn Our Story <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* B2B / B2C */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Who We Serve"
            title="Solutions for Every"
            highlight="Customer"
            compact
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-5"
          >
            <motion.div
              variants={fadeLeft}
              whileHover={cardHover}
              transition={{ duration: 0.55 }}
              className="home-card relative bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-slate-100 hover:border-brand-red/25 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-circle w-14 h-14">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-brand-charcoal font-display font-bold text-xl">B2B Solutions</div>
                  <div className="text-slate-500 text-sm">For Businesses &amp; Corporations</div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Scalable print solutions designed for businesses. Enjoy volume pricing and dedicated support.
              </p>
              <motion.ul
                variants={staggerFast}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="space-y-2.5"
              >
                {b2bFeatures.map((f) => (
                  <motion.li key={f} variants={fadeUp} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={fadeRight}
              whileHover={cardHover}
              transition={{ duration: 0.55 }}
              className="home-card relative bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-slate-100 hover:border-brand-gold/40 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-brand-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-circle-gold w-14 h-14">
                  <User className="w-7 h-7 text-brand-charcoal" />
                </div>
                <div>
                  <div className="text-brand-charcoal font-display font-bold text-xl">B2C Services</div>
                  <div className="text-slate-500 text-sm">For Individuals &amp; Events</div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Personal printing made easy. Order any quantity with professional quality and free design support.
              </p>
              <motion.ul
                variants={staggerFast}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="space-y-2.5"
              >
                {b2cFeatures.map((f) => (
                  <motion.li key={f} variants={fadeUp} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Why JaffnaPrinters"
            title="Built on"
            highlight="Excellence"
            compact
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={cardHover}
                transition={{ duration: 0.5 }}
                className="home-card group bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-brand-red/20"
              >
                <div className="icon-circle w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-brand-charcoal text-lg mb-2 group-hover:text-brand-red transition-colors">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CompatibleBrands compact />

      {/* FEATURED PRODUCTS */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <SectionHeader
            badge="Featured"
            title="Most Popular"
            highlight="Products"
            subtitle="Our best-selling print solutions — ready to order with fast turnaround."
            compact
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          >
            {featuredProducts.map((product) => (
              <motion.article
                key={product.id}
                variants={fadeUp}
                whileHover={cardHover}
                transition={{ duration: 0.5 }}
                className="product-card group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider font-display">
                    Popular
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <span className="inline-block text-[11px] text-brand-red font-bold tracking-widest uppercase font-display">
                    {product.category}
                  </span>
                  <h3 className="font-display font-bold text-brand-charcoal text-lg mt-1.5 mb-2 group-hover:text-brand-red transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{product.description}</p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-charcoal font-display group/link hover:text-brand-red transition-colors duration-300"
                  >
                    <span className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center group-hover/link:bg-brand-red group-hover/link:text-white transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    Get Quote
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center mt-8"
          >
            <GradientButton to="/products" variant="outline" size="md">
              View All Products <ArrowRight className="w-4 h-4" />
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* PROMO */}
      <section className="py-6 sm:py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-brand-gradient"
          >
            <motion.div
              className="home-promo-orb w-48 h-48 bg-brand-gold/25 -top-10 -left-10"
              animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="home-promo-orb w-56 h-56 bg-white/15 -bottom-16 -right-8"
              animate={{ x: [0, -20, 0], y: [0, 12, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #ffc107 0%, transparent 50%)' }} />
            <div className="relative z-10 p-8 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4 font-display">
                  Limited Offer
                </div>
                <h2 className="font-display font-bold text-white text-3xl sm:text-4xl leading-tight mb-3">
                  First Order? Get <span className="text-brand-gold">20% OFF</span>
                </h2>
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  New customers enjoy 20% off their first order. No minimum quantity.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto shrink-0">
                <GradientButton to="/contact" variant="light" size="lg" className="w-full sm:w-auto justify-center">
                  Claim Offer <ArrowRight className="w-5 h-5 shrink-0" />
                </GradientButton>
                <GradientButton to="/products" variant="light-outline" size="lg" className="w-full sm:w-auto justify-center">
                  Browse Products
                </GradientButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Testimonials"
            title="What Our"
            highlight="Clients Say"
            compact
          />
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
                whileHover={cardHover}
                transition={{ duration: 0.5 }}
                className="home-card bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-100 flex flex-col"
              >
                <Quote className="w-8 h-8 text-brand-red/30 mb-4" />
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex mb-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <div className="font-display font-semibold text-brand-charcoal text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-brand-charcoal text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-4 tracking-tight"
            >
              Let&apos;s Bring Your Vision
              <br />
              <span className="text-gradient-hero">to Life</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mb-7"
            >
              Contact us today for a free consultation and custom quote.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center"
            >
              <GradientButton to="/contact" size="lg">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </GradientButton>
              <GradientButton to="/products" variant="outline" size="lg">
                View All Products
              </GradientButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
