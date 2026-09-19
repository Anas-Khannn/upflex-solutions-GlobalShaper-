"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, GraduationCap, PackageCheck, Store, ArrowUpRight } from "lucide-react";

export default function HubActivities() {
  const activities = [
    {
      id: "collection",
      title: "Waste Collection Campaigns",
      category: "Municipal & Corporate Sourcing",
      description:
        "Organizing structured collection drives across Peshawar in collaboration with print houses, universities, local government bodies, and advertising firms to divert discarded vinyl before it reaches dumpsites.",
      icon: Truck,
      stat: "1,000+ kg Target",
      accent: "from-[#E4ECE7] to-[#F3EDE4]",
      iconColor: "text-[#203a2e]",
      borderColor: "border-[#5B826F]/20",
      pillBg: "bg-[#E4ECE7] text-[#203a2e]",
    },
    {
      id: "skills",
      title: "Skill Development & Academies",
      category: "Vocational Artisan Training",
      description:
        "Providing intensive 6-week hands-on training sessions in pattern cutting, industrial sewing machine operation, zipper installation, and seam reinforcement for underprivileged female artisans.",
      icon: GraduationCap,
      stat: "50+ Artisans Cohort",
      accent: "from-[#F7EBE6] to-[#FAF7F2]",
      iconColor: "text-[#C45D3E]",
      borderColor: "border-[#D97757]/25",
      pillBg: "bg-[#F7EBE6] text-[#C45D3E]",
    },
    {
      id: "manufacturing",
      title: "Product Manufacturing",
      category: "Zero-Waste Craftsmanship",
      description:
        "Converting heavy PVC vinyl banners into functional everyday items — tote bags, laptop sleeves, tool organizers, and accessories — engineered for maximum tensile strength and water resistance.",
      icon: PackageCheck,
      stat: "100% Repurposed",
      accent: "from-[#E8E0D4] to-[#FAF7F2]",
      iconColor: "text-[#211E1B]",
      borderColor: "border-[#D6CCBF]",
      pillBg: "bg-[#E8E0D4] text-[#211E1B]",
    },
    {
      id: "market",
      title: "Market Integration",
      category: "B2B & Retail Distribution",
      description:
        "Connecting artisan-crafted sustainable merchandise directly to corporate partners for eco-friendly event swag, academic institutions, and conscious online retail buyers.",
      icon: Store,
      stat: "Sustainable Revenue",
      accent: "from-[#E4ECE7] to-[#FAF7F2]",
      iconColor: "text-[#3A5B4A]",
      borderColor: "border-[#5B826F]/25",
      pillBg: "bg-[#E4ECE7] text-[#3A5B4A]",
    },
  ];

  return (
    <section id="activities" className="py-24 bg-[#F3EDE4] relative overflow-hidden border-y border-[#E8E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4ECE7] text-[#203a2e] text-xs sm:text-sm font-semibold mb-4 border border-[#5B826F]/30"
          >
            <span>Peshawar Hub Operations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#211E1B] tracking-tight leading-tight"
          >
            Core Hub Activities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6E675E]"
          >
            From landfill interception to ethical consumer shelves, every pillar of our
            work is coordinated with community volunteers, artisans, and partners.
          </motion.p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((act, index) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className={`group rounded-3xl bg-white p-6 sm:p-10 shadow-sm border ${act.borderColor} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Subtle Card Glow */}
                <div
                  className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${act.accent} rounded-bl-full opacity-60 -z-0 transition-opacity group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-[#FAF7F2] ${act.iconColor} flex items-center justify-center border border-[#E8E0D4] shadow-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={28} />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 whitespace-nowrap ${act.pillBg}`}>
                      {act.stat}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#C45D3E] mb-2 block">
                    {act.category}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-[#211E1B] mb-3 group-hover:text-[#203a2e] transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-[#6E675E] text-base leading-relaxed mb-6">
                    {act.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#E8E0D4]/70 flex items-center justify-between text-sm font-semibold text-[#203a2e]">
                  <span className="group-hover:text-[#C45D3E] transition-colors">
                    Learn about this program
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] flex items-center justify-center group-hover:bg-[#C45D3E] group-hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
