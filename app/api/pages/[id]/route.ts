import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const page = await prisma.page.findFirst({
      where: {
        OR: [{ id }, { slug: id }],
      },
    });

    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, page });
  } catch (error) {
    console.error("Get page error:", error);
    return NextResponse.json(
      { error: "Failed to fetch page" },
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

    const updated = await prisma.page.update({
      where: { id },
      data: {
        title: body.title,
        slug: body.slug ? body.slug.toLowerCase().replace(/[^a-z0-9-]/g, "-") : undefined,
        heroHeading: body.heroHeading,
        heroSub: body.heroSub,
        metaTitle: body.metaTitle,
        metaDesc: body.metaDesc,
        content: body.content,
        status: body.status,
      },
    });

    return NextResponse.json({ success: true, page: updated });
  } catch (error) {
    console.error("Update page error:", error);
    return NextResponse.json(
      { error: "Failed to update page" },
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
    const page = await prisma.page.findUnique({ where: { id } });
    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    const protectedSlugs = ["home", "about", "contact", "services", "case-studies", "blog"];
    if (protectedSlugs.includes(page.slug)) {
      return NextResponse.json(
        { error: "Core system pages cannot be deleted." },
        { status: 400 }
      );
    }

    await prisma.page.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Page deleted successfully." });
  } catch (error) {
    console.error("Delete page error:", error);
    return NextResponse.json(
      { error: "Failed to delete page" },
      { status: 500 }
    );
  }
}

