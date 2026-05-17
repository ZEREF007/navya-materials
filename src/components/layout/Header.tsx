import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-foreground/10"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-8xl items-center justify-between px-6 md:px-8 lg:px-10">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                cn(
                  "relative px-3 py-2 text-[13px] font-semibold tracking-tightish transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      "absolute left-3 right-3 -bottom-px h-px bg-primary transition-transform duration-300 origin-left",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/collaborate">Collaborate</Link>
          </Button>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-foreground/5 transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="lg:hidden border-t border-foreground/10 bg-background">
          <nav aria-label="Mobile" className="px-6 py-6">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) =>
                      cn(
                        "block py-3 font-display font-semibold text-2xl transition-colors",
                        isActive ? "text-primary" : "text-foreground"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-6 w-full">
              <Link to="/collaborate">Collaborate with Us</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
