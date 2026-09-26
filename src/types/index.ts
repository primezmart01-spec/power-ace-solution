export type PageId = 'home' | 'about' | 'services' | 'solar' | 'projects' | 'why-us' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: { label: string; value: string }[];
  iconName: string;
  tagline: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'SOLAR' | 'RESIDENTIAL' | 'COMMERCIAL' | 'ELECTRICAL' | 'SECURITY';
  service: string;
  location: string;
  capacity?: string;
  label: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  systemDetails: {
    panels?: string;
    inverter?: string;
    battery?: string;
    monitoring?: string;
  };
  featured?: boolean;
  createdAt?: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  subtitle: string;
  duration: string;
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  propertyType: 'Residential' | 'Commercial' | 'Industrial' | 'Agricultural';
  serviceRequired: string;
  monthlyBill: string;
  location: string;
  notes?: string;
}

