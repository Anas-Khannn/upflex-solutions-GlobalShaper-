"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Palette,
  Megaphone,
  Boxes,
  ArrowRight,
  CheckCircle2,
  X,
  Send,
  Sparkles,
} from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export default function WeNeedShapers() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const roles = [
    {
      id: "business-dev",
      title: "Digital Business Dev & Marketing",
      category: "Growth & Partnerships",
      description:
        "Help us drive B2B partnerships, corporate giftings, ecommerce sales, and digital storytelling to scale our circular revenue model across Pakistan.",
      icon: TrendingUp,
      accent: "bg-[#E4ECE7] text-[#203a2e]",
      borderColor: "border-[#5B826F]/30",
      skills: ["B2B Outreach", "Social Media Campaigns", "E-Commerce", "Brand Strategy"],
    },
    {
      id: "female-artists",
      title: "Female Artists & Pattern Stylists",
      category: "Artisanal Co-Creation",
      description:
        "Collaborate with our female artisan guild to conceptualize fresh product forms, color-blocked patterns, and artistic upcycling techniques.",
      icon: Palette,
      accent: "bg-[#F7EBE6] text-[#C45D3E]",
      borderColor: "border-[#D97757]/30",
      skills: ["Pattern Making", "Textile Design", "Artisan Mentorship", "Sustainable Fashion"],
    },
    {
      id: "community-outreach",
      title: "Community Outreach & Cleanliness",
      category: "Grassroots Mobilization",
      description:
        "Lead street cleanliness drives, neighborhood waste awareness events, and community-led collection initiatives in Peshawar.",
      icon: Megaphone,
      accent: "bg-[#E8E0D4] text-[#211E1B]",
      borderColor: "border-[#D6CCBF]",
      skills: ["Civic Engagement", "Youth Organizing", "Event Management", "Advocacy"],
    },
    {
      id: "supply-chain",
      title: "Supply Chain & Logistics",
      category: "Operations & Sorting",
      description:
        "Optimize our material reclamation pipeline — from billboard pickup coordination and non-toxic washing to warehousing and distribution.",
      icon: Boxes,
      accent: "bg-[#E4ECE7] text-[#3A5B4A]",
      borderColor: "border-[#5B826F]/30",
      skills: ["Logistics", "Inventory Flow", "Vendor Management", "Quality Assurance"],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: selectedRole,
          notes: formData.notes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application. Please try again.");
      }

      setFormSubmitted(true);
      setFormData({ name: "", email: "", notes: "" });
      setTimeout(() => {
        setFormSubmitted(false);
        setSelectedRole(null);
      }, 5000);
    } catch (err: unknown) {
      console.error("[Submission Error]", err);
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="shapers" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Warm Backing */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#F7EBE6]/60 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E4ECE7]/70 rounded-full filter blur-3xl pointer-events-none" />

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
            <span>Join the Movement</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#211E1B] tracking-tight leading-tight"
          >
            We Need Shapers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6E675E]"
          >
            UpflexSolutions is an open, collaborative initiative by Global Shapers Peshawar Hub.
            Lend your passion and skills to accelerate real circular change in our city.
          </motion.p>
        </div>

        {/* 4 Call-to-Action Cards with Spring Scale/Bounce Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 350, damping: 20 },
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className={`rounded-3xl bg-white p-6 sm:p-7 shadow-sm border ${role.borderColor} flex flex-col justify-between hover:shadow-xl transition-shadow`}
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${role.accent} flex items-center justify-center mb-6 shadow-inner`}
                  >
                    <Icon size={26} />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C45D3E] mb-2 block">
                    {role.category}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#211E1B] mb-3 leading-snug">
                    {role.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6E675E] leading-relaxed mb-6">
                    {role.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {role.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold bg-[#FAF7F2] text-[#36322D] px-2 py-0.5 rounded-md border border-[#E8E0D4] shrink-0 whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedRole(role.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#FAF7F2] text-[#203a2e] hover:bg-[#C45D3E] hover:text-white border border-[#E8E0D4] hover:border-[#C45D3E] transition-all duration-150 active:scale-95 cursor-pointer"
                >
                  <span>Apply For This Role</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Global Shapers Collaboration Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-[#203a2e] text-[#FAF7F2] border border-[#335443] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-[#E07A5F]">
              Peshawar Hub Network
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-1">
              Have a unique skill or idea?
            </h3>
            <p className="text-sm text-[#E4ECE7]/80 max-w-xl mt-1">
              Whether you are an environmental chemist, corporate partner, or volunteer writer,
              we welcome every hand dedicated to waste eradication.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSelectedRole("General Contributor / Volunteer")}
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#C45D3E] text-white font-semibold text-sm hover:bg-[#A8472A] transition-all duration-150 shadow active:scale-95 cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Interactive Application Modal */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#E8E0D4] shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-[#6E675E] hover:bg-[#E8E0D4] transition-colors cursor-pointer active:scale-90"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#E4ECE7] text-[#203a2e] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#211E1B] mb-2">
                    Thank You for Joining!
                  </h3>
                  <p className="text-sm text-[#6E675E] leading-relaxed">
                    Our lead team at Global Shapers Peshawar Hub will reach out shortly to welcome
                    you to the initiative.
                  </p>
                  <div className="mt-6 pt-5 border-t border-[#E8E0D4] flex flex-col items-center gap-2.5">
                    <span className="text-[11px] font-bold text-[#6E675E] uppercase tracking-wider">
                      Follow our ongoing story
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.instagram.com/upflex_solutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F3EDE4] text-[#203a2e] text-xs font-semibold border border-[#E8E0D4] transition-colors"
                      >
                        <InstagramIcon size={14} className="text-[#C45D3E]" />
                        <span>@upflex_solutions</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/upflex-solutions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F3EDE4] text-[#203a2e] text-xs font-semibold border border-[#E8E0D4] transition-colors"
                      >
                        <LinkedinIcon size={14} className="text-[#C45D3E]" />
                        <span>Upflex Solutions</span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C45D3E]">
                      Global Shapers Peshawar Hub
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#211E1B] mt-1">
                      Join as a Shaper
                    </h3>
                    <p className="text-xs text-[#6E675E] mt-1">
                      Applying for: <strong>{selectedRole}</strong>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#36322D] mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Fatima Ali"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D6CCBF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C45D3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#36322D] mb-1">
                        Email Address or WhatsApp
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. fatima@example.com / +92 300..."
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D6CCBF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C45D3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#36322D] mb-1">
                        How would you like to contribute?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        placeholder="Share a brief note about your background, availability, or ideas..."
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D6CCBF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C45D3E]"
                      />
                    </div>

                    <div className="pt-2">
                      {submitError && (
                        <div className="p-2.5 mb-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                          {submitError}
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 rounded-xl bg-[#203a2e] text-white font-semibold text-sm hover:bg-[#2D503F] shadow transition-all duration-150 active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                          isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            <span>Submitting Application...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <Send size={15} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
