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

const realEstatePillars = [
  {
    number: "01",
    title: "Industry Expertise",
    tagline: "45-60 Day Property Decision Cycle",
    badge: "High-Intent Buyers",
    quote:
      "We understand the 45-60 day property decision cycle and create marketing that addresses buyer concerns at each stage, from discovery to site visits and final sale agreements.",
    description:
      "Real estate buyers have long consideration cycles. We map every touchpoint across the 60-day decision journey—from first discovery through walkthroughs, loan consultations, sample flat tours, and deed signings.",
    features: [
      "Targeted Property Discovery & Google Search Intent",
      "Interactive 3D Walkthroughs & Aerial Drone Videos",
      "Sample Flat Virtual Reality (VR) Showcases",
      "Verified Budget-Filtered Buyer Lead Qualification",
    ],
  },
  {
    number: "02",
    title: "Customized Strategies",
    tagline: "Luxury vs Affordable Housing",
    badge: "Segmented Positioning",
    quote:
      "Luxury developments need immersive 3D walkthroughs, while affordable housing projects need clear financing schemes and EMI calculators.",
    description:
      "Different buyer personas require totally different psychological triggers. We craft bespoke luxury branding for premium villas and penthouses, while running high-converting EMI and PMAY affordability campaigns for mass housing.",
    features: [
      "Ultra-Luxury High-Net-Worth (HNI) Property Funnels",
      "Affordable Housing EMI & Government Scheme Ads",
      "Commercial Office & Retail Space Procurement Ads",
      "NRI Real Estate Investment Outreaches in Gulf & US",
    ],
  },
  {
    number: "03",
    title: "Lead Quality Focus",
    tagline: "Pre-Qualified Site Visitors",
    badge: "+300% Site Visits",
    quote:
      "We’d rather send you 10 qualified buyers with verified budgets ready to tour your sample flat than 100 casual window-shoppers.",
    description:
      "Stop wasting sales team hours on uninterested contacts. We deploy 2-step verification funnels, budget gating, and instant WhatsApp scheduling that ensure only high-intent buyers arrive for on-site tours.",
    features: [
      "Budget-Gated Online Lead Capture Forms",
      "Instant WhatsApp CRM Sync & Callback Triggers",
      "Automated Sample Flat Tour Scheduling",
      "Site-Visit Telephony Tracking & Attributed Sales",
    ],
  },
  {
    number: "04",
    title: "Comprehensive Toolset",
    tagline: "Virtual Tours, GMB & Meta Ads",
    badge: "Full Real Estate Stack",
    quote:
      "Our complete toolkit includes local GMB SEO, targeted Meta property ads, virtual tours, architectural drone photography, and high-converting landing pages.",
    description:
      "From hyper-local Google Business Profile dominance to architectural drone videography, high-speed project landing pages, and multi-touch retargeting, we provide an all-inclusive growth ecosystem.",
    features: [
      "High-Volume Real Estate Local 3-Pack SEO",
      "Meta Carousel & Video Ads of Ongoing Projects",
      "Sub-2s Mobile-Optimized Project Landing Pages",
      "Automated WhatsApp Lead Nurture & Re-engagement",
    ],
  },
];

const realEstateFaqs = [
  {
    number: "01",
    question: "Which is the best digital marketing agency for real estate in Kolkata?",
    answer:
      "Plan D Media is widely regarded as the leading real estate digital marketing agency in Kolkata. We specialize in real estate marketing knowledge (banner ads, video walkthroughs, and community management), proper Meta and PPC ads management with transparent CPL, and GMB SEO optimization with high-volume residential and commercial property keywords.",
  },
  {
    number: "02",
    question: "What digital marketing services are most effective for a real estate business?",
    answer:
      "The 4 most effective services for real estate are: 1. Google Business Profile & Local SEO with high-volume property keywords. 2. Social Media Video Marketing showcasing ongoing projects, sample flats, and customer reviews. 3. Meta and PPC lead generation campaigns optimized for low cost-per-lead and verified buyer intent. 4. Targeted ads on high-intent real estate networks and automated WhatsApp lead booking.",
  },
  {
    number: "03",
    question: "How does digital marketing improve property sales and branding for developers?",
    answer:
      "Digital marketing delivers a direct ROI across 5 channels: Organic Leads through GMB & SEO, Paid Google Search & Display Leads, Meta & YouTube Video Ad Inquiries, Specialized Third-Party Property Portals, and automated WhatsApp/Email nurture sequences.",
  },
  {
    number: "04",
    question: "How fast can a real estate developer generate site visit inquiries?",
    answer:
      "Paid Meta and Google lead campaigns typically begin delivering verified buyer inquiries within 48 to 72 hours of campaign activation, with site visit appointments scheduled in the first week.",
  },
];

export default function DigitalMarketingForRealEstatePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero (Side-by-Side Image Placing matching screenshot) */}
      <ReferenceServiceHero
        tagNumber="[05 / 07]"
        title1="Real Estate"
        title2="Marketing"
        subhead="Are you having trouble to attract verified property buyers and schedule sample flat visits?"
        description="Most real estate marketers skip buyer qualification to send you casual window-shoppers. We don't. We define your project USP, decode budget-verified buyers cold, and architect architectural walkthroughs and WhatsApp funnels built to fill sample flat calendars. Real estate marketing isn't raw lead volume — it's the foundation of actual signed property deeds."
        tags={["Site Visit Inquiries", "Luxury Walkthroughs", "NRI Buyer Funnels", "Property SEO", "High Intent Leads"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="Sophisticated Modern Real Estate Architecture and Property Marketing"
        altHeroImage="/heroes/hero-real-estate.jpg"
        altImageLabel="Property Architecture"
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
        badge="Real Estate Capabilities"
        title1="4 Pillars For Property"
        title2="Acquisition & Sales"
        description="Comprehensive real estate growth funnels designed to fill sample flat calendars and accelerate property closings."
        items={realEstatePillars}
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
        description="Everything you need to know about our real estate marketing methodologies, sample flat visit generation, lead qualification, and property sales velocity."
        faqs={realEstateFaqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready to Fill Your Project's Site Visit Schedule?"
        subtitle="Book a consultation with our real estate growth directors. We'll audit your project listings, CPL benchmarks, and sample flat booking funnels."
        primaryCtaText="Claim Your Free Property Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
