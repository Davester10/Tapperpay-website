"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Smartphone, Search, HelpCircle, ShieldCheck } from "lucide-react";
import { AndroidLogo, AppleLogo } from "./Icons";

interface CompatibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sampleDevices = [
  { brand: "Samsung", name: "Galaxy S24 / S24 Ultra", os: "Android 14", compatible: true, nfcLocation: "Center back panel" },
  { brand: "Samsung", name: "Galaxy S23 / S22 / S21 series", os: "Android 13+", compatible: true, nfcLocation: "Center back panel" },
  { brand: "Samsung", name: "Galaxy A54 / A53 / A34 5G", os: "Android 12+", compatible: true, nfcLocation: "Upper back panel" },
  { brand: "Google", name: "Pixel 9 / 8 / 7 / 6 series", os: "Android 13+", compatible: true, nfcLocation: "Center back camera bar" },
  { brand: "Xiaomi", name: "Redmi Note 13 Pro+ / 12 Pro (NFC)", os: "MIUI / HyperOS", compatible: true, nfcLocation: "Near top camera ring" },
  { brand: "Transsion", name: "Tecno Camon 30 / Infinix Note 40 Pro (NFC)", os: "Android 13+", compatible: true, nfcLocation: "Upper center panel" },
  { brand: "Apple", name: "iPhone 16 / 16 Pro / Pro Max", os: "iOS 18+", compatible: true, nfcLocation: "Top edge near camera" },
  { brand: "Apple", name: "iPhone 15 / 15 Pro / Pro Max", os: "iOS 17+", compatible: true, nfcLocation: "Top edge near camera" },
  { brand: "Apple", name: "iPhone 14 / 13 / 12 / 11 series", os: "iOS 15+", compatible: true, nfcLocation: "Top edge near camera" },
];

export function CompatibilityModal({ isOpen, onClose }: CompatibilityModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<"all" | "Android" | "Samsung" | "Apple">("all");

  if (!isOpen) return null;

  const filtered = sampleDevices.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) || d.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand =
      selectedBrand === "all"
        ? true
        : selectedBrand === "Android"
        ? d.brand !== "Apple"
        : d.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0B3B6F] to-[#124b88] p-5 sm:p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer touch-manipulation"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-medium mb-3 backdrop-blur-sm">
            <Smartphone className="w-3.5 h-3.5 text-[#FF6A2C]" />
            Device Checker
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Check Your Device Compatibility</h3>
          <p className="text-blue-100/90 text-xs sm:text-sm mt-1">
            TapperPay works on virtually all NFC-enabled Android (v8.0+) and iOS (v14.0+) smartphones.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {/* Search and Filter */}
          <div className="space-y-3 mb-5">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search phone model (e.g. Galaxy S24, Tecno Camon, Pixel)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6A2C]/20 focus:border-[#FF6A2C] transition-all"
              />
            </div>

            {/* Filter Pills with wrap support */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <button
                onClick={() => setSelectedBrand("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer touch-manipulation ${
                  selectedBrand === "all" ? "bg-[#0B3B6F] text-white shadow-xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Brands
              </button>
              <button
                onClick={() => setSelectedBrand("Android")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer touch-manipulation ${
                  selectedBrand === "Android" ? "bg-[#0B3B6F] text-white shadow-xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <AndroidLogo className="w-3.5 h-3.5" /> All Android
              </button>
              <button
                onClick={() => setSelectedBrand("Samsung")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer touch-manipulation ${
                  selectedBrand === "Samsung" ? "bg-[#0B3B6F] text-white shadow-xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Samsung Galaxy
              </button>
              <button
                onClick={() => setSelectedBrand("Apple")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer touch-manipulation ${
                  selectedBrand === "Apple" ? "bg-[#0B3B6F] text-white shadow-xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <AppleLogo className="w-3.5 h-3.5" /> Apple iPhone
              </button>
            </div>
          </div>

          {/* Device list */}
          <div className="max-h-56 overflow-y-auto space-y-2 pr-1">
            {filtered.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all gap-2"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Smartphone className="w-5 h-5 text-[#0B3B6F]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">{item.name}</h4>
                    <p className="text-[11px] text-slate-500">Tap zone: {item.nfcLocation}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Compatible
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-6 text-slate-500 text-xs sm:text-sm">
                No exact match found, but if your phone has NFC and runs Android 8+ or iOS 14+, it is fully supported!
              </div>
            )}
          </div>

          {/* Quick Info Box */}
          <div className="mt-4 p-3.5 bg-orange-50/70 border border-orange-100 rounded-xl flex items-start gap-3 text-xs text-slate-700">
            <ShieldCheck className="w-5 h-5 text-[#FF6A2C] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900">100% Hardware-Free:</span> TapperPay uses your phone&apos;s certified native NFC chip. No dongle, PIN pad, or Bluetooth terminal required.
            </div>
          </div>
        </div>

        {/* Modal Footer (Responsive on mobile) */}
        <div className="bg-slate-50 px-5 py-3.5 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 shrink-0">
          <span className="text-xs text-slate-500 text-center sm:text-left">Ready to start accepting payments?</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#FF6A2C] hover:bg-[#E5581E] active:scale-98 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs shadow-[#FF6A2C]/20 cursor-pointer touch-manipulation min-h-[42px] flex items-center justify-center"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
