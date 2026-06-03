import { productImage } from './productAssets';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface ProductCategoryGroup {
  id: string;
  name: string;
  subcategories: string[];
}

export interface PrintTechItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export const productCatalog: ProductCategoryGroup[] = [
  {
    id: 'promotional-items',
    name: 'Promotional Items',
    subcategories: [
      'Pens', 'Bags', 'Caps', 'Lanyards', 'Bottles', 'USBs', 'Stamps',
      'Umbrellas', 'Balls',
    ],
  },
  {
    id: 'personalized-gifts',
    name: 'Personalized Gifts',
    subcategories: ['Magic Mugs', 'Mugs', 'Photo Plates', 'Phone Covers', 'T-Shirts'],
  },
  {
    id: 'corporate-printing',
    name: 'Corporate Printing',
    subcategories: [
      'ID Cards', 'Business Cards', 'Letterheads', 'Certificates', 'Menus',
      'Brochures', 'Book Covers', 'Calendars',
    ],
  },
  {
    id: 'events-cards',
    name: 'Events & Cards',
    subcategories: ['Wedding Cards', 'Invitations', 'Festival Cards', 'Event Badges'],
  },
  {
    id: 'signage-banners',
    name: 'Signage & Banners',
    subcategories: ['Flex Banners', 'LED Boards', 'Name Boards', 'Radium', 'Glass Printing'],
  },
  {
    id: 'awards-trophies',
    name: 'Awards & Trophies',
    subcategories: ['Medals', 'Badges', 'Trophies', 'Plaques'],
  },
];

export const productCategories = ['All', ...productCatalog.map((c) => c.name)];

/** Map each catalog subcategory → filename in `src/products/`. */
const productImagesBySubcategory: Record<string, string> = {
  // Promotional Items
  Pens: productImage('pen.jpg'),
  Bags: productImage('bag.jpg'),
  Caps: productImage('cap.jpg'),
  Lanyards: productImage('Lanyards.jpeg'),
  Bottles: productImage('bottle.jpg'),
  USBs: productImage('pendrive.jpeg'),
  Stamps: productImage('Rubber stamp.jpeg'),
  Umbrellas: productImage('umbrella.jpg'),
  Balls: productImage('ball.jpg'),
  // Personalized Gifts
  'Magic Mugs': productImage('magic mug.jpg'),
  Mugs: productImage('mug.jpg'),
  'Photo Plates': productImage('plate.jpg'),
  'Phone Covers': productImage('phone cover.jpg'),
  'T-Shirts': productImage('tshirt.jpg'),
  // Corporate Printing
  'ID Cards': productImage('id card.jpg'),
  'Business Cards': productImage('Business Cards.jpg'),
  Letterheads: productImage('Letterheads.jpg'),
  Certificates: productImage('certificate.jpg'),
  Menus: productImage('menu.jpg'),
  Brochures: productImage('brochures.jpg'),
  'Book Covers': productImage('book cover.jpg'),
  Calendars: productImage('calendar.jpg'),
  // Events & Cards
  'Wedding Cards': productImage('Wedding Cards.jpg'),
  Invitations: productImage('Invitations.jpg'),
  'Festival Cards': productImage('Festival Cards.jpg'),
  'Event Badges': productImage('batch2.jpg'),
  // Signage & Banners
  'Flex Banners': productImage('flex banner.jpg'),
  'LED Boards': productImage('led.jpg'),
  'Name Boards': productImage('name board.jpg'),
  Radium: productImage('radium.jpg'),
  'Glass Printing': productImage('glass print.jpg'),
  // Awards & Trophies
  Medals: productImage('medal.jpg'),
  Badges: productImage('batch.jpg'),
  Trophies: productImage('trophy.jpg'),
  Plaques: productImage('plaque.jpg'),
};

const popularSubcategories = new Set([
  'Business Cards',
  'Wedding Cards',
  'Flex Banners',
  'T-Shirts',
  'Magic Mugs',
  'Trophies',
  'Bags',
  'ID Cards',
]);

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function defaultFeatures(category: string, name: string): string[] {
  const shared = ['Custom Design', 'Fast Turnaround', 'Bulk Orders'];
  switch (category) {
    case 'Promotional Items':
      return ['Branded Printing', 'Corporate Gifting', ...shared];
    case 'Personalized Gifts':
      return ['Photo / Logo Print', 'Gift Ready', ...shared];
    case 'Corporate Printing':
      return ['Professional Finish', 'Premium Paper', ...shared];
    case 'Events & Cards':
      return ['Luxury Finishes', 'Custom Layouts', ...shared];
    case 'Signage & Banners':
      return ['Indoor & Outdoor', 'Durable Materials', ...shared];
    case 'Awards & Trophies':
      return ['Engraving Available', 'Event Orders', ...shared];
    default:
      return [name, ...shared];
  }
}

export const products: Product[] = productCatalog.flatMap((group) =>
  group.subcategories.map((name) => ({
    id: `${group.id}-${slugify(name)}`,
    name,
    category: group.name,
    description: `Professional ${name.toLowerCase()} printing tailored for your brand, events, and business needs.`,
    features: defaultFeatures(group.name, name),
    image: productImagesBySubcategory[name] ?? productImage('pen.jpg'),
    popular: popularSubcategories.has(name),
  })),
);

export function getSubcategoriesForCategory(categoryName: string): string[] {
  if (categoryName === 'All') return [];
  return productCatalog.find((c) => c.name === categoryName)?.subcategories ?? [];
}

export const allProductServiceOptions = [
  ...productCatalog.map((g) => g.name),
  ...productCatalog.flatMap((g) => g.subcategories),
  'PrintTech Parts & Supply',
  'Custom / Other',
];

export const printTechItems: PrintTechItem[] = [
  {
    id: 'offset-parts',
    name: 'Offset Press Parts',
    category: 'Machine Parts',
    description: 'Genuine and OEM replacement parts for Heidelberg, Komori, Ryobi, and Roland offset printing machines.',
    image: 'https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'digital-parts',
    name: 'Digital Printer Parts',
    category: 'Machine Parts',
    description: 'Consumables and spare parts for HP Indigo, Xerox, Konica Minolta, and Canon digital print systems.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'inks',
    name: 'Printing Inks & Chemicals',
    category: 'Consumables',
    description: 'Premium offset inks, UV inks, solvent inks, and washing chemicals for all press types.',
    image: 'https://images.pexels.com/photos/5721903/pexels-photo-5721903.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'plates',
    name: 'Printing Plates & Films',
    category: 'Consumables',
    description: 'CTP plates, thermal plates, photopolymer plates, and processing chemicals imported directly from manufacturers.',
    image: 'https://images.pexels.com/photos/4240606/pexels-photo-4240606.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Arjun Selvarajah',
    role: 'Marketing Manager, Northgate Foods',
    quote: 'JaffnaPrinters consistently delivers exceptional quality. Their business cards and brochures have elevated our brand presentation significantly.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Krishnamoorthi',
    role: 'Director, Serenity Weddings',
    quote: 'We have been using JaffnaPrinters for all our wedding card requirements. The attention to detail and quality is unmatched.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mohamed Fazil',
    role: 'Owner, Fazil Packaging',
    quote: 'The PrintTech division has been a game-changer for our business. Sourcing press parts is now much easier and cost-effective.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Kavitha Nagendran',
    role: 'HR Manager, Lanka Textiles',
    quote: 'Our corporate uniform printing order was handled flawlessly. Colors were vibrant and delivery was on schedule.',
    rating: 5,
  },
];
