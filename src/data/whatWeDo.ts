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
      "https://images.unsplash.com/photo-1646750421466-a04e689254d4?auto=format&fit=crop&w=2000&q=90",
    alt: "Close-up of woven natural fiber threads",
  },
  {
    number: "02",
    title: "Textile Innovation",
    body: "From fiber to yarn to fabric — creating sustainable textile alternatives.",
    image:
      "https://images.unsplash.com/photo-1643766883805-829d9ad95c42?auto=format&fit=crop&w=2000&q=90",
    alt: "Colorful weaving loom at work",
  },
  {
    number: "03",
    title: "Bio-based Materials",
    body: "Eco-friendly composites for construction and industrial applications.",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=2000&q=90",
    alt: "Hemp construction material samples",
  },
  {
    number: "04",
    title: "Technology & Machinery",
    body: "Designing and building machines for rural fiber processing and production.",
    image:
      "https://images.unsplash.com/photo-1707978932202-751b08324daf?auto=format&fit=crop&w=2000&q=90",
    alt: "Vintage weaving machinery close-up",
  },
  {
    number: "05",
    title: "Applied Engineering",
    body: "Engineering solutions that improve lives in rural and industrial contexts.",
    image:
      "https://images.unsplash.com/photo-1623220940666-f4bcc07aaed9?auto=format&fit=crop&w=2000&q=90",
    alt: "Engineer working on mechanical equipment",
  },
];
