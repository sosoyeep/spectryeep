import type { Locale } from '../../consts';

export interface ProductSpec {
  labelKey: string;
  value: string;
}

export interface FaqEntry {
  q: string;
  a: string;
}

export interface ProductRecord {
  slug: string;
  name: Record<Locale, string>;
  sku: string;
  category: 'oes' | 'elemental' | 'handheld';
  /** Optional product photo URL relative to /public, e.g. "/products/innovate-t5.jpg". When absent, a branded SVG placeholder is rendered. */
  image?: string;
  specs: ProductSpec[];
  overview: Record<Locale, string>;
  applications: Record<Locale, string[]>;
  faq: Record<Locale, FaqEntry[]>;
}
