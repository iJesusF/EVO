import { roster } from '@/data/roster';
export async function fetchAllianceMembers(allianceId: string) {
  const baseUrl = process.env.LASTWAR_API_BASE_URL;
  if (!baseUrl || !allianceId) return roster;
  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, '')}/alliances/${encodeURIComponent(allianceId)}/members`, { next: { revalidate: 300 } });
    if (!response.ok) return roster;
    return response.json();
  } catch {
    return roster;
  }
}
