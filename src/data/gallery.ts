export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tall?: boolean;
}

export const galleryCategories = [
  'All',
  'Corporate',
  'Events',
  'Signage',
  'Promotional',
  'Personalized',
  'Facility',
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  {
    id: 'hero-production',
    title: 'Production Floor',
    category: 'Facility',
    image: '/hero-scene.png',
    tall: true,
  },
  {
    id: 'hero-banner',
    title: 'Large-Format Banner Print',
    category: 'Signage',
    image: '/hero-banner.png',
  },
  {
    id: 'business-cards',
    title: 'Premium Business Cards',
    category: 'Corporate',
    image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'wedding-cards',
    title: 'Luxury Wedding Invitations',
    category: 'Events',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: true,
  },
  {
    id: 'flex-banner',
    title: 'Outdoor Flex Banner',
    category: 'Signage',
    image: 'https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'promo-items',
    title: 'Branded Promotional Items',
    category: 'Promotional',
    image: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'hero-products',
    title: 'Product Showcase',
    category: 'Facility',
    image: '/hero-products.png',
  },
  {
    id: 'magic-mugs',
    title: 'Personalized Magic Mugs',
    category: 'Personalized',
    image: 'https://images.pexels.com/photos/5698850/pexels-photo-5698850.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'id-cards',
    title: 'Corporate ID Cards',
    category: 'Corporate',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'trophies',
    title: 'Awards & Trophies',
    category: 'Events',
    image: 'https://images.pexels.com/photos/278887/pexels-photo-278887.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 't-shirts',
    title: 'Custom Apparel Printing',
    category: 'Promotional',
    image: 'https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: true,
  },
  {
    id: 'led-board',
    title: 'LED Signage Board',
    category: 'Signage',
    image: 'https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'letterheads',
    title: 'Corporate Stationery',
    category: 'Corporate',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'photo-plates',
    title: 'Photo Gift Plates',
    category: 'Personalized',
    image: 'https://images.pexels.com/photos/6615091/pexels-photo-6615091.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'hero-shop',
    title: 'Jaffna Printers Showroom',
    category: 'Facility',
    image: '/hero1.png',
    tall: true,
  },
];
