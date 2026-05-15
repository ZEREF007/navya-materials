import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const NaturalFibers = lazy(() => import("@/pages/NaturalFibers"));
const Research = lazy(() => import("@/pages/Research"));
const Community = lazy(() => import("@/pages/Community"));
const Products = lazy(() => import("@/pages/Products"));
const Collaborate = lazy(() => import("@/pages/Collaborate"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function RouteFallback() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="flex items-center gap-3 text-muted-foreground">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        <span className="font-mono text-xs uppercase tracking-eyebrow">Loading</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/natural-fibers" element={<NaturalFibers />} />
          <Route path="/research" element={<Research />} />
          <Route path="/community" element={<Community />} />
          <Route path="/products" element={<Products />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
