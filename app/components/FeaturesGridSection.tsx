"use client";

import React from "react";
import {
  Nfc,
  Receipt,
  RotateCcw,
  Wallet,
  TrendingUp,
  Bell,
  ShieldCheck,
  Headphones,
  CreditCard,
  Send,
  Sparkles,
  Smartphone,
  Lock,
  PiggyBank,
} from "lucide-react";

interface FeaturesGridSectionProps {
  audience?: "merchant" | "customer";
}

export function FeaturesGridSection({ audience = "merchant" }: FeaturesGridSectionProps) {
  const merchantFeatures = [
    {
      title: "Contactless Tap Payments",
      description: "Accept Visa, Mastercard, Apple Pay & Google Pay with a simple tap on your phone.",
      icon: Nfc,
    },
    {
      title: "Real-time Sales Analytics",
      description: "Track hourly, daily, and monthly revenue performance with interactive dashboards.",
      icon: TrendingUp,
    },
    {
      title: "Dispute & Refund Manager",
      description: "Resolve customer payment queries and process instant refunds seamlessly.",
      icon: RotateCcw,
    },
    {
      title: "Automated Bank Settlements",
      description: "Receive funds directly into your verified bank account with zero delay.",
      icon: Wallet,
    },
    {
      title: "Digital SMS & WhatsApp Receipts",
      description: "Send branded electronic receipts directly to customer phones via SMS or WhatsApp.",
      icon: Receipt,
    },
    {
      title: "Multi-Terminal Cashier Roles",
      description: "Equip multiple staff phones with cashier logins while maintaining master owner control.",
      icon: Smartphone,
    },
    {
      title: "PCI-CPoC & EMVCo Certified",
      description: "Built with the highest international banking security and encrypted PIN on glass.",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Merchant Support",
      description: "Dedicated account managers and WhatsApp hotline available around the clock.",
      icon: Headphones,
    },
  ];

  const customerFeatures = [
    {
      title: "Contactless Tap on Phone",
      description: "No physical card needed. Hold your phone near any contactless terminal or SoftPOS phone to pay in seconds.",
      icon: Nfc,
    },
    {
      title: "Virtual & Physical Debit Cards",
      description: "Generate instant virtual dollar and naira debit cards for Netflix, Spotify, shopping, and in-store taps.",
      icon: CreditCard,
    },
    {
      title: "Instant Push Notifications",
      description: "Real-time alerts for every debit, credit, and tap transaction keeping your funds monitored and safe.",
      icon: Bell,
    },
    {
      title: "Biometric & Face Match Security",
      description: "Protect your wallet with fingerprint login, face match verification, and encrypted transaction PIN.",
      icon: Lock,
    },
  ];

  const features = audience === "merchant" ? merchantFeatures : customerFeatures;

  return (
    <section id="features" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B6F] tracking-tight">
            {audience === "merchant"
              ? "Everything You Need to Power Your Business"
              : "Smart Digital Banking, All in One Place"}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            {audience === "merchant"
              ? "TapperPay gives you enterprise-grade payment tools right on your Android smartphone."
              : "Discover a simpler, faster way to tap, pay with virtual cards, and keep your wallet secure."}
          </p>
        </div>

        {/* Card Grid: Symmetrical 4-Card layout for Consumer, 8-Card for Merchant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/70 hover:border-blue-200 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group flex items-start gap-4"
              >
                {/* Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:bg-[#FF6A2C]/10 group-hover:text-[#FF6A2C] transition-colors duration-200">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0B3B6F] transition-colors leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-normal font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
