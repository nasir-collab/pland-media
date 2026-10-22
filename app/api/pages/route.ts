import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET() {
  try {
    const pages = await prisma.page.findMany();
    return NextResponse.json({ success: true, pages });
  } catch (error) {
    console.error("Get pages error:", error);
    return NextResponse.json(
      { error: "Failed to fetch pages" },
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
    const { title, slug, heroHeading, heroSub, metaTitle, metaDesc, content, status } = body;

    const page = await prisma.page.create({
      data: {
        title,
        slug: slug.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
        heroHeading,
        heroSub,
        metaTitle,
        metaDesc,
        content,
        status: status || "PUBLISHED",
      },
    });

    return NextResponse.json({ success: true, page });
  } catch (error) {
    console.error("Create page error:", error);
    return NextResponse.json(
      { error: "Failed to create page" },
      { status: 500 }
    );
  }
}
