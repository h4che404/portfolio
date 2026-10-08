import Link from "next/link";
import { profile } from "@/content/profile";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40 py-12 text-sm text-muted">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        {/* Top row: Brand & Nav */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-foreground text-base">
              {profile.name}
            </span>
            <span className="font-mono text-xs text-muted">
              {profile.role} · {profile.location}
            </span>
          </div>

          <nav
            aria-label="Enlaces del pie de página"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs"
          >
            <a href="#" className="hover:text-foreground transition-colors">
              Inicio
            </a>
            <a href="#proyectos" className="hover:text-foreground transition-colors">
              Proyectos
            </a>
            <a href="#capacidades" className="hover:text-foreground transition-colors">
              Capacidades
            </a>
            <a href="#proceso" className="hover:text-foreground transition-colors">
              Cómo trabajo
            </a>
            <a href="#sobre-mi" className="hover:text-foreground transition-colors">
              Sobre mí
            </a>
            <a href="#contacto" className="hover:text-foreground transition-colors">
              Contacto
            </a>
            <Link href="/cv" className="hover:text-foreground transition-colors font-mono">
              CV
            </Link>
          </nav>
        </div>

        {/* Bottom row: Links & Copyright */}
        <div className="flex flex-col gap-4 border-t border-border/60 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors font-mono"
            >
              github.com/{profile.githubHandle}
            </a>
            <span>·</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors font-mono"
            >
              linkedin.com/in/{profile.linkedinHandle}
            </a>
            <span>·</span>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-foreground transition-colors"
            >
              {profile.email}
            </a>
          </div>

          <p className="text-muted/70 font-mono text-[11px]">
            © {currentYear} {profile.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
