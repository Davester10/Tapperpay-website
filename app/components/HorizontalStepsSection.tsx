"use client";

import React, { useRef, useEffect, useState } from "react";
import { AppleLogo, AndroidLogo } from "./Icons";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

interface HorizontalStepsSectionProps {
  audience?: "merchant" | "customer";
  onOpenGetStarted: () => void;
}

export function HorizontalStepsSection({ audience = "merchant", onOpenGetStarted }: HorizontalStepsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const merchantSteps = [
    {
      num: 1,
      title: "Fill in your details and verify your phone number",
      description:
        "Provide your email and phone number and verify your phone number with an OTP.",
      tag: "Quick Signup",
    },
    {
      num: 2,
      title: "Get verified with your BVN and KYC details",
      description:
        "Select username & password. Provide your BVN and KYC details and start face & ID verification. You can then provide your business name and set up a PIN for managing your account.",
      tag: "Instant KYC",
    },
    {
      num: 3,
      title: "Fund your account to start making transfers.",
      description: "Top up to start making transfers.",
      tag: "Zero Minimum",
    },
    {
      num: 4,
      title: "Access your dashboard and start accepting payments",
      description:
        "Login to your account and begin accepting contactless tap-to-pay transactions, transfers, and card payments on your phone.",
      tag: "Ready in 5 Mins",
    },
  ];

  const customerSteps = [
    {
      num: 1,
      title: "Download the TapperPay app and verify your phone",
      description:
        "Install the mobile app from Google Play or App Store. Enter your phone number and confirm via secure OTP.",
      tag: "Get the App",
    },
    {
      num: 2,
      title: "Verify your identity with BVN & face match",
      description:
        "Protect your account with CBN-regulated tier verification. Set a biometric fingerprint and 6-digit transaction PIN.",
      tag: "Bank-Grade Security",
    },
    {
      num: 3,
      title: "Fund your wallet via instant bank transfer",
      description:
        "Receive your unique TapperPay virtual account number and deposit funds from any Nigerian bank with zero transfer fees.",
      tag: "Instant Deposit",
    },
    {
      num: 4,
      title: "Tap your phone to pay in store or send money",
      description:
        "Hold your phone against any POS or merchant terminal to pay contactless, or split bills with friends in seconds.",
      tag: "Tap & Go",
    },
  ];

  const steps = audience === "merchant" ? merchantSteps : customerSteps;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far we have scrolled inside the container
      const totalScrollableDistance = rect.height - windowHeight;
      if (totalScrollableDistance <= 0) return;

      const currentScrollY = -rect.top;
      const progress = Math.min(Math.max(currentScrollY / totalScrollableDistance, 0), 1);

      setScrollProgress(progress);

      // Determine active step index based on progress
      const stepIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
      setActiveStepIndex(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  // Max translation percentage for the horizontal track
  // On desktop, we want step 4 to scroll into view
  const maxTranslatePercent = 65; // Percentage to translate track leftward
  const currentTranslateX = scrollProgress * maxTranslatePercent;

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative bg-white border-b border-slate-100"
      style={{ minHeight: "260vh" }}
    >
      {/* Sticky Fullscreen Container that pins in place while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-white px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge & Title */}
        <div className="max-w-7xl mx-auto w-full pt-4 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066FF] text-xs font-bold uppercase tracking-wider mb-2">
                <span>{audience === "merchant" ? "Merchant Onboarding" : "Customer Getting Started"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B3B6F] tracking-tight">
                {audience === "merchant"
                  ? "Start Accepting Payments in 4 Easy Steps"
                  : "Start Living Cashless in 4 Easy Steps"}
              </h2>
            </div>
          </div>
        </div>

        {/* Stepper Progress Bar & Steps Horizontal Track (Matching Image 2) */}
        <div className="max-w-7xl mx-auto w-full relative py-6">
          
          {/* Outer clipping mask for the horizontal scroll */}
          <div className="relative overflow-hidden w-full">
            
            {/* The Horizontal Sliding Track */}
            <div
              ref={trackRef}
              className="flex items-start transition-transform duration-200 ease-out will-change-transform"
              style={{
                transform: `translateX(-${currentTranslateX}%)`,
              }}
            >
              {steps.map((step, index) => {
                const isPassed = scrollProgress >= index / (steps.length - 1);
                const isCurrent = activeStepIndex === index;

                return (
                  <div
                    key={step.num}
                    className="flex-shrink-0 w-[290px] sm:w-[350px] md:w-[390px] lg:w-[420px] pr-6 md:pr-10 select-none group"
                  >
                    {/* Step Indicator Header: Circle + Connecting Progress Line (Image 2) */}
                    <div className="relative flex items-center mb-6">
                      {/* Step Number Circle */}
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-base sm:text-lg border-2 z-10 transition-all duration-300 ${
                          isPassed || isCurrent
                            ? "border-[#0066FF] text-[#0066FF] bg-white ring-4 ring-blue-50 shadow-md"
                            : "border-slate-200 text-slate-400 bg-white"
                        }`}
                      >
                        {isPassed && index < activeStepIndex ? (
                          <span className="text-[#0066FF] font-bold">✓</span>
                        ) : (
                          step.num
                        )}
                      </div>

                      {/* Connecting Line to next circle */}
                      {index < steps.length - 1 && (
                        <div className="flex-1 h-[3px] bg-slate-200 relative ml-2">
                          <div
                            className="h-full bg-[#0066FF] transition-all duration-300"
                            style={{
                              width:
                                scrollProgress >= (index + 1) / (steps.length - 1)
                                  ? "100%"
                                  : scrollProgress > index / (steps.length - 1)
                                  ? `${
                                      ((scrollProgress - index / (steps.length - 1)) /
                                        (1 / (steps.length - 1))) *
                                      100
                                    }%`
                                  : "0%",
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Step Card Content (Exact Typography & Style from Image 2) */}
                    <div className="space-y-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0B3B6F] tracking-tight leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Store Download Badges Row (Directly from Image 2) */}
        <div className="max-w-7xl mx-auto w-full pt-6 pb-4">
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            {/* Apple App Store Badge */}
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                onOpenGetStarted();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#091B33] hover:bg-[#0E284D] active:scale-95 text-white transition-all shadow-md flex items-center justify-center gap-3 cursor-pointer touch-manipulation"
            >
              <AppleLogo className="w-6 h-6 fill-current text-white shrink-0" />
              <div className="text-left">
                <span className="block text-[10px] text-slate-300 leading-none">Get it on</span>
                <span className="block text-sm font-bold tracking-tight text-white leading-tight">App Store</span>
              </div>
            </a>

            {/* Google Play Store Badge */}
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                onOpenGetStarted();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#091B33] hover:bg-[#0E284D] active:scale-95 text-white transition-all shadow-md flex items-center justify-center gap-3 cursor-pointer touch-manipulation"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="currentColor">
                <path
                  d="M3.609 1.814L13.792 12 3.61 22.186a1.95 1.95 0 01-.61-.318C2.399 21.36 2 20.61 2 19.688V4.312c0-.922.399-1.672.999-2.18.204-.173.415-.278.61-.318z"
                  fill="#00E676"
                />
                <path
                  d="M17.18 8.612L5.27 1.745c-.538-.31-.979-.323-1.282-.187L13.792 12l3.388-3.388z"
                  fill="#FFD54F"
                />
                <path
                  d="M21.157 10.908l-3.977-2.296L13.792 12l3.388 3.388 3.977-2.296c1.124-.65 1.124-1.71 0-2.36l-.001.176z"
                  fill="#FF3D00"
                />
                <path
                  d="M17.18 15.388l-3.388-3.388L3.988 22.442c.303.136.744.123 1.282-.187l11.91-6.867z"
                  fill="#00B0FF"
                />
              </svg>
              <div className="text-left">
                <span className="block text-[10px] text-slate-300 leading-none">Get it on</span>
                <span className="block text-sm font-bold tracking-tight text-white leading-tight">Google Play</span>
              </div>
            </a>

            {/* Direct Web Onboarding Action */}
            <button
              onClick={onOpenGetStarted}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-slate-200 hover:border-[#0066FF] hover:bg-blue-50/50 text-[#0B3B6F] font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation"
            >
              <span>{audience === "merchant" ? "Register Business Online" : "Open Account Online"}</span>
              <ChevronRight className="w-4 h-4 text-[#0066FF]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

