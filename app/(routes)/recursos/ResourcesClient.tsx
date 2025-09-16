'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type ResourceItem = {
  id: string;
  title: string;
  category: 'Guías' | 'Reportes' | 'Radar de Ferias' | 'Plantillas' | (string & {});
  summary: string;
  tags: string[];
  file?: string;
  externalUrl?: string;
  membersOnly?: boolean;
  date?: string;
};

const CATEGORIES: Array<ResourceItem['category']> = [
  'Guías',
  'Reportes',
  'Radar de Ferias',
  'Plantillas',
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-red-900/60 bg-red-900/10 px-2 py-0.5 text-[11px] font-medium text-red-300">
      {children}
    </span>
  );
}

export default function ResourcesClient({ resources }: { resources: ResourceItem[] }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<'Todas' | ResourceItem['category']>('Todas');
  const [onlyFree, setOnlyFree] = useState(false);

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchCat = cat === 'Todas' ? true : r.category === cat;
      const matchText =
        q.trim().length === 0
          ? true
          : (r.title + ' ' + r.summary + ' ' + r.tags.join(' ')).toLowerCase().includes(q.toLowerCase());
      const matchFree = onlyFree ? !r.membersOnly : true;
      return matchCat && matchText && matchFree;
    });
  }, [q, cat, onlyFree, resources]);

  return (
    <section className="container py-16">
      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Recursos APCC</h1>
        <p className="mt-3 text-neutral-300">
          Biblioteca con <strong>guías, reportes sectoriales, radar de ferias y plantillas</strong> para acelerar tu operación con Asia.
          Parte del contenido es <strong>exclusivo para socios</strong>.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Badge>Exclusivo para socios</Badge>
          <span className="text-sm text-neutral-500">
            ¿Aún no eres socio?{' '}
            <Link href="/membresias" className="underline underline-offset-4 hover:text-neutral-200">
              Revisa los planes
            </Link>{' '}
            o{' '}
            <Link href="https://join.asiapacific-chamber.com" target="_blank" className="underline underline-offset-4 hover:text-neutral-200">
              súmate ahora
            </Link>.
          </span>
        </div>
      </header>

      {/* CONTROLES */}
      <section className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por título, tags o resumen…"
            className="w-full md:flex-1 rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
          />
          <div className="flex gap-3">
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value as any)}
              className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm"
            >
              <option value="Todas">Todas las categorías</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <label className="inline-flex items-center gap-2 text-sm text-neutral-300">
              <input
                type="checkbox"
                checked={onlyFree}
                onChange={(e) => setOnlyFree(e.target.checked)}
                className="accent-red-700"
              />
              Mostrar solo abiertos
            </label>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((r) => (
          <article key={r.id} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-wider text-neutral-500">{r.category}</div>
              <div className="text-xs text-neutral-500">{r.date}</div>
            </div>
            <h3 className="mt-2 text-lg font-semibold">{r.title}</h3>
            <p className="mt-2 text-sm text-neutral-400 flex-1">{r.summary}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span key={t} className="rounded-full border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-[11px] text-neutral-400">
                  #{t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              {r.membersOnly ? <Badge>Solo socios</Badge> : <span className="text-xs text-neutral-500">Recurso abierto</span>}
              <div className="flex gap-2">
                {r.file && !r.membersOnly && (
                  <a href={r.file} download className="btn btn-secondary text-xs">
                    Descargar
                  </a>
                )}
                {r.file && r.membersOnly && (
                  <>
                    <Link href="/membresias" className="btn btn-secondary text-xs">Ver planes</Link>
                    <Link href="https://join.asiapacific-chamber.com" target="_blank" className="btn btn-primary text-xs">
                      Hazte socio
                    </Link>
                  </>
                )}
                {r.externalUrl && (
                  <Link href={r.externalUrl} target="_blank" className="btn btn-secondary text-xs">
                    Abrir
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* BLOQUE INTELIGENCIA / CONTACTO */}
      <section className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold">¿Necesitas un reporte a medida?</h3>
          <p className="mt-2 text-sm text-neutral-400">
            Podemos desarrollar <strong>inteligencia comercial personalizada</strong> para tu sector y target en Asia.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/contacto" className="btn btn-secondary">Solicitar alcance</Link>
          <Link href="/membresias" className="btn btn-primary">Conocer membresías</Link>
        </div>
      </section>
    </section>
  );
}
