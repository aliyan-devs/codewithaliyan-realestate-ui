import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import PropertyCard from '../components/PropertyCard';
import MortgageCalculator from '../components/MortgageCalculator';
import ImageLightbox from '../components/ImageLightbox';
import { useFavorites } from '../context/FavoritesContext';
import { PROPERTIES, AGENTS } from '../data/mockData';
import { BedDouble, Bath, Maximize2, Calendar, Landmark, MapPin, ArrowLeft, Phone, Mail, Heart, Expand } from 'lucide-react';

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const property = PROPERTIES.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState<string>('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { isFavorite, toggleFavorite } = useFavorites();

  // Set default active image when property changes
  useEffect(() => {
    if (property) {
      setActiveImage(property.images[0]);
    }
  }, [property]);

  if (!property) {
    return (
      <PageTransition>
        <div className="bg-white min-h-screen pt-36 flex flex-col items-center justify-center text-brand-black px-6">
          <Landmark className="w-12 h-12 text-accent-red mb-4" />
          <h2 className="text-2xl font-serif tracking-widest uppercase mb-2">Residence Not Found</h2>
          <p className="text-xs text-brand-black/60 tracking-wider font-light mb-6 text-center max-w-sm">
            The property listing you are seeking does not exist or has been sold off-market.
          </p>
          <Link
            to="/properties"
            className="px-6 py-3 bg-accent-red text-white uppercase text-xs tracking-widest font-semibold rounded-sm hover:bg-white hover:text-brand-black transition-all cursor-pointer"
          >
            Return to Portfolio
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Find assigned agent
  const agent = AGENTS.find((a) => a.id === property.agentId) || AGENTS[0];

  // Get similar properties in the same city or general featured
  const similarProperties = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.city === property.city || p.featured)
  ).slice(0, 3);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pb-24 font-sans text-brand-black">
        
        {/* Gallery / Media Section */}
        <div className="relative w-full bg-white">
          
          {/* Back button + Save button overlay */}
          <div className="absolute top-28 left-6 md:left-12 right-6 md:right-12 z-20 flex items-center justify-between">
            <button
              onClick={() => navigate('/properties')}
              className="flex items-center gap-2 bg-white/80 hover:bg-accent-red text-brand-black/90 hover:text-white border border-black/10 hover:border-accent-red px-4 py-2 rounded-sm text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer shadow-2xl"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Listings</span>
            </button>

            <button
              onClick={() => toggleFavorite(property.id)}
              aria-label={isFavorite(property.id) ? 'Remove from saved properties' : 'Save property'}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer shadow-2xl border ${
                isFavorite(property.id)
                  ? 'bg-accent-red border-accent-red text-white'
                  : 'bg-white/80 hover:bg-accent-red text-brand-black/90 hover:text-white border-black/10 hover:border-accent-red'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isFavorite(property.id) ? 'fill-white' : ''}`} />
              <span>{isFavorite(property.id) ? 'Saved' : 'Save'}</span>
            </button>
          </div>

          {/* Large Hero Image */}
          <div
            className="w-full h-[55vh] md:h-[65vh] overflow-hidden relative cursor-zoom-in"
            onClick={() => {
              setLightboxIndex(property.images.indexOf(activeImage));
              setLightboxOpen(true);
            }}
          >
            <img
              src={activeImage}
              alt={property.title}
              loading="eager"
              className="w-full h-full object-cover transition-opacity duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-black/30" />
            <div className="absolute bottom-24 right-6 md:right-12 z-20">
              <span className="flex items-center gap-2 bg-white/80 text-brand-black px-4 py-2 rounded-sm text-[10px] uppercase tracking-[0.2em] shadow-2xl">
                <Expand className="w-3.5 h-3.5" />
                View Full Gallery
              </span>
            </div>
          </div>

          {/* Thumbnail Gallery Row */}
          <div className="absolute bottom-4 left-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-3 overflow-x-auto scrollbar-none pb-2">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-24 h-16 md:w-32 md:h-20 flex-shrink-0 border rounded-sm overflow-hidden transition-all duration-300 ${
                    activeImage === img
                      ? 'border-accent-red scale-102 shadow-2xl'
                      : 'border-black/15 hover:border-black/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Primary Page Layout Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Details & Specs (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Header Title block */}
            <div className="space-y-4 border-b border-black/10 pb-6">
              
              <div className="flex flex-wrap items-center gap-2 text-warm-gold text-xs uppercase tracking-[0.25em] font-semibold">
                <MapPin className="w-4 h-4 text-accent-red" />
                <span>{property.city}</span>
                <span className="text-brand-black/30">|</span>
                <span>{property.propertyType}</span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-black uppercase tracking-wider leading-tight">
                  {property.title}
                </h1>
                <span className="text-2xl md:text-3xl font-serif font-light text-accent-red tracking-wide whitespace-nowrap">
                  {formatPrice(property.price)}
                </span>
              </div>

              <p className="text-sm text-brand-black/60 tracking-widest font-light font-mono">
                {property.address}
              </p>

            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-neutral-50 p-6 border border-black/10 rounded-sm">
              
              {/* Bed count */}
              <div className="text-center p-4 border-r border-black/10">
                <BedDouble className="w-5 h-5 text-accent-red mx-auto mb-2" />
                <span className="text-lg font-semibold font-mono text-brand-black block">{property.beds}</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-black/50 font-light">Bedrooms</span>
              </div>

              {/* Bath count */}
              <div className="text-center p-4 md:border-r border-black/10">
                <Bath className="w-5 h-5 text-accent-red mx-auto mb-2" />
                <span className="text-lg font-semibold font-mono text-brand-black block">{property.baths}</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-black/50 font-light">Bathrooms</span>
              </div>

              {/* Square Footage */}
              <div className="text-center p-4 border-r border-black/10">
                <Maximize2 className="w-5 h-5 text-accent-red mx-auto mb-2" />
                <span className="text-lg font-semibold font-mono text-brand-black block">{property.sqft.toLocaleString()}</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-black/50 font-light">Square Feet</span>
              </div>

              {/* Year built / Lot size */}
              <div className="text-center p-4">
                <Calendar className="w-5 h-5 text-accent-red mx-auto mb-2" />
                <span className="text-lg font-semibold font-mono text-brand-black block">{property.yearBuilt || 2024}</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-black/50 font-light">Year Built</span>
              </div>

            </div>

            {/* Description Block */}
            <div className="space-y-4 leading-relaxed font-light text-brand-black/80 text-sm md:text-base tracking-wide">
              <h2 className="text-xs uppercase tracking-[0.25em] text-warm-gold font-semibold">
                PROPERTY OVERVIEW
              </h2>
              <p className="text-brand-black/90">
                {property.description}
              </p>
              <p>
                This prestigious compound embodies a unique synthesis of engineering prestige, luxury scale, and curated organic styling. Massive floor-to-ceiling retractable glass panel sliders vanish on hidden wall tracks to capture maximum sunlight and dynamic coastal breeze circulation. Dual gourmet custom kitchen suites contain premier built-in Miele appliances with hand-carved Calacatta marble slab prep stations.
              </p>
            </div>

            {/* Secondary specs / details checklist */}
            <div className="pt-6 border-t border-black/10 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.25em] text-warm-gold font-semibold">
                COMPREHENSIVE RESIDENCE FEATURES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-brand-black/70 tracking-widest font-light uppercase">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-red"></div>
                  <span>Smart Crestron Home Automation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-red"></div>
                  <span>Collector Underground Car Gallery ({property.lotSize !== 'N/A' ? '8-Car' : '3-Car'})</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-red"></div>
                  <span>Limestone and White Oak Flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-red"></div>
                  <span>Dual Heated Infinity Edge Pool</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-red"></div>
                  <span>Subterranean Custom Wine Salon</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-red"></div>
                  <span>Private Gym & Dry Swedish Sauna</span>
                </div>
              </div>
            </div>

            {/* Map Embed Frame */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.25em] text-warm-gold font-semibold">
                RESIDENCE LOCATION
              </h3>
              <div className="w-full h-80 rounded-sm overflow-hidden border border-black/10 shadow-2xl relative bg-neutral-50">
                <iframe
                  title="Property Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(property.address + ', ' + property.city)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Agent Concierge Card & Inquiry Form (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Agent Detail block */}
            <div className="bg-neutral-50 border border-black/10 rounded-sm p-6 space-y-6 shadow-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-warm-gold font-semibold block text-center border-b border-black/10 pb-3">
                LISTING CONCIERGE REPRESENTATIVE
              </span>
              
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0 border border-black/10">
                  <img src={agent.image} alt={agent.name} loading="lazy" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-serif font-medium uppercase tracking-wider text-brand-black">
                    {agent.name}
                  </h4>
                  <p className="text-[10px] text-accent-red uppercase tracking-widest font-semibold">
                    {agent.role}
                  </p>
                  <p className="text-[10px] text-brand-black/60 tracking-wide font-light leading-relaxed truncate">
                    {agent.email}
                  </p>
                </div>
              </div>

              <p className="text-xs text-brand-black/60 font-light leading-relaxed tracking-wide">
                {agent.bio}
              </p>

              <div className="pt-4 border-t border-black/10 grid grid-cols-1 gap-3">
                <a
                  href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                  className="py-3 bg-transparent hover:bg-black/5 text-brand-black border border-black/10 hover:border-black/20 text-[10px] font-semibold uppercase tracking-[0.25em] text-center rounded-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-accent-red" />
                  <span>Call {agent.name.split(' ')[0]}</span>
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="py-3 bg-transparent hover:bg-black/5 text-brand-black border border-black/10 hover:border-black/20 text-[10px] font-semibold uppercase tracking-[0.25em] text-center rounded-sm transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-accent-red" />
                  <span>Email Agent</span>
                </a>
              </div>
            </div>

            {/* Interactive Contact Inquiry Form */}
            <ContactForm
              title="Schedule Private Showing"
              subtitle="EXCLUSIVE ACCESS ONLY"
              agentName={agent.name}
              propertyTitle={property.title}
            />

            {/* Mortgage Calculator */}
            <MortgageCalculator defaultPrice={property.price} />

          </div>

        </div>

        {/* Similar Properties Carousel at Bottom */}
        {similarProperties.length > 0 && (
          <section id="similar-collections" className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-16 border-t border-black/10">
            <div className="space-y-2 mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
                COMPLEMENTARY OFFERS
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-light uppercase tracking-widest">
                SIMILAR LUXURY COLLECTIONS
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Fullscreen Image Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={property.images}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(idx) => {
            setLightboxIndex(idx);
            setActiveImage(property.images[idx]);
          }}
        />
      )}
    </PageTransition>
  );
}
