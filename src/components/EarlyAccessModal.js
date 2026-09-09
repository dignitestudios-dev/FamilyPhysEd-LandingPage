"use client";

import { useState } from "react";
import { X, CheckCircle, Sparkles, Smartphone, ArrowRight } from "lucide-react";

export default function EarlyAccessModal({ isOpen, onClose }) {
  const [role, setRole] = useState("family");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all animate-fadeIn">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={handleReset} />

      <div className="relative w-full max-w-lg bg-[#242426] border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#FDFC22]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FDFC22]/10 border border-[#FDFC22]/30 text-[#FDFC22] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Limited Early Access
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Get the Family Phys. Ed. App
            </h3>
            <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
              Be the first to know when we launch in your area. Pre-register today for <strong>30 days of free premium family sessions</strong>!
            </p>

            {/* Role Selector */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#1C1C1E] rounded-2xl mb-5 border border-white/5">
              <button
                type="button"
                onClick={() => setRole("family")}
                className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                  role === "family"
                    ? "bg-[#FDFC22] text-black shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                I&apos;m a Parent / Family
              </button>
              <button
                type="button"
                onClick={() => setRole("coach")}
                className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                  role === "coach"
                    ? "bg-[#FDFC22] text-black shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                I&apos;m a Coach / Trainer
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/60 mb-1.5 pl-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#1C1C1E] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#FDFC22] transition-colors text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-yellow-gradient text-black font-bold text-base hover:opacity-95 active:scale-[0.99] transition-all shadow-[0_0_25px_rgba(253,252,34,0.3)] flex items-center justify-center gap-2"
              >
                <span>Reserve VIP Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[12px] text-white/40">
                🔒 We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle className="w-8 h-8 text-[#FDFC22]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the VIP List!</h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Thank you for pre-registering with <strong>{email}</strong>. We will notify you the moment the iOS & Android apps go live with your exclusive welcome bonus!
            </p>
            <button
              onClick={handleReset}
              className="py-3 px-6 rounded-xl bg-[#FDFC22] text-black font-semibold text-sm hover:opacity-95 transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
