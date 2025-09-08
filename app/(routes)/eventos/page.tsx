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
  membersOnly?: boolean; // marcar si es solo socios (default true abajo)
};

const UPCOMING: EventItem[] = [
  {
    slug: 'webinar-logistica-asia-2025',
    title: 'Webinar: Logística y Aduanas para Importar desde Asia 2026',
    date: '15 Oct 2025',
    time: '09:00–10:30 (GMT-3)',
    mode: 'Webinar',
    location: 'Online (Zoom)',
    poster: '/events/posters/webinar-logistica.jpg',
    summary:
      'Buenas prácticas para costos, tiempos y riesgos en importación desde China y Hong Kong. Casos reales y checklist.',
    guests: ['María Chen (Forwarder HK)', 'Juan Pérez (Agente Aduana CL)'],
    sponsors: [
      { name: 'HK Trade Hub', logo: '/sponsors/hktradehub.png' },
      { name: 'Andes Logistics', logo: '/sponsors/andeslogistics.png' },
    ],
    membersOnly: true,
  },
  {
    slug: 'rueda-negocios-electronica',
    title: 'Rueda de Negocios: Electrónica de Consumo 2026',
    date: '28 Oct 2025',
    time: '15:00–18:00 (GMT-3)',
    mode: 'Rueda de Negocios',
    location: 'APCC, Santiago / Híbrido',
    poster: '/events/posters/rueda-electronica.jpg',
    summary:
      'Conecta con proveedores verificados de Shenzhen y Hong Kong. Mesas por categoría y reuniones 1:1 curadas.',
    guests: ['Delegación Shenzhen Tech', 'Retailers LatAm'],
    sponsors: [{ name: 'Pacific Bank', logo: '/sponsors/pacificbank.png' }],
    membersOnly: true,
  },
  {
    slug: 'seminario-financiamiento-exportador',
    title: 'Seminario: Financiamiento para Exportadores a Asia',
    date: '12 Nov 2025',
    time: '09:30–12:00 (GMT-3)',
    mode: 'Seminario',
    location: 'Centro de Conferencias, Santiago',
    poster: '/events/posters/seminario-financiamiento.jpg',
    summary:
      'Instrumentos de cobertura, factoring internacional y cartas de crédito: cómo estructurar operaciones seguras.',
    guests: ['Banco de Desarrollo', 'ASEX Export Finance'],
    sponsors: [
      { name: 'ASEX', logo: '/sponsors/asex.png' },
      { name: 'SeguroTrade', logo: '/sponsors/segurotrade.png' },
    ],
    membersOnly: true,
  },
  {
    slug: 'mision-asia-enero-2026',
    title: 'Misión Comercial a Asia: Hubs en Hong Kong y Guangzhou',
    date: 'Ene 2026',
    time: 'Agenda curada (10 días)',
    mode: 'Misión',
    location: 'Hong Kong / Guangzhou',
    poster: '/events/posters/mision-asia.jpg',
    summary:
      'Visitas a ferias, plantas y centros logísticos + reuniones ejecutivas. Cupos limitados y preferencia socios.',
    guests: ['Cámara HKLABA', 'Oficinas de Promoción Regional'],
    sponsors: [{ name: 'AirAsia Cargo', logo: '/sponsors/airasiacargo.png' }],
    membersOnly: true,
  },
];

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
            ¿Aún no eres socio?
            {' '}
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
              <div className="relative h-44 bg-neutral-800">
                <img
                  src={ev.poster}
                  alt={`Afiche ${ev.title}`}
                  className="h-44 w-full object-cover transition-transform group-hover:scale-105"
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
