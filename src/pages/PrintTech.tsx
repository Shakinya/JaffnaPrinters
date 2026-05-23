import { motion } from 'framer-motion';
import { Package, Globe, Wrench, Truck, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import GradientButton from '../components/ui/GradientButton';
import PageHero from '../components/ui/PageHero';
import FadeIn from '../components/ui/FadeIn';
import CompatibleBrands from '../components/sections/CompatibleBrands';
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

export default function PrintTech() {
  return (
    <div className="overflow-hidden">
      <PageHero
        badge="PrintTech Division"
        title={
          <>
            Print Machinery<br />
            <span className="text-highlight">Import &amp; Export</span>
          </>
        }
        description="Your one-stop source for printing machine parts, consumables, and technical support."
      />

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
                className="group p-8 rounded-2xl border border-slate-100 hover:border-brand-red/30 hover:shadow-card transition-shadow duration-400 bg-white"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="icon-circle w-14 h-14 group-hover:bg-brand-red-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-charcoal text-xl mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                  {details.map((d) => (
                    <span key={d} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-red" /> {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CompatibleBrands
        className="bg-slate-50 border-y-0"
        showCta={false}
        subtitle="We source and support genuine parts for these leading print equipment manufacturers."
      />

      {/* PROCESS */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader badge="Our Process" title="How We" highlight="Procure" />
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
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-red/30 hover:shadow-card transition-all duration-300"
              >
                <div className="text-brand-red/20 font-display font-black text-6xl leading-none mb-3">{s.step}</div>
                <h3 className="font-display font-bold text-brand-charcoal text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-red">
        <FadeIn className="container-custom flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-white text-4xl mb-3">Need a specific part?</h2>
            <p className="text-white/85 text-lg max-w-xl">
              Contact our PrintTech team for a fast quote. We typically respond within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <GradientButton to="/contact" size="lg" className="!bg-white !text-brand-red hover:!bg-brand-gold hover:!text-brand-charcoal !shadow-none">
              <Phone className="w-5 h-5" /> Call Us Now
            </GradientButton>
            <GradientButton to="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-brand-red">
              Send Enquiry <ArrowRight className="w-5 h-5" />
            </GradientButton>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
