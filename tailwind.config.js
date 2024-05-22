import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        200: '#89CFF0', // light blue
        400: '#4682B4', // medium blue
        500: '#1E3A8A', // dark blue
        600: '#0A1931', // navy blue
      },
      grayscale: {
        25: '#FFCC99', // light orange
        50: '#FF8C00', // medium orange
        100: '#FF4500', // dark orange
        200: '#E65100', // deep orange
        950: '#A04000', // rust orange
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
