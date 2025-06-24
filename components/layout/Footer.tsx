// components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-amber-100 py-12", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-amber-200 rounded-lg flex items-center justify-center">
              <div className="text-2xl font-bold text-amber-800">3D</div>
            </div>

            <div className="space-y-2 text-sm text-gray-700">
              <p>
                Fakultas Kedokteran dan Kesehatan - Institut Teknologi Sepuluh
                Nopember
              </p>
              <p>📧 Email: klinik3d@its.ac.id</p>
              <p>📱 Instagram / YouTube / GitHub (jika ada)</p>
              <p>🌐 Language switcher (EN/ID)</p>
            </div>
          </div>

          {/* Right Content - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link
                href="/category"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Category
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2024 Klinik 3D. All rights reserved. Built with ❤️ for healthcare
            innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
