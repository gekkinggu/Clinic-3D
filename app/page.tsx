import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section dengan search dan 3D showcase */}
        <HeroSection />

        {/* About Section dengan gambar gedung ITS */}
        <AboutSection />

        {/* Features Section dengan 4 fitur utama */}
        <FeaturesSection />
      </main>

      {/* Footer dengan kontak dan links */}
      <Footer />
    </div>
  );
}
