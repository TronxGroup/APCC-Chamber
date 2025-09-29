// app/(routes)/page.tsx (o donde corresponda)
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SupportingLogo } from '@/components/SupportingLogo';
import { PartnerCard } from '@/components/PartnerCard';

export const metadata: Metadata = {
  title: 'APCC — Puente Chile/LatAm–Asia | Inteligencia, Networking y Misiones',
  description:
    'Cámara de Comercio Asia Pacífico (APCC). Plan 2026–2030: inteligencia comercial, networking sectorial, misiones a Hong Kong/China y business matching.',
  alternates: { canonical: 'https://www.asiapacific-chamber.com/' },
  openGraph: {
    title: 'APCC — Puente Chile/LatAm–Asia',
    description: 'Resultados medibles: inteligencia, networking y acceso directo a mercados en Asia.',
    url: 'https://www.asiapacific-chamber.com/',
    siteName: 'APCC',
    images: [{ url: '/og/apcc-home.jpg', width: 1200, height: 630 }],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APCC — Puente Chile/LatAm–Asia',
    description: 'Inteligencia comercial, networking y misiones a Asia.',
    images: ['/og/apcc-home.jpg'],
  },
};

// ------- Nuevos socios (mock) -------
type NewPartner = {
  name: string;
  logo: string;          // ruta en /public
  website: string;
  linkedin?: string;
  instagram?: string;
  x?: string;            // Twitter/X
  blurb: string;
};

const NEW_PARTNERS: NewPartner[] = [
  {
    name: 'Global 66',
    logo: '/partners/corporate_global66.png',
    website: 'https://global66.com/',
    linkedin: 'https://www.linkedin.com/company/alpha',
    instagram: 'https://www.instagram.com/alpha',
    blurb: 'Aliado en soluciones financieras y logísticas para importadores y exportadores.',
  },
  {
    name: 'Empresas Sura',
    logo: '/partners/corporate_sura.png',
    website: 'https://www.sura.com/',
    x: 'https://x.com/grupobeta',
    blurb: 'Referente regional en seguros y gestión de riesgos, con foco en sostenibilidad y certificaciones.',
  },
  {
    name: 'Huawei',
    logo: '/partners/corporate_huawei.png',
    website: 'https://www.huawei.com/mx/',
    linkedin: 'https://www.linkedin.com/company/gamma',
    blurb: 'Líder en innovación tecnológica y conectividad, con soluciones industriales para la región andina.',
  },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
<section
  id="inicio"
  className="apcc-hero relative overflow-hidden w-full min-h-[68vh] md:min-h-[76vh]"
>
  {/* Fondo con imagen full-bleed */}
  <div className="absolute inset-0">
    <Image
      src="/bg_image_apcc_home.png"
      alt="Fondo APCC"
      fill
      priority
      quality={90}
      className="object-cover object-center"
      sizes="100vw"
    />
    {/* Overlay gradiente: contraste sin tapar la foto */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent pointer-events-none" />
  </div>

  {/* Contenido sobre el fondo */}
  <div className="relative z-10">
    <div className="container py-24 lg:py-32">
      <div className="max-w-4xl">
        <p className="kicker text-xs tracking-[0.14em] uppercase">
          Plan 2026–2030
        </p>
        <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">
          El puente confiable entre Chile/LatAm y Asia Pacífico
        </h1>
        <p className="mt-4 text-base md:text-lg hero-desc max-w-2xl">
          La cámara de comercio más enfocada en <strong>resultados</strong> para
          empresas de Chile y LatAm: inteligencia comercial, networking y acceso
          directo a mercados.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/membresias" className="btn btn-primary">Comparar planes</Link>
          <a href="#beneficios" className="btn btn-outline hero-outline">Ver beneficios</a>
          <Link href="/contacto" className="btn btn-outline hero-outline">Habla con nosotros</Link>
        </div>

        <div className="mt-8 text-sm hero-meta">
          2 misiones comerciales/año · Webinars mensuales · Networking trimestral
        </div>
      </div>
    </div>
  </div>
</section>


      {/* PROOF STRIP */}
      <section className="border-y border-neutral-800 bg-neutral-950/40">
        <div className="container py-6 grid gap-4 md:grid-cols-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-neutral-800 grid place-items-center" aria-hidden>🌏</div>
            <p className="text-neutral-300"><strong>Asia-first:</strong> foco en Hong Kong, China y hubs APAC.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-neutral-800 grid place-items-center" aria-hidden>🤝</div>
            <p className="text-neutral-300"><strong>Business Matching:</strong> proveedores y compradores verificados.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-neutral-800 grid place-items-center" aria-hidden>📈</div>
            <p className="text-neutral-300"><strong>Renovación por valor:</strong> programas medibles y continuos.</p>
          </div>
        </div>
      </section>

      {/* ¿QUÉ HACEMOS? – 2026–2030 */}
      <section id="que-hacemos" className="container py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold">¿Qué hacemos?</h2>
            <p className="mt-3 text-neutral-300 max-w-3xl">
              La <strong>Cámara de Comercio Asia Pacífico (APCC)</strong> impulsa el éxito de importadores, exportadores y empresas
              que buscan crecer en Asia y LatAm. Nuestro <strong>Plan 2026–2030</strong> entrega valor real y constante combinando
              <em> inteligencia comercial</em>, <em>networking</em> y <em>acceso directo a mercados</em>.
            </p>
          </div>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <div className="text-xs uppercase tracking-wider text-neutral-500">Programas</div>
            <h3 className="mt-2 text-lg font-semibold">Mesas de Trabajo (Roundtables)</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Espacios por sector para resolver desafíos comunes, compartir experiencias y generar alianzas de negocio.
            </p>
          </article>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <div className="text-xs uppercase tracking-wider text-neutral-500">Internacionalización</div>
            <h3 className="mt-2 text-lg font-semibold">Misiones Comerciales a Asia</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Dos viajes anuales a ferias y hubs estratégicos (Hong Kong, China, APAC) con agenda curada y reuniones 1:1.
            </p>
          </article>

          <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <div className="text-xs uppercase tracking-wider text-neutral-500">Conexiones</div>
            <h3 className="mt-2 text-lg font-semibold">Business Matching</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Conexión directa con proveedores y compradores verificados de primer nivel para acelerar acuerdos.
            </p>
          </article>
        </div>
      </section>

      {/* SUPPORTING ORGANIZATIONS */}
<section
  id="supporting-orgs"
  className="
    border-y border-neutral-200 dark:border-neutral-800
    bg-neutral-50 dark:bg-neutral-950
  "
>
  <div className="container py-10 md:py-12">
    <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
      Supporting Organizations
    </div>

    <div
      className="
        mt-6
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6
        gap-x-8 gap-y-8
        items-center justify-items-center
      "
    >
      {[
        '/supporters/supporting_logo_1.png',
        '/supporters/supporting_logo_2.png',
        '/supporters/supporting_logo_3.png',
        '/supporters/supporting_logo_4.png',
        '/supporters/supporting_logo_5.png',
        '/supporters/supporting_logo_6.png',
      ].map((src, i) => (
        <SupportingLogo
          key={src}
          src={src}
          alt={`Logo organización patrocinadora ${i + 1}`}
        />
      ))}
    </div>
  </div>
</section>

      {/* MEMBRESÍAS CON VALOR */}
      <section id="membresias-valor" className="container py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Membresías con valor</h2>
          <p className="mt-2 text-neutral-400">
            Ser socio APCC es pertenecer a la <strong>Red Asia Pacífico</strong> y acceder a beneficios exclusivos.
          </p>
        </div>
        <ul className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {[
            'Participación en ferias, webinars y seminarios',
            'Membresía simultánea en HKLABA',
            'Reuniones ejecutivas de orientación',
            'Visibilidad en web, newsletter y directorios',
          ].map((b) => (
            <li key={b} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">{b}</li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/membresias" className="btn btn-primary">Comparar planes</Link>
        </div>
      </section>

      {/* BENEFICIOS TRANSVERSALES */}
      <section id="beneficios" className="container py-16 border-t border-neutral-800">
        <h2 className="text-2xl md:text-3xl font-semibold">Beneficios transversales</h2>
        <p className="mt-2 text-neutral-400 max-w-2xl">Herramientas y espacios que impulsan tus negocios.</p>
        <ul className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {[
            'Biblioteca digital con guías',
            'Grupos por sector',
            'Difusión en web/newsletter',
            'Acceso preferente a misiones',
          ].map((b) => (
            <li key={b} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">{b}</li>
          ))}
        </ul>
      </section>

      {/* GALERÍA DE EVENTOS (4 fotos) */}
      <section id="eventos-fotos" className="container py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Eventos APCC</h2>
            <p className="mt-2 text-neutral-400">Una mirada a nuestras actividades en Chile, Hong Kong y Asia.</p>
          </div>
          <Link href="/eventos" className="text-sm text-neutral-300 hover:text-white">Ver calendario →</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/gallery/event-1.jpg', alt: 'Rueda de negocios APCC' },
            { src: '/gallery/event-2.jpg', alt: 'Misión comercial a China' },
            { src: '/gallery/event-3.jpg', alt: 'Webinar de logística' },
            { src: '/gallery/event-4.jpg', alt: 'Networking sectorial' },
          ].map((img) => (
            <figure key={img.src} className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
              <Image
                src={img.src}
                alt={img.alt}
                width={640}
                height={384}
                className="h-40 md:h-48 w-full object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <figcaption className="p-3 text-xs text-neutral-300">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* NUEVOS SOCIOS */}
      <section id="nuevos-socios" className="container py-14 border-t border-neutral-800">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Nuevos socios</h2>
          <p className="mt-2 text-neutral-400">¡Bienvenidos a la Red Asia Pacífico! Conoce a quienes se suman este mes.</p>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {NEW_PARTNERS.map((p) => <PartnerCard key={p.name} p={p} />)}
        </div>
      </section>

      {/* NUESTRA TRAYECTORIA */}
      <section id="trayectoria" className="container py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Nuestra trayectoria</h2>
        </div>
        <div className="mt-3 grid gap-4">
          <p className="text-neutral-300 max-w-3xl">
            Fundada el <strong>6 de marzo de 2002</strong>, la APCC se ha consolidado como un <strong>hub estratégico</strong> para
            <strong> empresas de Chile y LatAm</strong>. Conectamos la región con Asia mediante relaciones sólidas,
            recursos confiables y oportunidades reales.
          </p>
          <p className="text-neutral-400 max-w-3xl">
            Con el <strong>Plan 2026–2030</strong>, reforzamos ese compromiso: una cámara moderna, digital y enfocada en resultados
            que impulsa la renovación continua de nuestros socios gracias al valor generado año tras año.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container py-16">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">¿Listo para acelerar tu negocio con Asia?</h3>
            <p className="mt-2 text-neutral-400 max-w-2xl">
              Conecta con proveedores confiables, participa en misiones comerciales y aprovecha la Red Asia Pacífico.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/membresias" className="btn btn-primary">Comparar planes</Link>
            <Link href="/contacto" className="btn btn-secondary">Agendar llamada</Link>
          </div>
        </div>
      
{/* Schema.org Organization */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Cámara de Comercio Asia Pacífico (APCC)',
      url: 'https://www.asiapacific-chamber.com/',
      logo: 'https://www.asiapacific-chamber.com/logo.png',
      sameAs: ['https://www.linkedin.com/company/asiapacific-chamber'],
    }),
  }}
/>
</section>
    </>
  );
}
