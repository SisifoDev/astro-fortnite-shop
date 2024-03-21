const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        header: ['Lato', 'sans-serif'],
        display: 'Inter, sans-serif', // Adds a new `font-display` class
      },
    },
  },
  plugins: [],
}
