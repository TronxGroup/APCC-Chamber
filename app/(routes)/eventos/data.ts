// app/(routes)/eventos/data.ts

export type SponsorRole = 'Produce' | 'Organiza' | 'Patrocina' | 'Auspicia' | 'Coorganiza';

export type Sponsor = {
  name: string;
  logo: string;
  role?: SponsorRole;
};

export type EventMode =
  | 'Webinar'
  | 'Seminario'
  | 'Rueda de Negocios'
  | 'Misión'
  | 'Foro'
  | 'Mesa de Trabajo'
  | 'Desayuno';

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  time?: string;
  mode: EventMode;
  location: string;
  poster: string;
  summary: string;
  guests: string[];
  sponsors?: Sponsor[];
  membersOnly?: boolean;
  agenda?: { time: string; topic: string; speaker?: string }[];
  description?: string;
  ended?: boolean;
};

// ------------------------------------------------------------
// ORDEN: DE MÁS NUEVO → MÁS ANTIGUO
// ------------------------------------------------------------

export const EVENTS: EventItem[] = [
  // 1) 12–15 Ene 2026 · Misión (PRÓXIMO)
  {
    slug: '2026-01-mision-baby-stationery-toys',
    title:
      'Misión comercial: Baby Products, Stationery and School Supplies & Toys and Games',
    date: '12–15 Ene 2026',
    mode: 'Misión',
    location: 'Presencial',
    poster: '/events/posters/2026-01-mision-baby-stationery-toys.jpg',
    summary:
      'Reúne a empresas del sector infantil, escolar y de entretenimiento para conectar con fabricantes, distribuidores y marcas.',
    guests: ['HKTDC', 'APCC', 'HKLABA'],
    sponsors: [
      { name: 'HKTDC', logo: '/sponsors/hktdc.png', role: 'Organiza' },
      { name: 'APCC', logo: '/sponsors/apcc.png', role: 'Patrocina' },
      { name: 'HKLABA', logo: '/sponsors/hklaba.png', role: 'Patrocina' },
      { name: 'Empresas SURA', logo: '/sponsors/sura.png', role: 'Patrocina' },
      { name: 'Global66', logo: '/sponsors/global66.png', role: 'Patrocina' },
      { name: 'Huawei', logo: '/sponsors/huawei.png', role: 'Patrocina' },
    ],
    description:
      'Misión comercial para empresas interesadas en productos para bebés, papelería, útiles escolares, juguetes y juegos. Incluye visitas a ferias y reuniones B2B.',
  },

  // 2) 10 Dic 2025 · Desayuno (REALIZADO)
  {
    slug: '2025-12-desayuno-negocios-turismo-huawei',
    title: 'Reunión Desayuno de Negocios Sector Turismo Empresarial',
    date: '10 Dic 2025',
    time: '09:30',
    mode: 'Desayuno',
    location: 'Merced 230, Cámara Nacional de Comercio',
    poster: '/events/posters/2025-12-desayuno-negocios-turismo.jpg',
    summary:
      'Desayuno junto a Huawei para explorar oportunidades de negocios entre China y América Latina y fortalecer lazos comerciales.',
    guests: [
      'Sr. Álvaro Echeverría — APCC / HKTDC',
      'Javier Arellano — B2B2C Manager Cono Sur, Huawei',
    ],
    sponsors: [
      { name: 'APCC', logo: '/sponsors/apcc.png', role: 'Organiza' },
      { name: 'Huawei', logo: '/sponsors/huawei.png', role: 'Organiza' },
      { name: 'HKLABA', logo: '/sponsors/hklaba.png', role: 'Coorganiza' },
      { name: 'HKTDC', logo: '/sponsors/hktdc.png', role: 'Patrocina' },
      { name: 'CNC', logo: '/sponsors/cnc.png', role: 'Patrocina' },
    ],
    agenda: [
      { time: '09:30', topic: 'Acreditación y bienvenida' },
      { time: '09:40', topic: 'Panorama China–LatAm para turismo empresarial', speaker: 'Huawei' },
      { time: '10:00', topic: 'Estrategias digitales para empresas del rubro' },
      { time: '10:20', topic: 'Casos APCC y oportunidades 2025–2026', speaker: 'APCC' },
      { time: '10:40', topic: 'Networking y café' },
    ],
    membersOnly: false,
    ended: true,
    description:
      'Encuentro junto a Huawei para explorar nuevas oportunidades comerciales entre China y América Latina y fortalecer lazos globales.',
  },

  // 3) 02–03 Dic 2025 · Foro (SOCIOS, REALIZADO)
  {
    slug: '2025-12-hong-kong-forum-26',
    title: '26º Hong Kong Forum (HKLABA · Federation)',
    date: '02–03 Dic 2025',
    time: 'Programa de 2 días',
    mode: 'Foro',
    location: 'HKCEC – Hong Kong Convention and Exhibition Centre',
    poster: '/events/posters/2025-12-hk-forum-26.jpg',
    summary:
      'Evento anual insignia de la Federation (49 asociaciones, 38 países). Keynotes, paneles, networking y programa de visitas.',
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
    ended: true,
    description:
      'Foro exclusivo para socios corporativos. Conferencias magistrales, paneles, networking y visitas estratégicas.',
  },

  // 4) 07 Nov 2025 · Seminario (FINALIZADO → marcado)
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
      'Panorama de negocios, financiamiento y acceso a mercados en Hong Kong/China/Asia-Pacífico. Casos y herramientas prácticas para empresas chilenas.',
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
    ended: true,
  },

  // 5) 21 Oct 2025 · Mesa de Trabajo (FINALIZADO → marcado)
  {
    slug: '2025-10-mesa-logistica-comercio-asia',
    title:
      'Mesa de Trabajo de Logística: Desafíos y Oportunidades de Comercio Exterior hacia Asia Pacífico',
    date: '21 Oct 2025',
    time: '09:30–12:00',
    mode: 'Mesa de Trabajo',
    location: 'Hotelll Sheraton Santiago, Av. Sta. María 1742, Providencia, Chile',
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
    ended: true,
  },

  // 6) 07 Oct 2025 · Webinar (FINALIZADO)
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
      'Oportunidades en las ferias de enero 2026 en Hong Kong y Shenzhen. Categorías y detalles de misión comercial.',
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
    ended: true,
  },
];

export function getEventBySlug(slug: string) {
  return EVENTS.find((e) => e.slug === slug);
}

export function getAllSlugs() {
  return EVENTS.map((e) => e.slug);
}
