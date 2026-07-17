import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

// Change this to your real WhatsApp number in international format, no + or spaces (e.g. 923001234567)
const WHATSAPP_NUMBER = '13105550100';
const DEFAULT_MESSAGE = "Hi! I'm interested in learning more about your listings.";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
      {/* Expanded quick-chat card */}
      {isOpen && (
        <div className="w-72 bg-white rounded-lg shadow-2xl border border-black/10 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#25D366] px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Chat with us</p>
              <p className="text-white/80 text-[11px]">Usually replies within minutes</p>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <p className="text-xs text-brand-black/70 leading-relaxed">
              Have a question about a listing, or want to schedule a private viewing? Message us directly on WhatsApp.
            </p>
            <button
              onClick={() => openChat(DEFAULT_MESSAGE)}
              className="w-full bg-[#25D366] hover:bg-[#1EBE5A] text-white text-xs font-semibold uppercase tracking-widest py-3 rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Start Chat
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
