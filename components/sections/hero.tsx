import Image from "next/image";
import { profile } from "@/content/profile";
import { TechIcon } from "@/components/ui/tech-icons";

export function Hero() {
  const whatsappUrl = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
        profile.whatsappMessage
      )}`
    : null;

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
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
            {/* Availability & Role Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-accent shadow-sm">
                Junior Software Engineer
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

            {/* Tech Stack quick strip */}
            <div className="flex flex-col gap-2.5 pt-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                Tecnologías y herramientas
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {[
                  { name: "Next.js", icon: "nextjs", hover: "hover:text-foreground" },
                  { name: "React", icon: "react", hover: "hover:text-cyan-400" },
                  { name: "TypeScript", icon: "typescript", hover: "hover:text-blue-400" },
                  { name: "Tailwind", icon: "tailwind", hover: "hover:text-teal-400" },
                  { name: ".NET", icon: "dotnet", hover: "hover:text-purple-400" },
                  { name: "Java", icon: "java", hover: "hover:text-amber-500" },
                  { name: "Node.js", icon: "nodejs", hover: "hover:text-emerald-400" },
                  { name: "Python", icon: "python", hover: "hover:text-amber-400" },
                  { name: "PostgreSQL", icon: "postgres", hover: "hover:text-sky-400" },
                  { name: "Docker", icon: "docker", hover: "hover:text-blue-400" },
                  { name: "Kotlin", icon: "kotlin", hover: "hover:text-violet-400" },
                ].map((t) => (
                  <div
                    key={t.name}
                    title={t.name}
                    className={`flex items-center gap-1.5 rounded-lg border border-border/70 bg-surface/70 px-2.5 py-1 text-xs text-muted transition-all duration-200 ${t.hover} hover:border-border-strong hover:bg-surface-raised`}
                  >
                    <TechIcon name={t.icon} size={14} />
                    <span className="text-[11px] font-medium">{t.name}</span>
                  </div>
                ))}
              </div>
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
              Arquitectura
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Sistemas robustos de punta a punta
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
              Proceso
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Avances funcionales cada semana
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
              Desarrollo
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              100% código propio y a medida
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
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
