import React from "react";

// TapperPay Custom Brand Logo Monogram
export function TapperLogo({ className = "w-8 h-8", variant = "default" }: { className?: string; variant?: "default" | "white" | "dark" }) {
  return (
    <div className={`relative flex items-center justify-center rounded-xl overflow-hidden shadow-sm transition-transform duration-200 hover:scale-105 ${className}`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Gradient Background */}
        <rect width="48" height="48" rx="12" fill={variant === "white" ? "#FFFFFF" : "url(#tapper-gradient)"} />
        {/* Geometric Stylized 'T' with tap wave energy */}
        <path
          d="M12 15C12 13.8954 12.8954 13 14 13H34C35.1046 13 36 13.8954 36 15C36 16.1046 35.1046 17 34 17H26.5V33C26.5 34.1046 25.6046 35 24.5 35H23.5C22.3954 35 21.5 34.1046 21.5 33V17H14C12.8954 17 12 16.1046 12 15Z"
          fill={variant === "white" ? "#0B3B6F" : "#FFFFFF"}
        />
        {/* Orange Accent Tap Wave Dot */}
        <circle cx="33" cy="27" r="3.5" fill="#FF6A2C" />
        <defs>
          <linearGradient id="tapper-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B3B6F" />
            <stop offset="0.6" stopColor="#0066FF" />
            <stop offset="1" stopColor="#FF6A2C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Contactless NFC Radiating Waves Icon
export function ContactlessWavesIcon({ className = "w-12 h-12 text-[#FF6A2C]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className}>
      <path d="M16 32C19.5 28.5 19.5 19.5 16 16" />
      <path d="M22 36C27 30 27 18 22 12" />
      <path d="M28 40C34.5 31.5 34.5 16.5 28 8" />
      <path d="M34 44C42 33 42 15 34 4" />
    </svg>
  );
}

// Payment Network Logos
export function VisaLogo({ className = "h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 32" fill="currentColor" className={className}>
      <path d="M38.868 2.378L26.31 31.25H18.09L11.028 8.654C10.603 6.993 10.22 6.37 9.006 5.679C6.88 4.498 3.23 3.376 0 2.65L0.207 1.688H13.805C15.612 1.688 17.218 2.923 17.587 5.01L20.89 22.457L29.074 1.688H38.868V2.378ZM73.232 21.616C73.294 13.568 62.062 13.111 62.186 9.42C62.247 8.297 63.344 7.091 65.688 6.78C66.861 6.634 70.089 6.51 73.418 8.07L74.838 1.48C72.861 0.771 70.33 0.125 67.12 0.125C58.91 0.125 53.167 4.478 53.105 10.69C52.981 15.289 57.118 17.868 60.266 19.387C63.477 20.947 64.588 21.966 64.588 23.36C64.526 25.503 61.933 26.46 59.525 26.502C55.389 26.502 53.043 25.316 51.13 24.421L49.649 31.25C51.624 32.145 55.266 32.915 59.03 32.957C67.673 32.957 73.17 28.691 73.232 21.616ZM94.753 31.25H102L95.704 1.688H89.037C87.432 1.688 86.074 2.611 85.457 4.088L73.046 31.25H81.38L83.046 26.694H93.209L94.753 31.25ZM85.395 20.344L89.593 8.779L92.001 20.344H85.395ZM51.815 1.688L45.334 31.25H37.432L43.914 1.688H51.815Z" />
    </svg>
  );
}

export function MastercardLogo({ className = "h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 131 82" className={className}>
      <circle cx="41" cy="41" r="41" fill="#EB001B" />
      <circle cx="90" cy="41" r="41" fill="#F79E1B" fillOpacity="0.9" />
    </svg>
  );
}

export function ApplePayLogo({ className = "h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 32" fill="currentColor" className={className}>
      <path d="M12.923 10.962C12.871 8.528 14.869 7.306 14.973 7.254C13.84 5.617 12.083 5.378 11.464 5.337C9.97 5.171 8.498 6.22 7.741 6.22C6.963 6.22 5.767 5.337 4.509 5.358C2.894 5.378 1.38 6.303 0.548 7.773C-1.157 10.748 0.111 15.118 1.764 17.551C2.585 18.736 3.541 20.066 4.799 20.024C6.035 19.983 6.503 19.234 8.01 19.234C9.497 19.234 9.944 20.024 11.222 20.004C12.543 19.983 13.385 18.798 14.185 17.613C15.142 16.241 15.526 14.91 15.568 14.827C15.505 14.806 12.975 13.829 12.923 10.962ZM10.511 3.528C11.177 2.717 11.634 1.574 11.509 0.43C10.511 0.472 9.284 1.117 8.577 1.948C7.954 2.676 7.413 3.84 7.559 4.962C8.681 5.045 9.824 4.36 10.511 3.528Z" />
      <text x="22" y="21" fontFamily="sans-serif" fontSize="16" fontWeight="600" fill="currentColor">Pay</text>
    </svg>
  );
}

export function GooglePayLogo({ className = "h-4" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 font-semibold text-xs ${className}`}>
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
      <span className="text-slate-800 font-bold ml-0.5">Pay</span>
    </div>
  );
}

// Android & Apple OS icons
export function AndroidLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993s-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.082 12 8.082s-3.5902.3296-5.1368.8677L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
    </svg>
  );
}

export function AppleLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.04-2.85 0-.15-.02-.3-.04-.44-.99.04-2.19.66-2.9 1.49-.55.63-.97 1.65-.97 2.7 0 .16.03.32.05.37.09.01.23.03.37.03.9 0 1.83-.55 2.45-1.3" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function NigeriaFlag({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-full shrink-0 border border-white/20 shadow-xs ${className}`}>
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="12" height="36" fill="#008751" />
        <rect x="12" width="12" height="36" fill="#FFFFFF" />
        <rect x="24" width="12" height="36" fill="#008751" />
      </svg>
    </span>
  );
}

export function AfricaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-full shrink-0 border border-white/20 shadow-xs bg-[#007A3D] ${className}`}>
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="18" cy="18" r="18" fill="#007A3D" />
        {/* Golden African Continent Silhouette */}
        <path
          d="M16 7.5C18.5 7.5 22 9 23.5 11.5C24.8 13.5 26.5 14.8 26 16.8C25.5 18.5 23 19.5 22.5 21C22 22.5 21.5 24.8 20 26.8C19 28.2 17.8 29 17 29C16.5 29 15.8 26.8 15.2 25.2C14.5 23.5 12.8 22 12.2 20.5C11.5 19 10.5 18.2 10.5 16.2C10.5 14.2 12 12.5 13.5 10.5C14.5 9.2 15 7.5 16 7.5Z"
          fill="#FFB81C"
        />
        <circle cx="18" cy="18" r="17.2" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      </svg>
    </span>
  );
}
