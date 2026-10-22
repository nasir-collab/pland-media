import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const user = getUserFromRequest(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Page ID is required" }, { status: 400 });
    }

    const sourcePage = await prisma.page.findUnique({ where: { id } });
    if (!sourcePage) {
      return NextResponse.json({ error: "Source page not found" }, { status: 404 });
    }

    const timestamp = Date.now().toString().slice(-4);
    const newSlug = `${sourcePage.slug}-copy-${timestamp}`;
    const newTitle = `${sourcePage.title} (Clone)`;

    const clonedPage = await prisma.page.create({
      data: {
        title: newTitle,
        slug: newSlug,
        heroHeading: sourcePage.heroHeading,
        heroSub: sourcePage.heroSub,
        metaTitle: sourcePage.metaTitle ? `${sourcePage.metaTitle} (Copy)` : undefined,
        metaDesc: sourcePage.metaDesc,
        content: sourcePage.content,
        status: "DRAFT", // always clone as DRAFT
      },
    });

    return NextResponse.json({ success: true, page: clonedPage });
  } catch (error) {
    console.error("Clone page error:", error);
    return NextResponse.json(
      { error: "Failed to clone page" },
      { status: 500 }
    );
  }
}
