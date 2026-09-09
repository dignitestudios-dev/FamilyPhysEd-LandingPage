"use client";

import { FileText, Ticket, UserCheck, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import IphoneMockup from "./IphoneMockup";

export default function HowItWorksSection() {
  const stepsLeft = [
    {
      icon: <FileText className="w-6 h-6 text-[#FDFC22]" />,
      title: "Personalized Family Programs",
      description:
        "Select tailored workout tracks designed for kids, parents, and grandparents to exercise at the right pace together safely.",
    },
    {
      icon: <Ticket className="w-6 h-6 text-[#FDFC22]" />,
      title: "Seamless Session Booking",
      description:
        "Reserve spots for community park workouts, group bootcamps, or live streaming coaching in just two simple taps.",
    },
  ];

  const stepsRight = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#FDFC22]" />,
      title: "Certified Fitness Coaches",
      description:
        "Train with vetted, enthusiastic trainers dedicated to multi-generational guidance, injury prevention, and joyful movement.",
    },
    {
      icon: <Star className="w-6 h-6 text-[#FDFC22]" />,
      title: "Track Streaks & Milestones",
      description:
        "Celebrate family milestones, unlock fun achievement badges, and build lifelong physical wellness and team spirit.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-36 bg-[#1C1C1E] overflow-hidden">
      {/* Background Ambience */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Bold Heavy Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDFC22]/10 border border-[#FDFC22]/30 text-[#FDFC22] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Simple 4-Step Process
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            How it{" "}
            <span className="font-black text-yellow-gradient drop-shadow-[0_0_35px_rgba(253,252,34,0.4)]">
              Works
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/75 font-medium leading-relaxed">
            Simple, seamless steps designed to make moving and staying healthy the most enjoyable part of your family routine.
          </p>
        </motion.div>

        {/* Large Glassmorphic Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass-card rounded-[40px] sm:rounded-[50px] p-6 sm:p-12 lg:p-16 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          {/* Ambient Glow in Top Right Corner */}
          <div className="absolute -top-12 -right-12 w-80 sm:w-96 h-80 sm:h-96 bg-[#FDFC22]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#FDFC22]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Layout: Left Features | Center Phone | Right Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Left Column (Desktop Right-Aligned) */}
            <div className="lg:col-span-4 flex flex-col gap-10 lg:gap-14 order-2 lg:order-1">
              {stepsLeft.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="flex flex-col items-start lg:items-end text-left lg:text-right group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#1C1C1E] border border-white/10 flex items-center justify-center shadow-lg mb-4 group-hover:border-[#FDFC22]/60 group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-[#FDFC22] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-sm font-normal">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Center Column: iPhone Mockup */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 my-4 lg:my-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#FDFC22]/25 rounded-full blur-2xl transform scale-90 group-hover:scale-105 transition-transform duration-500" />
                <div className="transform group-hover:scale-105 transition-transform duration-500">
                  <IphoneMockup
                    src="/mockups/Home (2).png"
                    alt="Sessions and Classes Screen"
                  />
                </div>
              </div>
            </div>

            {/* Right Column (Desktop Left-Aligned) */}
            <div className="lg:col-span-4 flex flex-col gap-10 lg:gap-14 order-3">
              {stepsRight.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="flex flex-col items-start text-left group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#1C1C1E] border border-white/10 flex items-center justify-center shadow-lg mb-4 group-hover:border-[#FDFC22]/60 group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-[#FDFC22] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-sm font-normal">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
