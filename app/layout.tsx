// app/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import './globals.css'; // usa ruta relativa simple para evitar alias

export const metadata: Metadata = {
  title: 'Cámara de Comercio Asia Pacífico – APCC',
  description: 'Membresías, eventos, misiones comerciales y recursos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ background: '#edeff2', color: '#000' }}>
        {children}
      </body>
    </html>
  );
}
