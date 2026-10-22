"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

interface ReferenceServiceHeroProps {
  tagNumber?: string;
  title1: string;
  title2: string;
  subhead: string;
  description: string;
  tags: string[];
  heroImage: string;
  imageAlt: string;
  entityLabel?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  onOpenModal: () => void;
  // Optional image toggle or alternate visual
  altHeroImage?: string;
  altImageLabel?: string;
}

export default function ReferenceServiceHero({
  tagNumber = "[Next]",
  title1,
  title2,
  subhead,
  description,
  tags,
  heroImage,
  imageAlt,
  entityLabel = "The Brand & Growth arm of LEADTECH PLAN D MEDIA • Kolkata",
  primaryCtaText = "Book Growth Audit",
  secondaryCtaText = "Let's Talk",
  secondaryCtaHref = "/contact",
  onOpenModal,
  altHeroImage,
  altImageLabel,
}: ReferenceServiceHeroProps) {
  const [activeImage, setActiveImage] = React.useState(heroImage);

  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-[#111111] border-b border-white/10 overflow-hidden">
      {/* Ambient gold glow matching reference */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#E8B626]/5 rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="rr-container-1650 w-full relative z-10">
        {/* Top bracketed link tag matching reference: [Next] */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-block text-xs sm:text-sm font-mono text-[#E8B626] tracking-wider uppercase">
            {tagNumber}
          </span>
        </div>

        {/* Large Hero Main Title: Massive 2-line title */}
        <div className="mb-10 sm:mb-14">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-bold text-white tracking-tight leading-[0.92]">
            {title1} <br />
            {title2}
          </h1>
        </div>

        {/* Unified Banner Row: EXACT Reference Screenshot Layout (Left: Question + Description; Right: Side-by-Side Image) */}
        <div className="pt-8 sm:pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column: Heading at top, generous spacing, narrative description at bottom, tags, CTAs */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between space-y-8 sm:space-y-12">
              {/* Question / Subhead at top */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-medium text-white tracking-tight leading-[1.12]">
                  {subhead}
                </h2>
                {entityLabel && (
                  <div className="mt-3 text-xs font-mono text-gray-500 uppercase tracking-wider">
                    {entityLabel}
                  </div>
                )}
              </div>

              {/* Narrative description at bottom */}
              <div className="space-y-6">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light max-w-xl">
                  {description}
                </p>

                {/* Tag pill badges matching reference */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-medium text-gray-300 hover:border-[#E8B626]/40 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-6">
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="px-8 py-3.5 rounded-full bg-[#E8B626] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#F3C84B] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#E8B626]/20 flex items-center gap-2 cursor-pointer"
                  >
                    <span>{primaryCtaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+918777018187"
                    className="rr-btn-underline text-sm font-medium text-gray-300 hover:text-white flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#E8B626]" />
                    <span>Call Us: +91 87770 18187</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: The Image (Side-by-side placing matching the screenshot) */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-end justify-center relative">
              {/* Optional image switcher toggle if altHeroImage is provided */}
              {altHeroImage && (
                <div className="mb-3 self-end flex items-center gap-2 text-xs font-mono text-gray-400">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px]">View:</span>
                  <button
                    type="button"
                    onClick={() => setActiveImage(heroImage)}
                    className={`px-3 py-1 rounded-full border text-xs transition-colors ${
                      activeImage === heroImage
                        ? "border-[#E8B626] text-[#E8B626] bg-[#E8B626]/10"
                        : "border-white/10 text-gray-400 hover:text-white"
                    }`}
                  >
                    Strategy Blueprint
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveImage(altHeroImage)}
                    className={`px-3 py-1 rounded-full border text-xs transition-colors ${
                      activeImage === altHeroImage
                        ? "border-[#E8B626] text-[#E8B626] bg-[#E8B626]/10"
                        : "border-white/10 text-gray-400 hover:text-white"
                    }`}
                  >
                    {altImageLabel || "Industrial Facility"}
                  </button>
                </div>
              )}

              {/* Seamless side-by-side image placing on dark background */}
              <div className="relative w-full max-w-[650px] lg:max-w-none flex justify-center lg:justify-end select-none">
                {activeImage.endsWith(".png") ? (
                  /* Transparent/Dark Blended Reference Graphic (e.g. hero-strategy-map.png) */
                  <div className="relative w-full aspect-[4/3] max-h-[520px] flex items-center justify-center lg:justify-end">
                    <Image
                      src={activeImage}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain object-center lg:object-right filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:scale-[1.02]"
                      priority
                    />
                  </div>
                ) : (
                  /* Framed Photography Visual */
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] max-h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-[#171717] shadow-2xl group">
                    <Image
                      src={activeImage}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
