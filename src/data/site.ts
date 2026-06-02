export const companyStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5,000+', label: 'Happy Clients' },
  { value: '10,000+', label: 'Products' },
  { value: '99%', label: 'Satisfaction Rate' },
] as const;

export const companyJourney = [
  {
    year: '2016',
    title: 'Founded',
    desc: 'JaffnaPrinters was established in Jaffna, beginning our journey in quality print production.',
  },
  {
    year: '2018',
    title: 'Digital Offset Print',
    desc: 'Expanded operations with digital offset printing for sharper, faster commercial print runs.',
  },
  {
    year: '2020',
    title: 'Digital Banner Print',
    desc: 'Launched large-format digital banner printing for signage, events, and outdoor branding.',
  },
  {
    year: '2022',
    title: 'Supplement Print',
    desc: 'Added supplement and specialty print services to serve a wider range of client needs.',
  },
  {
    year: '2025',
    title: 'Production Printer & Slay Cut',
    desc: 'Invested in production printing and slay-cut finishing for higher volume and precision output.',
  },
] as const;

export const aboutJourneySubtitle =
  '10+ years of excellence · 5,000+ happy clients · 10,000+ products · 99% satisfaction';

export const companyInfo = {
  foundedYear: 2016,
  yearsExperienceLabel: '10+',

  phones: {
    office: {
      label: 'Office',
      display: '+94 70 739 3427',
      tel: '+94707393427',
    },
    personal: {
      label: 'Personal',
      display: '+94 77 739 3427',
      tel: '+94777393427',
    },
    landline: {
      label: 'Landline',
      display: '021 221 4949',
      tel: '+94212214949',
    },
  },

  email: 'jaffnaprint@gmail.com',

  address: {
    line1: 'No.42, Adiyapatham Road',
    line2: 'Nallur, Jaffna, Sri Lanka',
    full: 'No.42, Adiyapatham Road, Nallur, Jaffna, Sri Lanka',
  },

  social: {
    facebook: 'https://www.facebook.com/share/1AMKYXLTXB',
    instagram: 'https://www.instagram.com/jaffnaprint',
    tiktok: 'https://www.tiktok.com/@jaffnaprint?_r=1&_t=ZS-96iJpcJQ9XF',
  },

  hours: {
    weekdays: 'Mon – Sat: 8:00 AM – 6:00 PM',
    sunday: 'Sunday: 9:00 AM – 1:00 PM',
  },
} as const;

export const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  companyInfo.address.full,
)}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  companyInfo.address.full,
)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
