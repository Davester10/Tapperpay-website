"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Play, CheckCircle2, RotateCcw, Send, QrCode, CreditCard, Sparkles, Wifi } from "lucide-react";
import { ContactlessWavesIcon, MastercardLogo, VisaLogo } from "./Icons";

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
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0B3B6F]/10 via-white to-[#FF6A2C]/10">
      {/* Background Decorative Gradients: Blue, White, and Orange Harmonious Blend */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-gradient-to-br from-[#0B3B6F]/20 via-[#0066FF]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF6A2C]/20 via-orange-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/70 rounded-full blur-2xl pointer-events-none -z-10" />

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0B3B6F] leading-[1.12]">
              {audience === "merchant" ? (
                <>
                  Tap. Pay. <span className="text-[#FF6A2C]">Grow.</span>
                </>
              ) : (
                <>
                  Tap. Pay. <span className="text-[#FF6A2C]">Live Cashless.</span>
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
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 active:scale-98 text-slate-700 hover:text-[#0B3B6F] font-semibold text-base border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[48px]"
              >
                <span>Learn More</span>
                <Play className="w-3.5 h-3.5 fill-current opacity-80" />
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

            {/* Realistic Floating Contactless Debit Card (In front of the phone entirely) */}
            <div
              onClick={handleStartPayment}
              title="Click or tap to simulate contactless payment"
              className={`absolute top-4 sm:top-8 right-0 sm:right-2 md:-right-6 z-50 w-56 sm:w-64 h-34 sm:h-38 rounded-2xl p-4 text-white shadow-2xl border border-white/30 cursor-pointer transition-all duration-700 touch-manipulation ring-1 ring-white/25 ${isTappedCard
                ? "translate-y-28 translate-x-4 rotate-0 scale-95 shadow-orange-500/30"
                : "rotate-6 hover:rotate-2 hover:-translate-y-1 animate-float-card shadow-2xl shadow-slate-950/60"
                }`}
              style={{
                background: "linear-gradient(135deg, #092B54 0%, #0B3B6F 45%, #0050B3 100%)",
              }}
            >
              {/* Card glossy shimmer highlight */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

              <div className="relative h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  {/* EMV Chip */}
                  <div className="w-8 h-6 rounded-md bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 p-0.5 border border-yellow-200/50 shadow-inner flex items-center justify-center">
                    <div className="w-full h-full border border-amber-700/40 rounded-xs flex items-center justify-center">
                      <div className="w-2 h-2 border-r border-b border-amber-700/30" />
                    </div>
                  </div>

                  {/* NFC Contactless Wave Indicator */}
                  <div className="text-white/80">
                    <ContactlessWavesIcon className="w-5 h-5 text-white/90" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-xs tracking-widest text-blue-100">•••• •••• •••• 4829</div>
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-blue-200/90 font-medium">
                    <span>CHUKWUDI E.</span>
                    <span>08/29</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] font-bold tracking-tight text-white/90">PLATINUM DEBIT</span>
                  <MastercardLogo className="h-4 w-7" />
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

              {/* Inner Smartphone Screen with Uniform Slim Bezels */}
              <div className="relative w-full h-full rounded-[30px] bg-[#072040] overflow-hidden flex flex-col justify-between p-4 sm:p-5 text-white shadow-inner">

                {/* Glow rings in screen background */}
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FF6A2C]/15 rounded-full blur-2xl pointer-events-none" />

                {/* ANDROID PUNCH-HOLE SELFIE CAMERA (Centered circular cutout replacing Apple pill) */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 w-3.5 h-3.5 rounded-full bg-slate-950 ring-1 ring-slate-800 flex items-center justify-center shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900/90 ring-1 ring-blue-700/40" />
                </div>

                {/* Android Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-medium text-blue-200/90 pt-0.5 px-1 relative z-20">
                  {/* Left: Android Time */}
                  <span className="font-semibold tracking-tight">9:41</span>

                  {/* Right: Android Connectivity Icons (5G, Wifi, NFC, Battery %) */}
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="text-[9px] font-bold text-blue-300">NFC</span>
                    <Wifi className="w-3 h-3 text-blue-200" />
                    <span className="font-bold">5G</span>
                    <div className="flex items-center gap-0.5 pl-0.5">
                      <span className="text-[9px]">98%</span>
                      <div className="w-4 h-2 rounded-xs border border-blue-200/80 p-0.5 flex items-center">
                        <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Brand Header */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center p-0.5 border border-white/15">
                      <div className="w-full h-full rounded bg-[#FF6A2C] flex items-center justify-center text-[10px] font-black text-white">T</div>
                    </div>
                    <span className="text-xs font-bold tracking-tight text-white">
                      {audience === "merchant" ? "TapperPay SoftPOS" : "TapperPay Wallet"}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                    Online
                  </span>
                </div>

                {/* Center Content: State-driven (Idle / Tapping / Success) */}
                {paymentState === "success" ? (
                  <div className="my-auto text-center space-y-3.5 py-2 animate-in zoom-in-95 duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                      <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10" />
                    </div>

                    <div className="space-y-1">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                        Payment Successful
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">
                        ₦ {amount}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-blue-200/70">
                        Mastercard •••• 4829
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-3 border border-white/10 text-left text-[11px] space-y-1 text-blue-100">
                      <div className="flex justify-between">
                        <span className="text-blue-300">Auth Code:</span>
                        <span className="font-mono font-medium">TP-908127</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Settlement:</span>
                        <span className="text-emerald-300 font-medium">Instant</span>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 active:scale-95 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation min-h-[40px]"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>New Transaction</span>
                    </button>
                  </div>
                ) : audience === "merchant" ? (
                  /* Merchant Screen: Contactless Terminal */
                  <div className="my-auto text-center space-y-3.5 py-1">
                    {/* Concentric NFC Contactless Radiating Target */}
                    <div className="relative w-24 h-24 sm:w-26 sm:h-26 mx-auto flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-blue-500/10 border border-blue-400/20 animate-pulse-ring" />
                      <div className="absolute inset-2.5 rounded-full bg-blue-500/20 border border-blue-400/30" />
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#0B3B6F] to-[#0066FF] border border-blue-300/40 flex items-center justify-center shadow-lg shadow-blue-500/25">
                        <ContactlessWavesIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#FF6A2C]" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">Accept Contactless Payments</h4>
                      <p className="text-blue-200/80 text-[10px] sm:text-[11px] mt-0.5">
                        {paymentState === "tapping" ? "Card detected! Authorizing..." : "Tap a card or smartphone to pay"}
                      </p>
                    </div>

                    {/* Amount Input Card */}
                    <div className="bg-white rounded-2xl p-3 sm:p-3.5 text-slate-900 shadow-md text-left">
                      <div className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Transaction Amount
                      </div>
                      <div className="flex items-baseline gap-1 text-lg sm:text-2xl font-black text-[#0B3B6F]">
                        <span className="text-sm font-bold text-slate-400">₦</span>
                        <input
                          type="text"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full font-black text-[#0B3B6F] focus:outline-none bg-transparent"
                        />
                      </div>

                      {/* Quick Amount Presets (Responsive on phone) */}
                      <div className="flex gap-1.5 pt-1.5 pb-1">
                        {["10,000.00", "25,000.00", "50,000.00"].map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setAmount(preset)}
                            className={`text-[9px] sm:text-[10px] px-2 py-1 rounded-md font-semibold transition-colors cursor-pointer touch-manipulation min-h-[30px] flex-1 text-center ${amount === preset
                              ? "bg-[#0B3B6F] text-white"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                              }`}
                          >
                            ₦{preset.split(".")[0]}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={handleStartPayment}
                        disabled={paymentState === "tapping"}
                        className="w-full mt-2 py-2.5 sm:py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] active:scale-98 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation min-h-[44px]"
                      >
                        {paymentState === "tapping" ? (
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                            Reading NFC Chip...
                          </span>
                        ) : (
                          <span>Start Payment</span>
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Customer Screen: Personal Digital Wallet & Tap to Pay */
                  <div className="my-auto text-center space-y-3.5 py-1">
                    <div className="bg-white/10 border border-white/15 rounded-2xl p-3.5 text-left">
                      <span className="text-[10px] uppercase font-semibold text-blue-200">Available Balance</span>
                      <div className="text-2xl font-black text-white mt-0.5">₦ 185,450.00</div>
                      <div className="text-[10px] text-emerald-300 flex items-center gap-1 mt-1 font-medium">
                        <Check className="w-3 h-3" /> Tier 3 Account Verified
                      </div>
                    </div>

                    {/* Customer Action Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={handleStartPayment}
                        className="p-2.5 bg-blue-500/20 hover:bg-blue-500/30 active:scale-95 border border-blue-400/30 rounded-xl flex flex-col items-center gap-1 cursor-pointer touch-manipulation"
                      >
                        <ContactlessWavesIcon className="w-5 h-5 text-[#FF6A2C]" />
                        <span className="text-[9px] font-bold text-white">Tap to Pay</span>
                      </button>

                      <button
                        onClick={onOpenGetStarted}
                        className="p-2.5 bg-white/10 hover:bg-white/15 active:scale-95 border border-white/15 rounded-xl flex flex-col items-center gap-1 cursor-pointer touch-manipulation"
                      >
                        <Send className="w-5 h-5 text-blue-200" />
                        <span className="text-[9px] font-bold text-white">Send Money</span>
                      </button>

                      <button
                        onClick={onOpenGetStarted}
                        className="p-2.5 bg-white/10 hover:bg-white/15 active:scale-95 border border-white/15 rounded-xl flex flex-col items-center gap-1 cursor-pointer touch-manipulation"
                      >
                        <CreditCard className="w-5 h-5 text-emerald-300" />
                        <span className="text-[9px] font-bold text-white">Cards</span>
                      </button>
                    </div>

                    <div className="bg-white rounded-2xl p-3 text-slate-900 shadow-md text-left">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Recent Activity</div>
                      <div className="flex items-center justify-between py-1.5 border-b border-slate-100 text-xs">
                        <div>
                          <div className="font-semibold text-slate-800">Shoprite Palms Tap</div>
                          <div className="text-[10px] text-slate-400">Today, 2:15 PM</div>
                        </div>
                        <span className="font-bold text-slate-800">-₦8,200.00</span>
                      </div>
                      <button
                        onClick={handleStartPayment}
                        className="w-full mt-2 py-2 rounded-xl bg-[#0B3B6F] text-white text-xs font-bold hover:bg-[#124b88] transition-colors cursor-pointer touch-manipulation min-h-[38px]"
                      >
                        Tap to Pay at Merchant
                      </button>
                    </div>
                  </div>
                )}

                {/* Supported Payment Badges Bottom Row */}
                <div className="pt-2 border-t border-white/10">
                  <div className="text-[9px] text-center text-blue-200/70 font-medium mb-1">
                    Supported Networks &amp; Wallets
                  </div>
                  <div className="flex items-center justify-between px-2 bg-white/5 py-1.5 rounded-xl backdrop-blur-xs">
                    <span className="text-white/80 font-bold text-[9px] tracking-wider">VISA</span>
                    <MastercardLogo className="h-3 w-5" />
                    <span className="text-white text-[9px] font-semibold"> Pay</span>
                    <span className="text-[9px] font-bold text-white/90">G Pay</span>
                  </div>
                </div>

                {/* Android Bottom Navigation Gesture Bar Indicator */}
                <div className="pt-1.5 flex justify-center">
                  <div className="w-24 h-1 rounded-full bg-white/60" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
