import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '¡Gracias! — APCC',
  description:
    'Recibimos tu mensaje. Te contactaremos pronto desde APCC — Cámara de Comercio Asia Pacífico.',
  robots: { index: false, follow: false }, // gracias: no hace falta indexar
};

const CONTACT = {
  email: 'info@asiapacific-chamber.com',
  phoneE164: '+56975769493',
  phoneNice: '+56 9 7576 9493',
};

export default function Page() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-green-800/50 bg-green-900/20">
          {/* check icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M20 7L10 17l-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="mt-6 text-3xl md:text-4xl font-semibold">¡Gracias por escribirnos!</h1>
        <p className="mt-3 text-neutral-300">
          Recibimos tu solicitud y nuestro equipo te responderá a la brevedad
          (lunes a viernes, 09:00–18:00 GMT-3).
        </p>

        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-left">
          <h2 className="text-lg font-semibold">¿Qué sigue?</h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300 list-disc pl-5">
            <li>Te contactaremos al correo o teléfono que nos indicaste para coordinar próximos pasos.</li>
            <li>Si tu consulta es sobre membresías, te enviaremos la propuesta y calendario de actividades.</li>
            <li>Para prensa o alianzas, agendaremos una breve videollamada de coordinación.</li>
          </ul>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <div className="text-xs uppercase tracking-wider text-neutral-500">Email</div>
              <Link href={`mailto:${CONTACT.email}`} className="mt-1 block hover:underline">
                {CONTACT.email}
              </Link>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <div className="text-xs uppercase tracking-wider text-neutral-500">Teléfono</div>
              <Link href={`tel:${CONTACT.phoneE164}`} className="mt-1 block hover:underline">
                {CONTACT.phoneNice}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/membresias" className="btn btn-primary">Ver membresías</Link>
          <Link href="/servicios" className="btn btn-secondary">Explorar servicios</Link>
          <Link href="/" className="btn btn-secondary">Volver al inicio</Link>
        </div>
      </div>

      {/* JSON-LD: breadcrumb simple */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://www.asiapacific-chamber.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contacto',
                item: 'https://www.asiapacific-chamber.com/contacto',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Gracias',
                item: 'https://www.asiapacific-chamber.com/gracias-contacto',
              },
            ],
          }),
        }}
      />
    </section>
  );
}
