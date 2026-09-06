export type Station = {
  id: string;
  call: string;
  freq: string;
  name: string;
  blurb: string;
  credit: string;
  urls: string[];
};

/** WFTY — Heartland of the Republic. Public HTTPS streams, credited. */
export const STATIONS: Station[] = [
  {
    id: "eagle",
    call: "EAGLE",
    freq: "101.5",
    name: "Classic rock",
    blurb: "Petty, Skynyrd, Mellencamp, the highway band.",
    credit: "181.FM The Eagle",
    urls: [
      "https://listen.181fm.com/181-eagle_128k.mp3",
      "https://listen.181fm.com/181-eagle_64k.aac",
    ],
  },
  {
    id: "heartland",
    call: "HEARTLAND",
    freq: "94.7",
    name: "Americana",
    blurb: "Roots, folk, the porch and the dirt road.",
    credit: "Folk Alley",
    urls: ["https://freshgrass.streamguys1.com/folkalley-128mp3"],
  },
  {
    id: "highway",
    call: "HIGHWAY",
    freq: "98.1",
    name: "Outlaw country",
    blurb: "The republic on a two-lane. No Nashville gloss.",
    credit: "181.FM Highway",
    urls: [
      "https://listen.181fm.com/181-highway_128k.mp3",
      "https://listen.181fm.com/181-highway_64k.aac",
    ],
  },
  {
    id: "gold",
    call: "GOLD",
    freq: "107.3",
    name: "Classic hits",
    blurb: "The American songbook on a car radio. Windows down.",
    credit: "181.FM Great Oldies",
    urls: [
      "https://listen.181fm.com/181-greatoldies_128k.mp3",
      "https://listen.181fm.com/181-greatoldies_64k.aac",
    ],
  },
];

export const RADIO = {
  call: "WFTY",
  slogan: "Heartland of the Republic",
  note: "Streams belong to 181.FM and Folk Alley. FIFTY does not own the music.",
} as const;

export function stationById(id: string): Station {
  return STATIONS.find((s) => s.id === id) ?? STATIONS[0];
}
