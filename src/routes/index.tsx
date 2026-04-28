import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Sidebar } from "@/components/Sidebar";
import { projects, capabilities } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Backend & AI Automation — David Ramirez" },
      { name: "description", content: "Construyo sistemas backend con IA para automatizar procesos y transformar datos en información útil. OCR, chatbots y dashboards aplicados a problemas reales." },
      { property: "og:title", content: "Backend & AI Automation — David Ramirez" },
      { property: "og:description", content: "Sistemas backend con IA: OCR, chatbots y automatización de procesos para negocios y usuarios reales." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects[0];

  return (
    <PageShell>
      {/* Hero */}
      <section className="grid gap-12 pb-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div style={{ animation: "var(--animate-fade-up)" }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Disponible · Backend · AI Automation
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Construyo sistemas backend con <span className="text-gradient">inteligencia artificial</span> para automatizar procesos y transformar datos en información útil.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Uso IA, OCR, automatización y backend para resolver problemas reales: digitalizar comprobantes, atender consultas con chatbots y exponer la información en dashboards claros.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              Ver proyectos
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-accent"
            >
              Contacto
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <Stat value="OCR" label="digitalización" />
            <Stat value="Chatbots" label="atención automatizada" />
            <Stat value="Python" label="backend principal" />
          </div>
        </div>

        {/* Floating visual */}
        <div className="relative hidden lg:block" style={{ animation: "var(--animate-scale-in)", animationDelay: "200ms" }}>
          <div className="absolute -inset-6 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative rounded-3xl border border-border bg-card p-8 shadow-elevated">
            <div className="flex items-center gap-2 border-b border-border pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary-glow/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
              <span className="ml-2 text-xs text-muted-foreground">~/ocr_agent.py</span>
            </div>
            <pre className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
              <span className="text-primary">class</span> <span className="text-primary-glow">OCRAgent</span>:
              {"\n    "}channel = <span className="text-primary-glow">'whatsapp'</span>
              {"\n    "}engine  = <span className="text-primary-glow">'ocr + ai'</span>
              {"\n    "}output  = <span className="text-primary-glow">'dashboard'</span>
              {"\n\n"}<span className="text-primary">def</span> process(receipt):
              {"\n    "}data = extract(receipt)
              {"\n    "}<span className="text-primary">return</span> store(data)
            </pre>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {["📄", "🤖", "📊"].map((e, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-xl bg-accent text-2xl"
                  style={{ animation: "var(--animate-float)", animationDelay: `${i * 0.4}s` }}
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="pb-16" style={{ animation: "var(--animate-fade-up)", animationDelay: "100ms" }}>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Proyecto destacado</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">{featured.title}</h2>
          </div>
          <Link to="/proyectos" className="story-link hidden text-sm font-medium text-primary sm:inline-block">
            Ver todos
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-elevated">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-primary opacity-10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Problema</span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{featured.problem}</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Solución</span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{featured.solution}</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Impacto</span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{featured.impact}</p>
            </div>
          </div>

          <div className="relative mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
            <div className="flex flex-wrap gap-1.5">
              {featured.stack.map((t) => (
                <span key={t} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
            {featured.repo && (
              <a
                href={featured.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                </svg>
                Ver repositorio
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="grid gap-8 pb-16 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="mb-8">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Capacidades</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Cómo aporto valor</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <div
                key={c.area}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
                style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 80}ms` }}
              >
                <h3 className="font-display text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                  {c.area}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.items.map((it) => (
                    <span key={it} className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <Sidebar title="Resuelvo">
            <ul className="space-y-3 text-sm">
              {["Procesos manuales y repetitivos", "Digitalización de comprobantes", "Atención saturada por consultas básicas", "Falta de visibilidad operativa"].map((i) => (
                <li key={i} className="flex items-start gap-2 text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </Sidebar>

          <Sidebar title="Para quién">
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-glow" />Negocios con operaciones manuales</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-glow" />Equipos que necesitan automatizar</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-glow" />Usuarios reales con problemas concretos</li>
            </ul>
          </Sidebar>
        </div>
      </section>
    </PageShell>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
