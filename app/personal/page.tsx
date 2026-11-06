"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { PersonalHeroSection } from "../components/PersonalHeroSection";
import { FeaturesGridSection } from "../components/FeaturesGridSection";
import { ValuePropSection } from "../components/ValuePropSection";
import { HorizontalStepsSection } from "../components/HorizontalStepsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FaqSection } from "../components/FaqSection";
import { CtaBannerSection } from "../components/CtaBannerSection";
import { FooterSection } from "../components/FooterSection";

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#FF6A2C]/20 selection:text-[#0B3B6F]">
      {/* 1. Header / Navbar (Image 2 style with Personal active, NO Sign In button, NO Login section) */}
      <Navbar
        currentPage="personal"
      />

      <main className="flex-1">
        {/* 2. Personal Hero Section (Image 2 style: "Get the card that works.", App Store & Google Play, Floating Balance & Action Tiles) */}
        <PersonalHeroSection />

        {/* 3. Features Grid for Personal Shoppers & Individuals */}
        <FeaturesGridSection audience="customer" />

        {/* 4. Value Proposition ("Why Everyday Users Love TapperPay" - Learn more removed) */}
        <ValuePropSection audience="customer" />

        {/* 5. How It Works (Scroll down to advance tag removed) */}
        <HorizontalStepsSection
          audience="customer"
          onOpenGetStarted={() => {
            const el = document.getElementById("download");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Note: PRICING SECTION COMPLETELY REMOVED FROM PERSONAL PAGE AS REQUESTED */}

        {/* 6. Testimonials ("Trusted by Businesses & Shoppers") */}
        <TestimonialsSection />

        {/* 7. FAQ Section ("View All FAQs" link removed) */}
        <FaqSection />

        {/* 8. Bottom CTA Banner (Personal App Download) */}
        <CtaBannerSection
          audience="customer"
          onOpenGetStarted={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </main>

      {/* 9. Footer (Orange background with blue hover links) */}
      <FooterSection />
    </div>
  );
}

