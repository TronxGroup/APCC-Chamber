// app/(routes)/directorio/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Directorio de Socios',
};

// ===== Iconos inline (evitamos dependencia de "lucide-react") =====
type IconProps = React.SVGProps<SVGSVGElement>;
const Icon = ({ children, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

const GlobeIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Icon>
);

const LinkedinIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <path d="M8 11v5" />
    <path d="M8 8h.01" />
    <path d="M12 12.5V16" />
    <path d="M12 12.5c1.1-1.2 3.8-1.2 3.8 1.7V16" />
  </Icon>
);

const InstagramIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17.5" cy="6.5" r="0.8" />
  </Icon>
);

const YoutubeIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="7" width="18" height="10" rx="3" />
    <path d="M10 10l4 2-4 2z" />
  </Icon>
);

const XIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 4l16 16" />
    <path d="M20 4L9.5 14.5" />
    <path d="M4 20l10.5-10.5" />
  </Icon>
);

const MailIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Icon>
);

const PhoneIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.12 1h2a2 2 0 0 1 2 1.72c.13.98.36 1.93.68 2.84a2 2 0 0 1-.45 2.11L7 8a16 16 0 0 0 6 6l.33-.35a2 2 0 0 1 2.1-.46c.92.32 1.86.55 2.83.68A2 2 0 0 1 22 16.92z" />
  </Icon>
);

// ===== Tipado y datos =====
type Member = {
  name: string;
  logo: string; // ruta en /public
  sector: string;
  country: string;
  plan: 'Essential' | 'Business' | 'Corporate';
  website: string;
  blurb: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    youtube?: string;
    x?: string;
  };
  contactName?: string;
  contactRole?: string;
  contactEmail?: string;
  contactPhone?: string;
};

const MEMBERS: Member[] = [
  {
    name: 'Macrobots',
    logo: '/partners/macrobots.png',
    sector: 'Automatización de Procesos & Software',
    country: 'Chile · España',
    plan: 'Corporate',
    website: 'https://www.macrobots.com/',
    blurb:
      'Empresa de Automatización de Procesos, especialista en robots informáticos (RPA) y servicios de ingeniería.',
    contactName: 'Por confirmar',
    contactRole: 'Por confirmar',
    contactEmail: 'contacto@macrobots.com',
    contactPhone: 'Por confirmar',
  },
  {
    name: 'INACAP',
    logo: '/partners/inacap.png',
    sector: 'Educación Superior',
    country: 'Chile',
    plan: 'Corporate',
    website: 'https://portal.inacap.cl/',
    blurb:
      'INACAP es la institución de Educación Superior más grande de Chile, presente en todo el país con 30 sedes. Conformada por su CFT e IP, imparte carreras técnicas y profesionales, cursos y diplomados, con 7 años de acreditación y máximo nivel de excelencia.',
    social: {
      linkedin: 'https://www.linkedin.com/school/inacap/',
      instagram: 'https://www.instagram.com/inacap_oficial/',
      youtube: 'https://www.youtube.com/user/CANALINACAP',
      x: 'https://x.com/INACAPINOS',
    },
    contactName: 'Por confirmar',
    contactRole: 'Por confirmar',
    contactEmail: 'contacto@inacap.cl',
    contactPhone: 'Por confirmar',
  },
  {
    name: 'Balduzzi Wines',
    logo: '/partners/balduzzi.png',
    sector: 'Vinos & Vitivinícola',
    country: 'Chile',
    plan: 'Business',
    website: 'https://balduzziwines.com/',
    blurb:
      'La familia Balduzzi lleva más de 100 años en Chile. Hoy, su 4ª generación lidera el camino para llevar Balduzzi a lo más alto de la industria del vino.',
    social: {
      instagram: 'https://www.instagram.com/balduzziwines',
    },
    contactName: 'Por confirmar',
    contactRole: 'Por confirmar',
    contactEmail: 'info@balduzziwines.com',
    contactPhone: 'Por confirmar',
  },
];

export default function Page() {
  return (
    <section className="container py-16">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-50">Directorio de Socios</h1>
        <p className="mt-3 text-neutral-200">
          Conoce a las empresas que forman parte de la Red Asia Pacífico. Este directorio es exclusivo para
          socios <strong>Business</strong> y <strong>Corporate</strong> (Essential tiene visibilidad básica).
        </p>

        {/* Aviso idiomas / acceso */}
        <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-900 p-4">
          <p className="text-sm text-neutral-200">
            <strong>Nuevo:</strong> El directorio completo estará disponible en <strong>inglés</strong> y{' '}
            <strong>chino</strong> desde <strong>enero 2026</strong>. El acceso completo será exclusivo para
            planes <strong>Business</strong> y <strong>Corporate</strong>.
          </p>
        </div>

        <div className="mt-5">
          <Link href="/membresias" className="btn btn-primary">
            Hazte socio
          </Link>
        </div>
      </header>

      {/* GRID DE SOCIOS */}
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {MEMBERS.map((m) => (
          <article
            key={m.name}
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col"
          >
            <div className="h-16 flex items-center justify-center bg-neutral-950 rounded-xl">
              <Image
                src={m.logo}
                alt={m.name}
                width={240}
                height={56}
                className="max-h-14 w-auto object-contain"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-neutral-50">{m.name}</h3>
            <p className="mt-1 text-sm text-neutral-200">{m.blurb}</p>

            <div className="mt-3 text-xs text-neutral-300">
              {m.sector} · {m.country}
            </div>

            <div className="mt-2 text-xs">
              <span className="inline-flex items-center rounded-full border border-red-900/60 bg-red-900/20 px-2 py-0.5 text-[11px] font-medium text-red-200">
                {m.plan}
              </span>
            </div>

            {/* Acciones / RRSS */}
            <div className="mt-4 flex flex-wrap gap-3 text-sm items-center">
              <Link
                href={m.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} — Sitio web`}
                className="inline-flex items-center gap-1 text-neutral-200 hover:text-white underline"
              >
                <GlobeIcon className="h-4 w-4" />
                Sitio web
              </Link>

              {m.social?.linkedin && (
                <Link
                  href={m.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} — LinkedIn`}
                  className="inline-flex items-center gap-1 text-neutral-200 hover:text-white"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </Link>
              )}

              {m.social?.instagram && (
                <Link
                  href={m.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} — Instagram`}
                  className="inline-flex items-center gap-1 text-neutral-200 hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </Link>
              )}

              {m.social?.youtube && (
                <Link
                  href={m.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} — YouTube`}
                  className="inline-flex items-center gap-1 text-neutral-200 hover:text-white"
                >
                  <YoutubeIcon className="h-4 w-4" />
                  YouTube
                </Link>
              )}

              {m.social?.x && (
                <Link
                  href={m.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} — X`}
                  className="inline-flex items-center gap-1 text-neutral-200 hover:text-white"
                >
                  <XIcon className="h-4 w-4" />
                  X
                </Link>
              )}
            </div>

            {/* Contacto */}
            <div className="mt-4 rounded-lg bg-neutral-950 border border-neutral-800 p-3 text-sm">
              <div className="text-neutral-200">
                <strong>Contacto:</strong>{' '}
                {m.contactName || 'Por confirmar'}
                {m.contactRole ? ` — ${m.contactRole}` : ' — Por confirmar'}
              </div>
              <div className="mt-1 flex flex-wrap gap-4 text-neutral-200">
                <div className="inline-flex items-center gap-1">
                  <MailIcon className="h-4 w-4" />
                  {m.contactEmail ? (
                    <a href={`mailto:${m.contactEmail}`} className="underline hover:text-white">
                      {m.contactEmail}
                    </a>
                  ) : (
                    <span>Por confirmar</span>
                  )}
                </div>
                <div className="inline-flex items-center gap-1">
                  <PhoneIcon className="h-4 w-4" />
                  <span>{m.contactPhone || 'Por confirmar'}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA FINAL */}
      <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold text-neutral-50">¿Quieres aparecer en el Directorio?</h3>
          <p className="mt-2 text-sm text-neutral-200">
            El Directorio de Socios es una vitrina exclusiva en América Latina y Asia. Muestra tu marca y conecta con potenciales aliados.
          </p>
        </div>
        <Link href="/membresias" className="btn btn-primary">
          Hazte socio
        </Link>
      </div>
    </section>
  );
}
