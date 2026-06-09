import { motion } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  User,
  CheckCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import GradientButton from '../components/ui/GradientButton';
import FadeIn from '../components/ui/FadeIn';
import { compatibleBrands } from '../data/brands';
import {
  printTechInfo,
  printTechHero,
  printTechServices,
  printTechHighlights,
  printTechWhyUs,
  printTechProcess,
  printTechBrandNote,
  printTechCta,
  printTechMapUrl,
  printTechHomeMapUrl,
} from '../data/printtech';
import { pageHeroBackgrounds } from '../data/pageHeroBackgrounds';
import {
  fadeUp,
  staggerContainer,
  staggerFast,
  cardHover,
  defaultTransition,
  viewportOnce,
} from '../lib/motion';

function PrintTechServiceCard({
  icon: Icon,
  title,
  desc,
  highlights,
}: {
  icon: (typeof printTechServices)[number]['icon'];
  title: string;
  desc: string;
  highlights: string[];
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover}
      transition={defaultTransition}
      className="printtech-service-card group"
    >
      <div className="printtech-service-card-glow" aria-hidden />
      <div className="printtech-service-icon">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden />
      </div>
      <h3 className="printtech-service-title">{title}</h3>
      <p className="printtech-service-desc">{desc}</p>
      <ul className="printtech-service-highlights">
        {highlights.map((item) => (
          <li key={item} className="printtech-service-highlight">
            <CheckCircle className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function PrintTech() {
  const { companyName, tagline, director, phones, emails, addresses } = printTechInfo;
  const primaryServices = printTechServices.slice(0, 3);
  const secondaryServices = printTechServices.slice(3);
  const primaryBrands = compatibleBrands.slice(0, 5);
  const secondaryBrands = compatibleBrands.slice(5);

  return (
    <div className="overflow-hidden bg-brand-charcoal">
      {/* HERO */}
      <section className="printtech-hero flex items-center">
        <div className="printtech-hero-media" aria-hidden>
          <img
            src={pageHeroBackgrounds.printTech.src}
            alt=""
            className="printtech-hero-bg"
            loading="eager"
            decoding="async"
          />
          <div className="printtech-hero-overlay" />
          <div className="printtech-hero-vignette" />
        </div>
        <span className="sr-only">{pageHeroBackgrounds.printTech.alt}</span>
        <div className="absolute inset-0 printtech-hero-grid pointer-events-none z-[2]" aria-hidden />
        <motion.div
          className="absolute -top-24 -right-32 w-[28rem] h-[28rem] rounded-full bg-brand-red/20 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient z-10" />

        <div className="container-custom relative z-10 py-12 sm:py-16 lg:py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              transition={defaultTransition}
              className="printtech-hero-badge mb-5"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden />
              {printTechHero.badge}
            </motion.span>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.04 }}
              className="printtech-hero-tagline"
            >
              {tagline}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.06 }}
              className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl leading-[1.08] mb-4"
            >
              <span className="text-white">{companyName}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.12 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              {printTechHero.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.18 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <GradientButton href={`tel:${phones.mobile[0].tel}`} size="lg">
                <Phone className="w-5 h-5 shrink-0" />
                Call {phones.mobile[0].display}
              </GradientButton>
              <GradientButton
                href="#contact"
                variant="outline"
                size="lg"
                className="!border-white/25 !text-white !bg-white/5 hover:!bg-white/10 hover:!border-brand-red/40 hover:!text-white"
              >
                <Mail className="w-5 h-5 shrink-0" />
                Contact Details
              </GradientButton>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="show"
            className="printtech-stat-grid"
          >
            {printTechHighlights.map(({ value, label }) => (
              <motion.div key={label} variants={fadeUp} className="printtech-stat">
                <div className="printtech-stat-value">{value}</div>
                <div className="printtech-stat-label">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-slate-950 border-t border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="What We Offer"
            title="Professional"
            highlight="Services"
            subtitle="From print production to security systems and global sourcing — one team for your business technology needs."
            light
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-4 sm:space-y-5"
          >
            <motion.div
              variants={staggerFast}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            >
              {primaryServices.map((service) => (
                <PrintTechServiceCard key={service.title} {...service} />
              ))}
            </motion.div>
            <motion.div
              variants={staggerFast}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto w-full lg:max-w-3xl"
            >
              {secondaryServices.map((service) => (
                <PrintTechServiceCard key={service.title} {...service} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="section-padding bg-slate-950 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Trusted Brands"
            title="Authorized"
            highlight="Partners"
            subtitle="We supply, service, and support genuine equipment and consumables from industry-leading manufacturers."
            light
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-4 sm:space-y-5"
          >
            <motion.div variants={staggerFast} className="printtech-brand-grid printtech-brand-grid--primary">
              {primaryBrands.map((brand) => (
                <motion.div
                  key={brand.id}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  transition={defaultTransition}
                  className="printtech-brand-tile group"
                >
                  <div className="printtech-brand-logo-wrap">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} — authorized partner`}
                      className="printtech-brand-logo"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="printtech-brand-name">{brand.name}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={staggerFast} className="printtech-brand-grid printtech-brand-grid--secondary">
              {secondaryBrands.map((brand) => (
                <motion.div
                  key={brand.id}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  transition={defaultTransition}
                  className="printtech-brand-tile group"
                >
                  <div className="printtech-brand-logo-wrap">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} — authorized partner`}
                      className="printtech-brand-logo"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="printtech-brand-name">{brand.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-slate-400 text-sm mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            {printTechBrandNote}
          </motion.p>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <FadeIn>
              <SectionHeader
                badge="Why PrintTech"
                title="Built on Trust,"
                highlight="Delivered Locally"
                subtitle="Northern Sri Lanka businesses rely on us for responsive service, genuine products, and honest guidance."
                light
                centered={false}
              />
              <ul className="space-y-3.5">
                {printTechWhyUs.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerFast}
              className="grid sm:grid-cols-2 gap-4"
            >
              {printTechProcess.map((item, i) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  custom={i}
                  whileHover={cardHover}
                  className="printtech-process-card"
                >
                  <span className="printtech-process-step">{item.step}</span>
                  <h3 className="font-display font-bold text-white text-lg mb-1.5">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-padding bg-slate-950 border-t border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Get In Touch"
            title="Contact"
            highlight="PrintTech Vision"
            subtitle="Reach our director or office team for quotes, service calls, and product enquiries."
            light
          />

          <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={defaultTransition}
              className="printtech-contact-card printtech-contact-card--director lg:col-span-1"
            >
              <div className="icon-circle w-12 h-12 mb-4">
                <User className="w-6 h-6 text-white" aria-hidden />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-1">Director</h3>
              <p className="text-slate-200 font-semibold mb-4">{director}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Your primary contact for business enquiries and strategic support.
              </p>
              <a
                href={`mailto:${emails.home}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-300 transition-colors"
              >
                Email director <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ ...viewportOnce, margin: '-20px' }}
              transition={{ ...defaultTransition, delay: 0.08 }}
              className="printtech-contact-card lg:col-span-2 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <h3 className="font-display font-semibold text-brand-red text-xs uppercase tracking-wider mb-3">
                    Phone
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <span className="text-slate-500 block text-xs mb-0.5">Office</span>
                      <a
                        href={`tel:${phones.office.tel}`}
                        className="text-white font-medium hover:text-brand-red-300 transition-colors"
                      >
                        {phones.office.display}
                      </a>
                    </li>
                    <li>
                      <span className="text-slate-500 block text-xs mb-0.5">Mobile</span>
                      <span className="text-white font-medium">
                        <a href={`tel:${phones.mobile[0].tel}`} className="hover:text-brand-red-300 transition-colors">
                          {phones.mobile[0].display}
                        </a>
                        {' / '}
                        <a href={`tel:${phones.mobile[1].tel}`} className="hover:text-brand-red-300 transition-colors">
                          {phones.mobile[1].display}
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-red text-xs uppercase tracking-wider mb-3">
                    Email
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <span className="text-slate-500 block text-xs mb-0.5">Office</span>
                      <a
                        href={`mailto:${emails.office}`}
                        className="text-white font-medium hover:text-brand-red-300 transition-colors break-all"
                      >
                        {emails.office}
                      </a>
                    </li>
                    <li>
                      <span className="text-slate-500 block text-xs mb-0.5">Personal</span>
                      <a
                        href={`mailto:${emails.home}`}
                        className="text-white font-medium hover:text-brand-red-300 transition-colors break-all"
                      >
                        {emails.home}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="printtech-section-divider" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <h3 className="font-display font-semibold text-brand-red text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" aria-hidden />
                    {addresses.office.label}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {addresses.office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <a
                    href={printTechMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-brand-red hover:text-brand-red-300 transition-colors"
                  >
                    Get directions <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                  </a>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-red text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" aria-hidden />
                    {addresses.home.label}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {addresses.home.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <a
                    href={printTechHomeMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-brand-red hover:text-brand-red-300 transition-colors"
                  >
                    Get directions <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden bg-brand-charcoal">
        <div className="printtech-cta-media" aria-hidden>
          <img
            src="/bgprintTech.jpg"
            alt=""
            className="printtech-cta-bg"
            loading="lazy"
            decoding="async"
          />
         
          <div className="printtech-cta-vignette" />
        </div>
        <FadeIn className="container-custom relative z-10">
          <div className="red-surface-panel">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              <div className="max-w-xl">
                <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-3">
                  {printTechCta.title}
                </h2>
                <p className="text-white/95 text-base sm:text-lg leading-relaxed">
                  Speak with {director} or our office team for a fast, no-obligation quote on equipment,
                  service, or import orders.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
                <GradientButton href={`tel:${phones.office.tel}`} variant="light" size="lg" className="w-full sm:w-auto justify-center">
                  <Phone className="w-5 h-5 shrink-0" />
                  {phones.office.display}
                </GradientButton>
                <GradientButton
                  href={`mailto:${emails.office}`}
                  variant="light-outline"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                >
                  Send Enquiry <ArrowRight className="w-5 h-5 shrink-0" />
                </GradientButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
