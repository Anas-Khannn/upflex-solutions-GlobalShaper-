import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import CircularSolution from "@/components/CircularSolution";
import HubActivities from "@/components/HubActivities";
import GoalsSection from "@/components/GoalsSection";
import ImpactSection from "@/components/ImpactSection";
import ProductShowcase from "@/components/ProductShowcase";
import WeNeedShapers from "@/components/WeNeedShapers";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Problem Statement */}
        <ProblemStatement />

        {/* 3. Our Solution */}
        <CircularSolution />

        {/* 4. Hub Activities */}
        <HubActivities />

        {/* 5. Goals (Short-term vs Long-term) */}
        <GoalsSection />

        {/* 6. Impact / Metrics Section (Animated Counters) */}
        <ImpactSection />

        {/* 7. Product Showcase / Artwork Gallery */}
        <ProductShowcase />

        {/* 8. We Need Shapers (Open Roles / CTA) */}
        <WeNeedShapers />

        {/* 9. Meet the Team */}
        <TeamSection />
      </main>

      {/* 10. Footer with Contact & Anas Khan Credit */}
      <Footer />
    </div>
  );
}
