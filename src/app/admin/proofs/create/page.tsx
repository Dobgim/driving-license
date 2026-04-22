"use client";

import Link from "next/link";
import { ArrowLeft, UploadCloud } from "lucide-react";

export default function CreateProof() {
  return (
    <div className="max-w-4xl max-w-3xl space-y-6">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/proofs" 
          className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-dark/70"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-primary">Add New Proof</h1>
          <p className="text-dark/70 mt-1">Upload media and details for a new success story.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
        <form className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-dark/80 mb-2">Service Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                <option value="uk_theory">UK Theory Test</option>
                <option value="uk_practical">UK Practical Test</option>
                <option value="uk_full">Full UK Licence</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark/80 mb-2">Pass Date</label>
              <input 
                type="date" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-dark/80 mb-2">Region / City</label>
              <input 
                type="text" 
                placeholder="e.g. London"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark/80 mb-2">Client Name (Optional)</label>
              <input 
                type="text" 
                placeholder="John D."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark/80 mb-2">Caption / Description</label>
            <textarea 
              rows={3}
              placeholder="Passed with zero faults..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark/80 mb-2">Upload Media</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="p-4 bg-gray-100 rounded-full mb-4">
                <UploadCloud className="w-8 h-8 text-primary" />
              </div>
              <p className="font-medium text-dark">Click to upload or drag and drop</p>
              <p className="text-sm text-dark/60 mt-1">SVG, PNG, JPG or MP4 (max. 50MB)</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 pt-4 border-t border-gray-100 mt-4">
            <input 
              type="checkbox" 
              id="publish" 
              className="w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary" 
              defaultChecked
            />
            <label htmlFor="publish" className="font-medium text-dark">
              Publish immediately
            </label>
          </div>

          <div className="flex justify-end pt-4 gap-4">
            <Link href="/admin/proofs" className="px-6 py-2 border border-gray-300 rounded-lg text-dark hover:bg-gray-50 font-medium">
              Cancel
            </Link>
            <button type="button" className="btn-primary">
              Save Proof
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
