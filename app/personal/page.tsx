"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { PersonalHeroSection } from "../components/PersonalHeroSection";
import { FeaturesGridSection } from "../components/FeaturesGridSection";
import { ValuePropSection } from "../components/ValuePropSection";
import { HorizontalStepsSection } from "../components/HorizontalStepsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FaqSection } from "../components/FaqSection";
import { PersonalFooterSection } from "../components/PersonalFooterSection";

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#FF6A2C]/20 selection:text-[#0B3B6F]">
      {/* 1. Header / Navbar (Image 2 style with Personal active, NO Sign In button, NO Login section) */}
      <Navbar
        currentPage="personal"
      />

      <main className="flex-1">
        {/* 2. Personal Hero Section (Brand colors, Phone on the right, Get the card that works, App Store & Google Play) */}
        <PersonalHeroSection />

        {/* 3. Features Grid for Personal Shoppers & Individuals */}
        <FeaturesGridSection audience="customer" />

        {/* 4. Value Proposition ("Why Everyday Users Love TapperPay") */}
        <ValuePropSection audience="customer" />

        {/* 5. How It Works */}
        <HorizontalStepsSection
          audience="customer"
          onOpenGetStarted={() => {
            const el = document.getElementById("home");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Note: PRICING SECTION COMPLETELY REMOVED FROM PERSONAL PAGE AS REQUESTED */}

        {/* 6. Consumer Testimonials */}
        <TestimonialsSection audience="customer" />

        {/* 7. Consumer-Focused FAQ Section */}
        <FaqSection audience="customer" />

        {/* Note: "Ready to experience cashless instant payment entirely" CTA section removed as requested */}
      </main>

      {/* 8. Dedicated Redesigned Footer for Personal Tab */}
      <PersonalFooterSection />
    </div>
  );
}
