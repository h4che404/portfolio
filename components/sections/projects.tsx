import Image from "next/image";
import Link from "next/link";
import { idNight, luppi, miPartido } from "@/content/projects";

export function Projects() {
  return (
    <section id="proyectos" className="relative overflow-hidden py-16 sm:py-24">
      {/* Ambient sky/electric blue glow in background */}
      <div
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-sky-500/5 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-reveal className="flex flex-col gap-3 max-w-3xl">
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
        <article
          data-reveal
          className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:border-border-strong sm:p-8 lg:p-10 sm:rounded-3xl"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 lg:items-center">
            {/* Visual Preview (Browser Frame) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative overflow-hidden rounded-xl border border-border-strong bg-background/90 shadow-2xl group/preview">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-border bg-surface-raised/90 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="flex items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-1 font-mono text-[11px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="truncate max-w-[180px] sm:max-w-none">idnight.app</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider">Web app</span>
                </div>

                {/* Screenshot Image */}
                <a
                  href={idNight.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-[16/10] overflow-hidden bg-background"
                >
                  <Image
                    src={idNight.image}
                    alt={idNight.imageAlt}
                    width={1280}
                    height={800}
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground shadow-lg">
                      <span>Ver plataforma en vivo</span>
                      <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Top Bar: Badge + Live Link */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {idNight.status}
                </span>

                <a
                  href={idNight.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-accent transition-colors hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  <span>idnight.app</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                  {idNight.name}
                </h3>
                <p className="text-sm font-medium text-accent sm:text-base leading-snug">
                  {idNight.tagline}
                </p>
              </div>

              {/* Concise Summary */}
              <p className="text-sm leading-relaxed text-muted">
                {idNight.clientSummary}
              </p>

              {/* Highlights Bullet Points */}
              <ul className="flex flex-col gap-2 pt-1">
                {idNight.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                    <svg className="h-4 w-4 shrink-0 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Pillars Badges */}
              <div className="grid grid-cols-2 gap-2 rounded-xl border border-border bg-surface-raised p-3">
                {idNight.pillars.map((pillar) => (
                  <div key={pillar.layer} className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted font-semibold">
                      {pillar.layer}
                    </span>
                    <span className="text-xs font-semibold text-foreground truncate">
                      {pillar.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={idNight.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-accent-foreground shadow-sm transition-all hover:bg-accent-hover active:scale-[0.98]"
                >
                  <span>Visitar sitio</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <Link
                  href={`/proyectos/${idNight.slug}`}
                  className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface-raised px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-accent hover:text-accent active:scale-[0.98]"
                >
                  <span>Caso técnico</span>
                  <span aria-hidden="true">→</span>
                </Link>

                <a
                  href={idNight.repos[0]?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[44px] items-center justify-center rounded-lg border border-border px-3.5 py-2.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground"
                  aria-label="Ver repositorios en GitHub"
                >
                  <span>Repos</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Project 2: Luppi (Centro Comercial Digital) */}
        <article
          data-reveal
          className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:border-border-strong sm:p-8 lg:p-10 sm:rounded-3xl"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 lg:items-center">
            {/* Visual Preview (Browser Frame) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative overflow-hidden rounded-xl border border-border-strong bg-background/90 shadow-2xl group/preview">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-border bg-surface-raised/90 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="flex items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-1 font-mono text-[11px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="truncate max-w-[180px] sm:max-w-none">app-vuelve-dashboard.vercel.app</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider">POS Dashboard</span>
                </div>

                {/* Screenshot Image */}
                <a
                  href={luppi.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-[16/10] overflow-hidden bg-background"
                >
                  <Image
                    src={luppi.image}
                    alt={luppi.imageAlt}
                    width={1280}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground shadow-lg">
                      <span>Probar terminal POS en vivo</span>
                      <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Top Bar: Badge + Live Link */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-[11px] font-medium text-amber-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {luppi.status}
                </span>

                <a
                  href={luppi.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-accent transition-colors hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  <span>app-vuelve-dashboard.vercel.app</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                  {luppi.name}
                </h3>
                <p className="text-sm font-medium text-accent sm:text-base leading-snug">
                  {luppi.tagline}
                </p>
              </div>

              {/* Concise Summary */}
              <p className="text-sm leading-relaxed text-muted">
                {luppi.clientSummary}
              </p>

              {/* Highlights Bullet Points */}
              <ul className="flex flex-col gap-2 pt-1">
                {luppi.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                    <svg className="h-4 w-4 shrink-0 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Pillars Badges */}
              <div className="grid grid-cols-2 gap-2 rounded-xl border border-border bg-surface-raised p-3">
                {luppi.pillars.map((pillar) => (
                  <div key={pillar.layer} className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted font-semibold">
                      {pillar.layer}
                    </span>
                    <span className="text-xs font-semibold text-foreground truncate">
                      {pillar.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={luppi.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-accent-foreground shadow-sm transition-all hover:bg-accent-hover active:scale-[0.98]"
                >
                  <span>Panel en vivo</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <Link
                  href={`/proyectos/${luppi.slug}`}
                  className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface-raised px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-accent hover:text-accent active:scale-[0.98]"
                >
                  <span>Caso técnico</span>
                  <span aria-hidden="true">→</span>
                </Link>

                <a
                  href={luppi.repos[0]?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[44px] items-center justify-center rounded-lg border border-border px-3.5 py-2.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground"
                  aria-label="Ver repositorio en GitHub"
                >
                  <span>Monorepo</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Project 3: Mi Partido */}
        <article
          data-reveal
          className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:border-border-strong sm:p-8 lg:p-10 sm:rounded-3xl"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 lg:items-center">
            {/* Visual Preview (Browser Frame) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative overflow-hidden rounded-xl border border-border-strong bg-background/90 shadow-2xl group/preview">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-border bg-surface-raised/90 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="flex items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-1 font-mono text-[11px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="truncate max-w-[180px] sm:max-w-none">mipartidoapp.com</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider">Web & App</span>
                </div>

                {/* Screenshot Image */}
                <a
                  href={miPartido.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-[16/10] overflow-hidden bg-background"
                >
                  <Image
                    src={miPartido.image}
                    alt={miPartido.imageAlt}
                    width={1280}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground shadow-lg">
                      <span>Visitar sitio web</span>
                      <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Top Bar: Badge + Live Link */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-raised px-3 py-1 font-mono text-[11px] font-medium text-muted">
                  {miPartido.status}
                </span>

                <a
                  href={miPartido.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-accent transition-colors hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  <span>mipartidoapp.com</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                  {miPartido.name}
                </h3>
                <p className="text-sm font-medium text-accent sm:text-base leading-snug">
                  {miPartido.tagline}
                </p>
              </div>

              {/* Concise Summary */}
              <p className="text-sm leading-relaxed text-muted">
                {miPartido.clientSummary}
              </p>

              {/* Highlights Bullet Points */}
              <ul className="flex flex-col gap-2 pt-1">
                {miPartido.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                    <svg className="h-4 w-4 shrink-0 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stack Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {miPartido.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={miPartido.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-accent-foreground shadow-sm transition-all hover:bg-accent-hover active:scale-[0.98]"
                >
                  <span>Visitar sitio</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <Link
                  href={`/proyectos/${miPartido.slug}`}
                  className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface-raised px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-accent hover:text-accent active:scale-[0.98]"
                >
                  <span>Detalle técnico</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
