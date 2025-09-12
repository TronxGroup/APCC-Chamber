// app/eventos/data.ts
export type Sponsor = { name: string; logo: string };
export type EventItem = {
  slug: string;
  title: string;
  date: string;              // "15 Oct 2025" o ISO
  time?: string;             // "09:00–10:30 (GMT-3)"
  mode: 'Webinar' | 'Seminario' | 'Rueda de Negocios' | 'Misión';
  location: string;          // "Online (Zoom)" o dirección
  poster: string;            // ruta en /public/events/posters/*
  summary: string;
  guests: string[];
  sponsors?: Sponsor[];
  membersOnly?: boolean;
  agenda?: { time: string; topic: string; speaker?: string }[];
};

export const EVENTS: EventItem[] = [
  {
    slug: 'oct-2025-webinar-negociacion-compra-china',
    title: 'Webinar: Negociación Efectiva con Fábricas Chinas (INCOTERMS + QC)',
    date: '15 Oct 2025',
    time: '09:00–10:30 (GMT-3)',
    mode: 'Webinar',
    location: 'Online (Zoom)',
    poster: '/events/posters/2025-10-negociacion-fabricas.jpg',
    summary:
      'Cómo lograr precios sostenibles, calidades estables y entregas a tiempo: tácticas de negociación, INCOTERMS correctos y controles de calidad.',
    guests: ['María Chen (Sourcing HK)', 'Carlos Silva (QA Export)'],
    sponsors: [
      { name: 'HK Trade Hub', logo: '/sponsors/hktradehub.png' },
      { name: 'SeguroTrade', logo: '/sponsors/segurotrade.png' },
    ],
    membersOnly: true,
    agenda: [
      { time: '09:00', topic: 'Apertura & contexto Asia 2025–2026' },
      { time: '09:10', topic: 'INCOTERMS aplicados a importación', speaker: 'María Chen' },
      { time: '09:35', topic: 'QC: AQL, pre-shipment y factory audit', speaker: 'Carlos Silva' },
      { time: '10:00', topic: 'Negociación: precio, MOQ y tiempos' },
      { time: '10:20', topic: 'Q&A y próximos pasos APCC' },
    ],
  },
  {
    slug: 'nov-2025-rueda-proveedores-electronica',
    title: 'Rueda de Negocios: Electrónica de Consumo & Accesorios',
    date: '12 Nov 2025',
    time: '15:00–18:00 (GMT-3)',
    mode: 'Rueda de Negocios',
    location: 'APCC, Santiago / Híbrido',
    poster: '/events/posters/2025-11-rueda-electronica.jpg',
    summary:
      'Matchmaking con proveedores verificados de Shenzhen y Hong Kong. Mesas por categoría, reuniones 1:1 y seguimiento con cotizaciones.',
    guests: ['Delegación Shenzhen Tech', 'Retailers LatAm'],
    sponsors: [{ name: 'Pacific Bank', logo: '/sponsors/pacificbank.png' }],
    membersOnly: true,
    agenda: [
      { time: '15:00', topic: 'Registro y bienvenida' },
      { time: '15:20', topic: 'Pitch proveedores por categoría' },
      { time: '16:00', topic: 'Rondas 1:1 (bloque 1)' },
      { time: '17:00', topic: 'Rondas 1:1 (bloque 2)' },
      { time: '17:50', topic: 'Cierre & próximos pasos' },
    ],
  },
  {
    slug: 'dic-2025-seminario-financiacion-carta-credito',
    title: 'Seminario: Financiamiento, Carta de Crédito y Coberturas de Riesgo',
    date: '10 Dic 2025',
    time: '09:30–12:00 (GMT-3)',
    mode: 'Seminario',
    location: 'Centro de Conferencias, Santiago',
    poster: '/events/posters/2025-12-financiamiento.jpg',
    summary:
      'Estructuras seguras de pago (LC, DP, DA), factoring internacional y seguros de crédito para importadores y exportadores.',
    guests: ['Banco de Desarrollo', 'ASEX Export Finance'],
    sponsors: [
      { name: 'ASEX', logo: '/sponsors/asex.png' },
      { name: 'SeguroTrade', logo: '/sponsors/segurotrade.png' },
    ],
    membersOnly: true,
    agenda: [
      { time: '09:30', topic: 'Panorama de medios de pago' },
      { time: '10:00', topic: 'Carta de crédito: estructura y costos' },
      { time: '10:40', topic: 'Seguro de crédito & cobertura de riesgo' },
      { time: '11:20', topic: 'Casos prácticos + Q&A' },
    ],
  },
  {
    slug: 'ene-2026-webinar-logistica-ano-nuevo-chino',
    title: 'Webinar: Logística pre Año Nuevo Chino (capacidad, tarifas y timing)',
    date: '14 Ene 2026',
    time: '09:00–10:30 (GMT-3)',
    mode: 'Webinar',
    location: 'Online (Zoom)',
    poster: '/events/posters/2026-01-logistica-anc.jpg',
    summary:
      'Planifica inventarios y embarques frente a cierres de fábricas y peak de tarifas; checklist operativo para evitar quiebres.',
    guests: ['Forwarder HK', 'Operador Portuario CL'],
    sponsors: [
      { name: 'Andes Logistics', logo: '/sponsors/andeslogistics.png' },
      { name: 'PackLab', logo: '/sponsors/packlab.png' },
    ],
    membersOnly: true,
    agenda: [
      { time: '09:00', topic: 'Capacidad y tarifas: qué esperar' },
      { time: '09:20', topic: 'Plan de booking y consolidación' },
      { time: '09:45', topic: 'Checklist operativo de bodega y packing' },
      { time: '10:10', topic: 'Q&A' },
    ],
  },
  {
    slug: 'feb-2026-webinar-cumplimiento-normativo-asia',
    title: 'Webinar: Cumplimiento Normativo para Exportar a Asia (etiquetado y estándares)',
    date: '18 Feb 2026',
    time: '09:00–10:30 (GMT-3)',
    mode: 'Webinar',
    location: 'Online (Zoom)',
    poster: '/events/posters/2026-02-normativas-asia.jpg',
    summary:
      'Requisitos clave por mercado (China, HK, SG): etiquetado, certificaciones, fitosanitario y homologaciones.',
    guests: ['HK Standards Unit', 'SAG / ProChile'],
    sponsors: [{ name: 'PackLab', logo: '/sponsors/packlab.png' }],
    membersOnly: true,
    agenda: [
      { time: '09:00', topic: 'Mapa regulatorio por mercado' },
      { time: '09:25', topic: 'Etiquetado y documentación' },
      { time: '09:50', topic: 'Inspecciones y homologaciones' },
      { time: '10:15', topic: 'Q&A y recursos APCC' },
    ],
  },
  {
    slug: 'mar-2026-rueda-alimentos-bebidas',
    title: 'Rueda de Negocios: Alimentos & Bebidas (retail y horeca)',
    date: '12 Mar 2026',
    time: '15:00–18:00 (GMT-3)',
    mode: 'Rueda de Negocios',
    location: 'APCC, Santiago / Híbrido',
    poster: '/events/posters/2026-03-rueda-food.jpg',
    summary:
      'Productores LatAm conectan con distribuidores y compradores asiáticos. Curaduría por categoría y agenda 1:1.',
    guests: ['Consorcio Food LatAm', 'Compradores Horeca'],
    sponsors: [{ name: 'ColdChain CL', logo: '/sponsors/coldchain.png' }],
    membersOnly: true,
    agenda: [
      { time: '15:00', topic: 'Registro + pitches' },
      { time: '15:40', topic: 'Rondas 1:1 (bloque 1)' },
      { time: '16:40', topic: 'Rondas 1:1 (bloque 2)' },
      { time: '17:40', topic: 'Networking & cierre' },
    ],
  },
  {
    slug: 'abr-2026-seminario-contratos-asia-legal',
    title: 'Seminario: Contratos Internacionales y Propiedad Intelectual en Asia',
    date: '09 Abr 2026',
    time: '09:30–12:00 (GMT-3)',
    mode: 'Seminario',
    location: 'Centro de Conferencias, Santiago',
    poster: '/events/posters/2026-04-legal-contratos.jpg',
    summary:
      'Acuerdos de compra, NDA, tooling/moldes y protección de marca/diseño. Cláusulas críticas y resolución de disputas.',
    guests: ['Estudio Legal HK', 'OMPI LatAm'],
    sponsors: [{ name: 'Pacific Bank', logo: '/sponsors/pacificbank.png' }],
    membersOnly: true,
    agenda: [
      { time: '09:30', topic: 'Contratos: estructura esencial' },
      { time: '10:00', topic: 'Propiedad Intelectual en Asia' },
      { time: '10:40', topic: 'Disputas: prevención y salida' },
      { time: '11:20', topic: 'Casos & Q&A' },
    ],
  },
  {
    slug: 'may-2026-webinar-sourcing-plataformas-b2b',
    title: 'Webinar: Sourcing Inteligente y Plataformas B2B (más allá de Alibaba)',
    date: '13 May 2026',
    time: '09:00–10:30 (GMT-3)',
    mode: 'Webinar',
    location: 'Online (Zoom)',
    poster: '/events/posters/2026-05-sourcing-b2b.jpg',
    summary:
      'Encontrar y validar proveedores: catálogos, ferias virtuales, auditorías y herramientas OSINT para due diligence.',
    guests: ['HKLABA', 'Consultor Sourcing CN'],
    sponsors: [{ name: 'HK Trade Hub', logo: '/sponsors/hktradehub.png' }],
    membersOnly: true,
    agenda: [
      { time: '09:00', topic: 'Mapa de plataformas B2B' },
      { time: '09:20', topic: 'Validación y due diligence (OSINT)' },
      { time: '09:45', topic: 'Auditorías y quality gate' },
      { time: '10:10', topic: 'Q&A' },
    ],
  },
  {
    slug: 'jun-2026-rueda-industrial-insumos',
    title: 'Rueda de Negocios: Insumos Industriales y Packaging',
    date: '11 Jun 2026',
    time: '15:00–18:00 (GMT-3)',
    mode: 'Rueda de Negocios',
    location: 'APCC, Santiago / Híbrido',
    poster: '/events/posters/2026-06-rueda-industrial.jpg',
    summary:
      'Conecta con fabricantes de insumos, componentes y packaging. Reuniones 1:1 y pipeline de cotizaciones.',
    guests: ['Cluster Industrial GZ', 'PackLab'],
    sponsors: [{ name: 'Andes Logistics', logo: '/sponsors/andeslogistics.png' }],
    membersOnly: true,
    agenda: [
      { time: '15:00', topic: 'Bienvenida & pitches' },
      { time: '15:30', topic: 'Rondas 1:1 (bloque 1)' },
      { time: '16:30', topic: 'Rondas 1:1 (bloque 2)' },
      { time: '17:30', topic: 'Cierre y seguimiento' },
    ],
  },
  {
    slug: 'jul-2026-mision-deal-making-hk-gz',
    title: 'Misión Comercial Corta: Deal-Making en Hong Kong & Guangzhou',
    date: '08–12 Jul 2026',
    time: 'Agenda curada (5 días)',
    mode: 'Misión',
    location: 'Hong Kong / Guangzhou',
    poster: '/events/posters/2026-07-mision-dealmaking.jpg',
    summary:
      'Visitas a hubs, reuniones ejecutivas y rondas de negociación con soporte local. Cupos limitados (prioridad socios).',
    guests: ['Cámara HKLABA', 'Oficinas de Promoción Regional'],
    sponsors: [{ name: 'AirAsia Cargo', logo: '/sponsors/airasiacargo.png' }],
    membersOnly: true,
    agenda: [
      { time: 'Día 1', topic: 'Briefing + visitas a hubs logísticos' },
      { time: 'Día 2', topic: 'Reuniones ejecutivas (HK)' },
      { time: 'Día 3', topic: 'Traslado a GZ + plantas seleccionadas' },
      { time: 'Día 4', topic: 'Rondas de negociación' },
      { time: 'Día 5', topic: 'Cierre de acuerdos + follow-up' },
    ],
  },
];

export function getEventBySlug(slug: string) {
  return EVENTS.find((e) => e.slug === slug);
}

export function getAllSlugs() {
  return EVENTS.map((e) => e.slug);
}
