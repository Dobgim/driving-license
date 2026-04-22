import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>
        
        <div className="space-y-6 text-lg text-dark/80">
          <p>
            Welcome to UK LicenceHub. We are dedicated to helping learners across the United Kingdom 
            navigate the often complex process of obtaining a full UK driving licence. 
            Whether you need help with your theory test, practical driving test, or understanding the DVSA requirements,
            our team of experts is here to guide you every step of the way.
          </p>

          <p>
            Our mission is simple: to make the UK driving licence process as smooth, transparent, 
            and stress-free as possible. We pride ourselves on providing legitimate, professional 
            coaching and guidance tailored to the official UK systems.
          </p>

          <div className="bg-govbg p-6 rounded-lg my-8 border-l-4 border-accent">
            <h3 className="text-xl font-bold text-primary mb-2">Nationwide Support</h3>
            <p className="text-base text-dark/70">
              We provide our coaching and guidance services to learners across the entire UK. 
              From London and Manchester to Birmingham and Scotland, our online and remote support 
              ensures you are always prepared, no matter where you are based in the United Kingdom.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">How It Works</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Initial Consultation:</strong> We start by understanding your current status (provisional licence holder, etc.).
            </li>
            <li>
              <strong>Tailored Coaching:</strong> Depending on whether you need theory or practical support, we provide targeted resources.
            </li>
            <li>
              <strong>Test Booking Support:</strong> We guide you through the official DVSA systems to ensure your bookings are correct.
            </li>
            <li>
              <strong>Success:</strong> We celebrate when you pass and receive your full UK driving licence!
            </li>
          </ol>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Get in touch today
          </Link>
        </div>
      </div>
    </div>
  );
}
