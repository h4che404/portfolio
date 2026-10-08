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

export const certifications = [
  {
    title: "Universidad Python con Frameworks Django, Flask, etc.",
    issuer: "Global Mentoring · Ing. Ubaldo Acosta",
    platform: "Udemy",
    date: "14 de Marzo de 2023",
    hours: "71 horas en total",
    credentialId: "UC-25814785-394f-46f7-9e95-0c274699fcb9",
    url: "https://ude.my/UC-25814785-394f-46f7-9e95-0c274699fcb9",
    image: "/certificates/python-udemy.png",
    pdf: "/certificates/python-udemy.pdf",
    skills: ["Python", "Django", "Flask", "POO", "Bases de Datos", "APIs REST"],
  },
] as const;

// Fill this in to render the Education block on the CV page.
// Leaving it empty simply hides the section.
export const education = [
  {
    title: "Tecnicatura Universitaria en Programación (TUP)",
    place: "Universidad Tecnológica Nacional (UTN) — Facultad Regional Mendoza",
    period: "2025 – Actualidad (En curso)",
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

export const cvProfile = {
  name: profile.name,
  roleSubtitle: "Software Developer | Backend & APIs | IA aplicada",
  location: profile.location,
  email: profile.email,
  phone: "+54 9 263 461-6717",
  portfolioLabel: "portfolio web",
  portfolioUrl: "https://portfolio-liard-two-ntjfmwxolk.vercel.app",
  githubLabel: "github.com/h4che404",
  githubUrl: profile.github,
  linkedinLabel: "linkedin.com/in/juancruzelias",
  linkedinUrl: "https://linkedin.com/in/juancruzelias",
  summary:
    "Estudiante avanzado de Programación en la UTN enfocado en el desarrollo de productos de software de punta a punta. Experiencia práctica demostrable en arquitectura backend (.NET, Spring Boot, Fastify), persistencia relacional (PostgreSQL), mobile multiplataforma (Kotlin Multiplatform) e integración de IA aplicada (Python/ONNX). Perfil con autonomía técnica y foco en llevar sistemas reales a producción.",
} as const;

export const cvExperiences = [
  {
    title: "Lead Software Developer — ID-Night",
    periodAndCompany: "Proyecto propio en producción — 2024 – Presente",
    description:
      "Sistema integral de control de acceso y validación biométrica con IA para eventos y locales de concurrencia masiva.",
    bullets: [
      "Backend distribuido en .NET 10 con Clean Architecture, EF Core y PostgreSQL desplegado en Azure Container Apps.",
      "Microservicio de reconocimiento facial 1:1 en Python/FastAPI optimizado para inferencia local con ONNX (YuNet/SFace) y PWA con QR dinámico.",
    ],
  },
  {
    title: "Full Stack Developer — Luppi",
    periodAndCompany: "Proyecto propio — MVP en desarrollo y validación — 2025 – Presente",
    description:
      "Plataforma SaaS multitenant orientada a centros comerciales digitales y comercios barriales con soporte POS.",
    bullets: [
      "Monorepo en Turborepo con Fastify (Node.js), persistencia con Drizzle ORM sobre PostgreSQL y esquemas tipados compartidos.",
      "PWA offline-first con Workbox y sincronización en background para garantizar continuidad operativa ante microcortes de red.",
    ],
  },
  {
    title: "Mobile & Backend Developer — Mi Partido",
    periodAndCompany: "Proyecto propio publicado — 2024",
    description:
      "Aplicación móvil cross-platform y panel web para gestión deportiva y reserva de canchas en Mendoza, validado con usuarios.",
    bullets: [
      "App móvil para Android e iOS en Kotlin Multiplatform (KMP) y Compose, compartiendo el 100% de la lógica de negocio.",
      "Panel web administrativo para complejos con mapas en Leaflet, calendario de reservas y API RESTful con despliegue en la nube.",
    ],
  },
] as const;

export const cvEducation = [
  {
    degree: "Tecnicatura Universitaria en Programación",
    institution: "Universidad Tecnológica Nacional (UTN) — Facultad Regional Mendoza",
    periodAndStatus: "2025 – Actualidad · En curso",
  },
  {
    degree: "Formación complementaria: Python de Cero a Experto (+71 hrs)",
    institution: "Global Mentoring · Cert. UC-25814785",
    periodAndStatus: "2023",
  },
] as const;

export const cvSkills = [
  {
    name: "Backend",
    description:
      "C#, .NET 10, ASP.NET Core, FastAPI, Node.js, Java / Spring Boot, REST APIs, Clean Architecture.",
  },
  {
    name: "Databases & Cloud",
    description:
      "PostgreSQL, SQL Server, Drizzle ORM, EF Core, Docker, Azure Container Apps, CI/CD (GitHub Actions).",
  },
  {
    name: "Frontend & Mobile",
    description:
      "TypeScript, React 19, Next.js, Tailwind CSS, Kotlin Multiplatform (KMP), Compose Multiplatform.",
  },
  {
    name: "AI & Security",
    description:
      "Python, ONNX Runtime, OpenCV, YuNet, SFace, JWT, roles RBAC, biometría 1:1.",
  },
  {
    name: "Herramientas & Prácticas",
    description:
      "Git, GitHub, principios SOLID, diseño modular de dominio, Scrum.",
  },
] as const;

export const cvLanguages = [
  {
    language: "Inglés",
    level: "Técnico / B2 (Lectura fluida de documentación, APIs y especificaciones técnicas)",
  },
  {
    language: "Español",
    level: "Nativo",
  },
] as const;

export const cvAchievements = [
  "3 productos de software diseñados, construidos y desplegados de punta a punta (ID-Night, Luppi y Mi Partido).",
  "Arquitecturas backend modulares con .NET, FastAPI y Fastify con persistencia relacional en PostgreSQL.",
  "Desarrollo móvil multiplataforma para Android e iOS compartiendo lógica nativa con Kotlin Multiplatform.",
  "Implementación de IA aplicada y visión computacional para inferencia local con ONNX y OpenCV.",
] as const;



