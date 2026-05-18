import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'All Products', path: '/products' },
    { label: 'PrintTech', path: '/printtech' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/5">
      <div className="bg-brand-gradient">
        <div className="container-custom py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-slate-900 text-xl">Stay updated with our latest offers</p>
            <p className="text-slate-800/70 text-sm mt-0.5">Subscribe for exclusive deals and printing tips</p>
          </div>
          <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 sm:w-64 px-4 py-2.5 rounded-full text-sm bg-slate-900/10 placeholder-slate-700 text-slate-900 font-medium border border-slate-900/20 focus:outline-none focus:border-slate-900/50"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 text-brand-gold rounded-full text-sm font-semibold font-display flex items-center gap-1.5 hover:bg-slate-800 transition-colors"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                <div className="text-slate-500 text-[10px] tracking-widest uppercase">Premium Print Solutions</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for premium printing solutions.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-gold/20 hover:text-brand-gold text-slate-400 flex items-center justify-center transition-all duration-300"
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
            <h4 className="font-display font-semibold text-white mb-5 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  123 Hospital Road,<br />Jaffna, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+94212234567" className="text-slate-400 hover:text-brand-gold text-sm transition-colors">
                  +94 21 223 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:info@jaffnaprinters.lk" className="text-slate-400 hover:text-brand-gold text-sm transition-colors">
                  info@jaffnaprinters.lk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
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
