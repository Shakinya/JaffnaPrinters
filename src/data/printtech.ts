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
  shortName: 'PrintTech Vision',
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

export const printTechHero = {
  badge: 'Print Technology Partner',
  description:
    'End-to-end solutions across printing, digital advertising, IT infrastructure, CCTV, and international trade — backed by trusted brands and local expertise in Jaffna.',
} as const;

export const printTechMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  printTechInfo.addresses.office.full,
)}`;

export const printTechHomeMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  printTechInfo.addresses.home.full,
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
    title: 'Network & Hardware',
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
    title: 'Import & Export',
    desc: 'Global sourcing and logistics for print machinery parts, consumables, and technology equipment.',
    highlights: ['Genuine spare parts', 'International procurement', 'Customs & shipping', 'Island-wide delivery'],
  },
];

export const printTechHighlights = [
  { value: '15+', label: 'Years Industry Experience' },
  { value: '5', label: 'Core Service Areas' },
  { value: '9', label: 'Trusted Global Brands' },
  { value: '24h', label: 'Typical Quote Response' },
] as const;

export const printTechWhyUs = [
  'Genuine parts and supplies from authorized brand partners',
  'Experienced technicians for installation and maintenance',
  'Competitive pricing on import and local procurement',
  'Personal attention from director-led customer care',
] as const;

export const printTechProcess = [
  { step: '01', title: 'Consult', desc: 'Tell us your equipment, print, or IT requirements.' },
  { step: '02', title: 'Quote', desc: 'Receive a clear quote — typically within 24 hours.' },
  { step: '03', title: 'Deliver', desc: 'Supply, install, or ship with full documentation.' },
  { step: '04', title: 'Support', desc: 'Ongoing maintenance and after-sales assistance.' },
] as const;

export const printTechBrandNote =
  'Xerox · Ricoh · Epson · Toshiba · Canon — plus consumables, parts, and certified technical support.';

export const printTechCta = {
  title: 'Ready to upgrade your print & tech setup?',
} as const;
