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

const consultingServices = [
  {
    number: "01",
    title: "Digital Growth & Performance Audit",
    tagline: "Root-Cause Commercial Diagnosis",
    badge: "100-Point Audit",
    quote:
      "Our proven digital marketing strategies are built on a results driven approach. Customized solutions for unique business challenges.",
    description:
      "We dissect your existing digital advertising accounts, landing pages, tracking telemetry, and SEO architecture to expose budget leaks, conversion bottlenecks, and hidden growth levers.",
    features: [
      "Ad Spend Efficiency & Attribution Leakage Audit",
      "Landing Page Conversion Rate Optimization (CRO) Heatmap Review",
      "Technical SEO & Core Web Vitals Diagnostic",
      "Competitive Intelligence & Market Share Reconnaissance",
    ],
  },
  {
    number: "02",
    title: "Cyber Security Services",
    tagline: "Enterprise Threat & Asset Protection",
    badge: "Zero-Trust Defense",
    quote:
      "We forget that life is much more online than it used to be; cybersecurity is in demand in today’s interconnected world.",
    description:
      "As digital operations expand, protecting your customer databases, intellectual property, and web assets is non-negotiable. We provide comprehensive vulnerability testing, DDoS mitigation, and compliance frameworks.",
    features: [
      "Web Application Penetration Testing & Vulnerability Scans",
      "DDoS Mitigation, Cloudflare Setup & WAF Architecture",
      "Customer Data Privacy & Regulatory Compliance (GDPR/DPDP)",
      "Employee Phishing Defense & Incident Response Roadmaps",
    ],
  },
  {
    number: "03",
    title: "Fractional CMO & Strategy",
    tagline: "Executive Marketing Leadership",
    badge: "Executive Advisory",
    quote:
      "We are 60% cheaper than big agencies and in-house teams. Hire the best digital marketing agency in Kolkata and a team of experts with serious experience in kicking ass, increasing sales, and growing brands.",
    description:
      "Get veteran marketing leadership without the full-time executive salary overhead. We align your board objectives, structure in-house teams, evaluate agency vendors, and orchestrate omnichannel growth.",
    features: [
      "Go-To-Market (GTM) Strategy for New Products & Expansions",
      "Agency & Vendor Performance Governance",
      "Marketing Tech Stack Architecture & CRM Selection",
      "Board-Level Revenue Attribution & Financial Modeling",
    ],
  },
  {
    number: "04",
    title: "Enterprise SEO Consulting",
    tagline: "SEO Services Who Makes a Profit",
    badge: "Top 3 SERP Focus",
    quote:
      "SEO services who makes a profit. Search Engine Optimization is critical in elevating your online presence and leads.",
    description:
      "Bespoke consulting for complex corporate migrations, international multi-domain setups, and enterprise rank recovery. We build defensible search moats that drive compounding commercial profit.",
    features: [
      "Enterprise Website Migration Oversight & Risk Mitigation",
      "Algorithmic Penalty Recovery & Disavow Consulting",
      "High-Value Commercial Topic Cluster Architecture",
      "Internal Linking & Dynamic Schema Implementation",
    ],
  },
];

const faqs = [
  {
    number: "01",
    question: "How does Plan D Media's consulting engagement work?",
    answer:
      "We start with a thorough 100-point diagnostic audit of your business model, competitors, and current marketing channels. We deliver an actionable 90-day commercial roadmap with clear milestones and execution options.",
  },
  {
    number: "02",
    question: "Why choose consulting instead of hiring a full in-house team?",
    answer:
      "Hiring an in-house CMO, technical architect, and media buyer requires months of recruiting and heavy payroll expenses. Our consulting gives you immediate access to seasoned experts at 60% less cost, with zero long-term lock-in.",
  },
  {
    number: "03",
    question: "Can you help fix poor results from our existing marketing agency?",
    answer:
      "Yes. Many of our consulting clients engage us specifically to audit their existing agency's performance, uncover hidden ad waste, and set clear contractual KPIs that hold vendors accountable.",
  },
  {
    number: "04",
    question: "Do you also help execute the recommendations?",
    answer:
      "Absolutely. You can choose to have your in-house team execute our strategic blueprint, or have Plan D Media's specialized performance and web teams handle complete turnkey execution.",
  },
];

export default function ConsultingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero (Side-by-Side Image Placing matching screenshot) */}
      <ReferenceServiceHero
        tagNumber="[05 / 05]"
        title1="Branding"
        title2="Consulting"
        subhead="Are you having trouble to identify why your marketing budget is leaking?"
        description="Most consulting firms skip ground reality to hand you a 100-page theoretical deck. We don't. We conduct a 100-point commercial audit, decode attribution leaks cold, and architect fractional CMO roadmaps built for measurable revenue growth. Strategic consulting isn't academic advice — it's 60% cheaper executive leadership with proven execution."
        tags={["Fractional CMO", "Growth Audit", "Cyber Defense", "Enterprise SEO", "Vendor Governance"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="Strategic Branding and Creative Direction Moodboard Studio"
        altHeroImage="/heroes/hero-consulting.jpg"
        altImageLabel="Strategy Moodboard"
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
        badge="Consulting Capabilities"
        title1="4 Pillars of Executive"
        title2="Marketing Advisory"
        description="Dissecting inefficiencies, fortifying digital assets, and orchestrating profitable go-to-market strategies."
        items={consultingServices}
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
        description="Everything you need to know about our consulting methodology, fractional leadership advantages, agency audits, and turnkey execution."
        faqs={faqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready for Seasoned Commercial Marketing Leadership?"
        subtitle="Book a confidential 30-minute diagnostic session with our senior strategy partners. Uncover where your growth pipeline is leaking."
        primaryCtaText="Claim Your 100-Point Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
