# Portfolio — Juan Cruz Elias Martin

Personal portfolio built as a case-study site: each project is told as
problem, technical decision, and the tradeoff that decision cost.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Structure

Content is separated from presentation so the site can be updated
without touching JSX:

- `content/profile.ts` — identity, positioning, skills
- `content/projects.ts` — case studies and their technical decisions
- `components/sections/` — one component per page section
- `components/ui/` — shared primitives

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.
