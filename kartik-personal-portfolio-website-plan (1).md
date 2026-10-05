# Kartik Singh Bisht — Personal Portfolio & Developer Brand Website

## 1. Project Overview

This website is not intended to be a generic developer portfolio.

It should function as **Kartik Singh Bisht's personal professional brand**: a polished, modern website that communicates who Kartik is, demonstrates production experience, proves technical capability, showcases real projects and client work, and ultimately makes a visitor comfortable enough to **hire/contact him**.

### Primary positioning

> **Full-Stack + AI Developer building production SaaS, web applications and AI-powered automations.**

Supporting positioning:

> I build software that turns ideas into useful, production-ready products — from frontend and backend development to cloud deployment, integrations and AI automation.

### Primary audiences

1. Freelance clients looking for a developer
2. Startup founders looking for someone who can build a product end-to-end
3. Recruiters / engineering managers considering Kartik for full-time roles

The website should work for all three without becoming three separate websites.

### Primary business objective

The visitor should quickly understand:

- Who Kartik is
- What he builds
- What technologies he works with
- What real products he has worked on
- What clients say about working with him
- How he can help them
- How to contact him or book a 30-minute call
- How to view/download his resume
- How to verify him through Upwork, LinkedIn, GitHub and other profiles

The site should **sell capability through evidence**, not through exaggerated marketing copy.

---

# 2. Brand Strategy

## Core message

The website should communicate:

**"I am a practical full-stack engineer who can take a product from idea or existing codebase to a working production system."**

The strongest differentiator is the combination of:

- Full-stack development
- SaaS/product development
- AI/LLM integrations
- AI automation
- Third-party API integrations
- Cloud deployment
- CI/CD
- Ability to work on existing products as well as greenfield products

This creates a stronger positioning than simply listing "React / Node / MongoDB".

## Recommended hero statement

Choose one headline before implementation. Both are specific; neither starts with "Hi, I'm Kartik."

### Option A — product scope (default)

> # I build and ship SaaS products end to end: frontend, backend, integrations and AI.

### Option B — existing products

> # A full-stack engineer who can join your product, learn the codebase and ship.

Supporting text (either option):

> I'm Kartik, a full-stack developer in India (IST). I take products from an idea or an existing codebase through frontend, backend, integrations, AI features and production deployment.

Primary CTA:

**Book a 30-min call**

Secondary CTA:

**Send a project brief**

Proof line (named facts, not adjectives). Link the Upwork figure to the public profile:

> Integrations for MonuDesk (QuickBooks, payments) · Launched ToolMorph (18+ tools) · 5.0 on Upwork (3 reviews)

Do not write "3+ years" in the hero. Use "3 years" only if the public timeline includes the experience that supports it. If the resume's "3 years" includes work before January 2024, add that work to the timeline. Otherwise state the verified span (75way from January 2024, freelance from January 2025).

Hero social links: Upwork and LinkedIn only. GitHub, X, YouTube and Dev.to belong in the footer.

---

# 3. Visual Direction

## Overall aesthetic

### Recommended direction:
**Premium Minimal + Creative Developer**

The visual language should be:

- Light
- Clean
- Editorial
- Modern
- Technical without looking like a coding tutorial
- Professional enough for recruiters
- Distinctive enough for startup founders
- Warm and human enough for freelance clients

Avoid:

- Black hacker-style themes
- Excessive neon
- Huge gradients everywhere
- Excessive glassmorphism
- Random 3D objects
- Excessive terminal/code animations
- Overuse of cards
- "AI generated portfolio" visual clichés
- Animation that slows down the portfolio
- The default 2024–26 developer-template combination: Geist-only headlines, Tailwind blue-600, magnetic buttons, a custom cursor, a scroll-progress bar, smooth-scroll libraries, a pulsing green availability dot, and `01 / SELECTED WORK` indexes

## Light theme

Use an eye-friendly off-white background instead of pure white everywhere.

Suggested palette:

```text
Background:       #FAFAF7
Surface:           #FFFFFF
Surface muted:    #F3F4F6
Primary ink:      #111318
Secondary text:   #596273
Muted text:       #5C6570
Border:           #E6E8EC

Primary accent:   #1E3A8A
Accent hover:     #172554
Soft accent:      #E8EEF8

Success:          #16A34A
Warning:          #D97706
```

`#7B8493` fails WCAG AA on `#FAFAF7` (about 3.6:1) and must not be used for 12–14px labels. `#5C6570` is the muted text color because it clears 4.5:1 on the off-white background. Check any lighter gray the same way before using it for text.

`#2563EB` is Tailwind's default blue and reads as a template. The accent is a deep ink blue, used sparingly for primary CTAs, links, interactive states, small highlights inside a system diagram, and important metrics. Do not turn the whole website blue.

## Typography

- **Instrument Serif** for headlines (hero and section titles). Fraunces is the only alternate if Instrument Serif's italics feel wrong in context; pick one and use it everywhere headlines appear.
- **Geist Sans** for UI and body
- **Geist Mono** for small technical labels and metadata

Headlines in Geist alone are the default Next.js portfolio look. The serif is the main typographic distinction. Do not set body copy in the serif.

Typography hierarchy:

```text
Hero:
72–96px desktop
48–64px tablet
40–48px mobile

Section title:
48–64px desktop
36–44px mobile

Body:
17–19px desktop
16–17px mobile

Small labels:
12–14px
```

Large typography should be used for hierarchy, not decoration.

## Layout

Use a consistent:

- Max content width around 1200–1280px
- Comfortable horizontal padding
- Large vertical section spacing
- Strong whitespace
- 12-column grid for desktop layouts
- Single-column stacking on mobile

The site should feel spacious.

---

# 4. Personal Photo

The uploaded professional photo should be supported as a primary asset.

Recommended usage:

### Homepage
Use the photo in the hero as a secondary visual rather than making it the entire hero.

Possible layout:

```text
LEFT
Eyebrow
Large headline
Supporting copy
CTA buttons
Trust/social links

RIGHT
Professional photo
Subtle decorative elements
Small floating "Available for freelance work" / location / stack indicator
```

The photo should be displayed professionally with:

- Soft rounded rectangle or subtle editorial crop
- Very light shadow
- No aggressive circular avatar treatment
- No cheesy rotating borders

### About page

Use a larger version with more personal context.

---

# 5. Site Architecture / Sitemap

## Primary pages

```text
/
├── /about          experience timeline lives here
├── /work
├── /work/[slug]    full case studies only
├── /services
├── /contact
├── /resume         HTML resume + PDF
├── /now            footer link, not header
├── /privacy
└── /404
```

Do not create `/experience` or `/youtube` in v1. YouTube and Dev.to are footer links to the external profiles. A content hub can wait until there is enough published work to justify a page.

### Navigation

Same items on desktop and in the mobile menu. Do not add Experience, Now, YouTube or a separate Contact link to the header. Those routes, if they exist, are reached from the footer or from a CTA.

Desktop:

```text
Kartik.
Work
Services
About
[Resume]            ghost button
[Book a 30-min call]  primary button
```

### Mobile

```text
Kartik.
Menu button
```

The menu is a full-height panel with the same links, Resume, and **Book a 30-min call** as the prominent action. Include **Send a project brief** in the menu so the form path is one tap away.

---

# 6. Homepage

The homepage is the most important page.

Its job is not to contain every detail. Its job is to create enough confidence that the visitor wants to explore or contact Kartik.

## Canonical homepage order

One order only. Do not use a different sequence in later sections, phase notes or visual-rhythm notes.

```text
1. Hero (including the named-facts proof line)
2. Featured work
3. Testimonials
4. How I can help
5. Final CTA
```

Keep the hero short enough that the first featured project is visible on a 1440×900 desktop viewport.

### Section 01 — Hero

Eyebrow:

> FULL-STACK + AI DEVELOPER · INDIA (IST)

Add a concrete availability phrase next to it, driven by `site.ts`, for example:

> TAKING ONE NEW PROJECT FROM NOVEMBER 2026

Do not use a permanent green "Available" dot without a date.

Headline: Option A or Option B from section 2.

Supporting paragraph: the supporting text from section 2.

Primary CTA:

> Book a 30-min call

Secondary CTA:

> Send a project brief

Proof line (not a separate metrics strip):

> Integrations for MonuDesk (QuickBooks, payments) · Launched ToolMorph (18+ tools) · 5.0 on Upwork (3 reviews)

Always show the review count beside the rating, and link it to the Upwork profile. Job Success Score changes over time, so do not hard-code it into designed assets such as OG images.

Social links in the hero: Upwork and LinkedIn only.

Hero visual:

- Professional photo on the right, editorial crop
- Location and timezone (India, IST) plus the dated availability phrase
- Very restrained motion

Do not use a decorative grid, coordinate labels or a status dot as the hero motif. The signature visual is the system diagram described in section 26, used sparingly (a small UI → API → data → integrations diagram beside the photo is enough).

---

## Section 02 — Featured work

Show 3–5 strongest projects immediately after the hero. Specification is in section 7.

Work comes before capability claims. The site sells capability through evidence.

---

## Section 03 — Testimonials

Show 2–3 specific reviews. Specification is in section 12.

Prefer excerpts that name a concrete outcome (debugging, integrations, delivery) over generic praise.

---

## Section 04 — How I can help

This replaces a separate "What I Build" block and a separate services preview. One section, four short outcome lines, then a link to `/services`.

Headline:

> One engineer across the product.

### Full-stack applications

React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB.

### SaaS and product work

MVPs, dashboards, customer portals, admin systems and product workflows.

### AI features

LLM integrations and AI-powered features inside real products. Only list tools that a published project actually uses.

### Delivery

AWS, Docker, GitHub Actions and production deployment.

Do not list GCP, n8n, "AI assistants" or "production monitoring" here unless a project on the site supports the claim.

Each line should point at a real project where possible (MonuDesk for integrations, ToolMorph for an owned product, BrandRadar for AI product UI).

CTA: **Book a 30-min call**. Text link: Services.

---

## Section 05 — Final CTA

Specification is in section 49. Buttons are **Book a 30-min call** and **Send a project brief**.

---

# 7. Featured Work

Homepage should show **3–5 strongest projects**, not every project.

Recommended initial ordering:

1. ToolMorph — full case study, ownership: owned
2. MonuDesk — full case study, ownership: contributed
3. BrandRadar — full case study only after ownership is stated (owned, led, or contributed). Do not publish the page while ownership is blank.
4. Optimate — card or brief page until screenshots and the exact contribution are approved. Do not imply ownership.
5. Inception Financial — card or brief page. Ownership: contributed (75way).
6. PrefAI — do not publish until store links and the role are confirmed.

Every card should show:

- Project name
- One-line product description
- Ownership label: Owned, Led, or Contributed
- Kartik's contribution
- Tech
- Year
- View case study, only when `caseStudy` is `full` or `brief`
- External/live link when permitted

A contributed project must not use "I built" or "I launched" in the card. ToolMorph can. MonuDesk, Optimate and Inception cannot.

## Project card design

Avoid generic:

```text
Project Name
Next.js
Node.js
View More
```

Instead:

```text
[Visual / screenshot]

ToolMorph
Developer Tools & AI Platform
Owned

Built and launched a developer platform with 18+ browser-based
tools and an expanding AI product suite.

Next.js · TypeScript · Tailwind · AI

[View case study ↗]
```

The card should visually communicate the product before the technology.

---

# 8. Project Inventory

## ToolMorph

### Positioning

> Developer Tools & AI Platform

### Description

Built and launched a platform featuring 18+ browser-based utilities for developer workflows, plus an AI-focused Labs area.

### Relevant technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- AI/LLM integrations
- Analytics
- AWS
- SEO / Search Console
- GitHub

### Highlight

This is an especially important project because it demonstrates:

- Product ownership
- Design
- Engineering
- Deployment
- SEO
- Analytics
- AI
- Independent execution

ToolMorph should therefore get a premium case study.

---

## MonuDesk

### Positioning

> Order Management SaaS

### Technologies

- Next.js
- TypeScript
- Node.js
- PostgreSQL
- REST APIs

### Contributions

- SaaS features
- Frontend architecture/components
- Backend services
- Authentication
- Database workflows
- Third-party integrations
- QuickBooks integration
- Payment integrations
- Support/product workflow integrations

### Case study angle

> Building and integrating the systems behind an order management SaaS.

Use sanitized screenshots where client confidentiality requires it.

---

## BrandRadar

### Ownership

Not confirmed. Before this project is written or designed, set `ownership` to `owned`, `led`, or `contributed`. Do not publish the card or the case study while that field is blank. Do not use "I built" until the value is `owned` or the role text justifies `led`.

### Positioning

> AI Brand Intelligence Platform

### Description

AI-powered platform that analyzes LLM responses to understand brand visibility and compare mentions against competitors. Use this description only for the product. Kartik's sentence must match the ownership value.

### Contributions

- Interactive dashboards
- Data visualization
- Responsive frontend
- AI workflows
- API integrations
- Product experience

### Technologies

- Next.js
- TypeScript
- Tailwind CSS
- OpenAI APIs

### Case study angle

If owned or led:

> Building an AI product that measures how brands appear inside LLM-generated answers.

If contributed:

> Contributing the product experience for an AI platform that measures how brands appear inside LLM-generated answers.

---

## Optimate

### Positioning

> AI-powered property services optimization platform

Public website describes Optimate as a platform for housing-company service procurement and cost analysis, including tools for competitive bidding and AI-assisted analysis.

For Kartik's portfolio, only claim the parts actually performed by Kartik.

### Portfolio contribution wording

> Contributing to the development of Optimate's production web application, working on product workflows, frontend/backend features and integrations.

Additional technical details can be added once the exact public-safe contribution is confirmed.

Do not imply ownership of the whole product.

---

## Inception Financial

### Positioning

> Client Application / Clean Energy Finance Platform

The public company website positions Inception Financial around clean-energy investment, solar tax-credit strategies and private-client services.

### Kartik's contribution

> Contributed to the client application, including solar calculation workflows and Google Sheets integration, while working at 75way Technologies.

This project is useful because it shows experience outside generic web CRUD applications.

---

## PrefAI

Do not publish PrefAI, and do not offer mobile development as a service, until both of these exist:

- App Store and/or Google Play links
- A written role (owned, led, or contributed) Kartik is willing to say in public

Proposed wording, only after that:

> Contributed to PrefAI, a React Native application, working on AI-powered workflows and production mobile functionality.

Until then, PrefAI is absent from `/work`, `/services`, the resume page and metadata. "React Native" on the source resume is not enough to advertise a mobile service.

---

# 9. Work Page

Route:

```text
/work
```

Purpose:

A visual portfolio index.

This page should be much more visual than textual.

Do not add filters. Seven categories over a handful of projects produces empty states and makes the portfolio look thin. If a project needs a label, use the ownership word (Owned, Led, Contributed) on the card.

## Project tiers

| Project | `caseStudy` | `ownership` | On `/work` |
| --- | --- | --- | --- |
| ToolMorph | full | owned | Card linking to the case study |
| MonuDesk | full | contributed | Card linking to the case study |
| BrandRadar | full, after ownership is set | confirm before publish | Hold the card until ownership is filled in |
| Optimate | brief or none | contributed | Card, or a brief page once copy is safe |
| Inception Financial | brief or none | contributed | Card or brief page |
| PrefAI | none until verified | confirm before publish | Omit until store links and role are confirmed |

Full case studies: ToolMorph, MonuDesk, and BrandRadar once ownership is known. Optimate, Inception and PrefAI stay cards or short pages until permissions and facts exist. A thin case study is worse than a card.

## Smaller engagements

Under the project grid, a short list — not cards — for freelance jobs that are too small for a case study but show range. Use the real Upwork job titles and one specific line each, for example the Stripe/Next.js engagement, the React/Redux bug-fix, and Sportcraft. Link "View on Upwork" where the review is public. No invented metrics.

Each project card includes:

- Image, or the confidential fallback from section 26 when a screenshot cannot be published
- Ownership label
- Project name
- Short outcome, worded to match ownership
- Tech stack
- Year
- Case study link only when one exists; otherwise the live link or no link

No long paragraphs. No filter animation.

---

# 10. Case Study Pages

Route:

```text
/work/[slug]
```

Case studies are intentionally separate from the portfolio index so the index stays visual.

Only projects with `caseStudy: "full"` use the structure below. `brief` pages use hero, role, a short "what I did", and links — not all nine sections. `none` has no detail page.

## Case study structure

### Hero

Project name

One-line description

Ownership (Owned, Led, or Contributed)

Year

Role

Tech

Primary external action, when a public URL exists:

> Visit project

---

### 01 — Context and constraints

Client type (or "independent product"), team size, and what share of the work was Kartik's. Say what was off-limits: NDA, no metrics, sanitized UI.

Keep it to a short paragraph.

---

### 02 — The Problem

What problem the product solved.

Keep concise.

---

### 03 — What I Built

Visual feature breakdown. Wording must match ownership. Contributed projects describe the part Kartik shipped, not the whole product.

---

### 04 — My Role

Be explicit about Kartik's responsibilities.

Examples:

```text
Frontend architecture
Backend APIs
Database workflows
Authentication
Third-party integrations
AI integration
Deployment
```

---

### 05 — Key decisions

Two or three trade-offs: what was chosen, what was rejected, and why. This is the section that shows judgment. Skip it rather than filling it with generic statements.

---

### 06 — Product Walkthrough

Large screenshots, or the confidential visual fallback when real UI cannot be shown.

Optional short video only when one already exists. Do not block launch on a video.

---

### 07 — Architecture

Use a clean system diagram. This is the site's signature visual (section 26).

Example:

```text
Client
 ↓
Next.js
 ↓
API / Server Actions
 ↓
Node.js Services
 ↓
PostgreSQL
 ↓
External Integrations
```

AI projects can show:

```text
User
 ↓
Application
 ↓
Prompt / workflow layer
 ↓
LLM API
 ↓
Validation / business logic
 ↓
UI
```

For contributed work, diagram the slice Kartik touched. Do not draw a confidential architecture that was not approved.

---

### 08 — Challenges

Examples:

- Integration complexity
- Data synchronization
- Authentication
- Third-party APIs
- AI reliability
- Performance
- Production deployment

Only include challenges that actually occurred on that project.

---

### 09 — Outcome

Use measurable numbers only when verified.

Do not fabricate revenue, user or performance statistics. A qualitative outcome is acceptable: what shipped, what the client could do afterward.

---

### 10 — Tech

Visual technology list. Only technologies used on that project.

---

### 11 — Testimonial

Only when a quote can be used publicly. Otherwise omit the section. Do not leave an empty testimonial block.

---

### Close

Next project link (previous / next among published case studies).

> Have a product in mind?

**Book a 30-min call**

**Send a project brief**

---

# 11. Freelance / Services Page

Route:

```text
/services
```

This is the strongest sales page.

## Hero

> Need someone who can build the whole product?

Supporting text:

> I work across frontend, backend, integrations, AI and deployment — one engineer who can work across every layer of your product.

CTAs:

> Book a 30-min call

> Send a project brief

Third path, same visual weight as a text link rather than a third button:

> Hire me on Upwork

Upwork is both proof and a conversion path. Cautious clients can pay through Upwork escrow. Do not make Upwork the only way to hire.

---

## Service categories

Only list a capability that a published project or the resume supports. Do not list GCP, n8n, AI assistants, production monitoring, or mobile (React Native / Expo) until a confirmed project backs the claim. PrefAI does not count until its store links and Kartik's role are verified.

### Full-Stack Development

- React
- Next.js
- TypeScript
- Node.js
- Express
- PostgreSQL
- MongoDB

### SaaS Development

- MVP development
- Customer portals
- Admin dashboards
- Authentication
- Role-based access
- Subscription/product workflows

### AI Development

- LLM integrations
- AI-powered features inside existing products
- Structured AI workflows

Tie this list to BrandRadar and ToolMorph. Do not add "AI assistants" or n8n.

### API & Integration Development

- REST APIs
- Payment systems
- Accounting integrations (QuickBooks on MonuDesk)
- External APIs
- Google integrations (Sheets on Inception)
- Webhooks
- Data synchronization

### Cloud & Delivery

- AWS
- Docker
- GitHub Actions
- CI/CD
- Deployment

GCP is not on the resume's verified skill list. Leave it off until a shipped project uses it.

---

## Engagement types

Do not display fixed pricing.

Instead explain:

### Build from scratch

For founders who have an idea, design or specification.

### Improve an existing product

For teams that need features, performance work, integrations or fixes.

### Take over an existing codebase

For companies that need a developer who can understand and continue an existing application.

### Long-term development

For startups needing an ongoing engineering partner.

---

## Engagement process

Put the concrete hiring process on this page, not a generic "understand, plan, build" list on About.

```text
1. Discovery call (30 minutes)
2. Written scope, timeline and estimate
3. Build with weekly demos and async updates
4. Handoff: repo access, documentation, deployment notes
```

State the reply expectation next to the process: replies within one business day, timezone India (IST).

---

## FAQ

Five or six short answers. No accordion chrome for its own sake; a simple list is enough if it stays scannable.

- **How is pricing set?** Scope, complexity and timeline. No public rate card. See section 55.
- **What timezone do you work in?** India (IST). Bookable hours overlap EU morning and US East morning. See section 19.
- **How do we communicate?** Async updates plus a weekly demo. Email or the tool the client already uses.
- **Who owns the code?** The client owns the code and IP for paid work. NDAs are fine before detailed discussion.
- **Direct contract or Upwork?** Either. Upwork is available when the client wants escrow.
- **Can you take over an existing codebase?** Yes. That is one of the engagement types above.

---

## Why work with me

Use evidence-based points, each tied to something on the site:

- End-to-end work on independent products (ToolMorph) and clear scope on client products (MonuDesk, Inception)
- Production SaaS work, described as contribution where he did not own the product
- Third-party integrations that can be named (QuickBooks, payments, Google Sheets)
- AI features where a published project uses them
- Cloud deployment that matches the resume (AWS, Docker, GitHub Actions)
- Clear communication
- Comfortable working in an existing codebase

Avoid "best developer", "10x engineer", "production monitoring", n8n, GCP, and mobile until a published project supports them. "Full-stack ownership" is only accurate for products he owns.

---

# 12. Testimonials / Social Proof

This should be one of the most important trust sections.

## Homepage testimonial section

Show 2–3 reviews that name a specific outcome. Do not lead with generic praise.

The Stripe/Next.js review that only says it was "great working with Kartik" and "Good work" is too vague for the homepage. Prefer the React emergency bug-fix excerpt if it mentions the actual work: fast response, Redux/API debugging, a clear explanation. Use a short verbatim sentence from that review, with the Upwork link.

Sportcraft can be the third quote only if the public review says something concrete. Otherwise two strong quotes are enough.

Before launch, ask 75way colleagues and current clients for two or three LinkedIn recommendations. Do not invent quotes while waiting. Upwork reviews that are already public can go live.

Always show the rating as **5.0 (3 reviews)** and link to the profile. The count will change; do not design the number into an image.

## Design

Use:

- Quote
- 5-star indicator
- Project title
- Upwork source badge
- Optional "View on Upwork"

Do not make fake testimonials for private SaaS work.

For non-Upwork work, label feedback as:

> Client feedback

only when you have permission to quote it.

---

# 13. Experience

There is no `/experience` route. The timeline is a section of `/about`.

## Timeline

### Freelance Full-Stack Software Engineer
Upwork
Jan 2025 — Present

Key work:

- SaaS development
- AI-powered applications
- React / Next.js
- Node.js
- PostgreSQL
- MongoDB
- Integrations
- Production releases

### Associate Software Developer
75way Technologies
Jan 2024 — Dec 2024

Key work:

- Financial applications
- Education applications
- Ecommerce applications
- React
- JavaScript
- REST APIs
- Reusable frontend/backend patterns
- Collaboration with QA/design/product

If the public "3 years" claim depends on work before January 2024, add that role here before launch. Do not leave a gap between the claim and the timeline.

## Visual treatment

A vertical timeline on the About page. Motion is a short fade as each role enters view. Do not build a page around the timeline, and do not animate a long drawing line as the main effect.

Each milestone shows:

- Company
- Role
- Date
- Main contribution
- Selected projects, linked when a case study or card exists

Avoid a wall of resume text. The HTML resume (section 17) is where the fuller list lives, from the same data.

---

# 14. About Page

Route:

```text
/about
```

Tone:

Professional, personal, but not overly autobiographical.

## Structure

### Who I am

Short introduction. Location: India (IST).

### Experience

The timeline from section 13.

### Open to full-time roles

A short block for recruiters, not a second website:

- Open to full-time roles (yes/no, from `site.ts`)
- Location and remote preference
- Notice period, once known
- Link to `/resume` and LinkedIn

If Kartik is not open to full-time, say so in one line instead of hiding it.

### Beyond code

Keep this small.

Potential items:

- Badminton
- Manga / reading
- Building independent projects
- Learning cloud / DevOps

These support personality. They do not dominate the page.

One line may link to YouTube and Dev.to as external profiles. Do not embed a video gallery here.

### Current focus

> Currently working on Optimate and learning AWS, Kubernetes and Jenkins, alongside freelance full-stack and AI work.

Only name Optimate if that is safe to disclose. If it is not, describe the kind of work without the client name.

Do not repeat the services engagement process here. That lives on `/services`.

---

# 15. Now Page

Route:

```text
/now
```

Keep the page. Link it from the footer only, not the header. It is a status note, not a conversion page.

## Current status

Example:

```text
CURRENTLY

Building
Optimate          (omit the name if it is not public-safe)

Learning
AWS · Kubernetes · Jenkins

Building independently
ToolMorph

Open to
Selected freelance projects · Full-time roles (match site.ts)
```

Pair availability with a date, the same phrase as the hero (`site.ts`), not a permanent "Available" state.

Make this content data-driven from one config file.

Example:

```ts
const now = {
  building: [...],
  learning: [...],
  openTo: [...],
}
```

This avoids a database.

---

# 16. YouTube and other writing

Do not ship `/youtube` in v1.

The channel is not large enough to be a page on a premium engineering site, and a thin video grid undercuts the brand. Link the channel, Dev.to, X and GitHub from the footer. A single sentence on About is enough context.

Revisit a content page only after there is a set of videos or posts worth sending a client to. That future page is listed in section 75.

---

# 17. Resume

Route:

```text
/resume
```

Render an HTML resume from the same experience and project data as the rest of the site. The page should be readable, indexable and printable. Do not build a page that is only download buttons.

## Page content

- Name, role, location (India), email, LinkedIn, Upwork, GitHub
- Short summary, consistent with the hero and the timeline
- Experience (section 13)
- Selected work, with ownership labels
- Skills that appear in shipped projects or the resume source
- The recruiter block from About: full-time interest, remote preference, notice period

Actions:

**Download PDF**

**Print** (the browser print dialog on this HTML page, not a separate print layout project)

**View LinkedIn**

**View Upwork**

The PDF should exist inside the project:

```text
/public/resume/Kartik-Singh-Bisht-Resume.pdf
```

Use the repository copy as the primary download. Keep the Google Drive link only as a private backup. The HTML page and the PDF must not disagree on dates or years of experience.

---

# 18. Contact Page

Route:

```text
/contact
```

## Layout

LEFT:

> Send a project brief.

Short paragraph. State timezone (India, IST) and that replies go out within one business day.

Show:

- Email (use `hello@kartiksinghbisht.com` once the domain mailbox exists; Gmail only until then)
- LinkedIn
- Upwork, including a "Hire me on Upwork" link
- GitHub
- X

RIGHT:

The form is the **Send a project brief** path. Keep it short.

### Fields

```text
Name
Email
Company (optional)
Project type (required select):
  New product
  Existing product
  Integration
  AI feature
  Full-time role
Budget range (optional)
Timeline (optional)
Message
```

The project-type select replaces a free-text "What are you looking to build?" field. "Full-time role" is how recruiters enter without a separate recruiter form. Budget and timeline are optional so a short note can still be sent.

CTA:

> Send a project brief

Success state:

> Thanks — your brief has been sent. I'll reply within one business day.

Also show **Book a 30-min call** on this page so the form does not hide the call path.

---

# 19. Book a Call

**Book a 30-min call** is the primary CTA. **Send a project brief** is the secondary CTA. Do not introduce other labels ("Let's work together", "Start a conversation", "Let's talk", "Send message").

## Availability

Show timezone and reply time next to every booking entry point:

```text
India (IST, UTC+5:30)
Replies within one business day
```

Bookable windows must overlap client business hours. Do not offer only Monday–Friday 9:00 AM–6:00 PM IST. That block is 11:30 PM–8:30 AM US Eastern and is unusable for most US founders.

```text
Monday–Friday, 30-minute slots
1:30 PM–4:30 PM IST   EU morning
6:30 PM–9:30 PM IST   US East morning
```

The scheduler should display slots in the visitor's local timezone.

## Recommended architecture

For v1, do not build a custom calendar.

Use Cal.com (free tier): it embeds in the site, converts slots to the visitor's timezone, and can emit a booking event for analytics.

```text
Visitor clicks Book a 30-min call
        ↓
Embedded Cal.com (branded to the site, visitor's timezone)
        ↓
Selects a 30-min slot
        ↓
Enters name + email
        ↓
Calendar event + meeting link
        ↓
Confirmation to the visitor
        ↓
booking_completed can be recorded
```

Google Calendar Appointment Schedules are a fallback only. That page is cross-origin, hard to brand, and has no completion callback. If that fallback is used, do not track `booking_completed`. Track `booking_started` (the click) only.

This still avoids a database, custom availability logic, calendar OAuth, and a custom email server. Do not add `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` or `GOOGLE_CALENDAR_ID`.

---

# 20. Contact Backend

## Recommended v1

No database required.

Use:

```text
Next.js Server Action
        ↓
Zod validation
        ↓
Honeypot + Cloudflare Turnstile
        ↓
Resend
        ↓
hello@kartiksinghbisht.com
```

Resend is the v1 provider. Do not add Postmark or SES unless Resend cannot send from the domain.

## Email content

Subject:

```text
New portfolio enquiry from {name}
```

Body:

```text
Name:
Email:
Company:
Project type:
Budget:
Timeline:
Message:
```

Add a reply-to header using the submitted email.

---

# 21. Database Decision

## V1: No database

A database is unnecessary for the first release.

Use:

- TypeScript config files
- MDX or static project data
- Static JSON where useful

Add a database only when there is a clear requirement.

## Future database candidates

If the website grows, PostgreSQL is preferred.

Potential future tables:

```text
projects
testimonials
blog_posts
contact_submissions
availability
content_updates
```

Do not add PostgreSQL just to demonstrate that the developer knows PostgreSQL.

---

# 22. Technical Stack

## Required

```text
Next.js (App Router)
TypeScript
Tailwind CSS
shadcn/ui
Framer Motion (leaf client components only)
MDX for full case studies
Zod
Resend
Cal.com embed
Cloudflare Turnstile
```

## Supporting

```text
React
Lucide icons
React Hook Form, only if the contact form needs it
```

## Do not add for v1

```text
Lenis or any smooth-scroll library
next-sitemap (use app/sitemap.ts and app/robots.ts)
GA4 or any cookie-based analytics
Google Calendar OAuth (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALENDAR_ID)
A database client
```

Cal.com's free embed does not need Google OAuth inside this repo. Turnstile is required, not optional. See sections 19, 33 and 37.

---

# 23. Suggested Next.js Architecture

Use App Router.

Example:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── opengraph-image.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── services/
│   │   └── page.tsx
│   │
│   ├── now/
│   │   └── page.tsx
│   │
│   ├── resume/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   └── privacy/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── projects/
│   ├── testimonials/
│   ├── experience/
│   ├── services/
│   ├── contact/
│   ├── booking/
│   ├── motion/
│   └── ui/
│
├── content/
│   ├── site.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── testimonials.ts
│   ├── services.ts
│   ├── now.ts
│   └── case-studies/
│       ├── toolmorph.mdx
│       ├── monudesk.mdx
│       └── brandradar.mdx
│
├── lib/
│   ├── email.ts
│   ├── analytics.ts
│   ├── validation.ts
│   └── utils.ts
│
└── styles/
    └── ...
```

One content folder. Do not also create `data/site.ts`. Do not create `app/experience` or `app/youtube`.

The contact form is a Server Action in the contact page (or a single route handler). It does not need its own database. Full case-study prose is MDX next to the structured project record. `projects.ts` holds the card fields from section 24; the MDX body is the long-form page. Brief projects have no MDX file.

`opengraph-image.tsx` uses `next/og` so each route can template a preview (name, one line, a simple system diagram). Do not hand-draw a unique OG file per page, and do not put the Upwork rating into the image.

Keep project content out of components. Pages are Server Components. Framer Motion stays inside `components/motion`.

---

# 24. Content Model

Each project should be represented by structured data.

Example:

```ts
type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  year: string;
  role: string;
  ownership: "owned" | "led" | "contributed";
  caseStudy: "full" | "brief" | "none";
  status: "live" | "private" | "archived";
  featured: boolean;

  technologies: string[];

  image?: string;
  gallery?: string[];

  liveUrl?: string;
  githubUrl?: string;

  contribution: string[];

  context?: string;
  decisions?: string[];
  challenge?: string[];
  solution?: string[];
  outcome?: string[];

  /** When true, use the designed fallback visual and omit private UI, URLs and metrics. */
  confidential?: boolean;
};
```

`caseStudy` decides the page. `confidential` only controls what may be shown. Do not use a category array to drive filters; v1 has no filters.

Structured fields live in TypeScript. The body of a `full` case study is MDX (section 23), not a pile of strings in this type. Brief pages can stay in the TypeScript fields.

BrandRadar must not ship with `ownership` unset. PrefAI stays out of the content file until it is verified.

---

# 25. Animation System

Use Framer Motion in small client wrappers so pages stay Server Components.

The goal is:

> **Motion that explains hierarchy, not motion that shows off.**

## Hero

- Initial headline reveal
- Supporting content fade-up
- Image slight scale/reveal
- CTA stagger

## Scroll

One treatment: a short fade-up as a section enters. Do not also slide, scale, and draw a timeline line. Stacking those reads as a template.

## Project cards

On hover:

- Image slight zoom
- Arrow translation

Do not animate the entire card.

## Timeline

Roles on About fade in. No progressively drawing line.

## Do not add

- Page transitions (opacity/translate between routes)
- A custom cursor
- Magnetic buttons
- A scroll-progress bar
- Lenis or any smooth-scroll library

These fight `prefers-reduced-motion`, add client JavaScript, and are common template signals. Honor `prefers-reduced-motion` by disabling the remaining fades.

---

# 26. Decorative Design Language

One motif: the **system diagram** (UI → API → data → integrations, or the AI variant in section 10). It is the picture of "one engineer across the product."

Use it in:

- A small diagram in the hero, beside the photo
- The architecture section of each full case study
- OG images, as a simple diagram rather than a fake product screenshot

Supporting details, used sparingly:

- Small monospace metadata (year, ownership, stack)
- Thin borders
- Whitespace

Do not also add a fine grid, coordinate labels, `01 / 02 / 03` section indexes, abstract lines connecting sections, or pulsing status dots. One motif is the identity. A stack of motifs is the template.

## Confidential project visual

Optimate, Inception and any other project without permission to show UI still need a visual the same size as a screenshot, or the work grid breaks.

Design one fallback frame and reuse it:

- Same aspect ratio as real screenshots
- Product name, one-line description, ownership label
- A simplified system diagram of the slice that is safe to describe
- Set in the site's type and colors

Do not use a stock illustration, a blurred fake dashboard, or a generic laptop mockup. If even the diagram would reveal something private, the card uses type only inside that same frame.

---

# 27. Homepage Journey / Scroll Story

Use the canonical order from section 6. Do not invent a second sequence.

```text
HERO + NAMED PROOF
      ↓
FEATURED WORK
      ↓
TESTIMONIALS
      ↓
HOW I CAN HELP
      ↓
BOOK A CALL / SEND A BRIEF
```

Experience lives on `/about`, not as a homepage section. Proof is named projects and the Upwork rating inside the hero, not a strip of labels.

---

# 28. Services Conversion Funnel

Every major section should have a purpose.

### Hero

"Can this person build what I need?"

### Work

"Has he built real things?"

### Case studies

"Can he actually solve complex problems?"

### Testimonials

"Did clients like working with him?"

### Services

"Can he help with my specific need?"

### Contact

"How do I start?"

### Book a Call

"Can I talk to him directly?"

The visitor should never wonder what to do next.

---

# 29. Footer

Minimal but useful.

Left:

```text
Kartik Singh Bisht
Full-Stack + AI Developer
```

Center:

```text
Work
Services
About
Resume
Contact
Now
Privacy
```

Right:

```text
GitHub
LinkedIn
Upwork
X
YouTube
Dev.to
```

YouTube and Dev.to are external links. There is no YouTube page and no Experience page.

Bottom:

```text
© 2026 Kartik Singh Bisht
Built with Next.js · TypeScript
```

Availability, from `site.ts`, with a date:

> Taking one new project from November 2026

Do not print a permanent "Available for selected freelance projects" line.

---

# 30. SEO

The website should be optimized as a real professional site.

## Primary SEO target

The site is a conversion page for people who already arrive from Upwork, LinkedIn, referrals, or a search for Kartik's name. It will not rank for "React Developer" or "Full Stack Developer India", and those terms attract the wrong clients. Do not write a page to chase them.

What to optimize for:

- The name: Kartik Singh Bisht
- Fast proof for visitors coming from Upwork or LinkedIn
- Case-study titles that describe the work, for example "QuickBooks integration for an order management SaaS"

Do not target "React Native Developer". Mobile is not a published service.

Avoid keyword stuffing.

## Metadata

Homepage:

```text
Title:
Kartik Singh Bisht — Full-Stack & AI Developer

Description:
Full-stack and AI developer building production-ready SaaS,
web applications and AI-powered automations with Next.js,
React, Node.js and modern cloud technologies.
```

Every project page gets unique metadata.

---

# 31. Structured Data

Add JSON-LD for:

- Person
- WebSite
- ProfilePage where appropriate
- CreativeWork / SoftwareApplication for selected projects if appropriate

Person schema should include:

- Name
- Job title
- Website URL
- LinkedIn
- GitHub
- Upwork
- X
- YouTube

Do not put the raw email address in JSON-LD. It is scraped. The contact page can still show the address.

Only publish public, stable links.

---

# 32. Open Graph

Every major page should have a proper social preview.

Homepage OG:

```text
Kartik Singh Bisht
Full-Stack + AI Developer
Building products, SaaS & AI automation
```

Project pages:

```text
ToolMorph
Developer Tools & AI Platform
```

Generate previews with `next/og` (`app/opengraph-image.tsx` and per-route images), using the type and the system-diagram motif. Do not rely on a generic screenshot, and do not bake the Upwork score into the image.

Homepage text:

```text
Kartik Singh Bisht
Full-Stack + AI Developer
```

Project pages use the project name and one-line description, for example ToolMorph / Developer Tools & AI Platform. Ownership projects that are not yet public (BrandRadar before the ownership decision, PrefAI) get no OG route.

---

# 33. Analytics

Use a cookieless analytics tool (Plausible, Umami, or Vercel Analytics). Do not use GA4.

A cookie banner for GA4 would sit on the first screen of a site aimed at EU and UK clients. Cookieless analytics removes the banner and shortens the privacy page.

Track only what changes a decision:

```text
page_view
case_study_view
contact_form_submitted
booking_started
upwork_click
resume_download
```

`contact_form_submitted` and `upwork_click` are the freelance conversions. `booking_started` is the click into Cal.com. `booking_completed` is recorded only if the embed actually emits it (section 19). `resume_download` is a recruiter signal; report it separately from freelance conversions.

Do not track form field contents or other personal data.

---

# 34. Accessibility

Requirements:

- Semantic HTML
- Correct heading hierarchy
- Visible focus states
- Keyboard navigation
- Alt text
- Sufficient contrast
- Reduced-motion support
- Buttons must have meaningful labels
- Links must describe destinations

Animations should respect:

```css
prefers-reduced-motion
```

---

# 35. Responsive Design

Must be designed intentionally for:

### Mobile
320–767px

### Tablet
768–1023px

### Desktop
1024px+

### Large screens
1440px+

The desktop layout must not simply shrink onto mobile.

Important mobile rules:

- Hero typography scales down
- Project cards become vertical
- Navigation becomes compact
- Complex decorative animation is reduced
- Photo crop remains professional
- CTAs become full-width when useful
- Case study images become swipeable/stacked
- Booking button remains easy to reach

---

# 36. Performance

The portfolio should feel extremely fast.

Targets:

- Fast initial render
- Optimized images
- WebP/AVIF
- Lazy loading for below-the-fold media
- Avoid unnecessary client components
- Use Server Components by default
- Minimize third-party scripts
- Minimize third-party scripts (analytics, Turnstile, Cal.com)
- Use `next/font` for Instrument Serif, Geist Sans and Geist Mono

Do not build a YouTube page and do not embed players. Footer links do not load YouTube.

---

# 37. Security

Contact form must include:

- Server-side validation with Zod
- A honeypot field
- Cloudflare Turnstile
- Rate limiting (in-memory is enough at this volume)
- No secrets in client code
- A reply-to header set to the submitted email
- Environment variables for secrets

Do not add Google OAuth credentials. Do not commit `.env`.

```text
RESEND_API_KEY
TURNSTILE_SECRET_KEY
```

---

# 38. Environment Variables

Possible structure:

```env
NEXT_PUBLIC_SITE_URL=https://kartiksinghbisht.com
NEXT_PUBLIC_CAL_URL=

RESEND_API_KEY=
CONTACT_EMAIL=hello@kartiksinghbisht.com

TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

`CONTACT_EMAIL` is the custom-domain address once DNS is verified with Resend. Until that mailbox exists, do not print the Gmail address as the public contact; finish the domain mailbox before launch.

Do not add `NEXT_PUBLIC_GA_ID`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, or `GOOGLE_CALENDAR_ID`.

---

# 39. Asset Structure

```text
public/
├── images/
│   ├── profile/
│   │   └── kartik.jpg
│   │
│   ├── projects/
│   │   ├── toolmorph/
│   │   ├── monudesk/
│   │   ├── brandradar/
│   │   ├── optimate/
│   │   └── inception/
│   │
│   └── og/
│
├── resume/
│   └── Kartik-Singh-Bisht-Resume.pdf
│
└── icons/
```

Use placeholder files initially where assets are not ready.

---

# 40. Content / Asset TODOs

Before launch, collect:

### Required for v1

- Final professional photo
- Final resume PDF
- Domain mailbox `hello@kartiksinghbisht.com`
- Years-of-experience decision (section 76)
- BrandRadar ownership decision (publish the project only if it is set)
- ToolMorph screenshots
- MonuDesk screenshots that are safe to publish, or the confidential frame
- Verbatim Upwork excerpts with the review count

### When permitted, not a launch blocker

- Optimate screenshots
- Inception client-app screenshots
- BrandRadar screenshots, after ownership is set

### Do not block launch

- PrefAI store links and screenshots (the project stays off the site until both exist)
- YouTube video URLs (footer link to the channel is enough)

---

# 41. Confidentiality Rules

This is critical.

For client work:

### Safe to publish

- Technology categories
- High-level responsibility
- Public product links
- Public screenshots
- Publicly available product descriptions

### Avoid unless approved

- Customer data
- Private dashboards
- API keys
- Internal URLs
- Unreleased features
- Confidential architecture
- Revenue data
- Internal metrics
- Client-only documents

For each project create:

```ts
confidential: boolean
```

and only show detail that is explicitly safe.

---

# 42. Upwork Integration

Upwork is a strong trust signal.

Use it in:

- Hero social links
- Proof section
- Testimonials
- Services page
- Footer

Recommended CTA:

> View my Upwork profile ↗

Current public Upwork information can be presented carefully as verified external proof.

Avoid making Upwork the entire identity. The personal website should remain the primary brand.

---

# 43. LinkedIn / GitHub / X / Dev.to

## LinkedIn

Use for professional credibility.

## GitHub

Use for technical proof.

Could include a small "Open Source / GitHub" section later.

## X

Keep as a social/profile link rather than a major content section.

## Dev.to

A future "Writing" section can link to Dev.to posts.

Do not create an empty blog page just to have one.

---

# 44. "Writing" Strategy

Do not build a full blog CMS in v1.

Instead:

```text
Writing
→ Dev.to
```

Later, if Kartik begins publishing consistently:

```text
/blog
/blog/[slug]
```

using MDX.

---

# 45. Footer Availability Indicator

Use the same dated phrase as the hero, from `site.ts`:

```text
Taking one new project from November 2026
```

When there is no availability, say so ("Not taking new projects until …") instead of hiding the line or leaving a permanent green dot. No pulsing "live" indicator.

---

# 46. Personal Brand Details

Use "Kartik Singh Bisht" as the full professional identity.

Short reference:

> Kartik

Possible logo/wordmark:

```text
KB
```

or simply:

```text
Kartik.
```

Recommended:

> **Kartik.**

Simple text-based branding feels stronger and more timeless than a complicated developer logo.

---

# 47. Homepage Content Draft

This draft matches section 2 and section 6. If those change, update this section in the same edit.

## Eyebrow

> FULL-STACK + AI DEVELOPER · INDIA (IST) · TAKING ONE NEW PROJECT FROM NOVEMBER 2026

## Headline

Option A (default):

> I build and ship SaaS products end to end: frontend, backend, integrations and AI.

Option B:

> A full-stack engineer who can join your product, learn the codebase and ship.

## Description

> I'm Kartik, a full-stack developer in India (IST). I take products from an idea or an existing codebase through frontend, backend, integrations, AI features and production deployment.

## CTAs

> Book a 30-min call

> Send a project brief

## Proof line

> Integrations for MonuDesk (QuickBooks, payments) · Launched ToolMorph (18+ tools) · 5.0 on Upwork (3 reviews)

---

# 48. Services CTA Copy

> Building something new?

> Have an existing product that needs another engineer?

> Need someone who can work across frontend, backend, integrations and deployment?

CTA:

**Book a 30-min call**

Secondary:

**Send a project brief**

---

# 49. Final Homepage CTA

Large closing section:

> **Have an idea worth building?**

Supporting:

> Tell me what you're working on. I'll help you figure out what to build, how to build it and what it takes to get it into production.

Buttons:

**Book a 30-min call**

**Send a project brief**

---

# 50. Design Components

Create reusable components such as:

```text
SiteHeader
SiteFooter
Container
SectionHeading
Button
SocialLinks
Hero
ProfileCard
AvailabilityNote
ProjectCard
FeaturedProject
ProjectGrid
ConfidentialFrame
TestimonialCard
RatingStars
Timeline
ExperienceItem
ServiceList
TechStack
CTASection
ContactForm
BookingButton
NowCard
ImageGallery
CaseStudyHero
CaseStudySection
ArchitectureDiagram
```

`AvailabilityNote` is the dated text phrase from `site.ts`. It is not a pulsing dot.

`ConfidentialFrame` is the fallback in section 26.

`ArchitectureDiagram` is the signature motif. Build it once and reuse it in the hero, case studies and OG images.

Do not build `MagneticButton`, `ScrollProgress`, `ProjectFilter`, `YouTubeCard`, `StatsStrip` or `CapabilityCard`. How I can help is a short typographic list, not a card grid. There is no YouTube page and no project filter.

---

# 51. UI Rules

Buttons:

- One primary style
- One secondary style
- One ghost style

Cards:

- Use cards only where they improve grouping
- Do not put every section inside rounded rectangles

Borders:

- Thin
- Low-contrast
- Use spacing before adding borders

Radius:

Recommended around:

```text
12px–20px
```

Avoid excessive pill UI.

Shadows:

Very subtle.

The visual language should feel more editorial/product than dashboard.

---

# 52. Motion Tokens

Define shared animation values.

Example:

```ts
const motion = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
};
```

Use consistent easing.

Prefer:

```text
easeOut
spring for small interactions
```

Avoid giant elastic effects.

---

# 53. Dark Mode

### Recommendation

Do not make dark mode a priority for v1.

The core brand should be the light theme.

A dark mode can be introduced later if analytics show demand.

The requested visual identity is light, clean and easy on the eyes, so dark mode should not distract from the main design work.

---

# 54. Contact + Calendar UX

Desktop and mobile both offer the same two actions. Booking does not replace the form.

```text
Book a 30-min call
Send a project brief
```

On `/contact`, the form is the page and the booking link sits beside it. In the header, booking is the primary button and the brief is reached from `/contact` (and from the mobile menu).

Some visitors prefer asynchronous communication. Do not hide the form behind the scheduler.

---

# 55. No Pricing

Do not show hourly/fixed project pricing.

Instead:

> Project pricing depends on scope, complexity and timeline.

Use contact and discovery calls to qualify work.

---

# 56. Hosting

v1 runs on Vercel.

```text
GitHub
   ↓
Vercel (preview on pull requests, production on main)
   ↓
kartiksinghbisht.com
```

Vercel provides HTTPS, a CDN and preview URLs. The contact Server Action needs a Node runtime, which Vercel provides. Connect the domain, set the environment variables from section 38, and deploy from the first week so content can be reviewed on a real URL.

Do not launch on EC2, Docker and Nginx. That setup means operating a server, renewing TLS, and running without a CDN, for a site whose only dynamic feature is a contact form.

S3 + CloudFront is not the v1 path either: a static export cannot host the contact Server Action without a second backend.

## Domain

```text
kartiksinghbisht.com
```

Public email: `hello@kartiksinghbisht.com` (section 38).

---

# 57. CI

On pull requests:

```text
Lint
   ↓
Typecheck
   ↓
Build
```

Playwright covers the journeys in section 61. A failed lint, typecheck or build blocks merge.

Production is Vercel's deploy of `main`. No Docker build in this pipeline.

---

# 58. Docker

Not part of v1. Section 59 is where a later self-hosted setup belongs.

If that later setup is built, the image should be multi-stage, non-root, `output: "standalone"`, with no dev dependencies and `NODE_ENV=production`. Write it up as a DevOps note. Do not move the live portfolio onto it just to have a Dockerfile.

---

# 59. Future Cloud Expansion

Kartik is currently strengthening:

- AWS
- Kubernetes
- Jenkins
- DevOps

The portfolio can later be used as a practical DevOps learning project: Docker on a single host, or the pipeline below. That is a write-up after the site is live, not the way v1 is hosted (section 56).

Possible future architecture:

```text
GitHub
   ↓
GitHub Actions
   ↓
Container registry
   ↓
One host (or Kubernetes, only if there is a real reason)
   ↓
AWS
```

Do not deploy this portfolio on Kubernetes to demonstrate Kubernetes. Do not run EC2, Nginx and a custom rollback for launch.

---

# 60. GCP

Do not list GCP on the site in v1.

It is not in the resume's verified skills, and no published project uses it. Wanting to offer GCP later is not a claim the site can make. AWS, Docker and GitHub Actions are the delivery line.

Add GCP only after a shipped project uses it, in the same commit that adds that project.

---

# 61. Testing Strategy

Use:

### Unit / component

- Vitest or Jest where useful

### E2E

- Playwright for:
  - homepage navigation
  - project pages
  - contact form
  - booking CTA
  - resume download

Do not create dozens of tests for static content.

Focus on critical user journeys.

---

# 62. Error / Empty States

Create:

- 404 page
- Error boundary
- Contact form error
- Contact form success
- Booking unavailable fallback
- Broken image fallback
- YouTube unavailable fallback

404 copy example:

> You found a page I haven't built yet.

CTA:

**Back to homepage**

---

# 63. Privacy

The site uses:

- Cookieless analytics (section 33)
- A contact form (Resend)
- Cal.com for booking

YouTube is an outbound link, not an embed, so the privacy page does not need a YouTube-cookie section.

Explain what those three services receive, in a short page. No cookie banner. No long legal document.

---

# 64. Recommended Build Phases

This is the only build order. Sections 65 and 80 point here. Do not keep a second list.

Content work starts on day 0 and runs beside design, because screenshots and permissions depend on other people.

## Day 0 — Content, in parallel

- Decide the years-of-experience wording (section 76)
- Set BrandRadar ownership, or leave it out of v1
- Client permission for MonuDesk, Optimate and Inception screenshots
- Pick verbatim Upwork excerpts; ask for LinkedIn recommendations
- Final photo, resume PDF, domain mailbox `hello@kartiksinghbisht.com`

## Phase 1 — Design system

- Next.js, TypeScript, Tailwind, shadcn/ui
- Instrument Serif + Geist, ink accent, muted text that passes AA
- Focus states, heading rules, `prefers-reduced-motion`
- Header, footer, tokens
- Deploy a Vercel preview immediately

## Phase 2 — Homepage

Canonical order from section 6, with metadata and the homepage OG image in the same phase.

## Phase 3 — Work and case studies

- `/work` with ownership labels and the confidential frame
- Full case studies: ToolMorph, MonuDesk, BrandRadar only if ownership is set
- Smaller engagements list

## Phase 4 — Services

Including the engagement process, FAQ and Upwork hire link.

## Phase 5 — Contact

- Form with project-type select
- Server Action, Resend, Zod, honeypot, Turnstile
- Cal.com embed and the IST overlap windows

## Launch v1

Homepage, work, the ready case studies, services and contact. Preview URL already exists; point the domain at it when those pages are honest.

Each of those pages ships with its metadata, sitemap entry and the cookieless analytics events it needs. Accessibility and image performance are part of the components, not a later cleanup.

## After launch

- About, including the experience timeline
- HTML resume + PDF
- Now
- Privacy

## Not in v1

- `/youtube`, `/experience`
- EC2, Docker, Nginx, Kubernetes
- GA4, a CMS, a database

---

# 65. Development Priority

Follow section 64. There is no separate priority list.

The first public milestone is homepage, work, the case studies that are ready, services and contact, on the Vercel preview. About, resume, Now and privacy follow that launch. Do not build infrastructure first, and do not build a YouTube page.

---

# 66. What NOT to Build

Avoid these in v1:

- Full CMS
- Database
- Authentication
- Admin dashboard
- Client portal
- Blog CMS
- Custom calendar engine
- Custom email server
- Real-time chat
- Excessive Three.js/WebGL
- Complex 3D portfolio
- Theme marketplace
- Public pricing calculator

They add complexity without improving the core goal.

---

# 67. Portfolio Quality Bar

Before launch, the site should pass this mental test:

### Recruiter

> "I understand what he does in 10 seconds."

### Founder

> "He can work across frontend, backend, integrations and deployment."

### Freelance client

> "He has actually worked on production applications and integrations."

### Technical interviewer

> "He has enough technical depth to explain the work behind these projects."

### Visitor

> "This feels like a real professional, not a template portfolio."

---

# 68. Brand Personality

The website personality should be:

```text
Professional      40%
Technical         25%
Product-minded    20%
Creative          10%
Personal           5%
```

Avoid:

```text
Corporate          ❌
Overly playful     ❌
Hacker aesthetic   ❌
AI buzzword-heavy  ❌
Portfolio-template ❌
```

---

# 69. Recommended Homepage Visual Rhythm

Follow the canonical order in section 6. Vary the treatment inside that order so the page is not a stack of identical cards:

```text
Hero: large type + photo + small system diagram
Featured work: large product screenshots
Testimonials: quotes, not cards-in-cards
How I can help: short outcome lines, not a 2×2 card grid
Final CTA: large type, two buttons
```

Do not add an experience timeline or a second proof strip to the homepage.

---

# 70. Project Image Direction

Screenshots should be shown as product evidence.

Instead of small screenshots inside tiny cards:

Use:

```text
Large screenshot
with subtle crop
+ floating metadata
```

Possible treatment:

```text
┌──────────────────────────────────────────────┐
│                                              │
│             PROJECT SCREENSHOT               │
│                                              │
└──────────────────────────────────────────────┘

MONUDESK
Order management SaaS

Next.js · Node.js · PostgreSQL
```

Case study pages can show larger galleries.

---

# 71. Personal Photo Direction

The provided professional portrait is suitable for the brand.

Use it as:

- Hero profile visual
- About page portrait

Avoid:

- Circular resume-avatar treatment
- Extremely heavy AI effects
- Cartoon transformation
- Excessive background removal artifacts

The current formal outfit supports the professional tone well.

---

# 72. Suggested Logo / Wordmark

Primary:

```text
Kartik.
```

Alternative:

```text
KB
```

Do not create a complicated logo.

The name itself should become the brand.

---

# 73. Mobile Navigation

Same destinations as the desktop header (section 5):

```text
Work
Services
About
Resume

Book a 30-min call
Send a project brief
```

**Book a 30-min call** is the prominent action. Now, YouTube and privacy stay in the footer.

---

# 74. SEO-Friendly URL Strategy

Use clean URLs:

```text
/
about
work
work/toolmorph
work/monudesk
work/brandradar
work/optimate
work/inception-financial
services
now
resume
contact
privacy
```

Omit `work/brandradar` until ownership is set. Omit Optimate or Inception detail URLs when `caseStudy` is `none` (the card can still appear on `/work`). Do not add `experience` or `youtube`.

No:

```text
/projects?id=123
/project-page-1
/my-awesome-project
```

---

# 75. Future Extensions

Once the website is established:

### Potential additions

- Blog (case studies already use MDX; a blog is a later use of the same setup)
- Engineering notes
- Project changelog
- Open-source section
- Interactive architecture diagrams
- Client portal
- CMS
- Newsletter
- Availability calendar integration
- Dark theme

These should remain optional.

---

# 76. Initial Content Sources

### Resume

The provided resume is the primary factual baseline for:

- Summary
- Skills
- Experience
- Education
- Project history

Current resume states 3 years of experience and lists React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, Supabase, OpenAI APIs, LLM integrations, AWS, Vercel, Docker, Jenkins and GitHub Actions.

The public timeline in this spec starts at 75way in January 2024, which is under three years as of October 2026. Before launch, pick one:

- Add the pre-2024 work that the resume counts, and then the site may say "3 years"
- Or drop "3 years" and state the verified span

Do not publish "3+" in either case. GCP, n8n, production monitoring and mobile are not in that resume list and must not be added as services. Jenkins and Kubernetes may be described as things being learned (About and Now), not as services already offered.

### External profiles

Upwork:

https://www.upwork.com/freelancers/~01e74ab725bfcfa302?viewMode=1

LinkedIn:

https://www.linkedin.com/in/kartik-singh-bisht-13816a207/

GitHub:

https://github.com/kartik01a

X:

https://x.com/KartikBS01

Dev.to:

https://dev.to/kartik_singhbisht_e001ab

YouTube:

https://www.youtube.com/@letstrycoding6389

Email:

Public: hello@kartiksinghbisht.com

Private inbox until the domain mailbox is verified: kartiksinghbisht1@gmail.com

Do not print the Gmail address on the site.

Resume backup:

https://drive.google.com/file/d/1mo5A9M4q9Dwqi2himLdmUODdQlj7P_Ur/view?usp=sharing

Target domain:

https://kartiksinghbisht.com

---

# 77. Verified External Reference Notes

At planning time:

- The public Upwork service page, at planning time, shows 100% Job Success and a 5.0 rating from 3 reviews. On the site, write **5.0 (3 reviews)** and link the profile. Job Success changes; do not bake either number into an OG image.
- The public Optimate website confirms the product is a software/service platform for housing-company cost analysis and competitive procurement. Naming Optimate still requires a confidentiality check.
- The public Inception Financial website describes its clean-energy finance platform and private-client focus. Kartik's role is contribution while at 75way, not ownership of the company or the product.

These external facts should be used only to make public-facing project descriptions accurate. Kartik's exact contribution remains the authoritative source for personal role descriptions.

---

# 78. Final Product Definition

The finished website should feel like:

> **A premium personal software-engineering brand that happens to be a portfolio.**

Not:

> "Here is my resume as a website."

The visitor should experience a progression:

```text
"Kartik looks professional."
        ↓
"He builds real software."
        ↓
"He understands frontend + backend."
        ↓
"He has worked with SaaS + AI."
        ↓
"He can handle integrations and deployment."
        ↓
"Clients have actually hired him."
        ↓
"I understand exactly what he can build for me."
        ↓
"I should contact him."
```

That is the core objective of the entire design.

---

# 79. Final Launch Checklist

## Content

- [ ] Final headline approved
- [ ] Final professional bio
- [ ] Project descriptions approved
- [ ] Client confidentiality checked
- [ ] Testimonials approved
- [ ] Resume uploaded
- [ ] Professional photo uploaded
- [ ] YouTube and Dev.to links verified (no YouTube page)
- [ ] All external links verified

## Design

- [ ] Light theme polished
- [ ] Desktop design
- [ ] Mobile design
- [ ] Tablet design
- [ ] Animation polish
- [ ] Project visuals
- [ ] OG images

## Engineering

- [ ] Next.js App Router
- [ ] TypeScript
- [ ] Tailwind
- [ ] shadcn/ui
- [ ] Framer Motion
- [ ] Form validation
- [ ] Resend
- [ ] Turnstile and honeypot
- [ ] Cal.com booking
- [ ] Cookieless analytics
- [ ] Contrast and focus states checked

## SEO

- [ ] Metadata
- [ ] Sitemap
- [ ] Robots
- [ ] Canonical URLs
- [ ] Open Graph
- [ ] JSON-LD
- [ ] Search Console

## Production

- [ ] Vercel project
- [ ] Preview deploy from the first week
- [ ] Environment variables
- [ ] Domain connected (HTTPS via Vercel)
- [ ] hello@kartiksinghbisht.com receiving mail

Docker, EC2 and Nginx are post-launch (section 58), not launch gates.

---

# 80. Implementation Principle

Build in the order in section 64:

> **Content collection from day 0 → design system (including accessibility) → homepage → work and case studies → services → contact → launch on Vercel → about, resume, now, privacy**

Do not start with infrastructure, a database, or an admin panel. Do not leave contact, metadata or contrast for a final phase.

The first thing to build is the **brand and user experience**.

The site succeeds when the design makes the visitor want to keep scrolling, the projects prove technical ability, the testimonials establish trust, and the final CTA makes contacting Kartik feel like the obvious next step.
