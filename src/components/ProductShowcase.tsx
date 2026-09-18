"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Heart,
  Laptop,
  Package,
  Building2,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 390;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const products = useMemo(
    () => [
      {
        id: "tote-islamia",
        title: "The Islamia College Heritage Tote",
        category: "totes",
        tag: "Heritage Landmark Art",
        image: "/hero-tote-bag.jpg",
        alt: "Upcycled PVC banner tote bag featuring hand-painted Islamia College Peshawar built in 1913",
        material: "100% Repurposed Billboard PVC Flex + Black Rope Handles",
        features: "Hand-painted 1913 Islamia College landmark art, waterproof, zero-waste",
        artisanNote:
          "An artist hand-painted this tote celebrating Islamia College — the iconic historic landmark college of Khyber Pakhtunkhwa & Peshawar built in 1913.",
      },
      {
        id: "tote-rickshaw",
        title: "The Peshawar Rickshaw Folk Art Tote",
        category: "totes",
        tag: "Local Folk Art",
        image: "/products/tote-rickshaw-orange.jpg",
        alt: "Upcycled vibrant orange banner tote bag with hand-painted Peshawar cycle rickshaw motif within floral garland",
        material: "Reclaimed Heavy Industrial Banner Flex + Braided Rope Handles",
        features: "Hand-painted street rickshaw motif, foliate border wreath, ultra-durable",
        artisanNote:
          "Handcrafted on vibrant flame-orange flex, capturing the lively spirit and intricate folk art of Peshawar's traditional cycle rickshaws framed by leaf wreaths.",
      },
      {
        id: "tote-floral",
        title: "The Mughal Fresco Arabesque Tote",
        category: "totes",
        tag: "Mughal Heritage",
        image: "/products/tote-floral-blue.jpg",
        alt: "Upcycled cerulean blue PVC tote bag with hand-painted Mughal floral arabesque fresco motif",
        material: "Reclaimed Sky Blue Billboard Vinyl + Reinforced Handles",
        features: "Delicate hand-painted cobalt & white floral arabesque, weather-sealed, wiped-clean",
        artisanNote:
          "Painted on vivid sky-blue billboard vinyl, honoring the timeless floral fresco patterns and tilework found throughout historical Peshawar and Mughal architecture.",
      },
      {
        id: "tote-pottery",
        title: "The Traditional 'Mangay' Artisan Tote",
        category: "totes",
        tag: "Pashtun Cultural Tribute",
        image: "/products/tote-pottery-art.jpg",
        alt: "Upcycled green and warm-toned tote bag depicting hand holding traditional Pashtun Mangay clay water pot",
        material: "Upcycled Billboard Vinyl + Dual Carrying Handles",
        features: "Hand-painted clay water vessel ('Mangay') with traditional bangles, multi-color gradient",
        artisanNote:
          "Capturing a timeless village tradition of Khyber Pakhtunkhwa — an artisan hand with traditional bangles holding the earthenware 'Mangay' water pot.",
      },
      {
        id: "laptop-sleeve",
        title: "Weatherproof Laptop Sleeve",
        category: "tech",
        tag: "Padded Protection",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
        alt: "Padded laptop sleeve made from reclaimed vinyl advertising banners",
        material: "Repurposed PVC Shell + Recycled Felt Padding",
        features: "Impact absorption, heavy-duty brass zipper, fits 13-16\"",
        artisanNote: "Resilient weather resistance protects tech anywhere.",
      },
      {
        id: "utility-pouch",
        title: "Artisanal Utility Travel Pouch",
        category: "accessories",
        tag: "Multi-Pocket",
        image:
          "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=80",
        alt: "Upcycled PVC banner utility travel pouch for everyday essentials",
        material: "Banner off-cuts + Upcycled industrial lining",
        features: "Zero-waste construction, splash-proof, dual zip compartments",
        artisanNote: "Crafted entirely from precision scrap vinyl offcuts.",
      },
      {
        id: "workshop-custom",
        title: "Corporate B2B Custom Collection",
        category: "corporate",
        tag: "Custom Branded",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        alt: "Female artisans manufacturing customized corporate upcycled products in workshop",
        material: "Custom event banners upcycled into conference swag bags",
        features: "Bulk customized co-branding, impact metrics report included",
        artisanNote: "Turn your company's conference banners into attendee gifts.",
      },
    ],
    []
  );

  const categories = useMemo(
    () => [
      { id: "all", label: "All Creations", icon: Sparkles },
      { id: "totes", label: "Artisan Totes", icon: ShoppingBag },
      { id: "tech", label: "Laptop Sleeves", icon: Laptop },
      { id: "accessories", label: "Pouches & Gear", icon: Package },
      { id: "corporate", label: "Corporate Gifting", icon: Building2 },
    ],
    []
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, products]);

  return (
    <section
      id="products"
      className="py-24 bg-[#F3EDE4] relative overflow-hidden border-t border-[#E8E0D4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4ECE7] text-[#203a2e] text-xs sm:text-sm font-semibold mb-4 border border-[#5B826F]/30"
          >
            <ShoppingBag size={14} className="text-[#3A5B4A]" />
            <span>Artisanal Upcycled Catalog</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#211E1B] tracking-tight leading-tight"
          >
            Product Showcase &amp; Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#6E675E]"
          >
            No two pieces are ever identical. Every bag inherits the colors, typography, and history
            of reclaimed urban advertising banners.
          </motion.p>

          {/* High-Performance Category Filter Navigation */}
          <div className="mt-8 flex flex-col items-center gap-3 w-full">
            <div
              role="tablist"
              aria-label="Filter products by category"
              className="w-fit max-w-full p-1.5 rounded-2xl sm:rounded-full bg-[#E8E0D4]/70 border border-[#D6CCBF]/70 backdrop-blur-xs flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 shadow-xs"
            >
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                const count = categoryCounts[cat.id] || 0;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`relative px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 active:scale-95 cursor-pointer select-none flex items-center gap-2 whitespace-nowrap group ${
                      isSelected
                        ? "bg-[#203a2e] text-white shadow-sm"
                        : "bg-white/80 text-[#554E45] hover:bg-white hover:text-[#211E1B] border border-transparent hover:border-[#D6CCBF]"
                    }`}
                  >
                    <Icon
                      size={15}
                      className={
                        isSelected
                          ? "text-[#E07A5F]"
                          : "text-[#6E675E] group-hover:text-[#C45D3E] transition-colors"
                      }
                    />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] sm:text-[11px] font-mono font-bold px-1.5 py-0.5 rounded-md transition-colors ${
                        isSelected
                          ? "bg-[#335443] text-white"
                          : "bg-[#F3EDE4] text-[#6E675E] group-hover:bg-[#E8E0D4]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Status Bar with Instant Reset and Scroll Controls */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3 text-xs text-[#6E675E] font-medium min-h-[36px] px-2 sm:px-4 mt-2">
              <div className="flex items-center gap-2">
                <span>
                  Showing <strong>{filteredProducts.length}</strong> of {products.length} creations
                  {selectedCategory !== "all" && (
                    <> in <em className="text-[#203a2e] font-semibold">{categories.find((c) => c.id === selectedCategory)?.label}</em></>
                  )}
                </span>
                {selectedCategory !== "all" && (
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("all")}
                    className="inline-flex items-center gap-1 text-[#C45D3E] hover:text-[#A8472A] font-semibold underline underline-offset-2 ml-1 cursor-pointer active:scale-95 transition-transform"
                  >
                    <RotateCcw size={11} />
                    <span>Show all</span>
                  </button>
                )}
              </div>

              {/* Scroll Arrow Navigation Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#8E877E] hidden sm:inline mr-1">
                  Scroll gallery:
                </span>
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  className="w-9 h-9 rounded-full bg-white border border-[#D6CCBF] text-[#203a2e] hover:bg-[#203a2e] hover:text-white shadow-xs flex items-center justify-center transition-all duration-150 active:scale-90 cursor-pointer"
                  aria-label="Scroll creations left"
                  title="Scroll left"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  className="w-9 h-9 rounded-full bg-white border border-[#D6CCBF] text-[#203a2e] hover:bg-[#203a2e] hover:text-white shadow-xs flex items-center justify-center transition-all duration-150 active:scale-90 cursor-pointer"
                  aria-label="Scroll creations right"
                  title="Scroll right"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontally Scrollable Products Carousel Rail */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-3 px-1 scroll-smooth snap-x snap-mandatory custom-scrollbar"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.18,
                  ease: "easeOut",
                }}
                className="group w-[300px] sm:w-[350px] md:w-[380px] shrink-0 snap-start rounded-3xl bg-white overflow-hidden shadow-sm border border-[#E8E0D4] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Hover Zoom */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#E8E0D4]">
                    <Image
                      src={prod.image}
                      alt={prod.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#203a2e] shadow backdrop-blur-md">
                        {prod.tag}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="w-8 h-8 rounded-full bg-white/95 text-[#C45D3E] shadow backdrop-blur-md flex items-center justify-center">
                        <Heart size={16} />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#211E1B] mb-2 group-hover:text-[#C45D3E] transition-colors">
                      {prod.title}
                    </h3>

                    <div className="text-xs text-[#3A5B4A] font-semibold mb-3 flex items-center gap-1.5">
                      <ShieldCheck size={14} />
                      <span>{prod.material}</span>
                    </div>

                    <p className="text-xs text-[#6E675E] leading-relaxed mb-4 min-h-[48px]">
                      {prod.artisanNote}
                    </p>

                    <div className="bg-[#FAF7F2] rounded-xl p-3 text-xs text-[#36322D] border border-[#E8E0D4]/70">
                      <span className="font-semibold text-[#203a2e]">Features: </span>
                      {prod.features}
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="p-6 pt-0">
                  <a
                    href="#shapers"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-[#FAF7F2] text-[#203a2e] hover:bg-[#203a2e] hover:text-white border border-[#E8E0D4] transition-all duration-150 active:scale-95 shadow-none hover:shadow cursor-pointer"
                  >
                    <span>Request Product / Corporate Order</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Scroll Navigation Cue */}
        <div className="mt-2 flex items-center justify-between px-2 text-xs text-[#6E675E]">
          <div className="flex items-center gap-1.5">
            <Sparkles size={13} className="text-[#C45D3E]" />
            <span>Horizontal Gallery &bull; {filteredProducts.length} pieces available</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="hidden sm:inline">Swipe or use &larr; &rarr; buttons above to view more</span>
            <span className="sm:hidden">&larr; Swipe left / right &rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
