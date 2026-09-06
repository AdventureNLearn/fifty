import { createServerFn } from "@tanstack/react-start";
import type { LiveFigure, LiveSnapshot } from "@/lib/types";
import { PETITION_URL } from "@/lib/data/petition";

const UA = "FIFTY/1.0 (independent civic briefing)";
const TIMEOUT_MS = 12000;

async function getText(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "text/html,text/plain;q=0.9" },
    redirect: "follow",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function strip(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#44;/g, ",")
    .replace(/\s+/g, " ")
    .trim();
}

function parseIntCommas(raw: string): number | null {
  const n = Number(raw.replace(/,/g, ""));
  return Number.isFinite(n) ? n : null;
}

async function scrapePetition(): Promise<LiveSnapshot["petition"]> {
  try {
    const text = strip(await getText(PETITION_URL));
    const m = text.match(
      /(\d{1,3}(?:,\d{3})+|\d{3,})\s+signatures\s+as of\s+(\d{1,2}\/\d{1,2}\/\d{2,4})/i,
    );
    if (!m) {
      return {
        ok: false,
        value: null,
        asOf: null,
        error: "Petition page did not expose a signature count in the expected form.",
      };
    }
    const count = parseIntCommas(m[1]);
    if (!count || count < 1 || count > 10_000_000) {
      return {
        ok: false,
        value: null,
        asOf: null,
        error: "Signature count on the petition page failed a sanity check.",
      };
    }
    return {
      ok: true,
      value: { count, asOfLabel: m[2] },
      asOf: new Date().toISOString().slice(0, 10),
      error: null,
    };
  } catch (err) {
    return fail("petition", err);
  }
}

async function scrapeCameras(): Promise<LiveSnapshot["cameras"]> {
  try {
    const text = strip(await getText("https://www.findingflock.com/stats"));
    const snap = text.match(/Snapshot of ([A-Za-z]+ \d{1,2}, \d{4})/i);
    const cams = text.match(
      /(\d{1,3}(?:,\d{3}){2}|\d{1,3}(?:,\d{3})+)\s+cameras documented nationwide/i,
    );
    const share = text.match(
      /(\d{1,2}(?:\.\d)?\s*%)\s+are Flock Safety hardware/i,
    );
    if (!cams) {
      return {
        ok: false,
        value: null,
        asOf: null,
        error: "Finding Flock stats page did not expose a nationwide camera count.",
      };
    }
    const count = parseIntCommas(cams[1]);
    if (!count || count < 1_000 || count > 5_000_000) {
      return {
        ok: false,
        value: null,
        asOf: null,
        error: "Camera count failed a sanity check.",
      };
    }
    return {
      ok: true,
      value: {
        count,
        flockShare: share?.[1] ?? null,
        asOfLabel: snap?.[1] ?? "Finding Flock stats",
      },
      asOf: new Date().toISOString().slice(0, 10),
      error: null,
    };
  } catch (err) {
    return fail("cameras", err);
  }
}

function fail<T>(label: string, err: unknown): LiveFigure<T> {
  const msg = err instanceof Error ? err.message : "unknown error";
  return {
    ok: false,
    value: null,
    asOf: null,
    error: `Could not refresh ${label} (${msg}). On-file figure stands.`,
  };
}

export const fetchLive = createServerFn({ method: "POST" }).handler(
  async (): Promise<LiveSnapshot> => {
    const [petition, cameras] = await Promise.all([
      scrapePetition(),
      scrapeCameras(),
    ]);
    return {
      fetchedAt: new Date().toISOString(),
      petition,
      cameras,
    };
  },
);
