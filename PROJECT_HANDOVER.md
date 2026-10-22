# Plan D Media 2.0 — Handover & Architectural Documentation
**Client / Brand**: LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED  
**Website**: [https://www.pland.in/](https://www.pland.in/)  
**Visual & Interaction Reference**: Whiteboard Media ([https://whiteboardmedia.in/](https://whiteboardmedia.in/)) / Adon Creative Theme  
**Architecture**: React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS, Prisma ORM, SQLite / PostgreSQL  

---

## 1. Executive Summary
The Plan D Media website has been re-architected to strictly reproduce the storytelling flow, editorial typography, visual hierarchy, and creative direction of the primary reference website **Whiteboard Media** ([https://whiteboardmedia.in/](https://whiteboardmedia.in/)).

Key Deliverables:
1. **Whiteboard Media Storytelling Sequence**:
   - **Hero Section**: Fullscreen ambient undulating silk video layer (`wavy-layer.mp4`) with massive editorial headline (`Clarity Is a Creative Strategy.`) and 3-column subgrid (Entity, Location, Positioning summary).
   - **About / Manifesto Section (`(Who we are)`)**: Large statement headline (*"Every great brand story begins with a blank space"*), agency photo frame, and first-principles copy (*"Clarity isn't the mood. It's the method."*).
   - **Selected Work / Portfolio (`(Projects)`)**: Massive `Our Works` title header with dual typography (outline + solid) and high-impact asymmetric project showcases with cursor overlays.
   - **Capabilities & Disciplines (`(Our Capabilities)`)**: Signature phone mockup card with Plan D brand mark on the left, paired with 5 horizontal service rows featuring custom Adon icons.
   - **Team Squad (`(Our Leadership)`)**: *"Meet the squad who creates your brand"* grid with high-resolution portraits and leadership roles.
   - **Marquee Ticker**: Infinite running typography (*"We make brand big and bolder"*).
   - **Client Brands Strip**: Continuous logo slider featuring verified brand partnerships.
   - **Closing CTA & Directory Footer**: Giant *"Let's start a great work right now"* call to action and 4-column directory footer.
2. **Authentic Brand Integration**: Preserves all verified Plan D Media brand assets, transparent logo, legal entity declaration, and Kolkata office coordinates.
3. **Database-Backed Custom Admin CMS (`/admin`)**: A password-protected administrative console with role-based access control, real-time lead management, services CRUD, case study publishing, blog editorial engine, SEO meta configuration, and media uploads.
4. **End-to-End Verified Lead Capture**: Contact forms and consultation modals submit directly to the backend API (`/api/leads`), perform honeypot spam filtering, persist to the database, and display in the admin dashboard.

---

## 2. Technology Stack & Architecture

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 19 & Next.js 16 (App Router)** | Full-stack architecture with Server & Client components, ISR, and dynamic routing |
| **Language** | **TypeScript 5** | Strict type-safety across all components, API routes, and database models |
| **Styling & Design Tokens** | **Tailwind CSS + Custom CSS Variables** | Bespoke design system tokens matching the Adon luxury dark portfolio style |
| **Icons & Micro-animations** | **Lucide Icons + Framer Motion CSS** | High-contrast kinetic reveals, pulse glows, and responsive transitions |
| **ORM & Database** | **Prisma 5.22.0 + SQLite / PostgreSQL** | Pre-configured SQLite (`file:./dev.db`) for zero-friction local execution, switchable to PostgreSQL via `DATABASE_URL` |
| **Authentication & Security** | **bcryptjs + jsonwebtoken** | Password hashing (salt rounds: 10) and secure HTTP-only cookie sessions |
| **Media Storage** | **Local File Storage & API** | Multi-part file upload API (`/api/media`) with CDN-ready local asset serving (`/public/uploads`) |

---

## 3. Website Pages & Information Architecture

### Public Routes
1. **Home (`/`)**:
   - Hero section with kinetic typography and floating metrics (`4.8x ROAS`, `₹120M+ Ad Spend`, `98.4% Retention`).
   - Infinite marquee ticker highlighting certifications (Google Partner, Meta Business Partner) and brand partners.
   - Core capabilities card grid with deliverable checklists and metric indicators.
   - Plan D Manifesto: "The Anti-Agency Model" comparing Plan D Media's 15-client protocol against traditional 100-client agencies.
   - Verified case studies showcase with zoom effects and metric callouts.
   - Real partner testimonials (Centurion University, SRMB Steel, La Derma Clinic).
   - Growth intelligence blog preview.
   - Signature Adon full-width CTA banner and comprehensive luxury footer.
2. **About Us (`/about`)**:
   - Corporate legal entity declaration (LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED).
   - The Restricted-Client operating protocol.
   - Guiding principles and asymmetric advantages.
3. **Services Overview (`/services`)**:
   - Complete catalog of specialized capabilities:
     * *Performance Marketing & Paid Ads*
     * *Enterprise SEO & Organic Growth (GEO)*
     * *Conversion Infrastructure & Web Engineering*
     * *Social Branding & Creative Studio*
     * *AI Growth Systems & Sales Funnel Engineering*
4. **Individual Service Detail Pages (`/services/[slug]`)**:
   - Comprehensive operational blueprints, methodology narratives, deliverable checklists, and sticky discovery consultation CTA.
5. **Case Studies Overview (`/case-studies`)**:
   - Filterable portfolio grid displaying real commercial outcomes across education, manufacturing, healthcare, and technology.
6. **Individual Case Study Detail Pages (`/case-studies/[slug]`)**:
   - Narrative breakdowns of client challenges, custom Plan D solutions, and verified impact statistics.
7. **Blog & Insights (`/blog`)**:
   - Playbooks on Generative Engine Optimization (GEO), AI search shift, B2B search, and conversion engineering.
8. **Individual Blog Articles (`/blog/[slug]`)**:
   - Formatted editorial articles with author credits, reading times, tags, and related playbooks.
9. **Contact Us (`/contact`)**:
   - Corporate office details at Ecospace Business Park, New Town, Kolkata.
   - Direct telephone (+91 82404 18456) and electronic mail (contact@pland.in).
   - Real-time consultation and campaign audit request form.
10. **Legal & System Pages**:
    - Privacy Policy (`/privacy-policy`)
    - Terms and Conditions (`/terms-and-conditions`)
    - Custom 404 Page (`/not-found`)

---

## 4. Administrative CMS Portal (`/admin`)

Access route: `http://localhost:3000/admin`  
Default Superadmin Credentials:
* **Email**: `admin@pland.in`
* **Password**: `Admin@PlanD2025!`

### CMS Functional Modules:
1. **Dashboard Overview (`/admin`)**:
   - Live KPI counter cards: Total Inquiries, Active Services, Case Studies, and Published Articles.
   - Recent inbound inquiries feed with real-time status management (`NEW`, `CONTACTED`, `QUALIFIED`, `CONVERTED`, `CLOSED`).
   - Quick launch shortcuts for content updates.
2. **Enquiries & Inbound Leads (`/admin/leads`)**:
   - Full search and status filtering across all prospect submissions.
   - Detailed lead drawer: prospect phone, email, company, budget, and inquiry text.
   - One-click phone call and WhatsApp direct message triggers.
   - Internal strategist note-taking module and lead deletion.
3. **Services Manager (`/admin/services`)**:
   - List, create, edit, and delete service blueprints.
   - Configure titles, slugs, categories, display order, taglines, short descriptions, full blueprint markdown, deliverables lists, and metric key-values.
4. **Case Studies Manager (`/admin/case-studies`)**:
   - Manage client portfolio, industries, challenge/solution narratives, cover images, and metric outcomes.
   - Control featured homepage spotlighting.
5. **Blog & Editorial Studio (`/admin/posts`)**:
   - Write, format, edit, and schedule articles.
   - Manage categories, authors, read time estimates, excerpts, and cover imagery.
6. **Pages & SEO Manager (`/admin/pages`)**:
   - Customize meta titles, meta descriptions, hero headings, and hero subheadings for all website pages.
   - Control indexing and publication status.
7. **Media Library (`/admin/media`)**:
   - Upload new image assets directly into the repository.
   - Instant file preview, file size calculation, and one-click CDN URL copying.
8. **Global Settings (`/admin/settings`)**:
   - Update official brand name, legal entity name, telephone, email, and Kolkata office address.
   - Configure hero announcement ticker and social links (LinkedIn, Instagram, Facebook, X).

---

## 5. Environment Variables & Production Deployment

### `.env` Configuration
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="pland-super-secret-jwt-key-2025"
ADMIN_DEFAULT_PASSWORD="Admin@PlanD2025!"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### To switch to PostgreSQL (e.g. Supabase, Neon, AWS RDS):
1. In `prisma/schema.prisma`, update:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
2. In `.env`, set:
   ```env
   DATABASE_URL="postgresql://user:password@host:5432/pland_db?sslmode=require"
   ```
3. Run:
   ```bash
   npx prisma db push
   npx tsx prisma/seed.ts
   ```

### Running in Production
```bash
# Build the production bundle (TypeScript & optimization check)
npm run build

# Start the optimized production server
npm run start
```
