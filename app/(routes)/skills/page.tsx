// app/(routes)/skills/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APCC Skills — Cursos Presenciales y Digitales 2026',
  description:
    'Próximamente, nueva parrilla de cursos presenciales y digitales APCC Skills 2026 para emprendedores, profesionales y empresas.',
};

export default function Page() {
  return (
    <section className="container py-16">
      <header className="max-w-3xl">
        <p className="kicker text-xs tracking-[0.14em] uppercase text-neutral-500">
          APCC Skills · Formación 2026
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">
          Próximamente: parrilla de cursos 2026
        </h1>
        <p className="mt-3 text-[17px] leading-relaxed text-neutral-700">
          Estamos preparando la nueva <strong>oferta de cursos presenciales y
          digitales 2026</strong> del área APCC Skills, orientada a
          emprendedores, profesionales y equipos de empresas interesados en
          comercio internacional, importaciones, innovación y gestión.
        </p>
      </header>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold">
          ¿Qué encontrarás en APCC Skills 2026?
        </h2>
        <ul className="mt-4 space-y-2 text-[15px] text-neutral-700">
          <li>• Programas presenciales en Santiago y regiones.</li>
          <li>• Cursos 100% online y formatos híbridos.</li>
          <li>• Contenidos actualizados en comercio exterior y negocios.</li>
          <li>• Relatores con experiencia práctica en Chile y Asia–Pacífico.</li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h3 className="text-lg md:text-xl font-semibold">
            Mantente informado
          </h3>
          <p className="mt-2 text-[15px] text-neutral-700">
            Muy pronto publicaremos aquí el <strong>calendario completo de cursos
            2026</strong>, con fechas, modalidades y valores. Mientras tanto,
            puedes seguir las redes oficiales de la APCC para conocer
            anticipos y convocatorias.
          </p>
        </div>
      </section>
    </section>
  );
}
