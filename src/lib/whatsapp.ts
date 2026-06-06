import { companyInfo } from '../data/site';
import type { Product } from '../data/products';
import type { CartItem } from '../context/CartContext';

export function buildWhatsAppOrderUrl(message: string): string {
  return `https://wa.me/${companyInfo.orderWhatsApp.wa}?text=${encodeURIComponent(message)}`;
}

const generalChatMessage = [
  'Hi Jaffna Printers,',
  '',
  'I would like to enquire about your printing services.',
].join('\n');

/** Site-wide floating button — opens WhatsApp with the business number */
export function buildWhatsAppChatUrl(message = generalChatMessage): string {
  return buildWhatsAppOrderUrl(message);
}

export function buildProductOrderMessage(product: Product, quantity = 1): string {
  return [
    'Hi Jaffna Printers,',
    '',
    `I would like to order: *${product.name}*`,
    `Category: ${product.category}`,
    `Quantity: ${quantity}`,
    '',
    'Please share pricing, customization options, and delivery details.',
  ].join('\n');
}

export function buildCartOrderMessage(items: CartItem[]): string {
  const list = items
    .map((item, i) => `${i + 1}. ${item.product.name} (${item.product.category}) × ${item.quantity}`)
    .join('\n');
  return [
    'Hi Jaffna Printers,',
    '',
    'I would like to order the following items:',
    '',
    list,
    '',
    'Please share pricing and delivery details.',
  ].join('\n');
}

export function getProductWhatsAppUrl(product: Product, quantity = 1): string {
  return buildWhatsAppOrderUrl(buildProductOrderMessage(product, quantity));
}

export function buildCartOrderUrl(items: CartItem[]): string {
  return buildWhatsAppOrderUrl(buildCartOrderMessage(items));
}
