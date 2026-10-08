import Link from "next/link";
import { profile } from "@/content/profile";

export function MiniAbout() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 backdrop-blur-sm"
        >
          {/* Subtle warm glow background accent */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                Perfil & Enfoque
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                De la idea y la arquitectura al software en producción
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-muted">
                Soy {profile.shortName} — Software Developer de {profile.location}, estudiante de
                Programación en la UTN. Mi diferencial es asumir el ciclo de desarrollo completo:
                entender el problema, estructurar el backend y la base de datos, y crear interfaces
                ágiles y aplicaciones móviles sin delegar cabos sueltos.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 lg:pt-0 shrink-0">
              <a
                href="#proyectos"
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg bg-surface-raised border border-border-strong px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <span>Ver proyectos</span>
                <span aria-hidden="true">↓</span>
              </a>

              <Link
                href="/cv"
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <span>Currículum (CV)</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
