"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Building, Mail, Phone, ArrowRight, ShieldCheck, User } from "lucide-react";
import { TapperLogo } from "./Icons";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "signup" | "login";
}

export function GetStartedModal({ isOpen, onClose, mode = "signup" }: GetStartedModalProps) {
  const [currentMode, setCurrentMode] = useState<"signup" | "login">(mode);
  const [accountType, setAccountType] = useState<"merchant" | "personal">("merchant");
  const [businessName, setBusinessName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync mode if passed as prop
  React.useEffect(() => {
    setCurrentMode(mode);
    setIsSubmitted(false);
  }, [mode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer touch-manipulation min-h-[40px] min-w-[40px] flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4 overflow-y-auto">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B3B6F]">Welcome to TapperPay!</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              We&apos;ve sent an instant onboarding verification link to <span className="font-semibold text-slate-800">{email || "your email"}</span>. You can now download the app and begin {accountType === "merchant" ? "accepting contactless payments" : "banking with a single tap"} in minutes.
            </p>
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl text-xs text-[#0B3B6F] text-left space-y-1.5">
              <div className="font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FF6A2C]" /> Instant SoftPOS Provisioning
              </div>
              <p className="text-slate-600">
                {accountType === "merchant" ? "Merchant Terminal ID: " : "Virtual Account No: "}
                <code className="font-mono bg-white px-1.5 py-0.5 rounded border">
                  {accountType === "merchant" ? "TP-2026-NFC" : "0128945032"}
                </code>
              </p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="w-full py-3.5 bg-[#FF6A2C] hover:bg-[#E5581E] active:scale-98 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-[#FF6A2C]/25 cursor-pointer touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Done &amp; Explore App
            </button>
          </div>
        ) : (
          <div className="p-5 sm:p-7 overflow-y-auto flex-1">
            <div className="flex items-center gap-3 mb-5">
              <TapperLogo className="w-9 h-9 sm:w-10 sm:h-10" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B3B6F]">
                  {currentMode === "signup" ? "Get Started with TapperPay" : "Log In to Portal"}
                </h3>
                <p className="text-xs text-slate-500">
                  {currentMode === "signup" ? "Turn your smartphone into a payment terminal" : "Access your SoftPOS terminal & analytics"}
                </p>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl mb-4">
              <button
                type="button"
                onClick={() => setCurrentMode("signup")}
                className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer touch-manipulation min-h-[38px] ${currentMode === "signup" ? "bg-white text-[#0B3B6F] shadow-xs" : "text-slate-500 hover:text-slate-800"
                  }`}
              >
                Create Account
              </button>
              <button
                type="button"
                onClick={() => setCurrentMode("login")}
                className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer touch-manipulation min-h-[38px] ${currentMode === "login" ? "bg-white text-[#0B3B6F] shadow-xs" : "text-slate-500 hover:text-slate-800"
                  }`}
              >
                Log In
              </button>
            </div>

            {/* Account Type Selector for Sign Up */}
            {currentMode === "signup" && (
              <div className="flex gap-2 mb-4 p-1 bg-slate-50 border border-slate-200/80 rounded-xl">
                <button
                  type="button"
                  onClick={() => setAccountType("merchant")}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer touch-manipulation ${accountType === "merchant"
                      ? "bg-[#0B3B6F] text-white"
                      : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  Business (Merchant)
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType("personal")}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer touch-manipulation ${accountType === "personal"
                      ? "bg-[#0B3B6F] text-white"
                      : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  Personal (Customer)
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {currentMode === "signup" && accountType === "merchant" && (
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Business Name</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lagos Superstore & Cafe"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6A2C]/20 focus:border-[#FF6A2C] transition-all"
                    />
                  </div>
                </div>
              )}

              {currentMode === "signup" && accountType === "personal" && (
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Full Legal Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chukwudi Adeleke"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6A2C]/20 focus:border-[#FF6A2C] transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6A2C]/20 focus:border-[#FF6A2C] transition-all"
                  />
                </div>
              </div>

              {currentMode === "signup" && (
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Mobile Phone (NFC Phone)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+234 801 234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6A2C]/20 focus:border-[#FF6A2C] transition-all"
                    />
                  </div>
                </div>
              )}

              {currentMode === "login" && (
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Password or 6-digit PIN</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6A2C]/20 focus:border-[#FF6A2C] transition-all"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-[#FF6A2C] hover:bg-[#E5581E] active:scale-98 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-[#FF6A2C]/25 flex items-center justify-center gap-2 group cursor-pointer touch-manipulation min-h-[48px]"
              >
                <span>{currentMode === "signup" ? "Create Free Account" : "Access Terminal"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>CBN-regulated · EMVCo &amp; PCI-CPoC Certified</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
