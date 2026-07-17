import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

export default function SocialSidebar() {
  const socials = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'X (Twitter)' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <div id="social-sidebar" className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6 items-center">
      {/* Decorative vertical line */}
      <div className="w-[1px] h-12 bg-white/10"></div>
      
      {socials.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-10 h-10 rounded-full bg-brand-black/80 hover:bg-accent-red border border-white/10 hover:border-accent-red text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg group hover:-translate-x-1"
          >
            <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
          </a>
        );
      })}

      <div className="w-[1px] h-12 bg-white/10"></div>
    </div>
  );
}
