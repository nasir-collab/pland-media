import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | Plan D Media",
  description: "Official Terms and Conditions for LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED.",
};

export default function TermsPage() {
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
          <FileText className="w-4 h-4 text-[#E8B626]" />
          <span className="text-xs font-mono font-bold text-[#E8B626]">
            (Legal Agreements)
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-gray-400 mb-10 pb-6 border-b border-white/10 font-mono">
          Last Updated: January 1, 2025 • LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED
        </p>

        <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed space-y-6 font-light">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing the website https://www.pland.in and engaging our digital consulting or performance services, you agree to comply with and be bound by the following terms and conditions of LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. Scope of Services</h2>
            <p>
              Plan D Media provides growth advisory, search engine optimization, paid advertising campaign management, and software engineering. Specific deliverables, key performance indicators, fee structures, and service level agreements (SLAs) are defined exclusively in individually executed client Master Services Agreements (MSAs).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Intellectual Property</h2>
            <p>
              All proprietary software architectures, Next.js conversion frameworks, custom scripts, and analytical models developed independently by Plan D Media remain the exclusive property of LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED unless expressly assigned in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Jurisdiction &amp; Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Republic of India. Any legal disputes arising hereunder shall fall under the exclusive jurisdiction of the competent courts in Kolkata, West Bengal.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
