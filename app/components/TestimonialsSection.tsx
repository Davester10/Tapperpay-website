"use client";

import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Tunde Adeyemi",
      role: "Retail Store Owner",
      location: "Lagos, Nigeria",
      quote:
        "TapperPay has made it so easy to accept payments at my store. The setup was quick, and it works perfectly!",
      initials: "TA",
      avatarBg: "bg-blue-600",
      rating: 5,
    },
    {
      name: "Chioma Okafor",
      role: "Restaurant Owner",
      location: "Abuja, Nigeria",
      quote:
        "I love how simple and secure TapperPay is. It's helped me serve my customers better and grow my business.",
      initials: "CO",
      avatarBg: "bg-[#FF6A2C]",
      rating: 5,
    },
    {
      name: "Daniel Ekene",
      role: "Freelancer",
      location: "Port Harcourt, Nigeria",
      quote:
        "The dashboard gives me all the information I need, and the support team is always helpful.",
      initials: "DE",
      avatarBg: "bg-emerald-600",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-slate-50/70 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B6F] tracking-tight">
            Trusted by Businesses Like Yours
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            Join thousands of merchants who are already using TapperPay to accept payments and grow their business.
          </p>
        </div>

        {/* 3-Card Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`w-11 h-11 rounded-full ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-sm shrink-0`}
                >
                  {item.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 fill-blue-50" />
                  </div>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
