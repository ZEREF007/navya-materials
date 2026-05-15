import { Leaf, FlaskConical, Users, Sprout } from "lucide-react";

export type Pillar = {
  title: string;
  body: string;
  icon: typeof Leaf;
};

export const pillars: Pillar[] = [
  {
    title: "Natural Fiber Innovation",
    body: "Local fibers, with global reach.",
    icon: Leaf,
  },
  {
    title: "Research Driven",
    body: "Science, experimentation, and steady iteration.",
    icon: FlaskConical,
  },
  {
    title: "Community Empowerment",
    body: "Working with rural communities, especially women and farmers.",
    icon: Users,
  },
  {
    title: "Sustainable Future",
    body: "Biodegradable materials for textiles, construction, and beyond.",
    icon: Sprout,
  },
];
