// Internal-linking data shared by the homepage, footer, product pages and
// learn articles. Applications and countries come from landing-pages.ts and
// case studies from case-studies.ts, so a new page shows up everywhere.
import type { Locale } from '../consts';
import { LANDING_PAGES, localizedLandingPage, type LandingPageData } from './landing-pages';
import { CASE_STUDIES, type CaseStudy } from './case-studies';
import { LEARN_ARTICLES, type LearnArticleLink } from './learn-articles';

/** Short link labels; the landing pages' own titles are too long for lists. */
const LANDING_LABELS: Record<string, Record<Locale, string>> = {
  'foundry-oes-spectrometer': { en: 'Foundry QC', ru: 'Литейное производство', es: 'Control de fundición', ar: 'مراقبة جودة المسابك' },
  'steel-mill-carbon-sulfur-analyzer': { en: 'Steel mill carbon & sulfur', ru: 'Углерод и сера в стали', es: 'Carbono y azufre en acerías', ar: 'الكربون والكبريت في مصانع الصلب' },
  'scrap-metal-handheld-xrf-analyzer': { en: 'Scrap metal sorting', ru: 'Сортировка лома', es: 'Clasificación de chatarra', ar: 'فرز الخردة المعدنية' },
  'aerospace-metal-analysis': { en: 'Aerospace alloys', ru: 'Аэрокосмические сплавы', es: 'Aleaciones aeroespaciales', ar: 'سبائك الطيران' },
  'mining-ore-xrf-analyzer': { en: 'Mining & ore analysis', ru: 'Горнодобыча и руды', es: 'Minería y minerales', ar: 'التعدين وتحليل الخامات' },
  'india-oes-spectrometer-supplier': { en: 'India', ru: 'Индия', es: 'India', ar: 'الهند' },
  'saudi-arabia-oes-spectrometer-supplier': { en: 'Saudi Arabia', ru: 'Саудовская Аравия', es: 'Arabia Saudita', ar: 'السعودية' },
  'south-africa-xrf-analyzer-supplier': { en: 'South Africa', ru: 'ЮАР', es: 'Sudáfrica', ar: 'جنوب أفريقيا' },
  'brazil-carbon-sulfur-analyzer-supplier': { en: 'Brazil', ru: 'Бразилия', es: 'Brasil', ar: 'البرازيل' },
  'mexico-oes-spectrometer-supplier': { en: 'Mexico', ru: 'Мексика', es: 'México', ar: 'المكسيك' },
};

export interface LandingLink {
  slug: string;
  href: string;
  label: string;
  description: string;
}

function landingLinks(kind: LandingPageData['kind'], locale: Locale): LandingLink[] {
  return LANDING_PAGES.filter((p) => p.kind === kind).map((page) => {
    const localized = localizedLandingPage(page, locale);
    return {
      slug: page.slug,
      // Applications and countries exist in every locale.
      href: `${locale === 'en' ? '' : `/${locale}`}/${kind}/${page.slug}/`,
      label: LANDING_LABELS[page.slug]?.[locale] ?? localized.h1,
      description: localized.description,
    };
  });
}

export const applicationLinks = (locale: Locale) => landingLinks('applications', locale);
export const countryLinks = (locale: Locale) => landingLinks('countries', locale);

/** Applications that recommend this product; T4 Pro is not named on any, so map it explicitly. */
const EXTRA_PRODUCT_APPLICATIONS: Record<string, string[]> = {
  'exquis-t4-pro': ['foundry-oes-spectrometer'],
};

export function applicationsForProduct(productSlug: string, locale: Locale): LandingLink[] {
  const href = `/products/${productSlug}/`;
  const extra = EXTRA_PRODUCT_APPLICATIONS[productSlug] ?? [];
  const slugs = LANDING_PAGES.filter(
    (p) => p.kind === 'applications' && (p.recommended.some((r) => r.href === href) || extra.includes(p.slug)),
  ).map((p) => p.slug);
  return applicationLinks(locale).filter((a) => slugs.includes(a.slug));
}

/** Case studies (English only) whose main or related product is this model. */
export function casesForProduct(productSlug: string): CaseStudy[] {
  const href = `/products/${productSlug}/`;
  return CASE_STUDIES.filter((c) => c.productHref === href || c.related.some((r) => r.href === href));
}

export const caseStudies = (): CaseStudy[] => CASE_STUDIES;

/** Hand-picked related reading per article; filtered to what exists in the locale and topped up to three. */
const RELATED_ARTICLES: Record<string, string[]> = {
  'oes-spectrometer-price': ['oes-buyer-guide-2026', 'cmos-vs-pmt-detectors-oes', 'chinese-oes-spectrometer-manufacturers'],
  'chinese-oes-spectrometer-manufacturers': ['oes-spectrometer-price', 'oes-buyer-guide-2026', 'foundry-oes-quality-control'],
  'what-is-oes': ['oes-vs-xrf-vs-libs', 'oes-buyer-guide-2026', 'how-to-choose-oes-spectrometer', 'oes-sample-preparation'],
  'oes-vs-xrf-vs-libs': ['what-is-oes', 'portable-vs-stationary-oes', 'xrf-spectrometer-mining-geology', 'how-to-choose-oes-spectrometer'],
  'how-to-choose-oes-spectrometer': ['what-is-oes', 'oes-vs-xrf-vs-libs', 'oes-sample-preparation'],
  'carbon-analysis-in-cast-iron': ['carbon-sulfur-analyzer-guide', 'molten-iron-carbon-silicon-analyzer', 'foundry-oes-quality-control', 'oes-sample-preparation'],
  'oes-sample-preparation': ['what-is-oes', 'foundry-oes-quality-control', 'oes-aluminum-alloy-analysis', 'carbon-analysis-in-cast-iron'],
  'oes-buyer-guide-2026': ['oes-spectrometer-price', 'cmos-vs-pmt-detectors-oes', 'portable-vs-stationary-oes'],
  'carbon-sulfur-analyzer-guide': ['carbon-analysis-in-cast-iron', 'molten-iron-carbon-silicon-analyzer', 'foundry-oes-quality-control'],
  'molten-iron-carbon-silicon-analyzer': ['carbon-analysis-in-cast-iron', 'foundry-oes-quality-control', 'carbon-sulfur-analyzer-guide'],
  'cmos-vs-pmt-detectors-oes': ['oes-buyer-guide-2026', 'what-is-oes', 'oes-spectrometer-price'],
  'foundry-oes-quality-control': ['carbon-analysis-in-cast-iron', 'oes-sample-preparation', 'molten-iron-carbon-silicon-analyzer'],
  'oes-aluminum-alloy-analysis': ['oes-sample-preparation', 'foundry-oes-quality-control', 'cmos-vs-pmt-detectors-oes'],
  'portable-vs-stationary-oes': ['oes-vs-xrf-vs-libs', 'oes-buyer-guide-2026', 'xrf-spectrometer-mining-geology'],
  'xrf-spectrometer-mining-geology': ['oes-vs-xrf-vs-libs', 'portable-vs-stationary-oes', 'carbon-sulfur-analyzer-guide'],
  'hardness-testing-rockwell-brinell-vickers': ['oes-vs-xrf-vs-libs', 'foundry-oes-quality-control', 'what-is-oes'],
};

export function relatedArticles(locale: Locale, slug: string, count = 3): LearnArticleLink[] {
  const available = LEARN_ARTICLES[locale].filter((a) => a.slug !== slug);
  const picked = (RELATED_ARTICLES[slug] ?? [])
    .map((s) => available.find((a) => a.slug === s))
    .filter((a): a is LearnArticleLink => Boolean(a));
  for (const a of available) {
    if (picked.length >= count) break;
    if (!picked.includes(a)) picked.push(a);
  }
  return picked.slice(0, count);
}
