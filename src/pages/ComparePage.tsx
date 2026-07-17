import { Link, useNavigate } from 'react-router-dom';
import { BedDouble, Bath, Maximize2, MapPin, Calendar, X, ArrowLeft, Scale } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useCompare } from '../context/CompareContext';
import { PROPERTIES } from '../data/mockData';

export default function ComparePage() {
  const { compareIds, toggleCompare, clearCompare } = useCompare();
  const navigate = useNavigate();

  const properties = compareIds
    .map((id) => PROPERTIES.find((p) => p.id === id))
    .filter(Boolean) as typeof PROPERTIES;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);

  if (properties.length === 0) {
    return (
      <PageTransition>
        <div className="bg-white min-h-screen pt-36 pb-24 flex flex-col items-center justify-center text-brand-black px-6">
          <Scale className="w-12 h-12 text-accent-red mb-4" />
          <h2 className="text-2xl font-serif tracking-widest uppercase mb-2">Nothing to Compare</h2>
          <p className="text-xs text-brand-black/60 tracking-wider font-light mb-6 text-center max-w-sm">
            Select two or more properties from the listings page using the compare checkbox to see them side by side.
          </p>
          <Link
            to="/properties"
            className="px-6 py-3 bg-accent-red text-white uppercase text-xs tracking-widest font-semibold rounded-sm hover:bg-white hover:text-brand-black border border-accent-red transition-all cursor-pointer"
          >
            Browse Properties
          </Link>
        </div>
      </PageTransition>
    );
  }

  const rows: { label: string; render: (p: (typeof properties)[number]) => React.ReactNode }[] = [
    { label: 'Price', render: (p) => <span className="text-accent-red font-serif text-lg">{formatPrice(p.price)}</span> },
    { label: 'City', render: (p) => p.city },
    { label: 'Property Type', render: (p) => p.propertyType },
    { label: 'Bedrooms', render: (p) => p.beds },
    { label: 'Bathrooms', render: (p) => p.baths },
    { label: 'Square Feet', render: (p) => p.sqft.toLocaleString() },
    { label: 'Lot Size', render: (p) => p.lotSize || 'N/A' },
    { label: 'Year Built', render: (p) => p.yearBuilt || '—' },
    { label: 'Status', render: (p) => (p.type === 'sale' ? 'For Sale' : 'For Lease') }
  ];

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-32 md:pt-40 pb-24 font-sans text-brand-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <button
            onClick={() => navigate('/properties')}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-black/60 hover:text-accent-red transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Listings
          </button>

          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
                SIDE BY SIDE
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-light uppercase tracking-widest">
                Compare Properties
              </h1>
            </div>
            <button
              onClick={clearCompare}
              className="text-[10px] uppercase tracking-widest text-brand-black/50 hover:text-accent-red transition-colors cursor-pointer"
            >
              Clear All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr>
                  <th className="text-left p-4 w-40"></th>
                  {properties.map((p) => (
                    <th key={p.id} className="p-4 align-top">
                      <div className="relative bg-neutral-50 border border-black/10 rounded-sm overflow-hidden shadow-lg">
                        <button
                          onClick={() => toggleCompare(p.id)}
                          aria-label={`Remove ${p.title}`}
                          className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-white/90 hover:bg-accent-red hover:text-white text-brand-black flex items-center justify-center transition-all cursor-pointer border border-black/10"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <img src={p.images[0]} alt={p.title} loading="lazy" className="w-full h-40 object-cover" />
                        <div className="p-4 text-left space-y-1">
                          <div className="flex items-center gap-1 text-warm-gold text-[9px] uppercase tracking-widest font-semibold">
                            <MapPin className="w-3 h-3 text-accent-red" />
                            {p.city}
                          </div>
                          <Link
                            to={`/properties/${p.id}`}
                            className="text-sm font-serif uppercase tracking-wider hover:text-accent-red transition-colors block"
                          >
                            {p.title}
                          </Link>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                    <td className="p-4 text-[10px] uppercase tracking-widest text-brand-black/50 font-semibold border-t border-black/5">
                      {row.label}
                    </td>
                    {properties.map((p) => (
                      <td key={p.id} className="p-4 text-sm font-medium border-t border-black/5 text-center">
                        {row.render(p)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-4"></td>
                  {properties.map((p) => (
                    <td key={p.id} className="p-4 text-center">
                      <Link
                        to={`/properties/${p.id}`}
                        className="inline-block px-5 py-2.5 bg-accent-red hover:bg-brand-black text-white text-[10px] font-semibold uppercase tracking-widest rounded-sm transition-all"
                      >
                        View Details
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
