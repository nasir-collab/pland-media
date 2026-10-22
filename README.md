# Plan D Media 2.0 Web Platform & CMS

High-performance digital growth agency website and administrative CMS for **LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED** ([https://www.pland.in/](https://www.pland.in/)), visually inspired by the **Adon Creative Agency Portfolio** theme.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Database Initialization (Prisma & SQLite)**
   ```bash
   npx prisma db push
   npx tsx prisma/seed.ts
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Access Admin Console**
   Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
   - **Email:** `admin@pland.in`
   - **Password:** `Admin@PlanD2025!`

## 📁 Key Routes
- Public Website: `/` (Home), `/about`, `/services`, `/services/[slug]`, `/case-studies`, `/case-studies/[slug]`, `/blog`, `/blog/[slug]`, `/contact`, `/privacy-policy`, `/terms-and-conditions`
- Admin Console: `/admin` (Overview), `/admin/leads`, `/admin/services`, `/admin/case-studies`, `/admin/posts`, `/admin/pages`, `/admin/media`, `/admin/settings`
- APIs: `/api/auth/*`, `/api/leads/*`, `/api/services/*`, `/api/case-studies/*`, `/api/posts/*`, `/api/pages/*`, `/api/media`, `/api/settings`

## 🛠 Tech Stack
- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS
- **Database & ORM:** Prisma 5.22.0, SQLite (default) / PostgreSQL (via DATABASE_URL)
- **Authentication:** bcryptjs, jsonwebtoken, secure HTTP-only cookie sessions
- **Icons & Animation:** Lucide Icons, custom kinetic transitions
