import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Landmark } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { INSIGHTS } from '../data/mockData';

export default function InsightDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const insight = INSIGHTS.find((i) => i.id === id);

  if (!insight) {
    return (
      <PageTransition>
        <div className="bg-white min-h-screen pt-36 flex flex-col items-center justify-center text-brand-black px-6">
          <Landmark className="w-12 h-12 text-accent-red mb-4" />
          <h2 className="text-2xl font-serif tracking-widest uppercase mb-2">Article Not Found</h2>
          <Link
            to="/insights"
            className="px-6 py-3 bg-accent-red text-white uppercase text-xs tracking-widest font-semibold rounded-sm hover:bg-brand-black transition-all cursor-pointer mt-4"
          >
            Back to Insights
          </Link>
        </div>
      </PageTransition>
    );
  }

  const related = INSIGHTS.filter((i) => i.id !== insight.id).slice(0, 2);

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pb-24 font-sans text-brand-black">
        {/* Hero image */}
        <div className="w-full h-[45vh] md:h-[55vh] relative overflow-hidden">
          <img src={insight.image} alt={insight.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-brand-black/50" />
          <div className="absolute top-28 left-6 md:left-12 z-20">
            <button
              onClick={() => navigate('/insights')}
              className="flex items-center gap-2 bg-white/80 hover:bg-accent-red text-brand-black/90 hover:text-white border border-black/10 hover:border-accent-red px-4 py-2 rounded-sm text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer shadow-2xl"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Insights</span>
            </button>
          </div>
          <div className="absolute bottom-8 left-0 w-full px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <span className="text-[9px] uppercase tracking-[0.25em] bg-accent-red text-white px-3 py-1 rounded-sm font-semibold inline-block">
                {insight.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-serif font-light text-white uppercase tracking-widest leading-tight">
                {insight.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-white/70 text-[11px] uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {insight.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {insight.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 mt-14 space-y-6">
          <p className="text-lg font-serif font-light text-brand-black/80 leading-relaxed italic border-l-2 border-accent-red pl-6">
            {insight.excerpt}
          </p>
          {insight.content.map((para, idx) => (
            <p key={idx} className="text-sm md:text-base text-brand-black/80 leading-relaxed font-light tracking-wide">
              {para}
            </p>
          ))}

          <div className="pt-8 border-t border-black/10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-accent-red text-white uppercase text-xs tracking-widest font-semibold rounded-sm hover:bg-brand-black transition-all cursor-pointer"
            >
              Speak With an Advisor
            </Link>
            <Link
              to="/properties"
              className="px-6 py-3 bg-transparent border border-black/15 text-brand-black uppercase text-xs tracking-widest font-semibold rounded-sm hover:border-accent-red hover:text-accent-red transition-all cursor-pointer"
            >
              Browse Listings
            </Link>
          </div>
        </div>

        {/* Related Insights */}
        {related.length > 0 && (
          <div className="max-w-3xl mx-auto px-6 md:px-12 mt-16 pt-10 border-t border-black/10">
            <h3 className="text-xs uppercase tracking-[0.25em] text-warm-gold font-semibold mb-6">
              More Insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/insights/${item.id}`}
                  className="group flex gap-4 items-start"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-20 h-20 object-cover rounded-sm flex-shrink-0 grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div>
                    <h4 className="text-sm font-serif uppercase tracking-wide group-hover:text-accent-red transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-brand-black/40 uppercase tracking-widest mt-1">{item.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
