import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";
import fs from "fs/promises";
import path from "path";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const media = await prisma.media.findUnique({ where: { id } });
    if (!media) {
      return NextResponse.json({ error: "Media not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, media });
  } catch (error) {
    console.error("Get media error:", error);
    return NextResponse.json({ error: "Failed to fetch media" }, { status: 500 });
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
    const contentType = req.headers.get("content-type") || "";

    const existing = await prisma.media.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Media not found" }, { status: 404 });
    }

    if (contentType.includes("multipart/form-data")) {
      // Asset Replacement flow
      const formData = await req.formData();
      const file = formData.get("file") as File | null;
      const name = formData.get("name") as string | null;
      const altText = formData.get("altText") as string | null;

      let publicUrl = existing.url;
      let size = existing.size;
      let mimeType = existing.mimeType;

      if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadsDir = path.join(process.cwd(), "public", "uploads");
        await fs.mkdir(uploadsDir, { recursive: true });

        const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
        const filePath = path.join(uploadsDir, safeName);
        await fs.writeFile(filePath, buffer);

        // Delete old uploaded file if it was in /uploads/
        if (existing.url.startsWith("/uploads/")) {
          try {
            await fs.unlink(path.join(process.cwd(), "public", existing.url));
          } catch {}
        }

        publicUrl = `/uploads/${safeName}`;
        size = file.size;
        mimeType = file.type || "application/octet-stream";
      }

      const updated = await prisma.media.update({
        where: { id },
        data: {
          name: name || existing.name,
          altText: altText !== null ? altText : existing.altText,
          url: publicUrl,
          size,
          mimeType,
        },
      });

      return NextResponse.json({ success: true, media: updated });
    } else {
      // JSON Metadata update
      const body = await req.json();
      const updated = await prisma.media.update({
        where: { id },
        data: {
          name: body.name || undefined,
          altText: body.altText !== undefined ? body.altText : undefined,
        },
      });

      return NextResponse.json({ success: true, media: updated });
    }
  } catch (error) {
    console.error("Update media error:", error);
    return NextResponse.json({ error: "Failed to update media" }, { status: 500 });
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
    const media = await prisma.media.findUnique({ where: { id } });
    if (!media) {
      return NextResponse.json({ error: "Media not found" }, { status: 404 });
    }

    if (media.url.startsWith("/uploads/")) {
      try {
        await fs.unlink(path.join(process.cwd(), "public", media.url));
      } catch {}
    }

    await prisma.media.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Asset deleted" });
  } catch (error) {
    console.error("Delete media error:", error);
    return NextResponse.json({ error: "Failed to delete media" }, { status: 500 });
  }
}
