export type Product = {
  name: string;
  category: string;
  status: "Pilot" | "R&D" | "Prototyping Stage" | "Planning Stage";
  body: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    name: "Banana-fiber Textile",
    category: "Textile",
    status: "Pilot",
    body: "A naturally lustrous, biodegradable fabric spun from banana pseudo-stem fiber. Works for apparel, home goods, and craft accessories.",
    image:
      "https://images.unsplash.com/photo-1612863233759-9e788611b406?auto=format&fit=crop&w=2000&q=90",
    alt: "Handwoven textile in natural and red tones",
  },
  {
    name: "Hemp Composite Board",
    category: "Construction",
    status: "R&D",
    body: "A low-carbon hemp-bonded panel for interior partitions, insulation, and modular furniture.",
    image:
      "https://images.unsplash.com/photo-1583339131351-8ae495f913c8?auto=format&fit=crop&w=2000&q=90",
    alt: "Hemp particle composite board surface",
  },
  {
    name: "Allo and Hemp Yarn",
    category: "Textile",
    status: "Planning Stage",
    body: "A blended yarn pairing Himalayan nettle with hemp bast, hand-processed in heritage counts for designers building traceable collections.",
    image:
      "https://images.unsplash.com/photo-1572501329521-2d6ec8628d09?auto=format&fit=crop&w=2000&q=90",
    alt: "Skeins of natural allo and hemp yarn",
  },
  {
    name: "Rural Decorticator",
    category: "Machinery",
    status: "R&D",
    body: "A compact, manually operable fiber extraction unit designed for rural workshops without grid power.",
    image:
      "https://images.unsplash.com/photo-1632661910756-039cfa859a0d?auto=format&fit=crop&w=2000&q=90",
    alt: "Rural fiber extraction machine with raw plant fiber",
  },
  {
    name: "Bio-composite Construction Material",
    category: "Construction",
    status: "Prototyping Stage",
    body: "Mixed-fiber composite for low-impact tiles, panels, and wall finishes. Compostable at end of life.",
    image:
      "https://images.unsplash.com/photo-1543242274-d5c24731d725?auto=format&fit=crop&w=2000&q=90",
    alt: "Textured natural composite material surface",
  },
  {
    name: "Mixed-Fiber Cordage",
    category: "Industrial",
    status: "Planning Stage",
    body: "Blended hemp and allo cordage for industrial and agricultural use. Strong, biodegradable, locally produced.",
    image:
      "https://images.unsplash.com/photo-1608784420784-bd6b9d90eebc?auto=format&fit=crop&w=2000&q=90",
    alt: "Thick braided natural-fiber rope",
  },
];
