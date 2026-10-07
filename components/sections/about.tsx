import Link from "next/link";
import { profile, skills } from "@/content/profile";

export function About() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-reveal className="flex flex-col gap-3 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            {"// "}SOBRE MÍ
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Bio & Background (lg: 7 cols) */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div data-reveal className="flex flex-col gap-4 text-sm leading-relaxed text-muted sm:text-base">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Quick stats/highlights */}
            <div data-reveal data-reveal-delay="2" className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface p-4 flex flex-col gap-1">
                <span className="font-mono text-xl font-bold text-accent sm:text-2xl">
                  {profile.yearsActive}+ años
                </span>
                <span className="text-xs text-muted">
                  Construyendo software de punta a punta
                </span>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 flex flex-col gap-1">
                <span className="font-mono text-xl font-bold text-accent sm:text-2xl">
                  UTN
                </span>
                <span className="text-xs text-muted">
                  Tecnicatura en Programación en curso
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 rounded-xl border border-border bg-surface p-4 flex flex-col gap-1">
                <span className="font-mono text-xl font-bold text-accent sm:text-2xl">
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

          {/* Right Column: Skills Stack (lg: 5 cols) */}
          <div data-reveal data-reveal-delay="3" className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-7 lg:col-span-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Tecnologías principales
            </h3>

            <div className="flex flex-col gap-4 divide-y divide-border/60">
              {skills.map((group) => (
                <div key={group.area} className="pt-3 first:pt-0 flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted font-semibold">
                    {group.area}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border bg-surface-raised px-2 py-0.5 font-mono text-[11px] text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
