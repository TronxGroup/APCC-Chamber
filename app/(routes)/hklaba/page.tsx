import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HKLABA | APCC',
  description:
    'Alianza estratégica entre APCC y la Hong Kong – Latin America Business Association (HKLABA). Beneficios, acceso y cómo integrarse a la Federation of Hong Kong Business Associations Worldwide.',
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
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-900">
          HKLABA: Puente oficial de América Latina con Hong Kong
        </h1>
        <p className="mt-3 text-neutral-800">
          Desde 2019, la <strong>Cámara de Comercio Asia Pacífico (APCC)</strong> integra a la{' '}
          <strong>Hong Kong – Latin America Business Association (HKLABA)</strong>, consolidando una
          alianza única que conecta a nuestra región con la{' '}
          <em>Federation of Hong Kong Business Associations Worldwide</em>. Esta red global reúne a{' '}
          <strong>38 países</strong> y más de <strong>11.000 miembros</strong>, articulando negocios,
          innovación y cooperación internacional.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/membresias" className="btn btn-primary">
            Acceder vía membresía APCC
          </Link>
          <Link href="https://hklaba.vercel.app/" target="_blank" className="btn btn-secondary">
            Sitio oficial HKLABA
          </Link>
        </div>
      </header>

      {/* BENEFICIOS */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
          Beneficios exclusivos para socios APCC
        </h2>
        <p className="mt-2 text-neutral-800 max-w-3xl">
          Al integrarte a APCC obtienes automáticamente acceso a HKLABA y, con ello, a la Federation
          y sus beneficios globales:
        </p>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              t: 'Hong Kong Forum',
              d: 'Participación en el evento insignia de la Federation, con líderes y ejecutivos de todo el mundo.',
            },
            {
              t: 'e-Membership Card',
              d: 'Acceso a descuentos y beneficios en hoteles, restaurantes, compras y ferias en Asia y otros países miembros.',
            },
            {
              t: 'Ferias HKTDC',
              d: 'Ingreso gratuito a las ferias internacionales de Hong Kong Trade Development Council.',
            },
            {
              t: 'Red global de contactos',
              d: 'Empresas, cámaras y organismos de 38 países conectados en un ecosistema único.',
            },
            {
              t: 'Design Gallery & Sourcing',
              d: 'Acceso directo a la HKTDC Design Gallery y a la plataforma hktdc.com Sourcing.',
            },
            {
              t: 'Visibilidad y confianza',
              d: 'Ser parte de una red reconocida abre puertas y valida tu empresa ante contrapartes internacionales.',
            },
          ].map(({ t, d }) => (
            <article
              key={t}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="text-lg font-semibold text-neutral-900">{t}</div>
              <p className="mt-2 text-sm text-neutral-700">{d}</p>
            </article>
          ))}
        </div>

        <p className="mt-4 text-xs text-neutral-600">
          *Todos los beneficios están sujetos a términos y condiciones de la Federation y sus
          partners internacionales.
        </p>
      </section>

      {/* BANNER */}
      <section className="mt-12 rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
        <div className="aspect-[16/6] w-full">
          <img
            src="/2025-sitio-web-apcc-hklaba-map.jpg"
            alt="Federation of Hong Kong Business Associations Worldwide"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* CÓMO ACCEDER */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
          ¿Cómo integrarse a HKLABA vía APCC?
        </h2>
        <ol className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
          {[
            ['Membresía APCC', 'Elige el plan de membresía más adecuado para tu empresa.'],
            ['Validación', 'Confirmamos tu inscripción y los datos de tu organización.'],
            ['Onboarding', 'Te integramos a la comunidad HKLABA y a la Federation.'],
            [
              'Activación',
              'Accedes a perks, foros y networking en Asia y Latinoamérica con acompañamiento APCC.',
            ],
          ].map(([title, desc], idx) => (
            <li
              key={title}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="text-xs uppercase tracking-wider text-neutral-600">
                Paso {idx + 1}
              </div>
              <div className="mt-1 font-semibold text-neutral-900">{title}</div>
              <p className="mt-1 text-neutral-700">{desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/membresias" className="btn btn-primary">
            Ver planes APCC
          </Link>
          <Link href="/contacto" className="btn btn-secondary">
            Hablar con un asesor
          </Link>
        </div>
      </section>

      {/* TEXTO INSTITUCIONAL */}
      <section className="mt-12">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
          <p className="text-neutral-800">
            Gracias a esta integración, <strong>HKLABA</strong> es la única voz oficial de América
            Latina dentro de la Federation. Esto fortalece la misión de la APCC de impulsar la
            internacionalización, facilitar exportaciones e incrementar la presencia de nuestros
            socios en Hong Kong y Asia–Pacífico.
          </p>
          <p className="mt-3 text-neutral-800">
            <strong>Un solo ecosistema. Una visión compartida:</strong> conectar América Latina con
            Asia mediante una red empresarial global.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
          Preguntas frecuentes
        </h2>
        <div className="mt-6 space-y-3">
          {[
            [
              '¿Debo ser socio APCC para acceder a HKLABA?',
              'Sí. El acceso a HKLABA y la Federation se gestiona a través de una membresía activa de APCC.',
            ],
            [
              '¿APCC coordina la inscripción al Hong Kong Forum?',
              'Sí. Te guiamos en la postulación, logística de viaje y, si corresponde, articulamos agendas de reuniones.',
            ],
            [
              '¿Los beneficios como descuentos son automáticos?',
              'Algunos requieren códigos o validación previa. La APCC te entrega instrucciones durante tu onboarding.',
            ],
            [
              '¿La membresía tiene costo adicional?',
              'No. Los beneficios de HKLABA y Federation están incluidos en tu plan APCC vigente.',
            ],
            [
              '¿En qué idioma funcionan los eventos?',
              'Mayormente en inglés, con materiales de apoyo y acompañamiento APCC para facilitar la participación.',
            ],
          ].map(([q, a]) => (
            <details
              key={q}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <summary className="font-medium cursor-pointer text-neutral-900">{q}</summary>
              <p className="mt-2 text-sm text-neutral-700">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-12">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
              Integra tu empresa al ecosistema HKLABA con APCC
            </h3>
            <p className="mt-2 text-neutral-700 max-w-2xl">
              Conviértete en parte de la red empresarial que conecta a América Latina con Hong Kong
              y 38 países alrededor del mundo. Te acompañamos en cada paso para aprovechar tus
              beneficios, participar en el Hong Kong Forum y consolidar tu expansión internacional.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/membresias" className="btn btn-primary">
              Hacerse socio
            </Link>
            <Link href="https://hklaba.com/" target="_blank" className="btn btn-secondary">
              Conocer HKLABA
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
