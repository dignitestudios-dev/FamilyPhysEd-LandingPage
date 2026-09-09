"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does Family Phys. Ed. work for different age groups?",
      a: "Our certified coaches structure sessions with multi-tier movements. For example, during a family circuit, kids perform agility cone runs, parents perform strength intervals, and seniors do low-impact balance routines — allowing everyone to exercise together safely at their own intensity.",
    },
    {
      q: "Where are in-person workouts hosted?",
      a: "In-person group workouts take place in approved local parks, community centers, and school fields. You can easily view all upcoming locations and nearby parks on the app's interactive map with directions and parking details.",
    },
    {
      q: "Are the coaches background-checked and certified?",
      a: "Yes, 100%. Every coach on Family Phys. Ed. passes comprehensive background checks and holds recognized certifications in youth athletic conditioning, group fitness, and CPR/First Aid. You can inspect coach credentials and family ratings directly in the app.",
    },
    {
      q: "What equipment do we need to bring?",
      a: "Most community park sessions only require comfortable workout clothes, sneakers, and a water bottle! All cones, agility ladders, and group training equipment are provided by your certified coach. For at-home workouts, simple bodyweight exercises are featured.",
    },
    {
      q: "Can one subscription cover our whole family?",
      a: "Yes! Our All-Family Pass allows parents, kids, and grandparents under one household to join unlimited weekly community sessions and access the complete on-demand digital workout library.",
    },
    {
      q: "How do I become a certified Family Phys. Ed. Coach?",
      a: "If you are a passionate fitness professional, you can apply directly through the app or contact our team. We provide training materials, local park permits, insurance coverage, and client booking tools.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-36 bg-[#1C1C1E] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#FDFC22]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDFC22]/10 border border-[#FDFC22]/30 text-[#FDFC22] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Frequently Asked{" "}
            <span className="font-black text-yellow-gradient drop-shadow-[0_0_35px_rgba(253,252,34,0.4)]">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/75 font-medium leading-relaxed">
            Everything you need to know about getting started, memberships, and park sessions.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#242426] border border-white/10 hover:border-[#FDFC22]/30 rounded-2xl sm:rounded-3xl overflow-hidden transition-colors shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <span className="text-base sm:text-lg font-extrabold text-white tracking-tight group-hover:text-[#FDFC22] transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#FDFC22] text-black border-transparent shadow-md" : "text-white/70"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-0 text-sm sm:text-base text-white/75 font-normal leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center bg-[#242426] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#FDFC22]/20 border border-[#FDFC22]/40 flex items-center justify-center shrink-0 text-[#FDFC22]">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-white text-base sm:text-lg">
                Have more questions?
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-medium">
                Our support and coaching team is here to assist you anytime.
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-yellow-gradient text-black font-extrabold text-xs sm:text-sm hover:opacity-95 active:scale-95 transition-all shrink-0 shadow-md"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
