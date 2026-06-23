create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  player_name text not null,
  total_power text not null,
  first_squad_power text not null,
  vip_level integer not null default 0,
  main_squad_type text not null,
  best_heroes text not null,
  timezone text not null,
  availability text not null,
  alliance_role text not null check (alliance_role in ('R5','R4','Rally Lead','Defender','Scout','Support','Farmer')),
  is_admin boolean not null default false,
  notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  priority text not null check (priority in ('High','Medium','Low')),
  instructions text not null,
  assigned_role text not null,
  event_time timestamptz,
  status text not null check (status in ('Open','In Progress','Locked','Done')),
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_type text not null,
  importance text not null check (importance in ('High','Medium','Low')),
  event_time timestamptz not null,
  preparation text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.orders enable row level security;
alter table public.events enable row level security;

create policy "profiles readable by authenticated users" on public.profiles for select to authenticated using (true);
create policy "members update own profile" on public.profiles for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "admins update all profiles" on public.profiles for update to authenticated using (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin)) with check (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin));

create policy "orders readable by authenticated users" on public.orders for select to authenticated using (true);
create policy "events readable by authenticated users" on public.events for select to authenticated using (true);
create policy "admins manage orders" on public.orders for all to authenticated using (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin)) with check (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin));
create policy "admins manage events" on public.events for all to authenticated using (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin)) with check (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.is_admin));
