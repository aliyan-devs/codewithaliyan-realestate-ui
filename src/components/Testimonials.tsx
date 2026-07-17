import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-center">
      <div className="space-y-2 mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-accent-red font-semibold block">
          CLIENT EXPERIENCES
        </span>
        <h3 className="text-2xl md:text-3xl font-serif font-light uppercase tracking-widest text-brand-black">
          What Our Clients Say
        </h3>
      </div>

      <div className="relative bg-neutral-50 border border-black/10 rounded-sm p-8 md:p-12 shadow-xl">
        <Quote className="w-8 h-8 text-accent-red/20 mx-auto mb-4" />

        <div className="flex justify-center gap-1 mb-5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
          ))}
        </div>

        <p className="text-lg md:text-xl font-serif font-light text-brand-black/90 leading-relaxed max-w-2xl mx-auto italic">
          "{testimonial.quote}"
        </p>

        <div className="flex items-center justify-center gap-3 mt-8">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="w-12 h-12 rounded-full object-cover grayscale border border-black/10"
          />
          <div className="text-left">
            <p className="text-sm font-semibold text-brand-black uppercase tracking-wider">{testimonial.name}</p>
            <p className="text-[10px] text-accent-red uppercase tracking-widest font-semibold">{testimonial.role}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-8 h-8 rounded-full border border-black/10 hover:border-accent-red hover:bg-accent-red hover:text-white text-brand-black flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === current ? 'bg-accent-red w-5' : 'bg-black/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-8 h-8 rounded-full border border-black/10 hover:border-accent-red hover:bg-accent-red hover:text-white text-brand-black flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
