import { createServerFn } from "@tanstack/react-start";
import { STATES } from "@/lib/data/states";
import { FEDERAL } from "@/lib/data/federal";
import {
  DAILY_RULE,
  DISCLAIMER,
  JOIN_EMAIL,
  JOIN_SUBJECT,
  PETITION,
  PETITION_URL,
  RECRUIT_POST,
  SIGNATURES,
} from "@/lib/data/petition";
import { targetForWeekday, templateForDay } from "@/lib/data/comments";
import { LANES, LAYERS } from "@/lib/data/stack";
import { dayOfYear, todayKey } from "@/lib/utils";

export type ShepardTurn = { role: "user" | "assistant"; content: string };

export const SHEPARD = {
  name: "The Good Shepard",
  title: "Protector of the Republic",
  welcome:
    "I am The Good Shepard. I work for the citizen, not the vendor and not the agency. Name any state, a pole, a grant, or a bill. I will walk the stack with you — city to Congress, check to statute. I will not invent a cite. Empty beats a lie. One comment a day. That is the whole job.",
} as const;

export const SHEPARD_STARTERS = [
  { id: "today", label: "Draft today’s comment", text: "Draft today’s petition comment. Keep it short, name the lane, include the petition URL." },
  { id: "stack", label: "Explain the stack", text: "Explain the jurisdiction × process stack in plain English. A city contract is not a highway permit. A grant is not a statute." },
  { id: "federal", label: "Federal bills", text: "What federal bills and grant pipes are retrieved for ALPR? Label every claim." },
  { id: "join", label: "How to join", text: "How does a citizen join Orwell Day’s one-comment-a-day team and talk to a legislator without breaking the law?" },
  { id: "method", label: "How the board is built", text: "Explain how the state board is researched. File, tens of researchers, editor merge. Point me at the public method kit." },
] as const;

const MAX_TURNS = 12;
const MAX_CHARS = 2400;

function compactBriefing(): string {
  const today = todayKey();
  const weekday = new Date().getDay();
  const target = targetForWeekday(weekday);
  const template = templateForDay(dayOfYear(today));
  const notable = STATES.filter((s) => s.posture !== "open");
  const open = STATES.filter((s) => s.posture === "open")
    .map((s) => s.code)
    .join(" ");

  const stateLines = notable.map((s) => {
    const bits = [`${s.code} ${s.name} · ${s.posture} · claim:${s.claim}`];
    if (s.alprStatute) bits.push(`statute: ${clip(s.alprStatute, 160)}`);
    if (s.executive) bits.push(`exec: ${clip(s.executive, 160)}`);
    for (const b of s.bills.slice(0, 2)) {
      bits.push(`bill: ${b.cite} — ${b.title} (${b.status})`);
    }
    if (s.localNote) bits.push(`local: ${clip(s.localNote, 140)}`);
    if (s.permitNote) bits.push(`permit: ${clip(s.permitNote, 120)}`);
    bits.push(`why: ${clip(s.why, 140)}`);
    return bits.join(" | ");
  });

  const fed = FEDERAL.bills
    .map((b) => `${b.cite} ${b.title} (${b.sponsor}; ${b.status}). ${b.what} claim:${b.claim}`)
    .join("\n");
  const grants = FEDERAL.grants.map((g) => `${g.name} — ${g.who}: ${g.note}`).join("\n");
  const layers = LAYERS.map((l) => `${l.name}: ${l.blurb}`).join(" / ");
  const lanes = LANES.map((l) => `${l.name} (${l.verb}): ${l.blurb}`).join(" / ");

  return [
    `Today: ${today}. Weekday target: ${target.label}. ${target.hint}`,
    `Rotating comment (${template.id}): ${template.text}`,
    `Petition: ${PETITION.title} — ${PETITION.ask}`,
    `Petition URL: ${PETITION_URL}`,
    `Petition text: ${PETITION.text}`,
    `Daily rule: ${DAILY_RULE.what} ${DAILY_RULE.cadence} ${DAILY_RULE.update}`,
    `Join: email ${JOIN_EMAIL} subject “${JOIN_SUBJECT}”. Recruit post: ${RECRUIT_POST}`,
    `Signatures (on-file fallback): ${SIGNATURES.count} as of ${SIGNATURES.asOf}. FIFTY can refresh this from the petition page; if you lack a live figure, use the on-file number and label it on-file.`,
    `Disclaimer: ${DISCLAIMER}`,
    `Layers: ${layers}`,
    `Lanes: ${lanes}`,
    `Federal bills:\n${fed}`,
    `Federal/grant pipes:\n${grants}`,
    `Retrieved statewide postures:\n${stateLines.join("\n")}`,
    `Open (no statewide instrument retrieved): ${open}`,
  ].join("\n\n");
}

function clip(s: string, n: number): string {
  return s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`;
}

function systemPrompt(): string {
  return `You are The Good Shepard — Protector of the Republic. You sit on FIFTY, an independent civic briefing that supports a daily citizen action in all fifty states: one public comment a day linking a state-level petition to ban ALPR AI cameras (Flock, Axon, and the class).

Voice: calm, firm, dry. Constitution first. The citizen is the principal. The vendor is not a shepherd. The agency is not a shepherd. You are. No emoji. No hype. No both-sides mush. No conspiracy garnish. No partisan team jersey. Named bills, named grants, named dirt.

You have no home state. Treat all fifty equally. A Florida road order, a Texas fee pause, a Washington privacy act, a Tennessee county vote — each is one instrument. Do not default to any of them.

Integrity (non-negotiable):
- Label claims: Supported / Unproven / Disputed.
- Label kind: Evidence / Inference / Assumption.
- Primary records over commentary.
- Empty beats a copied instrument from the wrong state. If the briefing does not retrieve it, say so. Do not invent statutes, executive orders, camera counts, or vote tallies.
- A city contract is not a highway permit. A grant is not a statute. Who signed the check is not who owns the dirt.

Mission:
- Help the citizen take one lawful public action a day: a comment that links ${PETITION_URL}.
- Draft short comments, letters to legislators, FOIA/public-record asks, and talking points from the briefing.
- Explain the 4×6 stack: Local / County / State / Federal × Funding / Grants / Permitting / Installation / Privacy / Legislation.
- When a state is named, quote the retrieved posture from the briefing. If it is “open”, say the file is empty.
- FIFTY is independent. It supports Orwell Day’s petition. It is not their product.
- The board is built as ten-cell research waves: one file, ten researchers returning JSON, one editor merge. The public kit is the Method tab.

Hard limits:
- Not legal advice. Not an official Orwell Day product. Not a live camera registry.
- Public speech only: comments, petitions, testimony, records requests, votes. No vandalism, no doxxing, no threats, no hacking, no interfering with cameras or officers.
- Do not collect or ask for home addresses, SSNs, or personal plates.
- Keep replies tight — a shepherd’s note, not a sermon. Prefer one next step.
- Always include the petition URL when you draft a public comment.

BRIEFING (retrieved; treat as the file in front of you):
${compactBriefing()}`;
}

function parseInput(input: unknown): { messages: ShepardTurn[] } {
  if (!input || typeof input !== "object") throw new Error("Invalid input");
  const messages = (input as { messages?: unknown }).messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("Say something first.");
  }
  const clean: ShepardTurn[] = [];
  for (const raw of messages.slice(-MAX_TURNS)) {
    if (!raw || typeof raw !== "object") continue;
    const role = (raw as ShepardTurn).role;
    const content = String((raw as ShepardTurn).content ?? "").trim();
    if (role !== "user" && role !== "assistant") continue;
    if (!content) continue;
    clean.push({ role, content: content.slice(0, MAX_CHARS) });
  }
  if (!clean.length) throw new Error("Say something first.");
  return { messages: clean };
}

export const askShepard = createServerFn({ method: "POST" })
  .validator(parseInput)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "The Shepard is off the air." };
    }

    const payload = {
      model: "grok-4.5",
      temperature: 0.55,
      max_tokens: 700,
      messages: [
        { role: "system", content: systemPrompt() },
        ...data.messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    };

    try {
      const res = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(45000),
      });
      if (!res.ok) {
        return { ok: false as const, error: `The Shepard hit static (${res.status}). Try once more.` };
      }
      const body = (await res.json()) as {
        choices?: { message?: { content?: string } }[];
      };
      const text = body.choices?.[0]?.message?.content?.trim() ?? "";
      if (!text) return { ok: false as const, error: "The Shepard had nothing. Ask again, shorter." };
      return { ok: true as const, text };
    } catch {
      return { ok: false as const, error: "The Shepard lost the hill. Check the line and try again." };
    }
  });
