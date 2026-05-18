import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, CheckCircle, Building2, User,
  Zap, Shield, Award, Clock, ChevronRight, Quote
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
  'Express delivery service',
];

const whyUs = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: '24-48 hour turnaround on most standard orders with express options available.',
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
    icon: Clock,
    title: 'Always On Time',
    desc: 'We understand deadlines. 98.6% of orders delivered on or before the promised date.',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredProducts = products.filter((p) => p.popular);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-20">
        <motion.div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-3xl"
            animate={{ y: [0, -28, 0], x: [0, 14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
        </motion.div>

        <motion.div className="relative z-10 container-custom w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div variants={staggerContainer} initial="hidden" animate="show">
                <motion.span
                  variants={fadeLeft}
                  transition={defaultTransition}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold font-display tracking-widest uppercase mb-6"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-brand-gold"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Northern Sri Lanka's #1 Printer
                </motion.span>

                <motion.h1
                  variants={fadeLeft}
                  transition={{ ...defaultTransition, delay: 0.08 }}
                  className="font-display font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6"
                >
                  Print That <span className="text-gradient block">Speaks for</span> Your Brand
                </motion.h1>

                <motion.p
                  variants={fadeLeft}
                  transition={{ ...defaultTransition, delay: 0.14 }}
                  className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl"
                >
                  From business cards to large-format banners, JaffnaPrinters delivers exceptional quality with unmatched precision.
                </motion.p>

                <motion.div
                  variants={fadeLeft}
                  transition={{ ...defaultTransition, delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <GradientButton to="/products" size="lg">
                    Explore Products <ArrowRight className="w-5 h-5" />
                  </GradientButton>
                  <GradientButton to="/contact" variant="outline" size="lg">
                    Get a Quote
                  </GradientButton>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="show"
              transition={{ ...defaultTransition, delay: 0.25 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] ring-1 ring-white/10 shadow-2xl shadow-black/40"
              >
                <motion.img
                  src="/hero-branding.png"
                  alt="Jaffna Printers branding — business cards, packaging, banners, and print merchandise"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-brand-red via-brand-gold to-brand-gold-300 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.06, y: -2 }}
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center cursor-default"
              >
                <div className="font-display font-bold text-slate-900 text-3xl lg:text-4xl">{s.value}</div>
                <div className="text-slate-800/70 text-sm font-medium mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl"
              >
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="JaffnaPrinters"
                  className="w-full h-full object-cover"
                />
              </motion.div>
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
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <SectionHeader
            badge="Who We Serve"
            title="Solutions for Every"
            highlight="Customer"
            light
          />
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={cardHover}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-brand-gold/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 0.45 }}
                  className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center"
                >
                  <Building2 className="w-7 h-7 text-brand-gold" />
                </motion.div>
                <div>
                  <div className="text-white font-display font-bold text-xl">B2B Solutions</div>
                  <div className="text-slate-400 text-sm">For Businesses & Corporations</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Scalable print solutions designed for businesses. Enjoy volume pricing and dedicated support.
              </p>
              <ul className="space-y-3">
                {b2bFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="text-slate-300 text-sm">{f}</span>
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
              className="glass rounded-3xl p-8 border border-white/10 hover:border-brand-gold/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 0.45 }}
                  className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center"
                >
                  <User className="w-7 h-7 text-brand-gold" />
                </motion.div>
                <div>
                  <div className="text-white font-display font-bold text-xl">B2C Services</div>
                  <div className="text-slate-400 text-sm">For Individuals & Events</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Personal printing made easy. Order any quantity with fast turnaround and professional quality.
              </p>
              <ul className="space-y-3">
                {b2cFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-slate-50">
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
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-400 border border-slate-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-brand-gold-500" />
                </motion.div>
                <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
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
                className="group rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-gold-300/50 hover:shadow-xl transition-shadow duration-400"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-brand-red-600 font-semibold tracking-wider uppercase font-display">
                    {product.category}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-lg mt-1 mb-2">{product.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{product.description}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red-600 font-display hover:gap-2.5 transition-all duration-300"
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
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-brand-gold/10 to-transparent" />
            <div className="relative z-10 p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold tracking-wider uppercase mb-4 font-display">
                  Limited Offer
                </div>
                <h2 className="font-display font-bold text-white text-3xl sm:text-4xl leading-tight mb-3">
                  First Order? Get <span className="text-gradient">20% OFF</span>
                </h2>
                <p className="text-slate-400 text-lg">
                  New customers enjoy 20% off their first order. No minimum quantity.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <GradientButton to="/contact" size="lg">
                  Claim Offer <ArrowRight className="w-5 h-5" />
                </GradientButton>
                <GradientButton to="/products" variant="outline" size="lg">
                  Browse Products
                </GradientButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-slate-50">
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
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <Quote className="w-8 h-8 text-brand-gold/40 mb-4" />
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5 italic">"{t.quote}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex mb-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <div className="font-display font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Let's Bring Your Vision<br />
              <span className="text-gradient">to Life</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
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
