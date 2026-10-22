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

const ecommercePillars = [
  {
    number: "01",
    title: "Attracting High-Intent Shoppers",
    tagline: "Ready-to-Buy Product Traffic",
    badge: "3.5x-6x ROAS",
    quote: "You need customers ready to purchase. We target high-intent prospects.",
    description:
      "Our ecommerce lead generation targets promising prospects. We optimize product pages to rank for relevant searches. Our team crafts targeted ad campaigns to reach shoppers during key decisions. We also manage your reputation, building trust before checkout.",
    features: [
      "Google Performance Max & Shopping Feed Optimization",
      "Dynamic Product Catalog Ads across Meta & Instagram",
      "High-Intent Commercial Keyword & Category SEO",
      "Influencer Unboxing & UGC Creator Campaigns",
    ],
  },
  {
    number: "02",
    title: "Building Brand Loyalty",
    tagline: "Customer Lifetime Value & Repeat Purchases",
    badge: "High Retention",
    quote: "Repeat customers drive long-term ecommerce success.",
    description:
      "We help you turn one-time buyers into loyal fans. Our team creates engaging content that showcases your products’ unique features and benefits. We manage your social media presence to share valuable tips, behind-the-scenes peeks, and success stories. Through personalized email and retargeting campaigns, we keep your brand top-of-mind.",
    features: [
      "Klaviyo & Omnisend Retention Email Flows",
      "VIP Tiered Loyalty & Referral Program Integration",
      "Post-Purchase Review Capture & Photo UGC Sync",
      "Dynamic Cross-Sell & Replenishment Automation",
    ],
  },
  {
    number: "03",
    title: "Streamlining the Purchase Process",
    tagline: "Conversion Optimization & Cart Recovery",
    badge: "1-Click Checkout",
    quote: "A seamless checkout directly dictates your store sales.",
    description:
      "Our digital tools simplify and improve each customer’s journey. We optimize your site for fast speeds and intuitive navigation. Our team implements user-friendly filters and search to enhance the shopping experience. We also set up cart abandonment emails to recapture lost sales.",
    features: [
      "Automated WhatsApp & Email Abandoned Cart Recovery",
      "High-AOV Slide Cart Drawers & Upsell Logic",
      "Speed Optimized Core Web Vitals on Shopify & Woo",
      "Indian Logistics & Cash On Delivery (COD) Fraud Moats",
    ],
  },
  {
    number: "04",
    title: "Optimizing for Mobile Commerce",
    tagline: "Mobile-First Touch & 1-Click Payments",
    badge: "Mobile Speed",
    quote: "Mobile buyers drive the future of digital retail.",
    description:
      "We ensure you’re ready for them. Our team optimizes your online store for seamless browsing and buying on any device. We implement a responsive design that displays beautifully across screen sizes. Fast-loading pages keep impatient mobile users engaged. We also enable mobile-friendly payment for quicker checkouts.",
    features: [
      "Sub-Second Mobile Page Load Optimization",
      "UPI & 1-Click Fast Checkout Integrations",
      "Mobile Sticky Add-To-Cart & Navigation Bars",
      "Thumb-Friendly UI/UX for Catalog Browsing",
    ],
  },
];

const ecommerceFaqs = [
  {
    number: "01",
    question: "Which digital marketing agencies in Kolkata specialize in eCommerce growth?",
    answer:
      "Plan D Media is recognized as a leader in eCommerce growth in Kolkata and Eastern India. We combine Google Performance Max, Meta catalog sales campaigns, SEO product schema optimization, and retention email automation to scale direct-to-consumer (D2C) and marketplace brands.",
  },
  {
    number: "02",
    question: "Which eCommerce platforms do you work with?",
    answer:
      "We work with all major eCommerce platforms including Shopify, Shopify Plus, WooCommerce, Magento 2, custom Next.js headless storefronts, and Amazon/Flipkart marketplace integrations.",
  },
  {
    number: "03",
    question: "How do you recover abandoned carts for online stores?",
    answer:
      "We implement dynamic multi-channel recovery funnels combining automated WhatsApp notifications, timed email sequences offering tiered incentives, and dynamic retargeting ads displaying the exact abandoned items.",
  },
  {
    number: "04",
    question: "What target ROAS (Return On Ad Spend) can we expect?",
    answer:
      "Depending on your product margins and average order value (AOV), our target blended ROAS ranges between 3.5x to 6x for mature eCommerce brands with established product-market fit.",
  },
];

export default function DigitalMarketingForEcommercePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero (Side-by-Side Image Placing matching screenshot) */}
      <ReferenceServiceHero
        tagNumber="[04 / 07]"
        title1="eCommerce"
        title2="Marketing"
        subhead="Are you having trouble to scale online store sales profitably beyond rising ad costs?"
        description="Most eCommerce agencies skip unit economic discovery to burn cash on unprofitable traffic. We don't. We optimize catalog feeds, decode cart abandonment leakages cold, and architect retention email and Google Shopping funnels built for compounding blended ROAS. eCommerce marketing isn't one-time sales — it's the foundation of customer lifetime value."
        tags={["Google Shopping", "Meta Dynamic Ads", "Shopify Scale", "Cart Abandonment", "High ROAS"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="Premium eCommerce Product Photography and Digital Shopping Experience"
        altHeroImage="/heroes/hero-ecommerce.jpg"
        altImageLabel="Product Retail"
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
        badge="eCommerce Capabilities"
        title1="4 Pillars For Profitable"
        title2="Store Growth"
        description="End-to-end retail growth architecture combining high-intent customer acquisition with lifetime value optimization."
        items={ecommercePillars}
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
        description="Everything you need to know about our eCommerce growth frameworks, platform support, cart abandonment strategies, and realistic ROAS targets."
        faqs={ecommerceFaqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready to Scale Your Online Store's Revenue?"
        subtitle="Book a consultation with our eCommerce growth directors. We'll audit your ad account ROAS, store conversion rate, and abandoned cart flows."
        primaryCtaText="Claim Your Free eCommerce Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
