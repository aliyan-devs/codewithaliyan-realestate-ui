import React, { useState } from 'react';
import { Send, CheckCircle2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  agentName?: string;
  propertyTitle?: string;
}

export default function ContactForm({ title, subtitle, agentName, propertyTitle }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: propertyTitle ? 'Schedule Tour' : 'General Inquiry',
    message: propertyTitle 
      ? `I am interested in scheduling a private tour for ${propertyTitle}. Please contact me.` 
      : ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setStatus('submitting');
    
    // Simulate real server/EmailJS endpoint delay
    setTimeout(() => {
      setStatus('success');
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: 'General Inquiry',
      message: ''
    });
    setStatus('idle');
  };

  return (
    <div className="w-full h-full p-8 md:p-10 bg-neutral-50 rounded-lg shadow-2xl relative overflow-hidden border border-black/10">
      
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-24 h-[1px] bg-accent-red"></div>
      <div className="absolute top-0 right-0 h-24 w-[1px] bg-accent-red"></div>

      <AnimatePresence mode="wait">
        {status !== 'success' ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Header info */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-warm-gold mb-1">
                {subtitle || 'CONNECT WITH EXCELLENCE'}
              </h3>
              <h4 className="text-xl md:text-2xl font-serif tracking-widest text-brand-black uppercase">
                {title || 'REQUEST INQUIRY'}
              </h4>
              {agentName && (
                <p className="text-xs text-brand-black/60 tracking-wider mt-2">
                  Directing inquiry to: <span className="text-accent-red font-medium">{agentName}</span>
                </p>
              )}
            </div>

            {/* Input Grid */}
            <div className="space-y-5 pt-4">
              
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="FULL NAME *"
                  className="w-full bg-transparent border-b border-black/15 hover:border-black/25 focus:border-accent-red py-3 text-xs tracking-widest text-brand-black uppercase placeholder-brand-black/30 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Email Address */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL ADDRESS *"
                  className="w-full bg-transparent border-b border-black/15 hover:border-black/25 focus:border-accent-red py-3 text-xs tracking-widest text-brand-black uppercase placeholder-brand-black/30 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="PHONE NUMBER"
                  className="w-full bg-transparent border-b border-black/15 hover:border-black/25 focus:border-accent-red py-3 text-xs tracking-widest text-brand-black uppercase placeholder-brand-black/30 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Interest Type */}
              <div className="relative">
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full bg-white border-b border-black/15 hover:border-black/25 focus:border-accent-red py-3 text-xs tracking-widest text-brand-black uppercase focus:outline-none transition-all duration-300"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Schedule Tour">Schedule private tour</option>
                  <option value="Buying">Buying services</option>
                  <option value="Selling">Selling services</option>
                  <option value="Lease Interest">Leasing information</option>
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="MESSAGE / REQUEST DETAILS *"
                  className="w-full bg-transparent border-b border-black/15 hover:border-black/25 focus:border-accent-red py-3 text-xs tracking-widest text-brand-black placeholder-brand-black/30 focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

            </div>

            {/* Terms Consent line */}
            <p className="text-[10px] text-brand-black/40 tracking-wide leading-relaxed font-light">
              By submitting this form, you authorize The Oppenheim Group Real Estate to contact you regarding properties or services. Your privacy is strictly guarded.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 bg-accent-red hover:bg-white text-white hover:text-brand-black font-semibold text-xs tracking-[0.3em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl cursor-pointer"
            >
              {status === 'submitting' ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>TRANSMITTING...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>SEND SECURE INQUIRY</span>
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center py-16 space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-accent-red/10 border border-accent-red/30 flex items-center justify-center text-accent-red animate-pulse">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-serif tracking-[0.2em] text-brand-black uppercase">
                TRANSMISSION SECURED
              </h3>
              <p className="text-xs text-brand-black/60 leading-relaxed max-w-sm mx-auto tracking-wider font-light">
                Thank you, <span className="text-brand-black font-medium">{formData.name}</span>. Your luxury service request has been received by our private concierge. An advisor will contact you within 24 hours.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-black/5 hover:bg-accent-red hover:text-white text-brand-black border border-black/10 rounded-sm text-[10px] uppercase tracking-[0.25em] font-medium transition-all"
              >
                Send New Message
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
