import { useNavigate } from 'react-router-dom';
import { X, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCompare } from '../context/CompareContext';
import { PROPERTIES } from '../data/mockData';

export default function CompareBar() {
  const { compareIds, toggleCompare, clearCompare } = useCompare();
  const navigate = useNavigate();

  if (compareIds.length === 0) return null;

  const compareProperties = compareIds
    .map((id) => PROPERTIES.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 w-full z-40 bg-brand-black border-t border-white/10 shadow-2xl font-sans"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-2 text-white">
              <Scale className="w-4 h-4 text-accent-red" />
              <span className="text-xs uppercase tracking-widest font-semibold">
                Compare ({compareIds.length}/3)
              </span>
            </div>
            <div className="flex gap-2">
              {compareProperties.map((p) => (
                <div
                  key={p!.id}
                  className="flex items-center gap-1.5 bg-white/10 border border-white/10 rounded-sm pl-2 pr-1 py-1"
                >
                  <span className="text-[10px] text-white/80 uppercase tracking-wide truncate max-w-[100px]">
                    {p!.title}
                  </span>
                  <button
                    onClick={() => toggleCompare(p!.id)}
                    aria-label={`Remove ${p!.title} from comparison`}
                    className="w-4 h-4 rounded-full hover:bg-accent-red flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-2.5 h-2.5 text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={clearCompare}
              className="text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              Clear All
            </button>
            <button
              onClick={() => navigate('/compare')}
              disabled={compareIds.length < 2}
              className="px-6 py-2.5 bg-accent-red hover:bg-white text-white hover:text-brand-black text-xs font-semibold uppercase tracking-widest rounded-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Compare Now
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
