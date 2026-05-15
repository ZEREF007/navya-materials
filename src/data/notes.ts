export type Note = {
  date: string;
  category: string;
  title: string;
  body: string;
};

export const notes: Note[] = [
  {
    date: "2026 · Spring",
    category: "Lab notes",
    title: "Banana pseudo-stem moisture regain at 65% RH",
    body: "First round of conditioning tests on three farm batches. Regain stable at 11.4 ± 0.6%. Spinning trials begin next month.",
  },
  {
    date: "2026 · Spring",
    category: "Process",
    title: "Manual decorticator, second prototype",
    body: "Crank-driven, no grid power. Three village workshops will run the unit in parallel this quarter.",
  },
  {
    date: "2026 · Winter",
    category: "Field",
    title: "Hemp planting trials, two mid-hill sites",
    body: "Open-pollinated seed, no irrigation, no synthetic input. Yield comparison vs. local fiber crops at end of season.",
  },
];
