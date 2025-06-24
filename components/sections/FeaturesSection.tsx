// components/sections/FeaturesSection.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FeaturesSectionProps {
  className?: string;
}

export default function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section className={cn("py-20 bg-white", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              FITUR
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Platform Kolaborasi untuk Inovasi Kesehatan
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <Card
              key={feature.id}
              className="bg-amber-50 border-amber-100 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
