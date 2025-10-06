import type { Metadata } from 'next';
import Link from 'next/link';
import { EVENTS, type EventItem } from './data';

export const metadata: Metadata = {
  title: 'Eventos',
  description:
    'Calendario de eventos APCC: Webinars, seminarios, ruedas de negocios y misiones a Asia.',
};

const UPCOMING: EventItem[] = EVENTS;
const PAST: EventItem[] = [];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge badge--accent">{children}</span>;
}

export default function Page() {
  return (
    <section className="container py-16">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Eventos APCC</h1>
        <p className="mt-3 text-[var(--apcc-muted)]">
          Webinars, seminarios, ruedas de negocios y misiones a Asia diseñados
          para generar <strong>valor real</strong> a nuestros socios.
        </p>
      </header>

      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Próximos eventos</h2>
          <div className="text-sm text-[var(--apcc-muted)]">Calendario 2025</div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {UPCOMING.map((ev) => {
            const isFull = ev.slug === '2025-10-mesa-logistica-comercio-asia';
            return (
              <article key={ev.slug} className="group relative card overflow-hidden flex flex-col">
                <Link href={`/eventos/${ev.slug}`} className="absolute inset-0 z-[1]" aria-label={`Ver detalle: ${ev.title}`} />

                <div className="relative h-72 bg-[var(--apcc-bg)]">
                  <img
                    src={ev.poster}
                    alt={`Afiche ${ev.title}`}
                    className="h-72 w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <Badge>{ev.mode}</Badge>
                    {ev.membersOnly && <Badge>Socios APCC</Badge>}
                    {isFull && <Badge>Cupos completos</Badge>}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col relative z-[2]">
                  <h3 className="text-base font-semibold leading-snug">{ev.title}</h3>
                  <div className="mt-1 text-xs text-[var(--apcc-muted)]">
                    {ev.date}
                    {ev.time ? ` · ${ev.time}` : ''} · {ev.location}
                  </div>
                  <p className="mt-3 text-sm text-[var(--apcc-text-2)] flex-1">{ev.summary}</p>

                  <div className="mt-4 text-xs uppercase tracking-wider text-[var(--apcc-muted)]">
                    Invitados
                  </div>
                  <ul className="mt-1 text-sm text-[var(--apcc-text-2)] list-disc pl-5 space-y-1">
                    {ev.guests.map((g) => <li key={g}>{g}</li>)}
                  </ul>

                  {ev.sponsors && ev.sponsors.length > 0 && (
                    <div className="mt-4">
                      <div className="text-xs uppercase tracking-wider text-[var(--apcc-muted)]">Auspiciadores</div>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        {ev.sponsors.map((s) => (
                          <div key={s.name} className="h-8 px-3 rounded-xl border border-[var(--apcc-border)] bg-white grid place-items-center">
                            <img src={s.logo} alt={s.name} className="max-h-6 object-contain opacity-90" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-5 flex gap-3">
                    <Link href={`/eventos/${ev.slug}`} className="btn btn-outline">Ver detalle</Link>
                    {isFull ? (
                      <span className="btn btn-primary pointer-events-none opacity-60" aria-disabled="true">
                        Cupos completos
                      </span>
                    ) : (
                      <Link href={`/eventos/${ev.slug}#inscripcion`} className="btn btn-primary">Inscribirme</Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}
