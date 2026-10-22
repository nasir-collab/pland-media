"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Target,
  Search,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Layers,
  Phone,
  Sparkles,
} from "lucide-react";
import MarqueeTicker from "@/components/MarqueeTicker";
import CTASection from "@/components/CTASection";
import ConsultationModal from "@/components/ConsultationModal";

export default function PpcAgencyKolkataPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const capabilities = [
    {
      title: "Google Search & Shopping Ads",
      desc: "Capture active buyers precisely at the moment of intent. We build negative keyword moats, single-theme ad groups, and automated smart-bidding rules that maximize click-to-lead conversion.",
    },
    {
      title: "Google Performance Max (PMax)",
      desc: "Harness Google's machine learning across Search, YouTube, Maps, Gmail, and Discover with high-converting creative asset bundles and audience signals.",
    },
    {
      title: "Meta (Facebook & Instagram) Funnels",
      desc: "Stop the scroll with performance creative narratives, dynamic catalog ads (DPA), and lookalike audience models built from your first-party customer lists.",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc: "Sending expensive paid traffic to a slow, generic homepage wastes money. We engineer lightning-fast Next.js custom landing pages with 20%+ conversion rates.",
    },
    {
      title: "Dynamic Retargeting Moats",
      desc: "Re-engage site visitors and abandoned carts with personalized product carousels, time-decay urgency offers, and multi-channel reminders.",
    },
    {
      title: "Server-Side Telemetry & CAPI",
      desc: "Overcome iOS 14+ tracking loss with direct server-to-server Conversions API (CAPI) and Google Tag Manager Server containers for 100% attribution accuracy.",
    },
  ];

  const processSteps = [
    { step: "01", title: "Comprehensive Audit", desc: "Audit search term waste, negative keyword gaps, quality scores, and tracking tag health." },
    { step: "02", title: "Funnel & Creative Build", desc: "Design high-converting landing pages, compelling ad copywriting, and dynamic video assets." },
    { step: "03", title: "Controlled Launch", desc: "Test ad variants, target CPA thresholds, and demographic bidding with strict spend limits." },
    { step: "04", title: "Algorithmic Scaling", desc: "Allocate budget to winning keywords, expand remarketing, and scale profitable purchase volume." },
  ];

  return (
    <div className="pt-28 pb-16 bg-[#111111] text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E8B626]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="rr-container-1650 relative z-10">
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-mono pb-8 border-b border-white/10 mb-12">
            <Link href="/performance-marketing" className="text-gray-400 hover:text-white transition-colors">
              Performance Marketing
            </Link>
            <span>/</span>
            <span className="text-[#E8B626] font-bold">PPC Agency Kolkata</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="hidden sm:inline">Pay-Per-Click Management</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
                <span className="text-stroke-title mr-3 font-light">Stop Wasting Ad Spend.</span>
                <span>Unleash Sky-High ROI with PPC.</span>
              </h1>

              <div className="pt-2">
                <span className="text-lg sm:text-2xl font-normal text-[#E8B626] block">
                  Kolkata&apos;s Leading Google &amp; Meta Pay-Per-Click Management Agency
                </span>
              </div>

              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light max-w-3xl pt-2">
                <p>
                  Pay-Per-Click (PPC) marketing can be a veritable cash cow for any business because it targets consumers at the exact moment of commercial intent. However, most business owners waste substantial budgets due to poor keyword matching, irrelevant broad clicks, and lack of conversion-optimized landing pages.
                </p>
                <p>
                  Plan D Media comes to the rescue with our specialized PPC squad that relentlessly tests, fine-tunes, and scales campaigns that deliver qualified clicks and convert them into measurable commercial revenue.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-[#E8B626] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#E8B626]/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request PPC Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+918240418456"
                  className="rr-btn-underline text-sm text-gray-300 hover:text-white inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E8B626]" />
                  <span>Call PPC Strategist</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="lg:col-span-4 space-y-5">
              <div className="p-8 rounded-3xl bg-[#171717] border border-white/10 shadow-2xl relative overflow-hidden">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E8B626] block mb-6 font-bold">
                  (PPC Benchmarks)
                </span>

                <div className="space-y-6">
                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-white">4.2x</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Average Client Google ROAS</div>
                  </div>

                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-[#E8B626]">-38%</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Average CPA Reduction in 60 Days</div>
                  </div>

                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-white">100%</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Direct Ad Account Ownership</div>
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-[#E8B626]">Weekly</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Transparent CPA &amp; Spend Reports</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeTicker />

      {/* 2. Capabilities Grid */}
      <section className="py-24 sm:py-32 border-b border-white/10 relative">
        <div className="rr-container-1650">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="tag-parenthesis text-xs font-mono text-[#E8B626] uppercase">
              (Tactical Execution)
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              PPC Services Engineered For Mathematical Return
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E8B626] mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">{cap.desc}</p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B626]" />
                  <span>Managed In-House</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Proven 4-Step Process */}
      <section className="py-24 sm:py-32 border-b border-white/10 bg-[#141414]">
        <div className="rr-container-1650">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="tag-parenthesis text-xs font-mono text-[#E8B626] uppercase">
              (How We Work)
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our Proven Process for PPC Dominance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((p, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#171717] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-mono font-bold text-[#E8B626] block mb-4">{p.step}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 text-xs font-mono text-gray-500">
                  Sprint Milestone
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global CTA */}
      <CTASection />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
