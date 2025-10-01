import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '¡Gracias por unirte! — APCC',
  description: 'Recibimos tu solicitud de membresía. Te contactaremos para finalizar tu incorporación.',
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-green-800/50 bg-green-900/20">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M20 7L10 17l-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="mt-6 text-3xl md:text-4xl font-semibold">¡Solicitud recibida!</h1>
        <p className="mt-3 text-neutral-300">
          Gracias por tu interés en APCC. Nos contactaremos muy pronto para completar tu membresía.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/membresias" className="btn btn-primary">Ver membresías</Link>
          <Link href="/servicios" className="btn btn-secondary">Explorar servicios</Link>
          <Link href="/" className="btn btn-secondary">Volver al inicio</Link>
        </div>
      </div>
    </section>
  );
}
