"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Force manual scroll restoration so browser refresh loads directly at home page top
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      const resetToHome = () => {
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        setActiveSection("home");
      };

      // Force top immediately on mount
      resetToHome();

      // Guard against browser late-hydration scroll restoration or layout shifts
      const t1 = setTimeout(resetToHome, 50);
      const t2 = setTimeout(resetToHome, 200);

      window.addEventListener("load", resetToHome);

      const handleBeforeUnload = () => {
        window.scrollTo(0, 0);
      };
      window.addEventListener("beforeunload", handleBeforeUnload);

      const handleScroll = () => {
        setScrolled(window.scrollY > 20);

        const sections = [
          "team",
          "shapers",
          "products",
          "impact",
          "goals",
          "activities",
          "solution",
          "problem",
          "home",
        ];

        const currentY =
          window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
        const scrollPosition = currentY + 150;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const elTop = el.getBoundingClientRect().top + currentY;
            if (elTop <= scrollPosition) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        window.removeEventListener("load", resetToHome);
        window.removeEventListener("beforeunload", handleBeforeUnload);
        window.removeEventListener("scroll", handleScroll);
      };
    }
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#home") {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
      return;
    }

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const executeScroll = () => {
        const headerOffset = 84;
        const currentScrollY =
          window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const elementRect = targetElement.getBoundingClientRect();
        const targetTop = elementRect.top + currentScrollY - headerOffset;

        window.scrollTo({
          top: Math.max(0, Math.round(targetTop)),
          behavior: "smooth",
        });
      };

      // Immediate scroll attempt
      executeScroll();

      // Second scroll attempt after mobile menu begins collapsing to guarantee WebKit/mobile execution
      setTimeout(() => {
        executeScroll();
        setActiveSection(targetId);
        window.history.replaceState(null, "", href);
      }, 60);
    }
  };

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
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45D3E] rounded-lg p-1 cursor-pointer"
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
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-[#F3EDE4]/60 p-1 rounded-full border border-[#E8E0D4]/70">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                    isActive
                      ? "text-white"
                      : "text-[#554E45] hover:text-[#211e1b] hover:bg-[#FAF7F2]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      className="absolute inset-0 rounded-full bg-[#203a2e] -z-0 shadow-xs"
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#shapers"
              onClick={(e) => scrollToSection(e, "#shapers")}
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
                {navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-medium transition-colors flex items-center justify-between cursor-pointer active:scale-[0.98] ${
                        isActive
                          ? "bg-[#203a2e] text-white font-semibold shadow-xs"
                          : "text-[#211e1b] hover:bg-[#F3EDE4] hover:text-[#C45D3E]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#E07A5F]" />}
                    </a>
                  );
                })}
                <div className="pt-2">
                  <a
                    href="#shapers"
                    onClick={(e) => scrollToSection(e, "#shapers")}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-center font-semibold text-white bg-[#C45D3E] hover:bg-[#A8472A] transition-colors shadow cursor-pointer active:scale-95"
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
