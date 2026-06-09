import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, Send,
  CheckCircle, ExternalLink, Navigation, Share2,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import FadeIn from '../components/ui/FadeIn';
import { fadeUp, staggerFast, defaultTransition, viewportOnce } from '../lib/motion';
import { companyInfo, mapDirectionsUrl, mapEmbedUrl } from '../data/site';
import { socialLinks } from '../data/socialLinks';
import { allProductServiceOptions } from '../data/products';
import { pageHeroBackgrounds } from '../data/pageHeroBackgrounds';

const contactDetails = [
  {
    icon: Phone,
    label: 'Office Mobile',
    primary: companyInfo.phones.office.display,
    secondary: 'Office line',
    href: `tel:${companyInfo.phones.office.tel}`,
  },
  {
    icon: Phone,
    label: 'Personal Mobile',
    primary: companyInfo.phones.personal.display,
    secondary: 'Personal / WhatsApp',
    href: `tel:${companyInfo.phones.personal.tel}`,
  },
  {
    icon: Phone,
    label: 'Landline',
    primary: companyInfo.phones.landline.display,
    secondary: 'Shop landline',
    href: `tel:${companyInfo.phones.landline.tel}`,
  },
  {
    icon: Mail,
    label: 'Email',
    primary: companyInfo.email,
    secondary: 'We reply within 24 hours',
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    primary: companyInfo.address.line1,
    secondary: companyInfo.address.line2,
    href: mapDirectionsUrl,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    primary: companyInfo.hours.weekdays,
    secondary: companyInfo.hours.sunday,
  },
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
    <div className="overflow-hidden mt-5">
      <PageHero
        badge="Contact Us"
        minHeight="sm"
        title={
          <>
            Let&apos;s Start Your<br />
            <span className="text-gradient">Print Project</span>
          </>
        }
        description=
        {
          <span className="text-zinc-200">"Reach out for a free quote, design consultation, or any enquiry. Our team responds within 24 hours."
          </span>
        }  
        backgroundImage={pageHeroBackgrounds.contact.src}
        backgroundAlt={pageHeroBackgrounds.contact.alt}
      />

      {/* Quick contact */}
      <section className="py-8 sm:py-10 bg-white border-b border-slate-100">
        <div className="container-custom">
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {contactDetails.map(({ icon: Icon, label, primary, secondary, href }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: i * 0.05 }}
                className="flex items-start gap-3 p-5 rounded-2xl border border-red-100/90 bg-red-50/90 hover:border-brand-red/25 hover:bg-red-50 hover:shadow-sm transition-all duration-300"
              >
                <div className="icon-circle w-11 h-11 shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-slate-400 text-xs font-medium mb-1">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target={label === 'Address' ? '_blank' : undefined}
                      rel={label === 'Address' ? 'noopener noreferrer' : undefined}
                      className="font-semibold text-brand-charcoal text-sm hover:text-brand-red transition-colors block truncate"
                    >
                      {primary}
                    </a>
                  ) : (
                    <div className="font-semibold text-brand-charcoal text-sm">{primary}</div>
                  )}
                  <div className="text-slate-500 text-xs mt-0.5 leading-relaxed">{secondary}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...defaultTransition, delay: 0.15 }}
            className="contact-stay-connected mt-8 sm:mt-10 lg:mt-12"
          >
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
              <div className="flex items-start gap-4 sm:gap-5 max-w-xl">
                <motion.div
                  className="contact-stay-connected-icon"
                  whileHover={{ scale: 1.06, rotate: 3 }}
                  transition={{ duration: 0.25 }}
                >
                  <Share2 aria-hidden />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">
                    Stay Connected
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Follow us for print inspiration, seasonal offers, and behind-the-scenes updates from Jaffna Printers.
                  </p>
                </div>
              </div>

              <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                {socialLinks.map(({ icon: Icon, label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    variants={fadeUp}
                    transition={{ ...defaultTransition, delay: 0.2 + i * 0.06 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="contact-social-btn"
                  >
                    <Icon aria-hidden />
                    <span className="hidden sm:inline">{label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 items-stretch">
            {/* Quote form */}
            <FadeIn direction="left" className="h-full">
              <div className="bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border border-slate-100 shadow-sm h-full">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 lg:py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-brand-charcoal text-2xl mb-3">Message Sent!</h3>
                    <p className="text-slate-500 max-w-sm mx-auto">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', phone: '', service: '', message: '' });
                      }}
                      className="mt-8 px-6 py-3 btn-primary text-sm"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-display font-bold text-brand-charcoal text-2xl sm:text-3xl mb-2">
                      Request a Free Quote
                    </h2>
                    <p className="text-slate-500 text-sm mb-6">
                      Fill in your details and we&apos;ll prepare a custom quote for your project.
                    </p>
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
                            placeholder="Champ"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-charcoal text-sm placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
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
                            placeholder="champlanka10@gmail.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-charcoal text-sm placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
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
                            placeholder="+94 76 535 1012"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-charcoal text-sm placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Required *</label>
                          <select
                            name="service"
                            required
                            value={form.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-charcoal text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all bg-white"
                          >
                            <option value="">Select a service</option>
                            {allProductServiceOptions.map((s) => (
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
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-charcoal text-sm placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all resize-none"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                        className="w-full btn-primary py-4 text-base disabled:opacity-70"
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
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
              </div>
            </FadeIn>

            {/* Map — tall, matches form height on desktop */}
            <FadeIn direction="right" delay={0.1} className="h-full min-h-0">
              <div className="flex flex-col h-full min-h-[380px] sm:min-h-[420px] lg:min-h-[560px]">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
                  <div>
                    <h2 className="font-display font-bold text-brand-charcoal text-2xl sm:text-3xl">
                      Visit Our Shop
                    </h2>
                    <p className="text-slate-500 text-sm mt-1 flex items-start gap-1.5">
                      <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      {companyInfo.address.full}
                    </p>
                  </div>
                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 btn-primary text-sm shrink-0"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>

                <div className="relative flex-1 rounded-2xl overflow-hidden border border-slate-200 shadow-card bg-slate-200 min-h-[360px] sm:min-h-[400px] lg:min-h-0">
                  <iframe
                    title="JaffnaPrinters Location on Google Maps"
                    src={mapEmbedUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red-600 transition-colors font-display"
                >
                  Open in Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
