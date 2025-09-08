import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HKLABA',
  description:
    'Nuestra alianza con la Hong Kong – Latin America Business Association. Beneficios, acceso y cómo participar a través de APCC.',
};

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
      <header className="max-w-4xl">
        <div className="flex items-center gap-2">
          <Badge>Alianza estratégica</Badge>
          <Badge>Hong Kong</Badge>
        </div>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold">HKLABA: Nuestra Alianza con Hong Kong</h1>
        <p className="mt-3 text-neutral-300">
          Desde 2019, la Cámara de Comercio Asia Pacífico (APCC) integra oficialmente a la{' '}
          <strong>Hong Kong – Latin America Business Association (HKLABA)</strong> dentro de su ecosistema institucional.
          HKLABA es la única asociación gremial en América Latina que representa a la región dentro de la{' '}
          <em>Federation of Hong Kong Business Associations Worldwide</em>, una red global con presencia en{' '}
          <strong>38 países</strong> y más de <strong>11.000 miembros</strong>.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/membresias" className="btn btn-primary">Acceder vía membresía APCC</Link>
          <Link href="https://hklaba.com/" target="_blank" className="btn btn-secondary">Sitio oficial HKLABA</Link>
        </div>
      </header>

      {/* BENEFICIOS */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Beneficios para socios APCC</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              t: 'Hong Kong Forum',
              d: 'Participación en el evento empresarial más importante del ecosistema Hong Kong a nivel mundial.',
            },
            {
              t: 'Descuentos & perks',
              d: 'Beneficios en hoteles, restaurantes y ferias en países de Asia vinculados a la red.',
            },
            {
              t: 'Red de contactos',
              d: 'Acceso a empresas, cámaras y organismos de Hong Kong y su ecosistema de negocios.',
            },
            {
              t: 'Inteligencia de primera fuente',
              d: 'Información sobre tendencias, innovación y oportunidades en Asia directamente desde Hong Kong.',
            },
            {
              t: 'Visibilidad y confianza',
              d: 'Pertenecer a una red reconocida facilita reuniones y validación ante contrapartes asiáticas.',
            },
            {
              t: 'Puerta de entrada LatAm → HK',
              d: 'HKLABA es el canal oficial para conectar América Latina con Hong Kong a través de APCC.',
            },
          ].map(({ t, d }) => (
            <article key={t} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="text-lg font-semibold">{t}</div>
              <p className="mt-2 text-sm text-neutral-400">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BANNER / IMAGEN (opcional) */}
      <section className="mt-12 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
        {/* Reemplaza la imagen cuando la tengas en /public/hklaba/banner.jpg */}
        <div className="aspect-[16/6] w-full bg-neutral-900 grid place-items-center">
          <div className="text-center p-6">
            <div className="text-sm text-neutral-400">Federation of Hong Kong Business Associations Worldwide</div>
            <div className="mt-1 text-neutral-300">38 países · 11.000+ miembros</div>
          </div>
        </div>
      </section>

      {/* CÓMO ACCEDER */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">¿Cómo acceder a HKLABA a través de APCC?</h2>
        <ol className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
          {[
            ['Membresía APCC', 'Elige un plan de membresía vigente.'],
            ['Validación', 'Confirmamos tu inscripción y datos de empresa.'],
            ['Onboarding', 'Te integramos a la comunidad HKLABA y sus canales.'],
            ['Activación', 'Te guiamos para aprovechar eventos, perks y networking.'],
          ].map(([title, desc], idx) => (
            <li key={title} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <div className="text-xs uppercase tracking-wider text-neutral-500">Paso {idx + 1}</div>
              <div className="mt-1 font-semibold">{title}</div>
              <p className="mt-1 text-neutral-400">{desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/membresias" className="btn btn-primary">Ver planes APCC</Link>
          <Link href="/contacto" className="btn btn-secondary">Hablar con un asesor</Link>
        </div>
      </section>

      {/* TEXTO INSTITUCIONAL */}
      <section className="mt-12">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8">
          <p className="text-neutral-300">
            Gracias a esta integración, <strong>HKLABA</strong> representa la puerta de entrada oficial de América Latina a Hong Kong,
            fortaleciendo el trabajo de la APCC en su misión de impulsar la internacionalización, las exportaciones y el comercio colaborativo entre regiones.
          </p>
          <p className="mt-3 text-neutral-300">
            <strong>Una sola comunidad. Un solo objetivo:</strong> conectar América Latina con Asia.
          </p>
        </div>
      </section>

      {/* FAQ RÁPIDO */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Preguntas frecuentes</h2>
        <div className="mt-6 space-y-3">
          {[
            [
              '¿Necesito ser socio APCC para acceder a HKLABA?',
              'Sí. La participación en HKLABA se gestiona a través de APCC y está asociada a la membresía vigente.',
            ],
            [
              '¿La APCC gestiona inscripción a eventos como el Hong Kong Forum?',
              'Coordinamos la postulación, orientamos en logística y, si corresponde, articulamos agenda de reuniones.',
            ],
            [
              '¿Los beneficios (descuentos/perks) son automáticos?',
              'Algunos requieren códigos o validación previa. Te entregamos las instrucciones durante el onboarding.',
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
      <section className="mt-12">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Integra tu empresa a HKLABA con APCC</h3>
            <p className="mt-2 text-neutral-400 max-w-2xl">
              Te ayudamos a activar beneficios, preparar tu participación en Hong Kong Forum y conectar con la red correcta.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/membresias" className="btn btn-primary">Hacerse socio</Link>
            <Link href="https://hklaba.com/" target="_blank" className="btn btn-secondary">Conocer HKLABA</Link>
          </div>
        </div>
      </section>
    </section>
  );
}

