import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useFavorites } from '../context/FavoritesContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { favorites } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Our Properties', path: '/properties' },
    { name: 'Buyers', path: '/buyers' },
    { name: 'Sellers', path: '/sellers' },
    { name: 'Offices', path: '/offices' },
    { name: 'About Us', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'In The Media', path: '/media' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const logoMark = (
    <svg className="w-10 h-10 text-accent-red" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" strokeDasharray="180 50" className="animate-[spin_25s_linear_infinite]" />
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 15" className="animate-[spin_15s_linear_infinite_reverse]" />
      <path d="M40 50L50 35L60 50M50 35V65" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-sans ${
          isScrolled
            ? 'bg-brand-black/95 border-b border-white/5 py-4 shadow-2xl backdrop-blur-md'
            : 'bg-gradient-to-b from-brand-black/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Brand / Left Side on Desktop */}
          <Link to="/" className="flex items-center gap-3 group">
            {logoMark}
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.25em] text-white uppercase group-hover:text-accent-red transition-colors duration-300">
                Oppenheim
              </span>
              <span className="text-[9px] font-light tracking-[0.4em] text-white/50 uppercase group-hover:text-white transition-colors duration-300">
                Luxury Real Estate
              </span>
            </div>
          </Link>

          {/* Nav Links / Desktop Center */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <div key={link.name} className="flex items-center">
                  <Link
                    to={link.path}
                    className={`text-[11px] uppercase tracking-[0.18em] px-3 py-2 transition-all duration-300 hover:text-accent-red relative ${
                      isActive ? 'text-accent-red font-medium' : 'text-white/80'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-3 right-3 h-[1px] bg-accent-red"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  {idx < navLinks.length - 1 && (
                    <span className="text-white/10 text-xs select-none">|</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Secondary CTA / Right Edge */}
          <div className="hidden xl:flex items-center gap-4 text-xs font-light tracking-widest text-white/60">
            <span className="hover:text-white transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-accent-red" /> +1 (310) 555-0100
            </span>
          </div>

          {/* Hamburger / Menu Control */}
          <div className="flex items-center gap-4">
            <Link
              to="/saved"
              aria-label="Saved Properties"
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/5 transition-all"
            >
              <Heart className={`w-4.5 h-4.5 ${favorites.length > 0 ? 'fill-accent-red text-accent-red' : ''}`} />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-accent-red text-white text-[9px] font-bold flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/5 transition-all"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="hidden lg:flex items-center gap-2 border border-white/20 hover:border-accent-red hover:bg-accent-red px-5 py-2 rounded-sm text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 text-white"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red group-hover:bg-white animate-pulse"></span>
              Private Access
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Overlay Menu for Mobile & Secondary Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-black/98 z-50 flex flex-col font-sans"
          >
            {/* Header in Overlay */}
            <div className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                {logoMark}
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-[0.25em] text-white uppercase">
                    Oppenheim
                  </span>
                  <span className="text-[9px] font-light tracking-[0.4em] text-white/50 uppercase">
                    Real Estate
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-accent-red hover:bg-accent-red transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto px-6 md:px-12 py-12 flex flex-col justify-between">
              <div className="flex flex-col gap-6 md:gap-8 max-w-lg">
                <p className="text-[10px] tracking-[0.3em] text-warm-gold uppercase font-medium">
                  Exclusive Navigation
                </p>
                <div className="flex flex-col gap-4 md:gap-6">
                  {navLinks.map((link, idx) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          className={`text-xl md:text-3xl font-serif tracking-widest uppercase hover:text-accent-red transition-colors block ${
                            isActive ? 'text-accent-red font-medium' : 'text-white/85'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer info */}
              <div className="border-t border-white/5 pt-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-white/60 tracking-widest font-light">
                <div className="space-y-2">
                  <p className="text-warm-gold text-[10px] uppercase tracking-[0.2em] font-semibold">Brokerage Headquarters</p>
                  <p className="leading-relaxed">8625 Sunset Boulevard<br />West Hollywood, CA 90069</p>
                </div>
                <div className="space-y-3">
                  <p className="text-warm-gold text-[10px] uppercase tracking-[0.2em] font-semibold">Contact Direct</p>
                  <a href="tel:+13105550100" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5 text-accent-red" /> +1 (310) 555-0100
                  </a>
                  <a href="mailto:la@oppenheim.luxury" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5 text-accent-red" /> la@oppenheim.luxury
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
