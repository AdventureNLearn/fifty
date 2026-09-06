/** Five loops × ten states. DC is the rider on loop 5. Same STATE_FILE for all. */
export const WAVES = [
  {
    loop: 1,
    states: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA"],
  },
  {
    loop: 2,
    states: ["HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD"],
  },
  {
    loop: 3,
    states: ["MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ"],
  },
  {
    loop: 4,
    states: ["NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC"],
  },
  {
    loop: 5,
    states: ["SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
    rider: "DC",
  },
] as const;
