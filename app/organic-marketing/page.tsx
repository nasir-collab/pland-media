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

const organicServices = [
  {
    number: "01",
    title: "eCommerce Marketing",
    tagline: "Scalable Store Visibility & Sales",
    badge: "+340% Organic Revenue",
    quote:
      "Our integrated eCommerce marketing initiatives will be aimed at generating targeted traffic, enhancing conversion rates, and firstly, creating a base of proponents and consumers.",
    description:
      "We build robust organic traffic engines for online stores across Shopify, WooCommerce, and Magento. By optimizing product schemas, category taxonomy, and buyer-intent keyword clusters, we convert high-intent shoppers into repeat buyers without continuous ad spend.",
    features: [
      "Product Schema & Rich Snippets Optimization",
      "High-Intent Commercial Keyword Clustering",
      "Category Architecture & Internal Link Mesh",
      "Conversion Rate Optimization (CRO) for Checkout",
    ],
  },
  {
    number: "02",
    title: "SEO Service",
    tagline: "Rank Top 3 on Google",
    badge: "Top 3 SERP Domination",
    quote:
      "SEO is the way forward in making businesses stand out from the noisy and crowded marketplace.",
    description:
      "Cut through the digital noise. Our specialized technical SEO, authoritative link building, and on-page precision ensure your website secures dominant top-3 positions for commercial search queries in Kolkata and across India.",
    features: [
      "Technical Core Web Vitals & Crawlability Audits",
      "Editorial Backlink Outreach & Digital PR",
      "Top-3 Google Ranking Keyword Strategy",
      "Algorithm-Proof White Hat Optimization",
    ],
  },
  {
    number: "03",
    title: "Content Marketing",
    tagline: "Audience Magnet & Thought Leadership",
    badge: "Authority Building",
    quote:
      "Imagine you have the best products or services to present, but people with the potential interest in purchasing can never find you.",
    description:
      "We produce high-value, search-optimized editorial content, buyer guides, and thought leadership articles that capture prospects at the exact moment they search for solutions—building trust before they ever speak with sales.",
    features: [
      "In-Depth Buyer Persona Topic Mapping",
      "SEO-Driven Long-Form Pillar Content",
      "High-Converting Lead Magnets & Guides",
      "Omnichannel Content Distribution Strategy",
    ],
  },
  {
    number: "04",
    title: "Local SEO",
    tagline: "Google Maps & Local Pack Leader",
    badge: "Hyper-Local Reach",
    quote:
      "For people in your local area, locating your Business online is an elementary step that can only be possible today.",
    description:
      "Dominate local neighborhood searches and Google Maps 3-pack rankings. We optimize your Google Business Profile, local citations, and geo-targeted landing pages so nearby customers find and call you first.",
    features: [
      "Google Business Profile (GBP) Verification & Ranking",
      "Local Citation Consistency & NAP Cleanup",
      "Geo-Targeted Local Area Landing Pages",
      "Local Review Generation & Reputation Management",
    ],
  },
];

const faqs = [
  {
    number: "01",
    question: "Why is organic marketing more profitable in the long run than paid ads?",
    answer:
      "Paid ads stop producing the moment you turn off your daily budget. Organic SEO creates evergreen digital real estate that compounds over time, driving thousands of qualified visitors and leads at zero marginal cost per click.",
  },
  {
    number: "02",
    question: "How does Plan D Media's SEO profit guarantee work?",
    answer:
      "We only target high-intent commercial keywords that drive direct revenue, not vanity traffic. We establish clear ranking and lead benchmarks during onboarding and stand behind our execution with milestone-verified results.",
  },
  {
    number: "03",
    question: "How long does it take to rank on the first page of Google?",
    answer:
      "For local keywords and low-competition terms, results often appear in 4 to 8 weeks. Highly competitive enterprise and commercial keywords typically mature into top 3 rankings within 3 to 6 months.",
  },
  {
    number: "04",
    question: "Do you handle technical website improvements required for SEO?",
    answer:
      "Yes. Our in-house web engineering and SEO teams audit and fix Core Web Vitals, site speed, schema markup, mobile responsiveness, and internal linking to ensure 100% search engine friendliness.",
  },
];

export default function OrganicMarketingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero (Side-by-Side Image Placing matching screenshot) */}
      <ReferenceServiceHero
        tagNumber="[02 / 05]"
        title1="Organic"
        title2="Marketing"
        subhead="Are you having trouble to rank on Google and drive sustainable organic revenue?"
        description="Most agencies skip technical discovery to get to superficial blog posts. We don't. We audit your Core Web Vitals, decode commercial search intent cold, and architect evergreen topical authority built to survive Google algorithm shifts. SEO isn't just about traffic — it's the foundation of zero-CAC customer acquisition."
        tags={["SEO Dominance", "Content Marketing", "eCommerce SEO", "Local Maps 3-Pack", "High Intent Keywords"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="Organic Marketing SEO and Search Visibility Architecture"
        altHeroImage="/heroes/hero-organic-marketing.jpg"
        altImageLabel="Search Visibility"
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
        badge="Organic Capabilities"
        title1="4 Evergreen Pillars"
        title2="For Search Dominance"
        description="Systematic search marketing engineered to secure dominant organic market share, capture high-intent buyers, and build compounding digital equity."
        items={organicServices}
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
        description="Everything you need to know about our organic SEO methodology, timeline to first-page rankings, technical site improvements, and search profitability."
        faqs={faqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready to Own the First Page of Google?"
        subtitle="Claim your complimentary comprehensive technical SEO and competitor ranking audit today. Build compounding organic market leadership."
        primaryCtaText="Claim Your Free SEO Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
