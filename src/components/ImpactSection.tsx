"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Recycle, Users, ShoppingBag, HeartHandshake, Sparkles } from "lucide-react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
}: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(from + (to - from) * easeOut);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  const stats = [
    {
      id: "banners",
      label: "Plastic Banners Diverted",
      subtext: "Diverted from open landfills and roadside burning",
      value: 1000,
      suffix: "+ kg",
      icon: Recycle,
      cardBg: "bg-white",
      textColor: "text-[#203a2e]",
      iconBg: "bg-[#E4ECE7] text-[#203a2e]",
    },
    {
      id: "artisans",
      label: "Female Artisans Empowered",
      subtext: "Equipped with advanced vocational training & steady income",
      value: 50,
      suffix: "+",
      icon: Users,
      cardBg: "bg-white",
      textColor: "text-[#C45D3E]",
      iconBg: "bg-[#F7EBE6] text-[#C45D3E]",
    },
    {
      id: "products",
      label: "Upcycled Goods Crafted",
      subtext: "Zero-waste lifestyle items created by local craftswomen",
      value: 3500,
      suffix: "+",
      icon: ShoppingBag,
      cardBg: "bg-white",
      textColor: "text-[#211E1B]",
      iconBg: "bg-[#E8E0D4] text-[#211E1B]",
    },
    {
      id: "wages",
      label: "Fair Living Wage Standard",
      subtext: "Directly financing food security, education, and healthcare",
      value: 100,
      suffix: "%",
      icon: HeartHandshake,
      cardBg: "bg-white",
      textColor: "text-[#3A5B4A]",
      iconBg: "bg-[#E4ECE7] text-[#3A5B4A]",
    },
  ];

  return (
    <section id="impact" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-[#D97757]/15 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-[#5B826F]/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EBE6] text-[#C45D3E] text-xs sm:text-sm font-semibold mb-4 border border-[#D97757]/30"
          >
            <Sparkles size={14} />
            <span>Measurable Impact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#211E1B] tracking-tight leading-tight"
          >
            Tangible Impact in Numbers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6E675E]"
          >
            Our circular model connects ecological conservation directly with socio-economic
            dignity. Every metric represents real tons diverted and real lives transformed.
          </motion.p>
        </div>

        {/* 4 Stat Cards Grid with Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className={`rounded-3xl ${item.cardBg} p-6 sm:p-8 shadow-sm border border-[#E8E0D4] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 shadow-inner`}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Animated Counter Display */}
                  <div className={`font-serif text-4xl sm:text-5xl font-extrabold ${item.textColor} tracking-tight mb-2`}>
                    <AnimatedCounter to={item.value} suffix={item.suffix} />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#211E1B] mb-2">
                    {item.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6E675E] leading-relaxed">
                    {item.subtext}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E0D4]/60 text-[11px] font-semibold text-[#6E675E] uppercase tracking-wider shrink-0 whitespace-nowrap">
                  Verified Hub Metric
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Community Testimonial / Story Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 rounded-3xl bg-[#F3EDE4] border border-[#E8E0D4] p-8 sm:p-10 relative"
        >
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-[#211E1B] italic leading-relaxed mb-6">
              &ldquo;UpflexSolutions didn&apos;t just teach us how to sew heavy materials — they
              gave us dignity, pride, and the financial freedom to send our daughters to school.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C45D3E] text-white flex items-center justify-center font-bold text-sm">
                A
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#211E1B]">Artisan Guild Member</div>
                <div className="text-xs text-[#6E675E]">Peshawar Artisan Cohort #1</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
