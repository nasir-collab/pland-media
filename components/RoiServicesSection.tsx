"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Zap,
  Check,
} from "lucide-react";

interface RoiService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  accentMetric: string;
  description: string;
  guaranteeText: string;
  slug: string;
  imageSrc: string;
  features: string[];
}

const roiServices: RoiService[] = [
  {
    id: "guaranteed-seo",
    number: "01",
    title: "Guaranteed SEO",
    tagline: "First-Page Search Dominance",
    badge: "+200% Organic Leads",
    accentMetric: "Weekly Improvements",
    description:
      "Get top search ranks on Google and increase your organic leads by 200%. Weekly improvements or you don't pay.",
    guaranteeText: "Weekly improvements or you don't pay",
    slug: "guaranteed-seo",
    imageSrc: "/services/guaranteed-seo.png",
    features: [
      "Top-3 Google Keyword Rankings",
      "Full Technical & Core Web Vitals Audit",
      "Intent-Driven Content Architecture",
      "High-Authority Backlink Acquisition",
    ],
  },
  {
    id: "performance-marketing",
    number: "02",
    title: "Performance Marketing",
    tagline: "Pay-On-Performance Funnels",
    badge: "Pay Upon Improvement",
    accentMetric: "3-Month Growth Moat",
    description:
      "Strategic proven roadmap of paid campaigns and SEO to increase leads in 3 months. You only pay once there is improvement.",
    guaranteeText: "You only pay once there is improvement",
    slug: "performance-marketing",
    imageSrc: "/services/performance-marketing.png",
    features: [
      "Meta & Google Search Lead Funnels",
      "Dynamic Retargeting & Lookalikes",
      "Conversion Rate Optimization (CRO)",
      "Strict Cost-Per-Acquisition Controls",
    ],
  },
  {
    id: "local-seo",
    number: "03",
    title: "Local SEO",
    tagline: "Google My Business & Map Pack",
    badge: "+300% Direct Calls",
    accentMetric: "Top-3 Map Placement",
    description:
      "Get top 3 Google My Business/Local SEO ranks and increase direct calls by 300%. Ideal for institutes, clinics, and dealer-based businesses.",
    guaranteeText: "Top 3 Google My Business rank guarantee",
    slug: "local-seo",
    imageSrc: "/services/local-seo.png",
    features: [
      "GMB Profile Optimization & Verification",
      "Geo-Tagged Local Citation Building",
      "Customer Review Acceleration System",
      "Near-Me Local Voice Search Domination",
    ],
  },
  {
    id: "social-branding",
    number: "04",
    title: "Social Branding",
    tagline: "High-Recall Creative Content",
    badge: "AI-Powered Reach",
    accentMetric: "Viral Content Calendar",
    description:
      "Enhance your social branding and reach through a proven planned calendar. Leverage Generative AI tools to gain followers fast, really fast!",
    guaranteeText: "Rapid follower & engagement velocity",
    slug: "social-branding",
    imageSrc: "/services/social-branding.png",
    features: [
      "Generative AI Content Velocity Engine",
      "Short-Form Video & Reel Production",
      "Brand Aesthetic & Typography Guidelines",
      "Community Moderation & DM Funnels",
    ],
  },
  {
    id: "web-development",
    number: "05",
    title: "Web Design & Development",
    tagline: "High-Converting Digital Flagships",
    badge: "1.4s Instant LCP",
    accentMetric: "Sub-Second Infrastructure",
    description:
      "Get a piece of cake, an appealing, and easy-navigating website that will bring you more customers and reflect the idea of your brand.",
    guaranteeText: "Sub-second speed & conversion architecture",
    slug: "web-development",
    imageSrc: "/services/web-development.png",
    features: [
      "Custom Next.js & React App Router",
      "Mobile-First Responsive Layouts",
      "24/7 Automated AI Lead Capture Bots",
      "SEO-Ready Structural Schema Markup",
    ],
  },
  {
    id: "ecommerce-marketing",
    number: "06",
    title: "e-Commerce Marketing",
    tagline: "Full-Funnel Sales Scalability",
    badge: "Scale Purchase ROAS",
    accentMetric: "Revenue Attribution",
    description:
      "Proven roadmap for large-scale eCommerce companies to increase cost per conversion through a mix of eCommerce SEO, catalog funnels, and performance ads.",
    guaranteeText: "Lower CPA & higher repeat customer LTV",
    slug: "ecommerce-marketing",
    imageSrc: "/services/ecommerce-marketing.png",
    features: [
      "Shopify & Custom Catalog Optimization",
      "Google Shopping / Performance Max Ads",
      "Abandoned Cart WhatsApp/Email Flows",
      "Multi-Variant Product Ad Creatives",
    ],
  },
];

export default function RoiServicesSection() {
  const [selectedService, setSelectedService] = useState<RoiService | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E8B626]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="rr-container-1650 relative z-10">
        {/* Section Header matching Whiteboard Media typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20 pb-8 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="tag-parenthesis text-sm font-mono text-[#E8B626]">
                (Services)
              </span>
              <span className="text-sm font-mono text-gray-500">
                (Kolkata — 06 Core Disciplines)
              </span>
            </div>

            <div>
              <Link
                href="/services"
                className="rr-btn-underline text-base text-gray-300 hover:text-white"
              >
                Browse all services
              </Link>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              <span className="text-stroke-title mr-3 font-light">Our</span>
              <span>ROI-based Digital Marketing Services in Kolkata</span>
            </h2>
          </div>
        </div>

        {/* 6 Services Grid: Perfectly Aligned to Current Dark Luxury Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {roiServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#171717] hover:bg-[#1a1a1a] border border-white/10 hover:border-[#E8B626]/50 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(232, 182, 38,0.12)]"
            >
              {/* Top Corner Ambient Accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-[#E8B626]/10 via-transparent to-transparent rounded-tr-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Row 1: Index & Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E8B626] shadow-[0_0_8px_#E8B626] group-hover:scale-125 transition-transform" />
                    <span className="text-xs font-mono text-gray-400">
                      ({service.number} / 06)
                    </span>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-[#E8B626]/30 text-[#E8B626] font-medium tracking-tight">
                    {service.badge}
                  </span>
                </div>

                {/* Row 2: Optimized 3D Icon Stage (Dark luxury glass, NO WHITE BOX!) */}
                <div className="relative w-full h-44 sm:h-48 my-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.07] group-hover:border-[#E8B626]/40 flex items-center justify-center overflow-hidden transition-all duration-500 shadow-inner">
                  {/* Ambient radial backlight */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232, 182, 38,0.14),transparent_68%)] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none" />

                  {/* Floating 3D Graphic with transparent background */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-3">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      width={280}
                      height={200}
                      className="object-contain max-h-[145px] sm:max-h-[155px] w-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                      priority
                    />
                  </div>

                  {/* Micro accent corner indicator */}
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-gray-500 px-2 py-0.5 rounded bg-black/40 border border-white/5">
                    {service.accentMetric}
                  </div>
                </div>

                {/* Row 3: Tagline, Title, and Description */}
                <div className="space-y-2.5">
                  <span className="tag-parenthesis text-xs font-mono text-[#E8B626] block uppercase tracking-wider">
                    ({service.tagline})
                  </span>

                  <h3 className="text-2xl sm:text-[26px] font-bold text-white group-hover:text-[#E8B626] transition-colors tracking-tight leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Row 4: Guarantee Micro-Callout */}
                <div className="mt-5 p-3 rounded-xl bg-white/[0.025] border border-white/5 flex items-center gap-2.5 text-xs font-mono text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B626] shrink-0" />
                  <span className="truncate">{service.guaranteeText}</span>
                </div>
              </div>

              {/* Card Bottom: Action Row */}
              <div className="pt-5 mt-7 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="rr-btn-underline text-sm font-medium text-white group-hover:text-[#E8B626] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Know More</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#E8B626]" />
                </button>

                <Link
                  href="/contact"
                  className="text-xs font-mono text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#E8B626]" />
                  <span>Get Audit</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner matching Whiteboard Media */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-[#161616] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E8B626]/10 border border-[#E8B626]/30 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-[#E8B626]" />
            </div>
            <div>
              <h4 className="text-white text-lg font-medium flex items-center gap-2">
                <span>Guaranteed Growth or You Don&apos;t Pay</span>
                <span className="text-xs font-mono text-[#E8B626] hidden sm:inline">(100% Risk Reversal)</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 font-light">
                Transparent weekly dashboard tracking, zero vanity metrics, and unit economics alignment on every campaign.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#E8B626] hover:bg-[#F3C84B] text-white font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#E8B626]/25 text-center"
          >
            Claim Free Growth Audit →
          </Link>
        </div>
      </div>

      {/* Detail Modal when user clicks "Know More" */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#171717] rounded-3xl overflow-hidden border border-white/15 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-5 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-1.5 overflow-hidden">
                  <Image
                    src={selectedService.imageSrc}
                    alt={selectedService.title}
                    width={56}
                    height={56}
                    className="object-contain max-h-full max-w-full drop-shadow-md"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#E8B626]">
                    ({selectedService.tagline})
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="py-6 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                  Core Deliverable
                </span>
                <p className="text-base text-gray-200 leading-relaxed font-light">
                  {selectedService.description}
                </p>
              </div>

              <div className="space-y-2.5">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                  Included Execution Scope
                </span>
                <div className="space-y-2">
                  {selectedService.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-xs font-mono text-gray-300"
                    >
                      <Check className="w-3.5 h-3.5 text-[#E8B626] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#121212] border border-[#E8B626]/20 rounded-xl p-4 text-xs font-mono text-gray-300 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#E8B626] shrink-0" />
                <span>
                  <strong>Promise:</strong> {selectedService.guaranteeText}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#E8B626]">
                {selectedService.badge}
              </span>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-[#E8B626] hover:bg-[#F3C84B] text-white font-bold text-xs transition-colors"
              >
                Book Strategy Call →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
