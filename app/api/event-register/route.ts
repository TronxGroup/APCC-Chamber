// app/api/event-register/route.ts
import { NextResponse } from 'next/server';

function clean(v?: string | null) {
  return (v ?? '').toString().trim().slice(0, 500);
}

export async function POST(req: Request) {
  const form = await req.formData();

  // Honeypot
  if (clean(form.get('website'))) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const payload = {
    event_slug: clean(form.get('event_slug')),
    event_title: clean(form.get('event_title')),
    event_date: clean(form.get('event_date')),
    name: clean(form.get('name')),
    email: clean(form.get('email')),
    company: clean(form.get('company')),
    role: clean(form.get('role')),
    phone: clean(form.get('phone')),
    location: clean(form.get('location')),
    is_member: clean(form.get('is_member')),
    interests: clean(form.get('interests')),
    notes: clean(form.get('notes')),
    privacy: clean(form.get('privacy')),
    utm_source: clean(form.get('utm_source')),
    utm_medium: clean(form.get('utm_medium')),
    utm_campaign: clean(form.get('utm_campaign')),
    source_url: clean(form.get('source_url')),
    ts: new Date().toISOString(),
  };

  // Validación básica
  if (!payload.name || !payload.email || !payload.event_slug) {
    return NextResponse.json({ ok: false, error: 'Datos incompletos' }, { status: 400 });
  }

  // TODO: Envía a tus CRMs. Dejo dos funciones de ejemplo:
  try {
    // await sendToHubSpot(payload);
    // await sendToZoho(payload);
  } catch (e) {
    console.error('CRM error', e);
    // No fallamos de cara al usuario si un CRM cae: registra en logs/backup
  }

  // Backup simple en logs (para auditar si falla CRM)
  console.log('[event-register]', payload);

  return NextResponse.json({ ok: true });
}

/*
// === Ejemplo de integración (rellena con tus claves) ===
async function sendToHubSpot(data: any) {
  const portalId = process.env.HUBSPOT_PORTAL_ID!;
  const formId = process.env.HUBSPOT_FORM_ID!; // Crea 1 form global en HS
  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

  const body = {
    fields: [
      { name: 'email', value: data.email },
      { name: 'firstname', value: data.name },
      { name: 'company', value: data.company },
      { name: 'phone', value: data.phone },
      // custom fields:
      { name: 'event_slug', value: data.event_slug },
      { name: 'event_title', value: data.event_title },
      { name: 'event_date', value: data.event_date },
      { name: 'is_member', value: data.is_member },
      { name: 'interests', value: data.interests },
      { name: 'notes', value: data.notes },
    ],
    context: {
      pageUri: data.source_url,
      pageName: data.event_title,
      hutk: '', // cookie hubspotutk si la gestionas en cliente
    },
  };

  await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

async function sendToZoho(data: any) {
  // Ejemplo: crear Lead en Zoho CRM con campos personalizados
  // Usa access token en process.env.ZOHO_ACCESS_TOKEN
  // Endpoint y body según tu módulo (Leads/Contacts + módulo "Event Registration")
}
*/
