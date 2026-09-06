export type ClaimState = "supported" | "unproven" | "disputed";
export type ClaimKind = "evidence" | "inference" | "assumption";

export type LayerId = "local" | "county" | "state" | "federal";
export type LaneId =
  | "funding"
  | "grants"
  | "permitting"
  | "installation"
  | "privacy"
  | "legislation";

export type Posture =
  | "exec-pause"
  | "statute"
  | "bill"
  | "local"
  | "open";

export type Claim = {
  id: string;
  text: string;
  state: ClaimState;
  kind: ClaimKind;
  sourceIds: string[];
  caveat?: string;
};

export type Source = {
  id: string;
  title: string;
  url: string;
  asOf: string;
  kind: "primary" | "reporting" | "advocacy" | "vendor";
};

export type StackCell = {
  layer: LayerId;
  lane: LaneId;
  title: string;
  body: string;
  claim: ClaimState;
  kind: ClaimKind;
  sourceIds: string[];
  action: string;
};

export type StateBill = {
  cite: string;
  title: string;
  status: string;
};

export type StateRow = {
  code: string;
  name: string;
  posture: Posture;
  asOf: string;
  alprStatute: string | null;
  executive: string | null;
  bills: StateBill[];
  localNote: string | null;
  fundingNote: string | null;
  permitNote: string | null;
  privacyNote: string | null;
  claim: ClaimState;
  why: string;
};

export type CommentTemplate = {
  id: string;
  lane: LaneId | "petition";
  label: string;
  text: string;
};

export type WeekdayTarget = {
  weekday: number;
  label: string;
  hint: string;
  lane: LaneId | "petition";
};
