import Link from 'next/link'
import Header from '@/components/Header'
import ConditionalFooter from '@/components/ConditionalFooter'

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-heading">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-body">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-brand-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-secondary transition-colors duration-300"
              >
                Go Home
              </Link>
              <Link 
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ConditionalFooter />
    </main>
  )
}
