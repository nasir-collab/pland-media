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

const socialServices = [
  {
    number: "01",
    title: "Social Media Marketing",
    tagline: "Active Community & Cultural Resonance",
    badge: "Viral Engagement",
    quote:
      "Social media marketing is not some casual affair for Plan D Media; we are just monitoring it like a curious bystander.",
    description:
      "We take full ownership of your social brand narrative across Instagram, LinkedIn, Facebook, and YouTube. Through high-production visual storytelling, culturally relevant reels, and active community management, we turn passive followers into zealous brand evangelists.",
    features: [
      "Custom Monthly Content Calendars & Creative Direction",
      "Short-Form Video Production (Reels, Shorts, Carousels)",
      "Proactive Community Engagement & DM Management",
      "Trend Jacking & Viral Pop-Culture Integration",
    ],
  },
  {
    number: "02",
    title: "Influencer Marketing",
    tagline: "Authentic Creator Endorsements",
    badge: "High Credibility",
    quote:
      "Plan D Media suggests removing the megaphone and promoting your brand through such a useful channel as influencer marketing!",
    description:
      "Ditch generic ads. We broker and execute high-impact creator partnerships with vetted nano, micro, and macro influencers in Kolkata, Bengal, and nationally who hold genuine sway over your exact target demographic.",
    features: [
      "Vetted Creator Selection with Genuine Engagement Rates",
      "End-to-End Campaign Contracting & Deliverable Oversight",
      "Native Product Placement & Unboxing Storytelling",
      "Performance Attribution & Trackable Affiliate Promo Codes",
    ],
  },
  {
    number: "03",
    title: "Online Media Buying",
    tagline: "Data-Driven Paid Social Funnels",
    badge: "High-Velocity Reach",
    quote:
      "Are you mixing up social media ads with paid social ads, SEM, and display ads, or don’t you know which one?",
    description:
      "We bring mathematical clarity to paid social advertising. Deploying precision lookalike modeling, retargeting funnels, and aggressive A/B creative testing across Meta, LinkedIn, and YouTube to ensure every advertising rupee drives commercial pipeline.",
    features: [
      "Meta Ads Manager (Instagram & Facebook Lead Generation)",
      "LinkedIn Sponsored Content & Account-Based Marketing (ABM)",
      "Dynamic Product Ads & Omnichannel Cart Retargeting",
      "Rigorous ROAS & Cost-Per-Acquisition (CAC) Guardrails",
    ],
  },
];

const faqs = [
  {
    number: "01",
    question: "Why is social media branding essential for B2B and B2C businesses?",
    answer:
      "Modern consumers and enterprise procurement managers research brand social media profiles before making purchasing decisions. An active, authoritative social presence validates credibility, fosters trust, and accelerates the sales cycle.",
  },
  {
    number: "02",
    question: "How do you select influencers for our campaigns?",
    answer:
      "We analyze follower authenticity, audience demographics, comment sentiment, and real engagement metrics to filter out accounts with fake followers or inflated metrics. We only partner with creators whose followers match your buyer persona.",
  },
  {
    number: "03",
    question: "How often will content be posted on our social channels?",
    answer:
      "Depending on your package and audience strategy, we typically deploy 12 to 24 high-production assets per month (including short-form videos, carousels, and stories), complemented by daily community monitoring.",
  },
  {
    number: "04",
    question: "Can you manage our paid social advertising budgets?",
    answer:
      "Yes. Our media buying division manages hundreds of thousands in ad spend across Meta, LinkedIn, and YouTube with rigorous daily optimization for minimum cost per acquisition.",
  },
];

export default function SocialBrandingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero (Side-by-Side Image Placing matching screenshot) */}
      <ReferenceServiceHero
        tagNumber="[04 / 05]"
        title1="Social Media"
        title2="& Branding"
        subhead="Are you having trouble to capture attention and build an engaged brand community?"
        description="Most agencies skip cultural discovery to churn out generic graphics no one notices. We don't. We define your brand voice, decode viral audience triggers cold, and architect short-form reels and creator partnerships built to command market attention. Social branding isn't a vanity exercise — it's the foundation of customer trust and organic pull."
        tags={["Viral Reels", "Influencer Networks", "Meta Media Buying", "Community Management", "B2B LinkedIn ABM"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="Social Media Marketing and Creative Production Studio"
        altHeroImage="/heroes/hero-social-branding.jpg"
        altImageLabel="Creative Studio"
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
        badge="Social Capabilities"
        title1="3 Pillars For High-Impact"
        title2="Brand Dominance"
        description="From organic viral narratives to contracted creator endorsements and multi-touch paid social funnels."
        items={socialServices}
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
        description="Everything you need to know about our social storytelling workflows, creator verification process, content posting frequency, and media spend optimization."
        faqs={faqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready to Transform Your Social Brand Authority?"
        subtitle="Book a creative strategy session with our social directors. Let's create campaigns that command attention and ignite engagement."
        primaryCtaText="Claim Your Social Strategy Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
