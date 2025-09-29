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
  excerpt: string;
  body: string;        // HTML o texto simple
};

const NEWS: NewsItem[] = [
  {
    slug: 'reuniones-cosco-shipping-hainan',
    title:
      'Cámara de Comercio Asia Pacífico sostiene reuniones de trabajo con COSCO Shipping',
    date: 'Sep 2025',
    location: 'Hainan, China',
    cover: '/news/cosco-hainan.jpg',
    tags: ['Logística', 'China', 'Sostenibilidad'],
    excerpt:
      'Durante la gira, nuestra vicepresidencia se reunió con el equipo de COSCO Shipping en Hainan para explorar colaboración en sostenibilidad, comercio y conexión LatAm–Asia.',
    body:
      `En el marco de la gira, nuestro Vicepresidente tuvo la oportunidad de visitar y sostener una reunión con el equipo de trabajo de COSCO Shipping en Hainan. 
      La instancia permitió abordar diversas oportunidades de colaboración en los ámbitos de sostenibilidad, comercio y acercamiento entre Chile, América Latina, China y Asia. 
      El diálogo permitió identificar intereses comunes y explorar líneas de trabajo conjunto entre el puerto y el sector empresarial.
      Estos encuentros se enmarcan en el compromiso permanente de la Cámara de Comercio Asia Pacífico por fortalecer los lazos de cooperación internacional, promoviendo iniciativas que integren distintas organizaciones comerciales para contribuir al desarrollo de negocios en la región Asia-Pacífico.`,
  },
  {
    slug: 'alianza-estrategica-shenzhen',
    title:
      'APCC impulsa alianza estratégica con Shenzhen para potenciar intercambio comercial Chile–China',
    date: 'Sep 2025',
    location: 'Shenzhen, China',
    cover: '/news/shenzhen-meetings.jpg',
    tags: ['Inversión', 'Alianzas', 'Shenzhen'],
    excerpt:
      'Reuniones en el Shenzhen Municipal Bureau of Commerce y entidades empresariales clave para robustecer las relaciones económicas y explorar líneas de trabajo conjunto.',
    body:
      `Nuestro Vicepresidente Ejecutivo, Álvaro Echeverría, sostuvo reuniones orientadas a fortalecer las relaciones económicas con actores de la región de Shenzhen. 
      Se reunió en el Shenzhen Municipal Bureau of Commerce (distrito de Futian) con Lin Xiuhong (Global Economic and Trade Network Command Center), 
      Shen Ziling (Investment Promotion Bureau), Chen Shuo (Shenzhen Foreign Economic and Trade Service Center Co., Ltd.), 
      Wang Fang (Shenzhen Import and Export Chamber of Commerce) y Chen Ya (Yoube Group Co., Ltd.).
      La instancia permitió identificar oportunidades de colaboración entre empresas, destacando intereses compartidos y posibles líneas de trabajo conjunto para robustecer los vínculos comerciales.
      Este encuentro refleja el compromiso constante de la APCC con la cooperación internacional, impulsando iniciativas que integren a distintas organizaciones y contribuyan al desarrollo sostenible de los negocios en Asia-Pacífico.`,
  },
  // Agrega aquí más noticias siguiendo el mismo formato
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
              <h2 className="mt-1 text-xl font-semibold">{n.title}</h2>
              {n.tags && n.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {n.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              )}
              <p className="mt-3 text-sm text-neutral-400">{n.excerpt}</p>

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
          <h3 className="text-lg font-semibold">¿Buscas más novedades?</h3>
          <p className="mt-1 text-sm text-neutral-400">
            Revisa nuestras misiones comerciales, seminarios y actividades en <Link href="/eventos" className="underline">Eventos</Link>.
          </p>
        </div>
        <Link href="/eventos" className="btn btn-secondary">Ver eventos</Link>
      </div>
    </section>
  );
}
