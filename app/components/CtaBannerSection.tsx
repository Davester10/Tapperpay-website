"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaBannerSectionProps {
  audience?: "merchant" | "customer";
  onOpenGetStarted: () => void;
}

export function CtaBannerSection({ audience = "merchant", onOpenGetStarted }: CtaBannerSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-r from-[#0B3B6F] via-[#0052CC] to-[#0B3B6F] text-white">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF6A2C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          {/* Left Content */}
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {audience === "merchant"
                ? "Ready to Accept Contactless Payments on Your Phone?"
                : "Ready to Experience Cashless, Instant Payments?"}
            </h2>
            <p className="text-blue-100/90 text-sm sm:text-base font-normal">
              {audience === "merchant"
                ? "Join TapperPay today and turn your smartphone into an instant payment terminal in under 5 minutes."
                : "Open your free TapperPay account today and pay anywhere with a single contactless tap."}
            </p>
          </div>

          {/* Right Action Button (Responsive on phone) */}
          <div className="w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenGetStarted}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 active:scale-98 text-[#0B3B6F] hover:text-[#FF6A2C] font-bold text-sm sm:text-base shadow-xl shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[48px]"
            >
              <span>{audience === "merchant" ? "Get Started as Merchant" : "Open Free Account"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
