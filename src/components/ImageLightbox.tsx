import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageLightboxProps {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({ images, activeIndex, onClose, onNavigate }: ImageLightboxProps) {
  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [goNext, goPrev, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center font-sans"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/20 hover:border-accent-red hover:bg-accent-red text-white flex items-center justify-center transition-all z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 text-white/70 text-xs font-mono uppercase tracking-[0.25em]">
          {activeIndex + 1} / {images.length}
        </div>

        {/* Prev */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
          className="absolute left-4 md:left-8 w-11 h-11 rounded-full border border-white/20 hover:border-accent-red hover:bg-accent-red text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Image */}
        <motion.img
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={images[activeIndex]}
          alt={`Gallery image ${activeIndex + 1}`}
          className="max-w-[88vw] max-h-[82vh] object-contain shadow-2xl select-none"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Next */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
          className="absolute right-4 md:right-8 w-11 h-11 rounded-full border border-white/20 hover:border-accent-red hover:bg-accent-red text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Thumbnail strip */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto scrollbar-none px-4"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(idx)}
              className={`w-14 h-10 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all cursor-pointer ${
                idx === activeIndex ? 'border-accent-red opacity-100' : 'border-white/20 opacity-50 hover:opacity-80'
              }`}
            >
              <img src={img} alt={`Thumb ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
