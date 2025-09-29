import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Escríbenos para membresías, servicios, prensa o alianzas. APCC — Cámara de Comercio Asia Pacífico.',
};

export default function Page() {
  return (
    <section className="container py-16">
      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Contacto</h1>
        <p className="mt-3 text-neutral-300">
          ¿Hablemos? Si buscas <strong>membresías, servicios, prensa</strong> o <strong>alianzas</strong>,
          déjanos tus datos y te responderemos a la brevedad.
        </p>
      </header>

      {/* DATOS RÁPIDOS */}
      <section className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <div className="text-xs uppercase tracking-wider text-neutral-500">Email</div>
          <Link href="mailto:info@asiapacific-chamber.com" className="mt-1 block text-neutral-200 hover:underline">
            info@asiapacific-chamber.com
          </Link>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <div className="text-xs uppercase tracking-wider text-neutral-500">Teléfono</div>
          <Link href="tel:+56920080031" className="mt-1 block text-neutral-200 hover:underline">
            +56 9 2008 0031
          </Link>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <div className="text-xs uppercase tracking-wider text-neutral-500">Oficinas</div>
          <div className="mt-1 text-neutral-200">Santiago, Chile · Alianzas en Perú y Bolivia</div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="mt-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8">
          <h2 className="text-xl font-semibold">Envíanos un mensaje</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Cuéntanos tu objetivo y cómo podemos ayudarte.
          </p>

          {/* 
            👉 Reemplaza `action` por tu endpoint real (Formspree, Getform o tu API):
            - Formspree: https://formspree.io/f/XXXXXXXX
            - API propia: /api/contacto (necesita handler)
          */}
          <form
            action="https://formspree.io/f/XXXXXXXX"
            method="POST"
            className="mt-6 grid gap-4"
          >
            {/* Honeypot anti-spam */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Motivo */}
            <div className="grid md:grid-cols-2 gap-4">
              <label className="grid gap-1">
                <span className="text-sm text-neutral-300">Motivo</span>
                <select
                  name="motivo"
                  required
                  className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="membresias">Quiero ser socio</option>
                  <option value="servicios">Servicios APCC</option>
                  <option value="prensa">Prensa y vocerías</option>
                  <option value="alianzas">Alianzas</option>
                  <option value="otros">Otros</option>
                </select>
              </label>

              <label className="grid gap-1">
                <span className="text-sm text-neutral-300">País</span>
                <input
                  type="text"
                  name="pais"
                  placeholder="Chile, Perú, Bolivia, etc."
                  className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
                />
              </label>
            </div>

            {/* Identificación */}
            <div className="grid md:grid-cols-2 gap-4">
              <label className="grid gap-1">
                <span className="text-sm text-neutral-300">Nombre completo</span>
                <input
                  type="text"
                  name="nombre"
                  required
                  className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-neutral-300">Empresa</span>
                <input
                  type="text"
                  name="empresa"
                  className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
                />
              </label>
            </div>

            {/* Contacto */}
            <div className="grid md:grid-cols-2 gap-4">
              <label className="grid gap-1">
                <span className="text-sm text-neutral-300">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-neutral-300">Teléfono</span>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="+56 9 ..."
                  className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
                />
              </label>
            </div>

            {/* Mensaje */}
            <label className="grid gap-1">
              <span className="text-sm text-neutral-300">Mensaje</span>
              <textarea
                name="mensaje"
                rows={5}
                required
                placeholder="Cuéntanos brevemente tu objetivo, plazos y presupuesto estimado."
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
              />
            </label>

            {/* Consentimiento */}
            <label className="mt-1 inline-flex items-start gap-2 text-sm text-neutral-400">
              <input type="checkbox" name="consent" required className="mt-1 accent-red-700" />
              Autorizo a APCC a contactarme y tratar mis datos con fines comerciales y de soporte conforme a su política de privacidad.
            </label>

            <div className="mt-4 flex flex-wrap gap-3">
              <button type="submit" className="btn btn-primary">Enviar</button>
              <Link href="/membresias" className="btn btn-secondary">Ver membresías</Link>
            </div>
          </form>
        </div>

        {/* INFO LATERAL */}
        <aside className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8">
          <h3 className="text-lg font-semibold">Horarios y RRSS</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li>Lunes a viernes · 09:00–18:00 (GMT-3)</li>
            <li>Atención híbrida (online y presencial)</li>
          </ul>

          <div className="mt-5">
            <div className="text-sm text-neutral-300 font-medium">Redes</div>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <Link href="https://www.linkedin.com" target="_blank" className="text-neutral-300 hover:text-white underline">
                LinkedIn
              </Link>
              <Link href="https://www.instagram.com" target="_blank" className="text-neutral-300 hover:text-white underline">
                Instagram
              </Link>
              <Link href="https://x.com" target="_blank" className="text-neutral-300 hover:text-white underline">
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
            src="https://www.google.com/maps?q=Santiago+Chile&output=embed"
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
            <p className="mt-2 text-neutral-400 max-w-2xl">
              Únete a la Red Asia Pacífico y participa en misiones, matching, mesas y formación ejecutiva.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/membresias" className="btn btn-primary">Hazte socio</Link>
            <Link href="/servicios" className="btn btn-secondary">Ver servicios</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
