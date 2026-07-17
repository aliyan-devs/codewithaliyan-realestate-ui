import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import CityFilterBar from '../components/CityFilterBar';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES } from '../data/mockData';
import { SlidersHorizontal, ArrowUpDown, RefreshCw, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function OurProperties() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get active city from URL query params or default to 'All Locations'
  const selectedCity = searchParams.get('city') || 'All Locations';

  // State-based filters
  const [priceRange, setPriceRange] = useState<string>('all');
  const [beds, setBeds] = useState<string>('all');
  const [propType, setPropType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);

  // Sync state or reset
  const handleSelectCity = (city: string) => {
    if (city === 'All Locations') {
      searchParams.delete('city');
    } else {
      searchParams.set('city', city);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setPriceRange('all');
    setBeds('all');
    setPropType('all');
    setSortBy('default');
    searchParams.delete('city');
    setSearchParams(searchParams);
  };

  // Filter & Sort Logic using useMemo for performance
  const filteredProperties = useMemo(() => {
    let result = [...PROPERTIES];

    // 1. City/Location Filter
    if (selectedCity !== 'All Locations') {
      result = result.filter(
        (p) => p.city.toLowerCase() === selectedCity.toLowerCase()
      );
    }

    // 2. Price Range Filter
    if (priceRange !== 'all') {
      if (priceRange === 'under-15m') {
        result = result.filter((p) => p.price < 15000000);
      } else if (priceRange === '15m-25m') {
        result = result.filter((p) => p.price >= 15000000 && p.price <= 25000000);
      } else if (priceRange === 'over-25m') {
        result = result.filter((p) => p.price > 25000000);
      }
    }

    // 3. Bed Filter
    if (beds !== 'all') {
      const bedCount = parseInt(beds);
      result = result.filter((p) => p.beds >= bedCount);
    }

    // 4. Property Type Filter
    if (propType !== 'all') {
      result = result.filter(
        (p) => p.propertyType.toLowerCase().includes(propType.toLowerCase())
      );
    }

    // 5. Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'size-desc') {
      result.sort((a, b) => b.sqft - a.sqft);
    }

    return result;
  }, [selectedCity, priceRange, beds, propType, sortBy]);

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-28 pb-24 font-sans text-brand-black">
        
        {/* Page Title Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center py-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-accent-red font-semibold">
            THE SIGNATURE PORTFOLIO
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-widest uppercase">
            OUR PRESTIGIOUS RESIDENCES
          </h1>
          <p className="text-xs md:text-sm text-brand-black/60 max-w-xl mx-auto tracking-wide font-light leading-relaxed">
            Curate your search through our exclusive portfolio of ultra-premium real estate assets in Southern California\'s elite seaside and city communities.
          </p>
        </div>

        {/* City Horizontal Navigation Pills Component */}
        <div className="mb-8">
          <CityFilterBar selectedCity={selectedCity} onSelectCity={handleSelectCity} />
        </div>

        {/* Quick controls bar (Filter Toggle, Sort dropdown, Count) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 py-4 border-b border-black/10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFiltersPanel(!showFiltersPanel)}
              className={`flex items-center gap-2 border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all rounded-sm cursor-pointer ${
                showFiltersPanel || priceRange !== 'all' || beds !== 'all' || propType !== 'all'
                  ? 'bg-accent-red border-accent-red text-white'
                  : 'bg-transparent border-black/15 text-brand-black/80 hover:border-black/25'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Advanced Search</span>
            </button>

            <button
              onClick={handleResetFilters}
              title="Reset Search"
              className="text-brand-black/50 hover:text-accent-red transition-colors p-2 text-xs flex items-center gap-1.5 font-light tracking-wider"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Reset</span>
            </button>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs tracking-wider text-brand-black/60 font-light">
              <strong className="text-brand-black font-semibold font-mono">{filteredProperties.length}</strong> RESIDENCES FOUND
            </span>

            <div className="flex items-center gap-2 border border-black/10 px-4 py-2 bg-neutral-50 rounded-sm">
              <ArrowUpDown className="w-3.5 h-3.5 text-accent-red" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs uppercase tracking-widest text-brand-black/80 focus:outline-none focus:text-brand-black cursor-pointer"
              >
                <option value="default">Default Sorting</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="size-desc">Size: Largest Sq Ft</option>
              </select>
            </div>
          </div>
        </div>

        {/* Expandable Advanced Filters Panel with animations */}
        <AnimatePresence>
          {showFiltersPanel && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="max-w-7xl mx-auto px-6 md:px-12 overflow-hidden mb-10"
            >
              <div className="p-6 md:p-8 bg-neutral-50 border border-black/10 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl">
                
                {/* Filter 1: Price Range */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-warm-gold font-semibold block">
                    PRICE THRESHOLD
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full bg-white border border-black/10 hover:border-black/15 rounded-sm py-3 px-4 text-xs tracking-widest text-brand-black uppercase focus:outline-none focus:border-accent-red transition-all cursor-pointer"
                  >
                    <option value="all">ALL PRICES</option>
                    <option value="under-15m">UNDER $15,000,000</option>
                    <option value="15m-25m">$15,000,000 — $25,000,000</option>
                    <option value="over-25m">OVER $25,000,000</option>
                  </select>
                </div>

                {/* Filter 2: Bed Count */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-warm-gold font-semibold block">
                    BEDROOMS REQUIRED
                  </label>
                  <select
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    className="w-full bg-white border border-black/10 hover:border-black/15 rounded-sm py-3 px-4 text-xs tracking-widest text-brand-black uppercase focus:outline-none focus:border-accent-red transition-all cursor-pointer"
                  >
                    <option value="all">ANY BEDROOM COUNT</option>
                    <option value="4">4+ BEDROOMS</option>
                    <option value="5">5+ BEDROOMS</option>
                    <option value="6">6+ BEDROOMS</option>
                  </select>
                </div>

                {/* Filter 3: Property Type */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-warm-gold font-semibold block">
                    ARCHITECTURAL TYPE
                  </label>
                  <select
                    value={propType}
                    onChange={(e) => setPropType(e.target.value)}
                    className="w-full bg-white border border-black/10 hover:border-black/15 rounded-sm py-3 px-4 text-xs tracking-widest text-brand-black uppercase focus:outline-none focus:border-accent-red transition-all cursor-pointer"
                  >
                    <option value="all">ANY CATEGORY</option>
                    <option value="Estate">ESTATE</option>
                    <option value="Villa">VILLA</option>
                    <option value="Sanctuary">SANCTUARY</option>
                    <option value="Penthouse">PENTHOUSE</option>
                  </select>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Properties Grid Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filteredProperties.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProperties.map((property) => (
                  <motion.div
                    layout
                    key={property.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-24 bg-neutral-50 border border-black/10 rounded-sm max-w-4xl mx-auto px-6 space-y-4">
              <Sparkles className="w-8 h-8 text-warm-gold mx-auto animate-pulse" />
              <h4 className="text-lg font-serif tracking-widest uppercase text-brand-black/80">
                No Properties Match Criteria
              </h4>
              <p className="text-xs text-brand-black/60 tracking-wider font-light max-w-sm mx-auto">
                No listings fit your specific price or sizing choices at this moment. Please reset or search another elegant community.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 bg-accent-red hover:bg-white text-white hover:text-brand-black font-semibold text-xs tracking-widest uppercase rounded-sm transition-all cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </PageTransition>
  );
}
