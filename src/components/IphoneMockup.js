"use client";

import Image from "next/image";

export default function IphoneMockup({
  src = "/mockups/Home.png",
  alt = "Family Phys. Ed. App Screen",
  className = "",
  priority = false,
  shadow = true,
}) {
  return (
    <div
      className={`relative mx-auto w-[280px] sm:w-[310px] md:w-[330px] select-none ${
        shadow ? "drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]" : ""
      } ${className}`}
    >
      {/* Outer Phone Frame (Titanium / Matte Dark Rim) */}
      <div className="relative rounded-[50px] p-[10px] bg-gradient-to-b from-[#48484a] via-[#242426] to-[#121214] ring-1 ring-white/20 shadow-2xl">
        {/* Antenna bands & buttons hints */}
        <div className="absolute -left-[3px] top-[100px] w-[3px] h-[26px] bg-[#3a3a3c] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[140px] w-[3px] h-[45px] bg-[#3a3a3c] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[195px] w-[3px] h-[45px] bg-[#3a3a3c] rounded-l-sm" />
        <div className="absolute -right-[3px] top-[135px] w-[3px] h-[65px] bg-[#3a3a3c] rounded-r-sm" />

        {/* Screen Bezel */}
        <div className="relative overflow-hidden rounded-[40px] bg-black ring-1 ring-white/10 aspect-[9/19.5]">
          {/* Dynamic Island Pill */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-30 flex items-center justify-between px-3 ring-1 ring-white/10 shadow-md">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0a101d] ring-1 ring-blue-900/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] ring-1 ring-white/5" />
          </div>

          {/* Screen Content */}
          <div className="relative w-full h-full bg-[#1C1C1E] overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 640px) 280px, (max-width: 768px) 310px, 330px"
              className="object-cover object-top"
            />
          </div>

          {/* Glossy Diagonal Screen Reflection Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] z-20" />

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/40 rounded-full z-30" />
        </div>
      </div>
    </div>
  );
}
