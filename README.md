# Communication Company UI - Next.js

A modern, responsive website template replicating the design from the provided image. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with red, white, and dark gray color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Tabbed navigation, hover effects, and smooth transitions
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Sections

1. **Header**: Navigation with logo, menu items, and contact information
2. **Hero Section**: Large "ONLY CERTIFIED PHONES" headline with call-to-action buttons
3. **Features Section**: Three-column layout showcasing "Why us", "Who we are", and "What we do"
4. **Creative Solutions**: Red background section with bullet points and monitor visualization
5. **Featured Services**: Tabbed service gallery with professional images

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero banner section
│   ├── FeaturesSection.tsx  # Three-column features
│   ├── CreativeSolutionsSection.tsx # Red section with solutions
│   └── FeaturedServicesSection.tsx  # Services gallery
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Colors
The main brand colors are defined in `tailwind.config.js`:
- `brand-red`: #DC2626
- `brand-gray`: #374151  
- `brand-dark`: #1F2937

### Content
Update the content in each component file to match your specific needs.

### Images
Replace placeholder images in the Featured Services section with your own images.

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: Component-based UI library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).




