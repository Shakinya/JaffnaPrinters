import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Phone, Mail, ShoppingCart } from 'lucide-react';
import { VscSparkleFilled } from "react-icons/vsc";
import { companyInfo } from '../../data/site';
import { socialLinks } from '../../data/socialLinks';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'All Products', path: '/products' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  { label: 'PrintTech', path: '/printtech', highlight: true },
];

function NavLinkLabel({ label, highlight }: { label: string; highlight?: boolean }) {
  if (!highlight) return <>{label}</>;

  return (
    <span className="inline-flex items-center gap-1">
      {label}
      <motion.span
        animate={{
          y: [-5, -3, -5],
          scale: [1, 1.12, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <VscSparkleFilled className="w-4 h-4 text-brand-red" />
      </motion.span>
    </span>
  );
}

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const syncHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--site-header-height',
          `${headerRef.current.offsetHeight}px`,
        );
      }
    };

    syncHeaderHeight();
    const observer = new ResizeObserver(syncHeaderHeight);
    if (headerRef.current) observer.observe(headerRef.current);

    window.addEventListener('resize', syncHeaderHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncHeaderHeight);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar */}
      <div className="nav-top-bar text-white">
        <div className="container-custom flex items-center justify-between py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={`tel:${companyInfo.phones.office.tel}`}
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{companyInfo.phones.office.display}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xs:inline">{companyInfo.email}</span>
              <span className="xs:hidden">Email Us</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
        <div className="container-custom flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src="/logo.png"
              alt="Jaffna Printers"
              className="w-11 h-11 rounded-full object-cover ring-2 ring-red-200 group-hover:ring-red-300 transition-all"
            />
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-bold text-brand-charcoal text-lg tracking-tight">
                Jaffna<span className="text-gradient-gold">Printers</span>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto shrink-0">
            <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link whitespace-nowrap ${
                    location.pathname === link.path ? 'nav-link-active' : ''
                  }`}
                >
                  <NavLinkLabel label={link.label} highlight={'highlight' in link && link.highlight} />
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={openCart}
              className="relative inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 text-brand-charcoal hover:border-brand-red/40 hover:text-brand-red transition-colors"
              aria-label={`Open cart${totalItems > 0 ? `, ${totalItems} items` : ''}`}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[1.125rem] h-[1.125rem] px-1 rounded-full bg-brand-red text-white text-[10px] font-display font-bold flex items-center justify-center leading-none">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            <Link
              to="/contact"
              className="hidden md:inline-flex btn-primary px-5 lg:px-6 py-2.5 ml-2 text-sm rounded-btn whitespace-nowrap"
            >
              Get a Quote <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-brand-charcoal hover:text-red-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
                      ? 'text-gradient-brand bg-premium-red-soft font-semibold'
                      : 'text-brand-charcoal/80 hover:bg-red-50/60 hover:text-red-800'
                  }`}
                >
                  <NavLinkLabel label={link.label} highlight={'highlight' in link && link.highlight} />
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openCart();
                }}
                className="mt-2 flex items-center justify-between px-4 py-3 rounded-btn font-display font-medium text-base text-brand-charcoal/80 hover:bg-red-50/60 hover:text-red-800 transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Cart
                </span>
                {totalItems > 0 && (
                  <span className="min-w-[1.25rem] h-5 px-1.5 rounded-full bg-brand-red text-white text-xs font-bold flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>
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
