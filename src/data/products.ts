export type Product = {
  name: string;
  category: string;
  status: "Prototype" | "In R&D" | "Pilot";
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
      "https://images.unsplash.com/photo-1569909115134-a0426936c879?auto=format&fit=crop&w=2000&q=90",
    alt: "Stack of natural-colour textiles",
  },
  {
    name: "Hemp Composite Board",
    category: "Construction",
    status: "Prototype",
    body: "A low-carbon hemp-bonded panel for interior partitions, insulation, and modular furniture.",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=2000&q=90",
    alt: "Hemp composite board sample",
  },
  {
    name: "Allo Heritage Yarn",
    category: "Textile",
    status: "Pilot",
    body: "Hand-processed Himalayan nettle yarn in heritage counts, for designers building traceable collections.",
    image:
      "https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=2000&q=90",
    alt: "Hand-spun heritage yarn",
  },
  {
    name: "Rural Decorticator",
    category: "Machinery",
    status: "In R&D",
    body: "A compact, manually operable fiber extraction unit designed for rural workshops without grid power.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=90",
    alt: "Compact fiber processing machine",
  },
  {
    name: "Bio-composite Tiles",
    category: "Construction",
    status: "In R&D",
    body: "Mixed-fiber tiles for low-impact flooring and wall finishes. Compostable at end of life.",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=2000&q=90",
    alt: "Bio-composite material tiles",
  },
  {
    name: "Mixed-Fiber Cordage",
    category: "Industrial",
    status: "Prototype",
    body: "Blended hemp and allo cordage for industrial and agricultural use. Strong, biodegradable, locally produced.",
    image:
      "https://images.unsplash.com/photo-1535970793482-07de93762dc4?auto=format&fit=crop&w=2000&q=90",
    alt: "Natural rope and cordage",
  },
];
