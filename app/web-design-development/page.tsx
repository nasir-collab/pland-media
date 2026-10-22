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

const webServices = [
  {
    number: "01",
    title: "Website Design",
    tagline: "Persuasive High-Converting UI/UX",
    badge: "Bespoke Aesthetics",
    quote:
      "Plan D Media is unique in its purpose of creating compelling Websites! As for website design, we create web experiences that persuade!",
    description:
      "We build visually captivating, brand-defining digital experiences tailored for luxury aesthetics, intuitive buyer journeys, and maximum conversion rates across all device viewports.",
    features: [
      "Custom UI/UX Wireframing & Responsive Prototypes",
      "Mobile-First Fluid Layouts & Micro-Animations",
      "High-Impact Typography & Visual Brand Systems",
      "Conversion Funnel Architecture & Heatmap Optimization",
    ],
  },
  {
    number: "02",
    title: "Custom Web Development",
    tagline: "Scalable Full-Stack Engineering",
    badge: "Next.js & Modern Stacks",
    quote:
      "Plan D Media is unique in its purpose of creating compelling Websites! As for website design, we create web experiences that persuade.",
    description:
      "Engineered for lightning performance and ultra-clean code. We develop scalable modern web applications using Next.js, React, and robust APIs with sub-second page loads and zero security compromises.",
    features: [
      "Headless & Jamstack Performance Architectures",
      "SEO-Friendly Server-Side Rendering (SSR)",
      "Custom Backend APIs & Third-Party Integrations",
      "Enterprise Level Security & Speed Optimization",
    ],
  },
  {
    number: "03",
    title: "WordPress Development",
    tagline: "Tailored Content Management",
    badge: "Enterprise WordPress",
    quote:
      "Plan D Media, your go-to WordPress website development team, to make a perfectly crafted WordPress Website!",
    description:
      "Stop struggling with bloated themes and slow plugins. We build customized, secure, and intuitive WordPress portals that your marketing team can manage with complete ease.",
    features: [
      "Custom Gutenberg Blocks & Custom Post Types",
      "Speed Optimized Core Web Vitals & Caching",
      "Hardened WordPress Security & Firewall Setup",
      "Seamless Lead Capture & Form Integrations",
    ],
  },
  {
    number: "04",
    title: "Shopify Expert",
    tagline: "High-Volume eCommerce Stores",
    badge: "Shopify Plus Ready",
    quote:
      "Are you disgusted with making your Shopify store just an interactive checkout and remote as a part of the retail space?",
    description:
      "We turn Shopify storefronts into dynamic shopping engines. Custom Liquid coding, high-converting product pages, automated upsells, and 1-click checkout experiences that scale sales.",
    features: [
      "Bespoke Shopify Theme Coding & Liquid Tweaks",
      "App Ecosystem Integration & Upsell Logic",
      "Payment Gateway & Local Indian Logistics Sync",
      "High-AOV Cart Drawer & Abandonment Prevention",
    ],
  },
  {
    number: "05",
    title: "Magento Development",
    tagline: "Enterprise Multi-Store Architecture",
    badge: "High-Catalog Scale",
    quote:
      "Magento—well, the name is incredible. It sends shivers down the spines of any self-respecting supervillain, so maybe not everyone dares cross it.",
    description:
      "We tame Magento's power for heavy enterprise catalogs. Robust multi-currency, multi-warehouse, B2B wholesale portals engineered for massive transactional volume without performance dips.",
    features: [
      "Magento 2 Enterprise Storefront Engineering",
      "ERP, WMS & Inventory Database Synchronization",
      "Complex Custom Pricing Rules & Tiered Discounts",
      "High-Concurrency Cloud Server Infrastructure",
    ],
  },
  {
    number: "06",
    title: "CRM Development",
    tagline: "Data Insights & Lead Orchestration",
    badge: "Automated Workflows",
    quote:
      "Relationships with customers remain vital business assets in the current business environment characterized by the relative emphasis on data insights.",
    description:
      "We build custom CRM portals and integrate platforms like HubSpot, Zoho, and Salesforce to ensure every incoming digital inquiry is routed, tracked, and nurtured into a closed sale.",
    features: [
      "Custom Pipeline Dashboards & Deal Tracking",
      "Instant WhatsApp & SMS Notification Triggers",
      "Automated Lead Scoring & Agent Routing",
      "Multi-Touch Commercial Attribution Analytics",
    ],
  },
  {
    number: "07",
    title: "Website Maintenance",
    tagline: "24/7 Security & Uptime Patrol",
    badge: "99.9% Uptime SLA",
    quote:
      "Meet the Website Maintenance Squad of Plan D Media to tackle unforeseen glitches and keep your website running smoothly.",
    description:
      "Rest easy while our technical squad monitors uptime, applies critical security patches, runs daily cloud backups, and continuously optimizes site speed.",
    features: [
      "24/7 Real-Time Uptime Monitoring & Rapid Recovery",
      "Scheduled Plugin, Theme & Core Platform Updates",
      "Daily Automated Off-Site Cloud Backups",
      "Malware Scanning, SSL & Security Audits",
    ],
  },
];

const faqs = [
  {
    number: "01",
    question: "What makes Plan D Media different from other web development companies in Kolkata?",
    answer:
      "We don't build pretty digital brochures that sit idle. We engineer commercial conversion assets. Every website is built from the ground up for high speed, search engine friendliness, mobile responsiveness, and direct lead generation.",
  },
  {
    number: "02",
    question: "How long does a custom website design and development take?",
    answer:
      "Standard corporate websites typically launch in 3 to 4 weeks. Complex eCommerce stores and custom web platforms with CRM integrations generally take 6 to 8 weeks with structured staging and milestone reviews.",
  },
  {
    number: "03",
    question: "Will our website be mobile-friendly and fast loading?",
    answer:
      "100%. We optimize every page for Google Core Web Vitals, sub-second load times, and fluid responsiveness across all smartphones, tablets, and desktop displays.",
  },
  {
    number: "04",
    question: "Do you provide website maintenance and support after launch?",
    answer:
      "Yes. Our Website Maintenance Squad provides comprehensive ongoing support, security updates, daily cloud backups, uptime monitoring, and content additions.",
  },
];

export default function WebDesignDevelopmentPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero (Side-by-Side Image Placing matching screenshot) */}
      <ReferenceServiceHero
        tagNumber="[03 / 05]"
        title1="Web Design &"
        title2="Development"
        subhead="Are you having trouble with a slow website that fails to convert visitors into buyers?"
        description="Most design agencies skip user journey discovery to create flashy templates that don't convert. We don't. We architect modern Next.js speed, decode buyer psychological friction cold, and engineer high-converting digital storefronts built to scale sales. Your website isn't a digital brochure — it's the foundation of your commercial conversion engine."
        tags={["Next.js SSR", "Custom UI/UX", "Shopify Stores", "Enterprise WordPress", "Core Web Vitals"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="Modern Web Design and Engineering Workspace"
        altHeroImage="/heroes/hero-web-design-development.jpg"
        altImageLabel="UI/UX Workspace"
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
        badge="Development Capabilities"
        title1="7 Modern Engineering"
        title2="& Design Services"
        description="Full-cycle digital product design, web engineering, and technical maintenance designed to power seamless commercial scale."
        items={webServices}
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
        description="Everything you need to know about our web engineering standards, delivery timelines, mobile responsiveness, and post-launch maintenance."
        faqs={faqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready to Build a High-Converting Digital Presence?"
        subtitle="Book a consultation with our digital product architects. Let's design a website that elevates your brand and scales your sales pipeline."
        primaryCtaText="Get a Free Website Estimate"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
