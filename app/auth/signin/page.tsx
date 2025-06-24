"use client";

import React from "react";
import { SignInForm } from "@/components/auth/signin_form";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e2e0cf] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <SignInForm />
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have account?{" "}
            <Link
              href="/auth/signup"
              className="text-amber-800 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
