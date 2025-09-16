// app/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Cámara de Comercio Asia Pacífico – APCC',
  description: 'Membresías, eventos, misiones comerciales y recursos.',
  metadataBase: new URL('https://asiapacific-chamber.com'),
  icons: { icon: '/favicon.ico' },
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-[#222] hover:text-[var(--apcc-accent)] transition-colors">
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
            <Link href="/" className="flex items-center">
              <img src="/Logo_apcc_web.png" alt="Cámara Asia Pacífico – APCC" className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <NavLink href="/quienes-somos">Quiénes somos</NavLink>
              <NavLink href="/membresias">Membresías</NavLink>
              <NavLink href="/eventos">Eventos</NavLink>
              <NavLink href="/noticias">Noticias</NavLink>
              <NavLink href="/contacto">Contacto</NavLink>
              <Link href="/join" className="btn btn-primary">Hazte socio</Link>
            </div>
          </nav>
        </header>

        {/* MAIN */}
        <main className="container">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-[var(--apcc-border)]">
          <div className="container py-10 text-sm text-[var(--apcc-text-2)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="font-medium text-[var(--apcc-text)]">Cámara de Comercio Asia Pacífico – APCC</div>
              <div>Santiago, Chile · Alianzas en LatAm y Asia</div>
              <div>
                <a href="mailto:info@asiapacific-chamber.com" className="apcc-link underline underline-offset-4">
                  info@asiapacific-chamber.com
                </a>{' '}
                · +56 9 2008 0031
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs">
              <NavLink href="/servicios">Servicios</NavLink>
              <NavLink href="/recursos">Recursos</NavLink>
              <NavLink href="/directorio">Directorio</NavLink>
              <NavLink href="/hklaba">HKLABA</NavLink>
              <NavLink href="/apccskills">APCC Skills</NavLink>
              <NavLink href="/terminos-y-condiciones">Términos</NavLink>
            </div>

            <div className="text-xs text-[var(--apcc-muted)] max-w-xs space-y-2">
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
