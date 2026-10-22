import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Plan D Media",
  description: "Official Privacy Policy for LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-16 bg-[#111111] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-[#E8B626] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Back to Homepage</span>
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-4 h-4 text-[#E8B626]" />
          <span className="text-xs font-mono font-bold text-[#E8B626]">
            (Legal &amp; Data Compliance)
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-400 mb-10 pb-6 border-b border-white/10 font-mono">
          Effective Date: January 1, 2025 • LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED
        </p>

        <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed space-y-6 font-light">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. Overview</h2>
            <p>
              LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED (&ldquo;Plan D Media,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website https://www.pland.in and provides performance marketing, search engine optimization, web engineering, and digital growth consulting services. This Privacy Policy details our practices concerning data collection, processing, and protection.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. Information Collection</h2>
            <p>
              We collect information that you submit voluntarily via our contact and consultation forms, including your full name, business email address, phone/WhatsApp number, company name, monthly marketing budget, and business requirements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Telemetry &amp; Server-Side Tracking</h2>
            <p>
              Our website utilizes privacy-compliant analytics and telemetry to monitor performance, Core Web Vitals, and user interaction patterns. We do not sell, rent, or lease your private personal identification details to third-party data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Data Security &amp; Storage</h2>
            <p>
              Lead entries and audit requests are protected using enterprise TLS encryption and stored securely in dedicated PostgreSQL databases with strict role-based access control.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
