import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Escríbenos para membresías, servicios, prensa o alianzas. APCC — Cámara de Comercio Asia Pacífico.',
};

const CONTACT = {
  email: 'info@asiapacific-chamber.com',
  phoneE164: '+56975769493',
  phoneNice: '+56 9 7576 9493',
  street: 'Fidel Oteiza 1916',
  city: 'Providencia',
  region: 'Región Metropolitana',
  country: 'Chile',
  postalCode: '7500502',
};

const SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/asiapacific-chamber',
  instagram: 'https://www.instagram.com/apcc.chamber',
  x: 'https://x.com/APCC_Chamber',
};

export default function Page() {
  return (
    <section className="container py-16">
      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Contacto</h1>
        <p className="mt-3 text-neutral-300">
          ¿Hablemos? Si buscas <strong>membresías, servicios, prensa</strong> o <strong>alianzas</strong>,
          déjanos tus datos y tt responderemos a la brevedad.
        </p>
      </header>

      {/* DATOS RÁPIDOS */}
      <section className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <div className="text-xs uppercase tracking-wider text-neutral-500">Email</div>
          <Link href={`mailto:${CONTACT.email}`} className="mt-1 block text-neutral-200 hover:underline">
            {CONTACT.email}
          </Link>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <div className="text-xs uppercase tracking-wider text-neutral-500">Teléfono</div>
          <Link href={`tel:${CONTACT.phoneE164}`} className="mt-1 block text-neutral-200 hover:underline">
            {CONTACT.phoneNice}
          </Link>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <div className="text-xs uppercase tracking-wider text-neutral-500">Oficinas</div>
          <div className="mt-1 text-neutral-200">
            {CONTACT.street}, {CONTACT.city} · {CONTACT.region}, {CONTACT.country}
            <div className="text-neutral-400 text-xs mt-1">C.P. {CONTACT.postalCode}</div>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="mt-10 grid lg:grid-cols-3 gap-8">
        {/* FORM (client) */}
        <ContactForm />

        {/* INFO LATERAL */}
        <aside className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8">
          <h3 className="text-lg font-semibold">Horarios y RRSS</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>Lunes a viernes · 09:00–18:00 (GMT-3)</li>
            <li>Atención híbrida (online y presencial)</li>
          </ul>

          <div className="mt-5">
            <div className="text-sm text-neutral-300 font-medium">Redes</div>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <Link href={SOCIAL.linkedin} target="_blank" className="text-neutral-300 hover:text-white underline">
                LinkedIn
              </Link>
              <Link href={SOCIAL.instagram} target="_blank" className="text-neutral-300 hover:text-white underline">
                Instagram
              </Link>
              <Link href={SOCIAL.x} target="_blank" className="text-neutral-300 hover:text-white underline">
                X (Twitter)
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-medium text-neutral-300">¿Prefieres agenda directa?</h4>
            <p className="mt-2 text-sm text-neutral-400">
              Te podemos agendar una videollamada de 20 minutos para entender tu caso.
            </p>
            <Link href="/membresias" className="mt-3 inline-flex btn btn-secondary">
              Conocer planes
            </Link>
          </div>
        </aside>
      </section>

      {/* MAPA */}
      <section className="mt-10 rounded-2xl overflow-hidden border border-neutral-800">
        <div className="aspect-[16/6] bg-neutral-950">
          <iframe
            title="Mapa APCC"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${CONTACT.street}, ${CONTACT.city}, ${CONTACT.region}, ${CONTACT.country} ${CONTACT.postalCode}`
            )}&output=embed`}
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-12">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">¿Listo para acelerar con Asia?</h3>
            <p className="mt-2 text-neutral-300 max-w-2xl">
              Únete a la Red Asia Pacífico y participa en misiones, matching, mesas y formación ejecutiva.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/membresias" className="btn btn-primary">Hazte socio</Link>
            <Link href="/servicios" className="btn btn-secondary">Ver servicios</Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Cámara de Comercio Asia Pacífico (APCC)',
            url: 'https://www.asiapacific-chamber.com/',
            email: CONTACT.email,
            telephone: CONTACT.phoneE164,
            sameAs: [SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.x],
            address: {
              '@type': 'PostalAddress',
              streetAddress: CONTACT.street,
              addressLocality: CONTACT.city,
              addressRegion: CONTACT.region,
              postalCode: CONTACT.postalCode,
              addressCountry: CONTACT.country,
            },
          }),
        }}
      />
    </section>
  );
}
