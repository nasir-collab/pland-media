import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message, hp } = body;

    // Honeypot spam check
    if (hp) {
      return NextResponse.json({ success: true, message: "Inquiry received" });
    }

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        company: company?.trim() || null,
        service: service?.trim() || "General Consultation",
        budget: budget?.trim() || null,
        message: message?.trim() || "Requesting free campaign and growth audit.",
        status: "NEW",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully. A senior growth strategist will contact you shortly.",
      leadId: lead.id,
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to process lead inquiry" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const user = getUserFromRequest(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error("Get leads error:", error);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
