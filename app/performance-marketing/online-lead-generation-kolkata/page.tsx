"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Target,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  Phone,
  Users,
} from "lucide-react";
import MarqueeTicker from "@/components/MarqueeTicker";
import CTASection from "@/components/CTASection";
import ConsultationModal from "@/components/ConsultationModal";

export default function OnlineLeadGenerationKolkataPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const leadPillars = [
    {
      title: "Multi-Step Lead Qualification",
      desc: "Stop collecting useless phone numbers. We design multi-step interactive qualification funnels that verify budget, urgency, and decision-making authority before handing leads to your sales reps.",
    },
    {
      title: "Real-Time CRM & WhatsApp Sync",
      desc: "Speed-to-lead determines conversion. We integrate instant lead delivery into your CRM, Zoho, Salesforce, or WhatsApp so your team can connect with prospects within 2 minutes of submission.",
    },
    {
      title: "Full-Funnel Meta & Google Ads",
      desc: "We deploy hyper-targeted paid campaigns across Instagram, Facebook, and Google Search that isolate your most profitable customer profile and filter out unqualified tire-kickers.",
    },
    {
      title: "High-Converting Custom Landers",
      desc: "Custom Next.js landing pages engineered with frictionless UX, trust badges, localized video proof, and fast loading speeds to turn cold visitors into high-intent inbound inquiries.",
    },
    {
      title: "Strict Cost-Per-Lead (CPL) Ceilings",
      desc: "We manage ad spend against strict cost-per-qualified-lead targets. You achieve predictable economics where lead acquisition cost is always significantly lower than customer lifetime value.",
    },
    {
      title: "Weekly Lead Quality Audits",
      desc: "We listen to call recordings and review sales pipeline data with your team weekly, feeding closed-won data back into Google and Meta algorithmic bidding algorithms.",
    },
  ];

  const industries = [
    { name: "Higher Education & EdTech", metric: "3.8x Lower Enrolment Cost", proof: "Centurion University, UEM, iLEAD" },
    { name: "Manufacturing & B2B Dealerships", metric: "+240% Dealer Inquiries", proof: "SRMB Steel, Sylvan Ply" },
    { name: "Healthcare & Specialized Clinics", metric: "+300% Inbound Calls", proof: "Teeth Care Dental, La Derma" },
    { name: "Real Estate & Commercial Spaces", metric: "₹45M+ Property Inquiries", proof: "Emami Realty, Orbit Group" },
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
            <span className="text-[#E8B626] font-bold">Online Lead Generation Kolkata</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="hidden sm:inline">Qualified B2B &amp; B2C Funnels</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
                <span className="text-stroke-title mr-3 font-light">Stop Wasting Budget.</span>
                <span>Get a Stream of Qualified Leads.</span>
              </h1>

              <div className="pt-2">
                <span className="text-lg sm:text-2xl font-normal text-[#E8B626] block">
                  Top Online Lead Generation Agency in Kolkata &amp; Eastern India
                </span>
              </div>

              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light max-w-3xl pt-2">
                <p>
                  Are you frustrated that people visit your website but few convert into paying customers? You are not alone. What if you could eliminate guesswork and establish a steady stream of pre-qualified buyers waiting for your sales team?
                </p>
                <p>
                  Plan D Media makes that a reality. As your dedicated lead generation partner in Kolkata, we hit your ideal customer persona with mathematical precision, delivering high-intent prospects who close faster and stay longer.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-[#E8B626] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#E8B626]/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Lead Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+918777018187"
                  className="rr-btn-underline text-sm text-gray-300 hover:text-white inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E8B626]" />
                  <span>Call +91 87770 18187</span>
                </a>
              </div>
            </div>

            {/* Pillar Metrics */}
            <div className="lg:col-span-4 space-y-5">
              <div className="p-8 rounded-3xl bg-[#171717] border border-white/10 shadow-2xl relative overflow-hidden">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E8B626] block mb-6 font-bold">
                  (Pipeline Metrics)
                </span>

                <div className="space-y-6">
                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-white">+300%</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Average Inbound Lead Growth</div>
                  </div>

                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-[#E8B626]">&lt; 2 Mins</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Automated Lead Routing to CRM</div>
                  </div>

                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-white">100+</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Enterprise B2B/B2C Funnels Scaled</div>
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-[#E8B626]">Zero Risk</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Pay Upon Measurable Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeTicker />

      {/* 2. Lead Generation Framework */}
      <section className="py-24 sm:py-32 border-b border-white/10 relative">
        <div className="rr-container-1650">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="tag-parenthesis text-xs font-mono text-[#E8B626] uppercase">
              (The Plan D Difference)
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              A Lead Partner, Not Just Another Agency Vendor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadPillars.map((p, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E8B626] mb-6">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">{p.desc}</p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B626]" />
                  <span>Guaranteed Pipeline Quality</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industry Verticals */}
      <section className="py-24 sm:py-32 border-b border-white/10 bg-[#141414]">
        <div className="rr-container-1650">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="tag-parenthesis text-xs font-mono text-[#E8B626] uppercase">
              (Industry Expertise)
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Battle-Tested Funnels Across Key Sectors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#171717] border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{ind.name}</h3>
                  <div className="text-2xl font-mono font-bold text-[#E8B626] mb-3">{ind.metric}</div>
                  <p className="text-xs font-mono text-gray-400">Featured Clients: {ind.proof}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 text-xs font-mono text-gray-500">
                  Sector Benchmark
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
