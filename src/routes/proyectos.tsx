import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Sidebar } from "@/components/Sidebar";
import { projects, capabilities } from "@/data/portfolio";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — Backend & AI Automation" },
      {
        name: "description",
        content:
          "Proyectos reales de backend con IA: agente OCR para comerciantes informales y sistema de gestión geriátrica con chatbot. Cada uno con problema, solución, impacto y repositorio.",
      },
      { property: "og:title", content: "Proyectos — Backend & AI Automation" },
      {
        property: "og:description",
        content:
          "Casos reales con repositorio público: OCR + WhatsApp y sistema de gestión con chatbot IA.",
      },
    ],
  }),
  component: Proyectos,
});

function Proyectos() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Casos reales"
        title="Proyectos con repositorio público"
        description="Cada proyecto resuelve un problema operativo concreto. Aquí el contexto, la solución técnica, el impacto y el enlace directo al código."
      />

      <div className="grid gap-8 pb-16 lg:grid-cols-[1fr_280px]">
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} detailed />
          ))}
        </div>

        <div className="space-y-5">
          <Sidebar title="Áreas de trabajo">
            <ul className="space-y-3">
              {capabilities.map((c) => (
                <li key={c.area} className="border-b border-border/60 pb-3 last:border-0">
                  <p className="text-sm font-medium text-foreground">{c.area}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </li>
              ))}
            </ul>
          </Sidebar>

          <Sidebar title="Tipos de problema">
            <div className="flex flex-wrap gap-1.5">
              {[
                "OCR",
                "Chatbots",
                "Automatización",
                "Dashboards",
                "Integración WhatsApp",
                "Gestión interna",
              ].map((c) => (
                <span
                  key={c}
                  className="cursor-default rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  {c}
                </span>
              ))}
            </div>
          </Sidebar>
        </div>
      </div>
    </PageShell>
  );
}
