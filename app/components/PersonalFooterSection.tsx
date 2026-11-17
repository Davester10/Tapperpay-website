"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TapperLogo, TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon, AppleLogo } from "./Icons";
import { ShieldCheck, PhoneCall, Mail } from "lucide-react";

export function PersonalFooterSection() {
  return (
    <footer className="bg-white text-slate-800 text-xs sm:text-sm pt-16 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand + Links + Scannable QR Code Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-100">

          {/* Col 1: Brand & Regulatory (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/personal" className="inline-flex items-center gap-2.5 group">
              <TapperLogo className="w-9 h-9 shadow-xs shrink-0" />
              <span className="text-2xl font-black tracking-tight">
                <span className="text-[#0B3B6F]">Tapper</span><span className="text-[#FF6A2C]">Pay</span>
              </span>
            </Link>

            {/* Clean Standalone Typography Tagline (No pill/box or border) */}
            <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0B3B6F]">
              Tap. Pay. Live Cashless.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Experience the future of contactless payments. Tap your smartphone to pay at any contactless terminal, manage secure virtual debit cards, and enjoy frictionless everyday payments with complete peace of mind.
            </p>

            {/* Regulatory Assurance Badge */}
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-600 font-medium max-w-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Banking services provided in partnership with CBN-licensed and NDIC-insured financial institutions.</span>
            </div>
          </div>

          {/* Col 2: Services Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[#FF6A2C] text-xs font-black uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#features" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">
                  Services Overview
                </a>
              </li>
              <li>
                <a href="#features" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">
                  Contactless Tap to Pay
                </a>
              </li>
              <li>
                <a href="#features" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">
                  Virtual &amp; Physical Cards
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Security & Legal Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[#FF6A2C] text-xs font-black uppercase tracking-wider">
              Security &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">
                  Security Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">
                  NDIC Insurance Info
                </a>
              </li>
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">
                  Fraud Protection
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Get the App with Large Scannable QR Code (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-[#FF6A2C] text-xs font-black uppercase tracking-wider">
              Get the App
            </h4>

            {/* High-Contrast Large Scannable QR Code Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-4">
              {/* 148px x 148px High-Contrast QR Code with Quiet Zone */}
              <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-2xs shrink-0 flex items-center justify-center">
                <Image
                  src="/qr-tapperpay.svg"
                  alt="Scan to download TapperPay"
                  width={140}
                  height={140}
                  className="w-[140px] h-[140px] block"
                  priority
                />
              </div>

              {/* QR Details + Download Badges */}
              <div className="flex-1 flex flex-col justify-between self-stretch text-center sm:text-left space-y-2.5">
                <div>
                  <p className="text-xs font-black text-slate-900 leading-tight">
                    Scan to download TapperPay
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Point your phone camera to download instantly for iOS &amp; Android.
                  </p>
                </div>

                {/* Compact Store Badges */}
                <div className="flex flex-col gap-1.5 w-full">
                  {/* App Store */}
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-[#0B3B6F] text-white transition-all cursor-pointer group"
                  >
                    <AppleLogo className="w-4 h-4 text-white shrink-0 group-hover:scale-105 transition-transform" />
                    <div className="text-left">
                      <span className="block text-[7px] uppercase tracking-wider text-slate-300 leading-none">Download on</span>
                      <span className="block text-[11px] font-bold leading-tight text-white">App Store</span>
                    </div>
                  </a>

                  {/* Google Play */}
                  <a
                    href="https://play.google.com/store/apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-[#0B3B6F] text-white transition-all cursor-pointer group"
                  >
                    <svg className="w-4 h-4 shrink-0 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186c-.365-.333-.61-.83-.61-1.42V3.234c0-.59.245-1.087.61-1.42z" />
                      <path fill="#FBBC05" d="M17.18 8.613L13.792 12l3.388 3.387 3.824-2.185c.677-.387.677-1.017 0-1.404L17.18 8.613z" />
                      <path fill="#EA4335" d="M3.609 1.814L17.18 8.613 13.792 12 3.609 1.814z" />
                      <path fill="#34A853" d="M13.792 12l3.388 3.387-13.571 6.799L13.792 12z" />
                    </svg>
                    <div className="text-left">
                      <span className="block text-[7px] uppercase tracking-wider text-slate-300 leading-none">Get it on</span>
                      <span className="block text-[11px] font-bold leading-tight text-white">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Support Contact (Orange text, Blue hover) */}
            <div className="pt-1 text-xs flex flex-wrap items-center gap-x-4 gap-y-1.5 font-semibold">
              <a
                href="tel:+23418888277"
                className="flex items-center gap-1.5 text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                <span>0700-TAPPER-PAY</span>
              </a>
              <a
                href="mailto:support@techlabx.org"
                className="flex items-center gap-1.5 text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="underline underline-offset-2">support@techlabx.org</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Row: Socials & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            <p>© 2026 Tapper Pay, a product of Tech Lab X Ltd. All rights reserved.</p>
            <p className="text-[11px] text-slate-400 mt-1">
              Banking services provided in partnership with CBN-licensed and NDIC-insured financial institutions.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#FF6A2C] mr-1 hidden sm:inline">Follow:</span>
            <a href="#" aria-label="Twitter" className="p-2 rounded-xl bg-orange-50 hover:bg-blue-50 text-[#FF6A2C] hover:text-[#0B3B6F] transition-all duration-200 border border-orange-100 shadow-2xs">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-xl bg-orange-50 hover:bg-blue-50 text-[#FF6A2C] hover:text-[#0B3B6F] transition-all duration-200 border border-orange-100 shadow-2xs">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-xl bg-orange-50 hover:bg-blue-50 text-[#FF6A2C] hover:text-[#0B3B6F] transition-all duration-200 border border-orange-100 shadow-2xs">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-xl bg-orange-50 hover:bg-blue-50 text-[#FF6A2C] hover:text-[#0B3B6F] transition-all duration-200 border border-orange-100 shadow-2xs">
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
