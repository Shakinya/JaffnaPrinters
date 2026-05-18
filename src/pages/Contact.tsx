import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Youtube, CheckCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import FadeIn from '../components/ui/FadeIn';
import { fadeUp, staggerFast, cardHover, defaultTransition } from '../lib/motion';

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    primary: '+94 21 223 4567',
    secondary: '+94 77 812 3456 (WhatsApp)',
    href: 'tel:+94212234567',
  },
  {
    icon: Mail,
    label: 'Email',
    primary: 'info@jaffnaprinters.lk',
    secondary: 'sales@jaffnaprinters.lk',
    href: 'mailto:info@jaffnaprinters.lk',
  },
  {
    icon: MapPin,
    label: 'Address',
    primary: '123 Hospital Road, Jaffna',
    secondary: 'Northern Province, Sri Lanka',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    primary: 'Mon – Sat: 8:00 AM – 6:00 PM',
    secondary: 'Sunday: 9:00 AM – 1:00 PM',
  },
];

const services = [
  'Business Cards & Stationery',
  'Banners & Signage',
  'Packaging & Boxes',
  'Wedding & Event Cards',
  'T-Shirt & Apparel Printing',
  'PrintTech Parts & Supply',
  'Custom / Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden">
      <PageHero
        badge="Contact Us"
        minHeight="sm"
        title={
          <>
            Let's Start Your<br />
            <span className="text-gradient">Print Project</span>
          </>
        }
        description="Reach out for a free quote, design consultation, or any enquiry. Our team responds within 24 hours."
      />

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            <FadeIn direction="left" className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display font-bold text-slate-900 text-3xl mb-3">Get in Touch</h2>
                <p className="text-slate-500 leading-relaxed">
                  Whether you have a print project in mind or need support — we're here to help.
                </p>
              </div>

              <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {contactDetails.map(({ icon: Icon, label, primary, secondary, href }, i) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    whileHover={cardHover}
                    transition={{ ...defaultTransition, delay: i * 0.05 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0"
                    >
                      <Icon className="w-5 h-5 text-brand-gold-500" />
                    </motion.div>
                    <div>
                      <div className="text-slate-400 text-xs font-medium mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="font-semibold text-slate-900 text-sm hover:text-brand-red-600 transition-colors">
                          {primary}
                        </a>
                      ) : (
                        <div className="font-semibold text-slate-900 text-sm">{primary}</div>
                      )}
                      <div className="text-slate-500 text-xs mt-0.5">{secondary}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-slate-500 text-sm font-medium mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: 'Facebook', href: '#' },
                    { icon: Instagram, label: 'Instagram', href: '#' },
                    { icon: Youtube, label: 'YouTube', href: '#' },
                  ].map(({ icon: Icon, label, href }, i) => (
                    <motion.a
                      key={label}
                      href={href}
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: i * 0.05 }}
                      className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-brand-gold-300 hover:bg-brand-gold-50 hover:text-brand-red-600 text-slate-500 flex items-center justify-center transition-colors duration-300"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
              <motion.div
                whileHover={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)' }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </motion.div>
                    <h3 className="font-display font-bold text-slate-900 text-2xl mb-3">Message Sent!</h3>
                    <p className="text-slate-500 max-w-xs mx-auto">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                      className="mt-8 px-6 py-3 bg-slate-900 text-white rounded-full font-display font-semibold text-sm hover:bg-slate-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-display font-bold text-slate-900 text-2xl mb-8">Request a Free Quote</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+94 77 123 4567"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Required *</label>
                          <select
                            name="service"
                            required
                            value={form.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all bg-white"
                          >
                            <option value="">Select a service</option>
                            {services.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Message / Project Details *</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project: quantity, size, material preferences, deadline..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all resize-none"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-red to-brand-gold text-slate-900 font-display font-bold rounded-full hover:shadow-lg hover:shadow-brand-gold/30 transition-all duration-300 disabled:opacity-70"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <>Send Message <Send className="w-4 h-4" /></>
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      <motion.section
        id="map"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-96 bg-slate-200 relative overflow-hidden"
      >
        <iframe
          title="JaffnaPrinters Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31538.01264890282!2d80.00193!3d9.66845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53fd7de963a3%3A0x9cdbb5d91c5bb580!2sJaffna%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1683456789"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 pointer-events-none border-t-4 border-brand-gold" />
      </motion.section>
    </div>
  );
}
