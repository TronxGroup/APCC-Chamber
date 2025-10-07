// app/(routes)/skills/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'APCC Skills — Curso Oficial: Importa desde China con Éxito',
  description:
    'Aprende a importar desde China de forma segura y rentable. Curso oficial APCC: proveedores confiables, documentación, costos EXW/FOB/CIF/LANDED, negociación y pagos internacionales.',
};

type Lesson = { title: string };
type Module = { title: string; description: string; duration: string; lessons: Lesson[] };

const MODULES: Module[] = [
  {
    title: 'Módulo I: Bienvenida',
    description: 'Razones para elegir China, barreras comunes y cómo superarlas.',
    duration: '55 minutos',
    lessons: [
      { title: 'Lección 1.1: Introducción al curso' },
      { title: 'Lección 1.2: Conoce al profe' },
      { title: 'Lección 1.3: Introducción MTC' },
      { title: 'Lección 1.4: Barreras para importar' },
    ],
  },
  {
    title: 'Módulo II: Sourcing',
    description:
      'Cómo encontrar proveedores confiables: plataformas online, ferias y mercados mayoristas.',
    duration: '30 minutos',
    lessons: [
      { title: 'Lección 2.1: Online' },
      { title: 'Lección 2.2: Feria Cantón' },
      { title: 'Lección 2.3: Ciudades especialistas' },
      { title: 'Lección 2.4: Yiwu: mercados mayoristas' },
    ],
  },
  {
    title: 'Módulo III: Documentación',
    description:
      'Factura, packing list, conocimiento de embarque (BL), certificados de origen y más.',
    duration: '20 minutos',
    lessons: [
      { title: 'Lección 3.1: Factura y packing list' },
      { title: 'Lección 3.2: BL' },
      { title: 'Lección 3.3: Certificados de origen' },
      { title: 'Lección 3.4: Otros' },
    ],
  },
  {
    title: 'Módulo IV: Costeo',
    description:
      'EXW, FOB, CIF y LANDED + cálculo de costos reales (Chile y Perú, FCL vs LCL).',
    duration: '49 minutos',
    lessons: [
      { title: 'Lección 4.1: EXW, FOB, CIF, LANDED' },
      { title: 'Lección 4.2: Costeo Chile FCL vs LCL' },
      { title: 'Lección 4.3: Costeo Perú FCL vs LCL' },
      { title: 'Lección 4.4: Costeo real de una importación' },
      { title: 'Lección 4.5: Notas / resumen' },
    ],
  },
  {
    title: 'Módulo V: Pongamos en práctica',
    description:
      'Casos reales de contacto y negociación para lograr acuerdos exitosos.',
    duration: '1 hora 6 minutos',
    lessons: [
      { title: 'Lección 5.1: Negociación (MTC)' },
      { title: 'Lección 5.2: Ejemplos de contactos con empresas chinas' },
      { title: 'Lección 5.3: Ejemplo 1 de negociación' },
      { title: 'Lección 5.4: Ejemplo 2 de negociación' },
      { title: 'Lección 5.5: Notas de cierre' },
    ],
  },
  {
    title: 'Módulo VI: Búsqueda y selección de proveedores',
    description:
      'Tipos de proveedores, uso de Alibaba y verificación para evitar fraudes.',
    duration: '1 hora 7 minutos',
    lessons: [
      { title: 'Lección 6.1: Búsqueda y selección' },
      { title: 'Lección 6.2: Ejemplo de búsqueda' },
      { title: 'Lección 6.3: Verificación de empresas' },
      { title: 'Lección 6.4: Otras fuentes de información' },
    ],
  },
  {
    title: 'Módulo VII: Pagos internacionales',
    description:
      'Transferencias internacionales seguras y rápidas, flujo de pago y tips.',
    duration: '47 minutos',
    lessons: [
      { title: 'Lección 7.1: Transferencias internacionales' },
      { title: 'Lección 7.2: Flujo de pago' },
      { title: 'Lección 7.3: Q&A… ¡y sorpresa!' },
    ],
  },
];

export default function Page() {
  // Video de demo
  const videoId = 'UM-LHpCjk4I';

  return (
    <section className="container py-16">
      {/* Carga de la API de YouTube y script para pausar al terminar */}
      <Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" />
      <Script id="yt-demo-handler" strategy="afterInteractive">
        {`
          // Evita recrear el player si ya existe (navegación cliente)
          if (typeof window !== 'undefined') {
            window.__APCC_DEMO_INIT__ = window.__APCC_DEMO_INIT__ || false;
          }
          function onYouTubeIframeAPIReady(){
            if (window.__APCC_DEMO_INIT__) return;
            window.__APCC_DEMO_INIT__ = true;
            const player = new YT.Player('yt-demo', {
              videoId: '${videoId}',
              playerVars: {
                rel: 0,
                modestbranding: 1,
                playsinline: 1,
                controls: 1,
                // No autoplay; el usuario decide
                enablejsapi: 1,
              },
              events: {
                onStateChange: (e) => {
                  // Al terminar (estado 0), volver al segundo 0 y pausar
                  if (e.data === YT.PlayerState.ENDED) {
                    e.target.seekTo(0, true);
                    e.target.pauseVideo();
                  }
                }
              }
            });
          }
          // Si la API ya cargó antes de este script:
          if (typeof YT !== 'undefined' && YT.Player && !window.__APCC_DEMO_INIT__) {
            onYouTubeIframeAPIReady();
          }
        `}
      </Script>

      {/* HERO */}
      <header className="max-w-4xl">
        <p className="kicker text-xs tracking-[0.14em] uppercase text-neutral-500">
          APCC Skills · Curso oficial
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">
          Importa desde China con Éxito
        </h1>
        <p className="mt-3 text-[17px] leading-relaxed text-neutral-700">
          Crea tu camino como importador seguro, eficiente y rentable. El curso
          100% online del área <strong>APCC Skills</strong> reúne más de{' '}
          <strong>20 años de experiencia</strong> formando a{' '}
          <strong>8.000+</strong> alumnos. Versión actualizada, material descargable
          y ejemplos reales para que aprendas a tu ritmo.
        </p>

        {/* Datos rápidos */}
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <div className="text-xs uppercase tracking-wider text-neutral-500">Duración</div>
            <div className="mt-1 text-lg font-semibold">5 h · 36 min</div>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <div className="text-xs uppercase tracking-wider text-neutral-500">Precio</div>
            <div className="mt-1 text-lg font-semibold">$197.000 CLP</div>
            <div className="text-xs text-[var(--apcc-accent)]">
              Lanzamiento −70% · Oct 2025: <strong>$59.100</strong>
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <div className="text-xs uppercase tracking-wider text-neutral-500">Modalidad</div>
            <div className="mt-1 text-lg font-semibold">100% online · On demand</div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href="https://hotmart.com/en/club/apcc-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Inscribirme en Hotmart
          </Link>
          <a href="#temario" className="btn btn-outline">Ver temario</a>
        </div>
      </header>

      {/* VIDEO DEMO */}
      <section className="mt-12">
        <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white aspect-video">
          {/* Contenedor donde YouTube API monta el reproductor */}
          <div id="yt-demo" className="h-full w-full" />
        </div>
      </section>

      {/* QUÉ APRENDERÁS */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">¿Qué aprenderás?</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 text-[15px] text-neutral-700">
          {[
            'Cómo prepararte para importar y superar barreras comunes.',
            'Encontrar y verificar proveedores confiables (Alibaba, ferias, ciudades especialistas).',
            'Documentación clave: factura, packing list, BL y certificados.',
            'Costear con precisión: EXW, FOB, CIF y LANDED (ejemplos Chile y Perú).',
            'Negociar con proveedores chinos con casos reales y guiones.',
            'Evitar fraudes y reducir riesgos en todo el proceso.',
            'Pagos internacionales seguros y ágiles (flujo recomendado).',
            'Material descargable (plantillas Excel) para tus cálculos.',
          ].map((item) => (
            <li key={item} className="bg-white border border-neutral-200 rounded-xl p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* TEMARIO */}
      <section id="temario" className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Temario del curso</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {MODULES.map((m, idx) => (
            <details
              key={m.title}
              className="rounded-2xl border border-neutral-200 bg-white p-5"
              open={idx < 2}
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold">{m.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{m.description}</p>
                  </div>
                  <span className="text-xs rounded-full border border-neutral-200 px-2 py-0.5 text-neutral-600">
                    {m.duration}
                  </span>
                </div>
              </summary>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {m.lessons.map((l) => (
                  <li key={l.title} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{l.title}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      {/* INSTRUCTORES */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Tus instructores</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            {
              name: 'Daniel Birke',
              role: 'Empresario · Comercial Globex',
              photo: '/skills/teachers/daniel_apcc_skills.jpg',
              bio: 'Más de 10 años enseñando en APCC. Importador activo: viaja, compra y negocia en China. Casos reales aplicables a Chile y Perú.',
            },
            {
              name: 'Francisco Orellana',
              role: 'Consultor · Verificación de proveedores',
              photo: '/skills/teachers/fco_apcc_skills.jpg',
              bio: '20+ años en comercio internacional. Experto en due diligence de empresas en China/Asia. Vivió 2 años en Japón.',
            },
            {
              name: 'Rodrigo Lama',
              role: 'Chief Business Officer · Global66',
              photo: '/skills/teachers/rodrigo_apcc_skills.jpg',
              bio: 'Emprendedor e e-commerce regional. Experto en pagos internacionales y optimización de transferencias.',
            },
          ].map((t) => (
            <article key={t.name} className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="h-40 w-full overflow-hidden rounded-xl bg-neutral-100 grid place-items-center">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={640}
                  height={320}
                  className="h-40 w-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-base font-semibold">{t.name}</h3>
              <div className="text-xs text-neutral-600">{t.role}</div>
              <p className="mt-2 text-sm text-neutral-700">{t.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Lo que dicen nuestros alumnos</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              quote:
                'Tomé este curso por la seriedad de la Cámara. Muy interesante y práctico; incentiva a emprender.',
              author: 'José Miguel Zamudio',
            },
            {
              quote:
                'Estoy emprendiendo y comprobé que importar baja mucho los costos. Curso claro, relatores de gran nivel.',
              author: 'Trinidad Betía',
            },
            {
              quote:
                'Herramientas muy útiles; asesoría en transporte, búsqueda y negociación. Todo muy claro.',
              author: 'Juan Mosconi',
            },
          ].map((t) => (
            <blockquote key={t.author} className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="text-neutral-800">“{t.quote}”</p>
              <footer className="mt-2 text-xs text-neutral-600">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Beneficios para emprendedores y PYMES</h2>
        <ul className="mt-4 grid md:grid-cols-3 gap-4 text-[15px]">
          {[
            {
              t: 'Reducción de riesgos y errores',
              d: 'Evita fraudes, verifica proveedores y cumple requisitos aduaneros.',
            },
            {
              t: 'Optimización de costos',
              d: 'Elige métodos de pago y envío más eficientes para tu negocio.',
            },
            {
              t: 'Soporte y comunidad',
              d: 'Espacio para resolver dudas y compartir experiencias con otros importadores.',
            },
          ].map((b) => (
            <li key={b.t} className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="text-base font-semibold">{b.t}</div>
              <p className="mt-1 text-neutral-700">{b.d}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* LOGOS */}
      <section className="mt-12">
        <div className="text-xs uppercase tracking-widest text-neutral-500">
          Con la participación de
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
          {[
            { src: '/partners/corporate_global66.png', alt: 'Global66' },
            { src: '/sponsors/hklaba.png', alt: 'HKLABA' },
            { src: '/partners/comercial_globex.png', alt: 'Comercial Globex' },
            { src: '/sponsors/apcc.png', alt: 'APCC' },
          ].map((l) => (
            <div key={l.alt} className="h-12 w-full grid place-items-center rounded-md border border-neutral-200 bg-white p-2">
              <Image src={l.src} alt={l.alt} width={200} height={48} className="h-10 w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-12">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">¿Listo para empezar?</h3>
            <p className="mt-2 text-neutral-700 max-w-2xl">
              Inscríbete hoy, descarga las plantillas, mira las clases y comienza a importar
              con seguridad y números claros.
            </p>
          </div>
          <Link
            href="https://hotmart.com/en/club/apcc-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Inscribirme en Hotmart
          </Link>
        </div>
      </section>
    </section>
  );
}
