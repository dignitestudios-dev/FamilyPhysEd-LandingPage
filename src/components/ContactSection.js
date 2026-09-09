"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36 bg-[#1C1C1E] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FDFC22]/15 rounded-full blur-[140px] pointer-events-none" />

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
            We&apos;re Here For You
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Get In{" "}
            <span className="font-black text-yellow-gradient drop-shadow-[0_0_35px_rgba(253,252,34,0.4)]">
              Touch
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/75 font-medium leading-relaxed">
            Have questions or feedback? Connect with our team and let&apos;s build an active, healthy future for your family together.
          </p>
        </motion.div>

        {/* Big Glassmorphic Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass-card rounded-[40px] sm:rounded-[50px] p-4 sm:p-6 lg:p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Subtle Glow in Top Right Corner */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#FDFC22]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
            {/* Left Card: Bright Yellow Featured Information Card */}
            <div className="lg:col-span-5 bg-yellow-gradient rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 flex flex-col justify-between text-[#1C1C1E] shadow-2xl">
              <div>
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-black/10 font-black text-xs uppercase tracking-wider mb-6">
                  Direct Support
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
                  Let&apos;s Connect and Achieve Together!
                </h3>
                <p className="text-base sm:text-lg font-bold text-black/80 leading-relaxed mb-8">
                  Have questions about our group sessions, school programs, or coaching certifications? Our friendly team is always here to help.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="flex flex-col gap-4 pt-6 border-t border-black/15">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1C1C1E]" />
                  </div>
                  <span className="text-sm sm:text-base font-extrabold text-[#1C1C1E]">
                    Miami, FL
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#1C1C1E]" />
                  </div>
                  <a
                    href="mailto:info@FamilyPhysed.com"
                    className="text-sm sm:text-base font-extrabold text-[#1C1C1E] hover:underline"
                  >
                    info@FamilyPhysed.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#1C1C1E]" />
                  </div>
                  <a
                    href="tel:786-956-1500"
                    className="text-sm sm:text-base font-extrabold text-[#1C1C1E] hover:underline"
                  >
                    786-956-1500
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card: Dark Interactive Form */}
            <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-sm font-extrabold text-[#FDFC22] uppercase tracking-wider block mb-1">
                  Closer Than a Click Away
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Send us a quick message
                </h4>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-[#1C1C1E] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FDFC22] text-sm font-medium transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-[#1C1C1E] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FDFC22] text-sm font-medium transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-[#1C1C1E] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FDFC22] text-sm font-medium transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-[#1C1C1E] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FDFC22] text-sm font-medium transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write here! How can we help your family?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-[#1C1C1E] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FDFC22] text-sm font-medium transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-2xl bg-[#FDFC22] text-black font-black text-base hover:opacity-95 transition-all shadow-[0_4px_25px_rgba(253,252,34,0.35)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{loading ? "Sending..." : "Submit"}</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              ) : (
                <div className="bg-[#1C1C1E] rounded-3xl p-8 text-center border border-[#FDFC22]/30 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#FDFC22]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#FDFC22]" />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-2">Message Sent!</h4>
                  <p className="text-white/75 text-sm mb-6 max-w-sm mx-auto font-medium">
                    Thank you, {formData.firstName || "friend"}! A member of the Family Phys. Ed. coaching team will reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
