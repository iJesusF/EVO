# 33G War Room

Private Season 6 command center for a Last War: Survival alliance with 33G total power, R4 coordination, and two VIP 18 rally assets.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en` for English or `http://localhost:3000/zh` for Mandarin Chinese.

## Build for Vercel

```bash
npm run build
```

This is a standard Next.js App Router project and is deploy-ready for Vercel.

## Editing alliance data

All operational content is mock data and can be changed without touching UI components:

- `data/alliance.ts` — alliance power, VIP 18 count, season status, active directive.
- `data/orders.ts` — today’s orders and “do not do” list.
- `data/events.ts` — weekly calendar events.
- `data/roster.ts` — member table, roles, availability, notes.
- `data/guides.ts` — quick checklist guides.
- `data/strategy.ts` — Season 6 war-room strategy sections.

Localized fields use this shape:

```ts
{ en: 'Do not burn speedups outside buff windows.', zh: '不要在增益窗口之外消耗加速道具。' }
```

## Editing UI translations

Global interface labels live in:

- `locales/en.ts`
- `locales/zh.ts`

Keep keys aligned between both files. Components consume translations through `lib/i18n.ts`.

## Access gate placeholder

`components/AccessGate.tsx` is intentionally disabled with `enabled = false`. Wrap pages with it and connect real auth later when login is required.
