"use client";

import React from "react";
import { ArrowRight, Check, Wifi } from "lucide-react";
import { AndroidLogo, AppleLogo, ContactlessWavesIcon, MastercardLogo } from "./Icons";

interface DeviceCompatibilitySectionProps {
  onOpenCompatibilityModal: () => void;
}

export function DeviceCompatibilitySection({ onOpenCompatibilityModal }: DeviceCompatibilitySectionProps) {
  return (
    <section id="security" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Device Specifications & CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B6F] tracking-tight">
              Compatible with Your Devices
            </h2>

            <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              TapperPay works with all standard NFC-enabled Android smartphones and tablets. No external dongles, cables, or proprietary hardware rentals required.
            </p>

            {/* OS Compatibility Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Android Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <AndroidLogo className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Android Phones</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Version 8.0 and above with NFC antenna</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                    <Check className="w-3 h-3" /> Fully Certified SoftPOS
                  </span>
                </div>
              </div>

              {/* iOS Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                  <AppleLogo className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">iOS &amp; iPadOS</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Version 14.0 and above with NFC support</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                    <Check className="w-3 h-3" /> Tap to Pay Supported
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button (Responsive on phone) */}
            <div className="pt-2">
              <button
                onClick={onOpenCompatibilityModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] active:scale-98 text-white text-sm font-semibold shadow-md shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer touch-manipulation min-h-[48px]"
              >
                <span>Check Device Compatibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Realistic Flagship Android Device Graphic */}
          <div className="lg:col-span-6 flex justify-center items-center relative select-none">
            {/* Soft Blue Arc Backdrop */}
            <div className="absolute w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full bg-blue-100/70 -z-10 translate-x-10" />

            <div className="relative flex items-center justify-center">
              {/* Secondary smartphone backing/shadow phone */}
              <div className="absolute -left-6 w-56 h-[380px] bg-slate-300/40 rounded-[38px] border-4 border-slate-400/30 transform -rotate-6 filter blur-[1px] hidden sm:block" />

              {/* Primary Realistic Android Smartphone Graphic */}
              <div className="w-[260px] sm:w-[285px] h-[460px] sm:h-[490px] bg-slate-900 rounded-[38px] p-2.5 shadow-2xl border-[4px] border-slate-700 shadow-blue-900/20 relative z-10 flex flex-col">
                
                {/* Micro Ear Speaker on Rim */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-950 rounded-full z-40 border-b border-slate-700/50" />

                {/* Inner Screen */}
                <div className="w-full h-full rounded-[30px] bg-[#071F3B] overflow-hidden p-4 sm:p-5 flex flex-col justify-between text-white relative">
                  
                  {/* Android Punch Hole Camera */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 w-3 h-3 rounded-full bg-slate-950 ring-1 ring-slate-800 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-blue-950 ring-1 ring-blue-700/30" />
                  </div>

                  {/* Android Status Bar */}
                  <div className="flex items-center justify-between text-[10px] text-blue-200/80 pt-0.5 px-1">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-3 h-3" />
                      <span className="font-bold">5G</span>
                      <div className="w-3.5 h-1.5 rounded-xs border border-blue-200/80 p-0.5 flex items-center">
                        <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* Subtle NFC waves glowing */}
                  <div className="my-auto text-center space-y-3.5">
                    <div className="w-20 h-20 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30 animate-pulse">
                      <ContactlessWavesIcon className="w-10 h-10 text-[#FF6A2C]" />
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-blue-300">Android Contactless Reader</div>
                      <div className="text-sm font-bold text-white mt-0.5">Ready for Tap</div>
                    </div>

                    <div className="p-3 bg-white/10 rounded-xl text-xs border border-white/10">
                      <span className="text-blue-200">Hold card or phone near top NFC antenna</span>
                    </div>
                  </div>

                  <div className="text-center text-[10px] text-blue-300/70 pb-1">
                    EMVCo &amp; PCI-CPoC Compliant SoftPOS
                  </div>

                  {/* Android Gesture Bar */}
                  <div className="flex justify-center pt-1">
                    <div className="w-20 h-1 rounded-full bg-white/60" />
                  </div>
                </div>
              </div>

              {/* Dark Sleek Contactless Payment Card Overlap */}
              <div className="absolute -right-4 sm:-right-8 top-16 z-20 w-44 sm:w-52 h-28 sm:h-32 rounded-xl p-3.5 text-white shadow-2xl rotate-12 bg-gradient-to-tr from-slate-900 via-[#0B3B6F] to-slate-800 border border-white/20">
                <div className="flex justify-between items-start">
                  <div className="w-7 h-5 bg-gradient-to-r from-amber-300 to-amber-500 rounded-xs" />
                  <ContactlessWavesIcon className="w-5 h-5 text-white/80" />
                </div>
                <div className="mt-4 font-mono text-[10px] text-slate-300 tracking-wider">•••• 4128</div>
                <div className="mt-2 flex justify-between items-center text-[9px] text-slate-400">
                  <span>TAP TO PAY</span>
                  <div className="flex -space-x-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
