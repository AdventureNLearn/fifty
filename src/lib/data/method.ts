import { WAVES } from "@/lib/data/waves";
import STATE_FILE_MD from "@/lib/data/STATE_FILE.md?raw";

export const METHOD = {
  kicker: "Replication kit",
  title: "How the board is built",
  lede: "One file. Teams of ten. Five loops. Researchers return JSON. An editor writes the board. Empty beats a copied neighbor.",
  independence:
    "This method is public so someone else can run it on another topic. FIFTY is the ALPR instance. The file, the team, and the merge rule are the kit.",
} as const;

export const SISTER = {
  kit: "Kit is the daily comment bank — one post a day, copy and send.",
  method:
    "Method is the research desk — how a cell gets on the board, and how to run the same desk on a different subject.",
} as const;

export const ORIGIN = {
  title: "How this briefing was built",
  lede: "The state cells were not scraped and not crowd-filled. They were researched as files. This is the run that produced the board you can click.",
  beats: [
    {
      step: "1",
      title: "Lock the file first",
      body: "Before anyone searched, one template was written: posture ladder, stack fields, search order, hard rules, JSON output. If the file is fuzzy, ten researchers invent ten shapes.",
    },
    {
      step: "2",
      title: "Cut the map into tens",
      body: "Fifty states, alpha order, five loops of ten. One researcher per cell. DC rides on loop 5. Parallel inside a loop. Sequential across loops so the editor can merge.",
    },
    {
      step: "3",
      title: "Researchers return JSON only",
      body: "Each desk opens primary pages, fills the file, and returns JSON plus an evidence log of URLs actually opened. Researchers do not write product files. They do not copy a neighbor.",
    },
    {
      step: "4",
      title: "Editor merges ten at a time",
      body: "Every posture upgrade is opened against a primary. Unnumbered bills, unnamed locals, and neighbor-copied instruments are dropped. Empty stays empty. Then the ten cells land on the board.",
    },
    {
      step: "5",
      title: "Next loop only after merge",
      body: "Loop N+1 does not start until loop N is on the board. The file stays the same. The cells change. A hole is a finding, not a failure.",
    },
  ],
} as const;

export const ROLES = [
  {
    id: "file",
    name: "The file",
    job: "One template for every cell. Same fields, same search order, same posture ladder. Topic changes. The file does not.",
  },
  {
    id: "researcher",
    name: "Researcher × 10",
    job: "One cell. Opens primary pages. Fills the file. Does not write the board. Returns JSON plus an evidence log of URLs actually opened.",
  },
  {
    id: "editor",
    name: "Editor × 1",
    job: "Merges ten files at a time. Spot-checks posture upgrades against primaries. Drops unnamed locals, unnumbered bills, and neighbor-copied instruments. Empty stays empty.",
  },
  {
    id: "board",
    name: "The board",
    job: "Public briefing. Claims labeled. Sources linked. Not a live legislature feed.",
  },
] as const;

export const DESKS = Array.from({ length: 10 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);

export const LOOPS = WAVES.map((w) => ({
  loop: w.loop,
  cells: "rider" in w && w.rider ? [...w.states, w.rider] : [...w.states],
}));

export const POSTURE_LADDER = [
  {
    id: "exec-pause",
    label: "Executive pause",
    rule: "Governor, DOT, or AG instrument that pauses or revokes the thing statewide or on state-owned dirt. Not a ban.",
  },
  {
    id: "statute",
    label: "On the books",
    rule: "A specific law that governs the thing. Say what it does. Say what it is not.",
  },
  {
    id: "bill",
    label: "Bill this cycle",
    rule: "A numbered bill, including Lost. Change.org is not a bill. A signaled draft is not a bill.",
  },
  {
    id: "local",
    label: "Named local only",
    rule: "A named city, county, or agency action. No “several communities.”",
  },
  {
    id: "open",
    label: "Not retrieved",
    rule: "Searched. Nothing statewide retrieved. Empty is a finding.",
  },
] as const;

export const SEARCH_ORDER = [
  "The field’s existing map or statute table, if one exists (for ALPR: Finding Flock).",
  "This jurisdiction’s legislature, this cycle: exact keywords, filed numbers only.",
  "Official code / session laws.",
  "Governor, cabinet, attorney general: orders, memos, occupancy revocations.",
  "Named local council, commission, or sheriff action.",
  "Reporting only as a pointer to a primary record.",
] as const;

export const HARD_RULES = [
  "Empty beats a copied instrument from the wrong cell.",
  "Do not invent cites, orders, or counts.",
  "A retention or use rule is not a ban. The “why” must say so.",
  "Lost bills stay bills. They do not become statutes.",
  "Researchers do not edit the board. The editor merges.",
  "Claim = supported only with a primary URL in hand.",
  "No plates, no people, no home addresses.",
] as const;

export const INTEGRITY = [
  {
    label: "Supported / Unproven / Disputed",
    body: "Supported needs a primary URL in hand. Unproven is a real search that found nothing, or only commentary. Disputed is two primaries in conflict.",
  },
  {
    label: "Evidence / Inference / Assumption",
    body: "The statute text is evidence. “This will spread” is inference. “Everyone already knows” is an assumption. Label the kind.",
  },
  {
    label: "Primary over commentary",
    body: "Session law, code, signed order, council minutes. News may point at a primary. It does not replace it.",
  },
  {
    label: "Empty stays empty",
    body: "A hole on the board is honest. A cloned permit from the next state over is not.",
  },
] as const;

export const RUNBOOK = [
  {
    step: "1",
    title: "Lock the file",
    body: "Write the cell template before anyone searches. Posture ladder, fields, search order, output JSON. If the file is fuzzy, the team will invent.",
  },
  {
    step: "2",
    title: "Cut the map into tens",
    body: "Fifty states is five loops of ten. One researcher per cell. Parallel inside a loop. Sequential across loops so the editor can merge.",
  },
  {
    step: "3",
    title: "Send the researcher prompt",
    body: "Paste the file, the assigned cell, and the current row. Order: open the pages, fill the JSON, return an evidence log. Do not write product files.",
  },
  {
    step: "4",
    title: "Editor merge",
    body: "Spot-check every posture upgrade against a primary. Drop unnumbered bills, unnamed locals, and neighbor copies. Then write the board.",
  },
  {
    step: "5",
    title: "Next loop",
    body: "Do not start loop N+1 until loop N is on the board. The file stays the same. The cells change.",
  },
] as const;

export const TOOLS = {
  title: "Run it on Grok",
  body: "The ALPR board was built in Grok Build: ten researchers in parallel per loop, JSON back, a human merge. The same file and prompt run in Grok as a single-cell researcher. Swap the topic, keep the file.",
  grok: {
    name: "Grok",
    href: "https://grok.com",
    how: "Open Grok. Paste the researcher prompt with one cell and the current file. Get JSON plus the evidence log. Repeat for the next cell. You are the editor.",
  },
  build: {
    name: "Grok Build",
    href: null as string | null,
    how: "Open Grok Build on a briefing like this one. Paste the editor prompt. Spin ten researchers in one loop. Merge. Next loop. The public board is the product; the researchers never write it.",
  },
} as const;

export const STATE_FILE_TEXT = STATE_FILE_MD.trim();

export const RESEARCHER_PROMPT = `You are a cell-file researcher. Follow the FILE exactly. Do not edit the board. Return JSON plus a short evidence log of URLs you actually opened.

FILE
- One posture, highest that is true: exec-pause → statute → bill → local → open.
- claim = supported only with a primary URL. unproven if empty. disputed if two primaries conflict.
- why = one sentence: is this the statewide (or system-wide) removal the petition asks for? If not, say so.
- Named locals only. Filed bill numbers only. Empty beats a neighbor.
- Search order: existing map/table → this legislature this cycle → official code → governor/DOT/AG → named local → reporting as a pointer.

ASSIGNED CELL: [code] [name]
TODAY: [YYYY-MM-DD]
CURRENT FILE: [paste the current JSON]

HARD RULES
Empty beats a copied neighbor. Do not invent cites. A retention cap is not a ban. Change.org is not a bill. A signaled draft is not a bill.

OUTPUT
JSON matching the file, plus sources[] and empty[] (fields searched and found nothing).`;

export const EDITOR_PROMPT = `You are the editor. Researchers have returned JSON for ten cells. You write the board. They do not.

For each cell:
1. If posture rose (open → local/bill/statute/exec-pause), open the primary URL yourself.
2. Drop bills without a filed number. Drop locals without a name. Drop camera counts without a named source and an asOf date.
3. A use/retain/share rule stays statute, and the why must say it is not statewide removal unless the text forbids collection.
4. If the search was real and the file is empty, posture is open and claim is unproven.
5. Add only the sources the row cites.

Then start the next loop of ten. Same file.`;

export const FORK = {
  title: "Fork the topic",
  body: "Replace ALPR with the next subject. Keep the file, the tens, and the merge. Examples: occupancy permits, grant pass-throughs, retention clocks, vendor contracts, another surveillance class.",
  swaps: [
    { from: "Cell", to: "State, county, agency, or bill — one unit the team can finish." },
    { from: "Posture ladder", to: "The highest true instrument. Ban ≠ pause ≠ rule ≠ bill ≠ local." },
    { from: "Search order", to: "Map → legislature → code → executive → named local → reporting." },
    { from: "Why", to: "One sentence against the actual ask. If this is not the remedy, say so." },
  ],
} as const;

export const KIT_PACK = [
  "# Civic research kit",
  "One file. Teams of ten. Five loops. Researchers return JSON. An editor writes the board. Empty beats a copied neighbor.",
  "",
  "## Team",
  "The file — one template for every cell.",
  "Researcher × 10 — one cell each. JSON plus evidence log. Do not write the board.",
  "Editor × 1 — merges ten files. Spot-checks posture upgrades against primaries.",
  "The board — public briefing. Claims labeled. Sources linked.",
  "",
  "## Loops (FIFTY instance)",
  ...LOOPS.map((w) => `Loop ${w.loop}: ${w.cells.join(" ")}`),
  "",
  "## Posture ladder (highest true, one only)",
  ...POSTURE_LADDER.map((p) => `- ${p.label}: ${p.rule}`),
  "",
  "## Search order",
  ...SEARCH_ORDER.map((s, i) => `${i + 1}. ${s}`),
  "",
  "## Hard rules",
  ...HARD_RULES.map((r) => `- ${r}`),
  "",
  "## Integrity",
  ...INTEGRITY.map((i) => `- ${i.label}: ${i.body}`),
  "",
  "## Run",
  ...RUNBOOK.map((s) => `${s.step}. ${s.title} — ${s.body}`),
  "",
  "## Tools",
  TOOLS.body,
  `Grok: ${TOOLS.grok.how}`,
  `Grok Build: ${TOOLS.build.how}`,
  "",
  "## Researcher prompt",
  RESEARCHER_PROMPT,
  "",
  "## Editor prompt",
  EDITOR_PROMPT,
  "",
  "## Fork",
  FORK.body,
  ...FORK.swaps.map((s) => `- ${s.from}: ${s.to}`),
  "",
  "## Worked file (ALPR / FIFTY)",
  STATE_FILE_TEXT,
].join("\n");
