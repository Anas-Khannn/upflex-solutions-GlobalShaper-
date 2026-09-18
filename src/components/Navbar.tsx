"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "Activities", href: "#activities" },
    { name: "Goals", href: "#goals" },
    { name: "Impact", href: "#impact" },
    { name: "Products", href: "#products" },
    { name: "Get Involved", href: "#shapers" },
    { name: "Team", href: "#team" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Initiative Tagline Banner */}
      <div className="bg-[#203a2e] text-[#FAF7F2] text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#335443]/40">
        <Sparkles size={12} className="text-[#E07A5F] animate-pulse shrink-0" />
        <span>
          A project initiative of{" "}
          <a
            href="https://www.linkedin.com/company/global-shapers-peshawar-hub/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Global Shapers Peshawar Hub on LinkedIn"
            className="text-[#FAF7F2] font-semibold underline decoration-[#C45D3E] underline-offset-2 hover:text-[#E07A5F] transition-colors inline-flex items-center gap-1 group"
          >
            <span>Global Shapers Peshawar Hub</span>
            <ArrowUpRight size={12} className="text-[#E07A5F] opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </span>
        <span className="hidden sm:inline text-xs text-[#8FA89B]">• Khyber Pakhtunkhwa, Pakistan</span>
      </div>

      {/* Main Navigation Bar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "py-2.5 bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8E0D4]"
            : "py-4 bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-[#E8E0D4]/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            aria-label="UpFlex Solutions"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45D3E] rounded-lg p-1"
          >
            <div className="relative h-12 w-14 sm:h-13 sm:w-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="UpFlex - Repurposing For Tomorrow"
                fill
                priority
                className="object-contain"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-[#36322d] hover:text-[#C45D3E] hover:bg-[#F3EDE4] transition-all duration-150 active:scale-95 cursor-pointer select-none"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#shapers"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#C45D3E] hover:bg-[#A8472A] shadow-sm hover:shadow transition-all duration-150 active:scale-95 cursor-pointer select-none"
            >
              <span>Join Us</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#211e1b] hover:bg-[#F3EDE4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C45D3E] cursor-pointer active:scale-90"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden border-t border-[#E8E0D4] bg-[#FAF7F2] px-4 pt-3 pb-6 shadow-xl"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-base font-medium text-[#211e1b] hover:bg-[#F3EDE4] hover:text-[#C45D3E] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2">
                  <a
                    href="#shapers"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-center font-semibold text-white bg-[#C45D3E] hover:bg-[#A8472A] transition-colors shadow"
                  >
                    <span>We Need Shapers</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
