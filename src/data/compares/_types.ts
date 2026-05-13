import type { Locale } from '../../consts';

export interface CompareSide {
  /** Display name, e.g. "Innovate T5" or "OES (Spark)". */
  name: string;
  /** When this side maps to a product in the products registry, set its slug — page will link to /products/<slug>/ and use its image. */
  productSlug?: string;
  /** One-line summary shown under the side's name in the hero. */
  blurb: Record<Locale, string>;
}

export interface CompareSpecRow {
  /** Reuses keys from src/data/products/_specLabels.ts; falls back to the raw key when missing. */
  labelKey: string;
  valueA: string;
  valueB: string;
}

export interface CompareFaqEntry {
  q: string;
  a: string;
}

export interface CompareRecord {
  /** URL slug, e.g. "innovate-t5-vs-noble-t7". */
  slug: string;
  sideA: CompareSide;
  sideB: CompareSide;
  /** SEO meta title (without the " | JIEBO Instrument" suffix). */
  title: Record<Locale, string>;
  /** SEO meta description. */
  description: Record<Locale, string>;
  /** Hero lede paragraph. */
  intro: Record<Locale, string>;
  specRows: CompareSpecRow[];
  /** Bullet points under "Choose <sideA.name> when". */
  chooseA: Record<Locale, string[]>;
  chooseB: Record<Locale, string[]>;
  faq: Record<Locale, CompareFaqEntry[]>;
  /** ISO date — used in Article schema. */
  datePublished: string;
}
