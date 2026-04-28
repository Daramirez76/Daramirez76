import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-radial" />
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-12 sm:pt-16">{children}</main>
      <Footer />
    </div>
  );
}
