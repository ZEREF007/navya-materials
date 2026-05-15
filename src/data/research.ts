export type FocusArea = { title: string; body: string };

export const focusAreas: FocusArea[] = [
  {
    title: "Material Science",
    body: "We characterize tensile strength, fineness, moisture regain, and dyeability of native bast fibers.",
  },
  {
    title: "Process Engineering",
    body: "We optimize retting, decortication, and degumming, with low-energy methods designed for rural deployment.",
  },
  {
    title: "Lifecycle Analysis",
    body: "We measure water, energy, and carbon footprints across the full fiber-to-product chain.",
  },
  {
    title: "Bio-composite Design",
    body: "We combine plant fibers with bio-resins to engineer panels, tiles, and structural elements.",
  },
];

export type Method = { step: string; title: string; body: string };

export const methodology: Method[] = [
  {
    step: "01",
    title: "Source",
    body: "We identify agricultural residues and traditional fiber crops with a viable, ongoing supply.",
  },
  {
    step: "02",
    title: "Characterize",
    body: "We test fiber properties in the lab and benchmark them against existing industrial inputs.",
  },
  {
    step: "03",
    title: "Engineer",
    body: "We develop processing equipment and protocols built for community-scale production.",
  },
  {
    step: "04",
    title: "Pilot",
    body: "We run small batches with farmer and fabricator partners, then measure, refine, and repeat.",
  },
];
