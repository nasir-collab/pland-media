"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Zap, ShieldCheck } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function CTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 sm:py-32 bg-[#111111] relative overflow-hidden" id="growth-audit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-3xl bg-[#171717] border border-white/10 p-8 sm:p-16 lg:p-20 overflow-hidden text-center">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8B626]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#E8B626] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#E8B626]">
                  (Limited Capacity Advisory)
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Ready to scale with clarity and measurable unit economics?
              </h2>

              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Book a confidential 30-minute growth audit with our senior partners. We will dissect your customer acquisition funnel, paid campaign efficiency, and search presence with zero sales pressure.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E8B626] text-white font-bold text-sm tracking-wide hover:bg-[#D4A319] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#E8B626]/20 cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Request Free Growth Audit</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-white/5 text-white font-medium text-sm tracking-wide border border-white/15 transition-all flex items-center justify-center gap-2"
                >
                  <span>Direct Contact Options</span>
                </Link>
              </div>

              <div className="mt-10 flex items-center justify-center gap-2 text-xs text-gray-500 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#E8B626]" />
                <span>NDA Protected • Direct Senior Strategist Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
