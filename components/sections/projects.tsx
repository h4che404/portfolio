import Link from "next/link";
import { idNight, miPartido } from "@/content/projects";

export function Projects() {
  return (
    <section id="proyectos" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            {"// "}PROYECTOS DESTACADOS
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sistemas reales construidos de punta a punta
          </h2>
          <p className="text-base text-muted sm:text-lg">
            No son maquetas ni plantillas copiadas: son plataformas completas
            diseñadas desde la arquitectura de datos hasta las interfaces de
            usuario y aplicaciones móviles.
          </p>
        </div>

        {/* Project 1: ID-Night (Featured) */}
        <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:border-border-strong sm:rounded-3xl">
          <div className="flex flex-col gap-6 p-6 sm:p-10">
            {/* Top Bar: Badge + Layers */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {idNight.status}
              </span>

              <span className="font-mono text-xs text-muted">
                Caso principal · Sistema distribuido
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-4xl">
                {idNight.name}
              </h3>
              <p className="text-base font-medium text-accent sm:text-xl">
                {idNight.tagline}
              </p>
            </div>

            {/* Client-facing summary */}
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              {idNight.clientSummary}
            </p>

            {/* 4 Pillars Strip (Mobile: 2x2, Desktop: 1x4) */}
            <div className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-surface-raised p-4 sm:grid-cols-4 sm:gap-4 sm:p-5">
              {idNight.pillars.map((pillar) => (
                <div key={pillar.layer} className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
                    {pillar.layer}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    {pillar.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Link
                href={`/proyectos/${idNight.slug}`}
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-accent-foreground shadow-sm transition-all hover:bg-accent-hover active:scale-[0.98]"
              >
                <span>Ver arquitectura y decisiones técnicas</span>
                <span aria-hidden="true">→</span>
              </Link>

              <a
                href={idNight.repos[0]?.url}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-center text-xs font-mono font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <span>Repositorios en GitHub ({idNight.repos.length})</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>

        {/* Project 2: Mi Partido */}
        <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:border-border-strong sm:rounded-3xl">
          <div className="flex flex-col gap-6 p-6 sm:p-10">
            {/* Top Bar: Badge + Live Link */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-raised px-3 py-1 font-mono text-[11px] font-medium text-muted">
                {miPartido.status}
              </span>

              <a
                href={miPartido.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:underline underline-offset-4"
              >
                <span>mipartidoapp.com</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Title & Tagline */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                {miPartido.name}
              </h3>
              <p className="text-base font-medium text-accent sm:text-lg">
                {miPartido.tagline}
              </p>
            </div>

            {/* Client-facing summary */}
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              {miPartido.clientSummary}
            </p>

            {/* Deliverables summary */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface-raised p-4 flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase text-accent font-semibold">
                  Móvil
                </span>
                <span className="text-xs sm:text-sm text-foreground font-medium">
                  App para jugadores (Fútbol, Pádel, Tenis) en Kotlin Multiplatform
                </span>
              </div>
              <div className="rounded-xl border border-border bg-surface-raised p-4 flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase text-accent font-semibold">
                  Gestión B2B
                </span>
                <span className="text-xs sm:text-sm text-foreground font-medium">
                  Panel para canchas para optimizar turnos y horarios valle
                </span>
              </div>
              <div className="rounded-xl border border-border bg-surface-raised p-4 flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase text-accent font-semibold">
                  Plataforma Web
                </span>
                <span className="text-xs sm:text-sm text-foreground font-medium">
                  Sitio web en Next.js con mapas interactivos sobre Leaflet
                </span>
              </div>
            </div>

            {/* Stack Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="font-mono text-[11px] text-muted mr-1">
                Stack:
              </span>
              {miPartido.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href={miPartido.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface-raised px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-accent hover:text-accent active:scale-[0.98]"
              >
                <span>Visitar sitio web publicado (mipartidoapp.com)</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
