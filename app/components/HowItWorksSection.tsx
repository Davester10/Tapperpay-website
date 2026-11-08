"use client";

import React, { useState } from "react";
import { UserPlus, ShieldCheck, SmartphoneNfc, Check, CheckCircle2, ArrowRight } from "lucide-react";
import { ContactlessWavesIcon, MastercardLogo, VisaLogo } from "./Icons";

interface HowItWorksSectionProps {
  onOpenGetStarted: () => void;
}

export function HowItWorksSection({ onOpenGetStarted }: HowItWorksSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(3); // Default to Step 3 (Payment Successful) to match reference UI

  const steps = [
    {
      num: 1,
      title: "Create Your Account",
      description: "Sign up on the TapperPay platform and provide your business details.",
      icon: UserPlus,
    },
    {
      num: 2,
      title: "Verify Your Business",
      description: "Complete a quick verification process to unlock full features.",
      icon: ShieldCheck,
    },
    {
      num: 3,
      title: "Accept Payments",
      description: "Enter the amount, and let your customer tap their card or device to pay.",
      icon: SmartphoneNfc,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill Badge & Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0B3B6F] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B6F] tracking-tight">
            Get Started in 3 Simple Steps
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            No hardware purchases or bulky POS rentals. Experience frictionless checkout in under 5 minutes.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Interactive Stepper */}
          <div className="lg:col-span-6 space-y-6">
            {steps.map((step) => {
              const isSelected = activeStep === step.num;
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(step.num)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${isSelected
                    ? "bg-blue-50/60 border-blue-200 shadow-md ring-1 ring-blue-500/20 translate-x-2"
                    : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50"
                    }`}
                >
                  {/* Step Number Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-colors duration-200 ${isSelected
                      ? "bg-[#0B3B6F] text-white shadow-md shadow-[#0B3B6F]/20"
                      : "bg-blue-100/70 text-[#0B3B6F]"
                      }`}
                  >
                    {step.num}
                  </div>

                  {/* Step Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-[#FF6A2C]" : "text-slate-400"}`} />
                      <h3
                        className={`text-lg font-bold tracking-tight transition-colors ${isSelected ? "text-[#0B3B6F]" : "text-slate-800"
                          }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Active Indicator Chevron */}
                  {isSelected && (
                    <div className="hidden sm:flex items-center text-[#0B3B6F] pt-2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quick Onboarding Button */}
            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="px-6 py-3 rounded-full bg-[#FF6A2C] hover:bg-[#E5581E] text-white text-sm font-semibold shadow-md shadow-[#FF6A2C]/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Start Setup Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup reflecting the step */}
          <div className="lg:col-span-6 flex justify-center items-center relative select-none">
            {/* Background subtle radial glow */}
            <div className="absolute w-72 h-72 bg-blue-100/60 rounded-full blur-3xl -z-10" />

            {/* Tapping Card Overlay on Phone Corner */}
            <div className="absolute -top-4 -right-2 sm:right-12 z-20 w-44 sm:w-52 h-28 sm:h-32 rounded-xl p-3 text-white shadow-xl rotate-12 transition-transform duration-500 hover:rotate-6 bg-gradient-to-r from-[#0052CC] to-[#0B3B6F] border border-white/20">
              <div className="flex justify-between items-start">
                <div className="w-6 h-4 bg-amber-400 rounded-xs opacity-90" />
                <ContactlessWavesIcon className="w-5 h-5 text-white/90" />
              </div>
              <div className="mt-4 font-mono text-[10px] tracking-widest text-blue-100">•••• 9021</div>
              <div className="mt-2 flex justify-between items-center text-[8px] text-blue-200">
                <span>NFC TAP ACTIVE</span>
                <MastercardLogo className="h-3 w-5" />
              </div>
            </div>

            {/* Smartphone Container */}
            <div className="w-[280px] sm:w-[305px] h-[580px] bg-white rounded-[44px] p-3 shadow-2xl border-[6px] border-slate-900 shadow-slate-400/20 flex flex-col relative">
              {/* Speaker & Sensor */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-30" />

              {/* Phone Inner Screen */}
              <div className="w-full h-full rounded-[36px] bg-gradient-to-b from-blue-50/60 to-white overflow-hidden flex flex-col justify-between p-5 text-slate-800 border border-slate-100">

                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 pt-1">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px]">5G</span>
                    <div className="w-4 h-2 rounded-xs border border-slate-400 p-0.5">
                      <div className="w-full h-full bg-slate-700 rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Dynamic Screen by Active Step */}
                {activeStep === 1 ? (
                  <div className="my-auto space-y-4 animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0B3B6F] flex items-center justify-center mx-auto">
                      <UserPlus className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-base font-bold text-[#0B3B6F]">Step 1: Merchant Profile</h4>
                      <p className="text-xs text-slate-500 mt-1">Register your business credentials</p>
                    </div>
                    <div className="space-y-2 text-left">
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-xs">
                        <span className="text-slate-400 block text-[10px]">Business Name</span>
                        <span className="font-semibold text-slate-800">Lagos Fine Foods Ltd</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-xs">
                        <span className="text-slate-400 block text-[10px]">Account Tier</span>
                        <span className="font-semibold text-slate-800">Instant SoftPOS Merchant</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveStep(2)}
                      className="w-full py-2 bg-[#0B3B6F] text-white text-xs font-semibold rounded-xl"
                    >
                      Continue to Step 2 →
                    </button>
                  </div>
                ) : activeStep === 2 ? (
                  <div className="my-auto space-y-4 animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-base font-bold text-[#0B3B6F]">Step 2: Business Verified</h4>
                      <p className="text-xs text-slate-500 mt-1">NFC SoftPOS Key Provisioned</p>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 text-xs text-emerald-800 space-y-1">
                      <div className="flex items-center gap-1 font-semibold">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>KYC & CAC Approved</span>
                      </div>
                      <p className="text-[11px] text-emerald-700">Daily limit: ₦ 10,000,000.00</p>
                    </div>
                    <button
                      onClick={() => setActiveStep(3)}
                      className="w-full py-2 bg-[#0B3B6F] text-white text-xs font-semibold rounded-xl"
                    >
                      Ready to Accept Payments →
                    </button>
                  </div>
                ) : (
                  /* Step 3 (Payment Successful) - matches Reference UI exactly */
                  <div className="my-auto text-center space-y-4 animate-in fade-in duration-300">
                    {/* Big Green Success Checkmark Badge */}
                    <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/25 ring-8 ring-emerald-100">
                      <Check className="w-10 h-10 stroke-[3]" />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Payment Successful</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Contactless Tap Verified</p>
                    </div>

                    <div className="text-3xl font-black text-[#0B3B6F] tracking-tight">
                      ₦ 25,000.00
                    </div>

                    {/* Receipt Summary Card */}
                    <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs text-left text-xs space-y-1.5">
                      <div className="flex justify-between text-slate-500 text-[11px]">
                        <span>Payment Method</span>
                        <span className="font-semibold text-slate-800 flex items-center gap-1">
                          Mastercard •••• 9021
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[11px]">
                        <span>Terminal ID</span>
                        <span className="font-mono text-slate-700">TP-SOFT-8821</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[11px]">
                        <span>Status</span>
                        <span className="text-emerald-600 font-semibold">Approved</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom App Navigation Bar */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-around text-[10px] text-slate-400 font-medium">
                  <span className="text-[#0B3B6F] font-bold">Terminal</span>
                  <span>Transactions</span>
                  <span>Analytics</span>
                  <span>Settings</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
