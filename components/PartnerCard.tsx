import Image from 'next/image';
import Link from 'next/link';

type Partner = {
  name: string;
  logo: string;
  website: string;
  linkedin?: string;
  instagram?: string;
  x?: string;
  blurb: string;
};

export function PartnerCard({ p }: { p: Partner }) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col">
      <div className="h-14 flex items-center">
        <Image
          src={p.logo}
          alt={`Logo ${p.name}`}
          width={160}
          height={48}
          className="object-contain max-h-12 w-auto"
          loading="lazy"
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
      <p className="mt-2 text-sm text-neutral-300 flex-1">{p.blurb}</p>
      <div className="mt-4 flex items-center gap-3 text-sm">
        <Link href={p.website} target="_blank" rel="noopener noreferrer"
          className="text-neutral-200 hover:text-white underline underline-offset-4">Sitio web</Link>
        {p.linkedin && <Link href={p.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white">LinkedIn</Link>}
        {p.instagram && <Link href={p.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white">Instagram</Link>}
        {p.x && <Link href={p.x} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white">X</Link>}
      </div>
    </article>
  );
}
