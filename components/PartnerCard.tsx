// components/PartnerCard.tsx
import Link from 'next/link';
import Image from 'next/image';

type Partner = {
  name: string;
  logo: string;
  website: string;
  linkedin?: string;
  instagram?: string;
  x?: string;
  facebook?: string;
  youtube?: string;
  blurb: string;
};

export function PartnerCard({ p }: { p: Partner }) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col">
      {/* Logo */}
      <div className="h-14 flex items-center justify-center">
        <Image
          src={p.logo}
          alt={`${p.name} logo`}
          width={120}
          height={48}
          className="max-h-12 w-auto object-contain"
        />
      </div>

      {/* Nombre */}
      <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>

      {/* Blurb */}
      <p className="mt-2 text-sm text-neutral-400 flex-1">{p.blurb}</p>

      {/* Links */}
      <div className="mt-4 flex items-center flex-wrap gap-3 text-sm">
        <Link
          href={p.website}
          target="_blank"
          className="text-neutral-300 hover:text-white underline underline-offset-4"
        >
          Sitio web
        </Link>

        {p.linkedin && (
          <Link
            href={p.linkedin}
            target="_blank"
            className="text-neutral-300 hover:text-white"
          >
            LinkedIn
          </Link>
        )}
        {p.instagram && (
          <Link
            href={p.instagram}
            target="_blank"
            className="text-neutral-300 hover:text-white"
          >
            Instagram
          </Link>
        )}
        {p.facebook && (
          <Link
            href={p.facebook}
            target="_blank"
            className="text-neutral-300 hover:text-white"
          >
            Facebook
          </Link>
        )}
        {p.x && (
          <Link
            href={p.x}
            target="_blank"
            className="text-neutral-300 hover:text-white"
          >
            X
          </Link>
        )}
        {p.youtube && (
          <Link
            href={p.youtube}
            target="_blank"
            className="text-neutral-300 hover:text-white"
          >
            YouTube
          </Link>
        )}
      </div>
    </article>
  );
}
