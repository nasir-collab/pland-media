"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Layers,
  Building2,
  Sparkles,
} from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industryDropdown, setIndustryDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  const servicesRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus when route changes
  useEffect(() => {
    setServicesDropdown(false);
    setIndustryDropdown(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesDropdown(false);
      }
      if (industryRef.current && !industryRef.current.contains(target)) {
        setIndustryDropdown(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesDropdown(false);
        setIndustryDropdown(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Hover handlers with smooth grace period (prevents flicker/gap closures)
  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIndustryDropdown(false);
    setServicesDropdown(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 180);
  };

  const handleIndustryEnter = () => {
    if (industryTimeoutRef.current) clearTimeout(industryTimeoutRef.current);
    setServicesDropdown(false);
    setIndustryDropdown(true);
  };

  const handleIndustryLeave = () => {
    industryTimeoutRef.current = setTimeout(() => {
      setIndustryDropdown(false);
    }, 180);
  };

  const serviceItems = [
    { label: "Brand Strategy", href: "/brand-strategy", tag: "Market Moats" },
    { label: "Performance Marketing", href: "/performance-marketing", tag: "Paid Traffic & ROAS" },
    { label: "Organic Marketing", href: "/organic-marketing", tag: "GEO & Search Dominance" },
    { label: "Web Design & Development", href: "/web-design-development", tag: "Conversion Engines" },
    { label: "Social Media Branding", href: "/social-branding", tag: "High-Recall Creative" },
    { label: "Consulting", href: "/consulting", tag: "Strategic Advisory" },
  ];

  const industryItems = [
    { label: "Digital Marketing for Healthcare", href: "/digital-marketing-for-healthcare", tag: "Clinics & Hospitals" },
    { label: "Digital Marketing for Manufacturing Company", href: "/digital-marketing-for-manufacturing", tag: "B2B & Industrial" },
    { label: "Digital Marketing for Education", href: "/digital-marketing-for-education", tag: "Universities & Schools" },
    { label: "Digital Marketing for eCommerce", href: "/digital-marketing-for-ecommerce", tag: "D2C & Retail Brands" },
    { label: "Digital Marketing for Real Estate", href: "/digital-marketing-for-real-estate", tag: "Developers & Projects" },
    { label: "Digital Marketing for Coaches", href: "/digital-marketing-for-coaches", tag: "High-Ticket Funnels" },
    { label: "Digital Marketing for Legal & Accounting", href: "/digital-marketing-for-legal-and-accounting-firms", tag: "Professional Firms" },
  ];

  const isServicesActive =
    pathname.startsWith("/services") ||
    pathname.startsWith("/brand-strategy") ||
    pathname.startsWith("/performance-marketing") ||
    pathname.startsWith("/organic-marketing") ||
    pathname.startsWith("/web-design-development") ||
    pathname.startsWith("/social-branding") ||
    pathname.startsWith("/consulting");

  const isIndustryActive = pathname.startsWith("/digital-marketing-for-");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0c0c0c]/92 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-[0_12px_40px_rgba(0,0,0,0.65)]"
            : "bg-gradient-to-b from-[#0c0c0c]/85 via-[#0c0c0c]/40 to-transparent backdrop-blur-[6px] border-b border-white/[0.04] py-3.5 sm:py-4"
        }`}
      >
        {/* Subtle Ambient Gold Hairline Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#E8B626]/40 to-transparent pointer-events-none" />

        <div className="rr-container-1650">
          <div className="flex items-center justify-between gap-4">
            {/* 1. Left: Brand Logo */}
            <div className="flex items-center gap-4 shrink-0">
              <Link href="/" className="flex items-center group relative py-1">
                <Image
                  src="/logo.png?v=authentic"
                  alt="Plan D Media - Digital Done Right"
                  width={260}
                  height={50}
                  priority
                  unoptimized
                  className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            {/* 2. Center: Luxury Floating Island Navigation Capsule */}
            <nav className="hidden xl:flex items-center gap-0.5 bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.12] rounded-full p-1.5 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all">
              {/* Home */}
              <Link
                href="/"
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  pathname === "/"
                    ? "bg-white/[0.1] text-[#E8B626] font-semibold border border-[#E8B626]/30 shadow-[0_0_15px_rgba(232,182,38,0.15)]"
                    : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {pathname === "/" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B626] shadow-[0_0_8px_#E8B626]" />
                )}
                <span>Home</span>
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  pathname === "/about"
                    ? "bg-white/[0.1] text-[#E8B626] font-semibold border border-[#E8B626]/30 shadow-[0_0_15px_rgba(232,182,38,0.15)]"
                    : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {pathname === "/about" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B626] shadow-[0_0_8px_#E8B626]" />
                )}
                <span>About Us</span>
              </Link>

              {/* The Group */}
              <Link
                href="/about#group"
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all whitespace-nowrap"
              >
                The Group
              </Link>

              {/* Services Dropdown */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <button
                  type="button"
                  onClick={() => {
                    setIndustryDropdown(false);
                    setServicesDropdown((prev) => !prev);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer outline-none ${
                    isServicesActive || servicesDropdown
                      ? "bg-white/[0.1] text-[#E8B626] font-semibold border border-[#E8B626]/30 shadow-[0_0_15px_rgba(232,182,38,0.15)]"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                  aria-expanded={servicesDropdown}
                  aria-haspopup="true"
                >
                  {isServicesActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8B626] shadow-[0_0_8px_#E8B626]" />
                  )}
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdown ? "rotate-180 text-[#E8B626]" : "opacity-60"
                    }`}
                  />
                </button>

                {/* Dropdown Card */}
                {servicesDropdown && (
                  <div className="absolute top-full left-0 pt-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="w-80 bg-[#121212]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] ring-1 ring-white/5 p-2.5">
                      {/* Header Badge */}
                      <div className="px-3 py-2 mb-1 flex items-center justify-between border-b border-white/[0.06]">
                        <span className="text-[10px] font-mono text-[#E8B626] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Capabilities &amp; Solutions</span>
                        </span>
                        <span className="text-[10px] font-mono text-gray-500">
                          (06 Services)
                        </span>
                      </div>

                      {/* Items */}
                      <div className="space-y-0.5">
                        {serviceItems.map((s, idx) => {
                          const isActive = pathname === s.href;
                          return (
                            <Link
                              key={idx}
                              href={s.href}
                              onClick={() => setServicesDropdown(false)}
                              className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                                isActive
                                  ? "text-[#E8B626] bg-[#E8B626]/10 font-semibold"
                                  : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                              }`}
                            >
                              <div className="flex flex-col">
                                <span className="group-hover:translate-x-0.5 transition-transform">
                                  {s.label}
                                </span>
                                <span className="text-[10px] text-gray-500 group-hover:text-gray-400 font-normal">
                                  {s.tag}
                                </span>
                              </div>
                              <ArrowUpRight
                                className={`w-3.5 h-3.5 transition-all duration-200 ${
                                  isActive
                                    ? "text-[#E8B626] opacity-100"
                                    : "text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-[#E8B626] group-hover:translate-x-0.5"
                                }`}
                              />
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer Link */}
                      <div className="mt-2 pt-2 border-t border-white/[0.06] px-1">
                        <Link
                          href="/services"
                          onClick={() => setServicesDropdown(false)}
                          className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-mono text-[#E8B626] hover:bg-[#E8B626]/10 transition-colors"
                        >
                          <span>Explore All Capabilities</span>
                          <span className="text-xs">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industry Expertise Dropdown */}
              <div
                ref={industryRef}
                className="relative"
                onMouseEnter={handleIndustryEnter}
                onMouseLeave={handleIndustryLeave}
              >
                <button
                  type="button"
                  onClick={() => {
                    setServicesDropdown(false);
                    setIndustryDropdown((prev) => !prev);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer outline-none ${
                    isIndustryActive || industryDropdown
                      ? "bg-white/[0.1] text-[#E8B626] font-semibold border border-[#E8B626]/30 shadow-[0_0_15px_rgba(232,182,38,0.15)]"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                  aria-expanded={industryDropdown}
                  aria-haspopup="true"
                >
                  {isIndustryActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8B626] shadow-[0_0_8px_#E8B626]" />
                  )}
                  <span>Industry Expertise</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      industryDropdown ? "rotate-180 text-[#E8B626]" : "opacity-60"
                    }`}
                  />
                </button>

                {/* Dropdown Card */}
                {industryDropdown && (
                  <div className="absolute top-full left-0 pt-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="w-[410px] bg-[#121212]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] ring-1 ring-white/5 p-2.5">
                      {/* Header Badge */}
                      <div className="px-3 py-2 mb-1 flex items-center justify-between border-b border-white/[0.06]">
                        <span className="text-[10px] font-mono text-[#E8B626] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>Dedicated Industry Sectors</span>
                        </span>
                        <span className="text-[10px] font-mono text-gray-500">
                          (07 Verticals)
                        </span>
                      </div>

                      {/* Items */}
                      <div className="space-y-0.5">
                        {industryItems.map((item, idx) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setIndustryDropdown(false)}
                              className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                                isActive
                                  ? "text-[#E8B626] bg-[#E8B626]/10 font-semibold"
                                  : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                              }`}
                            >
                              <div className="flex flex-col">
                                <span className="group-hover:translate-x-0.5 transition-transform">
                                  {item.label}
                                </span>
                                <span className="text-[10px] text-gray-500 group-hover:text-gray-400 font-normal">
                                  {item.tag}
                                </span>
                              </div>
                              <ArrowUpRight
                                className={`w-3.5 h-3.5 transition-all duration-200 shrink-0 ml-2 ${
                                  isActive
                                    ? "text-[#E8B626] opacity-100"
                                    : "text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-[#E8B626] group-hover:translate-x-0.5"
                                }`}
                              />
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer Link */}
                      <div className="mt-2 pt-2 border-t border-white/[0.06] px-1">
                        <Link
                          href="/case-studies"
                          onClick={() => setIndustryDropdown(false)}
                          className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-mono text-[#E8B626] hover:bg-[#E8B626]/10 transition-colors"
                        >
                          <span>View Industry Case Studies</span>
                          <span className="text-xs">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Selected Work */}
              <Link
                href="/case-studies"
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  pathname === "/case-studies"
                    ? "bg-white/[0.1] text-[#E8B626] font-semibold border border-[#E8B626]/30 shadow-[0_0_15px_rgba(232,182,38,0.15)]"
                    : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {pathname === "/case-studies" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B626] shadow-[0_0_8px_#E8B626]" />
                )}
                <span>Selected Work</span>
              </Link>

              {/* Insights */}
              <Link
                href="/blog"
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  pathname.startsWith("/blog")
                    ? "bg-white/[0.1] text-[#E8B626] font-semibold border border-[#E8B626]/30 shadow-[0_0_15px_rgba(232,182,38,0.15)]"
                    : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {pathname.startsWith("/blog") && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B626] shadow-[0_0_8px_#E8B626]" />
                )}
                <span>Insights</span>
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  pathname === "/contact"
                    ? "bg-white/[0.1] text-[#E8B626] font-semibold border border-[#E8B626]/30 shadow-[0_0_15px_rgba(232,182,38,0.15)]"
                    : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {pathname === "/contact" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B626] shadow-[0_0_8px_#E8B626]" />
                )}
                <span>Contact</span>
              </Link>
            </nav>

            {/* 3. Right: Phone Pill, High-Gloss CTA Button & Side Drawer Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Separate, Non-Colliding Phone Pill */}
              <a
                href="tel:+918240418456"
                className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#E8B626]/40 hover:bg-white/[0.06] text-xs font-mono text-gray-300 hover:text-white transition-all whitespace-nowrap group"
              >
                <div className="w-5 h-5 rounded-full bg-[#E8B626]/15 flex items-center justify-center text-[#E8B626] group-hover:bg-[#E8B626] group-hover:text-black transition-colors">
                  <Phone className="w-2.5 h-2.5" />
                </div>
                <span className="tracking-tight font-medium">+91 82404 18456</span>
              </a>

              {/* Premium High-Gloss Gradient CTA Button - Visible on md+ screens */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="hidden md:flex relative group overflow-hidden px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#E8B626] via-[#F3C84B] to-[#E8B626] bg-[length:200%_auto] text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-right transition-all duration-500 shadow-[0_0_20px_rgba(232,182,38,0.25)] hover:shadow-[0_0_30px_rgba(232,182,38,0.45)] hover:scale-[1.02] active:scale-[0.98] items-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
              >
                <span>Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Prominent High-Visibility Hamburger Menu Button (Always visible on mobile & desktop) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 hover:border-[#E8B626]/50 text-white transition-all cursor-pointer shrink-0 shadow-lg active:scale-95 group"
                aria-label="Open navigation menu"
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8B626] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Side Drawer matching Whiteboard Media <aside class="side-info"> */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            title="Click outside to close menu"
          />

          {/* Drawer Body */}
          <div className="relative w-full max-w-md bg-[#141414] border-l border-white/10 h-full p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300 shadow-2xl">
            <div>
              {/* Sticky Drawer Header */}
              <div className="sticky top-0 bg-[#141414]/95 backdrop-blur-xl -mt-6 sm:-mt-8 -mx-6 sm:-mx-8 px-6 sm:px-8 pt-6 pb-5 border-b border-white/10 z-20 flex items-center justify-between">
                <Image
                  src="/logo.png?v=authentic"
                  alt="Plan D Media"
                  width={200}
                  height={38}
                  unoptimized
                  className="h-7 sm:h-8 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono font-bold transition-all cursor-pointer active:scale-95"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-[#E8B626]" />
                  <span>Close</span>
                </button>
              </div>

              {/* Drawer Nav Links */}
              <div className="py-6 space-y-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-bold transition-all ${
                    pathname === "/"
                      ? "text-[#E8B626] bg-[#E8B626]/10"
                      : "text-white hover:text-[#E8B626] hover:bg-white/5"
                  }`}
                >
                  <span>Home</span>
                  {pathname === "/" && <span className="w-2 h-2 rounded-full bg-[#E8B626]" />}
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-bold transition-all ${
                    pathname === "/about"
                      ? "text-[#E8B626] bg-[#E8B626]/10"
                      : "text-white hover:text-[#E8B626] hover:bg-white/5"
                  }`}
                >
                  <span>About Us</span>
                  {pathname === "/about" && <span className="w-2 h-2 rounded-full bg-[#E8B626]" />}
                </Link>

                {/* Mobile Services Accordion */}
                <div className="border border-white/5 rounded-2xl overflow-hidden my-1">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between text-base font-bold text-white hover:text-[#E8B626] transition-colors p-3.5 bg-white/[0.02] cursor-pointer"
                  >
                    <span className={isServicesActive ? "text-[#E8B626]" : ""}>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileServicesOpen ? "rotate-180 text-[#E8B626]" : "opacity-60"
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1 bg-white/[0.02]">
                      {serviceItems.map((s, idx) => (
                        <Link
                          key={idx}
                          href={s.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between text-xs py-2 px-3 rounded-lg transition-colors ${
                            pathname === s.href
                              ? "text-[#E8B626] bg-[#E8B626]/10 font-semibold"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span>{s.label}</span>
                          <span className="text-[10px] text-gray-500 font-mono">{s.tag}</span>
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-white/5 mt-2">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between text-xs font-mono text-[#E8B626] py-1.5 px-3 rounded-lg hover:bg-[#E8B626]/10"
                        >
                          <span>Explore All Capabilities</span>
                          <span>&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Industry Expertise Accordion */}
                <div className="border border-white/5 rounded-2xl overflow-hidden my-1">
                  <button
                    type="button"
                    onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                    className="w-full flex items-center justify-between text-base font-bold text-white hover:text-[#E8B626] transition-colors p-3.5 bg-white/[0.02] cursor-pointer"
                  >
                    <span className={isIndustryActive ? "text-[#E8B626]" : ""}>Industry Expertise</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileIndustryOpen ? "rotate-180 text-[#E8B626]" : "opacity-60"
                      }`}
                    />
                  </button>
                  {mobileIndustryOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1 bg-white/[0.02]">
                      {industryItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between text-xs py-2 px-3 rounded-lg transition-colors ${
                            pathname === item.href
                              ? "text-[#E8B626] bg-[#E8B626]/10 font-semibold"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span>{item.label}</span>
                          <span className="text-[10px] text-gray-500 font-mono">{item.tag}</span>
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-white/5 mt-2">
                        <Link
                          href="/case-studies"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between text-xs font-mono text-[#E8B626] py-1.5 px-3 rounded-lg hover:bg-[#E8B626]/10"
                        >
                          <span>View Industry Case Studies</span>
                          <span>&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-bold transition-all ${
                    pathname === "/case-studies"
                      ? "text-[#E8B626] bg-[#E8B626]/10"
                      : "text-white hover:text-[#E8B626] hover:bg-white/5"
                  }`}
                >
                  <span>Selected Work</span>
                  {pathname === "/case-studies" && <span className="w-2 h-2 rounded-full bg-[#E8B626]" />}
                </Link>

                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-bold transition-all ${
                    pathname.startsWith("/blog")
                      ? "text-[#E8B626] bg-[#E8B626]/10"
                      : "text-white hover:text-[#E8B626] hover:bg-white/5"
                  }`}
                >
                  <span>Insights &amp; Blog</span>
                  {pathname.startsWith("/blog") && <span className="w-2 h-2 rounded-full bg-[#E8B626]" />}
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-bold transition-all ${
                    pathname === "/contact"
                      ? "text-[#E8B626] bg-[#E8B626]/10"
                      : "text-white hover:text-[#E8B626] hover:bg-white/5"
                  }`}
                >
                  <span>Contact</span>
                  {pathname === "/contact" && <span className="w-2 h-2 rounded-full bg-[#E8B626]" />}
                </Link>
              </div>
            </div>

            {/* Drawer Contact Info */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E8B626] block">
                (Contact Office)
              </span>

              <div className="flex items-start gap-3 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-[#E8B626] shrink-0 mt-0.5" />
                <span>Ecospace Business Park, Action Area II, New Town, Kolkata, WB 700160</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-300">
                <Mail className="w-4 h-4 text-[#E8B626] shrink-0" />
                <div className="flex gap-2">
                  <a href="mailto:info@pland.in" className="hover:text-white transition-colors">
                    info@pland.in
                  </a>
                  <span>•</span>
                  <a href="mailto:contact@pland.in" className="hover:text-white transition-colors">
                    contact@pland.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-300">
                <Phone className="w-4 h-4 text-[#E8B626] shrink-0" />
                <div className="flex gap-2 font-mono">
                  <a href="tel:+918777018187" className="hover:text-white transition-colors">
                    +91 87770 18187
                  </a>
                  <span>/</span>
                  <a href="tel:+918240418456" className="hover:text-white transition-colors">
                    82404 18456
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E8B626] to-[#F3C84B] text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 transition-all text-center cursor-pointer shadow-lg shadow-[#E8B626]/20"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
