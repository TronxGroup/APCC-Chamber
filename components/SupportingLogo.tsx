import Image from 'next/image';

export function SupportingLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-12 w-full max-w-[140px] flex items-center justify-center mx-auto">
      <Image
        src={src}
        alt={alt}
        height={96} // archivos deben tener mínimo 96px de alto
        width={200} // ancho máximo recomendado
        className="max-h-12 w-auto object-contain"
        sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 12vw"
        loading="lazy"
      />
    </div>
  );
}
