import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface PostItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  readTime: string;
  publishedAt: Date | string;
}

export default function InsightsSection({ posts }: { posts: PostItem[] }) {
  return (
    <section className="py-24 sm:py-32 bg-[#111111] border-b border-white/10 relative" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header matching Whiteboard Media */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/10 gap-4 mb-16">
          <div className="flex items-center gap-6 text-xs text-gray-400 font-mono">
            <span className="text-[#E8B626] font-bold">(Insights &amp; Articles)</span>
            <span>(Strategy &amp; Market Intelligence)</span>
          </div>

          <Link href="/blog" className="rr-btn-underline text-xs">
            Explore All Insights →
          </Link>
        </div>

        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Thoughts, perspectives, and growth playbooks.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-[#171717] border border-white/10 rounded-2xl overflow-hidden hover:border-[#E8B626]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-[#1c1c1c]" style={{ position: "relative" }}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-gray-300 uppercase">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-mono text-gray-400 mb-2">
                    {post.readTime}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E8B626] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E8B626]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
