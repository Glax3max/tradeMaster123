"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// import { useState } from "react";

interface FormData {
  email: string;
  name: string;
  number: string;
  termsAccepted: boolean;
}

const UserDetail: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    number: "",
    termsAccepted: false,
  });


  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scroll when form is open
    return () => {
      document.body.style.overflow = "auto"; // Restore scroll on unmount
    };
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setFormData((prev) => ({ ...prev, number: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Name validation (only letters and spaces allowed)
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      setError("Name should contain only letters and spaces.");
      return;
    }

    // Mobile number validation (must be exactly 10 digits)
    if (!/^\d{10}$/.test(formData.number)) {
      setError("Mobile number should be exactly 10 digits.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setSuccess("User details submitted successfully!");
      
      // Wait briefly before redirecting
      setTimeout(() => {
        setIsModalOpen(false); // Close modal before redirection
        router.push("https://razorpay.me/@mohdayaanraza?amount=NIt3xHCNPNi%2BgrwecRISoA%3D%3D"); // Replace with actual Razorpay checkout URL
      }, 1000);
    } catch (error) {
      console.log(error);
      setError("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative inline py-6" >
      {/* Buy Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-black bg-emerald-400  hover:bg-emerald-700  focus:ring-4 focus:outline-none mt-8 h-12 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Buy Now ↗
      </button>

      {/* Modal - Initially Hidden */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
            >
              ✖
            </button>

            <form onSubmit={handleSubmit} className="w-full">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Enter Your Details</h2>

              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border text-black border-gray-300 rounded"
                  placeholder="Full Name"
                  required
                />
              </div>

              {/* Mobile Number Input */}
              <div className="mb-4">
                <label htmlFor="number" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="number"
                  value={formData.number}
                  onChange={handleNumberChange}
                  maxLength={10}
                  className="w-full p-2 border text-black border-gray-300 rounded"
                  placeholder="Mobile Number (WhatsApp)"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border text-black border-gray-300 rounded"
                  placeholder="name@example.com"
                  required
                />
              </div>

              {/* Terms & Conditions Checkbox */}
              <div className="flex items-start mb-4">
                <input
                  id="termsAccepted"
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <label htmlFor="termsAccepted" className="text-sm">
                  I agree with the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    terms and conditions
                  </a>
                </label>
              </div>

              {/* Error & Success Messages */}
              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
              {success && <p className="text-green-500 text-sm mb-3">{success}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-emerald-400  hover:bg-emerald-600  font-medium rounded-lg text-sm px-5 py-2.5"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit & Proceed to Payment"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
