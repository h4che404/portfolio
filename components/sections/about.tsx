import Link from "next/link";
import { profile, productEvolution, certifications } from "@/content/profile";
import { TechIcon } from "@/components/ui/tech-icons";

const SYSTEM_LAYERS = [
  {
    layer: "Frontend & Móvil",
    focus: "Interfaces reactivas, SSR y apps multiplataforma",
    tools: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React 19", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Kotlin Multiplatform", icon: "kotlin" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    layer: "Backend & APIs",
    focus: "Clean Architecture, APIs tipadas y microservicios",
    tools: [
      { name: ".NET 10 / C#", icon: "dotnet" },
      { name: "Java / Spring Boot", icon: "java" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Fastify", icon: "fastify" },
    ],
  },
  {
    layer: "Persistencia & Rendimiento",
    focus: "Modelado relacional estricto y caché en memoria",
    tools: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    layer: "Cloud & DevOps",
    focus: "Contenedores Docker, CI/CD y nube en producción",
    tools: [
      { name: "Docker", icon: "docker" },
      { name: "Azure", icon: "azure" },
      { name: "Git", icon: "git" },
    ],
  },
  {
    layer: "IA Aplicada",
    focus: "Inferencia local optimizada y modelos de visión",
    tools: [
      { name: "Python / FastAPI", icon: "python" },
    ],
  },
] as const;

export function About() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-reveal className="flex flex-col gap-3 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold">
            SOBRE MÍ & TRAYECTORIA
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Criterio de ingeniería, arquitectura y visión de producto
          </h2>
          <p className="text-base text-muted sm:text-lg">
            No me defino por un listado de tecnologías, sino por la capacidad de entender el
            problema, diseñar la arquitectura completa y construir el software de punta a punta.
          </p>
        </div>

        {/* Top Split: Bio & Background vs Highlights */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Left Column: Bio Narrative (lg: 7 cols) */}
          <div data-reveal className="flex flex-col gap-6 lg:col-span-7">
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted sm:text-base">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Quick stats/highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface p-4 flex flex-col gap-1">
                <span className="text-2xl font-bold text-accent sm:text-3xl">
                  {profile.yearsActive}+ años
                </span>
                <span className="text-xs text-muted">
                  Construyendo software de punta a punta
                </span>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 flex flex-col gap-1">
                <span className="text-2xl font-bold text-accent sm:text-3xl">
                  UTN
                </span>
                <span className="text-xs text-muted">
                  Tecnicatura en Programación en curso
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 rounded-xl border border-border bg-surface p-4 flex flex-col gap-1">
                <span className="text-2xl font-bold text-accent sm:text-3xl">
                  4+ años
                </span>
                <span className="text-xs text-muted">
                  Experiencia previa en atención y ventas
                </span>
              </div>
            </div>

            {/* Certifications Block */}
            {certifications.length > 0 && (
              <div className="flex flex-col gap-2 pt-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  Certificación oficial
                </span>
                {certifications.map((cert) => (
                  <div
                    key={cert.credentialId}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4 transition-all hover:border-amber-500/40 hover:bg-surface-raised"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400">
                        <TechIcon name="python" size={20} />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-foreground">
                            {cert.title}
                          </h4>
                          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-400">
                            {cert.hours} · {cert.platform}
                          </span>
                        </div>
                        <p className="text-xs text-muted">
                          {cert.issuer} · {cert.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-border-strong bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        <span>Ver certificado</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <span>Validar online</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Direct Links */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Link
                href="/cv"
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-surface border border-border-strong px-5 py-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <span>Ver currículum completo (CV)</span>
                <span aria-hidden="true">→</span>
              </Link>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-xs font-mono text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <span>GitHub ({profile.githubHandle})</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Engineering System Layers (lg: 5 cols) */}
          <div data-reveal data-reveal-delay="2" className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:col-span-5">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <h3 className="text-xs uppercase tracking-widest text-accent font-semibold">
                Capas de Ingeniería
              </h3>
              <span className="font-mono text-[10px] text-muted">
                Frontend → Infra
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {SYSTEM_LAYERS.map((layer, index) => (
                <div
                  key={layer.layer}
                  className="rounded-xl border border-border/80 bg-surface-raised/40 p-3 transition-colors hover:border-accent/40"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-foreground">
                      {layer.layer}
                    </span>
                    <span className="font-mono text-[10px] text-accent">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted mb-2 leading-tight">
                    {layer.focus}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {layer.tools.map((t) => (
                      <span
                        key={t.name}
                        className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-foreground/90"
                      >
                        <TechIcon name={t.icon} size={12} className="text-muted" />
                        <span>{t.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Product Evolution Narrative (2 Years) */}
        <div data-reveal data-reveal-delay="3" className="flex flex-col gap-6 pt-6 border-t border-border/70">
          <div className="flex flex-col gap-1 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold">
              EVOLUCIÓN EN 2 AÑOS
            </p>
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Crecimiento técnico a través de productos reales
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Cada proyecto representó un salto cualitativo en escala, arquitectura y complejidad de dominio.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {productEvolution.map((item, index) => (
              <div
                key={item.project}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-accent/40 hover:bg-surface-raised sm:p-6"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {item.period}
                    </span>
                    <span className="rounded-full border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted">
                      Etapa 0{index + 1}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.project}
                    </h4>
                    <span className="text-xs font-medium text-foreground/90">
                      {item.title}
                    </span>
                  </div>

                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-surface-raised px-2 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
