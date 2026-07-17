import { Property, Agent, Office, PressMention, Testimonial, Insight } from '../types';

export const CITIES = [
  'All Locations',
  'Los Angeles',
  'Newport Beach',
  'San Diego',
  'Cabo San Lucas'
];

export const AGENTS: Agent[] = [
  {
    id: '1',
    name: 'Jason Oppenheim',
    role: 'Founder & President',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    phone: '+1 (310) 555-0100',
    email: 'jason@oppenheim.luxury',
    bio: 'Jason Oppenheim is the Founder and President of the brokerage. With more than $3 billion in closed sales, he has been recognized by the Wall Street Journal as the #1 agent in West Hollywood and top 10 nationwide.'
  },
  {
    id: '2',
    name: 'Brett Oppenheim',
    role: 'Co-Founder & Partner',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    phone: '+1 (310) 555-0101',
    email: 'brett@oppenheim.luxury',
    bio: 'Brett Oppenheim has represented some of the most prominent figures in Los Angeles and successfully negotiated major deals in luxury residential real estate, developing a reputation for stellar client service and meticulous attention to detail.'
  },
  {
    id: '3',
    name: 'Alexandra Croft',
    role: 'Senior Real Estate Associate',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    phone: '+1 (310) 555-0102',
    email: 'alexandra@oppenheim.luxury',
    bio: 'Alexandra specializes in ultra-high-net-worth clients along the Newport Coast and Malibu. Her deep understanding of design, architecture, and marketing ensures properties are showcased to their maximum aesthetic potential.'
  },
  {
    id: '4',
    name: 'Marcus Sterling',
    role: 'Director of Luxury Estates',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    phone: '+1 (310) 555-0103',
    email: 'marcus@oppenheim.luxury',
    bio: 'With over a decade of experience in San Diego and Cabo, Marcus provides his clients with bespoke advisory services. His analytical prowess and tough negotiation skills make him an invaluable asset to buyers and sellers alike.'
  }
];

export const PROPERTIES: Property[] = [
  {
    id: 'sierra-alta',
    title: 'The Sierra Alta Estate',
    price: 28500000,
    address: '1425 Sierra Alta Way',
    city: 'Los Angeles',
    beds: 5,
    baths: 7,
    sqft: 11200,
    lotSize: '0.92 Acres',
    type: 'sale',
    propertyType: 'Estate',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'This architectural tour de force on West Hollywood\'s legendary Sunset Strip boasts incredible panoramic jetliner views over the city skyline. Designed by world-renowned architects, the estate integrates high-end smart home automation with organic materials, custom limestone floors, and steel framing. Features include a dual-sided water firewall, zero-edge heated infinity pool, private wellness wing with Swedish sauna, a cutting-edge 12-seat home theater, and an underground collector gallery for 8 vehicles.',
    yearBuilt: 2024,
    agentId: '1',
    featured: true
  },
  {
    id: 'newport-pavilion',
    title: 'The Newport Coast Pavilion',
    price: 19950000,
    address: '18 Pelican Hill Circle',
    city: 'Newport Beach',
    beds: 6,
    baths: 8,
    sqft: 9800,
    lotSize: '0.65 Acres',
    type: 'sale',
    propertyType: 'Villa',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Perfectly situated within the prestigious Pelican Hill gated community, this spectacular modern pavilion offers unobstructed, 180-degree ocean views, including vistas of Catalina Island and Newport Harbor. Framed by hand-polished plaster walls, massive dual-paned pocket doors glide open to fuse the grand double-height living room with sprawling outdoor terraces. Complete with a commercial-grade chef\'s kitchen, dual master suites, professional wine salon, and custom marble infinity edge pool.',
    yearBuilt: 2023,
    agentId: '3',
    featured: true
  },
  {
    id: 'jolla-crest',
    title: 'The Jolla Crest',
    price: 14200000,
    address: '7822 Prospect Terrace',
    city: 'San Diego',
    beds: 4,
    baths: 5,
    sqft: 7400,
    lotSize: '0.50 Acres',
    type: 'sale',
    propertyType: 'Sanctuary',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Perched dramatically on a rugged ocean bluff in La Jolla, this minimalist masterpiece is a masterclass in quiet luxury and structural engineering. Cantilevered terraces extend over the Pacific, giving the sensation of floating above the surf. Limestone floors flow seamlessly from the interior out to the sunbathing deck, where a negative-edge glass pool mirrors the ocean horizon. Features include a gourmet kitchen with custom white oak cabinetry, automated security, and bespoke lighting fixtures.',
    yearBuilt: 2022,
    agentId: '4',
    featured: true
  },
  {
    id: 'villa-oro',
    title: 'Villa de Oro',
    price: 12800000,
    address: 'Lote 12, Pedregal Heights',
    city: 'Cabo San Lucas',
    beds: 5,
    baths: 6,
    sqft: 8200,
    lotSize: '1.2 Acres',
    type: 'sale',
    propertyType: 'Modern Villa',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A spectacular desert-meets-ocean sanctuary in Pedregal. Capturing breathtaking sunsets over the Pacific, Villa de Oro represents the pinnacle of indoor-outdoor living. Solid rock walls blend with glass windows, high ceilings, custom carpentry, and high-end volcanic stone tiling. Outside, a grand deck hosts a sunken fire pit lounge, infinity pool, spa, swim-up bar, and extensive professional grilling kitchen.',
    yearBuilt: 2025,
    agentId: '2',
    featured: true
  },
  {
    id: 'sunset-penthouse',
    title: 'The Sunset Strip Penthouse',
    price: 8900000,
    address: '8800 Sunset Blvd, PH 4',
    city: 'Los Angeles',
    beds: 3,
    baths: 4,
    sqft: 4500,
    lotSize: 'N/A',
    type: 'lease',
    propertyType: 'Penthouse',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eed4335649a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Offering the highest level of luxury living, this dual-story penthouse rises above the historic Sunset Strip. Exquisite details include a floating oak staircase, custom marble panels, Gaggenau kitchen suites, and floor-to-ceiling windows. The master floor features a private wellness chamber, double walk-in boutique closets, and direct elevator access. An open staircase leads to a 2,000 sqft sky terrace with private plunge pool.',
    yearBuilt: 2023,
    agentId: '1',
    featured: false
  },
  {
    id: 'beverly-manor',
    title: 'The Beverly Hills Manor',
    price: 34000000,
    address: '1005 Benedict Canyon Rd',
    city: 'Los Angeles',
    beds: 7,
    baths: 10,
    sqft: 15500,
    lotSize: '1.45 Acres',
    type: 'sale',
    propertyType: 'Grand Manor',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Fusing classic European architecture with contemporary clean lines, the Beverly Hills Manor is a landmark compound nestled behind tall privet hedges on Benedict Canyon. From the sweeping steel-and-glass foyer to the pristine formal gardens, every detail has been custom crafted. Highlights include a professional tennis court, a 2-story guest cottage, a magnificent ballroom, commercial-grade wine gallery, and state-of-the-art spa.',
    yearBuilt: 2021,
    agentId: '2',
    featured: false
  }
];

export const OFFICES: Office[] = [
  {
    id: 'la',
    name: 'West Hollywood Headquarters',
    city: 'Los Angeles',
    address: '8625 Sunset Blvd, West Hollywood, CA 90069',
    phone: '+1 (310) 555-0100',
    email: 'la@oppenheim.luxury',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    directionsUrl: 'https://maps.google.com/?q=8625+Sunset+Blvd,+West+Hollywood,+CA+90069'
  },
  {
    id: 'newport',
    name: 'Newport Beach Office',
    city: 'Newport Beach',
    address: '2908 East Coast Hwy, Corona Del Mar, CA 92625',
    phone: '+1 (949) 555-0110',
    email: 'newport@oppenheim.luxury',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    directionsUrl: 'https://maps.google.com/?q=2908+East+Coast+Hwy,+Corona+Del+Mar,+CA+92625'
  },
  {
    id: 'sd',
    name: 'La Jolla Sanctuary Office',
    city: 'San Diego',
    address: '7911 Girard Ave, La Jolla, CA 92037',
    phone: '+1 (858) 555-0120',
    email: 'sandiego@oppenheim.luxury',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    directionsUrl: 'https://maps.google.com/?q=7911+Girard+Ave,+La+Jolla,+CA+92037'
  },
  {
    id: 'cabo',
    name: 'Cabo Marina Lounge',
    city: 'Cabo San Lucas',
    address: 'Marina Boulevard, Suite 100, Cabo San Lucas, BCS 23450',
    phone: '+52 (624) 555-0199',
    email: 'cabo@oppenheim.luxury',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    directionsUrl: 'https://maps.google.com/?q=Marina+Boulevard,+Cabo+San+Lucas,+Mexico'
  }
];

export const PRESS_MENTIONS: PressMention[] = [
  {
    id: '1',
    source: 'The Wall Street Journal',
    logoText: 'WSJ',
    headline: 'Breaking Records in West Hollywood\'s Sierra Alta',
    excerpt: 'The Oppenheim Group secures top honors and hits new pricing benchmarks with the closing of the modern Sierra Alta compound, establishing West Hollywood\'s most lucrative sales of the decade.',
    link: '#',
    date: 'June 18, 2026'
  },
  {
    id: '2',
    source: 'Forbes',
    logoText: 'Forbes',
    headline: 'The Elite Brokerage Redefining High-End Real Estate Marketing',
    excerpt: 'With cinematic property films, customized branding assets, and high-impact design integrations, Jason and Brett Oppenheim continue to set global standards for marketing premium properties.',
    link: '#',
    date: 'April 05, 2026'
  },
  {
    id: '3',
    source: 'Architectural Digest',
    logoText: 'AD',
    headline: 'Inside the Glass Walls of Pelican Hill Circle',
    excerpt: 'An deep architectural review of the Pelican Hill circle modern pavilion. AD explores the seamless custom limestone integration, structural glass wall tracks, and automated luxury systems.',
    link: '#',
    date: 'March 22, 2026'
  },
  {
    id: '4',
    source: 'The Hollywood Reporter',
    logoText: 'THR',
    headline: 'Where L.A. Stars Buy: Oppenheim\'s Multi-Million Dollar Compounds',
    excerpt: 'The go-to agency for actors, athletes, and industry leaders reports double digit growth in premium off-market properties as elite buyers request privacy compounds over open mansions.',
    link: '#',
    date: 'January 14, 2026'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Michael Ashford',
    role: 'Buyer, Sierra Alta Estate',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    quote: 'The level of discretion and market knowledge the team brought to our search was unmatched. We closed on our dream home in under three weeks, well below asking market timelines.',
    rating: 5
  },
  {
    id: '2',
    name: 'Isabella Chen',
    role: 'Seller, Newport Coast',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=300&q=80',
    quote: 'From staging to final walk-through, every detail was handled with genuine care. They achieved a sale price 12% above our initial valuation estimate.',
    rating: 5
  },
  {
    id: '3',
    name: 'David Whitfield',
    role: 'Investor, San Diego Portfolio',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    quote: 'As an out-of-state investor, I needed a team I could trust completely. Their due diligence and off-market access gave me confidence at every step of the acquisition.',
    rating: 5
  },
  {
    id: '4',
    name: 'Sophia Martinez',
    role: 'Buyer, Villa de Oro',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quote: 'Relocating internationally felt effortless with their guidance. They coordinated everything from private viewings to closing logistics across two countries.',
    rating: 5
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: 'la-market-2026',
    title: 'Los Angeles Luxury Market: Mid-2026 Outlook',
    category: 'Market Report',
    excerpt: 'Inventory remains tight across West Hollywood and Beverly Hills as ultra-high-net-worth buyers continue to prioritize turnkey architectural estates.',
    content: [
      'The Los Angeles luxury segment has shown remarkable resilience through the first half of 2026, with median sale prices for estates above $10M rising 6.2% year-over-year.',
      'Buyers are increasingly favoring newly constructed, architecturally distinct properties with integrated smart-home systems over older renovated compounds.',
      'Days-on-market for well-priced luxury listings in West Hollywood and the Bird Streets have compressed to an average of 34 days, down from 52 days in 2025.',
      'We expect continued strength through Q4, driven by limited new construction permits and sustained demand from both domestic relocations and international buyers.'
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    date: 'July 2, 2026',
    readTime: '4 min read'
  },
  {
    id: 'newport-neighborhood-guide',
    title: 'Neighborhood Guide: Newport Coast & Pelican Hill',
    category: 'Neighborhood Guide',
    excerpt: 'An insider look at one of Orange County\'s most coveted gated communities — schools, lifestyle amenities, and what makes the coastline unique.',
    content: [
      'Newport Coast sits along a dramatic stretch of Pacific coastline, anchored by the Pelican Hill Resort and its two Tom Fazio-designed golf courses.',
      'Families are drawn to the area for its access to top-rated Newport-Mesa Unified schools, alongside private options including Sage Hill School.',
      'The community offers resort-style amenities: private beach clubs, hiking trails through coastal bluffs, and some of the most sought-after ocean-view building sites in Southern California.',
      'Average lot sizes here exceed half an acre, a rarity in coastal Orange County, making it a favorite for buyers seeking privacy without sacrificing proximity to Fashion Island and John Wayne Airport.'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    date: 'June 20, 2026',
    readTime: '5 min read'
  },
  {
    id: 'buying-off-market',
    title: 'The Case for Off-Market Acquisitions',
    category: 'Buyer Advisory',
    excerpt: 'Why serious buyers are increasingly turning to private, unlisted inventory — and how to position yourself for access.',
    content: [
      'A growing share of ultra-luxury transactions never touch the open market. Sellers seeking discretion often work through trusted advisory networks instead.',
      'Off-market access requires established relationships with brokerages that maintain active private inventory — something built over years, not weeks.',
      'For buyers, the advantage is reduced competition and negotiating leverage that simply doesn\'t exist once a property is publicly listed and drawing multiple offers.',
      'We recommend serious buyers begin a confidential conversation with an advisor well before they are ready to transact, ensuring first-look access when inventory becomes available.'
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    date: 'June 5, 2026',
    readTime: '3 min read'
  },
  {
    id: 'staging-for-sale',
    title: 'Staging Strategies That Maximize Sale Price',
    category: 'Seller Advisory',
    excerpt: 'Data-driven staging decisions that consistently outperform in the ultra-luxury segment, based on our recent closed transactions.',
    content: [
      'Professionally staged luxury homes sell an average of 18% faster than unstaged comparables in our recent transaction data.',
      'Neutral, warm-toned furnishings photograph better across all marketing channels and appeal to the broadest pool of qualified buyers.',
      'Outdoor living spaces — pools, fire features, and view terraces — deserve equal staging investment, as buyers increasingly weigh indoor-outdoor flow heavily.',
      'We provide complimentary staging consultations to all sellers as part of our full-service marketing package.'
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    date: 'May 18, 2026',
    readTime: '4 min read'
  }
];
