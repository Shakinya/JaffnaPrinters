import type { LucideIcon } from 'lucide-react';
import {
  Printer,
  Megaphone,
  Network,
  Cctv,
  Globe,
} from 'lucide-react';

export const printTechInfo = {
  companyName: 'PrintTech Vision (Pvt) Ltd',
  tagline: 'Printing · Digital Media · IT Solutions · Import & Export',
  director: 'S. Ushanthan',
  phones: {
    office: { display: '+94 21 221 4949', tel: '+94212214949' },
    mobile: [
      { display: '070 739 3427', tel: '+94707393427' },
      { display: '077 739 3427', tel: '+94777393427' },
    ],
  },
  emails: {
    office: 'printtechpvt@gmail.com',
    home: 'sushanthan@gmail.com',
  },
  addresses: {
    office: {
      label: 'Office',
      lines: ['42, Adiyapatham Road', 'Nallur, Jaffna, Sri Lanka'],
      full: '42, Adiyapatham Road, Nallur, Jaffna, Sri Lanka',
    },
    home: {
      label: 'Home',
      lines: ['55, Arasa Veethy', 'Nallur, Jaffna'],
      full: '55, Arasa Veethy, Nallur, Jaffna',
    },
  },
} as const;

export const printTechMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  printTechInfo.addresses.office.full,
)}`;

export interface PrintTechService {
  icon: LucideIcon;
  title: string;
  desc: string;
  highlights: string[];
}

export const printTechServices: PrintTechService[] = [
  {
    icon: Printer,
    title: 'Printing',
    desc: 'Commercial and office printing with genuine supplies and expert maintenance for leading brands.',
    highlights: ['Offset & digital print', 'Copiers & MFPs', 'Consumables & toner', 'On-site service'],
  },
  {
    icon: Megaphone,
    title: 'Digital Advertising',
    desc: 'Eye-catching digital signage, banners, and promotional media to grow your brand presence.',
    highlights: ['Large-format banners', 'LED & signage', 'Promotional displays', 'Creative design support'],
  },
  {
    icon: Network,
    title: 'Network & Hardware Solutions',
    desc: 'Reliable networking, computers, and peripherals for offices and businesses of every size.',
    highlights: ['LAN & Wi-Fi setup', 'Servers & workstations', 'Peripherals & storage', 'IT consultation'],
  },
  {
    icon: Cctv,
    title: 'CCTV Systems',
    desc: 'Professional surveillance design, installation, and support for homes and commercial premises.',
    highlights: ['HD & IP cameras', 'DVR / NVR systems', 'Remote monitoring', 'Maintenance & upgrades'],
  },
  {
    icon: Globe,
    title: 'Import & Export Services',
    desc: 'Global sourcing and logistics for print machinery parts, consumables, and technology equipment.',
    highlights: ['Genuine spare parts', 'International procurement', 'Customs & shipping', 'Island-wide delivery'],
  },
];

export const printTechHighlights = [
  { value: '15+', label: 'Years Industry Experience' },
  { value: '5', label: 'Core Service Areas' },
  { value: '5', label: 'Trusted Global Brands' },
  { value: '24h', label: 'Typical Quote Response' },
] as const;
