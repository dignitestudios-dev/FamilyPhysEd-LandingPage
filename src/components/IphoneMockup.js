"use client";

import Image from "next/image";

export default function IphoneMockup({
  src = "/mockups/Home.png",
  alt = "Family Phys. Ed. App Screen",
  className = "",
  width = "w-[270px] sm:w-[300px]",
  priority = false,
  shadow = true,
}) {
  return (
    <div
      className={`relative mx-auto ${width} select-none ${
        shadow ? "drop-shadow-[0_20px_45px_rgba(0,0,0,0.8)]" : ""
      } ${className}`}
    >
      {/* Sleek Ultra-Thin Minimalist Phone Rim */}
      <div className="relative rounded-[36px] sm:rounded-[42px] p-[3px] bg-[#2E2E30] ring-1 ring-white/20 shadow-2xl overflow-hidden">
        {/* Screen Bezel */}
        <div className="relative overflow-hidden rounded-[33px] sm:rounded-[39px] bg-black aspect-[9/19.5]">
          {/* Subtle Dynamic Island Pill */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[70px] h-[18px] bg-black rounded-full z-30 flex items-center justify-center ring-1 ring-white/10 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#0a101d] ring-1 ring-blue-900/30 mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e] ring-1 ring-white/5" />
          </div>

          {/* Screen Content */}
          <div className="relative w-full h-full bg-[#1C1C1E] overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 640px) 270px, 300px"
              className="object-cover object-top"
            />
          </div>

          {/* Subtle Glass Reflection Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06] z-20" />

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[100px] h-[3.5px] bg-white/40 rounded-full z-30" />
        </div>
      </div>
    </div>
  );
}
