// app/eventos/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getEventBySlug } from '../data';

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-red-900/60 bg-red-900/10 px-2 py-0.5 text-[11px] font-medium text-red-300">
      {children}
    </span>
  );
}

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const ev = getEventBySlug(params.slug);
  if (!ev) return { title: 'Evento no encontrado | APCC' };

  const title = `${ev.title} | APCC`;
  const description = `${ev.summary} — ${ev.date}${ev.time ? ` · ${ev.time}` : ''} · ${ev.location}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website', // ✅ válido para Next.js
      images: ev.poster ? [{ url: ev.poster }] : undefined, // ✅ forma tipada
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ev.poster ? [ev.poster] : undefined, // ✅ string[]
    },
  };
}

export default function EventDetailPage({ params }: PageProps) {
  const ev = getEventBySlug(params.slug);
  if (!ev) return notFound();

  const joinUrl = 'https://join.asiapacific-chamber.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: ev.title,
    description: ev.summary,
    eventAttendanceMode:
      ev.mode === 'Webinar'
        ? 'https://schema.org/OnlineEventAttendanceMode'
        : 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    image: ev.poster ? [`${ev.poster}`] : [],
    // Idealmente usa un ISO date aquí (ej: 2025-10-15T09:00:00-03:00)
    startDate: ev.date,
    location:
      ev.location.toLowerCase().includes('online')
        ? {
            '@type': 'VirtualLocation',
            url: joinUrl,
          }
        : {
            '@type': 'Place',
            name: ev.location,
            address: ev.location,
          },
    organizer: {
      '@type': 'Organization',
      name: 'APCC – Cámara de Comercio Asia Pacífico',
      url: 'https://asiapacific-chamber.com',
    },
  };

  return (
    <section className="container py-10">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-neutral-500 mb-4">
        <Link href="/eventos" className="hover:text-neutral-200">
          Eventos
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-300">{ev.title}</span>
      </nav>

      {/* Hero */}
      <header className="grid lg:grid-cols-[420px,1fr] gap-6 items-start">
        {/* Afiche vertical */}
        <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
          <div className="relative h-[560px] bg-neutral-800">
            <img
              src={ev.poster}
              alt={`Afiche ${ev.title}`}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute left-3 top-3 flex gap-2">
              <Badge>{ev.mode}</Badge>
              <Badge>Socios APCC</Badge>
            </div>
          </div>
        </div>

        {/* Info principal */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">{ev.title}</h1>

          <div className="mt-3 text-sm text-neutral-400 space-y-1">
            <div>
              <span className="text-neutral-500">Fecha:</span> {ev.date}
            </div>
            {ev.time && (
              <div>
                <span className="text-neutral-500">Horario:</span> {ev.time}
              </div>
            )}
            <div>
              <span className="text-neutral-500">Modalidad:</span> {ev.mode}
            </div>
            <div>
              <span className="text-neutral-500">Ubicación:</span> {ev.location}
            </div>
          </div>

          <p className="mt-4 text-neutral-200">{ev.summary}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={joinUrl} target="_blank" className="btn btn-primary">
              Inscribirme (socio)
            </Link>
            <Link href="/membresias" className="btn btn-secondary">
              Quiero ser socio
            </Link>
          </div>

          {/* Invitados */}
          {ev.guests?.length > 0 && (
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                Invitados
              </div>
              <ul className="mt-2 text-sm text-neutral-200 list-disc pl-5 space-y-1">
                {ev.guests.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Auspiciadores */}
          {ev.sponsors && ev.sponsors.length > 0 && (
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                Auspiciadores
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                {ev.sponsors.map((s) => (
                  <div
                    key={s.name}
                    className="h-9 px-3 rounded-xl border border-neutral-800 bg-neutral-950 grid place-items-center"
                  >
                    <img
                      src={s.logo}
                      alt={s.name}
                      className="max-h-7 object-contain opacity-80"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Agenda */}
      {ev.agenda && ev.agenda.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Agenda</h2>
          <div className="mt-3 rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden">
            <ul className="divide-y divide-neutral-800">
              {ev.agenda.map((a, idx) => (
                <li
                  key={idx}
                  className="grid md:grid-cols-[110px,1fr,220px] gap-3 p-4"
                >
                  <div className="text-sm text-neutral-400">{a.time}</div>
                  <div className="text-neutral-200">{a.topic}</div>
                  <div className="text-sm text-neutral-500">
                    {a.speaker ?? ''}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA inferior */}
      <section className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">¿Listo para asegurar tu cupo?</h3>
          <p className="mt-1 text-sm text-neutral-400">
            Acceso y materiales exclusivos para socios APCC.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/membresias" className="btn btn-secondary">
            Ver membresías
          </Link>
          <Link href={joinUrl} target="_blank" className="btn btn-primary">
            Inscribirme
          </Link>
        </div>
      </section>
    </section>
  );
}
