"use client";

import React from "react";
import { SignUpForm } from "@/components/auth/signup_form";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e2e0cf] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <SignUpForm />
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="text-amber-800 hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
