export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface PrintTechItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export const productCategories = [
  'All',
  'Business',
  'Marketing',
  'Packaging',
  'Events',
  'Apparel',
  'Stationery',
];

export const products: Product[] = [
  {
    id: 'business-cards',
    name: 'Business Cards',
    category: 'Business',
    description: 'Premium business cards with UV coating, embossing, and foil options. Make a lasting first impression.',
    features: ['UV Coating', 'Spot UV', 'Foil Stamping', '350gsm+'],
    image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=600',
    popular: true,
  },
  {
    id: 'flyers',
    name: 'Flyers & Leaflets',
    category: 'Marketing',
    description: 'High-impact flyers for promotions, events, and marketing campaigns. Vivid full-color printing.',
    features: ['A5 / A4 / DL', 'Gloss or Matte', 'Double Sided', 'Fast Turnaround'],
    image: 'https://images.pexels.com/photos/4440280/pexels-photo-4440280.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'stickers',
    name: 'Stickers & Labels',
    category: 'Packaging',
    description: 'Custom-cut stickers and labels for branding, packaging, and promotional use.',
    features: ['Waterproof', 'Custom Die Cut', 'Roll Labels', 'Holographic Options'],
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
    popular: true,
  },
  {
    id: 'packaging',
    name: 'Packaging & Boxes',
    category: 'Packaging',
    description: 'Custom branded packaging solutions for retail, e-commerce, and gifting.',
    features: ['Custom Sizes', 'Branded Printing', 'Corrugated Options', 'Eco-friendly'],
    image: 'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'wedding-cards',
    name: 'Wedding Cards',
    category: 'Events',
    description: 'Elegant wedding invitations with luxury finishes, embossing, and premium paper stocks.',
    features: ['Luxury Paper', 'Foil Accents', 'Embossing', 'Custom Envelopes'],
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    popular: true,
  },
  {
    id: 'banners',
    name: 'Banners & Signage',
    category: 'Marketing',
    description: 'Large format banners, roll-up stands, and outdoor signage for events and promotions.',
    features: ['Vinyl & Fabric', 'Pull-Up Stands', 'Outdoor UV Ink', 'Any Size'],
    image: 'https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'tshirts',
    name: 'T-Shirt Printing',
    category: 'Apparel',
    description: 'Custom T-shirt and apparel printing using DTG, screen printing, and sublimation.',
    features: ['DTG Printing', 'Screen Print', 'Sublimation', 'Bulk Orders'],
    image: 'https://images.pexels.com/photos/5698850/pexels-photo-5698850.jpeg?auto=compress&cs=tinysrgb&w=600',
    popular: true,
  },
  {
    id: 'brochures',
    name: 'Brochures & Catalogues',
    category: 'Marketing',
    description: 'Professional multi-page brochures and product catalogues for corporate and retail use.',
    features: ['Saddle Stitched', 'Perfect Bound', 'Spot UV Cover', 'Custom Sizes'],
    image: 'https://images.pexels.com/photos/7439135/pexels-photo-7439135.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
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
