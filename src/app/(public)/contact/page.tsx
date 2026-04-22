"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") || "";

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate sending an inquiry
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-govbg p-8 rounded-xl border border-accent text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="bg-accent text-white p-3 rounded-full mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
        <p className="text-dark/80">
          Thank you for reaching out. A member of our team will get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 text-secondary font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col space-y-4">
      <h3 className="text-2xl font-bold text-primary mb-2">Send us a message</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium text-dark/80 mb-1">Full Name</span>
          <input required type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="John Doe" />
        </label>
        
        <label className="flex flex-col">
          <span className="text-sm font-medium text-dark/80 mb-1">Email Address</span>
          <input required type="email" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="john@example.com" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium text-dark/80 mb-1">Phone Number</span>
          <input required type="tel" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="07123 456789" />
        </label>
        
        <label className="flex flex-col">
          <span className="text-sm font-medium text-dark/80 mb-1">Region / City</span>
          <input required type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="London" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium text-dark/80 mb-1">Service Required</span>
          <select defaultValue={defaultService} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent">
            <option value="">Select a service...</option>
            <option value="UK Theory Test Coaching">UK Theory Test Coaching</option>
            <option value="UK Practical Test Coaching">UK Practical Test Coaching</option>
            <option value="Full UK Licence Guidance">Full UK Licence Guidance</option>
            <option value="Provisional Licence Guidance">Provisional Licence Guidance</option>
            <option value="Other">Other</option>
          </select>
        </label>
        
        <label className="flex flex-col">
          <span className="text-sm font-medium text-dark/80 mb-1">Date Preference</span>
          <input type="date" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
        </label>
      </div>

      <label className="flex flex-col pb-4">
        <span className="text-sm font-medium text-dark/80 mb-1">Additional Information</span>
        <textarea rows={4} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Any specific details you want to add..."></textarea>
      </label>

      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="btn-primary w-full py-3 text-lg disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact & Booking</h1>
        <p className="text-xl text-dark/70">
          Get in touch with us to start your journey towards a UK driving licence today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-secondary shrink-0 mr-4" />
                <div>
                  <p className="font-medium text-dark">Email Us</p>
                  <p className="text-sm text-dark/70 mt-1">support@uklicencehub.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-secondary shrink-0 mr-4" />
                <div>
                  <p className="font-medium text-dark">Phone / WhatsApp</p>
                  <p className="text-sm text-dark/70 mt-1">+44 7000 000000</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mr-4" />
                <div>
                  <p className="font-medium text-dark">Areas Covered</p>
                  <p className="text-sm text-dark/70 mt-1">Nationwide UK Online Support</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-secondary shrink-0 mr-4" />
                <div>
                  <p className="font-medium text-dark">Working Hours</p>
                  <p className="text-sm text-dark/70 mt-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-dark/70">Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <a 
                href="https://wa.me/447000000000" 
                target="_blank" 
                rel="noreferrer"
                className="w-full flex items-center justify-center btn-accent bg-[#25D366] hover:bg-[#1ebe57]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Suspense fallback={<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 min-h-[400px] flex items-center justify-center">Loading...</div>}>
            <ContactForm />
          </Suspense>
        </div>

      </div>
    </div>
  );
}
