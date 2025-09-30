import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Noticias',
  description:
    'Actualidad de la Cámara de Comercio Asia Pacífico (APCC): alianzas, reuniones, misiones y cooperación económica con Asia.',
};

type NewsItem = {
  slug: string;
  title: string;
  date: string;        // Ej: "Sep 2025"
  location?: string;   // Ej: "Hainan, China"
  cover?: string;      // Ruta en /public/news/*.jpg
  tags?: string[];
  excerpt: string;     // resumen breve (cards homogéneas)
  body: string;        // texto completo (markdown/HTML simple)
};

// NOTAS: ordenadas de más nueva a más antigua
const NEWS: NewsItem[] = [
  // 1) Sep 2025 — COSCO / Hainan
  {
    slug: 'reuniones-cosco-shipping-hainan',
    title:
      'APCC sostiene reuniones de trabajo con COSCO Shipping en Hainan',
    date: 'Sep 2025',
    location: 'Hainan, China',
    cover: '/news/cosco-hainan.jpg',
    tags: ['Logística', 'China', 'Sostenibilidad'],
    excerpt:
      'Encuentro con el equipo de COSCO Shipping para explorar colaboración en sostenibilidad, comercio y conexión LatAm–Asia.',
    body:
      `Durante la gira institucional, nuestra vicepresidencia se reunió con el equipo de **COSCO Shipping** en Hainan. 
El diálogo abordó oportunidades de colaboración en **sostenibilidad**, **comercio** y la conexión entre **Chile/LatAm** y **Asia**. 
Se identificaron intereses comunes y posibles líneas de trabajo conjunto entre el sector portuario y el empresariado.
Estos hitos refuerzan el compromiso permanente de la **APCC** con la cooperación internacional y el desarrollo de negocios en Asia-Pacífico.`,
  },

  // 2) Sep 2025 — Shenzhen
  {
    slug: 'alianza-estrategica-shenzhen',
    title:
      'APCC impulsa alianza estratégica con Shenzhen para potenciar el intercambio Chile–China',
    date: 'Sep 2025',
    location: 'Shenzhen, China',
    cover: '/news/shenzhen-meetings.jpg',
    tags: ['Inversión', 'Alianzas', 'Shenzhen'],
    excerpt:
      'Reuniones en el Shenzhen Municipal Bureau of Commerce y entidades clave para robustecer vínculos y coordinar trabajo conjunto.',
    body:
      `Nuestro Vicepresidente Ejecutivo, **Álvaro Echeverría**, sostuvo reuniones en el **Shenzhen Municipal Bureau of Commerce** (Futian) con representantes del **Global Economic and Trade Network Command Center**, **Investment Promotion Bureau**, **Foreign Economic and Trade Service Center**, **Import and Export Chamber of Commerce** y **Yoube Group**.
Se coincidió en potenciar el intercambio **Chile–China** mediante agendas de colaboración público–privada, priorizando encadenamientos productivos y atracción de inversiones.
La instancia refleja el compromiso de la **APCC** con iniciativas que fortalezcan el comercio sostenible en **Asia-Pacífico**.`,
  },

  // 3) Sep 2025 — Gira Hainan (relaciones)
  {
    slug: 'gira-hainan-relaciones-economicas',
    title:
      'APCC fortalece relaciones económicas en gira estratégica por Hainan',
    date: 'Sep 2025',
    location: 'Hainan, China',
    cover: '/news/hainan-bureau.jpg',
    tags: ['Cooperación', 'China', 'Inversiones'],
    excerpt:
      'Reunión con Hainan International Economic Development Bureau y CCPIT para alinear colaboración empresarial Chile–Asia.',
    body:
      `La delegación de la **APCC** se reunió con **FEN Chun**, Director de Cooperación Internacional de **Hainan International Economic Development Bureau**, y con representantes de **CCPIT** y la **Hainan International Chamber of Commerce**.
Se abordaron oportunidades para empresas chilenas y latinoamericanas en el ecosistema **Hainan Free Trade Port**, acordando avanzar en intercambio de información, promoción y agendas sectoriales.`,
  },

  // 4) Ago 2025 — Entrevista CGTN (visas)
  {
    slug: 'exencion-visado-china-entrevista-cgtn',
    title:
      'APCC valora exención de visado para chilenos en China: “Facilita comercio y cooperación”',
    date: 'Ago 2025',
    location: 'Santiago / Beijing',
    cover: '/news/cgtn-visa.jpg',
    tags: ['Movilidad', 'Comercio', 'Chile-China'],
    excerpt:
      'Nuestro Vicepresidente destacó en CGTN que la exención de visa por 30 días dinamiza negocios, turismo y cooperación.',
    body:
      `En entrevista con **CGTN en Español**, **Álvaro Echeverría** resaltó el impacto de la exención de visado para chilenos que viajan a **China** por hasta 30 días.
Según el directivo, la medida reduce barreras de entrada y acelera agendas de negocio, **networking** e intercambio cultural; claves para el crecimiento del comercio bilateral.`,
  },

  // 5) May 2025 — Vínculos académicos
  {
    slug: 'encuentro-linda-chelan-juan-serrano',
    title:
      'APCC fortalece vínculos académicos con la Universidad de Hong Kong y el Instituto de Estudios Internacionales',
    date: 'May 2025',
    location: 'Santiago de Chile',
    cover: '/news/hku-inei-encuentro.jpg',
    tags: ['Academia', 'Sostenibilidad', 'Relaciones Internacionales'],
    excerpt:
      'Reunión con la Prof. Linda Chelan Li (HKU) y el Prof. Juan E. Serrano (U. de Chile) para articular trabajo academia–empresa.',
    body:
      `El directorio de la **APCC** recibió a la Prof. **Linda Chelan Li** (Universidad de Hong Kong) y al Prof. **Juan Enrique Serrano** (Instituto de Estudios Internacionales, U. de Chile).
Se exploraron puentes **academia–empresa** en sostenibilidad, comercio y políticas públicas para impulsar proyectos con impacto regional en **Asia-Pacífico**.`,
  },

  // 6) Abr 2025 — MOU CCPIT
  {
    slug: 'apcc-ccpit-acuerdo-cooperacion',
    title:
      'APCC y CCPIT firman acuerdo de cooperación para impulsar comercio e inversiones',
    date: 'Abr 2025',
    location: 'Santiago de Chile',
    cover: '/news/ccpit-mou.jpg',
    tags: ['Alianzas', 'China', 'Inversiones'],
    excerpt:
      'El convenio facilita intercambio de información, organización conjunta de ferias y misiones, y redes empresariales Chile–China.',
    body:
      `La **APCC** y el **CCPIT** firmaron un **MOU** orientado a profundizar la cooperación económica: intercambio de información,
organización de ferias, seminarios y misiones, y fortalecimiento de redes de contacto entre empresas de **Chile** y **China**.
El acuerdo consolida una hoja de ruta para proyectos con foco en **resultados medibles**.`,
  },

  // 7) Abr 2025 — Mesa PYMES
  {
    slug: 'mesa-trabajo-pymes-asia-sura',
    title:
      'Exitosa Mesa de Trabajo: desafíos y oportunidades para PYMES importadoras en Asia',
    date: 'Abr 2025',
    location: 'Santiago de Chile',
    cover: '/news/mesa-pymes-sura.jpg',
    tags: ['PYMES', 'Logística', 'Riesgo'],
    excerpt:
      'Jornada organizada por APCC y Empresas SURA con foco en internacionalización, riesgos y herramientas prácticas.',
    body:
      `Con alta convocatoria, la **APCC** y **Empresas SURA** desarrollaron la Mesa “Oportunidades y Desafíos para PYMES – Importadores en Asia”.
Se abordaron costos logísticos, cobertura de riesgos y apoyo operativo para expandir negocios hacia **APAC**.`,
  },

  // 8) Abr 2025 — CISCE
  {
    slug: 'cisce-2025-lanzamiento-santiago',
    title:
      'China–Chile refuerzan lazos con el lanzamiento de la CISCE 2025 en Santiago',
    date: 'Abr 2025',
    location: 'Santiago de Chile',
    cover: '/news/cisce-lanzamiento.jpg',
    tags: ['Cadenas de Suministro', 'China', 'Innovación'],
    excerpt:
      'APCC patrocinó el foro de promoción de la CISCE 2025: resiliencia, digitalización y cooperación industrial.',
    body:
      `La **APCC** participó y patrocinó el **Foro de Cooperación Económico-Comercial China–Chile** y el lanzamiento de la **CISCE 2025**.
Autoridades y empresas destacaron la necesidad de cadenas de suministro **resilientes y digitalizadas**.
La feria, en **Beijing**, reunirá a actores de energía limpia, manufactura avanzada, tecnología y servicios especializados.`,
  },

  // 9) Mar 2025 — MOU Chancay
  {
    slug: 'mou-camara-chancay',
    title:
      'APCC y Cámara de Comercio de Chancay firman MOU para potenciar cooperación regional',
    date: 'Mar 2025',
    location: 'Chancay, Perú',
    cover: '/news/chancay-mou.jpg',
    tags: ['Perú', 'Logística', 'Integración'],
    excerpt:
      'La alianza promueve misiones, intercambio de inteligencia y apoyo a PYMES en el eje Pacífico.',
    body:
      `La **APCC** y la **Cámara de Comercio de Chancay (CCCN)** sellaron un **MOU** para impulsar cooperación institucional:
misiones comerciales, intercambio de información estratégica y programas para **PYMES**.
El acuerdo apuesta por el rol logístico de **Chancay** como hub del Pacífico.`,
  },

  // 10) Mar 2025 — Puerto San Antonio
  {
    slug: 'puerto-san-antonio-colaboracion',
    title:
      'APCC y Puerto de San Antonio coordinan agenda para impulsar comercio con Asia',
    date: 'Mar 2025',
    location: 'San Antonio, Chile',
    cover: '/news/puerto-san-antonio.jpg',
    tags: ['Puertos', 'Chile', 'Asia'],
    excerpt:
      'Reunión de trabajo para desarrollar actividades conjuntas que faciliten operaciones y nuevas oportunidades.',
    body:
      `La **APCC** sostuvo una productiva reunión con la gerencia del **Puerto de San Antonio**.
Se acordó trabajar en iniciativas para facilitar operaciones logísticas y abrir **oportunidades de negocio** a miembros interesados en **Asia**.`,
  },

  // 11) Ene 2025 — Nuevos aliados
  {
    slug: 'nuevos-aliados-apcc-2025',
    title:
      'Huawei, SURA y Global66 se suman como aliados estratégicos de la APCC',
    date: 'Ene 2025',
    location: 'Santiago de Chile',
    cover: '/news/aliados-2025.jpg',
    tags: ['Alianzas', 'Fintech', 'Tecnología'],
    excerpt:
      'Nuevos socios corporativos aportarán tecnología, gestión de riesgos y pagos internacionales a la red APCC.',
    body:
      `La **APCC** incorporó a **Huawei**, **Empresas SURA** y **Global66** como aliados estratégicos.
El trabajo conjunto impulsará digitalización, cobertura de riesgos y **pagos internacionales** para emprendedores y empresas de la **Red Asia Pacífico**.`,
  },

  // 12) Ago 2024 — Seminario InvestHK (antigua)
  {
    slug: 'seminario-investhk-ago-2024',
    title:
      'Seminario APCC–InvestHK: oportunidades de negocios en Hong Kong y China',
    date: 'Ago 2024',
    location: 'Santiago de Chile',
    cover: '/news/seminario-investhk-2024.jpg',
    tags: ['Hong Kong', 'China', 'Empresas'],
    excerpt:
      'Expertos compartieron estrategias para ingresar a APAC y casos aplicados para empresas chilenas y latinoamericanas.',
    body:
      `La **APCC** y **Invest Hong Kong** realizaron el seminario “Oportunidades en Hong Kong y China”.
Participaron **Verónica Medina** (Business Hub), **Jimmy Chiang** (InvestHK) y **Álvaro Echeverría** (HKTDC/APCC).
El encuentro entregó **estrategias prácticas** y fomentó nuevas colaboraciones para competir en **APAC**.`,
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-[11px] text-neutral-400">
      #{children}
    </span>
  );
}

export default function Page() {
  return (
    <section className="container py-16">
      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Noticias</h1>
        <p className="mt-3 text-neutral-300">
          Alianzas estratégicas, misiones comerciales, acuerdos institucionales y avances de la Red Asia Pacífico.
        </p>
      </header>

      {/* GRID DE NOTICIAS */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {NEWS.map((n) => (
          <article
            key={n.slug}
            className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden flex flex-col"
          >
            {n.cover && (
              <div className="aspect-[16/9] bg-neutral-950">
                <img
                  src={n.cover}
                  alt={n.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-1">
              <div className="text-xs text-neutral-500">
                {n.date}{n.location ? ` · ${n.location}` : ''}
              </div>
              <h2 className="mt-1 text-xl font-semibold text-white">{n.title}</h2>

              {n.tags && n.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {n.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              )}

              {/* Excerpt homogéneo (3 líneas) */}
              <p
                className="mt-3 text-sm text-neutral-300"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {n.excerpt}
              </p>

              {/* Cuerpo expandible sin JS */}
              <details className="mt-4 group">
                <summary className="cursor-pointer text-sm text-neutral-300 hover:text-white">
                  Leer nota completa
                </summary>
                <div className="mt-3 text-sm leading-relaxed text-neutral-300 whitespace-pre-line">
                  {n.body}
                </div>
              </details>

              <div className="mt-5 flex items-center gap-3">
                <Link href="/contacto" className="btn btn-secondary btn-sm">Prensa &amp; vocerías</Link>
                <Link href="/membresias" className="btn btn-primary btn-sm">Hazte socio</Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ARCHIVO / MÁS NOTICIAS */}
      <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">¿Buscas más novedades?</h3>
        <p className="mt-1 text-sm text-neutral-300">
            Revisa nuestras misiones comerciales, seminarios y actividades en <Link href="/eventos" className="underline">Eventos</Link>.
          </p>
        </div>
        <Link href="/eventos" className="btn btn-secondary">Ver eventos</Link>
      </div>
    </section>
  );
}
