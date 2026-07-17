import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PropertyCard from '../components/PropertyCard';
import { useFavorites } from '../context/FavoritesContext';
import { PROPERTIES } from '../data/mockData';

export default function SavedProperties() {
  const { favorites } = useFavorites();
  const savedProperties = PROPERTIES.filter((p) => favorites.includes(p.id));

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-32 md:pt-40 pb-24 font-sans text-brand-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-3 mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
              YOUR PRIVATE LIST
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light uppercase tracking-widest">
              Saved Properties
            </h1>
            <p className="text-xs text-brand-black/50 tracking-wide font-light max-w-md mx-auto">
              Properties you've saved are stored in this browser. Revisit them anytime — no account required.
            </p>
          </div>

          {savedProperties.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Heart className="w-12 h-12 text-accent-red/30 mb-4" />
              <h2 className="text-xl font-serif uppercase tracking-widest mb-2">No Saved Properties Yet</h2>
              <p className="text-xs text-brand-black/50 tracking-wide font-light mb-6 max-w-sm">
                Tap the heart icon on any listing to save it here for quick access later.
              </p>
              <Link
                to="/properties"
                className="px-6 py-3 bg-accent-red text-white uppercase text-xs tracking-widest font-semibold rounded-sm hover:bg-brand-black transition-all cursor-pointer"
              >
                Browse Properties
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
