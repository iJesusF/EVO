# EVO Season 6 Dashboard

A clean, static Last War Season 6: Shadow Rainforest strategy dashboard for the EVO alliance.

## What this is

- Static Next.js App Router web app.
- No database, no authentication, no backend.
- Dark navy/teal tactical UI.
- Responsive desktop and mobile layout.
- English and Mandarin Chinese with language persistence in `localStorage`.
- All events, objectives, guides, and translations are editable from local TypeScript config files.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Pages

- `/` — Season 6 overview dashboard with countdown, current phase, alliance card, map, next objective, timeline, and reminders.
- `/objectives` — key objectives with priority, description, start time, countdown, and status.
- `/schedule` — event schedule with countdowns.
- `/guides` — quick guide cards for overview, zones, altar, builds, mistakes, march planning, resources, and glossary.
- `/map` — larger Shadow Rainforest map with legend.

## Editing data

Edit these files:

- `src/data/events.ts` — Season Start, Control Center Capture, Air Base Secured, Train Station Control, Sanctuary Clash, Final Showdown.
- `src/data/objectives.ts` — key objective cards and countdown dates.
- `src/data/guides.ts` — quick guide cards and bullet points.

Dates use ISO strings such as:

```ts
'2026-07-03T18:00:00Z'
```

## Editing translations

Translations live in:

- `src/i18n/en.ts`
- `src/i18n/zh.ts`

The language provider is in `src/i18n/LanguageProvider.tsx`. It defaults to English, remembers the selected language in `localStorage`, and keeps the selected language active when navigating between pages.

## Replacing the map image

Place your Season 6 Shadow Rainforest map at:

```txt
public/maps/season6-shadow-rainforest.png
```

If the image is missing, the app automatically shows a clean placeholder map panel with grid zones and labels.

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Use the default Next.js settings.
4. Build command: `npm run build`.
5. No environment variables are required.
6. No custom server is required.

## Project structure

```txt
app/                  Next.js routes
src/components/       Reusable UI components
src/data/             Editable local events, objectives, guides
src/i18n/             English/Chinese translations and provider
public/maps/          Optional map image location
```
