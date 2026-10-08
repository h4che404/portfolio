import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/cv/print-button";
import {
  cvAchievements,
  cvEducation,
  cvExperiences,
  cvLanguages,
  cvProfile,
  cvSkills,
} from "@/content/profile";

export const metadata: Metadata = {
  title: `CV — ${cvProfile.name} · Software Developer`,
  description: `Currículum Vitae de ${cvProfile.name}, Software Developer y Estudiante Avanzado de Programación (UTN).`,
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-bold uppercase tracking-wider text-neutral-950">
      {children}
    </h2>
  );
}

function HorizontalDivider() {
  return <hr className="border-t border-neutral-300 my-2.5 print:my-2" />;
}


export default function CvPage() {
  return (
    <main className="min-h-screen bg-neutral-100 py-6 print:bg-white print:py-0">
      {/* Screen action bar (hidden in print) */}
      <div className="mx-auto mb-4 flex w-full max-w-[800px] items-center justify-between px-6 print:hidden">
        <Link
          href="/"
          className="font-mono text-xs text-neutral-600 transition-colors hover:text-neutral-950"
        >
          ← Volver al portfolio
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
            Formato A4 (1 carilla)
          </span>
          <PrintButton />
        </div>
      </div>

      {/* Main CV Sheet (Strictly 1 A4 Page) */}
      <article className="mx-auto flex w-full max-w-[800px] flex-col bg-white px-7 py-7 sm:px-9 sm:py-8 font-sans text-neutral-900 shadow-md print:m-0 print:w-full print:max-w-none print:p-0 print:shadow-none">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 print:flex-row print:items-start print:justify-between">
          <div className="flex flex-col min-w-0">
            <h1 className="text-2xl sm:text-[28px] font-bold tracking-tight text-neutral-950 leading-tight md:whitespace-nowrap print:whitespace-nowrap">
              {cvProfile.name}
            </h1>
            <p className="mt-0.5 text-[12px] sm:text-[12.5px] text-neutral-600 font-normal">
              {cvProfile.roleSubtitle}
            </p>
          </div>

          {/* Contact & Professional Links (Clean hyperlinks) */}
          <div className="flex flex-col gap-1 text-[11px] text-neutral-700 shrink-0 md:items-end print:items-end font-sans">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 md:justify-end print:justify-end">
              <span>{cvProfile.location}</span>
              <span className="text-neutral-300">·</span>
              <a
                href={`tel:${cvProfile.phone.replace(/[^0-9+]/g, "")}`}
                className="text-neutral-800 transition-colors hover:text-neutral-950 hover:underline"
              >
                {cvProfile.phone}
              </a>
              <span className="text-neutral-300">·</span>
              <a
                href={`mailto:${cvProfile.email}`}
                className="text-neutral-800 transition-colors hover:text-neutral-950 hover:underline"
              >
                {cvProfile.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 md:justify-end print:justify-end text-[11px]">
              <a
                href={cvProfile.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-neutral-900 underline underline-offset-2 transition-colors hover:text-neutral-950"
              >
                Portfolio
              </a>
              <span className="text-neutral-300">·</span>
              <a
                href={cvProfile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-neutral-900 underline underline-offset-2 transition-colors hover:text-neutral-950"
              >
                LinkedIn
              </a>
              <span className="text-neutral-300">·</span>
              <a
                href={cvProfile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-neutral-900 underline underline-offset-2 transition-colors hover:text-neutral-950"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* Divider */}
        <HorizontalDivider />

        {/* 1. Perfil Profesional */}
        <section className="flex flex-col gap-1 print:break-inside-avoid">
          <SectionHeading>Perfil Profesional</SectionHeading>
          <p className="text-[10.5px] leading-relaxed text-neutral-700 text-justify sm:text-left">
            {cvProfile.summary}
          </p>
        </section>

        {/* 2. Experiencia Profesional */}
        <section className="flex flex-col gap-1.5 mt-2 print:break-inside-avoid">
          <SectionHeading>Experiencia Profesional</SectionHeading>

          <div className="flex flex-col gap-2">
            {cvExperiences.map((exp) => (
              <div key={exp.title} className="flex flex-col gap-0.5">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="text-[11.5px] font-bold text-neutral-950 leading-snug">
                    {exp.title}
                  </h3>
                  <span className="text-[10px] text-neutral-500 font-normal">
                    {exp.periodAndCompany}
                  </span>
                </div>
                <p className="text-[10px] leading-snug text-neutral-700">
                  {exp.description}
                </p>
                <ul className="flex flex-col gap-0.5 pl-4 text-[10px] leading-snug text-neutral-700">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <HorizontalDivider />

        {/* 3 & 4. Educación y Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start print:break-inside-avoid">
          {/* Educación (Left ~42%) */}
          <section className="md:col-span-5 flex flex-col gap-1">
            <SectionHeading>Educación</SectionHeading>
            <div className="flex flex-col gap-1.5">
              {cvEducation.map((edu) => (
                <div key={edu.degree} className="flex flex-col">
                  <h3 className="text-[11px] font-bold text-neutral-950 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-[10px] text-neutral-600 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-[9.5px] text-neutral-500 font-normal">
                    {edu.periodAndStatus}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Habilidades (Right ~58%) */}
          <section className="md:col-span-7 flex flex-col gap-1">
            <SectionHeading>Habilidades</SectionHeading>
            <div className="flex flex-col gap-0.5 text-[10px] leading-snug text-neutral-700">
              {cvSkills.map((skill) => (
                <p key={skill.name}>
                  <strong className="font-semibold text-neutral-950">
                    {skill.name}:{" "}
                  </strong>
                  {skill.description}
                </p>
              ))}
            </div>
          </section>
        </div>

        {/* Divider */}
        <HorizontalDivider />

        {/* 5 & 6. Idiomas y Logros Destacados */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start print:break-inside-avoid">
          {/* Idiomas (Left ~42%) */}
          <section className="md:col-span-5 flex flex-col gap-1">
            <SectionHeading>Idiomas</SectionHeading>
            <div className="flex flex-col gap-0.5 text-[10px] text-neutral-700">
              {cvLanguages.map((lang) => (
                <p key={lang.language}>
                  <strong className="font-semibold text-neutral-950">
                    {lang.language}:{" "}
                  </strong>
                  {lang.level}
                </p>
              ))}
            </div>
          </section>

          {/* Logros Destacados (Right ~58%) */}
          <section className="md:col-span-7 flex flex-col gap-1">
            <SectionHeading>Logros Destacados</SectionHeading>
            <ul className="flex flex-col gap-0.5 pl-4 text-[10px] leading-snug text-neutral-700">
              {cvAchievements.map((ach) => (
                <li key={ach} className="list-disc">
                  {ach}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
