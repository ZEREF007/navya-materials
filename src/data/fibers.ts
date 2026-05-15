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
      "https://images.unsplash.com/photo-1591005622089-c19a35b6efdc?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Banana plantation with broad green leaves",
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
      "https://images.unsplash.com/photo-1536514072410-5019a3c69182?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Hemp plants growing in a field",
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
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Himalayan mountain village landscape",
    accent: "from-forest-700/65",
  },
];
