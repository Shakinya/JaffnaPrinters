import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, CheckCircle, Building2, User,
  Zap, Shield, Award, ChevronRight, Quote,
  Printer, Package, Palette, BadgeDollarSign, Globe,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import GradientButton from '../components/ui/GradientButton';
import FadeIn from '../components/ui/FadeIn';
import CompatibleBrands from '../components/sections/CompatibleBrands';
import { products, testimonials } from '../data/products';
import {
  fadeUp,
  fadeLeft,
  scaleIn,
  staggerContainer,
  staggerFast,
  defaultTransition,
  cardHover,
  floatAnimation,
  floatTransition,
} from '../lib/motion';

const heroFeatures = [
  { icon: Printer, label: 'High Quality Printing' },
  { icon: Package, label: 'Parts & Tools Import' },
  { icon: Palette, label: 'Creative Design' },
  { icon: BadgeDollarSign, label: 'Affordable Price' },
];

const serviceBar = [
  { icon: Building2, title: 'B2B Printing', desc: 'Corporate & bulk orders' },
  { icon: User, title: 'B2C Printing', desc: 'Personal & event printing' },
  { icon: Award, title: 'Premium Quality', desc: 'ISO-certified production' },
  { icon: Globe, title: 'Import & Export', desc: 'Print machinery parts & tools' },
  { icon: Star, title: 'Customer Satisfaction', desc: '99% happy clients' },
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '5,000+', label: 'Happy Clients' },
  { value: '200+', label: 'Products' },
  { value: '99%', label: 'Satisfaction Rate' },
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
      {/* HERO */}
      <section className="relative hero-mesh pt-[7.5rem] lg:pt-[8.5rem] overflow-hidden">
        <div className="hero-glow w-72 h-72 bg-brand-red/20 -top-20 -left-20 animate-pulse-soft" />
        <div className="hero-glow w-96 h-96 bg-brand-gold/15 top-1/3 -right-32 animate-pulse-soft" style={{ animationDelay: '1.5s' }} />

        <div className="container-custom relative z-10 py-12 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.div
                variants={fadeLeft}
                transition={defaultTransition}
                className="mb-6"
              >
                <span className="badge-pill">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  Trusted Print Partner Since 2009
                </span>
              </motion.div>

              <motion.h1
                variants={fadeLeft}
                transition={defaultTransition}
                className="font-display font-extrabold text-brand-charcoal text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-7xl leading-[1.02] mb-6 tracking-tight"
              >
                We Print{' '}
                <span className="text-gradient-hero block mt-1">Your Vision</span>
              </motion.h1>

              <motion.p
                variants={fadeLeft}
                transition={{ ...defaultTransition, delay: 0.08 }}
                className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
              >
                Premium printing for businesses and individuals — from business cards to bulk corporate runs, plus PrintTech parts import.
              </motion.p>

              <motion.div
                variants={fadeLeft}
                transition={{ ...defaultTransition, delay: 0.12 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
              >
                {heroFeatures.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.45 }}
                    className="feature-pill"
                  >
                    <div className="icon-circle w-10 h-10 rounded-lg">
                      <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-semibold text-brand-charcoal leading-snug">{label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeLeft}
                transition={{ ...defaultTransition, delay: 0.18 }}
                className="flex flex-wrap gap-4"
              >
                <GradientButton to="/products" size="lg">
                  Explore Products <ArrowRight className="w-5 h-5" />
                </GradientButton>
                <GradientButton to="/contact" variant="outline" size="lg">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </GradientButton>
              </motion.div>

              <motion.p
                variants={fadeLeft}
                transition={{ ...defaultTransition, delay: 0.22 }}
                className="mt-6 text-sm text-slate-500 flex flex-wrap items-center gap-x-4 gap-y-1"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand-red" /> No minimum on first quote
                </span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-brand-gold fill-brand-gold" /> 99% client satisfaction
                </span>
              </motion.p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="show"
              transition={{ ...defaultTransition, delay: 0.2 }}
              className="relative lg:pl-4"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-red/10 via-transparent to-brand-gold/10 rounded-3xl blur-2xl" />
              <motion.div
                animate={floatAnimation}
                transition={floatTransition}
                className="relative"
              >
                <div className="absolute -top-3 -right-3 w-24 h-24 border-2 border-brand-gold/40 rounded-2xl rotate-6 pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-brand-red/20 rounded-full pointer-events-none" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-card bg-white ring-1 ring-slate-200/80 p-2 sm:p-3"
                >
                  <img
                    src="/hero-products.png"
                    alt="JaffnaPrinters product showcase — bags, apparel, business cards, packaging, mugs, and print materials"
                    className="w-full min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] xl:min-h-[480px] h-auto object-contain"
                    loading="eager"
                    fetchPriority="high"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-2 left-4 sm:left-8 bg-brand-charcoal text-white px-4 py-3 rounded-xl shadow-lg border border-white/10"
              >
                <div className="text-2xl font-display font-bold text-brand-gold">15+</div>
                <div className="text-xs text-white/80 font-medium">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Services bar */}
        <div className="relative z-10 border-t border-slate-200/60 bg-white/80 backdrop-blur-sm">
          <div className="container-custom py-8 lg:py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {serviceBar.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -2 }}
                  className="service-card"
                >
                  <div className="icon-circle w-11 h-11 rounded-lg">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-brand-charcoal text-sm">{title}</div>
                    <div className="text-slate-500 text-xs mt-0.5 leading-snug">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-brand-charcoal py-10 lg:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.04, y: -2 }}
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="stat-card cursor-default"
              >
                <div className="font-display font-extrabold text-brand-gold text-3xl sm:text-4xl lg:text-5xl drop-shadow-sm">
                  {s.value}
                </div>
                <div className="text-white/75 text-sm font-medium mt-2 tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card ring-1 ring-slate-100">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="JaffnaPrinters team"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <SectionHeader
                badge="Who We Are"
                title="Jaffna's Premier"
                highlight="Print House"
                centered={false}
              />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                For over 15 years, JaffnaPrinters has been the cornerstone of quality print production in Northern Sri Lanka.
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
          />
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={cardHover}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:border-brand-red/25 transition-all duration-300 overflow-hidden group"
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
              <ul className="space-y-3">
                {b2bFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={cardHover}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:border-brand-gold/40 transition-all duration-300 overflow-hidden group"
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
              <ul className="space-y-3">
                {b2cFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Why JaffnaPrinters"
            title="Built on"
            highlight="Excellence"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={cardHover}
                transition={{ duration: 0.5 }}
                className="group bg-white rounded-2xl p-6 hover:shadow-card transition-all duration-300 border border-slate-100 hover:border-brand-red/20"
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

      <CompatibleBrands />

      {/* FEATURED PRODUCTS */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <SectionHeader
            badge="Featured"
            title="Most Popular"
            highlight="Products"
            subtitle="Our best-selling print solutions — ready to order with fast turnaround."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {featuredProducts.map((product, i) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={cardHover}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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
          </div>

          <div className="flex justify-center mt-12">
            <GradientButton to="/products" variant="outline" size="md">
              View All Products <ArrowRight className="w-4 h-4" />
            </GradientButton>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-brand-gradient"
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #ffc107 0%, transparent 50%)' }} />
            <div className="relative z-10 p-10 sm:p-14 lg:p-16 flex flex-col sm:flex-row items-center justify-between gap-8">
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
          />
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={fadeUp}
                whileHover={cardHover}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-card transition-shadow duration-300 flex flex-col"
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-extrabold text-brand-charcoal text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight">
              Let&apos;s Bring Your Vision
              <br />
              <span className="text-gradient-hero">to Life</span>
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-10">
              Contact us today for a free consultation and custom quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <GradientButton to="/contact" size="lg">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </GradientButton>
              <GradientButton to="/products" variant="outline" size="lg">
                View All Products
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
