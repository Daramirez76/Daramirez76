import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { Sidebar } from "@/components/Sidebar";
import { interests } from "@/data/portfolio";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — David Ramirez · Backend & AI" },
      {
        name: "description",
        content:
          "Desarrollador enfocado en construir soluciones backend que integran IA para automatizar procesos y mejorar la gestión de información.",
      },
      { property: "og:title", content: "Sobre mí — David Ramirez · Backend & AI" },
      {
        property: "og:description",
        content:
          "Perfil técnico orientado a automatización de procesos, IA aplicada y sistemas escalables.",
      },
    ],
  }),
  component: SobreMi,
});

const principles = [
  {
    t: "Enfoque práctico",
    d: "Antes de codear, identifico qué se hace manual, dónde se pierde tiempo y qué métrica mejora con la solución.",
  },
  {
    t: "Pensamiento analítico",
    d: "Descompongo procesos complejos en pasos automatizables y diseño la arquitectura mínima necesaria para resolverlos.",
  },
  {
    t: "Aprendizaje continuo",
    d: "Profundizo de forma activa en backend, IA aplicada y nuevas herramientas que aceleren la entrega de valor.",
  },
];

const focus = [
  {
    t: "Automatización de procesos",
    d: "Reemplazo tareas manuales por flujos confiables: OCR, agentes conversacionales y procesamiento backend.",
  },
  {
    t: "IA aplicada",
    d: "Chatbots y extracción de datos integrados en sistemas reales, no como demo, sino como pieza operativa.",
  },
  {
    t: "Sistemas escalables",
    d: "Backend en Python con bases de datos relacionales y entornos contenedorizados para crecer sin rehacer todo.",
  },
];

function SobreMi() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Sobre mí"
        title="Construyo backends con IA que automatizan procesos."
        description="Soy desarrollador enfocado en construir soluciones backend que integran inteligencia artificial para automatizar procesos y mejorar la gestión de información. Mi interés está en sistemas escalables y eficientes que resuelvan necesidades reales."
      />

      <div className="grid gap-8 pb-16 lg:grid-cols-[1fr_280px]">
        <div className="space-y-12">
          {/* Bio */}
          <article
            className="rounded-2xl border border-border bg-card p-8 shadow-soft"
            style={{ animation: "var(--animate-fade-up)" }}
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight">Mi enfoque</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Trabajo en la intersección entre backend e inteligencia artificial. Me interesa
                identificar tareas manuales repetitivas dentro de un negocio y reemplazarlas por
                sistemas que las ejecuten de forma confiable.
              </p>
              <p>
                He construido un agente OCR para comerciantes informales —que digitaliza
                comprobantes desde WhatsApp y los expone en un dashboard— y un sistema de gestión
                geriátrica con chatbot IA para atender consultas y orientar a los usuarios. Dos
                contextos distintos, la misma lógica: problema real, solución técnica, impacto
                medible.
              </p>
              <p>
                Trabajo con metodología Scrum, priorizo entregas pequeñas y verificables, y disfruto
                cuando una pieza de código bien diseñada elimina horas de trabajo manual a alguien.
              </p>
            </div>
          </article>

          {/* Focus areas */}
          <article style={{ animation: "var(--animate-fade-up)", animationDelay: "120ms" }}>
            <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight">
              Dónde aporto valor
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {focus.map((f, i) => (
                <div
                  key={f.t}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated"
                  style={{
                    animation: "var(--animate-fade-up)",
                    animationDelay: `${i * 80 + 200}ms`,
                  }}
                >
                  <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">
                    {f.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </article>

          {/* How I work */}
          <article style={{ animation: "var(--animate-fade-up)", animationDelay: "240ms" }}>
            <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight">
              Cómo trabajo
            </h2>
            <ol className="space-y-4">
              {principles.map((s, i) => (
                <li
                  key={s.t}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-primary font-display text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">{s.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </div>

        <div className="space-y-5">
          <Sidebar title="Intereses">
            <ul className="space-y-2">
              {interests.map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-accent"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
                  {i}
                </li>
              ))}
            </ul>
          </Sidebar>

          <Sidebar title="Stack">
            <div className="flex flex-wrap gap-1.5">
              {["Python", "JavaScript", "React", "MySQL", "Docker", "Linux", "Git"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </Sidebar>

          <Sidebar title="Formación">
            <p className="text-sm font-medium text-foreground">SENA</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Análisis y Desarrollo de Software · Bogotá · 2024–Presente
            </p>
          </Sidebar>
        </div>
      </div>
    </PageShell>
  );
}
