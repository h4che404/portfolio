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

function ContactBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-neutral-800 text-white">
      {children}
    </span>
  );
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
        <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-[29px] font-bold tracking-tight text-neutral-950 leading-tight">
              {cvProfile.name}
            </h1>
            <p className="mt-0.5 text-[12px] sm:text-[13px] text-neutral-600 font-normal">
              {cvProfile.roleSubtitle}
            </p>
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-col gap-1.5 text-[11px] text-neutral-700 shrink-0 sm:items-end">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:justify-end">
              <a
                href={`mailto:${cvProfile.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-950"
              >
                <ContactBadge>
                  <svg
                    className="h-2.5 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </ContactBadge>
                <span>{cvProfile.email}</span>
              </a>

              <a
                href={`tel:${cvProfile.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-950"
              >
                <ContactBadge>
                  <svg
                    className="h-2.5 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </ContactBadge>
                <span>{cvProfile.phone}</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:justify-end font-medium">
              <a
                href={cvProfile.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-950 underline underline-offset-2"
              >
                <ContactBadge>
                  <svg
                    className="h-2.5 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </ContactBadge>
                <span>Portfolio</span>
              </a>

              <a
                href={cvProfile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-950 underline underline-offset-2"
              >
                <ContactBadge>
                  <svg
                    className="h-2.5 w-2.5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </ContactBadge>
                <span>GitHub</span>
              </a>

              <a
                href={cvProfile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-950 underline underline-offset-2"
              >
                <ContactBadge>
                  <svg
                    className="h-2.5 w-2.5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </ContactBadge>
                <span>LinkedIn</span>
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
