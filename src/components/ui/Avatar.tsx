"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CircleUser, User } from "lucide-react";

interface AvatarProps {
  photoUrl?: string | null;
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  badgeBg?: string;
  imagePosition?: string;
}

export default function Avatar({
  photoUrl,
  name,
  size = "lg",
  className = "",
  badgeBg = "bg-[#FAF7F2]",
  imagePosition = "object-center",
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  // Derive initials (e.g. "Aizaz Ahmad" -> "AA")
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-20 h-20 text-lg",
    xl: "w-28 h-28 text-2xl",
  };

  const iconSizes = {
    sm: 15,
    md: 22,
    lg: 34,
    xl: 48,
  };

  const showImage = Boolean(photoUrl && !imageError);

  return (
    <div
      className={`relative rounded-full overflow-hidden flex items-center justify-center font-medium shadow-inner transition-transform duration-300 border-2 border-[#D97757]/30 ${sizeClasses[size]} ${badgeBg} ${className}`}
    >
      {showImage ? (
        <Image
          src={photoUrl!}
          alt={name}
          fill
          sizes="(max-width: 768px) 100px, 150px"
          className={`object-cover ${imagePosition}`}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-[#203a2e] w-full h-full bg-gradient-to-br from-[#E4ECE7] to-[#F3EDE4] group-hover:from-[#F7EBE6] group-hover:to-[#FAF7F2] transition-colors duration-300">
          {size === "sm" ? (
            <User size={iconSizes[size]} className="text-[#335443]" />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <CircleUser size={iconSizes[size]} className="text-[#335443] mb-0.5 opacity-90" />
              <span className="text-[10px] font-bold tracking-wider text-[#C45D3E] uppercase font-mono">
                {initials}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
