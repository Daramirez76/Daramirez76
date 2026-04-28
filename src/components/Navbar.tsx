import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-primary text-sm font-bold text-primary-foreground shadow-soft transition-transform group-hover:scale-105">
            {"</>"}
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            dev<span className="text-primary">.ai</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{
                  className:
                    "rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground",
                }}
                inactiveProps={{
                  className:
                    "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:-translate-y-0.5 sm:inline-flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar CV
          </a>
        </div>
      </nav>

      {/* Mobile nav */}
      <ul className="flex items-center justify-center gap-1 border-t border-border/40 px-2 py-2 md:hidden">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{
                className:
                  "rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground",
              }}
              inactiveProps={{
                className: "rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground",
              }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
