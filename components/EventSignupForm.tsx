"use client";

import React from "react";

type Props = {
  event: {
    slug: string;
    title: string;
    date: string;
    membersOnly?: boolean;
  };
};

export default function EventSignupForm({ event }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[var(--apcc-text)]">
        Inscripción
      </h2>
      <p className="mt-1 text-sm text-[var(--apcc-muted)]">
        Completa tus datos para reservar tu cupo. Recibirás confirmación por correo.
      </p>

      <form
        id="webform6988454000000695198"
        name="WebToLeads6988454000000695198"
        className="mt-4 card p-6 grid gap-4"
        method="POST"
        action="https://crm.zoho.com/crm/WebToLeadForm"
        acceptCharset="UTF-8"
        onSubmit={() => {
          (document as any).charset = "UTF-8";
          return true;
        }}
      >
        {/* ===== Hidden Zoho required fields ===== */}
        <input
          type="hidden"
          name="xnQsjsdp"
          value="d51a29f2c502cf7e3fe5ebd2e2fda2817b2c3bf6bb727cbf6e4e7befa6704553"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="hidden"
          name="xmIwtLD"
          value="f070ae1ef4ee6782c923f1a454519be26c85f713a8d88793a6f10b6ccb12713c207af81ae855bdeb21dddc7bd4b76c5b"
        />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input
          type="hidden"
          name="returnURL"
          value="https://www.asiapacific-chamber.com/eventos/gracias"
        />

        {/* ===== Slug dinámico ===== */}
        <input type="hidden" name="LEADCF13" value={event.slug} />

        {/* ===== Campos visibles ===== */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="First_Name" className="block text-sm font-medium text-[var(--apcc-text)]">
              Nombre *
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
              Apellido *
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
              Correo electrónico *
            </label>
            <input
              id="Email"
              name="Email"
              type="email"
              required
              maxLength={100}
              placeholder="tucorreo@empresa.com"
              className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
            />
          </div>
          <div>
            <label htmlFor="Company" className="block text-sm font-medium text-[var(--apcc-text)]">
              Empresa
            </label>
            <input
              id="Company"
              name="Company"
              type="text"
              maxLength={200}
              placeholder="Nombre de la empresa"
              className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="LEADCF2" className="block text-sm font-medium text-[var(--apcc-text)]">
              Cargo
            </label>
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
              Teléfono *
            </label>
            <input
              id="Phone"
              name="Phone"
              type="tel"
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
              País *
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
              ¿Eres socio APCC? *
            </label>
            <select
              id="LEADCF12"
              name="LEADCF12"
              required
              defaultValue="No"
              className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
            >
              <option value="-None-">- Selecciona -</option>
              <option value="Si">Sí</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="LEADCF11" className="block text-sm font-medium text-[var(--apcc-text)]">
            Intereses
          </label>
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
          <label htmlFor="LEADCF3" className="block text-sm font-medium text-[var(--apcc-text)]">
            Mensaje
          </label>
          <textarea
            id="LEADCF3"
            name="LEADCF3"
            placeholder="Tu mensaje..."
            className="block w-full rounded-xl border border-[var(--apcc-border)] bg-white px-3.5 py-2.5 text-[var(--apcc-text)] placeholder-[var(--apcc-muted)] shadow-sm focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
          />
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="btn btn-primary px-6 py-2 rounded-xl"
          >
            Enviar
          </button>
          <button
            type="reset"
            className="btn btn-outline px-6 py-2 rounded-xl"
          >
            Restablecer
          </button>
        </div>
      </form>
    </div>
  );
}
