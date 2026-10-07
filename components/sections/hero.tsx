import Image from "next/image";
import { profile } from "@/content/profile";

export function Hero() {
  const whatsappUrl = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
        profile.whatsappMessage
      )}`
    : null;

  return (
    <section className="relative overflow-hidden border-b border-border pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
      {/* Subtle warm & purple ambient background glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[120px] sm:h-[450px] sm:w-[450px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-12 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[130px] sm:h-[500px] sm:w-[500px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* Main 2-column hero grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            {/* Availability Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{profile.location}</span>
                <span className="text-border-strong">·</span>
                <span className="text-foreground font-medium">
                  {profile.availability}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.75rem] leading-[1.1]">
                Diseño y desarrollo{" "}
                <span className="text-accent">
                  productos digitales completos
                </span>{" "}
                para tu negocio.
              </h1>

              <p className="max-w-2xl text-base text-muted sm:text-lg sm:leading-relaxed">
                {profile.subheadline}
              </p>
            </div>

            {/* Primary Call-to-actions */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <a
                href="#contacto"
                className="flex min-h-[48px] items-center justify-center rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-md transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                Contame tu proyecto
              </a>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-6 py-3 text-center text-sm font-medium text-foreground transition-all hover:border-emerald-500/50 hover:bg-surface-raised active:scale-[0.98]"
                >
                  <svg
                    className="h-4 w-4 text-emerald-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              )}

              <a
                href="#proyectos"
                className="flex min-h-[48px] items-center justify-center rounded-lg border border-border px-5 py-3 text-center text-sm font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                Ver proyectos realizados ↓
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
                  className="absolute h-72 w-72 rounded-full border border-purple-500/35 bg-gradient-to-br from-purple-900/30 via-surface/60 to-surface/20 p-3 shadow-[0_0_70px_-12px_rgba(147,51,234,0.4)] sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                  aria-hidden="true"
                >
                  {/* Secondary inner ring with accent orange touch */}
                  <div className="h-full w-full rounded-full border border-accent/30 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
                </div>

                {/* Floating cyber accents */}
                <span
                  className="pointer-events-none absolute -left-2 top-14 select-none font-mono text-2xl font-bold text-purple-400/40 sm:-left-4 sm:text-3xl"
                  aria-hidden="true"
                >
                  &lt;
                </span>
                <span
                  className="pointer-events-none absolute -right-2 bottom-14 select-none font-mono text-2xl font-bold text-accent/40 sm:-right-4 sm:text-3xl"
                  aria-hidden="true"
                >
                  /&gt;
                </span>

                {/* Cutout Photo Layer */}
                <div className="relative z-10 w-64 pt-4 sm:w-72 lg:w-80">
                  <Image
                    src="/profile.png"
                    alt={profile.name}
                    width={400}
                    height={400}
                    priority
                    className="h-auto w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                  />
                  {/* Subtle fade at the very bottom edge */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background via-background/60 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value pillars ribbon */}
        <div className="grid grid-cols-2 gap-3 pt-6 border-t border-border/60 sm:grid-cols-4 sm:gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
              Arquitectura
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Sistemas robustos de punta a punta
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
              Proceso
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Avances funcionales cada semana
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
              Desarrollo
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              100% código propio y a medida
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
              Trato directo
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Sin intermediarios ni demoras
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
