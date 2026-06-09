import gallery1 from '../gallery/gallery1.jpeg';
import gallery2 from '../gallery/gallery2.jpg';
import gallery3 from '../gallery/gallery3.jpg';
import gallery4 from '../gallery/gallery4.jpg';
import gallery5 from '../gallery/gallery5.jpg';
import gallery6 from '../gallery/gallery6.jpg';
import gallery7 from '../gallery/gallery7.jpg';
import gallery8 from '../gallery/gallery8.jpg';
import gallery9 from '../gallery/gallery9.jpg';
import gallery10 from '../gallery/gallery10.jpg';
import gallery11 from '../gallery/gallery11.jpg';
import gallery12 from '../gallery/gallery12.jpg';
import gallery13 from '../gallery/gallery13.jpg';
import gallery14 from '../gallery/gallery14.jpg';
import gallery15 from '../gallery/gallery15.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const galleryCategories = [
  'All',
  'Corporate',
  'Events',
  'Signage',
  'Promotional',
  'Personalized',
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  {
    id: 'illuminated-signage',
    title: 'Illuminated Shop Signage',
    category: 'Signage',
    image: gallery14,
  },
  {
    id: 'wedding-greeting-cards',
    title: 'Wedding Greeting Cards',
    category: 'Events',
    image: gallery12,
  },
  {
    id: 'custom-bottles',
    title: 'Custom Printed Bottles',
    category: 'Personalized',
    image: gallery7,
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity & Stationery',
    category: 'Corporate',
    image: gallery1,
  },
  {
    id: 'tshirt-printing',
    title: 'Custom T-Shirt Printing',
    category: 'Personalized',
    image: gallery2,
  },
  {
    id: 'thank-you-tags',
    title: 'Thank You Tags & Packaging',
    category: 'Promotional',
    image: gallery11,
  },
  {
    id: 'banner-display-ads',
    title: 'Banner & Display Ads',
    category: 'Promotional',
    image: gallery13,
  },
  {
    id: 'branded-apparel',
    title: 'Branded Polo & Cap Sets',
    category: 'Promotional',
    image: gallery6,
  },
  {
    id: 'photo-mugs',
    title: 'Personalized Photo Mugs',
    category: 'Personalized',
    image: gallery3,
  },
  {
    id: 'menu-signage',
    title: 'Menu Boards & Signage',
    category: 'Signage',
    image: gallery9,
  },
  {
    id: 'illustrated-wedding-cards',
    title: 'Illustrated Wedding Cards',
    category: 'Events',
    image: gallery5,
  },
  {
    id: 'medals-certificates',
    title: 'Medals & Certificates',
    category: 'Events',
    image: gallery10,
  },
  {
    id: 'wedding-invitations',
    title: 'Wedding Invitations',
    category: 'Events',
    image: gallery4,
  },
  {
    id: 'business-cards',
    title: 'Premium Business Cards',
    category: 'Corporate',
    image: gallery8,
  },
  {
    id: 'custom-print-showcase',
    title: 'Custom Print Showcase',
    category: 'Promotional',
    image: gallery15,
  },
];
