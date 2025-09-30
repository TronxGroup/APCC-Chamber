// app/(routes)/tv/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'APCC TV — Creando Líderes para Asia',
  description:
    'Los mejores episodios del podcast “Creando Líderes para Asia”, conducido por Guillermo Hollzaman. APCC TV: entrevistas y contenidos clave para LatAm–Asia.',
  openGraph: {
    title: 'APCC TV — Creando Líderes para Asia',
    description:
      'Los mejores episodios del podcast “Creando Líderes para Asia”, conducido por Guillermo Hollzaman.',
    images: [{ url: '/og/apcc-tv.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  alternates: { canonical: 'https://www.asiapacific-chamber.com/tv' },
};

type Video = {
  title: string;
  url: string; // youtube watch url
  guest?: string;
  ep?: string;
};

const VIDEOS: Video[] = [
  {
    title:
      'Tecnología educativa para aprender de China | Karina Piña | Podcast APCC EP#17',
    url: 'https://www.youtube.com/watch?v=WDoQ9IUydq8',
    guest: 'Karina Piña',
    ep: 'EP#17',
  },
  {
    title:
      'Cómo posicionar tu marca en China | Creando Líderes para Asia — T2E1',
    url: 'https://www.youtube.com/watch?v=xyopX35IYek',
    guest: 'Especial branding en China',
    ep: 'T2E1',
  },
  {
    title:
      'Hacer negocios con China | Lina Song | Podcast APCC EP#09',
    url: 'https://www.youtube.com/watch?v=wWC0VLwwd5M',
    guest: 'Lina Song',
    ep: 'EP#09',
  },
  {
    title:
      'Vino chileno en Asia | Jorge Balduzzi | Podcast APCC EP#19',
    url: 'https://www.youtube.com/watch?v=on7lKjzxlSY',
    guest: 'Jorge Balduzzi',
    ep: 'EP#19',
  },
  {
    title:
      'Déficit de 45.000 programadores/año | Jorge Arriagada | Podcast APCC EP#11',
    url: 'https://www.youtube.com/watch?v=hJR-tXv6XhE',
    guest: 'Jorge Arriagada',
    ep: 'EP#11',
  },
];

// Utilidad simple para extraer el ID del video
function getYouTubeId(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1);
    return u.searchParams.get('v') || '';
  } catch {
    return '';
  }
}

// Crea la URL de embed con loop
function buildEmbed(url: string) {
  const id = getYouTubeId(url);
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    color: 'white',
    // Para que el video "vuelva al comienzo"
    loop: '1',
    // YouTube exige playlist=id para que loop funcione en embeds
    playlist: id,
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="apcc-hero relative overflow-hidden w-full min-h-[56vh] md:min-h-[64vh]">
        {/* Fondo */}
        <div className="absolute inset-0">
          <Image
            src="/bg_image_apcc_tv.jpg" // colócala en /public o cambia la ruta
            alt="APCC TV"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55 md:bg-black/50" />
        </div>

        {/* Contenido */}
        <div className="relative z-10">
          <div className="container py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="kicker text-xs tracking-[0.14em] uppercase text-white/90">
                APCC TV
              </p>
              <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight text-white">
                Creando Líderes para Asia
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90">
                Nuestro podcast con más de 20 episodios, conducido por{' '}
                <strong className="text-white">Guillermo Hollzaman</strong>. Aquí
                destacamos 5 imperdibles sobre China, branding, tecnología y
                expansión internacional.
              </p>
              <div className="mt-6 text-sm text-white/80">
                Disponible en YouTube · Clips y episodios completos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LISTA DE VIDEOS */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {VIDEOS.map((v) => {
            const embed = buildEmbed(v.url);
            return (
              <article
                key={v.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden"
              >
                <div className="aspect-video bg-neutral-950">
                  <iframe
                    title={v.title}
                    src={embed}
                    className="w-full h-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs uppercase tracking-wider text-neutral-400">
                    {v.ep ? v.ep : 'Podcast'}
                    {v.guest ? ` · Invitado(a): ${v.guest}` : ''}
                  </div>
                  <h2 className="mt-1 text-lg font-semibold text-white">
                    {v.title}
                  </h2>
                  <div className="mt-3 flex items-center gap-3">
                    <Link
                      href={v.url}
                      target="_blank"
                      className="btn btn-secondary"
                    >
                      Ver en YouTube
                    </Link>
                    <Link href="/membresias" className="btn btn-primary">
                      Hazte socio
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Nota editorial */}
        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h3 className="text-lg font-semibold text-white">Temporada 2026</h3>
          <p className="mt-2 text-neutral-300">
            En <strong>enero de 2026</strong> grabaremos una nueva tanda de episodios
            que estrenaremos a lo largo de 2026, en <strong>español</strong> y con
            <strong> subtítulos en inglés y portugués</strong>. Si quieres participar como
            invitado o partner de contenidos, <strong>solo debes ser socio de la APCC</strong>.
          </p>
          <div className="mt-4">
            <Link href="/membresias" className="btn btn-primary">
              Unirme a la APCC
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
