"use client";

import React, { useState, useRef } from "react";
import { Check, ArrowRight, Zap, ShieldCheck, CreditCard, Sparkles, Building2, Phone, X, CheckCircle2 } from "lucide-react";
import { SignInModal } from "./SignInModal";

interface PricingSectionProps {
  audience?: "merchant" | "customer";
  onOpenGetStarted: () => void;
}

export function PricingSection({ audience = "merchant", onOpenGetStarted }: PricingSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<"starter" | "enterprise">("enterprise");
  const [showSpecs, setShowSpecs] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState<boolean>(false);
  const [enterpriseSubmitted, setEnterpriseSubmitted] = useState<boolean>(false);
  const [fleetSize, setFleetSize] = useState<string>("5-20 Terminals");
  const [businessName, setBusinessName] = useState<string>("");
  const pricingScrollRef = useRef<HTMLDivElement>(null);

  const handleMobilePricingScroll = () => {
    if (!pricingScrollRef.current) return;
    const scrollLeft = pricingScrollRef.current.scrollLeft;
    const threshold = pricingScrollRef.current.clientWidth * 0.4;
    if (scrollLeft > threshold) {
      setSelectedPlan("enterprise");
    } else {
      setSelectedPlan("starter");
    }
  };

  const scrollToPlan = (plan: "starter" | "enterprise") => {
    setSelectedPlan(plan);
    if (!pricingScrollRef.current) return;
    const targetLeft = plan === "starter" ? 0 : 330;
    pricingScrollRef.current.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

  const handleEnterpriseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnterpriseSubmitted(true);
  };

  const handleRequestQuoteClick = () => {
    if (!isAuthenticated) {
      // Must pass through the login page/modal before bringing up the form to request for it
      setShowAuthModal(true);
    } else {
      setEnterpriseModalOpen(true);
    }
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 text-[#FF6A2C] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Simple &amp; Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B6F] tracking-tight">
            {audience === "merchant"
              ? "Transparent Pricing, Zero Hardware Fees"
              : "Free Banking with Zero Hidden Deductions"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {audience === "merchant"
              ? "No expensive hardware rentals, no setup charges, no hidden maintenance deductions. Built for modern businesses."
              : "No card maintenance fees, no account opening charges. Enjoy seamless peer transfers and contactless shopping."}
          </p>
        </div>

        {/* Mobile Plan Selector & Swipe Hint */}
        <div className="flex md:hidden flex-col items-center gap-2 mb-6">
          <div className="flex items-center p-1 rounded-full bg-slate-100 border border-slate-200 shadow-2xs">
            <button
              type="button"
              onClick={() => scrollToPlan("starter")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${selectedPlan === "starter"
                  ? "bg-[#0B3B6F] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              {audience === "merchant" ? "Starter Merchant" : "Everyday Personal"}
            </button>
            <button
              type="button"
              onClick={() => scrollToPlan("enterprise")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${selectedPlan === "enterprise"
                  ? "bg-[#FF6A2C] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              {audience === "merchant" ? "Custom Enterprise" : "Platinum Premium"}
            </button>
          </div>
          <span className="text-[11px] font-semibold text-slate-400">
            ← Swipe horizontally to view other offers →
          </span>
        </div>

        {/* Pricing Cards (Horizontal Scroll on Mobile, 2-Column Grid on Desktop) */}
        <div
          ref={pricingScrollRef}
          onScroll={handleMobilePricingScroll}
          className="flex md:grid md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto items-stretch overflow-x-auto md:overflow-x-visible pb-8 pt-4 px-4 -mx-4 sm:mx-auto sm:px-0 snap-x snap-mandatory scrollbar-none"
        >

          {audience === "merchant" ? (
            <>
              {/* Card 1: Standard Pay-As-You-Go (Interactive) */}
              <div
                onClick={() => setSelectedPlan("starter")}
                className={`w-[86vw] max-w-[340px] sm:w-[380px] md:w-auto shrink-0 snap-center rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 cursor-pointer ${selectedPlan === "starter"
                    ? "border-2 border-[#0B3B6F] bg-white shadow-2xl ring-4 ring-[#0B3B6F]/10 scale-[1.01] -translate-y-1"
                    : "border border-slate-200 bg-white hover:border-[#0B3B6F]/40 hover:shadow-lg opacity-90 hover:opacity-100"
                  }`}
              >
                {/* Blue Badge: MOST POPULAR */}
                <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-[#0B3B6F] text-white text-xs font-bold uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>MOST POPULAR</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B3B6F]">Starter Merchant</h3>
                      <p className="text-xs text-slate-500 mt-0.5">For retailers, cafes, kiosks &amp; sole traders</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3B6F] flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#0B3B6F]" />
                    </div>
                  </div>

                  <div className="my-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black text-[#0B3B6F]">1.2%</span>
                      <span className="text-xs text-slate-500 font-medium">per transaction (capped at ₦1,000)</span>
                    </div>
                    <div className="text-xs font-semibold text-emerald-600 mt-1">₦0 Setup • ₦0 Monthly Hardware Rental</div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Unlimited contactless taps on Android phone</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Instant next-day bank settlement</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Visa, Mastercard, Apple Pay, Google Pay</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Digital SMS and WhatsApp receipts</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Real-time mobile merchant analytics</span>
                    </li>
                  </ul>

                  {/* Expandable Spec Details */}
                  {showSpecs && (
                    <div className="pt-3 pb-4 border-t border-slate-100 text-xs text-slate-600 space-y-2 animate-in fade-in duration-200">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Cashier Profiles:</span>
                        <span className="font-semibold text-slate-800">1 Owner Login</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Daily Limit:</span>
                        <span className="font-semibold text-slate-800">Up to ₦5,000,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Receipt Paper Cost:</span>
                        <span className="font-semibold text-emerald-600">₦0 (100% Digital)</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  {/* Blue Get Started button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenGetStarted();
                    }}
                    className="w-full py-3.5 sm:py-4 rounded-full bg-[#0B3B6F] hover:bg-[#124b88] active:scale-98 text-white font-semibold text-sm transition-all shadow-md shadow-[#0B3B6F]/20 flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px]"
                  >
                    <span>Get Started Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card 2: Enterprise & High Volume (Interactive) */}
              <div
                onClick={() => setSelectedPlan("enterprise")}
                className={`w-[86vw] max-w-[340px] sm:w-[380px] md:w-auto shrink-0 snap-center rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 cursor-pointer ${selectedPlan === "enterprise"
                    ? "border-2 border-[#FF6A2C] bg-white shadow-2xl ring-4 ring-[#FF6A2C]/10 scale-[1.01] -translate-y-1"
                    : "border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#FF6A2C]/50 hover:shadow-lg opacity-90 hover:opacity-100"
                  }`}
              >
                {/* Orange Badge: SELECTED PLAN */}
                <div className={`absolute -top-3.5 left-8 px-3.5 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-xs flex items-center gap-1.5 ${selectedPlan === "enterprise" ? "bg-[#FF6A2C]" : "bg-slate-700"
                  }`}>
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>SELECTED PLAN</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Custom Enterprise</h3>
                      <p className="text-xs text-slate-500 mt-0.5">For multi-branch retail chains, supermarkets &amp; delivery fleets</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6A2C] flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-[#FF6A2C]" />
                    </div>
                  </div>

                  <div className="my-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900">Custom</span>
                      <span className="text-xs text-slate-500 font-medium">tailored volume interchange rates</span>
                    </div>
                    <div className="text-xs font-semibold text-[#FF6A2C] mt-1">Dedicated Account Manager &amp; API SDK</div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Volume-based interchange discount rates</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Multi-terminal cashier management &amp; role permissions</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Custom ERP, POS &amp; Inventory API integration</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Same-day instant multi-account settlement</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>24/7 dedicated priority SLA &amp; engineering support</span>
                    </li>
                  </ul>

                  {/* Expandable Spec Details */}
                  {showSpecs && (
                    <div className="pt-3 pb-4 border-t border-slate-100 text-xs text-slate-600 space-y-2 animate-in fade-in duration-200">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Cashier Profiles:</span>
                        <span className="font-semibold text-slate-800">Unlimited Multi-User Roles</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Daily Limit:</span>
                        <span className="font-semibold text-slate-800">Custom High-Volume Uncapped</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Onboarding SLA:</span>
                        <span className="font-semibold text-blue-600">Dedicated Technical Manager</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  {/* Orange Request Custom Quote button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRequestQuoteClick();
                    }}
                    className="w-full py-3.5 sm:py-4 rounded-full bg-[#FF6A2C] hover:bg-[#e85b1f] active:scale-98 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px] shadow-md shadow-orange-500/20"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Personal Card 1 */}
              <div
                onClick={() => setSelectedPlan("starter")}
                className={`w-[86vw] max-w-[340px] sm:w-[380px] md:w-auto shrink-0 snap-center rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 cursor-pointer ${selectedPlan === "starter"
                    ? "border-2 border-[#0B3B6F] bg-white shadow-2xl ring-4 ring-[#0B3B6F]/10 scale-[1.01]"
                    : "border border-slate-200 bg-white hover:shadow-lg"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B3B6F]">Everyday Personal</h3>
                      <p className="text-xs text-slate-500 mt-0.5">For students, shoppers &amp; individuals</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3B6F] flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-[#FF6A2C]" />
                    </div>
                  </div>

                  <div className="my-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black text-[#0B3B6F]">₦0</span>
                      <span className="text-xs text-slate-500 font-medium">/ month forever</span>
                    </div>
                    <div className="text-xs font-semibold text-emerald-600 mt-1">₦0 Card Maintenance • ₦0 Transfer Fees</div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-slate-600 mb-8">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Instant Tap to Pay on your smartphone</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Free Virtual Mastercard &amp; Verve card</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Zero-fee instant peer-to-peer transfers</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={onOpenGetStarted}
                  className="w-full py-3.5 sm:py-4 rounded-full bg-[#0B3B6F] hover:bg-[#124b88] active:scale-98 text-white font-semibold text-sm transition-all shadow-md shadow-[#0B3B6F]/20 flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px]"
                >
                  <span>Open Free Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Personal Card 2 */}
              <div
                onClick={() => setSelectedPlan("enterprise")}
                className={`w-[86vw] max-w-[340px] sm:w-[380px] md:w-auto shrink-0 snap-center rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 cursor-pointer ${selectedPlan === "enterprise"
                    ? "border-2 border-[#0B3B6F] bg-white shadow-2xl ring-4 ring-[#0B3B6F]/10 scale-[1.01]"
                    : "border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-lg"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Platinum Premium</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Physical metal card with elite contactless rewards</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#0066FF]" />
                    </div>
                  </div>

                  <div className="my-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-black text-slate-900">₦2,500</span>
                      <span className="text-xs text-slate-500 font-medium">/ month</span>
                    </div>
                    <div className="text-xs font-semibold text-blue-600 mt-1">Laser-Engraved Metal Contactless Card</div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-slate-600 mb-8">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Heavyweight stainless steel contactless card</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>2% cashback on all store contactless taps</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={onOpenGetStarted}
                  className="w-full py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-100 active:scale-98 text-[#0B3B6F] font-semibold text-sm border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px]"
                >
                  <span>Get Platinum</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

        </div>

        {/* Interactive Specs Toggle Button */}
        {audience === "merchant" && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setShowSpecs(!showSpecs)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0066FF] hover:text-[#0052CC] bg-blue-50/70 hover:bg-blue-100/70 px-5 py-2.5 rounded-full transition-all cursor-pointer"
            >
              <span>{showSpecs ? "Hide Technical Specifications" : "Compare Full Technical Specifications"}</span>
            </button>
          </div>
        )}

        {/* Interactive Custom Enterprise Quote Modal */}
        {enterpriseModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-7 border border-slate-100 overflow-hidden">
              <button
                type="button"
                onClick={() => {
                  setEnterpriseModalOpen(false);
                  setEnterpriseSubmitted(false);
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {enterpriseSubmitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B3B6F]">Enterprise Inquiry Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Thank you. A dedicated TapperPay enterprise account engineer will contact <span className="font-semibold text-slate-800">{businessName || "your business"}</span> within 2 hours with custom volume pricing.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setEnterpriseModalOpen(false);
                      setEnterpriseSubmitted(false);
                    }}
                    className="w-full py-3 rounded-xl bg-[#0B3B6F] text-white font-bold text-sm cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Custom Enterprise Quote</h3>
                      <p className="text-xs text-slate-500">Volume rates &amp; custom SoftPOS API integration</p>
                    </div>
                  </div>

                  {/* Authenticated Verification Badge */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Authenticated Merchant Session • Verified Account</span>
                  </div>

                  <form onSubmit={handleEnterpriseSubmit} className="space-y-3.5 text-left">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Chain Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mega Stores Nigeria Ltd"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        placeholder="procurement@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 801 234 5678"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Fleet Size / Stores</label>
                      <select
                        value={fleetSize}
                        onChange={(e) => setFleetSize(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF]"
                      >
                        <option value="1-5 Terminals">1 - 5 Phones / Terminals</option>
                        <option value="5-20 Terminals">5 - 20 Phones / Branches</option>
                        <option value="20-100 Terminals">20 - 100 Multi-Store Fleet</option>
                        <option value="100+ Terminals">100+ Enterprise Chain / Nationwide</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 mt-2 rounded-xl bg-[#0066FF] hover:bg-[#0050CC] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                    >
                      Submit Enterprise Inquiry
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pass-Through Authentication Modal for Custom Quote */}
        <SignInModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onSuccess={() => {
            setIsAuthenticated(true);
            setShowAuthModal(false);
            setEnterpriseModalOpen(true);
          }}
          customTitle="Log In to Request Custom Quote"
          customDescription="Please authenticate your merchant account before requesting an enterprise custom quote."
        />

      </div>
    </section>
  );
}
