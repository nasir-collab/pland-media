"use client";

import React from "react";
import Image from "next/image";

interface PillarItem {
  icon: string;
  title: string;
  desc: string;
}

const pillars: PillarItem[] = [
  {
    icon: "/shape-r-1.webp",
    title: "Positioning \nBefore Production",
    desc: "We settle what the brand stands for before a single frame is shot. Creative built on unclear positioning is expensive to fix later.",
  },
  {
    icon: "/shape-r-2.webp",
    title: "Consumer \nand Category Insight",
    desc: "We bring cross-category experience across FMCG, automotive, BFSI, retail and real estate, so the insight is grounded in how your market actually behaves.",
  },
  {
    icon: "/shape-r-3.webp",
    title: "Business-Led \nPlanning",
    desc: "Campaigns are planned against a commercial objective, not a content calendar. Every strategic decision traces back to something the business needs to change.",
  },
];

export default function StrategyPillarsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#141414] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-12 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-8">
                {/* 3D Geometric Shape Icon from Reference */}
                <div className="relative w-20 h-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Image
                    src={pillar.icon}
                    alt={pillar.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight group-hover:text-[#E8B626] transition-colors whitespace-pre-line">
                  {pillar.title}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="text-[#E8B626]">Strategic Pillar 0{idx + 1}</span>
                <span>Plan D Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
