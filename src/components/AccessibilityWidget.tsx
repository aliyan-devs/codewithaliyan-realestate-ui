import { useState, useEffect } from 'react';
import { Eye, HelpCircle, RefreshCw, ZoomIn, ZoomOut } from 'lucide-react';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [textScale, setTextScale] = useState<number>(() => {
    const saved = localStorage.getItem('acc-text-scale');
    return saved ? parseFloat(saved) : 1.0;
  });
  const [highContrast, setHighContrast] = useState<boolean>(() => {
    return localStorage.getItem('acc-high-contrast') === 'true';
  });
  const [highlightLinks, setHighlightLinks] = useState<boolean>(() => {
    return localStorage.getItem('acc-highlight-links') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('acc-text-scale', textScale.toString());
    const root = document.documentElement;
    // Set custom style variable for text scaling
    root.style.fontSize = textScale === 1.0 ? '' : `${textScale * 100}%`;
  }, [textScale]);

  useEffect(() => {
    localStorage.setItem('acc-high-contrast', highContrast.toString());
    const body = document.body;
    if (highContrast) {
      body.classList.add('contrast-125', 'brightness-110');
    } else {
      body.classList.remove('contrast-125', 'brightness-110');
    }
  }, [highContrast]);

  useEffect(() => {
    localStorage.setItem('acc-highlight-links', highlightLinks.toString());
    const styleId = 'acc-highlight-links-style';
    let styleEl = document.getElementById(styleId);

    if (highlightLinks) {
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        styleEl.innerHTML = `
          a, button {
            outline: 2px solid #C81E3A !important;
            outline-offset: 2px !important;
          }
        `;
        document.head.appendChild(styleEl);
      }
    } else {
      if (styleEl) {
        styleEl.remove();
      }
    }
  }, [highlightLinks]);

  const resetAll = () => {
    setTextScale(1.0);
    setHighContrast(false);
    setHighlightLinks(false);
  };

  return (
    <div id="accessibility-widget" className="fixed bottom-6 left-6 z-50 font-sans">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open accessibility menu"
        className="w-12 h-12 rounded-full bg-brand-black hover:bg-accent-red text-white flex items-center justify-center border border-white/20 hover:border-accent-red shadow-2xl transition-all duration-300 relative group"
      >
        <Eye className="w-5 h-5 transition-transform group-hover:rotate-12" />
        <span className="absolute left-14 whitespace-nowrap bg-brand-black border border-white/10 text-xs text-white px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none tracking-widest uppercase">
          Accessibility
        </span>
      </button>

      {/* Control Panel */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-80 glass-panel text-white p-6 rounded-lg shadow-2xl animate-fade-in border border-white/10">
          <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/10">
            <h3 className="text-xs uppercase font-semibold tracking-widest text-warm-gold flex items-center gap-2">
              <Eye className="w-4 h-4 text-accent-red" />
              Accessibility Tools
            </h3>
            <button
              onClick={resetAll}
              title="Reset Settings"
              className="text-white/40 hover:text-white transition-colors text-xs flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>

          <div className="space-y-5">
            {/* Font Adjuster */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-white/70">
                <span>TEXT SIZE</span>
                <span className="font-mono text-accent-red">{Math.round(textScale * 100)}%</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setTextScale((prev) => Math.max(0.85, prev - 0.05))}
                  disabled={textScale <= 0.85}
                  className="flex-1 bg-white/5 hover:bg-white/10 disabled:opacity-30 p-2.5 rounded text-xs flex items-center justify-center gap-1 border border-white/10 transition-colors"
                >
                  <ZoomOut className="w-3.5 h-3.5" /> Smaller
                </button>
                <button
                  onClick={() => setTextScale((prev) => Math.min(1.25, prev + 0.05))}
                  disabled={textScale >= 1.25}
                  className="flex-1 bg-white/5 hover:bg-white/10 disabled:opacity-30 p-2.5 rounded text-xs flex items-center justify-center gap-1 border border-white/10 transition-colors"
                >
                  <ZoomIn className="w-3.5 h-3.5" /> Larger
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex justify-between items-center">
              <div className="text-xs text-white/70">
                <p className="font-medium">HIGH CONTRAST</p>
                <p className="text-[10px] text-white/40">Enhance background readability</p>
              </div>
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  highContrast ? 'bg-accent-red' : 'bg-white/10'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    highContrast ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Link Highlight */}
            <div className="flex justify-between items-center">
              <div className="text-xs text-white/70">
                <p className="font-medium">HIGHLIGHT LINKS</p>
                <p className="text-[10px] text-white/40">Draw strong borders around CTAs</p>
              </div>
              <button
                onClick={() => setHighlightLinks(!highlightLinks)}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  highlightLinks ? 'bg-accent-red' : 'bg-white/10'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    highlightLinks ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-white/10 text-center">
            <span className="text-[9px] text-white/30 uppercase tracking-wider flex items-center justify-center gap-1">
              <HelpCircle className="w-3 h-3" /> Press Esc to close.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
