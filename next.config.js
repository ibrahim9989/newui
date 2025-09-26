/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  output: 'standalone',
  trailingSlash: false,
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
}

module.exports = nextConfig
