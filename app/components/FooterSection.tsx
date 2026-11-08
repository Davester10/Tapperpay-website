"use client";

import { TapperLogo, TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from "./Icons";

export function FooterSection() {
  return (
    <footer className="bg-[#FF6A2C] text-white text-xs sm:text-sm pt-16 pb-12 border-t border-orange-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: 4 Columns + Socials */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-white/20">

          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <TapperLogo className="w-9 h-9 shadow-md bg-white rounded-xl" variant="white" />
              <span className="text-2xl font-black text-white tracking-tight">TapperPay</span>
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
              Tap. Pay. Grow.
            </div>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              Empowering merchants, entrepreneurs, and everyday shoppers with instant contactless SoftPOS mobile checkout. Turn every smartphone into a certified payment terminal.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <a href="#features" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Features</a>
              </li>
              <li>
                <a href="#pricing" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Pricing</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">How It Works</a>
              </li>
              <li>
                <a href="#faqs" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <a href="#" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Careers</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Contact</a>
              </li>
            </ul>
          </div>

          {/* Support & Legal + Socials */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider">Support & Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <a href="#" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Help Centre</a>
              </li>
              <li>
                <a href="#faqs" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#0B3B6F] transition-colors duration-200 inline-block">Terms of Service</a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-3">
              <span className="block text-[11px] font-extrabold text-white/90 uppercase tracking-wider mb-2">Follow Us</span>
              <div className="flex items-center gap-2.5">
                <a href="#" aria-label="Twitter" className="p-2.5 rounded-xl bg-white/20 hover:bg-[#0B3B6F] text-white hover:text-white transition-all duration-200 shadow-xs">
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="p-2.5 rounded-xl bg-white/20 hover:bg-[#0B3B6F] text-white hover:text-white transition-all duration-200 shadow-xs">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="p-2.5 rounded-xl bg-white/20 hover:bg-[#0B3B6F] text-white hover:text-white transition-all duration-200 shadow-xs">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="#" aria-label="YouTube" className="p-2.5 rounded-xl bg-white/20 hover:bg-[#0B3B6F] text-white hover:text-white transition-all duration-200 shadow-xs">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/85">
          <p>© 2026 TapperPay Technologies Limited. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-white/90">
            <span>Built for a simpler, smarter tomorrow.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
