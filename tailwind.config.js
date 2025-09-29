/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1e40af',
        'brand-secondary': '#3b82f6',
        'brand-accent': '#60a5fa',
        'brand-dark': '#0f172a',
        'brand-light': '#f8fafc',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Helvetica', 'Arial', 'sans-serif'],
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}




