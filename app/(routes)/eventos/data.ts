// app/eventos/data.ts
export type Sponsor = { name: string; logo: string };
export type EventItem = {
  slug: string;
  title: string;
  date: string;              // "07 Oct 2025" o ISO
  time?: string;             // "17:30–18:30 (CLST)"
  mode: 'Webinar' | 'Seminario' | 'Rueda de Negocios' | 'Misión' | 'Foro';
  location: string;          // "Online (Zoom)" o dirección
  poster: string;            // ruta en /public/events/posters/*
  summary: string;
  guests: string[];
  sponsors?: Sponsor[];
  membersOnly?: boolean;
  agenda?: { time: string; topic: string; speaker?: string }[];
};

export const EVENTS: EventItem[] = [
  // 1) Webinar Informativo Ferias HKTDC
  {
    slug: '2025-10-webinar-ferias-hktdc-toys-baby-stationery',
    title:
      'Webinar Informativo HKTDC: Toys & Games · Baby Products · Stationery & School Supplies',
    date: '07 Oct 2025',
    time: '17:30–18:30 (CLST)',
    mode: 'Webinar',
    location: 'Online (Zoom)',
    poster: '/events/posters/2025-10-webinar-hktdc-toys.jpg',
    summary:
      'Conozca y participe de las oportunidades que ofrecen las ferias de enero 2026 en Hong Kong y Shenzhen. Detalles de categorías, agenda y misión comercial (10–16 ene 2026).',
    guests: ['HKTDC', 'APCC', 'ITT Travel Boutique'],
    sponsors: [
      { name: 'Global66', logo: '/sponsors/global66.png' },
      { name: 'HKLABA', logo: '/sponsors/hklaba.png' },
      { name: 'Empresas SURA', logo: '/sponsors/sura.png' },
      { name: 'Huawei', logo: '/sponsors/huawei.png' },
    ],
    agenda: [
      { time: '17:30', topic: 'Bienvenida & contexto ferias HKTDC', speaker: 'HKTDC' },
      { time: '17:40', topic: 'Toys & Games, Baby Products, Stationery: qué esperar' },
      { time: '18:00', topic: 'Misión comercial 10–16 ene 2026: logística e inscripción', speaker: 'APCC / ITT' },
      { time: '18:20', topic: 'Q&A y próximos pasos' },
    ],
  },

  // 2) Seminario Gratuito: Oportunidades y desafíos para Chile en Hong Kong, China y Asia
  {
    slug: '2025-11-seminario-oportunidades-desafios-asia',
    title:
      'Seminario Gratuito: Oportunidades y desafíos para Chile en Hong Kong, China y Asia',
    date: '07 Nov 2025',
    time: '09:30–12:00',
    mode: 'Seminario',
    location:
      'Auditorio, Costanera Sur 2710, 7550006 Las Condes, Región Metropolitana, Chile',
    poster: '/events/posters/2025-11-seminario-hk-asia.jpg',
    summary:
      'Panorama de negocios, financiamiento y acceso a mercados en Hong Kong/China/APAC. Herramientas prácticas y casos para empresas chilenas.',
    guests: ['HKTDC', 'APCC', 'Scotiabank'],
    sponsors: [
      { name: 'CPC', logo: '/sponsors/cpc.png' },
      { name: 'HKLABA', logo: '/sponsors/hklaba.png' },
      { name: 'Arauco', logo: '/sponsors/arauco.png' },
    ],
    agenda: [
      { time: '09:30', topic: 'Acreditación y bienvenida' },
      { time: '09:40', topic: 'Hong Kong & China: oportunidades 2025–2026', speaker: 'HKTDC' },
      { time: '10:10', top
