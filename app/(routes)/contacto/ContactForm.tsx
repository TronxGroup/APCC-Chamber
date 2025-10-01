'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useCallback } from 'react';

const CONTACT = {
  email: 'info@asiapacific-chamber.com',
  phoneE164: '+56975769493',
  phoneNice: '+56 9 7576 9493',
};

export default function ContactForm() {
  // Delegamos validaciones a las funciones del embed Zoho
  const handleZohoSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    const w = window as any;
    // Si las funciones aún no cargan, evitamos romper el envío (Zoho revalida del lado servidor igual)
    const emailOk = w?.validateEmail6988454000000688025 ? w.validateEmail6988454000000688025() : true;
    if (!emailOk) { e.preventDefault(); return; }
    const captchaOk = w?.reCaptchaAlert6988454000000688025 ? w.reCaptchaAlert6988454000000688025() : true;
    if (!captchaOk) { e.preventDefault(); return; }
    const mandatoryOk = w?.checkMandatory6988454000000688025 ? w.checkMandatory6988454000000688025() : true;
    if (!mandatoryOk) { e.preventDefault(); return; }
  }, []);

  return (
    <div className="lg:col-span-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8">
      {/* reCAPTCHA de Google (Zoho lo requiere) */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer />

      {/* Helpers de Zoho (adaptados) */}
      <Script id="zoho-w2l-helpers" strategy="afterInteractive">
        {`
          function addAriaSelected6988454000000688025(){
            var optionElem = event.target;
            var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
            if(previousSelectedOption){ previousSelectedOption.removeAttribute('aria-selected'); }
            optionElem.querySelectorAll('option')[ optionElem.selectedIndex ].ariaSelected = 'true';
          }
          function rccallback6988454000000688025 (){
            var rec = document.getElementById('recap6988454000000688025');
            if(rec){ rec.setAttribute('captcha-verified', true); }
            var err = document.getElementById('recapErr6988454000000688025');
            if(err && err.style.visibility === 'visible'){ err.style.visibility = 'hidden'; }
          }
          function reCaptchaAlert6988454000000688025 (){
            var recap = document.getElementById('recap6988454000000688025');
            if(recap && recap.getAttribute('captcha-verified') == 'false'){
              var err = document.getElementById('recapErr6988454000000688025');
              if(err){ err.style.visibility = 'visible'; }
              return false;
            }
            return true;
          }
          function validateEmail6988454000000688025 (){
            var form = document.getElementById('webform6988454000000688025');
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
          function checkMandatory6988454000000688025 (){
            var form = document.getElementById('webform6988454000000688025');
            if(!form) return true;
            var mndFileds = [ 'First Name', 'Last Name', 'Email', 'Country', 'LEADCF1' ];
            var fldLangVal = [ 'Nombre', 'Apellido', 'Correo electrónico', 'País', 'Motivo' ];
            for(var i=0;i<mndFileds.length;i++){
              var fieldObj = form.elements[mndFileds[i]];
              if(fieldObj){
                if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'' )).length == 0 ){
                  if(fieldObj.type == 'file'){ alert('Seleccione un archivo para cargar.'); fieldObj.focus(); return false; }
                  alert(fldLangVal[i] + ' no puede estar vacío.');
                  fieldObj.focus();
                  return false;
                }else if(fieldObj.nodeName == 'SELECT'){
                  if(fieldObj.options[fieldObj.selectedIndex].value == '-None-'){
                    alert(fldLangVal[i] + ' no puede ser nulo.');
                    fieldObj.focus();
                    return false;
                  }
                }else if(fieldObj.type == 'checkbox'){
                  if(fieldObj.checked == false){
                    alert('Por favor acepte ' + fldLangVal[i]);
                    fieldObj.focus();
                    return false;
                  }
                }
              }
            }
            var btn = form.querySelector('.crmWebToEntityForm .formsubmit');
            if(btn){ btn.setAttribute('disabled', true); }
            return true;
          }
        `}
      </Script>

      <h2 className="text-xl font-semibold">Envíanos un mensaje</h2>
      <p className="mt-2 text-sm text-neutral-400">Cuéntanos tu objetivo y cómo podemos ayudarte.</p>

      {/* Form Zoho con mismo diseño */}
      <form
        id="webform6988454000000688025"
        name="WebToLeads6988454000000688025"
        action="https://crm.zoho.com/crm/WebToLeadForm"
        method="POST"
        acceptCharset="UTF-8"
        onSubmit={handleZohoSubmit}
        className="mt-6 grid gap-4"
      >
        {/* Honeypots */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="text" name="aG9uZXlwb3Q" className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Ocultos obligatorios Zoho */}
        <input type="hidden" name="xnQsjsdp" value="3963f510af508276f037504e02de6603ec0d97b0efa9196dfe90dab643317778" />
        <input type="hidden" name="xmIwtLD" value="80f21f169a810e92ce644b894b2cbb43ebe34ef3d14e2d4544051e1cdd5d42f78d1e0a05a132ad359868821f984e50fe" />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="hidden" name="returnURL" value="https://www.asiapacific-chamber.com/gracias-contacto" />

        {/* Motivo / País */}
        <div className="grid md:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm text-neutral-300">Motivo</span>
            <select
              name="LEADCF1"
              id="LEADCF1"
              required
              aria-label="Motivo de contacto"
              onChange={() => (window as any).addAriaSelected6988454000000688025?.()}
              className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
              defaultValue=""
            >
              <option value="">Selecciona una opción</option>
              <option value="Quiero ser socio">Quiero ser socio</option>
              <option value="Servicios APCC">Servicios APCC</option>
              <option value="Prensa y vocerías">Prensa y vocerías</option>
              <option value="Alianzas">Alianzas</option>
              <option value="Otros">Otros</option>
            </select>
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-neutral-300">País</span>
            <input
              type="text"
              name="Country"
              id="Country"
              required
              placeholder="Chile, Perú, Bolivia, etc."
              aria-label="País"
              className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
            />
          </label>
        </div>

        {/* Nombre / Apellido */}
        <div className="grid md:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm text-neutral-300">Nombre</span>
            <input
              type="text"
              name="First Name"
              id="First_Name"
              required
              maxLength={40}
              aria-label="Nombre"
              className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-neutral-300">Apellido</span>
            <input
              type="text"
              name="Last Name"
              id="Last_Name"
              required
              maxLength={80}
              aria-label="Apellido"
              className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
            />
          </label>
        </div>

        {/* Empresa */}
        <label className="grid gap-1">
          <span className="text-sm text-neutral-300">Empresa</span>
          <input
            type="text"
            name="Company"
            id="Company"
            maxLength={200}
            aria-label="Empresa"
            className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
          />
        </label>

        {/* Email / Teléfono */}
        <div className="grid md:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm text-neutral-300">Email</span>
            <input
              type="text"
              name="Email"
              id="Email"
              required
              maxLength={100}
              aria-label="Email"
              // Zoho valida con este atributo
              {...({ ftype: 'email' } as any)}
              className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-neutral-300">Teléfono</span>
            <input
              type="text"
              name="Mobile"
              id="Mobile"
              placeholder={CONTACT.phoneNice}
              maxLength={30}
              aria-label="Teléfono"
              className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
            />
          </label>
        </div>

        {/* Mensaje */}
        <label className="grid gap-1">
          <span className="text-sm text-neutral-300">Mensaje</span>
          <textarea
            name="LEADCF3"
            id="LEADCF3"
            rows={5}
            aria-label="Mensaje"
            placeholder="Cuéntanos brevemente tu objetivo, plazos y presupuesto estimado."
            className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-900/50"
          />
        </label>

        {/* Consentimiento UX (si quieres mapear a un campo de Zoho, dime el API name y lo conecto) */}
        <label className="mt-1 inline-flex items-start gap-2 text-sm text-neutral-400">
          <input type="checkbox" required className="mt-1 accent-red-700" />
          Autorizo a APCC a contactarme y tratar mis datos con fines comerciales y de soporte conforme a su política de privacidad.
        </label>

        {/* reCAPTCHA */}
        <div className="mt-2">
          <div
            className="g-recaptcha"
            data-sitekey="6LdJ-torAAAAAAWS2ka_CKPgNysAeDn-UXZZi_Gw"
            data-theme="light"
            data-callback="rccallback6988454000000688025"
            id="recap6988454000000688025"
            {...({ 'captcha-verified': 'false' } as any)}
          />
          <div id="recapErr6988454000000688025" style={{ fontSize: 12, color: 'red', visibility: 'hidden' }}>
            Error en validación de Captcha. Si no es un robot, inténtelo de nuevo.
          </div>
        </div>

        {/* Metadatos de origen/brand */}
        <input type="hidden" name="LEADCF5" id="LEADCF5" value="APCC" />
        <input type="hidden" name="LEADCF9" id="LEADCF9" value="asiapacific-chamber.com/contacto" />

        <div className="mt-4 flex flex-wrap gap-3">
          <button type="submit" className="btn btn-primary formsubmit">Enviar</button>
          <Link href="/membresias" className="btn btn-secondary">Ver membresías</Link>
        </div>
      </form>
    </div>
  );
}
