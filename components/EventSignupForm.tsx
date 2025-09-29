'use client';

import { useState, useMemo, useEffect } from 'react';

type EventMeta = { slug: string; title: string; date?: string; membersOnly?: boolean };

export default function EventSignupForm({ event }: { event: EventMeta }) {
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle');
  const [msg, setMsg] = useState<string>('');

  // Captura UTM/source una sola vez
  const utm = useMemo(() => {
    if (typeof window === 'undefined') return {};
    const p = new URLSearchParams(window.location.search);
    return {
      utm_source: p.get('utm_source') || '',
      utm_medium: p.get('utm_medium') || '',
      utm_campaign: p.get('utm_campaign') || '',
      source_url: window.location.href,
    };
  }, []);

  useEffect(() => { setMsg(''); setStatus('idle'); }, [event?.slug]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setMsg('');
    const fd = new FormData(e.currentTarget);

    // hidden event meta
    fd.set('event_slug', event.slug);
    fd.set('event_title', event.title);
    if (event.date) fd.set('event_date', event.date);

    // utm/source
    Object.entries(utm).forEach(([k, v]) => fd.set(k, String(v ?? '')));

    try {
      const res = await fetch('/api/event-register', { method: 'POST', body: fd });
      if (!res.ok) throw new Error(await res.text());
      setStatus('ok');
      setMsg('¡Inscripción recibida! Te enviaremos la confirmación por email.');
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus('error');
      setMsg('No se pudo enviar. Intenta nuevamente o escríbenos a info@asiapacific-chamber.com');
      console.error(err);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-5 mt-8">
      {event.membersOnly && (
        <div className="mb-3 text-sm text-[var(--apcc-muted)]">
          * Evento para <strong>socios APCC</strong>. Si no eres socio, puedes inscribirte y te contactamos.
        </div>
      )}

      {/* Honeypot anti-spam */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[var(--apcc-text-2)]">Nombre y apellido</label>
          <input name="name" required className="mt-1 w-full rounded-md border border-[var(--apcc-border)] bg-white px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-[var(--apcc-text-2)]">Email</label>
          <input name="email" type="email" required className="mt-1 w-full rounded-md border border-[var(--apcc-border)] bg-white px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-[var(--apcc-text-2)]">Empresa</label>
          <input name="company" className="mt-1 w-full rounded-md border border-[var(--apcc-border)] bg-white px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-[var(--apcc-text-2)]">Cargo</label>
          <input name="role" className="mt-1 w-full rounded-md border border-[var(--apcc-border)] bg-white px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-[var(--apcc-text-2)]">Teléfono</label>
          <input name="phone" className="mt-1 w-full rounded-md border border-[var(--apcc-border)] bg-white px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-[var(--apcc-text-2)]">Ciudad / País</label>
          <input name="location" className="mt-1 w-full rounded-md border border-[var(--apcc-border)] bg-white px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-[var(--apcc-text-2)]">¿Eres socio APCC?</label>
          <select name="is_member" className="mt-1 w-full rounded-md border border-[var(--apcc-border)] bg-white px-3 py-2">
            <option value="No">No</option>
            <option value="Sí">Sí</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-[var(--apcc-text-2)]">Intereses</label>
          <input name="interests" placeholder="Ej: juguetes, papelería, financiamiento, logística..." className="mt-1 w-full rounded-md border border-[var(--apcc-border)] bg-white px-3 py-2" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-[var(--apcc-text-2)]">Comentarios</label>
          <textarea name="notes" rows={3} className="mt-1 w-full rounded-md border border-[var(--apcc-border)] bg-white px-3 py-2" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <label className="text-xs text-[var(--apcc-muted)]">
          <input type="checkbox" name="privacy" required className="mr-2" />
          Acepto la Política de Privacidad de APCC.
        </label>
        <button type="submit" className="btn btn-primary" disabled={status==='sending'}>
          {status === 'sending' ? 'Enviando…' : 'Inscribirme'}
        </button>
      </div>

      {msg && (
        <div className={`mt-3 text-sm ${status === 'ok' ? 'text-green-700' : 'text-red-700'}`}>
          {msg}
        </div>
      )}
    </form>
  );
}
