import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "How to get a UK provisional licence?",
      answer: "You must be at least 15 years and 9 months old to apply for a provisional driving licence in the UK. You can apply online via the GOV.UK website. Make sure you can read a number plate from 20 metres away and can prove your identity (usually with a valid UK passport)."
    },
    {
      question: "How to book the UK theory test?",
      answer: "You book your UK theory test through the official DVSA booking service on the GOV.UK website. It currently costs £23. You will need your UK provisional driving licence number, email address, and a credit or debit card."
    },
    {
      question: "What happens in the UK practical test?",
      answer: "The practical driving test takes about 40 minutes. It includes an eyesight check, 'show me, tell me' vehicle safety questions, general driving ability, reversing your vehicle safely, and a section of independent driving (often following a sat nav)."
    },
    {
      question: "Is this service compliant with DVSA-style standards?",
      answer: "Yes, our coaching and guidance strictly follow the official standards laid out by the Driver and Vehicle Standards Agency (DVSA). We aim to prepare you to meet and exceed their testing criteria."
    },
    {
      question: "How long does it typically take to get a full licence?",
      answer: "The timeline varies per individual. On average, learners need around 45 hours of driving lessons and 20 hours of private practice. Booking wait times for theory and practical tests can also extend the timeline to a few months."
    },
    {
      question: "Do you offer practical lessons in a car?",
      answer: "We offer remote coaching, theory preparation, test guidance, and mental preparation for the practical test. You will still need a local driving instructor or appropriate vehicle to physically practice and take the test in."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-dark/70">
          Clear, concise, and honest answers to your UK driving licence questions.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details 
            key={idx} 
            className="group bg-white border border-gray-200 rounded-lg shadow-sm [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer p-6 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-inset rounded-lg">
              <h4 className="text-lg font-medium text-primary">{faq.question}</h4>
              <span className="transition-transform duration-300 group-open:-rotate-180 text-secondary">
                <ChevronDown className="w-5 h-5" />
              </span>
            </summary>
            <div className="p-6 pt-0 text-dark/80 bg-white rounded-b-lg border-t border-gray-100 mt-2">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>

      <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-primary mb-4">Still have questions?</h2>
        <p className="text-dark/70 mb-6">We're here to help you navigate the process.</p>
        <Link href="/contact" className="btn-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
