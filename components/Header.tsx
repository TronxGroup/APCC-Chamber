'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-sm text-[#222] hover:text-[var(--apcc-accent)] transition-colors px-2 py-2"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);

  // Cerrar al cambiar de tamaño (si pasa a desktop)
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-[var(--apcc-border)]">
      <nav className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Ir al inicio APCC" onClick={() => setOpen(false)}>
          <Image
            src="/Logo_apcc_web.png"
            alt="Cámara de Comercio Asia Pacífico — APCC"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="/quienes-somos">Quiénes somos</NavLink>
          <NavLink href="/membresias">Membresías</NavLink>
          <NavLink href="/eventos">Eventos</NavLink>
          <NavLink href="/noticias">Noticias</NavLink>
          <NavLink href="/contacto">Contacto</NavLink>
          <Link href="/join" className="btn btn-primary">Hazte socio</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-[var(--apcc-border)] bg-white/70 px-3 py-2 text-[var(--apcc-text)] shadow-sm hover:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* icono hamburguesa / close */}
          {open ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 border-t border-[var(--apcc-border)] ${open ? 'max-h-96' : 'max-h-0'}`}
        aria-hidden={!open}
      >
        <div className="container py-2 bg-white/90 backdrop-blur">
          <nav className="flex flex-col">
            <NavLink href="/quienes-somos" onClick={() => setOpen(false)}>Quiénes somos</NavLink>
            <NavLink href="/membresias" onClick={() => setOpen(false)}>Membresías</NavLink>
            <NavLink href="/eventos" onClick={() => setOpen(false)}>Eventos</NavLink>
            <NavLink href="/noticias" onClick={() => setOpen(false)}>Noticias</NavLink>
            <NavLink href="/contacto" onClick={() => setOpen(false)}>Contacto</NavLink>
            <div className="px-2 py-2">
              <Link href="/join" onClick={() => setOpen(false)} className="btn btn-primary w-full text-center">Hazte socio</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
