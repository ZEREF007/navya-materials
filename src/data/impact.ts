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
    body: "Working with smallholder banana farmers to extract fiber from pseudo-stems left in the field — turning agricultural waste into a second source of income, while keeping soil organic matter intact.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    alt: "Smallholder farm in Nepal",
  },
  {
    title: "Women-led fabrication",
    location: "Mid-hills, Nepal",
    body: "Local women's groups operate decortication and spinning at village-scale workshops. Skill training and shared equipment unlock decentralized production without leaving home.",
    image:
      "https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=1600&q=80",
    alt: "Hand-spun fiber in a workshop",
  },
  {
    title: "Carrying allo forward",
    location: "Himalayan foothills",
    body: "Traditional allo (Himalayan nettle) processing is intergenerational knowledge. We work alongside communities to preserve hand methods while introducing fairer trade routes to designers and brands.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
    alt: "Himalayan landscape and traditional craft",
  },
];
