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
          DEFAULT: '#D4AF37',
          light: '#E5C85A',
          bright: '#F0DA74',
          dark: '#9B7D1A',
          highlight: '#F5E8A0',
          pale: '#F5EEC0',
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
