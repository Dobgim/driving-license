import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const packages = [
    {
      title: "Provisional Licence Guidance",
      description: "Step-by-step help for applying for your first UK provisional driving licence.",
      features: [
        "Eligibility check",
        "Form completion guidance",
        "Identity verification support",
        "DVSA tracking tips"
      ],
      price: "Contact for pricing"
    },
    {
      title: "UK Theory Test Coaching",
      description: "Everything you need to pass the theory and hazard perception test.",
      features: [
        "1-on-1 remote coaching sessions",
        "Mock test system access",
        "Hazard perception analysis",
        "Test booking assistance"
      ],
      price: "Contact for pricing",
      popular: true
    },
    {
      title: "UK Practical Test Coaching",
      description: "Expert guidance on test routes, common faults, and DVSA standards.",
      features: [
        "Mental preparation & confidence building",
        "Mock examiner feedback review",
        "Fault analysis and correction",
        "Fast-track test booking tips"
      ],
      price: "Contact for pricing"
    },
    {
      title: "Full UK Licence Guidance",
      description: "The complete package from starting out to holding your pink licence.",
      features: [
        "Includes provisional guidance",
        "Includes theory test coaching",
        "Includes practical test coaching",
        "Full support until you pass"
      ],
      price: "Contact for pricing"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Services & Packages</h1>
        <p className="text-xl text-dark/70 max-w-3xl mx-auto">
          We offer comprehensive coaching tailored to the official UK driving test standards. 
          Choose the package that fits your current stage in the learning process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-2xl p-8 flex flex-col relative ${
              pkg.popular ? "border-2 border-secondary shadow-lg scale-105 z-10" : "border border-gray-200 shadow-sm"
            }`}
          >
            {pkg.popular && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold text-primary mb-2">{pkg.title}</h3>
            <p className="text-dark/70 mb-6 min-h-[48px]">{pkg.description}</p>
            
            <div className="mb-6 font-semibold text-lg text-dark bg-govbg py-2 px-4 rounded-md text-center">
              {pkg.price}
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {pkg.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm text-dark/80">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href={`/contact?service=${encodeURIComponent(pkg.title)}`}
              className={`w-full text-center py-3 rounded-lg font-medium transition-colors ${
                pkg.popular 
                  ? "bg-secondary text-white hover:bg-[#1976d2]" 
                  : "bg-primary text-white hover:bg-[#002171]"
              }`}
            >
              Enquire Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
