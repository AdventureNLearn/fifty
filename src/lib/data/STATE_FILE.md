# State file — one template for all fifty

Every state on the board is this file. Same fields. Same search order. Same
posture rules. Empty is a valid result.

A retention cap is not a ban. A city vote is not a statute. A neighbor’s
instrument is not this state’s. Florida’s road order is Florida’s.

## The file

```
STATE FILE
────────────────────────────────────────
code            USPS (AL … WY). DC uses DC.
name            Official name.
asOf            Date this file was retrieved (YYYY-MM-DD).

POSTURE         Pick the highest that is true. One only.
  exec-pause    Governor, DOT, or AG instrument that pauses or revokes
                ALPR statewide or on state-owned dirt. Not a ban.
  statute       ALPR-specific law on the books (use, share, retain, or
                collect). Say what it does. Say what it is not.
  bill          A numbered bill this cycle (including Lost). Not enacted.
  local         Named city or county cancellation / ordinance only.
  open          Searched. Nothing statewide retrieved.

claim           supported  = primary URL in hand
                unproven   = searched, file empty, or only commentary
                disputed   = two primary-grade sources conflict

why             One sentence, petition-facing:
                Is this the statewide removal the petition asks for?
                If not, say so.

STACK (six lanes — state layer)
  alprStatute   Official cite + one line on what it does.
                Null if none. Never a copied neighbor.
  executive     Instrument name, date, who signed, what dirt it hits,
                what it does not hit. Null if none.
  bills[]       { cite, title, status }  — filed numbers only. Max 3.
                Change.org is not a bill. A caucus letter is not a bill.
  localNote     Named jurisdictions that cancelled, banned, or installed.
                No unnamed “several cities.”
  fundingNote   Named state fee, budget line, or pass-through that buys
                cameras. Null if none retrieved.
  permitNote    Named occupancy / right-of-way instrument (DOT form,
                general use permit, utility pole). Null if none retrieved.
  privacyNote   Retention clock, warrant/query rule, sharing default.
                Null if none retrieved.

sources[]       { id, title, url, asOf, kind }
                kind = primary | reporting | advocacy | vendor
                At least one primary before claim = supported.
                Reporting may point at a primary. It does not replace it.

empty[]         Fields you searched and found nothing. Honesty log.
                Example: ["executive", "fundingNote", "permitNote"]
────────────────────────────────────────
```

## Search order (do not skip)

1. Finding Flock laws table — https://www.findingflock.com/learn/alpr-laws-by-state
2. This state’s legislature bill search, 2025–2026: `ALPR`, `Flock`, `license plate reader`, `automated license plate`, `automatic license plate`
3. Official statutes / session laws (legislature or code site)
4. Governor, DOT, AG: executive order, memo, occupancy revocation
5. Named local council / commission / sheriff action (one or two, named)
6. Reporting only as a pointer to a primary record (NYT, AP, statehouse bureau)

## Hard rules

- Empty beats a copied instrument from the wrong state.
- Do not invent bill numbers, executive orders, or camera counts.
- A statute that caps retention or governs use is posture **statute**, and the
  `why` must say it is not statewide removal unless the text forbids collection.
- Lost bills stay **bill** with status Lost. They do not become statutes.
- Camera counts only with a named source and an asOf date.
- No plates, no people, no home addresses.
- No home-state default. This file is this state.

## Output

Return JSON only, matching `StateRow` plus `sources` and `empty`:

```json
{
  "code": "XX",
  "name": "…",
  "posture": "open",
  "asOf": "2026-09-06",
  "alprStatute": null,
  "executive": null,
  "bills": [],
  "localNote": null,
  "fundingNote": null,
  "permitNote": null,
  "privacyNote": null,
  "claim": "unproven",
  "why": "…",
  "sourceIds": [],
  "sources": [],
  "empty": ["alprStatute", "executive", "bills", "localNote", "fundingNote", "permitNote", "privacyNote"]
}
```
