"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, ChevronDown, ArrowUpRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { TapperLogo, NigeriaFlag } from "../components/Icons";

export default function SignInPage() {
  const [tab, setTab] = useState<"phone" | "username">("phone");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#031B39] flex flex-col justify-between p-4 sm:p-8 relative overflow-x-hidden font-sans">
      
      {/* Top Bar with Home Link and Privacy Link */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to TapperPay</span>
        </Link>

        <a
          href="#privacy"
          className="flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-white transition-colors"
        >
          <span>Read our Privacy Statement</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Center Auth Card (Matching Image 1) */}
      <div className="w-full max-w-md mx-auto my-auto py-8 flex flex-col items-center z-10">
        
        {/* Central White Card */}
        <div className="w-full bg-white rounded-3xl shadow-2xl p-7 sm:p-9 text-center border border-slate-100">
          
          {/* Logo Monogram Badge */}
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF] flex items-center justify-center shadow-lg shadow-blue-500/25">
              <TapperLogo className="w-10 h-10" variant="white" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Log In to TapperPay
          </h1>

          {isSuccess ? (
            <div className="py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">One-Time Password Sent</h2>
              <p className="text-xs sm:text-sm text-slate-600">
                We sent a secure 6-digit confirmation code to your device. Complete the prompt on your phone to open your SoftPOS terminal.
              </p>
              <Link
                href="/"
                className="block w-full py-3 rounded-xl bg-[#0B3B6F] hover:bg-[#072547] text-white font-bold text-sm transition-all text-center"
              >
                Return to Dashboard
              </Link>
            </div>
          ) : (
            <>
              {/* Phone Number / Username Tab Switcher */}
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
                  Username
                </button>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {tab === "phone" ? (
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
                ) : (
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Enter your username or email"
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
                  Next
                </button>
              </form>

              {/* Sub-links */}
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
                    alert("Emergency Account Lock: Call 0700-TAPPER-PAY or text *700*911# to freeze account.");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  <span>Lost your phone? Lock your Account</span>
                  <Lock className="w-3.5 h-3.5 text-[#0B3B6F]" />
                </a>
              </div>
            </>
          )}

        </div>

        {/* Secondary Pill below card: "New to TapperPay? Sign Up" */}
        <div className="w-full mt-4">
          <Link
            href="/#pricing"
            className="block w-full py-3.5 rounded-2xl bg-white/15 hover:bg-white/20 active:scale-98 text-white text-sm font-bold border border-white/15 transition-all shadow-sm text-center"
          >
            New to TapperPay? Sign Up
          </Link>
        </div>

        {/* Regulatory Subtext */}
        <p className="mt-6 text-[11px] text-white/70 text-center font-medium max-w-sm">
          Licensed by the <span className="font-bold text-white">Central Bank of Nigeria</span> and Insured by the <span className="font-bold text-white">NDIC</span>.
        </p>

      </div>

      {/* Empty space bottom for balance */}
      <div className="hidden sm:block h-6" />
    </div>
  );
}

