export interface Job {
  title: string;
  company: string;
  period: string;
  country: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  category: "ai" | "industrial" | "pm";
}

export interface Project {
  name: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const personalInfo = {
  name: "Jesús Alfonso Obando Ramones",
  title: "Ingeniero de Petróleo | Creador de Prototipos y MVPs",
  subtitle: "Project Manager IA | Integración de LLMs | Ingeniería de Prompts | 11 años Oil & Gas + 7 años Transformación Digital",
  email: "esjesusobando@outlook.com",
  phone: "+58 0422 425 4131",
  phoneMx: "+52 55 27697974",
  phoneEncoded: "+58%200422%20425%204131",
  phoneMxEncoded: "+52%2055%2027697974",
  location: "Cabimas, Edo-Zulia, Venezuela | CDMX, Mexico",
  linkedin: "https://www.linkedin.com/in/jes%C3%BAs-o-532697329/",
  linkedinRaw: "https://www.linkedin.com/in/jesús-o-532697329/",
  github: "PersonalOS Ecosystem",
};

export const experience: Job[] = [
  {
    title: "Project Manager AI",
    company: "AI Strong Consultorías",
    period: "2024 – Presente",
    country: "México / Venezuela",
    description: [
      "Creo prototipos y MVPs usando integración de LLMs, Prompt Engineering y herramientas de IA para resolver problemas de negocio rápidamente.",
      "Entrenamiento de Equipos de Alto Rendimiento usando IA para resolver problemas de manera eficiente y escalable.",
      "Creación de Sistema Operativo de Productividad IA: PersonalOS Ecosystem: 10+ skills especializados, scripts automatizados y agentes inteligentes para productividad enfocada en IA.",
      "Adiestramiento de flujos de trabajo con IA Generativa.",
    ],
  },
  {
    title: "Project Manager",
    company: "Empresa de Tecnología",
    period: "2022 – 2024",
    country: "México",
    description: [
      "Gestión de proyectos tecnológicos aplicando metodologías ágiles.",
      "Coordinación de equipos multidisciplinarios para el cumplimiento de objetivos de negocio.",
    ],
  },
  {
    title: "Entrenamiento de Servicios Digitales",
    company: "Empresa de Tecnología",
    period: "2020 – 2022",
    country: "México",
    description: [
      "Entrenamiento en servicios digitales y desarrollo de habilidades técnicas en entornos tecnológicos dinámicos.",
    ],
  },
  {
    title: "Well Planner / Ingeniero de Diseño Direccional",
    company: "PDVSA (Lagunillas / Bachaquero)",
    period: "2016 – 2019",
    country: "Venezuela",
    description: [
      "Planificación y diseño de trayectorias de pozos, análisis de pozos vecinos, diseño de sarta y creación de programas direccionales.",
      "Seguimiento de trayectorias, análisis de torque y arrastre, hidráulica, punto neutro y demás parámetros críticos.",
    ],
  },
  {
    title: "Ingeniero de Operaciones (Perforación y Rehabilitación de Pozos)",
    company: "PDVSA - Costa Oriental del Lago",
    period: "2011 – 2016",
    country: "Venezuela",
    description: [
      "Supervisión de operaciones de perforación y rehabilitación de pozos en la Costa Oriental del Lago.",
      "Gestión de la asignación de recursos para taladros de perforación.",
    ],
  },
  {
    title: "Ingeniero de Fluidos de Perforación / Analista de Laboratorio",
    company: "Saman - Tecnología Integral en Petróleo",
    period: "2008 – 2011",
    country: "Venezuela",
    description: [
      "Supervisión de operaciones y seguimiento de propiedades del lodo con el objetivo de mantener la estabilidad del hoyo y reducir incidentes de torque y arrastre.",
      "Realización de pruebas de laboratorio de fluidos de perforación para asegurar el cumplimiento de las normas API y los requisitos operativos.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Ingeniero en Petróleo",
    institution: "Universidad del Zulia (LUZ)",
    period: "2003 – 2009",
  },
  {
    degree: "Técnico Medio en Petroquímica",
    institution: "Escuela Técnica Industrial (ETI)",
    period: "2000 – 2003",
  },
];

export const certifications: Certification[] = [
  { name: "Workflows Profesionales con n8n", issuer: "Platzi", year: "2025", category: "ai" },
  { name: "Automatizaciones con n8n", issuer: "Platzi", year: "2025", category: "ai" },
  { name: "Windsurf AI", issuer: "Platzi", year: "2025", category: "ai" },
  { name: "Fundamentos de LLMs", issuer: "Platzi", year: "2025", category: "ai" },
  { name: "Fundamentos de Python", issuer: "Platzi", year: "2025", category: "ai" },
  { name: "Herramientas de IA para Developers", issuer: "Platzi", year: "2025", category: "ai" },
  { name: "Claude AI", issuer: "Platzi", year: "2025", category: "ai" },
  { name: "Generación de imágenes con IA", issuer: "Platzi", year: "2025", category: "ai" },
  { name: "ChatGPT", issuer: "Platzi", year: "2024", category: "ai" },
  { name: "Creación de Páginas Web con ChatGPT", issuer: "Platzi", year: "2024", category: "ai" },
  { name: "Introducción a la Inteligencia Artificial", issuer: "Platzi", year: "2025", category: "ai" },
  { name: "Growth Marketing con Inteligencia Artificial", issuer: "Platzi", year: "2025", category: "ai" },
  { name: "Marketing Digital", issuer: "Platzi", year: "2025", category: "pm" },
  { name: "Marca Personal", issuer: "Platzi", year: "2025", category: "pm" },
  { name: "Desarrollar tu Creatividad", issuer: "Platzi", year: "2025", category: "pm" },
  { name: "Estrategias para Aprender Inglés en Línea", issuer: "Platzi", year: "2024", category: "pm" },
  { name: "Introducción a Ciberseguridad: Prevención de Ataques", issuer: "Platzi", year: "2024", category: "ai" },
  { name: "Ciberseguridad y Privacidad Empresarial", issuer: "Platzi", year: "2024", category: "ai" },
];

export const projects: Project[] = [
  {
    name: "Ecosistema PersonalOS",
    description: "Sistema integral de productividad con IA: 11+ skills especializados, scripts automatizados y agentes inteligentes.",
  },
  {
    name: "Lector de Documentos Universal",
    description: "Herramienta en Python para extracción de texto de PDFs, DOCX, imágenes y formatos antiguos con más del 95% de precisión.",
  },
  {
    name: "Automatización de Flujos con IA",
    description: "Flujos de automatización con n8n, integraciones de LLMs y Claude Code para operaciones empresariales.",
  },
  {
    name: "Calculadora de Perforación",
    description: "Calculadora técnica para operaciones de perforación, optimizada para precisión y rendimiento en campo.",
  },
];

export const skills: Skill[] = [
  {
    category: "IA para la Industria",
    items: [
      "Integración de LLMs",
      "Ingeniería de Prompts",
      "Claude Code",
      "Cursor / Programación con IA",
      "ChatGPT / GPTs",
      "Python",
      "Nodos de Automatización",
      "Midjourney / Generación de Imágenes",
      "Agentes de IA",
    ],
  },
  {
    category: "Prototipado y MVP",
    items: [
      "Prototipado Rápido",
      "Desarrollo de MVP",
      "Low-Code / No-Code",
      "Wireframing",
      "Estrategia de Lanzamiento",
    ],
  },
  {
    category: "Petróleo y Gas / Gestión de Proyectos",
    items: [
      "Ingeniería de Perforación",
      "Planificación de Pozos",
      "Gestión de Proyectos con IA",
      "Agile / Scrum",
      "Roadmapping Técnico",
      "Liderazgo Interfuncional",
      "Análisis de Negocios",
    ],
  },
];

export const achievements = [
  { metric: "Creación de MVP", achievement: "Creo prototipos y MVPs con IA en días", impact: "10x más rápido que desarrollo tradicional" },
  { metric: "Procesamiento de Documentos", achievement: "Skills de Procesamiento de mas de 66 documentos industriales con IA", impact: "95% reducción en tiempo de procesamiento" },
  { metric: "Productividad de Equipo", achievement: "Transformación digital con herramientas de IA", impact: "25% incremento en velocidad" },
  { metric: "PersonalOS", achievement: "Creación de 10 skills de IA y workflows automatizados", impact: "Sistema completo de productividad IA" },
];
