"use client";

import React, { useRef, useEffect, useState } from "react";
import { AppleLogo } from "./Icons";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

interface HorizontalStepsSectionProps {
  audience?: "merchant" | "customer";
  onOpenGetStarted: () => void;
}

export function HorizontalStepsSection({ audience = "merchant", onOpenGetStarted }: HorizontalStepsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [maxTranslatePx, setMaxTranslatePx] = useState(0);

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
      title: "Instant KYC Verification (BVN & Business Details)",
      description:
        "Select username & password. Provide your BVN and KYC details and start face & ID verification. You can then provide your business name and set up a PIN for managing your account.",
      tag: "Instant KYC",
    },
    {
      num: 3,
      title: "Run a Live Test Tap",
      description: "Enter an amount on your screen and tap your own ATM card against the back of your phone. See the instant approval and digital receipt immediately.",
      tag: "Zero Minimum",
    },
    {
      num: 4,
      title: "Start Selling & Get Instant Cash-Out",
      description:
        "Start accepting contactless tap-to-pay transactions, transfers, and card payments on your phone. Withdraw funds directly to your commercial bank account anytime you want.",
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
      title: "Link your Debit Cards Securely",
      description:
        "Add your Mastercard, Visa, or Verve card to enjoy one-click wallet top-ups protected by bank-grade encryption.",
      tag: "Instant Deposit",
    },
    {
      num: 4,
      title: "Tap & Pay with NFC",
      description:
        "Tap your phone to pay in store or send money to friends and family with zero transaction charges.",
      tag: "Tap & Go",
    },
  ];

  const steps = audience === "merchant" ? merchantSteps : customerSteps;

  // Measure exact pixel distance needed to scroll to the end
  useEffect(() => {
    const updateDistance = () => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      const parent = track.parentElement;
      if (!parent) return;

      const cards = track.children;
      if (cards.length > 0) {
        const lastCard = cards[cards.length - 1] as HTMLElement;
        const totalRight = lastCard.offsetLeft + lastCard.offsetWidth;
        const visibleWidth = parent.clientWidth;
        const distance = Math.max(0, totalRight - visibleWidth + 32);
        setMaxTranslatePx(distance);
      } else {
        const distance = Math.max(0, track.scrollWidth - parent.clientWidth + 48);
        setMaxTranslatePx(distance);
      }
    };

    updateDistance();
    window.addEventListener("resize", updateDistance);
    return () => window.removeEventListener("resize", updateDistance);
  }, [steps.length]);

  // Intercept wheel scroll on desktop when section is in view:
  // Completes horizontal scroll across all 4 steps before allowing vertical page scroll to continue!
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth < 768 || maxTranslatePx <= 0) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 140 && rect.bottom >= window.innerHeight * 0.45;
      if (!inView) return;

      if (e.deltaY > 0) {
        // Scrolling down: drive horizontal scroll until Step 4 is reached
        if (scrollProgressRef.current < 0.98) {
          e.preventDefault();
          const stepDelta = Math.max(Math.abs(e.deltaY), 30) / 450;
          const next = Math.min(scrollProgressRef.current + stepDelta, 1);
          scrollProgressRef.current = next;
          setScrollProgress(next);
          const idx = Math.min(Math.floor(next * steps.length), steps.length - 1);
          setActiveStepIndex(idx);
        }
        // When scrollProgress reaches 100%, do not preventDefault: page scrolls down naturally to next section
      } else if (e.deltaY < 0) {
        // Scrolling up: drive horizontal scroll back towards Step 1
        if (scrollProgressRef.current > 0.02) {
          e.preventDefault();
          const stepDelta = Math.max(Math.abs(e.deltaY), 30) / 450;
          const next = Math.max(scrollProgressRef.current - stepDelta, 0);
          scrollProgressRef.current = next;
          setScrollProgress(next);
          const idx = Math.min(Math.floor(next * steps.length), steps.length - 1);
          setActiveStepIndex(idx);
        }
      }
    };

    section.addEventListener("wheel", onWheel, { passive: false });
    return () => section.removeEventListener("wheel", onWheel);
  }, [maxTranslatePx, steps.length]);

  // Handle native mobile touch horizontal scrolling
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;
    const progress = Math.min(Math.max(scrollLeft / maxScroll, 0), 1);
    const index = Math.min(Math.round(progress * (steps.length - 1)), steps.length - 1);
    setActiveStepIndex(index);
    setScrollProgress(progress);
    scrollProgressRef.current = progress;
  };

  // Navigate to specific step (responsive on both mobile and desktop)
  const navigateToStep = (index: number) => {
    setActiveStepIndex(index);
    const progress = index / (steps.length - 1);
    scrollProgressRef.current = progress;
    setScrollProgress(progress);

    if (mobileScrollRef.current) {
      const container = mobileScrollRef.current;
      const cards = container.children;
      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        container.scrollTo({
          left: card.offsetLeft - 16,
          behavior: "smooth",
        });
      }
    }
  };

  const handleNext = () => {
    if (activeStepIndex < steps.length - 1) {
      navigateToStep(activeStepIndex + 1);
    } else {
      const nextId = audience === "merchant" ? "pricing" : "testimonials";
      const el = document.getElementById(nextId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (activeStepIndex > 0) {
      navigateToStep(activeStepIndex - 1);
    }
  };

  const currentTranslateX = scrollProgress * maxTranslatePx;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative bg-white border-b border-slate-100 py-12 sm:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header Badge & Title */}
        <div className="w-full pt-2 pb-4 sm:pt-4 sm:pb-6">
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

            {/* Step Indicators and Prev/Next Controls (Responsive for both Mobile & Desktop) */}
            <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
              <span className="text-xs font-bold text-slate-500">
                Step <span className="text-[#0066FF] font-black">{activeStepIndex + 1}</span> of {steps.length}
              </span>

              <div className="flex items-center gap-1.5">
                {/* Step Dots */}
                <div className="flex items-center gap-1.5 mr-2">
                  {steps.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => navigateToStep(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${activeStepIndex === idx ? "w-7 bg-[#0066FF]" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                        }`}
                      aria-label={`Go to step ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Prev Button */}
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-1.5 rounded-lg bg-[#0066FF] text-white hover:bg-blue-700 active:scale-95 transition-all cursor-pointer shadow-xs"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE HORIZONTAL TRACK (Touch-swipeable & works till the end) */}
        <div className="block md:hidden w-full relative py-2">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex items-start gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 px-1"
          >
            {steps.map((step, index) => {
              const isCurrent = activeStepIndex === index;
              const isPassed = index <= activeStepIndex;

              return (
                <div
                  key={step.num}
                  className="w-[84vw] max-w-[320px] shrink-0 snap-center rounded-2xl p-5 border border-slate-200/90 bg-white shadow-sm flex flex-col justify-between select-none"
                >
                  <div>
                    {/* Header: Step Number Circle & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center font-black text-sm border-2 transition-all ${isCurrent
                            ? "border-[#0066FF] bg-[#0066FF] text-white shadow-md ring-4 ring-blue-100"
                            : isPassed
                              ? "border-emerald-500 bg-emerald-50 text-emerald-600"
                              : "border-slate-200 text-slate-400 bg-white"
                          }`}
                      >
                        {isPassed && index < activeStepIndex ? <Check className="w-4 h-4 stroke-[3]" /> : step.num}
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-[#0066FF]">
                        {step.tag}
                      </span>
                    </div>

                    {/* Step Card Content */}
                    <div className="space-y-2">
                      <h3 className="text-base font-extrabold text-[#0B3B6F] tracking-tight leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Indicator for Final Step */}
                  {index === steps.length - 1 && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-600 font-bold">
                      <span>✓ Ready to launch</span>
                      <button
                        onClick={onOpenGetStarted}
                        className="text-[#0066FF] hover:underline flex items-center gap-0.5"
                      >
                        Start now →
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
            {/* End spacer so the last card has padding and reaches 100% horizontal scroll on mobile */}
            <div className="w-6 shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* DESKTOP / TABLET HORIZONTAL TRACK (Scrolls 100% to the end) */}
        <div className="hidden md:block w-full relative py-6">
          <div className="relative overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex items-start transition-transform duration-300 ease-out will-change-transform"
              style={{
                transform: `translateX(-${currentTranslateX}px)`,
              }}
            >
              {steps.map((step, index) => {
                const isPassed = scrollProgress >= index / (steps.length - 1);
                const isCurrent = activeStepIndex === index;

                return (
                  <div
                    key={step.num}
                    className="flex-shrink-0 w-[340px] lg:w-[390px] xl:w-[420px] pr-8 select-none group"
                  >
                    {/* Step Indicator Header: Circle + Connecting Progress Line */}
                    <div className="relative flex items-center mb-6">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg border-2 z-10 transition-all duration-300 ${isPassed || isCurrent
                            ? "border-[#0066FF] text-[#0066FF] bg-white ring-4 ring-blue-50 shadow-md"
                            : "border-slate-200 text-slate-400 bg-white"
                          }`}
                      >
                        {isPassed && index < activeStepIndex ? (
                          <Check className="w-5 h-5 text-[#0066FF] stroke-[3]" />
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
                                    ? `${((scrollProgress - index / (steps.length - 1)) /
                                      (1 / (steps.length - 1))) *
                                    100
                                    }%`
                                    : "0%",
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Step Card Content */}
                    <div className="space-y-2.5">
                      <div className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0066FF] text-[10px] font-bold uppercase tracking-wider mb-1">
                        {step.tag}
                      </div>
                      <h3 className="text-xl font-bold text-[#0B3B6F] tracking-tight leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Store Download Badges Row */}
        <div className="w-full pt-4 pb-2">
          <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4">
            {/* Apple App Store Badge */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
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
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 hover:border-[#0066FF] hover:bg-blue-50/50 text-[#0B3B6F] font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation"
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

