import type { Metadata } from 'next';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { Video } from '@/types/apcc-tv';

export const metadata: Metadata = {
  title: 'APCC TV | Cámara de Comercio Asia Pacífico',
  description:
    'APCC TV: Plataforma audiovisual de la Cámara de Comercio Asia Pacífico. Descubre los mejores episodios del podcast "Creando Líderes para Asia".',
};

// Cargar el componente cliente sin SSR
const ApccTvGrid = dynamic(() => import('@/components/ApccTvGrid'), { ssr: false });

// ✅ Lista ordenada manualmente (de 1 a 8)
const VIDEOS: Video[] = [
  {
    title: 'Conversación con Juan Sutil',
    guest: 'Juan Sutil',
    role: 'Fundador',
    company: 'Empresas Sutil · ex presidente CPC',
    url: 'https://www.youtube.com/embed/S1hPuMt3Ems',
    id: 'S1hPuMt3Ems',
    tema: 'Liderazgo & Empresas',
  },
  {
    title: 'Tecnología educativa para aprender de China',
    guest: 'Karina Piña',
    role: 'Directora',
    company: 'Corporación Cruzando el Pacífico',
    url: 'https://www.youtube.com/embed/WDoQ9IUydq8',
    id: 'WDoQ9IUydq8',
    tema: 'Tecnología & Educación',
  },
  {
    title: 'Cómo posicionar tu marca en China',
    guest: 'Javier Arellano',
    role: 'B2B2C Operation Manager',
    company: 'Huawei',
    url: 'https://www.youtube.com/embed/xyopX35IYek',
    id: 'xyopX35IYek',
    tema: 'Marca & Marketing',
  },
  {
    title: 'Hacer negocios con China',
    guest: 'Lina Song',
    role: 'General Manager',
    company: 'Linacuza Intercultural SpA',
    url: 'https://www.youtube.com/embed/wWC0VLwwd5M',
    id: 'wWC0VLwwd5M',
    tema: 'Negocios con China',
  },
  {
    title: 'Vino chileno en Asia',
    guest: 'Jorge Balduzzi',
    role: 'CEO',
    company: 'Balduzzi Wines',
    url: 'https://www.youtube.com/embed/on7lKjzxlSY',
    id: 'on7lKjzxlSY',
    tema: 'Agro & Vino',
  },
  {
    title: 'Hay un déficit de 45.000 programadores anuales',
    guest: 'Jorge Arriagada',
    role: 'CEO',
    company: 'Macrobots',
    url: 'https://www.youtube.com/embed/hJR-tXv6XhE',
    id: 'hJR-tXv6XhE',
    tema: 'Talento & Programación',
  },
  {
    title: 'Oportunidades en Hong Kong para empresas Latinoamericanas',
    guest: 'Dr. Jimmy Chiang',
    role: 'Associate Director-General',
    company: 'Invest Hong Kong (InvestHK)',
    url: 'https://www.youtube.com/embed/hBAjGfsSnBc',
    id: 'hBAjGfsSnBc',
    tema: 'Hong Kong & Asia',
  },
  {
    title: 'Comercio exterior con TutyComex',
    guest: 'Ailin Quintana',
    role: 'CEO',
    company: 'TutyComex',
    url: 'https://www.youtube.com/embed/V73WO6jYvnE',
    id: 'V73WO6jYvnE',
    tema: 'Comercio Exterior',
  },
];

export default function Page() {
  return (
    <section>
      {/* HERO */}
      <div className="apcc-hero relative h-[400px] w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/hero/apcc-tv-banner.png"
            alt="APCC TV Banner"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">APCC TV</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Creando Líderes para Asia · El podcast oficial de la Cámara de Comercio Asia Pacífico
          </p>
          <p className="mt-2 text-sm text-white/80">+20 episodios conducidos por Guillermo Hollzaman</p>
        </div>
      </div>

      {/* GRID */}
      <ApccTvGrid videos={VIDEOS} />
    </section>
  );
}
