import { profile } from "@/content/profile";
import { idNight } from "@/content/projects";

export function Hero() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-11 px-6 py-24 sm:px-10 sm:py-28">
        <p className="font-mono text-xs tracking-[0.12em] text-accent">
          {"// "}
          {profile.role.toUpperCase()}
        </p>

        <h1 className="font-sans text-[clamp(2.75rem,10vw,6rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.035em]">
          <span className="block whitespace-pre-line">{profile.headlineLead}</span>
          <span className="block whitespace-pre-line text-accent">
            {profile.headlineAccent}
          </span>
        </h1>

        <p className="max-w-2xl font-mono text-sm leading-[1.85] text-muted">
          {profile.intro}
        </p>

        <div className="flex flex-col sm:flex-row">
          <a
            href={`#${idNight.slug}`}
            className="bg-accent px-7 py-4 text-center font-mono text-xs font-bold uppercase tracking-[0.06em] text-background transition-colors hover:bg-foreground"
          >
            [ Ver {idNight.name} ]
          </a>
          <a
            href="#contacto"
            className="border border-border-strong px-7 py-4 text-center font-mono text-xs uppercase tracking-[0.06em] transition-colors hover:border-accent hover:text-accent sm:border-l-0"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
}
