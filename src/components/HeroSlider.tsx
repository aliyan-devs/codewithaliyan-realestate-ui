import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroSlide {
  image: string;
  video?: string; // optional path to an mp4 in /public/videos — if present, video plays instead of the static image
  title: string;
  subtitle: string;
  price: string;
  id: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: '/videos/hero-poster.jpg',
    video: '/videos/hero-showcase.mp4',
    title: 'The Sierra Alta Estate',
    subtitle: 'Sunset Strip, Los Angeles',
    price: '$28,500,000',
    id: 'sierra-alta'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&h=1080&q=85',
    title: 'The Newport Coast Pavilion',
    subtitle: 'Pelican Hill, Newport Beach',
    price: '$19,950,000',
    id: 'newport-pavilion'
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&h=1080&q=85',
    title: 'The Jolla Crest Sanctuary',
    subtitle: 'La Jolla Cliffs, San Diego',
    price: '$14,200,000',
    id: 'jolla-crest'
  },
  {
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&h=1080&q=85',
    title: 'Villa de Oro',
    subtitle: 'Pedregal Heights, Cabo San Lucas',
    price: '$12,800,000',
    id: 'villa-oro'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const activeSlide = HERO_SLIDES[current];
  const isVideoSlide = Boolean(activeSlide.video);

  useEffect(() => {
    // Only auto-advance on image slides; video slides advance when the clip ends (see onEnded below)
    if (isVideoSlide) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current, isVideoSlide]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const navigateToProperty = (id: string) => {
    navigate(`/properties/${id}`);
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (videoRef.current) videoRef.current.muted = next;
      return next;
    });
  };

  // Oppenheim custom brush-style circle and text layout
  const centeredOppenheimBrand = (
    <div className="flex flex-col items-center justify-center text-center px-4 max-w-5xl">
      {/* Brand logo container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6">
        {/* Hand-drawn red brush circle signature */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center">
          {/* Custom SVG stylized red circle */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent-red animate-[spin_50s_linear_infinite]">
            <path
              d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="210 40"
              className="opacity-95"
            />
            <path
              d="M 50,50 m -35,0 a 35,35 0 1,0 70,0 a 35,35 0 1,0 -70,0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="180 50"
              className="opacity-75"
            />
          </svg>
          {/* Inside detail */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-white text-xs tracking-widest font-light">EST. 1989</span>
          </div>
        </div>

        {/* Text Title block */}
        <div className="flex flex-col text-left md:border-l md:border-white/20 md:pl-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-[0.2em] text-white leading-none uppercase">
            THE OPPENHEIM GROUP
          </h1>
          
          <div className="flex items-center gap-4 mt-3">
            <div className="h-[1px] flex-1 bg-white/20"></div>
            <h2 className="text-sm sm:text-base tracking-[0.5em] text-accent-red font-medium uppercase whitespace-nowrap">
              REAL ESTATE
            </h2>
            <div className="h-[1px] flex-1 bg-white/20"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id="hero-slider" className="relative w-full h-screen overflow-hidden bg-black font-sans select-none">
      
      {/* Background Media (Video or Image) with AnimatePresence for smooth crossfades */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          {isVideoSlide ? (
            /* Full-bleed looping video background */
            <video
              ref={videoRef}
              key={activeSlide.video}
              className="absolute inset-0 w-full h-full object-cover"
              src={activeSlide.video}
              poster={activeSlide.image}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onEnded={handleNext}
            />
          ) : (
            /* Zoom In (Ken Burns Effect) for static images */
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: 7, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${activeSlide.image})` }}
            />
          )}
          {/* Dark Overlay gradient for contrast and legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-brand-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Layout — brand + pills sit near the top (below navbar), large open space below shows the property, bottom bar pinned to the very bottom */}
      <div className="absolute inset-0 flex flex-col pt-28 md:pt-36 pb-8 z-20">

        {/* Brand Logo & Title */}
        <div className="flex justify-center items-center">
          {centeredOppenheimBrand}
        </div>

        {/* Category Pill Buttons as requested (LOS ANGELES, NEWPORT BEACH, SAN DIEGO, CABO) */}
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { name: 'LOS ANGELES', query: 'Los Angeles' },
              { name: 'NEWPORT BEACH', query: 'Newport Beach' },
              { name: 'SAN DIEGO', query: 'San Diego' },
              { name: 'CABO', query: 'Cabo San Lucas' }
            ].map((city) => (
              <button
                key={city.name}
                onClick={() => navigate(`/properties?city=${encodeURIComponent(city.query)}`)}
                className="bg-brand-black/75 hover:bg-accent-red hover:text-white text-white/90 border border-white/10 hover:border-accent-red font-sans text-xs font-semibold py-4 px-6 tracking-[0.25em] rounded-sm transition-all duration-300 backdrop-blur-sm shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{city.name}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white" />
              </button>
            ))}
          </div>
        </div>

        {/* Open space showing the property + a subtle scroll-down cue */}
        <div className="flex-1 flex items-end justify-center pb-6">
          <button
            onClick={() => document.getElementById('hero-slider')?.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            aria-label="Scroll down"
            className="w-9 h-9 rounded-full border border-white/30 hover:border-accent-red hover:bg-accent-red text-white flex items-center justify-center transition-all duration-300 animate-bounce cursor-pointer"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Bar: Slide Info & Interactive Slides Controls — pinned to the very bottom */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Bottom-Left Slide Indicator & Active Item Details */}
          <div className="flex items-center gap-6">
            {/* Number Indicator "01 --" style */}
            <div className="flex items-center gap-4 text-white">
              <span className="font-serif text-3xl font-light text-accent-red tracking-widest">
                0{current + 1}
              </span>
              <span className="text-white/20 font-light">|</span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-warm-gold font-semibold">
                  {HERO_SLIDES[current].subtitle}
                </span>
                <button
                  onClick={() => navigateToProperty(HERO_SLIDES[current].id)}
                  className="text-xs uppercase tracking-[0.15em] hover:text-accent-red font-medium transition-colors text-white flex items-center gap-1.5 mt-0.5 group"
                >
                  {HERO_SLIDES[current].title} • {HERO_SLIDES[current].price}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom-Center / Bottom-Right controls like < 2 of 3 > */}
          <div className="flex items-center gap-6 bg-brand-black/80 border border-white/10 p-2.5 rounded px-4 backdrop-blur-sm shadow-lg text-white">
            {isVideoSlide && (
              <button
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                className="w-8 h-8 rounded-full border border-white/10 hover:border-accent-red hover:bg-accent-red text-white flex items-center justify-center transition-all cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            )}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-accent-red hover:bg-accent-red text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-white/80 select-none">
              <span className="text-white font-semibold">{current + 1}</span>
              <span className="text-white/30 mx-2">OF</span>
              <span className="text-white/50">{HERO_SLIDES.length}</span>
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-accent-red hover:bg-accent-red text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Aesthetic horizontal thin divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-10"></div>
    </div>
  );
}
