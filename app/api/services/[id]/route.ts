import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const service = await prisma.service.findFirst({
      where: {
        OR: [{ id }, { slug: id }],
      },
    });

    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, service });
  } catch (error) {
    console.error("Get service error:", error);
    return NextResponse.json(
      { error: "Failed to fetch service" },
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

    const updated = await prisma.service.update({
      where: { id },
      data: {
        title: body.title,
        slug: body.slug ? body.slug.toLowerCase().replace(/[^a-z0-9-]/g, "-") : undefined,
        tagline: body.tagline,
        shortDescription: body.shortDescription,
        fullDescription: body.fullDescription,
        icon: body.icon,
        category: body.category,
        order: body.order !== undefined ? Number(body.order) : undefined,
        featured: body.featured !== undefined ? Boolean(body.featured) : undefined,
        status: body.status,
        deliverables: typeof body.deliverables === "string" ? body.deliverables : JSON.stringify(body.deliverables || []),
        keyMetrics: typeof body.keyMetrics === "string" ? body.keyMetrics : JSON.stringify(body.keyMetrics || []),
      },
    });

    return NextResponse.json({ success: true, service: updated });
  } catch (error) {
    console.error("Update service error:", error);
    return NextResponse.json(
      { error: "Failed to update service" },
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
    await prisma.service.delete({
      where: { id },
    });
    return NextResponse.json({ success: true, message: "Service deleted" });
  } catch (error) {
    console.error("Delete service error:", error);
    return NextResponse.json(
      { error: "Failed to delete service" },
      { status: 500 }
    );
  }
}
