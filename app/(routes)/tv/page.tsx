// app/(routes)/apcc-tv/page.tsx
'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

export const metadata: Metadata = {
  title: 'APCC TV | Cámara de Comercio Asia Pacífico',
  description:
    'APCC TV: Plataforma audiovisual de la Cámara de Comercio Asia Pacífico. Descubre los mejores episodios del podcast "Creando Líderes para Asia".',
};

type Video = {
  title: string;
  guest: string;
  role: string;
  company: string;
  url: string;
  id: string; // para loop/control de YouTube
};

const VIDEOS: Video[] = [
  {
    title: 'Tecnología educativa para aprender de China',
    guest: 'Karina Piña',
    role: 'Directora',
    company: 'Corporación Cruzando el Pacífico',
    url: 'https://www.youtube.com/embed/WDoQ9IUydq8',
    id: 'WDoQ9IUydq8',
  },
  {
    title: 'Cómo posicionar tu marca en China',
    guest: 'Javier Arellano',
    role: 'B2B2C Operation Manager',
    company: 'Huawei',
    url: 'https://www.youtube.com/embed/xyopX35IYek',
    id: 'xyopX35IYek',
  },
  {
    title: 'Hacer negocios con China',
    guest: 'Lina Song',
    role: 'General Manager',
    company: 'Linacuza Intercultural SpA',
    url: 'https://www.youtube.com/embed/wWC0VLwwd5M',
    id: 'wWC0VLwwd5M',
  },
  {
    title: 'Vino chileno en Asia',
    guest: 'Jorge Balduzzi',
    role: 'CEO',
    company: 'Balduzzi Wines',
    url: 'https://www.youtube.com/embed/on7lKjzxlSY',
    id: 'on7lKjzxlSY',
  },
  {
    title: 'Hay un déficit de 45.000 programadores anuales',
    guest: 'Jorge Arriagada',
    role: 'CEO',
    company: 'Macrobots',
    url: 'https://www.youtube.com/embed/hJR-tXv6XhE',
    id: 'hJR-tXv6XhE',
  },
  {
    title: 'Oportunidades en Hong Kong para empresas Latinoamericanas',
    guest: 'Dr. Jimmy Chiang',
    role: 'Associate Director-General',
    company: 'Invest Hong Kong (InvestHK)',
    url: 'https://www.youtube.com/embed/hBAjGfsSnBc',
    id: 'hBAjGfsSnBc',
  },
  // NUEVOS
  {
    title: 'Comercio exterior con TutyComex',
    guest: 'Ailin Quintana',
    role: 'CEO',
    company: 'TutyComex',
    url: 'https://www.youtube.com/embed/V73WO6jYvnE',
    id: 'V73WO6jYvnE',
  },
  {
    title: 'Conversación con Juan Sutil',
    guest: 'Juan Sutil',
    role: 'Fundador',
    company: 'Empresas Sutil · ex presidente CPC',
    url: 'https://www.youtube.com/embed/S1hPuMt3Ems',
    id: 'S1hPuMt3Ems',
  },
];

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT: any;
  }
}

export default function Page() {
  // Guardamos referencias a los players por ID
  const playersRef = useRef<Record<string, any>>({});

  // Inicializa los players cuando la API está lista
  const initPlayers = () => {
    if (!window.YT || !window.YT.Player) return;

    VIDEOS.forEach((v) => {
      const domId = `yt-${v.id}`;
      if (playersRef.current[v.id]) return; // evitar duplicar

      const player = new window.YT.Player(domId, {
        videoId: v.id,
        playerVars: {
          // sin autoplay; sin loop; branding limpio
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          // permitir que el iframe JS controle el reproductor
          enablejsapi: 1,
          origin: typeof window !== 'undefined' ? window.location.origin : undefined,
        },
        events: {
          onStateChange: (e: any) => {
            // Si termina, vuelve al inicio y pausa.
            if (e.data === window.YT.PlayerState.ENDED) {
              try {
                e.target.seekTo(0, true);
                e.target.pauseVideo();
              } catch {
                /* no-op */
              }
            }
          },
        },
      });

      playersRef.current[v.id] = player;
    });
  };

  useEffect(() => {
    // Si la API ya está cargada
    if (window.YT && window.YT.Player) {
      initPlayers();
    } else {
      // Cuando cargue la API
      window.onYouTubeIframeAPIReady = () => {
        initPlayers();
      };
    }

    // cleanup: destruimos players al desmontar
    return () => {
      Object.values(playersRef.current).forEach((p) => {
        try {
          p.destroy();
        } catch {
          /* no-op */
        }
      });
      playersRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {/* Carga la API de YouTube una sola vez */}
      <Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" />

      {/* HERO (texto blanco garantizado) */}
      <div className="apcc-hero relative h-[400px] w-full overflow-hidden bg-black">
        {/* Fondo */}
        <div className="absolute inset-0">
          <Image
            src="/hero/apcc-tv-banner.png" // asegúrate que exista exactamente con este nombre
            alt="APCC TV Banner"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">APCC TV</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Creando Líderes para Asia · El podcast oficial de la Cámara de Comercio Asia Pacífico
          </p>
          <p className="mt-2 text-sm text-white/80">+20 episodios conducidos por Guillermo Hollzaman</p>
        </div>
      </div>

      {/* VIDEOS */}
      <div className="container py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Episodios destacados</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {VIDEOS.map((v) => (
            <article
              key={v.id}
              className="rounded-2xl border border-neutral-200 md:border-neutral-300 bg-white overflow-hidden flex flex-col"
            >
              <div className="aspect-video bg-black">
                {/* Div contenedor que la API reemplaza por el iframe controlable */}
                <div
                  id={`yt-${v.id}`}
                  className="w-full h-full"
                  // Fallback: si por alguna razón no se carga la API, dejamos el iframe estándar
                  dangerouslySetInnerHTML={{
                    __html: `
                      <iframe
                        src="${v.url}?playsinline=1&rel=0&modestbranding=1&enablejsapi=1"
                        title="${v.title.replace(/"/g, '&quot;')}"
                        class="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    `,
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900">{v.title}</h3>
                <p className="mt-1 text-[15px] text-neutral-700">
                  {v.guest} — {v.role}, {v.company}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* NOTA EDITORIAL / CTA */}
        <div className="mt-16 rounded-2xl bg-white text-black p-8 md:p-10 shadow-lg max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Temporada 2026</h3>
          <p className="mt-4 text-base md:text-lg text-neutral-700">
            En enero 2026 grabaremos nuevos capítulos que estrenaremos durante el año, en español con subtítulos en
            inglés y portugués. Si quieres participar, solo debes ser socio de la APCC.
          </p>
          <Link href="/membresias" className="mt-6 inline-flex btn btn-primary">
            Hazte socio
          </Link>
        </div>
      </div>
    </section>
  );
}
