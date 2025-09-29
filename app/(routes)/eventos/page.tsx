// app/(routes)/eventos/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { EVENTS, type EventItem } from './data'; // ✅ ruta correcta

export const metadata: Metadata = {
  title: 'Eventos',
  description:
    'Calendario de eventos APCC: Webinars, seminarios, ruedas de negocios y misiones a Asia.',
};

// Usa la misma data del detalle
const UPCOMING: EventItem[] = EVENTS; // respeta el orden del array
const PAST: EventItem[] = []; // si quieres, filtra aquí por fecha

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge badge--accent">{children}</span>;
}

export default function Page() {
  return (
    <section className="container py-16">
      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Eventos APCC</h1>
        <p className="mt-3 text-[var(--apcc-muted)]">
          Webinars, seminarios, ruedas de negocios y misiones a Asia diseñados
          para generar <strong>valor real</strong> a nuestros socios.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Badge>Abiertos / Socios APCC</Badge>
          <span className="text-sm text-[var(--apcc-text-2)]">
            ¿Aún no eres socio?{' '}
            <Link
              href="/membresias"
              className="apcc-link underline underline-offset-4"
            >
              Revisa los planes
            </Link>{' '}
            o{' '}
            <Link
              href="https://join.asiapacific-chamber.com"
              target="_blank"
              className="apcc-link underline underline-offset-4"
            >
              súmate ahora
            </Link>
            .
          </span>
        </div>
      </header>

      {/* PRÓXIMOS EVENTOS */}
      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Próximos eventos</h2>
          <div className="text-sm text-[var(--apcc-muted)]">Calendario 2025</div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {UPCOMING.map((ev) => (
            <article
              key={ev.slug}
              className="group relative card overflow-hidden flex flex-col"
            >
              {/* LINK overlay para toda la tarjeta */}
              <Link
                href={`/eventos/${ev.slug}`}
                className="absolute inset-0 z-[1]"
                aria-label={`Ver detalle: ${ev.title}`}
              />

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
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col relative z-[2]">
                <h3 className="text-base font-semibold leading-snug">
                  {ev.title}
                </h3>
                <div className="mt-1 text-xs text-[var(--apcc-muted)]">
                  {ev.date}
                  {ev.time ? ` · ${ev.time}` : ''} · {ev.location}
                </div>
                <p className="mt-3 text-sm text-[var(--apcc-text-2)] flex-1">
                  {ev.summary}
                </p>

                <div className="mt-4">
                  <div className="text-xs uppercase tracking-wider text-[var(--apcc-muted)]">
                    Invitados
                  </div>
                  <ul className="mt-1 text-sm text-[var(--apcc-text-2)] list-disc pl-5 space-y-1">
                    {ev.guests.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>

                {ev.sponsors && ev.sponsors.length > 0 && (
                  <div className="mt-4">
                    <div className="text-xs uppercase tracking-wider text-[var(--apcc-muted)]">
                      Auspiciadores
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      {ev.sponsors.map((s) => (
                        <div
                          key={s.name}
                          className="h-8 px-3 rounded-xl border border-[var(--apcc-border)] bg-white grid place-items-center"
                        >
                          <img
                            src={s.logo}
                            alt={s.name}
                            className="max-h-6 object-contain opacity-90"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-5 flex gap-3">
                  <Link href={`/eventos/${ev.slug}`} className="btn btn-outline">
                    Ver detalle
                  </Link>
                  <Link
                    href={`/eventos/${ev.slug}#inscripcion`}
                    className="btn btn-primary"
                  >
                    Inscribirme
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EVENTOS PASADOS (opcional) */}
      {PAST.length > 0 && (
        <section className="mt-14 border-t border-[var(--apcc-border)] pt-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Eventos pasados</h2>
            <div className="text-sm text-[var(--apcc-muted)]">Highlights recientes</div>
          </div>
          {/* grid de pasados... */}
        </section>
      )}
    </section>
  );
}
