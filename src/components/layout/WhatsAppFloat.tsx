import { companyInfo } from '../../data/site';
import { buildWhatsAppChatUrl } from '../../lib/whatsapp';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

export default function WhatsAppFloat() {
  const { display } = companyInfo.orderWhatsApp;
  const href = buildWhatsAppChatUrl();

  return (
    <div className="wa-float-anchor">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn group"
        aria-label={`Chat on WhatsApp at ${display}`}
        title={`Message us on WhatsApp — ${display}`}
      >
        <span className="wa-float-pulse" aria-hidden />
        <span className="wa-float-icon-wrap">
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </span>
        
      </a>
    </div>
  );
}
