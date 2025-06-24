"use client";

import React from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-[#e2e0cf] p-8 rounded-lg">
          <h1 className="text-center text-2xl font-bold mb-6">
            Reset Password
          </h1>

          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-400 rounded-full bg-transparent"
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#b5a632] hover:bg-[#a29529] text-white py-2 px-4 rounded-lg"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href="/auth/signin"
              className="text-amber-800 hover:underline text-sm"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
