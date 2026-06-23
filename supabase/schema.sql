create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade,
  player_name text not null, total_power text not null, first_squad_power text not null, vip_level integer not null default 0,
  main_squad_type text not null, best_heroes text not null, timezone text not null, availability text not null,
  alliance_role text not null check (alliance_role in ('R5','R4','Rally Lead','Defender','Scout','Support','Farmer')),
  is_admin boolean not null default false, notes text not null default '', created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.announcements (
  id uuid primary key default gen_random_uuid(), title_en text not null, title_zh text not null, content_en text not null, content_zh text not null,
  priority text not null check (priority in ('High','Medium','Low')), created_by uuid references auth.users(id), created_at timestamptz not null default now(), updated_at timestamptz not null default now(), is_active boolean not null default true
);
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(), title_en text not null, title_zh text not null, event_type text not null, importance text not null check (importance in ('High','Medium','Low')),
  event_time timestamptz not null, preparation_en text not null, preparation_zh text not null, notes_en text not null default '', notes_zh text not null default '', created_at timestamptz not null default now(), updated_at timestamptz not null default now(), is_active boolean not null default true
);
create table if not exists public.guides (
  id uuid primary key default gen_random_uuid(), title_en text not null, title_zh text not null, content_en text not null, content_zh text not null,
  checklist_en text not null, checklist_zh text not null, category text not null, sort_order integer not null default 0, is_active boolean not null default true, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.rules (
  id uuid primary key default gen_random_uuid(), title_en text not null, title_zh text not null, content_en text not null, content_zh text not null,
  priority text not null check (priority in ('High','Medium','Low')), sort_order integer not null default 0, is_active boolean not null default true, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security; alter table public.announcements enable row level security; alter table public.events enable row level security; alter table public.guides enable row level security; alter table public.rules enable row level security;
create policy "profiles readable" on public.profiles for select to authenticated using (true);
create policy "members update own profile" on public.profiles for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "admins update all profiles" on public.profiles for update to authenticated using (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin)) with check (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin));
create policy "active announcements readable" on public.announcements for select to authenticated using (is_active = true);
create policy "active events readable" on public.events for select to authenticated using (is_active = true);
create policy "active guides readable" on public.guides for select to authenticated using (is_active = true);
create policy "active rules readable" on public.rules for select to authenticated using (is_active = true);
create policy "admins manage announcements" on public.announcements for all to authenticated using (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin)) with check (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin));
create policy "admins manage events" on public.events for all to authenticated using (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin)) with check (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin));
create policy "admins manage guides" on public.guides for all to authenticated using (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin)) with check (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin));
create policy "admins manage rules" on public.rules for all to authenticated using (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin)) with check (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin));
