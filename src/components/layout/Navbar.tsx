import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
              UK Licence<span className="text-accent">Hub</span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            <Link href="/" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors">About Us</Link>
            <Link href="/services" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Services</Link>
            <Link href="/proofs" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Success Stories</Link>
            <Link href="/faq" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors">FAQs</Link>
            <Link href="/contact" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="btn-primary flex items-center">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
