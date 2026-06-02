import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/site';
import { socialLinks } from '../../data/socialLinks';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'All Products', path: '/products' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ],
  printtech: [
    { label: 'Import & Export', path: '/printtech' },
    { label: 'Spare Parts Import', path: '/printtech' },
    { label: 'International Procurement', path: '/printtech' },
    { label: 'Technical Support', path: '/printtech' },
    { label: 'Island-wide Delivery', path: '/printtech' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="bg-brand-red border-t border-white/10">
        <div className="container-custom py-8 sm:py-10">
          <div className="red-surface-panel !p-6 sm:!p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
              <div className="shrink-0 max-w-md">
                <p className="font-display font-bold text-white text-xl sm:text-2xl leading-snug">
                  Stay updated with our latest offers
                </p>
                <p className="text-white text-sm sm:text-base mt-2 leading-relaxed">
                  Subscribe for exclusive deals and printing tips
                </p>
              </div>
              <form
                className="flex flex-col sm:flex-row gap-4 w-full lg:max-w-lg lg:shrink-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="input-field flex-1 min-w-0"
                />
                <button
                  type="submit"
                  className="btn-light min-h-[48px] px-6 sm:px-8 text-sm whitespace-nowrap w-full sm:w-auto"
                >
                  Subscribe <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="Jaffna Printers"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-red"
              />
              <div>
                <div className="font-display font-bold text-white text-xl">
                  Jaffna<span className="text-brand-gold">Printers</span>
                </div>
                <div className="text-slate-400 text-[10px] tracking-widest uppercase">Premium Print Solutions</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for premium printing solutions in Northern Sri Lanka.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-btn bg-white/10 hover:bg-brand-red text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path + link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-brand-gold text-sm transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {['Business Cards', 'Banners', 'Packaging', 'Wedding Cards', 'T-Shirt Printing', 'Stickers'].map((label) => (
                <li key={label}>
                  <Link
                    to="/products"
                    className="text-slate-400 hover:text-brand-gold text-sm transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm tracking-wider uppercase">PrintTech</h4>
            <ul className="space-y-3">
              {footerLinks.printtech.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-brand-gold text-sm transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  {companyInfo.address.line1},<br />{companyInfo.address.line2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-1.5 text-sm">
                  <a href={`tel:${companyInfo.phones.office.tel}`} className="block text-slate-400 hover:text-brand-gold transition-colors">
                    Office: {companyInfo.phones.office.display}
                  </a>
                  <a href={`tel:${companyInfo.phones.personal.tel}`} className="block text-slate-400 hover:text-brand-gold transition-colors">
                    Personal: {companyInfo.phones.personal.display}
                  </a>
                  <a href={`tel:${companyInfo.phones.landline.tel}`} className="block text-slate-400 hover:text-brand-gold transition-colors">
                    Landline: {companyInfo.phones.landline.display}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-slate-400 hover:text-brand-gold text-sm transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} JaffnaPrinters. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Crafted with precision in Jaffna, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
