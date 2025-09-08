import type { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | APCC',
  defaultTitle: 'Cámara de Comercio Asia Pacífico – APCC',
  description: 'Puente confiable entre Chile y Asia Pacífico.',
  canonical: 'https://asiapacific-chamber.com',
  openGraph: { type: 'website', locale: 'es_CL', url: 'https://asiapacific-chamber.com', site_name: 'APCC' },
  twitter: { cardType: 'summary_large_image' },
  additionalMetaTags: [{ name: 'theme-color', content: '#0a0a0a' }],
};
