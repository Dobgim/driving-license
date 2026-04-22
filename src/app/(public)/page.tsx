import Link from 'next/link';
import { Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col space-y-20 pb-20">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center shadow-sm">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-primary mb-6 max-w-4xl tracking-tight leading-tight">
          Helping people pass the UK driving test <br />
          <span className="text-accent">theory, practical & full licence.</span>
        </h1>
        <p className="text-lg md:text-xl text-dark/80 max-w-2xl mb-10">
          Real proofs, real results. Trusted UK coaching and guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn-accent px-8 py-3 text-lg">
            Book Now
          </Link>
          <Link href="/proofs" className="btn-primary px-8 py-3 text-lg bg-[#e3e3e3] text-dark hover:bg-[#d1d1d1] hover:text-dark">
            View Success Stories
          </Link>
        </div>
      </section>

      {/* About Us Teaser Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-primary/10">
          <div className="md:w-1/2 flex justify-center">
            {/* Simple decorative graphic or placeholder for a brand image */}
            <div className="w-full max-w-sm aspect-video bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
               <div className="text-center relative z-10">
                 <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-white font-bold text-2xl">
                   UK
                 </div>
                 <p className="font-bold text-primary text-xl">LicenceHub</p>
               </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-5">
            <h2 className="text-3xl font-bold text-primary">About Us</h2>
            <p className="text-dark/80 text-lg leading-relaxed">
              We are a dedicated team of UK driving experts committed to helping you navigate the complex process of obtaining your full driving licence.
            </p>
            <p className="text-dark/70">
              From mastering the DVSA theory test to conquering the practical driving exam, our tailored remote coaching and transparent guidance have helped people across the entire United Kingdom get behind the wheel safely and legitimately.
            </p>
            <div className="pt-2">
              <Link href="/about" className="text-primary font-bold hover:text-accent transition-colors flex items-center group">
                Discover our mission 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Our Packages</h2>
          <p className="mt-4 text-dark/70 text-lg">Comprehensive guidance tailored to your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-primary mb-4">UK Theory Test Coaching</h3>
            <p className="text-dark/70 mb-6 flex-grow">
              Master the multiple-choice questions and hazard perception test with our expert-led sessions.
            </p>
            <Link href="/services" className="text-secondary font-medium hover:underline">Learn more &rarr;</Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-primary mb-4">UK Practical Test Coaching</h3>
            <p className="text-dark/70 mb-6 flex-grow">
              Gain the confidence and skills needed to pass your DVSA practical driving test on the first try.
            </p>
            <Link href="/services" className="text-secondary font-medium hover:underline">Learn more &rarr;</Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-primary mb-4">Full UK Licence Guidance</h3>
            <p className="text-dark/70 mb-6 flex-grow">
              End-to-end support starting from provisional application to holding your full pink UK licence.
            </p>
            <Link href="/services" className="text-secondary font-medium hover:underline">Learn more &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-primary">Success Stories</h2>
              <p className="mt-2 text-dark/70">Real learners who got their UK licence with our help.</p>
            </div>
            <Link href="/proofs" className="hidden sm:block text-secondary font-medium hover:underline">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Dummy cards representing proofs */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer rounded-lg overflow-hidden border border-gray-200">
                <div className="relative aspect-video bg-gray-200 flex items-center justify-center">
                  <Play className="text-white w-12 h-12 opacity-80 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-4 bg-white">
                  <p className="font-semibold text-primary truncate">Passed UK Theory</p>
                  <p className="text-sm text-dark/60">London, UK</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/proofs" className="btn-primary inline-block">View All Success Stories</Link>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">What Our Learners Say</h2>
          <p className="mt-4 text-dark/70 text-lg">Real reviews from people who passed with our guidance.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Sarah L.", loc: "London", text: "Passed my theory test first time! The mock tests and coaching were exactly what I needed. Highly recommend!" },
            { name: "Michael T.", loc: "Manchester", text: "I was so nervous for my practical, but the mock examiner analysis gave me so much confidence. Got my full licence today." },
            { name: "Chloe F.", loc: "Birmingham", text: "The hazard perception tips are a game changer. I scored a perfect 75/75 thanks to the coaching.", },
            { name: "David A.", loc: "Leeds", text: "Incredible service. They walked me through the entire provisional application down to my practical test booking." },
            { name: "Emma H.", loc: "Bristol", text: "I struggled with roundabouts, but the remote practical guidance really helped me visualise the rules. Zero faults!" },
            { name: "James W.", loc: "Liverpool", text: "Worth every penny. The fast-track test booking tips saved me months of waiting. Driving my own car now!" },
            { name: "Zainab K.", loc: "Glasgow", text: "Very professional and patient. They explain the DVSA standards comprehensively so there are no surprises on test day." },
            { name: "Robert P.", loc: "Cardiff", text: "I had previously failed two practical tests. With this coaching, I finally corrected my bad habits and passed." },
          ].map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold mr-3 shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">{review.name}</h4>
                  <p className="text-xs text-dark/60">{review.loc}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3 text-sm">
                ★★★★★
              </div>
              <p className="text-dark/80 text-sm leading-relaxed italic flex-grow">"{review.text}"</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/testimonials" className="text-secondary font-medium hover:underline">Read all testimonials &rarr;</Link>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="max-w-3xl mx-auto px-4 w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-lg text-primary">How to get a UK provisional licence?</h4>
            <p className="mt-2 text-dark/80">You can apply online via the GOV.UK website. You must be at least 15 years and 9 months old and be able to read a number plate from 20 metres away.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-lg text-primary">How to book the UK theory test?</h4>
            <p className="mt-2 text-dark/80">Theory tests are booked through the official DVSA service. We provide full guidance on how to navigate this process seamlessly.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="text-secondary font-medium hover:underline">Read more FAQs &rarr;</Link>
        </div>
      </section>
    </div>
  );
}
