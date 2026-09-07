export const PETITION_URL = "https://orwellday.com/stop-flock-solution/";
export const JOIN_EMAIL = "join@example.com";
export const JOIN_SUBJECT = "petition promotion";
export const JOIN_MAILTO = `mailto:${JOIN_EMAIL}?subject=${encodeURIComponent(JOIN_SUBJECT)}`;
export const RECRUIT_POST =
  "https://x.com/OrwellDay/status/2096585457593127175";

/** Packed fallback. Live scrape of the petition page can overlay this. */
export const SIGNATURES = { count: 1642, asOf: "2026-09-04" } as const;

/**
 * 2025 Census of Governments: 19,489 municipal governments
 * (cities, boroughs except AK, towns except NE/NY/WI, villages).
 * 2022 CoG: 19,491. The petition’s “more than 19,000” is the advocacy round.
 */
export const CITIES = {
  count: 19489,
  asOf: "2025",
  unit: "municipal governments",
  note: "Census of Governments. Townships are counted separately (~16,000).",
} as const;

/** CRS IN12735, end of August 2026. Crowdsourced floor, not a census. Live scrape of Finding Flock can overlay. */
export const CAMERAS = {
  count: 137000,
  asOf: "2026-08",
  note: "CRS IN12735 citing a crowdsourced map of over 137,000 ALPR cameras, with over 80% attributed to Flock Safety. A floor, not a census.",
} as const;

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
  "FIFTY is an independent civic briefing. It supports Orwell Day’s petition. It is not an official Orwell Day product, not legal advice, and not a live camera registry. Claims are labeled. Empty beats a copied instrument from the wrong state. Signature and camera figures can refresh from public pages; state rows are a retrieved briefing, not a live legislature feed.";
