export type Service = {
  title: string;
  body: string;
  image: string;
  alt: string;
  number: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Natural Fiber Research",
    body: "Studying, extracting, and developing high-performance fibers from local plants.",
    image:
      "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?auto=format&fit=crop&w=1200&q=80",
    alt: "Close-up of natural fiber strands",
  },
  {
    number: "02",
    title: "Textile Innovation",
    body: "From fiber to yarn to fabric — creating sustainable textile alternatives.",
    image:
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80",
    alt: "Spools of natural yarn",
  },
  {
    number: "03",
    title: "Bio-based Materials",
    body: "Eco-friendly composites for construction and industrial applications.",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80",
    alt: "Hemp construction material samples",
  },
  {
    number: "04",
    title: "Technology & Machinery",
    body: "Designing and building machines for rural fiber processing and production.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    alt: "Engineering workshop",
  },
  {
    number: "05",
    title: "Applied Engineering",
    body: "Engineering solutions that improve lives in rural and industrial contexts.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    alt: "Engineering applied to community work",
  },
];
