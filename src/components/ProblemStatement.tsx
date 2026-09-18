"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trash2, Users, AlertTriangle, Flame, Ban, TrendingDown } from "lucide-react";

export default function ProblemStatement() {
  return (
    <section
      id="problem"
      className="py-24 bg-[#F3EDE4] relative overflow-hidden border-y border-[#E8E0D4]"
    >
      {/* Background Shapes */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#E8E0D4]/60 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#F7EBE6]/60 rounded-full filter blur-3xl pointer-events-none" />

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
            <AlertTriangle size={14} />
            <span>The Dual Crisis in Our Cities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#211E1B] tracking-tight leading-tight"
          >
            Two Urgent Realities. <br />
            <span className="text-[#C45D3E] italic">One Interconnected Challenge.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6E675E]"
          >
            Peshawar faces mounting non-biodegradable advertising waste alongside a stark
            shortage of dignified, fair-wage livelihoods for marginalized women.
          </motion.p>
        </div>

        {/* Split Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: The Environmental Waste Crisis */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-[#E8E0D4] hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F7EBE6] rounded-bl-full -z-0" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#F7EBE6] text-[#C45D3E] flex items-center justify-center mb-6 shadow-inner">
                <Trash2 size={28} />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#C45D3E] mb-2">
                Ecological Breakdown
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#211E1B] mb-4">
                The Non-Biodegradable Banner Hazard
              </h3>
              <p className="text-[#6E675E] text-base leading-relaxed mb-6">
                Across Pakistan, thousands of square meters of polyvinyl chloride (PVC) flex
                banners are erected for political rallies, commercial billboard promotions, and
                events. When campaigns end, these heavy banners are ripped down and dumped in open
                city landfills or burned on road edges.
              </p>

              <div className="space-y-3.5 pt-4 border-t border-[#E8E0D4]">
                <div className="flex items-start gap-3 text-sm text-[#36322D]">
                  <Flame size={18} className="text-[#C45D3E] shrink-0 mt-0.5" />
                  <span>
                    <strong>Toxic Emissions:</strong> Burning PVC releases hazardous dioxins,
                    furans, and carcinogenic heavy metals into urban air.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#36322D]">
                  <Ban size={18} className="text-[#C45D3E] shrink-0 mt-0.5" />
                  <span>
                    <strong>400+ Years to Decompose:</strong> Synthetic vinyl fibers persist in
                    soil, clogging drainage canals and generating microplastics.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E8E0D4]/60 flex items-center justify-between text-xs font-semibold text-[#C45D3E]">
              <span>LANDFILL ACCUMULATION</span>
              <span className="font-mono bg-[#F7EBE6] px-2.5 py-1 rounded-full">
                High Priority Crisis
              </span>
            </div>
          </motion.div>

          {/* Card 2: The Socio-Economic Livelihood Gap */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-[#E8E0D4] hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E4ECE7] rounded-bl-full -z-0" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#E4ECE7] text-[#203a2e] flex items-center justify-center mb-6 shadow-inner">
                <Users size={28} />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#3A5B4A] mb-2">
                Socio-Economic Vulnerability
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#211E1B] mb-4">
                The Livelihood Gap for Marginalized Women
              </h3>
              <p className="text-[#6E675E] text-base leading-relaxed mb-6">
                In peri-urban communities across Khyber Pakhtunkhwa, millions of women possess
                traditional stitching and textile skills but remain trapped outside the formal
                economy due to lack of market access, fair-wage contracts, and continuous design
                mentorship.
              </p>

              <div className="space-y-3.5 pt-4 border-t border-[#E8E0D4]">
                <div className="flex items-start gap-3 text-sm text-[#36322D]">
                  <TrendingDown size={18} className="text-[#3A5B4A] shrink-0 mt-0.5" />
                  <span>
                    <strong>Informal Exploitation:</strong> Home-based female stitchers are
                    frequently underpaid by middle-tier middlemen with zero income security.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#36322D]">
                  <Users size={18} className="text-[#3A5B4A] shrink-0 mt-0.5" />
                  <span>
                    <strong>Untapped Economic Potential:</strong> Without modern vocational
                    equipment and upcycling skills, their craftsmanship stays undervalued.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E8E0D4]/60 flex items-center justify-between text-xs font-semibold text-[#3A5B4A]">
              <span>ECONOMIC EMPOWERMENT</span>
              <span className="font-mono bg-[#E4ECE7] px-2.5 py-1 rounded-full text-[#203a2e]">
                Untapped Potential
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
