"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    if (!acceptTerms) {
      alert("You must accept the terms and conditions");
      return;
    }

    // Implementation for registration
    console.log("Registering:", { name, email, password });
    // Redirect to login page or dashboard after successful registration
  };

  return (
    <div className="w-full px-6 pb-6">
      <h1 className="text-center text-2xl font-bold mb-6">Sign Up</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded-full bg-transparent"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded-full bg-transparent"
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded-full bg-transparent"
            placeholder="Password"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded-full bg-transparent"
            placeholder="Confirm Password"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="rounded border-gray-400"
          />
          <label htmlFor="terms" className="text-sm">
            I accept the{" "}
            <a href="#" className="text-amber-800 hover:underline">
              terms and conditions
            </a>
          </label>
        </div>

        <div className="relative flex items-center py-5">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-700">OR</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-400 rounded-full py-2 bg-transparent hover:bg-gray-100"
        >
          <Image src="/google.svg" width={20} height={20} alt="Google" />
          Continue with Google
        </button>

        <button
          type="submit"
          className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 rounded-md mt-2"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
