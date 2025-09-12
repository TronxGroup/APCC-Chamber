import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Inicio' };

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
    name: 'Compañía Alpha',
    logo: '/partners/alpha-logo.png',
    website: 'https://alpha.example.com',
    linkedin: 'https://www.linkedin.com/company/alpha',
    instagram: 'https://www.instagram.com/alpha',
    blurb: 'Importador con foco en electrónica de consumo y cadena logística optimizada para LatAm.',
  },
  {
    name: 'Grupo Beta',
    logo: '/partners/beta-logo.png',
    website: 'https://beta.example.com',
    x: 'https://x.com/grupobeta',
    blurb: 'Exportador de alimentos con certificaciones y estándares internacionales.',
  },
  {
    name: 'Empresa Gamma',
    logo: '/partners/gamma-logo.png',
    website: 'https://gamma.example.com',
    linkedin: 'https://www.linkedin.com/company/gamma',
    blurb: 'Proveedor B2B con soluciones industriales y garantías de postventa para la región Andina.',
  },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
import Image from "next/image";
import Link from "next/link";

<section id="inicio" className="relative overflow-hidden">
  {/* Fondo con imagen optimizada */}
  <div className="absolute inset-0">
    <Image
      src="/bg_image_apcc_home.png"
      alt="Fondo APCC"
      fill
      priority
      className="object-cover"
    />
    {/* Overlay para dar contraste al texto */}
    <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(153,27,27,0.25),rgba(0,0,0,0)_70%)]" />
  </div>

  {/* Contenido sobre el fondo */}
  <div className="relative container py-24 lg:py-28 z-10">
    <div className="max-w-3xl">
      <p className="text-xs tracking-widest uppercase text-neutral-300">Plan 2026–2030</p>
      <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">
        El puente confiable entre Chile/LatAm y Asia Pacífico
      </h1>
      <p className="mt-4 text-neutral-200 max-w-2xl">
        La cámara de comercio más enfocada en <strong>resultados</strong> para empresas de Chile y LatAm:
        inteligencia comercial, networking y acceso directo a mercados.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/membresias" className="btn btn-primary">Comparar planes</Link>
        <a href="#beneficios" className="btn btn-secondary">Ver beneficios</a>
        <Link href="/contacto" className="btn btn-secondary">Habla con nosotros</Link>
      </div>
      <div className="mt-8 text-sm text-neutral-300">
        2 misiones comerciales/año · Webinars mensuales · Networking trimestral
      </div>
    </div>
  </div>
</section>

      {/* PROOF STRIP */}
      <section className="border-y border-neutral-800 bg-neutral-950/40">
        <div className="container py-6 grid gap-4 md:grid-cols-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-neutral-800 grid place-items-center">🌏</div>
            <p className="text-neutral-300"><strong>Asia-first:</strong> foco en Hong Kong, China y hubs APAC.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-neutral-800 grid place-items-center">🤝</div>
            <p className="text-neutral-300"><strong>Business Matching:</strong> proveedores y compradores verificados.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-neutral-800 grid place-items-center">📈</div>
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
      <section id="supporting-orgs" className="border-y border-neutral-800">
        <div className="container py-10">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Supporting Organizations
          </div>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 items-center">
            {[
              '/supporters/logo-1.png',
              '/supporters/logo-2.png',
              '/supporters/logo-3.png',
              '/supporters/logo-4.png',
              '/supporters/logo-5.png',
              '/supporters/logo-6.png',
            ].map((src, i) => (
              <div
                key={src}
                className="h-12 rounded-xl border border-neutral-800 bg-neutral-900 grid place-items-center px-3"
              >
                <img
                  src={src}
                  alt={`Supporting organization ${i + 1}`}
                  className="max-h-8 object-contain opacity-80"
                  loading="lazy"
                />
              </div>
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
              <img src={img.src} alt={img.alt} className="h-40 md:h-48 w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
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
          {NEW_PARTNERS.map((p) => (
            <article key={p.name} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col">
              <div className="h-14 flex items-center">
                <img src={p.logo} alt={`${p.name} logo`} className="max-h-12 object-contain" />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-neutral-400 flex-1">{p.blurb}</p>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <Link href={p.website} target="_blank" className="text-neutral-300 hover:text-white underline underline-offset-4">
                  Sitio web
                </Link>
                {p.linkedin && <Link href={p.linkedin} target="_blank" className="text-neutral-300 hover:text-white">LinkedIn</Link>}
                {p.instagram && <Link href={p.instagram} target="_blank" className="text-neutral-300 hover:text-white">Instagram</Link>}
                {p.x && <Link href={p.x} target="_blank" className="text-neutral-300 hover:text-white">X</Link>}
              </div>
            </article>
          ))}
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
      </section>
    </>
  );
}

