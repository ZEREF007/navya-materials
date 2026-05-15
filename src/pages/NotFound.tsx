import { Link } from "react-router-dom";
import { Seo } from "@/lib/seo";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <section className="min-h-[70vh] grid place-items-center bg-sand-50">
        <Container className="text-center">
          <p className="font-mono text-xs uppercase tracking-eyebrow text-muted-foreground">
            404 · Off the trail
          </p>
          <h1 className="display mt-6 text-6xl md:text-8xl font-medium leading-none">
            Lost in the <span className="italic font-light">undergrowth.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
            The page you were looking for isn&apos;t here. Wander back to a known path ,
            we&apos;ve got plenty to explore.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/">Back to home</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/natural-fibers">Browse fibers</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
