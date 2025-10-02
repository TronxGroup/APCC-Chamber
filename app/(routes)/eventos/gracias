// app/(routes)/eventos/gracias/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inscripción enviada | APCC",
  description:
    "Gracias por inscribirte. Te enviaremos la confirmación por correo.",
  robots: { index: false, follow: false }, // evita indexar esta página
  alternates: {
    canonical: "https://www.asiapacific-chamber.com/eventos/gracias",
  },
};

export default function GraciasEventosPage() {
  return (
    <section className="container py-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-[var(--apcc-text-2)] mb-4">
        <Link href="/eventos" className="apcc-link hover:opacity-90">
          Eventos
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--apcc-muted)]">Gracias</span>
      </nav>

      {/* Card principal */}
      <div className="card p-8 max-w-2xl">
        {/* Icono de check */}
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-[var(--apcc-text)]">
          ¡Gracias! Recibimos tu inscripción
        </h1>
        <p className="mt-3 text-[var(--apcc-text-2)]">
          Enviaremos la confirmación y los detalles del evento a tu correo.
          <br />
          Si no lo ves en unos minutos, revisa tu carpeta de spam o
          “Promociones”.
        </p>

        {/* Acciones */}
        <div className="mt-6 grid gap-3 sm:flex">
          <Link href="/eventos" className="btn btn-primary">
            Ver próximos eventos
          </Link>
          <Link href="/membresias" className="btn btn-outline">
            Quiero ser socio
          </Link>
          <Link href="/" className="btn btn-outline">
            Ir al inicio
          </Link>
        </div>

        {/* Nota de soporte */}
        <p className="mt-6 text-sm text-[var(--apcc-muted)]">
          ¿Tienes dudas? Escríbenos a{" "}
          <a
            href="mailto:info@asiapacific-chamber.com"
            className="apcc-link underline underline-offset-4"
          >
            info@asiapacific-chamber.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
