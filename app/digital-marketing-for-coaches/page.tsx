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

const coachingPillars = [
  {
    number: "01",
    title: "Social Media Marketing",
    tagline: "Build Buzz & Personal Brand Community",
    badge: "Personal Brand",
    quote: "We build buzz for your brand on social platforms.",
    description:
      "Our team crafts engaging posts showcasing your expertise and resonating with your target audience. We’ll manage your accounts, run tailored ad campaigns, and cultivate an active community of potential clients.",
    features: [
      "Short-Form Video Coaching Reels (Instagram & LinkedIn)",
      "High-Engagement Personal Brand Content Calendars",
      "Community Building & Direct Message Conversion Systems",
      "Thought Leadership Carousels & Transformation Stories",
    ],
  },
  {
    number: "02",
    title: "Search Engine Optimization",
    tagline: "Climb Search Rankings For Coaching Queries",
    badge: "Top 3 SERP",
    quote: "We ensure potential clients find you when searching for coaches online.",
    description:
      "Our experts optimize your site with relevant keywords, valuable content, and quality backlinks. You’ll climb the search rankings, gaining visibility among those actively seeking your life, executive, or business coaching services.",
    features: [
      "Executive & Niche Coaching Intent Keyword SEO",
      "Google Business Profile for Local In-Person Sessions",
      "High-Value Thought Leadership Pillar Articles",
      "Authoritative Media Mentions & Digital PR Backlinks",
    ],
  },
  {
    number: "03",
    title: "Lead Generation",
    tagline: "Lead Magnets & High-Converting Funnels",
    badge: "Discovery Calls",
    quote: "We implement systems to capture and nurture prospects.",
    description:
      "This includes creating high-value lead magnets like free coaching resources, email opt-ins, and targeted landing pages. We’ll help you build an interested prospect pipeline to easily convert them into high-ticket paying clients.",
    features: [
      "High-Converting Free Masterclass & Webinar Funnels",
      "Lead Magnet Guides, Checklists & Assessments",
      "Automated Discovery Call Calendar Scheduling",
      "Cost-Per-Qualified-Discovery-Call Guarantees",
    ],
  },
  {
    number: "04",
    title: "Email & Webinar Automation",
    tagline: "Nurturing Drips & Masterclass Sequences",
    badge: "High Ticket Sales",
    quote: "From welcome sequences for new subscribers to nurturing messages for discovery call prospects.",
    description:
      "Build deep, authentic trust with prospective clients on autopilot. We build automated email sequences and webinar reminder systems that nurture cold prospects into eager buyers.",
    features: [
      "High-Open Welcome Sequences for New Subscribers",
      "Pre-Webinar Hype & Show-Up Rate Optimization",
      "Automated Re-engagement Drips for Missed Calls",
      "Case Study & Testimonial Nurture Broadcasts",
    ],
  },
  {
    number: "05",
    title: "Coaching Center Brand Design",
    tagline: "Cohesive Visual & Thought Leadership Identity",
    badge: "Premium Pricing",
    quote: "We build a cohesive brand identity reflecting your unique coaching approach.",
    description:
      "Visuals, messaging, and overall presence that set you apart in a crowded marketplace. A strong, authoritative brand helps you command premium coaching fees and attract dream clients.",
    features: [
      "Signature Framework & Methodology Diagram Design",
      "Sub-2s Mobile-Optimized Personal Brand Landing Pages",
      "Professional Media Kit & Keynote Presentation Decks",
      "Premium Visual Identity & Typography Architecture",
    ],
  },
  {
    number: "06",
    title: "Growth Reports & Analytics",
    tagline: "Clear Actionable Growth Telemetry",
    badge: "Full Clarity",
    quote: "Clear, actionable insights into your digital marketing performance.",
    description:
      "Regular straightforward reports on website traffic, social engagement, and qualified consultation bookings. We’ll help you understand what's working and where to focus for maximum revenue impact.",
    features: [
      "Cost-Per-Acquisition for 1-on-1 & Group Coaching",
      "Webinar Funnel Conversion & Show-Up Telemetry",
      "Monthly Strategy Alignment & Offer Refinement",
      "Transparent Real-Time Growth Dashboards",
    ],
  },
];

const coachingFaqs = [
  {
    number: "01",
    question: "Which is the best digital marketing agency for coaches in Kolkata and across India?",
    answer:
      "Plan D Media is renowned as one of the best digital marketing agencies for coaches in India. We understand exactly what your coaching niche needs and maintain brand consistency so you reach genuine prospects who convert into committed clients.",
  },
  {
    number: "02",
    question: "How can coaches in Kolkata benefit from digital marketing services?",
    answer:
      "Coaches get 5 key advantages: 1. Full Organic SEO for your website and GMB profile. 2. Social Media Marketing for brand awareness, including YouTube video marketing. 3. PPC campaigns for direct consultation bookings. 4. Video & App SEO. 5. Webinars, masterclass funnels, and online community management.",
  },
  {
    number: "03",
    question: "What should I look for in a marketing agency for coaching centers?",
    answer:
      "Look for an agency with a proven track record, performance report transparency, high-quality ad creatives, effective video marketing strategies, and verifiable feedback from coaching and education clients.",
  },
  {
    number: "04",
    question: "How does Plan D Media support lead generation for coaches and coaching institutes?",
    answer:
      "We support coaches through: SEO ranking for terms like 'best executive coach' or 'fitness trainer Kolkata'; SMM showcasing client transformation stories; high-converting landing pages offering free discovery sessions; email drip sequences; and Local SEO for nearby client inquiries.",
  },
];

export default function DigitalMarketingForCoachesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero (Side-by-Side Image Placing matching screenshot) */}
      <ReferenceServiceHero
        tagNumber="[06 / 07]"
        title1="Coaches &"
        title2="Institutes"
        subhead="Are you having trouble to book qualified discovery calls for your high-ticket coaching?"
        description="Most agencies skip personal brand discovery to run generic course promotions. We don't. We extract your signature framework, decode your dream client's transformation cold, and architect automated masterclass and discovery call funnels built to command premium fees. Coaching marketing isn't low-ticket webinars — it's the foundation of high-ticket mentoring authority."
        tags={["Discovery Call Funnels", "Webinar Automations", "Personal Branding", "High-Ticket Clients", "Executive Coaching"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="Professional Business Coach Mentoring Entrepreneur in Modern Studio"
        altHeroImage="/heroes/hero-coaches.jpg"
        altImageLabel="Coaching Studio"
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
        badge="Coaching Capabilities"
        title1="6 Pillars For High-Ticket"
        title2="Mentorship Growth"
        description="Transforming individual subject matter expertise into an automated, highly-profitable coaching authority brand."
        items={coachingPillars}
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
        description="Everything you need to know about our personal branding frameworks, discovery call funnels, masterclass promotions, and fee scaling."
        faqs={coachingFaqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready to Fill Your High-Ticket Coaching Roster?"
        subtitle="Book a consultation with our personal branding and coaching funnel specialists. We'll audit your discovery call pipeline, webinars, and fee structure."
        primaryCtaText="Claim Your Coaching Funnel Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
