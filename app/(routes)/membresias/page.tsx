// app/(routes)/membresias/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Membresías | Cámara de Comercio Asia Pacífico – APCC',
  description:
    'Membresías APCC 2026–2030: Essential, Business y Corporate. Beneficios prácticos para crecer con Asia: misiones, networking, business matching, roundtables e inteligencia comercial.',
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
    blurb:
      'Para PYMEs e importadores que dan sus primeros pasos con Asia y necesitan guía y comunidad.',
    features: [
      'Certificado oficial de socio',
      'Webinars mensuales aplicados (tendencias, aduanas, logística, financiamiento)',
      'Boletín con oportunidades Asia–Pacífico (proveedores, ferias, alertas)',
      '1 participación anual en mesa gremial',
      'Descuentos en cursos y seminarios',
      'Acceso a biblioteca digital (guías, plantillas y checklists)',
      'Acceso a grupos segmentados (WhatsApp/Slack) por rubro',
    ],
    ctaHref: '/join?plan=Essential&utm_source=site&utm_medium=membresias&utm_campaign=signup',
    ctaLabel: 'Unirme a Essential',
    note: 'Ideal para validar oportunidades y estructurar tus primeros negocios con Asia.',
  },
  {
    id: 'business',
    name: 'Business',
    price: '$500.000 CLP / año',
    blurb:
      'Para empresas con flujo de importación/exportación que buscan networking curado y prioridad en agenda.',
    best: true,
    features: [
      'Todos los beneficios de “Essential”',
      'Inclusión en directorio oficial (web + catálogos digitales)',
      'Networking exclusivo trimestral (desayunos / rondas de negocio)',
      '1 asesoría anual en comercio exterior (ruta, costos, riesgos)',
      'Prioridad en misiones comerciales a China y Hong Kong',
      'Derecho preferente a exponer en seminarios de la cámara',
      'Cobertura comunicacional en los medios de la cámara',
    ],
    ctaHref: '/join?plan=Business&utm_source=site&utm_medium=membresias&utm_campaign=signup',
    ctaLabel: 'Elegir Business',
    note: 'Recomendado para PYMEs con operaciones activas y metas de expansión.',
  },
  {
    id: 'corporate',
    name: 'Corporate',
    price: '$1.000.000 CLP / año',
    blurb:
      'Para corporativos y grupos empresariales que requieren posicionamiento internacional y agenda tailor-made.',
    features: [
      'Todos los beneficios de “Business”',
      'Logo destacado en web, newsletters y eventos',
      '2 asesorías estratégicas/año (marketing internacional, financiamiento, partners en Asia)',
      'Acceso directo a HKLABA y cámaras aliadas (Perú y Bolivia)',
      'Participación garantizada en misiones comerciales (mín. 2/año)',
      'Invitación VIP a foros internacionales (ej: Hong Kong Forum)',
      'Copatrocinio de seminarios/webinars con visibilidad de marca',
    ],
    ctaHref: '/join?plan=Corporate&utm_source=site&utm_medium=membresias&utm_campaign=signup',
    ctaLabel: 'Hablar con APCC',
    note: 'Diseñada para impacto regional, visibilidad y equipos comerciales.',
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
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--apcc-text)]">
          Membresías APCC 2026–2030
        </h1>
        <p className="mt-3 text-[var(--apcc-text-2)]">
          Programas diseñados para entregar <strong>valor práctico y renovable</strong>: inteligencia comercial,
          networking sectorial, business matching y acceso a misiones y ferias en Asia.
        </p>
        <div className="mt-6 text-sm text-[var(--apcc-text-2)]">
          ¿Dudas?{' '}
          <Link href="/join" className="apcc-link underline-offset-4 hover:opacity-90" aria-label="Agendar una llamada con APCC">
            Agenda una llamada
          </Link>.
        </div>
      </header>

      {/* PLANES */}
      <section className="mt-10 grid md:grid-cols-3 gap-4">
        {PLANS.map((p) => (
          <article
            key={p.id}
            className={`card p-6 flex flex-col ${p.best ? 'border-[var(--apcc-accent)]/40' : ''}`}
          >
            <div className="text-xs uppercase tracking-wider text-neutral-600">
              {p.best ? 'Recomendado' : 'Membresía'}
            </div>
            <h2 className="mt-1 text-xl font-semibold text-[var(--apcc-text)]">{p.name}</h2>
            <div className="mt-2 text-sm text-[var(--apcc-text-2)] min-h-[48px]">{p.blurb}</div>

            <div className="mt-4 text-2xl font-semibold text-[var(--apcc-text)]">{p.price}</div>

            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span aria-hidden>✓</span>
                  <span className="text-[var(--apcc-text-2)]">{f}</span>
                </li>
              ))}
            </ul>

            {p.note && <div className="mt-4 text-xs text-neutral-600">{p.note}</div>}

            <div className="mt-6">
              <Link href={p.ctaHref} className="btn btn-primary" aria-label={`${p.ctaLabel} plan ${p.name}`}>
                {p.ctaLabel}
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* BENEFICIOS TRANSVERSALES */}
      <section className="mt-12">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-[var(--apcc-text)]">
            Beneficios transversales (todos los planes)
          </h3>
          <ul className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            {[
              'Plataforma digital: biblioteca de guías, reportes, acuerdos y plantillas',
              'Grupos segmentados por industria (importadores, exportadores, startups, logística)',
              'Cobertura comunicacional en medios y redes de la cámara',
              'Trato directo con gerencias (gremial, comercial, comunicaciones)',
              'Eventos: mínimo 1 webinar/mes + 1 evento presencial/trimestre',
              'Misiones comerciales: 2 viajes/año a China y Hong Kong',
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <span aria-hidden>•</span>
                <span className="text-[var(--apcc-text-2)]">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TABLA COMPARATIVA */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold text-[var(--apcc-text)]">Comparativa rápida</h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-[var(--apcc-border)] bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-neutral-100">
              <tr className="border-b border-[var(--apcc-border)]">
                <th className="text-left p-3 text-[var(--apcc-text)]">Característica</th>
                <th className="text-left p-3 text-[var(--apcc-text)]">Essential</th>
                <th className="text-left p-3 text-[var(--apcc-text)]">Business</th>
                <th className="text-left p-3 text-[var(--apcc-text)]">Corporate</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 ? 'bg-neutral-50 border-b border-[var(--apcc-border)]' : 'border-b border-[var(--apcc-border)]'}
                >
                  <td className="p-3 text-[var(--apcc-text-2)]">{row.feature}</td>
                  <td className="p-3 text-[var(--apcc-text-2)]">{row.essential}</td>
                  <td className="p-3 text-[var(--apcc-text-2)]">{row.business}</td>
                  <td className="p-3 text-[var(--apcc-text-2)]">{row.corporate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-xs text-neutral-600">
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
          <article key={item.q} className="card p-6">
            <h4 className="text-sm font-semibold text-[var(--apcc-text)]">{item.q}</h4>
            <p className="mt-2 text-sm text-[var(--apcc-text-2)]">{item.a}</p>
          </article>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="mt-12">
        <div className="card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-[var(--apcc-text)]">
              ¿Listo para elegir tu membresía?
            </h3>
            <p className="mt-2 text-[var(--apcc-text-2)] max-w-2xl">
              Te ayudamos a seleccionar el plan ideal según tu sector, volumen y metas con Asia.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/join?utm_source=site&utm_medium=membresias&utm_campaign=cta_footer"
              className="btn btn-primary"
              aria-label="Unirme ahora a una membresía APCC"
            >
              Unirme ahora
            </Link>
            <Link
              href="/join?utm_source=site&utm_medium=membresias&utm_campaign=cta_footer"
              className="btn btn-outline"
              aria-label="Hablar con APCC para resolver dudas de membresías"
            >
              Hablar con APCC
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
