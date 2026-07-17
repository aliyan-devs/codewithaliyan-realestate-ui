import PageTransition from '../components/PageTransition';
import { AGENTS } from '../data/mockData';
import { Award, Compass, Heart, ShieldAlert, Sparkles, Phone, Mail } from 'lucide-react';

export default function AboutUs() {
  const brandValues = [
    {
      icon: Compass,
      title: 'Structural Design Alignment',
      desc: 'We evaluate properties through an architectural lens, highlighting organic volume, finish materials, and structural details that ordinary brokerages fail to appreciate.'
    },
    {
      icon: Award,
      title: 'Decades of Legacy Trust',
      desc: 'Our founders descend from a five-generation real estate bloodline in Southern California, securing deep historical networks and off-market negotiation advantages.'
    },
    {
      icon: Heart,
      title: 'Rigorous Client Confidentiality',
      desc: 'We cater directly to high-profile figures, billionaires, and developers. Discretion is not a marketing catchphrase — it is our primary operating standard.'
    }
  ];

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-28 pb-24 font-sans text-brand-black">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-accent-red font-semibold block animate-pulse">
            THE BROKERAGE CHRONICLES
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-widest uppercase">
            OUR BRAND LEGACY & VISION
          </h1>
          <p className="text-xs md:text-sm text-brand-black/60 max-w-xl mx-auto tracking-wide font-light leading-relaxed">
            Five generations of Southern California real estate leadership, fusing historical industry expertise with high-impact modern media marketing.
          </p>
        </div>

        {/* Corporate History splits */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-warm-gold font-semibold">
              THE STORY OF THE OPPENHEIM GROUP
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-light uppercase tracking-wider text-brand-black">
              A LEGENDARY FIVE-GENERATION FAMILY ANCESTRY
            </h2>
            <div className="h-[1.5px] w-16 bg-accent-red"></div>
            
            <p className="text-brand-black/70 font-light text-sm md:text-base leading-relaxed tracking-wide">
              The Oppenheim Group has been synonymous with standard-setting real estate excellence for generations. It represents a direct continuation of our great-great-grandfather Jacob Stern\'s pioneering Los Angeles operations, dating back to 1889.
            </p>
            <p className="text-brand-black/70 font-light text-sm md:text-base leading-relaxed tracking-wide">
              Jacob Stern built Stern Realty Co. at the corner of Hollywood and Vine, representing major historical developments and legendary figures like Cecil B. DeMille. Fusing this rich historical lineage with highly refined modern design, Jason and Brett Oppenheim founded the boutique agency to represent today\'s elite buyers, sellers, and premier developers.
            </p>
          </div>

          <div className="relative h-96 w-full rounded-sm overflow-hidden border border-black/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Office Architectural Interior"
              loading="lazy"
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute inset-0 bg-white/35" />
          </div>

        </section>

        {/* Brand Values block */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 mt-12 bg-neutral-100 border-y border-black/10">
          <div className="text-center space-y-2 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
              CORE PILLARS
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-light uppercase tracking-widest">
              OUR SERVICE PILLARS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandValues.map((value) => {
              const IconComp = value.icon;
              return (
                <div key={value.title} className="bg-neutral-50 border border-black/10 p-8 rounded-sm hover:border-accent-red transition-all duration-300 relative group shadow-2xl">
                  <div className="w-10 h-10 rounded-sm bg-accent-red/10 border border-accent-red/20 flex items-center justify-center text-accent-red mb-6">
                    <IconComp className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="text-sm font-serif font-medium uppercase tracking-wider text-brand-black mb-3">
                    {value.title}
                  </h4>
                  <p className="text-xs text-brand-black/60 leading-relaxed font-light tracking-wide">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Elite Agent Directory listing */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 mt-12">
          <div className="text-center space-y-2 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
              ROSTER
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-light uppercase tracking-widest">
              OUR WORLD-CLASS ASSOCIATES
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AGENTS.map((agent) => (
              <div key={agent.id} className="group bg-neutral-50 border border-black/10 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl">
                
                {/* Agent Photo */}
                <div className="relative overflow-hidden h-80 sm:h-72 w-full">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Information block */}
                <div className="p-6 space-y-3">
                  <div className="space-y-1">
                    <h4 className="text-base font-serif font-medium uppercase tracking-wider text-brand-black group-hover:text-accent-red transition-colors">
                      {agent.name}
                    </h4>
                    <p className="text-[10px] text-warm-gold uppercase tracking-widest font-semibold pb-2 border-b border-black/10">
                      {agent.role}
                    </p>
                  </div>

                  <p className="text-[11px] text-brand-black/60 font-light leading-relaxed tracking-wide line-clamp-3">
                    {agent.bio}
                  </p>

                  <div className="pt-4 flex flex-col gap-2 text-[10px] tracking-widest text-brand-black/50 font-light">
                    <a href={`tel:${agent.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-accent-red transition-colors">
                      <Phone className="w-3.5 h-3.5 text-accent-red" />
                      <span className="font-mono">{agent.phone}</span>
                    </a>
                    <a href={`mailto:${agent.email}`} className="flex items-center gap-2 hover:text-accent-red transition-colors truncate">
                      <Mail className="w-3.5 h-3.5 text-accent-red" />
                      <span>{agent.email}</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
