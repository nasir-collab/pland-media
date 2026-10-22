import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { ArrowLeft, Clock, User } from "lucide-react";
import CTASection from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Plan D Media Intelligence`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) notFound();

  // Related posts
  const relatedPosts = await prisma.post.findMany({
    where: {
      status: "PUBLISHED",
      NOT: { id: post.id },
    },
    take: 2,
  });

  return (
    <div className="pt-28 pb-16 bg-[#111111] text-white min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-[#E8B626] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Back to All Articles</span>
        </Link>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="text-xs font-mono font-bold text-[#E8B626]">
            ({post.category})
          </span>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-[#E8B626]" />
            <span>{post.readTime}</span>
            <span>•</span>
            <User className="w-3.5 h-3.5 text-gray-400" />
            <span>{post.authorName}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light mb-10 pb-8 border-b border-white/10">
          {post.excerpt}
        </p>

        {/* Featured Cover Image */}
        <div className="relative h-80 sm:h-[420px] w-full rounded-2xl overflow-hidden border border-white/10 mb-12 bg-[#1c1c1c]" style={{ position: "relative" }}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-6 font-light">
          <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Tags */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-wrap gap-2">
          {post.tags.split(",").map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#171717] border border-white/10 rounded-full text-xs text-gray-400 font-mono"
            >
              #{t.trim()}
            </span>
          ))}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-6 font-mono text-xs uppercase tracking-wider text-[#E8B626]">
            (Related Intelligence)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((r) => (
              <Link
                key={r.id}
                href={`/blog/${r.slug}`}
                className="bg-[#171717] border border-white/10 rounded-2xl p-6 hover:border-[#E8B626]/40 transition-colors block group"
              >
                <div className="text-[11px] font-mono text-[#E8B626] mb-2 uppercase">
                  ({r.category})
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#E8B626] transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 font-light">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
