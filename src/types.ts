export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  lotSize?: string;
  type: 'sale' | 'lease';
  propertyType: string;
  images: string[];
  description: string;
  yearBuilt?: number;
  agentId: string;
  featured: boolean;
  videoUrl?: string;
  virtualTourUrl?: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
  bio: string;
}

export interface Office {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  directionsUrl: string;
}

export interface PressMention {
  id: string;
  source: string;
  logoText: string;
  headline: string;
  excerpt: string;
  link: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
  date: string;
  readTime: string;
}
