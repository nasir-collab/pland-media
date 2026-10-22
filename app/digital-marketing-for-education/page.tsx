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

const educationPillars = [
  {
    number: "01",
    title: "Attracting Quality Students",
    tagline: "Targeted Admissions Lead Generation",
    badge: "3.8x Lower CAC",
    quote: "You need applicants who fit your school. We target promising candidates.",
    description:
      "Our education lead generation in Kolkata targets promising candidates. We optimize your site to rank for terms potential students search. Our team crafts targeted ad campaigns to reach the right people during key decisions. We also manage your online reputation, building trust before students apply.",
    features: [
      "Course & Degree Intent Google Search Optimization",
      "Dynamic Retargeting for Application Deadline Windows",
      "Bifurcated Parent & Student Persona Lead Funnels",
      "Verified Applicant Lead Scoring & CRM Integration",
    ],
  },
  {
    number: "02",
    title: "Building Academic Authority",
    tagline: "Faculty Eminence & Campus Credibility",
    badge: "Accredited Authority",
    quote: "Parents and students trust reputable academic institutions.",
    description:
      "We showcase your strengths online. Our team spotlights unique programs, faculty achievements, and student success. We manage your social media to share valuable insights and school innovations. Through well-crafted blogs, videos, and virtual tours, we establish your leadership.",
    features: [
      "Virtual Campus 360° Tours & Facilities Showcases",
      "Alumni Placement Spotlights & Career Outcomes Proof",
      "Faculty Thought Leadership & Research Eminence",
      "Accreditation & Institutional Ranking Trust Badges",
    ],
  },
  {
    number: "03",
    title: "Streamlining the Admissions Process",
    tagline: "24/7 Chatbots & Frictionless Portals",
    badge: "24/7 Automation",
    quote: "A seamless admissions process impacts applicant decisions.",
    description:
      "Our digital tools simplify and improve the path from inquiry to enrollment. We implement user-friendly application systems and virtual campus tours. Our team nurtures prospective students via targeted email campaigns throughout the cycle. We also utilize chatbots to answer common questions 24/7.",
    features: [
      "Interactive 24/7 AI Admissions Chatbots",
      "Instant WhatsApp Inquiry & Brochure Download Sync",
      "Automated Multi-Channel Nurturing Drip Sequences",
      "Frictionless Mobile-First Application Portals",
    ],
  },
  {
    number: "04",
    title: "Measuring and Improving Performance",
    tagline: "Enrollment Yield & Cost-Per-Student Tracking",
    badge: "Yield Analytics",
    quote: "Data is key for education and marketing success.",
    description:
      "We deliver clear, jargon-free performance reports showing our impact on enrollment. By analyzing this data, we understand what works and requires adjustment. We then refine strategies based on insights. This data-driven approach ensures consistent improvement of your Kolkata education digital marketing efforts.",
    features: [
      "Cost-Per-Enrolled-Student (CAC) Telemetry",
      "Admissions Funnel Drop-Off & Yield Diagnostics",
      "Channel Attribution (Meta, Google, YouTube, Direct)",
      "Real-Time Application Dashboard for Admissions Boards",
    ],
  },
];

const educationFaqs = [
  {
    number: "01",
    question: "What digital marketing services does Plan D Media offer for colleges and universities?",
    answer:
      "We provide full-funnel admissions growth systems: SEO for course-specific search terms, Google Search and Display ads during application deadlines, Instagram and YouTube campaigns targeting Gen Z students, WhatsApp inquiry automation, virtual campus tours, and CRM nurturing sequences.",
  },
  {
    number: "02",
    question: "How early before admissions season should we start marketing?",
    answer:
      "We recommend starting organic SEO and brand building 3 to 6 months prior to application deadlines. Paid inquiry campaigns should launch 6 to 8 weeks before cut-off dates for maximum applicant yield.",
  },
  {
    number: "03",
    question: "Can you help our institution lower its Cost Per Enrolled Student (CAC)?",
    answer:
      "Yes. By introducing multi-step qualification filters, instant WhatsApp CRM sync, and dynamic retargeting, we typically reduce cost-per-enrolled-student by 2.5x to 3.8x compared to unoptimized campaigns.",
  },
  {
    number: "04",
    question: "How do you connect with both parents and prospective students?",
    answer:
      "We run bifurcated campaigns: Instagram, YouTube, and Snapchat creative speaks directly to students regarding campus life, placements, and peer culture; while Google Search, Facebook, and LinkedIn campaigns address parents regarding accreditation, safety, and career ROI.",
  },
];

export default function DigitalMarketingForEducationPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero (Side-by-Side Image Placing matching screenshot) */}
      <ReferenceServiceHero
        tagNumber="[03 / 07]"
        title1="Education"
        title2="Marketing"
        subhead="Are you having trouble to fill enrollment seats and lower student acquisition costs?"
        description="Most education agencies skip admissions cycle discovery to push untargeted student leads. We don't. We define your institutional prestige, decode student and parent concerns cold, and architect multi-channel admissions funnels built to maximize enrollment yield. Education marketing isn't bulk clicks — it's the foundation of student recruitment scale."
        tags={["Student Admissions", "Higher Ed SEO", "Meta Gen Z Funnels", "WhatsApp Automation", "Lower CAC"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="Modern Education University Students Collaborative Campus Learning"
        altHeroImage="/heroes/hero-education.jpg"
        altImageLabel="Campus Learning"
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
        badge="Education Capabilities"
        title1="4 Pillars For Higher"
        title2="Enrollment Yield"
        description="Comprehensive enrollment marketing designed to build institutional prestige, capture student interest, and maximize class capacity."
        items={educationPillars}
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
        description="Everything you need to know about our higher education enrollment models, lead timeframes, reducing student acquisition cost, and bifurcated parent-student campaigns."
        faqs={educationFaqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready to Maximize Your Upcoming Admissions Cycle?"
        subtitle="Book a consultation with our higher education marketing directors. We'll audit your course visibility, application funnels, and student acquisition costs."
        primaryCtaText="Claim Your Admissions Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
