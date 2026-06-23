# 33G War Room

Private Season 6 command center for a Last War: Survival alliance with 33G total power, R4 coordination, two VIP 18 rally assets, Supabase-ready authentication, and editable roster operations.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Add `?lang=zh` to view Mandarin Chinese, for example `http://localhost:3000?lang=zh`.

## Required routes

- `/`
- `/login`
- `/profile`
- `/orders`
- `/strategy`
- `/calendar`
- `/roster`
- `/guides`
- `/admin`
- `/admin/import`

## Supabase setup

Create these tables using `supabase/schema.sql`:

- `profiles`
- `orders`
- `events`

The schema includes row-level-security policies for the target permissions:

- Authenticated users can read all alliance profiles.
- Members can update only their own profile.
- R4/R5 admins, represented by `profiles.is_admin = true`, can update all profiles.
- Everyone authenticated can read orders/events.
- Admins can create, update, and delete orders/events.

### Environment variables

For Vercel and local `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=server-only-service-role-key
LASTWAR_API_BASE_URL=optional
LASTWAR_ALLIANCE_ID=optional
```

`SUPABASE_SERVICE_ROLE_KEY` must never be exposed to client components. It is reserved for protected server-side admin import actions. If Supabase variables are missing, the site renders with mock data instead of crashing.

## CSV roster import preparation

The current Google Drive / Google Sheets roster should be exported as CSV. Use `csv/roster-import-template.csv` as the column template:

```csv
player_name,total_power,first_squad_power,vip_level,main_squad_type,best_heroes,timezone,availability,alliance_role,is_admin,notes
```

Direct Google Drive sync is intentionally not connected yet. The `/admin/import` page documents the prepared flow for a future protected server action that validates and imports CSV rows into Supabase.

## Editing mock data

Until Supabase is configured, operational content is loaded from editable files:

- `data/alliance.ts` — alliance power, VIP 18 count, season status, active directive.
- `data/orders.ts` — today’s orders and “do not do” list.
- `data/events.ts` — weekly calendar events.
- `data/roster.ts` — Supabase-shaped profile mock data.
- `data/guides.ts` — quick checklist guides.
- `data/strategy.ts` — Season 6 war-room strategy sections.

Localized fields use this shape:

```ts
{ en: 'Do not burn speedups outside buff windows.', zh: '不要在增益窗口之外消耗加速道具。' }
```

## Vercel deployment

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Set the Supabase environment variables above in Vercel Project Settings.
4. Deploy with the default Next.js build command:

```bash
npm run build
```

No custom server is required. The root route `/` is a real homepage, and `app/not-found.tsx` handles missing routes.
