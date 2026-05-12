// Adapter: expose the existing src/data/innovate-t5.ts in the unified ProductRecord shape.
import type { ProductRecord } from './_types';
import { t5Specs, t5Overview, t5Applications, t5Faq } from '../innovate-t5';

// Map legacy spec.key → unified labelKey
const keyMap: Record<string, string> = {
  optical_system: 'optical_system',
  focal_length: 'focal_length',
  wavelength: 'wavelength',
  detector: 'detector',
  light_source: 'light_source',
  matrices: 'matrices',
  power: 'power',
  env: 'env',
  dimensions: 'dimensions',
  weight: 'weight',
};

export const product: ProductRecord = {
  slug: 'innovate-t5',
  name: 'Innovate T5 Optical Emission Spectrometer',
  sku: 'JIEBO-T5',
  category: 'oes',
  image: '/products/innovate-t5.jpg',
  specs: t5Specs.map((s) => ({ labelKey: keyMap[s.key] ?? s.key, value: s.value })),
  overview: t5Overview,
  applications: t5Applications,
  faq: t5Faq,
};
