export type ImpactStat = { value: string; label: string };

export const impactStats: ImpactStat[] = [
  { value: "100+", label: "Farmers engaged" },
  { value: "5", label: "Women-led groups" },
  { value: "3", label: "Districts" },
  { value: "0", label: "Pesticide use" },
];

export type Story = {
  title: string;
  location: string;
  body: string;
  image: string;
  alt: string;
};

export const stories: Story[] = [
  {
    title: "From by-product to income",
    location: "Banana belt, Lowland Nepal",
    body: "We work with smallholder banana farmers to extract fiber from the pseudo-stems they would normally leave in the field. Agricultural waste becomes a second source of income, and the soil keeps its organic matter.",
    image:
      "https://images.unsplash.com/photo-1633410195091-bd66114cef5f?auto=format&fit=crop&w=2400&q=90",
    alt: "Smallholder farmers working in a field",
  },
  {
    title: "Women-led fabrication",
    location: "Mid-hills, Nepal",
    body: "Local women's groups run decortication and spinning at village-scale workshops. With skill training and shared equipment, production stays distributed and people can keep working from home.",
    image:
      "https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=2400&q=90",
    alt: "Hand-spun fiber in a workshop",
  },
  {
    title: "Carrying Allo and Hemp Forward",
    location: "Himalayan foothills",
    body: "Traditional allo and hemp processing are knowledge systems passed down through generations. We work alongside local communities to preserve these handcrafting methods while creating fairer pathways that connect artisans and natural fiber producers with designers, brands, and global markets.",
    image:
      "https://images.unsplash.com/photo-1731044900377-93da03bf0675?auto=format&fit=crop&w=2400&q=90",
    alt: "Prayer flags on a Himalayan mountainside",
  },
];
