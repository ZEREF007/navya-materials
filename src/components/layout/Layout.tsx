import { useEffect } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { Cursor } from "@/components/common/Cursor";

function ScrollResetOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollResetOnRoute />
      <ScrollProgress />
      <Cursor />
      <Header />
      <main id="main" className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
