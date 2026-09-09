"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "how-it-works",
        "app-tour",
        "programs",
        "services",
        "reviews",
        "faq",
        "contact",
      ];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "How It Works", href: "/#how-it-works", id: "how-it-works" },
    { name: "App Tour", href: "/#app-tour", id: "app-tour" },
    { name: "Programs", href: "/#programs", id: "programs" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Reviews", href: "/#reviews", id: "reviews" },
    { name: "FAQ", href: "/#faq", id: "faq" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#1C1C1E]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/60"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Image */}
        <Link href="/#home" className="flex items-center gap-2 group">
          <div className="relative h-10 sm:h-12 w-36 sm:w-44 flex items-center">
            <Image
              src="/logo.png"
              alt="Family Phys. Ed."
              fill
              priority
              sizes="(max-width: 640px) 144px, 176px"
              className="object-contain object-left group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_10px_rgba(253,252,34,0.3)]"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 text-xs lg:text-sm font-semibold transition-colors flex flex-col items-center ${
                  isActive ? "text-[#FDFC22]" : "text-white/80 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-[#FDFC22] shadow-[0_0_8px_#FDFC22]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="/#download-app"
            className="px-6 py-2.5 rounded-xl bg-yellow-gradient text-black font-extrabold text-sm hover:opacity-90 active:scale-95 transition-all shadow-[0_4px_20px_rgba(253,252,34,0.25)] hover:shadow-[0_4px_30px_rgba(253,252,34,0.45)] cursor-pointer flex items-center gap-2 group"
          >
            <span>Get the App</span>
            <ArrowDownToLine className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="xl:hidden flex items-center gap-3">
          <a
            href="/#download-app"
            className="sm:hidden px-3.5 py-1.5 rounded-lg bg-[#FDFC22] text-black font-extrabold text-xs flex items-center gap-1 shadow-md"
          >
            <span>App</span>
            <ArrowDownToLine className="w-3 h-3" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="xl:hidden bg-[#242426] border-b border-white/10 px-6 py-6 shadow-2xl"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 transition-colors ${
                  activeSection === link.id
                    ? "text-[#FDFC22] font-bold flex items-center justify-between"
                    : "text-white/80"
                }`}
              >
                <span>{link.name}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#FDFC22]" />
                )}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/#download-app"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-yellow-gradient text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Download App</span>
                <ArrowDownToLine className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
