"use client";

import { Star, Users, UserCheck, ArrowDownToLine, Smartphone, Play } from "lucide-react";
import { motion } from "framer-motion";
import IphoneMockup from "./IphoneMockup";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col items-center justify-center bg-[#1C1C1E]"
    >
      {/* Background Ambient Radial Glows with pulse animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[400px] bg-[#FDFC22] rounded-full blur-[140px] pointer-events-none"
      />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#FDFC22]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#FDFC22]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center">
        {/* Main Headline with High Font Weight */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center text-white tracking-tight leading-[1.08] max-w-5xl mx-auto mb-6"
        >
          Move Together, Grow{" "}
          <span className="font-black text-yellow-gradient drop-shadow-[0_0_40px_rgba(253,252,34,0.5)]">
            Stronger
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-xl md:text-2xl text-white/80 text-center max-w-3xl mx-auto font-medium leading-relaxed mb-10 tracking-tight"
        >
          Empowering families to connect through fitness with guided group sessions, personalized coaching, and seamless tools for health and wellness across generations.
        </motion.p>

        {/* Action Buttons with Hover Springs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="#download-app"
            className="px-8 py-4 rounded-2xl bg-yellow-gradient text-black font-extrabold text-base transition-all shadow-[0_10px_40px_rgba(253,252,34,0.4)] hover:shadow-[0_15px_50px_rgba(253,252,34,0.6)] flex items-center gap-2.5 cursor-pointer"
          >
            <span>Download the App</span>
            <ArrowDownToLine className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)" }}
            whileTap={{ scale: 0.96 }}
            href="#app-tour"
            className="px-8 py-4 rounded-2xl bg-white/5 text-white font-bold text-base border border-white/15 transition-all flex items-center gap-2.5 shadow-lg"
          >
            <Smartphone className="w-5 h-5 text-[#FDFC22]" />
            <span>App Tour & Features</span>
          </motion.a>
        </motion.div>

        {/* Hero Visual Display with Mockup and Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl flex justify-center items-center mt-2"
        >
          {/* Neon Yellow Rounded Backdrop Shape (from Figma) */}
          <motion.div
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[290px] sm:w-[390px] md:w-[480px] h-[340px] sm:h-[430px] md:h-[490px] bg-yellow-gradient rounded-[60px] sm:rounded-[80px] md:rounded-[100px] blur-[2px] shadow-[0_0_90px_rgba(253,252,34,0.5)] z-0"
          />

          {/* iPhone Mockup */}
          <div className="relative z-10 transform hover:scale-[1.03] transition-transform duration-500">
            <IphoneMockup
              src="/mockups/new/Home.png"
              alt="Family Phys. Ed. Dashboard and Sessions"
              priority={true}
              width="w-[260px] sm:w-[300px] md:w-[330px]"
            />
          </div>

          {/* Floating Badge 1: Top Left - 4.8 Satisfaction */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, -1, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -left-2 sm:left-4 md:-left-12 top-10 z-20"
          >
            <div className="glass-chip rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 border border-white/20 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#282828] flex items-center justify-center text-[#FDFC22] shadow-inner">
                <Star className="w-5 h-5 fill-[#FDFC22] text-[#FDFC22]" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-extrabold text-white leading-tight">4.8</div>
                <div className="text-[11px] sm:text-xs text-white/70 font-semibold">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Badge 2: Top Right - 2K+ Users */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.6 }}
            className="absolute -right-2 sm:right-4 md:-right-12 top-16 z-20"
          >
            <div className="glass-chip rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 border border-white/20 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#282828] flex items-center justify-center text-[#FDFC22] shadow-inner">
                <Users className="w-5 h-5 text-[#FDFC22]" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-extrabold text-white leading-tight">2K+</div>
                <div className="text-[11px] sm:text-xs text-white/70 font-semibold">Active Families</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Badge 3: Bottom Left - Experienced Coaches */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -1, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.2 }}
            className="absolute -left-4 sm:left-0 md:-left-16 bottom-16 z-20"
          >
            <div className="glass-chip rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 border border-white/20 shadow-2xl max-w-[240px] sm:max-w-none">
              <div className="w-10 h-10 rounded-xl bg-[#282828] flex items-center justify-center text-[#FDFC22] shadow-inner shrink-0">
                <UserCheck className="w-5 h-5 text-[#FDFC22]" />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base font-extrabold text-white leading-tight">
                  Experienced Coaches
                </div>
                <div className="text-[11px] sm:text-xs text-white/70 font-semibold">
                  5+ Years of experience
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
