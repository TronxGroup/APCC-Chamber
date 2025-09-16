// app/eventos/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getEventBySlug } from '../data';

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge badge--accent">{children}</span>;
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
      type: 'website',
      images: ev.poster ? [{ url: ev.poster }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ev.poster ? [ev.poster] : undefined,
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
    image: ev.poster ? [ev.poster] : [],
    // Ideal: ISO date (ej: 2025-10-07T17:30:00-03:00). Si no, usamos el campo existente:
    startDate: ev.date,
    location:
      ev.location.toLowerCase().includes('online')
        ? { '@type': 'VirtualLocation', url: joinUrl }
        : { '@type': 'Place', name: ev.location, address: ev.location },
    organizer: {
      '@type': 'Organization',
      name: 'APCC – Cámara de Comercio Asia Pacífico',
      url: 'https://asiapacific-chamber.com',
    },
  };

  return (
    <section className="container py-10">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="text-sm text-[var(--apcc-text-2)] mb-4">
        <Link href="/eventos" className="apcc-link hover:opacity-90">Eventos</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--apcc-muted)]">{ev.title}</span>
      </nav>

      {/* Hero */}
      <header className="grid lg:grid-cols-[420px,1fr] gap-6 items-start">
        {/* Afiche */}
        <div className="card overflow-hidden">
          <div className="relative h-[560px] bg-[var(--apcc-bg)]">
            <img
              src={ev.poster}
              alt={`Afiche ${ev.title}`}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute left-3 top-3 flex gap-2">
              <Badge>{ev.mode}</Badge>
              {ev.membersOnly && <Badge>Socios APCC</Badge>}
            </div>
          </div>
        </div>

        {/* Info principal */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--apcc-text)]">{ev.title}</h1>

          <div className="mt-3 text-sm text-[var(--apcc-muted)] space-y-1">
            <div><span className="text-[var(--apcc-text-2)]">Fecha:</span> {ev.date}</div>
            {ev.time && <div><span className="text-[var(--apcc-text-2)]">Horario:</span> {ev.time}</div>}
            <div><span className="text-[var(--apcc-text-2)]">Modalidad:</span> {ev.mode}</div>
            <div><span className="text-[var(--apcc-text-2)]">Ubicación:</span> {ev.location}</div>
          </div>

          <p className="mt-4 text-[var(--apcc-text-2)]">{ev.summary}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={joinUrl} target="_blank" className="btn btn-primary">Inscribirme</Link>
            <Link href="/membresias" className="btn btn-outline">Quiero ser socio</Link>
          </div>

          {/* Invitados */}
          {ev.guests?.length > 0 && (
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-[var(--apcc-muted)]">Invitados</div>
              <ul className="mt-2 text-sm text-[var(--apcc-text-2)] list-disc pl-5 space-y-1">
                {ev.guests.map((g) => (<li key={g}>{g}</li>))}
              </ul>
            </div>
          )}

          {/* Auspiciadores */}
          {ev.sponsors && ev.sponsors.length > 0 && (
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-[var(--apcc-muted)]">Auspiciadores</div>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                {ev.sponsors.map((s) => (
                  <div key={s.name} className="h-9 px-3 rounded-xl border border-[var(--apcc-border)] bg-white grid place-items-center">
                    <img src={s.logo} alt={s.name} className="max-h-7 object-contain opacity-90" />
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
          <h2 className="text-xl font-semibold text-[var(--apcc-text)]">Agenda</h2>
          <div className="mt-3 card overflow-hidden">
            <ul className="divide-y" style={{ borderColor: 'var(--apcc-border)' }}>
              {ev.agenda.map((a, idx) => (
                <li key={idx} className="grid md:grid-cols-[110px,1fr,220px] gap-3 p-4">
                  <div className="text-sm text-[var(--apcc-muted)]">{a.time}</div>
                  <div className="text-[var(--apcc-text-2)]">{a.topic}</div>
                  <div className="text-sm text-[var(--apcc-muted)]">{a.speaker ?? ''}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA inferior */}
      <section className="mt-10 card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[var(--apcc-text)]">¿Listo para asegurar tu cupo?</h3>
          <p className="mt-1 text-sm text-[var(--apcc-text-2)]">Acceso y materiales exclusivos para socios APCC.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/membresias" className="btn btn-outline">Ver membresías</Link>
          <Link href={joinUrl} target="_blank" className="btn btn-primary">Inscribirme</Link>
        </div>
      </section>
    </section>
  );
}
