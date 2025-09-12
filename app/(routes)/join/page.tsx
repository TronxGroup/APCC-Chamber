// app/(routes)/join/page.tsx
// Landing "Join" de Membresías APCC 2026–2030
// — Diseñado para QR en ferias, campañas y derivación desde "Inscribirme".
// — Un solo archivo: UI (Server Component) + Server Action que envía a Zoho CRM y HubSpot.
// — Variables de entorno requeridas: ZOHO_ACCESS_TOKEN, HUBSPOT_PORTAL_ID, HUBSPOT_FORM_GUID.
// — Si faltan credenciales, el submit hace "dry run" (no falla, loguea y muestra éxito de demo).

import type { Metadata } from 'next';
import Link from 'next/link';
import { cookies, headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'Únete a la Cámara | APCC',
  description:
    'Membresías APCC 2026–2030: Essential, Business, Corporate. Inteligencia comercial, networking, business matching y acceso a misiones y ferias en Asia.',
  openGraph: {
    title: 'Únete a la Cámara | APCC',
    description:
      'Programas diseñados para entregar valor real y renovable: inteligencia comercial, networking sectorial, business matching y acceso a misiones y ferias en Asia.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Únete a la Cámara | APCC',
  },
};

// =====================
// Utils de iconos inline (sin librerías externas)
// =====================
import type { SVGProps } from 'react';
const baseIcon = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;
function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIcon} {...props}><path d="M20 6L9 17l-5-5"/></svg>
  );
}
function Shield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIcon} {...props}><path d="M12 3l8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"/></svg>
  );
}
function Calendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIcon} {...props}><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M16 3v3M8 3v3M3 10h18"/></svg>
  );
}
function Rocket(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIcon} {...props}><path d="M12 2c3 0 6 3 6 6 0 5-6 10-6 10S6 13 6 8c0-3 3-6 6-6z"/><circle cx="12" cy="8" r="2"/></svg>
  );
}

// =====================
// Datos de planes
// =====================
const PLANS = [
  {
    id: 'Essential',
    name: 'Essential',
    price: '$200.000 CLP / año',
    badge: undefined as undefined | 'Recomendado',
    bullets: [
      'Certificado oficial de socio',
      'Webinars mensuales (tendencias, aduanas, logística, financiamiento)',
      'Boletín con oportunidades Asia–Pacífico',
      '1 participación anual en mesa gremial',
      'Descuentos en cursos y seminarios',
      'Acceso a biblioteca digital de guías y reportes',
      'Acceso a grupos segmentados (WhatsApp/Slack)',
    ],
    foot: 'Ideal para iniciar y validar oportunidades con Asia.',
  },
  {
    id: 'Business',
    name: 'Business',
    price: '$500.000 CLP / año',
    badge: 'Recomendado' as const,
    bullets: [
      'Todos los beneficios de “Essential”',
      'Inclusión en directorio oficial (web y catálogos digitales)',
      'Networking exclusivo trimestral (desayunos / rondas de negocio)',
      '1 asesoría anual en comercio exterior',
      'Prioridad en misiones comerciales a China y Hong Kong',
      'Derecho preferente a exponer en seminarios de la cámara',
      'Cobertura comunicacional en medios de la cámara',
    ],
    foot: 'La opción recomendada para PYMEs con flujo estable.',
  },
  {
    id: 'Corporate',
    name: 'Corporate',
    price: '$1.000.000 CLP / año',
    badge: undefined as undefined | 'Recomendado',
    bullets: [
      'Todos los beneficios de “Business”',
      'Logo destacado en web, newsletters y eventos',
      '2 asesorías estratégicas/año (marketing internacional, financiamiento, partners en Asia)',
      'Acceso directo a HKLABA y cámaras aliadas (Perú y Bolivia)',
      'Participación garantizada en misiones comerciales (mín. 2/año)',
      'Invitación VIP a foros internacionales (p.ej., Hong Kong Forum)',
      'Copatrocinio de seminarios/webinars con visibilidad de marca',
    ],
    foot: 'Hecha para impacto regional y equipos comerciales.',
  },
] as const;

// =====================
// Server Action: envía a Zoho CRM (API Leads) y HubSpot (Forms API)
// — Usa variables de entorno. Si faltan, hace dry-run.
// =====================
async function submitToCrms(payload: Record<string, any>) {
  'use server';
  const hsPortal = process.env.HUBSPOT_PORTAL_ID;
  const hsForm = process.env.HUBSPOT_FORM_GUID;
  const zohoToken = process.env.ZOHO_ACCESS_TOKEN;
  const debug = process.env.CRM_DEBUG === '1';

  const results: { hubspot?: any; zoho?: any } = {};

  // HubSpot (Forms v3)
  if (hsPortal && hsForm) {
    try {
      const hsRes = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${hsPortal}/${hsForm}` as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { name: 'email', value: payload.email },
            { name: 'firstname', value: payload.firstName },
            { name: 'lastname', value: payload.lastName },
            { name: 'company', value: payload.company },
            { name: 'phone', value: payload.phone },
            { name: 'country', value: payload.country },
            { name: 'plan', value: payload.plan },
            { name: 'message', value: payload.message || '' },
          ],
          context: {
            pageUri: payload.pageUri,
            pageName: 'Join APCC',
            hutk: cookies().get('hubspotutk')?.value,
            ipAddress: headers().get('x-forwarded-for') || undefined,
          },
          legalConsentOptions: { consent: { consentToProcess: true, text: 'Acepto ser contactado por APCC.', communications: [{ value: true, subscriptionTypeId: 999, text: 'Email' }] } },
        }),
      });
      results.hubspot = { ok: hsRes.ok, status: hsRes.status };
    } catch (e) {
      results.hubspot = { ok: false, error: String(e) };
    }
  }

  // Zoho CRM (Leads)
  if (zohoToken) {
    try {
      const zRes = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
        method: 'POST',
        headers: {
          Authorization: `Zoho-oauthtoken ${zohoToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              Last_Name: payload.lastName || payload.firstName || '—',
              First_Name: payload.firstName || '',
              Email: payload.email,
              Company: payload.company,
              Phone: payload.phone || '',
              Lead_Source: 'APCC Join Landing',
              Description: payload.message || '',
              Country: payload.country || '',
              // Campos personalizados (ajusta nombres reales en Zoho):
              Membership_Plan__c: payload.plan,
              UTM_Source__c: payload.utm_source || '',
              UTM_Medium__c: payload.utm_medium || '',
              UTM_Campaign__c: payload.utm_campaign || '',
            },
          ],
          trigger: ['workflow'],
        }),
      });
      results.zoho = { ok: zRes.ok, status: zRes.status };
    } catch (e) {
      results.zoho = { ok: false, error: String(e) };
    }
  }

  // Dry run si no hay claves (para no romper el QR en demos)
  if (!hsPortal && !hsForm && !zohoToken) {
    if (debug) console.log('[CRM DRY RUN]', payload);
    return { ok: true, dryRun: true } as const;
  }

  const ok = (!!results.hubspot && results.hubspot.ok) || (!!results.zoho && results.zoho.ok);
  return { ok, results } as const;
}

// =====================
// Página (Server Component)
// =====================
export default function JoinPage({ searchParams }: { searchParams?: Record<string, string | string[] | undefined> }) {
  // Captura UTM/ref
  const utm = {
    utm_source: (searchParams?.utm_source as string) || '',
    utm_medium: (searchParams?.utm_medium as string) || '',
    utm_campaign: (searchParams?.utm_campaign as string) || '',
    ref: (searchParams?.ref as string) || '',
  };

  async function submit(prevState: any, formData: FormData) {
    'use server';
    const fullName = (formData.get('name') as string)?.trim() || '';
    const [firstName, ...rest] = fullName.split(' ');
    const lastName = rest.join(' ');

    const payload = {
      firstName,
      lastName,
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      company: String(formData.get('company') || ''),
      country: String(formData.get('country') || ''),
      plan: String(formData.get('plan') || 'Essential'),
      message: String(formData.get('message') || ''),
      pageUri: process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/join` : 'https://apcc.example/join',
      ...utm,
    };

    const res = await submitToCrms(payload);
    if (!res.ok) return { ok: false, message: 'Tuvimos un problema al registrar tu solicitud. Intenta nuevamente.' };
    return { ok: true, message: '¡Gracias! Te contactaremos en breve para completar tu membresía.' };
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
      {/* HERO */}
      <div className="container pt-14 pb-10">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
              <Shield className="w-4 h-4"/> Membresías APCC 2026–2030
            </span>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
              Valor real para importar, exportar y <span className="text-red-300">cerrar negocios</span> con Asia
            </h1>
            <p className="mt-4 text-neutral-300 max-w-2xl">
              Inteligencia comercial, networking sectorial, business matching y acceso a misiones y ferias en Asia.
              ¿Dudas? <Link href="#agenda-call" className="underline underline-offset-4 hover:text-neutral-100">Agenda una llamada</Link>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#form" className="btn btn-primary">Unirme ahora</a>
              <a href="#planes" className="btn btn-secondary">Ver planes</a>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-neutral-300">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 flex items-center gap-2"><Calendar className="h-4 w-4"/>1 webinar/mes</div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 flex items-center gap-2"><Check className="h-4 w-4"/>Mesas sectoriales</div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 flex items-center gap-2"><Rocket className="h-4 w-4"/>Misiones a Asia</div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 flex items-center gap-2"><Shield className="h-4 w-4"/>Partners verificados</div>
            </div>
          </div>

          {/* Tarjeta sticky con resumen y CTA */}
          <div className="lg:justify-self-end w-full lg:max-w-md">
            <div className="sticky top-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <h2 className="text-lg font-semibold">Resumen rápido</h2>
              <ul className="mt-3 text-sm text-neutral-300 space-y-2">
                <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Inteligencia y reportes por industria</li>
                <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Networking & rondas de negocio</li>
                <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Acceso a misiones y ferias en Asia</li>
              </ul>
              <a href="#form" className="mt-5 btn btn-primary w-full text-center">Comenzar inscripción</a>
              <p className="mt-3 text-xs text-neutral-500">Tiempo estimado: 2 minutos</p>
            </div>
          </div>
        </div>
      </div>

      {/* PLANES */}
      <div id="planes" className="container pb-6">
        <h2 className="text-2xl font-semibold">Conoce las membresías</h2>
        <p className="mt-1 text-neutral-400">Selecciona el plan que mejor calza con tus objetivos.</p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {PLANS.map((p) => (
            <div key={p.id} className={`rounded-2xl border ${p.id==='Business' ? 'border-blue-500/50 ring-1 ring-blue-500/50' : 'border-neutral-800'} bg-neutral-900 p-6 flex flex-col`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.badge && <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-200">{p.badge}</span>}
              </div>
              <div className="mt-1 text-neutral-300">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> {b}</li>
                ))}
              </ul>
              <div className="mt-5">
                <a href="#form" data-plan={p.id} className={`btn ${p.id==='Business' ? 'btn-primary' : 'btn-secondary'} w-full`}>Elegir {p.name}</a>
              </div>
              <div className="mt-3 text-xs text-neutral-500">{p.foot}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FORMULARIO */}
      <JoinForm submit={submit} utm={utm} />

      {/* FAQ corto */}
      <div className="container py-10">
        <div className="grid md:grid-cols-3 gap-6 text-sm text-neutral-300">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h4 className="font-semibold">¿Puedo cambiar de plan?</h4>
            <p className="mt-2 text-neutral-400">Sí, puedes subir o bajar de plan con aviso previo y ajuste proporcional.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h4 className="font-semibold">¿Las misiones incluyen pasajes y hotel?</h4>
            <p className="mt-2 text-neutral-400">No. Esos costos son del participante; APCC gestiona agenda, ferias y reuniones.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h4 className="font-semibold">¿Facturación en Chile?</h4>
            <p className="mt-2 text-neutral-400">Sí, emitimos documentos tributarios conforme a normativa vigente.</p>
          </div>
        </div>
      </div>

      {/* Agenda llamada */}
      <div id="agenda-call" className="container pb-16">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">¿Aún con dudas?</h3>
            <p className="mt-1 text-sm text-neutral-400">Agenda una llamada de 15 minutos con nuestro equipo.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/agenda" className="btn btn-secondary">Ver disponibilidad</Link>
            <a href="mailto:contacto@asiapacific-chamber.com" className="btn btn-primary">Escribir a APCC</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================
// Client Component: formulario con Server Action
// =====================
'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary w-full" disabled={pending}>
      {pending ? pendingLabel : label}
    </button>
  );
}

function JoinForm({ submit, utm }: { submit: (state: any, data: FormData) => Promise<any>; utm: Record<string, string> }) {
  const initial = { ok: false, message: '' };
  const [state, formAction] = useFormState(submit, initial);
  const [selectedPlan, setSelectedPlan] = useState<string>('Business');
  const ref = useRef<HTMLFormElement>(null);

  // Captura clics en botones "Elegir X" dentro de tarjetas de planes
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[data-plan]') as HTMLAnchorElement | null;
      if (!a) return;
      e.preventDefault();
      const plan = a.getAttribute('data-plan');
      if (plan) setSelectedPlan(plan);
      document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  // Honeypot anti-bots
  const hpName = useMemo(() => `website_${Math.random().toString(36).slice(2, 7)}`, []);

  useEffect(() => {
    if (state?.ok && ref.current) {
      ref.current.reset();
      // Mantener plan seleccionado para que quede visible post-exito
    }
  }, [state?.ok]);

  return (
    <div id="form" className="container py-10">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Completa tu solicitud</h2>
          <p className="mt-1 text-neutral-400 text-sm">Tiempo estimado: 2 minutos. Te contactaremos para finalizar el proceso.</p>

          <form ref={ref} action={formAction} className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-neutral-300">Nombre y apellido</label>
                <input name="name" required placeholder="Ej: María González" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Correo</label>
                <input name="email" type="email" required placeholder="nombre@empresa.cl" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Empresa</label>
                <input name="company" required placeholder="Importadora Andes" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Teléfono</label>
                <input name="phone" placeholder="+56 9 1234 5678" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-neutral-300">País</label>
                <input name="country" placeholder="Chile" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Plan</label>
                <select name="plan" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2">
                  {PLANS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-neutral-300">Intereses / Mensaje (opcional)</label>
              <textarea name="message" rows={4} placeholder="Cuéntanos qué productos/mercados te interesan, dudas o urgencias logísticas…" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" />
            </div>

            {/* Campos ocultos UTM + honeypot */}
            <input type="hidden" name="utm_source" value={utm.utm_source} />
            <input type="hidden" name="utm_medium" value={utm.utm_medium} />
            <input type="hidden" name="utm_campaign" value={utm.utm_campaign} />
            <input type="text" name={hpName} className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="text-xs text-neutral-500">
              Al enviar, aceptas ser contactado por APCC conforme a nuestra política de privacidad.
            </div>

            <SubmitButton label="Enviar solicitud" pendingLabel="Enviando…" />

            {state?.message && (
              <div className={`mt-3 text-sm ${state.ok ? 'text-green-400' : 'text-red-400'}`}>{state.message}</div>
            )}
          </form>
        </div>

        {/* Lateral: Beneficios transversales y comparativa breve */}
        <aside className="lg:pl-8">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="text-lg font-semibold">Beneficios transversales</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Plataforma digital: biblioteca de guías, reportes y acuerdos</li>
              <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Grupos segmentados (importadores, exportadores, startups, logística)</li>
              <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Cobertura comunicacional en medios y redes de la cámara</li>
              <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Trato directo con gerencias (gremial, comercial, comunicaciones)</li>
              <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Eventos: 1 webinar/mes + 1 evento presencial/trimestre</li>
              <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Misiones comerciales: 2 viajes/año a China y Hong Kong</li>
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-sm text-neutral-300">
            <h3 className="text-lg font-semibold">Comparativa rápida</h3>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full text-left align-top">
                <thead className="text-xs text-neutral-500">
                  <tr>
                    <th className="pr-4 pb-2">Característica</th>
                    <th className="pr-4 pb-2">Essential</th>
                    <th className="pr-4 pb-2">Business</th>
                    <th className="pr-4 pb-2">Corporate</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {[
                    ['Certificado de socio', 'Sí', 'Sí', 'Sí'],
                    ['Webinars mensuales', 'Sí', 'Sí (prioridad)', 'Sí (prioridad + branding)'],
                    ['Boletín oportunidades', 'Sí', 'Sí', 'Sí'],
                    ['Mesa gremial / año', '1', '1', '1 + ejecutivas'],
                    ['Cursos / seminarios', 'Descuentos', 'Descuentos + exponer', 'Descuentos + copatrocinar'],
                    ['Directorio oficial', '—', 'Sí', 'Sí (destacado)'],
                    ['Networking trimestral', '—', 'Sí', 'Sí (VIP)'],
                    ['Asesoría comercio exterior', '—', '1 anual', '2 estratégicas/año'],
                    ['Misiones a Asia', 'Acceso', 'Prioridad', 'Garantizadas (mín. 2/año)'],
                    ['HKLABA / Alianzas', '—', '—', 'Acceso directo'],
                    ['Visibilidad de marca', '—', 'Web/Newsletter', 'Destacado + eventos'],
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-neutral-800">
                      <td className="pr-4 py-2">{row[0]}</td>
                      <td className="pr-4 py-2">{row[1]}</td>
                      <td className="pr-4 py-2">{row[2]}</td>
                      <td className="pr-4 py-2">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

