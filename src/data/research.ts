export type FocusArea = { title: string; body: string };

export const focusAreas: FocusArea[] = [
  {
    title: "Material Science",
    body: "Characterizing tensile strength, fineness, moisture regain, and dyeability of native bast fibers.",
  },
  {
    title: "Process Engineering",
    body: "Optimizing retting, decortication, and degumming — designing low-energy methods for rural deployment.",
  },
  {
    title: "Lifecycle Analysis",
    body: "Measuring water, energy, and carbon footprints across the full fiber-to-product chain.",
  },
  {
    title: "Bio-composite Design",
    body: "Combining plant fibers with bio-resins to engineer panels, tiles, and structural elements.",
  },
];

export type Method = { step: string; title: string; body: string };

export const methodology: Method[] = [
  {
    step: "01",
    title: "Source",
    body: "Identify under-utilized agricultural residues and traditional fiber crops with viable supply.",
  },
  {
    step: "02",
    title: "Characterize",
    body: "Lab-test fiber properties and benchmark against existing industrial inputs.",
  },
  {
    step: "03",
    title: "Engineer",
    body: "Develop processing equipment and protocols for community-scale production.",
  },
  {
    step: "04",
    title: "Pilot",
    body: "Run small-batch production with farmer and fabricator partners — measure, refine, repeat.",
  },
];
