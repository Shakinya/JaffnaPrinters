import { useCallback, useRef } from 'react';

interface ScrollIndicatorProps {
  /** Element id to scroll to. When omitted, scrolls to the next sibling section. */
  targetId?: string;
  className?: string;
}

export default function ScrollIndicator({ targetId, className = '' }: ScrollIndicatorProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(() => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const section = buttonRef.current?.closest('section');
    const next = section?.nextElementSibling;
    if (next instanceof HTMLElement) {
      next.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [targetId]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      aria-label="Scroll to next section"
      className={`absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white hover:text-brand-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2 rounded-full ${className}`}
    >
      <span className="scroll-indicator-bounce flex flex-col items-center gap-1.5">
        <span className="scroll-indicator-mouse" aria-hidden>
          <span className="scroll-indicator-wheel" />
        </span>

        <span className="scroll-indicator-arrows flex flex-col items-center -space-y-2" aria-hidden>
          <svg
            className="scroll-indicator-arrow scroll-indicator-arrow--1 w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
          <svg
            className="scroll-indicator-arrow scroll-indicator-arrow--2 w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </span>
    </button>
  );
}
