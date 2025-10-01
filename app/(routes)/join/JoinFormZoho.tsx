'use client';

import Script from 'next/script';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type Props = { defaultPlan?: string };

const CONTACT = {
  email: 'info@asiapacific-chamber.com',
};

export default function JoinFormZoho({ defaultPlan = 'Business' }: Props) {
  // Mantener selección de plan entre tarjetas y el form
  const [plan, setPlan] = useState(defaultPlan);

  // Origin fijo para reporting (como en el embed)
  const LEAD_ORIGIN = 'asiapacific-chamber/join';

  // Si viene ?plan= en URL, úsalo al montar (solo cliente)
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const p = sp.get('plan');
    if (p) setPlan(p);
  }, []);

  // Helper: value del <select> de plan con fallback
  const planValue = useMemo(() => {
    const allowed = ['Essential', 'Business', 'Corporate'];
    return allowed.includes(plan) ? plan : 'Business';
  }, [plan]);

  // Para que el <select> del form refleje cambios externos (p.ej. al hacer click en “Elegir plan”)
  useEffect(() => {
    const el = document.getElementById('LEADCF10') as HTMLSelectElement | null;
    if (el) el.value = planValue;
  }, [planValue]);

  return (
    <div id="form" className="container py-10">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Completa tu solicitud</h2>
          <p className="mt-1 text-neutral-400 text-sm">
            Tiempo estimado: 2 minutos. Te contactaremos para finalizar el proceso.
          </p>

          {/* reCAPTCHA que requiere Zoho */}
          <Script src="https://www.google.com/recaptcha/api.js" async defer />

          {/* Helpers/validaciones de Zoho (IDs de tu embed /join) */}
          <Script id="zoho-w2l-helpers-join" strategy="afterInteractive">
            {`
              function addAriaSelected6988454000000688119 (){
                var optionElem = event.target;
                var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
                if(previousSelectedOption){ previousSelectedOption.removeAttribute('aria-selected'); }
                optionElem.querySelectorAll('option')[ optionElem.selectedIndex ].ariaSelected = 'true';
              }
              function rccallback6988454000000688119 (){
                var r = document.getElementById('recap6988454000000688119');
                if(r){ r.setAttribute('captcha-verified', true); }
                var e = document.getElementById('recapErr6988454000000688119');
                if(e && e.style.visibility === 'visible'){ e.style.visibility = 'hidden'; }
              }
              function reCaptchaAlert6988454000000688119 (){
                var recap = document.getElementById('recap6988454000000688119');
                if(recap && recap.getAttribute('captcha-verified') == 'false'){
                  var err = document.getElementById('recapErr6988454000000688119');
                  if(err){ err.style.visibility = 'visible'; }
                  return false;
                }
                return true;
              }
              function validateEmail6988454000000688119 (){
                var form = document.forms['WebToLeads6988454000000688119'];
                if(!form) return true;
                var emailFld = form.querySelectorAll('[ftype=email]');
                for(var i=0;i<emailFld.length;i++){
                  var emailVal = emailFld[i].value;
                  if((emailVal.replace(/^\\s+|\\s+$/g,'' )).length != 0 ){
                    var atpos = emailVal.indexOf('@');
                    var dotpos = emailVal.lastIndexOf('.');
                    if( atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length ){
                      alert('Introduzca una dirección de correo electrónico válida.');
                      emailFld[i].focus();
                      return false;
                    }
                  }
                }
                return true;
              }
              function checkMandatory6988454000000688119 (){
                var form = document.forms['WebToLeads6988454000000688119'];
                if(!form) return true;
                var mndFileds = [ 'Company', 'First Name', 'Last Name', 'Email', 'Mobile', 'Country', 'LEADCF10' ];
                var fldLangVal = [ 'Empresa', 'Nombre', 'Apellido', 'Correo electrónico', 'Móvil', 'País', 'Membresías' ];
                for(var i = 0; i < mndFileds.length; i++ ){
                  var fieldObj = form[ mndFileds[i] ];
                  if( fieldObj ){
                    if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'' )).length == 0 ){
                      if( fieldObj.type == 'file' ){ alert('Seleccione un archivo para cargar.'); fieldObj.focus(); return false; }
                      alert( fldLangVal[i] + ' no puede estar vacío.' ); fieldObj.focus(); return false;
                    } else if( fieldObj.nodeName == 'SELECT' ){
                      if( fieldObj.options[fieldObj.selectedIndex].value == '-None-' ){
                        alert( fldLangVal[i] + ' no puede ser nulo.' ); fieldObj.focus(); return false;
                      }
                    }
                  }
                }
                if( !validateEmail6988454000000688119()){ return false; }
                if( !reCaptchaAlert6988454000000688119()){ return false; }
                var btn = form.querySelector('.crmWebToEntityForm .formsubmit');
                if(btn){ btn.setAttribute('disabled', true); }
                return true;
              }
            `}
          </Script>

          {/* === FORM ZOHO (mismo diseño Tailwind del sitio) === */}
          <form
            id="webform6988454000000688119"
            name="WebToLeads6988454000000688119"
            action="https://crm.zoho.com/crm/WebToLeadForm"
            method="POST"
            acceptCharset="UTF-8"
            onSubmit={(e) => {
              // delega en validadores de Zoho
              // @ts-ignore
              if (!window.checkMandatory6988454000000688119?.()) {
                e.preventDefault();
              }
            }}
            className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 space-y-4 crmWebToEntityForm zcwf_lblLeft"
          >
            {/* Campos ocultos obligatorios */}
            <input type="hidden" name="xnQsjsdp" value="080e4f366e60cbd5cd846e250c2d1a715377ddcafe1ada43b3d3dcdac9b4ff61" />
            <input type="hidden" name="xmIwtLD" value="826295771953cf121afc19e2079ff862c322bdd5900c7c3cd5c3d9f35706f6507fc4b570a7281a619414bc00c9d5046c" />
            <input type="hidden" name="actionType" value="TGVhZHM=" />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input type="hidden" name="returnURL" value="https://www.asiapacific-chamber.com/join-gracias" />

            {/* Honeypots (anti-spam) */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
            <input type="text" name="aG9uZXlwb3Q" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-neutral-300">Nombre</label>
                <input
                  type="text" id="First_Name" name="First Name" required maxLength={40}
                  className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2"
                  placeholder="María"
                  aria-label="Nombre"
                />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Apellido</label>
                <input
                  type="text" id="Last_Name" name="Last Name" required maxLength={80}
                  className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2"
                  placeholder="González"
                  aria-label="Apellido"
                />
              </div>

              <div>
                <label className="text-sm text-neutral-300">Correo</label>
                <input
                  type="text" id="Email" name="Email" required maxLength={100}
                  // atributo que usa el validador de Zoho
                  {...({ ftype: 'email' } as any)}
                  className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2"
                  placeholder="nombre@empresa.cl"
                  aria-label="Correo electrónico"
                />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Empresa</label>
                <input
                  type="text" id="Company" name="Company" required maxLength={200}
                  className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2"
                  placeholder="Importadora Andes"
                  aria-label="Empresa"
                />
              </div>

              <div>
                <label className="text-sm text-neutral-300">Móvil</label>
                <input
                  type="text" id="Mobile" name="Mobile" required maxLength={30}
                  className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2"
                  placeholder="+56 9 1234 5678"
                  aria-label="Móvil"
                />
              </div>
              <div>
                <label className="text-sm text-neutral-300">País</label>
                <input
                  type="text" id="Country" name="Country" required maxLength={100}
                  className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2"
                  placeholder="Chile"
                  aria-label="País"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-neutral-300">Membresía</label>
                <select
                  id="LEADCF10" name="LEADCF10" required
                  defaultValue={planValue}
                  onChange={() => (window as any).addAriaSelected6988454000000688119?.()}
                  className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2"
                  aria-label="Membresías"
                >
                  <option value="-None-">-None-</option>
                  <option value="Essential">Essential</option>
                  <option value="Business">Business</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-neutral-300">Intereses / Mensaje (opcional)</label>
                <textarea
                  id="LEADCF3" name="LEADCF3" rows={4}
                  className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-3 py-2"
                  placeholder="Cuéntanos qué productos/mercados te interesan, dudas o urgencias logísticas…"
                  aria-label="Mensaje"
                />
              </div>
            </div>

            {/* Brand & Origen (ocultos) */}
            <input type="hidden" id="LEADCF5" name="LEADCF5" value="APCC" />
            <input type="hidden" id="LEADCF9" name="LEADCF9" value={LEAD_ORIGIN} />

            {/* reCAPTCHA */}
            <div className="mt-2">
              <div
                className="g-recaptcha"
                data-sitekey="6LdEBdsrAAAAAGM4Juagg6u7gsmkVFLXlVrR452S"
                data-theme="light"
                data-callback="rccallback6988454000000688119"
                id="recap6988454000000688119"
                {...({ 'captcha-verified': 'false' } as any)}
              />
              <div id="recapErr6988454000000688119" style={{ fontSize: 12, color: 'red', visibility: 'hidden' }}>
                Error en validación de Captcha. Si no es un robot, inténtelo de nuevo.
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full formsubmit">Enviar solicitud</button>
            <div className="text-xs text-neutral-500">
              Al enviar, aceptas ser contactado por APCC conforme a nuestra política de privacidad. ¿Dudas?
              {' '}<Link href={`mailto:${CONTACT.email}`} className="underline">Escríbenos</Link>.
            </div>
          </form>
        </div>

        {/* Lateral (igual que tu diseño actual) */}
        <aside className="lg:pl-8">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="text-lg font-semibold">Beneficios transversales</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li>Plataforma digital: biblioteca de guías, reportes y acuerdos</li>
              <li>Grupos segmentados (importadores, exportadores, startups, logística)</li>
              <li>Cobertura comunicacional en medios y redes de la cámara</li>
              <li>Trato directo con gerencias (gremial, comercial, comunicaciones)</li>
              <li>Eventos: 1 webinar/mes + 1 evento presencial/trimestre</li>
              <li>Misiones comerciales: 2 viajes/año a China y Hong Kong</li>
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
