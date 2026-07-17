import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { INSIGHTS } from '../data/mockData';

export default function Insights() {
  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-32 md:pt-40 pb-24 font-sans text-brand-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
              KNOWLEDGE & MARKET DATA
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light uppercase tracking-widest">
              Market Insights
            </h1>
            <p className="text-xs text-brand-black/50 tracking-wide font-light max-w-lg mx-auto">
              Neighborhood guides, market reports, and advisory perspectives from our team of luxury real estate specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSIGHTS.map((insight) => (
              <Link
                key={insight.id}
                to={`/insights/${insight.id}`}
                className="group block bg-neutral-50 border border-black/10 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-[9px] uppercase tracking-[0.25em] bg-accent-red text-white px-3 py-1 rounded-sm font-semibold inline-block">
                    {insight.category}
                  </span>
                  <h2 className="text-lg font-serif uppercase tracking-wide group-hover:text-accent-red transition-colors leading-snug">
                    {insight.title}
                  </h2>
                  <p className="text-xs text-brand-black/60 font-light leading-relaxed line-clamp-2">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-black/10 text-[10px] text-brand-black/40 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {insight.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {insight.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-accent-red text-[10px] uppercase tracking-widest font-semibold pt-1 group-hover:gap-2.5 transition-all">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
