"use client";

import React from "react";
import Script from "next/script";

type Props = {
  event: { slug: string; title: string; date?: string; membersOnly?: boolean };
};

export default function EventSignupForm({ event }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[var(--apcc-text)]">Inscripción</h2>
      <p className="mt-1 text-sm text-[var(--apcc-muted)]">
        Completa tus datos para reservar tu cupo. Recibirás confirmación por correo.
      </p>

      {/* CARGA reCAPTCHA v2 (Google) */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer />

      {/* Scripts Zoho: validaciones y helpers (respetando IDs y nombres) */}
      <Script id="zoho-webtolead-helpers" strategy="afterInteractive">
        {`
          function addAriaSelected6988454000000695198(){
            var optionElem = event.target;
            var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
            if (previousSelectedOption) { previousSelectedOption.removeAttribute('aria-selected'); }
            optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
          }
          function rccallback6988454000000695198(){
            if (document.getElementById('recap6988454000000695198') != undefined) {
              document.getElementById('recap6988454000000695198').setAttribute('captcha-verified', true);
            }
            if (document.getElementById('recapErr6988454000000695198') != undefined &&
                document.getElementById('recapErr6988454000000695198').style.visibility == 'visible') {
              document.getElementById('recapErr6988454000000695198').style.visibility = 'hidden';
            }
          }
          function reCaptchaAlert6988454000000695198(){
            var recap = document.getElementById('recap6988454000000695198');
            if (recap != undefined && recap.getAttribute('captcha-verified') == 'false') {
              document.getElementById('recapErr6988454000000695198').style.visibility = 'visible';
              return false;
            }
            return true;
          }
          function validateEmail6988454000000695198(){
            var form = document.forms['WebToLeads6988454000000695198'];
            var emailFld = form.querySelectorAll('[ftype=email]');
            for (var i = 0; i < emailFld.length; i++) {
              var emailVal = emailFld[i].value;
              if ((emailVal.replace(/^\\s+|\\s+$/g,'' )).length != 0) {
                var atpos = emailVal.indexOf('@');
                var dotpos = emailVal.lastIndexOf('.');
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                  alert('Introduzca una dirección de correo electrónico válida. ');
                  emailFld[i].focus();
                  return false;
                }
              }
            }
            return true;
          }
          function checkMandatory6988454000000695198(){
            var mndFileds = ['Company','First Name','Last Name','Email','Phone','Country','LEADCF12'];
            var fldLangVal = ['Empresa','Nombre','Apellido','Correo electrónico','Teléfono','País','¿Eres socio APCC?'];
            for (var i = 0; i < mndFileds.length; i++) {
              var fieldObj = document.forms['WebToLeads6988454000000695198'][mndFileds[i]];
              if (fieldObj) {
                if (((fieldObj.value).replace(/^\\s+|\\s+$/g,'' )).length == 0) {
                  if (fieldObj.type == 'file') { alert('Seleccione un archivo para cargar.'); fieldObj.focus(); return false; }
                  alert(fldLangVal[i] + ' no puede estar vacío.');
                  fieldObj.focus(); return false;
                } else if (fieldObj.nodeName == 'SELECT') {
                  if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                    alert(fldLangVal[i] + ' no puede ser nulo.');
                    fieldObj.focus(); return false;
                  }
                } else if (fieldObj.type == 'checkbox') {
                  if (fieldObj.checked == false) { alert('Please accept ' + fldLangVal[i]); fieldObj.focus(); return false; }
                }
                try { if (fieldObj.name == 'Last Name') { name = fieldObj.value; } } catch(e){}
              }
            }
            if (!validateEmail6988454000000695198()) { return false; }
            if (!reCaptchaAlert6988454000000695198()) { return false; }
            var urlparams = new URLSearchParams(window.location.search);
            if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
              var webform = document.getElementById('webform6988454000000695198');
              var service = urlparams.get('service');
              var smarturlfield = document.createElement('input');
              smarturlfield.setAttribute('type','hidden');
              smarturlfield.setAttribute('value', service);
              smarturlfield.setAttribute('name', 'service');
              webform.appendChild(smarturlfield);
            }
            document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
          }
        `}
      </Script>

      <form
        id="webform6988454000000695198"
        name="WebToLeads6988454000000695198"
        className="mt-4 card p-6 grid gap-4 crmWebToEntityForm zcwf_lblLeft"
        method="POST"
        action="https://crm.zoho.com/crm/WebToLeadForm"
        acceptCharset="UTF-8"
        onSubmit={() => {
          (document as any).charset = "UTF-8";
          // Respetar validación Zoho
          // @ts-ignore
          return checkMandatory6988454000000695198();
        }}
        style={{ backgroundColor: 'white', color: 'black', maxWidth: 960 }}
      >
        {/* ===== Hidden Zoho (nuevos tokens) ===== */}
        <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="b9f0416e3973b64fa9d8632e16c63be5ae302dbf82a8f6ab4fd336a05d385fac" readOnly />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="0b1db1c8721976867d54315ef3ce97660a0098133660168ecb57ecb288fad580ee5ff230d41b5f9bdfbf2b4a8275f37f" readOnly />
        <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" readOnly />
        <input
          type="text"
          style={{ display: 'none' }}
          name="returnURL"
          value="https://www.asiapacific-chamber.com/eventos/gracias"
          readOnly
        />

        {/* Slug dinámico */}
        <input type="hidden" id="LEADCF13" name="LEADCF13" defaultValue={event?.slug ?? 'sin-slug'} />

        {/* ===== Campos visibles (con Tailwind) ===== */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="First_Name" className="block text-sm font-medium text-[var(--apcc-text)]">
              Nombre <span className="text-red-600">*</span>
            </label>
            <input
              id="First_Name"
              name="First Name"
              type="text"
              required
              maxLength={40}
              placeholder="Tu nombre"
              className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
            />
          </div>
          <div>
            <label htmlFor="Last_Name" className="block text-sm font-medium text-[var(--apcc-text)]">
              Apellido <span className="text-red-600">*</span>
            </label>
            <input
              id="Last_Name"
              name="Last Name"
              type="text"
              required
              maxLength={80}
              placeholder="Tu apellido"
              className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="Email" className="block text-sm font-medium text-[var(--apcc-text)]">
              Correo electrónico <span className="text-red-600">*</span>
            </label>
            <input
              id="Email"
              name="Email"
              type="email"
              // atributo requerido por script Zoho:
              // @ts-ignore
              ftype="email"
              autoComplete="off"
              required
              maxLength={100}
              placeholder="tucorreo@empresa.com"
              className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
            />
          </div>
          <div>
            <label htmlFor="Company" className="block text-sm font-medium text-[var(--apcc-text)]">
              Empresa <span className="text-red-600">*</span>
            </label>
            <input
              id="Company"
              name="Company"
              type="text"
              required
              maxLength={200}
              placeholder="Nombre de la empresa"
              className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="LEADCF2" className="block text-sm font-medium text-[var(--apcc-text)]">Cargo</label>
            <input
              id="LEADCF2"
              name="LEADCF2"
              type="text"
              maxLength={255}
              placeholder="Ej: Gerente de Comercio Exterior"
              className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
            />
          </div>
          <div>
            <label htmlFor="Phone" className="block text-sm font-medium text-[var(--apcc-text)]">
              Teléfono <span className="text-red-600">*</span>
            </label>
            <input
              id="Phone"
              name="Phone"
              type="text"
              required
              maxLength={30}
              placeholder="+56 9 1234 5678"
              className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="Country" className="block text-sm font-medium text-[var(--apcc-text)]">
              País <span className="text-red-600">*</span>
            </label>
            <input
              id="Country"
              name="Country"
              type="text"
              required
              maxLength={100}
              placeholder="Ej: Chile"
              className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
            />
          </div>
          <div>
            <label htmlFor="LEADCF12" className="block text-sm font-medium text-[var(--apcc-text)]">
              ¿Eres socio APCC? <span className="text-red-600">*</span>
            </label>
            <select
              id="LEADCF12"
              name="LEADCF12"
              required
              defaultValue="No"
              className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
              onChange={() => {
                // @ts-ignore
                addAriaSelected6988454000000695198();
              }}
            >
              <option value="-None-">- Selecciona -</option>
              <option value="Si">Sí</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="LEADCF11" className="block text-sm font-medium text-[var(--apcc-text)]">Intereses</label>
          <input
            id="LEADCF11"
            name="LEADCF11"
            type="text"
            maxLength={255}
            placeholder="Temas de interés"
            className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
          />
        </div>

        <div>
          <label htmlFor="LEADCF3" className="block text-sm font-medium text-[var(--apcc-text)]">Mensaje</label>
          <textarea
            id="LEADCF3"
            name="LEADCF3"
            placeholder="Tu mensaje..."
            className="block w-full min-h-[96px] rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
          />
        </div>

        {/* Campos “Marca / Origen / Slug” ocultos para ruteo y reporting */}
        <div className="wfrm_fld_dpNn hidden">
          <label htmlFor="LEADCF5" className="block text-sm font-medium">Marca</label>
          <select
            id="LEADCF5"
            name="LEADCF5"
            defaultValue="APCC"
            className="zcwf_col_fld_slt"
            onChange={() => {
              // @ts-ignore
              addAriaSelected6988454000000695198();
            }}
          >
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

        <div className="wfrm_fld_dpNn hidden">
          <label htmlFor="LEADCF9" className="block text-sm font-medium">Lead_Origen</label>
          <select
            id="LEADCF9"
            name="LEADCF9"
            defaultValue="asiapacific-chamber/eventos"
            className="zcwf_col_fld_slt"
            onChange={() => {
              // @ts-ignore
              addAriaSelected6988454000000695198();
            }}
          >
            <option value="-None-">-None-</option>
            <option value="plan.dekaelomedia.com">plan.dekaelomedia.com</option>
            <option value="tronxgroup.com/contacto">tronxgroup.com/contacto</option>
            <option value="tronxstrategic.com/contacto">tronxstrategic.com/contacto</option>
            <option value="dekaelomedia.com/contacto">dekaelomedia.com/contacto</option>
            <option value="magiaimaginacion.cl">magiaimaginacion.cl</option>
            <option value="asiapacific-chamber.com/contacto">asiapacific-chamber.com/contacto</option>
            <option value="asiapacific-chamber/join">asiapacific-chamber/join</option>
            <option value="hklaba.com/contacto">hklaba.com/contacto</option>
            <option value="asiapacific-chamber/eventos">asiapacific-chamber/eventos</option>
          </select>
        </div>

        {/* reCAPTCHA visible */}
        <div className="mt-2">
          <div
            className="g-recaptcha"
            data-sitekey="6LezXdwrAAAAAHxm6WxYcLq7zcj29wB6jjXNlmLD"
            data-theme="light"
            data-callback="rccallback6988454000000695198"
            id="recap6988454000000695198"
            // @ts-ignore
            captcha-verified="false"
          />
          <div id="recapErr6988454000000695198" style={{ fontSize: 12, color: 'red', visibility: 'hidden' }}>
            Error en validación de Captcha. Si no es un robot, inténtelo de nuevo.
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-3 mt-3">
          <input
            type="submit"
            id="formsubmit"
            role="button"
            className="formsubmit zcwf_button btn btn-primary px-6 py-2 rounded-xl"
            value="Enviar"
            aria-label="Enviar"
            title="Enviar"
          />
          <input
            type="reset"
            className="zcwf_button btn btn-outline px-6 py-2 rounded-xl"
            role="button"
            name="reset"
            value="Restablecer"
            aria-label="Restablecer"
            title="Restablecer"
          />
        </div>
      </form>
    </div>
  );
}
