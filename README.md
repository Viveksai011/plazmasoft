# PlazmaSoft / Krishly — `src` Directory Reference

> **Project**: Krishly — an IT consulting & software development agency website  
> **Framework**: [Next.js](https://nextjs.org/) (App Router)  
> **Styling**: [Tailwind CSS](https://tailwindcss.com/) + global CSS  
> **Animation**: [Framer Motion](https://www.framer.com/motion/) / `motion/react-client`  
> **UI Primitives**: [shadcn/ui](https://ui.shadcn.com/) (Radix-based)  
> **AI integration**: [Groq SDK](https://groq.com/) (for the prompt-generator tool)  
> **Email**: [EmailJS](https://www.emailjs.com/) (contact form)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or later
- npm v8 or later (comes with Node.js)

### 1. Navigate to the project folder

```bash
cd soft
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the `soft/` directory (same level as `package.json`) and add:

```env
# EmailJS — used by the contact form (api/email-config/route.js)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_USER_ID=your_public_key

# Groq Cloud — used by the AI prompt generator (api/generate-prompts/route.js)
GROQ_CLOUD_API_KEY=your_groq_api_key
```

> ⚠️ Never commit `.env.local` to version control. It is listed in `.gitignore` by default in Next.js projects.

---

## 🛠️ Available Commands

Run all commands from inside the **`soft/`** project directory (where `package.json` lives).

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the **development server** at `http://localhost:3000` with hot-reload |
| `npm run build` | Format code with Prettier, then create an optimised **production build** |
| `npm run start` | Start the **production server** (run `npm run build` first) |
| `npm run lint` | Run **Next.js ESLint** checks across the codebase |
| `npm run format` | Run **Prettier** to auto-format all files (also runs automatically as part of `build`) |

### Detailed usage

```bash
# ── Development ──────────────────────────────────────────────
# Start local dev server (hot-reload on file changes)
npm run dev

# Open in browser: http://localhost:3000

# ── Code Quality ─────────────────────────────────────────────
# Check for lint errors (ESLint via Next.js)
npm run lint

# Auto-format all files with Prettier
npm run format

# ── Production ───────────────────────────────────────────────
# Build for production (runs Prettier first, then Next.js build)
npm run build

# Start the built production server
npm run start
```

> **Tip**: Always run `npm run build` before deploying. It runs `npm run format` automatically, then compiles and optimises the Next.js app. The output is placed in `.next/`.

---

## Table of Contents

1. [Top-level overview](#1-top-level-overview)
2. [`app/` — Pages & Routes](#2-app--pages--routes)
3. [`components/` — Reusable UI Blocks](#3-components--reusable-ui-blocks)
4. [`utils/` — Data & Static Content](#4-utils--data--static-content)
5. [`Icons/` — SVG Icon Components](#5-icons--svg-icon-components)
6. [`hooks/` — Custom React Hooks](#6-hooks--custom-react-hooks)
7. [`lib/` — Utility Helpers](#7-lib--utility-helpers)
8. [Data-flow & Dependency Map](#8-data-flow--dependency-map)

---

## 1. Top-level overview

```
src/
├── app/          # Next.js App Router pages, layouts, API routes, fonts, global CSS
├── components/   # Reusable React components (shared across pages)
├── utils/        # Static data, content arrays, and configuration files
├── Icons/        # SVG icons as React components
├── hooks/        # Custom React hooks
└── lib/          # Framework/utility helpers (cn, etc.)
```

The site is structured around a **data-driven** pattern: content (text, lists, images) lives in
`utils/`, layout + rendering logic lives in `components/`, and pages in `app/` wire them together.

---

## 2. `app/` — Pages & Routes

Next.js App Router. Every folder with a `page.jsx` becomes a route. `layout.jsx` files wrap all
child routes.

### `app/layout.jsx`
**Root layout — wraps every page.**

- Imports the `Inter` Google font and applies it globally.
- Renders `<Header />`, the page content (`{children}`), `<Footer />`, and a `<Toaster />` for
  toast notifications.
- Sets global `<html>` metadata: site title and SEO description for Krishly.
- **Used by**: All pages, automatically — this is the shell of the entire app.
- **Dependencies**: `Header`, `Footer`, `components/ui/sonner` (Toaster), `globals.css`.

---

### `app/globals.css`
**Global stylesheet.**

- Includes Tailwind base/components/utilities via `@tailwind` directives.
- Defines CSS custom properties (design tokens) for light and dark modes using shadcn/ui's
  variable convention (`--background`, `--foreground`, `--primary`, etc.).
- Contains custom animation keyframes:
  - `marquee-left` / `marquee-right` — used by the `Marque` component for the scrolling logo strip.
  - `tada` — hover animation applied to interactive elements.
- Defines `.stroke-text` and `.stroke-animate` — used by `StrokeText.jsx`.
- Defines `.custom-cursor` and `.cursor-circle` — used by `CustomCursor.jsx`.
- **Used by**: `app/layout.jsx` (imported once at the root).

---

### `app/favicon.ico`
Browser tab icon for the site. Served automatically by Next.js from the `app` directory.

---

### `app/fonts/`
Custom local font files loaded via Next.js font optimization.

| File | Description |
|------|-------------|
| `GeistVF.woff` | Geist variable font (sans-serif) |
| `GeistMonoVF.woff` | Geist Mono variable font (monospace) |

These are referenced in `layout.jsx` or component-level font declarations.

---

### `app/page.jsx`
**Home page — route `/`.**

Assembles the homepage by composing section components in order:

1. `Herosection` — above-the-fold hero
2. `Marque` — animated logo / brand strip
3. `Miniservices` — compact service teaser
4. `Miniaboutsection` — brief company introduction
5. `Servicesection` — full services grid
6. `ExperienceSection` — metrics / experience callouts
7. `DevelopmentSection` — tabbed technology toolkit
8. `ProcessSection` — step-by-step delivery process
9. `TestimonialsSection` — animated testimonials carousel (data: `Hometestimonials.js`)
10. `Contactsection` — contact form
11. `FaqSection` — FAQ accordion + comparison card (data: `Faqdata.js`)

**Dependencies**: Most shared components + `utils/Faqdata.js`, `utils/Hometestimonials.js`.

---

### `app/about-us/`

**Route `/about-us`.**

| File | Purpose |
|------|---------|
| `page.jsx` | Renders `<AboutKrishly />` (from `Parallaxscroll/About.jsx`) — the full About Us page |

The content (problems, tips, our story, approach cards) is entirely driven from
`utils/aboutPage/aboutDynamic.js`.

---

### `app/contact-us/`

**Route `/contact-us`.**

| File | Purpose |
|------|---------|
| `page.jsx` | Renders a `<Contactsection />` followed by a full-width animated CTA banner ("Turn Your Idea Into a Demo in 21 Days") with an animated illustration from Cloudinary |

Uses `motion/react-client` for scroll-triggered animations. The CTA section includes a "Book Your
Free Discovery Call" button with animated feature checkmarks.

**Dependencies**: `Contactsection`, `next/image`, `lucide-react`, `motion/react-client`.

---

### `app/hire-us/`

**Route `/hire-us`.**

| File | Purpose |
|------|---------|
| `page.jsx` | "Why Hire Us" marketing page — composites 9 sections in order |

Sections composed:
1. `Heroparallax` (parallax scroll hero with pain-point messaging)
2. `Techsection` — technology stack badges
3. `ExpandingCardsDemo` — interactive expanding comparison cards
4. `DifferenceSection` — what sets the company apart
5. `ProcessSteps` — milestone process (data: `utils/Ourprocess.js`)
6. `ComparisonTable` — side-by-side comparison table
7. `Guaranteesection` — service guarantees
8. `Actionablesection` — final CTA block
9. `TestimonialsSection` — social proof carousel (data: `Hometestimonials.js`)
10. `PricingProcrastination` — urgency-based pricing nudge

**Dependencies**: `hire-us/` components folder, `utils/Ourprocess.js`, `utils/Hometestimonials.js`.

---

### `app/services/[service]/`

**Dynamic route `/services/:service`** (e.g. `/services/mobile-app-development`).

| File | Purpose |
|------|---------|
| `layout.jsx` | Thin layout wrapper for all service pages |
| `page.jsx` | Fetches service data by slug from `utils/dynamic/servicesData.js` and conditionally renders up to 11 section components |

The page uses `generateMetadata()` for per-service SEO (dynamic `<title>` and `<description>`).
All section components are rendered **conditionally** — only shown if the data key exists for that
service slug (`currentService.Stoplosing`, `currentService.projects`, etc.).

Falls back to `servicesData.default` for unknown slugs.

**Supported slugs:** `mobile-app-development`, `web-app-development`, `ui-ux-design`,
`mvp-development`, `app-maintenance`, `chatgpt-development`.

**Dependencies**: `utils/dynamic/servicesData.js`, `servicescomponent/` components, `hire-us/ProcessStep`.

---

### `app/solutions/[solution]/`

**Dynamic route `/solutions/:solution`** (e.g. `/solutions/fintech-app-development`).

| File | Purpose |
|------|---------|
| `layout.jsx` | Thin layout wrapper |
| `page.jsx` | Mirrors the `[service]` page but sources data from `utils/solutiondynamic/solutionData.js` |

Supports slugs for domain-specific apps: `fintech-app-development`,
`restaurant-food-ordering`, `qr-code-food-ordering`, `on-demand-app-development`,
`fantasy-app-development`, `transport-industry-app-development`, `taxi-booking-app-development`,
`healthcare-app-development`, `fitness-app-development`, `social-media-app-development`,
`dating-app-development`, `sports-betting-app-development`, `stock-trading-app-development`,
`grocery-delivery-app-development`, `video-streaming-app-development`.

**Dependencies**: `utils/solutiondynamic/solutionData.js`, same `servicescomponent/` + `hire-us/ProcessStep`.

---

### `app/toolpage/[component]/`

**Dynamic route `/toolpage/:component`** (e.g. `/toolpage/prompt-generator`).

| File | Purpose |
|------|---------|
| `page.jsx` | Renders `<Maingenerator />` — the AI Prompt Generator tool page. Uses `generateMetadata()` to produce SEO-friendly titles from the slug |

**Dependencies**: `components/generatorbody/Maingenerator`.

---

### `app/api/`

Next.js API routes (server-side handlers).

#### `app/api/email-config/route.js`
**`GET /api/email-config`**

Returns EmailJS credentials (`serviceId`, `templateId`, `userId`) from environment variables
(`EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_USER_ID`).

> ⚠️ Ensure these env vars are set in `.env.local`. Do not expose public keys directly in client code.

**Used by**: The `Contactform` component fetches this endpoint to initialize EmailJS before sending
a message.

---

#### `app/api/generate-prompts/route.js`
**`POST /api/generate-prompts`**

Accepts `{ userInput: string }` and forwards it to the **Groq Cloud API** (model: `allam-2-7b`)
with streaming enabled. Collects streaming chunks into a single string and returns `{ prompts }`.

**Environment variable required**: `GROQ_CLOUD_API_KEY`

**Used by**: `components/generatorbody/Aigenerator.jsx`.

---

## 3. `components/` — Reusable UI Blocks

### Root-level components (shared globally)

| File | Purpose | Used By |
|------|---------|---------|
| `Header.jsx` | Sticky/transparent top navigation bar with dropdown mega-menus (Services, Solutions, ToolKit) and a mobile accordion menu. Scroll-aware: becomes frosted-glass after 200px. | `app/layout.jsx` |
| `Footer.jsx` | Animated footer with company description, 4-column link grid (Company, Services, Solutions, Location), award logos, and social media links. | `app/layout.jsx` |
| `Herosection.jsx` | Home page hero: center-aligned headline, CTA button, trust badges (star rating, Top Rated Plus, support, etc.), decorative SVG curves. | `app/page.jsx` |
| `Marque.jsx` | Auto-scrolling horizontal marquee strip of brand/client logos. | `app/page.jsx` |
| `Miniservices.jsx` | Small cards teasing the company's main services. | `app/page.jsx` |
| `Miniaboutsection.jsx` | Compact "about" teaser with key stats or image. | `app/page.jsx` |
| `Servicesection.jsx` | Full services grid section on the home page. | `app/page.jsx` |
| `Experiencesection.jsx` | Animated counters or stats showcasing experience and project numbers. | `app/page.jsx` |
| `Developmentsection.jsx` | Tabbed "Development Toolkit" section — click a tab (e.g. Web Development) to see technologies & benefits. Animates with `framer-motion`. Data from `utils/Developementdata.js`. | `app/page.jsx` |
| `Process.jsx` | "Our Process" section — numbered steps with icons/descriptions. Data from `utils/Processdata.js`. | `app/page.jsx` |
| `Contactsection.jsx` | Houses the contact form (`Contactform.jsx`) in a styled wrapper section. | `app/page.jsx`, `app/contact-us/page.jsx` |
| `Contactform.jsx` | Actual contact form fields (name, email, message). Fetches EmailJS config from `/api/email-config` and submits via EmailJS. Uses `use-toast` hook for success/error feedback. | `Contactsection.jsx` |
| `FaqSection.jsx` | Two-panel layout: left = accordion FAQ list, right = dark gradient "comparison card" (With Us vs. Without Us). Props: `faqs[]` and `comparisonData`. Animates with `motion/react-client`. | `app/page.jsx`, `[service]/page.jsx`, `[solution]/page.jsx` |
| `CustomCursor.jsx` | Custom animated cursor (purple circle that scales on hover over interactive elements). Client-side only. Uses `framer-motion`. | Not in layout by default — can be dropped into any page |
| `StrokeText.jsx` | Renders text with an outlined stroke animation (`stroke-text` CSS class). Used for large statistic text in the About page. | `Parallaxscroll/About.jsx` |
| `Listiteam.jsx` | Generic list renderer for footer link columns. Accepts an `items` array and an optional `isLocation` flag for icon rendering. | `Footer.jsx` |

---

### `components/Testimonial/`

Animated, auto-scrolling testimonials carousel split into two rows (marquee-left / marquee-right).

| File | Purpose | Used By |
|------|---------|---------|
| `testimonials-section.jsx` | Main container: splits testimonials into two rows, animates them with CSS marquee classes. Accepts `testimonials[]` and a `children` heading slot. | `app/page.jsx`, `hire-us/page.jsx`, `[service]/page.jsx`, `[solution]/page.jsx`, `Parallaxscroll/About.jsx` |
| `testimonial-card.jsx` | Individual testimonial card rendering: name, role, company, avatar, review text, and star rating. | `testimonials-section.jsx` |
| `star-rating.jsx` | Renders 1–5 filled star icons from a numeric `rating` prop. | `testimonial-card.jsx` |

---

### `components/Parallaxscroll/`

Large scroll-driven components used on the About-Us and Hire-Us pages.

| File | Purpose | Used By |
|------|---------|---------|
| `About.jsx` (`AboutKrishly`) | Full About-Us page content component: Our Story, Common Problems, Practical Tips, Approach Cards, Key Statistics, Pro Tips, Difference Section, and Testimonials. Sources all content from `utils/aboutPage/aboutDynamic.js`. | `app/about-us/page.jsx` |
| `Heroparallax.jsx` (`Herosection`) | Parallax scroll hero for `/hire-us`. Three stacked `ParallaxSection` panels with pain-point headlines and circular client images. Uses `framer-motion` `useScroll` + `useTransform` for scroll-linked opacity, scale, and y-position. Ends with a brand logo + CTA. | `app/hire-us/page.jsx` |

---

### `components/hire-us/`

Section components specific to the `/hire-us` page.

| File | Purpose | Used By |
|------|---------|---------|
| `Herosection.jsx` | (Commented out in current `hire-us/page.jsx`) Alternative hero for the hire-us page. | — |
| `Techsection.jsx` | Displays technology stack badges/icons. | `app/hire-us/page.jsx` |
| `expanding-cards.jsx` | Core "expanding cards" UI component — a set of cards that expand on click to reveal detailed content. | `expanding-cards-demo.jsx` |
| `expanding-cards-demo.jsx` | Wraps `expanding-cards.jsx` with specific service comparison content for the hire-us page. | `app/hire-us/page.jsx` |
| `Differencesection.jsx` | "What Makes Us Different" — highlights differentiators in a structured layout. | `app/hire-us/page.jsx` |
| `ProcessStep.jsx` | Numbered milestone process steps — reused across hire-us AND all service/solution pages. Accepts `processstepsHire[]` prop. Each step has a number, title, duration, what-happens list, and client-requirements list. | `app/hire-us/page.jsx`, `[service]/page.jsx`, `[solution]/page.jsx` |
| `Comparisontable.jsx` | Side-by-side table comparing hiring via agency vs. freelancer vs. Krishly. | `app/hire-us/page.jsx` |
| `Guaranteesection.jsx` | Guarantee pill cards (hire-us variant). | `app/hire-us/page.jsx` |
| `Actionablesection.jsx` | Final CTA block on the hire-us page with animated prompt to book a consultation. | `app/hire-us/page.jsx` |
| `Pricingprocasting.jsx` | Pricing urgency section — a persuasive "stop procrastinating on pricing" card layout. Data from `utils/Pricingprocasting.js`. | `app/hire-us/page.jsx` |

---

### `components/servicescomponent/`

Section components used on both dynamic service and solution pages.

| File | Purpose | Used By |
|------|---------|---------|
| `Herosection.jsx` | Service/solution hero section — large title, subtitle, description, CTA button, and hero image. Receives a `HeroSection` prop object. | `[service]/page.jsx`, `[solution]/page.jsx` |
| `Partnersection.jsx` | Displays partner/client logos in a horizontal bar. Shared across all service and solution pages (no props needed). | `[service]/page.jsx`, `[solution]/page.jsx` |
| `Stoplosingcustomer.jsx` | "Stop Losing Customers" section — headline, 4 statistics chips, and a CTA card. Receives a `Stoplosing` prop object. | `[service]/page.jsx`, `[solution]/page.jsx` |
| `Benefitsection.jsx` | Three benefit groups rendered as icon + bullet-list cards. Receives a `groups[]` prop (`BenefitsSectiontext`). | `[service]/page.jsx`, `[solution]/page.jsx` |
| `Ourservices.jsx` | Service feature grid — 4 cards each with an icon, title, sub-paragraph, and feature bullets. Receives `differenceData[]` (mapped from `Ourservices` key). | `[service]/page.jsx`, `[solution]/page.jsx` |
| `Servicetoolkit.jsx` | Technology toolkit panel for a specific service — description, feature checklist, and tech chip grid. Receives `developmenttool` prop. | `[service]/page.jsx`, `[solution]/page.jsx` |
| `Projectsection.jsx` | Portfolio/project cards grid with a modal (uses `Projectmodal.jsx`). Receives `projects[]`. | `[service]/page.jsx`, `[solution]/page.jsx` |
| `Projectmodal.jsx` | Modal dialog overlay with expanded project details. Used inside `Projectsection.jsx`. | `Projectsection.jsx` |
| `Guaranteesection.jsx` | Service guarantee cards grid (renders items from the `Guarantee[]` array or custom `items` prop). Also used in `Parallaxscroll/About.jsx`. | `[service]/page.jsx`, `[solution]/page.jsx`, `Parallaxscroll/About.jsx` |
| `Bannersection.jsx` | Full-width CTA banner at the bottom of every service/solution page ("Ready to get started?"). Requires no props. | `[service]/page.jsx`, `[solution]/page.jsx` |
| `TestimonialCarousel.jsx` | An alternative testimonial carousel implementation (wraps Radix `carousel`). Available for use on service pages. | `[service]/page.jsx` (optional import) |

---

### `components/generatorbody/`

Components that power the AI Prompt Generator tool at `/toolpage/prompt-generator`.

| File | Purpose | Used By |
|------|---------|---------|
| `Maingenerator.jsx` | Shell layout for the tool page — heading, subtitle, renders `Aigenerator` + `Tips`. | `app/toolpage/[component]/page.jsx` |
| `Aigenerator.jsx` | Main generator form: user types a prompt description, submits to `POST /api/generate-prompts`, displays the streamed response. | `Maingenerator.jsx` |
| `Dropdownselect.jsx` | Reusable select dropdown used inside `Aigenerator.jsx` for selecting prompt category/type. | `Aigenerator.jsx` |
| `StructureTemplate.jsx` | Renders a structured output template view for the generated prompts. | `Aigenerator.jsx` |
| `Tips.jsx` | Static tips/hints panel displayed below the generator form. | `Maingenerator.jsx` |

---

### `components/ui/`

**shadcn/ui** component library — Radix-based, pre-styled primitives.

| File | What it provides |
|------|-----------------|
| `accordion.jsx` | Collapsible accordion (used in `FaqSection.jsx`) |
| `button.jsx` | Primary button with variant support (`default`, `outline`, `ghost`, etc.) |
| `card.jsx` | Card container with `CardContent`, `CardHeader`, `CardTitle`, `CardDescription` sub-components |
| `carousel.jsx` | Embla-powered carousel (used in `TestimonialCarousel.jsx`) |
| `dialog.jsx` | Modal dialog overlay + content (used in `Projectmodal.jsx`) |
| `input.jsx` | Styled text input |
| `label.jsx` | Form label with `htmlFor` support |
| `navigation-menu.jsx` | Radix Navigation Menu used in `Header.jsx` for the mega dropdown |
| `select.jsx` | Styled select dropdown (used in `Dropdownselect.jsx`) |
| `sonner.jsx` | Sonner toast provider component (used in `app/layout.jsx`) |
| `tabs.jsx` | Tab bar + content panels |
| `textarea.jsx` | Styled multi-line text area |
| `toast.jsx` | Toast notification primitive (paired with `use-toast` hook) |
| `toaster.jsx` | Toast container that renders all active toasts |

**Important**: All `ui/` components depend on `lib/utils.js` (`cn()`) for class merging.

---

## 4. `utils/` — Data & Static Content

All files are plain JavaScript modules exporting arrays or objects. No server-side logic.

### Root-level utils

| File | Exports | Used By |
|------|---------|---------|
| `Comapanytitle.js` | `title` — the company display name string (`"PlazmeSoft"`) | `Footer.jsx` |
| `Headerdata.js` | `navItems`, `Subnav`, `navigationData` — nav link configs used to build the header menu and sub-nav. Contains Services, Solutions, and ToolKit dropdown entries. | `Header.jsx` |
| `Footerdata.js` | `aboutUsItems`, `servicesItems`, `resourcesItems`, `locationItems`, `helpfulLinksItems`, `socialMediaLinks` — all footer column data and social icon elements. | `Footer.jsx` |
| `Carddata.js` | Service or feature card data for homepage sections. | `Miniservices.jsx` or `Servicesection.jsx` |
| `Developementdata.js` | `toolkitData` — a keyed object of tab labels → `{ description, technologies[] }`. Powers the tabbed Development Toolkit section. | `Developmentsection.jsx` |
| `Faqdata.js` | `faqs[]`, `comparisonData` — home-page FAQ items and the "With Us / Without Us" comparison lists. | `app/page.jsx`, `FaqSection.jsx` |
| `Footerdata.js` | (see above) | `Footer.jsx` |
| `Hometestimonials.js` | `Testimonaldata[]` — testimonial objects for the homepage, hire-us, and about-us testimonial carousels. | `app/page.jsx`, `hire-us/page.jsx`, `Parallaxscroll/About.jsx` |
| `Ourcompanydata.js` | Static company profile data (used in mini about section). | `Miniaboutsection.jsx` |
| `Ourprocess.js` | `processstepsHire[]` — process steps array for the hire-us page `ProcessStep` component. | `app/hire-us/page.jsx` |
| `Pricingprocasting.js` | Pricing urgency content (text, highlights) for `Pricingprocasting.jsx`. | `hire-us/Pricingprocasting.jsx` |
| `Processdata.js` | Process step data for the home page `Process.jsx` section. | `Process.jsx` |
| `Projectdata.js` | Project portfolio items for home page use. | `Servicesection.jsx` or similar |
| `Contactdata.js` | Contact form field labels, placeholders, or submission config. | `Contactform.jsx` |

---

### `utils/aboutPage/`

| File | Exports | Used By |
|------|---------|---------|
| `aboutDynamic.js` | `problems[]`, `PracticalTips[]`, `ProTips[]`, `approachCards[]`, `differentCard[]`, `OurStory` — all textual and data content for the About-Us page, including each card's icon (from `lucide-react`), title, and feature bullets. | `Parallaxscroll/About.jsx` |

---

### `utils/dynamic/`

Drives the **dynamic service pages** at `/services/:service`.

| File | Exports | Used By |
|------|---------|---------|
| `servicesData.js` | `servicesData` — a large keyed object where each key is a service slug. Each entry contains: `heroSection`, `Stoplosing`, `BenefitsSectiontext[]`, `Ourservices[]`, `developmenttool`, `processsteps[]`, `projects[]`, `testimonal[]`, `faq[]`, `comparisonData`, `Guarantee[]`. | `app/services/[service]/page.jsx` |
| `faqdynamic.js` | Named exports per service (`mobileapp`, `webapp`, `chatgpt`, `mvp`, `appmaintenance`, `uiux`) — FAQ arrays specific to each service. Re-imported into `servicesData.js`. | `servicesData.js` |
| `testimonal.js` | Named exports per service (`mobileAppDevTestimonials`, `webAppDevTestimonials`, etc.) — testimonial arrays specific to each service. Re-imported into `servicesData.js`. | `servicesData.js` |
| `projectmodal.js` | Extended project detail data for project modal dialogs on service pages. | `Projectsection.jsx` |

---

### `utils/solutiondynamic/`

Mirrors `utils/dynamic/` but for **solution pages** at `/solutions/:solution`.

| File | Exports | Used By |
|------|---------|---------|
| `solutionData.js` | `solutionData` — same structure as `servicesData` but with entries for each solution slug (fintech, taxi, grocery, etc.). | `app/solutions/[solution]/page.jsx` |
| `faqdynamic.js` | FAQ arrays per solution type. Re-imported into `solutionData.js`. | `solutionData.js` |
| `testimonal.js` | Testimonial arrays per solution type. Re-imported into `solutionData.js`. | `solutionData.js` |
| `projectmodal.js` | Extended project detail data for solution project modals. | `Projectsection.jsx` |

---

## 5. `Icons/` — SVG Icon Components

All are React components rendering inline SVGs. They accept standard SVG props (e.g. `width`, `className`).

### Root-level Icons

| File | What it renders | Used By |
|------|----------------|---------|
| `Circlecurve.jsx` | Decorative filled circle-segment curve (top-right corner of hero sections) | `Herosection.jsx`, `Parallaxscroll/About.jsx`, `Parallaxscroll/Heroparallax.jsx` |
| `Inversecirclecurve.jsx` | Mirrored version of `Circlecurve` (top-left corner) | Same as above |
| `Faqcurve.jsx` | Subtle background curve behind the FAQ accordion section | `FaqSection.jsx` |
| `Wave.jsx` | Decorative wave SVG | Various sections |
| `Linewind.jsx` | Decorative line/wind path SVG | Various sections |
| `Dotline.jsx` | Dotted line decoration | Various sections |
| `curve.jsx` | Simple single-curve SVG | Various sections |
| `lightcurve.jsx` | Light-colored curve variant | Various sections |
| `Reacticon.jsx` | React logo SVG | `Developmentsection.jsx` technology displays |
| `Reacttwo.jsx` | Second React icon variant (larger / different style) | Technology sections |
| `NodeIcons.jsx` | Node.js logo SVG | `utils/dynamic/servicesData.js` technology entries |
| `Angular.jsx` | Angular logo SVG | Technology sections |
| `Flutter.jsx` | Flutter logo SVG | Technology sections |
| `Html.jsx` | HTML5 logo SVG | Technology sections |
| `Vueicons.jsx` | Vue.js logo SVG | `utils/dynamic/servicesData.js` |
| `Figmaicons.jsx` | Figma logo SVG | UI/UX design service sections |
| `Adobexdicons.jsx` | Adobe XD logo SVG | UI/UX design service sections |
| `Photoshopicons.jsx` | Adobe Photoshop logo SVG | Design sections |
| `Androidicon.jsx` | Android logo SVG | Mobile tech sections |
| `Appstore.jsx` | Apple App Store logo SVG | Mobile tech sections |
| `sass.jsx` | Sass/SCSS logo SVG | Frontend technology sections |
| `airbnb.jsx` | Airbnb logo SVG | Client/partner logo strip (`Marque.jsx`) |
| `apple.jsx` | Apple logo SVG | Client/partner logo strip |
| `disney.jsx` | Disney logo SVG | Client/partner logo strip |
| `facebook.jsx` | Facebook logo SVG | Client/partner logo strip |
| `samsung.jsx` | Samsung logo SVG | Client/partner logo strip |
| `quora.jsx` | Quora logo SVG | Client/partner logo strip |
| `spark.jsx` | Spark/brand logo SVG | Client/partner logo strip |

---

### `Icons/Awards/`

Award badge SVGs displayed in the footer.

| File | Used By |
|------|---------|
| `Awardone.jsx` | `Footer.jsx` (rendered via `Logos` array with `/img/awardone.png`) |
| `Awardtwo.jsx` | `Footer.jsx` |
| `Awardthree.jsx` | `Footer.jsx` |
| `Awardfour.jsx` | `Footer.jsx` |

> **Note**: The footer currently loads award logos from `/img/*.png` static files, not as JSX
> components. These JSX files are available for alternate rendering if needed.

#### `Icons/Awards/text/`

| File | Purpose |
|------|---------|
| `Textwave.jsx` | Animated text-wave effect for award badge labels |

---

## 6. `hooks/` — Custom React Hooks

### `hooks/use-toast.js`
Custom toast notification hook inspired by `react-hot-toast`.

**Exports**: `useToast`, `toast`

- Implements an in-memory toast queue with a Redux-style reducer pattern.
- `toast({ title, description, variant })` — triggers a new toast notification.
- `useToast()` — returns the current toast state and helper functions for use in components.
- Limit: 1 active toast at a time (`TOAST_LIMIT = 1`).

**Used by**: `Contactform.jsx` (success/error feedback after form submission), any component that needs transient notifications.

**Dependencies**: `components/ui/toast.jsx`, `components/ui/toaster.jsx`.

---

## 7. `lib/` — Utility Helpers

### `lib/utils.js`
**The `cn()` class-merging utility.**

```js
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

- Combines `clsx` (conditional class logic) with `tailwind-merge` (deduplicates conflicting Tailwind classes).
- Used **everywhere** in the `components/ui/` folder and throughout the codebase wherever dynamic Tailwind classes need to be safely merged.

**Dependencies**: `clsx`, `tailwind-merge` (npm packages).

---

## 8. Data-flow & Dependency Map

```
app/page.jsx (Home)
  ├── utils/Faqdata.js           → FaqSection.jsx
  ├── utils/Hometestimonials.js  → TestimonialsSection
  ├── utils/Developementdata.js  → Developmentsection.jsx
  └── utils/Processdata.js       → Process.jsx

app/services/[service]/page.jsx
  └── utils/dynamic/servicesData.js
        ├── utils/dynamic/faqdynamic.js    (FAQ arrays per service)
        └── utils/dynamic/testimonal.js    (Testimonials per service)

app/solutions/[solution]/page.jsx
  └── utils/solutiondynamic/solutionData.js
        ├── utils/solutiondynamic/faqdynamic.js
        └── utils/solutiondynamic/testimonal.js

app/about-us/page.jsx
  └── Parallaxscroll/About.jsx
        └── utils/aboutPage/aboutDynamic.js

app/hire-us/page.jsx
  └── utils/Ourprocess.js        → hire-us/ProcessStep.jsx

app/toolpage/[component]/page.jsx
  └── generatorbody/Maingenerator.jsx
        └── generatorbody/Aigenerator.jsx
              └── api/generate-prompts/route.js  (Groq AI)

Contactform.jsx
  └── api/email-config/route.js  (EmailJS credentials)

All pages
  └── app/layout.jsx
        ├── Header.jsx → utils/Headerdata.js
        └── Footer.jsx → utils/Footerdata.js
```

---

## Key Conventions for New Developers

1. **Add a new service page**: Add a new key to `utils/dynamic/servicesData.js` using an existing
   entry as a template. The route `/services/your-slug` will work automatically. Add the slug to
   `utils/Headerdata.js` under `navigationData.Services` to expose it in the nav.

2. **Add a new solution page**: Same process but in `utils/solutiondynamic/solutionData.js` and
   `Headerdata.js → navigationData.Solutions`.

3. **Add a new AI tool**: Create a new entry in `Headerdata.js → navigationData.ToolKit` pointing
   to `/toolpage/your-tool-name`. The page auto-generates SEO metadata from the slug.

4. **Update navigation**: All nav links are in `utils/Headerdata.js` — both the desktop
   mega-menu (`navigationData`) and the sub-nav links (`Subnav`).

5. **Update footer links**: All footer columns are arrays in `utils/Footerdata.js`.

6. **Add testimonials**: Add entries to `utils/Hometestimonials.js` (home/hire-us/about pages) or
   to the relevant service's `testimonal` array in `servicesData.js` / `solutionData.js`.

7. **Environment variables needed**:
   - `EMAILJS_SERVICE_ID` — EmailJS service ID
   - `EMAILJS_TEMPLATE_ID` — EmailJS template ID
   - `EMAILJS_USER_ID` — EmailJS public user/key
   - `GROQ_CLOUD_API_KEY` — Groq Cloud API key for the prompt generator
