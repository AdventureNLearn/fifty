import type { Posture, StateRow } from "@/lib/types";

export const POSTURE_LABEL: Record<Posture, string> = {
  "exec-pause": "Executive pause",
  statute: "ALPR statute",
  bill: "Bill this cycle",
  local: "Local drops only",
  open: "Not retrieved",
};

export const STATES: StateRow[] = [
  {
    code: "AL",
    name: "Alabama",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Ala. Admin. Code r. 265-X-6 (eff. Mar. 17, 2022; authority Code of Ala. 1975 § 41-9-620) — AJIC LPR rule for all capturing agencies: criminal-justice/public-safety use only, no sale, five-year retention. Not a Code of Alabama ALPR statute and not a collection ban.",
    executive: null,
    bills: [],
    localNote:
      "Birmingham City Council (July 8, 2025 agenda) authorized an Alabama Power surveillance-equipment amendment — an expansion, not a cancellation. Springville and Moody investigated Flock misuse; cameras were not cancelled.",
    fundingNote: null,
    permitNote:
      "ALDOT Form MB-14 / public-safety sensor permits: LPRs on State ROW, law-enforcement only, must comply with 265-X-6. Occupancy, not a pause.",
    privacyNote:
      "265-X-6-.06: retain LPR data and access logs no more than five years unless an active investigation. No warrant-for-query rule. Sale forbidden.",
    claim: "supported",
    why: "A five-year AJIC retention rule is not the petition’s statewide removal. Collection remains lawful.",
    sourceIds: ["al-aac-265x6", "aldot-pss-faq", "ff-laws"],
  },
  {
    code: "AK",
    name: "Alaska",
    posture: "open",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [],
    localNote:
      "Anchorage Police uses Axon dashcam ALPRs, not Flock; the chief told the Assembly there are no Flock cameras in Alaska and APD has no fixed ALPRs. APD Policy 7.12 purges ALPR data after 14 days unless tied to an investigation. AO 2026-108 (introduced Aug. 18, 2026) would restrict ALPRs; public hearing continued to Sept. 15, 2026. Not enacted.",
    fundingNote: null,
    permitNote: null,
    privacyNote: null,
    claim: "unproven",
    why: "No statewide ALPR statute, 2025–26 bill, or executive pause. Anchorage’s pending ordinance is not statewide removal.",
    sourceIds: ["apd-712", "ao-2026-108", "ff-laws"],
  },
  {
    code: "AZ",
    name: "Arizona",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "SB 1111 (2026)",
        title: "License plate readers; privacy; violations",
        status: "Lost — failed on the Senate floor, March 2026",
      },
      {
        cite: "SB 1138 (2026)",
        title: "Automated license plate readers",
        status: "Lost — 57th Legislature, 2nd Regular Session",
      },
      {
        cite: "HB 2917 (2026)",
        title: "Government mass surveillance network (Senate striker includes ALPR)",
        status: "Lost — 57th Legislature, 2nd Regular Session",
      },
    ],
    localNote:
      "Sedona City Council cancelled its Flock contract Sept. 9, 2025 (city news; cameras removed). Flagstaff cancelled Dec. 16, 2025. Surprise suspended ALPRs Aug. 12, 2026. Pinal County Sheriff will not renew at September 2026 end. AG Mayes opened a review Aug. 27, 2026 — a report, not a pause.",
    fundingNote: null,
    permitNote: null,
    privacyNote: null,
    claim: "supported",
    why: "2026 ALPR bills died. Named cities cancelled contracts. That is not statewide removal.",
    sourceIds: ["azleg-sb1111", "azag-mayes-review", "sedona-city-news", "ff-laws"],
  },
  {
    code: "AR",
    name: "Arkansas",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Ark. Code Ann. §§ 12-12-1801 to -1808 (Automatic License Plate Reader System Act, as amended by Act 668 of 2025 / SB446) — general use ban with exceptions for law enforcement, parking, secured areas, private property, and ARDOT Highway Police at weigh stations; 150-day government / 60-day private preservation caps. Not a collection ban for law enforcement.",
    executive: null,
    bills: [],
    localNote:
      "Centerton City Council voted unanimously in August 2026 to end its Flock contract. Searcy City Council voted not to renew three Flock contracts. Local cancellations, not statewide removal.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "§ 12-12-1804: captured plate data shall not be preserved more than 150 days by government users or 60 days by private operators, except LE investigation data until the case ends. No warrant for LE queries. Governmental sale banned.",
    claim: "supported",
    why: "A 150-day retention cap that still authorizes law-enforcement collection is not the petition’s statewide removal.",
    sourceIds: ["ar-act668", "ar-code-1804", "ff-laws"],
  },
  {
    code: "CA",
    name: "California",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Cal. Civil Code §§ 1798.90.5–1798.90.55 (SB 34, 2015) — ALPR operators and end-users must publish a usage/privacy policy, log queries, and keep reasonable security; public agencies may not sell or share plate data except with another public agency. Not a collection ban and no numeric statewide retention cap. Veh. Code § 2413 caps CHP retention at 60 days.",
    executive: null,
    bills: [
      {
        cite: "SB 1013",
        title: "Automated license plate recognition systems",
        status:
          "Passed Senate May 20, 2026 (28–9); not taken up on the Assembly floor before Aug. 31 adjournment — Lost",
      },
      {
        cite: "SB 274",
        title: "Automated license plate recognition systems",
        status: "Passed both houses 2025; vetoed Oct. 1, 2025; veto sustained March 2, 2026 — Lost",
      },
    ],
    localNote:
      "LAPD let its Flock agreement expire July 11, 2026. El Cerrito council did not renew; cameras decommissioned June 6. Campbell is decommissioning Flock for an in-house system. Redwood City notified Flock it will not auto-renew (contract expires Nov. 30, 2026) and issued an RFP for a replacement vendor.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "Operators/end-users must publish a usage and privacy policy stating retention length (Civ. Code §§ 1798.90.51–.53). Public agencies may not sell or share ALPR information except with another public agency (§ 1798.90.55(b)). No statewide numeric retention cap and no warrant rule. CHP: 60-day cap except evidence/felonies (Veh. Code § 2413).",
    claim: "supported",
    why: "California has an ALPR use-and-sharing statute, not statewide removal. SB 1013 died at adjournment. Named city Flock cancellations are not a statewide ban.",
    sourceIds: ["ca-civ-1798", "ca-veh-2413", "ca-sb1013", "calmatters-sb1013"],
  },
  {
    code: "CO",
    name: "Colorado",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "SB26-070",
        title: "Ban Government Access Historical Location Information Database (ALPR historical location)",
        status:
          "Lost, 2026 Regular Session — Senate second reading laid over to 07/04/2026 (Apr 29); General Assembly status Lost",
      },
      {
        cite: "SB26-071",
        title: "Use of Surveillance Technology by Law Enforcement (SAFE Act; includes ALPRs)",
        status: "Lost, 2026 Regular Session — Senate Judiciary postponed indefinitely May 6, 2026",
      },
    ],
    localNote:
      "Salida PD cancelled its Flock contract (Aug 2026). Denver let its Flock contract lapse (Mar 2026) and later contracted Axon ALPRs — a vendor swap, not a camera ban.",
    fundingNote: null,
    permitNote:
      "CDOT Special Use Permit and ALPR Terms and Conditions (Colorado law-enforcement applicants). Occupancy on state highway ROW, not a ban.",
    privacyNote:
      "C.R.S. 24-72-113 is a general 3-year destruction rule for passive-surveillance images (CCTV, photo radar, other cameras). Official text does not mention ALPRs. Finding Flock does not list Colorado among ALPR-specific statutes. SB26-070 died.",
    claim: "supported",
    why: "SB26-070 and SB26-071 died. A general image-retention rule is not a statewide camera ban. The petition still applies.",
    sourceIds: ["co-sb26-070", "co-sb26-071", "cdot-alpr-permit", "ff-laws"],
  },
  {
    code: "CT",
    name: "Connecticut",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "PA 26-14 §§ 13–15 (sSB 397, signed May 4, 2026; amended by PA 26-76 § 46): from Oct. 1, 2026, listed ALPR uses only, 21-day default retention, neighbor-state sharing with attestation. Not a collection ban.",
    executive:
      "Gov. Lamont letter to POST-C, Aug. 7, 2026, requests 30-day ALPR/camera guidance and urges towns to pause new installs until that guidance. Not an executive order. Does not revoke existing cameras or bind municipalities.",
    bills: [
      {
        cite: "HB 5449 (2026)",
        title: "An Act Concerning Automated License Plate Reader Systems",
        status: "Lost",
      },
      {
        cite: "HB 5552 (2026)",
        title: "An Act Concerning Requirements for State Contracts Concerning Automated License Plate Reader Information",
        status: "Lost",
      },
    ],
    localNote:
      "Windsor Town Council, July 6, 2026, defeated 4–5 a motion to reactivate 16 Flock cameras (off since a Feb. 18, 2026 shutoff). Killingworth opted not to renew four Route 81 Flock cameras (June–July 2026).",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "PA 26-14 § 13 (eff. Oct. 1, 2026): 21-day default retention unless warrant, court order, or documented active investigation. Sharing limited to CT agencies and MA/NY/RI LE with written attestation; other out-of-state/federal access needs a probable-cause warrant (TSDB match excepted). POST model policy due Dec. 1, 2026.",
    claim: "supported",
    why: "PA 26-14 is a use/retain/share statute, not statewide removal. Collection remains lawful for listed law-enforcement purposes.",
    sourceIds: ["cga-pa-26-14", "gov-lamont-2026-08-07", "windsor-tc-2026-07-06", "ff-laws"],
  },
  {
    code: "DE",
    name: "Delaware",
    posture: "local",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [],
    localNote:
      "Wilmington decommissioned four donated Flock ALPRs in August 2026 (city council statement) but continues other-vendor ALPR. Milton PD returned a Flock unit. DSP, New Castle County, and Rehoboth Beach still operate Flock.",
    fundingNote:
      "Delaware State Police January 2026 purchase order $95,261 for Flock software (Cape Gazette FOIA of DSP). Not a statewide camera-ban line.",
    permitNote:
      "DelDOT Safety Permits cover ALPR installs on state ROW (Cape Gazette FOIA, June 2026). Occupancy, not a ban.",
    privacyNote: null,
    claim: "supported",
    why: "Wilmington dropped four donated Flock cameras and still runs other ALPRs. That is not the statewide removal the petition asks for.",
    sourceIds: ["de-wilm-council", "ff-laws"],
  },
  {
    code: "DC",
    name: "District of Columbia",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "D.C. Code § 50-2443 (D.C. Law 25-325 / B25-0435, Act 25-695, eff. May 2, 2025; Act Sec. 113) — Mayor shall issue LPRS usage, privacy, security, and sharing rules. LPRS defined at § 50-2431(8). Not a collection ban. No numeric retention cap. No warrant-for-query. D.C. Law 26-120 (temp., eff. May 21, 2026) struck Sec. 113 from the subject-to-appropriations list, so the section is presently applicable. Finding Flock’s 19-state table omits DC.",
    executive: null,
    bills: [
      {
        cite: "B26-0246",
        title: "Automated Curbside Management System Amendment Act of 2025",
        status:
          "Under Council Review — hearings Oct. 2025. Cites ALPRs for smart loading zones. Not a collection ban.",
      },
    ],
    localNote:
      "Not a state; Council is the legislature. MPD 2024 contract for 67 Flock ALPR systems (At-Large CM Henderson letter, Jan. 20, 2026). No named ward cancellation. MPD GO-OPS-303.09 (eff. April 30, 2026): 90-day plate-data purge.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "§ 50-2443 is a rulemaking mandate, not a retention cap. MPD policy: 90-day purge, query logs 4 years, annual 1% audit. D.C. Code § 2-1461.01 bars District aid to interstate abortion/contraception/gender-care investigations.",
    claim: "supported",
    why: "Not a state. Council is the legislature. § 50-2443 is an LPRS usage/privacy rulemaking statute, not District-wide removal.",
    sourceIds: ["dc-code-50-2443", "dc-law-25-325", "mpd-go-303-09", "ff-laws"],
  },

  {
    code: "FL",
    name: "Florida",
    posture: "exec-pause",
    asOf: "2026-09-06",
    alprStatute:
      "§ 316.0777, Fla. Stat. — FDOT may allow LEA ALPR in State Highway System right-of-way for active criminal intelligence/investigative information; not for citations; 30-day removal after FDOT notice. § 316.0778 directs DOS (with FDLE) to set a retention maximum; no numeric cap in the statute. Not a collection ban.",
    executive:
      "FDOT Engineering and Operations Memorandum No. 26-01 (31 Aug 2026), signed by COO/Assistant Secretary Will Watts, P.E., revoked all previously issued LPR approvals in State Highway System right-of-way. Permittee removal within 30 days (through 30 Sep 2026) or FDOT removes. FDOT will issue no new SHS LPR permits. The memo does not, by its terms, revoke county roads, city streets, or private property. Preceded by Gov. DeSantis remarks; the signed instrument is the FDOT memo, not a gubernatorial executive order.",
    bills: [
      {
        cite: "CS/CS/CS/HB 543",
        title: "Transportation — private-entity ALPR on private property (not a collection ban)",
        status: "Lost — died in returning Messages, 13 Mar 2026",
      },
      {
        cite: "CS/SB 1274",
        title: "Transportation — private-entity ALPR on private property (not a collection ban)",
        status: "Lost — died in Appropriations, 13 Mar 2026",
      },
    ],
    localNote:
      "Jacksonville Sheriff T.K. Waters discontinued LPR use countywide in Duval, beyond the SHS order. Clay County Sheriff Michelle Cook ordered all LPRs off Clay roadways. Bradford County Sheriff Gordon Smith stopped LPR countywide. Pasco Sheriff Chris Nocco ended the county-ROW interlocal effective 30 Sep 2026 (before the memo). Boca Raton Police and Tampa Police announced SHS-only removals.",
    fundingNote:
      "State Board of Immigration Enforcement: since Sep 2025, 18 agencies requested money for about 440 LPRs (~$4.6M). About $147M in that broader immigration-enforcement grant program approved, $21M disbursed. Not all LPR money has gone out.",
    permitNote:
      "Instrument on SHS was a General Use Permit under FAC 14-20.010 — temporary, non-exclusive, revocable at any time. FDOT said as of EOM 26-01 it will issue no new SHS LPR permits.",
    privacyNote:
      "Images and PII from ALPR are confidential under Ch. 119 with listed disclosures. Not a warrant requirement for queries. § 316.0778 directs a DOS retention maximum; the statute itself has no numeric cap.",
    claim: "supported",
    why: "State-road revocation is real. It is not a statewide ban. County and city dirt remain a local fight unless the legislature acts.",
    sourceIds: ["eom-26-01", "fs-316-0777", "fs-316-0778", "jax-desantis-grants", "jax-waters"],
  },
  {
    code: "GA",
    name: "Georgia",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "O.C.G.A. § 35-1-22 (Ga. L. 2018, p. 758, § 1/HB 79) — agencies may collect captured plate data; unmatched reads destroyed no later than 30 months unless a toll violation or a law-enforcement purpose. Sharing with other LE agencies is allowed. Not a collection ban.",
    executive: null,
    bills: [],
    localNote:
      "Gwinnett County Police and Glynn County Police operate Flock under § 35-1-22. Collection remains lawful. Not statewide removal.",
    fundingNote: null,
    permitNote:
      "GDOT Special Encroachment 7411 Permit required for ALPR on state routes and interstates; 3-year renewal. Occupancy, not a ban.",
    privacyNote:
      "Unmatched reads destroyed no later than 30 months unless a toll violation or a law-enforcement purpose. Access and sharing only for a law-enforcement purpose. No warrant-for-query. Open Records exempt.",
    claim: "supported",
    why: "A 30-month retention cap is not statewide removal. Collection remains lawful.",
    sourceIds: ["ocga-35-1-22", "gdot-alpr", "ff-laws"],
  },
  {
    code: "HI",
    name: "Hawaii",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "HB2033 (2026)",
        title: "Relating to Transportation (Automatic License Plate Recognition Systems Program)",
        status:
          "Lost — recommitted to Senate WAM/JDC April 14, 2026. House-passed/SD1 text authorized county ALPR for expired registration and inspection citations; not a ban.",
      },
    ],
    localNote:
      "Honolulu Police Department operates fixed ALPRs under Policy 4.57 (90-day purge unless evidence). No named city or county cancellation retrieved.",
    fundingNote: null,
    permitNote: null,
    privacyNote: null,
    claim: "supported",
    why: "HB2033 would have authorized county ALPR, not banned it. It died. Hawaii has no statewide ALPR removal.",
    sourceIds: ["hi-hb2033", "ff-laws"],
  },
  {
    code: "ID",
    name: "Idaho",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Idaho Code § 49-1432 (2025, ch. 316 / S1180, signed Apr. 4, 2025, eff. July 1, 2025) — agencies may use ALPRs for law enforcement and traffic-flow analysis; LE use limited to felony/misdemeanor investigation, traffic accidents, or missing/endangered persons; access limited to the agency’s authorized personnel; query logs, training, and semiannual audits required. Not a collection ban and no statewide retention cap.",
    executive: null,
    bills: [],
    localNote:
      "Kootenai County BOCC (Aug. 27, 2025) cut $24,000 Motorola ALPR software from the FY26 budget. Twin Falls PD ended Flock national-lookup sharing July 22, 2026; cameras remain. Neither is statewide removal.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "§ 49-1432: access limited to an agency’s authorized personnel; all queries logged. No statewide retention clock and no warrant-for-query rule. Use for traffic infractions forbidden except those tied to a traffic accident.",
    claim: "supported",
    why: "Idaho’s ALPR statute authorizes collection and limits use and access. It is not the petition’s statewide removal.",
    sourceIds: ["id-49-1432", "id-s1180", "ff-laws"],
  },
  {
    code: "IL",
    name: "Illinois",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "625 ILCS 5/2-130 (P.A. 103-540, eff. 1-1-24) — ALPR-specific share/access rules: no sale/share to investigate reproductive-health restrictions or immigration-status detention; out-of-state share only after a written declaration. Official text sets no retention clock and no unmatched-read cap. Not a collection ban.",
    executive: null,
    bills: [
      {
        cite: "HB 5151 (104th)",
        title: "Automated License Plate Recognition System Act",
        status: "Rule 19(a) / Re-referred to Rules Committee (Apr 17, 2026)",
      },
      {
        cite: "SB 3257 (104th)",
        title: "VEH CD-ALPR-RECORD RETENTION (amends 625 ILCS 5/2-130)",
        status: "Rule 3-9(a) / Re-referred to Assignments (May 22, 2026)",
      },
      {
        cite: "HB 5231 (104th)",
        title: "VEH CD-ALPR (adds 625 ILCS 5/2-131)",
        status: "Rule 19(a) / Re-referred to Rules Committee (Mar 27, 2026)",
      },
    ],
    localNote:
      "Oak Park Village Board terminated its Flock contract Aug. 5, 2025. Evanston issued a termination notice Aug. 26, 2025, effective Sept. 26, 2025.",
    fundingNote:
      "AG organized-retail-crime grants: $15M since 2023; analysis that $5.6M covered 900+ ALPRs and subscriptions. ISP reports IDOT appropriated about $10.6M in Feb. 2026 for expressway ALPRs.",
    permitNote: null,
    privacyNote:
      "625 ILCS 5/2-130: no retention cap; out-of-state sharing needs a written declaration. SOS Aug. 25, 2025 audit found Flock allowed CBP access in violation of Illinois law. That is an enforcement finding against the vendor, not a statewide camera ban.",
    claim: "supported",
    why: "A share/access statute, grant-funded expansion, SOS violation finding, and named local cancellations coexist. The statute does not forbid collection.",
    sourceIds: ["il-ilcs-2130", "il-sos", "il-orc", "il-oak-park", "il-evanston", "ff-laws"],
  },
  {
    code: "IN",
    name: "Indiana",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "IC 32-25.5-3.8 (P.L.26-2026 / HEA 1150, eff. 1 Jul 2026) — HOAs may not install, maintain, or operate ALPRs; law-enforcement install and access is the exception. Does not regulate law-enforcement use, retention, or sharing.",
    executive: null,
    bills: [],
    localNote:
      "Bloomington did not renew Flock after the 5 Mar 2026 expiry (Mayor Thomson, 15 Apr 2026). Monroe County commissioners voted 2–0 (23 Jul 2026) to terminate Flock. Fort Wayne City Council voted 8–0 (25 Aug 2026) against Flock funding — not a ban ordinance. NYT GOP “standards” talk is a signal, not a filed bill.",
    fundingNote: null,
    permitNote:
      "INDOT Permit Operations Memorandum 21-02 (5 Feb 2021): law-enforcement agencies may occupy state ROW with ALPRs. Occupancy, not a pause.",
    privacyNote: null,
    claim: "supported",
    why: "IC 32-25.5-3.8 bars HOA-operated ALPRs. It is not statewide removal of law-enforcement cameras.",
    sourceIds: ["in-hea1150", "indot-pom-21-02", "bloomington-flock", "ff-laws"],
  },
  {
    code: "IA",
    name: "Iowa",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Iowa Code § 321P.4 (2024 Acts, ch 1181, §4) — operator must permanently delete plate images and accompanying data within 30 days; a law-enforcement agency may copy data relevant to an ongoing criminal case and keep it under its evidence-retention policy. Violation is a simple misdemeanor. Not a collection ban.",
    executive: null,
    bills: [
      {
        cite: "SF 2284 (2026)",
        title: "Use of automated systems that detect traffic violations or registration plate information",
        status: "Lost — not enrolled at sine die",
      },
      {
        cite: "HF 2556 (2026)",
        title: "Use of automatic registration plate readers (statewide prohibition; would repeal § 321P.4)",
        status: "Lost — referred Judiciary, no further action",
      },
      {
        cite: "HF 2701 (2026)",
        title: "Use of automatic registration plate readers (regulation)",
        status: "Lost",
      },
    ],
    localNote:
      "Coralville City Council Resolution 2026-16 (Feb. 24, 2026) terminated the Flock agreement. Waukee PD will not renew Flock (Aug. 14, 2026). Indianola PD deactivated its Flock cameras Aug. 17, 2026. Sioux City Council (June 8, 2026) accepted $77,250 Byrne JAG to expand Flock — expansion, not a drop.",
    fundingNote:
      "State Office of Drug Control Policy Byrne JAG pass-through: Sioux City Grant 24-JAG-651882, $77,250, July 1, 2026–June 30, 2027.",
    permitNote: null,
    privacyNote:
      "Iowa Code § 321P.4: 30-day deletion clock for the operator; investigation copies follow agency evidence policy and are exempt. No statewide warrant-for-query rule.",
    claim: "supported",
    why: "Iowa Code § 321P.4 is a 30-day retention cap, not statewide removal. 2026 bills, including a ban (HF 2556), were lost at sine die.",
    sourceIds: ["ia-321p4", "ia-hf2556", "coralville-res-2026-16", "sioux-city-jag-2026", "ff-laws"],
  },
  {
    code: "KS",
    name: "Kansas",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "SB 373 (2026)",
        title: "Maximum length of a utility/law-enforcement pole-equipment agreement",
        status:
          "Lost — Senate Judiciary reported as amended Feb. 9, 2026; never reached the floor. As amended, ALPRs that destroy data within 90 days are carved out.",
      },
      {
        cite: "SB 478 (2026)",
        title: "Pole-equipment time limit grafted onto utility-employee assault penalties",
        status: "Lost — Senate Judiciary reported as amended Mar. 17, 2026; never reached the floor.",
      },
    ],
    localNote:
      "Gardner City Council voted Aug. 17, 2026 to turn off four city Flock cameras and not renew the contract. Wellsville PD terminated Flock agreements Aug. 20, 2026. Wichita’s Flock network is in litigation, not cancelled.",
    fundingNote: null,
    permitNote:
      "KSA 60-5402 immunizes public utilities that host law-enforcement equipment on poles. Liability shield, not a collection ban.",
    privacyNote:
      "KSA 45-221(a)(55) exempts captured plate data and ALPR locations from KORA. It is a disclosure rule, not an ALPR-use statute. Named misuse: Kechi PD, Sedgwick PD, Bonner Springs PD. NYT GOP “tighten” talk is a signal, not a filed draft.",
    claim: "supported",
    why: "SB 373 and SB 478 died without a floor vote. Two cities dropped Flock. That is not statewide removal.",
    sourceIds: ["ks-sb373", "ks-sb478", "ff-laws", "nyt-red-states"],
  },
  {
    code: "KY",
    name: "Kentucky",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "KRS 189.632 (2026 Ky. Acts ch. 71 / HB 58, effective 15 Jul 2026) — ALPR use only for listed purposes. Default 90-day retention with investigative, training, audit, and subpoena carve-outs. Written public policy; visual confirmation of an alert before a stop. Not a warrant-for-query rule and not a collection ban.",
    executive: null,
    bills: [
      {
        cite: "HB 375 (2026 RS)",
        title: "AN ACT relating to automated license plate readers — prohibit use, deployment, and maintenance",
        status: "Lost — last action to Transportation (H), 22 Jan 2026",
      },
    ],
    localNote: "Newport ended its Flock pilot (14 Jul 2026). Named Northern Kentucky cities have terminated or declined to renew; Lexington’s cameras remain under a mayoral review panel.",
    fundingNote: null,
    permitNote:
      "KRS 189.632(7) directs the Transportation Cabinet to establish a permit process for ALPR on highway rights-of-way. No promulgated regulation retrieved.",
    privacyNote:
      "A 90-day cap is a retention rule, not a collection ban. No warrant-for-query. Rep. Massie’s federal Flock-Off Act (H.R. 10221) is a House bill, not a Kentucky act.",
    claim: "supported",
    why: "A retention cap is not the petition’s statewide removal.",
    sourceIds: ["ky-189632", "ky-hb58", "ky-hb375", "ff-laws"],
  },
  {
    code: "LA",
    name: "Louisiana",
    posture: "open",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [],
    localNote:
      "No named cancellation retrieved. Livingston Parish Ordinance 26-20 (private cameras, including ALPRs, on parish ROW) returned to committee Aug. 27, 2026 — not adopted. Lafayette, Kenner, and UL Lafayette PD operate Flock by contract.",
    fundingNote:
      "OTS asked JLCB for a 10-year Motorola contract that includes LPR for LSP and other state agencies (memo July 21, 2026). Reporting of a $192.6M package is not a dedicated ALPR fee.",
    permitNote:
      "Louisiana DOTD Automatic License Plate Camera Permit (Rev. 03/23): law-enforcement-only occupancy of state highway right-of-way. Occupancy, not a pause.",
    privacyNote:
      "La. R.S. 14:57.1 makes it a felony to vandalize a crime camera system, defined to include a license plate reader. It does not regulate collection, use, sharing, or retention — not packed as an ALPR-use statute.",
    claim: "supported",
    why: "No ALPR use, share, retain, or collect statute was retrieved. DOTD still issues occupancy permits. That is not statewide removal.",
    sourceIds: ["dotd-alpc-permit", "rs-14-57-1", "ff-laws"],
  },
  {
    code: "ME",
    name: "Maine",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "29-A M.R.S. § 2117-A — general prohibition on ALPR use, with exceptions for MaineDOT, State Police commercial-vehicle screening, and state/county/municipal LE for public safety, criminal investigations, and legal compliance. Ordinary data that is not intelligence and investigative record information may not be stored more than 21 days. Violation is a Class E crime. Not a collection ban for authorized LE.",
    executive: null,
    bills: [],
    localNote:
      "South Portland City Council directed an immediate end to the city’s Flock ALPR use at its June 11, 2026 workshop; the city says Flock confirmed cameras removed and no account active as of June 22, 2026.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "21-day cap on data that is not intelligence and investigative record information or commercial-vehicle screening data. Collected data confidential. LE queries must rest on officer-entered information based on specific and articulable facts, a civil order, NCIC, or an official LE bulletin.",
    claim: "supported",
    why: "A 21-day retention cap with law-enforcement exceptions is not statewide removal. The petition still applies.",
    sourceIds: ["me-2117a", "sopo-alpr", "ff-laws"],
  },
  {
    code: "MD",
    name: "Maryland",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Md. Code, Public Safety § 3-509 (amended 2024 ch. 875/876) — captured plate data only for a legitimate law enforcement purpose; historical data is agency property, may not be sold; vendor-accessed only with express authorization; no upload to other agencies except MCAC. No numeric unmatched-read retention cap. Companion GP § 4-326 denies PIA inspection. Not a collection ban.",
    executive: null,
    bills: [],
    localNote:
      "Hancock (Washington County) voted unanimously Nov. 18, 2025 to remove Flock after a trial; cameras were still up as of Dec. 22, 2025. Salisbury entered a 3-year Flock contract Dec. 2025. Anne Arundel County operates fixed LPRs with a 30-day local deletion policy.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "Use/access statute, not a collection ban. No statewide numeric retention cap. Historical data: agency-owned; no sale. PIA-exempt (PS § 3-509(d); GP § 4-326).",
    claim: "supported",
    why: "A use/access statute is not statewide removal. Collection remains lawful, so the petition still applies.",
    sourceIds: ["md-ps-3509", "md-ch875", "ff-laws"],
  },
  {
    code: "MA",
    name: "Massachusetts",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "H.3755 (194th)",
        title: "An Act establishing driver privacy protections",
        status:
          "Reported favorably; referred House Ways and Means March 23, 2026 — pending. Would cap ALPR retention at 14 days and require a warrant to access another entity’s data. Not a collection ban.",
      },
    ],
    localNote:
      "Cambridge terminated its Flock contract (city statement, Dec. 10, 2025) after deactivating 16 cameras in Oct. 2025. Salem (city news, July 23, 2026) is not renewing Flock and is replacing those ALPRs with units under local data control. MSP still operates Vigilant ALPRs.",
    fundingNote: null,
    permitNote:
      "Acts 2026 c. 140 (approved July 14, 2026) is a Cambridge-only special act authorizing parking ALPRs. Not a statewide occupancy instrument.",
    privacyNote:
      "No ALPR-specific statute. Commonwealth v. McCarthy (2020) held that enough ALPRs in enough places can be a constitutional search. Shield Law restricts out-of-state sharing on lawful reproductive and gender-affirming care.",
    claim: "supported",
    why: "Pending H.3755 would regulate retention and access. It is not law and it is not statewide removal.",
    sourceIds: ["ma-h3755", "ma-ch140", "cambridge-flock", "ff-laws"],
  },
  {
    code: "MI",
    name: "Michigan",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "HB 5492 / HB 5493 (2026)",
        title: "Regulating Automatic License Plate Readers Act (pair; tie-barred)",
        status:
          "Introduced Jan. 29, 2026; House Judiciary. Would cap government retention at 14 days and limit uses. Not enacted.",
      },
      {
        cite: "SB 1131 (2026)",
        title: "Guidelines for use of registration plate reader systems",
        status:
          "Introduced July 29, 2026; Senate Civil Rights, Judiciary, and Public Safety. Senate counterpart. Not enacted.",
      },
    ],
    localNote:
      "Ann Arbor PD does not deploy city ALPRs (AAPD, Oct. 27, 2025). Detroit PD operates readers. Among Michigan’s largest cities, only Ann Arbor has no city LPR program.",
    fundingNote:
      "DTMB contract MA250000000832: Flock statewide LPR solution, $2,626,000, June 3, 2025–June 3, 2030; 30-day rolling purge under MSP Policy 07-13.",
    permitNote:
      "MDOT still issues annual trunkline permits for LE ALPRs (instructions dated March 1, 2024). Occupancy, not a pause.",
    privacyNote:
      "No statewide statutory retention cap. MSP contract/Policy 07-13: 30-day rolling purge except evidence. That policy does not bind locals.",
    claim: "supported",
    why: "Pending 2026 bills would regulate ALPRs, not remove them. None have been enacted.",
    sourceIds: ["mi-hb5492", "mi-sb1131", "mi-dtmb-832", "ff-laws"],
  },
  {
    code: "MN",
    name: "Minnesota",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Minn. Stat. § 13.824 (2015 c. 67; 2024 c. 127 art. 3) — data-practices statute, not a collection ban. Collection limited to plate numbers, date/time/location, and pictures of plates/vehicles/surroundings. Unmatched reads destroyed no later than 60 days. Limited warrant to monitor or track a person who is the subject of an active criminal investigation. Biennial independent audit; BCA publishes agency/fixed-location list. Central state repository prohibited unless authorized by law.",
    executive: null,
    bills: [
      {
        cite: "HF 4205 / SF 4739 (94th)",
        title: "48-hour unmatched destruction; out-of-state warrant; BCA centralization",
        status: "Lost — House Judiciary failed 7–7 March 17, 2026; sine die May 18, 2026",
      },
      {
        cite: "HF 4661 / SF 4850 (94th)",
        title: "Third-party platform / nationwide-search amendments to § 13.824",
        status: "Lost — referred judiciary; sine die May 18, 2026",
      },
    ],
    localNote:
      "St. Paul (Aug. 26, 2026): mayor and chief announced removal of two city-owned Flock cameras after a 7–0 nonbinding council resolution; Ramsey County Sheriff cameras inside the city were not removed. Duluth Flock contract expires Sept. 7, 2026; other ALPR continues.",
    fundingNote:
      "DPS Auto Theft Prevention Program grants have funded some local fixed ALPRs. Grant funding, not a pause.",
    permitNote:
      "Highway occupancy is a separate instrument from § 13.824 and is not packed here as a ban.",
    privacyNote:
      "60-day data-practices cap, not a collection ban. Ordinary queries rest on written authorization and reasonable suspicion, not a warrant for every search.",
    claim: "supported",
    why: "A 60-day data-practices rule is not statewide removal.",
    sourceIds: ["mn-13-824", "mn-hf4205", "ff-laws"],
  },
  {
    code: "MS",
    name: "Mississippi",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "HB 528 (2025)",
        title: "Automated license plate recognition systems; prohibit use subject to exceptions",
        status: "Lost — died in House Judiciary B, Feb. 4, 2025. No 2026 refile retrieved.",
      },
    ],
    localNote:
      "Jackson City Council approved a two-year Flock contract for 16 LPRs in Sept. 2024; reporting as of Sept. 1, 2026 says the ALPR contract remains in force. Oxford PD has used Flock since about 2022. Expansion, not cancellation.",
    fundingNote:
      "Some cities use Mississippi Office of Homeland Security grants for Flock (Bay St. Louis staff report). Not a dedicated statewide ALPR fee.",
    permitNote: null,
    privacyNote:
      "Miss. Code § 17-25-19 bans automated traffic-enforcement cameras at signals; AG opinions (Chaney 2024, Turnage 2025) say investigative ALPRs are not banned. No statewide ALPR retention cap.",
    claim: "supported",
    why: "A 2025 House restriction died in committee. Cities including Jackson still run Flock. That is not statewide removal.",
    sourceIds: ["ms-hb528", "ms-17-25-19", "ff-laws"],
  },
  {
    code: "MO",
    name: "Missouri",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "SB 1027 / SB 1166 (2026)",
        title: "ALPR systems prohibition (with red-light companion in SB 1166)",
        status: "Lost — died in Senate Transportation; sine die May 15, 2026",
      },
      {
        cite: "HB 3192 (2026)",
        title: "Missouri Automatic License Plate Reader Regulation Act",
        status: "Lost — referred House Emerging Issues; sine die May 15, 2026",
      },
      {
        cite: "HB 658 / SB 540 (2025)",
        title: "Prohibits automated traffic enforcement and ALPRs",
        status: "Lost — died in committee, 2025 session",
      },
    ],
    localNote:
      "Weston Board of Aldermen cancelled a Flock buy (2026). Willard Board of Aldermen voted unanimously Aug. 24, 2026 to terminate Flock. Bolivar cancelled. St. Charles County shut down its Flock network after a civilian employee used it to track an ex-partner (Aug. 2026). Columbia, Kansas City, St. Louis, and Springfield still deploy.",
    fundingNote: null,
    permitNote:
      "MoDOT EPG 941.10: ALPRs on Commission right-of-way need written DPS Director approval, then a MoDOT construction permit. Occupancy, not a pause.",
    privacyNote: null,
    claim: "supported",
    why: "2025 and 2026 prohibition bills died in committee. Named cities cancelled contracts. That is not statewide removal.",
    sourceIds: ["mo-sb1027", "mo-hb3192", "ff-laws"],
  },
  {
    code: "MT",
    name: "Montana",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Mont. Code Ann. §§ 46-5-117 to 46-5-119 (Ch. 202, L. 2017) — default prohibition on highway ALPR use by state or local agencies, with listed exceptions: MDT/city planning (anonymized), parking, weigh-station screening, fleet tracking, and law enforcement only to identify a vehicle that is stolen, associated with a wanted/missing/endangered person, registered to a person with an outstanding warrant, in commercial-trucking violation, or tied to case-specific investigation of a major crime. 46-5-118: unmatched LE captures may not be preserved more than 90 days without a sworn preservation request or a search warrant. Not a collection ban for the listed purposes.",
    executive: null,
    bills: [],
    localNote:
      "Billings, Missoula, and Bozeman city/county LE have not deployed Flock; private retail ALPRs operate on private lots. No named municipal cancellation.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "90-day unmatched LE cap and limited warrant/preservation path. Match alone is not reasonable suspicion for a stop. Sale of captured data banned.",
    claim: "supported",
    why: "A default highway-use prohibition with listed law-enforcement exceptions is not the petition’s statewide removal.",
    sourceIds: ["mt-46-5-117", "mt-46-5-118", "ff-laws"],
  },
  {
    code: "NE",
    name: "Nebraska",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Neb. Rev. Stat. §§ 60-3201 to 60-3209 (Automatic License Plate Reader Privacy Act; Laws 2018, LB93) — governmental ALPR use prohibited except enumerated purposes (parking/traffic/registration/insurance violations, warrants, missing persons, stolen vehicles, ongoing criminal investigation, parking facilities, secured areas, tolls, weigh stations). Captured plate data shall not be retained more than 180 days unless evidence of a listed purpose, a preservation request, or a warrant/subpoena/court order. Hot lists refreshed at the start of each shift. Not a collection ban for the listed purposes.",
    executive: null,
    bills: [],
    localNote:
      "Lincoln PD operates Axon cruiser ALPRs under G.O. 2080 citing the 180-day cap. Omaha PD and Bellevue PD file § 60-3206 reports with the Crime Commission.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "180-day unmatched-read cap. No warrant for permitted real-time matching. Captured plate data is not a public record.",
    claim: "supported",
    why: "A 180-day cap with enumerated uses is not statewide removal.",
    sourceIds: ["ne-60-3204", "ne-60-3203", "ff-laws"],
  },
  {
    code: "NV",
    name: "Nevada",
    posture: "open",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [],
    localNote:
      "Clark County School District Police paused Flock pending the chief’s review (Aug. 2026). LVMPD, Henderson, Reno, and Washoe County Sheriff operate ALPRs under policy. No numbered 2025–26 bill. An unnumbered 2027 Judiciary BDR was requested Aug. 25, 2026 — not packed as a bill.",
    fundingNote:
      "Reno used ARPA/SLFRF ($450k, Nov. 2024) for Flock. Henderson used SLFRF for 54 poles. LVMPD expansion via foundation gifts. Not a statewide ALPR fee.",
    permitNote: null,
    privacyNote:
      "NRS 484A.600 bars governmental photo/video for traffic citations except listed equipment; it is not an ALPR retention or search statute.",
    claim: "supported",
    why: "No ALPR statute or numbered bill retrieved. Named locals operate on policy. That is not statewide removal.",
    sourceIds: ["nv-nrs-484a600", "nv-judiciary-34855", "ff-laws"],
  },
  {
    code: "NH",
    name: "New Hampshire",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "RSA 261:75-b — LPRs restricted to local, county, and state law enforcement. Unmatched plate records shall be purged within 3 minutes unless an alarm resulted in arrest, citation, protective custody, or a missing/wanted match. RSA 259:68-a defines an LPR as vehicle-mounted and attended by an officer. 2016 sunset (Jan. 1, 2027) was repealed by 2026 HB 1059 / Chapter 88 (signed May 28, 2026). Attended devices; audit trail required.",
    executive: null,
    bills: [],
    localNote:
      "NH State Police told WMUR (Sept. 1, 2026) it has no Flock cameras. Concord DOC Flock Raven units near prisons are not ALPRs per the department.",
    fundingNote: null,
    permitNote:
      "RSA 261:75-b, III and Saf-C 7200: each agency must register every LPR with the Department of Safety before deployment.",
    privacyNote:
      "Shortest unmatched-read deletion retrieved in this briefing. Still not a collection ban for the attended devices the statute allows. RSA 236:130 bans highway surveillance except where specifically authorized; 261:75-b is that authorization.",
    claim: "supported",
    why: "Three-minute unmatched deletion is the tightest retrieved cap. The petition asks for removal.",
    sourceIds: ["nh-rsa-261", "nh-hb1059", "ff-laws"],
  },
  {
    code: "NJ",
    name: "New Jersey",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "P.L.2026, c.4 (Privacy Protection Act, A4070, signed March 25, 2026) — government entities may not sell, share, or transfer ALPR data except to another government entity when permitted by law, a court order/warrant, written consent, or out-of-state LE for a criminal investigation with written certification against civil-immigration use. Not a collection ban and no statewide retention cap.",
    executive:
      "AG Law Enforcement Directive 2022-12 (Platkin; effective Jan. 23, 2023): official LE use only; 3-year retention; statewide API sharing (NJ SNAP); annual audits. Operational policy, not a pause.",
    bills: [
      {
        cite: "S3035 / A2594 (2026)",
        title: "ALPR requirements; 2-year retention; annual audits",
        status: "Introduced Jan. 13, 2026; in committee",
      },
      {
        cite: "S1290 (2026)",
        title: "Bar ALPR share for interstate reproductive-care cases",
        status: "Reported Senate LPS; referred Budget & Appropriations Feb. 19, 2026",
      },
    ],
    localNote:
      "Princeton resident petition is not a council vote; police say the township does not use Flock. Shamong Township introduced a one-year moratorium Sept. 2, 2026; public hearing Oct. 6, 2026 — not adopted. No named cancellation retrieved.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "Sharing limits in P.L.2026, c.4 plus a 3-year AG-directive retention clock. Neither is statewide removal.",
    claim: "supported",
    why: "A 2026 sharing statute is not statewide removal. Collection remains lawful.",
    sourceIds: ["nj-pl2026-c4", "nj-ag-2022-12", "nj-s3035", "ff-laws"],
  },
  {
    code: "NM",
    name: "New Mexico",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "2026 N.M. Laws ch. 20 (SB 40, Driver Privacy and Safety Act, signed March 4, 2026, eff. July 1, 2026) — ALPR users may not sell, share, or allow access to plate data where they have reasonable belief it may be used for immigration enforcement, to investigate protected health care activity, or to penalize constitutionally protected activity. Out-of-state agencies must file a written declaration. No numeric unmatched-read cap. Not a collection ban.",
    executive: null,
    bills: [],
    localNote:
      "Albuquerque and Rio Rancho operate ALPRs. APD reported a 1-year local retention; Bernalillo County Sheriff reported 30 days. Local policy, not statewide removal.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "Sharing/purpose statute, not a retention cap and not a collection ban. Intentional violations: $10,000 or actual damages.",
    claim: "supported",
    why: "A 2026 privacy act is not statewide removal.",
    sourceIds: ["nm-sb40", "ff-laws"],
  },

  {
    code: "NY",
    name: "New York",
    posture: "local",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [],
    localNote:
      "Saranac Lake village board voted 4–1 (March 2026) to terminate its Flock contract and ban further Flock installation. Ithaca Common Council voted unanimously (March 2026) to end the city’s Flock contract. Tompkins County Legislature voted 12–1 in April 2026 to end the county contract. No statewide ban retrieved.",
    fundingNote: null,
    permitNote: null,
    privacyNote: null,
    claim: "supported",
    why: "Village, city, and county actions. No statewide ban retrieved.",
    sourceIds: ["ny-saranac", "ny-ithaca", "ny-tompkins", "ff-laws"],
  },

  {
    code: "NC",
    name: "North Carolina",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "N.C. Gen. Stat. §§ 20-183.30 to 20-183.32 (Article 3D) — agencies must adopt a written policy before ALPRs are operational. Captured plate data shall not be preserved more than 90 days unless a preservation request, a state search warrant, or a federal search warrant. Data is confidential, not a public record, and may not be sold. Access limited to a criminal justice officer for a legitimate law-enforcement purpose on a written request. Not a collection ban.",
    executive: null,
    bills: [],
    localNote: null,
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "90-day unmatched cap with warrant/preservation carve-outs. Not a collection ban.",
    claim: "supported",
    why: "A 90-day unmatched-read cap is not the petition’s statewide removal.",
    sourceIds: ["nc-20-183-32", "nc-20-183-30", "ff-laws"],
  },

  {
    code: "ND",
    name: "North Dakota",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "HB 1050 (2025)",
        title: "Cooperative agreements for license plate readers on NDDOT equipment",
        status:
          "Lost — failed on the House floor Jan. 28, 2025, 42–51 (House Transportation DO NOT PASS 14–0). Would have required DOT, on request, to place ALPRs on department infrastructure. An authorization bill, not a ban.",
      },
    ],
    localNote:
      "Fargo PD Policy 428 (rev. March 25, 2025) governs department ALPRs: hot-list review at 30 days; captured data purged unless converted to evidence. Department policy, not a city ordinance. NDDOT historically declined pole placements for Bismarck PD, Fargo PD, and Border Patrol (HB 1050 testimony).",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "NDCC § 29-29.4-01(8) excludes license plate readers from the UAV/robot warrant chapter. That carve-out is not an ALPR-use statute. No statewide retention cap.",
    claim: "supported",
    why: "A 2025 DOT-placement bill died on the House floor. North Dakota has no ALPR statute and no statewide removal.",
    sourceIds: ["nd-hb1050", "nd-fargo-428", "ff-laws"],
  },

  {
    code: "OH",
    name: "Ohio",
    posture: "local",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [],
    localNote:
      "Dayton suspended its fixed-site Flock program and covered 72 cameras after finding data use (including immigration-enforcement sharing) violated city policy. City FAQ (updated 2026): program remains suspended pending independent review. Not a state ban.",
    fundingNote: null,
    permitNote: null,
    privacyNote: "Local policy, not a state warrant rule.",
    claim: "supported",
    why: "Dayton’s fixed-site program remains suspended. That is one city, not a state ban.",
    sourceIds: ["oh-dayton-faq", "ff-laws"],
  },

  {
    code: "OK",
    name: "Oklahoma",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "47 O.S. § 7-606.1 (Uninsured Vehicle Enforcement Program, 2017) — authorizes district attorneys and participating LE agencies to contract with ALPR providers to detect uninsured motorists. Data shall not be used except to enforce the Compulsory Insurance Law or as otherwise permitted by law. Sale of captured plate data banned. Not a collection ban; it is an authorization statute for a listed purpose.",
    executive: null,
    bills: [],
    localNote: null,
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "Program-specific use limits, not a statewide unmatched-read cap and not a collection ban for other lawful uses.",
    claim: "supported",
    why: "An uninsured-motorist ALPR authorization is not statewide removal.",
    sourceIds: ["ok-47-76061", "ff-laws"],
  },

  {
    code: "OR",
    name: "Oregon",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Or. Laws 2026, ch. 77 (SB 1516, signed March 31, 2026, effective immediately) — law-enforcement ALPR use limited to listed purposes. Captured plate data not related to a court proceeding or ongoing criminal investigation may be retained no more than 30 days. Sharing with non-Oregon government entities limited to a case-specific law-enforcement purpose. Vendors may not sell or disclose the data, must encrypt it, and must supply audits. Not a collection ban.",
    executive: null,
    bills: [],
    localNote:
      "Portland Police Bureau revised its ALPR directive (April 2026) to match SB 1516: 30-day unmatched retention.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "Newly enacted 30-day cap plus vendor and sharing limits. Not a collection ban.",
    claim: "supported",
    why: "A newly enacted 30-day unmatched-read cap is not the petition’s statewide removal.",
    sourceIds: ["or-ch77", "ff-laws"],
  },

  {
    code: "PA",
    name: "Pennsylvania",
    posture: "open",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [],
    localNote: null,
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "Sens. Laughlin (memo 49153), Mastriano (memo 49155), and Boscola circulated co-sponsorship memos Aug. 27, 2026. Official Senate pages: “This document has not been submitted for introduction yet.” A caucus memo is not a bill. Gov. Shapiro has publicly backed a Flock ban — a statement, not an instrument.",
    claim: "supported",
    why: "Memos and a gubernatorial statement are real. Enacted law is not. The petition is the statewide ask while bills cook.",
    sourceIds: ["pa-memo-49153", "pa-memo-49155", "pa-bills"],
  },

  {
    code: "RI",
    name: "Rhode Island",
    posture: "exec-pause",
    asOf: "2026-09-06",
    alprStatute: null,
    executive:
      "Gov. Dan McKee press release Aug. 18, 2026: called for a statewide pause on installation and activation of any new ALPR cameras; directed DPS/State Police, in consultation with the Police Chiefs’ Association and League of Cities and Towns, to complete a 60-day review of uniform statewide standards. State Police will not install or activate additional ALPRs during the review. Existing State Police ALPRs may continue. Urges municipalities to pause new installs. Not a removal of cameras already up.",
    bills: [
      {
        cite: "H 8077 (2026)",
        title: "Criminal Procedure — Automated License Plate Readers",
        status:
          "Lost — introduced Feb. 27, 2026; House Judiciary held for further study; died in committee (session ended June 11, 2026). Would have capped storage at 21 days. Not enacted.",
      },
    ],
    localNote: null,
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "No ALPR-specific retention statute on the books. The pause covers new installs, not existing cameras.",
    claim: "supported",
    why: "A pause on new installs is real. It is not statewide removal of cameras already up.",
    sourceIds: ["ri-mckee-2026-08-18", "ri-h8077", "ff-laws"],
  },

  {
    code: "SC",
    name: "South Carolina",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "S. 447 (2025–26)",
        title: "License plate reader system (proposed § 23-1-235; 90-day cap; SCDOT ROW permit)",
        status:
          "Lost — favorable Senate Judiciary report Apr. 9, 2026; no floor vote before May 14 sine die",
      },
      {
        cite: "H. 3155 (2025–26)",
        title: "Automatic license plate readers (companion to S. 447)",
        status: "Lost — referred to House Judiciary Jan. 14, 2025; no further action",
      },
      {
        cite: "H. 4675 (2026)",
        title:
          "South Carolina Community Data Protection and Responsible Surveillance Act (21-day cap; warrant-for-query; third-party storage ban)",
        status: "Lost — referred to House Judiciary Jan. 13, 2026; no further action",
      },
    ],
    localNote: null,
    fundingNote:
      "H. 3305 / Act 261 of 2026 (approved Sept. 1, 2026), SECTION 1(B)(47)(h): Town of Cameron — License Plate Reading Camera, $35,000. A state earmark that buys cameras, not a ban.",
    permitNote: null,
    privacyNote: null,
    claim: "supported",
    why: "Lost 2025–26 ALPR bills never became law. South Carolina has no ALPR statute. An earmark that buys cameras is not statewide removal.",
    sourceIds: ["sc-s447", "sc-h3155", "sc-h4675", "sc-h3305", "sc-code-t23c1", "ff-laws"],
  },
  {
    code: "SD",
    name: "South Dakota",
    posture: "open",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [],
    localNote:
      "Sioux Falls PD Policy #1036 (city page) runs Flock under a 30-day department retention rule — policy, not an ordinance. Rapid City PD deployed Axon ALPRs (April 2026). Aberdeen’s mayor declined installation (Aug. 2026). Minnehaha County’s motion to terminate Flock failed Sept. 1, 2026. No packed local ban ordinance.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "AG Jackley (Aug. 12, 2026) announced intent to propose 2027-session LPR safeguards. No bill number. A press release is not a bill. SDCL 32-28-17 bans red-light photo-monitoring contracts, not ALPRs.",
    claim: "supported",
    why: "No ALPR statute or 2025–26 bill retrieved. Collection remains a local fight.",
    sourceIds: ["sd-ag-3134", "sd-sf-alpr", "ff-laws"],
  },

  {
    code: "TN",
    name: "Tennessee",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Tenn. Code Ann. § 55-10-302 (Acts 2014, ch. 625) — captured plate data collected by a governmental entity through an ALPR may not be stored more than 90 days unless retained as part of an ongoing investigation, and then shall be destroyed at the conclusion of the investigation or any criminal action. Applies only to government entities. Not a collection ban.",
    executive: null,
    bills: [],
    localNote:
      "Knox County Commission voted unanimously on Aug. 31, 2026 to shut down 143 Flock cameras; ordinance gave agencies 30 days to cease, disable, and remove, and to delete data not part of an ongoing investigation.",
    fundingNote: null,
    permitNote: null,
    privacyNote: "A 90-day cap is not a collection ban. A county ordinance is one of 95 counties.",
    claim: "supported",
    why: "Statewide retention rule plus a county removal. Statewide remaining.",
    sourceIds: ["tn-55-10-302", "knox-ban", "ff-laws"],
  },

  {
    code: "TX",
    name: "Texas",
    posture: "exec-pause",
    asOf: "2026-09-06",
    alprStatute: null,
    executive:
      "Governor directed state agencies to stop spending state money on Flock cameras (week of Aug. 27, 2026; spokesman Andrew Mahaleris). The signed instrument has not been retrieved as a numbered executive order. Texas Tribune (Sept. 4, 2026): DPS will pause installing additional cameras but continue using existing ones. The directive does not, by its terms, unplug city or county cameras funded federally.",
    bills: [],
    localNote:
      "Austin listed among large cities that lost or ended Flock contracts (Jan. 2026 tracker). Cities remain the local fight.",
    fundingNote:
      "Motor Vehicle Crime Prevention Authority turned a $1 insurance-fee hike into ≥3,200 cameras: 95 grants ~2,000 cameras plus $15.9M to DPS for ~1,200 more; another $3M for 583 tollway cameras approved in August before the pause.",
    permitNote:
      "Highway occupancy, if any, is a separate instrument from the state-money pause and is not packed here as a ban.",
    privacyNote: null,
    claim: "supported",
    why: "State-money pause is real. The fee that built the network is real. A ban is not law. Existing DPS cameras remain.",
    sourceIds: ["tx-insurance-fee", "tx-tribune-2026-09-04", "nyt-red-states"],
  },

  {
    code: "UT",
    name: "Utah",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute: "Utah Code §§ 41-6a-2001 to 41-6a-2005 — Automatic License Plate Reader System Act. Governmental use banned except listed purposes (active investigation, warrant, missing/endangered, stolen vehicle, parking, toll, motor carrier, etc.). Finding Flock reads a 9-month unmatched-read cap. Stationary devices on state highways need a UDOT special-use permit (72-1-212).",
    executive: null,
    bills: [],
    localNote: null,
    fundingNote: null,
    permitNote: "Special-use permit for stationary highway devices is occupancy, not a ban.",
    privacyNote: "Use limits plus retention. Not a collection ban for the permitted purposes.",
    claim: "supported",
    why: "An ALPR statute with a 9-month cap is not statewide removal.",
    sourceIds: ["ut-41-6a", "ff-laws"],
  },
  {
    code: "VT",
    name: "Vermont",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "23 V.S.A. § 1607 (automated license plate recognition systems; current text effective July 1, 2025) — ALPR use and active-data access restricted to legitimate law-enforcement purposes. Information gathered shall be retained only 18 months, then destroyed. Queries of active data require specific and articulable facts. After six months, historical data release under warrant or court order. DPS maintains the statewide storage system. Not a collection ban for permitted uses.",
    executive: null,
    bills: [],
    localNote:
      "Vermont State Police told a 2026 public-records requester that no law-enforcement agencies in the state are utilizing LPRs. Reporting (VTDigger/Governing, 2026) describes out-of-state Flock-network access as a statutory gray area. In-state collection remains tightly capped if it resumes.",
    fundingNote: null,
    permitNote: null,
    privacyNote: "18-month ceiling with a limited warrant path for historical data. Not a collection ban.",
    claim: "supported",
    why: "An 18-month cap is not statewide removal.",
    sourceIds: ["vt-1607", "ff-laws"],
  },

  {
    code: "VA",
    name: "Virginia",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute:
      "Va. Code § 2.2-5517 (HB 2724 / 2025 Acts ch. 720, effective July 1, 2025) — law-enforcement ALPR use limited to criminal investigation with reasonable suspicion, missing/endangered/human-trafficking cases, or hot-list notifications (wanted, stolen vehicle/plate). Purge system data 21 days after capture unless part of an ongoing investigation, prosecution, or civil action. An ALPR alert alone is not reasonable suspicion for a stop. No sale; no share with other-state, federal, private, or commercial databases. Willful misuse is a Class 1 misdemeanor. Not a collection ban.",
    executive: null,
    bills: [],
    localNote: null,
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "21-day cap, query limits, and a no-federal-share rule. Not a collection ban.",
    claim: "supported",
    why: "A 21-day cap with listed uses is not the petition’s statewide removal.",
    sourceIds: ["va-2-2-5517", "ff-laws"],
  },

  {
    code: "WA",
    name: "Washington",
    posture: "statute",
    asOf: "2026-09-06",
    alprStatute: "ESSB 6002 / C 239 L 26, Driver Privacy Act (ch. 10.130 RCW), effective 30 Mar 2026 — 21-day unmatched-read deletion; no collection at listed sensitive places (health care, K–12, worship, courts, food banks among them); agencies may not buy or sell ALPR data; privately held ALPR data only under a probable-cause warrant; a positive match alone does not justify a stop.",
    executive: null,
    bills: [
      {
        cite: "ESSB 6002",
        title: "Driver Privacy Act",
        status: "Enacted; Governor signed 30 Mar 2026 (C 239 L 26)",
      },
    ],
    localNote: "Olympia listed among communities limiting or ending ALPR as the state tightened the law. At least eight local agencies had enabled Border Patrol sharing in 2025, in some cases without the city’s knowledge.",
    fundingNote: null,
    permitNote: null,
    privacyNote: "Among the tighter retrieved regimes. Still not a collection ban for the permitted uses.",
    claim: "supported",
    why: "A 21-day share-and-place statute is not a removal statute.",
    sourceIds: ["wa-sb6002", "wa-privacy-6002", "ff-laws"],
  },
  {
    code: "WV",
    name: "West Virginia",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "HB 4682 (2026)",
        title: "Fourth Amendment Restoration Act",
        status:
          "Lost — introduced Jan. 21, 2026; remained in House Judiciary through sine die (March 14, 2026). Would prohibit specified warrantless surveillance technologies including ALPRs. Freedom Caucus says prior versions failed to reach the Governor two consecutive years.",
      },
    ],
    localNote:
      "Caucus called on municipalities to remove ALPRs immediately — a request, not a packed municipal roster.",
    fundingNote: null,
    permitNote: null,
    privacyNote: null,
    claim: "supported",
    why: "A numbered 2026 ban bill is the closest retrieved statewide removal vehicle. It is not law.",
    sourceIds: ["wv-hb4682", "fox-wv"],
  },

  {
    code: "WI",
    name: "Wisconsin",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "AB 883 (2025–26)",
        title: "Limiting the use of automatic registration plate readers",
        status:
          "Lost — failed to pass pursuant to Senate Joint Resolution 1, March 23, 2026. Would have banned ALPRs with parking, secured-area, and commercial-vehicle exceptions. Not enacted.",
      },
    ],
    localNote:
      "Fond du Lac County (Sheriff Waldschmidt and chiefs of Fond du Lac, North Fond du Lac, Ripon, Waupun) and Winnebago County (sheriff plus Fox Crossing, Menasha, Neenah, UW-Oshkosh, Winneconne) ceased Flock countywide Sept. 5, 2026 after other states disclosed their search data in open-records releases.",
    fundingNote: null,
    permitNote: null,
    privacyNote:
      "No Wisconsin ALPR statute retrieved. Defense-bar writing (2026) states no appellate decision and no statewide retention clock.",
    claim: "supported",
    why: "A pending ban bill and named county drop-offs are not statewide removal.",
    sourceIds: ["wi-ab883", "wi-wbay-2026-09-05", "ff-laws"],
  },

  {
    code: "WY",
    name: "Wyoming",
    posture: "bill",
    asOf: "2026-09-06",
    alprStatute: null,
    executive: null,
    bills: [
      {
        cite: "HB0181 (2026)",
        title: "Biometric data and license plate readers-regulation",
        status:
          "Lost — 2026 Budget Session; H Received for Introduction Feb. 11, 2026; H Did not Consider for Introduction Feb. 13, 2026. Would have created W.S. 9-30-101 to -107 (ALPR warrant, 7-day non-investigative retention). Not enacted.",
      },
    ],
    localNote:
      "Cheyenne purchased Flock ALPRs (Finance Committee Nov. 18, 2024, ARPA; Mayor Collins Feb. 6, 2026 and Cheyenne WY PD Flock portal as of Sept. 4, 2026: 23 cameras, 30-day retention). Jackson Town Council contracted Flock; PD Policy 9.29 purges LPR data after 90 days. Green River City Council voted 6–1 on July 7, 2026 against a Wyoming Office of Homeland Security / DHS grant for Motorola ALPRs.",
    fundingNote: null,
    permitNote: null,
    privacyNote: null,
    claim: "supported",
    why: "HB0181 died without introduction. Named city Flock contracts and a Green River refusal are not statewide removal.",
    sourceIds: [
      "wy-hb0181",
      "jackson-lpr-929",
      "cheyenne-fc-2024-11-18",
      "wyofile-green-river-2026-07-14",
      "ff-laws",
    ],
  },
];

export const STATE_BY_CODE: Record<string, StateRow> = Object.fromEntries(
  STATES.map((s) => [s.code, s]),
);

export function postureCounts() {
  const counts: Record<Posture, number> = {
    "exec-pause": 0,
    statute: 0,
    bill: 0,
    local: 0,
    open: 0,
  };
  for (const s of STATES) counts[s.posture] += 1;
  return counts;
}
