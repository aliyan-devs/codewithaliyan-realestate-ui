import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, Send, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-brand-black border-t border-white/5 pt-20 pb-12 font-sans relative">
      
      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to Top"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-black hover:bg-accent-red text-white/70 hover:text-white border border-white/10 hover:border-accent-red flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Upper Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-white/5 items-center">
          
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold">
              THE EXCLUSIVE PORTFOLIO
            </h3>
            <p className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider leading-relaxed">
              SUBSCRIBE TO RECEIVE PRIVATE, OFF-MARKET RESIDENCES
            </p>
            <p className="text-xs text-white/50 tracking-wide max-w-md font-light">
              Gain premium priority access to off-market estates, designer penthouses, and global real estate developments before public syndication.
            </p>
          </div>

          <div>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-md border-b border-white/20 hover:border-white/40 focus-within:border-accent-red py-2 transition-colors">
                <input
                  type="email"
                  required
                  placeholder="EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-xs uppercase tracking-widest text-white placeholder-white/30 py-2 focus:outline-none flex-grow"
                />
                <button
                  type="submit"
                  className="px-4 text-xs font-semibold text-accent-red hover:text-white uppercase tracking-widest transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>JOIN</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-4 bg-white/5 border border-white/10 rounded-sm text-center max-w-md">
                <p className="text-xs text-warm-gold uppercase tracking-[0.2em] font-semibold">
                  CONGRATULATIONS
                </p>
                <p className="text-[11px] text-white/70 tracking-wide mt-1 font-light">
                  You have been successfully added to our private advisory ledger.
                </p>
              </div>
            )}
          </div>

        </div>

        {/* Middle Directory Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 py-16">
          
          {/* Column 1: Brand / Emblem */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* Simple inline representation of logo */}
              <div className="w-8 h-8 rounded-full border-2 border-accent-red flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-red"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
                  Oppenheim
                </span>
                <span className="text-[8px] font-light tracking-[0.3em] text-white/50 uppercase">
                  Real Estate
                </span>
              </div>
            </div>
            
            <p className="text-xs text-white/40 leading-relaxed tracking-wider font-light">
              Representing standard-bearing architectural assets and private compounds across the globe\'s most coveted beachside and metropolitan locations.
            </p>
          </div>

          {/* Column 2: Navigation links */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-warm-gold font-semibold">
              THE BROKERAGE
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-light tracking-widest uppercase">
              <li>
                <Link to="/properties" className="hover:text-accent-red transition-colors">Our Properties</Link>
              </li>
              <li>
                <Link to="/buyers" className="hover:text-accent-red transition-colors">Buyers Services</Link>
              </li>
              <li>
                <Link to="/sellers" className="hover:text-accent-red transition-colors">Sellers Advisory</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent-red transition-colors">About Our Team</Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-accent-red transition-colors">Market Insights</Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-accent-red transition-colors">Press & Media</Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-accent-red transition-colors">Saved Properties</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate offices directory */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-warm-gold font-semibold">
              OFFICE REGISTRY
            </h4>
            <ul className="space-y-3.5 text-[11px] text-white/60 tracking-wider font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-accent-red flex-shrink-0 mt-0.5" />
                <span className="leading-tight">
                  <strong className="text-white font-medium block">LOS ANGELES</strong>
                  8625 Sunset Boulevard<br />West Hollywood, CA 90069
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-accent-red flex-shrink-0 mt-0.5" />
                <span className="leading-tight">
                  <strong className="text-white font-medium block">NEWPORT BEACH</strong>
                  2908 East Coast Hwy<br />Corona Del Mar, CA 92625
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact / License */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-warm-gold font-semibold">
              DIRECT CHANNELS
            </h4>
            <ul className="space-y-3 text-xs text-white/60 font-light tracking-wide">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent-red flex-shrink-0" />
                <a href="tel:+13105550100" className="hover:text-white transition-colors tracking-widest font-mono">
                  +1 (310) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-red flex-shrink-0" />
                <a href="mailto:la@oppenheim.luxury" className="hover:text-white transition-colors tracking-wider">
                  la@oppenheim.luxury
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-accent-red flex-shrink-0" />
                <span className="text-[10px] uppercase tracking-widest text-white/40">
                  DRE license #0183829
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Legal Disclosures & Credits */}
        <div className="border-t border-white/5 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 tracking-widest uppercase">
          <div>
            &copy; {currentYear} THE OPPENHEIM GROUP REAL ESTATE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span className="text-white/10">|</span>
            <span className="text-warm-gold font-medium">Bespoke Design</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
