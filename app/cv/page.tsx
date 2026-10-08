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
import { idNight, luppi, miPartido } from "@/content/projects";

export const metadata: Metadata = {
  title: `CV — ${profile.name} · Estudiante de Programación (UTN)`,
  description: `Currículum Vitae de ${profile.name}, Estudiante Avanzado de la Tecnicatura Universitaria en Programación (UTN) y Software Developer.`,
};

function Heading({ children }: { children: string }) {
  return (
    <h2 className="border-b border-neutral-300 pb-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-600 font-bold">
      {children}
    </h2>
  );
}

function EntryHeader({
  title,
  meta,
  badge,
}: {
  title: string;
  meta: string;
  badge?: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <div className="flex items-center gap-2">
        <h3 className="text-[14px] font-semibold text-neutral-900">{title}</h3>
        {badge && (
          <span className="rounded bg-neutral-100 border border-neutral-300 px-1.5 py-0.2 font-mono text-[10px] text-neutral-700">
            {badge}
          </span>
        )}
      </div>
      <span className="font-mono text-[11px] text-neutral-500">{meta}</span>
    </div>
  );
}

export default function CvPage() {
  return (
    <main className="min-h-screen bg-neutral-100 py-8 print:bg-white print:py-0">
      {/* Screen action bar */}
      <div className="mx-auto mb-5 flex w-full max-w-[794px] items-center justify-between px-6 print:hidden">
        <Link
          href="/"
          className="font-mono text-xs text-neutral-600 transition-colors hover:text-neutral-900"
        >
          ← Volver al portfolio
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
            Formato A4 optimizado para impresión
          </span>
          <PrintButton />
        </div>
      </div>

      {/* Main CV Sheet (A4 Dimensions 794px @ 96DPI) */}
      <article className="mx-auto flex w-full max-w-[794px] flex-col gap-6 bg-white px-10 py-12 font-sans text-neutral-900 shadow-sm print:max-w-none print:px-0 print:py-0 print:shadow-none">
        {/* Header */}
        <header className="flex flex-col gap-2 border-b border-neutral-200 pb-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
              {profile.name}
            </h1>
            <span className="font-mono text-xs text-neutral-600">
              {profile.location}
            </span>
          </div>

          <p className="text-[14px] font-medium text-neutral-700">
            Estudiante Avanzado de Programación (UTN) · Software Developer
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-neutral-600 pt-1">
            <span>{profile.email}</span>
            <span>·</span>
            <span>+54 9 263 461-6717</span>
            <span>·</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-800 underline underline-offset-2"
            >
              github.com/{profile.githubHandle}
            </a>
            <span>·</span>
            <a
              href="https://portfolio-liard-two-ntjfmwxolk.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-800 underline underline-offset-2"
            >
              portfolio web
            </a>
          </div>
        </header>

        {/* 1. Academic & Professional Summary */}
        <section className="flex flex-col gap-2 print:break-inside-avoid">
          <Heading>Perfil Académico & Profesional</Heading>
          <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700 text-justify">
            Estudiante avanzado de la Tecnicatura Universitaria en Programación
            en la Universidad Tecnológica Nacional (UTN — Facultad Regional Mendoza),
            a 4 materias de completar la carrera. Perfil enfocado en el diseño y
            construcción de productos de software completos de punta a punta:
            arquitectura backend (.NET 10, Java / Spring Boot, Fastify), persistencia
            relacional (PostgreSQL), aplicaciones móviles multiplataforma (Kotlin
            Multiplatform) e inteligencia artificial aplicada (Python / ONNX).
            Experiencia práctica demostrada mediante el desarrollo e implementación
            en producción de sistemas propios (ID-Night, Luppi y Mi Partido).
            Cuento además con más de cuatro años de experiencia laboral previa en
            atención al cliente y gestión comercial, aportando sólidas habilidades
            interpersonales, resolución de problemas y trabajo en equipo. Busco
            realizar mi Práctica Profesional Supervisada (PPS) o incorporarme a un
            equipo de desarrollo de software donde aportar rigor técnico, buenas
            prácticas y compromiso continuo de aprendizaje.
          </p>
        </section>

        {/* 2. Education */}
        <section className="flex flex-col gap-2.5 print:break-inside-avoid">
          <Heading>Educación / Formación Académica</Heading>
          {education.map((item) => (
            <div key={item.title} className="flex flex-col gap-1">
              <EntryHeader title={item.title} meta={item.period} />
              <p className="font-mono text-[11px] text-neutral-600 font-medium">
                {item.place}
              </p>
              <p className="text-xs leading-relaxed text-neutral-700">
                {item.detail}
              </p>
            </div>
          ))}
        </section>

        {/* 3. Software Projects & Technical Experience */}
        <section className="flex flex-col gap-4 print:break-inside-avoid">
          <Heading>Proyectos de Software & Experiencia Técnica</Heading>

          {/* Project 1: ID-Night */}
          <div className="flex flex-col gap-1.5">
            <EntryHeader
              title={`${idNight.name} — Control de Acceso Biométrico con IA`}
              meta="2024 – Presente"
              badge="En desarrollo activo"
            />
            <p className="text-xs leading-relaxed text-neutral-700">
              <span className="font-medium text-neutral-900">Arquitectura:</span>{" "}
              Backend distribuido en .NET 10 (Clean Architecture), microservicio
              independiente de visión computacional en Python/FastAPI con modelos
              ONNX locales (YuNet y SFace) para validación biométrica 1:1 en
              submilisegundos, consola operativa web en Next.js y credencial digital
              PWA offline-first con QR rotativo dinámico.
            </p>
            <ul className="flex flex-col gap-1 pl-4 text-xs leading-relaxed text-neutral-700">
              <li className="list-disc">
                <span className="font-medium">Decisión arquitectónica:</span> Microservicio
                facial desacoplado en FastAPI/ONNX para no bloquear el thread pool del backend
                y permitir escalabilidad horizontal independiente.
              </li>
              <li className="list-disc">
                <span className="font-medium">Seguridad & Datos:</span> Autenticación con
                JWT/roles, persistencia en PostgreSQL con EF Core, auditoría de ingresos y
                consentimiento explícito de datos biométricos.
              </li>
              <li className="list-disc">
                <span className="font-medium">Despliegue:</span> Contenedores Docker
                orquestados en Microsoft Azure (Container Apps).
              </li>
            </ul>
          </div>

          {/* Project 2: Luppi */}
          <div className="flex flex-col gap-1.5">
            <EntryHeader
              title={`${luppi.name} — Plataforma SaaS de Comercio Digital`}
              meta="2025 – Presente"
              badge="Piloto comercial en marcha"
            />
            <p className="text-xs leading-relaxed text-neutral-700">
              <span className="font-medium text-neutral-900">Arquitectura:</span>{" "}
              Plataforma multitenant orientada a centros comerciales y comercios
              barriales. Monorepo con Turborepo, backend en Fastify (Node.js) con
              Drizzle ORM sobre PostgreSQL y aplicación PWA offline-first con
              Workbox para puntos de venta comerciales (POS).
            </p>
            <ul className="flex flex-col gap-1 pl-4 text-xs leading-relaxed text-neutral-700">
              <li className="list-disc">
                <span className="font-medium">Monorepo tipado:</span> Contratos y tipos
                TypeScript compartidos entre la API backend, el panel web y la PWA.
              </li>
              <li className="list-disc">
                <span className="font-medium">Offline-First:</span> Sincronización en
                segundo plano para garantizar continuidad de ventas en caso de microcortes de red.
              </li>
            </ul>
          </div>

          {/* Project 3: Mi Partido */}
          <div className="flex flex-col gap-1.5">
            <EntryHeader
              title={`${miPartido.name} — Aplicación Móvil de Gestión Deportiva`}
              meta="2024"
              badge="Publicado"
            />
            <p className="text-xs leading-relaxed text-neutral-700">
              <span className="font-medium text-neutral-900">Arquitectura:</span>{" "}
              Desarrollo de aplicación móvil multiplataforma para Android e iOS
              con Kotlin Multiplatform (KMP) y Compose Multiplatform, compartiendo
              lógica de negocio y UI nativa. Panel web administrativo con mapas
              interactivos en Leaflet para gestión de reservas de canchas en Mendoza.
            </p>
          </div>
        </section>

        {/* 4. Previous Professional Experience */}
        <section className="flex flex-col gap-3 print:break-inside-avoid">
          <Heading>Experiencia Laboral Previa (Habilidades Laborales)</Heading>
          {experience
            .filter((job) => !job.role.includes("Software Developer"))
            .map((job) => (
              <div key={`${job.org}-${job.role}`} className="flex flex-col gap-1">
                <EntryHeader title={job.role} meta={job.period} />
                <p className="font-mono text-[11px] text-neutral-600 font-medium">
                  {job.org}
                </p>
                <ul className="flex flex-col gap-0.5 pl-4 text-xs leading-relaxed text-neutral-700">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </section>

        {/* 5. Hard Skills / Tech Stack */}
        <section className="flex flex-col gap-2.5 print:break-inside-avoid">
          <Heading>Competencias Técnicas (Hard Skills)</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
            {skills.map((group) => (
              <div key={group.area} className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                  {group.area}
                </span>
                <span className="text-neutral-800 leading-snug">
                  {group.items.join(" · ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Languages */}
        <section className="flex flex-col gap-2 print:break-inside-avoid">
          <Heading>Idiomas</Heading>
          <div className="flex flex-col gap-1 text-xs">
            {languages.map((language) => (
              <div key={language.name} className="flex flex-wrap gap-2 items-baseline">
                <span className="font-semibold text-neutral-900">{language.name}:</span>
                <span className="text-neutral-700">{language.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Repositories & Verification */}
        <section className="flex flex-col gap-2 print:break-inside-avoid">
          <Heading>Código Fuente & Repositorios de Referencia</Heading>
          <ul className="flex flex-col gap-1 text-xs">
            {idNight.repos.map((repo) => (
              <li key={repo.name} className="flex flex-wrap items-baseline gap-1 text-neutral-700">
                <span className="font-mono font-medium text-neutral-900">{repo.name}:</span>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] text-neutral-600 underline underline-offset-2"
                >
                  {repo.url.replace("https://", "")}
                </a>
                <span className="text-neutral-500 text-[11px]">({repo.note})</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
