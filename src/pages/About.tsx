import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import GradientButton from '../components/ui/GradientButton';
import PageHero from '../components/ui/PageHero';
import FadeIn from '../components/ui/FadeIn';
import { fadeUp, staggerContainer, staggerFast, cardHover, defaultTransition } from '../lib/motion';
import { companyInfo, companyJourney, aboutJourneySubtitle } from '../data/site';

const values = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    desc: 'Every product goes through rigorous quality control checks.',
  },
  {
    icon: Users,
    title: 'Customer First',
    desc: 'We listen, advise, and deliver beyond expectations.',
  },
];

const reasons = [
  `${companyInfo.yearsExperienceLabel} years of proven print expertise`,
  'State-of-the-art Heidelberg offset presses',
  'ISO 9001:2015 certified quality management',
  'Full in-house prepress and design team',
  'Competitive pricing with no hidden fees',
  'Island-wide delivery to every province',
  'Eco-friendly printing options available',
  'Dedicated corporate account management',
];

export default function About() {
  return (
    <div className="overflow-hidden">
      <PageHero
        badge="About Us"
        title={
          <>
            Our Story, Our <br />
            <span className="text-gradient">Passion for Print</span>
          </>
        }
        description="From a single press in Jaffna to Sri Lanka's most trusted full-service print house."
      />

      {/* MISSION & VISION */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={cardHover}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-red rounded-2xl p-7 sm:p-8 relative overflow-hidden shadow-card"
            >
              <motion.div
                className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6"
                >
                  <Target className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-brand-gold font-display font-semibold text-sm tracking-widest uppercase mb-3">Our Mission</div>
                <h3 className="font-display font-bold text-white text-2xl mb-4">Empowering brands through exceptional print</h3>
                <p className="text-slate-400 leading-relaxed">
                  To deliver premium-quality print solutions with unmatched precision, speed, and customer care.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={cardHover}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border-2 border-brand-red rounded-2xl p-7 sm:p-8 relative overflow-hidden shadow-card"
            >
              <motion.div
                className="absolute bottom-0 left-0 w-48 h-48 bg-slate-900/10 rounded-full blur-2xl"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-6"
                >
                  <Eye className="w-6 h-6 text-brand-red" />
                </motion.div>
                <div className="text-brand-red font-display font-semibold text-sm tracking-widest uppercase mb-3">Our Vision</div>
                <h3 className="font-display font-bold text-brand-charcoal text-2xl mb-4">Redefining print in South Asia</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be the most innovative and reliable print solutions provider in South Asia.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Our Journey"
            title={`${companyInfo.yearsExperienceLabel} Years of`}
            highlight="Growth"
            subtitle={aboutJourneySubtitle}
          />

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-red via-brand-red-300 to-transparent hidden sm:block" />
            <div className="space-y-7">
              {companyJourney.map((item, i) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="hidden md:flex items-center justify-center w-0 relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 400, delay: i * 0.1 }}
                      className="absolute w-4 h-4 rounded-full bg-brand-red border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:text-right'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 inline-block w-full hover:shadow-md transition-shadow duration-300">
                      <motion.div
                        className="text-brand-red font-display font-bold text-2xl mb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                      >
                        {item.year}
                      </motion.div>
                      <div className="font-display font-semibold text-slate-900 text-lg mb-2">{item.title}</div>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader badge="Our Values" title="What Drives" highlight="Us" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={cardHover}
                transition={defaultTransition}
                className="group text-center p-6 sm:p-7 rounded-2xl bg-slate-50 hover:bg-brand-red transition-colors duration-400 border border-slate-100 hover:border-brand-red"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  className="w-14 h-14 rounded-full bg-brand-red/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-5 transition-colors duration-300"
                >
                  <Icon className="w-7 h-7 text-brand-red group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="font-display font-bold text-brand-charcoal group-hover:text-white text-lg mb-3 transition-colors duration-300">{title}</h3>
                <p className="text-slate-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <FadeIn direction="left">
              <SectionHeader
                badge="Why Choose Us"
                title="The JaffnaPrinters"
                highlight="Advantage"
                centered={false}
              />
              <motion.ul
                variants={staggerFast}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-3"
              >
                {reasons.map((r) => (
                  <motion.li
                    key={r}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-sm">{r}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <div className="mt-6">
                <GradientButton to="/contact">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </GradientButton>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src="https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent" />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
