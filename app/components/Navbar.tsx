"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { TapperLogo, NigeriaFlag, AfricaIcon } from "./Icons";
import { Menu, X, ArrowRight, ChevronDown, Check } from "lucide-react";

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
  const [activeSection, setActiveSection] = useState("home");
  const [selectedRegion, setSelectedRegion] = useState<"nigeria" | "africa">("nigeria");
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections =
        currentPage === "business"
          ? ["home", "features", "how-it-works", "pricing", "faqs"]
          : ["home", "features", "how-it-works", "faqs"];

      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  // Handle outside click to close region dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (regionRef.current && !regionRef.current.contains(event.target as Node)) {
        setIsRegionDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Links for Business: Reduced to Home, Features, How It Works, Pricing, FAQs
  const businessNavLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Features", href: "#features", id: "features" },
    { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "FAQs", href: "#faqs", id: "faqs" },
  ];

  // Links for Personal: Pricing section removed completely
  const personalNavLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Features", href: "#features", id: "features" },
    { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { name: "FAQs", href: "#faqs", id: "faqs" },
  ];

  const navLinks = currentPage === "business" ? businessNavLinks : personalNavLinks;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#031B39]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3 sm:py-3.5"
          : "bg-[#031B39] border-b border-white/10 py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo & Segmented Pill Switcher (Moniepoint Style matching Image 2) */}
          <div className="flex items-center gap-2.5 sm:gap-6 shrink-0">
            <Link href={currentPage === "personal" ? "/personal" : "/"} className="flex items-center gap-2 group">
              <TapperLogo className="w-8 h-8 sm:w-9 sm:h-9 shadow-md shrink-0" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-white group-hover:text-[#FF6A2C] transition-colors duration-200">
                  TapperPay
                </span>
                <span className="hidden sm:block text-[9px] font-bold uppercase tracking-widest text-blue-200/70 -mt-0.5">
                  SoftPOS &amp; Banking
                </span>
              </div>
            </Link>

            {/* Segmented Business / Personal Switcher Pill: visible on sm+ screens */}
            <div className="hidden sm:flex items-center p-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
              {currentPage === "business" ? (
                <span className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white/25 text-white shadow-xs">
                  Business
                </span>
              ) : (
                <Link
                  href="/"
                  className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-white/75 hover:text-white hover:bg-white/10 transition-all"
                >
                  Business
                </Link>
              )}

              {currentPage === "personal" ? (
                <span className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white/25 text-white shadow-xs">
                  Personal
                </span>
              ) : (
                <Link
                  href="/personal"
                  className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-white/75 hover:text-white hover:bg-white/10 transition-all"
                >
                  Personal
                </Link>
              )}
            </div>
          </div>

          {/* Center Navigation Links (Increased font size & weight: text-base font-bold) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.id === "home") {
                      e.preventDefault();
                      const hero = document.getElementById("home");
                      if (hero) {
                        hero.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                      setActiveSection("home");
                    }
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-sm xl:text-base font-bold transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/15 shadow-2xs"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area (Sign in on Business only, Responsive Country/Region Dropdown) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Sign in Button: ONLY shown on Business page, sleek and aligned on mobile */}
            {currentPage === "business" && (
              <button
                onClick={onOpenSignIn}
                className="px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full bg-white hover:bg-slate-100 active:scale-98 text-[#0B3B6F] text-xs sm:text-base font-extrabold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1.5 sm:gap-2 cursor-pointer touch-manipulation shrink-0"
              >
                <span>Sign in</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </button>
            )}

            {/* Responsive Country / Region Dropdown (Nigeria & Africa) */}
            <div className="relative hidden sm:block" ref={regionRef}>
              <button
                type="button"
                onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                aria-expanded={isRegionDropdownOpen}
                aria-label="Select Region"
              >
                {selectedRegion === "nigeria" ? (
                  <>
                    <NigeriaFlag className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-bold">Nigeria</span>
                  </>
                ) : (
                  <>
                    <AfricaIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-bold">Africa</span>
                  </>
                )}
                <ChevronDown
                  className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 ${
                    isRegionDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu Panel */}
              {isRegionDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-slate-100 py-1.5 z-50 text-slate-800 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3.5 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Select Region
                  </div>

                  {/* Nigeria Option */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedRegion("nigeria");
                      setIsRegionDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer text-left ${
                      selectedRegion === "nigeria"
                        ? "bg-blue-50 text-[#0B3B6F]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <NigeriaFlag className="w-5 h-5 shadow-xs" />
                      <div>
                        <span className="block leading-tight">Nigeria</span>
                        <span className="text-[10px] font-normal text-slate-400">NGN (₦) • Active SoftPOS</span>
                      </div>
                    </div>
                    {selectedRegion === "nigeria" && <Check className="w-4 h-4 text-[#0066FF]" />}
                  </button>

                  {/* Africa Option */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedRegion("africa");
                      setIsRegionDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer text-left ${
                      selectedRegion === "africa"
                        ? "bg-blue-50 text-[#0B3B6F]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <AfricaIcon className="w-5 h-5 shadow-xs" />
                      <div>
                        <span className="block leading-tight">Africa</span>
                        <span className="text-[10px] font-normal text-slate-400">Pan-African Gateway</span>
                      </div>
                    </div>
                    {selectedRegion === "africa" && <Check className="w-4 h-4 text-[#0066FF]" />}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#031B39]/98 border-b border-white/15 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          {/* Prominent Mobile Experience Switcher */}
          <div className="flex items-center justify-between p-2 rounded-2xl bg-white/10 mb-4 border border-white/10">
            <span className="text-xs font-bold text-white/80 pl-1">Experience:</span>
            <div className="flex gap-1.5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                  currentPage === "business" ? "bg-white text-[#0B3B6F] shadow-xs" : "text-white/80 hover:bg-white/10"
                }`}
              >
                Business
              </Link>
              <Link
                href="/personal"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                  currentPage === "personal" ? "bg-white text-[#0B3B6F] shadow-xs" : "text-white/80 hover:bg-white/10"
                }`}
              >
                Personal
              </Link>
            </div>
          </div>

          <nav className="flex flex-col space-y-1.5 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.id === "home") {
                    e.preventDefault();
                    const hero = document.getElementById("home");
                    if (hero) {
                      hero.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                    setActiveSection("home");
                  }
                }}
                className={`py-2.5 px-3.5 rounded-xl text-sm font-bold transition-colors ${
                  activeSection === link.id
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/15 flex flex-col gap-3">
            {/* Mobile View Switcher */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-white/10">
              <span className="text-xs font-bold text-white/80">Active View:</span>
              <div className="flex gap-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    currentPage === "business" ? "bg-white text-[#0B3B6F]" : "text-white hover:bg-white/10"
                  }`}
                >
                  Business
                </Link>
                <Link
                  href="/personal"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    currentPage === "personal" ? "bg-white text-[#0B3B6F]" : "text-white hover:bg-white/10"
                  }`}
                >
                  Personal
                </Link>
              </div>
            </div>

            {/* Mobile Region Switcher (Nigeria / Africa) */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-white/10">
              <span className="text-xs font-bold text-white/80">Region:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedRegion("nigeria")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedRegion === "nigeria" ? "bg-white text-[#0B3B6F]" : "text-white hover:bg-white/10"
                  }`}
                >
                  <NigeriaFlag className="w-3.5 h-3.5" />
                  <span>Nigeria</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRegion("africa")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedRegion === "africa" ? "bg-white text-[#0B3B6F]" : "text-white hover:bg-white/10"
                  }`}
                >
                  <AfricaIcon className="w-3.5 h-3.5" />
                  <span>Africa</span>
                </button>
              </div>
            </div>

            {/* Mobile Sign In button on Business only */}
            {currentPage === "business" && onOpenSignIn && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignIn();
                }}
                className="w-full py-3 rounded-xl bg-white text-[#0B3B6F] font-black text-sm flex items-center justify-center gap-2 shadow-md hover:bg-slate-100 transition-all cursor-pointer"
              >
                <span>Sign in to TapperPay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
