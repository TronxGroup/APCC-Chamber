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
    lo
