import { createContext, useContext, useState, ReactNode } from 'react';

interface CompareContextType {
  compareIds: string[];
  toggleCompare: (id: string) => void;
  isComparing: (id: string) => boolean;
  clearCompare: () => void;
  maxReached: boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);
const MAX_COMPARE = 3;

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareIds, setCompareIds] = useState<string[]>([]);

  const toggleCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((c) => c !== id);
      if (prev.length >= MAX_COMPARE) return prev; // silently ignore once at max
      return [...prev, id];
    });
  };

  const isComparing = (id: string) => compareIds.includes(id);
  const clearCompare = () => setCompareIds([]);

  return (
    <CompareContext.Provider
      value={{ compareIds, toggleCompare, isComparing, clearCompare, maxReached: compareIds.length >= MAX_COMPARE }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error('useCompare must be used within a CompareProvider');
  return ctx;
}
