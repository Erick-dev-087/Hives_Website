// ── Product Types ──

export interface ProductOption {
  label: string;
  values: string[];
  priceModifiers?: Record<string, number>; // value → price change in KES
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  cravings: CravingType[];
  price: number;
  priceRange?: { min: number; max: number };
  image: string;
  images?: string[];
  description: string;
  options?: ProductOption[];
  featured?: boolean;
}

export type ProductCategory =
  | 'cakes'
  | 'cupcakes'
  | 'ice-cream'
  | 'smoothies'
  | 'milkshakes'
  | 'yoghurt'
  | 'coffee'
  | 'pastries';

export type CravingType =
  | 'sweet'
  | 'cold'
  | 'creamy'
  | 'celebrate';

export type OccasionType =
  | 'birthday'
  | 'graduation'
  | 'anniversary'
  | 'valentine'
  | 'themed';

// ── Order Types ──

export interface OrderItem {
  product: Product;
  quantity: number;
  selectedOptions: Record<string, string>;
  totalPrice: number;
  cakeMessage?: string;
}

export interface Order {
  items: OrderItem[];
  totalPrice: number;
}

// ── UI Types ──

export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  product?: string;
}

export interface CategoryInfo {
  slug: ProductCategory;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface MomentScene {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  occasion?: OccasionType;
}
