import { profile } from "@/content/profile";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  const whatsappUrl = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
        profile.whatsappMessage
      )}`
    : null;

  return (
    <section id="contacto" className="relative overflow-hidden py-16 sm:py-24">
      {/* Ambient glow at the bottom */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-96 w-full max-w-3xl rounded-full bg-accent/5 blur-[150px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-reveal className="flex flex-col gap-3 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold">
            CONTACTO
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¿Tenés un proyecto en mente? Hablemos
          </h2>
          <p className="text-base text-muted sm:text-lg">
            Completá el formulario para contarme qué necesitás, o escribime
            directamente por WhatsApp para coordinar una videollamada o reunión.
          </p>
        </div>

        {/* 2-Column Responsive Layout (Mobile: 1 column, lg: 12 cols grid) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Direct channels */}
          <div data-reveal className="flex flex-col gap-6 lg:col-span-5">
            {/* WhatsApp Card */}
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border border-emerald-500/30 bg-surface p-6 transition-all hover:border-emerald-500 hover:bg-surface-raised sm:p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Canal más directo
                  </span>
                  <span className="font-mono text-xs text-emerald-400 group-hover:translate-x-1 transition-transform">
                    Abrir WhatsApp →
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-300 transition-colors">
                    Escribime por WhatsApp
                  </h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    Ideal para una consulta rápida, resolver dudas sobre tiempos
                    o coordinar una llamada.
                  </p>
                </div>
                <div className="mt-2 font-mono text-sm text-foreground/90 bg-surface-raised px-3 py-2 rounded-lg border border-border inline-block w-fit">
                  +54 9 263 461-6717
                </div>
              </a>
            )}

            {/* Email Card */}
            <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                Correo electrónico
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="text-lg font-bold text-foreground hover:text-accent transition-colors break-all"
              >
                {profile.email}
              </a>
              <p className="text-xs text-muted leading-relaxed mt-1">
                Para propuestas formales, especificaciones o documentación previa.
              </p>
            </div>

            {/* Location & Commitment */}
            <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-surface/50 p-6 sm:p-7">
              <div className="flex items-center gap-2 text-xs font-mono text-muted">
                <span>📍</span>
                <span>Mendoza, Argentina</span>
                <span>·</span>
                <span>Remoto para todo el país</span>
              </div>
              <p className="text-xs leading-relaxed text-muted">
                <strong className="text-foreground/90">Sin costo ni compromiso: </strong>
                analizamos juntos la viabilidad técnica de tu proyecto y te
                brindo una primera devolución sincera y transparente.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div data-reveal data-reveal-delay="2" className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
