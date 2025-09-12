import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Membresías',
  description:
    'Membresías APCC 2026–2030: Essential, Business y Corporate. Beneficios reales: misiones, roundtables, business matching, networking e inteligencia comercial.',
};

type Plan = {
  id: 'essential' | 'business' | 'corporate';
  name: string;
  price: string;
  blurb: string;
  best?: boolean;
  features: string[];
  ctaHref: string;
  ctaLabel: string;
  note?: string;
};

const PLANS: Plan[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: '$200.000 CLP / año',
    blurb: 'Pensada para PYMEs y nuevos importadores que comienzan con Asia.',
    features: [
      'Certificado oficial de socio',
      'Webinars mensuales (tendencias, aduanas, logística, financiamiento)',
      'Boletín con oportunidades Asia–Pacífico',
      '1 participación anual en mesa gremial',
      'Descuentos en cursos y seminarios',
      'Acceso a biblioteca digital de guías y reportes',
      'Acceso a grupos segmentados (WhatsApp/Slack)',
    ],
    ctaHref: 'https://join.asiapacific-chamber.com',
    ctaLabel: 'Unirme a Essential',
    note: 'Ideal para iniciar y validar oportunidades con Asia.',
  },
  {
    id: 'business',
    name: 'Business',
    price: '$500.000 CLP / año',
    blurb:
      'Para empresas consolidadas en importación/exportación que buscan networking y prioridad en agenda.',
    best: true,
    features: [
      'Todos los beneficios de “Essential”',
      'Inclusión en directorio oficial (web y catálogos digitales)',
      'Networking exclusivo trimestral (desayunos / rondas de negocio)',
      '1 asesoría anual en comercio exterior',
      'Prioridad en misiones comerciales a China y Hong Kong',
      'Derecho preferente a exponer en seminarios de la cámara',
      'Cobertura comunicacional en medios de la cámara',
    ],
    ctaHref: 'https://join.asiapacific-chamber.com',
    ctaLabel: 'Elegir Business',
    note: 'La opción recomendada para PYMEs con flujo estable.',
  },
  {
    id: 'corporate',
    name: 'Corporate',
    price: '$1.000.000 CLP / año',
    blurb:
      'Para corporativos y grupos empresariales que requieren posicionamiento internacional y agenda a medida.',
    features: [
      'Todos los beneficios de “Business”',
      'Logo destacado en web, newsletters y eventos',
      '2 asesorías estratégicas/año (marketing internacional, financiamiento, partners en Asia)',
      'Acceso directo a HKLABA y cámaras aliadas (Perú y Bolivia)',
      'Participación garantizada en misiones comerciales (mín. 2/año)',
      'Invitación VIP a foros internacionales (p.ej., Hong Kong Forum)',
      'Copatrocinio de seminarios/webinars con visibilidad de marca',
    ],
    ctaHref: 'https://join.asiapacific-chamber.com',
    ctaLabel: 'Hablar con APCC',
    note: 'Hecha para impacto regional y equipos comerciales.',
  },
];

const COMPARISON = [
  { feature: 'Certificado de socio', essential: 'Sí', business: 'Sí', corporate: 'Sí' },
  { feature: 'Webinars mensuales', essential: 'Sí', business: 'Sí (prioridad)', corporate: 'Sí (prioridad + branding)' },
  { feature: 'Boletín oportunidades', essential: 'Sí', business: 'Sí', corporate: 'Sí' },
  { feature: 'Mesa gremial / año', essential: '1', business: '1', corporate: '1 + ejecutivas' },
  { feature: 'Cursos / seminarios', essential: 'Descuentos', business: 'Descuentos + exponer', corporate: 'Descuentos + copatrocinar' },
  { feature: 'Directorio oficial', essential: '—', business: 'Sí', corporate: 'Sí (destacado)' },
  { feature: 'Networking trimestral', essential: '—', business: 'Sí', corporate: 'Sí (VIP)' },
  { feature: 'Asesoría comercio exterior', essential: '—', business: '1 anual', corporate: '2 estratégicas/año' },
  { feature: 'Misiones a Asia', essential: 'Acceso', business: 'Prioridad', corporate: 'Garantizadas (mín. 2/año)' },
  { feature: 'HKLABA / Alianzas', essential: '—', business: '—', corporate: 'Acceso directo' },
  { feature: 'Visibilidad de marca', essential: '—', business: 'Web/Newsletter', corporate: 'Destacado + eventos' },
];

export default function Page() {
  return (
    <section className="container py-16">
      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Membresías APCC 2026–2030</h1>
        <p className="mt-3 text-neutral-300">
          Programas pensados para entregar <strong>valor real y renovable</strong>: inteligencia comercial, networking
          sectorial, business matching y acceso a misiones y ferias en Asia.
        </p>
        <div className="mt-6 text-sm text-neutral-400">
          ¿Dudas? <Link href="/contacto" className="underline underline-offset-4 hover:text-neutral-200">Agenda una llamada</Link>.
        </div>
      </header>

      {/* PLANES */}
      <section className="mt-10 grid md:grid-cols-3 gap-4">
        {PLANS.map((p) => (
          <article
            key={p.id}
            className={`rounded-2xl border ${p.best ? 'border-red-900' : 'border-neutral-800'} bg-neutral-900 p-6 flex flex-col`}
          >
            <div className="text-xs uppercase tracking-wider text-neutral-500">
              {p.best ? 'Recomendado' : 'Membresía'}
            </div>
            <h2 className="mt-1 text-xl font-semibold">{p.name}</h2>
            <div className="mt-2 text-sm text-neutral-400 min-h-[48px]">{p.blurb}</div>

            <div className="mt-4 text-2xl font-semibold">{p.price}</div>

            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span aria-hidden>✓</span>
                  <span className="text-neutral-300">{f}</span>
                </li>
              ))}
            </ul>

            {p.note && <div className="mt-4 text-xs text-neutral-500">{p.note}</div>}

            <div className="mt-6">
              <Link
                href={p.ctaHref}
                className={`btn ${p.best ? 'btn-primary' : 'btn-secondary'}`}
                target="_blank"
              >
                {p.ctaLabel}
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* BENEFICIOS TRANSVERSALES */}
      <section className="mt-12">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h3 className="text-lg font-semibold">Beneficios transversales (todos los planes)</h3>
          <ul className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            {[
              'Plataforma digital: biblioteca de guías, reportes y acuerdos',
              'Grupos segmentados (importadores, exportadores, startups, logística)',
              'Cobertura comunicacional en medios y redes de la cámara',
              'Trato directo con gerencias (gremial, comercial, comunicaciones)',
              'Eventos: mínimo 1 webinar/mes + 1 evento presencial/trimestre',
              'Misiones comerciales: 2 viajes/año a China y Hong Kong',
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <span aria-hidden>•</span>
                <span className="text-neutral-300">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TABLA COMPARATIVA */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold">Comparativa rápida</h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-neutral-800">
          <table className="min-w-full text-sm">
            <thead className="bg-neutral-950/60">
              <tr className="border-b border-neutral-800">
                <th className="text-left p-3">Característica</th>
                <th className="text-left p-3">Essential</th>
                <th className="text-left p-3">Business</th>
                <th className="text-left p-3">Corporate</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-neutral-800">
                  <td className="p-3 text-neutral-300">{row.feature}</td>
                  <td className="p-3 text-neutral-400">{row.essential}</td>
                  <td className="p-3 text-neutral-400">{row.business}</td>
                  <td className="p-3 text-neutral-400">{row.corporate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-xs text-neutral-500">
          *Agenda y cupos en ferias/misiones sujetos a disponibilidad y calendario oficial.
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 grid md:grid-cols-2 gap-4">
        {[
          {
            q: '¿Puedo cambiar de plan más adelante?',
            a: 'Sí. Puedes subir o bajar de plan con aviso previo y ajuste proporcional.',
          },
          {
            q: '¿Las misiones incluyen pasajes y hotel?',
            a: 'No. Esos costos son del participante; APCC gestiona agenda, ferias y reuniones.',
          },
          {
            q: '¿Hacen facturación en Chile?',
            a: 'Sí. Emitimos documentos tributarios conforme a normativa vigente.',
          },
          {
            q: '¿Puedo sumar a mi equipo a los webinars?',
            a: 'Sí. Los cupos varían por plan y disponibilidad. En Corporate se pueden coordinar sesiones in-house/corporativas.',
          },
        ].map((item) => (
          <article key={item.q} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h4 className="text-sm font-semibold">{item.q}</h4>
            <p className="mt-2 text-sm text-neutral-400">{item.a}</p>
          </article>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="mt-12">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">¿Listo para elegir tu membresía?</h3>
            <p className="mt-2 text-neutral-400 max-w-2xl">
              Te ayudamos a seleccionar el plan ideal según tu sector, volumen y metas con Asia.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="https://join.asiapacific-chamber.com" className="btn btn-primary" target="_blank">
              Unirme ahora
            </Link>
            <Link href="/contacto" className="btn btn-secondary">
              Hablar con APCC
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
