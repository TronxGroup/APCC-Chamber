// components/SupportingLogo.tsx
import Image from 'next/image';

type Props = { src: string; alt: string };

export function SupportingLogo({ src, alt }: Props) {
  return (
    <div
      className="
        flex items-center justify-center
        rounded-xl
        bg-white dark:bg-neutral-900
        shadow-sm
        ring-1 ring-neutral-200/70 dark:ring-neutral-800
        px-4 py-3
        h-16 md:h-20
      "
    >
      <Image
        src={src}
        alt={alt}
        width={260}
        height={130}
        className="h-12 md:h-16 w-auto object-contain"
        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 14vw"
        loading="lazy"
      />
    </div>
  );
}
