import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const all = searchParams.get("all") === "true";

    const services = await prisma.service.findMany({
      where: all ? {} : { status: "PUBLISHED" },
      orderBy: { order: "asc" },
    });

    return NextResponse.json({ success: true, services });
  } catch (error) {
    console.error("Get services error:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
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
      tagline,
      shortDescription,
      fullDescription,
      icon,
      category,
      order,
      featured,
      status,
      deliverables,
      keyMetrics,
    } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { error: "Title and slug are required" },
        { status: 400 }
      );
    }

    const service = await prisma.service.create({
      data: {
        title,
        slug: slug.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
        tagline: tagline || "",
        shortDescription: shortDescription || "",
        fullDescription: fullDescription || "",
        icon: icon || "Zap",
        category: category || "Digital Marketing",
        order: Number(order) || 0,
        featured: Boolean(featured),
        status: status || "PUBLISHED",
        deliverables: typeof deliverables === "string" ? deliverables : JSON.stringify(deliverables || []),
        keyMetrics: typeof keyMetrics === "string" ? keyMetrics : JSON.stringify(keyMetrics || []),
      },
    });

    return NextResponse.json({ success: true, service });
  } catch (error) {
    console.error("Create service error:", error);
    return NextResponse.json(
      { error: "Failed to create service" },
      { status: 500 }
    );
  }
}
