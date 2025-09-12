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
  // Ejemplo (reemplaza/mezcla con tus eventos reales)
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
  // ... agrega aquí el resto de tus eventos
];

export function getEventBySlug(slug: string) {
  return EVENTS.find((e) => e.slug === slug);
}

export function getAllSlugs() {
  return EVENTS.map((e) => e.slug);
}
