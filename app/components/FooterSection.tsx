"use client";

import { TapperLogo, TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from "./Icons";
import { PhoneCall, Mail } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-white text-slate-800 text-xs sm:text-sm pt-16 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: 4 Columns + Socials */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-100">

          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <TapperLogo className="w-9 h-9 shadow-xs shrink-0" />
              <span className="text-2xl font-black tracking-tight">
                <span className="text-[#0B3B6F]">Tapper</span><span className="text-[#FF6A2C]">Pay</span>
              </span>
            </div>
            
            {/* Clean Standalone Typography Tagline (No pill/box or border) */}
            <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0B3B6F]">
              Tap. Pay. Grow.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Empowering merchants, entrepreneurs, and everyday shoppers with instant contactless SoftPOS mobile checkout. Turn every smartphone into a certified payment terminal.
            </p>

            {/* Merchant Contact: Phone Number & Clickable Auto-Mail Address (Orange text, Blue hover) */}
            <div className="pt-2 space-y-2 text-xs sm:text-sm font-semibold">
              <a
                href="tel:+23418888277"
                className="inline-flex items-center gap-2 text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors group cursor-pointer"
                title="Call TapperPay Merchant Support"
              >
                <span className="p-1.5 rounded-lg bg-orange-50 group-hover:bg-blue-50 text-[#FF6A2C] group-hover:text-[#0B3B6F] transition-colors border border-orange-100">
                  <PhoneCall className="w-3.5 h-3.5" />
                </span>
                <span>0700-TAPPER-PAY (+234 1 888 8277)</span>
              </a>

              <div>
                <a
                  href="mailto:support@techlabx.org"
                  className="inline-flex items-center gap-2 text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors group cursor-pointer"
                  title="Send message to support@techlabx.org"
                >
                  <span className="p-1.5 rounded-lg bg-orange-50 group-hover:bg-blue-50 text-[#FF6A2C] group-hover:text-[#0B3B6F] transition-colors border border-orange-100">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span className="underline underline-offset-2">support@techlabx.org</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services Links (Renamed from Product) */}
          <div className="space-y-3">
            <h4 className="text-[#FF6A2C] text-xs font-black uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#features" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Services</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">How It Works</a>
              </li>
              <li>
                <a href="#faqs" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Company Links (Orange text, Blue hover) */}
          <div className="space-y-3">
            <h4 className="text-[#FF6A2C] text-xs font-black uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">About Us</a>
              </li>
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Blog</a>
              </li>
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Careers</a>
              </li>
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Contact</a>
              </li>
            </ul>
          </div>

          {/* Support & Legal + Socials */}
          <div className="space-y-3">
            <h4 className="text-[#FF6A2C] text-xs font-black uppercase tracking-wider">Support &amp; Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Help Centre</a>
              </li>
              <li>
                <a href="#faqs" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-[#FF6A2C] hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Terms of Service</a>
              </li>
            </ul>

            {/* Social Links (Orange default, Blue hover) */}
            <div className="pt-3">
              <span className="block text-[11px] font-black text-[#FF6A2C] uppercase tracking-wider mb-2">Follow Us</span>
              <div className="flex items-center gap-2.5">
                <a href="#" aria-label="Twitter" className="p-2.5 rounded-xl bg-orange-50 hover:bg-blue-50 text-[#FF6A2C] hover:text-[#0B3B6F] transition-all duration-200 border border-orange-100 shadow-2xs">
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="p-2.5 rounded-xl bg-orange-50 hover:bg-blue-50 text-[#FF6A2C] hover:text-[#0B3B6F] transition-all duration-200 border border-orange-100 shadow-2xs">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="p-2.5 rounded-xl bg-orange-50 hover:bg-blue-50 text-[#FF6A2C] hover:text-[#0B3B6F] transition-all duration-200 border border-orange-100 shadow-2xs">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="#" aria-label="YouTube" className="p-2.5 rounded-xl bg-orange-50 hover:bg-blue-50 text-[#FF6A2C] hover:text-[#0B3B6F] transition-all duration-200 border border-orange-100 shadow-2xs">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 Tapper Pay, a product of Tech Lab X Ltd. All rights reserved.</p>
          <p className="text-center sm:text-right text-slate-500 text-[11px] sm:text-xs">
            Banking services provided in partnership with CBN-licensed and NDIC-insured financial institutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
