// components/sections/AboutSection.tsx
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <section className={cn("py-20 bg-gray-50", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                ABOUT
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Klinik 3D adalah platform open-source berbasis web yang
                menyediakan file 3D STL alat bantu kesehatan buatan mahasiswa
                Teknologi Kedokteran ITS.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Tujuannya adalah mendukung kolaborasi antara mahasiswa, tenaga
                medis, desainer, dan masyarakat dalam menciptakan solusi alat
                bantu yang murah, terbuka, dan bisa dicetak secara lokal.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Platform ini juga menyediakan ruang komunitas dan forum diskusi,
                tempat berbagai pihak bisa bertukar ide, pengalaman, serta
                menyempurnakan desain alat bantu.
              </p>
            </div>
          </div>

          {/* Right Content - Building Image */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-[857/851] relative">
                  <Image
                    src="/images/its-building.png"
                    alt="Fakultas Kedokteran dan Kesehatan - Institut Teknologi Sepuluh Nopember"
                    fill
                    className="object-contain"
                    sizes="(max-width: 538.158px) 100vw, (max-width: 538.158px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
