export const profile = {
  name: "Juan Cruz Elias Martin",
  shortName: "Juan Cruz",
  role: "Software Developer · Full Stack · IA aplicada",
  location: "Mendoza, Argentina",
  headline: "Construyo software y productos digitales de punta a punta.",
  subheadline:
    "Software Developer especializado en sistemas web, backend robusto, aplicaciones móviles e integraciones con IA aplicada. Enfoque en arquitectura limpia, código tipado y productos reales en producción.",
  availability: "Disponible para nuevos proyectos",
  yearsActive: 2,
  intro:
    "Construyo software de punta a punta: desde el modelado de dominio y persistencia hasta APIs de alto rendimiento, interfaces reactivas y despliegue contenerizado.",
  // Short bio for the "Sobre mí" section
  bio: [
    "Diseño y construyo productos de software completos de punta a punta. Mi diferencial no es solamente programar frontend o backend: me enfoco en entender el problema de negocio, estructurar la arquitectura y llevar sistemas reales a producción.",
    "En estos dos años mi trabajo evolucionó a través de tres productos propios en funcionamiento: Mi Partido (aplicaciones móviles con Kotlin Multiplatform y validación con usuarios), ID-Night (arquitectura distribuida en .NET 10 con microservicio biométrico en Python/ONNX) y Luppi (plataforma SaaS multitenant con monorepo en Turborepo, Fastify y PWA offline).",
    "Cuento además con experiencia previa en atención al cliente y ventas, lo que me da una perspectiva clara para traducir requerimientos en soluciones técnicas y comunicarme sin tecnicismos innecesarios. Estudio la Tecnicatura Universitaria en Programación en la UTN.",
  ],
  email: "eliasjuancruz303@gmail.com",
  // International format, digits only (e.g. "5492611234567").
  // Leave empty to hide the WhatsApp call to action.
  whatsapp: "5492634616717" as string,
  // Prefilled text for wa.me links.
  whatsappMessage:
    "Hola Juan Cruz, vi tu portfolio y me gustaría conversar sobre una oportunidad / proyecto.",
  github: "https://github.com/h4che404",
  githubHandle: "h4che404",
} as const;

export const productEvolution = [
  {
    period: "2024",
    project: "Mi Partido",
    title: "Desarrollo móvil cross-platform & Producto",
    description:
      "Construcción de aplicaciones móviles con Kotlin Multiplatform y Compose para Android e iOS, explorando el ciclo completo de producto y validación con usuarios en Mendoza.",
    stack: ["Kotlin Multiplatform", "Compose", "Next.js", "Leaflet"],
  },
  {
    period: "2024 – 2025",
    project: "ID-Night",
    title: "Arquitectura distribuida, IA & Seguridad",
    description:
      "Diseño de un backend modular en .NET 10 con Clean Architecture, microservicio facial en Python/FastAPI sobre ONNX Runtime y credenciales PWA dinámicas con QR rotativo.",
    stack: [".NET 10", "Python", "FastAPI", "ONNX", "PostgreSQL"],
  },
  {
    period: "2025 – 2026",
    project: "Luppi",
    title: "Plataforma SaaS, Monorepo & PWA Offline",
    description:
      "Arquitectura multitenant orientada a centros comerciales digitales y comercios barriales. Monorepo en Turborepo con Fastify, Drizzle ORM y PWA offline-first para puntos de venta.",
    stack: ["Fastify", "Turborepo", "Drizzle ORM", "PostgreSQL", "PWA"],
  },
] as const;

// Fill this in to render the Education block on the CV page.
// Leaving it empty simply hides the section.
export const education = [
  {
    title: "Tecnicatura Universitaria en Programación (TUP)",
    place: "Universidad Tecnológica Nacional (UTN) — Facultad Regional Mendoza",
    period: "2023 – Actualidad (En curso — 4 materias para finalizar)",
    detail:
      "Formación académica en ingeniería de software: Programación Orientada a Objetos (POO), Algoritmos y Estructuras de Datos, Arquitectura de Software, Clean Architecture y Patrones de Diseño (SOLID), Modelado y Gestión de Bases de Datos Relacionales (SQL), Análisis y Diseño de Sistemas con UML, Metodologías Ágiles (Scrum), Testing y Verificación de Software, Matemática y Estadística aplicada.",
  },
] as const;

export const experience = [
  {
    role: "Software Developer — Proyectos propios en producción",
    org: "ID-Night · Luppi · Mi Partido",
    period: "2024 – Presente",
    bullets: [
      "Diseño e implementación de backends distribuidos en .NET 10 (Clean Architecture) y Fastify (Node.js) con PostgreSQL, Drizzle ORM y EF Core: autenticación JWT, roles granulares, auditoría, multi-tenancy y contratos tipados.",
      "Desarrollo e integración de microservicio de visión computacional en Python/FastAPI con OpenCV, YuNet y SFace sobre ONNX Runtime para biometría facial 1:1 en submilisegundos.",
      "Construcción de interfaces web interactivas con Next.js (App Router, Server Actions, SSR) y React 19, aplicaciones PWA offline-first con Workbox y apps móviles en Kotlin Multiplatform para Android e iOS.",
      "Infraestructura contenerizada con Docker y despliegues en Microsoft Azure (Container Apps, App Service) y Vercel, automatizados con pipelines de CI/CD en GitHub Actions.",
      "Diseño de APIs RESTful documentadas con Swagger/OpenAPI, testing unitario y de integración, observabilidad y validación estricta de esquemas de datos.",
    ],
  },
  {
    role: "Atención al cliente, ventas y gestión comercial",
    org: "Negocio familiar",
    period: "2021 – 2025",
    bullets: [
      "Venta directa, detección de necesidades de clientes, administración operativa y resolución de situaciones complejas.",
      "Desarrollo de habilidades de comunicación interpersonal, empatía, organización del tiempo y trabajo orientado a resultados.",
    ],
  },
  {
    role: "Atención telefónica y resolución de casos",
    org: "Call center",
    period: "2026",
    bullets: [
      "Gestión de requerimientos bajo métricas de calidad y volumen, seguimiento metódico de incidentes y registro riguroso de información.",
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
