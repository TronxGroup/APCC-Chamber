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

      {/* HISTORIA / TIMELINE + GALERÍA */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Nuestra historia</h2>
        <p className="mt-2 text-neutral-400 max-w-3xl">
          Desde 2002, la APCC ha construido conexiones de confianza entre América Latina y Asia, 
          impulsando proyectos e inversiones con foco en resultados concretos para nuestros socios.
        </p>

        {/* Timeline ampliado */}
        <ol className="mt-6 border-l border-neutral-800 space-y-6 pl-5">
          <li>
            <div className="text-sm text-neutral-500">2002</div>
            <div className="text-sm text-neutral-300">
              Fundación de la APCC con el objetivo de facilitar el comercio y la cooperación entre Chile, 
              América Latina y Asia. Primeras alianzas con cámaras asiáticas en el marco de los tratados de libre comercio.
            </div>
          </li>

          <li>
            <div className="text-sm text-neutral-500">2004–2019</div>
            <div className="text-sm text-neutral-300">
              Producción anual del <strong>Workshop Oficial Asia Pacífico</strong>, reconocido encuentro que reunió a las 
              economías de Asia y LatAm. Participaron <strong>Presidentes de Chile</strong> (Ricardo Lagos, Michelle Bachelet), 
              <strong>ministros de Relaciones Exteriores y Economía</strong> (incl. Ignacio Briones), líderes gremiales 
              como la <strong>CPC</strong> y la <strong>CNC</strong>, además de embajadores y empresarios de ambos continentes.  
              En 2026 será retomado con toda su fuerza.
            </div>
          </li>

          <li>
            <div className="text-sm text-neutral-500">2002–2014</div>
            <div className="text-sm text-neutral-300">
              Más de <strong>8.000 alumnos</strong> formados en cursos de <strong>comercio internacional</strong> en alianza 
              con la Pontificia Universidad Católica de Chile.
            </div>
          </li>

          <li>
            <div className="text-sm text-neutral-500">2010–2018</div>
            <div className="text-sm text-neutral-300">
              Expansión institucional y posicionamiento internacional. Liderazgo en al menos <strong>2 misiones comerciales anuales</strong> 
              a Asia con empresarios y emprendedores de la región.
            </div>
          </li>

          <li>
            <div className="text-sm text-neutral-500">2018–2022</div>
            <div className="text-sm text-neutral-300">
              Fortalecimiento de la agenda público-privada con foco en Asia-Pacífico. Nuevas alianzas internacionales 
              y posicionamiento como hub estratégico de la región.
            </div>
          </li>

          <li>
            <div className="text-sm text-neutral-500">2019</div>
            <div className="text-sm text-neutral-300">
              La APCC se integra a la <strong>Hong Kong – Latin America Business Association (HKLABA)</strong>, 
              convirtiéndose en el puente oficial con la <strong>Federation of Hong Kong Business Associations Worldwide</strong>.  
              Esto abrió el mercado a empresas globales, más allá de América Latina.
            </div>
          </li>

          <li>
            <div className="text-sm text-neutral-500">2020–2021 (Pandemia)</div>
            <div className="text-sm text-neutral-300">
              Apoyo solidario a ciudadanos latinoamericanos <strong>varados en Asia</strong>, gestionando su regreso y 
              facilitando cooperación humanitaria en tiempos críticos.
            </div>
          </li>

          <li>
            <div className="text-sm text-neutral-500">2022–2025</div>
            <div className="text-sm text-neutral-300">
              <strong>Grandes alianzas con empresas e instituciones</strong> como Banco Scotiabank, Empresas Sura, Huawei y Global66, 
              ampliando beneficios para los socios y sentando las bases del Plan 2026–2030.
            </div>
          </li>

          <li>
            <div className="text-sm text-neutral-500">2026–2030</div>
            <div className="text-sm text-neutral-300">
              Consolidación del plan estratégico: <strong>inteligencia comercial</strong>, <strong>networking sectorial</strong> 
              y <strong>misiones con valor real</strong>. Retorno del Workshop Asia Pacífico como evento insignia para reunir a 
              autoridades, empresarios y líderes internacionales.
            </div>
          </li>
        </ol>

        {/* Galería histórica (4 fotos) */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/history/workshop.jpg', alt: 'Workshop Asia Pacífico' },
            { src: '/history/mision.jpg', alt: 'Misión comercial a China' },
            { src: '/history/formacion.jpg', alt: 'Cursos de comercio internacional UC' },
            { src: '/history/hklaba.jpg', alt: 'Alianza APCC con HKLABA' },
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
