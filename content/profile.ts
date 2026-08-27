export const profile = {
  name: "Juan Cruz Elias Martin",
  role: "Desarrollador Full Stack",
  location: "Argentina",
  // Positioning line: what he builds, not which frameworks he knows.
  headline: "Diseño y construyo sistemas completos, no pantallas sueltas.",
  // Display headline, split so the second half carries the accent color.
  headlineLead: "Sistemas\ncompletos.",
  headlineAccent: "No pantallas\nsueltas.",
  availability: "Disponible",
  yearsActive: 2,
  intro:
    "Hace dos años que construyo software. Hoy estoy levantando ID-Night: una plataforma de identidad y control de acceso para la noche, con backend en .NET, un servicio propio de biometría facial, apps móviles multiplataforma y una PWA que funciona sin señal.",
  email: "eliasjuancruz303@gmail.com",
  // International format, digits only (e.g. "5492611234567").
  // Leave empty to hide the WhatsApp call to action.
  whatsapp: "5492634616717" as string,
  github: "https://github.com/h4che404",
  githubHandle: "h4che404",
} as const;

// Fill this in to render the Education block on the CV page.
// Leaving it empty simply hides the section.
export const education: { title: string; place: string; period: string }[] = [];

export const skills = [
  {
    area: "Backend",
    items: [".NET 10", "ASP.NET Core", "Entity Framework Core", "SignalR", "PostgreSQL", "Python", "FastAPI"],
  },
  {
    area: "Frontend",
    items: ["TypeScript", "React 19", "Next.js", "Tailwind CSS", "PWA / Workbox"],
  },
  {
    area: "Mobile",
    items: ["Kotlin Multiplatform", "Compose Multiplatform", "Android", "iOS"],
  },
  {
    area: "Arquitectura y práctica",
    items: [
      "Clean Architecture",
      "Diseño por módulos de dominio",
      "Tests unitarios y de integración",
      "Docker Compose",
      "Serilog / observabilidad",
    ],
  },
] as const;
