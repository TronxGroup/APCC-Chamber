// app/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Cámara de Comercio Asia Pacífico – APCC',
  description: 'Membresías, eventos, misiones comerciales y recursos.',
  metadataBase: new URL('https://asiapacific-chamber.com'),
  icons: { icon: '/favicon.ico' },
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-[#222] hover:text-[var(--apcc-accent)] transition-colors"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* apcc-light activa el “patcher” global */}
      <body className="apcc-light bg-[var(--apcc-bg)] text-[var(--apcc-text)]">
        {/* HEADER */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-[var(--apcc-border)]">
          <nav className="container h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center" aria-label="Ir al inicio APCC">
              <Image
                src="/Logo_apcc_web.png"
                alt="Cámara de Comercio Asia Pacífico — APCC"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <NavLink href="/quienes-somos">Quiénes somos</NavLink>
              <NavLink href="/membresias">Membresías</NavLink>
              <NavLink href="/eventos">Eventos</NavLink>
              <NavLink href="/noticias">Noticias</NavLink>
              <NavLink href="/apcc-tv">APCC TV</NavLink>
              <NavLink href="/contacto">Contacto</NavLink>
              <Link href="/join" className="btn btn-primary">Hazte socio</Link>
            </div>
          </nav>
        </header>

        {/* MAIN: sin container para permitir secciones full-bleed */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-[var(--apcc-border)]">
          <div className="container py-10 text-sm text-[var(--apcc-text-2)] flex flex-col gap-8">
            {/* Top row: Brand + Contact + Social */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Brand + address */}
              <div className="flex items-start gap-4">
                <Image
                  src="/Logo_apcc_web.png"
                  alt="APCC — Cámara de Comercio Asia Pacífico"
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <div className="space-y-1">
                  <div className="font-medium text-[var(--apcc-text)]">
                    Cámara de Comercio Asia Pacífico – APCC
                  </div>
                  <div>Santiago, Chile · Alianzas en LatAm y Asia</div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <a
                      href="mailto:info@asiapacific-chamber.com"
                      className="apcc-link underline underline-offset-4"
                    >
                      info@asiapacific-chamber.com
                    </a>
                    <span>·</span>
                    <a
                      href="tel:+56975769493"
                      className="apcc-link"
                      aria-label="Llamar a APCC +56 9 7576 9493"
                    >
                      +56 9 7576 9493
                    </a>
                    <span>·</span>
                    <a
                      href="https://wa.me/56975769493"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apcc-link"
                      aria-label="Escribir por WhatsApp a APCC"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/asiapacific-chamber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--apcc-text-2)] hover:text-[var(--apcc-text)]"
                  aria-label="LinkedIn APCC"
                  title="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 8.98h3.96V21H3V8.98Zm7.34 0H14.2v1.64h.05c.67-1.2 2.31-2 4.27-2C21 8.62 22 11 22 14.36V21h-3.96v-5.64c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.99V21H10.2V8.98h.14Z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://web.facebook.com/apcc.chamber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--apcc-text-2)] hover:text-[var(--apcc-text)]"
                  aria-label="Facebook APCC"
                  title="Facebook"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.21 10.44 22v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.86h2.77l-.44 2.91h-2.33V22C18.34 21.21 22 17.08 22 12.06Z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/apcc.chamber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--apcc-text-2)] hover:text-[var(--apcc-text)]"
                  aria-label="Instagram APCC"
                  title="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5-1.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"/>
                  </svg>
                </a>
                {/* X */}
                <a
                  href="https://x.com/APCC_Chamber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--apcc-text-2)] hover:text-[var(--apcc-text)]"
                  aria-label="X (Twitter) APCC"
                  title="X"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M3 3h5.6l4.35 6.16L17.9 3H21l-7.03 9.63L21.5 21h-5.6l-4.78-6.77L6.1 21H3l7.58-10.4L3 3Z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@apcc.chamber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--apcc-text-2)] hover:text-[var(--apcc-text)]"
                  aria-label="YouTube APCC"
                  title="YouTube"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.7-.8-2.1-.9C16.8 2.6 12 2.6 12 2.6h-.1s-4.8 0-8.6.3c-.5.1-1.4.1-2.2.9-.6.6-.8 2.4-.8 2.4S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.7.8 2.4c.8.8 1.9.8 2.4.9 1.7.2 7.2.3 7.2.3s4.8 0 8.6-.3c.5-.1 1.4-.1 2.2-.9.6-.6.8-2.4.8-2.4s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8ZM9.6 14.3V7.7l6.2 3.3-6.2 3.3Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Middle row: nav links */}
            <div className="flex flex-wrap gap-4 text-xs">
              <NavLink href="/servicios">Servicios</NavLink>
              <NavLink href="/recursos">Recursos</NavLink>
              <NavLink href="/directorio">Directorio</NavLink>
              <NavLink href="/hklaba">HKLABA</NavLink>
              <NavLink href="/skills">APCC Skills</NavLink>
              <NavLink href="/apcc-tv">APCC TV</NavLink>
              <NavLink href="/terminos-y-condiciones">Términos</NavLink>
            </div>

            {/* Bottom row: legal */}
            <div className="text-xs text-[var(--apcc-muted)] max-w-3xl space-y-2">
              <div>© {new Date().getFullYear()} APCC. Todos los derechos reservados.</div>
              <div>
                Tratamos tus datos conforme a nuestra{' '}
                <Link href="/terminos-y-condiciones" className="apcc-link">
                  Política de Privacidad
                </Link>
                . Escríbenos a{' '}
                <a href="mailto:info@asiapacific-chamber.com" className="apcc-link">
                  info@asiapacific-chamber.com
                </a>.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
