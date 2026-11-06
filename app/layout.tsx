import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B3B6F",
};

export const metadata: Metadata = {
  title: "TapperPay | SoftPOS Contactless Mobile Payment Solution",
  description:
    "Turn your smartphone into a secure contactless payment terminal. Accept Visa, Mastercard, Apple Pay, and Google Pay anywhere, anytime with no extra hardware.",
  keywords: [
    "SoftPOS",
    "Contactless Payments",
    "Tap to Pay",
    "Mobile POS",
    "TapperPay",
    "NFC Payments",
    "Fintech",
  ],
  authors: [{ name: "TapperPay" }],
  openGraph: {
    title: "TapperPay - Tap. Pay. Grow.",
    description:
      "TapperPay is your all-in-one contactless payment solution. Turn your smartphone into a secure payment terminal.",
    type: "website",
    url: "https://tapperpay.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-white text-slate-900 selection:bg-[#FF6A2C]/20 selection:text-[#0B3B6F] font-sans">
        {children}
      </body>
    </html>
  );
}
