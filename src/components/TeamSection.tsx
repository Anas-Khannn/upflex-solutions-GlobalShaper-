"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Shield } from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  bio: string;
  photoUrl?: string | null; // Leave null/undefined for icon placeholder; plug real URL here later
  imagePosition?: string;
  instagram?: string;
  linkedin?: string;
}

export default function TeamSection() {
  // Team members list in exact requested order
  const teamMembers: TeamMember[] = [
    {
      id: "aizaz-ahmad",
      name: "Aizaz Ahmad",
      role: "Lead",
      affiliation: "Global Shapers Peshawar Hub",
      bio: "Spearheading overall strategy, municipal partnership alignments, and sustainable circular scaling across the Peshawar region.",
      photoUrl: "/team/aizaz-ahmad.jpg",
      instagram: "https://www.instagram.com/aizaz_ahmaad",
      linkedin: "https://www.linkedin.com/in/muhammadaizazahmad",
    },
    {
      id: "osama-khan",
      name: "Osama Khan",
      role: "Co-Lead",
      affiliation: "Global Shapers Peshawar Hub",
      bio: "Overseeing project operations, collection logistics, corporate relations, and key hub communications.",
      photoUrl: "/team/osama-khan.jpg",
      imagePosition: "object-[center_20%]",
      instagram: "https://www.instagram.com/khan_mosama",
      linkedin: "https://www.linkedin.com/in/muhammad-osama-khan-63126a210?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      id: "noor-ul-ain",
      name: "Noor Ul Ain",
      role: "Co-Lead (Female)",
      affiliation: "Global Shapers Peshawar Hub",
      bio: "Leading female artisan community development, vocational curriculum, artisan welfare, and ethical fair-wage integration.",
      photoUrl: "/team/noor-ul-ain.jpg",
      imagePosition: "object-[center_20%]",
      instagram: "https://instagram.com/noor_blogspace?igshid=NGExMmI2YTkyZg==",
      linkedin: "https://www.linkedin.com/in/noor-ul-aainn",
    },
    {
      id: "rizwan-khan",
      name: "Rizwan Khan",
      role: "Co-Lead",
      affiliation: "Global Shapers Peshawar Hub",
      bio: "Managing material transformation pipelines, production quality standards, and technical hub execution.",
      photoUrl: "/team/rizwan-khan.jpg",
      imagePosition: "object-[center_20%]",
      instagram: "https://www.instagram.com/rizwan_khann_20?stkn=M3J3MzE1b2JqdmRk",
      linkedin: "https://www.linkedin.com/in/rizwan-khan-khattak?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  return (
    <section id="team" className="py-24 bg-[#F3EDE4] relative overflow-hidden border-t border-[#E8E0D4]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#E8E0D4]/70 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#F7EBE6]/60 rounded-full filter blur-3xl pointer-events-none" />

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
            <Users size={14} className="text-[#3A5B4A]" />
            <span>Project Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#211E1B] tracking-tight leading-tight"
          >
            Meet the Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6E675E]"
          >
            Driven by a shared mission to bridge environmental sustainability with grassroots
            gender empowerment under the Global Shapers Peshawar Hub.
          </motion.p>
        </div>

        {/* 4 Team Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group rounded-3xl bg-white p-6 sm:p-7 text-center shadow-sm border border-[#E8E0D4] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between"
            >
              <div className="w-full flex flex-col items-center">
                {/* Circular Icon / Photo Avatar Component */}
                <div className="relative mb-3">
                  <Avatar
                    name={member.name}
                    photoUrl={member.photoUrl}
                    imagePosition={member.imagePosition}
                    size="xl"
                    className="border-4 border-[#FAF7F2] shadow-md group-hover:border-[#C45D3E]/40 transition-colors"
                  />
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#203a2e] text-white flex items-center justify-center text-xs shadow">
                    <Shield size={13} />
                  </div>
                </div>

                {/* Social links below pic */}
                {member.instagram || member.linkedin ? (
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on Instagram`}
                        title={`${member.name} on Instagram`}
                        className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#6E675E] hover:bg-[#C45D3E] hover:text-white border border-[#E8E0D4] hover:border-[#C45D3E] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                      >
                        <InstagramIcon size={15} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        title={`${member.name} on LinkedIn`}
                        className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#6E675E] hover:bg-[#203a2e] hover:text-white border border-[#E8E0D4] hover:border-[#203a2e] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                      >
                        <LinkedinIcon size={15} />
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="h-4" />
                )}

                {/* Name */}
                <h3 className="font-serif text-xl font-bold text-[#211E1B] mb-1 group-hover:text-[#C45D3E] transition-colors">
                  {member.name}
                </h3>

                {/* Role Pill Label */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F7EBE6] text-[#C45D3E] border border-[#D97757]/20 mb-3 shrink-0 whitespace-nowrap">
                  {member.role}
                </span>

                {/* Affiliation Subtitle */}
                <span className="text-[11px] font-semibold text-[#3A5B4A] uppercase tracking-wider block mb-4">
                  {member.affiliation}
                </span>

                {/* Bio Description */}
                <p className="text-xs text-[#6E675E] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Bottom Subtle Tag */}
              <div className="w-full mt-6 pt-4 border-t border-[#E8E0D4]/70 flex items-center justify-center text-[11px] text-[#6E675E] font-medium">
                <a
                  href="https://www.linkedin.com/company/global-shapers-peshawar-hub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C45D3E] hover:underline transition-colors"
                  title="Global Shapers Peshawar Hub on LinkedIn"
                >
                  Global Shaper Peshawar Hub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
