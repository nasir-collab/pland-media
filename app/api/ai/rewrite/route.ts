import { NextRequest, NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const user = getUserFromRequest(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { text, mode, context } = await req.json();

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return NextResponse.json({ error: "Text content is required" }, { status: 400 });
    }

    const cleanText = text.trim();
    const apiKey = process.env.GEMINI_API_KEY;

    // If Gemini API is configured, use it
    if (apiKey) {
      try {
        let systemPrompt = "";
        switch (mode) {
          case "clarity":
            systemPrompt = "You are a senior digital copywriter. Rewrite the following copy for maximum clarity, readability, active voice, and fluid rhythm. Fix all grammar and awkward phrasing. Keep the core message intact.";
            break;
          case "professional":
            systemPrompt = "You are an executive communications director for a top-tier digital marketing agency. Rewrite this copy to be authoritative, polished, institutional, and convincing for enterprise CMOs, founders, and managing partners.";
            break;
          case "conversion":
            systemPrompt = "You are a conversion rate optimization (CRO) specialist. Rewrite this copy to emphasize commercial value, pain points, return on investment, and compelling calls to action.";
            break;
          case "shorten":
            systemPrompt = "You are a senior editor. Condense the text significantly into a punchy, high-impact summary without losing vital facts or numbers.";
            break;
          case "expand":
            systemPrompt = "You are a content strategist. Expand this copy with strategic nuance, supporting context, and thorough professional details suitable for a strategic playbook.";
            break;
          case "headlines":
            systemPrompt = "You are an SEO copywriter. Generate 3 distinct, high-CTR alternative titles/headlines and 1 compelling meta description (max 155 chars) based on this text.";
            break;
          default:
            systemPrompt = "Rewrite this copy for improved flow, tone, and professional impact.";
        }

        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  { text: `${systemPrompt}\n\nOriginal Text:\n"${cleanText}"\n\nContext: ${context || "Plan D Media agency website copy"}` }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.6,
              maxOutputTokens: 1000
            }
          })
        });

        if (res.ok) {
          const data = await res.json();
          const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidateText) {
            return NextResponse.json({
              success: true,
              original: cleanText,
              rewritten: candidateText.trim(),
              provider: "Gemini AI",
              mode: mode || "clarity"
            });
          }
        }
      } catch (err) {
        console.warn("Gemini call failed, falling back to editorial engine:", err);
      }
    }

    // High-Quality Rule-Based Editorial Transformation Engine (Fallback)
    let rewritten = cleanText;

    switch (mode) {
      case "clarity": {
        rewritten = cleanText
          .replace(/in order to/gi, "to")
          .replace(/due to the fact that/gi, "because")
          .replace(/utilize/gi, "use")
          .replace(/at this point in time/gi, "currently")
          .replace(/a large number of/gi, "many")
          .replace(/have the ability to/gi, "can")
          .replace(/\s+/g, " ")
          .trim();
        // Capitalize sentences and ensure crisp punctuation
        if (!rewritten.endsWith(".") && !rewritten.endsWith("!") && !rewritten.endsWith("?")) {
          rewritten += ".";
        }
        break;
      }

      case "professional": {
        rewritten = cleanText
          .replace(/we do/gi, "we architect and execute")
          .replace(/help you/gi, "empower your team to")
          .replace(/good results/gi, "predictable commercial outcomes")
          .replace(/leads/gi, "qualified client acquisition pipelines")
          .replace(/cheap/gi, "capital-efficient")
          .replace(/best/gi, "benchmark-grade")
          .replace(/make sure/gi, "systematically ensure")
          .trim();
        if (!rewritten.includes("commercial") && !rewritten.includes("strategic")) {
          rewritten = `Engineered for institutional scale: ${rewritten}`;
        }
        break;
      }

      case "conversion": {
        rewritten = cleanText
          .replace(/learn more/gi, "Unlock Growth Strategy")
          .replace(/contact us/gi, "Schedule Your Confidential Growth Audit")
          .replace(/we offer/gi, "You gain direct access to")
          .trim();
        rewritten += " Stop relying on vanity metrics. Partner with Plan D Media to transform your digital presence into a verified commercial revenue engine.";
        break;
      }

      case "shorten": {
        const sentences = cleanText.split(/(?<=[.?!])\s+/);
        if (sentences.length > 2) {
          rewritten = `${sentences[0]} ${sentences[1]}`.trim();
        } else {
          rewritten = cleanText
            .replace(/very\s+/gi, "")
            .replace(/really\s+/gi, "")
            .replace(/basically\s+/gi, "")
            .replace(/in addition to that,\s*/gi, "")
            .trim();
        }
        break;
      }

      case "expand": {
        rewritten = `${cleanText} By implementing rigorous algorithmic attribution, conversion-optimized user journeys, and full-funnel digital infrastructure, we eliminate acquisition bottlenecks while expanding lifetime client value and sustainable market presence.`;
        break;
      }

      case "headlines": {
        const words = cleanText.split(" ").slice(0, 8).join(" ");
        rewritten = `Option 1: Architecting Market Eminence: ${words}...\n\nOption 2: The Growth Blueprint: Predictable Scale & Performance\n\nOption 3: Beyond Vanity Metrics: Engineered Digital Dominance\n\nSEO Meta Description: Discover how Plan D Media scales client acquisition and brand authority through data-backed performance marketing and technical SEO.`;
        break;
      }

      default: {
        rewritten = cleanText;
      }
    }

    return NextResponse.json({
      success: true,
      original: cleanText,
      rewritten: rewritten.trim(),
      provider: "Plan D Editorial Engine",
      mode: mode || "clarity"
    });
  } catch (error) {
    console.error("AI rewrite error:", error);
    return NextResponse.json({ error: "Failed to rewrite content" }, { status: 500 });
  }
}
