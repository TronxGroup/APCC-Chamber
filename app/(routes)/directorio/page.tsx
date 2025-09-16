import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Directorio de Socios',
};

type Member = {
  name: string;
  logo: string;
  sector: string;
  country: string;
  plan: 'Essential' | 'Business' | 'Corporate';
  website: string;
  linkedin?: string;
  blurb: string;
};

const MEMBERS: Member[] = [
  {
    name: 'Alimentos Andes',
    logo: '/partners/andes.png',
    sector: 'Alimentos & Bebidas',
    country: 'Chile',
    plan: 'Business',
    website: 'https://alimentosandes.cl',
    linkedin: 'https://linkedin.com/company/alimentosandes',
    blurb: 'Exportador de frutas y vinos con certificaciones internacionales.',
  },
  {
    name: 'Tech Pacific',
    logo: '/partners/techpacific.png',
    sector: 'Tecnología',
    country: 'Perú',
    plan: 'Corporate',
    website: 'https://techpacific.pe',
    linkedin: 'https://linkedin.com/company/techpacific',
    blurb: 'Proveedor de soluciones SaaS para importadores y cadenas logísticas.',
  },
  {
    name: 'Logística Altamar',
    logo: '/partners/altamar.png',
    sector: 'Logística',
    country: 'Bolivia',
    plan: 'Essential',
    website: 'https://logisticaaltamar.bo',
    blurb: 'Operador logístico regional con foco en rutas Pacífico–Atlántico.',
  },
];

export default function Page() {
  return (
    <section className="container py-16">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Directorio de Socios</h1>
        <p className="mt-3 text-neutral-300">
          Conoce a las empresas que forman parte de la Red Asia Pacífico. Este directorio es exclusivo para
          socios <strong>Business</strong> y <strong>Corporate</strong> (Essential tiene visibilidad básica).
        </p>
        <div className="mt-4">
          <Link href="/membresias" className="btn btn-primary">Hazte socio</Link>
        </div>
      </header>

      {/* GRID DE SOCIOS */}
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {MEMBERS.map((m) => (
          <article key={m.name} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col">
            <div className="h-16 flex items-center justify-center bg-neutral-950 rounded-xl">
              <img src={m.logo} alt={m.name} className="max-h-14 object-contain" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
            <p className="mt-1 text-sm text-neutral-400">{m.blurb}</p>
            <div className="mt-3 text-xs text-neutral-500">
              {m.sector} · {m.country}
            </div>
            <div className="mt-2 text-xs">
              <span className="inline-flex items-center rounded-full border border-red-900/60 bg-red-900/10 px-2 py-0.5 text-[11px] font-medium text-red-300">
                {m.plan}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href={m.website} target="_blank" className="text-neutral-300 hover:text-white underline">
                Sitio web
              </Link>
              {m.linkedin && (
                <Link href={m.linkedin} target="_blank" className="text-neutral-300 hover:text-white">
                  LinkedIn
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* CTA FINAL */}
      <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold">¿Quieres aparecer en el Directorio?</h3>
          <p className="mt-2 text-sm text-neutral-400">
            El Directorio de Socios es una vitrina exclusiva en América Latina y Asia. Muestra tu marca y conecta con potenciales aliados.
          </p>
        </div>
        <Link href="/membresias" className="btn btn-primary">Hazte socio</Link>
      </div>
    </section>
  );
}
