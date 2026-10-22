"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Download,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  Phone,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import MarqueeTicker from "@/components/MarqueeTicker";
import CTASection from "@/components/CTASection";
import ConsultationModal from "@/components/ConsultationModal";

export default function MobileAppMarketingKolkataPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const appStrategies = [
    {
      title: "App Store Optimization (ASO) Alchemy",
      desc: "Rank higher on iOS App Store and Google Play search. We optimize app titles, subtitle keywords, local keyword density, icon conversion appeal, and localized screenshot carousels.",
    },
    {
      title: "Universal App Campaigns (Google UAC)",
      desc: "Scale install volume across Google Play, Google Search, YouTube, and the Display network with automated smart-bidding for lowest Cost-Per-Install (CPI).",
    },
    {
      title: "Apple Search Ads (ASA)",
      desc: "Capture users searching specifically for your competitors and target categories directly inside the Apple App Store, achieving industry-leading install-to-registration conversion.",
    },
    {
      title: "Post-Install Event Optimization",
      desc: "Installs that don't convert are meaningless vanity metrics. We train algorithmic ad platforms to optimize for post-install events: account creation, subscription start, and first purchase.",
    },
    {
      title: "Mobile Measurement Partner (MMP) Telemetry",
      desc: "Seamless setup of AppsFlyer, Adjust, or Branch to track real cost-per-acquisition (CPA), detect fraudulent bot installs, and achieve clean multi-touch attribution.",
    },
    {
      title: "Ratings & Review Acceleration",
      desc: "Boost your social proof. We design intelligent in-app review prompts that encourage satisfied power users to rate 5 stars while rerouting feedback from dissatisfied users to private support.",
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-[#111111] text-white min-h-screen">
      {/* 1. Hero */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E8B626]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="rr-container-1650 relative z-10">
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-mono pb-8 border-b border-white/10 mb-12">
            <Link href="/performance-marketing" className="text-gray-400 hover:text-white transition-colors">
              Performance Marketing
            </Link>
            <span>/</span>
            <span className="text-[#E8B626] font-bold">Mobile App Marketing Kolkata</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="hidden sm:inline">ASO &amp; Paid User Acquisition</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
                <span className="text-stroke-title mr-3 font-light">Unlock Your App&apos;s</span>
                <span>Chart-Topping Growth Potential.</span>
              </h1>

              <div className="pt-2">
                <span className="text-lg sm:text-2xl font-normal text-[#E8B626] block">
                  Top Mobile App Marketing &amp; ASO Agency in Kolkata
                </span>
              </div>

              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light max-w-3xl pt-2">
                <p>
                  Are you frustrated that your mobile app is lost in the depths of the app store with few active daily users? In today&apos;s crowded market, building an incredible app is only half the battle.
                </p>
                <p>
                  Plan D Media steps in with laser-targeted user acquisition and App Store Optimization (ASO) strategies designed to drive qualified downloads, retain active daily users, and maximize in-app lifetime revenue.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-[#E8B626] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#E8B626]/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request App Growth Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+918240418456"
                  className="rr-btn-underline text-sm text-gray-300 hover:text-white inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E8B626]" />
                  <span>Call App Strategist</span>
                </a>
              </div>
            </div>

            {/* Metrics Box */}
            <div className="lg:col-span-4 space-y-5">
              <div className="p-8 rounded-3xl bg-[#171717] border border-white/10 shadow-2xl relative overflow-hidden">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E8B626] block mb-6 font-bold">
                  (App Scale Benchmarks)
                </span>

                <div className="space-y-6">
                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-white">500K+</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Verified App Downloads Generated</div>
                  </div>

                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-[#E8B626]">Top-10</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Category App Store Rankings Achieved</div>
                  </div>

                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-white">-45%</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Cost Per In-App Action (CPA) Reduction</div>
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-[#E8B626]">Zero Fraud</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">MMP Guard Against Bot Clicks</div>
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
              (How We Scale Apps)
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Methods Plan D Media Uses For Mobile App Marketing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appStrategies.map((strat, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E8B626] mb-6">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{strat.title}</h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">{strat.desc}</p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B626]" />
                  <span>iOS &amp; Android Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Global CTA */}
      <CTASection />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
