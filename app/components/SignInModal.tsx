"use client";

import React, { useState } from "react";
import { X, Lock, ChevronDown, ArrowUpRight, CheckCircle2, Building2 } from "lucide-react";
import { TapperLogo, NigeriaFlag } from "./Icons";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSignUp?: () => void;
  initialMode?: "signin" | "signup";
  onSuccess?: () => void;
  customTitle?: string;
  customDescription?: string;
}

export function SignInModal({
  isOpen,
  onClose,
  initialMode = "signin",
  onSuccess,
  customTitle,
  customDescription,
}: SignInModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [tab, setTab] = useState<"phone" | "username">("phone");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    setMode(initialMode);
    setIsSuccess(false);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 700);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      {/* Privacy link in top left/right on system view */}
      <div className="fixed top-5 left-6 z-[210] hidden sm:flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-white transition-colors cursor-pointer">
        <a href="#privacy" target="_blank" rel="noreferrer" className="flex items-center gap-1">
          <span>Read our Privacy Statement</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Floating Screen Close Button (Visible on both system & mobile) */}
      <button
        type="button"
        onClick={onClose}
        className="fixed top-4 right-4 sm:top-5 sm:right-6 z-[210] p-2.5 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 text-white transition-all cursor-pointer shadow-lg backdrop-blur-sm flex items-center justify-center min-w-[40px] min-h-[40px]"
        aria-label="Close modal"
      >
        <X className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Main Container */}
      <div className="relative w-full max-w-md my-auto flex flex-col items-center">
        
        {/* Central White Card (Matching Image 1) */}
        <div className="relative w-full bg-white rounded-3xl shadow-2xl p-7 sm:p-9 text-center border border-slate-100">
          
          {/* In-Card Close Button (Prominently visible inside the card on all screen sizes) */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-500 hover:text-slate-900 transition-all cursor-pointer z-30 shadow-xs flex items-center justify-center min-w-[36px] min-h-[36px]"
            aria-label="Close"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Logo Monogram Badge (Official Tapper Logo) */}
          <div className="flex justify-center mb-5">
            <TapperLogo className="w-14 h-14 shadow-lg shadow-black/15" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {customTitle || (mode === "signin" ? (
              <>
                Log In to <span className="text-[#0B3B6F]">Tapper</span><span className="text-[#FF6A2C]">Pay</span>
              </>
            ) : (
              <>
                Create <span className="text-[#0B3B6F]">Tapper</span><span className="text-[#FF6A2C]">Pay</span> Account
              </>
            ))}
          </h2>
          {customDescription && (
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
              {customDescription}
            </p>
          )}

          {isSuccess ? (
            <div className="py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {onSuccess ? "Authentication Verified!" : mode === "signin" ? "One-Time Password Sent" : "Registration Successful!"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {onSuccess
                  ? "Opening the Enterprise Custom Quote form..."
                  : mode === "signin"
                  ? "We sent a secure 6-digit confirmation code to your device. Complete the prompt on your phone to open your SoftPOS terminal."
                  : "Your TapperPay account has been provisioned. Download the app on your NFC smartphone to start accepting payments."}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-[#0B3B6F] hover:bg-[#072547] text-white font-bold text-sm transition-all cursor-pointer"
              >
                {onSuccess ? "Continue to Custom Quote →" : "Done"}
              </button>
            </div>
          ) : (
            <>
              {/* Phone Number / Username Tab Switcher (Matching Image 1) */}
              <div className="flex border-b border-slate-200 mt-6 mb-6">
                <button
                  type="button"
                  onClick={() => setTab("phone")}
                  className={`pb-2.5 px-4 text-sm font-bold transition-all relative cursor-pointer ${
                    tab === "phone"
                      ? "text-[#0B3B6F] border-b-2 border-[#0066FF]"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Phone Number
                </button>
                <button
                  type="button"
                  onClick={() => setTab("username")}
                  className={`pb-2.5 px-4 text-sm font-bold transition-all relative cursor-pointer ${
                    tab === "username"
                      ? "text-[#0B3B6F] border-b-2 border-[#0066FF]"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {mode === "signin" ? "Username" : "Email"}
                </button>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {mode === "signup" && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Business / Merchant Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lagos Retail Hub"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] transition-all"
                      />
                    </div>
                  </div>
                )}

                {tab === "phone" ? (
                  <div>
                    {mode === "signup" && <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number (NFC Device)</label>}
                    <div className="flex items-center gap-2">
                      {/* Country Code Pill with Nigeria Flag */}
                      <div className="flex items-center gap-1.5 px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm font-bold shrink-0">
                        <NigeriaFlag className="w-4 h-4" />
                        <span>+234</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </div>

                      {/* Phone Number Input */}
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] transition-all"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    {mode === "signup" && <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>}
                    <input
                      type={mode === "signup" ? "email" : "text"}
                      required
                      placeholder={mode === "signup" ? "merchant@business.com" : "Enter your username or email"}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] transition-all"
                    />
                  </div>
                )}

                {/* Primary Action Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 rounded-xl bg-[#FF6A2C] hover:bg-[#E5581E] active:scale-98 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-orange-500/20 cursor-pointer"
                >
                  {mode === "signin" ? "Next" : "Create Free Account"}
                </button>
              </form>

              {/* Sub-links */}
              {mode === "signin" ? (
                <div className="mt-6 space-y-3 text-center">
                  <a
                    href="#change-phone"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Please contact our 24/7 support line or visit your dashboard to update phone details.");
                    }}
                    className="block text-xs font-semibold text-[#0066FF] hover:underline"
                  >
                    Change My Phone Number
                  </a>

                  <a
                    href="#lock-account"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Emergency Account Lock: Call 0700-TAPPER-PAY or text *700*911# from any line to instantly freeze your SoftPOS credentials.");
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    <span>Lost your phone? Lock your Account</span>
                    <Lock className="w-3.5 h-3.5 text-[#0B3B6F]" />
                  </a>
                </div>
              ) : (
                <div className="mt-5 text-center text-xs text-slate-500">
                  By clicking Create Free Account, you agree to TapperPay&apos;s Merchant Terms and Regulatory Disclosures.
                </div>
              )}
            </>
          )}

        </div>

        {/* Secondary Pill below card (Toggles between Sign In and Sign Up in the same modern UI) */}
        <div className="w-full mt-4">
          <button
            type="button"
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setIsSuccess(false);
            }}
            className="w-full py-3.5 rounded-2xl bg-white/15 hover:bg-white/20 active:scale-98 text-white text-sm font-bold border border-white/15 transition-all shadow-sm cursor-pointer text-center"
          >
            {mode === "signin" ? "New to TapperPay? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>

        {/* Legal Regulatory Subtext */}
        <p className="mt-6 text-[11px] text-white/70 text-center font-medium max-w-sm">
          Banking services provided in partnership with CBN-licensed and NDIC-insured financial institutions.
        </p>

      </div>
    </div>
  );
}
