'use client';

import Script from 'next/script';
import { useEffect, useMemo, useRef } from 'react';
import type { Video } from '@/types/apcc-tv';

type Props = { videos: Video[] };

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT: any;
  }
}

export default function ApccTvGrid({ videos }: Props) {
  const playersRef = useRef<Record<string, any>>({});

  // Agrupa por tema y ordena alfabéticamente por tema y título
  const grouped = useMemo(() => {
    const map = new Map<string, Video[]>();
    for (const v of videos) {
      if (!map.has(v.tema)) map.set(v.tema, []);
      map.get(v.tema)!.push(v);
    }
    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0], 'es'))
      .map(([tema, arr]) => [tema, arr.sort((x, y) => x.title.localeCompare(y.title, 'es'))] as const);
  }, [videos]);

  // Inicializa los reproductores
  const initPlayers = () => {
    if (!window.YT || !window.YT.Player) return;
    videos.forEach((v) => {
      const domId = `yt-${v.id}`;
      if (playersRef.current[v.id]) return;
      const player = new window.YT.Player(domId, {
        videoId: v.id,
        playerVars: {
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          enablejsapi: 1,
          origin: typeof window !== 'undefined' ? window.location.origin : undefined,
        },
        events: {
          onStateChange: (e: any) => {
            if (e.data === window.YT.PlayerState.ENDED) {
              try {
                e.target.seekTo(0, true);
                e.target.pauseVideo();
              } catch {}
            }
          },
        },
      });
      playersRef.current[v.id] = player;
    });
  };

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initPlayers();
    } else {
      window.onYouTubeIframeAPIReady = () => initPlayers();
    }
    return () => {
      Object.values(playersRef.current).forEach((p) => {
        try {
          p.destroy();
        } catch {}
      });
      playersRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container py-16">
      <Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" />

      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Episodios por tema</h2>

      <div className="space-y-14">
        {grouped.map(([tema, arr]) => (
          <section key={tema}>
            <h3 className="text-xl md:text-2xl font-bold mb-6">{tema}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {arr.map((v) => (
                <article
                  key={v.id}
                  className="rounded-2xl border border-neutral-200 md:border-neutral-300 bg-white overflow-hidden flex flex-col"
                >
                  <div className="aspect-video bg-black">
                    <div
                      id={`yt-${v.id}`}
                      className="w-full h-full"
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
                    <h4 className="text-lg font-semibold text-neutral-900">{v.title}</h4>
                    <p className="mt-1 text-[15px] text-neutral-700">
                      {v.guest} — {v.role}, {v.company}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl bg-white text-black p-8 md:p-10 shadow-lg max-w-3xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Temporada 2026</h3>
        <p className="mt-4 text-base md:text-lg text-neutral-700">
          En enero 2026 grabaremos nuevos capítulos que estrenaremos durante el año, en español con subtítulos en
          inglés y portugués. Si quieres participar, solo debes ser socio de la APCC.
        </p>
        <a href="/membresias" className="mt-6 inline-flex btn btn-primary">
          Hazte socio
        </a>
      </div>
    </div>
  );
}
