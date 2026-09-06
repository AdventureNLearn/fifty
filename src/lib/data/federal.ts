export const FEDERAL = {
  asOf: "2026-09-06",
  bills: [
    {
      cite: "H.R. 10221",
      title: "Flock-Off Act",
      sponsor: "Rep. Thomas Massie (KY-4)",
      introduced: "2026-09-02",
      status: "Introduced, 119th Congress",
      what: "Prohibit federal funds for covered camera systems (ALPR and biometric capture) and associated cloud, software, and data-sharing. 180-day decommission for federally funded systems. Border and tolling exceptions, tightly drawn.",
      claim: "supported" as const,
      sourceIds: ["hr-10221"],
    },
    {
      cite: "H.R. 9800",
      title: "Federal ALPR / automated-surveillance purchase ban",
      sponsor: "119th Congress (CRS summary)",
      introduced: "2026",
      status: "Introduced — CRS IN12735",
      what: "Would prohibit federal agencies from purchasing, deploying, operating, accessing, or contracting automated surveillance that identifies, tracks, or records individuals, including ALPR, and bar state/local/tribal use of federal funds for the same.",
      claim: "supported" as const,
      sourceIds: ["crs-in12735"],
    },
    {
      cite: "Amdt. 221 to H.R. 8870",
      title: "ALPR limit for highway-fund recipients",
      sponsor: "Rep. Scott Perry (R-PA), Rep. Jesús García (D-IL)",
      introduced: "2026-05",
      status: "Failed in House T&I committee, 20–44",
      what: "Would have prohibited entities receiving federal highway funds from using ALPRs except for tolling. Bipartisan co-sponsor. Died in markup of the BUILD America 250 Act.",
      claim: "supported" as const,
      sourceIds: ["amendment-221", "crs-in12735"],
    },
  ],
  grants: [
    {
      name: "Byrne Justice Assistance Grant (JAG)",
      who: "DOJ / state administering agencies",
      note: "Vendor materials list JAG as a common ALPR funding path. A city council can still refuse the buy. A state can rewrite eligible uses.",
      sourceIds: ["flock-fund-blog"],
    },
    {
      name: "COPS Technology Program",
      who: "DOJ COPS Office",
      note: "Named by the vendor as covering LPR technology.",
      sourceIds: ["flock-fund-blog"],
    },
    {
      name: "Border Security / immigration-enforcement state grants",
      who: "State boards using federal or state immigration money",
      note: "Florida’s State Board of Immigration Enforcement approved local LPR grant requests (~$4.6M asked for ~440 readers) even as the governor later ordered devices off state roads. Not all disbursed.",
      sourceIds: ["jax-desantis-grants"],
    },
  ],
  access: [
    {
      title: "Front door",
      body: "Formal agreements: federal agencies contract with the vendor or with a local department for direct access.",
    },
    {
      title: "Back door",
      body: "Local agencies enable sharing with a federal partner (example: Border Patrol in Washington, 2025) without the city that owns the pole always knowing. Washington’s SB 6002 was written to close that path.",
    },
    {
      title: "Side door",
      body: "Default network settings. An officer in another agency types a case number — which the vendor’s 2026 reforms still do not independently verify as a real warrant.",
    },
  ],
} as const;
