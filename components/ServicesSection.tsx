"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceItem {
  id: string;
  title1: string;
  title2: string;
  fullTitle: string;
  slug: string;
  icon: string;
  tag: string;
  desc: string;
  offset: string; // transform offset to center inside phone
}

interface ServicesSectionProps {
  services?: any[];
}

const servicesList: ServiceItem[] = [
  {
    id: "item-1",
    title1: "Brand",
    title2: "Strategy",
    fullTitle: "Brand Strategy",
    slug: "brand-strategy",
    icon: "/icon-s-1.png",
    tag: "Market Moats",
    desc: "First-principles brand positioning, competitive moat architecture, and high-margin product value creation.",
    offset: "calc(200% + 24px)",
  },
  {
    id: "item-2",
    title1: "Creative",
    title2: "Campaigns",
    fullTitle: "Creative Campaigns",
    slug: "creative-campaigns",
    icon: "/icon-s-4.png",
    tag: "High-Recall Motion",
    desc: "Performance video production, conversion ad creatives, and scroll-stopping commercial narratives.",
    offset: "calc(100% + 12px)",
  },
  {
    id: "item-3",
    title1: "Content &",
    title2: "Production",
    fullTitle: "Content Production",
    slug: "content-production",
    icon: "/icon-s-2.png",
    tag: "Studio Execution",
    desc: "Full-scale regional studio filming, product cinematography, and documentary-style founder stories.",
    offset: "0px",
  },
  {
    id: "item-4",
    title1: "Celebrity &",
    title2: "Influencer",
    fullTitle: "Celebrity & Influencer Marketing",
    slug: "celebrity-influencer-marketing",
    icon: "/icon-s-3.png",
    tag: "High Trust Scale",
    desc: "Tier-1 celebrity endorsements, strategic influencer gifting, and viral creator affiliate networks.",
    offset: "calc(-100% - 12px)",
  },
  {
    id: "item-5",
    title1: "OTT &",
    title2: "Digital Media",
    fullTitle: "OTT & Digital Distribution",
    slug: "ott-digital-distribution",
    icon: "/icon-s-5.png",
    tag: "Omnichannel Reach",
    desc: "Programmatic connected TV advertising, digital media buying, and targeted OTT video syndication.",
    offset: "calc(-200% - 24px)",
  },
];

export default function ServicesSection({ services }: ServicesSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isManualExpanded, setIsManualExpanded] = useState(false);
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1200px)", () => {
        // Timeline pinned on scroll scrub
        const cards = gsap.utils.toArray<HTMLElement>(".services-box-anim .service-card-item");

        gsap.to(cards, {
          x: 0,
          ease: "none",
          stagger: 0.02,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 12%",
            end: "+=90%",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (self.progress > 0.35) {
                setIsManualExpanded(true);
              } else if (self.progress < 0.15) {
                setIsManualExpanded(false);
              }
            },
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleExpand = () => {
    const nextState = !isManualExpanded;
    setIsManualExpanded(nextState);

    if (window.innerWidth >= 1200) {
      const cards = gsap.utils.toArray<HTMLElement>(".services-box-anim .service-card-item");
      cards.forEach((card, idx) => {
        gsap.to(card, {
          x: nextState ? 0 : servicesList[idx].offset,
          duration: 0.6,
          ease: "power3.out",
        });
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="service-area py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden"
    >
      <div className="rr-container-1650">
        {/* Large Editorial Headline matching Whiteboard Media benchmark */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <span className="tag-parenthesis block text-sm font-mono text-[#E8B626] mb-4">
            (Our Capabilities)
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-normal text-white tracking-tight leading-[1.08]">
            We define the <br className="hidden sm:inline" />
            problem before <br className="hidden sm:inline" />
            we sell the idea.
          </h2>
        </div>

        {/* Pinning Wrapper for ScrollTrigger Animation */}
        <div ref={triggerRef} className="services-wrapper-box relative pb-16">
          {/* Centered Phone Mockup Frame */}
          <div className="phone-mockup mx-auto w-[310px] sm:w-[360px] lg:w-[400px] h-[580px] sm:h-[660px] lg:h-[720px] rounded-[36px] sm:rounded-[44px] border-[3px] sm:border-[4px] border-white/25 bg-[#141414] p-4 sm:p-6 shadow-2xl relative z-10 hidden xl:flex flex-col justify-between select-none">
            {/* Top Speaker / Dynamic Island Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full border border-white/10 flex items-center justify-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1c] border border-white/15" />
              <div className="w-10 h-1 rounded-full bg-[#222222]" />
            </div>

            {/* Mockup Header: Transparent Logo & 3-bar offcanvas icon */}
            <div className="mockup-header mt-2 rounded-2xl border border-white/10 bg-[#191919] px-5 py-3.5 flex items-center justify-between">
              <div className="mockup-logo">
                <Image
                  src="/logo.png?v=authentic"
                  alt="Plan D Media"
                  width={140}
                  height={28}
                  unoptimized
                  className="h-6 w-auto object-contain brightness-110"
                />
              </div>

              <div className="mockup-offcanvas flex items-center">
                <svg
                  width="26"
                  height="12"
                  viewBox="0 0 30 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path d="M30 6L30 7L0 7L0 6L30 6Z" fill="currentColor" />
                  <path d="M30 1L30 1L13 1L13 0L30 1Z" fill="currentColor" />
                  <path d="M30 12L30 13L13 13L13 12L30 12Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Mockup Text: Capabilities & Explore Link */}
            <div className="mockup-text mt-4 space-y-1">
              <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
                Capabilities
              </h3>
              <div>
                <button
                  type="button"
                  onClick={toggleExpand}
                  className="group inline-flex items-center gap-1.5 text-lg font-light text-gray-400 hover:text-white transition-colors"
                >
                  <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white transition-all">
                    {isManualExpanded ? "Stack Cards" : "Explore"}
                  </span>
                  <span className="text-xs font-mono text-[#E8B626]">
                    {isManualExpanded ? "↑" : "↓"}
                  </span>
                </button>
              </div>
            </div>

            {/* Mockup Bottom Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span className="flex items-center gap-1.5 text-[#E8B626]">
                <Sparkles className="w-3 h-3" />
                <span>Scroll to spread</span>
              </span>
              <span>5 Disciplines</span>
            </div>
          </div>

          {/* 5 Service Boxes Layer: Stacks over Phone Mockup on Desktop and Fans Out */}
          <div className="services-wrapper-1 services-box-anim relative z-20 xl:-mt-[480px] pt-4 xl:pt-0">
            {/* Desktop 5-Column Grid with initial centered stack transform */}
            <div className="hidden xl:grid grid-cols-5 gap-3.5">
              {servicesList.map((service, idx) => (
                <Link
                  key={service.id}
                  href={`/services#${service.slug}`}
                  onMouseEnter={() => setActiveHoverIndex(idx)}
                  onMouseLeave={() => setActiveHoverIndex(null)}
                  style={{
                    transform: isManualExpanded ? "translate(0px, 0px)" : `translate(${service.offset}, 0px)`,
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  className={`service-card-item service-box-1 block rounded-2xl p-7 min-h-[340px] flex flex-col justify-between border cursor-pointer ${
                    activeHoverIndex === idx
                      ? "bg-[#E8B626] text-black border-[#E8B626] shadow-2xl shadow-[#E8B626]/25 -translate-y-2"
                      : "bg-white text-[#111111] border-white/30 shadow-xl"
                  }`}
                >
                  {/* Card Top: Adon Icon + Index Tag */}
                  <div className="flex items-start justify-between">
                    <div className="thumb w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center p-2.5">
                      <Image
                        src={service.icon}
                        alt={service.fullTitle}
                        width={40}
                        height={40}
                        className={`object-contain transition-transform duration-500 ${
                          activeHoverIndex === idx ? "scale-110 filter brightness-0" : ""
                        }`}
                      />
                    </div>

                    <div className="flex items-center gap-1 font-mono text-xs opacity-75">
                      <span>(0{idx + 1})</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Content: 2-line Headline matching Whiteboard Media */}
                  <div className="content pt-8">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest block mb-2 transition-colors ${
                        activeHoverIndex === idx ? "text-black/80 font-bold" : "text-gray-500"
                      }`}
                    >
                      {service.tag}
                    </span>
                    <h3 className="title text-2xl sm:text-[26px] font-bold tracking-tight leading-[1.12]">
                      {service.title1} <br />
                      {service.title2}
                    </h3>
                    <p
                      className={`text-xs mt-3 line-clamp-2 font-light leading-relaxed transition-colors ${
                        activeHoverIndex === idx ? "text-black/90 font-medium" : "text-gray-600"
                      }`}
                    >
                      {service.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Tablet & Mobile Layout: Responsive Grid with Horizontal Swipe Support */}
            <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {servicesList.map((service, idx) => (
                <Link
                  key={service.id}
                  href={`/services#${service.slug}`}
                  className="bg-white text-[#111111] rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[260px] shadow-lg border border-white/20 hover:bg-[#E8B626] hover:text-black transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center p-2 group-hover:brightness-0">
                      <Image
                        src={service.icon}
                        alt={service.fullTitle}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-mono text-xs text-gray-500 group-hover:text-black">
                      (0{idx + 1})
                    </span>
                  </div>

                  <div className="pt-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 group-hover:text-black/80 block mb-1">
                      {service.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                      {service.title1} {service.title2}
                    </h3>
                    <p className="text-xs text-gray-600 group-hover:text-black/80 mt-2 line-clamp-2">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Capabilities Link matching Whiteboard Media */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-sm font-mono text-gray-400">
            Attribution-first digital marketing, creative storytelling &amp; performance engineering.
          </p>
          <Link href="/services" className="rr-btn-underline text-base text-white">
            Explore All Capabilities →
          </Link>
        </div>
      </div>
    </section>
  );
}
