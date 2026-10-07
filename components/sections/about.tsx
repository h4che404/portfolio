import Link from "next/link";
import { profile } from "@/content/profile";
import { TechIcon } from "@/components/ui/tech-icons";

const TECH_STACK = [
  { name: "Next.js", icon: "nextjs", desc: "Web full stack & SSR" },
  { name: "React", icon: "react", desc: "Interfaces interactivas" },
  { name: "TypeScript", icon: "typescript", desc: "Código robusto y tipado" },
  { name: "Tailwind CSS", icon: "tailwind", desc: "Diseño responsive y moderno" },
  { name: ".NET / C#", icon: "dotnet", desc: "Arquitectura backend sólida" },
  { name: "Node.js", icon: "nodejs", desc: "APIs y microservicios" },
  { name: "Python", icon: "python", desc: "Inteligencia artificial aplicada" },
  { name: "PostgreSQL", icon: "postgres", desc: "Bases de datos confiables" },
  { name: "Docker", icon: "docker", desc: "Contenedores y despliegues" },
  { name: "Kotlin", icon: "kotlin", desc: "Aplicaciones móviles" },
  { name: "Redis", icon: "redis", desc: "Rendimiento y caché rápida" },
  { name: "Git", icon: "git", desc: "Integración y control seguro" },
] as const;

export function About() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-reveal className="flex flex-col gap-3 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold">
            SOBRE MÍ
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Detrás del desarrollo
          </h2>
          <p className="text-base text-muted sm:text-lg">
            Combinación de criterio técnico, arquitectura limpia y comunicación
            comercial transparente.
          </p>
        </div>

        {/* Content Layout (Mobile: 1 column, lg: 2 columns) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Left Column: Bio & Background (lg: 6 cols) */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            <div data-reveal className="flex flex-col gap-4 text-sm leading-relaxed text-muted sm:text-base">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Quick stats/highlights */}
            <div data-reveal data-reveal-delay="2" className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-3">
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

            {/* Links */}
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

          {/* Right Column: Visual Tech Stack with Logos (lg: 6 cols) */}
          <div data-reveal data-reveal-delay="3" className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-7 lg:col-span-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-widest text-accent font-semibold">
                Tecnologías y herramientas
              </h3>
              <span className="text-[11px] text-muted">
                Stack principal
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-3 rounded-xl border border-border/80 bg-surface-raised/50 p-2.5 transition-all duration-200 hover:border-accent/40 hover:bg-surface-raised"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors group-hover:text-accent">
                    <TechIcon name={tech.icon} size={18} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-foreground truncate group-hover:text-accent transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-muted truncate">
                      {tech.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="pt-2 border-t border-border/60 text-xs text-muted leading-relaxed">
              Herramientas modernas enfocadas en seguridad, velocidad y estabilidad para tu producto digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
