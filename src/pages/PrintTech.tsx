import { motion } from 'framer-motion';
import { Package, Globe, Wrench, Truck, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import GradientButton from '../components/ui/GradientButton';
import PageHero from '../components/ui/PageHero';
import FadeIn from '../components/ui/FadeIn';
import { fadeUp, staggerContainer, cardHover, defaultTransition } from '../lib/motion';

const importExportServices = [
  {
    icon: Package,
    title: 'Spare Parts Import',
    desc: 'We source and import genuine spare parts directly from manufacturers.',
    details: ['Heidelberg Parts', 'Komori Parts', 'Roland Parts', 'Ryobi Parts'],
  },
  {
    icon: Globe,
    title: 'International Procurement',
    desc: 'We procure printing consumables, inks, and chemicals at competitive pricing.',
    details: ['Offset Inks', 'UV Inks', 'CTP Plates', 'Chemicals'],
  },
  {
    icon: Wrench,
    title: 'Technical Support',
    desc: 'Our certified technicians provide installation, commissioning, and maintenance.',
    details: ['On-site Installation', 'Preventive Maintenance', 'Troubleshooting', 'Training'],
  },
  {
    icon: Truck,
    title: 'Island-wide Delivery',
    desc: 'We handle all logistics, delivering directly to your facility anywhere in Sri Lanka.',
    details: ['Customs Clearance', 'Insured Shipping', 'Express Delivery', 'Bulk Orders'],
  },
];

const brands = [
  'Heidelberg', 'Komori', 'Ryobi', 'Roland', 'Manroland',
  'HP Indigo', 'Xerox', 'Konica Minolta', 'Canon', 'Epson',
];

export default function PrintTech() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-end bg-slate-900 overflow-hidden pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold font-display tracking-widest uppercase mb-5">
              PrintTech Division
            </span>
            <h1 className="font-display font-bold text-white text-5xl sm:text-6xl leading-tight mb-4">
              Print Machinery<br />
              <span className="text-gradient">Import & Export</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl">
              Your one-stop source for printing machine parts, consumables, and technical support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Our Services"
            title="Complete Print Technology"
            highlight="Solutions"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {importExportServices.map(({ icon: Icon, title, desc, details }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={cardHover}
                transition={defaultTransition}
                className="group p-8 rounded-2xl border border-slate-100 hover:border-brand-gold-300/50 hover:shadow-xl transition-shadow duration-400"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 group-hover:bg-brand-gold flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-brand-gold-500 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-xl mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                  {details.map((d) => (
                    <span key={d} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-gold-500" /> {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader badge="Compatible Brands" title="Brands We" highlight="Support" />
          <div className="flex flex-wrap gap-3 justify-center">
            {brands.map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.06, y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-display font-semibold text-sm hover:border-brand-gold-300 hover:bg-brand-gold-50 hover:text-brand-red-700 transition-colors duration-300 cursor-default"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <SectionHeader badge="Our Process" title="How We" highlight="Procure" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Enquiry', desc: 'Send us your machine model or part number.' },
              { step: '02', title: 'Quote & Confirm', desc: 'We send you a quote within 24 hours.' },
              { step: '03', title: 'Sourcing & Shipping', desc: 'We handle procurement and shipping.' },
              { step: '04', title: 'Delivery & Support', desc: 'Parts delivered with warranty and support.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={cardHover}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-brand-gold/30 transition-colors duration-300"
              >
                <div className="text-brand-gold/30 font-display font-black text-6xl leading-none mb-3">{s.step}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-red via-brand-gold to-brand-gold-300">
        <FadeIn className="container-custom flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-slate-900 text-4xl mb-3">Need a specific part?</h2>
            <p className="text-slate-800 text-lg max-w-xl">
              Contact our PrintTech team for a fast quote. We typically respond within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <GradientButton to="/contact" variant="ghost" size="lg">
              <Phone className="w-5 h-5" /> Call Us Now
            </GradientButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-brand-gold rounded-full font-display font-bold text-lg hover:bg-slate-800 transition-colors duration-300"
            >
              Send Enquiry <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
