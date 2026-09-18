"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, CheckCircle2, Compass, Sparkles } from "lucide-react";

export default function GoalsSection() {
  const shortTermGoals = [
    {
      title: "Divert 1,000+ kg of PVC Banner Waste",
      desc: "Prevent more than one metric ton of toxic synthetic flex material from being dumped into landfills or burned on city perimeters.",
    },
    {
      title: "Fair-Wage Livelihoods for Pilot Cohort",
      desc: "Provide guaranteed fair living wage income for 20+ female artisans, fostering financial independence in vulnerable households.",
    },
    {
      title: "Formalize 15+ Collection Partnerships",
      desc: "Establish direct waste pickup pipelines with billboard printing agencies, educational institutions, and corporate event organizers.",
    },
    {
      title: "Initial Market Catalogue Launch",
      desc: "Roll out a curated line of upcycled tote bags, laptop sleeves, and utility pouches for eco-conscious consumers.",
    },
  ];

  const longTermGoals = [
    {
      title: "Regional Scaling Across KP & Pakistan",
      desc: "Replicate the Upflex circular model across major urban hubs including Peshawar, Islamabad, Lahore, and Karachi.",
    },
    {
      title: "Normalized Community-Led Circular Economy",
      desc: "Transform public attitudes towards industrial and advertising waste through education and grassroots civic engagement.",
    },
    {
      title: "Significant Reduction in Urban Plastic Burning",
      desc: "Work with municipal authorities to eliminate open incineration of billboard vinyl and create strict material reclamation policies.",
    },
    {
      title: "100+ Sustained Green Jobs & Cooperative",
      desc: "Transition the artisan group into a self-governing, women-owned cooperative with permanent production facilities and healthcare benefits.",
    },
  ];

  return (
    <section id="goals" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
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
            <Target size={14} className="text-[#3A5B4A]" />
            <span>Strategic Horizons</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#211E1B] tracking-tight leading-tight"
          >
            Our Roadmap for Change
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6E675E]"
          >
            We measure success both in immediate metric tons kept from incinerators and the long-term
            structural empowerment of artisan families.
          </motion.p>
        </div>

        {/* Side-by-Side Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Column 1: Short-Term Horizon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-[#E8E0D4] relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E8E0D4]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F7EBE6] text-[#C45D3E] flex items-center justify-center font-bold">
                  <Sparkles size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C45D3E]">
                    Phase 1 (Months 1 – 12)
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#211E1B]">
                    Short-Term Goals
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F7EBE6] text-[#C45D3E]">
                In Motion
              </span>
            </div>

            <div className="space-y-6">
              {shortTermGoals.map((goal, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#F7EBE6] text-[#C45D3E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#211E1B] mb-1">
                      {goal.title}
                    </h4>
                    <p className="text-sm text-[#6E675E] leading-relaxed">
                      {goal.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E0D4] bg-[#FAF7F2] -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 flex items-center justify-between text-xs text-[#6E675E]">
              <span>Pilot Target: Peshawar Metro Area</span>
              <span className="font-semibold text-[#C45D3E]">High Community Focus</span>
            </div>
          </motion.div>

          {/* Column 2: Long-Term Horizon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="rounded-3xl bg-[#203a2e] text-[#FAF7F2] p-8 sm:p-10 shadow-lg border border-[#335443] relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#335443]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#3A5B4A] text-[#E4ECE7] flex items-center justify-center font-bold">
                  <Compass size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E07A5F]">
                    Phase 2 &amp; Beyond
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Long-Term Vision
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#3A5B4A] text-[#E4ECE7]">
                Scale &amp; Policy
              </span>
            </div>

            <div className="space-y-6">
              {longTermGoals.map((goal, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#3A5B4A] text-[#E07A5F] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white mb-1">
                      {goal.title}
                    </h4>
                    <p className="text-sm text-[#E4ECE7]/80 leading-relaxed">
                      {goal.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#335443] bg-[#172c23] -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 flex items-center justify-between text-xs text-[#E4ECE7]/70">
              <span>National Vision: Sustainable Pakistan</span>
              <span className="font-semibold text-[#E07A5F]">Empowerment &amp; Zero-Waste</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
