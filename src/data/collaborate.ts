import {
  GraduationCap,
  Factory,
  FlaskConical,
  Users,
  Coins,
  Palette,
} from "lucide-react";

export type CollabArea = {
  title: string;
  body: string;
  icon: typeof GraduationCap;
};

export const collabAreas: CollabArea[] = [
  {
    title: "Research and Academic Partnerships",
    body: "Joint studies with universities and labs on fiber characterization, processing, and lifecycle analysis.",
    icon: GraduationCap,
  },
  {
    title: "Sustainable Product Manufacturing",
    body: "Building products together with brands and fabricators, using locally sourced, biodegradable inputs.",
    icon: Factory,
  },
  {
    title: "Material Development",
    body: "Custom composites and yarns engineered to spec, from prototype to pilot batch.",
    icon: FlaskConical,
  },
  {
    title: "Community-Based Projects",
    body: "Programmes with farmers, women-led groups, and rural fabricators, built on shared value.",
    icon: Users,
  },
  {
    title: "Investment and Strategic Support",
    body: "Partner with us to scale infrastructure for processing, machinery, and distribution.",
    icon: Coins,
  },
  {
    title: "Brand and Design Collaboration",
    body: "Designers and brands building stories around honest, traceable materials.",
    icon: Palette,
  },
];
