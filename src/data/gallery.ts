import { productImage } from './productAssets';

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
    id: 'flex-banner',
    title: 'Flex Banner Printing',
    category: 'Signage',
    image: productImage('flex banner.jpg'),
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    category: 'Corporate',
    image: productImage('Business Cards.jpg'),
  },
  {
    id: 'wedding-cards',
    title: 'Wedding Cards',
    category: 'Events',
    image: productImage('Wedding Cards.jpg'),
    tall: true,
  },
  {
    id: 'festival-cards',
    title: 'Festival Cards',
    category: 'Events',
    image: productImage('ganesha.jpg'),
  },
  {
    id: 'brochures',
    title: 'Brochures',
    category: 'Corporate',
    image: productImage('brochures.jpg'),
  },
  {
    id: 'led-board',
    title: 'LED Boards',
    category: 'Signage',
    image: productImage('led.jpg'),
  },
  {
    id: 'name-board',
    title: 'Name Boards',
    category: 'Signage',
    image: productImage('name board.jpg'),
  },
  {
    id: 'name-board-alt',
    title: 'Shop Name Boards',
    category: 'Signage',
    image: productImage('Name Boards.jpg'),
  },
  {
    id: 'stamp-ink',
    title: 'Self-Inking Stamps',
    category: 'Corporate',
    image: productImage('stamp.jpg'),
  },
  {
    id: 'glass-print',
    title: 'Glass Printing',
    category: 'Signage',
    image: productImage('glass print.jpg'),
    tall: true,
  },
  {
    id: 'promo-pen',
    title: 'Branded Pens',
    category: 'Promotional',
    image: productImage('pen.jpg'),
  },
  {
    id: 'promo-umbrella',
    title: 'Branded Umbrellas',
    category: 'Promotional',
    image: productImage('umbrella.jpg'),
  },
  {
    id: 'promo-ball',
    title: 'Promotional Balls',
    category: 'Promotional',
    image: productImage('ball.jpg'),
  },
  {
    id: 'magic-mug',
    title: 'Magic Mugs',
    category: 'Personalized',
    image: productImage('magic mug.jpg'),
  },
  {
    id: 'mug',
    title: 'Printed Mugs',
    category: 'Personalized',
    image: productImage('mug.jpg'),
  },
  {
    id: 'tshirt',
    title: 'T-Shirt Printing',
    category: 'Personalized',
    image: productImage('tshirt.jpg'),
    tall: true,
  },
  {
    id: 'trophy',
    title: 'Trophies',
    category: 'Corporate',
    image: productImage('trophy.jpg'),
  },
  {
    id: 'medal',
    title: 'Medals',
    category: 'Corporate',
    image: productImage('medal.jpg'),
  },
  {
    id: 'badges',
    title: 'Badges & Batches',
    category: 'Events',
    image: productImage('batch.jpg'),
  },
  {
    id: 'rubber-stamp',
    title: 'Rubber Stamps',
    category: 'Corporate',
    image: productImage('Rubber stamp.jpeg'),
  },
  {
    id: 'hero-products',
    title: 'Product Showcase',
    category: 'Facility',
    image: '/hero-products.png',
  },
];
