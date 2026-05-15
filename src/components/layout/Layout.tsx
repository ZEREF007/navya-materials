import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { Cursor } from "@/components/common/Cursor";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SmoothScroll />
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
