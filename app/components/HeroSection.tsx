"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Play, CheckCircle2, RotateCcw, Send, QrCode, CreditCard, Sparkles, Wifi, X } from "lucide-react";
import { ContactlessWavesIcon, MastercardLogo, VisaLogo, TapperLogo } from "./Icons";

interface HeroSectionProps {
  audience?: "merchant" | "customer";
  onOpenGetStarted: () => void;
  onOpenLearnMore: () => void;
}

export function HeroSection({
  audience = "merchant",
  onOpenGetStarted,
  onOpenLearnMore,
}: HeroSectionProps) {
  const [amount, setAmount] = useState("25,000.00");
  const [paymentState, setPaymentState] = useState<"idle" | "tapping" | "success">("idle");
  const [isTappedCard, setIsTappedCard] = useState(false);

  const handleStartPayment = () => {
    if (paymentState !== "idle") return;
    setPaymentState("tapping");
    setIsTappedCard(true);

    setTimeout(() => {
      setPaymentState("success");
    }, 1100);
  };

  const handleReset = () => {
    setPaymentState("idle");
    setIsTappedCard(false);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white border-b border-slate-100">
      {/* Subtle Ambient Light (Clean Remita-style, no loud oversaturated gradients) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF6A2C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0EB] border border-[#FF6A2C]/20 text-[#FF6A2C] text-xs sm:text-sm font-semibold tracking-wide shadow-2xs animate-in fade-in duration-500">
              <span className="w-2 h-2 rounded-full bg-[#FF6A2C] animate-pulse" />
              <span>
                {audience === "merchant"
                  ? "Contactless Payments Made Simple"
                  : "Smart Contactless Banking for Everyday Life"}
              </span>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12]">
              {audience === "merchant" ? (
                <>
                  <span className="text-[#0B3B6F]">Tap,</span>{" "}
                  <span className="text-[#0B3B6F]">Pay,</span>{" "}
                  <span className="text-[#FF6A2C]">Grow.</span>
                </>
              ) : (
                <>
                  <span className="text-[#0B3B6F]">Tap,</span>{" "}
                  <span className="text-[#0B3B6F]">Pay,</span>{" "}
                  <span className="text-[#FF6A2C]">Live Cashless.</span>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {audience === "merchant"
                ? "TapperPay is your all-in-one contactless payment solution. Turn your Android smartphone into a secure payment terminal and accept payments anywhere, anytime."
                : "Pay at stores in seconds with your phone. Send money with zero fees, generate instant virtual NFC debit cards, and enjoy seamless mobile banking."}
            </p>

            {/* CTAs (Responsive on mobile with full touch targets) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenGetStarted}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#FF6A2C] hover:bg-[#E5581E] active:scale-98 text-white font-bold text-base shadow-lg shadow-[#FF6A2C]/25 hover:shadow-xl hover:shadow-[#FF6A2C]/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[48px]"
              >
                <span>{audience === "merchant" ? "Get Started as Merchant" : "Open Personal Account"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenLearnMore}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 active:scale-98 text-slate-700 hover:text-[#0B3B6F] font-semibold text-base border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all duration-200 flex items-center justify-center cursor-pointer touch-manipulation min-h-[48px]"
              >
                <span>Learn More</span>
              </button>
            </div>

            {/* Trust Checks Inline */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>{audience === "merchant" ? "No extra hardware" : "Zero account fees"}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>{audience === "merchant" ? "Instant settlement" : "Instant peer-to-peer"}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>CBN &amp; NDIC Protected</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Realistic Android Phone Mockup (User Request 2) */}
          <div className="lg:col-span-6 relative flex justify-center items-center select-none pt-6 sm:pt-0">
            {/* Ambient Background Glowing Orb */}
            <div className="absolute w-80 h-80 bg-gradient-to-tr from-[#0B3B6F]/20 to-[#FF6A2C]/20 rounded-full blur-2xl -z-10" />

            {/* Floating pill badge: "Your Phone. Your POS." */}
            <div className="absolute -top-3 right-4 sm:right-10 z-30 px-4 py-2 rounded-2xl glass-card border border-white/80 shadow-lg shadow-blue-900/10 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B3B6F] animate-float">
              <span className="flex h-2 w-2 rounded-full bg-[#FF6A2C]" />
              <span>{audience === "merchant" ? "Your Phone. Your POS." : "Your Phone. Your Wallet."}</span>
            </div>

            {/* Realistic Floating Contactless Debit Card (Matches Attached App Screenshot) */}
            <div
              onClick={handleStartPayment}
              title="Click or tap to simulate contactless payment"
              className={`absolute top-4 sm:top-8 right-0 sm:right-2 md:-right-6 z-50 w-56 sm:w-64 h-34 sm:h-38 rounded-2xl p-4 text-white shadow-2xl border border-white/30 cursor-pointer transition-all duration-700 touch-manipulation ring-1 ring-white/25 ${isTappedCard
                ? "translate-y-28 translate-x-4 rotate-0 scale-95 shadow-orange-500/30"
                : "rotate-6 hover:rotate-2 hover:-translate-y-1 animate-float-card shadow-2xl shadow-slate-950/60"
                }`}
              style={{
                background: "linear-gradient(135deg, #1C72E8 0%, #155EC8 50%, #0E4FA8 100%)",
              }}
            >
              {/* Card glossy shimmer highlight */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

              <div className="relative h-full flex flex-col justify-between">
                {/* Top Row: "Tapper" Brand + Concentric Orange Circle with EMV Chip */}
                <div className="flex items-start justify-between">
                  <span className="font-bold text-white text-base tracking-tight">Tapper</span>

                  {/* Concentric Orange Circular Motif with Gold Chip inside (from screenshot) */}
                  <div className="relative -mt-1 -mr-1 w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF5E1E] to-[#FF7A3D] ring-3 ring-orange-400/35 flex items-center justify-center shadow-inner">
                    <div className="w-4.5 h-3.5 rounded-xs bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 border border-yellow-200/60 shadow-xs" />
                  </div>
                </div>

                {/* Card Number: •••• •••• •••• 4081 */}
                <div className="font-mono text-xs sm:text-sm tracking-widest text-white/95 font-bold">
                  •••• •••• •••• 4081
                </div>

                {/* Bottom Row: VISA · TEST BANK, STEEL SONA, 12/30 */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[7.5px] uppercase tracking-wider text-blue-200 font-semibold leading-none">
                      VISA · TEST BANK
                    </div>
                    <div className="text-[9.5px] uppercase tracking-wide text-white font-extrabold mt-0.5">
                      STEEL SONA
                    </div>
                  </div>
                  <div className="text-[10px] font-semibold text-white/95 font-mono">
                    12/30
                  </div>
                </div>
              </div>
            </div>

            {/* REALISTIC ANDROID FLAGSHIP PHONE CHASSIS (Chassis behind the card) */}
            <div className="relative z-10 w-[290px] sm:w-[316px] h-[590px] sm:h-[625px] bg-slate-900 rounded-[38px] p-2.5 shadow-2xl border-[4px] border-slate-700 shadow-slate-950/40 flex flex-col">

              {/* Metallic Hardware Buttons on Right Edge (Android Style) */}
              <div className="absolute -right-[7px] top-28 w-[3px] h-9 bg-slate-600 rounded-r-xs shadow-xs" />
              <div className="absolute -right-[7px] top-42 w-[3px] h-16 bg-slate-600 rounded-r-xs shadow-xs" />

              {/* Top Speaker Micro-Slit on Upper Rim (Behind the card) */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-950/80 rounded-full z-10 border-b border-slate-700/50" />

              {/* Inner Smartphone Screen with Actual App UI from Screenshot */}
              <div className="relative w-full h-full rounded-[30px] bg-[#1260D0] overflow-hidden flex flex-col justify-between p-4 sm:p-5 text-white shadow-inner">

                {/* Concentric Curved Contour Radiating Rings in Top-Right (matching screenshot) */}
                <div className="absolute -top-10 -right-10 w-72 h-72 pointer-events-none opacity-20">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full border border-white" />
                  <div className="absolute top-0 right-0 w-44 h-44 rounded-full border border-white" />
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white" />
                  <div className="absolute top-0 right-0 w-80 h-80 rounded-full border border-white" />
                </div>

                {/* ANDROID PUNCH-HOLE SELFIE CAMERA (Centered circular cutout) */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-3 h-3 rounded-full bg-slate-950 ring-1 ring-slate-800 flex items-center justify-center shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900/90 ring-1 ring-blue-700/40" />
                </div>

                {/* Top Bar from Screenshot: Circular (✕) button on left, "Pay with Tapper" in center */}
                <div className="relative z-20 flex items-center justify-between pt-1 pb-1">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </button>
                  <h3 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                    Pay with Tapper
                  </h3>
                  <div className="w-7 h-7" />
                </div>

                {/* Center Content: State-driven (Idle / Tapping / Success) */}
                {paymentState === "success" ? (
                  <div className="my-auto text-center space-y-3 py-2 animate-in zoom-in-95 duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                      <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10" />
                    </div>

                    <div className="space-y-1">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                        Payment Successful
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">
                        ₦3,001.00
                      </div>
                      <div className="text-[10px] text-blue-100/80">
                        Paid to Tapper Merchant • VISA •••• 4081
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-2.5 border border-white/10 text-left text-[11px] space-y-1 text-blue-100">
                      <div className="flex justify-between">
                        <span className="text-blue-200">Terminal:</span>
                        <span className="font-semibold text-white">Tapper SoftPOS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-200">Status:</span>
                        <span className="text-emerald-300 font-medium">Approved &amp; Settled</span>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 active:scale-95 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation min-h-[40px]"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Ready for Next Tap</span>
                    </button>
                  </div>
                ) : (
                  <div className="my-auto space-y-5 py-2">
                    {/* The Blue Card from Screenshot */}
                    <div
                      onClick={handleStartPayment}
                      className="w-full max-w-[250px] mx-auto rounded-2xl p-3.5 text-white shadow-xl relative overflow-hidden cursor-pointer hover:scale-102 transition-transform"
                      style={{
                        background: "linear-gradient(135deg, #1C72E8 0%, #155EC8 50%, #0E4FA8 100%)",
                      }}
                    >
                      {/* Top Row: "Tapper" Brand + Concentric Orange Circle with EMV Chip */}
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-white text-base tracking-tight">Tapper</span>

                        {/* Concentric Orange Circular Motif with Gold Chip inside (from screenshot) */}
                        <div className="relative -mt-1 -mr-1 w-11 h-11 rounded-full bg-gradient-to-tr from-[#FF5E1E] to-[#FF7A3D] ring-3 ring-orange-400/35 flex items-center justify-center shadow-inner">
                          <div className="w-4 h-3 rounded-xs bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 border border-yellow-200/60 shadow-xs" />
                        </div>
                      </div>

                      {/* Card Number: •••• •••• •••• 4081 */}
                      <div className="font-mono text-xs sm:text-sm tracking-widest text-white/95 font-bold pt-2.5 pb-2">
                        •••• •••• •••• 4081
                      </div>

                      {/* Bottom Row: VISA · TEST BANK, STEEL SONA, 12/30 */}
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-[7px] uppercase tracking-wider text-blue-200 font-semibold leading-none">
                            VISA · TEST BANK
                          </div>
                          <div className="text-[9px] uppercase tracking-wide text-white font-extrabold mt-0.5">
                            STEEL SONA
                          </div>
                        </div>
                        <div className="text-[9.5px] font-semibold text-white/95 font-mono">
                          12/30
                        </div>
                      </div>
                    </div>

                    {/* Circular Salmon/Coral Contactless Wave Sensor Button (from Screenshot) */}
                    <div className="flex justify-center pt-1">
                      <button
                        type="button"
                        onClick={handleStartPayment}
                        className={`w-14 h-14 rounded-full bg-[#E57357] hover:bg-[#d9664b] active:scale-95 text-white flex items-center justify-center shadow-lg shadow-black/20 cursor-pointer transition-all ${
                          isTappedCard ? "ring-4 ring-white/60 scale-110" : ""
                        }`}
                        title="Click to simulate tap"
                      >
                        <ContactlessWavesIcon className="w-7 h-7 text-white" />
                      </button>
                    </div>

                    {/* Bottom Status Text from Screenshot */}
                    <div className="text-center pt-1">
                      <p className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug">
                        {paymentState === "tapping" ? "Authorizing ₦3,001.00..." : "Paying ₦3,001.00 to Tapper Merchant..."}
                      </p>
                      <p className="text-[11px] text-blue-100/80 font-normal mt-0.5">
                        Keep the app open.
                      </p>
                    </div>
                  </div>
                )}

                {/* Android Bottom Navigation Gesture Bar Indicator */}
                <div className="pt-2 flex justify-center">
                  <div className="w-24 h-1 rounded-full bg-white/70" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
