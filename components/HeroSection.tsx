"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] pt-36 sm:pt-42 pb-16 flex flex-col justify-between overflow-hidden bg-[#111111] border-b border-white/10">
        {/* Background Wavy Layer Video Effect matching Whiteboard Media (wavy-layer.mp4) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-35 mix-blend-screen"
            src="/wavy-layer.mp4"
          />
          {/* Subtle gradient vignette to blend seamlessly into #111111 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-transparent to-[#111111]/90" />
        </div>

        {/* Ambient Warm Gold Glow matching Plan D signature palette */}
        <div className="absolute top-20 right-10 w-[550px] h-[550px] bg-[#E8B626]/10 rounded-full blur-[160px] pointer-events-none z-0" />

        <div className="rr-container-1650 w-full relative z-10 my-auto">
          {/* Top Tag & Massive Full-Width Editorial Headline */}
          <div className="mb-14 sm:mb-18">
            <span className="tag-parenthesis block text-xs font-mono text-[#E8B626] mb-5">
              (Digital Growth &amp; Performance Advertising)
            </span>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[8.5rem] font-bold text-white tracking-tight leading-[0.93] uppercase">
              Clarity Is a <br />
              Growth <br />
              <span className="text-[#E8B626]">Strategy.</span>
            </h1>
          </div>

          {/* Sub-grid matching Whiteboard Media's exact 3-column layout */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Col: Entity & Office */}
            <div className="md:col-span-4 space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#E8B626] font-mono font-bold">
                (The Performance &amp; Growth Studio)
              </div>
              <div className="text-sm font-semibold text-white leading-snug">
                LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Ecospace Business Park, Premises No. 701, Action Area II, New Town, Kolkata - 700160
              </p>
            </div>

            {/* Middle Col: Value Proposition */}
            <div className="md:col-span-5 space-y-3">
              <div className="text-sm font-medium text-white">
                360° Digital Growth Partner &amp; Lead Generation Agency.
              </div>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Kolkata&apos;s premier performance growth firm since 2018. Operating with a restricted client roster of 15 enterprises to ensure senior partner immersion, server-side data precision, and zero junior hand-offs.
              </p>
              <div className="pt-1">
                <Link href="/about" className="rr-btn-underline text-xs">
                  Read Our Story &rarr;
                </Link>
              </div>
            </div>

            {/* Right Col: Action Buttons & Trust */}
            <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full md:w-auto px-7 py-3.5 rounded-full bg-[#E8B626] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#E8B626]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Growth Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex flex-col items-start md:items-end gap-1.5 text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-2 text-white">
                  <ShieldCheck className="w-4 h-4 text-[#E8B626]" />
                  <span>NDA Protected Partnerships</span>
                </div>
                <div className="text-[11px] text-gray-500">
                  Direct Senior Partner Audit &bull; 4hr Response
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Ticker in Whiteboard Style */}
        <div className="rr-container-1650 w-full mt-14 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-6 text-xs text-gray-400 font-mono">
          <div>
            <span className="text-white font-bold text-sm text-[#E8B626]">₹120M+</span> Ad Spend Managed
          </div>
          <div className="hidden sm:block text-gray-600">&bull;</div>
          <div>
            <span className="text-white font-bold text-sm text-[#E8B626]">4.8x</span> Average ROAS
          </div>
          <div className="hidden sm:block text-gray-600">&bull;</div>
          <div>
            <span className="text-white font-bold text-sm text-[#E8B626]">500K+</span> Verified Inquiries
          </div>
          <div className="hidden sm:block text-gray-600">&bull;</div>
          <div>
            <span className="text-white font-bold text-sm text-[#E8B626]">99+</span> PageSpeed &amp; Telemetry
          </div>
        </div>
      </section>

      {/* Growth Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
