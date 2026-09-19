"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Recycle,
  Sparkles,
  Scissors,
  ShoppingBag,
  ArrowRight,
  Award,
} from "lucide-react";

export default function CircularSolution() {
  const steps = [
    {
      number: "01",
      title: "Collect & Recover",
      subtitle: "Reclaiming Outdoor Waste",
      description:
        "We coordinate with local event organizers, billboard advertising agencies, and universities to intercept post-campaign PVC vinyl banners before they enter landfills.",
      icon: Recycle,
      tag: "Zero Waste Intake",
      color: "bg-[#E4ECE7] text-[#203a2e] border-[#5B826F]/30",
    },
    {
      number: "02",
      title: "Vocational Training",
      subtitle: "Upskilling Female Artisans",
      description:
        "Women from marginalized households join specialized sewing masterclasses, mastering heavy-gauge industrial stitching, pattern-cutting, and quality inspection.",
      icon: Scissors,
      tag: "Vocational Academies",
      color: "bg-[#F7EBE6] text-[#C45D3E] border-[#D97757]/30",
    },
    {
      number: "03",
      title: "Handcrafted Manufacturing",
      subtitle: "Crafting Durable Goods",
      description:
        "Every banner features distinct colors and typography. Artisans cut and assemble them into one-of-a-kind, water-resistant tote bags, laptop sleeves, and organizers.",
      icon: Sparkles,
      tag: "Bespoke & Weatherproof",
      color: "bg-[#E8E0D4] text-[#211E1B] border-[#D6CCBF]",
    },
    {
      number: "04",
      title: "Ethical Market Sales",
      subtitle: "Sustainable Reinvestment",
      description:
        "Finished goods are marketed to eco-conscious consumers, universities, and corporate gifting partners. Revenues fund fair-wage artisan stipends and expand the circular hub.",
      icon: ShoppingBag,
      tag: "Fair-Wage Commerce",
      color: "bg-[#E4ECE7] text-[#3A5B4A] border-[#5B826F]/30",
    },
  ];

  return (
    <section id="solution" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
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
            <Recycle size={14} className="text-[#3A5B4A]" />
            <span>The UpflexSolutions Loop</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#211E1B] tracking-tight leading-tight"
          >
            A Closed-Loop Model for <br />
            <span className="text-[#3A5B4A] italic">Planet &amp; People</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6E675E]"
          >
            We take discarded synthetic banner material and redirect its trajectory through
            empowerment, artisan craftsmanship, and ethical commerce.
          </motion.p>
        </div>

        {/* 4-Step Interactive Flow Grid with Sequential Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="group relative rounded-3xl bg-white p-6 sm:p-7 shadow-sm border border-[#E8E0D4] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#6E675E] border border-[#E8E0D4] shrink-0 whitespace-nowrap">
                      STEP {step.number}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${step.color} shadow-inner group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#C45D3E] mb-1">
                    {step.subtitle}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#211E1B] mb-3 group-hover:text-[#203a2e] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#6E675E] text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Card Footer Badge */}
                <div className="pt-4 border-t border-[#E8E0D4]/70 flex items-center justify-between text-xs">
                  <span className="font-medium text-[#203a2e] bg-[#FAF7F2] px-2.5 py-1 rounded-md shrink-0 whitespace-nowrap">
                    {step.tag}
                  </span>
                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={14}
                      className="text-[#6E675E] hidden lg:block group-hover:translate-x-1 transition-transform"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Circular Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-3xl bg-gradient-to-r from-[#203a2e] to-[#2D503F] text-[#FAF7F2] p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#3A5B4A] flex items-center justify-center shrink-0">
              <Award size={28} className="text-[#E07A5F]" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold">
                Dignified, Ethical &amp; Environmentally Sound
              </h4>
              <p className="text-sm text-[#E4ECE7]/80 mt-1 max-w-xl">
                Every purchase ensures durable PVC material stays out of city landfills while directly
                funding healthcare, nutrition, and child education for artisan families.
              </p>
            </div>
          </div>

          <a
            href="#products"
            className="shrink-0 px-6 py-3 rounded-full bg-[#C45D3E] text-white font-semibold text-sm hover:bg-[#A8472A] transition-all duration-200 shadow hover:shadow-md"
          >
            Explore Upcycled Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
