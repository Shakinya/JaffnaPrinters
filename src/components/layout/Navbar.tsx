import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'All Products', path: '/products' },
  { label: 'PrintTech', path: '/printtech' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <motion.div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Jaffna Printers"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-red shadow-lg shadow-brand-red/30 group-hover:shadow-brand-red/50 transition-shadow duration-300"
            />
            <motion.div className="leading-tight">
              <div className="font-display font-bold text-white text-xl tracking-tight">
                Jaffna<span className="text-brand-gold">Printers</span>
              </div>
              <div className="text-slate-400 text-[10px] font-medium tracking-widest uppercase">
                Premium Print Solutions
              </div>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-sm font-medium font-display transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-brand-gold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-red to-brand-gold text-slate-900 font-semibold text-sm rounded-full font-display hover:shadow-lg hover:shadow-brand-red/40 transition-all duration-300"
            >
              Get a Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 right-0 z-40 bg-slate-900/98 backdrop-blur-xl pt-24 pb-8 px-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl font-display font-medium text-base transition-colors ${
                    location.pathname === link.path
                      ? 'text-brand-gold bg-brand-gold/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-red to-brand-gold text-slate-900 font-semibold rounded-full font-display"
              >
                Get a Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
