import type { Metadata } from "next";
import { PrintButton } from "@/components/cv/print-button";
import { education, profile, skills } from "@/content/profile";
import { idNight, miPartido } from "@/content/projects";

export const metadata: Metadata = {
  title: `CV — ${profile.name}`,
  description: `Currículum de ${profile.name}, ${profile.role}.`,
};

function Heading({ children }: { children: string }) {
  return (
    <h2 className="border-b border-neutral-300 pb-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
      {children}
    </h2>
  );
}

export default function CvPage() {
  return (
    <main className="min-h-screen bg-neutral-100 py-10 print:bg-white print:py-0">
      <div className="mx-auto mb-6 flex w-full max-w-[794px] justify-end px-6 print:hidden">
        <PrintButton />
      </div>

      <article className="mx-auto flex w-full max-w-[794px] flex-col gap-8 bg-white px-12 py-14 font-sans text-neutral-900 print:max-w-none print:px-0 print:py-0">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {profile.name}
          </h1>
          <p className="text-base text-neutral-600">
            {profile.role} · {profile.location}
          </p>
          <p className="font-mono text-xs text-neutral-600">
            {profile.email}
            {profile.whatsapp ? ` · +${profile.whatsapp}` : ""} ·{" "}
            {profile.github.replace("https://", "")}
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <Heading>Perfil</Heading>
          <p className="text-sm leading-relaxed text-neutral-700">
            {profile.intro}
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <Heading>Proyectos</Heading>

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold">{idNight.name}</h3>
              <span className="font-mono text-[11px] text-neutral-500">
                {idNight.status}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700">
              {idNight.tagline} {idNight.approach}
            </p>
            <ul className="flex flex-col gap-1.5 pl-4 text-sm leading-relaxed text-neutral-700">
              {idNight.decisions.slice(0, 3).map((decision) => (
                <li key={decision.title} className="list-disc">
                  <span className="font-medium">{decision.title}.</span>{" "}
                  {decision.choice}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold">{miPartido.name}</h3>
              <span className="font-mono text-[11px] text-neutral-500">
                {miPartido.status}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700">
              {miPartido.tagline} {miPartido.body[1]}
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <Heading>Stack</Heading>
          <dl className="flex flex-col gap-2">
            {skills.map((group) => (
              <div key={group.area} className="flex flex-col gap-0.5">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  {group.area}
                </dt>
                <dd className="text-sm text-neutral-800">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {education.length > 0 && (
          <section className="flex flex-col gap-3">
            <Heading>Formación</Heading>
            <ul className="flex flex-col gap-2">
              {education.map((item) => (
                <li key={item.title} className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">{item.title}</span>
                  <span className="font-mono text-[11px] text-neutral-500">
                    {item.place} · {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="flex flex-col gap-3">
          <Heading>Repositorios</Heading>
          <ul className="flex flex-col gap-1">
            {idNight.repos.map((repo) => (
              <li key={repo.name} className="font-mono text-[11px] text-neutral-700">
                {repo.name} — {repo.note}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
