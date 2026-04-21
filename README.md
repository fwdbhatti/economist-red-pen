# The Economist Red Pen

A rigorous editor for economic writing, powered by OpenAI GPT-5.

## Stack

- Next.js 16 (App Router) · TypeScript · React 19
- Tailwind CSS v4
- shadcn/ui conventions (Radix · Lucide) — add components with `npx shadcn@latest add <name>`
- OpenAI Node SDK (Responses API, model `gpt-5`)

## Local dev

```bash
cp .env.example .env.local   # add your OPENAI_API_KEY
npm install
npm run dev
```

Open <http://localhost:3000>.

## API

`POST /api/chat` — body `{ input: string, system?: string }` → `{ model, output }`.

## Deploy

Linked to Vercel. `OPENAI_API_KEY` and (optional) `OPENAI_MODEL` must be set in the Vercel project env.
