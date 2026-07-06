import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function countBy<T>(items: T[], selector: (item: T) => string | undefined) { return items.reduce<Record<string, number>>((acc, item) => { const key = selector(item) || "Unassigned"; acc[key] = (acc[key] || 0) + 1; return acc; }, {}); }
export function uniqueSorted(values: Array<string | number | undefined>) { return Array.from(new Set(values.map(String).filter(Boolean))).sort((a, b) => a.localeCompare(b, undefined, { numeric: true })); }
