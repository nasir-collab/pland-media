import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const all = searchParams.get("all") === "true";

    const caseStudies = await prisma.caseStudy.findMany({
      where: all ? {} : { status: "PUBLISHED" },
      orderBy: { order: "asc" },
    });

    return NextResponse.json({ success: true, caseStudies });
  } catch (error) {
    console.error("Get case studies error:", error);
    return NextResponse.json(
      { error: "Failed to fetch case studies" },
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
      client,
      industry,
      challenge,
      solution,
      results,
      tags,
      image,
      featured,
      status,
      order,
    } = body;

    if (!title || !slug || !client) {
      return NextResponse.json(
        { error: "Title, slug, and client are required" },
        { status: 400 }
      );
    }

    const caseStudy = await prisma.caseStudy.create({
      data: {
        title,
        slug: slug.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
        client,
        industry: industry || "Technology",
        challenge: challenge || "",
        solution: solution || "",
        results: typeof results === "string" ? results : JSON.stringify(results || []),
        tags: tags || "",
        image: image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        featured: Boolean(featured),
        status: status || "PUBLISHED",
        order: Number(order) || 0,
      },
    });

    return NextResponse.json({ success: true, caseStudy });
  } catch (error) {
    console.error("Create case study error:", error);
    return NextResponse.json(
      { error: "Failed to create case study" },
      { status: 500 }
    );
  }
}
