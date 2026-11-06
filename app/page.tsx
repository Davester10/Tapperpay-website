"use client";

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ValuePropSection } from "./components/ValuePropSection";
import { HorizontalStepsSection } from "./components/HorizontalStepsSection";
import { FeaturesGridSection } from "./components/FeaturesGridSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PricingSection } from "./components/PricingSection";
import { FaqSection } from "./components/FaqSection";
import { CtaBannerSection } from "./components/CtaBannerSection";
import { FooterSection } from "./components/FooterSection";
import { SignInModal } from "./components/SignInModal";

export default function BusinessPage() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleOpenSignIn = () => {
    setIsSignInOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#FF6A2C]/20 selection:text-[#0B3B6F]">
      {/* 1. Header / Navbar (Image 2 style with Business active, increased font size/weight, responsive Nigeria/Africa dropdown, Sign In button) */}
      <Navbar
        currentPage="business"
        onOpenSignIn={handleOpenSignIn}
      />

      <main className="flex-1">
        {/* 2. Hero Section (Card in front of phone entirely, Blue/White/Orange gradient blend) */}
        <HeroSection
          audience="merchant"
          onOpenGetStarted={handleOpenSignIn}
          onOpenLearnMore={() => {
            const el = document.getElementById("how-it-works");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 3. Features Grid ("Everything You Need, All in One Place") */}
        <FeaturesGridSection audience="merchant" />

        {/* 4. Value Proposition ("Why Merchants Choose TapperPay" - Learn more removed) */}
        <ValuePropSection audience="merchant" />

        {/* 5. How It Works */}
        <HorizontalStepsSection
          audience="merchant"
          onOpenGetStarted={handleOpenSignIn}
        />

        {/* 6. Pricing Overview (Interactive Cards & Savings Calculator) */}
        <PricingSection
          audience="merchant"
          onOpenGetStarted={handleOpenSignIn}
        />

        {/* 7. Testimonials */}
        <TestimonialsSection />

        {/* 8. FAQ Section */}
        <FaqSection />

        {/* 9. Bottom Pre-Footer CTA Banner */}
        <CtaBannerSection
          audience="merchant"
          onOpenGetStarted={handleOpenSignIn}
        />
      </main>

      {/* 10. Footer (Orange background with clean blue hover on quick links without light-orange background) */}
      <FooterSection />

      {/* Modern Sign In Modal (Image 1 style) */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onOpenSignUp={handleOpenSignIn}
      />
    </div>
  );
}
