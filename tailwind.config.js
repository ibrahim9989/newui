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
        'brand-primary': '#014C83',
        'brand-secondary': '#5BA7DB',
        'brand-accent': '#FFBB5B',
        'brand-dark': '#014C83',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}




