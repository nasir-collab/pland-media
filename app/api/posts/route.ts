import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const all = searchParams.get("all") === "true";

    const posts = await prisma.post.findMany({
      where: all ? {} : { status: "PUBLISHED" },
      orderBy: { publishedAt: "desc" },
    });

    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error("Get posts error:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const user = getUserFromRequest(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      category,
      authorName,
      readTime,
      tags,
      status,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title,
        slug: slug.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
        excerpt: excerpt || "",
        content,
        coverImage: coverImage || "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1200&auto=format&fit=crop",
        category: category || "Growth Insights",
        authorName: authorName || "Plan D Editorial",
        readTime: readTime || "5 min read",
        tags: tags || "Marketing, Strategy",
        status: status || "PUBLISHED",
      },
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
