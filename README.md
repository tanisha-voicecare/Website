# VoiceCare AI Website

A production-ready Next.js website for VoiceCare AI, built with a headless WordPress architecture.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Headless WordPress (optional)
- **Animations:** Framer Motion
- **Deployment:** Vercel

## Features

- ✅ SEO optimized (meta tags, Open Graph, JSON-LD schemas)
- ✅ Responsive design (mobile-first)
- ✅ Pixel-perfect Figma implementation
- ✅ Accessibility compliant
- ✅ Performance optimized (ISR, image optimization)
- ✅ Security headers (HSTS, XSS protection)
- ✅ WordPress REST API ready

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Copy environment variables
cp env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt
│   ├── blog/              # Blog pages
│   └── services/          # Services pages
│
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
│
├── lib/
│   ├── seo.ts             # SEO utilities
│   ├── wordpress.ts       # WordPress API client
│   └── utils.ts           # Helper functions
│
├── types/                 # TypeScript definitions
└── assets/                # Icons and static assets
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production site URL |
| `WORDPRESS_API_URL` | No | WordPress REST API URL |
| `WORDPRESS_HOSTNAME` | No | WordPress domain for images |

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

```bash
# Or deploy via CLI
npx vercel
```

### Build for Production

```bash
# Build
npm run build

# Start production server
npm start
```

## WordPress Integration

This site is designed to work with or without WordPress. To connect WordPress:

1. Set up a WordPress site with REST API enabled
2. Add `WORDPRESS_API_URL` to your environment
3. Install recommended plugins:
   - Yoast SEO (for SEO metadata in API)
   - ACF (for custom fields)
   - WP REST API Menus (for navigation)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript check |

## License

Proprietary - VoiceCare AI Inc.
