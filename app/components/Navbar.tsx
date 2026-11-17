"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { TapperLogo } from "./Icons";
import { DownloadAppModal } from "./DownloadAppModal";
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  PhoneCall,
  ShieldCheck,
  HelpCircle,
  Smartphone,
  Zap,
  CreditCard,
  BarChart3,
  ArrowRight,
  QrCode,
  Send,
} from "lucide-react";

interface NavbarProps {
  currentPage?: "business" | "personal";
  onOpenSignIn?: () => void;
}

export function Navbar({
  currentPage = "business",
  onOpenSignIn,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"about" | "services" | null>(null);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  
  const headerRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle outside click / touch to close mobile menu and dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (menu: "about" | "services") => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const scrollToSection = (id: string) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay - closes menu when clicking outside */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-[90] lg:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Clean, Crisp White Header (Remita Style - No unnecessary color gradients or outlines) */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 bg-white/95 backdrop-blur-md ${
          isScrolled
            ? "shadow-sm border-b border-slate-100 py-3 sm:py-3.5"
            : "border-b border-slate-100/60 py-4 sm:py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Left: Brand Logo */}
            <div className="flex items-center shrink-0">
              <Link href={currentPage === "personal" ? "/personal" : "/"} className="flex items-center gap-2.5 group">
                {/* Official Tapper Logo Mark */}
                <TapperLogo className="w-8 h-8 sm:w-9 sm:h-9 shadow-xs shrink-0" />
                <div className="flex items-baseline">
                  <span className="text-xl sm:text-2xl font-black tracking-tight">
                    <span className="text-[#0B3B6F]">Tapper</span><span className="text-[#FF6A2C]">Pay</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Navigation Links with Remita-style Dropdowns (Clean slate text, Orange hover) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              
              {/* 1. About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer py-1 ${
                    openDropdown === "about" ? "text-[#FF6A2C]" : "text-slate-700 hover:text-[#FF6A2C]"
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      openDropdown === "about" ? "rotate-180 text-[#FF6A2C]" : ""
                    }`}
                  />
                </button>

                {/* Remita-Style Floating Dropdown Menu */}
                {openDropdown === "about" && (
                  <div className="absolute top-full -left-4 pt-2 z-50">
                    <div className="w-80 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 p-2.5 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                      
                      {/* External Company Link (Target Blank) */}
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors text-left group/item cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-[#FF6A2C] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#FF6A2C] transition-colors">
                            Our Company
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                            Get a glimpse of who we are as an organisation
                          </div>
                        </div>
                      </a>

                      <a
                        href="tel:+23418888277"
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors text-left group/item cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-[#FF6A2C] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors">
                          <PhoneCall className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#FF6A2C] transition-colors">
                            Contact Us
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                            0700-TAPPER-PAY for any related issue
                          </div>
                        </div>
                      </a>

                      <button
                        type="button"
                        onClick={() => scrollToSection("features")}
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors text-left group/item cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-[#FF6A2C] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#FF6A2C] transition-colors">
                            Security &amp; Compliance
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                            Licensed by the CBN and insured by NDIC
                          </div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => scrollToSection("faqs")}
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors text-left group/item cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-[#FF6A2C] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#FF6A2C] transition-colors">
                            See Our FAQs
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                            Frequently asked questions &amp; answers
                          </div>
                        </div>
                      </button>

                    </div>
                  </div>
                )}
              </div>

              {/* 2. Services Dropdown (Orange hover) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer py-1 ${
                    openDropdown === "services" ? "text-[#FF6A2C]" : "text-slate-700 hover:text-[#FF6A2C]"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      openDropdown === "services" ? "rotate-180 text-[#FF6A2C]" : ""
                    }`}
                  />
                </button>

                {/* Floating Services Dropdown Menu with 4 Core Offerings */}
                {openDropdown === "services" && (
                  <div className="absolute top-full -left-4 pt-2 z-50">
                    <div className="w-88 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 p-2.5 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                      
                      {/* 1. Contactless Tap to Pay */}
                      <button
                        type="button"
                        onClick={() => scrollToSection("features")}
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors text-left group/item cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-[#FF6A2C] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#FF6A2C] transition-colors">
                            Contactless Tap to Pay
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                            Pay or accept payments with a simple tap on phone
                          </div>
                        </div>
                      </button>

                      {/* 2. Scan to Pay (QR) */}
                      <button
                        type="button"
                        onClick={() => scrollToSection("features")}
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors text-left group/item cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-[#FF6A2C] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors">
                          <QrCode className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#FF6A2C] transition-colors">
                            Scan to Pay (QR)
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                            Instant, frictionless QR code transactions
                          </div>
                        </div>
                      </button>

                      {/* 3. All Your Cards in One Place */}
                      <button
                        type="button"
                        onClick={() => scrollToSection("features")}
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors text-left group/item cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-[#FF6A2C] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#FF6A2C] transition-colors">
                            All Your Cards in One Place
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                            Manage virtual and physical debit cards effortlessly
                          </div>
                        </div>
                      </button>

                      {/* 4. Instant Transfers & Bill Payments */}
                      <button
                        type="button"
                        onClick={() => scrollToSection("features")}
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors text-left group/item cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-[#FF6A2C] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors">
                          <Send className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#FF6A2C] transition-colors">
                            Instant Transfers &amp; Bill Payments
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                            Fee-free bank transfers, airtime &amp; utility payments
                          </div>
                        </div>
                      </button>

                    </div>
                  </div>
                )}
              </div>

              {/* 3. How It Works (Orange hover) */}
              <button
                type="button"
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm font-semibold text-slate-700 hover:text-[#FF6A2C] transition-colors cursor-pointer py-1"
              >
                How It Works
              </button>

              {/* 4. FAQs (Orange hover) */}
              <button
                type="button"
                onClick={() => scrollToSection("faqs")}
                className="text-sm font-semibold text-slate-700 hover:text-[#FF6A2C] transition-colors cursor-pointer py-1"
              >
                FAQs
              </button>

            </nav>

            {/* Right: Personal/Business Switcher (Brand Blue hover) + Login/CTA */}
            <div className="flex items-center gap-3 shrink-0">
              
              {/* Secondary Button: Switch View (Brand Blue Hover State) */}
              {currentPage === "business" ? (
                <Link
                  href="/personal"
                  className="inline-flex items-center px-4 sm:px-5 py-2 rounded-full border border-slate-200 text-slate-700 hover:text-[#0B3B6F] hover:border-[#0B3B6F] hover:bg-blue-50/40 font-semibold text-xs sm:text-sm transition-all shadow-2xs"
                >
                  Personal
                </Link>
              ) : (
                <Link
                  href="/"
                  className="inline-flex items-center px-4 sm:px-5 py-2 rounded-full border border-slate-200 text-slate-700 hover:text-[#0B3B6F] hover:border-[#0B3B6F] hover:bg-blue-50/40 font-semibold text-xs sm:text-sm transition-all shadow-2xs"
                >
                  Business
                </Link>
              )}

              {/* Primary Action Button: Vibrant Orange Pill Button "Login" / "Get the App" */}
              {currentPage === "business" ? (
                <button
                  type="button"
                  onClick={onOpenSignIn}
                  className="px-5 sm:px-6 py-2 rounded-full bg-[#FF6A2C] hover:bg-[#E5581E] active:scale-98 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer touch-manipulation"
                >
                  Login
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setDownloadModalOpen(true)}
                  className="px-5 sm:px-6 py-2 rounded-full bg-[#FF6A2C] hover:bg-[#E5581E] active:scale-98 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer touch-manipulation"
                >
                  Get the App
                </button>
              )}

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Clean, Light Mobile Navigation Drawer (Matching Remita aesthetic - No dark gradients) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 px-5 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            
            {/* Experience Switcher */}
            <div className="p-1 rounded-2xl bg-slate-100 mb-4">
              <div className="grid grid-cols-2 gap-1">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    currentPage === "business"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-[#0B3B6F]"
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Business</span>
                </Link>

                <Link
                  href="/personal"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    currentPage === "personal"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-[#0B3B6F]"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Personal</span>
                </Link>
              </div>
            </div>

            {/* Navigation List */}
            <nav className="flex flex-col space-y-1 mb-5">
              <button
                type="button"
                onClick={() => scrollToSection("home")}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-orange-50/70 hover:text-[#FF6A2C] text-left transition-colors cursor-pointer"
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("features")}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-orange-50/70 hover:text-[#FF6A2C] text-left transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("how-it-works")}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-orange-50/70 hover:text-[#FF6A2C] text-left transition-colors cursor-pointer"
              >
                <span>How It Works</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("faqs")}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-orange-50/70 hover:text-[#FF6A2C] text-left transition-colors cursor-pointer"
              >
                <span>FAQs</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </nav>

            {/* Mobile Actions: Remita-style Solid Orange Button */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              {currentPage === "business" && onOpenSignIn ? (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSignIn();
                  }}
                  className="w-full py-3 rounded-full bg-[#FF6A2C] hover:bg-[#E5581E] text-white font-bold text-sm shadow-md shadow-orange-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Login</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDownloadModalOpen(true);
                  }}
                  className="w-full py-3 rounded-full bg-[#FF6A2C] hover:bg-[#E5581E] text-white font-bold text-sm shadow-md shadow-orange-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get the App</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {/* Direct Support hotline */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                <a
                  href="tel:+23418888277"
                  className="flex items-center gap-1.5 hover:text-[#0B3B6F] transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#0B3B6F]" />
                  <span>0700-TAPPER-PAY</span>
                </a>

                <a
                  href="mailto:support@techlabx.org"
                  className="flex items-center gap-1.5 hover:text-[#0B3B6F] transition-colors"
                >
                  <span>support@techlabx.org</span>
                </a>
              </div>
            </div>

          </div>
        )}
      </header>

      {/* Smart Get the App Download Modal */}
      <DownloadAppModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </>
  );
}
