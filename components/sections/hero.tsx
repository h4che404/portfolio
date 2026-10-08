import Image from "next/image";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-14 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
      {/* Subtle warm & purple ambient background glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[120px] sm:h-[450px] sm:w-[450px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-12 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[130px] sm:h-[500px] sm:w-[500px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8">
        {/* Main 2-column hero grid */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-7">
            {/* Availability & Role Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-accent shadow-sm">
                Software Developer · Full Stack
              </span>
              <div className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] sm:text-xs text-muted shadow-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
                <span className="shrink-0">{profile.location}</span>
                <span className="text-border-strong shrink-0">·</span>
                <span className="truncate text-foreground font-medium">
                  {profile.availability}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-3 sm:gap-3.5">
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.75rem] leading-[1.1]">
                Construyo software y{" "}
                <span className="text-accent">
                  productos digitales
                </span>{" "}
                de punta a punta.
              </h1>

              <p className="max-w-2xl text-base text-muted sm:text-lg sm:leading-relaxed">
                {profile.subheadline}
              </p>
            </div>

            {/* Primary Call-to-actions */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <a
                href="#contacto"
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-md transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contame tu proyecto</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#proyectos"
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-6 py-3 text-center text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent active:scale-[0.98]"
              >
                <span>Ver proyectos</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait Showcase */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative mx-auto flex w-full max-w-[340px] items-center justify-center sm:max-w-[400px] lg:max-w-[440px]">
              {/* Diffuse ambient glow (purple, electric blue, and warm orange) */}
              <div
                className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-600/35 via-sky-500/20 to-accent/25 blur-3xl opacity-80"
                aria-hidden="true"
              />

              {/* Decorative halo backdrop directly behind cutout */}
              <div className="relative flex w-full items-center justify-center">
                {/* Outer orbital halo ring */}
                <div
                  className="relative flex h-72 w-72 items-center justify-center rounded-full border border-purple-500/30 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent p-3.5 shadow-[0_0_60px_-15px_rgba(147,51,234,0.4)] sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                  aria-hidden="true"
                >
                  {/* Secondary inner ring with accent orange touch */}
                  <div className="h-full w-full rounded-full border border-accent/25" />
                </div>

                {/* Photo container with studio gradient backdrop and smooth circular mask */}
                <div className="absolute h-64 w-64 overflow-hidden rounded-full border-2 border-purple-500/40 bg-gradient-to-tr from-purple-950 via-[#151821] to-amber-950/30 shadow-2xl sm:h-72 sm:w-72 lg:h-84 lg:w-84">
                  {/* Internal ambient glowing highlights behind the subject */}
                  <div
                    className="pointer-events-none absolute -top-8 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-purple-600/30 blur-2xl"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute bottom-0 right-0 h-36 w-36 rounded-full bg-accent/20 blur-2xl"
                    aria-hidden="true"
                  />

                  {/* Cutout Photo Layer */}
                  <Image
                    src="/profile.png"
                    alt={profile.name}
                    width={400}
                    height={400}
                    priority
                    className="relative z-10 h-full w-full object-cover object-top scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value pillars ribbon */}
        <div className="grid grid-cols-2 gap-3 pt-6 border-t border-border/60 sm:grid-cols-4 sm:gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
              Backend & APIs
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Clean Architecture, .NET y Java
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
              Frontend & Móvil
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Next.js, React y Kotlin Multiplatform
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
              Datos & Cloud
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              PostgreSQL, Redis y Docker en Azure
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
              IA Aplicada
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Modelos ONNX locales y biometría
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
