"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  BarChart3,
  Layers,
  Phone,
  Sparkles,
  Inbox,
  Clock,
} from "lucide-react";
import MarqueeTicker from "@/components/MarqueeTicker";
import CTASection from "@/components/CTASection";
import ConsultationModal from "@/components/ConsultationModal";

export default function EmailMarketingKolkataPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const emailServices = [
    {
      title: "Automated Lifecycle Flows",
      desc: "Turn one-time shoppers into repeat brand advocates. We build automated triggered sequences for welcome onboarding, abandoned browse, cart recovery, and post-purchase follow-ups.",
    },
    {
      title: "Deliverability & Inbox Placement",
      desc: "An email never opened is an email never read. We configure SPF, DKIM, DMARC authentication, conduct IP/domain warming, and execute list cleaning to ensure 99%+ primary inbox placement.",
    },
    {
      title: "Dynamic A/B Testing Engine",
      desc: "We rigorously split-test subject lines, preview text, CTA buttons, send-time schedules, and visual layouts to continuously drive up open rates and revenue-per-recipient.",
    },
    {
      title: "Audience Segmentation & RFM",
      desc: "No more blast-to-all emails. We segment your database using Recency, Frequency, and Monetary (RFM) modeling, delivering tailored messaging based on actual purchase behavior.",
    },
    {
      title: "Omnichannel WhatsApp & SMS",
      desc: "Coordinate high-impact SMS and WhatsApp notifications with your email journeys. Reach customers on their preferred mobile channels for time-sensitive deals and flash sales.",
    },
    {
      title: "Revenue Attribution Dashboards",
      desc: "We track every single rupee generated from your email list, providing clean revenue attribution reports through Klaviyo, Brevo, or Mailchimp integrated directly with Shopify/WooCommerce.",
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
            <span className="text-[#E8B626] font-bold">Email Marketing Kolkata</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="hidden sm:inline">Retention &amp; Lifecycle Automation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
                <span className="text-stroke-title mr-3 font-light">Bid Farewell to Spam.</span>
                <span>Craft Emails That Convert.</span>
              </h1>

              <div className="pt-2">
                <span className="text-lg sm:text-2xl font-normal text-[#E8B626] block">
                  Top Retention &amp; Email Marketing Company in Kolkata
                </span>
              </div>

              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light max-w-3xl pt-2">
                <p>
                  Have you ever wondered if anyone out there in the vast world actually reads your promotional emails? It is time to bid farewell to blind mass-blasting and welcome personalized customer interactions through Plan D Media&apos;s lifecycle email management.
                </p>
                <p>
                  Email remains the highest-ROI direct channel available, producing an average of ₹40 for every ₹1 invested. We craft revenue-generating sequences that nurture leads, revive abandoned carts, and turn cold lists into predictable sales.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-[#E8B626] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#E8B626]/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Email Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+918240418456"
                  className="rr-btn-underline text-sm text-gray-300 hover:text-white inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E8B626]" />
                  <span>Call +91 82404 18456</span>
                </a>
              </div>
            </div>

            {/* Metrics Box */}
            <div className="lg:col-span-4 space-y-5">
              <div className="p-8 rounded-3xl bg-[#171717] border border-white/10 shadow-2xl relative overflow-hidden">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E8B626] block mb-6 font-bold">
                  (Retention Benchmarks)
                </span>

                <div className="space-y-6">
                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-white">42.8%</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Average Email Open Rate</div>
                  </div>

                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-[#E8B626]">99.2%</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Primary Inbox Placement Rate</div>
                  </div>

                  <div className="pb-5 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-white">32%</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Revenue Contribution from Flows</div>
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-bold font-mono text-[#E8B626]">Zero Spam</div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">Strict DMARC &amp; SPF Compliance</div>
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
              (End-to-End Retention)
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Email Architectures Designed to Maximize Customer LTV
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emailServices.map((srv, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E8B626] mb-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{srv.title}</h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">{srv.desc}</p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B626]" />
                  <span>Klaviyo &amp; Omnichannel Certified</span>
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
