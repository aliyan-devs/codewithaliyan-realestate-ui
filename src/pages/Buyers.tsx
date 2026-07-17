import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { Search, Compass, ShieldCheck, ShieldAlert, KeyRound, Sparkles } from 'lucide-react';

export default function Buyers() {
  const steps = [
    {
      num: '01',
      title: 'Bespoke Private Briefing',
      icon: Compass,
      desc: 'We initiate the acquisition process with a confidential advisory briefing to map out your structural prerequisites, lifestyle goals, architectural preferences, and spatial requirements.'
    },
    {
      num: '02',
      title: 'Off-Market Curation',
      icon: Search,
      desc: 'Through our private seller ledger, we grant you direct, privileged access to Southern California\'s most prestigious pocket listings and off-market architectural compounds before public exposure.'
    },
    {
      num: '03',
      title: 'Rigorous Due Diligence',
      icon: ShieldCheck,
      desc: 'Our transaction advisors orchestrate thorough structural analyses, historical land research, and tax modeling to ensure your investment coordinates with your generational wealth objectives.'
    },
    {
      num: '04',
      title: 'Tactical Representation & Closing',
      icon: KeyRound,
      desc: 'Jason, Brett, and our senior associates directly spearhead all contract structures. Fusing tough negotiation techniques with unmatched terms alignment, we secure your keys under optimal conditions.'
    }
  ];

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-28 pb-24 font-sans text-brand-black">
        
        {/* Editorial Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-accent-red font-semibold block animate-pulse">
            PRIVATE ACQUISITIONS ADVISORY
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-widest uppercase">
            REPRESENTING ELITE BUYERS
          </h1>
          <p className="text-xs md:text-sm text-brand-black/60 max-w-xl mx-auto tracking-wide font-light leading-relaxed">
            Acquiring signature architectural properties requires more than standard brokerage. We provide unparalleled tactical advisory to secure standard-setting estates with supreme confidentiality.
          </p>
        </div>

        {/* Hero split section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative h-96 w-full rounded-sm overflow-hidden border border-black/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Living Room Interior"
              loading="lazy"
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black/40 to-brand-black/10" />
          </div>

          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-[0.25em] text-warm-gold font-semibold">
              UNCOMPROMISING SERVICE STANDARDS
            </h2>
            <h3 className="text-xl md:text-2xl font-serif font-light uppercase tracking-wider text-brand-black">
              ACCESS COVETED ARCHITECTURAL MASTERPIECES
            </h3>
            <p className="text-brand-black/70 font-light text-sm md:text-base leading-relaxed tracking-wide">
              Our buyer advisory integrates design theory, finance modeling, and aggressive legal navigation. Whether you are seeking a modern West Hollywood sanctuary with jetliner skyline views or a secluded ocean-view estate in Pelican Hill, we act as your private protectors.
            </p>
            <p className="text-brand-black/70 font-light text-sm md:text-base leading-relaxed tracking-wide">
              We coordinate secret private helicopter viewings, private yacht access to waterfront properties, and coordinate secure off-market negotiations directly with developers and legacy family estates.
            </p>
            
            <div className="pt-4">
              <Link
                to="/properties"
                className="bg-accent-red hover:bg-white text-white hover:text-brand-black font-semibold text-xs tracking-[0.25em] uppercase py-4 px-8 rounded-sm transition-all duration-300 shadow-2xl inline-block cursor-pointer"
              >
                BROWSE OUR RESIDENCES
              </Link>
            </div>
          </div>

        </section>

        {/* Step-by-Step editorial timeline */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 mt-12 bg-neutral-100 border-y border-black/10">
          <div className="text-center space-y-2 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
              OUR FRAMEWORK
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-light uppercase tracking-widest">
              THE ACQUISITIONS SEQUENCE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.num} className="bg-neutral-50 border border-black/10 p-8 rounded-sm hover:border-accent-red transition-all duration-300 relative group shadow-2xl">
                  {/* Step Num marker */}
                  <span className="absolute top-4 right-4 font-serif text-3xl font-light text-brand-black/5 group-hover:text-accent-red/20 transition-colors">
                    {step.num}
                  </span>

                  <div className="w-10 h-10 rounded-sm bg-accent-red/10 border border-accent-red/20 flex items-center justify-center text-accent-red mb-6">
                    <IconComp className="w-4.5 h-4.5" />
                  </div>

                  <h4 className="text-sm font-serif font-medium uppercase tracking-wider text-brand-black mb-3 group-hover:text-accent-red transition-colors">
                    {step.title}
                  </h4>

                  <p className="text-xs text-brand-black/60 leading-relaxed font-light tracking-wide">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Private Concierge Invitation Box */}
        <section className="max-w-4xl mx-auto px-6 text-center py-20 mt-12 font-sans space-y-6">
          <Sparkles className="w-8 h-8 text-warm-gold mx-auto animate-pulse" />
          <h4 className="text-xs uppercase tracking-[0.3em] text-warm-gold font-semibold">
            SECURE ADVISORY REGISTRY
          </h4>
          <h5 className="text-xl md:text-2xl font-serif text-brand-black uppercase tracking-widest">
            INQUIRE REGARDING ACQUISITIONS
          </h5>
          <p className="text-xs sm:text-sm text-brand-black/60 leading-relaxed max-w-lg mx-auto font-light tracking-wide">
            Schedule a private, off-the-record brief with Jason Oppenheim or a senior acquisitions partner at our West Hollywood Headquarters.
          </p>
          <div className="pt-4">
            <Link
              to="/contact?interest=Acquisitions"
              className="bg-white hover:bg-accent-red text-brand-black hover:text-white font-semibold text-xs tracking-[0.25em] uppercase py-4 px-8 rounded-sm transition-all duration-300 shadow-2xl inline-block cursor-pointer"
            >
              REGISTER CONFIDENTIALLY
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
