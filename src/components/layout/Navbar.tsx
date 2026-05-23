import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Phone, Mail, Facebook, Instagram} from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'All Products', path: '/products' },
  { label: 'PrintTech', path: '/printtech' },
  { label: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar */}
      <div className="bg-brand-red text-white">
        <div className="container-custom flex items-center justify-between py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href="tel:+94212234567"
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>+94 21 223 4567</span>
            </a>
            <a
              href="mailto:info@jaffnaprinters.lk"
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xs:inline">info@jaffnaprinters.lk</span>
              <span className="xs:hidden">Email Us</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`transition-all duration-300 ${
          isScrolled ? 'glass-nav shadow-nav py-2' : 'bg-white py-3 border-b border-slate-100'
        }`}
      >
        <div className="container-custom flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src="/logo.png"
              alt="Jaffna Printers"
              className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-red/20 group-hover:ring-brand-red/40 transition-all"
            />
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-bold text-brand-charcoal text-lg tracking-tight">
                Jaffna<span className="text-gradient-gold">Printers</span>
              </div>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link whitespace-nowrap ${
                  location.pathname === link.path ? 'nav-link-active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link to="/contact" className="btn-primary px-6 py-2.5 text-sm rounded-btn">
              Get a Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-brand-charcoal hover:text-brand-red transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-white border-b border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-btn font-display font-medium text-base transition-colors ${
                    location.pathname === link.path
                      ? 'text-brand-red bg-brand-red/5 font-semibold'
                      : 'text-brand-charcoal/80 hover:text-brand-red hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-3 btn-primary py-3.5 text-base justify-center"
              >
                Get a Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
