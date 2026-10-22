import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seed...");

  // 1. Admin User
  const hashedPassword = await bcrypt.hash("Admin@PlanD2025!", 10);
  await prisma.user.upsert({
    where: { email: "admin@pland.in" },
    update: {
      password: hashedPassword,
      name: "Plan D Executive Admin",
      role: "ADMIN",
    },
    create: {
      email: "admin@pland.in",
      password: hashedPassword,
      name: "Plan D Executive Admin",
      role: "ADMIN",
    },
  });
  console.log("Seeded Superadmin: admin@pland.in / Admin@PlanD2025!");

  // 2. Global Settings
  const settings = [
    { key: "site_name", value: "Plan D Media" },
    { key: "legal_name", value: "LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED" },
    { key: "site_tagline", value: "AI-First Performance Marketing & Growth Studio" },
    { key: "phone", value: "+91 82404 18456" },
    { key: "email", value: "contact@pland.in" },
    {
      key: "address",
      value: "Ecospace Business Park, Premises No. 701, Action Area II, New Town, Kolkata, West Bengal 700160, India",
    },
    { key: "working_hours", value: "Mon - Sat: 10:00 AM - 7:00 PM IST" },
    { key: "linkedin_url", value: "https://www.linkedin.com/company/plandmedia" },
    { key: "instagram_url", value: "https://www.instagram.com/plandmedia" },
    { key: "facebook_url", value: "https://www.facebook.com/plandmedia" },
    { key: "twitter_url", value: "https://twitter.com/plandmedia" },
    { key: "header_cta_text", value: "Book Growth Audit" },
    { key: "header_cta_url", value: "/contact" },
    {
      key: "hero_announcement",
      value: "✦ Engineered for Exponential Growth: Performance Marketing Powered by AI & High-Precision Tech",
    },
    {
      key: "manifesto_heading",
      value: "We Reject Vanity Metrics. We Build Predictable Revenue Engines.",
    },
  ];

  for (const s of settings) {
    await prisma.globalSetting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: { key: s.key, value: s.value },
    });
  }
  console.log("Seeded Global Settings.");

  // 3. Services
  const servicesData = [
    {
      title: "Performance Marketing & Paid Ads",
      slug: "performance-marketing",
      tagline: "High-precision Google, Meta, and programmatic campaigns engineered to drive verified revenue and high-intent leads.",
      shortDescription:
        "Data-driven paid media execution combining algorithmic audience targeting, creative testing at scale, and real-time attribution modeling to drastically cut customer acquisition costs.",
      fullDescription: `Plan D Media engineers end-to-end paid acquisition machines. Unlike traditional agencies that focus on impressions and generic traffic, our performance marketing framework is anchored in qualified pipeline generation and quantifiable ROAS.

We architect full-funnel paid strategies across Google Search, Performance Max, YouTube, Meta (Instagram & Facebook), and LinkedIn B2B networks. Our in-house data team sets up server-side conversion tracking (GTM Server-side, Meta CAPI, and Offline Conversion Imports) so algorithms receive pristine conversion data, unlocking cheaper bids and exponential scale.`,
      icon: "Zap",
      category: "Paid Acquisition",
      order: 1,
      featured: true,
      status: "PUBLISHED",
      deliverables: JSON.stringify([
        "Google Ads & Precision Search Marketing",
        "Meta Ads (Instagram & Facebook) Full-Funnel Architecture",
        "LinkedIn B2B Account-Based Marketing (ABM)",
        "Programmatic Display & Multi-Channel Retargeting",
        "Conversion Rate Optimization (CRO) & Heatmap Diagnostics",
        "Server-Side Tracking (GTM Server, Meta CAPI, Google Ads OCI)",
        "Automated Live ROAS & Pipeline Reporting Dashboards",
      ]),
      keyMetrics: JSON.stringify([
        { label: "Avg ROAS Delivered", value: "4.8x" },
        { label: "CPA Reduction", value: "-42%" },
        { label: "Ad Spend Managed", value: "₹120M+" },
      ]),
    },
    {
      title: "Enterprise SEO & Organic Growth",
      slug: "enterprise-seo",
      tagline: "Dominate search engine landscapes with technical architecture, semantic entity clustering, and AI search readiness.",
      shortDescription:
        "Comprehensive technical audits, Core Web Vitals acceleration, topic cluster authority, and Generative Engine Optimization (GEO) that yield durable, compounding organic customer pipelines.",
      fullDescription: `Search is experiencing its greatest paradigm shift in two decades. Plan D Media prepares and scales your brand for both traditional Google search rankings and emerging AI answer engines (ChatGPT, Google AI Overviews, Perplexity).

Our organic growth team audits server-side code, builds deep programmatic topic clusters, enhances internal link architecture, and earns high-tier editorial mentions. We turn your website into the definitive entity and authoritative source in your vertical.`,
      icon: "Search",
      category: "Organic Growth",
      order: 2,
      featured: true,
      status: "PUBLISHED",
      deliverables: JSON.stringify([
        "Deep Technical SEO & JavaScript Crawlability Audits",
        "Semantic Entity Modeling & Topic Cluster Architecture",
        "Generative Engine Optimization (GEO / AI Overviews)",
        "Core Web Vitals & PageSpeed Performance Engineering",
        "High-Authority Digital PR & Natural Backlink Acquisition",
        "Local Search & Google Business Profile Domination",
        "Competitor Gap Analysis & Reverse Keyword Engineering",
      ]),
      keyMetrics: JSON.stringify([
        { label: "Avg Organic Traffic Lift", value: "+280%" },
        { label: "Page 1 Keyword Rankings", value: "15,000+" },
        { label: "Avg Indexing Velocity", value: "<24h" },
      ]),
    },
    {
      title: "Conversion Infrastructure & Web Engineering",
      slug: "web-engineering",
      tagline: "Ultra-fast Next.js web applications, headless architectures, and hyper-converting landing page systems.",
      shortDescription:
        "Modern web platforms built with React and Next.js, tailored for sub-second page loads, flawless mobile ergonomics, and direct CRM/API telemetry.",
      fullDescription: `A high-performing marketing campaign cannot succeed with a slow, clunky website. Plan D Media bridges the critical divide between digital marketing and advanced software engineering.

We build modern, headless web platforms, custom conversion funnels, and lightning-fast landing pages using React, Next.js, and clean API integrations. Every pixel is crafted for conversion psychology, and every line of code is optimized for Core Web Vitals and zero layout shift.`,
      icon: "Code",
      category: "Technology",
      order: 3,
      featured: true,
      status: "PUBLISHED",
      deliverables: JSON.stringify([
        "Custom React & Next.js Headless Web Applications",
        "High-Velocity Landing Page Generation Systems",
        "CRM & Marketing Automation Sync (HubSpot, Salesforce, Zoho)",
        "Custom Event Telemetry & Behavioral Analytics Tracking",
        "Interactive Quotation Calculators & Lead Qualification Modals",
        "Sub-Second Core Web Vitals & 99+ Lighthouse Optimization",
      ]),
      keyMetrics: JSON.stringify([
        { label: "Lighthouse Performance", value: "99/100" },
        { label: "Avg Landing Page CVR", value: "14.2%" },
        { label: "Bounce Rate Reduction", value: "-35%" },
      ]),
    },
    {
      title: "Social Branding & Creative Studio",
      slug: "social-branding",
      tagline: "Transform brand perception into revenue with thumb-stopping creative production and narrative positioning.",
      shortDescription:
        "Strategic creative direction, motion graphics, high-converting video ad creatives, and multi-channel brand positioning that command market authority.",
      fullDescription: `In a saturated digital feed, creative is the new targeting. Plan D Media produces compelling creative assets designed to stop the scroll, educate prospects, and drive immediate action.

Our studio handles scriptwriting, video editing, motion graphics, 3D product visualisations, and social narrative design. We continuously test variations in hooks, visual pacing, and calls-to-action to feed algorithmic ad networks with winning creative assets.`,
      icon: "Share2",
      category: "Brand Strategy",
      order: 4,
      featured: true,
      status: "PUBLISHED",
      deliverables: JSON.stringify([
        "High-Impact Direct-Response Video Ad Production",
        "Motion Graphics & Dynamic Social Content",
        "Multi-Platform Social Media Narrative & Channel Management",
        "Influencer & Creator Campaign Orchestration",
        "Ad Creative Hook & Angle Matrix Testing",
        "Brand Identity, Typography & Visual Design Guidelines",
      ]),
      keyMetrics: JSON.stringify([
        { label: "Organic Social Impressions", value: "25M+" },
        { label: "Ad Creative Avg CTR", value: "3.8%" },
        { label: "Brand Recall Increase", value: "+65%" },
      ]),
    },
    {
      title: "AI Growth Systems & Sales Funnel Engineering",
      slug: "ai-growth-systems",
      tagline: "End-to-end automated pipelines that turn raw clicks into qualified enterprise sales appointments.",
      shortDescription:
        "AI-driven lead scoring, instant WhatsApp auto-qualification, automated calendar booking, and CRM synchronization that accelerates sales velocity.",
      fullDescription: `Speed-to-lead defines conversion rates. If an inbound lead isn't contacted within 5 minutes, qualification drops by 80%. Plan D Media implements automated AI sales workflows that instantly engage, qualify, and book consultations with incoming prospects.

We integrate conversational AI bots with your CRM, WhatsApp Business API, and sales calendars, providing your business with a 24/7 revenue acquisition engine.`,
      icon: "Cpu",
      category: "Growth Infrastructure",
      order: 5,
      featured: false,
      status: "PUBLISHED",
      deliverables: JSON.stringify([
        "Instant Conversational WhatsApp Qualification Systems",
        "Automated Multi-Touch Email & SMS Nurture Sequences",
        "Predictive Lead Scoring & Routing Algorithms",
        "Dynamic Website Personalization based on User Intent",
        "Real-Time Sales Rep Calendar Booking Integrations",
        "Automated Lead Attribution & Pipeline Velocity Dashboards",
      ]),
      keyMetrics: JSON.stringify([
        { label: "Sales Cycle Compression", value: "45%" },
        { label: "Lead-to-Meeting Rate", value: "32%" },
        { label: "Pipeline Velocity", value: "+3.4x" },
      ]),
    },
  ];

  for (const s of servicesData) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    });
  }
  console.log("Seeded Services.");

  // 4. Case Studies
  const caseStudiesData = [
    {
      title: "Scaling University Admissions with Algorithmic PPC & Conversational Bots",
      slug: "centurion-university",
      client: "Centurion University of Technology and Management",
      industry: "Higher Education",
      challenge:
        "Centurion University faced skyrocketing student acquisition costs and low qualification rates from conventional print and generic display campaigns across eastern India.",
      solution:
        "Plan D Media architected course-specific Google Search campaigns, conversational WhatsApp qualification bots, and localized regional video ad funnels with instant counseling sync.",
      results: JSON.stringify([
        { metric: "Student Enquiries", value: "+410%", detail: "Quadrupled high-intent undergraduate & postgraduate applications" },
        { metric: "Cost Per Lead", value: "-54%", detail: "Cut cost-per-qualified-applicant in half" },
        { metric: "Admissions Converted", value: "2,400+", detail: "Directly attributed seat enrollments" },
      ]),
      tags: "Performance Marketing, Higher Education, PPC, WhatsApp Automation",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
      featured: true,
      order: 1,
      status: "PUBLISHED",
    },
    {
      title: "Dominating Eastern India TMT Steel Dealer Inquiries via B2B Search",
      slug: "srmb-steel",
      client: "SRMB Srijan Private Limited",
      industry: "Manufacturing & Infrastructure",
      challenge:
        "A legacy manufacturing leader needed to modernize its digital footprint, build distributor pipelines, and drive direct retail dealer and contractor inquiries.",
      solution:
        "Engineered geo-targeted search campaigns for structural engineers, contractors, and home builders, complemented by technical SEO targeting industrial steel specifications.",
      results: JSON.stringify([
        { metric: "B2B Dealer Inquiries", value: "+320%", detail: "Verified dealer application submissions" },
        { metric: "Keyword Dominance", value: "#1 Rank", detail: "Ranked #1 for primary TMT bar keywords in Eastern India" },
        { metric: "Retail Footprint Growth", value: "+18%", detail: "Regional distributor expansion" },
      ]),
      tags: "B2B SEO, Manufacturing, Lead Generation, Search Marketing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
      featured: true,
      order: 2,
      status: "PUBLISHED",
    },
    {
      title: "Predictable Patient Acquisition for Premium Aesthetic Medicine",
      slug: "la-derma-clinic",
      client: "La Derma Aesthetics & Hair Clinic",
      industry: "Healthcare & Aesthetics",
      challenge:
        "Needed high-trust patient acquisition for premium cosmetic dermatology and hair restoration procedures in a hyper-competitive metropolitan market.",
      solution:
        "Developed high-converting doctor consultation landing pages, local Google Map Pack SEO dominance, and Meta video ads highlighting clinical expertise.",
      results: JSON.stringify([
        { metric: "Monthly Consultations", value: "350+", detail: "Booked clinical appointments" },
        { metric: "ROAS on Procedures", value: "6.2x", detail: "Return on ad spend across aesthetic treatments" },
        { metric: "Google Review Growth", value: "4.9★", detail: "500+ verified positive patient reviews" },
      ]),
      tags: "Healthcare, Local SEO, Meta Ads, Appointment Booking",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
      featured: true,
      order: 3,
      status: "PUBLISHED",
    },
    {
      title: "Nationwide Campus Awareness & Research Enrollment Acceleration",
      slug: "iem-kolkata",
      client: "Institute of Engineering & Management (IEM)",
      industry: "Higher Education & Research",
      challenge:
        "Streamlining nationwide awareness for premier engineering, management programs, and autonomous research admissions.",
      solution:
        "Full-funnel digital strategy spanning national search capture, YouTube programmatic awareness, and real-time CRM lead scoring.",
      results: JSON.stringify([
        { metric: "Application Volume", value: "+260%", detail: "Year-over-year application growth" },
        { metric: "National Footprint", value: "18 States", detail: "Expanded student enrollment beyond home state" },
        { metric: "Conversion Speed", value: "2.1x", detail: "Faster lead-to-counseling turnaround" },
      ]),
      tags: "Nationwide Growth, Educational Marketing, Google Ads, Brand Awareness",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
      featured: false,
      order: 4,
      status: "PUBLISHED",
    },
  ];

  for (const cs of caseStudiesData) {
    await prisma.caseStudy.upsert({
      where: { slug: cs.slug },
      update: cs,
      create: cs,
    });
  }
  console.log("Seeded Case Studies.");

  // 5. Blog Posts
  const postsData = [
    {
      title: "The 2025 AI Search Shift: How GEO and LLM-Engine Optimization Are Replacing Traditional SEO",
      slug: "ai-search-shift-geo-2025",
      excerpt:
        "Search behavior is fundamentally changing with Google AI Overviews and ChatGPT Search. Learn how forward brands optimize for LLM citation algorithms.",
      content: `Search behavior is experiencing the most profound evolution since the inception of Google's PageRank. Millions of high-intent searches now terminate within AI-generated answer summaries without users clicking traditional blue links.

For modern marketing leaders, this is not an existential threat—it is an unprecedented strategic advantage for those who adapt.

### What is Generative Engine Optimization (GEO)?
Unlike legacy SEO which focused on keyword density and backlink quantities, Generative Engine Optimization concentrates on:
1. **Information Gain**: Providing proprietary primary research, case statistics, and un-synthesizable real-world proof.
2. **Entity Clarity**: Structuring schema markup so knowledge graphs directly associate your brand with definitive solutions.
3. **Citations & Quotability**: Writing authoritative, succinct factual claims that LLM retrieval mechanisms readily cite.

At Plan D Media, we combine technical Core Web Vitals acceleration with semantic entity modeling to ensure our clients appear prominently in both legacy search indexes and emerging AI search synthesizers.`,
      coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      category: "Search Strategy",
      authorName: "Plan D Strategy Team",
      readTime: "6 min read",
      tags: "SEO, AI Search, GEO, Digital Strategy",
      status: "PUBLISHED",
    },
    {
      title: "Why Restricting Our Client Roster to 15 Brands Outperforms Scaling to 100",
      slug: "restricted-client-philosophy",
      excerpt:
        "The traditional agency model prioritizes account volume over client outcomes. Here is why Plan D Media caps its roster to guarantee senior-level execution.",
      content: `The traditional digital agency business model is structurally flawed: agencies pitch with their senior partners, and the moment a contract is signed, the account is handed off to junior coordinators balancing twenty clients simultaneously.

The outcome? Cookie-cutter playbooks, stagnant ad fatigue, and surface-level monthly reports that hide deteriorating ROAS.

### The Plan D Media Restricted-Client Protocol
When we founded Plan D Media in Kolkata, we committed to a different operating paradigm:
- **Maximum 15 Active Enterprise Clients**: Every campaign is directly planned, optimized, and reviewed by senior growth architects.
- **Weekly Strategic War Rooms**: We operate as an integrated growth department with your executive team, not an outsourced ticket-taker.
- **Shared Accountability**: Our incentives are tied to tangible revenue expansion, lead quality, and verified margin improvement.

This singular focus explains why our client retention rate remains above 98% across multi-year partnerships.`,
      coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      category: "Agency Insights",
      authorName: "Nasir / Plan D Leadership",
      readTime: "4 min read",
      tags: "Agency Model, Performance Marketing, Strategy",
      status: "PUBLISHED",
    },
    {
      title: "Building a Sub-Second Next.js Marketing Funnel That Converts at 14%",
      slug: "subsecond-nextjs-funnel",
      excerpt:
        "How replacing bloated WordPress templates with custom React/Next.js architectures slashed bounce rates and tripled form completions.",
      content: `Every 100 milliseconds of latency on a landing page reduces conversion rates by up to 7%. Yet, the vast majority of performance marketing dollars are pointed toward sluggish page builders loaded with thirty unminified scripts.

### The Anatomy of Our High-Speed Tech Stack
To maximize ad spend efficiency, Plan D Media engineers bespoke conversion funnels using Next.js App Router:
- **Zero Layout Shift (CLS < 0.01)**: Instant rendering of hero content and CTAs.
- **Server-Side API Telemetry**: Direct server calls to Meta Conversion API and Google Enhanced Conversions, bypassing ad-blocker drop-offs.
- **Dynamic Intent Ingestion**: Adapting headlines and social proof based on the visitor's UTM query parameters in real time.

The result is a friction-free experience where prospects convert before second-guessing their choice.`,
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      category: "Web Engineering",
      authorName: "Plan D Engineering",
      readTime: "5 min read",
      tags: "Next.js, Web Development, CRO, Performance",
      status: "PUBLISHED",
    },
  ];

  for (const post of postsData) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }
  console.log("Seeded Blog Posts.");

  // 6. Pages
  const pagesData = [
    {
      title: "Home",
      slug: "home",
      heroHeading: "ENGINEERING EXPONENTIAL DIGITAL GROWTH FOR FORWARD BRANDS",
      heroSub:
        "Plan D Media is an AI-first performance marketing, organic growth, and conversion technology agency. We turn digital presence into predictable, high-margin revenue.",
      metaTitle: "Plan D Media | AI-First Performance Marketing & Growth Agency",
      metaDesc:
        "Plan D Media delivers measurable growth, qualified leads, and scalable revenue through high-precision performance marketing, SEO, and custom web engineering.",
      status: "PUBLISHED",
    },
    {
      title: "About Us",
      slug: "about",
      heroHeading: "A BOUTIQUE GROWTH STUDIO ROOTED IN DATA, NOT SPECULATION",
      heroSub:
        "Founded in Kolkata to deliver institutional-grade digital performance without legacy agency bloat. We partner with ambitious leaders across education, manufacturing, healthcare, and tech.",
      metaTitle: "About Plan D Media | Growth-Focused Marketing & Tech Partner",
      metaDesc:
        "Discover Plan D Media's restricted-client philosophy, senior-led execution team, and data-driven approach to predictable business expansion.",
      status: "PUBLISHED",
    },
    {
      title: "Services",
      slug: "services",
      heroHeading: "COMPREHENSIVE DIGITAL GROWTH ARCHITECTURE",
      heroSub:
        "From high-ROAS paid acquisition to modern technical SEO and custom Next.js web platforms, explore our full spectrum of specialized growth capabilities.",
      metaTitle: "Growth Services | Performance Marketing, SEO & Tech | Plan D Media",
      metaDesc:
        "Explore Plan D Media's specialized services: Paid Ads (Google & Meta), Enterprise SEO, Conversion Web Engineering, Social Branding, and AI Lead Systems.",
      status: "PUBLISHED",
    },
    {
      title: "Case Studies",
      slug: "case-studies",
      heroHeading: "PROVEN OUTCOMES. VERIFIED REVENUE. REAL SCALE.",
      heroSub:
        "Explore how Plan D Media partners with market leaders across education, manufacturing, healthcare, and commerce to build predictable customer acquisition engines.",
      metaTitle: "Client Case Studies & Verified Results | Plan D Media",
      metaDesc:
        "Review real case studies from Centurion University, SRMB Steel, La Derma Aesthetics, and IEM Kolkata showing massive lead volume and ROAS growth.",
      status: "PUBLISHED",
    },
    {
      title: "Insights & Blog",
      slug: "blog",
      heroHeading: "STRATEGIC PLAYBOOKS FOR THE MODERN GROWTH LEADER",
      heroSub:
        "Deep dives into algorithmic marketing, AI search optimization (GEO), conversion engineering, and full-funnel sales mechanics.",
      metaTitle: "Insights & Marketing Intelligence | Plan D Media Blog",
      metaDesc:
        "Actionable growth insights, performance marketing guides, SEO strategies, and digital technology breakdowns from Plan D Media.",
      status: "PUBLISHED",
    },
    {
      title: "Contact Us",
      slug: "contact",
      heroHeading: "LET'S ACCELERATE YOUR GROWTH TRAJECTORY",
      heroSub:
        "Ready to transform your digital customer acquisition? Request a confidential growth audit and discover how Plan D Media can engineer measurable expansion.",
      metaTitle: "Contact Plan D Media | Schedule a Growth Consultation",
      metaDesc:
        "Connect with Plan D Media at Ecospace Business Park, New Town, Kolkata. Book a free consultation and campaign audit with our senior growth architects.",
      status: "PUBLISHED",
    },
  ];

  for (const p of pagesData) {
    await prisma.page.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }
  console.log("Seeded Pages.");

  // 7. Initial Sample Enquiries
  const sampleLeads = [
    {
      name: "Debashis Mukherjee",
      email: "debashis.m@technoinfra.in",
      phone: "+91 98301 23456",
      company: "Techno Infra Solutions",
      service: "Performance Marketing & Paid Ads",
      budget: "₹2,00,000 - ₹5,00,000 / month",
      message:
        "We are looking to scale our B2B lead generation across eastern and western India for commercial electrical infrastructure. Need a proven performance agency.",
      status: "NEW",
      notes: "High intent commercial B2B inquiry. Scheduled initial discovery call.",
    },
    {
      name: "Dr. Ananya Roy",
      email: "dr.ananya@apexmedical.org",
      phone: "+91 98310 98765",
      company: "Apex Healthcare & Diagnostics",
      service: "Enterprise SEO & Organic Growth",
      budget: "₹1,00,000 - ₹2,00,000 / month",
      message:
        "Interested in local SEO and Google Search campaigns for our multi-specialty clinics in Kolkata and Salt Lake. Require appointment booking optimization.",
      status: "CONTACTED",
      notes: "Followed up with clinic audit presentation.",
    },
  ];

  for (const l of sampleLeads) {
    const existing = await prisma.lead.findFirst({ where: { email: l.email } });
    if (!existing) {
      await prisma.lead.create({ data: l });
    }
  }
  console.log("Seeded Sample Leads.");

  console.log("Database seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
