"use client";

import Image from "next/image";

export default function IphoneMockup({
  src = "/mockups/new/Home.png",
  alt = "Family Phys. Ed. App Screen",
  className = "",
  width = "w-[260px] sm:w-[290px] md:w-[320px]",
  priority = false,
  shadow = true,
}) {
  // Normalize path to use /mockups/new/
  const resolvedSrc = src.startsWith("/mockups/new/")
    ? src
    : src.replace(/^\/mockups\//, "/mockups/new/");

  return (
    <div
      className={`relative mx-auto ${width} select-none ${
        shadow ? "drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]" : ""
      } ${className}`}
    >
      <Image
        src={resolvedSrc}
        alt={alt}
        width={4168}
        height={8520}
        priority={priority}
        sizes="(max-width: 640px) 260px, (max-width: 768px) 290px, 320px"
        className="w-full h-auto object-contain pointer-events-none"
      />
    </div>
  );
}
