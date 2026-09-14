"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  LayoutDashboard, 
  CalendarCheck, 
  MessageSquare, 
  UserCheck, 
  ShoppingBag,
  Check,
  Sparkles,
  ArrowDownToLine,
  Zap
} from "lucide-react";
import IphoneMockup from "./IphoneMockup";

export default function AppTourSection() {
  const containerRef = useRef(null);

  // Scroll Progress Tracking for the Drop Line
  // Calibrated offset so the dropping tip stays visible within viewport with generous bottom gap
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 35%", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    mass: 0.6,
    restDelta: 0.001,
  });

  const lineFillHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const tipOpacity = useTransform(smoothProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0.8]);

  const steps = [
    {
      num: "01",
      tag: "Central Hub",
      icon: <LayoutDashboard className="w-6 h-6 text-black" />,
      title: "Discover Nearby Family Sessions",
      description:
        "Instantly explore family workouts happening in your neighborhood parks or stream live guided sessions straight into your living room with one tap.",
      highlights: [
        "Personalized daily activity recommendations",
        "Interactive map of local park meetups",
        "One-tap family check-in and streak tracking",
      ],
      mockup: "/mockups/new/Home.png",
      badgeText: "Live Discovery",
    },
    {
      num: "02",
      tag: "Effortless Booking",
      icon: <CalendarCheck className="w-6 h-6 text-black" />,
      title: "Reserve Class Spots in Seconds",
      description:
        "Browse transparent pricing, instructor bios, difficulty tiers, and open family slots. Book individually or grab an all-inclusive family group pass.",
      highlights: [
        "Real-time available slot countdowns",
        "Age-appropriate filters (Kids, Parents, Seniors)",
        "Calendar sync & automated weather reminders",
      ],
      mockup: "/mockups/new/Home (2).png",
      badgeText: "Instant Reserve",
    },
    {
      num: "03",
      tag: "Social & Community",
      icon: <MessageSquare className="w-6 h-6 text-black" />,
      title: "Connect with Health-Minded Families",
      description:
        "Exchange healthy recipes, organize neighborhood bike rides, share training milestones, and get daily motivational tips from certified coaches.",
      highlights: [
        "Neighborhood family group chats & forums",
        "Photo sharing of weekend fitness meetups",
        "Direct coach Q&A and injury prevention tips",
      ],
      mockup: "/mockups/new/Home (1).png",
      badgeText: "Community Chat",
    },
    {
      num: "04",
      tag: "Certified Leadership",
      icon: <UserCheck className="w-6 h-6 text-black" />,
      title: "Vetted Trainers You Can Trust",
      description:
        "Inspect detailed credentials, client reviews, sports specializations, and years of experience before booking your next private or group session.",
      highlights: [
        "100% background-checked certified trainers",
        "Multi-generational fitness certifications",
        "Transparent family reviews and verified ratings",
      ],
      mockup: "/mockups/new/Other User Profile.png",
      badgeText: "Verified Coaches",
    },
    {
      num: "05",
      tag: "Official Store",
      icon: <ShoppingBag className="w-6 h-6 text-black" />,
      title: "Family Activewear & Workout Gear",
      description:
        "Gear up for success with official moisture-wicking activewear, kid-friendly resistance bands, cones, yoga mats, and water bottles.",
      highlights: [
        "High-durability workout gear for all ages",
        "Member-exclusive discounts on gear bundles",
        "Fast doorstep shipping with easy returns",
      ],
      mockup: "/mockups/new/Home (3).png",
      badgeText: "Apparel & Gear",
    },
  ];

  return (
    <section
      id="app-tour"
      ref={containerRef}
      className="relative py-24 sm:py-36 bg-[#171719] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#FDFC22]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[#FDFC22]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 sm:mb-28"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDFC22]/10 border border-[#FDFC22]/30 text-[#FDFC22] text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Scroll-Driven App Journey
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Explore The{" "}
            <span className="font-black text-yellow-gradient drop-shadow-[0_0_35px_rgba(253,252,34,0.4)]">
              App Experience
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/75 font-medium leading-relaxed">
            Scroll down to watch the connected path guide you through each core feature of the Family Phys. Ed. mobile platform.
          </p>
        </motion.div>

        {/* Drop-Line Timeline Showcase */}
        <div className="relative">
          {/* Desktop Drop-Line Track & Animated Dropping Line */}
          <div className="hidden lg:block absolute top-16 bottom-36 left-1/2 -translate-x-1/2 w-2 pointer-events-none z-10">
            {/* Dim Guide Track */}
            <div className="w-full h-full bg-white/10 rounded-full border border-white/5" />

            {/* Glowing Filling Drop-Line */}
            <motion.div
              style={{ height: lineFillHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#FFF000] via-[#FDFC22] to-[#FFFE00] shadow-[0_0_25px_rgba(253,252,34,0.95)] rounded-full z-10"
            >
              {/* Luminous Dropping Bead / Head with Pulse Halo */}
              <motion.div
                style={{ opacity: tipOpacity }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
              >
                <div className="w-6 h-6 rounded-full bg-[#FDFC22] border-2 border-white shadow-[0_0_35px_#FDFC22,0_0_70px_#FDFC22] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1C1C1E] animate-ping" />
                </div>
                <div className="absolute w-12 h-12 rounded-full bg-[#FDFC22]/30 blur-md pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Drop-Line Track & Animated Dropping Line */}
          <div className="lg:hidden absolute top-10 bottom-36 left-6 -translate-x-1/2 w-1.5 pointer-events-none z-10">
            {/* Mobile Dim Guide Track */}
            <div className="w-full h-full bg-white/10 rounded-full border border-white/5" />

            {/* Mobile Glowing Filling Drop-Line */}
            <motion.div
              style={{ height: lineFillHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#FFF000] via-[#FDFC22] to-[#FFFE00] shadow-[0_0_18px_rgba(253,252,34,0.9)] rounded-full z-10"
            >
              {/* Mobile Dropping Bead / Head */}
              <motion.div
                style={{ opacity: tipOpacity }}
                className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
              >
                <div className="w-5 h-5 rounded-full bg-[#FDFC22] border-2 border-white shadow-[0_0_25px_#FDFC22,0_0_50px_#FDFC22] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#1C1C1E] animate-ping" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="space-y-24 sm:space-y-36">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div key={idx} className="relative">
                  {/* Drop-line Node Marker (Desktop Center) */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center"
                  >
                    <div className="relative group cursor-pointer">
                      <div className="w-14 h-14 rounded-full bg-[#1C1C1E] border-2 border-[#FDFC22] flex items-center justify-center shadow-[0_0_30px_rgba(253,252,34,0.7)] group-hover:scale-110 transition-transform duration-300">
                        <span className="text-base font-black text-[#FDFC22]">
                          {step.num}
                        </span>
                      </div>
                      <div className="absolute -inset-1.5 rounded-full bg-[#FDFC22]/25 animate-ping pointer-events-none" />
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pl-12 lg:pl-0">
                    {/* Column A: Text Details (Alternates position) */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className={`lg:col-span-6 flex flex-col items-start ${
                        isEven ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16"
                      }`}
                    >
                      {/* Mobile Node Badge */}
                      <div className="flex items-center gap-3 mb-4 lg:hidden">
                        <div className="w-9 h-9 rounded-full bg-[#FDFC22] text-black font-black text-sm flex items-center justify-center shadow-lg">
                          {step.num}
                        </div>
                        <span className="px-3.5 py-1.5 rounded-full bg-[#FDFC22]/15 text-[#FDFC22] font-bold text-xs uppercase tracking-wider border border-[#FDFC22]/30">
                          {step.tag}
                        </span>
                      </div>

                      <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDFC22]/15 text-[#FDFC22] font-bold text-xs uppercase tracking-wider mb-4 border border-[#FDFC22]/30">
                        <Zap className="w-3.5 h-3.5" />
                        {step.tag}
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                        {step.title}
                      </h3>

                      <p className="text-base sm:text-lg text-white/75 font-normal leading-relaxed mb-8">
                        {step.description}
                      </p>

                      <div className="space-y-3.5 mb-8 w-full">
                        {step.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#FDFC22] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(253,252,34,0.4)]">
                              <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
                            </div>
                            <span className="text-sm sm:text-base font-semibold text-white/90">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="#download-app"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-yellow-gradient text-black font-extrabold text-sm hover:opacity-95 active:scale-95 transition-all shadow-[0_4px_20px_rgba(253,252,34,0.3)]"
                      >
                        <span>Experience on App</span>
                        <ArrowDownToLine className="w-4 h-4" />
                      </a>
                    </motion.div>

                    {/* Column B: Phone Mockup Display */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className={`lg:col-span-6 flex justify-center ${
                        isEven ? "lg:order-1 lg:justify-start" : "lg:order-2 lg:justify-end"
                      }`}
                    >
                      <div className="relative group">
                        {/* Ambient Yellow Glow Backdrop */}
                        <div className="absolute inset-0 bg-yellow-gradient rounded-[60px] blur-3xl opacity-35 group-hover:opacity-55 transition-opacity duration-500 transform scale-95" />

                        <div className="relative transform group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-500">
                          <IphoneMockup
                            src={step.mockup}
                            alt={step.title}
                          />

                          {/* Floating Feature Chip */}
                          <div className="absolute -bottom-4 right-4 sm:-right-4 bg-[#242426] border border-white/20 rounded-2xl py-2.5 px-4 shadow-2xl flex items-center gap-2.5 backdrop-blur-md">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FDFC22] animate-pulse" />
                            <span className="text-xs font-bold text-white tracking-wide">
                              {step.badgeText}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
