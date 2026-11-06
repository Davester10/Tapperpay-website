"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

export function FaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // Default first question open

  const toggleItem = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const faqs = [
    {
      q: "What is TapperPay?",
      a: "TapperPay is a certified SoftPOS (Software Point of Sale) mobile app that turns your standard NFC-enabled smartphone into a fully functional contactless payment terminal. It allows merchants to accept debit cards, credit cards, and digital wallets with a simple tap on their phone.",
    },
    {
      q: "How long does verification take?",
      a: "Most individual merchants and registered businesses complete verification within 5 to 15 minutes. Once you submit your phone number, valid ID, and business details, our automated KYC engine reviews and approves your account immediately.",
    },
    {
      q: "How much does it cost?",
      a: "There are zero hardware rental fees and no monthly terminal maintenance costs. TapperPay operates on a transparent, low-rate transaction fee model with no hidden charges or surprise deductions.",
    },
    {
      q: "Can I accept refunds?",
      a: "Yes. TapperPay includes full refund and reversal management directly from your mobile dashboard. You can issue full or partial refunds directly back to the customer's card with instant reconciliation.",
    },
    {
      q: "Which devices are compatible?",
      a: "TapperPay is compatible with Android devices running OS 7.0+ with built-in NFC and Apple iOS devices running iOS 13.0+ with Tap to Pay support. Over 95% of smartphones released in the last 6 years are fully supported.",
    },
    {
      q: "Do I need a business account?",
      a: "Both registered businesses (SMEs, corporations) and individual sole proprietors or freelancers can use TapperPay. Funds are automatically settled to your existing bank account.",
    },
    {
      q: "Is it safe and secure?",
      a: "Absolutely. TapperPay is PCI-CPoC and EMVCo Level 2 certified. Every transaction utilizes end-to-end tokenization and cryptographic keys stored within your smartphone's secure hardware enclave. Card numbers are never stored on your phone.",
    },
    {
      q: "How do I get support?",
      a: "Our customer success team is available 24/7 via in-app live chat, WhatsApp support, phone, and email. You can also access our extensive knowledge base and developer documentation at any time.",
    },
  ];

  return (
    <section id="faqs" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B6F] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            Find answers to common questions about TapperPay.
          </p>
        </div>

        {/* 2-Column Accordion Layout */}
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
