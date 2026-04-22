import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold tracking-tight text-primary">
              UK Licence<span className="text-accent">Hub</span>
            </span>
            <p className="mt-4 text-sm text-gray-500 max-w-md">
              Helping learners across the UK navigate the driving test process. Providing professional coaching 
              for theory, practical, and full licence guidance to ensure your success.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-primary">UK Theory Test</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-primary">UK Practical Test</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-primary">Full Licence</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link href="/proofs" className="text-sm text-gray-500 hover:text-primary">Success Stories</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} UK LicenceHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
