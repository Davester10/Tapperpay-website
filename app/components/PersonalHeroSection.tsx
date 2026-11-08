"use client";

import React, { useState } from "react";
import { AppleLogo, ContactlessWavesIcon, MastercardLogo, VisaLogo, ApplePayLogo, GooglePayLogo } from "./Icons";
import { QrCode, Send, Check, Wifi, CheckCircle2, RotateCcw } from "lucide-react";

export function PersonalHeroSection() {
  const [tapState, setTapState] = useState<"idle" | "tapping" | "success">("idle");

  const handleSimulateTap = () => {
    if (tapState !== "idle") return;
    setTapState("tapping");
    setTimeout(() => {
      setTapState("success");
    }, 700);
  };

  const handleReset = () => {
    setTapState("idle");
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-[#0055DD] via-[#0066FF] to-[#0B3B6F] text-white">

      {/* Concentric Organic Curved Contour Lines in Light Orange (Changed from White) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="1050" cy="450" rx="650" ry="420" stroke="#FFA066" strokeWidth="1.5" strokeDasharray="6 6" />
          <ellipse cx="1050" cy="450" rx="550" ry="340" stroke="#FFA066" strokeWidth="2" />
          <ellipse cx="1050" cy="450" rx="420" ry="260" stroke="#FFA066" strokeWidth="2" strokeDasharray="4 4" />
          <ellipse cx="1050" cy="450" rx="300" ry="180" stroke="#FFA066" strokeWidth="2.5" />
          <circle cx="1050" cy="450" r="150" stroke="#FFA066" strokeWidth="2" opacity="0.8" />
        </svg>
      </div>

      {/* Vibrant Ambient Glows: Blue, White, and Orange */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF6A2C]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline, Subheadline & App Store CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">

            {/* Pill Badge (Pulsing dot removed) */}
            {/* <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-bold tracking-wide backdrop-blur-sm">
              <span>Personal Banking &amp; Tap-to-Pay</span>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Get the card <br className="hidden sm:inline" />
              that <span className="text-[#FF6A2C] drop-shadow-sm">works.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-blue-100/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Brought to you by the same technology that powers Nigeria&apos;s most trusted SoftPOS, TapperPay offers you a reliable personal banking and contactless tap-to-pay experience.
            </p>

            {/* App Store & Google Play Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Apple App Store */}
              <a
                href="#download"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-900 border border-white/20 text-white shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer hover:-translate-y-0.5"
              >
                <AppleLogo className="w-7 h-7 text-white shrink-0 group-hover:scale-105 transition-transform" />
                <div className="text-left">
                  <span className="block text-[10px] font-semibold text-white/70 uppercase tracking-wider leading-none">
                    Download on the
                  </span>
                  <span className="block text-base font-extrabold text-white leading-tight">
                    App Store
                  </span>
                </div>
              </a>

              {/* Google Play Store */}
              <a
                href="#download"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-900 border border-white/20 text-white shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer hover:-translate-y-0.5"
              >
                {/* Google Play Triangle SVG */}
                <svg className="w-6 h-6 shrink-0 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186c-.365-.333-.61-.83-.61-1.42V3.234c0-.59.245-1.087.61-1.42z" />
                  <path fill="#FBBC05" d="M17.18 8.613L13.792 12l3.388 3.387 3.824-2.185c.677-.387.677-1.017 0-1.404L17.18 8.613z" />
                  <path fill="#EA4335" d="M3.609 1.814L17.18 8.613 13.792 12 3.609 1.814z" />
                  <path fill="#34A853" d="M13.792 12l3.388 3.387-13.571 6.799L13.792 12z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] font-semibold text-white/70 uppercase tracking-wider leading-none">
                    Get it on
                  </span>
                  <span className="block text-base font-extrabold text-white leading-tight">
                    Google Play
                  </span>
                </div>
              </a>
            </div>

            {/* Trust Checks Inline */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-blue-100">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Zero card maintenance fees</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Instant Tap-to-Pay in stores</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Insured by NDIC</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Smartphone Mockup with All Moving Floating Elements */}
          <div className="lg:col-span-6 relative flex justify-center items-center select-none pt-8 lg:pt-0">

            <div className="relative w-full max-w-[460px] h-[620px] sm:h-[650px] flex items-center justify-center">

              {/* Glowing Ambient Radial Glow */}
              <div className="absolute w-80 h-80 bg-gradient-to-tr from-[#0066FF]/30 to-[#FF6A2C]/25 rounded-full blur-3xl pointer-events-none -z-10" />

              {/* Floating Pill Badge: "Your Phone. Your Wallet." (Continuous Float like merchant page) */}
              <div className="absolute -top-3 right-4 sm:right-8 z-35 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg shadow-blue-900/15 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B3B6F] animate-float">
                <span className="flex h-2 w-2 rounded-full bg-[#FF6A2C]" />
                <span>Your Phone. Your Wallet.</span>
              </div>

              {/* FLOATING ATM CONTACTLESS CARD (Moving continuously like in merchant page) */}
              <div
                onClick={handleSimulateTap}
                title="Click or tap card to simulate contactless payment"
                className={`absolute top-4 sm:top-8 left-0 sm:-left-6 z-40 w-56 sm:w-64 h-34 sm:h-38 rounded-2xl p-4 text-white shadow-2xl border border-white/30 cursor-pointer transition-all duration-700 touch-manipulation ring-1 ring-white/25 ${tapState === "tapping"
                  ? "translate-y-24 translate-x-12 rotate-0 scale-95 shadow-orange-500/30"
                  : "animate-float-card-reverse shadow-2xl shadow-slate-950/60 hover:scale-105"
                  }`}
                style={{
                  background: "linear-gradient(135deg, #0B3B6F 0%, #0050B3 55%, #FF6A2C 100%)",
                }}
              >
                {/* Glossy shimmer */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    {/* EMV Chip */}
                    <div className="w-8 h-6 rounded-md bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 p-0.5 border border-yellow-200/50 shadow-inner flex items-center justify-center">
                      <div className="w-full h-full border border-amber-700/40 rounded-xs flex items-center justify-center">
                        <div className="w-2 h-2 border-r border-b border-amber-700/30" />
                      </div>
                    </div>

                    {/* NFC Waves */}
                    <div className="text-white/90">
                      <ContactlessWavesIcon className="w-5 h-5 text-white/90" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-xs tracking-widest text-white/95 font-bold">
                      •••• •••• •••• 9821
                    </div>
                    <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-blue-100/90 font-medium">
                      <span>TAPPERPAY USER</span>
                      <span>12/28</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-[10px] font-extrabold tracking-tight text-white/90">
                      PLATINUM CONTACTLESS
                    </span>
                    <MastercardLogo className="h-3.5 w-6" />
                  </div>
                </div>
              </div>

              {/* REALISTIC ANDROID SMARTPHONE CHASSIS (Just like in Merchant side) */}
              <div className="relative w-[280px] sm:w-[316px] h-[580px] sm:h-[625px] bg-slate-900 rounded-[38px] p-2.5 shadow-2xl border-[4px] border-slate-700 shadow-slate-950/40 flex flex-col z-20">

                {/* Metallic Hardware Buttons */}
                <div className="absolute -right-[7px] top-28 w-[3px] h-9 bg-slate-600 rounded-r-xs shadow-xs" />
                <div className="absolute -right-[7px] top-42 w-[3px] h-16 bg-slate-600 rounded-r-xs shadow-xs" />

                {/* Top Speaker Micro-Slit */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-950/80 rounded-full z-40 border-b border-slate-700/50" />

                {/* Inner Screen */}
                <div className="relative w-full h-full rounded-[30px] bg-[#072040] overflow-hidden flex flex-col justify-between p-4 sm:p-5 text-white shadow-inner">

                  {/* Glow rings in screen background */}
                  <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FF6A2C]/15 rounded-full blur-2xl pointer-events-none" />

                  {/* Punch-Hole Selfie Camera */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 w-3.5 h-3.5 rounded-full bg-slate-950 ring-1 ring-slate-800 flex items-center justify-center shadow-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900/90 ring-1 ring-blue-700/40" />
                  </div>

                  {/* Android Status Bar */}
                  <div className="flex items-center justify-between text-[11px] font-medium text-blue-200/90 pt-0.5 px-1 relative z-20">
                    <span className="font-semibold tracking-tight">9:41</span>
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
                        TapperPay Wallet
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                      Online
                    </span>
                  </div>

                  {/* Center Screen State: Tap to Pay or Successful Tap */}
                  {tapState === "success" ? (
                    <div className="my-auto text-center space-y-3.5 py-2 animate-in zoom-in-95 duration-300">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                        <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10" />
                      </div>

                      <div className="space-y-1">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                          Payment Successful
                        </div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-white">
                          ₦ 12,500.00
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-blue-200/70">
                          Mastercard •••• 9821
                        </div>
                      </div>

                      <div className="bg-white/10 rounded-2xl p-3 border border-white/10 text-left text-[11px] space-y-1 text-blue-100">
                        <div className="flex justify-between">
                          <span className="text-blue-300">Merchant:</span>
                          <span className="font-semibold text-white">Mega Mart Lagos</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-300">Type:</span>
                          <span className="text-emerald-300 font-medium">Contactless NFC</span>
                        </div>
                      </div>

                      <button
                        onClick={handleReset}
                        className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 active:scale-95 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation min-h-[40px]"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Ready to Tap</span>
                      </button>
                    </div>
                  ) : (
                    <div className="my-auto text-center space-y-3 py-1">
                      {/* Radiating NFC Sensor Wave Target */}
                      <div className="relative w-22 h-22 sm:w-24 sm:h-24 mx-auto flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-blue-500/10 border border-blue-400/20 animate-pulse-ring" />
                        <div className="absolute inset-2.5 rounded-full bg-blue-500/20 border border-blue-400/30" />
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#0B3B6F] to-[#0066FF] border border-blue-300/40 flex items-center justify-center shadow-lg shadow-blue-500/25">
                          <ContactlessWavesIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#FF6A2C]" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                          {tapState === "tapping" ? "Card Detected! Authorizing..." : "Tap to Pay Anywhere"}
                        </h4>
                        <p className="text-blue-200/80 text-[10px] sm:text-[11px] mt-0.5">
                          {tapState === "tapping" ? "Reading contactless chip..." : "Hold phone near any contactless terminal"}
                        </p>
                      </div>

                      {/* In-Phone Balance & Quick Tap Button */}
                      <div className="bg-white/10 rounded-2xl p-3 border border-white/15 text-left space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-blue-200">
                          <span>Primary Card</span>
                          <span className="font-semibold text-emerald-300">Active</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-white">•••• 9821</span>
                          <span className="text-[11px] font-black text-[#FF6A2C]">₦12,860.05</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleSimulateTap}
                          className="w-full py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] active:scale-98 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation"
                        >
                          <ContactlessWavesIcon className="w-4 h-4 text-white" />
                          <span>Tap Phone to Pay</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Phone Bottom Supported Networks Bar */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between px-1 text-white/70">
                    <VisaLogo className="h-3 text-white/80" />
                    <MastercardLogo className="h-3.5 w-5" />
                    <ApplePayLogo className="h-3 text-white/80" />
                    <GooglePayLogo className="scale-85" />
                  </div>

                </div>
              </div>

              {/* FLOATING AVAILABLE BALANCE CARD (Moving continuously) */}
              <div className="absolute left-0 sm:-left-8 bottom-12 sm:bottom-16 z-30 w-56 sm:w-64 rounded-2xl bg-gradient-to-br from-[#FFF9E6] to-[#FFF1C2] text-slate-900 p-4 shadow-2xl border border-yellow-200/90 animate-float-balance transition-all hover:scale-102">
                <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                  Available Balance
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#0B3B6F] mt-0.5 tracking-tight">
                  ₦100,050,000.00
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] font-bold text-[#0066FF]">
                  <span className="hover:underline flex items-center gap-1 cursor-pointer">
                    History &gt;
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-extrabold">
                    +14% Interest
                  </span>
                </div>
              </div>

              {/* FLOATING ACTION BUTTONS: Transfer & Scan QR (Moving continuously) */}
              <div className="absolute right-0 sm:-right-8 bottom-6 sm:bottom-10 z-30 p-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-2 text-slate-800 animate-float-actions">
                {/* Transfer */}
                <div className="flex flex-col items-center justify-center p-2 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer w-16 sm:w-18 h-16 sm:h-18 text-center">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-blue-100 text-[#0066FF] flex items-center justify-center mb-1 shadow-2xs">
                    <Send className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-800">Transfer</span>
                </div>

                {/* Scan QR */}
                <div className="flex flex-col items-center justify-center p-2 rounded-xl hover:bg-orange-50 transition-colors cursor-pointer w-16 sm:w-18 h-16 sm:h-18 text-center">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-[#FF6A2C]/15 text-[#FF6A2C] flex items-center justify-center mb-1 shadow-2xs">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-800">Scan QR</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

