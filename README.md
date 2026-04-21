# The Economist Red Pen

A rigorous editor for economic writing, powered by OpenAI GPT-5.4.

## Stack

- Next.js 15 (App Router) · TypeScript · React 18
- Tailwind CSS 3
- OpenAI Node SDK — Responses API, default model `gpt-5.4`

## Local dev

```bash
cp .env.example .env.local   # add your OPENAI_API_KEY
npm install
npm run dev
```

Open <http://localhost:3000>.

## API

`POST /api/chat` — body `{ input: string, system?: string, model?: string }` → `{ model, output }`.

## Model notes

- Default: `gpt-5.4` — latest general-purpose, largest context window.
- Heavier reasoning: set `OPENAI_MODEL=gpt-5.4-pro` or pass `model` in the request body.
- To list all models your key can see: `curl https://api.openai.com/v1/models -H "Authorization: Bearer $OPENAI_API_KEY"`.

## Deploy

Linked to Vercel. Set `OPENAI_API_KEY` (and optionally `OPENAI_MODEL`) in the Vercel project env.
