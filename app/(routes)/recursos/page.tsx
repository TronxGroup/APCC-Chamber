import type { Metadata } from 'next';
import ResourcesClient from './ResourcesClient';

export const metadata: Metadata = {
  title: 'Recursos',
  description:
    'Biblioteca APCC: guías, reportes sectoriales, radar de ferias y plantillas. Algunos recursos son exclusivos para socios.',
};

// Datos de ejemplo (pueden venir de BD/API en el futuro)
const RESOURCES = [
  {
    id: 'guia-importacion-asia',
    title: 'Guía de Importación desde Asia 2026',
    category: 'Guías',
    summary: 'Checklist, Incoterms, calidad, pagos y riesgos. Versión 2026 con anexos prácticos.',
    tags: ['Importación', 'China', 'HK'],
    file: '/resources/guia-importacion-2026.pdf',
    membersOnly: false,
    date: 'Sep 2025',
  },
  {
    id: 'reporte-alimentos-asia',
    title: 'Reporte Sectorial: Alimentos & Bebidas en Asia',
    category: 'Reportes',
    summary: 'Tendencias, requisitos sanitarios y canales B2B en HK y China. Oportunidades 2026.',
    tags: ['Sectorial', 'Alimentos', 'Exportación'],
    file: '/resources/reporte-aab-asia-2026.pdf',
    membersOnly: true,
    date: 'Ago 2025',
  },
  {
    id: 'radar-ferias-q1-2026',
    title: 'Radar de Ferias Asia · Q1 2026',
    category: 'Radar de Ferias',
    summary: 'Calendario de ferias priorizadas, foco en electrónica, alimentos y packaging.',
    tags: ['Ferias', 'Hong Kong', 'China'],
    file: '/resources/radar-ferias-q1-2026.pdf',
    membersOnly: true,
    date: 'Sep 2025',
  },
  {
    id: 'plantilla-cotizacion-cn',
    title: 'Plantilla de Solicitud de Cotización a Proveedor (ES/EN/CN)',
    category: 'Plantillas',
    summary: 'Formato trilingüe con campos clave: MOQ, lead time, HS code, certificaciones.',
    tags: ['Plantilla', 'Compras', 'Negociación'],
    file: '/resources/plantilla-rfq-es-en-cn.zip',
    membersOnly: false,
    date: 'Jul 2025',
  },
  {
    id: 'reporte-electronica-asia',
    title: 'Reporte Sectorial: Electrónica de Consumo 2026',
    category: 'Reportes',
    summary: 'Ficha de categorías ganadoras, márgenes objetivos y riesgos comunes.',
    tags: ['Electrónica', 'Sectorial', 'Retail'],
    file: '/resources/reporte-electronica-2026.pdf',
    membersOnly: true,
    date: 'Sep 2025',
  },
  {
    id: 'radar-proveedores-verificados',
    title: 'Radar de Proveedores Verificados (muestra)',
    category: 'Guías',
    summary: 'Metodología de verificación y mini-listado de ejemplo (muestra pública).',
    tags: ['Proveedores', 'Verificación', 'Sourcing'],
    file: '/resources/radar-proveedores-muestra.pdf',
    membersOnly: false,
    date: 'Ago 2025',
  },
];

export default function Page() {
  return <ResourcesClient resources={RESOURCES} />;
}

