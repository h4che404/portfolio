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

export const luppi = {
  slug: "luppi",
  name: "Luppi",
  tagline: "El centro comercial digital y plataforma de fidelización para comercios locales.",
  status: "En desarrollo y fase de validación · Piloto en Zona Este de Mendoza",
  liveUrl: "https://app-vuelve-dashboard.vercel.app",
  pillars: [
    { layer: "Backend API", value: "Fastify · Drizzle · Redis" },
    { layer: "Persistencia", value: "PostgreSQL multi-tenant" },
    { layer: "Monorepo", value: "Turborepo" },
    { layer: "Web & PWA", value: "Next.js · React 19 · PWA" },
  ] as const satisfies readonly Pillar[],
  clientSummary:
    "Plataforma integral que digitaliza la fidelización barrial y conecta el comercio de cercanía. Reemplaza las tarjetas de cartón por identificación rápida mediante DNI o QR en mostrador, permitiendo a los comerciantes registrar visitas, automatizar recompensas y analizar la recurrencia de clientes sin comisiones abusivas.",
  problem:
    "Los comercios de cercanía (gastronomía, indumentaria, servicios) pierden contacto con sus clientes habituales o dependen de plataformas de delivery que cobran hasta un 30% de comisión y se apropian de los datos. Al mismo tiempo, los programas de fidelización tradicionales con tarjetas de cartón se pierden, se olvidan y no aportan métricas reales de retención.",
  approach:
    "Luppi organiza la solución en un monorepo con Turborepo: una API de alta velocidad en Fastify con PostgreSQL, Redis y Drizzle ORM que aísla datos por comercio; un panel de gestión en Next.js para comerciantes con integración a Meta Graph API (Instagram) para sincronizar catálogos y promociones; una PWA ligera para clientes que acumula sellos y beneficios por DNI o QR sin descargas obligatorias; y una landing de producto.",
  domainModules: [
    "merchants",
    "branches",
    "customers",
    "stamps",
    "rewards",
    "transactions",
    "showcase",
    "instagram-sync",
    "analytics",
  ] as const,
  decisions: [
    {
      title: "Monorepo con Turborepo y paquetes compartidos",
      problem:
        "Sincronizar contratos de API, esquemas Zod y tipos de TypeScript entre cuatro aplicaciones independientes (API, dashboard comercial, PWA consumidor y landing).",
      choice:
        "Turborepo orquestando apps/api, apps/dashboard, apps/consumer y apps/landing, compartiendo paquetes internos de base de datos (@appvuelve/shared-types, config) para garantizar tipado estricto de punta a punta.",
      tradeoff:
        "Mayor rigurosidad en la configuración inicial de pipelines y dependencias de workspace, a cambio de cero desfasaje de tipos y reutilización total de contratos.",
    },
    {
      title: "API dedicada en Fastify sobre Drizzle ORM y Redis",
      problem:
        "En el mostrador la velocidad de registro de una compra o canje de recompensa debe ser instantánea y no puede tolerar cold starts ni latencias variables de serverless functions.",
      choice:
        "Servicio Fastify en Node.js con Drizzle ORM y PostgreSQL, respaldado por Redis para caché de alta velocidad y limitación de tasa.",
      tradeoff:
        "Operar un runtime persistente independiente del frontend en Vercel. Se justifica ampliamente por el throughput en horarios pico de comercios y la latencia consistente.",
    },
    {
      title: "Identificación por DNI o QR web sin fricción de descarga nativa",
      problem:
        "Exigirle a un cliente descargar una app de 50MB en la fila de una cafetería o comercio reduce drásticamente la tasa de adopción del programa de fidelización.",
      choice:
        "Acreditación inmediata mediante DNI en el punto de venta y PWA web responsive en Next.js accesible al instante desde el navegador móvil con escaneo de QR.",
      tradeoff:
        "No contar con push notifications nativas tradicionales de iOS sin instalación previa como PWA. A cambio, la conversión en mostrador es inmediata y no requiere fricción.",
    },
    {
      title: "Sincronización de catálogo vía Meta Graph API (Instagram)",
      problem:
        "Los comerciantes locales ya cargan fotos, promociones e historias en Instagram y no tienen tiempo ni disposición para mantener un segundo catálogo manual.",
      choice:
        "Integración directa con Meta Graph API para importar automáticamente publicaciones, historias y reels de Instagram del negocio al escaparate digital de Luppi.",
      tradeoff:
        "Manejo de tokens de larga duración y límites de tasa de Meta. Se resuelve con sincronización asíncrona periódica y almacenamiento en PostgreSQL para desacoplar llamadas en vivo.",
    },
  ] satisfies Decision[],
  stack: [
    "Turborepo",
    "Fastify",
    "PostgreSQL",
    "Drizzle ORM",
    "Redis",
    "Next.js",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "PWA",
    "Meta Graph API",
    "Zod",
  ] as const,
  repos: [
    {
      name: "AppVuelve (Luppi)",
      url: "https://github.com/h4che404/AppVuelve",
      note: "Turborepo monorepo · Fastify API · Dashboard comercial · PWA consumidor",
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

export const projects = [idNight, luppi, miPartido] as const;

