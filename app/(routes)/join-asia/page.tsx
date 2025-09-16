// app/(routes)/join-asia/page.tsx
// Landing "APCC Asia Partner" – Mirror de Join para empresas de Asia que buscan exportar/importar con LatAm.
// ✅ Server Actions + redirect (?ok=1|0)
// ✅ Íconos inline (sin librerías externas)
// ✅ HERO con imagen de fondo optimizada (next/image) -> /public/bg_apcc_asia_partner.png
// ⚙️ Envía a Zoho CRM (Leads) y HubSpot (Forms v3) si hay credenciales; si no, DRY RUN.

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import type { SVGProps } from 'react';

export const metadata: Metadata = {
  title: 'APCC Asia Partner | Join',
  description:
    'APCC connects Asian companies with trusted buyers and partners in Latin America: market entry, business matching, and trade missions.',
  openGraph: { title: 'APCC Asia Partner | Join', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'APCC Asia Partner | Join' },
};

// =====================
// Íconos inline (sin librerías)
// =====================
const baseIcon = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const Check   = (p: SVGProps<SVGSVGElement>) => (<svg {...baseIcon} {...p}><path d="M20 6L9 17l-5-5"/></svg>);
const Shield  = (p: SVGProps<SVGSVGElement>) => (<svg {...baseIcon} {...p}><path d="M12 3l8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"/></svg>);
const Calendar= (p: SVGProps<SVGSVGElement>) => (<svg {...baseIcon} {...p}><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M16 3v3M8 3v3M3 10h18"/></svg>);
const Rocket  = (p: SVGProps<SVGSVGElement>) => (<svg {...baseIcon} {...p}><path d="M12 2c3 0 6 3 6 6 0 5-6 10-6 10S6 13 6 8c0-3 3-6 6-6z"/><circle cx="12" cy="8" r="2"/></svg>);

// =====================
// Planes – versión Asia (USD)
// =====================
const PLANS = [
  { id: 'Essential Asia', name: 'Essential Asia', price: 'USD 300 / year', badge: undefined as undefined | 'Recommended', bullets: [
    'Official APCC membership certificate',
    'Monthly webinars: LatAm markets & regulations',
    'LatAm opportunities newsletter',
    'Digital library: market guides & standards',
    'Access to sector groups (WhatsApp/Slack)'], foot: 'Best to start and validate LatAm opportunities.' },
  { id: 'Business Asia', name: 'Business Asia', price: 'USD 900 / year', badge: 'Recommended' as const, bullets: [
    'All Essential benefits',
    'Directory listing on APCC website',
    'Quarterly B2B networking sessions',
    '1 Go-To-Market consultation (LatAm)',
    'Priority in trade missions to LatAm',
    'Preferred right to present in APCC seminars',
    'Media coverage across APCC channels'], foot: 'Great for SMEs with steady pipeline.' },
  { id: 'Corporate Asia', name: 'Corporate Asia', price: 'USD 2,500 / year', badge: undefined as undefined | 'Recommended', bullets: [
    'All Business benefits',
    'Featured logo on web, newsletters & events',
    '2 strategic consultations/year (marketing, finance, partners)',
    'Direct access to allied chambers (e.g., HKLABA)',
    'Guaranteed participation in trade missions (min. 2/year)',
    'VIP invitations to international forums',
    'Co-sponsorship of webinars with brand visibility'], foot: 'For regional impact and commercial teams.' },
] as const;

type JoinSearch = { searchParams?: Record<string, string | string[] | undefined> };

// =====================
// Server Action: Zoho & HubSpot -> redirect ?ok=1|0
// =====================
async function submitToCrms(payload: Record<string, any>) {
  'use server';
  const hsPortal = process.env.HUBSPOT_PORTAL_ID;
  const hsForm   = process.env.HUBSPOT_FORM_GUID;
  const zohoToken= process.env.ZOHO_ACCESS_TOKEN;
  const debug    = process.env.CRM_DEBUG === '1';

  const results: { hubspot?: any; zoho?: any } = {};

  // HubSpot (Forms API v3)
  if (hsPortal && hsForm) {
    try {
      const hsRes = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${hsPortal}/${hsForm}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { name: 'email',     value: payload.email },
            { name: 'firstname', value: payload.firstName },
            { name: 'lastname',  value: payload.lastName },
            { name: 'company',   value: payload.company },
            { name: 'phone',     value: payload.phone },
            { name: 'country',   value: payload.country },
            { name: 'plan',      value: payload.plan },
            { name: 'industry',  value: payload.industry },
            { name: 'message',   value: payload.message || '' },
          ],
          context: {
            pageUri: payload.pageUri,
            pageName: 'APCC Asia Partner',
            hutk: cookies().get('hubspotutk')?.value,
            ipAddress: headers().get('x-forwarded-for') || undefined,
          },
          legalConsentOptions: { consent: { consentToProcess: true, text: 'I agree to be contacted by APCC.', communications: [{ value: true, subscriptionTypeId: 999, text: 'Email' }] } },
        }),
      });
      results.hubspot = { ok: hsRes.ok, status: hsRes.status };
    } catch (e) { results.hubspot = { ok: false, error: String(e) }; }
  }

  // Zoho CRM (Leads)
  if (zohoToken) {
    try {
      const zRes = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
        method: 'POST',
        headers: { Authorization: `Zoho-oauthtoken ${zohoToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [{
            Last_Name: payload.lastName || payload.firstName || '—',
            First_Name: payload.firstName || '',
            Email: payload.email,
            Company: payload.company,
            Phone: payload.phone || '',
            Lead_Source: 'APCC Asia Partner Landing',
            Description: payload.message || '',
            Country: payload.country || '',
            Industry: payload.industry || '',
            Membership_Plan__c: payload.plan,
            UTM_Source__c:  payload.utm_source || '',
            UTM_Medium__c:  payload.utm_medium || '',
            UTM_Campaign__c:payload.utm_campaign || '',
          }],
          trigger: ['workflow'],
        }),
      });
      results.zoho = { ok: zRes.ok, status: zRes.status };
    } catch (e) { results.zoho = { ok: false, error: String(e) }; }
  }

  if (!hsPortal && !hsForm && !zohoToken) {
    if (debug) console.log('[CRM DRY RUN ASIA]', payload);
    return { ok: true, dryRun: true } as const;
  }
  const ok = (!!results.hubspot && results.hubspot.ok) || (!!results.zoho && results.zoho.ok);
  return { ok, results } as const;
}

export default function JoinAsiaPage({ searchParams }: JoinSearch) {
  const planParam = (searchParams?.plan as string) || 'Business Asia';
  const ok  = searchParams?.ok === '1';
  const err = searchParams?.ok === '0';

  async function submit(formData: FormData) {
    'use server';
    const fullName = String(formData.get('name') || '').trim();
    const [firstName, ...rest] = fullName.split(' ');
    const lastName = rest.join(' ');

    const utm = {
      utm_source:   String(formData.get('utm_source') || ''),
      utm_medium:   String(formData.get('utm_medium') || ''),
      utm_campaign: String(formData.get('utm_campaign') || ''),
    };

    const payload = {
      firstName, lastName,
      email:   String(formData.get('email') || ''),
      phone:   String(formData.get('phone') || ''),
      company: String(formData.get('company') || ''),
      country: String(formData.get('country') || ''), // Country in Asia
      industry:String(formData.get('industry') || ''), // Product/Industry
      plan:    String(formData.get('plan') || planParam || 'Essential Asia'),
      message: String(formData.get('message') || ''),
      pageUri: process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/join-asia` : 'https://apcc.example/join-asia',
      ...utm,
    };

    const res = await submitToCrms(payload);
    redirect(`/join-asia?ok=${res.ok ? '1' : '0'}&plan=${encodeURIComponent(payload.plan)}`);
  }

  return (
    <section className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HERO con imagen de fondo */}
      <div className="relative">
        <Image
          src="/bg_apcc_asia_partner.png"
          alt="APCC Asia Partner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container pt-14 pb-10 z-10">
          {ok && (
            <div className="mb-4 rounded-xl border border-green-800 bg-green-900/20 text-green-300 px-4 py-3 text-sm">
              Thank you! Our team will contact you shortly to complete your membership.
            </div>
          )}
          {err && (
            <div className="mb-4 rounded-xl border border-red-800 bg-red-900/20 text-red-300 px-4 py-3 text-sm">
              We had an issue submitting your request. Please try again.
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-300">
                <Shield className="w-4 h-4" /> APCC Asia Partner Program
              </span>
              <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
                Your Gateway to <span className="text-red-300">Latin America</span>
              </h1>
              <p className="mt-4 text-neutral-200 max-w-2xl">
                We connect Asian companies with verified buyers, distributors, and partners in Chile and Latin America.
                Market entry guidance, business matching, and trade missions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#form" className="btn btn-primary">Apply Now</a>
                <a href="#plans" className="btn btn-secondary">See Plans</a>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-neutral-200">
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-3 flex items-center gap-2"><Calendar className="h-4 w-4"/>Monthly webinars</div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-3 flex items-center gap-2"><Check className="h-4 w-4"/>Business matching</div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-3 flex items-center gap-2"><Rocket className="h-4 w-4"/>Trade missions</div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-3 flex items-center gap-2"><Shield className="h-4 w-4"/>Verified partners</div>
              </div>
            </div>

            {/* Tarjeta sticky con resumen y CTA */}
            <div className="lg:justify-self-end w-full lg:max-w-md">
              <div className="sticky top-6 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur p-6">
                <h2 className="text-lg font-semibold">Why APCC?</h2>
                <ul className="mt-3 text-sm text-neutral-200 space-y-2">
                  <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Market-entry & regulatory guidance</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Direct access to verified buyers</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Trade missions & follow-up support</li>
                </ul>
                <a href="#form" className="mt-5 btn btn-primary w-full text-center">Start Application</a>
                <p className="mt-3 text-xs text-neutral-400">Estimated time: 2 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VALUE STRIP */}
      <section className="border-y border-neutral-800 bg-neutral-950/50">
        <div className="container py-6 grid gap-4 md:grid-cols-3 text-sm text-neutral-300 text-center">
          <div>🌏 Market Entry Guidance (Chile & LatAm)</div>
          <div>🤝 Business Matching with Verified Buyers</div>
          <div>📦 Trade Missions & Fairs in Latin America</div>
        </div>
      </section>

      {/* PLANS */}
      <div id="plans" className="container pb-6">
        <h2 className="text-2xl font-semibold text-center">Membership Plans – Asia Partner</h2>
        <p className="mt-1 text-neutral-400 text-center">Choose the plan that best fits your LatAm expansion strategy.</p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {PLANS.map((p) => (
            <div key={p.id} className={`rounded-2xl border ${p.id==='Business Asia' ? 'border-blue-500/50 ring-1 ring-blue-500/50' : 'border-neutral-800'} bg-neutral-900 p-6 flex flex-col`}>
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
                <Link href={`/join-asia?plan=${encodeURIComponent(p.id)}#form`} className={`btn ${p.id==='Business Asia' ? 'btn-primary' : 'btn-secondary'} w-full`}>Choose {p.name}</Link>
              </div>
              <div className="mt-3 text-xs text-neutral-500">{p.foot}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FORMULARIO (Server Component + Server Action) */}
      <FormSection defaultPlan={planParam} />

      {/* FAQ */}
      <div className="container py-10">
        <div className="grid md:grid-cols-3 gap-6 text-sm text-neutral-300">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h4 className="font-semibold">Can I upgrade later?</h4>
            <p className="mt-2 text-neutral-400">Yes. You can upgrade/downgrade with prior notice and proportional adjustment.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h4 className="font-semibold">Are flights/hotels included?</h4>
            <p className="mt-2 text-neutral-400">No. Participants cover travel; APCC manages agenda, fairs, and meetings.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h4 className="font-semibold">Invoicing & paperwork</h4>
            <p className="mt-2 text-neutral-400">We provide compliant invoicing and documentation per local regulations.</p>
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <section className="container pb-16">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Still have questions?</h3>
            <p className="mt-1 text-sm text-neutral-400">Book a 15-min call with our team.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/agenda" className="btn btn-secondary">View availability</Link>
            <a href="mailto:contact@asiapacific-chamber.com" className="btn btn-primary">Email APCC</a>
          </div>
        </div>
      </section>
    </section>
  );

  // Sub-componente (Server) del formulario
  function FormSection({ defaultPlan }: { defaultPlan: string }) {
    const utmDefaults = { utm_source: '', utm_medium: '', utm_campaign: '' };
    async function action(formData: FormData) { 'use server'; return submit(formData); }

    return (
      <div id="form" className="container py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold">Apply for Membership</h2>
            <p className="mt-1 text-neutral-400 text-sm">Estimated time: 2 minutes. We’ll contact you to complete the process.</p>

            <form action={action} className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="text-sm text-neutral-300">Full name</label><input name="name" required placeholder="e.g., Li Wei" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" /></div>
                <div><label className="text-sm text-neutral-300">Email</label><input name="email" type="email" required placeholder="name@company.com" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" /></div>
                <div><label className="text-sm text-neutral-300">Company (in Asia)</label><input name="company" required placeholder="e.g., Shenzhen Tech Ltd." className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" /></div>
                <div><label className="text-sm text-neutral-300">Phone</label><input name="phone" placeholder="+852 1234 5678" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" /></div>
                <div><label className="text-sm text-neutral-300">Country</label><input name="country" placeholder="e.g., China / Hong Kong / Singapore" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" /></div>
                <div><label className="text-sm text-neutral-300">Plan</label>
                  <select name="plan" defaultValue={defaultPlan} className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2">
                    {PLANS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                </div>
              </div>

              <div><label className="text-sm text-neutral-300">Product / Industry</label><input name="industry" placeholder="e.g., Electronics, Food & Beverage, Packaging" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" /></div>

              <div>
                <label className="text-sm text-neutral-300">Message (optional)</label>
                <textarea name="message" rows={4} placeholder="Tell us about your LatAm goals, timelines, or questions…" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2" />
              </div>

              {/* UTM hidden */}
              <input type="hidden" name="utm_source"   value={utmDefaults.utm_source} />
              <input type="hidden" name="utm_medium"   value={utmDefaults.utm_medium} />
              <input type="hidden" name="utm_campaign" value={utmDefaults.utm_campaign} />

              <button type="submit" className="btn btn-primary w-full">Submit Application</button>
              <div className="text-xs text-neutral-500 mt-1">By submitting, you agree to be contacted by APCC according to our privacy policy.</div>
            </form>
          </div>

          {/* Lateral: Benefits & quick comparison */}
          <aside className="lg:pl-8">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="text-lg font-semibold">Core Benefits</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Market guides & regulatory insights</li>
                <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Access to sector groups (buyers & distributors)</li>
                <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Media exposure across APCC channels</li>
                <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Priority in trade missions & fairs</li>
                <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/> Executive introductions and follow-up</li>
              </ul>
            </div>

            <div className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-sm text-neutral-300">
              <h3 className="text-lg font-semibold">Quick Comparison</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="min-w-full text-left align-top">
                  <thead className="text-xs text-neutral-500">
                    <tr><th className="pr-4 pb-2">Feature</th><th className="pr-4 pb-2">Essential</th><th className="pr-4 pb-2">Business</th><th className="pr-4 pb-2">Corporate</th></tr>
                  </thead>
                  <tbody className="text-xs">
                    {[
                      ['Certificate', 'Yes', 'Yes', 'Yes'],
                      ['Webinars', 'Yes', 'Yes (priority)', 'Yes (branding)'],
                      ['Newsletter', 'Yes', 'Yes', 'Yes'],
                      ['B2B Networking', '—', 'Quarterly', 'VIP/Guaranteed'],
                      ['Directory Listing', '—', 'Yes', 'Featured'],
                      ['Go-To-Market Consult', '—', '1 / year', '2 / year (strategic)'],
                      ['Trade Missions', 'Access', 'Priority', 'Guaranteed (min. 2/yr)'],
                      ['Allied Chambers', '—', '—', 'Direct Access'],
                      ['Brand Visibility', '—', 'Web/Newsletter', 'Events + Media'],
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
}
