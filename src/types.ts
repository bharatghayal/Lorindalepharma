export type Language = "en" | "mm";

export interface Translatable<T> {
  en: T;
  mm: T;
}

export interface StatItem {
  number: string;
  label: Translatable<string>;
  suffix: string;
}

export interface HighlightCard {
  title: Translatable<string>;
  description: Translatable<string>;
}

export interface ValueCard {
  title: Translatable<string>;
  description: Translatable<string>;
  iconName: string;
  color: string;
}

export interface ServiceCard {
  id: string;
  title: Translatable<string>;
  description: Translatable<string>;
  details: Translatable<string[]>;
  iconName: string;
}

export interface ProductItem {
  id: string;
  name: Translatable<string>;
  category: string;
  description: Translatable<string>;
  specifications: Translatable<string[]>;
  image: string;
  badge?: Translatable<string>;
}

export interface PartnerItem {
  name: string;
  logo: string;
  country: string;
}

export interface TeamMember {
  name: Translatable<string>;
  role: Translatable<string>;
  department: "leadership" | "regulatory" | "marketing" | "sales";
  bio: Translatable<string>;
  image: string;
}

export interface OfficeLocation {
  city: Translatable<string>;
  address: Translatable<string>;
  phone: string[];
  email: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
