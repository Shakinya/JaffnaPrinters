/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: {
            DEFAULT: '#C41E3A',
            50: '#FEF2F4',
            100: '#FDE6EA',
            200: '#FACCD4',
            300: '#F599A8',
            400: '#E84D66',
            500: '#C41E3A',
            600: '#A81832',
            700: '#8B1329',
            800: '#6E0F20',
            900: '#520B18',
          },
          gold: {
            DEFAULT: '#FFCC00',
            50: '#FFFBEB',
            100: '#FFF5CC',
            200: '#FFEB99',
            300: '#FFE066',
            400: '#FFD633',
            500: '#FFCC00',
            600: '#E6B800',
            700: '#BF9900',
            800: '#997A00',
            900: '#735C00',
          },
        },
      },
    },
  },
  plugins: [],
};
