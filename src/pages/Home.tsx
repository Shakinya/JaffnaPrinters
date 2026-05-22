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
import { products, testimonials } from '../data/products';
import {
  fadeUp,
  fadeLeft,
  scaleIn,
  staggerContainer,
  staggerFast,
  defaultTransition,
  cardHover,
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
      <section className="relative bg-white pt-[7.5rem] lg:pt-[8rem]">
        <div className="container-custom py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.h1
                variants={fadeLeft}
                transition={defaultTransition}
                className="font-display font-extrabold text-brand-charcoal text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-5 uppercase tracking-tight"
              >
                We Print{' '}
                <span className="text-brand-red block sm:inline">Your Vision</span>
              </motion.h1>

              <motion.p
                variants={fadeLeft}
                transition={{ ...defaultTransition, delay: 0.08 }}
                className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
              >
                Premium Printing Solutions for Businesses &amp; Individuals.
              </motion.p>

              <motion.div
                variants={fadeLeft}
                transition={{ ...defaultTransition, delay: 0.12 }}
                className="grid grid-cols-2 gap-3 sm:gap-4 mb-10"
              >
                {heroFeatures.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="icon-circle w-10 h-10">
                      <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-medium text-brand-charcoal leading-snug">{label}</span>
                  </div>
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
                  Contact Us <ArrowRight className="w-5 h-5" />
                </GradientButton>
              </motion.div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="show"
              transition={{ ...defaultTransition, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-2xl overflow-hidden shadow-card bg-slate-50 ring-1 ring-slate-100"
              >
                <img
                  src="/hero-products.png"
                  alt="JaffnaPrinters product showcase — bags, apparel, business cards, packaging, mugs, and print materials"
                  className="w-full h-auto object-contain"
                  loading="eager"
                  fetchPriority="high"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Services bar */}
        <div className="border-t border-slate-100 bg-white">
          <div className="container-custom py-6 lg:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {serviceBar.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <div className="icon-circle">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-brand-charcoal text-sm">{title}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-red py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center cursor-default"
              >
                <div className="font-display font-bold text-white text-3xl lg:text-4xl">{s.value}</div>
                <div className="text-white/80 text-sm font-medium mt-1">{s.label}</div>
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
              className="bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:border-brand-red/20 transition-colors duration-300"
            >
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
              className="bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:border-brand-red/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-circle w-14 h-14">
                  <User className="w-7 h-7 text-white" />
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
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-card transition-shadow duration-300 border border-slate-100"
              >
                <div className="icon-circle w-12 h-12 mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-brand-charcoal text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <SectionHeader
              badge="Featured"
              title="Most Popular"
              highlight="Products"
              centered={false}
            />
            <GradientButton to="/products" variant="outline" size="sm">
              View All <ArrowRight className="w-4 h-4" />
            </GradientButton>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={cardHover}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-red/20 hover:shadow-card transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-brand-red font-semibold tracking-wider uppercase font-display">
                    {product.category}
                  </span>
                  <h3 className="font-display font-bold text-brand-charcoal text-lg mt-1 mb-2">{product.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{product.description}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red font-display hover:gap-2.5 transition-all duration-300"
                  >
                    Get Quote <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
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
            className="relative rounded-2xl overflow-hidden bg-brand-red"
          >
            <div className="relative z-10 p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4 font-display">
                  Limited Offer
                </div>
                <h2 className="font-display font-bold text-white text-3xl sm:text-4xl leading-tight mb-3">
                  First Order? Get <span className="text-brand-gold">20% OFF</span>
                </h2>
                <p className="text-white/85 text-lg">
                  New customers enjoy 20% off their first order. No minimum quantity.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <GradientButton to="/contact" size="lg" className="!bg-white !text-brand-red hover:!bg-brand-gold hover:!text-brand-charcoal !shadow-none">
                  Claim Offer <ArrowRight className="w-5 h-5" />
                </GradientButton>
                <GradientButton to="/products" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-brand-red">
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
            <h2 className="font-display font-bold text-brand-charcoal text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Let&apos;s Bring Your Vision
              <br />
              <span className="text-highlight">to Life</span>
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
