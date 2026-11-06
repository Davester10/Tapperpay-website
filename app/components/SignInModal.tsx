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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#031B39]/90 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      {/* Privacy link in top right (Matching Image 1) */}
      <div className="fixed top-5 right-6 z-10 hidden sm:flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-white transition-colors cursor-pointer">
        <a href="#privacy" target="_blank" rel="noreferrer" className="flex items-center gap-1">
          <span>Read our Privacy Statement</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-md my-auto flex flex-col items-center">
        
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Central White Card (Matching Image 1) */}
        <div className="w-full bg-white rounded-3xl shadow-2xl p-7 sm:p-9 text-center border border-slate-100">
          
          {/* Logo Monogram Badge */}
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF] flex items-center justify-center shadow-lg shadow-blue-500/25">
              <TapperLogo className="w-10 h-10" variant="white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {customTitle || (mode === "signin" ? "Log In to TapperPay" : "Create TapperPay Account")}
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
                  className="w-full py-3.5 mt-2 rounded-xl bg-[#0066FF] hover:bg-[#0050CC] active:scale-98 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-blue-500/25 cursor-pointer"
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

        {/* Legal Regulatory Subtext (Matching Image 1) */}
        <p className="mt-6 text-[11px] text-white/70 text-center font-medium max-w-sm">
          Licensed by the <span className="font-bold text-white">Central Bank of Nigeria</span> and Insured by the <span className="font-bold text-white">NDIC</span>.
        </p>

      </div>
    </div>
  );
}
