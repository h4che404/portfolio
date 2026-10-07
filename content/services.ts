export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: readonly string[];
  idealFor: string;
  badge?: string;
}

export const services: readonly ServiceItem[] = [
  {
    id: "backend-architecture",
    title: "Arquitectura Backend & APIs",
    tagline: "Sistemas distribuidos, Clean Architecture y contratos de datos seguros.",
    description:
      "Diseño e implementación de servicios robustos con .NET 10, Java / Spring Boot, Fastify y Node.js. Enfoque en separación de capas, contratos tipados, validaciones de dominio, autenticación (JWT/roles), auditoría y multi-tenancy.",
    deliverables: [
      "Clean Architecture & diseño modular desacoplado",
      "APIs RESTful y contratos OpenAPI/Swagger tipados",
      "Autenticación segura, autorización granular y auditoría",
      "Manejo de concurrencia, middleware y validación de esquemas",
      "Tests unitarios y de integración de endpoints",
    ],
    idealFor: "Sistemas que requieren estabilidad, reglas de negocio complejas y alta confiabilidad de datos.",
    badge: "Core Backend",
  },
  {
    id: "frontend-mobile",
    title: "Frontend & Mobile Engineering",
    tagline: "Interfaces web reactivas y aplicaciones móviles con rendimiento nativo.",
    description:
      "Construcción de aplicaciones web interactivas con Next.js (App Router, Server Actions, SSR) y React 19, junto con aplicaciones móviles en Kotlin Multiplatform / Compose y PWAs offline-first con sincronización en segundo plano.",
    deliverables: [
      "Next.js full-stack con Server Components y renderizado híbrido",
      "Apps móviles multiplataforma con Kotlin Multiplatform y Compose",
      "PWA offline-first con service workers y Workbox",
      "Diseño accesible (a11y), responsive mobile-first y Core Web Vitals",
      "Estado global predecible y tipado estricto de punta a punta",
    ],
    idealFor: "Productos que exigen interfaces rápidas, responsivas y una experiencia de usuario sin fisuras.",
  },
  {
    id: "data-cloud",
    title: "Datos, Rendimiento & Cloud",
    tagline: "Persistencia relacional sólida, caché en memoria e infraestructura contenerizada.",
    description:
      "Modelado relacional en PostgreSQL con Drizzle ORM y Entity Framework Core, estrategias de caché con Redis para minimizar latencias, empaquetado en contenedores Docker y despliegues automatizados en Azure y Vercel.",
    deliverables: [
      "Modelado relacional, migraciones y optimización de queries SQL",
      "Capa de caché de alta velocidad y colas con Redis",
      "Contenedorización reproducible con Docker y Docker Compose",
      "Despliegues en Azure (Container Apps, App Service) y Vercel",
      "Pipelines de integración continua con GitHub Actions",
    ],
    idealFor: "Plataformas que necesitan escalar con despliegues predecibles y datos consistentes.",
  },
  {
    id: "applied-ai",
    title: "IA Aplicada & Visión por Computadora",
    tagline: "Inferencia local optimizada, modelos biométricos y procesamiento inteligente.",
    description:
      "Integración de inteligencia artificial práctica sin dependencias sobredimensionadas. Microservicios dedicados en Python/FastAPI ejecutando modelos ONNX locales (OpenCV, YuNet, SFace) para biometría facial 1:1 y procesamiento de datos.",
    deliverables: [
      "Microservicios ligeros e independientes en Python / FastAPI",
      "Inferencia local sobre ONNX Runtime con bajo consumo de cómputo",
      "Detección y comparación facial por embeddings vectoriales",
      "Procesamiento visual, validación de documentos y trazabilidad",
    ],
    idealFor: "Sistemas que requieren verificación de identidad, visión computacional o automatización inteligente.",
    badge: "Especialidad técnica",
  },
] as const;

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  outcome: string;
}

export const workProcess: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico inicial",
    description:
      "Conversamos sobre tu negocio, tus objetivos y los obstáculos actuales. Analizamos la viabilidad técnica y definimos juntos qué hace falta resolver primero.",
    outcome: "Entendimiento total del problema antes de presupuestar o diseñar.",
  },
  {
    step: "02",
    title: "Propuesta & alcance claro",
    description:
      "Te presento una propuesta detallada con los entregables específicos, tecnologías sugeridas, plazos de entrega y presupuesto cerrado sin costos sorpresa.",
    outcome: "Plan de trabajo claro, fechas pactadas y certidumbre económica.",
  },
  {
    step: "03",
    title: "Desarrollo con avances semanales",
    description:
      "Construyo el sistema por etapas iterativas. Cada semana tenés una demo funcional para probar, dar feedback y asegurar que vamos en la dirección correcta.",
    outcome: "Visibilidad total del avance, sin cajas negras ni meses de silencio.",
  },
  {
    step: "04",
    title: "Puesta en marcha & acompañamiento",
    description:
      "Desplegamos la solución en servidores de producción, configuramos dominios, capacitamos a tu equipo y te doy garantía post-lanzamiento para que operes con tranquilidad.",
    outcome: "Tu sistema funcionando en la nube con soporte directo.",
  },
] as const;
