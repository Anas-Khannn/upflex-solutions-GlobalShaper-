"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Recycle,
  Mail,
  MapPin,
  Globe,
  ArrowUp,
} from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#203a2e] text-[#FAF7F2] relative overflow-hidden pt-20 pb-12 border-t border-[#335443]">
      {/* Decorative Organic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D503F]/60 rounded-full filter blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#172c23]/70 rounded-full filter blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#335443]">
          {/* Col 1: Brand & Hub Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-14 w-16 flex items-center justify-center">
                <Image
                  src="/logo-light.png"
                  alt="UpFlex - Repurposing For Tomorrow"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="border-l border-[#335443] pl-3">
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  Upflex<span className="text-[#E07A5F]">Solutions</span>
                </span>
                <a
                  href="https://www.linkedin.com/company/global-shapers-peshawar-hub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[11px] font-semibold text-[#8FA89B] tracking-wider uppercase hover:text-[#E07A5F] transition-colors"
                  title="Global Shapers Peshawar Hub on LinkedIn"
                >
                  Global Shapers Peshawar Hub
                </a>
              </div>
            </div>

            <p className="text-sm text-[#E4ECE7]/80 leading-relaxed max-w-sm mb-6">
              A pioneering circular-economy enterprise converting discarded outdoor PVC banner waste
              into durable consumer goods while securing fair, dignified livelihoods for female
              artisans in Peshawar, Pakistan.
            </p>

            {/* Official Social Channels */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8FA89B] block">
                Official Channels
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/upflex_solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow UpFlex on Instagram (@upflex_solutions)"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#172c23]/90 text-[#E4ECE7] hover:bg-[#E07A5F] hover:text-[#203a2e] border border-[#335443] hover:border-[#E07A5F] transition-all duration-200 group text-xs font-medium"
                >
                  <InstagramIcon size={16} className="text-[#E07A5F] group-hover:text-[#203a2e] transition-colors" />
                  <span>@upflex_solutions</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/upflex-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with UpFlex Solutions on LinkedIn"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#172c23]/90 text-[#E4ECE7] hover:bg-[#E07A5F] hover:text-[#203a2e] border border-[#335443] hover:border-[#E07A5F] transition-all duration-200 group text-xs font-medium"
                >
                  <LinkedinIcon size={16} className="text-[#E07A5F] group-hover:text-[#203a2e] transition-colors" />
                  <span>Upflex Solutions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-white mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm text-[#E4ECE7]/80">
              <li>
                <a href="#problem" className="hover:text-[#E07A5F] transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-[#E07A5F] transition-colors">
                  Our Circular Solution
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-[#E07A5F] transition-colors">
                  Hub Activities
                </a>
              </li>
              <li>
                <a href="#goals" className="hover:text-[#E07A5F] transition-colors">
                  Strategic Goals
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#E07A5F] transition-colors">
                  Metrics &amp; Impact
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E07A5F] transition-colors">
                  Product Catalog
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#E07A5F] transition-colors">
                  Meet the Team
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg font-bold text-white mb-4">Direct Inquiries</h4>
            <div className="space-y-3.5 text-sm text-[#E4ECE7]/85">
              {/* Primary Contact: Aizaz Ahmad (Lead) */}
              <div className="p-4 rounded-2xl bg-[#172c23]/90 border border-[#335443] hover:border-[#E07A5F]/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E07A5F] block">
                    Primary Contact Point
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E07A5F]/20 text-[#E07A5F] font-semibold border border-[#E07A5F]/30">
                    Project Lead
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <Avatar
                    photoUrl="/team/aizaz-ahmad.jpg"
                    name="Aizaz Ahmad"
                    size="md"
                    className="border border-[#E07A5F]/50 shadow"
                  />
                  <div>
                    <span className="text-base font-bold text-white block leading-snug">
                      Aizaz Ahmad
                    </span>
                    <span className="text-xs text-[#8FA89B] block">
                      Lead, Global Shapers Peshawar Hub
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#E4ECE7] mb-2.5">
                  <Mail size={14} className="text-[#E07A5F] shrink-0" />
                  <a
                    href="mailto:aizazahmed44@gmail.com"
                    className="hover:underline hover:text-[#E07A5F] transition-colors font-mono text-xs"
                  >
                    aizazahmed44@gmail.com
                  </a>
                </div>

                <div className="pt-2 border-t border-[#335443]/70 flex items-center gap-3 text-xs text-[#E4ECE7]/80">
                  <span className="text-[10px] uppercase font-bold text-[#8FA89B] tracking-wider">Social:</span>
                  <a
                    href="https://www.instagram.com/aizaz_ahmaad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#E4ECE7] hover:text-[#E07A5F] transition-colors"
                    title="Aizaz Ahmad on Instagram"
                  >
                    <InstagramIcon size={13} className="text-[#E07A5F]" />
                    <span>Instagram</span>
                  </a>
                  <span className="text-[#335443]">•</span>
                  <a
                    href="https://www.linkedin.com/in/muhammadaizazahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#E4ECE7] hover:text-[#E07A5F] transition-colors"
                    title="Aizaz Ahmad on LinkedIn"
                  >
                    <LinkedinIcon size={13} className="text-[#E07A5F]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Co-Lead / Operations: Muhammad Osama Khan */}
              <div className="p-4 rounded-2xl bg-[#172c23]/90 border border-[#335443] hover:border-[#E07A5F]/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8FA89B] block">
                    Operations &amp; Co-Lead
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3A5B4A]/40 text-[#8FA89B] font-semibold border border-[#3A5B4A]/50">
                    Co-Lead
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <Avatar
                    photoUrl="/team/osama-khan.jpg"
                    name="Muhammad Osama Khan"
                    size="md"
                    imagePosition="object-[center_20%]"
                    className="border border-[#E07A5F]/40 shadow shrink-0"
                  />
                  <div>
                    <span className="text-base font-bold text-white block leading-snug">
                      Muhammad Osama Khan
                    </span>
                    <span className="text-xs text-[#8FA89B] block">
                      Co-Lead, Global Shapers Peshawar Hub
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#E4ECE7]">
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-[#E07A5F] shrink-0" />
                    <a
                      href="mailto:osamakhan.professional@gmail.com"
                      className="hover:underline hover:text-[#E07A5F] transition-colors font-mono text-xs"
                    >
                      osamakhan.professional@gmail.com
                    </a>
                  </div>
                  <div className="pt-2 border-t border-[#335443]/70 flex flex-wrap items-center gap-2.5 text-xs text-[#E4ECE7]/80">
                    <span className="text-[10px] uppercase font-bold text-[#8FA89B] tracking-wider">Social:</span>
                    <a
                      href="https://www.instagram.com/khan_mosama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#E4ECE7] hover:text-[#E07A5F] transition-colors"
                      title="Osama Khan on Instagram"
                    >
                      <InstagramIcon size={13} className="text-[#E07A5F]" />
                      <span>Instagram</span>
                    </a>
                    <span className="text-[#335443]">•</span>
                    <a
                      href="https://www.linkedin.com/in/muhammad-osama-khan-63126a210?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#E4ECE7] hover:text-[#E07A5F] transition-colors"
                      title="Osama Khan on LinkedIn"
                    >
                      <LinkedinIcon size={13} className="text-[#E07A5F]" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#E4ECE7]/75">
                <MapPin size={16} className="text-[#E07A5F] shrink-0 mt-0.5" />
                <span>Peshawar, Khyber Pakhtunkhwa, Pakistan</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#E4ECE7]/75">
                <Globe size={16} className="text-[#E07A5F] shrink-0" />
                <span>An initiative of the Global Shapers Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Developer Credit Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#E4ECE7]/70">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} UpflexSolutions. All rights reserved.</span>
            <span>•</span>
            <a
              href="https://www.linkedin.com/company/global-shapers-peshawar-hub/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E07A5F] hover:underline transition-colors"
              title="Global Shapers Peshawar Hub on LinkedIn"
            >
              Global Shapers Peshawar Hub
            </a>
          </div>

          {/* Highlighted Developer Credit Strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2.5 bg-[#172c23]/95 border border-[#335443] hover:border-[#E07A5F] px-4 py-2 rounded-full shadow-lg transition-all duration-300 group"
          >
            {/* Developer photo linking to GitHub */}
            <a
              href="https://github.com/Anas-Khannn"
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 hover:scale-105 transition-transform"
              title="Anas Khan (Developer)"
            >
              <Avatar
                name="Anas Khan"
                photoUrl="/team/anas-khan.jpg"
                imagePosition="object-[center_30%]"
                size="sm"
                className="border-2 border-[#E07A5F] shadow-sm"
              />
            </a>

            <span className="text-[#E4ECE7]/85 font-medium tracking-wide text-xs">
              Designed &amp; developed by{" "}
              <a
                href="https://github.com/Anas-Khannn"
                target="_blank"
                rel="noopener noreferrer"
                title="View Anas Khan on GitHub"
                className="inline-flex items-center gap-1.5 ml-1 px-3 py-1 rounded-full font-black text-white text-xs bg-gradient-to-r from-[#E07A5F] via-[#D97757] to-[#C45D3E] shadow-sm hover:brightness-110 hover:shadow-md hover:scale-105 transition-all duration-200 tracking-wider uppercase ring-1 ring-[#E07A5F]/60"
              >
                <span>Anas Khan</span>
                <GithubIcon size={12} className="opacity-90" />
              </a>
            </span>

            {/* Social Icons for Anas */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-[#335443]">
              <a
                href="https://github.com/Anas-Khannn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anas Khan GitHub"
                title="GitHub: @Anas-Khannn"
                className="w-6 h-6 rounded-full bg-[#203a2e] hover:bg-[#E07A5F] text-[#E4ECE7] hover:text-[#203a2e] flex items-center justify-center transition-colors"
              >
                <GithubIcon size={12} />
              </a>
              <a
                href="https://www.linkedin.com/in/anas-khan-7014b536a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anas Khan LinkedIn"
                title="LinkedIn Profile"
                className="w-6 h-6 rounded-full bg-[#203a2e] hover:bg-[#E07A5F] text-[#E4ECE7] hover:text-[#203a2e] flex items-center justify-center transition-colors"
              >
                <LinkedinIcon size={12} />
              </a>
              <a
                href="https://www.instagram.com/thedevscript?stkn=eDhzNTVmNmV1OGx2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anas Khan Instagram (@thedevscript)"
                title="Instagram: @thedevscript"
                className="w-6 h-6 rounded-full bg-[#203a2e] hover:bg-[#E07A5F] text-[#E4ECE7] hover:text-[#203a2e] flex items-center justify-center transition-colors"
              >
                <InstagramIcon size={12} />
              </a>
            </div>
          </motion.div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full bg-[#2D503F] text-[#FAF7F2] hover:bg-[#E07A5F] hover:text-[#203a2e] transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
