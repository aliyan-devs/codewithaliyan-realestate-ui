import PageTransition from '../components/PageTransition';
import { OFFICES } from '../data/mockData';
import { MapPin, Phone, Mail, Navigation, Star } from 'lucide-react';

export default function Offices() {
  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-28 pb-24 font-sans text-brand-black">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-accent-red font-semibold block">
            THE REGIONAL DIRECTORY
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-widest uppercase">
            PHYSICAL OFFICE REGISTRIES
          </h1>
          <p className="text-xs md:text-sm text-brand-black/60 max-w-xl mx-auto tracking-wide font-light leading-relaxed">
            Our luxury physical office lounges serve as welcoming architectural spaces designed for private client briefings, portfolio reviews, and legal contracts execution.
          </p>
        </div>

        {/* Offices Cards Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICES.map((office) => (
            <div key={office.id} className="group bg-neutral-50 border border-black/10 hover:border-black/10 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300">
              
              {/* Office Image Container */}
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <img
                  src={office.image}
                  alt={office.name}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />
                
                {/* City badge overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] uppercase tracking-[0.25em] bg-accent-red text-white px-3 py-1 rounded-sm font-semibold shadow-lg">
                    {office.city}
                  </span>
                </div>
              </div>

              {/* Information Body */}
              <div className="p-6 md:p-8 space-y-6">
                
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-serif font-light tracking-wide text-brand-black group-hover:text-accent-red transition-colors duration-300">
                    {office.name}
                  </h3>
                  <div className="h-[1px] w-12 bg-accent-red group-hover:w-20 transition-all duration-300"></div>
                </div>

                {/* Contact Records */}
                <div className="space-y-3 text-xs text-brand-black/70 tracking-wide font-light">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-accent-red flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-accent-red flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-accent-red transition-colors font-mono">
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-accent-red flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-accent-red transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>

                {/* Map Route / Call to action */}
                <div className="pt-4 border-t border-black/10">
                  <a
                    href={office.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-transparent hover:bg-accent-red text-brand-black hover:text-white border border-black/10 hover:border-accent-red text-[10px] font-semibold uppercase tracking-[0.25em] text-center rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get GPS Directions</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Global Operations Call-out Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 mt-16 text-center font-sans">
          <div className="max-w-2xl mx-auto space-y-4">
            <Star className="w-5 h-5 text-accent-red mx-auto" />
            <h4 className="text-xs uppercase tracking-[0.3em] text-warm-gold font-semibold">
              EXPANDING GLOBAL BOUNDARIES
            </h4>
            <h5 className="text-xl font-serif text-brand-black uppercase tracking-widest">
              NEW DESTINATIONS REGISTERING SOON
            </h5>
            <p className="text-xs text-brand-black/60 leading-relaxed font-light tracking-wide">
              We continue our strategic brokerage expansion across coveted coastal locations. Contact our development board for potential venture franchising or professional leadership inquiries.
            </p>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
