"use client";

import React from "react";
import { Zap, Shield, Smartphone, BarChart3, CreditCard, ArrowRight, Wallet, Sparkles } from "lucide-react";

interface ValuePropSectionProps {
  audience?: "merchant" | "customer";
}

export function ValuePropSection({ audience = "merchant" }: ValuePropSectionProps) {
  const merchantValues = [
    {
      title: "Fast & Easy Setup",
      description: "Download the app, verify your business in 5 minutes, and start accepting taps right away.",
      icon: Zap,
      iconColor: "text-[#FF6A2C]",
      iconBg: "bg-[#FFF0EB]",
      borderHover: "hover:border-[#FF6A2C]/30",
    },
    {
      title: "Zero Hardware Costs",
      description: "No expensive POS machine purchases, paper roll refills, or monthly hardware maintenance fees.",
      icon: Smartphone,
      iconColor: "text-[#0B3B6F]",
      iconBg: "bg-blue-50",
      borderHover: "hover:border-[#0B3B6F]/30",
    },
    {
      title: "Bank-Grade Security",
      description: "Protected by EMVCo L3 certification and CBN regulatory standards with tokenized NFC protection.",
      icon: Shield,
      iconColor: "text-[#0066FF]",
      iconBg: "bg-indigo-50",
      borderHover: "hover:border-blue-300",
    },
    {
      title: "Track & Settle Instantly",
      description: "View real-time daily transactions, automate receipts via WhatsApp, and settle funds with ease.",
      icon: BarChart3,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      borderHover: "hover:border-emerald-300",
    },
  ];

  const customerValues = [
    {
      title: "Tap to Pay Anywhere",
      description: "Hold your Android phone near any contactless card terminal or merchant phone to pay in seconds.",
      icon: Zap,
      iconColor: "text-[#FF6A2C]",
      iconBg: "bg-[#FFF0EB]",
      borderHover: "hover:border-[#FF6A2C]/30",
    },
    {
      title: "Free Peer-to-Peer Transfers",
      description: "Send and receive money instantly from any Nigerian bank account with zero transaction deductions.",
      icon: Wallet,
      iconColor: "text-[#0B3B6F]",
      iconBg: "bg-blue-50",
      borderHover: "hover:border-[#0B3B6F]/30",
    },
    {
      title: "Virtual & Physical Cards",
      description: "Generate instant virtual debit cards for global subscriptions, or request a physical NFC card.",
      icon: CreditCard,
      iconColor: "text-[#0066FF]",
      iconBg: "bg-indigo-50",
      borderHover: "hover:border-blue-300",
    },
    {
      title: "High-Yield Savings",
      description: "Put your money to work with automated daily interest savings plans earning up to 14% p.a.",
      icon: Sparkles,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      borderHover: "hover:border-emerald-300",
    },
  ];

  const values = audience === "merchant" ? merchantValues : customerValues;

  return (
    <section className="py-20 bg-slate-50/60 relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B6F] tracking-tight">
            {audience === "merchant" ? "Why Merchants Choose TapperPay" : "Why Everyday Users Love TapperPay"}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            {audience === "merchant"
              ? "A smarter, faster, and more convenient way to accept payments. Built for modern businesses, designed for your growth."
              : "Experience modern digital banking designed for speed, security, and everyday convenience."}
          </p>
        </div>

        {/* 4-Column Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-7 border border-slate-200/70 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between ${item.borderHover}`}
              >
                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0B3B6F] tracking-tight mb-2 group-hover:text-[#FF6A2C] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
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
