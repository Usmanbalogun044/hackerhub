# Contributing to HackerHub

Thanks for your interest in contributing! This project is frontend-only (Next.js), and we keep content simple so anyone can add tools and explanations via pull requests.

## Workflow
- Fork the repo and create a feature branch: `feat/add-tool-<slug>`
- Add or update content in `content/toolDetails.ts`
- Run locally to verify pages: `npm install && npm run dev`
- Open a Pull Request describing your changes

## Tool Content Template
Add a new object to the `toolDetails` array with this structure:

```ts
{
  slug: 'nmap',
  name: 'Nmap',
  category: 'Recon',
  level: 'Beginner',
  website: 'https://nmap.org',
  overview: 'One-paragraph overview of the tool and why it matters.',
  features: ['Bullet', 'Points'],
  installation: {
    linux: 'sudo apt install nmap',
    windows: 'Download installer: https://nmap.org/download.html',
    docker: 'docker run --rm -it instrumentisto/nmap -sV example.com',
  },
  usage: {
    basics: [
      { title: 'Version scan', command: 'nmap -sV target.com' },
    ],
  },
  useCase: 'Describe a practical scenario.',
  pros: ['Strengths'],
  cons: ['Limitations'],
  legalNote: 'Use responsibly with permission only.',
  resources: [
    { label: 'Official Docs', href: 'https://nmap.org/book/' },
  ],
}
```

## Content Guidelines
- Accuracy: Prefer official docs and well-known tutorials as sources
- Ethics: No illegal guidance; include a legal/ethical note
- Clarity: Short paragraphs, bullet points, copyable commands
- Neutrality: Avoid biased language or endorsements; list pros/cons

## Categories (Suggested)
- Recon / Information Gathering
- Web Application Hacking
- OSINT
- Password / Auth Testing
- Mobile & API
- Blue Team / Defense

## Ads & Monetization
We place ads in non-intrusive areas (below heroes, sidebars). Do not add ad code directly in content or components—use `components/AdSlot.tsx`.

## License
By contributing, you agree your contributions are licensed under the repository license (to be set). If you need a different license, open an issue first.
