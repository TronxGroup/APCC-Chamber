import type { Metadata } from 'next';
import '@/styles/globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cámara de Comercio Asia Pacífico – APCC',
  description: 'Membresías, eventos, misiones comerciales y recursos.',
  metadataBase: new URL('https://asiapacific-chamber.com'),
  icons: { icon: '/favicon.ico' },
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-neutral-300 hover:text-white">
      {children}
    </Link>
  );
}

// ========== ICONOS INLINE ==========
const iconBase = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  className: 'w-5 h-5',
};

const LinkedInIcon = () => (
  <svg {...iconBase}><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.9-2.2 4.1 0 4.9 2.7 4.9 6.2V24h-4v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z"/></svg>
);

const InstagramIcon = () => (
  <svg {...iconBase}><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>
);

const FacebookIcon = () => (
  <svg {...iconBase}><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114 6h3v3h-3c-.3 0-.5.2-.5.5V12H17l-.5 3h-3v7A10 10 0 0022 12z"/></svg>
);

const YouTubeIcon = () => (
  <svg {...iconBase}><path d="M10 15l5.2-3L10 9v6zm12-3c0-2.5-.2-4.2-.5-5-.3-.9-1-1.6-2-1.9C18.5 5.5 12 5.5 12 5.5s-6.5 0-7.5.6c-1 .3-1.7 1-2 1.9-.3.8-.5 2.5-.5 5s.2 4.2.5 5c.3.9 1 1.6 2 1.9 1 .6 7.5.6 7.5.6s6.5 0 7.5-.6c1-.3 1.7-1 2-1.9.3-.8.5-2.5.5-5z"/></svg>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-neutral-950 text-neutral-100">
        {/* HEADER */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
          <nav className="container h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src="/Logo_apcc_web.png"
                alt="Cámara Asia Pacífico – APCC"
                className="h-10 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <NavLink href="/quienes-somos">Quiénes somos</NavLink>
              <NavLink href="/membresias">Membresías</NavLink>
              <NavLink href="/eventos">Eventos</NavLink>
              <NavLink href="/noticias">Noticias</NavLink>
              <NavLink href="/contacto">Contacto</NavLink>
              <Link href="https:/join" className="btn btn-primary">
                Hazte socio
              </Link>
            </div>
          </nav>
        </header>

        {/* MAIN */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-neutral-800">
          <div className="container py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="font-medium text-neutral-300">
                Cámara de Comercio Asia Pacífico – APCC
              </div>
              <div>Santiago, Chile · Alianzas en LatAm y Asia</div>
              <div>
                <a href="mailto:info@asiapacific-chamber.com" className="hover:text-neutral-200">
                  info@asiapacific-chamber.com
                </a>{' '}
                · +56 9 2008 0031
              </div>
            </div>

            {/* Links secundarios */}
            <div className="flex flex-wrap gap-4 text-xs">
              <NavLink href="/servicios">Servicios</NavLink>
              <NavLink href="/recursos">Recursos</NavLink>
              <NavLink href="/directorio">Directorio</NavLink>
              <NavLink href="/hklaba">HKLABA</NavLink>
              <NavLink href="/apccskills">APCC Skills</NavLink>
              <NavLink href="/terminos-y-condiciones">Términos</NavLink>
            </div>

            {/* Aviso privacidad breve + RRSS */}
            <div className="text-xs text-neutral-500 max-w-xs space-y-2">
              <div>
                © {new Date().getFullYear()} APCC. Todos los derechos reservados.
              </div>
              <div>
                Tratamos tus datos conforme a nuestra{' '}
                <Link
                  href="/terminos-y-condiciones"
                  className="underline underline-offset-4 hover:text-neutral-300"
                >
                  Política de Privacidad
                </Link>
                . Puedes ejercer tus derechos escribiendo a{' '}
                <a href="mailto:info@asiapacific-chamber.com" className="underline hover:text-neutral-300">
                  info@asiapacific-chamber.com
                </a>.
              </div>
              <div className="flex gap-4 pt-2 text-neutral-400">
                <a
                  href="https://www.linkedin.com/company/asiapacific-chamber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.instagram.com/apcc.chamber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://web.facebook.com/apcc.chamber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.youtube.com/@apcc.chamber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
