import PageTransition from '../components/PageTransition';
import { PRESS_MENTIONS } from '../data/mockData';
import { Landmark, ArrowUpRight, PlayCircle, Star } from 'lucide-react';

export default function InTheMedia() {
  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-28 pb-24 font-sans text-brand-black">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-accent-red font-semibold block animate-pulse">
            GLOBAL PRESS RELEASES
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-widest uppercase">
            IN THE GLOBAL MEDIA
          </h1>
          <p className="text-xs md:text-sm text-brand-black/60 max-w-xl mx-auto tracking-wide font-light leading-relaxed">
            The Oppenheim Group\'s record-breaking listings, celebrity partnerships, and design authority are covered extensively by standard-bearing financial and luxury design publications.
          </p>
        </div>

        {/* Featured Video / Cover Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="bg-neutral-50 border border-black/10 rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="absolute top-0 right-0 w-32 h-[2px] bg-accent-red"></div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-warm-gold font-semibold flex items-center gap-1.5">
                <Star className="w-4 h-4 text-accent-red" />
                Featured Editorial Film
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-light uppercase tracking-wider text-brand-black">
                THE EVOLUTION OF WEST COAST REAL ESTATE MARKETING
              </h2>
              <p className="text-brand-black/70 font-light text-xs md:text-sm leading-relaxed tracking-wide">
                Watch our comprehensive brokerage feature detailing how Jason and Brett Oppenheim utilize custom cinematic styling, high-impact branding assets, and private networks to transact Southern California\'s most valuable property collections.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={() => alert('Launching the Oppenheim Group Legacy documentary film player...')}
                  className="bg-accent-red hover:bg-white text-white hover:text-brand-black font-semibold text-xs tracking-[0.25em] uppercase py-4 px-8 rounded-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-2xl"
                >
                  <PlayCircle className="w-4.5 h-4.5" />
                  <span>PLAY FEATURE FILM</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 md:h-80 w-full overflow-hidden rounded border border-black/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Architecture Skyscraper"
                loading="lazy"
                className="w-full h-full object-cover filter grayscale"
              />
              <div className="absolute inset-0 bg-white/40 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 border border-black/10 text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-all scale-100 hover:scale-105 shadow-2xl cursor-pointer">
                  <PlayCircle className="w-6 h-6" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Press Mentions Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRESS_MENTIONS.map((mention) => (
              <div key={mention.id} className="group bg-neutral-50 border border-black/10 hover:border-black/10 rounded-sm p-8 shadow-2xl transition-all duration-300 flex flex-col justify-between">
                
                <div className="space-y-6">
                  {/* Publisher header */}
                  <div className="flex justify-between items-baseline border-b border-black/10 pb-4">
                    <span className="font-serif font-light text-2xl tracking-[0.1em] text-accent-red uppercase">
                      {mention.source}
                    </span>
                    <span className="text-[10px] text-brand-black/50 tracking-wider font-light">
                      {mention.date}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-base md:text-lg font-serif font-light uppercase tracking-wider text-brand-black group-hover:text-accent-red transition-colors duration-300">
                    "{mention.headline}"
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-brand-black/60 leading-relaxed font-light tracking-wide">
                    {mention.excerpt}
                  </p>
                </div>

                {/* Redirect Link */}
                <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-black/70 group-hover:text-accent-red transition-colors">
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-4 h-4 text-accent-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
