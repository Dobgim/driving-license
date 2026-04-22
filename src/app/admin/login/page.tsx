"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Get the form data
    const formData = new FormData(e.currentTarget);
    const code = formData.get("accessCode");

    // Check the code
    if (code === "ADMIN2018") {
      // Simulate login delay
      setTimeout(() => {
        // Set a simple client-side auth flag
        localStorage.setItem("adminAuthCode", "verified");
        router.push("/admin/dashboard");
      }, 800);
    } else {
      setLoading(false);
      setError("Invalid access code. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Admin Login</h1>
          <p className="text-dark/70 text-sm">Enter the access code to manage the dashboard.</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm font-medium rounded-lg border border-red-100 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-dark/80 mb-1">Access Code</label>
            <input 
              required 
              name="accessCode"
              type="password" 
              placeholder="Enter your specific code..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed py-3"
          >
            {loading ? "Verifying..." : "Access Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}
