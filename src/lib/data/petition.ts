export const PETITION_URL = "https://orwellday.com/stop-flock-solution/";
export const JOIN_EMAIL = "orwellday@protonmail.com";
export const JOIN_SUBJECT = "petition promotion";
export const JOIN_MAILTO = `mailto:${JOIN_EMAIL}?subject=${encodeURIComponent(JOIN_SUBJECT)}`;
export const RECRUIT_POST =
  "https://x.com/OrwellDay/status/2096585457593127175";
export const SIGNATURES = { count: 1642, asOf: "2026-09-04" } as const;

export const PETITION = {
  title: "Stop Flock Solution",
  organizer: "Orwell Day",
  ask: "State legislatures remove ALPR AI cameras — Flock, Axon, and the rest — from the state.",
  thesis:
    "There are more than 19,000 incorporated cities, towns, villages, and boroughs in the United States. A city-by-city fight is 19,000 points of change. A state ban is 50.",
  text: "We call on our state legislatures to uphold our God-given and constitutionally protected Fourth Amendment right to privacy. The Founders never intended for the government to track every citizen’s movements and build a searchable database of our daily lives. Mass surveillance of this kind undermines the very freedoms this nation was built upon. Sign this petition today to demand the immediate removal of all ALPR AI cameras (like Flock, Axon, etc.) from your state.",
} as const;

export const DAILY_RULE = {
  what: "Leave one comment that links the petition on a Flock-related post.",
  cadence: "One action, together, each day.",
  update: "The organizer sends a progress update. That is the whole team.",
  join: `Email ${JOIN_EMAIL} with subject “${JOIN_SUBJECT}”.`,
} as const;

export const DISCLAIMER =
  "This desk is a public briefing. It is not legal advice, not a live camera registry, and not an official Orwell Day product. Claims are labeled. Empty beats a copied instrument from the wrong state.";
