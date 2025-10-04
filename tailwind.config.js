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
        'brand-primary': '#004A81',
        'brand-secondary': '#66AADD',
        'brand-accent': '#FFBB5B',
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
      fontSize: {
        // Title hierarchy
        'title-xl': ['4rem', { lineHeight: '1.1', fontWeight: '300' }], // 64px - Main hero titles
        'title-lg': ['3rem', { lineHeight: '1.2', fontWeight: '300' }], // 48px - Section titles
        'title-md': ['2.25rem', { lineHeight: '1.3', fontWeight: '300' }], // 36px - Subsection titles
        'title-sm': ['1.875rem', { lineHeight: '1.3', fontWeight: '300' }], // 30px - Card titles
        
        // Subtitle hierarchy
        'subtitle-lg': ['1.5rem', { lineHeight: '1.4', fontWeight: '400' }], // 24px - Large subtitles
        'subtitle-md': ['1.25rem', { lineHeight: '1.4', fontWeight: '400' }], // 20px - Medium subtitles
        'subtitle-sm': ['1.125rem', { lineHeight: '1.4', fontWeight: '400' }], // 18px - Small subtitles
        
        // Button hierarchy
        'button-lg': ['1rem', { lineHeight: '1.5', fontWeight: '500' }], // 16px - Large buttons
        'button-md': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }], // 14px - Medium buttons
        'button-sm': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }], // 12px - Small buttons
        
        // Body hierarchy
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px - Large body text
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px - Regular body text
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }], // 14px - Small body text
        'body-xs': ['0.75rem', { lineHeight: '1.6', fontWeight: '400' }], // 12px - Extra small body text
      },
    },
  },
  plugins: [],
}




