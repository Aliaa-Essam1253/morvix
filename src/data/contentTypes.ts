export interface LocalizedText {
  en: string;
  ar: string;
}

export interface Project {
  id: string;
  title: LocalizedText;
  client: LocalizedText;
  industry: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  technologies: string[];
  results: LocalizedText[];
  href?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: LocalizedText;
  company: string;
  quote: LocalizedText;
  photo?: string;
  companyLogo?: string;
}
