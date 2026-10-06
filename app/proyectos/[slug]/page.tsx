import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { idNight, miPartido } from "@/content/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: idNight.slug }, { slug: miPartido.slug }];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === idNight.slug) {
    return {
      title: `${idNight.name} — Caso Técnico & Arquitectura`,
      description: idNight.tagline,
    };
  }
  if (slug === miPartido.slug) {
    return {
      title: `${miPartido.name} — Detalle del Proyecto`,
      description: miPartido.tagline,
    };
  }
  return { title: "Proyecto no encontrado" };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === idNight.slug) {
    return (
      <main className="min-h-screen bg-background text-foreground py-10 sm:py-16">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 sm:px-6">
          {/* Top navigation */}
          <div>
            <Link
              href="/#proyectos"
              className="inline-flex min-h-[44px] items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              <span>←</span>
              <span>Volver a proyectos</span>
            </Link>
          </div>

          {/* Header */}
          <header className="flex flex-col gap-4 border-b border-border pb-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-400">
                {idNight.status}
              </span>
              <a
                href={idNight.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-accent hover:underline inline-flex items-center gap-1"
              >
                <span>idnight.app</span>
                <span>↗</span>
              </a>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {idNight.name}
            </h1>
            <p className="text-lg font-medium text-accent sm:text-xl">
              {idNight.tagline}
            </p>
          </header>

          {/* Pillars Strip */}
          <div className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-surface p-4 sm:grid-cols-4 sm:gap-4 sm:p-5">
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

          {/* Business Problem & Distributed Approach */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                01 · El problema de fondo
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-muted">
                {idNight.problem}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                02 · Enfoque de arquitectura
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-muted">
                {idNight.approach}
              </p>
            </div>
          </section>

          {/* Domain Modules */}
          <section className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Módulos de Dominio (Clean Architecture)
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              El dominio está particionado en 10 módulos desacoplados para
              respetar obligaciones legales de auditoría y consentimiento:
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {idNight.domainModules.map((module) => (
                <span
                  key={module}
                  className="rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground/90"
                >
                  {module}
                </span>
              ))}
            </div>
          </section>

          {/* Technical Decisions & Tradeoffs */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                03 · Decisiones técnicas & Tradeoffs
              </h2>
              <p className="text-sm text-muted">
                Cada decisión responde a una necesidad de diseño de ingeniería,
                sopesando costos y beneficios reales.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {idNight.decisions.map((decision, index) => (
                <article
                  key={decision.title}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 sm:p-7"
                >
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    <span className="font-mono text-accent mr-2">
                      #{index + 1}
                    </span>
                    {decision.title}
                  </h3>

                  <div className="flex flex-col gap-2 text-xs sm:text-sm">
                    <div>
                      <strong className="text-muted block font-mono text-[11px] uppercase tracking-wider mb-0.5">
                        Problema:
                      </strong>
                      <p className="text-foreground/80 leading-relaxed">
                        {decision.problem}
                      </p>
                    </div>

                    <div>
                      <strong className="text-accent block font-mono text-[11px] uppercase tracking-wider mb-0.5">
                        Elección técnica:
                      </strong>
                      <p className="text-foreground leading-relaxed">
                        {decision.choice}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-border/60">
                      <strong className="text-muted block font-mono text-[11px] uppercase tracking-wider mb-0.5">
                        Tradeoff asumido:
                      </strong>
                      <p className="text-muted leading-relaxed">
                        {decision.tradeoff}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Repositories */}
          <section className="flex flex-col gap-4 border-t border-border pt-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Repositorios del ecosistema
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {idNight.repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent hover:bg-surface-raised"
                >
                  <span className="font-mono text-sm font-bold text-foreground flex items-center justify-between">
                    {repo.name}
                    <span className="text-muted text-xs">↗</span>
                  </span>
                  <span className="text-xs text-muted">{repo.note}</span>
                </a>
              ))}
            </div>
          </section>

          {/* Back Footer */}
          <div className="border-t border-border pt-6 flex justify-between items-center">
            <Link
              href="/#proyectos"
              className="inline-flex min-h-[44px] items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              <span>←</span>
              <span>Volver a proyectos</span>
            </Link>
            <Link
              href="/#contacto"
              className="inline-flex min-h-[44px] items-center rounded-lg bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent-hover transition-colors"
            >
              Hablemos
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (slug === miPartido.slug) {
    return (
      <main className="min-h-screen bg-background text-foreground py-10 sm:py-16">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 sm:px-6">
          {/* Top navigation */}
          <div>
            <Link
              href="/#proyectos"
              className="inline-flex min-h-[44px] items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              <span>←</span>
              <span>Volver a proyectos</span>
            </Link>
          </div>

          {/* Header */}
          <header className="flex flex-col gap-4 border-b border-border pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-muted">
                {miPartido.status}
              </span>
              <a
                href={miPartido.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-accent hover:underline"
              >
                mipartidoapp.com ↗
              </a>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {miPartido.name}
            </h1>
            <p className="text-lg font-medium text-accent sm:text-xl">
              {miPartido.tagline}
            </p>
          </header>

          {/* Content Body */}
          <article className="flex flex-col gap-6 text-sm sm:text-base leading-relaxed text-muted">
            {miPartido.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          {/* Stack */}
          <section className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6">
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Tecnologías utilizadas
            </h2>
            <div className="flex flex-wrap gap-2">
              {miPartido.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Live Button */}
          <div className="pt-2">
            <a
              href={miPartido.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent-hover transition-colors"
            >
              <span>Ver sitio web en producción (mipartidoapp.com)</span>
              <span>↗</span>
            </a>
          </div>

          {/* Back Footer */}
          <div className="border-t border-border pt-6 flex justify-between items-center">
            <Link
              href="/#proyectos"
              className="inline-flex min-h-[44px] items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              <span>←</span>
              <span>Volver a proyectos</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  notFound();
}
