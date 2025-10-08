// app/(routes)/quienes-somos/page.tsx
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
  photo?: string;   // ruta en /public (ej: /team/frei.jpg)
  bio?: string;
};

const PRESIDENTS: Person[] = [
  {
    name: 'Álvaro Echeverría',
    role: 'Director General',
    period: '2023 — presente',
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
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--apcc-text)]">Quiénes somos</h1>
        <p className="mt-4 text-[var(--apcc-text-2)]">
          Fundada el <strong>6 de marzo de 2002</strong>, la <strong>Cámara de Comercio Asia Pacífico (APCC)</strong> es una
          plataforma estratégica e <em>inteligencia comercial</em> líder en América Latina. Conectamos instituciones y empresas —
          especialmente importadores y exportadores — para facilitar el intercambio de productos, servicios e inversiones entre
          América Latina y Asia.
        </p>

        <div className="mt-6 card p-5">
          <h2 className="text-lg font-semibold text-[var(--apcc-text)]">Plan Estratégico 2026–2030</h2>
          <p className="mt-2 text-sm text-[var(--apcc-text-2)]">
            Nuestro plan se centra en <strong>valor continuo al socio</strong> mediante tres ejes: (1) inteligencia de mercado y
            contenidos aplicados; (2) networking sectorial y <em>business matching</em>; (3) acceso a ferias y <em>misiones comerciales</em>
            en Hong Kong, China y Asia. Incluye una <strong>cadencia mensual</strong> de webinars/cursos, mesas sectoriales, ruedas de
            negocios y difusión en la Red Asia Pacífico.
          </p>
        </div>
      </header>

      {/* MISIÓN / VISIÓN / VALORES */}
      <section className="mt-12 grid md:grid-cols-3 gap-4">
        {[
          {
            label: 'Misión',
            body:
              'Incentivar, promocionar y asesorar la actividad comercial entre empresas e instituciones de la región Asia Pacífico y América Latina, reduciendo asimetrías de información para insertar a nuestros socios en la Cuenca del Pacífico.',
          },
          {
            label: 'Visión',
            body:
              'Capacitar a emprendedores y empresas con herramientas y conocimiento para competir globalmente, creando espacios de confianza donde surjan nuevos negocios e inversiones.',
          },
          {
            label: 'Valores',
            body:
              'Ética, buenas prácticas y transparencia; respeto, libertad y cohesión social; facilitación de negocios basada en confianza; unión empresarial y gremial en beneficio del socio.',
            list: true,
          },
        ].map((x) => (
          <article key={x.label} className="card p-6">
            <div className="text-xs uppercase tracking-wider text-neutral-600">{x.label}</div>
            {x.list ? (
              <ul className="mt-2 text-sm text-[var(--apcc-text-2)] list-disc pl-5 space-y-1">
                {x.body.split(';').map((li) => <li key={li.trim()}>{li.trim()}</li>)}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-[var(--apcc-text-2)]">{x.body}</p>
            )}
          </article>
        ))}
      </section>

      {/* Ejes del Plan 2026–2030 */}
<section className="mt-12">
  <h2 className="text-2xl md:text-3xl font-semibold text-[var(--apcc-text)]">Ejes 2026–2030</h2>
  <div className="mt-6 grid md:grid-cols-3 gap-4">
    {[
      { 
        k: 'Estrategia & Inteligencia Comercial', 
        v: 'Formulación de estrategias de internacionalización, prospectiva de mercados y productos, reportes sectoriales, guías prácticas, radar de ferias y alertas de proveedores verificados.' 
      },
      { 
        k: 'Networking & Mesas', 
        v: 'Roundtables por industria, ruedas de negocios y vínculos con HKLABA, generando espacios de confianza, conocimiento y experiencias entre Asia y Latinoamérica.' 
      },
      { 
        k: 'Misiones & Ferias', 
        v: 'Dos misiones anuales a Asia con agendas diseñadas a medida, participación en hubs estratégicos y seguimiento post-visita para capitalizar contactos y acuerdos.' 
      },
    ].map((x) => (
      <div key={x.k} className="card p-6">
        <div className="text-sm font-semibold text-[var(--apcc-text)]">{x.k}</div>
        <p className="mt-2 text-sm text-[var(--apcc-text-2)]">{x.v}</p>
      </div>
    ))}
  </div>
  <div className="mt-6 text-sm">
    <Link href="/membresias" className="btn btn-primary">Conoce las membresías</Link>
  </div>
</section>

      {/* DIRECTORIO */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--apcc-text)]">Directorio</h2>
        <p className="mt-2 text-[var(--apcc-text-2)] max-w-3xl">
          Nuestro directorio integra líderes del ámbito empresarial, académico e institucional con amplia experiencia en comercio
          internacional. Más de <strong>100 alianzas y acuerdos</strong> respaldan nuestro trabajo.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {BOARD_SAMPLE.map((m) => (
            <article key={m.name} className="card p-4">
              <div className="h-28 w-full overflow-hidden rounded-xl bg-neutral-100 grid place-items-center">
                <Image
                  src={m.photo || '/team/placeholder.jpg'}
                  alt={m.name}
                  width={280}
                  height={112}
                  className="h-28 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-[var(--apcc-text)]">{m.name}</h3>
              <div className="text-xs text-neutral-600">{m.role}</div>
            </article>
          ))}
        </div>
      </section>

      {/* PRESIDENCIA ACTUAL */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--apcc-text)]">Presidencia y Directorio APCC</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {PRESIDENTS.map((p) => (
            <article key={p.name} className="md:col-span-3 card p-6">
              <div className="grid md:grid-cols-3 gap-6 items-start">
                <div className="rounded-xl overflow-hidden bg-neutral-100">
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
                  <h3 className="text-lg font-semibold text-[var(--apcc-text)]">{p.name}</h3>
                  <div className="text-sm text-neutral-600">{p.role} — {p.period}</div>
                  <p className="mt-3 text-sm text-[var(--apcc-text-2)]">{p.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EX PRESIDENTES */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--apcc-text)]">Ex Presidentes</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {FORMER_PRESIDENTS.map((p) => (
            <article key={p.name} className="card p-6">
              <div className="rounded-xl overflow-hidden bg-neutral-100">
                <Image
                  src={p.photo || '/team/placeholder.jpg'}
                  alt={p.name}
                  width={640}
                  height={176}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-base font-semibold text-[var(--apcc-text)]">{p.name}</h3>
              <div className="text-xs text-neutral-600">{p.role} — {p.period}</div>
              <p className="mt-2 text-sm text-[var(--apcc-text-2)]">{p.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* NUESTRA HISTORIA (Timeline resumido y visual) */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--apcc-text)]">Nuestra historia</h2>
        <p className="mt-2 text-[var(--apcc-text-2)] max-w-3xl">
          Desde 2002, la APCC conecta América Latina y Asia con un enfoque en resultados, alianzas estratégicas
          y acompañamiento real a empresas.
        </p>

        <ol className="relative mt-8 grid gap-8 md:grid-cols-2">
          <div
            aria-hidden
            className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neutral-300 to-transparent"
          />
          {[
            { year: '2002', title: 'Fundación APCC', text: 'Nacemos para facilitar comercio y cooperación Chile–LatAm–Asia, alineados a los TLC con Hong Kong, China, Japón y otros.' },
            { year: '2004–2019', title: 'Workshop Asia Pacífico', text: 'Encuentro insignia que reunió a presidentes de Chile, ministros de Estado, líderes gremiales, embajadas y empresarios de ambas regiones. Regresa en 2026.', badge: 'Vuelve 2026' },
            { year: '2002–2014', title: 'Formación ejecutiva', text: '8.000+ alumnos en cursos de comercio internacional junto a la Pontificia Universidad Católica de Chile.' },
            { year: '2010–2018', title: 'Misiones a Asia', text: 'Expansión institucional y 2+ misiones comerciales por año con empresas y emprendedores.' },
            { year: '2019', title: 'Alianza HKLABA', text: 'Ingreso a HKLABA y a la Federation of HK Business Associations Worldwide: abrimos el ecosistema a empresas globales.', badge: 'Puente global' },
            { year: '2020–2021', title: 'Pandemia', text: 'Apoyo a latinoamericanos varados en Asia, gestionando retornos y cooperación en momentos críticos.' },
            { year: '2022–2025', title: 'Alianzas clave', text: 'Scotiabank, Empresas Sura, Huawei, Global66, entre otros: beneficios ampliados y base del Plan 2026–2030.' },
            { year: '2026–2030', title: 'Plan estratégico', text: 'Inteligencia comercial, networking sectorial y misiones con valor medible. Vuelve el Workshop Asia Pacífico.', badge: 'En curso' },
          ].map((item, i) => (
            <li key={item.year} className="relative">
              <span
                aria-hidden
                className={[
                  'hidden md:block absolute top-2 h-3 w-3 rounded-full ring-4 ring-white',
                  i % 2 === 0 ? '-right-1.5 bg-[var(--apcc-accent)]' : '-left-1.5 bg-neutral-400',
                ].join(' ')}
              />
              <article className="card p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2 py-0.5 text-[10px] uppercase tracking-wider text-neutral-600">
                    {item.year}
                  </span>
                  {item.badge && (
                    <span className="inline-flex items-center rounded-full bg-[var(--apcc-accent)]/10 text-[var(--apcc-accent)] px-2 py-0.5 text-[10px] uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-base font-semibold text-[var(--apcc-text)]">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--apcc-text-2)]">{item.text}</p>
              </article>
            </li>
          ))}
        </ol>

        {/* Galería histórica (4 fotos) */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/history/history_workshop.jpg', alt: '13° Workshop Asia Pacífico 2017 — Francisco Garcés con la Presidenta Michelle Bachelet' },
            { src: '/history/history_ministro.jpg', alt: 'Reunión de la APCC con el ministro de Economía, Fomento y Turismo de Chile.' },
            { src: '/history/history_hklaba.jpg', alt: 'Alianza estratégica de la APCC con HKLABA, consolidando el puente con Hong Kong.' },
            { src: '/history/history_alianza.jpg', alt: 'Firma de alianza estratégica entre APCC y Huawei para impulsar cooperación tecnológica.' },
          ].map((img) => (
            <figure key={img.src} className="card p-0 overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={640}
                height={384}
                className="h-40 md:h-48 w-full object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <figcaption className="p-3 text-xs text-[var(--apcc-text-2)]">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <div className="card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-[var(--apcc-text)]">Súmate a la Red Asia Pacífico</h3>
            <p className="mt-2 text-[var(--apcc-text-2)] max-w-2xl">
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
