"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, CheckCircle2, HeartPulse, Trophy, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const stats = [
    {
      icon: <Wrench className="w-6 h-6 text-black" />,
      number: "80+",
      label: "Active Class Formats",
      desc: "From bodyweight conditioning to family yoga and agility games.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-black" />,
      number: "1k+",
      label: "Verified Coaches",
      desc: "Background-checked and certified in youth & adult fitness.",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-black" />,
      number: "50+",
      label: "Community Locations",
      desc: "Hosted in scenic parks, rec centers, and local community spaces.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-black" />,
      number: "99%",
      label: "Satisfaction Rate",
      desc: "Families reporting higher bonding, energy, and physical health.",
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-36 bg-[#1C1C1E] overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#FDFC22]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo Collage with Yellow Pills and Orbital Circles */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Background Orbital Rings (from Figma) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -left-10 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] rounded-full border border-[#FDFC22]/15 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 left-10 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full border border-[#FDFC22]/10 pointer-events-none"
            />

            {/* 4-Card Collage Grid */}
            <div className="relative grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto">
              {/* Image Card 1: Top Left Tall Card */}
              <div className="relative h-64 sm:h-72 rounded-[40px] overflow-hidden bg-[#FDFC22] p-1.5 shadow-xl group transform hover:-translate-y-2 transition-transform duration-500">
                <div className="relative w-full h-full rounded-[34px] overflow-hidden">
                  <Image
                    src="/images/5yvaq2chmhx61fqt04rbwdj5t.jpg"
                    alt="Family workout and stretching"
                    fill
                    sizes="(max-width: 640px) 160px, 220px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    Group Stretch
                  </span>
                </div>
              </div>

              {/* Image Card 2: Top Right Card */}
              <div className="relative h-44 sm:h-52 rounded-[36px] overflow-hidden bg-yellow-gradient p-1.5 shadow-xl group transform hover:-translate-y-2 transition-transform duration-500">
                <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                  <Image
                    src="/images/IMG_0313.JPG.jpg"
                    alt="Outdoor coach workout session"
                    fill
                    sizes="(max-width: 640px) 160px, 220px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    Park Agility
                  </span>
                </div>
              </div>

              {/* Image Card 3: Bottom Left Card */}
              <div className="relative h-44 sm:h-52 rounded-[36px] overflow-hidden bg-yellow-gradient p-1.5 shadow-xl group transform hover:-translate-y-2 transition-transform duration-500 -mt-16 sm:-mt-16">
                <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                  <Image
                    src="/images/FB_IMG_1684246960497.jpeg"
                    alt="Active family outdoor coaching"
                    fill
                    sizes="(max-width: 640px) 160px, 220px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    Youth Training
                  </span>
                </div>
              </div>

              {/* Image Card 4: Bottom Right Tall Card */}
              <div className="relative h-64 sm:h-72 rounded-[40px] overflow-hidden bg-[#FDFC22] p-1.5 shadow-xl group transform hover:-translate-y-2 transition-transform duration-500 -mt-4">
                <div className="relative w-full h-full rounded-[34px] overflow-hidden">
                  <Image
                    src="/images/family phys 3.jpg"
                    alt="Certified fitness coach"
                    fill
                    sizes="(max-width: 640px) 160px, 220px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    Certified Coach
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy and 2x2 Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDFC22]/10 border border-[#FDFC22]/30 text-[#FDFC22] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive Wellness
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Available Services On{" "}
              <span className="font-black text-yellow-gradient drop-shadow-[0_0_35px_rgba(253,252,34,0.4)]">
                App
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 font-medium leading-relaxed mb-10">
              Discover a wide spectrum of physical activities designed for all ages. Whether you want to join weekend park sessions, schedule a certified private coach, or engage in friendly family challenges, the app connects you instantly.
            </p>

            {/* 2x2 Stat Grid (styled like Figma cards #2C2C2E) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {stats.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="bg-[#2C2C2E] hover:bg-[#343438] border border-white/5 hover:border-[#FDFC22]/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-yellow-gradient flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-[#FDFC22] tracking-tight">
                        {item.number}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {item.label}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-white/65 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
