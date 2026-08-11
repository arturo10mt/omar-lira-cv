// ============================================================
//  CV.JS — Single source of truth for site content.
//  Sourced from "Omar Lira CV Resume SPA.docx" (OmarLiraCV_digital/).
// ============================================================

export const profile = {
  name: 'Omar Lira Rangel',
  tagline: 'CIO, CTO · Ejecutivo en Tecnología Empresarial',
  availability: 'Disponible para roles de CIO / CTO',
  locations: 'Ciudad de México',
  email: 'omar.lira@gmail.com',
  phonePrimary: '+52 55 3332 0255',
  phoneSecondary: '+52 55 2300 3452',
  whatsappUrl: 'https://wa.me/525533320255',
  linkedIn: 'https://www.linkedin.com/in/omarlira77/',
  cvPdf: '/CV_Omar_Lira.pdf',
  yearsExperience: '25+',
  summary:
    'Ejecutivo de tecnología con más de 25 años liderando organizaciones multinacionales en Latinoamérica y Norteamérica, responsable de estrategia tecnológica, arquitectura empresarial, inteligencia artificial, modernización cloud, ciberseguridad y transformación digital para el sector financiero y de gestión de activos. Experiencia asesorando comités ejecutivos y alineando la inversión tecnológica con los objetivos del negocio.',
  languages: [
    { lang: 'Español', level: 'Nativo', bar: 100 },
    { lang: 'Inglés', level: 'Profesional', bar: 90 },
  ],
};

export const heroStats = [
  { value: '25+', label: 'Años de Experiencia' },
  { value: '19M+', label: 'Clientes Soportados' },
  { value: '$100M+', label: 'Presupuesto Gestionado' },
  { value: '200+', label: 'Profesionales Liderados' },
];

export const coreAttributes = [
  'Comunicación Ejecutiva Bilingüe (ES/EN)',
  'Liderazgo en Inteligencia Artificial y Gobierno de IA',
  'Movilidad Internacional (VISA B1/B2 vigente)',
  'Liderazgo en M&A, Fusiones y Startups',
  'Liderazgo Organizacional y Estratégico',
  'Ciberseguridad y Gestión de Riesgo',
];

export const organizations = ['SURA', 'ING Group', 'AXA', 'Santander', 'BBVA', 'Scotiabank'];

export const education = [
  { degree: 'Ingeniería en Sistemas y Telemática', school: 'Universidad Hispanoamericana, México (1998 – 2000)' },
  { degree: 'Licenciatura en Administración de Empresas', school: 'Universidad ETAC – Aliat Universidades, México (2013)' },
];

// --- CORE COMPETENCIES / Métodos y marcos de referencia (Skills page) ---
export const competencyGroups = [
  {
    category: 'Estrategia y Gobierno de TI',
    icon: '🎯',
    skills: [
      'Estrategia Tecnológica y Transparencia Financiera de TI',
      'Gobierno de TI y Gobierno de IA',
      'Gartner IT Score, Benchmarks & Priorities Navigator',
      'Digital Ambition Framework',
    ],
  },
  {
    category: 'Ciberseguridad y Riesgo',
    icon: '🛡️',
    skills: [
      'Ciberseguridad y Gestión de Riesgos',
      'AI TRiSM',
      'Superficie de Ataque, SOC, CTI, CTH',
      'Marco de Seguridad de la Información',
    ],
  },
  {
    category: 'Cloud y Arquitectura Empresarial',
    icon: '☁️',
    skills: [
      'Arquitectura Empresarial',
      'Cloud Strategy Cookbook',
      'Roadmap Toolkit & Maturity Model',
      'DAMA – DMBOK',
    ],
  },
  {
    category: 'Innovación y Transformación Digital',
    icon: '📊',
    skills: [
      'Inteligencia Artificial (AI Opportunity Radar)',
      'Fusion Teams',
      'MIT Digital Transformation Pillars',
      'Delivery Frameworks / Accenture ITOM',
    ],
  },
];

// --- PROFESSIONAL EXPERIENCE (Experience page) ---
export const experience = [
  {
    period: 'Feb 2023 – Jul 2026',
    role: 'Director de Servicios Tecnológicos – Deputy CTO',
    company: 'SURA Asset Management México – AFORE SURA',
    location: 'Ciudad de México',
    current: false,
    details: [
      'Rediseño del modelo operativo de TI y liderazgo transformacional de arquitectura empresarial, SecOps, ITOps, infraestructura OnPremise/Cloud, DevSecOps y analítica avanzada, con un equipo de ~200 colaboradores y presupuesto de 30M USD.',
      'Alineación al negocio en el desarrollo y despliegue de 4 casos de uso de IA (RAG para asesoría pensional, análisis de mercados alternativos, copilots y agentes de productividad), aportando a la gestión de portafolios de 200+M USD AuMs.',
      'Reducción del 85% en incidencias operativas del Core Legacy y optimización del 90% en tiempos de respuesta, contención y resolución.',
      'Diseño y despliegue de la estrategia de adopción cloud (J2C) para modernizar las cargas de trabajo del Core Legacy, con eficiencias de 7-9% en renegociación de contratos.',
    ],
  },
  {
    period: 'Mar 2021 – Ene 2023',
    role: 'Head Corporativo de Servicios Tecnológicos',
    company: 'SURA Asset Management',
    location: 'Medellín, Colombia',
    current: false,
    details: [
      'Desarrollo estratégico de tecnología corporativa para SURA Asset Management (Grupo SURA), con operación en 6 países de LatAm.',
      'Negociaciones con Microsoft, Salesforce, IBM, AWS, Google, BlackRock y Oracle, entre otros, logrando 7%+ de optimización de costos a nivel regional.',
      'Apoyo consultivo estratégico y táctico a las filiales de Chile, Perú, Uruguay, Colombia, México, El Salvador y Estados Unidos (RIA).',
    ],
  },
  {
    period: 'Ago 2018 – Mar 2021',
    role: 'Corporate Information Risk Manager & Security Officer (CISO & IRM)',
    company: 'SURA Asset Management',
    location: 'Medellín, Colombia',
    current: false,
    details: [
      'Creación y despliegue del Marco de Seguridad de la Información y Ciberseguridad v1 a nivel corporativo y regional, mitigando un apetito de riesgo de 50+M USD en incidencias potenciales.',
      'Evaluación y contratación de servicios de ciberseguridad (SOC, CTI, CTH, gestión de superficie de ataque) con proveedores como Deloitte, IBM, Microsoft y ETEK.',
      'Creación del Centro de Excelencia de Ciberseguridad regional de SURA Asset Management.',
    ],
  },
  {
    period: 'Feb 2011 – Ago 2018',
    role: 'Director / Subdirector Regional Tecnología y Operaciones',
    company: 'SURA Asset Management',
    location: 'Medellín, Colombia',
    current: false,
    details: [
      'Creación y desarrollo estratégico de la tecnología corporativa de SURA Asset Management tras la adquisición de ING Group.',
      'Transición de contratos y negociaciones con Microsoft, Salesforce, IBM, Telmex-Claro y SAP.',
      'Implementación de la operación tecnológica corporativa y plataformas transversales (SAP ERP, SuccessFactors, Teradata BI).',
    ],
  },
  {
    period: '2003 – 2010',
    role: 'Liderazgo en Tecnología y Seguridad de la Información — Trayectoria Inicial',
    company: 'ING LATAM · ING México · Calasis · ING Seguros Comercial América',
    location: 'México',
    current: false,
    details: [
      'Subdirector de Tecnología Regional, ING LATAM (2010).',
      'Subdirector de Seguridad Informática y Proyectos, ING México (2009 – 2010).',
      'Gerente de Riesgo Informático (IRM), ING México (2006 – 2009).',
      'Gerente de Consultoría en Seguridad Informática, Calasis (2005 – 2006); Consultor Especialista en Seguridad Informática, ING Seguros Comercial América (2003 – 2005).',
    ],
  },
];

// --- KEY ACHIEVEMENTS (Achievements page) ---
export const achievements = [
  { metric: '25+', label: 'Años Liderando Equipos y Tecnología Empresarial', context: 'Trayectoria en LatAm', color: 'from-blue-500 to-blue-700' },
  { metric: '19M+', label: 'Clientes Soportados', context: 'SURA Asset Management', color: 'from-slate-500 to-slate-700' },
  { metric: '$100M+', label: 'Presupuesto Tecnológico Gestionado', context: 'USD, a nivel regional', color: 'from-sky-500 to-sky-700' },
  { metric: '200+', label: 'Profesionales de Tecnología Liderados', context: 'SURA AFORE México', color: 'from-blue-600 to-slate-700' },
  { metric: '85%', label: 'Reducción de Incidencias del Core Legacy', context: 'SURA AFORE México', color: 'from-cyan-600 to-blue-700' },
  { metric: '90%', label: 'Optimización en Respuesta y Resolución', context: 'SURA AFORE México', color: 'from-slate-600 to-blue-800' },
  { metric: '$50M+', label: 'Riesgo de Ciberseguridad Mitigado', context: 'SURA Asset Management', color: 'from-blue-700 to-slate-800' },
  { metric: '$200M+', label: 'AuMs Impactados por Casos de Uso de IA', context: 'SURA AFORE México', color: 'from-sky-600 to-slate-700' },
  { metric: '7-9%', label: 'Eficiencias en Contratos y Licenciamiento', context: 'Negociaciones Regionales', color: 'from-slate-500 to-blue-700' },
];

// --- FORMACIÓN EJECUTIVA (Certifications page) ---
export const certifications = [
  { name: 'Gartner', full: 'CIO Executive Program', org: 'Gartner, 2022 – 2023' },
  { name: 'IPADE', full: 'Programa de Liderazgo Ejecutivo', org: 'IPADE, 2023 – 2026' },
  { name: 'PLENIA', full: 'Programa de Liderazgo Ejecutivo', org: 'PLENIA, 2023 – 2026' },
  { name: 'CISO LAB', full: 'Deloitte CISO LAB', org: 'Deloitte, 2018' },
  { name: 'Design Thinking', full: 'Innovación y Design Thinking', org: 'Designit, 2017' },
];
