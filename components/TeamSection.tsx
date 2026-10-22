"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  const squad = [
    {
      name: "Aritra Sen",
      role: "Executive Creative Director",
      image: "/team-1.png",
    },
    {
      name: "Arup Sarkar",
      role: "Director of Client Services",
      image: "/team-2.png",
    },
    {
      name: "Subhadip Mukherjee",
      role: "Creative Director & Brand Strategist",
      image: "/team-3.jpg",
    },
    {
      name: "Sugato Mutsuddi",
      role: "Art Director & Analytics Head",
      image: "/team-4.png",
    },
    {
      name: "Srijita Seal",
      role: "Account Director, Media Lead",
      image: "/team-5.jpg",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        {/* Section Header matching Whiteboard Media */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-white/10">
          <div>
            <span className="tag-parenthesis block text-sm font-mono text-[#E8B626] mb-4">
              (Our Leadership)
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.15]">
              Meet the squad who creates your brand
            </h2>
          </div>

          <div>
            <Link href="/about" className="rr-btn-underline text-base">
              Explore all team players (15+) →
            </Link>
          </div>
        </div>

        {/* Squad Grid matching Whiteboard Media */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {squad.map((member, idx) => (
            <div key={idx} className="group">
              {/* Member Portrait */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#171717] mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Name & Role */}
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E8B626] transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-snug">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
