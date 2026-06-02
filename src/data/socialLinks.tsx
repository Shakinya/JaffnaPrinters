import { Facebook, Instagram } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import TikTokIcon from '../components/icons/TikTokIcon';
import { companyInfo } from './site';

type SocialIcon = LucideIcon | typeof TikTokIcon;

export const socialLinks: {
  icon: SocialIcon;
  href: string;
  label: string;
}[] = [
  { icon: Facebook, href: companyInfo.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: companyInfo.social.instagram, label: 'Instagram' },
  { icon: TikTokIcon, href: companyInfo.social.tiktok, label: 'TikTok' },
];
