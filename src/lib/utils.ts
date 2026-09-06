import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function formatLongDate(iso = todayKey()): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function dayOfYear(iso = todayKey()): number {
  const [y, m, d] = iso.split("-").map(Number);
  const start = Date.UTC(y, 0, 0);
  const now = Date.UTC(y, m - 1, d);
  return Math.floor((now - start) / 86400000);
}

export function streakFrom(dates: string[], today = todayKey()): number {
  const set = new Set(dates);
  let cursor = today;
  if (!set.has(cursor)) {
    const [y, m, d] = today.split("-").map(Number);
    const yest = new Date(y, m - 1, d - 1);
    cursor = todayKey(yest);
    if (!set.has(cursor)) return 0;
  }
  let n = 0;
  while (set.has(cursor)) {
    n += 1;
    const [y, m, d] = cursor.split("-").map(Number);
    cursor = todayKey(new Date(y, m - 1, d - 1));
  }
  return n;
}
