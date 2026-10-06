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
    id: "web-development",
    title: "Webs & Landings de Alto Impacto",
    tagline: "Presencia digital rápida, moderna y optimizada para convertir visitas en clientes.",
    description:
      "Desarrollo sitios web institucionales y landing pages con foco comercial: carga instantánea, diseño responsivo impecable en celulares, excelente posicionamiento orgánico (SEO) y llamados a la acción claros.",
    deliverables: [
      "Diseño responsive mobile-first adaptado a tu marca",
      "Formularios de contacto e integración directa con WhatsApp",
      "Optimización de velocidad y Core Web Vitals",
      "Panel para actualizar contenidos o blog si lo requerís",
      "Configuración de dominio, hosting y métricas analíticas",
    ],
    idealFor: "Negocios, marcas personales y startups que necesitan captar clientes o validar una propuesta comercial.",
    badge: "Más solicitado",
  },
  {
    id: "custom-systems",
    title: "Sistemas & Paneles a Medida",
    tagline: "Automatizá los procesos internos y la gestión de tu negocio con software hecho a tu medida.",
    description:
      "Construyo paneles administrativos, sistemas de turnos, gestión de pedidos, clientes o inventario. Adiós a las planillas de Excel descontroladas: una herramienta centralizada, segura y fácil de usar para vos y tu equipo.",
    deliverables: [
      "Autenticación segura con roles y permisos de acceso",
      "Bases de datos relacionales robustas y backups automatizados",
      "Tableros de control con métricas en tiempo real",
      "Exportación de datos, reportes y trazabilidad de acciones",
      "Integraciones con pasarelas de pago y servicios externos",
    ],
    idealFor: "Empresas y pymes que buscan ordenar su operativa diaria y ahorrar horas de trabajo manual.",
  },
  {
    id: "mobile-apps",
    title: "Aplicaciones Móviles (Android & iOS)",
    tagline: "Tu producto en el bolsillo de tus usuarios con rendimiento y experiencia nativa.",
    description:
      "Desarrollo aplicaciones móviles multiplataforma modernas con Kotlin Multiplatform y Compose o tecnologías web avanzadas (PWA offline-first). Una sola base de código confiable, menor tiempo de salida al mercado y costos controlados.",
    deliverables: [
      "Diseño de interfaz fluido y adaptado a estándares móviles",
      "Soporte para uso sin conexión (offline-first)",
      "Notificaciones push para fidelizar usuarios",
      "Integración con cámara, geolocalización y sensores",
      "Preparación y acompañamiento para publicación en tiendas",
    ],
    idealFor: "Proyectos que requieren interacción frecuente con el usuario final o personal operativo en la calle.",
  },
  {
    id: "applied-ai",
    title: "Inteligencia Artificial Aplicada",
    tagline: "Aprovechá la IA práctica para automatizar tareas repetitivas y potenciar tu software.",
    description:
      "No humo, soluciones concretas: integración de visión por computadora para reconocimiento y escaneo, modelos livianos ONNX locales sin costo excesivo de servidores, asistentes virtuales con tus datos de negocio y procesamiento automático de documentos.",
    deliverables: [
      "Microservicios livianos y de respuesta rápida (FastAPI / ONNX)",
      "Procesamiento y validación inteligente de imágenes o documentos",
      "Chatbots y asistentes conectados a la base de datos de tu negocio",
      "Clasificación automática y extracción de información clave",
    ],
    idealFor: "Negocios que buscan innovar, automatizar atención o resolver problemas de verificación visual/documental.",
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
