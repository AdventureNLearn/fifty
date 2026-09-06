export const FEDERAL = {
  asOf: "2026-09-06",
  bills: [
    {
      cite: "H.R. 10221",
      title: "Flock-Off Act",
      sponsor: "Rep. Thomas Massie (KY-4)",
      introduced: "2026-09-02",
      status: "Introduced, referred to House Oversight and Government Reform, 119th Congress",
      what: "Prohibit federal funds for covered camera systems (ALPR and biometric capture) and associated cloud, software, and data-sharing. 180-day decommission for federally funded systems. Border (1-mile) and tolling exceptions, tightly drawn. Cosponsors at introduction included Burlison, Khanna, Spartz, Gosar, Roy, and Boebert.",
      claim: "supported" as const,
      sourceIds: ["hr-10221"],
    },
    {
      cite: "H.R. 9800",
      title: "Protection Against Mass Surveillance Act",
      sponsor: "Rep. Tim Burchett (TN-2)",
      introduced: "2026-07-21",
      status: "Introduced, referred to House Oversight and Government Reform, 119th Congress",
      what: "Would prohibit federal agencies from purchasing, deploying, operating, accessing, or contracting automated surveillance that identifies, tracks, or records individuals, including ALPR (the bill names Flock Safety cameras), and bar state/local/tribal use of federal funds for the same. Data collected in violation must be deleted within 30 days and cannot be used in court.",
      claim: "supported" as const,
      sourceIds: ["hr-9800", "crs-in12735"],
    },
    {
      cite: "H.R. 9716",
      title: "PRIVACY Act",
      sponsor: "Rep. Keith Self (TX-3)",
      introduced: "2026-07-15",
      status: "Introduced, referred to House Judiciary and Oversight, 119th Congress",
      what: "Would require the Attorney General to maintain a list of surveillance devices used by state and local LE, including ALPR. Federal agencies generally could not access the associated data without a warrant from a federal judge, with retention bounds after lawful access. Hits federal access — not the local officer at the keyboard.",
      claim: "supported" as const,
      sourceIds: ["hr-9716", "crs-in12735"],
    },
    {
      cite: "Amdt. 221 to H.R. 8870",
      title: "ALPR limit for highway-fund recipients",
      sponsor: "Rep. Scott Perry (R-PA), Rep. Jesús García (D-IL)",
      introduced: "2026-05",
      status: "Failed in House T&I committee markup of BUILD America 250, recorded vote 20–44 (RC#104), May 21, 2026",
      what: "One sentence: a recipient of Title 23 assistance may not use ALPRs except for tolling. Bipartisan co-sponsor. Chairman Graves and Ranking Member Larsen both voted no.",
      claim: "supported" as const,
      sourceIds: ["amendment-221", "amendment-221-ipvm", "crs-in12735"],
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
      note: "In Florida, as one example, the State Board of Immigration Enforcement approved local LPR grant requests (~$4.6M asked for ~440 readers) even as the governor later ordered devices off state roads. Not all disbursed. Other states run different pass-throughs.",
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
      body: "Local agencies enable sharing with a federal partner (example: Border Patrol in Washington, 2025) without the city that owns the pole always knowing. Washington’s Driver Privacy Act (ESSB 6002) was written in part to close that path.",
    },
    {
      title: "Side door",
      body: "Default network settings. An officer in another agency types a case number — which 2026 vendor reforms still do not independently verify as a real warrant.",
    },
  ],
} as const;
