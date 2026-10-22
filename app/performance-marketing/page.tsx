"use client";

import React, { useState } from "react";
import ReferenceServiceHero from "@/components/ReferenceServiceHero";
import ProcessSection from "@/components/ProcessSection";
import StrategyPillarsSection from "@/components/StrategyPillarsSection";
import DataMetricsSection from "@/components/DataMetricsSection";
import ReferenceCapabilitiesGrid from "@/components/ReferenceCapabilitiesGrid";
import ReferenceCaseStudies from "@/components/ReferenceCaseStudies";
import ReferenceDifferentiators from "@/components/ReferenceDifferentiators";
import ReferenceFaqSection from "@/components/ReferenceFaqSection";
import ReferenceCtaBanner from "@/components/ReferenceCtaBanner";
import ConsultationModal from "@/components/ConsultationModal";
import MarqueeTicker from "@/components/MarqueeTicker";

const subServices = [
  {
    number: "01",
    title: "PPC Marketing",
    tagline: "High-Intent Search & Display Ads",
    badge: "3.8x Target ROAS",
    quote: "Techniques like PPC (Pay-Per-Click) marketing can be a cash cow for any business since they target the most qualified traffic.",
    description: "We eliminate wasted ad spend with mathematical precision. Through intent-driven keyword targeting, negative match lists, bid automation, and conversion rate optimization, we convert high-intent searches into high-value customer acquisitions.",
    slug: "/performance-marketing/ppc-agency-kolkata",
    features: [
      "Google Search & Performance Max Campaigns",
      "Dynamic Remarketing & Multi-Touch Display Funnels",
      "Negative Keyword Moats & Algorithmic Bid Automation",
      "Conversion Rate Optimization (CRO) Landing Pages",
    ],
  },
  {
    number: "02",
    title: "Online Lead Generation",
    tagline: "High-Quality Prospect Acquisition",
    badge: "+300% Lead Volume",
    quote: "We can be your lead-generating agency, managing to hit your target with a precise nail.",
    description: "Stop guessing and start converting strangers into qualified buyers. We build high-conversion lead generation systems across Meta, LinkedIn, and Google that deliver an uninterrupted flow of ready-to-buy inquiries directly into your CRM.",
    slug: "/performance-marketing/online-lead-generation-kolkata",
    features: [
      "Multi-Step Lead Qualification Funnels",
      "B2B & High-Ticket B2C Target Audience Modeling",
      "Instant WhatsApp & CRM Lead Synchronization",
      "Cost-Per-Lead (CPL) Ceiling Guarantees",
    ],
  },
  {
    number: "03",
    title: "Mobile/SMS Marketing",
    tagline: "High-Open Direct Messaging",
    badge: "98% Open Rate",
    quote: "Now comes SMS—the tool that can help any company increase customers’ interest and sales—SMS marketing.",
    description: "Harness the immediate power of direct-to-device communication. With near-instant open rates, our DLT-registered SMS and WhatsApp broadcast campaigns spark immediate interest, promote timely sales flash events, and reactivate dormant leads.",
    features: [
      "DLT-Compliant Transactional & Promotional Routing",
      "Real-Time Geo-Targeted Offers & Flash Sale Alerts",
      "Automated Trigger-Based WhatsApp & SMS Workflows",
      "High-Volume Delivery Infrastructure with Delivery Reports",
    ],
  },
  {
    number: "04",
    title: "Email Marketing",
    tagline: "Retention & Automated Nurturing",
    badge: "42:1 Avg ROI",
    quote: "Email marketing helps build deep customer relationships and maintain repeat business through value-rich communication.",
    description: "Turn one-time buyers into lifetime brand advocates. We build lifecycle email sequences, dynamic cart abandonment recoveries, personalized promotional newsletters, and enterprise lead nurturing flows with world-class deliverability.",
    features: [
      "Dynamic Behavioral & Lifecycle Segmentation",
      "High-Converting HTML5 Template Design",
      "Dedicated IP Warming & DKIM/DMARC Protection",
      "Automated Drip Sequences for High-Ticket Sales",
    ],
  },
  {
    number: "05",
    title: "Pay On Performance Marketing",
    tagline: "Zero-Risk Commercial Scale",
    badge: "Performance Guarantee",
    quote: "Pay-on-performance marketing ensures total transparency and alignment: you only pay when verified business results are delivered.",
    description: "Total commercial alignment. We audit your existing conversion funnels, identify leakages, and implement a 90-day growth roadmap where you only pay our agency retainer once verified improvements in qualified leads and revenue are achieved.",
    slug: "/performance-marketing/pay-on-performance-marketing",
    features: [
      "Transparent Milestone-Based Performance Contracting",
      "Multi-Touch Attribution Dashboard & Real-Time Reporting",
      "Continuous Bid, Audience & Creative Refinement",
      "Guaranteed Growth in Inquiries Within 90 Days",
    ],
  },
];

const faqs = [
  {
    number: "01",
    question: "How does Plan D Media's 'Pay Upon Improvement' guarantee work?",
    answer: "We set benchmark KPIs (Cost Per Lead, Organic Search Ranks, Conversion Rate) during our initial onboarding audit. There are no locked-in fixed-term contracts. You only pay our agency retainer once there is verified, dashboard-backed improvement in agreed business metrics.",
  },
  {
    number: "02",
    question: "Why is performance marketing superior to traditional branding?",
    answer: "Traditional branding focuses on vanity metrics like impressions and reach. Performance marketing connects every advertising rupee directly to pipeline, qualified appointments, e-commerce transactions, and customer acquisition cost (CAC).",
  },
  {
    number: "03",
    question: "Which ad platforms does Plan D Media manage?",
    answer: "We manage Google Ads (Search, Performance Max, YouTube, Display), Meta (Facebook & Instagram Lead & Conversion Ads), LinkedIn B2B Sponsored Content, Apple Search Ads, and Programmatic Connected TV.",
  },
  {
    number: "04",
    question: "How fast will our business see qualified leads?",
    answer: "Paid PPC and Meta lead campaigns typically generate qualified inquiries within 48 to 72 hours of campaign go-live. Full funnel optimization and CPA reduction take 2 to 4 weeks of algorithmic data maturation.",
  },
];

export default function PerformanceMarketingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero (Side-by-Side Image Placing matching screenshot) */}
      <ReferenceServiceHero
        tagNumber="[01 / 05]"
        title1="Performance"
        title2="Marketing"
        subhead="Are you having trouble to generate measurable ROAS and qualified leads?"
        description="Most agencies skip conversion discovery to get to the fun part of spending your ad budget. We don't. We define your CPA benchmarks, decode your high-intent buyers cold, and architect multi-touch acquisition funnels built to deliver compounding ROAS. Performance marketing isn't vanity impressions — it's the foundation of your company's sales pipeline."
        tags={["Pay-On-Performance", "Google Search", "Meta Conversion", "CRO Funnels", "High ROAS"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="Performance Marketing Analytics and Growth Architecture"
        altHeroImage="/heroes/hero-performance-marketing.jpg"
        altImageLabel="Analytics Dashboard"
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 2. Process Section */}
      <ProcessSection />

      {/* 3. Core Strategy Pillars */}
      <StrategyPillarsSection />

      {/* 4. Data-Information */}
      <DataMetricsSection />

      {/* 5. Specific Service Pillars Grid */}
      <ReferenceCapabilitiesGrid
        badge="Performance Capabilities"
        title1="5 Proven Revenue"
        title2="Engines in Kolkata"
        description="Full-funnel execution designed to capture high-intent buyers, eliminate wasted ad spend, and scale your qualified customer pipeline."
        items={subServices}
        columns={3}
      />

      {/* 6. Case Studies */}
      <ReferenceCaseStudies
        badge="Verified Case Studies"
        title1="Measured ROAS"
        title2="& Real Pipeline"
      />

      {/* 7. Agency Differentiators */}
      <ReferenceDifferentiators />

      {/* 8. FAQs */}
      <ReferenceFaqSection
        badge="FAQ"
        title1="Learn any"
        title2="question"
        description="Everything you need to know about our Pay-On-Performance model, platform capabilities, onboarding timelines, and guaranteed lead growth."
        faqs={faqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready to Scale Your Qualified Pipeline?"
        subtitle="Book a complimentary 30-minute growth audit with our senior performance marketing architects. Pay only when your metrics improve."
        primaryCtaText="Claim Your Free Growth Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
