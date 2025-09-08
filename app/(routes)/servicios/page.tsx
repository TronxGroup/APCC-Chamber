import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios APCC: business matching, misiones comerciales, inteligencia de mercado, mesas de trabajo, difusión y más.',
};

type ServiceItem = {
  title: string;
  summary: string;
  icon?: string; // opcional, ruta en /public/icons/*.svg
  membersOnly?: boolean;
  from?: string; // “Desde …”
  slug?: string; // para futura página /servicios/[slug]
};

const FEATURED: ServiceItem[] = [
  {
    title: 'Business Matching (1:1)',
    summary:
      'Conectamos proveedores verificados de Asia con importadores de Chile/LatAm. Curamos perfiles, coordinamos reuniones y seguimiento.',
    icon: '/icons/matching.svg',
    membersOnly: true,
    from: 'Desde US$ 350 por agenda',
  },
  {
    title: 'Misiones Comerciales a Asia',
    summary:
      'Dos viajes anuales a HK/China con agenda ejecutiva, visitas a ferias y plantas, y apoyo en negociación.',
    icon: '/icons/mision.svg',
    membersOnly: true,
    from: 'Cupo limitado · precio según agenda',
  },
  {
    title: 'Inteligencia Comercial',
    summary:
      'Reportes sectoriales, radar de ferias y estudios a medida para evaluar demanda, márgenes y requisitos.',
    icon: '/icons/inteligencia.svg',
    membersOnly: false,
    from: 'Desde US$ 900 por estudio',
  },
];

const SERVICES: ServiceItem[] = [
  {
    title: 'Mesas de Trabajo (Roundtables)',
    summary:
      'Grupos por sector para resolver desafíos comunes, compartir experiencias y generar alianzas comerciales.',
    icon: '/icons/mesa.svg',
    membersOnly: true,
  },
  {
    title: 'Verificación de Proveedores & QA',
    summary:
      'Validación documental, visita en planta (partner) y checklist de calidad previo al embarque.',
    icon: '/icons/check.svg',
    membersOnly: true,
    from: 'Desde US$ 290 (desk) / visita a cotizar',
  },
  {
    title: 'Asesoría Aduanera & Logística',
    summary:
      'Planificación de costos, Incoterms, seguros, documentación y elección de forwarder/PUERTO ideal.',
    icon: '/icons/logistica.svg',
    membersOnly: false,
  },
  {
    title: 'Gestión de Agenda en Ferias',
    summary:
      'Pre-agendamos reuniones claves y prefiltramos expositores para optimizar tu visita.',
    icon: '/icons/feria.svg',
    membersOnly: true,
    from: 'Paquetes a medida',
  },
  {
    title: 'Difusión & Visibilidad',
    summary:
      'Nota en newsletter, web y RRSS de APCC + presencia en directorio y sello “Miembro APCC”.',
    icon: '/icons/difusion.svg',
    membersOnly: true,
  },
  {
    title: 'Formación Ejecutiva',
    summary:
      'Webinars, seminarios y cursos cortos sobre importación, certificaciones, negociación y e-commerce cross-border.',
    icon: '/icons/educacion.svg',
    membersOnly: false,
  },
  {
    title: 'Softlanding Asia',
    summary:
      'Orientación para abrir operaciones: partner legal/contable, medios de pago, visas de negocios y banca partner.',
    icon: '/icons/softlanding.svg',
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
        <h1 className="text-3xl md:text-4xl font-semibold">Servicios APCC</h1>
        <p className="mt-3 text-neutral-300">
          Soluciones para importar, exportar y escalar con Asia: <strong>business matching</strong>, misiones comerciales,
          <strong> inteligencia de mercado</strong>, mesas de trabajo, <strong>difusión</strong> y más.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Badge>Algunos servicios son exclusivos para socios</Badge>
          <Link href="/membresias" className="btn btn-primary">Ver planes de membresía</Link>
        </div>
      </header>

      {/* DESTACADOS */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Destacados</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {FEATURED.map((s) => (
            <article key={s.title} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                {s.membersOnly && <Badge>Solo socios</Badge>}
              </div>
              <p className="mt-2 text-sm text-neutral-400 flex-1">{s.summary}</p>
              {s.from && <div className="mt-3 text-xs text-neutral-500">{s.from}</div>}
              <div className="mt-5 flex gap-3">
                <Link href="/contacto" className="btn btn-secondary">Solicitar propuesta</Link>
                <Link href="/membresias" className="btn btn-primary">Hacerse socio</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CATÁLOGO COMPLETO */}
      <section className="mt-14 border-t border-neutral-800 pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Catálogo de servicios</h2>
          <Link href="/recursos" className="text-sm text-neutral-300 hover:text-white">Ver recursos →</Link>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <article key={s.title} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">{s.title}</h3>
                {s.membersOnly && <Badge>Solo socios</Badge>}
              </div>
              <p className="mt-2 text-sm text-neutral-400 flex-1">{s.summary}</p>
              {s.from && <div className="mt-3 text-xs text-neutral-500">{s.from}</div>}
              <div className="mt-5 flex gap-3">
                <Link href="/contacto" className="btn btn-secondary">Cotizar</Link>
                <Link href="/membresias" className="btn btn-primary">Ser socio</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Cómo trabajamos</h2>
        <ol className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
          {[
            ['Diagnóstico', 'Entendemos tu objetivo, presupuesto y timing.'],
            ['Curaduría', 'Seleccionamos ferias, partners y oportunidades reales.'],
            ['Ejecución', 'Agenda 1:1, reuniones, materiales y acompañamiento.'],
            ['Seguimiento', 'Resumen ejecutivo, próximos pasos y conexiones adicionales.'],
          ].map(([title, desc], idx) => (
            <li key={title} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <div className="text-xs uppercase tracking-wider text-neutral-500">Paso {idx + 1}</div>
              <div className="mt-1 font-semibold">{title}</div>
              <p className="mt-1 text-neutral-400">{desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SECTORES */}
      <section className="mt-14 border-y border-neutral-800 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Sectores que atendemos</h2>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          {[
            'Alimentos & Bebidas',
            'Electrónica de Consumo',
            'Textil & Calzado',
            'Hogar & Deco',
            'Salud & Belleza',
            'Packaging',
            'Industrial & Herramientas',
            'Logística & Servicios',
          ].map((s) => (
            <li key={s} className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2">{s}</li>
          ))}
        </ul>
      </section>

      {/* FAQ (sin JS: <details>) */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Preguntas frecuentes</h2>
        <div className="mt-6 space-y-3">
          {[
            [
              '¿Necesito ser socio para usar todos los servicios?',
              'Algunos servicios son abiertos (p. ej., formación básica e inteligencia general). Los servicios clave —matching, mesas, misiones— son exclusivos o con tarifas preferentes para socios.',
            ],
            [
              '¿Cómo funciona el business matching?',
              'Levantamos tu perfil, validamos necesidades y curamos proveedores/compradores. Coordinamos reuniones 1:1 y compartimos un informe de seguimiento con próximos pasos.',
            ],
            [
              '¿Ofrecen apoyo en ferias específicas?',
              'Sí. Pre-agendamos reuniones, filtramos expositores, y si corresponde, coordinamos intérprete y visitas a plantas.',
            ],
            [
              '¿Qué plazos manejan para un estudio a medida?',
              'Depende del alcance. Un estudio acotado suele tomar 2–3 semanas; un reporte profundo sectorial, 4–6 semanas.',
            ],
          ].map(([q, a]) => (
            <details key={q} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <summary className="font-medium cursor-pointer">{q}</summary>
              <p className="mt-2 text-sm text-neutral-400">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-14">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">¿Listo para empezar?</h3>
            <p className="mt-2 text-neutral-400 max-w-2xl">
              Cuéntanos tu objetivo y armamos una propuesta concreta con tiempos y entregables.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/contacto" className="btn btn-secondary">Solicitar propuesta</Link>
            <Link href="/membresias" className="btn btn-primary">Ver membresías</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
