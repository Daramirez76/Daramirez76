import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { Sidebar } from "@/components/Sidebar";
import { contact } from "@/data/portfolio";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — David Ramirez · Backend & AI" },
      { name: "description", content: "Abierto a oportunidades en backend, inteligencia artificial y automatización de procesos. Conecta vía email, GitHub o LinkedIn." },
      { property: "og:title", content: "Contacto — David Ramirez · Backend & AI" },
      { property: "og:description", content: "Disponible para roles y colaboraciones en backend, IA aplicada y automatización." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const channels = [
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      desc: "Respuesta en menos de 24h",
      icon: (
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13l8-6.99V6H4zm16 2.24-7.46 6.52a1 1 0 0 1-1.08 0L4 8.24V18h16V8.24z" />
      ),
    },
    {
      label: "GitHub",
      value: contact.githubLabel,
      href: contact.github,
      desc: "Código y proyectos públicos",
      icon: (
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
      ),
    },
    {
      label: "LinkedIn",
      value: contact.linkedinLabel,
      href: contact.linkedin,
      desc: "Conectemos profesionalmente",
      icon: (
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V10H5.67v8h2.67zM7 8.67a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18v-4.4c0-2.4-1.28-3.5-3-3.5-1.38 0-2 .76-2.34 1.3V10h-2.67v8H13v-4.4c0-.27.02-.54.1-.74.21-.55.71-1.13 1.55-1.13 1.1 0 1.53.83 1.53 2.06V18h2.16z" />
      ),
    },
  ];

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Contacto"
        title="Abierto a oportunidades en backend, IA y automatización."
        description="Si tienes un proceso manual que se puede automatizar, datos que digitalizar o un sistema que necesita IA aplicada, escríbeme por el canal que prefieras."
      />

      <div className="grid gap-8 pb-16 lg:grid-cols-[1fr_280px]">
        <div className="space-y-3">
          {channels.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
              style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 80}ms` }}
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-110">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  {c.icon}
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {c.label}
                  </h3>
                  <span className="truncate text-sm text-muted-foreground">{c.value}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{c.desc}</p>
              </div>
              <svg
                className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>

        <div className="space-y-5">
          <aside
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft"
            style={{ animation: "var(--animate-fade-up)", animationDelay: "200ms" }}
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-primary opacity-15 blur-2xl" />
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Estado
            </h3>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">Disponible</p>
                <p className="text-xs text-muted-foreground">Backend · AI · Automatización</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg bg-secondary px-3 py-2">
                <div className="text-muted-foreground">Modalidad</div>
                <div className="font-medium text-foreground">Remoto / Híbrido</div>
              </div>
              <div className="rounded-lg bg-secondary px-3 py-2">
                <div className="text-muted-foreground">Ubicación</div>
                <div className="font-medium text-foreground">{contact.location}</div>
              </div>
            </div>
          </aside>

          <Sidebar title="Tipo de oportunidades">
            <ul className="space-y-2 text-sm">
              {["Backend con Python", "Integración de IA y chatbots", "Automatización de procesos", "OCR y digitalización de datos"].map((t) => (
                <li key={t} className="flex items-start gap-2 text-foreground">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </Sidebar>
        </div>
      </div>
    </PageShell>
  );
}
