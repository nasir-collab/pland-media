"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

interface ReferenceCtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  onOpenModal: () => void;
}

export default function ReferenceCtaBanner({
  title = "Like What You See? Let's Talk",
  subtitle = "Bengal's leading performance and creative strategy engine. Partner with us to achieve predictable commercial scale.",
  primaryCtaText = "Book Strategy Call",
  onOpenModal,
}: ReferenceCtaBannerProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#141414] border-b border-white/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E8B626]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="rr-container-1650 text-center relative z-10 max-w-4xl mx-auto space-y-8">
        <span className="text-xs sm:text-sm font-mono text-[#E8B626] uppercase tracking-wider block">
          (Start the Conversation)
        </span>

        <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          <button
            type="button"
            onClick={onOpenModal}
            className="px-8 py-4 rounded-full bg-[#E8B626] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#E8B626]/20 flex items-center gap-2 cursor-pointer"
          >
            <span>{primaryCtaText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+918777018187"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider transition-all"
          >
            <Phone className="w-4 h-4 text-[#E8B626]" />
            <span>Call +91 87770 18187</span>
          </a>
        </div>
      </div>
    </section>
  );
}
