export type Decision = {
  title: string;
  problem: string;
  choice: string;
  tradeoff: string;
};

export type Repo = { name: string; url: string; note: string };

export type Pillar = { layer: string; value: string };

export interface BaseProject {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  stack: readonly string[];
  liveUrl?: string;
  repos?: readonly Repo[];
}

export const idNight = {
  slug: "id-night",
  name: "ID-Night",
  tagline: "Identidad verificada y control de acceso biométrico para eventos y locales nocturnos.",
  status: "En desarrollo activo · Buscando primeros clientes",
  liveUrl: "https://idnight.app",
  pillars: [
    { layer: "Backend", value: ".NET 10" },
    { layer: "Biometría", value: "FastAPI · ONNX" },
    { layer: "Móvil", value: "Kotlin Multiplatform" },
    { layer: "Web", value: "Next.js · React 19" },
  ] as const satisfies readonly Pillar[],
  clientSummary:
    "Solución integral que agiliza el ingreso a locales y eventos mediante validación biométrica facial rápida y credenciales digitales offline. Reemplaza el control manual de documentos, evita falsificaciones y garantiza trazabilidad y consentimiento legal en tiempo real.",
  problem:
    "En la puerta de un boliche se decide en segundos si alguien entra. Hoy esa decisión se toma mirando un DNI a mano: se puede falsificar, no queda registro y ante un incidente no hay forma de reconstruir qué pasó. Al mismo tiempo, cualquier sistema que resuelva esto maneja datos biométricos y documentos de identidad, así que el consentimiento y la trazabilidad no son una función más: son parte del núcleo.",
  approach:
    "ID-Night es una plataforma distribuida: un backend en .NET que concentra el dominio, un microservicio de biometría facial independiente, un panel de administración y una consola operativa en Next.js, una PWA que le da al usuario su credencial digital y una app móvil para el personal de seguridad en la puerta.",
  domainModules: [
    "users",
    "operators",
    "identity",
    "venues",
    "devices",
    "access",
    "incidents",
    "alerts",
    "consent",
    "audit",
  ] as const,
  decisions: [
    {
      title: "La biometría vive fuera del backend, y es stateless",
      problem:
        "El reconocimiento facial necesita modelos ONNX pesados, tiene un perfil de recursos completamente distinto al de una API de negocio y evoluciona a otro ritmo.",
      choice:
        "Un microservicio propio en Python/FastAPI que corre YuNet + SFace sobre ONNX y solo calcula embeddings y comparaciones. No guarda nada: los usuarios, los perfiles de identidad y las plantillas biométricas son del backend .NET.",
      tradeoff:
        "Suma un salto de red y una superficie más para operar. A cambio, la biometría escala por separado, se puede reemplazar el motor sin tocar el dominio, y los tests corren con un provider falso sin levantar un solo modelo.",
    },
    {
      title: "Clean Architecture en el backend, con el dominio partido en módulos",
      problem:
        "Diez módulos de dominio, entre ellos consentimiento y auditoría. Reglas que responden a obligaciones legales, no a caprichos de producto.",
      choice:
        "Domain, Application, Infrastructure y Api como proyectos separados, con las reglas de negocio sin ninguna dependencia sobre Entity Framework ni sobre ASP.NET. Tests unitarios sobre Application y tests de integración sobre la API real.",
      tradeoff:
        "Más ceremonia y más archivos que un CRUD directo. Se justifica porque acá cambiar el motor de persistencia o el proveedor de identidad no puede obligar a reescribir las reglas de acceso.",
    },
    {
      title: "Migración del backend de Java/Spring Boot a .NET 10",
      problem:
        "El backend arrancó en Spring Boot y el proyecto terminó con dos ecosistemas conviviendo, duplicando decisiones de infraestructura y de despliegue.",
      choice:
        "Migrar el backend completo a .NET 10 y retirar el código legacy del repositorio, dejando la historia y el commit de remoción documentados en el git log.",
      tradeoff:
        "Fue tiempo invertido en no construir features nuevas. Lo hice antes de tener usuarios, que es exactamente cuando una migración así todavía es barata.",
    },
    {
      title: "Kotlin Multiplatform para la app de seguridad",
      problem:
        "La app que usa el personal en la puerta tiene que existir en Android y en iOS, y la lógica de validación de acceso no puede divergir entre las dos.",
      choice:
        "Kotlin Multiplatform con Compose: una sola base de código para la lógica y la UI, con un target iOS propio.",
      tradeoff:
        "Menos acceso inmediato a novedades nativas y un toolchain más exigente. A cambio, una sola implementación de la regla que decide si alguien entra o no.",
    },
    {
      title: "La credencial del usuario es una PWA offline-first",
      problem:
        "La puerta de un boliche es el peor lugar posible para depender de la conectividad: subsuelos, saturación de red, cola de gente esperando.",
      choice:
        "PWA con Workbox y credencial en QR generada en el dispositivo, para que la credencial se pueda mostrar aunque no haya señal. Supabase como backend de datos del lado del usuario.",
      tradeoff:
        "Obliga a pensar la revocación con mucho más cuidado que en un modelo siempre online. Es el precio de que el sistema funcione en el mundo real y no solo en la demo.",
    },
  ] satisfies Decision[],
  stack: [
    ".NET 10",
    "ASP.NET Core",
    "Entity Framework Core",
    "PostgreSQL",
    "SignalR",
    "Serilog",
    "Docker Compose",
    "Python",
    "FastAPI",
    "ONNX (YuNet + SFace)",
    "Next.js",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Workbox",
    "Supabase",
    "Kotlin Multiplatform",
    "Compose Multiplatform",
  ] as const,
  repos: [
    {
      name: "Backend-ID-Night",
      url: "https://github.com/h4che404/Backend-ID-Night",
      note: ".NET 10 · Clean Architecture · tests unitarios e integración",
    },
    {
      name: "biometric-service",
      url: "https://github.com/h4che404/biometric-service",
      note: "FastAPI · YuNet + SFace sobre ONNX · stateless",
    },
    {
      name: "id-night-admin",
      url: "https://github.com/h4che404/id-night-admin",
      note: "Next.js · panel de administración de locales y operadores",
    },
    {
      name: "idnight-user-pwa",
      url: "https://github.com/h4che404/idnight-user-pwa",
      note: "PWA offline-first · credencial digital en QR",
    },
    {
      name: "idnight-security",
      url: "https://github.com/h4che404/idnight-security",
      note: "Kotlin Multiplatform · app de puerta para seguridad",
    },
    {
      name: "id-night-landing",
      url: "https://github.com/h4che404/id-night-landing",
      note: "Next.js · sitio de producto",
    },
  ] satisfies Repo[],
} as const;

export const miPartido = {
  slug: "mi-partido",
  name: "Mi Partido",
  tagline: "Plataforma de organización deportiva para jugadores y sistema de gestión de turnos para canchas.",
  status: "Desarrollo completado y publicado · Sin operación comercial activa",
  liveUrl: "https://mipartidoapp.com",
  clientSummary:
    "Ecosistema para fútbol, pádel y tenis en Mendoza: app móvil para jugadores (armado de equipos, búsqueda de rivales y confirmación) junto con portal y herramientas para complejos de canchas orientadas a optimizar ocupación en horarios valle y reducir cancelaciones.",
  body: [
    "Mi Partido es una plataforma integral para el deporte amateur: resuelve la coordinación entre jugadores de fútbol, pádel y tenis (búsqueda de rivales, conformación de equipos y confirmación de asistencia) y provee a los complejos de canchas un panel para publicar disponibilidad y captar reservas.",
    "El desarrollo comprendió una aplicación móvil multiplataforma en Kotlin Multiplatform con Compose Multiplatform, un panel de gestión para propietarios de canchas y una plataforma web en Next.js con mapas interactivos sobre Leaflet.",
    "El producto fue completado en su totalidad y publicado en mipartidoapp.com con foco piloto en la Zona Este de Mendoza (San Martín, Junín y Rivadavia). Actualmente no se encuentra en operación comercial activa, pero constituye un desarrollo completo con arquitectura validada de punta a punta.",
  ] as const,
  stack: [
    "Kotlin Multiplatform",
    "Compose Multiplatform",
    "Next.js",
    "Leaflet",
    "Tailwind CSS",
    "TypeScript",
  ] as const,
  repos: [] as const,
} as const;

export const projects = [idNight, miPartido] as const;
