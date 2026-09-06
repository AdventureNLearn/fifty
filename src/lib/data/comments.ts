import type { CommentTemplate, LaneId, WeekdayTarget } from "@/lib/types";
import { PETITION_URL } from "./petition";

const L = PETITION_URL;

export const WEEKDAY_TARGETS: WeekdayTarget[] = [
  {
    weekday: 0,
    label: "Sunday — local drop",
    hint: "A city that ended a contract, paused a program, or put cameras on the agenda.",
    lane: "legislation",
  },
  {
    weekday: 1,
    label: "Monday — executive",
    hint: "A governor, attorney general, or DOT order. State roads are not city streets.",
    lane: "permitting",
  },
  {
    weekday: 2,
    label: "Tuesday — money",
    hint: "Who paid: Byrne JAG, COPS, opioid settlements, insurance fees, retail-crime grants.",
    lane: "funding",
  },
  {
    weekday: 3,
    label: "Wednesday — privacy",
    hint: "Warrantless search, retention, ICE sharing, stalking cases, false reads.",
    lane: "privacy",
  },
  {
    weekday: 4,
    label: "Thursday — a bill",
    hint: "A state bill, a dead bill, a model act. Name the cite.",
    lane: "legislation",
  },
  {
    weekday: 5,
    label: "Friday — federal",
    hint: "Highway funds, H.R. 10221, the failed ALPR highway amendment, federal search access.",
    lane: "grants",
  },
  {
    weekday: 6,
    label: "Saturday — fifty",
    hint: "The thesis itself. 19,000 cities. 50 states. Link the petition.",
    lane: "petition",
  },
];

export const TEMPLATES: CommentTemplate[] = [
  {
    id: "fifty",
    lane: "petition",
    label: "The thesis",
    text: `City-by-city is 19,000 fights. A state ban is 50. Sign the petition to take ALPR cameras off at the state: ${L}`,
  },
  {
    id: "one-comment",
    lane: "petition",
    label: "One action",
    text: `One comment a day. That is the whole job. State legislatures can end this in 50 votes, not 19,000 council meetings. Petition: ${L}`,
  },
  {
    id: "neighbor",
    lane: "petition",
    label: "The neighbor problem",
    text: `A city that cancels still sits next to a city that feeds the same national database. That is why the fight is the state. Sign: ${L}`,
  },
  {
    id: "exec-not-ban",
    lane: "permitting",
    label: "Executive is not a ban",
    text: `Pulling cameras off state roads is not a statewide ban. County roads, city streets, and private poles remain. A legislature can finish the job. Petition: ${L}`,
  },
  {
    id: "dirt",
    lane: "permitting",
    label: "Whose dirt",
    text: `A city contract is not a highway permit. Name who owns the dirt, then ask that owner to revoke. Statewide, that owner is the legislature. Petition: ${L}`,
  },
  {
    id: "permit",
    lane: "permitting",
    label: "Revocable",
    text: `Many highway occupancy permits are temporary and revocable. They are not a constitutional right to scan every plate. State law can close the door. Petition: ${L}`,
  },
  {
    id: "jag",
    lane: "funding",
    label: "Federal money",
    text: `Byrne JAG and COPS tech grants are paying for ALPR subscriptions. If the federal spigot is open, the state can still refuse the buy. Petition: ${L}`,
  },
  {
    id: "opioid",
    lane: "grants",
    label: "Opioid money",
    text: `Opioid-settlement funds meant for treatment have been spent on license-plate readers. Ask the state to forbid that use. Petition: ${L}`,
  },
  {
    id: "insurance-fee",
    lane: "funding",
    label: "Fee on the policy",
    text: `In Texas a $1 bump on car insurance helped pay for thousands of cameras. Follow the fee. Then cut it. Statewide petition: ${L}`,
  },
  {
    id: "retail-crime",
    lane: "grants",
    label: "Retail-crime grants",
    text: `Organized-retail-crime grants have been a pipeline for ALPR buys. A state can rewrite the eligible uses. Petition: ${L}`,
  },
  {
    id: "warrant",
    lane: "privacy",
    label: "No warrant",
    text: `In most states an officer can query a national plate database with no warrant. That is a location history of the innocent. State law can require one. Petition: ${L}`,
  },
  {
    id: "retention",
    lane: "privacy",
    label: "How long they keep it",
    text: `New Hampshire deletes unmatched plate reads in minutes. Other states keep them for months. Retention is a state choice. Make it. Petition: ${L}`,
  },
  {
    id: "sharing",
    lane: "privacy",
    label: "Who else searches",
    text: `Local cameras feed a network other agencies can search — including federal ones, sometimes without the city knowing. Close the share at the state. Petition: ${L}`,
  },
  {
    id: "misuse",
    lane: "privacy",
    label: "Misuse is documented",
    text: `Officers have used these databases to stalk partners. False reads have put innocent drivers at gunpoint. Guardrails belong in statute, not a vendor blog. Petition: ${L}`,
  },
  {
    id: "install",
    lane: "installation",
    label: "Poles without a hearing",
    text: `Cameras go up on a consent agenda, a grant, or a pole-attachment. Public consent should come first. That is a state bill. Petition: ${L}`,
  },
  {
    id: "subscription",
    lane: "installation",
    label: "It is a subscription",
    text: `Most of these systems are annual subscriptions — hardware, cloud, and national search bundled. Renewal is a scheduled second chance. Or the state can end the class. Petition: ${L}`,
  },
  {
    id: "hr10221",
    lane: "legislation",
    label: "Federal bill",
    text: `H.R. 10221 (Flock-Off Act) would cut federal funds for covered camera systems. States do not have to wait on Congress. They can ban the class now. Petition: ${L}`,
  },
  {
    id: "amendment-221",
    lane: "legislation",
    label: "Highway funds",
    text: `A bipartisan amendment to keep highway-fund recipients off ALPR failed in committee. The next vote can be in a statehouse. Petition: ${L}`,
  },
  {
    id: "model",
    lane: "legislation",
    label: "Model acts exist",
    text: `Warrant requirements, short retention, public-consent felonies, vendor penalties — the model language is already written. A state can introduce it. Petition: ${L}`,
  },
  {
    id: "not-one-vendor",
    lane: "legislation",
    label: "Not one vendor",
    text: `If every Flock camera vanished tomorrow, the market would remain. Ban the capability — automated, warrantless location surveillance — not a logo. Petition: ${L}`,
  },
  {
    id: "fourth",
    lane: "privacy",
    label: "Fourth Amendment",
    text: `A searchable history of every car is a search. The Fourth Amendment was not written for a cloud. State legislatures can still say no. Petition: ${L}`,
  },
];

export function templatesFor(lane: LaneId | "petition"): CommentTemplate[] {
  return TEMPLATES.filter((t) => t.lane === lane);
}

export function templateForDay(dayIndex: number): CommentTemplate {
  return TEMPLATES[dayIndex % TEMPLATES.length];
}

export function targetForWeekday(weekday: number): WeekdayTarget {
  return WEEKDAY_TARGETS.find((t) => t.weekday === weekday) ?? WEEKDAY_TARGETS[6];
}
