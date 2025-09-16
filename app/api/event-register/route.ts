// app/api/event-register/route.ts
import { NextResponse } from 'next/server';

// Convierte a string de forma segura (ignora File)
function getStr(form: FormData, key: string, max = 500): string {
  const v = form.get(key);
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

export async function POST(req: Request) {
  const form = await req.formData();

  // Honeypot
  if (getStr(form, 'website')) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const payload = {
    event_slug: getStr(form, 'event_slug'),
    event_title: getStr(form, 'event_title'),
    event_date: getStr(form, 'event_date'),

    name: getStr(form, 'name'),
    email: getStr(form, 'email'),
    company: getStr(form, 'company'),
    role: getStr(form, 'role'),
    phone: getStr(form, 'phone'),
    location: getStr(form, 'location'),
    is_member: getStr(form, 'is_member'),
    interests: getStr(form, 'interests'),
    notes: getStr(form, 'notes'),

    // checkboxes suelen venir como "on" si están marcados
    privacy: getStr(form, 'privacy') ? 'true' : 'false',

    utm_source: getStr(form, 'utm_source'),
    utm_medium: getStr(form, 'utm_medium'),
    utm_campaign: getStr(form, 'utm_campaign'),
    source_url: getStr(form, 'source_url'),

    ts: new Date().toISOString(),
  };

  // Validación básica
  if (!payload.name || !payload.email || !payload.event_slug) {
    return NextResponse.json({ ok: false, error: 'Datos incompletos' }, { status: 400 });
  }

  try {
    // TODO: integra con tus CRMs:
    // await sendToHubSpot(payload);
    // await sendToZoho(payload);
  } catch (e) {
    console.error('CRM error', e);
  }

  console.log('[event-register]', payload); // backup de auditoría
  return NextResponse.json({ ok: true });
}
