/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2B4A',
          dark: '#0F1B30',
          light: '#243558',
        },
        gold: {
          DEFAULT: '#C4922A',
          light: '#D4A84B',
          pale: '#F0E0B8',
        },
        cream: {
          DEFAULT: '#F8F5EF',
          dark: '#EDE8DE',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};
