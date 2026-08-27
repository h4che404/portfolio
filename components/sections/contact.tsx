import { Section } from "@/components/ui/section";
import { profile } from "@/content/profile";

export function Contact() {
  const whatsappUrl = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}`
    : null;

  return (
    <Section id="contacto" eyebrow="Contacto" title="Hablemos">
      <p className="max-w-2xl font-mono text-sm leading-[1.85] text-muted">
        Estoy abierto a posiciones full stack y a proyectos freelance donde haga
        falta pensar el sistema completo, no solo escribir pantallas.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap">
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-accent px-7 py-4 text-center font-mono text-xs font-bold uppercase tracking-[0.06em] text-background transition-colors hover:bg-foreground"
          >
            [ Escribime por WhatsApp ]
          </a>
        )}
        <a
          href={`mailto:${profile.email}`}
          className={`border border-border-strong px-7 py-4 text-center font-mono text-xs uppercase tracking-[0.06em] transition-colors hover:border-accent hover:text-accent ${
            whatsappUrl ? "sm:border-l-0" : ""
          }`}
        >
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="border border-border-strong px-7 py-4 text-center font-mono text-xs uppercase tracking-[0.06em] transition-colors hover:border-accent hover:text-accent sm:border-l-0"
        >
          github.com/{profile.githubHandle}
        </a>
        <a
          href="/cv"
          className="border border-border-strong px-7 py-4 text-center font-mono text-xs uppercase tracking-[0.06em] transition-colors hover:border-accent hover:text-accent sm:border-l-0"
        >
          CV
        </a>
      </div>
    </Section>
  );
}
