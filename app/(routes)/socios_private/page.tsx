// app/(routes)/socios/page.tsx
// Dashboard de la zona exclusiva para socios APCC (sin dependencias externas de iconos)
// - Reemplaza lucide-react por SVGs inline para evitar errores ESM en algunos entornos
// - Mantiene UI: stats, próximos eventos, descargas, asesorías y misiones

'use client';

import { useMemo, useEffect } from 'react';
import Link from 'next/link';

// =====================
// Íconos inline (SVG)
// =====================
import type { SVGProps } from 'react';
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

function CalendarDays(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M16 3v3M8 3v3M3 10h18" />
      <circle cx="8.5" cy="14" r=".6" />
      <circle cx="12" cy="14" r=".6" />
      <circle cx="15.5" cy="14" r=".6" />
      <circle cx="8.5" cy="17" r=".6" />
      <circle cx="12" cy="17" r=".6" />
      <circle cx="15.5" cy="17" r=".6" />
    </svg>
  );
}

function Download(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v12" />
      <path d="M8 11l4 4 4-4" />
      <path d="M4 20h16" />
    </svg>
  );
}

function FileText(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6" />
      <path d="M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function GraduationCap(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 10L12 6 2 10l10 4 10-4z" />
      <path d="M6 12v4c2 1.5 4 2 6 2s4-.5 6-2v-4" />
    </svg>
  );
}

function Mail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  );
}

function ShieldCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function Users2(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="9" r="3" />
      <path d="M15 8a3 3 0 1 1 0 6" />
      <path d="M3 21a6 6 0 0 1 12 0" />
      <path d="M15 21a6 6 0 0 1 6-6" />
    </svg>
  );
}

function Video(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3z" />
    </svg>
  );
}

function Zap(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function CheckCircle2(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </svg>
  );
}

function Rocket(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2c3 0 6 3 6 6 0 5-6 10-6 10S6 13 6 8c0-3 3-6 6-6z" />
      <circle cx="12" cy="8" r="2" />
      <path d="M9 19l-2 3 3-2 1-2" />
    </svg>
  );
}

function Building2(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h2M12 7h2M16 7h2M8 11h2M12 11h2M16 11h2M8 15h2M12 15h2M16 15h2" />
      <path d="M4 21h16" />
    </svg>
  );
}

// =====================
// Simulación de sesión (sustituir por Auth.js/Supabase)
// =====================
const session = {
  user: { name: 'María González', company: 'Importadora Andes', email: 'maria@andes.cl' },
  plan: 'Business' as 'Essential' | 'Business' | 'Corporate',
  validUntil: '2026-08-31',
};

// Mock de próximos eventos (usar tu fuente real)
const upcoming = [
  {
    slug: 'oct-2025-webinar-negociacion-compra-china',
    title: 'Webinar: Negociación Efectiva con Fábricas Chinas',
    date: '15 Oct 2025',
    time: '09:00–10:30 (GMT-3)',
    mode: 'Webinar',
  },
  {
    slug: 'nov-2025-rueda-proveedores-electronica',
    title: 'Rueda de Negocios: Electrónica de Consumo & Accesorios',
    date: '12 Nov 2025',
    time: '15:00–18:00 (GMT-3)',
    mode: 'Rueda de Negocios',
  },
  {
    slug: 'dic-2025-seminario-financiacion-carta-credito',
    title: 'Seminario: Financiamiento, Carta de Crédito y Coberturas',
    date: '10 Dic 2025',
    time: '09:30–12:00 (GMT-3)',
    mode: 'Seminario',
  },
] as const;

// Mock descargas recientes
const recentDownloads = [
  { id: 'rpt-asia-q4', title: 'Reporte Oportunidades Asia–Pacífico Q4', tag: 'Reporte', minPlan: 'Business' },
  { id: 'guia-incoterms', title: 'Guía práctica INCOTERMS 2020', tag: 'Guía', minPlan: 'Essential' },
  { id: 'plantilla-lc', title: 'Plantilla Carta de Crédito (LC)', tag: 'Plantilla', minPlan: 'Business' },
] as const;

// Mock asesorías/misiones
const benefits = {
  advisoryUsed: 0,
  advisoryTotal: session.plan === 'Corporate' ? 2 : session.plan === 'Business' ? 1 : 0,
  missionsBooked: 0,
  missionsGuaranteed: session.plan === 'Corporate' ? 2 : 0,
} as const;

function PlanBadge({ plan }: { plan: 'Essential' | 'Business' | 'Corporate' }) {
  const colors = {
    Essential: 'bg-neutral-800 text-neutral-200 border-neutral-700',
    Business: 'bg-blue-950/40 text-blue-200 border-blue-800',
    Corporate: 'bg-amber-900/30 text-amber-200 border-amber-700',
  } as const;
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${colors[plan]}`}>
      <ShieldCheck className="h-3.5 w-3.5" /> {plan}
    </span>
  );
}

function Stat({ icon: Icon, label, value, hint }: { icon: (p: IconProps) => JSX.Element; label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
      <div className="flex items-center gap-2 text-neutral-400 text-sm">
        <Icon className="h-4 w-4" /> {label}
      </div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {hint && <div className="text-xs text-neutral-500 mt-1">{hint}</div>}
    </div>
  );
}

// =====================
// Pequeños "tests" en runtime (no rompen prod)
// =====================
function runSelfTests() {
  console.assert(Array.isArray(upcoming), 'upcoming debe ser un array');
  console.assert(['Essential', 'Business', 'Corporate'].includes(session.plan), 'plan inválido');
  console.assert(recentDownloads.length > 0, 'debe haber al menos 1 descarga');
}

export default function MembersHome() {
  const { user, plan, validUntil } = session;
  const advisoryLeft = useMemo(() => Math.max(0, benefits.advisoryTotal - benefits.advisoryUsed), []);

  useEffect(() => {
    runSelfTests();
  }, []);

  return (
    <section className="container py-8">
      {/* HEADER */}
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Hola, {user.name.split(' ')[0]} 👋</h1>
          <p className="mt-1 text-neutral-400">{user.company} · membresía activa hasta <span className="text-neutral-300">{validUntil}</span></p>
          <div className="mt-3 flex items-center gap-2">
            <PlanBadge plan={plan} />
            {plan !== 'Essential' && (
              <span className="inline-flex items-center gap-1 text-xs text-neutral-400">
                <Zap className="h-3.5 w-3.5" /> Prioridad en agenda
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <Link href="/eventos" className="btn btn-primary flex items-center gap-2"><CalendarDays className="h-4 w-4"/> Ver calendario</Link>
          <Link href="/socios/descargas" className="btn btn-secondary flex items-center gap-2"><Download className="h-4 w-4"/> Descargas</Link>
        </div>
      </header>

      {/* STATS */}
      <section className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat icon={CalendarDays} label="Próximos eventos" value={`${upcoming.length}`} hint="Este trimestre" />
        <Stat icon={Video} label="Grabaciones" value="12" hint="Biblioteca disponible" />
        <Stat icon={GraduationCap} label="Asesorías restantes" value={`${advisoryLeft}`} hint={plan === 'Essential' ? 'Actualiza a Business' : undefined} />
        <Stat icon={Rocket} label="Misiones" value={`${benefits.missionsBooked}/${benefits.missionsGuaranteed || 0}`} hint={plan === 'Corporate' ? 'Garantizadas' : 'Consulta prioridad'} />
      </section>

      {/* GRID PRINCIPAL */}
      <section className="mt-8 grid xl:grid-cols-3 gap-5">
        {/* Columna 1: Próximos eventos */}
        <div className="xl:col-span-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2"><CalendarDays className="h-5 w-5"/> Próximos eventos</h2>
            <Link href="/eventos" className="text-sm text-neutral-400 hover:text-neutral-200">Ver todo</Link>
          </div>
          <ul className="mt-4 divide-y divide-neutral-800">
            {upcoming.map(ev => (
              <li key={ev.slug} className="py-3 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-neutral-400">{ev.date} · {ev.time}</div>
                  <Link href={`/eventos/${ev.slug}`} className="text-neutral-200 hover:underline font-medium">{ev.title}</Link>
                  <div className="text-xs text-neutral-500">{ev.mode}</div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/eventos/${ev.slug}`} className="btn btn-secondary">Ver detalle</Link>
                  <Link href={`https://join.asiapacific-chamber.com`} target="_blank" className="btn btn-primary">Inscribirme</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 2: Accesos rápidos */}
        <div className="space-y-5">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h3 className="text-base font-semibold flex items-center gap-2"><Download className="h-5 w-5"/> Descargas recientes</h3>
            <ul className="mt-3 space-y-2">
              {recentDownloads.map((f) => (
                <li key={f.id} className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm text-neutral-200">{f.title}</div>
                    <div className="text-xs text-neutral-500">{f.tag} · desde {f.minPlan}</div>
                  </div>
                  <form action={() => {}}>
                    <button className="btn btn-secondary">Descargar</button>
                  </form>
                </li>
              ))}
            </ul>
            <div className="mt-3 text-right">
              <Link href="/socios/descargas" className="text-sm text-neutral-400 hover:text-neutral-200">Ver biblioteca</Link>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h3 className="text-base font-semibold flex items-center gap-2"><Users2 className="h-5 w-5"/> Asesorías</h3>
            {benefits.advisoryTotal > 0 ? (
              <>
                <div className="mt-2 text-sm text-neutral-300">Tienes <span className="font-semibold">{advisoryLeft}</span> de {benefits.advisoryTotal} asesorías disponibles.</div>
                <div className="mt-3 flex gap-2">
                  <Link href="/socios/asesorias" className="btn btn-primary">Agendar</Link>
                  <Link href="/socios/asesorias/historial" className="btn btn-secondary">Historial</Link>
                </div>
              </>
            ) : (
              <div className="mt-2 text-sm text-neutral-400">Tu plan no incluye asesorías. <Link href="/membresias" className="underline">Mejorar plan</Link></div>
            )}
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h3 className="text-base font-semibold flex items-center gap-2"><Building2 className="h-5 w-5"/> Misiones</h3>
            {session.plan === 'Corporate' ? (
              <div className="mt-2 text-sm text-neutral-300 flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Cupo garantizado en <strong>2</strong> misiones/año.</div>
            ) : (
              <div className="mt-2 text-sm text-neutral-400">Prioridad sujeta a cupos. <Link href="/membresias" className="underline">Conocer beneficios</Link></div>
            )}
            <div className="mt-3 flex gap-2">
              <Link href="/socios/misiones" className="btn btn-secondary">Ver misiones</Link>
              <Link href="/recursos" className="btn btn-secondary">Requisitos de viaje</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección inferior: Biblioteca & Notas */}
      <section className="mt-8 grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <h3 className="text-base font-semibold flex items-center gap-2"><FileText className="h-5 w-5"/> Biblioteca destacada</h3>
          <ul className="mt-3 grid sm:grid-cols-2 gap-3">
            {['Checklist QC (AQL)', 'Plantilla NDA bilingüe', 'Guía etiquetado CN/HK', 'Reporte Proveedores Verificados'].map((t,i) => (
              <li key={i} className="rounded-xl border border-neutral-800 bg-neutral-950 p-3 flex items-center gap-2">
                <FileText className="h-4 w-4"/>
                <span className="text-sm text-neutral-300">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-right"><Link href="/socios/descargas" className="text-sm text-neutral-400 hover:text-neutral-200">Explorar todo</Link></div>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <h3 className="text-base font-semibold flex items-center gap-2"><Mail className="h-5 w-5"/> Comunicaciones de la cámara</h3>
          <ul className="mt-3 space-y-2">
            {[
              { title: 'Boletín Oportunidades · Sept', date: '03 Sep', href: '#' },
              { title: 'Convocatoria Misión Guangzhou', date: '28 Ago', href: '#' },
              { title: 'Replay: Logística pre Año Nuevo Chino', date: '14 Ago', href: '#' },
            ].map((n,i) => (
              <li key={i} className="flex items-center justify-between gap-3">
                <div className="text-sm">
                  <div className="text-neutral-200">{n.title}</div>
                  <div className="text-neutral-500 text-xs">{n.date}</div>
                </div>
                <Link href={n.href} className="btn btn-secondary">Ver</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="mt-10 text-xs text-neutral-500">
        ¿Necesitas ayuda? Escríbenos a <a href="mailto:contacto@asiapacific-chamber.com" className="underline">contacto@asiapacific-chamber.com</a>
      </footer>
    </section>
  );
}
