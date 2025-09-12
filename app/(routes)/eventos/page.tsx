import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Eventos',
  description:
    'Calendario de eventos APCC: exclusivo para socios. Webinars, seminarios, ruedas de negocios y misiones a Asia.',
};

type Sponsor = { name: string; logo: string }; // ruta en /public/sponsors/*
type EventItem = {
  slug: string;
  title: string;
  date: string;          // ISO o legible (ej: "12 Nov 2025")
  time?: string;         // "09:00–11:00 (GMT-3)"
  mode: 'Webinar' | 'Seminario' | 'Rueda de Negocios' | 'Misión';
  location: string;      // "Online" o dirección
  poster: string;        // /public/events/posters/*
  summary: string;
  guests: string[];      // invitados/ponentes
  sponsors?: Sponsor[];
  membersOnly?: boolean; // marcar si es solo socios
};

const UPCOMING: EventItem[] = [
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
  },
  {
    slug: 'ene-2026-webinar-logistica-lunar-nuevo-ano',
    title: 'Webinar: Logística Pre Año Nuevo Chino (capacidad, tarifas y timing)',
    date: '14 Ene 2026',
    time: '09:00–10:30 (GMT-3)',
    mode: 'Webinar',
    location: 'Online (Zoom)',
    poster: '/events/posters/2026-01-logistica-anc.jpg',
    summary:
      'Cómo planificar inventarios y embarques frente a cierres de fábricas y peak de tarifas; checklist operativo.',
    guests: ['Forwarder HK', 'Operador Portuario CL'],
    sponsors: [
      { name: 'Andes Logistics', logo: '/sponsors/andeslogistics.png' },
      { name: 'PackLab', logo: '/sponsors/packlab.png' },
    ],
    membersOnly: true,
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
    guests: ['HK Standards Unit', 'SAG/ProChile'],
    sponsors: [{ name: 'PackLab', logo: '/sponsors/packlab.png' }],
    membersOnly: true,
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
      'Acuerdos de compra, NDA, tooling, moldes y protección de marca/diseño. Cláusulas críticas y resolución de disputas.',
    guests: ['Estudio Legal HK', 'OMPI LatAm'],
    sponsors: [{ name: 'Pacific Bank', logo: '/sponsors/pacificbank.png' }],
    membersOnly: true,
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
  },
];

// Pasados (puedes mantener los tuyos)
const PAST: EventItem[] = [
  {
    slug: 'webinar-embalajes-2025',
    title: 'Webinar: Embalajes y Normativas para Exportar a Asia',
    date: '21 Ago 2025',
    mode: 'Webinar',
    location: 'Online',
    poster: '/events/posters/webinar-embalajes.jpg',
    summary: 'Requisitos técnicos, etiquetado y estándares por mercado. Q&A con especialistas.',
    guests: ['Lucía Wong (HK Standards)', 'Carlos Silva (QA Export)'],
    sponsors: [{ name: 'PackLab', logo: '/sponsors/packlab.png' }],
    membersOnly: true,
  },
  {
    slug: 'networking-food-2025',
    title: 'Networking Sectorial: Alimentos & Bebidas',
    date: '30 Jul 2025',
    mode: 'Rueda de Negocios',
    location: 'APCC, Santiago',
    poster: '/events/posters/networking-food.jpg',
    summary: 'Ruedas temáticas y pitches de proveedores verificados. Conexiones rápidas y seguimiento.',
    guests: ['Consorcio Food LatAm', 'Compradores Horeca'],
    sponsors: [{ name: 'ColdChain CL', logo: '/sponsors/coldchain.png' }],
    membersOnly: true,
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-red-900/60 bg-red-900/10 px-2 py-0.5 text-[11px] font-medium text-red-300">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <section className="container py-16">
      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Eventos APCC</h1>
        <p className="mt-3 text-neutral-300">
          Webinars, seminarios, ruedas de negocios y misiones a Asia diseñados para generar <strong>valor real</strong> a nuestros socios.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Badge>Exclusivo para socios</Badge>
          <span className="text-sm text-neutral-500">
            ¿Aún no eres socio?{' '}
            <Link href="/membresias" className="underline underline-offset-4 hover:text-neutral-200">Revisa los planes</Link>
            {' '}o{' '}
            <Link href="https://join.asiapacific-chamber.com" target="_blank" className="underline underline-offset-4 hover:text-neutral-200">
              súmate ahora
            </Link>.
          </span>
        </div>
      </header>

      {/* PRÓXIMOS EVENTOS */}
      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Próximos eventos</h2>
          <div className="text-sm text-neutral-400">Calendario 2025–2026</div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {UPCOMING.map((ev) => (
            <article key={ev.slug} className="group rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden flex flex-col">
              {/* Afiche vertical (subí la altura) */}
              <div className="relative h-80 bg-neutral-800">
                <img
                  src={ev.poster}
                  alt={`Afiche ${ev.title}`}
                  className="h-80 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-3 top-3 flex gap-2">
                  <Badge>{ev.mode}</Badge>
                  <Badge>Socios APCC</Badge>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-semibold leading-snug">{ev.title}</h3>
                <div className="mt-1 text-xs text-neutral-400">
                  {ev.date}{ev.time ? ` · ${ev.time}` : ''} · {ev.location}
                </div>
                <p className="mt-3 text-sm text-neutral-300 flex-1">{ev.summary}</p>

                <div className="mt-4">
                  <div className="text-xs uppercase tracking-wider text-neutral-500">Invitados</div>
                  <ul className="mt-1 text-sm text-neutral-300 list-disc pl-5 space-y-1">
                    {ev.guests.map((g) => <li key={g}>{g}</li>)}
                  </ul>
                </div>

                {ev.sponsors && ev.sponsors.length > 0 && (
                  <div className="mt-4">
                    <div className="text-xs uppercase tracking-wider text-neutral-500">Auspiciadores</div>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      {ev.sponsors.map((s) => (
                        <div key={s.name} className="h-8 px-3 rounded-xl border border-neutral-800 bg-neutral-950 grid place-items-center">
                          <img src={s.logo} alt={s.name} className="max-h-6 object-contain opacity-80" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-5 flex gap-3">
                  <Link href="https://join.asiapacific-chamber.com" target="_blank" className="btn btn-primary">
                    Inscribirme (socio)
                  </Link>
                  <Link href="/membresias" className="btn btn-secondary">
                    Quiero ser socio
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EVENTOS PASADOS */}
      <section className="mt-14 border-t border-neutral-800 pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Eventos pasados</h2>
          <div className="text-sm text-neutral-400">Highlights recientes</div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {PAST.map((ev) => (
            <article key={ev.slug} className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden">
              <div className="h-40 bg-neutral-800 overflow-hidden">
                <img
                  src={ev.poster}
                  alt={`Afiche ${ev.title}`}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <Badge>{ev.mode}</Badge>
                  <span className="text-xs text-neutral-500">{ev.date} · {ev.location}</span>
                </div>
                <h3 className="mt-2 text-base font-semibold">{ev.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{ev.summary}</p>

                {ev.sponsors && ev.sponsors.length > 0 && (
                  <div className="mt-3">
                    <div className="text-xs uppercase tracking-wider text-neutral-500">Auspiciadores</div>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      {ev.sponsors.map((s) => (
                        <div key={s.name} className="h-7 px-3 rounded-xl border border-neutral-800 bg-neutral-950 grid place-items-center">
                          <img src={s.logo} alt={s.name} className="max-h-5 object-contain opacity-80" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA archivo/galería de pasados */}
        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">¿Buscas un evento anterior?</h3>
            <p className="mt-1 text-sm text-neutral-400">
              El acceso al material (grabaciones, presentaciones, contactos) es exclusivo para socios APCC.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/membresias" className="btn btn-secondary">Ver membresías</Link>
            <Link href="https://join.asiapacific-chamber.com" target="_blank" className="btn btn-primary">Hazte socio</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
