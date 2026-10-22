"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type OfficeKey = "ecospace" | "biowonder";

interface OfficeImage {
  src: string;
  title: string;
  caption: string;
}

interface OfficeData {
  id: OfficeKey;
  name: string;
  tagline: string;
  location: string;
  badge: string;
  images: OfficeImage[];
  description: string;
}

const offices: Record<OfficeKey, OfficeData> = {
  ecospace: {
    id: "ecospace",
    name: "EcoSpace Office",
    tagline: "EcoSpace Business Park",
    location: "EcoSpace Business Park, New Town, Kolkata",
    badge: "Tech & Growth Hub",
    images: [
      {
        src: "/ecospace-tower.jpg",
        title: "EcoSpace Tower",
        caption: "Main Tower & Signage • EcoSpace Business Park, New Town",
      },
      {
        src: "/ecospace-entrance.jpg",
        title: "Main Entrance",
        caption: "Architectural Glass Facade & Lobby Entrance • EcoSpace",
      },
      {
        src: "/ecospace-campus.png",
        title: "Campus Courtyard",
        caption: "Corporate Campus & Grounds • EcoSpace Business Park",
      },
    ],
    description: "Our premier corporate & growth operations hub in New Town, Kolkata.",
  },
  biowonder: {
    id: "biowonder",
    name: "Biowonder Office",
    tagline: "Biowonder Hub",
    location: "Biowonder, EM Bypass, Kolkata",
    badge: "Creative War Room",
    images: [
      {
        src: "/biowonder-facade.png",
        title: "Biophilic Facade",
        caption: "Vertical Gardens & Architectural Glass Facade • EM Bypass, Kolkata",
      },
      {
        src: "/biowonder-tower.png",
        title: "Cantilever Tower",
        caption: "Futuristic Glass Tower & Business Suites • Kolkata",
      },
      {
        src: "/biowonder-plaza.jpg",
        title: "Executive Plaza",
        caption: "Landscaped Courtyard & Water Installation • Biowonder Hub",
      },
    ],
    description: "Our high-energy creative & brand strategy floor on EM Bypass.",
  },
};

export default function ManifestoSection() {
  const [activeOffice, setActiveOffice] = useState<OfficeKey>("ecospace");
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const current = offices[activeOffice];
  const images = current.images;
  const currentImage = images[activeImageIndex] || images[0];

  const handleSelectOffice = (office: OfficeKey) => {
    setActiveOffice(office);
    setActiveImageIndex(0);
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative overflow-hidden">
      <div className="rr-container-1650">
        {/* Large Statement Heading matching Whiteboard Media */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.15]">
            Every great brand story begins with a blank space
          </h2>
        </div>

        {/* 2-Column Split: Image & Category on Left, Editorial Copy on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Category tag & Agency Photo & Office Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="tag-parenthesis block text-sm font-mono text-[#E8B626]">
                (Who we are)
              </span>
              <span className="text-xs font-mono text-gray-500">
                Kolkata Headquarters
              </span>
            </div>

            {/* Active Office Image Card */}
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#171717] group aspect-[4/3] max-w-xl cursor-pointer shadow-2xl transition-all duration-500 hover:border-[#E8B626]/40"
              title="Click to view full screen"
            >
              <Image
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/15 to-transparent pointer-events-none" />
              
              {/* Top controls: Counter badge & Expand Hint */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                {images.length > 1 ? (
                  <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[11px] font-mono text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8B626] animate-pulse" />
                    <span>{activeImageIndex + 1} / {images.length}</span>
                    <span className="text-gray-400 font-sans">• {currentImage.title}</span>
                  </div>
                ) : (
                  <div />
                )}

                <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[11px] font-mono text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                  <span>Expand</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>

              {/* Prev / Next arrows for multi-image office like EcoSpace */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-gray-300">
                <div className="truncate pr-2">
                  <span className="text-[#E8B626] font-bold">{current.name}</span> • {currentImage.caption}
                </div>
                <span className="shrink-0 text-[11px] px-2.5 py-0.5 rounded-full bg-black/70 border border-[#E8B626]/30 text-[#E8B626]">
                  {current.badge}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip for EcoSpace Office multi-views */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 max-w-xl">
                {images.map((img, idx) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`group relative flex-1 aspect-[16/10] rounded-xl overflow-hidden border transition-all duration-300 ${
                      activeImageIndex === idx
                        ? "border-[#E8B626] ring-2 ring-[#E8B626]/30 scale-[1.02]"
                        : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                    <span className="absolute bottom-1 left-1.5 right-1.5 truncate text-[10px] font-mono font-medium text-white px-1 py-0.5 rounded bg-black/70">
                      {img.title}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Just below image section: Two buttons (click to view) - EcoSpace Office, Biowonder Office */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#E8B626] font-medium">(click to view)</span>
                <span className="h-px bg-white/10 flex-1 max-w-[120px]" />
                <span className="text-gray-500 text-[11px]">Select location</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* EcoSpace Office Button */}
                <button
                  type="button"
                  onClick={() => handleSelectOffice("ecospace")}
                  className={`group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
                    activeOffice === "ecospace"
                      ? "bg-[#E8B626] text-black border-[#E8B626] font-semibold shadow-lg shadow-[#E8B626]/25 scale-[1.02]"
                      : "bg-[#181818] text-gray-300 border-white/10 hover:border-white/30 hover:bg-[#202020] hover:text-white"
                  }`}
                  aria-pressed={activeOffice === "ecospace"}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeOffice === "ecospace" ? "bg-black animate-pulse" : "bg-[#E8B626]"
                    }`}
                  />
                  <span>EcoSpace Office</span>
                  <span
                    className={`text-xs font-mono px-1.5 py-0.5 rounded ${
                      activeOffice === "ecospace"
                        ? "bg-black/15 text-black font-bold"
                        : "bg-white/5 text-[#E8B626]"
                    }`}
                  >
                    3 Photos
                  </span>
                  <span
                    className={`text-xs font-mono opacity-80 ${
                      activeOffice === "ecospace" ? "text-black" : "text-gray-400"
                    }`}
                  >
                    (New Town)
                  </span>
                </button>

                {/* Biowonder Office Button */}
                <button
                  type="button"
                  onClick={() => handleSelectOffice("biowonder")}
                  className={`group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
                    activeOffice === "biowonder"
                      ? "bg-[#E8B626] text-black border-[#E8B626] font-semibold shadow-lg shadow-[#E8B626]/25 scale-[1.02]"
                      : "bg-[#181818] text-gray-300 border-white/10 hover:border-white/30 hover:bg-[#202020] hover:text-white"
                  }`}
                  aria-pressed={activeOffice === "biowonder"}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeOffice === "biowonder" ? "bg-black animate-pulse" : "bg-[#E8B626]"
                    }`}
                  />
                  <span>Biowonder Office</span>
                  <span
                    className={`text-xs font-mono px-1.5 py-0.5 rounded ${
                      activeOffice === "biowonder"
                        ? "bg-black/15 text-black font-bold"
                        : "bg-white/5 text-[#E8B626]"
                    }`}
                  >
                    3 Photos
                  </span>
                  <span
                    className={`text-xs font-mono opacity-80 ${
                      activeOffice === "biowonder" ? "text-black" : "text-gray-400"
                    }`}
                  >
                    (EM Bypass)
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Manifesto Copy matching Whiteboard Media */}
          <div className="lg:col-span-6 space-y-8 pt-4 lg:pt-8">
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light">
              &ldquo;Plan D&rdquo; isn&apos;t a name we picked for aesthetics. It&apos;s the moment before the breakthrough — no clutter, no vanity metrics, no borrowed template. Most agencies start with a deck of cookie-cutter best practices. We start with a blank board and unit economics, because the campaigns that actually cut through were never built from a formula.
            </p>

            <p className="text-white text-xl sm:text-2xl font-medium tracking-tight">
              Clarity isn&apos;t the mood. It&apos;s the method.
            </p>

            <div className="pt-2">
              <Link href="/about" className="rr-btn-underline text-base sm:text-lg">
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#141414] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#171717]">
              <div>
                <h3 className="text-white font-medium text-lg flex items-center gap-2">
                  <span>{current.name}</span>
                  <span className="text-xs font-mono text-[#E8B626]">({currentImage.title})</span>
                </h3>
                <p className="text-xs font-mono text-gray-400">{currentImage.caption}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-colors"
                aria-label="Close image viewer"
              >
                ✕
              </button>
            </div>

            {/* Modal Image with Navigation */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black group">
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous photo"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-black/95 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next photo"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-black/95 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer with quick switcher & thumbnails */}
            <div className="p-4 border-t border-white/10 bg-[#171717] flex flex-wrap items-center justify-between gap-3">
              {/* Thumbnail Strip inside Modal */}
              {images.length > 1 ? (
                <div className="flex items-center gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-11 rounded-lg overflow-hidden border transition-all ${
                        activeImageIndex === idx
                          ? "border-[#E8B626] ring-2 ring-[#E8B626]/40"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        sizes="10vw"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-xs font-mono text-gray-400">
                  <span className="text-[#E8B626] font-bold">Plan D Media</span> • {current.badge}
                </div>
              )}

              {/* Office Selector in Modal */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSelectOffice("ecospace")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeOffice === "ecospace"
                      ? "bg-[#E8B626] text-black font-semibold"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  EcoSpace Office (3)
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectOffice("biowonder")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeOffice === "biowonder"
                      ? "bg-[#E8B626] text-black font-semibold"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  Biowonder Office (3)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


