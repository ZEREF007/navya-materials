import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

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

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Suspense fallback={<RouteFallback />}>
          <Routes location={location} key={location.pathname}>
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
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Layout>
      <AnimatedRoutes />
    </Layout>
  );
}
