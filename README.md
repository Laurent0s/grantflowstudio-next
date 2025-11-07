# GrantFlow Studio - Next.js

A professional grant consulting and funding support website built with Next.js 15, React 18, TypeScript, and Tailwind CSS.

## Overview

This is the Next.js version of GrantFlow Studio, migrated from a Vite + React application. The application provides comprehensive information about EU grants, funding opportunities, training programs, and grant consulting services.

## Features

- **Modern Stack**: Built with Next.js 15 (App Router), React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive layout that works on all devices
- **shadcn/ui Components**: Beautiful, accessible UI components
- **SEO Optimized**: Next.js features for better search engine optimization
- **Fast Performance**: Optimized images with Next.js Image component
- **Type-Safe**: Full TypeScript support throughout the application

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd grantflow-studio-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
grantflow-studio-nextjs/
├── app/                      # Next.js App Router pages
│   ├── about-us/            # About Us page
│   ├── blog/                # Blog pages
│   ├── contacts/            # Contact page
│   ├── eu-grants/           # EU Grants pages
│   ├── grants-2025/         # 2025 Grants page
│   ├── services/            # Services pages
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── not-found.tsx        # 404 page
├── components/              # Shared React components
│   ├── ui/                  # shadcn/ui components
│   ├── providers/           # Context providers
│   ├── Navigation.tsx       # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   └── ...                  # Other shared components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
└── app/assets/             # Images and media files
```

## Available Pages

- **Home** (`/`) - Landing page with hero, services, stats, and testimonials
- **About Us** (`/about-us`) - Company history, mission, values, and team
- **Grants 2025** (`/grants-2025`) - Available grant opportunities for 2025
- **EU Grants** (`/eu-grants`) - Overview of EU funding programs
- **Horizon Europe** (`/eu-grants/horizon-europe`) - Detailed Horizon Europe information
- **Blog** (`/blog`) - Blog posts and articles
- **Services** (`/services`) - Service offerings overview
- **Grant Training** (`/services/grant-training`) - Training program details
- **Contacts** (`/contacts`) - Contact form and office information

## Key Features Implemented

### 1. App Router (Next.js 15)
- File-based routing with the new App Router
- Server and Client Components
- Metadata API for SEO

### 2. Optimized Images
- Next.js Image component for automatic optimization
- Responsive images with proper sizing

### 3. Client-Side Interactivity
- "use client" directive for interactive components
- React Query for data fetching (when needed)
- Toast notifications with Sonner

### 4. Type Safety
- Full TypeScript coverage
- Type-safe component props
- Zod schemas for form validation

### 5. Styling
- Tailwind CSS for utility-first styling
- Custom CSS variables for design system
- Dark mode support (configured)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Differences from Vite Version

### Routing
- **Vite**: React Router DOM (`react-router-dom`)
- **Next.js**: File-based App Router

### Navigation
- **Vite**: `useNavigate()` hook and `<Link>` from react-router-dom
- **Next.js**: `<Link>` component from `next/link` and `useRouter()` hook

### Images
- **Vite**: Standard `<img>` tags with imports
- **Next.js**: `<Image>` component from `next/image`

### Client vs Server Components
- **Vite**: All components are client-side by default
- **Next.js**: Server components by default, use `"use client"` for interactivity

### Build Output
- **Vite**: Static HTML, CSS, and JS files
- **Next.js**: Optimized with SSR, SSG, and ISR capabilities

## Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Google Cloud
- Azure
- Docker containers

Build command: `npm run build`
Output directory: `.next`

## Customization

### Colors

Edit the CSS variables in `app/globals.css` to change the color scheme:

```css
:root {
  --primary: 351 88% 42%;
  --secondary: 0 0% 25%;
  /* ... */
}
```

### Fonts

The app uses Montserrat from Google Fonts. Change it in `app/layout.tsx`:

```typescript
import { Montserrat } from "next/font/google";
```

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Export a default component

Example:
```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return <div>New Page Content</div>;
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

[Your License Here]

## Support

For support, email info@timeofchange.org or visit our [contact page](/contacts).

## Acknowledgments

- Original Vite version design and functionality
- shadcn/ui for beautiful components
- Next.js team for the excellent framework
- All contributors and supporters

