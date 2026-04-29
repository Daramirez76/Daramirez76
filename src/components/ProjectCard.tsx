interface Props {
  title: string;
  description: string;
  stack: string[];
  year?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  repo?: string;
  index?: number;
  detailed?: boolean;
}

export function ProjectCard({
  title,
  description,
  stack,
  year,
  problem,
  solution,
  impact,
  repo,
  index = 0,
  detailed = false,
}: Props) {
  return (
    <article
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
      style={{
        animation: "var(--animate-fade-up)",
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-110 group-hover:rotate-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        </div>
        {year && <span className="text-xs font-medium text-muted-foreground">{year}</span>}
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

      {detailed && (problem || solution || impact) && (
        <div className="mt-5 space-y-2.5 border-t border-border/60 pt-4 text-sm">
          {problem && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Problema
              </span>
              <p className="mt-0.5 text-muted-foreground">{problem}</p>
            </div>
          )}
          {solution && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Solución
              </span>
              <p className="mt-0.5 text-muted-foreground">{solution}</p>
            </div>
          )}
          {impact && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Impacto
              </span>
              <p className="mt-0.5 text-muted-foreground">{impact}</p>
            </div>
          )}
        </div>
      )}

      <div className="mt-5 flex flex-1 flex-wrap items-end gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-primary/40 hover:bg-accent hover:text-primary"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
          </svg>
          Ver repositorio
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
      )}
    </article>
  );
}
