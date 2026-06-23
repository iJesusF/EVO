import type { Database } from './supabase.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

type TableName = keyof Database['public']['Tables'];

function headers(key: string) {
  return { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' };
}

export async function supabaseSelect<TTable extends TableName>(table: TTable) {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  const response = await fetch(`${supabaseUrl}/rest/v1/${String(table)}?select=*`, { headers: headers(supabaseAnonKey), next: { revalidate: 60 } });
  if (!response.ok) throw new Error(`Supabase read failed for ${String(table)}`);
  return response.json() as Promise<Database['public']['Tables'][TTable]['Row'][]>;
}

export async function supabaseAdminInsert<TTable extends TableName>(table: TTable, rows: Database['public']['Tables'][TTable]['Insert'][]) {
  if (!supabaseUrl || !serviceRoleKey) return null;
  const response = await fetch(`${supabaseUrl}/rest/v1/${String(table)}`, { method: 'POST', headers: { ...headers(serviceRoleKey), Prefer: 'return=representation' }, body: JSON.stringify(rows) });
  if (!response.ok) throw new Error(`Supabase admin insert failed for ${String(table)}`);
  return response.json() as Promise<Database['public']['Tables'][TTable]['Row'][]>;
}
