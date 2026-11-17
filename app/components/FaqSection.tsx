"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqSectionProps {
  audience?: "merchant" | "customer";
}

export function FaqSection({ audience = "merchant" }: FaqSectionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // Default first question open

  const toggleItem = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const merchantFaqs = [
    {
      q: "What is TapperPay SoftPOS?",
      a: "TapperPay is a certified SoftPOS (Software Point of Sale) mobile app that turns your standard NFC-enabled smartphone into a fully functional contactless payment terminal. It allows merchants to accept debit cards, credit cards, and digital wallets with a simple tap on their phone.",
    },
    {
      q: "How long does verification take?",
      a: "Most individual merchants and registered businesses complete verification within 5 to 15 minutes. Once you submit your phone number, valid ID, and business details, our automated KYC engine reviews and approves your account immediately.",
    },
    {
      q: "How fast are merchant settlements?",
      a: "Funds are settled directly into your verified commercial bank account. We offer automated instant settlements and daily next-day payouts with full real-time reconciliation.",
    },
    {
      q: "Can I accept refunds?",
      a: "Yes. TapperPay includes full refund and reversal management directly from your mobile dashboard. You can issue full or partial refunds directly back to the customer's card with instant reconciliation.",
    },
    {
      q: "Do I need a corporate business account?",
      a: "Both registered businesses (SMEs, corporations) and individual sole proprietors or freelancers can use TapperPay. Funds are automatically settled to your existing bank account.",
    },
    {
      q: "How much does it cost?",
      a: "There are zero hardware rental fees and no monthly terminal maintenance costs. TapperPay operates on a transparent, low-rate transaction fee model with no hidden charges or surprise deductions.",
    },
    {
      q: "Which devices are compatible?",
      a: "TapperPay SoftPOS is compatible with Android devices running OS 7.0+ with built-in NFC. Over 95% of modern Android smartphones are fully supported.",
    },
    {
      q: "Is it safe and certified?",
      a: "Absolutely. TapperPay is PCI-CPoC and EMVCo certified. Every transaction utilizes end-to-end tokenization and cryptographic keys stored within your smartphone's secure hardware enclave. Card numbers are never stored on your phone.",
    },
  ];

  const customerFaqs = [
    {
      q: "Where can I tap to pay with TapperPay?",
      a: "Anywhere contactless Mastercard, Visa, or Verve terminals and TapperPay SoftPOS merchants are accepted across Nigeria, including fuel stations, supermarkets, restaurants, and retail shops.",
    },
    {
      q: "What happens if I lose my phone?",
      a: "Your funds stay safe. Every tap requires biometric (fingerprint/face) or secret PIN authorization, and you can immediately freeze your account from another device or via our 24/7 emergency support line.",
    },
    {
      q: "Are there daily tap-to-pay limits?",
      a: "Yes, customizable daily contactless limits protect your account, with tier-based limits aligned with CBN KYC guidelines to ensure complete financial safety.",
    },
    {
      q: "Does Tap to Pay work on both Android and iPhone?",
      a: "NFC Tap-to-Pay in physical stores works on NFC-enabled Android devices; iPhone users enjoy QR code payments, virtual and physical debit cards, and seamless digital wallet management.",
    },
    {
      q: "How much does TapperPay cost?",
      a: "Zero account maintenance fees and zero hidden charges on in-store tap payments. You only pay standard carrier data rates.",
    },
  ];

  const faqs = audience === "merchant" ? merchantFaqs : customerFaqs;

  return (
    <section id="faqs" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B6F] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            {audience === "merchant"
              ? "Find answers to common merchant questions about accepting payments and managing your SoftPOS."
              : "Everything you need to know about everyday tap payments, virtual cards, and secure mobile checkout."}
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 max-w-5xl mx-auto">
          {faqs.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="border-b border-slate-200 py-4 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#0B3B6F] transition-colors">
                    {item.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-[#FF6A2C] text-white rotate-180" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-6 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
