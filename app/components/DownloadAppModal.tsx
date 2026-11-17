"use client";

import React from "react";
import { X, QrCode, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";
import { AppleLogo, TapperLogo } from "./Icons";

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadAppModal({ isOpen, onClose }: DownloadAppModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0B3B6F] flex items-center justify-center mx-auto shadow-xs border border-blue-100/60">
            <TapperLogo className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            Get <span className="text-[#0B3B6F]">Tapper</span><span className="text-[#FF6A2C]">Pay</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Turn your smartphone into a payment terminal or enjoy seamless contactless payments on iOS &amp; Android.
          </p>
        </div>

        {/* App Store & Google Play Action Badges */}
        <div className="space-y-3 mb-6">
          {/* Apple App Store */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white flex items-center justify-center gap-3.5 shadow-md hover:shadow-lg transition-all group cursor-pointer"
          >
            <AppleLogo className="w-7 h-7 text-white shrink-0 group-hover:scale-105 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 leading-none">
                Download on the
              </span>
              <span className="block text-base font-extrabold text-white leading-tight">
                Apple App Store
              </span>
            </div>
          </a>

          {/* Google Play Store */}
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white flex items-center justify-center gap-3.5 shadow-md hover:shadow-lg transition-all group cursor-pointer"
          >
            <svg className="w-6 h-6 shrink-0 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186c-.365-.333-.61-.83-.61-1.42V3.234c0-.59.245-1.087.61-1.42z" />
              <path fill="#FBBC05" d="M17.18 8.613L13.792 12l3.388 3.387 3.824-2.185c.677-.387.677-1.017 0-1.404L17.18 8.613z" />
              <path fill="#EA4335" d="M3.609 1.814L17.18 8.613 13.792 12 3.609 1.814z" />
              <path fill="#34A853" d="M13.792 12l3.388 3.387-13.571 6.799L13.792 12z" />
            </svg>
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 leading-none">
                Get it on
              </span>
              <span className="block text-base font-extrabold text-white leading-tight">
                Google Play Store
              </span>
            </div>
          </a>
        </div>

        {/* QR Code Scan Option */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
            <QrCode className="w-7 h-7 text-[#0B3B6F]" />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-slate-900 leading-tight">
              Scan with your phone
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Point your camera at this screen to instantly download the TapperPay app.
            </p>
          </div>
        </div>

        {/* Regulatory Note */}
        <p className="mt-5 text-center text-[10px] text-slate-400 leading-tight">
          Banking services provided in partnership with CBN-licensed and NDIC-insured financial institutions.
        </p>
      </div>
    </div>
  );
}
