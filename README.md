# DevForge — Development Courses

A course catalog platform for developers, built with modern web technologies.

## Features

- **Landing page** with hero section, course catalog carousel, value proposition, and feature overview.
- **Course carousel** — an auto-playing carousel that previews each course inline with live-updating details.
- **Course detail pages** — individual pages for each course with rich metadata, pricing, and an enroll action.
- **Learning path** — an interactive line chart (via Recharts) that visualizes cumulative skill growth across three tracks (Frontend, Backend, Platform) over 12 weeks, plus milestones.
- **Responsive layout** — the entire interface is fully responsive, from mobile to desktop.
- **Dark theme** — the UI defaults to dark mode with a modern, minimal aesthetic.
- **Static generation** — all routes are pre-rendered at build time via `generateStaticParams` for fast page loads and SEO.

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | App Router, React Server Components, static generation, metadata API |
| **React 19** | UI library |
| **TypeScript 5** | Type safety |
| **Tailwind CSS 4** | Utility-first styling via `@tailwindcss/postcss` |
| **Radix UI** | Icons and unstyled primitives (`@radix-ui/react-icons`, `@radix-ui/react-slot`) |
| **Recharts** | Interactive line chart for the learning path visualization |
| **Embla Carousel** | Accessible, performant carousel with autoplay plugin |
| **class-variance-authority** | Variant-driven component styling |
| **Biome** | Linting and formatting |
| **Geist Font** | Default font family (sans + mono) via `next/font` |

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── detail/[slug]/page.tsx      # Course detail (SSG)
│   ├── learning-path/page.tsx      # Learning path visualization
│   ├── sign-in/page.tsx            # Sign-in placeholder
│   └── layout.tsx                  # Root layout + dark theme + Geist font
├── components/
│   ├── hero.tsx                    # Hero section
│   ├── courses.tsx                 # Featured courses wrapper
│   ├── course-carousel.tsx         # Carousel + course cards + live details
│   ├── course-meta.tsx             # Reusable stats and rating badges
│   ├── features.tsx                # Catalog stats section
│   ├── why-us.tsx                  # Value proposition cards
│   ├── learning-path-chart.tsx     # Recharts-based knowledge growth chart
│   ├── site-header.tsx / site-footer.tsx
│   └── ui/                         # Primitive components (Button, Carousel, Input)
├── data/
│   ├── courses.ts                  # Course catalog data
│   └── learning-path.ts            # Knowledge curve, tracks, milestones
└── lib/
    └── format.ts                   # Price and student count formatters
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Lint with Biome |
| `npm run format` | Format all files with Biome |
| `npm run check` | Lint + format in one pass |

## Built With

This project was developed entirely with **[opencode](https://opencode.ai)** — an AI-powered coding assistant. All features, components, styling, and data modeling were built through natural-language conversation with opencode, from the initial `create-next-app` scaffolding through to the final learning-path visualization.
