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

const manufacturingPillars = [
  {
    number: "01",
    title: "Attracting Quality Leads",
    tagline: "B2B Procurement & RFQ Inquiries",
    badge: "+240% Pipeline Velocity",
    quote: "You need more than a high quantity of leads. You need ones that become buyers.",
    description:
      "Our B2B lead gen approaches in Kolkata identify decision-makers in your industries of interest. We optimize your website to rank for terms potential buyers use to search for offerings like yours. Our team crafts targeted ad campaigns to reach promising prospects when they are exploring solutions.",
    features: [
      "Industrial & B2B Technical SEO for Machinery & Components",
      "Procurement Intent Google Search & Display Ad Funnels",
      "LinkedIn Account-Based Marketing (ABM) for Decision-Makers",
      "High-Converting RFQ & Specification Download Portals",
    ],
  },
  {
    number: "02",
    title: "Establishing Industry Authority",
    tagline: "Engineering Eminence & Digital PR",
    badge: "Industry Authority",
    quote: "Buyers have confidence in manufacturers with proven knowledge.",
    description:
      "We help showcase your capabilities and mastery online. Our team produces in-depth, technical content that directly serves your audience’s needs and pain points. We manage your social media presence, sharing valuable industry insights and updates on your innovations.",
    features: [
      "Technical Whitepapers & Material Specification Guides",
      "Factory Virtual Tours & Precision Engineering Videos",
      "Industry Trade PR & OEM Partner Testimonials",
      "B2B LinkedIn Thought Leadership for Plant Executives",
    ],
  },
  {
    number: "03",
    title: "Optimizing Your Sales Funnel",
    tagline: "CRM Automation & Lead Nurturing",
    badge: "Automated RFQ",
    quote: "A seamless sales workflow is key in B2B manufacturing.",
    description:
      "Our digital tools optimize your lead nurturing and conversion. We implement automated email campaigns that provide relevant information to prospects throughout their buyer’s journey. Our team builds intuitive landing pages that turn visitors into leads.",
    features: [
      "Automated Multi-Touch Drip Sequences for 60-Day Cycles",
      "Instant WhatsApp & Email Inquiry Routing to Sales Reps",
      "CRM Integration (HubSpot, Zoho, Salesforce) for Deal Stages",
      "Distributor & Dealership Onboarding Funnels",
    ],
  },
  {
    number: "04",
    title: "Measuring and Refining Performance",
    tagline: "Transparent ROI & Pipeline Telemetry",
    badge: "Full Telemetry",
    quote: "Numbers reveal objective truths in B2B marketing.",
    description:
      "We deliver regular, straightforward reports on your digital marketing performance — no confusing jargon. These reports demonstrate exactly how our efforts translate to your bottom line. Our team analyzes this data to understand what works and what needs adjustment.",
    features: [
      "Cost-Per-RFQ & Dealership Lead Acquisition Tracking",
      "Closed-Loop Revenue Attribution from Website to ERP",
      "Quarterly Strategy Refinement & Market Expansion Audits",
      "Transparent Real-Time Dashboard Reporting",
    ],
  },
];

const manufacturingFaqs = [
  {
    number: "01",
    question: "What digital marketing services does Plan D Media offer for manufacturing companies?",
    answer:
      "We provide end-to-end B2B manufacturing growth systems: Technical SEO for industrial product terms, Google Search and Display ads targeting procurement managers, LinkedIn account-based marketing (ABM), digital spec sheets and catalog design, automated RFQ submission funnels, and CRM integration to track dealership and distributor inquiries.",
  },
  {
    number: "02",
    question: "Why shouldn't manufacturers just rely on trade shows and catalogs?",
    answer:
      "Over 80% of B2B procurement managers research industrial equipment and raw material suppliers online before ever attending an exhibition or placing an RFQ. Without digital visibility, your manufacturing capabilities remain invisible to modern buyers.",
  },
  {
    number: "03",
    question: "How long is the typical sales cycle for manufacturing leads?",
    answer:
      "Industrial and B2B sales cycles typically range from 30 to 90 days. Our lead nurturing funnels and automated drip sequences keep your brand top-of-mind throughout the evaluation and procurement review process.",
  },
  {
    number: "04",
    question: "Can you help our manufacturing firm expand exports internationally?",
    answer:
      "Yes. We create multi-country Google Search and LinkedIn campaigns that target importers, wholesalers, and industrial contractors across North America, Europe, the Middle East, and Southeast Asia.",
  },
];

export default function DigitalMarketingForManufacturingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero (Side-by-Side Image Placing matching screenshot) */}
      <ReferenceServiceHero
        tagNumber="[02 / 07]"
        title1="Manufacturing"
        title2="Marketing"
        subhead="Are you having trouble to generate qualified B2B manufacturing leads & RFQ inquiries?"
        description="Most agencies skip industrial discovery to get to the fun part. We don't. We define your technical positioning, decode procurement decision-makers cold, and architect lead pipelines built to survive past one campaign cycle. B2B digital marketing isn't a slide in our deck — it's the foundation of your factory floor's revenue."
        tags={["B2B RFQ Funnels", "Industrial SEO", "LinkedIn ABM", "Distributor Networks", "Global Exports"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="B2B Manufacturing Growth Strategy & Industrial Blueprint"
        altHeroImage="/heroes/hero-manufacturing.jpg"
        altImageLabel="Industrial Facility"
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
        badge="Manufacturing Capabilities"
        title1="4 Pillars For Industrial"
        title2="& B2B Leadership"
        description="Transforming legacy industrial sales into automated, high-intent procurement pipelines that drive real factory floor output."
        items={manufacturingPillars}
        columns={2}
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
        description="Everything you need to know about our industrial B2B strategies, trade show alternatives, procurement sales cycles, and export expansion."
        faqs={manufacturingFaqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready to Scale Your Industrial RFQ Pipeline?"
        subtitle="Schedule a consultation with our B2B industrial growth architects. We'll audit your search visibility, competitors, and RFQ conversion funnels."
        primaryCtaText="Claim Your Manufacturing Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
