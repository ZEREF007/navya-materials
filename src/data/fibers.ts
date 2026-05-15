export type Fiber = {
  slug: string;
  name: string;
  scientific?: string;
  origin: string;
  tagline: string;
  description: string;
  properties: string[];
  uses: string[];
  image: string;
  imageAlt: string;
  accent: string;
};

export const fibers: Fiber[] = [
  {
    slug: "banana",
    name: "Banana Fiber",
    scientific: "Musa spp. pseudo-stem",
    origin: "Lowland Nepal",
    tagline: "Waste, reborn as fiber.",
    description:
      "Banana fiber comes from the pseudo-stem of banana plants, the part farmers usually leave in the field after harvest. It is strong, biodegradable, and naturally glossy, which makes it well suited to textiles, ropes, paper, and composite materials. Using it turns a by-product into a second source of income for smallholder farms.",
    properties: [
      "High tensile strength",
      "Biodegradable",
      "Naturally lustrous",
      "Takes dye well",
    ],
    uses: ["Textiles", "Ropes and twine", "Specialty paper", "Composite boards"],
    image:
      "https://images.unsplash.com/photo-1653481006616-aab561a77a3b?auto=format&fit=crop&w=2880&q=90",
    imageAlt: "Banana plantation seen through broad green leaves",
    accent: "from-forest-700/70",
  },
  {
    slug: "hemp",
    name: "Hemp Fiber",
    scientific: "Cannabis sativa",
    origin: "Mid-hills, Nepal",
    tagline: "Low input. Long memory.",
    description:
      "Hemp grows quickly with very little water and no pesticides, and it improves the soil it leaves behind. The bast fiber from its stem is among the strongest natural fibers in the world. It works for fine apparel, durable canvas, and bio-composites for construction.",
    properties: [
      "Drought-tolerant crop",
      "No pesticide required",
      "UV and mould resistant",
      "Improves over washing",
    ],
    uses: ["Apparel and textiles", "Construction composites", "Bio-plastics", "Cordage"],
    image:
      "https://images.unsplash.com/photo-1532765488483-62ff440ee4fd?auto=format&fit=crop&w=2880&q=90",
    imageAlt: "Green hemp plants growing in daylight",
    accent: "from-forest-800/70",
  },
  {
    slug: "allo",
    name: "Himalayan Nettle (Allo)",
    scientific: "Girardinia diversifolia",
    origin: "Himalayan foothills",
    tagline: "Old knowledge, refined.",
    description:
      "Allo is a wild Himalayan nettle. Mountain communities have hand-harvested and hand-processed it for generations. The fiber is fine, strong, and naturally resistant to moisture and pests. Every meter of cloth carries that craft history with it.",
    properties: [
      "Hand-processed",
      "Naturally pest-resistant",
      "Soft handfeel after retting",
      "Carbon-neutral harvest",
    ],
    uses: ["Heritage textiles", "Handicrafts", "Ropes and sacking", "Mixed-fiber yarns"],
    image:
      "https://images.unsplash.com/photo-1681635851078-57a587a6c2d8?auto=format&fit=crop&w=2880&q=90",
    imageAlt: "Snow-capped Himalayan mountain range",
    accent: "from-forest-700/65",
  },
];
