"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      <div className="rr-container-1650">
        {/* Massive Closing CTA matching Whiteboard Media */}
        <div className="pb-20 sm:pb-28 border-b border-white/10 space-y-8">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white uppercase leading-[0.95]">
            Let&apos;s start a <br />
            great work right <br />
            now
          </h2>

          <div className="pt-2">
            <Link href="/contact" className="rr-btn-underline text-lg sm:text-xl">
              Let&apos;s get started now →
            </Link>
          </div>
        </div>

        {/* 4-Column Directory Grid matching Whiteboard Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/10 text-sm">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png?v=authentic"
                alt="Plan D Media - Digital Done Right"
                width={280}
                height={52}
                unoptimized
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED. The 360° performance marketing, organic SEO, and conversion engineering arm delivering predictable commercial scale for forward brands.
            </p>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-base font-bold text-white tracking-wide">
              Company
            </div>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li>
                <Link href="/services" className="hover:text-[#E8B626] transition-colors">
                  Solutions &amp; Capabilities
                </Link>
              </li>
              <li>
                <Link href="/brand-strategy" className="hover:text-[#E8B626] transition-colors">
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E8B626] transition-colors">
                  About the Agency
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#E8B626] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#E8B626] transition-colors">
                  Insights &amp; Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E8B626] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-base font-bold text-white tracking-wide">
              Social
            </div>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li>
                <a
                  href="https://www.linkedin.com/company/plandmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8B626] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/plandmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8B626] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/plandmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8B626] transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Office Details */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-base font-bold text-white tracking-wide">
              Office
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Ecospace Business Park, Premises No. 02-0345, Plot No. IIF/11, Action Area II, New Town, Kolkata, West Bengal 700160, India
            </p>
            <p className="text-xs text-gray-400 font-mono">
              Direct: +91 82404 18456
            </p>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>
            &copy; 2026 <span className="text-white font-medium">PLAN D MEDIA</span> (LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED). All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/admin/login" className="hover:text-[#E8B626] transition-colors font-mono">
              CMS Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
