# HackerHub

A community hub for cybersecurity students: curated articles, tools, and resources — with ad monetization support. Built with Next.js (App Router) and Tailwind CSS.

## Tech Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Quick Start
1. Copy `.env.example` to `.env.local` and set your AdSense IDs after approval.
2. Install and run:

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Monetization Options
- Google AdSense: Broad reach; requires site approval and policy compliance.
- Carbon Ads: Developer-focused audience; apply for a publisher account.
- EthicalAds: Privacy-friendly, developer community; apply for publisher.
- BuySellAds: Network of niche sites; manual approvals.
- Affiliates: TryHackMe, Hack The Box, PentesterLab, Udemy, book stores.
- Sponsorships: GitHub Sponsors, Patreon, direct partners.

Start with content quality, then apply to AdSense or developer-friendly networks (Carbon/EthicalAds). Place ad slots in non-intrusive areas (below hero, sidebar, list bottoms).

## Project Structure
- `app/` — routes: Home, Articles, Tools, Resources
- `components/` — UI and `AdSlot`
- `content/` — sample data
- `styles/` — Tailwind styles

## Deploy
- Vercel is recommended for Next.js. After pushing to GitHub, import the repo in Vercel and set environment variables.

## Open Source
Choose a license before publishing (MIT is common). Let me know if you want me to add MIT now.
