// app/(routes)/eventos/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getEventBySlug } from '../data';
import EventSignupForm from '@/components/EventSignupForm';

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge badge--accent">{children}</span>;
}

type PageProps = { params: { slug: string } };

// 👉 Define el tipo de estado permitido
type EventStatus = 'finalized' | 'full' | null;

// —————————————————————————————
// Estado por slug exacto
// - TOYS (07 Oct): Finalizado (sin formulario)
// - Mesa Logística (21 Oct): ACTIVO (con formulario)
// - Resto: ACTIVO (con formulario)
function resolveStatus(slug: string): EventStatus {
  switch (slug) {
    case '2025-10-webinar-ferias-hktdc-toys-baby-stationery':
      return 'finalized';
    default:
      return null; // activo con formulario
  }
}
// —————————————————————————————

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

  const status = resolveStatus(ev.slug);
  const isFull = status === 'full';
  const isFinalized = status === 'finalized';

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
    eventStatus: isFinalized
      ? 'https://schema.org/EventCompleted'
      : 'https://schema.org/EventScheduled',
    image: ev.poster ? [ev.poster] : [],
    startDate: ev.date, // Considera formatear a ISO 8601 si quieres SEO más fino
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-[var(--apcc-text-2)] mb-4">
        <Link href="/eventos" className="apcc-link hover:opacity-90">Eventos</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--apcc-muted)]">{ev.title}</span>
      </nav>

      <header className="grid lg:grid-cols-[420px,1fr] gap-6 items-start">
        <div className="card overflow-hidden">
          <div className="relative h-[560px] bg-[var(--apcc-bg)]">
            <img src={ev.poster} alt={`Afiche ${ev.title}`} className="h-full w-full object-cover" loading="eager" />
            <div className="absolute left-3 top-3 flex gap-2">
              <Badge>{ev.mode}</Badge>
              {ev.membersOnly && <Badge>Socios APCC</Badge>}
              {isFull && <Badge>Cupos completos</Badge>}
              {isFinalized && <Badge>Finalizado</Badge>}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--apcc-text)]">{ev.title}</h1>

          <div className="mt-3 text-sm text-[var(--apcc-muted)] space-y-1">
            <div><span className="text-[var(--apcc-text-2)]">Fecha:</span> {ev.date}</div>
            {ev.time && <div><span className="text-[var(--apcc-text-2)]">Horario:</span> {ev.time}</div>}
            <div><span className="text-[var(--apcc-text-2)]">Modalidad:</span> {ev.mode}</div>
            <div><span className="text-[var(--apcc-text-2)]">Ubicación:</span> {ev.location}</div>
            {isFinalized && <div className="text-[var(--apcc-text)] font-medium mt-1">Estado: Finalizado</div>}
            {isFull && <div className="text-[var(--apcc-text)] font-medium mt-1">Estado: Cupos completos</div>}
          </div>

          <p className="mt-4 text-[var(--apcc-text-2)]">{ev.summary}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            {isFull || isFinalized ? (
              <>
                <span className="btn btn-primary pointer-events-none opacity-60" aria-disabled="true">
                  {isFinalized ? 'Finalizado' : 'Cupos completos'}
                </span>
                <Link href="/eventos" className="btn btn-outline">Ver otros eventos</Link>
              </>
            ) : (
              <>
                <Link href="#inscripcion" className="btn btn-primary">Inscribirme</Link>
                <Link href="/membresias" className="btn btn-outline">Quiero ser socio</Link>
              </>
            )}
          </div>

          {ev.guests?.length > 0 && (
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-[var(--apcc-muted)]">Invitados</div>
              <ul className="mt-2 text-sm text-[var(--apcc-text-2)] list-disc pl-5 space-y-1">
                {ev.guests.map((g) => (<li key={g}>{g}</li>))}
              </ul>
            </div>
          )}

          {ev.sponsors && ev.sponsors.length > 0 && (
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-[var(--apcc-muted)]">Patrocinadores</div>
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

      <div id="inscripcion" className="scroll-mt-24">
        {isFull || isFinalized ? (
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-[var(--apcc-text)]">
              {isFinalized ? 'Evento finalizado' : 'Cupos completos'}
            </h3>
            <p className="mt-2 text-sm text-[var(--apcc-text-2)]">
              {isFinalized
                ? 'Gracias por tu interés. Este evento ya finalizó. Te invitamos a revisar el calendario de próximos eventos o unirte como socio APCC.'
                : 'Gracias por tu interés. Los cupos para este evento se han completado. Te invitamos a revisar el calendario de próximos eventos o unirte como socio APCC.'}
            </p>
            <div className="mt-4 flex gap-3">
              <Link href="/eventos" className="btn btn-outline">Ver próximos eventos</Link>
              <Link href="/membresias" className="btn btn-primary">Ver membresías</Link>
            </div>
          </div>
        ) : (
          <EventSignupForm
            event={{
              slug: ev.slug,
              title: ev.title,
              date: ev.date,
              membersOnly: ev.membersOnly,
            }}
          />
        )}
      </div>

      <section className="mt-10 card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[var(--apcc-text)]">
            {isFinalized ? '¡Gracias por participar!' : isFull ? '¡Gracias por tu interés!' : '¿Listo para asegurar tu cupo?'}
          </h3>
          <p className="mt-1 text-sm text-[var(--apcc-text-2)]">
            {isFinalized
              ? 'Este evento ya finalizó. Revisa nuestras actividades próximas.'
              : isFull
              ? 'Este evento ya no tiene cupos disponibles. Revisa nuestras actividades próximas.'
              : 'Acceso y materiales exclusivos para socios APCC.'}
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/membresias" className="btn btn-outline">Ver membresías</Link>
          {isFull || isFinalized ? (
            <span className="btn btn-primary pointer-events-none opacity-60" aria-disabled="true">
              {isFinalized ? 'Finalizado' : 'Cupos completos'}
            </span>
          ) : (
            <Link href="#inscripcion" className="btn btn-primary">Inscribirme</Link>
          )}
        </div>
      </section>
    </section>
  );
}
