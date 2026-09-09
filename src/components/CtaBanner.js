"use client";

import { useState } from "react";
import { ArrowDownToLine, Users, Trophy, Sparkles, Check, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import IphoneMockup from "./IphoneMockup";

export default function CtaBanner() {
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'user', 'coach'

  const apps = [
    {
      id: "user",
      badge: "For Families & Members",
      badgeIcon: <Users className="w-3.5 h-3.5" />,
      title: "Family Phys. Ed.",
      subtitle: "Member & Family App",
      description:
        "Discover local park sessions, book classes in seconds, connect with active families, and track fitness streaks across generations.",
      highlights: [
        "Interactive neighborhood session map",
        "Multi-generational family booking pass",
        "Direct coach chat and injury prevention tips",
      ],
      mockup: "/mockups/Home.png",
      iosUrl: "https://apps.apple.com/us/app/family-phys-ed-user/id6746496337",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.dignitestudios.familyphysusers&pcampaignid=web_share",
    },
    {
      id: "coach",
      badge: "For Certified Coaches",
      badgeIcon: <Trophy className="w-3.5 h-3.5" />,
      title: "Family Phys. Ed. Coach",
      subtitle: "Trainer & Instructor App",
      description:
        "Accept private session bids, host public family workouts, showcase your credentials, manage client reviews, and get paid securely via Stripe.",
      highlights: [
        "Manage calendar & accept private bids",
        "Direct client communication and reviews",
        "Fast, secure payouts via Stripe integration",
      ],
      mockup: "/mockups/Other User Profile.png",
      iosUrl: "https://apps.apple.com/us/app/family-phys-ed-coach/id6746495686",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.dignitestudios.familyphyscoach&pcampaignid=web_share",
    },
  ];

  const displayedApps =
    activeTab === "all" ? apps : apps.filter((app) => app.id === activeTab);

  return (
    <section
      id="download-app"
      className="relative py-20 sm:py-32 bg-[#1C1C1E] overflow-hidden scroll-mt-20"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#FDFC22]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#FDFC22]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDFC22]/10 border border-[#FDFC22]/30 text-[#FDFC22] text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <ArrowDownToLine className="w-3.5 h-3.5" />
            Available Now on iOS & Android
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Download the{" "}
            <span className="font-black text-yellow-gradient drop-shadow-[0_0_35px_rgba(253,252,34,0.4)]">
              Official Apps
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/75 font-medium leading-relaxed">
            Choose your app below — whether you are a family ready to get moving together or a certified coach looking to guide community workouts.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex items-center p-1.5 bg-[#242426] border border-white/10 rounded-2xl mt-8 shadow-xl">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#FDFC22] text-black shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              All Apps
            </button>
            <button
              onClick={() => setActiveTab("user")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "user"
                  ? "bg-[#FDFC22] text-black shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>For Families</span>
            </button>
            <button
              onClick={() => setActiveTab("coach")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "coach"
                  ? "bg-[#FDFC22] text-black shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>For Coaches</span>
            </button>
          </div>
        </motion.div>

        {/* Dual App Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {displayedApps.map((app) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-b from-[#242426] to-[#1C1C1E] border border-white/15 rounded-[36px] sm:rounded-[44px] p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl group hover:border-[#FDFC22]/50 transition-all"
            >
              {/* Subtle Ambient Yellow Card Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#FDFC22]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FDFC22]/15 transition-colors" />

              {/* Top Section: App Details */}
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDFC22]/15 border border-[#FDFC22]/30 text-[#FDFC22] text-xs font-black uppercase tracking-wider mb-5">
                  {app.badgeIcon}
                  <span>{app.badge}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                  {app.title}
                </h3>
                <div className="text-sm font-bold text-[#FDFC22] uppercase tracking-wider mb-4">
                  {app.subtitle}
                </div>

                <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-6">
                  {app.description}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-2.5 mb-6">
                  {app.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm sm:text-base text-white/90">
                      <div className="w-5 h-5 rounded-full bg-[#FDFC22] flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-black stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Section: Centered Mockup Display with Dedicated Spacing */}
              <div className="relative py-6 my-2 flex justify-center items-center z-10">
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-[#FDFC22]/15 rounded-full blur-2xl pointer-events-none" />
                  <IphoneMockup
                    src={app.mockup}
                    alt={app.title}
                    width="w-[190px] sm:w-[220px]"
                    shadow={true}
                  />
                </div>
              </div>

              {/* Bottom Section: Fully Visible, Non-Overlapping Store Download Buttons */}
              <div className="pt-6 mt-4 border-t border-white/10 relative z-20">
                <div className="text-xs uppercase tracking-wider text-white/60 font-bold text-center mb-3.5">
                  Download Directly For Your Device
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                  {/* Apple App Store Button */}
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={app.iosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 rounded-2xl bg-white text-black hover:bg-[#FDFC22] transition-colors shadow-lg group/btn cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-7 h-7 fill-black shrink-0" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.57.65-1.07 1.71-.93 2.73 1.01.08 2.03-.48 2.65-1.23z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-[10px] uppercase tracking-wider text-black/70 font-bold">
                          Download on the
                        </div>
                        <div className="text-sm font-extrabold text-black leading-tight">
                          App Store
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-black/50 group-hover/btn:text-black transition-colors" />
                  </motion.a>

                  {/* Google Play Store Button */}
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={app.androidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 rounded-2xl bg-[#28282A] text-white hover:bg-[#38383C] border border-white/10 transition-colors shadow-lg group/btn cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M3.609 1.814L13.793 12 3.61 22.186c-.352-.33-.61-.83-.61-1.486V3.3c0-.656.258-1.156.61-1.486z"
                          fill="#00E676"
                        />
                        <path
                          d="M17.186 8.607L13.793 12l3.393 3.393 3.844-2.187c.844-.48.844-1.932 0-2.412l-3.844-2.187z"
                          fill="#FFD600"
                        />
                        <path
                          d="M3.609 1.814l10.184 10.186 3.393-3.393L5.438.932C4.69.51 3.99.99 3.609 1.814z"
                          fill="#00B0FF"
                        />
                        <path
                          d="M17.186 15.393L13.793 12 3.609 22.186c.381.824 1.081 1.304 1.829.882l11.748-7.675z"
                          fill="#FF3D00"
                        />
                      </svg>
                      <div className="text-left">
                        <div className="text-[10px] uppercase tracking-wider text-white/60 font-bold">
                          GET IT ON
                        </div>
                        <div className="text-sm font-extrabold text-white leading-tight">
                          Google Play
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/50 group-hover/btn:text-white transition-colors" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safe & Verified Trust Footer */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-white/60">
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FDFC22]" />
            Free Download with instant guest access
          </span>
          <span>•</span>
          <span>🔒 100% Secure & Verified on App Stores</span>
          <span>•</span>
          <span>⚡ Available for all iOS & Android devices</span>
        </div>
      </div>
    </section>
  );
}
