import { services } from "@/content/services";

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden py-16 sm:py-24">
      {/* Ambient subtle purple light */}
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-purple-600/5 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-reveal className="flex flex-col gap-3 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            {"// "}SERVICIOS
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Soluciones de software pensadas para resolver problemas reales
          </h2>
          <p className="text-base text-muted sm:text-lg">
            Desarrollo sin intermediarios: desde el diagnóstico inicial hasta la
            puesta en producción en la nube con soporte continuo.
          </p>
        </div>

        {/* Services Grid (Mobile-first: 1 column, md+: 2 columns) */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {services.map((service, index) => (
            <article
              key={service.id}
              data-reveal
              data-reveal-delay={String(index + 1)}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-purple-500/30 hover:bg-surface-raised hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.12)] sm:p-8"
            >
              <div className="flex flex-col gap-4">
                {/* Header with optional badge */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-foreground sm:text-2xl group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent">
                      {service.badge}
                    </span>
                  )}
                </div>

                <p className="font-medium text-sm text-foreground/90 leading-snug">
                  {service.tagline}
                </p>

                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="pt-2">
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted font-semibold mb-3">
                    Qué incluye:
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 leading-normal"
                      >
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-mono text-[10px]">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom footer: Ideal for + CTA */}
              <div className="mt-6 pt-5 border-t border-border flex flex-col gap-4">
                <p className="text-xs text-muted">
                  <span className="font-semibold text-foreground/80">
                    Ideal para:{" "}
                  </span>
                  {service.idealFor}
                </p>

                <a
                  href="#contacto"
                  className="inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent-hover group-hover:underline underline-offset-4"
                >
                  <span>Consultar por este servicio</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
