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
    tagline: "Waste reborn as fiber.",
    description:
      "Banana fiber is extracted from the pseudo-stem of banana plants — agricultural matter that would otherwise be discarded after harvest. Strong, biodegradable, and naturally glossy, it suits textiles, ropes, paper, and composite materials. Working with smallholder farmers turns a by-product into a second income stream.",
    properties: [
      "High tensile strength",
      "Biodegradable",
      "Naturally lustrous",
      "Absorbs dye well",
    ],
    uses: ["Textiles", "Ropes & twine", "Specialty paper", "Composite boards"],
    image:
      "https://images.unsplash.com/photo-1653481006616-aab561a77a3b?auto=format&fit=crop&w=1600&q=80",
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
      "Hemp grows quickly with minimal water, no pesticides, and improves the soil it leaves behind. Its bast fiber is among the strongest natural fibers in the world — equally suited to fine apparel, durable canvas, and bio-composites for construction.",
    properties: [
      "Drought-tolerant crop",
      "No pesticide required",
      "UV & mould resistant",
      "Improves over washing",
    ],
    uses: ["Apparel & textiles", "Construction composites", "Bio-plastics", "Cordage"],
    image:
      "https://images.unsplash.com/photo-1532765488483-62ff440ee4fd?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Green hemp plants growing in daylight",
    accent: "from-forest-800/70",
  },
  {
    slug: "allo",
    name: "Himalayan Nettle (Allo)",
    scientific: "Girardinia diversifolia",
    origin: "Himalayan foothills",
    tagline: "Indigenous knowledge, refined.",
    description:
      "Allo is a wild Himalayan nettle, hand-harvested and processed by mountain communities for generations. The fiber is fine, strong, and naturally resistant to moisture and pests. It carries a story — and a craft economy — into every meter of cloth.",
    properties: [
      "Hand-processed",
      "Naturally pest-resistant",
      "Soft handfeel after retting",
      "Carbon-neutral harvest",
    ],
    uses: ["Heritage textiles", "Handicrafts", "Ropes & sacking", "Mixed-fiber yarns"],
    image:
      "https://images.unsplash.com/photo-1681635851078-57a587a6c2d8?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Snow-capped Himalayan mountain range",
    accent: "from-forest-700/65",
  },
];
