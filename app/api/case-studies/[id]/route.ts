import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const caseStudy = await prisma.caseStudy.findFirst({
      where: {
        OR: [{ id }, { slug: id }],
      },
    });

    if (!caseStudy) {
      return NextResponse.json(
        { error: "Case study not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, caseStudy });
  } catch (error) {
    console.error("Get case study error:", error);
    return NextResponse.json(
      { error: "Failed to fetch case study" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = getUserFromRequest(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await req.json();

    const updated = await prisma.caseStudy.update({
      where: { id },
      data: {
        title: body.title,
        slug: body.slug ? body.slug.toLowerCase().replace(/[^a-z0-9-]/g, "-") : undefined,
        client: body.client,
        industry: body.industry,
        challenge: body.challenge,
        solution: body.solution,
        results: typeof body.results === "string" ? body.results : JSON.stringify(body.results || []),
        tags: body.tags,
        image: body.image,
        featured: body.featured !== undefined ? Boolean(body.featured) : undefined,
        status: body.status,
        order: body.order !== undefined ? Number(body.order) : undefined,
      },
    });

    return NextResponse.json({ success: true, caseStudy: updated });
  } catch (error) {
    console.error("Update case study error:", error);
    return NextResponse.json(
      { error: "Failed to update case study" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = getUserFromRequest(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    await prisma.caseStudy.delete({
      where: { id },
    });
    return NextResponse.json({ success: true, message: "Case study deleted" });
  } catch (error) {
    console.error("Delete case study error:", error);
    return NextResponse.json(
      { error: "Failed to delete case study" },
      { status: 500 }
    );
  }
}
