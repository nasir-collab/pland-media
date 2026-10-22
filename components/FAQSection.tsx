"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // 02 open by default as on reference page

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: FAQ Badge & Section Title matching reference */}
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

          {/* Right Column: Accordion List matching reference */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
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
                    onClick={() => toggle(index)}
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
  );
}
