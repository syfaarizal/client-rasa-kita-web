export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  productCount: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  badge?: "Terlaris" | "Baru" | "Promo";
  shortDescription: string;
  description: string;
  weight?: string;
  stock: number;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  message: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Promo {
  id: string;
  title: string;
  highlight: string;
  description: string;
  discountLabel: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  operationalHours: string;
  socials: { platform: string; href: string; icon: string }[];
  paymentMethods: string[];
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}
