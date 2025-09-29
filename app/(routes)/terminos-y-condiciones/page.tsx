// app/(routes)/terminos-y-condiciones/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | APCC',
  description:
    'Términos y Condiciones del sitio web oficial de la Cámara de Comercio Asia Pacífico (APCC). Revisa aquí la información legal sobre membresías, eventos y uso de datos.',
};

export default function TerminosPage() {
  return (
    <section className="container py-16 text-neutral-200">
      <h1 className="text-3xl md:text-4xl font-bold">Términos y Condiciones</h1>
      <p className="mt-2 text-sm text-neutral-400">
        Última actualización: <strong>[fecha]</strong>
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed">
        <p>
          Bienvenido al sitio web oficial de la <strong>Cámara de Comercio Asia Pacífico (APCC)</strong>, disponible en{' '}
          <Link
            href="https://asiapacific-chamber.com"
            target="_blank"
            className="underline underline-offset-4 hover:text-white"
          >
            asiapacific-chamber.com
          </Link>{' '}
          y sus subdominios relacionados (el <strong>“Sitio”</strong>). Al acceder, navegar o registrarse en el Sitio, usted
          (el <strong>“Usuario”</strong> o <strong>“Socio”</strong>) acepta expresamente estos <strong>Términos y Condiciones</strong> (los <strong>“T&amp;C”</strong>).
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Objeto</h2>
          <p>
            APCC ofrece servicios orientados al comercio entre Asia y América Latina, incluyendo membresías, acceso a
            webinars, seminarios, ruedas de negocios, misiones comerciales, publicaciones digitales y networking sectorial.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Membresías</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vigencia de <strong>12 meses</strong> corridos desde la fecha de inscripción y pago.</li>
            <li>Valores y beneficios de cada plan publicados en el Sitio.</li>
            <li>Posibilidad de <strong>upgrade/downgrade</strong> con ajuste proporcional de tarifas.</li>
            <li>APCC puede actualizar beneficios, informando previamente a los socios.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Pagos y facturación</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pagos en CLP o en la divisa que APCC indique.</li>
            <li>Emisión de documentos tributarios conforme a normativa chilena.</li>
            <li>
              Costos de viajes (pasajes, hotel, viáticos) <strong>no incluidos</strong>, salvo indicación expresa en la
              convocatoria.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Cancelaciones y reembolsos</h2>
          <p>
            Cancelación de membresía con <strong>30 días</strong> de aviso. No hay devolución proporcional por períodos no
            utilizados, salvo error imputable a APCC. Para eventos pagados, aplican políticas específicas informadas en cada
            invitación.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Uso del Sitio</h2>
          <p>El Usuario se compromete a un uso lícito y respetuoso del Sitio. Queda prohibido:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Publicar información falsa, maliciosa o infringir derechos de terceros.</li>
            <li>Usar datos obtenidos en el Sitio para spam o fines no autorizados.</li>
            <li>Intentar vulnerar la seguridad, recolectar datos o acceder a recursos sin permiso.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Propiedad intelectual</h2>
          <p>
            Contenidos del Sitio (textos, logos, reportes, imágenes, videos, código y diseño) pertenecen a APCC o aliados y
            están protegidos por leyes de propiedad intelectual. No se otorgan licencias implícitas salvo autorización expresa.
          </p>
        </section>

        <section id="datos-personales">
          <h2 className="text-xl font-semibold mb-2">7. Confidencialidad y datos personales</h2>
          <p>
            APCC recopila y trata datos para gestionar membresías, eventos, comunicaciones y facturación, conforme a la{' '}
            <strong>Ley N° 19.628</strong> (Chile) y normativa internacional aplicable. Podremos utilizar proveedores
            tecnológicos como <strong>Zoho CRM</strong> y <strong>HubSpot</strong> para operar dichos procesos con estándares
            adecuados de seguridad.
          </p>
          <p className="mt-2">
            Para ejercer sus derechos de <strong>acceso, rectificación, actualización o eliminación</strong> de datos, o para
            cualquier consulta de privacidad, contáctenos en:{' '}
            <a
              href="mailto:info@asiapacific-chamber.com"
              className="underline underline-offset-4 hover:text-white"
            >
              info@asiapacific-chamber.com
            </a>
            .
          </p>
          <p className="mt-2 text-neutral-400">
            Nota: Al enviar formularios en el Sitio, usted autoriza el tratamiento de sus datos para los fines declarados y la
            recepción de comunicaciones relacionadas a su membresía y actividades de APCC. Puede solicitar la desuscripción en
            cualquier momento a través del mismo correo indicado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Responsabilidad</h2>
          <p>
            APCC no garantiza resultados específicos derivados de la participación en programas o uso de información. Las
            decisiones comerciales del Usuario son de su exclusiva responsabilidad. En casos de fuerza mayor (p. ej., pandemias,
            desastres, restricciones) APCC podrá reprogramar, modificar o cancelar actividades sin responsabilidad adicional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Modificaciones</h2>
          <p>
            APCC puede actualizar estos T&amp;C en cualquier momento. Las modificaciones serán publicadas en el Sitio y/o
            comunicadas por correo a los socios.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Legislación aplicable y jurisdicción</h2>
          <p>
            Estos T&amp;C se rigen por las leyes de la <strong>República de Chile</strong>. Cualquier controversia se someterá a
            los tribunales ordinarios de la ciudad de <strong>Santiago de Chile</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">11. Contacto</h2>
          <p>
            Para soporte general, consultas comerciales o institucionales, escríbanos a:{' '}
            <a
              href="mailto:info@asiapacific-chamber.com"
              className="underline underline-offset-4 hover:text-white"
            >
              info@asiapacific-chamber.com
            </a>
            .
          </p>
        </section>
      </div>

      {/* CTA: volver al home */}
      <div className="mt-12">
        <Link href="/" className="btn btn-primary">← Volver al inicio</Link>
      </div>
    </section>
  );
}
