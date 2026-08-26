import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { idNight } from "@/content/projects";

export function CaseStudy() {
  return (
    <Section id={idNight.slug} eyebrow="Caso principal" title={idNight.name}>
      <div className="flex flex-col gap-5">
        <p className="max-w-3xl font-mono text-sm leading-[1.85] text-muted">
          {idNight.tagline}
        </p>
        <span className="self-start border border-accent px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
          {idNight.status}
        </span>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <article className="flex flex-col gap-4">
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-faint">
            El problema
          </h3>
          <p className="font-mono text-sm leading-[1.85] text-muted">
            {idNight.problem}
          </p>
        </article>
        <article className="flex flex-col gap-4">
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-faint">
            El sistema
          </h3>
          <p className="font-mono text-sm leading-[1.85] text-muted">
            {idNight.approach}
          </p>
          <div className="mt-2 flex flex-col gap-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
              Módulos de dominio
            </p>
            <TagList items={idNight.domainModules} />
          </div>
        </article>
      </div>

      <div className="mt-24 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="font-sans text-2xl font-bold uppercase tracking-[-0.02em]">
            Decisiones técnicas
          </h3>
          <p className="max-w-2xl font-mono text-sm leading-[1.85] text-muted">
            Toda decisión de arquitectura se paga con algo. Estas son las que
            tomé y lo que me costó cada una.
          </p>
        </div>

        <ol className="border border-border">
          {idNight.decisions.map((decision, index) => (
            <li
              key={decision.title}
              className="grid grid-cols-1 border-b border-border last:border-b-0 sm:grid-cols-[64px_minmax(0,1fr)]"
            >
              <p className="px-6 pt-8 font-mono text-sm font-bold text-accent sm:px-0 sm:pl-6">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="flex flex-col gap-5 px-6 py-8 sm:pl-0 sm:pr-8">
                <h4 className="font-sans text-xl font-semibold leading-snug tracking-[-0.01em]">
                  {decision.title}
                </h4>
                <p className="max-w-4xl font-mono text-[13px] leading-[1.8] text-faint">
                  {decision.problem}
                </p>
                <p className="max-w-4xl font-mono text-[13px] leading-[1.8] text-muted">
                  {decision.choice}
                </p>
                <p className="max-w-4xl font-mono text-[13px] leading-[1.8] text-faint">
                  <span className="text-accent">COSTO → </span>
                  {decision.tradeoff}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-24 grid gap-14 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-faint">
            Stack
          </h3>
          <TagList items={idNight.stack} />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-faint">
            Repositorios
          </h3>
          <ul className="border-t border-border">
            {idNight.repos.map((repo) => (
              <li key={repo.name} className="border-b border-border">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col gap-1.5 py-4 transition-colors hover:text-accent"
                >
                  <span className="font-mono text-sm">{repo.name}</span>
                  <span className="font-mono text-[11px] text-faint">
                    {repo.note}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
