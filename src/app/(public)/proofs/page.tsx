"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

type Proof = {
  id: number;
  type: string;
  region: string;
  date: string;
  description: string;
  mediaType: "image" | "video";
  thumbnailUrl: string;
};

const dummyProofs: Proof[] = [
  {
    id: 1,
    type: "Theory Test",
    region: "London",
    date: "May 2026",
    description: "Passed UK theory test on the first attempt.",
    mediaType: "image",
    thumbnailUrl: "https://placehold.co/400x300/e0e0e0/333333?text=Proof+Image"
  },
  {
    id: 2,
    type: "Practical Test",
    region: "Manchester",
    date: "April 2026",
    description: "Successfully passed practical with zero faults.",
    mediaType: "video",
    thumbnailUrl: "https://placehold.co/400x300/e0e0e0/333333?text=Proof+Image"
  },
  {
    id: 3,
    type: "Full Licence",
    region: "Birmingham",
    date: "March 2026",
    description: "Received full pink licence after 3 months of coaching.",
    mediaType: "image",
    thumbnailUrl: "https://placehold.co/400x300/e0e0e0/333333?text=Proof+Image"
  },
  {
    id: 4,
    type: "Theory Test",
    region: "Leeds",
    date: "March 2026",
    description: "Perfect score on hazard perception.",
    mediaType: "image",
    thumbnailUrl: "https://placehold.co/400x300/e0e0e0/333333?text=Proof+Image"
  },
  {
    id: 5,
    type: "Practical Test",
    region: "Bristol",
    date: "February 2026",
    description: "Passed practical in an automatic car.",
    mediaType: "video",
    thumbnailUrl: "https://placehold.co/400x300/e0e0e0/333333?text=Proof+Image"
  },
  {
    id: 6,
    type: "Full Licence",
    region: "Newcastle",
    date: "January 2026",
    description: "Upgraded from international to full UK licence.",
    mediaType: "image",
    thumbnailUrl: "https://placehold.co/400x300/e0e0e0/333333?text=Proof+Image"
  }
];

export default function ProofsPage() {
  const [activeProof, setActiveProof] = useState<Proof | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Success Stories & Proofs</h1>
        <p className="text-xl text-dark/70 max-w-3xl mx-auto">
          Don't just take our word for it. Explore the real results of our learners across the UK 
          who successfully obtained their DVSA theory, practical, and full driving licences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyProofs.map((proof) => (
          <div 
            key={proof.id}
            onClick={() => setActiveProof(proof)}
            className="group cursor-pointer bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
          >
            <div className="relative aspect-video bg-gray-200 overflow-hidden">
              <img 
                src={proof.thumbnailUrl} 
                alt={proof.description}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                {proof.mediaType === "video" && (
                  <Play className="text-white w-12 h-12 opacity-90 drop-shadow-lg" />
                )}
              </div>
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                {proof.type}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-lg text-primary mb-1">{proof.description}</h3>
              <p className="text-sm text-dark/60 mt-auto">
                {proof.date} &ndash; {proof.region}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeProof && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-screen">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div>
                <h4 className="font-bold text-primary">{activeProof.type} - {activeProof.region}</h4>
                <p className="text-sm text-dark/60">{activeProof.date}</p>
              </div>
              <button 
                onClick={() => setActiveProof(null)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-dark" />
              </button>
            </div>
            
            <div className="flex-grow aspect-video bg-black flex items-center justify-center overflow-hidden">
              {/* Dummy media container */}
              <div className="text-white text-center">
                <p className="text-xl mb-4">
                   [ {activeProof.mediaType.toUpperCase()} MEDIA PREVIEW ]
                </p>
                <img 
                  src={activeProof.thumbnailUrl} 
                  alt={activeProof.description}
                  className="max-h-full max-w-full object-contain mx-auto"
                />
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <p className="text-lg text-dark/80">{activeProof.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
