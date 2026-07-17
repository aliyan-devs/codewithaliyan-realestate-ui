import { Property } from '../types';
import { Link } from 'react-router-dom';
import { BedDouble, Bath, Maximize2, MapPin, Heart, Scale } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useCompare } from '../context/CompareContext';

interface PropertyCardProps {
  property: Property;
  key?: string;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isComparing, toggleCompare, maxReached } = useCompare();
  const saved = isFavorite(property.id);
  const comparing = isComparing(property.id);

  // Format price helper (e.g., 28500000 -> $28,500,000)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Link to={`/properties/${property.id}`} className="block group font-sans">
      <div className="relative overflow-hidden bg-neutral-50 border border-black/10 group-hover:border-black/10 transition-all duration-500 shadow-xl rounded-sm">
        
        {/* Sale / Lease Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] uppercase tracking-[0.25em] bg-accent-red text-white px-3 py-1 rounded-sm font-semibold shadow-lg">
            For {property.type === 'sale' ? 'Sale' : 'Lease'}
          </span>
        </div>

        {/* Save (Heart) Button */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(property.id);
            }}
            aria-label={saved ? 'Remove from saved properties' : 'Save property'}
            className={`w-8 h-8 rounded-full flex items-center justify-center border backdrop-blur-sm shadow-lg transition-all cursor-pointer ${
              saved
                ? 'bg-accent-red border-accent-red text-white'
                : 'bg-white/80 border-black/10 text-brand-black hover:border-accent-red hover:text-accent-red'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Hero Image Container */}
        <div className="relative h-72 md:h-80 w-full overflow-hidden">
          {/* Image with zoom and grayscale-to-color transition */}
          <img
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 ease-out"
          />
          {/* Subtle dark bottom gradient inside image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

          {/* Property Type Badge */}
          <div className="absolute bottom-4 left-4 z-10">
            <span className="text-[9px] uppercase tracking-[0.25em] bg-white/80 text-warm-gold px-3 py-1 rounded-sm font-semibold border border-black/10 backdrop-blur-sm shadow-lg">
              {property.propertyType}
            </span>
          </div>

          {/* Floating Price in image bottom-right */}
          <div className="absolute bottom-4 right-4 z-10">
            <span className="text-lg md:text-xl font-serif font-light tracking-wide text-brand-black bg-white/90 px-4 py-2 border border-black/10 rounded-sm">
              {formatPrice(property.price)}
            </span>
          </div>
        </div>

        {/* Information Body */}
        <div className="p-6">
          
          {/* City Subtitle + Compare toggle */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-warm-gold text-[10px] uppercase tracking-[0.25em] font-semibold">
              <MapPin className="w-3 h-3 text-accent-red flex-shrink-0" />
              <span>{property.city}</span>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleCompare(property.id);
              }}
              disabled={!comparing && maxReached}
              title={!comparing && maxReached ? 'You can compare up to 3 properties' : 'Add to compare'}
              className={`flex items-center gap-1 text-[9px] uppercase tracking-widest font-semibold px-2 py-1 rounded-sm border transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
                comparing
                  ? 'bg-brand-black text-white border-brand-black'
                  : 'bg-transparent text-brand-black/60 border-black/10 hover:border-accent-red hover:text-accent-red'
              }`}
            >
              <Scale className="w-3 h-3" />
              {comparing ? 'Added' : 'Compare'}
            </button>
          </div>

          {/* Property Title & Red Hover Underline */}
          <div className="relative inline-block mb-3">
            <h3 className="text-base font-serif tracking-widest text-brand-black uppercase group-hover:text-accent-red transition-colors duration-300">
              {property.title}
            </h3>
            {/* Animated Red Line Reveal on Hover */}
            <div className="w-0 group-hover:w-full h-[1.5px] bg-accent-red transition-all duration-300 mt-1"></div>
          </div>

          {/* Address */}
          <p className="text-xs text-brand-black/60 tracking-wide font-light line-clamp-1 mb-5">
            {property.address}
          </p>

          {/* Specs grid separated by thin dividers */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-black/10 text-center text-brand-black/70">
            
            {/* Beds */}
            <div className="flex flex-col items-center justify-center border-r border-black/10 py-1">
              <div className="flex items-center gap-1.5 text-brand-black/90">
                <BedDouble className="w-3.5 h-3.5 text-accent-red" />
                <span className="text-xs font-semibold font-mono">{property.beds}</span>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-brand-black/50 mt-1 font-light">Beds</span>
            </div>

            {/* Baths */}
            <div className="flex flex-col items-center justify-center border-r border-black/10 py-1">
              <div className="flex items-center gap-1.5 text-brand-black/90">
                <Bath className="w-3.5 h-3.5 text-accent-red" />
                <span className="text-xs font-semibold font-mono">{property.baths}</span>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-brand-black/50 mt-1 font-light">Baths</span>
            </div>

            {/* Sqft */}
            <div className="flex flex-col items-center justify-center py-1">
              <div className="flex items-center gap-1.5 text-brand-black/90">
                <Maximize2 className="w-3.5 h-3.5 text-accent-red" />
                <span className="text-xs font-semibold font-mono">{property.sqft.toLocaleString()}</span>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-brand-black/50 mt-1 font-light">Sq Ft</span>
            </div>

          </div>

          {/* View Details Call to Action */}
          <div className="mt-5 pt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-black/80 group-hover:text-accent-red transition-colors">
            <span className="group-hover:translate-x-1 transition-transform">Explore Residence</span>
            <span className="text-accent-red">→</span>
          </div>

        </div>

      </div>
    </Link>
  );
}
