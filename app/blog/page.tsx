import React from "react";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { ArrowUpRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Insights & Growth Intelligence | Plan D Media",
  description:
    "Actionable playbooks on algorithmic marketing, Generative Engine Optimization (GEO), Core Web Vitals, and B2B paid search from Plan D Media.",
};

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="pt-28 pb-16 bg-[#111111] text-white min-h-screen">
      {/* Top Header matching Whiteboard Media */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 text-xs text-gray-400 font-mono pb-8 border-b border-white/10 mb-12">
            <span className="text-[#E8B626] font-bold">(Insights &amp; Articles)</span>
            <span>(Strategy &amp; Market Intelligence)</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-8">
              Thoughts, perspectives, and growth playbooks.
            </h1>
            <p className="text-gray-400 text-base sm:text-xl leading-relaxed font-light max-w-2xl">
              Proprietary playbooks, algorithmic observations, and technical architectures for CEOs, founders, and CMOs seeking predictable revenue scale.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-[#171717] border border-white/10 rounded-2xl overflow-hidden hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-[#1c1c1c]" style={{ position: "relative" }}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-[#111111]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-gray-300 uppercase">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-3">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.authorName}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-[#E8B626] transition-colors leading-snug mb-3">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                  <span className="rr-btn-underline">Read Full Article →</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E8B626]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
