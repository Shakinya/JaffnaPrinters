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
        'btn': '6px',
      },
    },
  },
  plugins: [],
};
