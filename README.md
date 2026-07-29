# Utsarga Baral — Portfolio

Typography-first portfolio showcasing AI engineering, generative brand visuals, and full-stack projects. Built with Next.js, Tailwind CSS, and an NVIDIA-powered AI assistant.

## Features

- **Hero** with cosmic generative visual backdrop
- **Creative showcase** — LHOTSE, IGNITE/utx.ai, ideal FOR MEN, OCEANUS × Disney, and more
- **Video reel** — 5 portfolio motion pieces
- **Projects** — RoastBot, FIFA World Cup 2026 Predictor, Document Intelligence
- **Experience timeline** — Rippey AI, 360 Mails, education
- **AI chat assistant** — powered by NVIDIA NIM

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Fraunces + Inter via `next/font`
- NVIDIA API (Llama 3.1 8B Instruct)

## Getting started

```bash
npm install
cp .env.example .env.local   # add NVIDIA_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

All portfolio data lives in `lib/portfolio.ts`. Media assets are in `public/assets/` and `public/videos/`.

## Deploy to Vercel

1. Push to GitHub
2. Import repo in [Vercel](https://vercel.com)
3. Add `NVIDIA_API_KEY` environment variable
4. Deploy

## Environment variables

| Variable | Description |
|----------|-------------|
| `NVIDIA_API_KEY` | NVIDIA API key from [build.nvidia.com](https://build.nvidia.com) |
