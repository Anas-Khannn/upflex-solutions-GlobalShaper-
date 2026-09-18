"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, RefreshCw, Leaf, Palette } from "lucide-react";

export default function Hero() {
  const [activeArtIndex, setActiveArtIndex] = useState(0);

  // Automatically cycle through authentic artisan creations every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveArtIndex((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const heroCreations = [
    {
      id: "islamia-college",
      title: "Islamia College Peshawar (1913)",
      artisanStory:
        "Handcrafted tote featuring original artwork of Islamia College — the historic landmark of Khyber Pakhtunkhwa and Peshawar built in 1913, painted on reclaimed flex banner.",
      image: "/hero-tote-bag.jpg",
      tag: "Historic Landmark",
    },
    {
      id: "rickshaw-folk",
      title: "Peshawar Cycle Rickshaw",
      artisanStory:
        "Handcrafted tote celebrating Pakistan's beloved street culture & traditional rickshaw folk art within a green garland on vibrant terracotta flex canvas.",
      image: "/products/tote-rickshaw-orange.jpg",
      tag: "Indigenous Folk Art",
    },
    {
      id: "floral-fresco",
      title: "Mughal Floral Fresco",
      artisanStory:
        "Intricate Persian & Mughal arabesque floral rosettes hand-painted in rich azure blue on reclaimed billboard vinyl by local women artisans.",
      image: "/products/tote-floral-blue.jpg",
      tag: "Fresco Arabesque",
    },
    {
      id: "mangay-pottery",
      title: "Traditional 'Mangay' Pottery",
      artisanStory:
        "A tribute to rural Pashtun heritage — a henna-adorned artisan hand carrying a traditional clay water vessel ('Mangay') amidst vibrant festival colors.",
      image: "/products/tote-pottery-art.jpg",
      tag: "Heritage Craft",
    },
  ];

  const currentArt = heroCreations[activeArtIndex];
  const words = [
    "Transforming",
    "Billboard",
    "Waste",
    "Into",
    "Artisanal",
    "Livelihoods",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden earth-texture"
    >
      {/* Organic Warm Background Accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#E4ECE7]/70 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[480px] h-[480px] bg-[#F7EBE6]/80 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#FAF7F2] to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Animated Headline & Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4ECE7] border border-[#5B826F]/30 text-[#203a2e] text-xs sm:text-sm font-semibold mb-6 shadow-sm"
            >
              <Leaf size={14} className="text-[#3A5B4A]" />
              <span>Peshawar&apos;s Circular Economy Social Enterprise</span>
            </motion.div>

            {/* Staggered Animated Headline */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#211E1B] tracking-tight leading-[1.12] mb-6"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className={`inline-block mr-2.5 sm:mr-3.5 ${
                    word === "Artisanal" || word === "Livelihoods"
                      ? "text-[#C45D3E] italic underline decoration-[#D97757]/40 decoration-wavy underline-offset-4"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="text-lg sm:text-xl text-[#6E675E] leading-relaxed max-w-2xl mb-8"
            >
              UpflexSolutions upcycles discarded PVC banner waste into durable,
              sustainable lifestyle products while creating dignified vocational
              training and steady fair-wage incomes for marginalized female artisans.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#impact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#203a2e] text-white font-medium hover:bg-[#2D503F] shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group"
              >
                <span>Our Real-World Impact</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#solution"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F3EDE4] text-[#211E1B] border border-[#D6CCBF] font-medium hover:bg-[#E8E0D4] hover:text-[#C45D3E] transition-all duration-200"
              >
                <span>How It Works</span>
              </a>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 pt-6 border-t border-[#E8E0D4] flex flex-wrap items-center gap-6 text-xs text-[#6E675E] font-medium"
            >
              <div className="flex items-center gap-2">
                <RefreshCw size={15} className="text-[#3A5B4A]" />
                <span>100% Repurposed PVC Vinyl</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake size={15} className="text-[#C45D3E]" />
                <span>Fair Living Wages for Women</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#3A5B4A]" />
                <span>Waterproof &amp; Ultra-Durable</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual & Transformation Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Decorative Frame with low z-index so floating cards layer cleanly on top */}
              <div className="relative z-0 rounded-3xl overflow-hidden bg-white p-3.5 shadow-xl border border-[#E8E0D4]">
                <div className="relative h-[460px] sm:h-[510px] rounded-2xl overflow-hidden bg-[#203a2e]">
                  {/* Smooth Cross-Fading Background Image */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentArt.id}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full z-0"
                    >
                      <Image
                        src={currentArt.image}
                        alt={currentArt.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-cover object-center"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#203a2e]/95 via-[#203a2e]/20 to-black/30 pointer-events-none z-0" />

                  {/* Top Bar: Badges & Minimal Slide Indicators (low z-1) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-1 pointer-events-auto">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white/95 text-[#203a2e] shadow-sm backdrop-blur-md flex items-center gap-1.5 pointer-events-none">
                      <Sparkles size={12} className="text-[#C45D3E]" />
                      <span>Artisan Upcycling</span>
                    </span>

                    {/* Sleek Minimal Slide Indicators */}
                    <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-2.5 py-1.5 rounded-full z-1">
                      {heroCreations.map((creation, idx) => (
                        <button
                          key={creation.id}
                          type="button"
                          onClick={() => setActiveArtIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            activeArtIndex === idx
                              ? "w-6 bg-[#FAF7F2] shadow-xs"
                              : "w-1.5 bg-[#FAF7F2]/40 hover:bg-[#FAF7F2]/75"
                          }`}
                          title={creation.title}
                          aria-label={`Show ${creation.title}`}
                        />
                      ))}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentArt.id}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.3 }}
                        className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#203a2e]/90 text-[#FAF7F2] shadow-sm backdrop-blur-md pointer-events-none"
                      >
                        {currentArt.tag}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  {/* Bottom Feature Card Overlay with Landmark Art Highlight */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E0D4] shadow-lg z-1">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div>
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#C45D3E]">
                          Circular Transformation
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#211E1B]">
                          Discarded Billboard &rarr; Everyday Wear
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#203a2e] flex items-center justify-center p-2 shadow-sm shrink-0">
                        <Image
                          src="/logo-mark.png"
                          alt="UpFlex Official Ribbon Mark"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Art Tribute Highlight with smooth text transition */}
                    <div className="pt-2 border-t border-[#E8E0D4] flex items-start gap-2 min-h-[46px]">
                      <Palette size={15} className="text-[#C45D3E] shrink-0 mt-0.5" />
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={currentArt.id}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.35 }}
                          className="text-[11px] sm:text-xs text-[#554E45] leading-relaxed"
                        >
                          {currentArt.artisanStory}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge with high z-30 index */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-4 sm:-right-6 z-30 bg-[#FAF7F2] border border-[#D97757]/30 shadow-lg rounded-2xl p-4 flex items-center gap-3 pointer-events-auto"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F7EBE6] text-[#C45D3E] flex items-center justify-center font-bold">
                  🌱
                </div>
                <div>
                  <div className="text-xs font-medium text-[#6E675E]">Landfill Diversion</div>
                  <div className="text-lg font-serif font-bold text-[#203a2e]">1,000+ kg Target</div>
                </div>
              </motion.div>

              {/* Artisan Empowerment Pill with high z-30 index */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 z-30 bg-[#203a2e] text-white shadow-xl rounded-2xl p-4 flex items-center gap-3 border border-[#3A5B4A] pointer-events-auto"
              >
                <div className="w-10 h-10 rounded-xl bg-[#3A5B4A] text-[#E4ECE7] flex items-center justify-center">
                  <HeartHandshake size={22} />
                </div>
                <div>
                  <div className="text-xs text-[#E4ECE7]/80">Women Empowered</div>
                  <div className="text-base font-serif font-bold">Dignified Green Income</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
