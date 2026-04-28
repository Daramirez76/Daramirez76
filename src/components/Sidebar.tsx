import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export function Sidebar({ title, children }: Props) {
  return (
    <aside
      className="rounded-2xl border border-border bg-card p-6 shadow-soft"
      style={{ animation: "var(--animate-fade-up)", animationDelay: "200ms" }}
    >
      <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      {children}
    </aside>
  );
}
