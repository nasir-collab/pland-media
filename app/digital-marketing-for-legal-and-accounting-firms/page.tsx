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

const legalStrategy = [
  {
    number: "01",
    title: "Search Engine Optimization",
    tagline: "Local High Court & Corporate Citations",
    badge: "Ethical SEO",
    quote: "Enhance your local search visibility through keyword optimization.",
    description:
      "We enhance your local search visibility through keyword optimization, Google Business Profile management, and consistent citations to help potential corporate and individual clients find you easily and quickly.",
    features: [
      "Practice-Area Keyword Architecture (Corporate, IP, Tax)",
      "High Court & District Citation Optimization",
      "Google Business Profile for Local Law Firm Searches",
      "Strict White-Hat Backlink Outreach & Legal Directories",
    ],
  },
  {
    number: "02",
    title: "Professional Social Media",
    tagline: "LinkedIn Thought Leadership & Legal Commentary",
    badge: "Eminence Building",
    quote: "Build authority and professional eminence.",
    description:
      "We update your LinkedIn and firm pages with smart commentary, regulatory observations, and landmark case notes to enhance authority, engagement, and corporate client trust.",
    features: [
      "Executive Partner LinkedIn Ghostwriting & Case Analysis",
      "Statutory & Regulatory Change Summaries for CFOs",
      "Firm Milestone, M&A Deal & Advisory Announcements",
      "Ethical Content Aligned with Bar Council Directives",
    ],
  },
  {
    number: "03",
    title: "Targeted Digital Advertising",
    tagline: "High-Intent Search & Ethical Corporate Ad Funnels",
    badge: "Verified Intent",
    quote: "Reach individuals actively seeking legal or accounting services.",
    description:
      "Our experts build high-performing ad campaigns on LinkedIn and Google targeting businesses and individuals actively seeking corporate structuring, litigation counsel, or audit services.",
    features: [
      "High-Intent Commercial Search Ads for Corporate Counsel",
      "LinkedIn ABM Targeting In-House General Counsels & CFOs",
      "Strictly Compliant, Non-Misleading Advisory Messaging",
      "Geo-Targeted Inquiries across Kolkata & Metros",
    ],
  },
  {
    number: "04",
    title: "Lead Generation Campaigns",
    tagline: "Consultation Bookings & Regulatory Whitepapers",
    badge: "Direct Bookings",
    quote: "Compelling lead magnets that convert into booked appointments.",
    description:
      "To attract attention, we craft compelling lead assets like downloadable tax guides, corporate compliance checklists, and private consultation funnels that convert interest into scheduled meetings.",
    features: [
      "Corporate Due Diligence & Annual Tax Filing Guides",
      "Private Partner Consultation Booking Portals",
      "Automated NDA & Conflict Check Form Triggers",
      "High-Ticket Corporate Retainer Acquisition Funnels",
    ],
  },
  {
    number: "05",
    title: "Email Marketing Strategy",
    tagline: "Regulatory Updates & Client Advisories",
    badge: "Client Retention",
    quote: "Consistent communication that builds lasting client relationships.",
    description:
      "Utilize consistent email notifications to inform and engage your corporate clients: statutory filing deadlines, taxation updates, and firm news that keep you top-of-mind for complex advisory mandates.",
    features: [
      "Monthly Statutory Compliance Calendars for Businesses",
      "Urgent Tax & Legal Amendment Alerts",
      "Exclusive Client Briefings & Seminar Invitations",
      "High Deliverability Corporate Email Infrastructure",
    ],
  },
  {
    number: "06",
    title: "Brand Identity Creation",
    tagline: "Prestigious Legal Typography & Presence",
    badge: "Institutional Trust",
    quote: "Differentiate your firm and build long-term institutional trust.",
    description:
      "We refine your firm identity, from visual stationery and website typography to messaging consistency across all digital media, ensuring you reflect unwavering integrity and authority.",
    features: [
      "Prestigious Serif & Sans Typography Systems",
      "Fast-Loading Mobile Firm Portals with Partner Bios",
      "Digital Stationery, Pitch Decks & Proposals",
      "Reputation Defense & Executive Brand Guardrails",
    ],
  },
];

const legalFaqs = [
  {
    number: "01",
    question: "Which is the best digital marketing agency for legal firms in India and Kolkata?",
    answer:
      "Plan D Media is recognized as one of the best digital marketing agencies in Kolkata and India for providing ethical digital marketing adhering to Bar Council guidelines, accompanied by transparent lead acquisition, thought leadership, and web management.",
  },
  {
    number: "02",
    question: "What should I look for in a digital marketing agency for law firms?",
    answer:
      "Look for an agency that understands ethical compliance, builds local market authority through content and thought leadership, maintains communication transparency, and employs white-hat SEO tactics to preserve your professional reputation.",
  },
  {
    number: "03",
    question: "How does digital marketing for lawyers help build a strong client base?",
    answer:
      "Digital marketing builds a strong legal client base through 5 core pillars: 1. Local Community Engagement. 2. High-Value Thought Leadership. 3. Continuous Remarkable Branding. 4. Quality Retainer Case Inquiries. 5. Authoritative Social & LinkedIn Presence.",
  },
  {
    number: "04",
    question: "What specialized digital marketing services does Plan D Media provide for law and accounting firms?",
    answer:
      "We provide 5 specialized services: 1. Legal SEO for Google Business Profile and local keywords. 2. Ethical Content Marketing through LinkedIn and professional media. 3. Compliance-ready Web Development. 4. Local Search Ads Management. 5. Weekly Analytics & Pipeline Reporting.",
  },
];

export default function DigitalMarketingForLegalAndAccountingFirmsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero */}
      <ReferenceServiceHero
        tagNumber="[07 / 07]"
        title1="Legal &"
        title2="Accounting"
        subhead="Are you having trouble to attract high-retainer corporate clients while staying Bar Council compliant?"
        description="Most digital agencies don't understand professional ethics or statutory advisory nuances. We do. We define your practice area authority, decode corporate counsel needs cold, and architect white-hat SEO and LinkedIn thought leadership built to win high-value retainers. Professional services marketing isn't aggressive advertising — it's the foundation of institutional trust and client eminence."
        tags={["Practice Area SEO", "Ethical Compliance", "Corporate Retainers", "LinkedIn Leadership", "High Court Citations"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="Modern Professional Legal and Accounting Office Business Advisors"
        altHeroImage="/heroes/hero-legal.jpg"
        altImageLabel="Advisory Office"
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
        badge="Legal & Accounting Capabilities"
        title1="6 Pillars For Professional"
        title2="Firm Authority & Growth"
        description="Building prestigious digital prominence, managing ethical compliance, and attracting high-retainer corporate advisory mandates."
        items={legalStrategy}
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
        description="Everything you need to know about our legal marketing ethical compliance, Bar Council adherence, partner thought leadership, and corporate client acquisition."
        faqs={legalFaqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready to Elevate Your Firm's Digital Prestige & Client Flow?"
        subtitle="Book a confidential consultation with our professional services growth partners. We'll audit your local citations, practice area rankings, and corporate client funnels."
        primaryCtaText="Claim Your Firm Growth Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
