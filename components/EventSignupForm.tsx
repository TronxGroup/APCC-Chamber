// components/EventSignupForm.tsx
'use client';

import * as React from 'react';
import Script from 'next/script';

type EventMini = {
  slug: string;
  title: string;
  date?: string;
  membersOnly?: boolean;
};

type Props = { event: EventMini };

export default function EventSignupForm({ event }: Props) {
  // Fallback por si por alguna razón no llega el slug desde la página
  const slugValue = event?.slug ?? 'sin-slug';

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-[var(--apcc-text)]">Inscripción</h2>
      <p className="mt-1 text-sm text-[var(--apcc-text-2)]">
        Completa tus datos para reservar tu cupo. Recibirás confirmación por correo.
      </p>

      {/* Script reCAPTCHA (del snippet de Zoho) */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer />

      {/* Si quieres portar las validaciones JS de Zoho tal cual, puedes incrustarlas aquí:
         <Script id="zoho-webform-validate" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `...` }} />
         Por simplicidad usamos validación HTML5 (required) y dejamos que Zoho valide servidor. */}
      
      <form
        id="webform6988454000000695198"
        name="WebToLeads6988454000000695198"
        className="mt-4 card p-6 grid gap-4"
        method="POST"
        action="https://crm.zoho.com/crm/WebToLeadForm"
        // Conservamos UTF-8; validación HTML5 + validación server de Zoho
        onSubmit={() => {
          (document as any).charset = 'UTF-8';
          return true;
        }}
        acceptCharset="UTF-8"
      >
        {/* ===== HIDDEN OBLIGATORIOS DE ZOHO (tus valores) ===== */}
        <input
          type="text"
          style={{ display: 'none' }}
          name="xnQsjsdp"
          value="d51a29f2c502cf7e3fe5ebd2e2fda2817b2c3bf6bb727cbf6e4e7befa6704553"
          readOnly
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="text"
          style={{ display: 'none' }}
          name="xmIwtLD"
          value="f070ae1ef4ee6782c923f1a454519be26c85f713a8d88793a6f10b6ccb12713c207af81ae855bdeb21dddc7bd4b76c5b"
          readOnly
        />
        <input
          type="text"
          style={{ display: 'none' }}
          name="actionType"
          value="TGVhZHM="
          readOnly
        />
        <input
          type="text"
          style={{ display: 'none' }}
          name="returnURL"
          value="https://www.asiapacific-chamber.com/eventos/gracias"
          readOnly
        />

        {/* ===== CAMPOS VISIBLES (mismo contenido, estilo APCC) ===== */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="First_Name" className="apcc-label">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              id="First_Name"
              name="First Name"
              type="text"
              maxLength={40}
              required
              className="apcc-input"
            />
          </div>
          <div>
            <label htmlFor="Last_Name" className="apcc-label">
              Apellido <span className="text-red-500">*</span>
            </label>
            <input
              id="Last_Name"
              name="Last Name"
              type="text"
              maxLength={80}
              required
              className="apcc-input"
            />
          </div>
          <div>
            <label htmlFor="Email" className="apcc-label">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              id="Email"
              name="Email"
              type="email"
              autoComplete="email"
              maxLength={100}
              required
              className="apcc-input"
            />
          </div>
          <div>
            <label htmlFor="Company" className="apcc-label">Empresa</label>
            <input id="Company" name="Company" type="text" maxLength={200} className="apcc-input" />
          </div>
          <div>
            <label htmlFor="LEADCF2" className="apcc-label">Cargo</label>
            <input id="LEADCF2" name="LEADCF2" type="text" maxLength={255} className="apcc-input" />
          </div>
          <div>
            <label htmlFor="Phone" className="apcc-label">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input id="Phone" name="Phone" type="tel" maxLength={30} required className="apcc-input" />
          </div>
          <div>
            <label htmlFor="Country" className="apcc-label">
              País <span className="text-red-500">*</span>
            </label>
            <input id="Country" name="Country" type="text" maxLength={100} required className="apcc-input" />
          </div>
          <div>
            <label htmlFor="LEADCF12" className="apcc-label">
              ¿Eres socio APCC? <span className="text-red-500">*</span>
            </label>
            <select id="LEADCF12" name="LEADCF12" required defaultValue="No" className="apcc-input">
              <option value="-None-">-None-</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="LEADCF11" className="apcc-label">Intereses</label>
          <input id="LEADCF11" name="LEADCF11" type="text" maxLength={255} className="apcc-input" />
        </div>

        <div>
          <label htmlFor="LEADCF3" className="apcc-label">Mensaje</label>
          <textarea id="LEADCF3" name="LEADCF3" className="apcc-textarea" />
        </div>

        {/* ===== SELECTS OCULTOS (igual que tu snippet) ===== */}
        <div className="hidden">
          <label htmlFor="LEADCF5" className="apcc-label">Marca</label>
          <select id="LEADCF5" name="LEADCF5" defaultValue="APCC">
            <option value="-None-">-None-</option>
            <option value="Tronx-Group">Tronx-Group</option>
            <option value="Dekaelo">Dekaelo</option>
            <option value="Tronx-TV">Tronx-TV</option>
            <option value="Tonx-Strategy">Tonx-Strategy</option>
            <option value="Echevensko">Echevensko</option>
            <option value="APCC">APCC</option>
            <option value="HKLABA">HKLABA</option>
          </select>
        </div>

        <div className="hidden">
          <label htmlFor="LEADCF9" className="apcc-label">Lead_Origen</label>
          <select id="LEADCF9" name="LEADCF9" defaultValue="asiapacific-chamber/eventos">
            <option value="-None-">-None-</option>
            <option value="plan.dekaelomedia.com">plan.dekaelomedia.com</option>
            <option value="tronxgroup.com/contacto">tronxgroup.com/contacto</option>
            <option value="tronxstrategic.com/contacto">tronxstrategic.com/contacto</option>
            <option value="dekaelomedia.com/contacto">dekaelomedia.com/contacto</option>
            <option value="empresas.echevensko.com">empresas.echevensko.com</option>
            <option value="asiapacific-chamber.com/contacto">asiapacific-chamber.com/contacto</option>
            <option value="asiapacific-chamber/join">asiapacific-chamber/join</option>
            <option value="hklaba.com/contacto">hklaba.com/contacto</option>
            <option value="asiapacific-chamber/eventos">asiapacific-chamber/eventos</option>
          </select>
        </div>

        {/* ===== SLUG DEL EVENTO (dinámico) ===== */}
        <input
          type="hidden"
          id="LEADCF13"
          name="LEADCF13"
          value={slugValue}
        />

        {/* ===== Honeypot (del snippet) ===== */}
        <input type="text" name="aG9uZXlwb3Q" defaultValue="" style={{ display: 'none' }} />

        {/* ===== reCAPTCHA (tu sitekey) ===== */}
        <div className="g-recaptcha" data-sitekey="6LezXdwrAAAAAHxm6WxYcLq7zcj29wB6jjXNlmLD" data-theme="light" />

        {/* ===== Botones ===== */}
        <div className="flex gap-3 mt-2">
          <button id="formsubmit" className="btn btn-primary" type="submit" title="Enviar" aria-label="Enviar">
            Enviar
          </button>
          <button className="btn btn-outline" type="reset" title="Restablecer" aria-label="Restablecer">
            Restablecer
          </button>
        </div>
      </form>
    </section>
  );
}
