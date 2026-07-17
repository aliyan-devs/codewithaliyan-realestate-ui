import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Landmark, TrendingUp, Presentation, Image, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Sellers() {
  const [valuationData, setValuationData] = useState({
    address: '',
    beds: '4',
    sqft: '',
    condition: 'Excellent',
    email: '',
    name: ''
  });

  const [calcStatus, setCalcStatus] = useState<'idle' | 'analyzing' | 'completed'>('idle');
  const [simulatedValue, setSimulatedValue] = useState<{ low: number; high: number; avgSqft: number } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValuationData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateValuation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valuationData.address || !valuationData.sqft || !valuationData.email) {
      alert('Please fill out all required fields.');
      return;
    }

    setCalcStatus('analyzing');

    // Simulate luxury pricing model algorithm
    setTimeout(() => {
      const parsedSqft = parseFloat(valuationData.sqft) || 5000;
      
      // Luxury price ranges from $1,500 to $3,200 per sqft depending on condition
      let basePricePerSqft = 1800;
      if (valuationData.condition === 'Showroom Modern') basePricePerSqft = 2600;
      if (valuationData.condition === 'Excellent') basePricePerSqft = 2100;
      if (valuationData.condition === 'Good') basePricePerSqft = 1600;

      const estimatedMid = parsedSqft * basePricePerSqft;
      const lowVal = Math.round((estimatedMid * 0.92) / 10000) * 10000;
      const highVal = Math.round((estimatedMid * 1.08) / 10000) * 10000;
      const avgSq = Math.round(estimatedMid / parsedSqft);

      setSimulatedValue({
        low: lowVal,
        high: highVal,
        avgSqft: avgSq
      });
      setCalcStatus('completed');
    }, 2200);
  };

  const handleResetValuation = () => {
    setValuationData({
      address: '',
      beds: '4',
      sqft: '',
      condition: 'Excellent',
      email: '',
      name: ''
    });
    setCalcStatus('idle');
    setSimulatedValue(null);
  };

  const marketingPillars = [
    {
      icon: Presentation,
      title: 'Cinematic Property Films',
      desc: 'We produce custom, high-impact cinematic lifestyle videos for every exclusive listing, telling an emotional architectural narrative that targets elite investors globally.'
    },
    {
      icon: Image,
      title: 'Bespoke Interior Art Staging',
      desc: 'Our design coordinators curate hand-picked mid-century and modern furnishings, original museum-grade canvases, and sculptures to emphasize the residence\'s volume and aesthetic.'
    },
    {
      icon: TrendingUp,
      title: 'Targeted High-Impact Press',
      desc: 'We secure exclusive features for your property inside Forbes, The Wall Street Journal, Architectural Digest, and The Hollywood Reporter, securing unmatched editorial coverage.'
    }
  ];

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-28 pb-24 font-sans text-brand-black">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-accent-red font-semibold block">
            PREMIUM LISTING STRATEGY
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-widest uppercase">
            SELLING YOUR ARCHITECTURAL MASTERPIECE
          </h1>
          <p className="text-xs md:text-sm text-brand-black/60 max-w-xl mx-auto tracking-wide font-light leading-relaxed">
            Representing Southern California\'s most iconic estates. Our unparalleled media network, design curation, and contract negotiation secure the true, maximum value of your asset.
          </p>
        </div>

        {/* Content split panel */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Valuation Form / Valuation Calculator (Highly interactive!) */}
          <div className="bg-neutral-50 border border-black/10 rounded-sm p-8 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-24 h-[1.5px] bg-accent-red"></div>
            
            <AnimatePresence mode="wait">
              {calcStatus === 'idle' && (
                <motion.form
                  key="valuation-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={calculateValuation}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.25em] text-warm-gold font-semibold mb-1">
                      INSTANT ASSET APPRAISAL
                    </h3>
                    <h4 className="text-lg font-serif tracking-widest uppercase text-brand-black">
                      ESTIMATE HOME VALUATION
                    </h4>
                    <p className="text-[11px] text-brand-black/50 tracking-wider font-light mt-1.5 leading-relaxed">
                      Enter your estate parameters below to activate our high-end Southern California pricing engine and estimate current off-market valuation.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Address */}
                    <div>
                      <input
                        type="text"
                        name="address"
                        required
                        value={valuationData.address}
                        onChange={handleInputChange}
                        placeholder="PROPERTY ADDRESS *"
                        className="w-full bg-transparent border-b border-black/15 hover:border-black/25 focus:border-accent-red py-3 text-xs tracking-widest text-brand-black uppercase placeholder-brand-black/30 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Bed selector */}
                      <div>
                        <select
                          name="beds"
                          value={valuationData.beds}
                          onChange={handleInputChange}
                          className="w-full bg-white border-b border-black/15 hover:border-black/25 focus:border-accent-red py-3 text-xs tracking-widest text-brand-black uppercase focus:outline-none transition-all duration-300"
                        >
                          <option value="3">3 BEDROOMS</option>
                          <option value="4">4 BEDROOMS</option>
                          <option value="5">5 BEDROOMS</option>
                          <option value="6">6+ BEDROOMS</option>
                        </select>
                      </div>

                      {/* Square Footage */}
                      <div>
                        <input
                          type="number"
                          name="sqft"
                          required
                          value={valuationData.sqft}
                          onChange={handleInputChange}
                          placeholder="TOTAL SQUARE FEET *"
                          className="w-full bg-transparent border-b border-black/15 hover:border-black/25 focus:border-accent-red py-3 text-xs tracking-widest text-brand-black uppercase placeholder-brand-black/30 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Condition Selector */}
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-brand-black/50 font-semibold block mb-1">
                        ESTATE FINISH CONDITION
                      </label>
                      <select
                        name="condition"
                        value={valuationData.condition}
                        onChange={handleInputChange}
                        className="w-full bg-white border-b border-black/15 hover:border-black/25 focus:border-accent-red py-3 text-xs tracking-widest text-brand-black uppercase focus:outline-none transition-all duration-300"
                      >
                        <option value="Showroom Modern">Showroom / Brand New Modern</option>
                        <option value="Excellent">Excellent / Hand-Crafted luxury</option>
                        <option value="Good">Good / Well Maintained estate</option>
                      </select>
                    </div>

                    {/* Contact info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={valuationData.name}
                          onChange={handleInputChange}
                          placeholder="YOUR FULL NAME *"
                          className="w-full bg-transparent border-b border-black/15 hover:border-black/25 focus:border-accent-red py-3 text-xs tracking-widest text-brand-black uppercase placeholder-brand-black/30 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={valuationData.email}
                          onChange={handleInputChange}
                          placeholder="YOUR EMAIL *"
                          className="w-full bg-transparent border-b border-black/15 hover:border-black/25 focus:border-accent-red py-3 text-xs tracking-widest text-brand-black uppercase placeholder-brand-black/30 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-accent-red hover:bg-white text-white hover:text-brand-black font-semibold text-xs tracking-[0.3em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-2xl"
                  >
                    <Landmark className="w-4 h-4" />
                    <span>CALCULATE PRIVATE ESTIMATE</span>
                  </button>
                </motion.form>
              )}

              {calcStatus === 'analyzing' && (
                <motion.div
                  key="analyzing-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 flex flex-col items-center justify-center text-center space-y-4 font-sans"
                >
                  <div className="w-12 h-12 border-2 border-t-accent-red border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                  <h4 className="text-xs uppercase tracking-[0.3em] text-warm-gold font-semibold animate-pulse">
                    COMMENCING VALUATION MATRIX
                  </h4>
                  <p className="text-[11px] text-brand-black/60 max-w-xs leading-relaxed font-light tracking-wider">
                    Analyzing active luxury inventories, local closing comps, tax registries, and finish metrics for <span className="text-brand-black font-medium">{valuationData.address}</span>...
                  </p>
                </motion.div>
              )}

              {calcStatus === 'completed' && simulatedValue && (
                <motion.div
                  key="completed-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 font-sans text-center py-4"
                >
                  <div className="w-12 h-12 rounded-full bg-accent-red/10 border border-accent-red/30 flex items-center justify-center text-accent-red mx-auto animate-bounce">
                    <CheckCircle className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-warm-gold font-semibold block">
                      PRIVATE VALUATION REPORT
                    </span>
                    <h4 className="text-sm font-serif tracking-wider uppercase text-brand-black/70 line-clamp-1 px-4">
                      {valuationData.address}
                    </h4>
                  </div>

                  {/* Calculated Range Box */}
                  <div className="bg-white p-6 rounded border border-black/10 shadow-lg space-y-3">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-brand-black/50 block">ESTIMATED EXCLUSIVE RANGE</span>
                    <p className="text-2xl md:text-3xl font-serif text-accent-red font-light tracking-wide">
                      ${simulatedValue.low.toLocaleString()} — ${simulatedValue.high.toLocaleString()}
                    </p>
                    <div className="pt-3 border-t border-black/10 grid grid-cols-2 gap-4 text-left text-[11px] text-brand-black/60 tracking-wider">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-brand-black/40 block">AVERAGE COST/SQFT</span>
                        <strong className="text-brand-black font-mono font-medium">${simulatedValue.avgSqft} / sqft</strong>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-brand-black/40 block">REPORT PRECISION</span>
                        <strong className="text-brand-black font-medium uppercase text-warm-gold">High (Class A)</strong>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-brand-black/50 leading-relaxed font-light text-left px-2">
                    * This calculation is a high-fidelity algorithmic estimate. Current market surges, off-market client demand, and custom design finishes could elevate value. A broker valuation briefing is recommended.
                  </p>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={handleResetValuation}
                      className="flex-1 py-3 bg-transparent border border-black/15 hover:border-black/25 text-brand-black hover:bg-black/5 rounded-sm text-[10px] uppercase tracking-widest font-semibold transition-all cursor-pointer"
                    >
                      Recalculate
                    </button>
                    <button
                      onClick={() => alert('Our managing partners have been notified. We will reach out to schedule your professional custom property valuation walkthrough.')}
                      className="flex-1 py-3 bg-accent-red hover:bg-white text-white hover:text-brand-black rounded-sm text-[10px] uppercase tracking-widest font-semibold transition-all cursor-pointer"
                    >
                      Book Professional Audit
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Editorial Marketing Pillars */}
          <div className="space-y-8 lg:pl-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
                GLOBAL MARKETING CHANNELS
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-light uppercase tracking-wider text-brand-black">
                MAXIMIZING EXPOSURE, SECURING DISCRETION
              </h2>
              <p className="text-brand-black/70 font-light text-sm md:text-base leading-relaxed tracking-wide">
                We represent your property with standard-bearing sophistication. We don\'t simply put your estate on local listing aggregates. We develop bespoke, luxury campaigns that ensure maximum global target reach.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {marketingPillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div key={pillar.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-sm bg-accent-red/10 border border-accent-red/25 flex items-center justify-center text-accent-red flex-shrink-0 mt-1">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-sm font-serif font-medium uppercase tracking-wider text-brand-black">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-brand-black/60 leading-relaxed font-light tracking-wide">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        {/* Global Statistics Box */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 mt-16 bg-neutral-100 border-y border-black/10 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-1.5">
              <span className="font-serif text-3xl md:text-4xl font-light text-accent-red">98.5%</span>
              <p className="text-[10px] uppercase tracking-widest text-brand-black/50 font-light">Listing Price Realized</p>
            </div>
            <div className="space-y-1.5 border-y sm:border-y-0 sm:border-x border-black/10 py-4 sm:py-0">
              <span className="font-serif text-3xl md:text-4xl font-light text-accent-red">14 Days</span>
              <p className="text-[10px] uppercase tracking-widest text-brand-black/50 font-light">Average Listing Turnaround</p>
            </div>
            <div className="space-y-1.5">
              <span className="font-serif text-3xl md:text-4xl font-light text-accent-red">$3.3 Billion+</span>
              <p className="text-[10px] uppercase tracking-widest text-brand-black/50 font-light">Total Closed Volume</p>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
