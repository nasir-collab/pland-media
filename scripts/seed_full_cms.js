const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const allPages = [
  {
    title: "Home",
    slug: "home",
    heroHeading: "WE SHAPE BRANDS THAT DOMINATE SEARCH & REVENUE",
    heroSub: "Are you ready to accelerate commercial pipeline and engineer sustainable market eminence?",
    metaTitle: "Plan D Media | 360° Performance Marketing & Organic SEO Studio",
    metaDesc: "Kolkata's premier performance marketing, SEO, web engineering, and brand strategy agency delivering verified commercial outcomes.",
    status: "PUBLISHED",
    content: JSON.stringify({
      hero: {
        badge: "Growth Engineering",
        primaryCta: "Book Growth Audit",
        secondaryCta: "Call Us: +91 82404 18456",
        image: "/hero-strategy-map.png"
      },
      sections: ["Hero", "SignatureDivider", "ROI Services", "Case Studies", "Manifesto", "Capabilities", "Testimonials", "CTA"]
    })
  },
  {
    title: "About Us",
    slug: "about",
    heroHeading: "A DISCIPLINED COLLECTIVE OF STRATEGISTS & ENGINEERS",
    heroSub: "Rejecting vanity metrics to engineer durable commercial advantage for institutional leaders.",
    metaTitle: "About Plan D Media | Growth Studio Leadership & Group",
    metaDesc: "Learn about LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED, our core philosophies, executive leadership, and partner network.",
    status: "PUBLISHED",
    content: JSON.stringify({
      hero: {
        badge: "Agency Heritage",
        primaryCta: "Schedule Consultation",
        image: "/hero-strategy-map.png"
      }
    })
  },
  {
    title: "Services & Capabilities",
    slug: "services",
    heroHeading: "SYSTEMATIC MARKETING CAPABILITIES ENGINEERED FOR SCALE",
    heroSub: "Comprehensive full-funnel digital infrastructure spanning paid media, technical SEO, and conversion web development.",
    metaTitle: "Solutions & Services | Plan D Media",
    metaDesc: "Explore our integrated digital marketing capabilities: Performance Marketing, SEO, Social Branding, Web Design, and Consulting.",
    status: "PUBLISHED"
  },
  {
    title: "Selected Work & Case Studies",
    slug: "case-studies",
    heroHeading: "VERIFIED COMMERCIAL SCALE & MEASURABLE RETURNS",
    heroSub: "Proven growth trajectories across universities, healthcare groups, manufacturers, and direct-to-consumer leaders.",
    metaTitle: "Case Studies & Client Results | Plan D Media",
    metaDesc: "Explore verified client outcomes, ROAS figures, and acquisition pipelines engineered by Plan D Media.",
    status: "PUBLISHED"
  },
  {
    title: "Insights & Intelligence",
    slug: "blog",
    heroHeading: "THOUGHTS, PERSPECTIVES, AND GROWTH PLAYBOOKS",
    heroSub: "Actionable frameworks on algorithmic customer acquisition, Generative Engine Optimization (GEO), and revenue modeling.",
    metaTitle: "Growth Intelligence & Articles | Plan D Media",
    metaDesc: "Proprietary playbooks and insights for CEOs, CMOs, and growth executives.",
    status: "PUBLISHED"
  },
  {
    title: "Contact Us",
    slug: "contact",
    heroHeading: "LET'S ACCELERATE YOUR GROWTH TRAJECTORY",
    heroSub: "Connect with our growth architects at Ecospace Business Park, New Town, Kolkata.",
    metaTitle: "Contact Plan D Media | Schedule a Growth Consultation",
    metaDesc: "Direct contact, office address, and consultation scheduling for Plan D Media.",
    status: "PUBLISHED"
  },
  {
    title: "Privacy Policy",
    slug: "privacy-policy",
    heroHeading: "DATA GOVERNANCE & PRIVACY STANDARDS",
    heroSub: "Transparent compliance detailing how client data, inquiry records, and user confidentiality are preserved.",
    metaTitle: "Privacy Policy | Plan D Media",
    metaDesc: "Read the privacy policy and data governance practices of Plan D Media.",
    status: "PUBLISHED"
  },
  {
    title: "Terms & Conditions",
    slug: "terms-and-conditions",
    heroHeading: "TERMS OF ENGAGEMENT & COMMERCIAL AGREEMENTS",
    heroSub: "Standard terms and commercial deliverables governing digital marketing engagements.",
    metaTitle: "Terms & Conditions | Plan D Media",
    metaDesc: "Terms of service and commercial guidelines for Plan D Media client partnerships.",
    status: "PUBLISHED"
  },
  // Core Services
  {
    title: "Brand Strategy",
    slug: "brand-strategy",
    heroHeading: "Brand Strategy & Market Positioning",
    heroSub: "Are you having trouble to differentiate your brand in an increasingly commoditized market?",
    metaTitle: "Brand Strategy & Narrative Architecture | Plan D Media",
    metaDesc: "Transform brand positioning, competitive messaging, and customer perception with Plan D Media's brand strategy frameworks.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[01 / 06]",
      tags: ["Brand Positioning", "Visual Identity", "Category Creation", "Customer Architecture", "Market Moats"],
      heroImage: "/hero-strategy-map.png"
    })
  },
  {
    title: "Performance Marketing",
    slug: "performance-marketing",
    heroHeading: "Performance Marketing & Paid Media",
    heroSub: "Are you having trouble to scale customer acquisition without eroding ROAS?",
    metaTitle: "Performance Marketing & Paid Search | Plan D Media",
    metaDesc: "High-precision Google Ads, Meta Ads, and programmatic acquisition designed for positive unit economics and predictable scale.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[02 / 06]",
      tags: ["Google Search & PMax", "Meta Conversion Ads", "ABM & Pipeline", "Algorithmic Bidding", "ROAS Optimization"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-perf-mktg.jpg"
    })
  },
  {
    title: "Organic Marketing",
    slug: "organic-marketing",
    heroHeading: "Organic Marketing & Enterprise SEO",
    heroSub: "Are you having trouble to capture organic search share and establish compounding domain authority?",
    metaTitle: "Organic Marketing & SEO Architecture | Plan D Media",
    metaDesc: "White-hat enterprise SEO, GEO (Generative Engine Optimization), and editorial dominance that turns search into high-intent inbound pipelines.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[03 / 06]",
      tags: ["Technical SEO", "Generative Engine (GEO)", "Domain Authority", "Content Playbooks", "Local High Intent"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-organic.jpg"
    })
  },
  {
    title: "Web Design & Development",
    slug: "web-design-development",
    heroHeading: "Web Design & Conversion Engineering",
    heroSub: "Are you having trouble to convert high-intent traffic into qualified pipeline and revenue?",
    metaTitle: "Web Design & Development | Plan D Media",
    metaDesc: "Custom web applications and high-converting marketing sites engineered with Next.js, sub-second latency, and responsive elegance.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[04 / 06]",
      tags: ["Next.js Architecture", "Sub-Second LCP", "Interactive UX", "CRO Funnels", "Enterprise Security"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-web.jpg"
    })
  },
  {
    title: "Social Media Branding",
    slug: "social-branding",
    heroHeading: "Social Media Branding & Authority",
    heroSub: "Are you having trouble to build genuine community engagement and social authority?",
    metaTitle: "Social Media Branding & Eminence | Plan D Media",
    metaDesc: "Executive LinkedIn ghostwriting, strategic brand narratives, and multi-channel creative campaigns that cultivate loyal brand communities.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[05 / 06]",
      tags: ["Executive LinkedIn", "Social Content Engines", "Brand Narrative", "Community Growth", "Thought Leadership"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-social.jpg"
    })
  },
  {
    title: "Consulting",
    slug: "consulting",
    heroHeading: "Growth Consulting & Commercial Advisory",
    heroSub: "Are you having trouble to diagnose marketing bottlenecks and architect a predictable growth roadmap?",
    metaTitle: "Strategic Digital Consulting | Plan D Media",
    metaDesc: "Senior advisory partnerships with founders, boards, and CMOs to audit tech stacks, optimize attribution, and accelerate expansion.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[06 / 06]",
      tags: ["Fractional CMO", "Attribution Auditing", "Tech Stack Strategy", "CAC Reduction", "Revenue Modeling"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-consulting.jpg"
    })
  },
  // Industry Solutions
  {
    title: "Digital Marketing for Healthcare",
    slug: "digital-marketing-for-healthcare",
    heroHeading: "Digital Marketing for Healthcare & Clinics",
    heroSub: "Are you having trouble to attract high-intent patients while maintaining strict medical compliance?",
    metaTitle: "Digital Marketing for Healthcare & Multi-Specialty Clinics | Plan D Media",
    metaDesc: "NABH-compliant patient acquisition, local Google My Business dominance, and trusted reputation management for hospitals and clinics.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[01 / 07]",
      tags: ["NABH Compliance", "Patient Acquisition", "Local Clinic SEO", "Doctor Eminence", "Appointment Optimization"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-healthcare.jpg"
    })
  },
  {
    title: "Digital Marketing for Manufacturing",
    slug: "digital-marketing-for-manufacturing",
    heroHeading: "Digital Marketing for Manufacturing Companies",
    heroSub: "Are you having trouble to generate qualified RFQs and expand your industrial dealer distribution network?",
    metaTitle: "Digital Marketing for Manufacturing & Industrial B2B | Plan D Media",
    metaDesc: "Industrial B2B search funnels, OEM distributor expansion, and high-value catalog engineering that generate qualified factory RFQs.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[02 / 07]",
      tags: ["Industrial B2B", "Dealer Network Scale", "RFQ Optimization", "Google Search Ads", "Technical Catalogs"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-mfg.jpg"
    })
  },
  {
    title: "Digital Marketing for Education",
    slug: "digital-marketing-for-education",
    heroHeading: "Digital Marketing for Education & Universities",
    heroSub: "Are you having trouble to fill admission batches with qualified students at lower student acquisition costs?",
    metaTitle: "Digital Marketing for Education & Higher Ed Admissions | Plan D Media",
    metaDesc: "Strategic student enrollment funnels, Google Search admission ads, and campus virtual tour campaigns that fill academic seats predictably.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[03 / 07]",
      tags: ["Enrollment Funnels", "Admissions Lead Gen", "Course Landing Pages", "CAC Optimization", "Campus Tours"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-education.jpg"
    })
  },
  {
    title: "Digital Marketing for eCommerce",
    slug: "digital-marketing-for-ecommerce",
    heroHeading: "Digital Marketing for eCommerce & D2C",
    heroSub: "Are you having trouble to scale direct-to-consumer store sales while protecting your contribution margins?",
    metaTitle: "Digital Marketing for eCommerce & D2C Brands | Plan D Media",
    metaDesc: "Full-funnel Google Shopping, Meta Advantage+ catalog ads, and Shopify conversion optimization engineered for sustainable ROAS.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[04 / 07]",
      tags: ["Google Shopping", "Meta Advantage+", "Shopify CRO", "Email Klaviyo Retargeting", "ROAS Scaling"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-ecommerce.jpg"
    })
  },
  {
    title: "Digital Marketing for Real Estate",
    slug: "digital-marketing-for-real-estate",
    heroHeading: "Digital Marketing for Real Estate Developers",
    heroSub: "Are you having trouble to generate high-net-worth site visits and qualified property buyer inquiries?",
    metaTitle: "Digital Marketing for Real Estate & Builders | Plan D Media",
    metaDesc: "Ultra-targeted HNWI campaigns, interactive 3D floor plan landing pages, and verified site visit scheduling for luxury real estate.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[05 / 07]",
      tags: ["HNWI Geo-Targeting", "Verified Site Visits", "Luxury Brochure Funnels", "Meta Lead Ads", "RERA Compliance"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-realestate.jpg"
    })
  },
  {
    title: "Digital Marketing for Coaches",
    slug: "digital-marketing-for-coaches",
    heroHeading: "Digital Marketing for Coaches & Consultants",
    heroSub: "Are you having trouble to enroll high-ticket coaching clients and build scalable webinar funnels?",
    metaTitle: "Digital Marketing for Coaches & Course Creators | Plan D Media",
    metaDesc: "Automated webinar enrollment funnels, personal brand authority, and high-ticket discovery call booking engines for elite coaches.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[06 / 07]",
      tags: ["Webinar Funnels", "High-Ticket VSL", "Discovery Call Booking", "Personal Brand", "Course Scale"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-coaches.jpg"
    })
  },
  {
    title: "Digital Marketing for Legal and Accounting Firms",
    slug: "digital-marketing-for-legal-and-accounting-firms",
    heroHeading: "Digital Marketing for Legal & Accounting Practices",
    heroSub: "Are you having trouble to attract high-retainer corporate clients while staying Bar Council compliant?",
    metaTitle: "Digital Marketing for Law Firms & Chartered Accountants | Plan D Media",
    metaDesc: "Ethical client acquisition, High Court citation SEO, and LinkedIn thought leadership tailored for law firms and tax consultancies.",
    status: "PUBLISHED",
    content: JSON.stringify({
      tagNumber: "[07 / 07]",
      tags: ["Practice Area SEO", "Ethical Compliance", "Corporate Retainers", "LinkedIn Leadership", "High Court Citations"],
      heroImage: "/hero-strategy-map.png",
      altHeroImage: "/heroes/hero-legal.jpg"
    })
  }
];

const mediaAssets = [
  { name: "Brand Identity Logo", url: "/logo.png", mimeType: "image/png", altText: "Plan D Media Official Logo" },
  { name: "Hero Strategy Map Flatlay", url: "/hero-strategy-map.png", mimeType: "image/png", altText: "Blueprint Desk Flatlay with Growth Strategy Map" },
  { name: "Performance Marketing Studio", url: "/heroes/hero-perf-mktg.jpg", mimeType: "image/jpeg", altText: "High Precision Performance Marketing Analytics Operations" },
  { name: "Organic Marketing & SEO Workspace", url: "/heroes/hero-organic.jpg", mimeType: "image/jpeg", altText: "Organic Search & Technical SEO Architecture Team" },
  { name: "Web Design & Engineering Suite", url: "/heroes/hero-web.jpg", mimeType: "image/jpeg", altText: "Modern Web Engineering & Responsive UI/UX Designers" },
  { name: "Social Branding & Creative Studio", url: "/heroes/hero-social.jpg", mimeType: "image/jpeg", altText: "Social Media Creative Direction & Content Production" },
  { name: "Executive Growth Advisory", url: "/heroes/hero-consulting.jpg", mimeType: "image/jpeg", altText: "Senior Digital Growth Consultants & Boardroom Strategy" },
  { name: "Healthcare & Clinical Excellence", url: "/heroes/hero-healthcare.jpg", mimeType: "image/jpeg", altText: "Modern Hospital Diagnostic Center & Clinical Doctors" },
  { name: "Manufacturing & Industrial Robotics", url: "/heroes/hero-mfg.jpg", mimeType: "image/jpeg", altText: "Advanced Industrial Automation & Manufacturing Facility" },
  { name: "Education & University Campus", url: "/heroes/hero-education.jpg", mimeType: "image/jpeg", altText: "Modern University Campus Library & Students Collaborating" },
  { name: "eCommerce Fulfillment Logistics", url: "/heroes/hero-ecommerce.jpg", mimeType: "image/jpeg", altText: "High-Speed eCommerce Warehouse & D2C Logistics Center" },
  { name: "Luxury Real Estate Architectural High-Rise", url: "/heroes/hero-realestate.jpg", mimeType: "image/jpeg", altText: "Contemporary Luxury High-Rise Penthouse Architecture" },
  { name: "Executive Coaching & Masterclass", url: "/heroes/hero-coaches.jpg", mimeType: "image/jpeg", altText: "Executive Keynote Leadership Coach Speaking to Audience" },
  { name: "Legal Counsel & Accounting Advisory", url: "/heroes/hero-legal.jpg", mimeType: "image/jpeg", altText: "Corporate Law Firm Partner & Statutory Accounting Advisors" }
];

async function run() {
  console.log("Seeding all website pages into CMS...");
  for (const p of allPages) {
    await prisma.page.upsert({
      where: { slug: p.slug },
      update: {
        title: p.title,
        heroHeading: p.heroHeading,
        heroSub: p.heroSub,
        metaTitle: p.metaTitle,
        metaDesc: p.metaDesc,
        content: p.content,
        status: p.status
      },
      create: p
    });
    console.log(`✓ Seeded Page: ${p.title} (${p.slug})`);
  }

  console.log("\nPopulating Media Library catalog with real assets...");
  for (const m of mediaAssets) {
    const existing = await prisma.media.findFirst({ where: { url: m.url } });
    let size = 150000;
    try {
      const fullPath = path.join(process.cwd(), 'public', m.url.replace(/^\//, ''));
      if (fs.existsSync(fullPath)) {
        size = fs.statSync(fullPath).size;
      }
    } catch {}

    if (existing) {
      await prisma.media.update({
        where: { id: existing.id },
        data: { name: m.name, altText: m.altText, size }
      });
    } else {
      await prisma.media.create({
        data: {
          name: m.name,
          url: m.url,
          mimeType: m.mimeType,
          size,
          altText: m.altText
        }
      });
    }
    console.log(`✓ Cataloged Media: ${m.name} -> ${m.url} (${(size/1024).toFixed(1)} KB)`);
  }

  console.log("\nAll 20+ pages and media assets successfully seeded into CMS.");
  process.exit(0);
}

run().catch(err => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
