import { CITIES } from '../data/mockData';

interface CityFilterBarProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
}

export default function CityFilterBar({ selectedCity, onSelectCity }: CityFilterBarProps) {
  return (
    <div id="city-filter-bar" className="w-full py-4 border-y border-black/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-none flex items-center justify-center gap-2 md:gap-4">
        {CITIES.map((city, idx) => {
          const isSelected = selectedCity === city;
          return (
            <div key={city} className="flex items-center flex-shrink-0">
              <button
                onClick={() => onSelectCity(city)}
                className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] py-2 px-4 md:px-6 transition-all duration-300 rounded-sm cursor-pointer ${
                  isSelected
                    ? 'bg-accent-red text-white font-semibold border border-accent-red shadow-lg'
                    : 'text-brand-black/70 hover:text-accent-red hover:bg-black/5 border border-transparent'
                }`}
              >
                {city}
              </button>
              
              {idx < CITIES.length - 1 && (
                <span className="text-brand-black/20 text-sm select-none mx-2 hidden sm:inline">|</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
