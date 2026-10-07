export const profile = {
  name: "Juan Cruz Elias Martin",
  shortName: "Juan Cruz",
  role: "Junior Software Engineer · Full Stack",
  location: "Mendoza, Argentina",
  // Client-facing positioning: what he builds for a business, not which
  // frameworks he knows.
  headline: "Diseño y desarrollo productos digitales completos para tu negocio.",
  subheadline:
    "Webs, sistemas a medida, apps móviles e integraciones con inteligencia artificial. Desde la idea hasta el producto funcionando, con comunicación clara en cada etapa.",
  availability: "Disponible para nuevos proyectos",
  yearsActive: 2,
  intro:
    "Hace dos años que construyo software de punta a punta. Actualmente desarrollo ID-Night (control de acceso biométrico con .NET, microservicio de visión por IA y apps móviles) y Luppi (centro comercial digital y fidelización barrial con Turborepo, Fastify y PWA).",
  // Short bio for the "Sobre mí" section, written for non-technical readers.
  bio: [
    "Soy Junior Software Engineer y desarrollador full stack en Mendoza, Argentina. Hace dos años que construyo software completo: la base de datos, el servidor, la web y las apps móviles, además de integraciones con inteligencia artificial.",
    "Antes de dedicarme al desarrollo trabajé varios años en atención al cliente y ventas. Esa experiencia me ayuda a entender qué necesita un negocio y a explicar cada decisión técnica en términos simples.",
    "Estudio la Tecnicatura Universitaria en Programación en la UTN, actualmente en curso.",
  ],
  email: "eliasjuancruz303@gmail.com",
  // International format, digits only (e.g. "5492611234567").
  // Leave empty to hide the WhatsApp call to action.
  whatsapp: "5492634616717" as string,
  // Prefilled text for wa.me links.
  whatsappMessage:
    "Hola Juan Cruz, vi tu portfolio y quiero hacerte una consulta sobre un proyecto.",
  github: "https://github.com/h4che404",
  githubHandle: "h4che404",
} as const;

// Fill this in to render the Education block on the CV page.
// Leaving it empty simply hides the section.
export const education = [
  {
    title: "Tecnicatura Universitaria en Programación",
    place: "Universidad Tecnológica Nacional (UTN)",
    period: "En curso — 4 materias para finalizar",
    detail:
      "Programación orientada a objetos, bases de datos, arquitectura de software, análisis de sistemas, UML, estadística, metodologías ágiles y testing.",
  },
] as const;

export const experience = [
  {
    role: "Junior Software Engineer — proyectos propios",
    org: "ID-Night · Luppi · Mi Partido",
    period: "2024 – presente",
    bullets: [
      "Diseño e implementación de backends en .NET 10 (Clean Architecture) y Fastify (Node.js) con PostgreSQL, Drizzle ORM y EF Core: autenticación, roles, auditoría, multi-tenancy e integraciones externas.",
      "Desarrollo de un microservicio de biometría facial en Python/FastAPI con OpenCV, YuNet y SFace sobre ONNX, con comparación 1:1 por embeddings.",
      "Frontends en Next.js y React 19, PWA offline-first con Workbox y aplicaciones móviles en Kotlin Multiplatform con target Android e iOS.",
      "Despliegue y operación sobre Azure (App Service, Container Apps, Container Registry), Docker, Vercel y GitHub Actions.",
      "Testing unitario, de integración y de APIs con Postman y Swagger/OpenAPI; debugging, logs y validación de datos.",
    ],
  },
  {
    role: "Atención al cliente, ventas y gestión",
    org: "Negocio familiar",
    period: "2021 – 2025",
    bullets: [
      "Asesoramiento y venta directa, detección de necesidades y manejo de objeciones.",
      "Resolución de consultas y situaciones conflictivas con foco en la retención del cliente.",
    ],
  },
  {
    role: "Atención al cliente y ventas",
    org: "Call center",
    period: "2026",
    bullets: [
      "Atención telefónica bajo objetivos de calidad y volumen, con seguimiento y registro de casos.",
    ],
  },
] as const;

export const languages = [
  { name: "Español", level: "Nativo" },
  {
    name: "Inglés",
    level:
      "Técnico — lectura y escritura de documentación, APIs y recursos técnicos; conversación en desarrollo.",
  },
] as const;

export const skills = [
  {
    area: "Backend",
    items: [
      "C# / .NET 10",
      "ASP.NET Core",
      "Entity Framework Core",
      "Java / Spring Boot",
      "Python / FastAPI",
      "Node.js",
      "SignalR",
    ],
  },
  {
    area: "IA aplicada",
    items: [
      "OpenCV",
      "YuNet",
      "SFace",
      "Modelos ONNX",
      "Embeddings biométricos",
      "Comparación facial 1:1",
    ],
  },
  {
    area: "Frontend y mobile",
    items: [
      "TypeScript",
      "React 19",
      "Next.js",
      "Tailwind CSS",
      "PWA / Workbox",
      "Kotlin Multiplatform",
      "Compose Multiplatform",
    ],
  },
  {
    area: "Datos",
    items: ["PostgreSQL", "SQL", "MySQL", "Supabase", "Firebase / Firestore", "Modelado relacional"],
  },
  {
    area: "Cloud y DevOps",
    items: [
      "Azure App Service",
      "Azure Container Apps",
      "Azure Container Registry",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Git",
    ],
  },
  {
    area: "APIs y testing",
    items: [
      "REST APIs",
      "Swagger / OpenAPI",
      "Postman",
      "Autenticación y autorización",
      "Webhooks",
      "Tests unitarios y de integración",
    ],
  },
  {
    area: "Arquitectura y práctica",
    items: [
      "Clean Architecture",
      "POO / SOLID",
      "Diseño por módulos de dominio",
      "Clean Code",
      "Serilog / observabilidad",
    ],
  },
] as const;
