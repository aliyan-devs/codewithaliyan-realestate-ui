import PageTransition from '../components/PageTransition';
import HeroSlider from '../components/HeroSlider';
import PropertyCard from '../components/PropertyCard';
import Testimonials from '../components/Testimonials';
import { PROPERTIES, AGENTS } from '../data/mockData';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Sparkles, Building2 } from 'lucide-react';

export default function Home() {
  // Get featured properties
  const featuredProperties = PROPERTIES.filter(p => p.featured).slice(0, 3);
  
  // Get primary agents for home layout
  const homeAgents = AGENTS.slice(0, 3);

  return (
    <PageTransition>
      <div className="bg-white">
        {/* Full-bleed Hero Image Slider */}
        <section id="home-hero">
          <HeroSlider />
        </section>

        {/* Editorial Brand Intro / Statement Section */}
        <section id="home-intro" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-black/10 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
                THE OPPENHEIM STANDARD
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-black uppercase tracking-wider leading-tight">
                REDEFINING THE ART OF MODERN LUXURY
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-brand-black/75 font-light leading-relaxed text-sm md:text-base tracking-wide">
              <p>
                The Oppenheim Group represents the region\'s most prestigious, architectural properties and private estates. Fusing generations of local real estate lineage with modern design sensibilities, our boutique brokerage delivers an unparalleled, white-glove consumer experience.
              </p>
              <p>
                From the clifftops of La Jolla and beachfront pavilions of Newport Coast to the private compounds overlooking West Hollywood\'s legendary Sunset Strip, we do not simply transact luxury real estate — we curate the pinnacle of West Coast luxury living.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-black/10">
                <div className="space-y-1">
                  <span className="font-serif text-2xl md:text-3xl font-light text-accent-red block">$3.3B+</span>
                  <span className="text-[9px] uppercase tracking-widest text-brand-black/60 block">Closed Transactions</span>
                </div>
                <div className="space-y-1">
                  <span className="font-serif text-2xl md:text-3xl font-light text-accent-red block">35 Years</span>
                  <span className="text-[9px] uppercase tracking-widest text-brand-black/60 block">Legacy Excellence</span>
                </div>
                <div className="space-y-1">
                  <span className="font-serif text-2xl md:text-3xl font-light text-accent-red block">#1 Agency</span>
                  <span className="text-[9px] uppercase tracking-widest text-brand-black/60 block">West Hollywood</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Featured Properties Grid Section */}
        <section id="featured-residences" className="py-24 px-6 md:px-12 bg-neutral-100">
          <div className="max-w-7xl mx-auto">
            
            {/* Header info */}
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 mb-16 border-b border-black/10 pb-8 font-sans">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
                  EXCLUSIVE DIRECTORY
                </span>
                <h3 className="text-2xl md:text-4xl font-serif font-light text-brand-black uppercase tracking-widest">
                  FEATURED RESIDENCES
                </h3>
              </div>

              <Link
                to="/properties"
                className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-black/80 hover:text-accent-red transition-colors flex items-center gap-2 group cursor-pointer"
              >
                <span>Browse Full Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            {/* Grid of properties (Grayscale-to-color cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

          </div>
        </section>

        {/* Meet the Team Preview section */}
        <section id="home-agents" className="py-24 px-6 md:px-12 max-w-7xl mx-auto font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Description sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
                  ELITE AGENT DIRECTORY
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-light text-brand-black uppercase tracking-widest">
                  MEET OUR LEADERSHIP
                </h3>
              </div>
              
              <p className="text-sm text-brand-black/70 font-light leading-relaxed tracking-wide">
                Our collaborative network of veteran real estate advisors represents a unique blend of industry knowledge, design prowess, and unparalleled negotiation strategy.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-accent-red flex-shrink-0" />
                  <p className="text-xs text-brand-black/60 leading-relaxed font-light">
                    Over $3.3 Billion in residential sales with deep market insight.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-accent-red flex-shrink-0" />
                  <p className="text-xs text-brand-black/60 leading-relaxed font-light">
                    Featured regularly in Forbes, Architectural Digest, and The WSJ.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-block border border-black/15 hover:border-accent-red hover:bg-accent-red hover:text-white text-brand-black py-3.5 px-8 text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 rounded-sm cursor-pointer"
                >
                  Meet The Full Team
                </Link>
              </div>
            </div>

            {/* Grid of Agents */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {homeAgents.map((agent) => (
                <div key={agent.id} className="group bg-neutral-50 border border-black/10 rounded-sm overflow-hidden flex flex-col justify-between">
                  <div className="relative overflow-hidden h-72 sm:h-64">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      loading="lazy"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-5 space-y-1">
                    <h4 className="text-sm font-serif font-medium tracking-wider text-brand-black uppercase group-hover:text-accent-red transition-colors">
                      {agent.name}
                    </h4>
                    <p className="text-[10px] text-warm-gold uppercase tracking-widest font-semibold pb-3">
                      {agent.role}
                    </p>
                    
                    <div className="pt-3 border-t border-black/10 text-[10px] tracking-widest text-brand-black/60 flex flex-col gap-1.5 font-light">
                      <span>{agent.phone}</span>
                      <span className="truncate hover:text-accent-red transition-colors">{agent.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Private Advisory call-out banner */}
        {/* Client Testimonials */}
        <Testimonials />

        <section id="private-advisory-banner" className="py-24 px-6 md:px-12 bg-accent-red text-center font-sans">
          <div className="max-w-4xl mx-auto space-y-6">
            <Building2 className="w-8 h-8 text-white mx-auto" />
            <h3 className="text-xs uppercase tracking-[0.35em] text-white/80 font-semibold">
              COMMITTED TO BESPOKE ADVISORY
            </h3>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white uppercase tracking-widest">
              SEEKING PRIVATE DISCRETION?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
              We understand that the acquisition or sale of standard-setting properties demands rigorous discretion. Our team coordinates private viewings, exclusive off-market searches, and custom valuations.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white hover:bg-brand-black text-accent-red hover:text-white font-semibold text-[11px] tracking-[0.25em] uppercase py-4 px-8 rounded-sm transition-all duration-300 shadow-2xl cursor-pointer"
              >
                Inquire Confidentially
              </Link>
              <Link
                to="/sellers"
                className="bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white/70 font-semibold text-[11px] tracking-[0.25em] uppercase py-4 px-8 rounded-sm transition-all duration-300 cursor-pointer"
              >
                Request Free valuation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
