# EVO ALLY GOD 911

Single-page Season 6 command dashboard for a Last War: Survival alliance with 33G power, R4 coordination, and two VIP 18 rally assets.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

User-facing command content is consolidated on `/`.

- `/` — main alliance command dashboard
- `/login` — member login entry
- `/profile` — member self-edit profile surface
- `/admin` — R4/R5 admin command center
- `/admin/import` — admin CSV roster import preparation

Old routes such as `/orders`, `/strategy`, `/calendar`, `/roster`, and `/guides` are no longer used in navigation.

## Vercel deployment

Use the default Next.js build command:

```bash
npm run build
```

The repo uses `/app` only, includes `app/page.tsx`, `app/layout.tsx`, and `app/not-found.tsx`, and does not use a custom server. `vercel.json` pins the framework to Next.js and the output directory to `.next`.

## Environment variables

Configure these in `.env.local` and Vercel Project Settings:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=server-only-service-role-key
LASTWAR_API_BASE_URL=optional
LASTWAR_ALLIANCE_ID=optional
```

`SUPABASE_SERVICE_ROLE_KEY` is only for protected server-side admin import actions and must never be exposed to client components. If Supabase variables are missing, the site renders local mock data.

## Supabase

Run `supabase/schema.sql` to create:

- `profiles`
- `announcements`
- `events`
- `guides`
- `rules`

RLS policies allow members to read active command content and profiles, update only their own profile, and allow admins (`profiles.is_admin = true`) to manage all profiles and command content.

## CSV roster import from Google Sheets

Export Google Sheets as CSV and match `csv/roster-import-template.csv`:

```csv
player_name,total_power,first_squad_power,vip_level,main_squad_type,best_heroes,timezone,availability,alliance_role,notes
```

`/admin/import` documents the admin-only flow: choose CSV, validate rows, preview, then final import through a future protected server action.

## Mock data

Edit local fallback command content in:

- `data/command.ts` — alliance status, events, announcements, quick guides, rules, VIP focus
- `data/roster.ts` — profile-shaped roster data

## Language system

The app uses `I18nProvider` in `app/layout.tsx` and `useTranslation()` for global UI translation. Language selection persists across `/`, `/login`, `/profile`, and `/admin` using localStorage and a `lang` cookie. Detection order is cookie, localStorage, browser language, then English.

## Admin management

R4/R5 admins manage homepage announcements, next events, guide cards, rules/reminders, roster data, and CSV import from `/admin` and `/admin/import`. Admin-editable database fields are bilingual (`*_en`, `*_zh`) so the homepage can remain fully localized.
