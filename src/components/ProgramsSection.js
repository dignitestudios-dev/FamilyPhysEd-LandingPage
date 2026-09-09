"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Sparkles, Heart, Activity, ArrowRight, ShieldCheck, Flame, Dumbbell, Smile } from "lucide-react";

export default function ProgramsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="programs" className="relative py-24 sm:py-36 bg-[#1C1C1E] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FDFC22]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#FDFC22]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Bold Heavyweight Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDFC22]/10 border border-[#FDFC22]/30 text-[#FDFC22] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Users className="w-3.5 h-3.5" />
            Designed for Every Generation
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Programs Tailored For{" "}
            <span className="font-black text-yellow-gradient drop-shadow-[0_0_35px_rgba(253,252,34,0.4)]">
              Your Entire Family
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/75 font-medium leading-relaxed">
            From playful foundational agility for kids to high-energy training for adults and gentle balance for grandparents, every program is guided by certified coaches.
          </p>
        </motion.div>

        {/* Modern Creative Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8"
        >
          {/* Bento Card 1: Kids & Youth Physical Ed (Large 7-Col Spotlight) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="lg:col-span-7 bg-[#242426] hover:bg-[#28282B] border border-white/10 hover:border-[#FDFC22]/50 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group transition-all duration-500"
          >
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FDFC22]/15 rounded-full blur-3xl group-hover:bg-[#FDFC22]/25 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#FDFC22] text-black text-xs font-black uppercase tracking-wider shadow-md">
                    Ages 5 - 14
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/15">
                    Motor & Agility Skills
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3 group-hover:text-[#FDFC22] transition-colors">
                  Kids & Youth Physical Education
                </h3>

                <p className="text-sm sm:text-base text-white/75 leading-relaxed font-normal mb-6">
                  Dynamic obstacle courses, coordination drills, and joyful movement designed to build healthy posture, athletic stamina, and confidence in young minds.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-bold text-black bg-yellow-gradient px-3 py-1.5 rounded-xl">
                    ⚡ Speed Ladders
                  </span>
                  <span className="text-xs font-semibold text-white/90 bg-[#1C1C1E] px-3 py-1.5 rounded-xl border border-white/10">
                    🎯 Focus & Posture
                  </span>
                  <span className="text-xs font-semibold text-white/90 bg-[#1C1C1E] px-3 py-1.5 rounded-xl border border-white/10">
                    🤝 Team Bonding
                  </span>
                </div>
              </div>

              {/* Photo Frame */}
              <div className="relative w-full md:w-56 h-56 sm:h-64 rounded-[30px] overflow-hidden shrink-0 border-2 border-[#FDFC22]/40 shadow-xl">
                <Image
                  src="/images/FB_IMG_1684246960497.jpeg"
                  alt="Kids exercising with coach"
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-black text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  Park Obstacle Drills
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-semibold text-white/60">
                Led by certified youth fitness specialists
              </span>
              <a
                href="#download-app"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#FDFC22] group-hover:translate-x-1.5 transition-transform"
              >
                <span>Explore youth classes</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Bento Card 2: Parents & Adult Conditioning (5-Col Card) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="lg:col-span-5 bg-[#242426] hover:bg-[#28282B] border border-white/10 hover:border-[#FDFC22]/50 rounded-[36px] sm:rounded-[44px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="relative w-full h-48 rounded-[26px] overflow-hidden mb-6 border border-white/15">
                <Image
                  src="/images/IMG_0279.JPG.jpg"
                  alt="Adult functional conditioning"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FDFC22] text-black text-xs font-black shadow-md">
                  All Adults
                </span>
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15">
                  🔥 Calorie & Core HIIT
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2.5 group-hover:text-[#FDFC22] transition-colors">
                Adult & Parent Conditioning
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal mb-4">
                High-efficiency functional strength, cardiovascular endurance, and core sculpting built for busy parents seeking optimal energy and stress relief.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-white/60">30-45 Min Sessions</span>
              <a
                href="#download-app"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#FDFC22] group-hover:translate-x-1 transition-transform"
              >
                <span>Join Adult Track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Bento Card 3: Seniors & Low Impact Mobility (5-Col Card) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="lg:col-span-5 bg-[#242426] hover:bg-[#28282B] border border-white/10 hover:border-[#FDFC22]/50 rounded-[36px] sm:rounded-[44px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="relative w-full h-48 rounded-[26px] overflow-hidden mb-6 border border-white/15">
                <Image
                  src="/images/5yvaq2chmhx61fqt04rbwdj5t.jpg"
                  alt="Senior gentle mobility and stretching"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FDFC22] text-black text-xs font-black shadow-md">
                  Seniors & Active Aging
                </span>
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15">
                  🧘 Joint & Balance Safe
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2.5 group-hover:text-[#FDFC22] transition-colors">
                Seniors & Gentle Mobility
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal mb-4">
                Gentle joint mobility, postural alignment, fall-prevention balance drills, and low-impact flexibility so grandparents can exercise right alongside family.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-white/60">Doctor-Approved Movements</span>
              <a
                href="#download-app"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#FDFC22] group-hover:translate-x-1 transition-transform"
              >
                <span>View Senior Track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Bento Card 4: All-Family Team Challenges (Large 7-Col Card) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="lg:col-span-7 bg-[#242426] hover:bg-[#28282B] border border-white/10 hover:border-[#FDFC22]/50 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group transition-all duration-500"
          >
            {/* Background Glow */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FDFC22]/15 rounded-full blur-3xl group-hover:bg-[#FDFC22]/25 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#FDFC22] text-black text-xs font-black uppercase tracking-wider shadow-md">
                    Whole Family Pass
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/15">
                    Weekend Park Festivals
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3 group-hover:text-[#FDFC22] transition-colors">
                  All-Family Team Challenges
                </h3>

                <p className="text-sm sm:text-base text-white/75 leading-relaxed font-normal mb-6">
                  Experience the electric energy of parents, kids, and coaches working as one unit. Enjoy friendly relay challenges, park wellness games, and shared awards.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-bold text-black bg-yellow-gradient px-3 py-1.5 rounded-xl">
                    🏆 Family Relay Cups
                  </span>
                  <span className="text-xs font-semibold text-white/90 bg-[#1C1C1E] px-3 py-1.5 rounded-xl border border-white/10">
                    🌳 Scenic Outdoor Parks
                  </span>
                  <span className="text-xs font-semibold text-white/90 bg-[#1C1C1E] px-3 py-1.5 rounded-xl border border-white/10">
                    📱 Shared Digital Badges
                  </span>
                </div>
              </div>

              {/* Photo Frame */}
              <div className="relative w-full md:w-56 h-56 sm:h-64 rounded-[30px] overflow-hidden shrink-0 border-2 border-[#FDFC22]/40 shadow-xl">
                <Image
                  src="/images/IMG_0313.JPG.jpg"
                  alt="All family group workout outdoors"
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-black text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  Community Meetups
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-semibold text-white/60">
                Over 50+ park locations across your city
              </span>
              <a
                href="#download-app"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#FDFC22] group-hover:translate-x-1.5 transition-transform"
              >
                <span>Join Next Family Meetup</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
