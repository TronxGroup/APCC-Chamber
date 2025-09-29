// app/(routes)/eventos/data.ts
export type SponsorRole = 'Produce' | 'Organiza' | 'Patrocina' | 'Auspicia';

export type Sponsor = {
  name: string;
  logo: string;                // ruta en /public/sponsors/*
  role?: SponsorRole;          // Produce | Organiza | Patrocina | Auspicia (opcional)
};

export type EventItem = {
  slug: string;
  title: string;
  date: string;                // Ej: "07 Oct 2025" o rango "02–03 Dic 2025" (mostrar)
  time?: string;               // Ej: "17:30–18:30 (CLST)" o "Programa de 2 días"
  mode: 'Webinar' | 'Seminario' | 'Rueda de Negocios' | 'Misión' | 'Foro' | 'Mesa de Trabajo';
  location: string;            // "Online (Zoom)" o dirección
  poster: string;              // ruta en /public/events/posters/*
  summary: string;             // breve, 1–2 líneas
  guests: string[];            // Entidades invitadas / panelistas
  sponsors?: Sponsor[];        // Logos con rol opcional
  membersOnly?: boolean;       // true si es exclusivo socios
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
      'Oportunidades en las ferias de enero 2026 en Hong Kong y Shenzhen. Categorías, agenda y detalles de misión comercial (10–16 ene 2026).',
    guests: ['HKTDC', 'APCC', 'ITT Travel Boutique'],
    sponsors: [
      { name: 'APCC', logo: '/sponsors/apcc.png', role: 'Produce' },
      { name: 'HKTDC', logo: '/sponsors/hktdc.png', role: 'Organiza' },
      { name: 'Global66', logo: '/sponsors/global66.png', role: 'Auspicia' },
      { name: 'HKLABA', logo: '/sponsors/hklaba.png', role: 'Auspicia' },
      { name: 'Empresas SURA', logo: '/sponsors/sura.png', role: 'Auspicia' },
      { name: 'Huawei', logo: '/sponsors/huawei.png', role: 'Auspicia' },
    ],
    agenda: [
      { time: '17:30', topic: 'Bienvenida y contexto de ferias HKTDC', speaker: 'HKTDC' },
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
      'Panorama de negocios, financiamiento y acceso a mercados en Hong Kong/China/APAC. Casos y herramientas prácticas para empresas chilenas.',
    guests: ['HKTDC', 'APCC', 'Scotiabank'],
    sponsors: [
      { name: 'APCC', logo: '/sponsors/apcc.png', role: 'Produce' },
      { name: 'HKTDC', logo: '/sponsors/hktdc.png', role: 'Organiza' },
      { name: 'CPC', logo: '/sponsors/cpc.png', role: 'Patrocina' },
      { name: 'HKLABA', logo: '/sponsors/hklaba.png', role: 'Patrocina' },
      { name: 'Arauco', logo: '/sponsors/arauco.png', role: 'Auspicia' },
    ],
    agenda: [
      { time: '09:30', topic: 'Acreditación y bienvenida' },
      { time: '09:40', topic: 'Hong Kong & China: oportunidades 2025–2026', speaker: 'HKTDC' },
      { time: '10:10', topic: 'Financiamiento y banca para comercio exterior', speaker: 'Scotiabank' },
      { time: '10:40', topic: 'Casos APCC y herramientas para entrar a APAC', speaker: 'APCC' },
      { time: '11:15', topic: 'Q&A' },
      { time: '11:30', topic: 'Networking' },
    ],
  },

  // 3) 26º Hong Kong Forum (HKLABA · Federation)
  {
    slug: '2025-12-hong-kong-forum-26',
    title: '26º Hong Kong Forum (HKLABA · Federation)',
    date: '02–03 Dic 2025',
    time: 'Programa de 2 días',
    mode: 'Foro',
    location: 'HKCEC – Hong Kong Convention and Exhibition Centre',
    poster: '/events/posters/2025-12-hk-forum-26.jpg',
    summary:
      'Evento anual insignia de la Federation (49 asociaciones, 38 países). Keynotes, paneles, networking y programa de visitas con ejecutivos de Hong Kong y China.',
    guests: [
      'HKTDC',
      'Federation of HK Business Associations Worldwide',
      'HKLABA',
    ],
    sponsors: [
      { name: 'HKLABA', logo: '/sponsors/hklaba.png', role: 'Produce' },
      { name: 'Federation of HKBAW', logo: '/sponsors/federation.png', role: 'Organiza' },
      { name: 'HKTDC', logo: '/sponsors/hktdc.png', role: 'Patrocina' },
    ],
    membersOnly: true,
    agenda: [
      { time: 'Día 1', topic: 'Keynotes y paneles de industria' },
      { time: 'Día 1 (PM)', topic: 'Sesiones de networking y reuniones 1:1' },
      { time: 'Día 2', topic: 'Paneles temáticos y casos de éxito' },
      { time: 'Día 2 (PM)', topic: 'Programa de visitas: infraestructura & ecosistema' },
    ],
  },

  // 4) Mesa de Trabajo de Logística
  {
    slug: '2025-10-mesa-logistica-comercio-asia',
    title:
      'Mesa de Trabajo de Logística: Desafíos y Oportunidades de Comercio Exterior hacia Asia Pacífico',
    date: '21 Oct 2025',
    time: '09:30–12:00',
    mode: 'Mesa de Trabajo',
    location: 'Hotel Sheraton Santiago, Av. Sta. María 1742, Providencia, Chile',
    poster: '/events/posters/2025-10-mesa-logistica.jpg',
    summary:
      '2ª edición con actores clave (Puerto de San Antonio, ZOFRI, HKTDC y APCC). Costos, colaboración y tendencias para optimizar la cadena Chile–Asia.',
    guests: ['Puerto de San Antonio', 'ZOFRI', 'HKTDC', 'APCC'],
    sponsors: [
      { name: 'APCC', logo: '/sponsors/apcc.png', role: 'Produce' },
      { name: 'HKTDC', logo: '/sponsors/hktdc.png', role: 'Organiza' },
      { name: 'ZOFRI', logo: '/sponsors/zofri.png', role: 'Patrocina' },
      { name: 'Puerto de San Antonio', logo: '/sponsors/san-antonio.png', role: 'Auspicia' },
    ],
    agenda: [
      { time: '09:30', topic: 'Acreditación y bienvenida' },
      { time: '09:45', topic: 'Optimización de costos y tiempos logísticos', speaker: 'Puerto de San Antonio' },
      { time: '10:15', topic: 'Oportunidades de colaboración Chile–Asia', speaker: 'ZOFRI' },
      { time: '10:45', topic: 'Herramientas y apoyo para internacionalización', speaker: 'HKTDC' },
      { time: '11:15', topic: 'Tendencias y proyección futura', speaker: 'APCC' },
      { time: '11:45', topic: 'Q&A y networking' },
    ],
  },
];

export function getEventBySlug(slug: string) {
  return EVENTS.find((e) => e.slug === slug);
}

export function getAllSlugs() {
  return EVENTS.map((e) => e.slug);
}
