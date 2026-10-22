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

const healthcarePillars = [
  {
    number: "01",
    title: "Expanding Your Patient Base",
    tagline: "Local Search & High-Intent Patient Acquisition",
    badge: "+320% Call Volume",
    quote: "You want more patients. We make that happen.",
    description:
      "Our healthcare digital marketing in Kolkata optimizes your website for local searches, so when potential patients look for services, your practice stands out. We create targeted ad campaigns that reach the right people actively seeking care, boosting visibility. Our team also manages online reviews to build trust before visitors become patients.",
    features: [
      "Hyper-Local SEO & Google Maps 3-Pack Domination",
      "Symptom-Specific High-Intent Search Ads",
      "Automated Review Management on Google & Practo",
      "Specialty Department Patient Landing Pages",
    ],
  },
  {
    number: "02",
    title: "Building Trust and Credibility",
    tagline: "Thought Leadership & Clinical Reputation",
    badge: "5-Star Ratings",
    quote: "Patients prefer doctors they can research online.",
    description:
      "We establish your digital presence with informative website content optimized for search visibility. This content showcases expertise to potential patients while also improving rankings. We manage your social media to engage your community by sharing valuable health tips and practice updates.",
    features: [
      "Medical Thought Leadership Articles & Blog Content",
      "Doctor Introduction & Educational Video Series",
      "Clinical Credentials & Treatment Accuracy Proof",
      "Ethical Medical Content & Regulatory Compliance",
    ],
  },
  {
    number: "03",
    title: "Streamlining Patient Communication",
    tagline: "Automated Booking & Frictionless Interactions",
    badge: "Frictionless Booking",
    quote: "Effective communication is critical in healthcare.",
    description:
      "Our digital tools streamline patient interactions for an efficient and user-friendly practice. We implement automated appointment reminders to reduce no-shows and improve scheduling. Our team creates intuitive online booking so patients can schedule visits easily.",
    features: [
      "1-Click Direct WhatsApp Consultation Booking",
      "Automated SMS & WhatsApp Appointment Reminders",
      "Interactive Telehealth & Clinic Location Portals",
      "Reduced No-Show Rates & Smooth Patient Scheduling",
    ],
  },
  {
    number: "04",
    title: "Measuring and Improving Performance",
    tagline: "Data-Driven ROI & Patient Journey Analytics",
    badge: "Full Transparency",
    quote: "Data informs our clinical growth strategies.",
    description:
      "We deliver regular reports on your digital marketing performance, including patient behavior insights, to better understand your audience. We optimize your online tactics by continuously analyzing this data to ensure consistent improvement and tangible ROI.",
    features: [
      "Call Tracking & Appointment Attribution Dashboards",
      "Cost-Per-Patient-Acquisition (CPPA) Measurement",
      "Department-Wise Conversion Funnel Optimization",
      "Monthly Growth Milestones & Transparent Analytics",
    ],
  },
];

const healthcareFaqs = [
  {
    number: "01",
    question: "What digital marketing services does Plan D Media offer for Hospitals and Clinics?",
    answer:
      "We handle everything digital for hospitals and clinics: SEO to get you ranking for specialty treatments, Google Ads that target patients searching for specific symptoms, social media management across platforms patients actually use, website improvements that convert visitors to appointments, online reputation management to boost Google and Practo ratings, content creation that explains medical services clearly, and WhatsApp marketing campaigns that reach patients reliably without annoying them. Most of our hospital clients start with fixing their SEO and online reputation before moving to paid advertising.",
  },
  {
    number: "02",
    question: "How do you ensure medical marketing complies with healthcare regulations?",
    answer:
      "We strictly adhere to Indian medical council ethics, avoiding misleading guarantees, safeguarding patient privacy (HIPAA & local privacy standards), and ensuring all clinical claims are backed by medical science.",
  },
  {
    number: "03",
    question: "How fast can a clinic in Kolkata start seeing new patient inquiries?",
    answer:
      "With local Google Search ads and optimized Google Business Profile listings, clinics typically begin receiving appointment inquiries and phone calls within the first 7 to 14 days of campaign launch.",
  },
  {
    number: "04",
    question: "Can you help improve our Google and Practo reviews?",
    answer:
      "Yes. We implement automated post-consultation feedback workflows that encourage satisfied patients to leave positive 5-star ratings on Google and healthcare discovery platforms.",
  },
];

export default function DigitalMarketingForHealthcarePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* 1. Reference Hero (Side-by-Side Image Placing matching screenshot) */}
      <ReferenceServiceHero
        tagNumber="[01 / 07]"
        title1="Healthcare"
        title2="Marketing"
        subhead="Are you having trouble to attract high-intent patients to your clinic or hospital?"
        description="Most agencies skip clinical discovery and push generic ads that violate ethical guidelines. We don't. We define your specialty positioning, decode patient search intent cold, and architect local 3-pack search and automated booking systems built to fill consultation schedules. Healthcare marketing isn't speculative ads — it's the foundation of trusted clinical care."
        tags={["Patient Acquisition", "Clinic SEO", "Doctor Lead Funnels", "Reputation Management", "Ethical Compliance"]}
        heroImage="/hero-strategy-map.png"
        imageAlt="Modern Healthcare Hospital Digital Technology and Patient Care"
        altHeroImage="/heroes/hero-healthcare.jpg"
        altImageLabel="Clinical Facility"
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
        badge="Healthcare Capabilities"
        title1="4 Pillars For Clinical"
        title2="& Patient Growth"
        description="Tailored digital strategies designed specifically for doctors, super-specialists, and healthcare institutions to attract and retain patients."
        items={healthcarePillars}
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
        description="Everything you need to know about our healthcare marketing services, compliance with medical regulations, patient inquiry timelines, and reputation management."
        faqs={healthcareFaqs}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 9. Marquee Ticker */}
      <MarqueeTicker />

      {/* 10. CTA Banner */}
      <ReferenceCtaBanner
        title="Ready to Grow Your Clinic or Hospital's Patient Flow?"
        subtitle="Schedule a consultation with our healthcare growth specialists. We'll audit your local rankings, reputation, and online patient acquisition funnels."
        primaryCtaText="Claim Your Clinic Growth Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
