import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { useCommandPalette } from "@/providers/CommandPaletteProvider";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const navLinks = [
  { href: "#featured", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { pathname } = useLocation();
  const { setOpen } = useCommandPalette();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="font-mono text-sm font-semibold tracking-tight hover:text-amber-600 transition-colors"
        >
          <span className="text-amber-600">~/</span>kkaengji
        </Link>

        <nav className="hidden sm:flex items-center gap-1">
          {isHome &&
            navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent",
                )}
              >
                {link.label}
              </a>
            ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex items-center gap-2 text-muted-foreground text-xs"
            onClick={() => setOpen(true)}
            aria-label="커맨드 팔레트 열기"
          >
            <Search className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={() => setOpen(true)}
            aria-label="커맨드 팔레트 열기"
          >
            <Search className="h-4 w-4" />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
