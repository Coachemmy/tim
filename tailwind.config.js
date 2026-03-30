/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     /** @type {import('tailwindcss').Config} */
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a0522d',
          600: '#8b4513', 
          700: '#6f3410',
          800: '#5a2a0d',
          900: '#4a220a',
        },
        secondary: {
          50: '#f5f3f1',
          100: '#e8e4df',
          200: '#d4ccc4',
          300: '#b8ada2',
          400: '#9c8b7f',
          500: '#8b7355',
          600: '#6d5a45',
        },
        accent: {
          gold: '#d4af37',
          cream: '#faf6f1',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-textshadow'),

  ],
}

