"use client";

import { Play } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "S. M.",
      city: "London",
      date: "August 2018",
      avatar: "SM",
      text: "The remote coaching for my theory test was phenomenal. I was struggling with hazard perception, but the techniques taught made it so easy. Passed with flying colours!",
      video: false
    },
    {
      id: 2,
      name: "John D.",
      city: "Manchester",
      date: "July 2018",
      avatar: "JD",
      text: "I booked the full licence package. They helped me apply for my provisional, coached me through the theory, and gave me confidence for the practical test. Outstanding service.",
      video: true
    },
    {
      id: 3,
      name: "Emily R.",
      city: "Birmingham",
      date: "June 2018",
      avatar: "ER",
      text: "I was extremely nervous about the practical test. The mock examiner reviews and fault analysis completely changed my mindset. I passed on my first attempt!",
      video: false
    },
    {
      id: 4,
      name: "Ali K.",
      city: "Edinburgh",
      date: "May 2018",
      avatar: "AK",
      text: "Highly professional and genuinely compliant with DVSA standards. They know the exact requirements for passing the UK driving tests. Money well spent.",
      video: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Client Testimonials</h1>
        <p className="text-xl text-dark/70 max-w-3xl mx-auto">
          Hear from our past learners about how we helped them achieve their UK driving licences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold mr-4 shrink-0 shadow-inner">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">{testimonial.name}</h4>
                <p className="text-sm text-dark/60">{testimonial.city} &bull; {testimonial.date}</p>
              </div>
            </div>
            
            <div className="flex-grow">
              <p className="text-dark/80 italic text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>

            {testimonial.video && (
              <div className="mt-6">
                <button className="flex items-center text-sm font-medium text-secondary hover:text-primary transition-colors bg-govbg px-4 py-2 rounded-full">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Video Testimonial
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
