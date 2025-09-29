import Image from 'next/image';

export function SupportingLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-12 rounded-xl border border-neutral-800 bg-neutral-900 grid place-items-center px-3">
      <Image
        src={src}
        alt={alt}
        width={140}
        height={32}
        className="object-contain opacity-80"
        sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 12vw"
        loading="lazy"
      />
    </div>
  );
}
