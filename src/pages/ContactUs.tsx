import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import { OFFICES } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, HelpCircle, ShieldAlert } from 'lucide-react';

export default function ContactUs() {
  return (
    <PageTransition>
      <div className="bg-white min-h-screen pt-28 pb-24 font-sans text-brand-black">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-accent-red font-semibold block">
            PRIVATE CONCIERGE CHANNELS
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-widest uppercase">
            CONTACT OUR REGISTRY
          </h1>
          <p className="text-xs md:text-sm text-brand-black/60 max-w-xl mx-auto tracking-wide font-light leading-relaxed">
            Whether coordinating a private off-market acquisition, scheduling an estate valuation, or seeking strategic listing representation, our concierge team is at your immediate disposal.
          </p>
        </div>

        {/* Primary split layout */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Lists & Direct Contact Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-warm-gold font-semibold">
                THE ADVISORY CHANNELS
              </span>
              <h2 className="text-xl md:text-2xl font-serif font-light uppercase tracking-wider text-brand-black">
                HEADQUARTERS & PRIVATE LOUNGES
              </h2>
              <p className="text-xs text-brand-black/60 leading-relaxed font-light tracking-wide">
                Direct your formal inquiries directly to our headquarters in West Hollywood or coordinate a custom viewing briefcase with our regional managers across Pelican Hill, La Jolla, and Cabo San Lucas.
              </p>
            </div>

            {/* Office directory addresses */}
            <div className="space-y-6 pt-4 border-t border-black/10">
              {OFFICES.map((office) => (
                <div key={office.id} className="space-y-2 p-5 bg-neutral-50 border border-black/10 rounded-sm hover:border-black/10 transition-colors">
                  <h3 className="text-xs font-serif font-medium uppercase tracking-widest text-accent-red">
                    {office.name}
                  </h3>
                  
                  <div className="space-y-1.5 text-xs text-brand-black/60 tracking-wider font-light leading-relaxed">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-black/50 flex-shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-brand-black/50 flex-shrink-0" />
                      <span className="font-mono">{office.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-brand-black/50 flex-shrink-0" />
                      <span>{office.email}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Operations Hours */}
            <div className="p-5 border border-black/10 bg-black/5 rounded-sm flex items-start gap-4">
              <Clock className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs font-light">
                <p className="font-medium text-brand-black tracking-widest uppercase">CONCIERGE OPERATIONS HOURS</p>
                <p className="text-brand-black/60 tracking-wider leading-relaxed">
                  Monday — Friday: 8:00 AM — 6:00 PM PST<br />
                  Saturday — Sunday: Private Showings & Appointments Only
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* Legal Disclosures Block */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 mt-16 border-t border-black/10 text-center text-[10px] text-brand-black/40 tracking-widest uppercase space-y-4">
          <HelpCircle className="w-6 h-6 text-accent-red mx-auto animate-pulse" />
          <p className="max-w-md mx-auto leading-relaxed">
            THE OPPENHEIM GROUP REAL ESTATE IS COMMITTED TO THE PRINCIPLES OF THE EQUAL HOUSING OPPORTUNITY ACT. BROKER DRE RECOGNITION LICENSE #0183829.
          </p>
        </section>

      </div>
    </PageTransition>
  );
}
