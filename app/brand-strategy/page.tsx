"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import ReferenceServiceHero from "@/components/ReferenceServiceHero";

const tags = [
  "Strategy",
  "Brand Identity",
  "Research",
  "Consultation",
  "Communication",
];

const processSteps = [
  {
    number: "[01]",
    title: "Discovery \n& Research",
    desc: "Every brief begins on a blank board. We remove the assumptions, the inherited bias and the borrowed template before anyone in the room proposes a solution.",
  },
  {
    number: "[02]",
    title: "Define \nthe Problem",
    desc: "We sit with the business problem long enough to actually understand it \u2014 the category, the competitive set, and what the brand is genuinely trying to move.",
  },
  {
    number: "[03]",
    title: "Decode \nthe Insight",
    desc: "We study the culture and the customer who is already ignoring your last five ads, and find the truth that makes them stop.",
  },
  {
    number: "[04]",
    title: "Build \nWith Intent",
    desc: "Positioning, brand architecture and communication strategy, built so the idea survives past one campaign cycle rather than one quarter.",
  },
];

const pillars = [
  {
    icon: "/shape-r-1.webp",
    title: "Positioning \nBefore Production",
    desc: "We settle what the brand stands for before a single frame is shot. Creative built on unclear positioning is expensive to fix later.",
  },
  {
    icon: "/shape-r-2.webp",
    title: "Consumer \nand Category Insight",
    desc: "We bring cross-category experience across FMCG, automotive, BFSI, retail and real estate, so the insight is grounded in how your market actually behaves.",
  },
  {
    icon: "/shape-r-3.webp",
    title: "Business-Led \nPlanning",
    desc: "Campaigns are planned against a commercial objective, not a content calendar. Every strategic decision traces back to something the business needs to change.",
  },
];

const metrics = [
  {
    label: "Brand Reputation",
    value: "95%",
    desc: "A brand people can describe in one sentence is a brand people recommend. Strategy decides what that sentence is, before a single campaign goes near it.",
  },
  {
    label: "Customer Loyalty",
    value: "92%",
    desc: "Loyalty follows clarity. When an audience knows exactly what a brand stands for, they stop comparing it on price and start choosing it on conviction.",
  },
  {
    label: "Operational Efficiency",
    value: "85%",
    desc: "A defined positioning stops the guesswork. Every brief, every design round and every campaign starts from a settled answer instead of relitigating the brand each time.",
  },
  {
    label: "Customer Satisfaction",
    value: "95%",
    desc: "Brands disappoint when the promise and the experience don't match. Strategy sets a promise the business can actually keep, which is what satisfaction is made of.",
  },
];

const faqs = [
  {
    number: "01",
    question: "What does a brand strategy engagement actually produce?",
    answer:
      "A positioning statement, brand architecture, audience and category analysis, and a communication framework your teams and agencies can work from. Documents you use, not a deck you file.",
  },
  {
    number: "02",
    question: "How long does it take?",
    answer:
      "It depends on category complexity and how much research already exists. We scope it after the first conversation rather than quoting a standard timeline that suits nobody.",
  },
  {
    number: "03",
    question: "Do we have to use you for production afterwards?",
    answer:
      "No. The strategy stands on its own and any agency can execute against it. Most clients continue with us because production sits in the same building, but it isn't a condition.",
  },
  {
    number: "04",
    question: "How is this different from a conventional agency's strategy offer?",
    answer:
      "Most agencies plan the campaign and hand production to a vendor. We own the strategy, the film production, the talent relationships and OTT distribution inside one group, so nothing is lost between briefs.",
  },
  {
    number: "05",
    question: "Who actually works on the strategy?",
    answer:
      "Senior people, not a junior team with a senior name on the proposal. Our leadership brings 25 to 30 years across advertising, FMCG, automotive, BFSI and real estate.",
  },
  {
    number: "06",
    question: "Do you work with brands outside Bengal?",
    answer:
      "Yes. Our work spans national brands including Volkswagen, Colgate, Himalaya and MakeMyTrip, and our production footprint reaches the UK, USA, Italy, Thailand, Sri Lanka and Bangladesh.",
  },
  {
    number: "07",
    question: "What do you need from us to start?",
    answer:
      "Your business objective, whatever customer and category data you hold, and access to the people who understand the problem. We do the rest of the digging ourselves.",
  },
  {
    number: "08",
    question: "What happens if we already have a positioning we're happy with?",
    answer:
      "Then we test it rather than replace it. Sometimes the positioning is sound and the communication is the problem. We tell you which, honestly.",
  },
];

export default function BrandStrategyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(1); // 02 open by default as in reference

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      {/* ============================================================ */}
      {/* 1. HERO SECTION (Strictly matching Whiteboard Media screenshot) */}
      {/* ============================================================ */}
      <ReferenceServiceHero
        tagNumber="[Next]"
        title1="Brand"
        title2="Strategy"
        subhead="Are you having trouble to explain your brand story?"
        description="Most agencies skip discovery to get to the fun part. We don't. We define your positioning, decode your audience cold, and architect an identity built to survive past one campaign cycle. Strategy isn't a slide in our deck — it's the foundation everything else stands on."
        tags={tags}
        heroImage="/hero-strategy-map.png"
        imageAlt="Brand Strategy - Whiteboard Reference Layout"
        primaryCtaText="Book Strategy Audit"
        onOpenModal={() => setModalOpen(true)}
      />

      {/* ============================================================ */}
      {/* 2. PROCESS SECTION: Clarity-first working process + Giant '04' */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
        <div className="rr-container-1650">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 sm:pb-20 border-b border-white/10 items-end">
            {/* Left: Label + Giant 04 */}
            <div className="lg:col-span-4 flex items-baseline justify-between lg:block space-y-4">
              <span className="text-sm sm:text-base text-gray-400 font-mono block leading-relaxed uppercase tracking-wider">
                We follow a clarity <br />
                -first working process
              </span>
              <div className="text-6xl sm:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-none">
                04
              </div>
            </div>

            {/* Right: Statement Heading */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                We sharpen your brands and businesses create exceptional experiences where people live work
              </h2>
            </div>
          </div>

          {/* 4 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 sm:pt-16">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="p-8 sm:p-10 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-6">
                  <span className="text-xs sm:text-sm font-mono text-[#E8B626] font-bold block">
                    {step.number}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-[#E8B626] transition-colors whitespace-pre-line">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-8 flex items-center justify-between text-xs font-mono text-gray-500">
                  <span>Phase 0{idx + 1}</span>
                  <span className="w-8 h-px bg-white/10 group-hover:bg-[#E8B626]/50 group-hover:w-12 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CORE STRATEGY PILLARS: 3 Cards with 3D Geometric Shapes   */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#141414] border-b border-white/10 relative overflow-hidden">
        <div className="rr-container-1650">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-12 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-8">
                  {/* 3D Geometric Shape Icon from Reference */}
                  <div className="relative w-20 h-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Image
                      src={pillar.icon}
                      alt={pillar.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight group-hover:text-[#E8B626] transition-colors whitespace-pre-line">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                  <span className="text-[#E8B626]">Strategic Pillar 0{idx + 1}</span>
                  <span>Plan D Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. DATA-INFORMATION: 4 Stat Metric Cards (95%, 92%, 85%, 95%)*/}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
        <div className="rr-container-1650">
          <div className="mb-14 sm:mb-18 flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8B626]" />
              <span>Data-Information</span>
            </div>

            <span className="text-xs font-mono text-gray-500">
              Validated Enterprise Outcomes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-6">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                    {m.label}
                  </h4>

                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight group-hover:text-[#E8B626] transition-colors">
                    {m.value}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-600">
                  <span>Metric Index 0{idx + 1}</span>
                  <span className="text-[#E8B626]">&bull; High Impact</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. FAQ SECTION: • FAQ + Learn any question + 8 Accordions   */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
        <div className="rr-container-1650">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: • FAQ Badge + Title */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8B626]" />
                <span>FAQ</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-[1.08]">
                Learn any <br />
                <span className="text-[#E8B626] font-medium">question</span>
              </h2>

              <p className="text-base text-gray-400 font-light leading-relaxed max-w-md">
                Everything you need to know about our strategic positioning engagements, timelines, cross-category execution, and transparent deliverables.
              </p>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#171717] border border-white/10 space-y-4">
                <span className="text-xs font-mono uppercase text-[#E8B626] font-semibold block">
                  Have a customized brief?
                </span>
                <p className="text-sm text-gray-300 font-light">
                  Schedule a confidential 30-minute discovery session with our senior strategy team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E8B626] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] transition-colors"
                >
                  <span>Initiate Discussion</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: 8 Accordion Items */}
            <div className="lg:col-span-7 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.number}
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-[#171717] border-[#E8B626]/40 shadow-xl shadow-[#E8B626]/5"
                        : "bg-[#141414] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-medium text-white leading-snug flex items-center gap-4">
                        <span className="text-xs sm:text-sm font-mono text-[#E8B626] shrink-0">
                          {faq.number}
                        </span>
                        <span>{faq.question}</span>
                      </span>

                      <div
                        className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#E8B626] text-black border-[#E8B626]"
                            : "text-gray-400 group-hover:text-white"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out px-6 sm:px-7 ${
                        isOpen ? "grid-rows-[1fr] pb-6 sm:pb-7 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden text-sm sm:text-base text-gray-400 font-light leading-relaxed pl-8">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
