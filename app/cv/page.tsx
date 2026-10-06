import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/cv/print-button";
import {
  education,
  experience,
  languages,
  profile,
  skills,
} from "@/content/profile";
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

function EntryHeader({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="text-[15px] font-semibold">{title}</h3>
      <span className="font-mono text-[11px] text-neutral-500">{meta}</span>
    </div>
  );
}

export default function CvPage() {
  return (
    <main className="min-h-screen bg-neutral-100 py-10 print:bg-white print:py-0">
      <div className="mx-auto mb-6 flex w-full max-w-[794px] items-center justify-between px-6 print:hidden">
        <Link
          href="/"
          className="font-mono text-xs text-neutral-600 transition-colors hover:text-neutral-900"
        >
          ← Volver al portfolio
        </Link>
        <PrintButton />
      </div>

      <article className="mx-auto flex w-full max-w-[794px] flex-col gap-7 bg-white px-12 py-14 font-sans text-neutral-900 print:max-w-none print:px-0 print:py-0">
        <header className="flex flex-col gap-2.5">
          <h1 className="text-3xl font-semibold tracking-tight">
            {profile.name}
          </h1>
          <p className="text-[15px] text-neutral-600">
            {profile.role} · {profile.location}
          </p>
          <p className="font-mono text-[11px] text-neutral-600">
            {profile.email}
            {profile.whatsapp ? ` · +${profile.whatsapp}` : ""} ·{" "}
            {profile.github.replace("https://", "")}
          </p>
        </header>

        <section className="flex flex-col gap-2.5">
          <Heading>Perfil</Heading>
          <p className="text-sm leading-relaxed text-neutral-700">
            Estudiante avanzado de la Tecnicatura Universitaria en Programación
            en la UTN, a cuatro materias de finalizar, orientado a backend,
            arquitectura de sistemas e inteligencia artificial aplicada.
            Construyo productos propios de punta a punta con C#/.NET,
            Python/FastAPI, React/TypeScript, PostgreSQL, Docker y Azure. Sumo
            más de cuatro años de atención al cliente, lo que me da comunicación
            y orientación al usuario poco habituales en un perfil técnico. Busco
            mi primera experiencia profesional consolidada en IT.
          </p>
        </section>

        <section className="flex flex-col gap-4 print:break-inside-avoid">
          <Heading>Experiencia</Heading>
          {experience.map((job) => (
            <div key={`${job.org}-${job.role}`} className="flex flex-col gap-1.5">
              <EntryHeader title={job.role} meta={job.period} />
              <p className="font-mono text-[11px] text-neutral-500">{job.org}</p>
              <ul className="flex flex-col gap-1 pl-4 text-sm leading-relaxed text-neutral-700">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="list-disc">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-4 print:break-inside-avoid">
          <Heading>Proyectos destacados</Heading>

          <div className="flex flex-col gap-1.5">
            <EntryHeader title={idNight.name} meta={idNight.status} />
            <p className="text-sm leading-relaxed text-neutral-700">
              {idNight.tagline} {idNight.approach}
            </p>
            <ul className="flex flex-col gap-1 pl-4 text-sm leading-relaxed text-neutral-700">
              {idNight.decisions.slice(0, 3).map((decision) => (
                <li key={decision.title} className="list-disc">
                  <span className="font-medium">{decision.title}.</span>{" "}
                  {decision.choice}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-1.5">
            <EntryHeader title={miPartido.name} meta={miPartido.status} />
            <p className="text-sm leading-relaxed text-neutral-700">
              {miPartido.tagline} {miPartido.body[1]}
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-2.5 print:break-inside-avoid">
          <Heading>Formación</Heading>
          {education.map((item) => (
            <div key={item.title} className="flex flex-col gap-1">
              <EntryHeader title={item.title} meta={item.period} />
              <p className="font-mono text-[11px] text-neutral-500">
                {item.place}
              </p>
              <p className="text-sm leading-relaxed text-neutral-700">
                {item.detail}
              </p>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-2.5 print:break-inside-avoid">
          <Heading>Stack</Heading>
          <dl className="flex flex-col gap-1.5">
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

        <section className="flex flex-col gap-2.5 print:break-inside-avoid">
          <Heading>Idiomas</Heading>
          <dl className="flex flex-col gap-1">
            {languages.map((language) => (
              <div key={language.name} className="flex flex-col gap-0.5">
                <dt className="text-sm font-medium">{language.name}</dt>
                <dd className="text-sm text-neutral-700">{language.level}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex flex-col gap-2.5 print:break-inside-avoid">
          <Heading>Repositorios</Heading>
          <ul className="flex flex-col gap-1">
            {idNight.repos.map((repo) => (
              <li
                key={repo.name}
                className="font-mono text-[11px] text-neutral-700"
              >
                {repo.name} — {repo.note}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
