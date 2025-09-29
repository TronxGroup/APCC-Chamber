import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description:
    'APCC — Cámara de Comercio Asia Pacífico. Plataforma estratégica desde 2002. Misión, visión, valores, directorio y presidentes. Plan Estratégico 2026–2030.',
};

// Tipos y datos (puedes moverlos a /lib si prefieres)
type Person = {
  name: string;
  role: string;
  period?: string;
  photo?: string; // ruta en /public (ej: /team/frei.jpg)
  bio?: string;
};

const PRESIDENTS: Person[] = [
  {
    name: 'Álvaro Echeverría',
    role: 'Presidente',
    period: '2022 — presente',
    photo: '/team/director_alvaro_echeverria.jpg',
    bio: 'Liderazgo estratégico de la Cámara, relaciones institucionales y supervisión del Plan 2026–2030.',
  },
];

const FORMER_PRESIDENTS: Person[] = [
  {
    name: 'Eduardo Frei Ruiz-Tagle',
    role: 'Presidente APCC',
    period: '2018 — 2022',
    photo: '/team/presidente_eduardo_frei.jpg',
    bio: 'Ex Presidente de Chile; Embajador para Asia-Pacífico hasta 2022. Aportó experiencia política y empresarial clave.',
  },
  {
    name: 'Francisco Garcés (Q.E.P.D.)',
    role: 'Presidente APCC',
    period: '2010 — 2018',
    photo: '/team/presidente_francisco_garces.jpg',
    bio: 'Economista y ejecutivo. Impulsó la expansión institucional y el posicionamiento internacional de la Cámara.',
  },
  {
    name: 'Octavio Errázuriz',
    role: 'Presidente APCC',
    period: '2002 — 2010',
    photo: '/team/presidente_octavio_errazuriz.jpg',
    bio: 'Abogado y diplomático. Sentó las bases institucionales y de relacionamiento con Asia en los primeros años.',
  },
];

const BOARD_SAMPLE: Person[] = [
  { name: 'Jorge Carey', role: 'Director', photo: '/team/director_jorge_carey.jpg' },
  { name: 'Álvaro Echeverría', role: 'Director', photo: '/team/director_alvaro_echeverria.jpg' },
  { name: 'Charles Kimber', role: 'Director', photo: '/team/director_charles_kimber.jpg' },
  { name: 'Alberto Salas', role: 'Director', photo: '/team/director_alberto_salas.jpg' },
];

export default function Page() {
  return (
    <section className="container py-16">
      {/* HERO / INTRO */}
      <header className="max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Quiénes somos</h1>
        <p className="mt-4 text-neutral-300">
          Fundada el <strong>6 de marzo de 2002</strong>, la <strong>Cámara de Comercio Asia Pacífico (APCC)</strong> es una
          plataforma estratégica e <em>inteligencia comercial</em> líder en América Latina. Conectamos instituciones y empresas—
          especialmente importadores y exportadores—para facilitar el intercambio de productos, servicios e inversiones entre
          América Latina y Asia.
        </p>
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="text-lg font-semibold">Plan Estratégico 2026–2030</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Nuestro plan se centra en <strong>valor continuo al socio</strong> mediante tres ejes: (1) inteligencia de mercado y
            contenidos aplicados; (2) networking sectorial y <em>business matching</em>; (3) acceso a ferias y <em>misiones comerciales</em>
            en Hong Kong, China y Asia. Incluye una <strong>cadencia mensual</strong> de webinars/cursos, mesas sectoriales, ruedas de
            negocios y difusión en la Red Asia Pacífico.
          </p>
        </div>
      </header>

      {/* MISIÓN / VISIÓN / VALORES */}
      <section className="mt-12 grid md:grid-cols-3 gap-4">
        <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="text-xs uppercase tracking-wider text-neutral-500">Misión</div>
          <p className="mt-2 text-sm text-neutral-300">
            Incentivar, promocionar y asesorar la actividad comercial entre empresas e instituciones de la región Asia Pacífico y
            América Latina, promoviendo oportunidades y reduciendo asimetrías de información para insertar a nuestros socios en la
            <strong> Cuenca del Pacífico</strong>.
          </p>
        </article>
        <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="text-xs uppercase tracking-wider text-neutral-500">Visión</div>
          <p className="mt-2 text-sm text-neutral-300">
            Capacitar a emprendedores y empresas con herramientas y conocimiento para competir globalmente, creando espacios de
            confianza donde surjan nuevos negocios e inversiones que impulsen el desarrollo económico y social.
          </p>
        </article>
        <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="text-xs uppercase tracking-wider text-neutral-500">Valores</div>
          <ul className="mt-2 text-sm text-neutral-300 list-disc pl-5 space-y-1">
            <li>Ética, buenas prácticas y transparencia.</li>
            <li>Respeto, libertad y cohesión social.</li>
            <li>Facilitación de negocios basada en confianza.</li>
            <li>Unión empresarial y gremial en beneficio del socio.</li>
          </ul>
        </article>
      </section>

      {/* Ejes del Plan 2026–2030 */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Ejes 2026–2030</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            {
              k: 'Inteligencia Comercial',
              v: 'Reportes sectoriales, guías, radar de ferias y alertas de proveedores verificados.',
            },
            {
              k: 'Networking & Mesas',
              v: 'Roundtables por industria, ruedas de negocios y vínculos con HKLABA.',
            },
            {
              k: 'Misiones & Ferias',
              v: 'Dos misiones anuales a Asia con agendas curadas y seguimiento post-visita.',
            },
          ].map((x) => (
            <div key={x.k} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="text-sm font-semibold">{x.k}</div>
              <p className="mt-2 text-sm text-neutral-400">{x.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm">
          <Link href="/membresias" className="btn btn-primary">Conoce las membresías</Link>
        </div>
      </section>

      {/* DIRECTORIO */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Directorio</h2>
        <p className="mt-2 text-neutral-400 max-w-3xl">
          Nuestro directorio integra líderes del ámbito empresarial, académico e institucional con amplia experiencia en comercio
          internacional. Más de <strong>100 alianzas y acuerdos</strong> respaldan nuestro trabajo.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {BOARD_SAMPLE.map((m) => (
            <article key={m.name} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
              <div className="h-28 w-full overflow-hidden rounded-xl bg-neutral-800 grid place-items-center">
                <Image
                  src={m.photo || '/team/placeholder.jpg'}
                  alt={m.name}
                  width={280}
                  height={112}
                  className="h-28 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-neutral-200">{m.name}</h3>
              <div className="text-xs text-neutral-400">{m.role}</div>
            </article>
          ))}
        </div>
      </section>

      {/* PRESIDENCIA ACTUAL */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Presidencia y Directorio APCC</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {PRESIDENTS.map((p) => (
            <article key={p.name} className="md:col-span-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="grid md:grid-cols-3 gap-6 items-start">
                <div className="rounded-xl overflow-hidden bg-neutral-800">
                  <Image
                    src={p.photo || '/team/presidencia.jpg'}
                    alt={p.name}
                    width={640}
                    height={224}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="text-sm text-neutral-400">{p.role} — {p.period}</div>
                  <p className="mt-3 text-sm text-neutral-300">{p.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EX PRESIDENTES */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Ex Presidentes</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {FORMER_PRESIDENTS.map((p) => (
            <article key={p.name} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="rounded-xl overflow-hidden bg-neutral-800">
                <Image
                  src={p.photo || '/team/placeholder.jpg'}
                  alt={p.name}
                  width={640}
                  height={176}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-base font-semibold">{p.name}</h3>
              <div className="text-xs text-neutral-400">{p.role} — {p.period}</div>
              <p className="mt-2 text-sm text-neutral-300">{p.bio}</p>
            </article>
          ))}
        </div>
      </section>

     {/* NUESTRA HISTORIA (Timeline resumido y visual) */}
<section className="mt-12">
  <h2 className="text-2xl md:text-3xl font-semibold">Nuestra historia</h2>
  <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-3xl">
    Desde 2002, la APCC conecta América Latina y Asia con un enfoque en resultados, alianzas estratégicas
    y acompañamiento real a empresas.
  </p>

  <ol className="relative mt-8 grid gap-8 md:grid-cols-2">
    {/* Línea vertical decorativa en md+ */}
    <div
      aria-hidden
      className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neutral-700/40 to-transparent"
    />

    {/* Item */}
    {[
      {
        year: '2002',
        title: 'Fundación APCC',
        text:
          'Nacemos para facilitar comercio y cooperación Chile–LatAm–Asia, alineados a los TLC con Hong Kong, China, Japón y otros.',
      },
      {
        year: '2004–2019',
        title: 'Workshop Asia Pacífico',
        text:
          'Workshop Asia Pacífico: encuentro insignia que reunió a presidentes de Chile, ministros de Estado, líderes gremiales, embajadores y empresarios de ambas regiones. Regresa en 2026.',
        badge: 'Vuelve 2026',
      },
      {
        year: '2002–2014',
        title: 'Formación ejecutiva',
        text:
          '8.000+ alumnos en cursos de comercio internacional junto a la Pontificia Universidad Católica de Chile.',
      },
      {
        year: '2010–2018',
        title: 'Misiones a Asia',
        text:
          'Expansión institucional y 2+ misiones comerciales por año con empresas y emprendedores.',
      },
      {
        year: '2019',
        title: 'Alianza HKLABA',
        text:
          'Ingreso a HKLABA y a la Federation of HK Business Associations Worldwide: abrimos el ecosistema a empresas globales.',
        badge: 'Puente global',
      },
      {
        year: '2020–2021',
        title: 'Pandemia',
        text:
          'Apoyo a latinoamericanos varados en Asia, gestionando retornos y cooperación en momentos críticos.',
      },
      {
        year: '2022–2025',
        title: 'Alianzas clave',
        text:
          'Scotiabank, Empresas Sura, Huawei, Global66, entre otros: beneficios ampliados y base del Plan 2026–2030.',
      },
      {
        year: '2026–2030',
        title: 'Plan estratégico',
        text:
          'Inteligencia comercial, networking sectorial y misiones con valor medible. Vuelve el Workshop Asia Pacífico.',
        badge: 'En curso',
      },
    ].map((item, i) => (
      <li key={item.year} className="relative">
        {/* Punto del timeline (lado alternado) */}
        <span
          aria-hidden
          className={[
            'hidden md:block absolute top-2 h-3 w-3 rounded-full ring-4 ring-neutral-900',
            i % 2 === 0 ? '-right-1.5 bg-[var(--apcc-accent)]' : '-left-1.5 bg-neutral-500',
          ].join(' ')}
        />
        <article className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 px-2 py-0.5 text-[10px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              {item.year}
            </span>
            {item.badge && (
              <span className="inline-flex items-center rounded-full bg-[var(--apcc-accent)]/10 text-[var(--apcc-accent)] px-2 py-0.5 text-[10px] uppercase tracking-wider">
                {item.badge}
              </span>
            )}
          </div>
          <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{item.text}</p>
        </article>
      </li>
    ))}
  </ol>
        {/* Galería histórica (4 fotos) */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/history/history_workshop.jpg', alt: '13° Workshop Asia Pacífico 2017 — Francisco Garcés con la Presidenta Michelle Bachelet' },
            { src: '/history/history_ministro.jpg', alt: 'Reunión de la APCC con Nicolás Grau, Ministro de Economía, Fomento y Turismo de Chile.' },
            { src: '/history/history_hklaba.jpg', alt: 'Alianza estratégica de la APCC con HKLABA, consolidando el puente entre América Latina y Hong Kong.' },
            { src: '/history/history_alianza.jpg', alt: 'Firma de alianza estratégica entre APCC y Huawei para impulsar innovación y cooperación tecnológica.' },
          ].map((img) => (
            <figure
              key={img.src}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
            >
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

      {/* CTA */}
      <section className="mt-12">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Súmate a la Red Asia Pacífico</h3>
            <p className="mt-2 text-neutral-400 max-w-2xl">
              Participa en nuestras mesas sectoriales, recibe inteligencia comercial y accede a misiones con agenda curada.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/membresias" className="btn btn-primary">Ver membresías</Link>
            <Link href="/contacto" className="btn btn-secondary">Agendar llamada</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
