"use client";

import React from "react";

export default function MarqueeTicker() {
  const phrase = "We make brand big and bolder";

  return (
    <section className="py-14 sm:py-20 bg-[#171717] border-b border-white/10 overflow-hidden relative select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 sm:gap-16">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white">
                {phrase}
              </span>
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#E8B626] inline-block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
