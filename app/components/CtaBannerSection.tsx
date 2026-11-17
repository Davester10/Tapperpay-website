"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface CtaBannerSectionProps {
  audience?: "merchant" | "customer";
  onOpenGetStarted: () => void;
}

export function CtaBannerSection({ audience = "merchant", onOpenGetStarted }: CtaBannerSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/80 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative overflow-hidden">
          {/* Left Content */}
          <div className="max-w-2xl space-y-2.5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#0B3B6F] leading-tight">
              {audience === "merchant"
                ? "Ready to Accept Contactless Payments on Your Phone?"
                : "Ready to Experience Cashless, Instant Payments?"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              {audience === "merchant"
                ? "Join TapperPay today and turn your smartphone into an instant payment terminal in under 5 minutes."
                : "Open your free TapperPay account today and pay anywhere with a single contactless tap."}
            </p>
          </div>

          {/* Right Action Button (Remita-style Vibrant Orange Pill) */}
          <div className="w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenGetStarted}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#FF6A2C] hover:bg-[#E5581E] active:scale-98 text-white font-bold text-sm sm:text-base shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[48px]"
            >
              <span>{audience === "merchant" ? "Get Started Free" : "Open Free Account"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
