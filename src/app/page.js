"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AppTourSection from "@/components/AppTourSection";
import ProgramsSection from "@/components/ProgramsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1C1C1E] text-white selection:bg-[#FDFC22] selection:text-black">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Interactive App Experience & Mockup Showcase (All 5 Screens) */}
      <AppTourSection />

      {/* Multi-Generational Fitness Programs (Who It's For) */}
      <ProgramsSection />

      {/* Available Services Section & Live Stats */}
      <ServicesSection />

      {/* Real Family Stories & Coach Testimonials */}
      <TestimonialsSection />

      {/* Frequently Asked Questions (Accordion) */}
      <FaqSection />

      {/* Get In Touch Contact Section */}
      <ContactSection />

      {/* Direct App Download CTA Section */}
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </main>
  );
}
