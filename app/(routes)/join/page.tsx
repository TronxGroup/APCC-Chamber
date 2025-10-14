import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { SVGProps } from 'react';
import JoinFormZoho from './JoinFormZoho';

export const metadata: Metadata = {
  title: 'Únete a la Cámara | APCC',
  description:
    'Membresías APCC 2026–2030: Essential, Business y Corporate. Conecta con Asia mediante inteligencia comercial, networking, business matching y acceso a misiones y ferias.',
  openGraph: { title: 'Únete a la Cámara | APCC', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Únete a la Cámara | APCC' },
};

// Íconos inline
const baseIcon = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const Check   = (p: SVGProps<SVGSVGElement>) => (<svg {...baseIcon} {...p}><path d="M20 6L9 17l-5-5" /></svg>);
const Shield  = (p: SVGProps<SVGSVGElement>) => (<svg {...baseIcon} {...p}><path d="M12 3l8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" /></svg>);
const Calendar= (p: SVGProps<SVGSVGElement>) => (<svg {...baseIcon} {...p}><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M16 3v3M8 3v3M3 10h18"/></svg>);
const Rocket  = (p: SVGProps<SVGSVGElement>) => (<svg {...baseIcon} {...p}><path d="M12 2c3 0 6 3 6 6 0 5-6 10-6 10S6 13 6 8c0-3 3-6 6-6z"/><circle cx="12" cy="8" r="2"/></svg>);

// Datos de planes (como los tienes)
const PLANS = [
  { id: 'Essential', name: 'Essential', price: '$200.000 CLP / año', badge: undefined as undefined | 'Recomendado', bullets: [
    'Certificado oficial de socio',
    'Webinars mensuales aplicados (tendencias, aduanas, logística y financiamiento)',
    'Boletín con oportunidades Asia–Pacífico (proveedores, ferias y alertas)',
    '1 participación anual en mesa gremial',
    'Descuentos en cursos y seminarios',
    'Acceso a biblioteca digital con guías, plantillas y checklists',
    'Acceso a grupos segmentados (WhatsApp/Slack) por industria'], foot: 'Ideal para iniciar y validar tus primeras oportunidades con Asia.' },
  { id: 'Business', name: 'Business', price: '$500.000 CLP / año', badge: 'Recomendado' as const, bullets: [
    'Todos los beneficios de “Essential”',
    'Inclusión en directorio oficial (web y catálogos digitales)',
    'Networking exclusivo trimestral (desayunos y rondas de negocio)',
    '1 asesoría anual en comercio exterior (ruta, costos y riesgos)',
    'Prioridad en misiones comerciales a China y Hong Kong',
    'Derecho preferente a exponer en seminarios de la Cámara',
    'Cobertura comunicacional en los medios de la Cámara'], foot: 'La opción recomendada para PYMEs con operación activa y metas de expansión.' },
  { id: 'Corporate', name: 'Corporate', price: '$1.000.000 CLP / año', badge: undefined as undefined | 'Recomendado', bullets: [
    'Todos los beneficios de “Business”',
    'Logo destacado en web, newsletters y eventos',
    '2 asesorías estratégicas/año (marketing internacional, financiamiento y partners en Asia)',
    'Acceso directo a HKLABA y cámaras aliadas (Perú y Bolivia)',
    'Participación garantizada en misiones comerciales (mín. 2/año)',
    'Invitación VIP a foros internacionales (p.ej., Hong Kong Forum)',
    'Copatrocinio de seminarios/webinars con visibilidad de marca'], foot: 'Hecha para impacto regional, posicionamiento y equipos comerciales.' },
] as const;

type JoinSearch = { searchParams?: Record<string, string | string[] | undefined> };

export default function JoinPage({ searchParams }: JoinSearch) {
  const planParam = (searchParams?.plan as string) || 'Business';

  return (
    <section className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HERO (texto blanco, sin oscurecer) */}
<section
  id="join-hero"
  className="apcc-hero relative overflow-hidden w-full min-h-[68vh] md:min-h-[76vh] text-white"
>
  {/* Fondo con imagen full-bleed */}
  <div className="absolute inset-0">
    <Image
      src="/bg_image_apcc_join.png"
      alt="Fondo Join APCC"
      fill
      priority
      quality={90}
      className="object-cover object-center"
      sizes="100vw"
    />
    {/* Overlay transparente real (no lo pisa el patcher) */}
    <div className="absolute inset-0 bg-transparent pointer-events-none" />
  </div>

  {/* Contenido sobre el fondo */}
  <div className="relative z-10">
    <div className="container py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-8 items-end">
        <div className="max-w-4xl">
          <span className="kicker text-xs tracking-[0.14em] uppercase text-white/90 drop-shadow">
            Membresías APCC 2026–2030
          </span>

          <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow">
            Valor real para importar, exportar y <span className="text-red-300">cerrar negocios</span> con Asia
          </h1>

          <p className="mt-4 text-base md:text-lg max-w-2xl text-white/95 drop-shadow">
            Conecta tu empresa con oportunidades concretas: inteligencia comercial, networking sectorial,
            business matching y acceso a misiones y ferias en Asia. ¿Dudas?{' '}
            <Link href="#form" className="underline underline-offset-4 text-red-300 hover:text-red-200">
              Agenda una llamada
            </Link>.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#form" className="btn btn-primary bg-red-500 hover:bg-red-600 border-none text-white">
              Unirme ahora
            </a>
            <a href="#planes" className="btn btn-outline hero-outline border border-red-400 text-red-300 hover:bg-red-400/10">
              Ver planes
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-white/90 drop-shadow">
            <div className="rounded-xl border border-white/20 bg-white/10 p-3 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-red-300" />1 webinar/mes
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-3 flex items-center gap-2">
              <Check className="h-4 w-4 text-red-300" />Mesas sectoriales
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-3 flex items-center gap-2">
              <Rocket className="h-4 w-4 text-red-300" />Misiones a Asia
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-3 flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-300" />Partners verificados
            </div>
          </div>
        </div>

        {/* Tarjeta sticky con resumen y CTA */}
        <div className="lg:justify-self-end w-full lg:max-w-md">
          <div className="sticky top-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-6">
            <h2 className="text-lg font-semibold text-white drop-shadow">Resumen rápido</h2>

            {/* Forzamos blanco, ganando a los overrides globales */}
            <ul className="mt-3 text-sm space-y-2 hero-desc !text-white">
              <li className="flex gap-2 items-start !text-white">
                <Check className="h-4 w-4 text-red-300 mt-0.5" />
                <span className="!text-white">Inteligencia y reportes por industria</span>
              </li>
              <li className="flex gap-2 items-start !text-white">
                <Check className="h-4 w-4 text-red-300 mt-0.5" />
                <span className="!text-white">Networking y rondas de negocio organizadas</span>
              </li>
              <li className="flex gap-2 items-start !text-white">
                <Check className="h-4 w-4 text-red-300 mt-0.5" />
                <span className="!text-white">Acceso a misiones y ferias en Asia</span>
              </li>
            </ul>

            <a
              href="#form"
              className="mt-5 btn btn-primary w-full text-center bg-red-500 hover:bg-red-600 border-none text-white"
            >
              Comenzar inscripción
            </a>
            <p className="mt-3 text-xs text-white/80">Tiempo estimado: 2 minutos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* PLANES */}
      <div id="planes" className="container pb-6">
        <h2 className="text-2xl font-semibold">Conoce las membresías</h2>
        <p className="mt-1 text-neutral-400">Selecciona el plan que mejor calza con tus objetivos.</p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {PLANS.map((p) => (
            <div key={p.id} className={`rounded-2xl border ${p.id==='Business' ? 'border-blue-500/50 ring-1 ring-blue-500/50' : 'border-neutral-800'} bg-neutral-900 p-6 flex flex-col`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.badge && <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-200">{p.badge}</span>}
              </div>
              <div className="mt-1 text-neutral-300">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> {b}</li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href={`/join?plan=${p.id}#form`} className={`btn ${p.id==='Business' ? 'btn-primary' : 'btn-secondary'} w-full`}>Elegir {p.name}</Link>
              </div>
              <div className="mt-3 text-xs text-neutral-500">{p.foot}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FORMULARIO (Client Component con Zoho) */}
      <JoinFormZoho defaultPlan={planParam} />

      {/* FAQ + Agenda llamada (igual a tu diseño actual) */}
      <div className="container py-10">
        <div className="grid md:grid-cols-3 gap-6 text-sm text-neutral-300">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5"><h4 className="font-semibold">¿Puedo cambiar de plan?</h4><p className="mt-2 text-neutral-400">Sí, puedes subir o bajar de plan con aviso previo y ajuste proporcional.</p></div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5"><h4 className="font-semibold">¿Las misiones incluyen pasajes y hotel?</h4><p className="mt-2 text-neutral-400">No. Esos costos son del participante; APCC gestiona agenda, ferias y reuniones.</p></div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5"><h4 className="font-semibold">¿Facturación en Chile?</h4><p className="mt-2 text-neutral-400">Sí, emitimos documentos tributarios conforme a normativa vigente.</p></div>
        </div>
      </div>

      <div id="agenda-call" className="container pb-16">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">¿Aún con dudas?</h3>
            <p className="mt-1 text-sm text-neutral-400">Agenda una llamada de 15 minutos con nuestro equipo.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/agenda" className="btn btn-secondary">Ver disponibilidad</Link>
            <a href="mailto:contacto@asiapacific-chamber.com" className="btn btn-primary">Escribir a APCC</a>
          </div>
        </div>
      </div>
    </section>
  );
}
