"use client";

import Image from "next/image";
import { Star, Quote, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "The Martinez Family",
      role: "Parents of 3 (Miami, FL)",
      avatar: "/images/FB_IMG_1684246937361.jpg",
      rating: 5,
      story:
        "Family Phys. Ed. completely transformed our weekends. Instead of the kids glued to iPads, we are out in the park competing in relay races and laughing together. It brought us closer than ever!",
      stats: "Completed 42 Family Sessions",
    },
    {
      name: "Coach Marcus Vance",
      role: "Certified Youth & Family Coach",
      avatar: "/images/family phys 3.jpg",
      rating: 5,
      story:
        "As a trainer for 8+ years, this app makes managing group meetups and tailoring workouts for multi-generational families incredibly smooth. The community spirit is electric!",
      stats: "500+ Happy Families Coached",
    },
    {
      name: "Sarah & David Jenkins",
      role: "Grandmother & Grandson Duo",
      avatar: "/images/1782917347421.jpg",
      rating: 5,
      story:
        "I was worried I wouldn’t be able to keep up, but the gentle mobility tracks allowed me to exercise right alongside my 10-year-old grandson. My joints feel years younger!",
      stats: "6 Month Active Streak",
    },
  ];

  return (
    <section id="reviews" className="relative py-24 sm:py-36 bg-[#171719] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FDFC22]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDFC22]/10 border border-[#FDFC22]/30 text-[#FDFC22] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-[#FDFC22]" />
            Real Stories, Real Impact
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Loved By{" "}
            <span className="font-black text-yellow-gradient drop-shadow-[0_0_35px_rgba(253,252,34,0.4)]">
              Families & Coaches
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/75 font-medium leading-relaxed">
            See how Family Phys. Ed. is creating active, healthy routines and stronger bonds across thousands of households.
          </p>
        </motion.div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[#242426] hover:bg-[#28282B] border border-white/10 hover:border-[#FDFC22]/40 rounded-[36px] p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#FDFC22] text-[#FDFC22]"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-white/15 group-hover:text-[#FDFC22]/50 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-white/80 leading-relaxed italic mb-8 font-normal">
                  &ldquo;{item.story}&rdquo;
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FDFC22] shrink-0 shadow-md">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-extrabold text-white leading-tight">
                      {item.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-[#FDFC22]" />
                  </div>
                  <div className="text-xs text-white/60 font-medium mt-0.5">
                    {item.role}
                  </div>
                  <div className="text-[11px] font-bold text-[#FDFC22] mt-1">
                    {item.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
