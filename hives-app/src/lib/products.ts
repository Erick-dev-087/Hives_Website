import type { Product, CategoryInfo, Testimonial, MomentScene } from '@/types';

// ── Product Categories ──
export const categories: CategoryInfo[] = [
  {
    slug: 'cakes',
    name: 'Cakes',
    description: 'Birthday, graduation & celebration cakes',
    image: '/images/cakes/birthday_cakes/Birthday_cake.png',
    icon: 'cake',
  },
  {
    slug: 'cupcakes',
    name: 'Cupcakes',
    description: 'Beautifully crafted cupcake packs',
    image: '/images/cupcakes/Cupcakes.png',
    icon: 'cupcake',
  },
  {
    slug: 'ice-cream',
    name: 'Ice Cream & Sundaes',
    description: 'Scoops, sundaes & frozen treats',
    image: '/images/icecrams_sundaes/icrecream.jpg',
    icon: 'icecream',
  },
  {
    slug: 'smoothies',
    name: 'Smoothies',
    description: 'Fresh fruit blends & shakes',
    image: '/images/smoothies/smoothie_1.jpg',
    icon: 'cup',
  },
  {
    slug: 'milkshakes',
    name: 'Milkshakes',
    description: 'Thick, creamy shakes',
    image: '/images/milkshake/hives_milkshake.webp',
    icon: 'cup',
  },
  {
    slug: 'yoghurt',
    name: 'Yoghurt',
    description: 'Fresh creamy yoghurt',
    image: '/images/youghurts/Youghut_1.jpg',
    icon: 'cup',
  },
  {
    slug: 'coffee',
    name: 'Coffee & Loaves',
    description: 'Barista coffee & fresh bakes',
    image: '/images/coffee/sweet_black_coffee.webp',
    icon: 'coffee',
  },
  {
    slug: 'pastries',
    name: 'Pastries & Donuts',
    description: 'Donuts, pastries & sweet bites',
    image: '/images/pastries/donuts_1.jpg',
    icon: 'croissant',
  },
];

// ── Products ──
export const products: Product[] = [
  // ─── Cakes ───
  {
    id: 'cake-birthday-1',
    slug: 'birthday-cake',
    name: 'Birthday Cake',
    category: 'cakes',
    cravings: ['sweet', 'celebrate'],
    price: 1700,
    priceRange: { min: 1000, max: 2800 },
    image: '/images/cakes/birthday_cakes/Birthday_cake.png',
    images: [
      '/images/cakes/birthday_cakes/Birthday_cake.png',
      '/images/cakes/birthday_cakes/Birthday_cake_3.jpg',
      '/images/cakes/birthday_cakes/Birthday_cake_4.jpg',
      '/images/cakes/birthday_cakes/Birthday_cake_5.jpg',
      '/images/cakes/birthday_cakes/Birthday_cake_6.jpg',
      '/images/cakes/birthday_cakes/b_cake.webp',
    ],
    description: 'Beautiful custom birthday cakes for your special day',
    featured: true,
    options: [
      {
        label: 'Size',
        values: ['½ kg', '¾ kg', '1 kg', '1.5 kg', '2 kg'],
        priceModifiers: { '½ kg': 1000, '¾ kg': 1200, '1 kg': 1700, '1.5 kg': 2500, '2 kg': 2800 },
      },
      {
        label: 'Flavour',
        values: ['Chocolate', 'Vanilla', 'Red Velvet', 'Buttercream'],
      },
      {
        label: 'Topper',
        values: ['None', 'Paper Topper', 'Acrylic Topper'],
        priceModifiers: { 'None': 0, 'Paper Topper': 100, 'Acrylic Topper': 250 },
      },
    ],
  },
  {
    id: 'cake-graduation-1',
    slug: 'graduation-cake',
    name: 'Graduation Cake',
    category: 'cakes',
    cravings: ['sweet', 'celebrate'],
    price: 1700,
    priceRange: { min: 1000, max: 2800 },
    image: '/images/cakes/Graduation_cake.png',
    images: [
      '/images/cakes/Graduation_cake.png',
      '/images/cakes/graduation_cakes/cake_9_graduation.jpg',
    ],
    description: 'Celebrate academic milestones with a custom graduation cake',
    featured: true,
    options: [
      {
        label: 'Size',
        values: ['½ kg', '¾ kg', '1 kg', '1.5 kg', '2 kg'],
        priceModifiers: { '½ kg': 1000, '¾ kg': 1200, '1 kg': 1700, '1.5 kg': 2500, '2 kg': 2800 },
      },
      {
        label: 'Flavour',
        values: ['Chocolate', 'Vanilla', 'Red Velvet'],
      },
    ],
  },
  {
    id: 'cake-themed-1',
    slug: 'themed-cake',
    name: 'Themed Cake',
    category: 'cakes',
    cravings: ['sweet', 'celebrate'],
    price: 1700,
    priceRange: { min: 1000, max: 2800 },
    image: '/images/cakes/themed_cakes/Awesome_cake.png',
    images: [
      '/images/cakes/themed_cakes/Awesome_cake.png',
      '/images/cakes/themed_cakes/cake_5_themed.jpg',
      '/images/cakes/themed_cakes/cake_6_themed.jpg',
      '/images/cakes/themed_cakes/cake_7_themed.jpg',
    ],
    description: 'Custom designed cakes for any theme or occasion',
    featured: true,
    options: [
      {
        label: 'Size',
        values: ['½ kg', '¾ kg', '1 kg', '1.5 kg', '2 kg'],
        priceModifiers: { '½ kg': 1000, '¾ kg': 1200, '1 kg': 1700, '1.5 kg': 2500, '2 kg': 2800 },
      },
      {
        label: 'Flavour',
        values: ['Chocolate', 'Vanilla', 'Red Velvet', 'Buttercream'],
      },
    ],
  },
  {
    id: 'cake-valentine-1',
    slug: 'valentine-cake',
    name: 'Valentine Cake',
    category: 'cakes',
    cravings: ['sweet', 'celebrate'],
    price: 1700,
    priceRange: { min: 1000, max: 2800 },
    image: '/images/cakes/valentine_cakes/Valentine_cakes.png',
    images: [
      '/images/cakes/valentine_cakes/Valentine_cakes.png',
      '/images/cakes/valentine_cakes/cake_8_valentine.jpg',
    ],
    description: 'Romantic cakes for Valentine\'s Day & anniversaries',
    options: [
      {
        label: 'Size',
        values: ['½ kg', '¾ kg', '1 kg', '1.5 kg', '2 kg'],
        priceModifiers: { '½ kg': 1000, '¾ kg': 1200, '1 kg': 1700, '1.5 kg': 2500, '2 kg': 2800 },
      },
    ],
  },
  {
    id: 'cake-chocolate-1',
    slug: 'chocolate-cake',
    name: 'Chocolate Cake',
    category: 'cakes',
    cravings: ['sweet'],
    price: 1700,
    priceRange: { min: 1000, max: 2800 },
    image: '/images/cakes/other/chocolate_cake.jpg',
    images: [
      '/images/cakes/other/chocolate_cake.jpg',
      '/images/cakes/other/Cake_3.jpg',
      '/images/cakes/other/Cake_4.jpg',
    ],
    description: 'Rich, decadent chocolate cake',
    options: [
      {
        label: 'Size',
        values: ['½ kg', '¾ kg', '1 kg', '1.5 kg', '2 kg'],
        priceModifiers: { '½ kg': 1000, '¾ kg': 1200, '1 kg': 1700, '1.5 kg': 2500, '2 kg': 2800 },
      },
    ],
  },
  {
    id: 'cake-slice-1',
    slug: 'cake-slice',
    name: 'Cake Slice',
    category: 'cakes',
    cravings: ['sweet'],
    price: 90,
    image: '/images/cakes/other/Cake_3.jpg',
    description: 'A generous slice of our freshly baked cakes',
    options: [
      {
        label: 'Type',
        values: ['Dine In', 'Takeaway'],
        priceModifiers: { 'Dine In': 90, 'Takeaway': 100 },
      },
    ],
  },
  {
    id: 'cake-marble-slice',
    slug: 'marble-cake-slice',
    name: 'Marble Cake Slice',
    category: 'cakes',
    cravings: ['sweet'],
    price: 80,
    image: '/images/cakes/other/Cake_4.jpg',
    description: 'Classic marble cake with swirled chocolate and vanilla',
  },

  // ─── Cupcakes ───
  {
    id: 'cupcake-6pack',
    slug: 'cupcakes-6-pack',
    name: 'Cupcakes (6 Pack)',
    category: 'cupcakes',
    cravings: ['sweet', 'celebrate'],
    price: 600,
    image: '/images/cupcakes/Cupcakes.png',
    images: [
      '/images/cupcakes/Cupcakes.png',
      '/images/cupcakes/cupcakes_2.jpg',
      '/images/cupcakes/cupcakes_3.jpg',
    ],
    description: 'Six beautifully decorated cupcakes',
    featured: true,
    options: [
      {
        label: 'Pack Size',
        values: ['6 Pack', '12 Pack'],
        priceModifiers: { '6 Pack': 600, '12 Pack': 1200 },
      },
      {
        label: 'Flavour',
        values: ['Vanilla', 'Chocolate', 'Red Velvet', 'Assorted'],
      },
    ],
  },

  // ─── Ice Cream & Sundaes ───
  {
    id: 'icecream-sundae',
    slug: 'ice-cream-sundae',
    name: 'Ice Cream Sundae',
    category: 'ice-cream',
    cravings: ['cold', 'sweet', 'creamy'],
    price: 150,
    priceRange: { min: 80, max: 200 },
    image: '/images/icecrams_sundaes/icrecream.jpg',
    images: [
      '/images/icecrams_sundaes/icrecream.jpg',
      '/images/icecrams_sundaes/icecream_2.jpg',
      '/images/icecrams_sundaes/icecream_3.jpg',
      '/images/icecrams_sundaes/icecream_4.jpg',
      '/images/icecrams_sundaes/icecream_5.jpg',
    ],
    description: 'Creamy ice cream with toppings and fresh fruit',
    featured: true,
    options: [
      {
        label: 'Size',
        values: ['Single', 'Double', 'Triple', 'Deluxe'],
        priceModifiers: { 'Single': 80, 'Double': 100, 'Triple': 150, 'Deluxe': 200 },
      },
      {
        label: 'Flavour',
        values: ['Vanilla', 'Strawberry', 'Mango', 'Chocolate', 'Passion Fruit'],
      },
    ],
  },

  // ─── Smoothies ───
  {
    id: 'smoothie-fruit',
    slug: 'fruit-smoothie',
    name: 'Fruit Smoothie',
    category: 'smoothies',
    cravings: ['cold', 'sweet'],
    price: 250,
    image: '/images/smoothies/smoothie_1.jpg',
    images: [
      '/images/smoothies/smoothie_1.jpg',
      '/images/smoothies/smoothie_2.jpg',
      '/images/smoothies/smoothie_3.jpg',
      '/images/smoothies/smoothie_4.jpg',
      '/images/smoothies/smoothie_5.jpg',
      '/images/smoothies/smoothie_6.jpg',
    ],
    description: 'Fresh blended fruit smoothie',
    featured: true,
    options: [
      {
        label: 'Flavour',
        values: ['Mango', 'Strawberry', 'Mixed Berry', 'Tropical', 'Passion', 'Banana'],
      },
    ],
  },

  // ─── Milkshakes ───
  {
    id: 'milkshake-1',
    slug: 'milkshake',
    name: 'Milkshake',
    category: 'milkshakes',
    cravings: ['cold', 'creamy', 'sweet'],
    price: 250,
    image: '/images/milkshake/hives_milkshake.webp',
    description: 'Thick, creamy milkshake with whipped cream',
    featured: true,
    options: [
      {
        label: 'Flavour',
        values: ['Oreo', 'Chocolate', 'Vanilla', 'Strawberry'],
      },
    ],
  },

  // ─── Yoghurt ───
  {
    id: 'yoghurt-1l',
    slug: 'fresh-yoghurt',
    name: 'Fresh Yoghurt (1 Litre)',
    category: 'yoghurt',
    cravings: ['creamy', 'cold'],
    price: 180,
    image: '/images/youghurts/Youghut_1.jpg',
    images: [
      '/images/youghurts/Youghut_1.jpg',
      '/images/youghurts/youghurt_2.jpg',
    ],
    description: 'Fresh, creamy yoghurt made daily',
  },

  // ─── Coffee & Loaves ───
  {
    id: 'coffee-sweet-black',
    slug: 'sweet-black-coffee',
    name: 'Sweet Black Coffee',
    category: 'coffee',
    cravings: ['sweet'],
    price: 100,
    image: '/images/coffee/sweet_black_coffee.webp',
    description: 'Rich, smooth sweet black coffee',
  },
  {
    id: 'coffee-loaf',
    slug: 'coffee-loaf',
    name: 'Coffee Loaf',
    category: 'coffee',
    cravings: ['sweet'],
    price: 150,
    image: '/images/coffee/coffee_loaf.jpeg',
    description: 'Freshly baked coffee-flavoured loaf',
  },
  {
    id: 'loaf-plain',
    slug: 'plain-loaf',
    name: 'Fresh Loaf',
    category: 'coffee',
    cravings: ['sweet'],
    price: 120,
    image: '/images/coffee/loaf.jpeg',
    description: 'Soft, fresh baked loaf bread',
  },

  // ─── Pastries & Donuts ───
  {
    id: 'donut-plain',
    slug: 'plain-doughnut',
    name: 'Plain Doughnut',
    category: 'pastries',
    cravings: ['sweet'],
    price: 40,
    image: '/images/pastries/donuts_1.jpg',
    images: [
      '/images/pastries/donuts_1.jpg',
      '/images/pastries/donuts_2.jpg',
    ],
    description: 'Soft, fluffy plain doughnut',
  },
  {
    id: 'donut-chocolate',
    slug: 'chocolate-doughnut',
    name: 'Chocolate Doughnut',
    category: 'pastries',
    cravings: ['sweet'],
    price: 50,
    image: '/images/pastries/donuts_2.jpg',
    description: 'Rich chocolate glazed doughnut',
  },
];

// ── Made for the Moment Scenes ──
export const momentScenes: MomentScene[] = [
  {
    id: 'birthday',
    title: 'Birthday Cakes',
    subtitle: 'Make their day a little sweeter.',
    image: '/images/cakes/birthday_cakes/Birthday_cake.png',
    occasion: 'birthday',
  },
  {
    id: 'graduation',
    title: 'Graduation Cakes',
    subtitle: 'For milestones worth celebrating.',
    image: '/images/cakes/Graduation_cake.png',
    occasion: 'graduation',
  },
  {
    id: 'themed',
    title: 'Themed Cakes',
    subtitle: 'Made around your moment.',
    image: '/images/cakes/themed_cakes/Awesome_cake.png',
    occasion: 'themed',
  },
  {
    id: 'cupcakes',
    title: 'Cupcakes',
    subtitle: 'Small treats. Big mood.',
    image: '/images/cupcakes/cupcakes_2.jpg',
  },
  {
    id: 'drinks',
    title: 'Smoothies & Drinks',
    subtitle: 'Something refreshing?',
    image: '/images/smoothies/smoothie_1.jpg',
  },
  {
    id: 'icecream',
    title: 'Ice Cream',
    subtitle: 'Go on. Get another scoop.',
    image: '/images/icecrams_sundaes/icrecream.jpg',
  },
];

// ── Testimonials ──
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    text: 'The birthday cake was absolutely stunning and tasted even better than it looked! Everyone at the party was impressed. Will definitely order again.',
    rating: 5,
    product: 'Birthday Cake',
  },
  {
    id: 't2',
    name: 'James K.',
    text: 'Best smoothies in Thika, hands down. The mango smoothie is so fresh and the portion sizes are generous. My go-to spot now.',
    rating: 5,
    product: 'Fruit Smoothie',
  },
  {
    id: 't3',
    name: 'Grace W.',
    text: 'Ordered cupcakes for my daughter\'s sweet 16 and they were perfect! Beautiful decoration and the red velvet flavour was divine.',
    rating: 5,
    product: 'Cupcakes',
  },
  {
    id: 't4',
    name: 'David O.',
    text: 'The ice cream sundae with passion fruit topping is incredible. Love the cosy atmosphere of the shop too. Great service!',
    rating: 4,
    product: 'Ice Cream Sundae',
  },
  {
    id: 't5',
    name: 'Mercy N.',
    text: 'I\'ve tried many pastry shops in Thika but Hives is on another level. Their graduation cake for my son was beautiful and so delicious.',
    rating: 5,
    product: 'Graduation Cake',
  },
];

// ── Helper Functions ──
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByCraving(craving: string): Product[] {
  return products.filter((p) => p.cravings.includes(craving as CravingType));
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const lower = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower)
  );
}
