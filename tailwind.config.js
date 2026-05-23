/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: {
            DEFAULT: '#E31E24',
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#E31E24',
            600: '#C91A1F',
            700: '#A8161A',
            800: '#871215',
            900: '#660E10',
          },
          gold: {
            DEFAULT: '#FFC107',
            50: '#FFFBEB',
            100: '#FFF5CC',
            200: '#FFEB99',
            300: '#FFE066',
            400: '#FFD633',
            500: '#FFC107',
            600: '#E6AD00',
            700: '#BF9100',
            800: '#997400',
            900: '#735700',
          },
          charcoal: '#1A1A1A',
        },
      },
      boxShadow: {
        'nav': '0 2px 20px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'btn': '8px',
        'card': '16px',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
      animation: {
        shimmer: 'shimmer 4s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
      backgroundSize: {
        '300': '300% 100%',
      },
    },
  },
  plugins: [],
};
