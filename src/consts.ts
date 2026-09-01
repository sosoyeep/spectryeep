export const SITE = {
  domain: 'spectryeep.com',
  alternateDomain: 'jiebo-instrument.com',
  brand: 'JIEBO Instrument',
  legalName: 'Wuxi Jiebo Instrument Technology Co., Ltd.',
  founded: 2009,
  city: 'Wuxi',
  country: 'China',
  countryCode: 'CN',
  addressRegion: 'Jiangsu',
  headOffice: 'No.26-9, Huibei Road, Liangxi District, Wuxi, Jiangsu, China',
  factory: 'No.40, Baishijian Road, Langxi Development Area, Xuancheng, Anhui, China',
  whatsapp: '8618118915721',
  wechat: '+86 181 1891 5721',
  phone: '+86-510-83211967',
  phoneAlt: '+86-510-83211953',
  email: 'info@spectryeep.com',
  skype: 'jiebotech',
  social: {
    facebook: 'https://www.facebook.com/jiebogroup',
    linkedin: 'https://www.linkedin.com/company/jiebo-instrument/',
  },
} as const;

export const LOCALES = ['en', 'ru', 'es', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_META: Record<
  Locale,
  { name: string; nativeName: string; htmlLang: string; dir: 'ltr' | 'rtl' }
> = {
  en: { name: 'English', nativeName: 'English', htmlLang: 'en', dir: 'ltr' },
  ru: { name: 'Russian', nativeName: 'Русский', htmlLang: 'ru', dir: 'ltr' },
  es: { name: 'Spanish', nativeName: 'Español', htmlLang: 'es', dir: 'ltr' },
  ar: { name: 'Arabic', nativeName: 'العربية', htmlLang: 'ar-SA', dir: 'rtl' },
};

export const PRODUCT_CATEGORIES = ['oes', 'elemental', 'handheld'] as const;
export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export const PRODUCTS = [
  { slug: 'exquis-t4', name: 'Exquis T4 Optical Emission Spectrometer', sku: 'JIEBO-T4', category: 'oes', short: 'Sealed-cycle CMOS benchtop OES, 50+ elements, 33 kg' },
  { slug: 'innovate-t5', name: 'Innovate T5 Optical Emission Spectrometer', sku: 'JIEBO-T5', category: 'oes', short: 'Vacuum-chamber full-spectrum CMOS OES with Hamamatsu detectors, 78 kg' },
  { slug: 'noble-t7', name: 'Noble T7 Optical Emission Spectrometer', sku: 'JIEBO-T7', category: 'oes', short: 'Research-grade CMOS OES with constant-temp chamber, accuracy <10 ppm' },
  { slug: 'surpass-f1', name: 'Surpass F1 Mobile Optical Emission Spectrometer', sku: 'JIEBO-F1', category: 'oes', short: 'Cart-mounted mobile OES with built-in battery and argon cylinder' },
  { slug: 'cs2020', name: 'CS2020 High-frequency Infrared Carbon & Sulfur Analyzer', sku: 'JIEBO-CS2020', category: 'elemental', short: 'Four-cell C/S analyzer with auto cleaning, 200+ maintenance-free cycles' },
  { slug: 'cs995', name: 'CS995 Carbon & Sulfur Analyzer', sku: 'JIEBO-CS995', category: 'elemental', short: 'Bench-type high-frequency infrared C/S analyzer, 115 kg' },
  { slug: 'cs996', name: 'CS996 Carbon & Sulfur Analyzer', sku: 'JIEBO-CS996', category: 'elemental', short: 'Floor-type high-frequency infrared C/S analyzer with expandable cells' },
  { slug: 'onh-508', name: 'ONH-508 Oxygen, Nitrogen & Hydrogen Analyzer', sku: 'JIEBO-ONH508', category: 'elemental', short: 'Inert-gas-fusion O/N/H analyzer for steel, rare earth, copper, titanium' },
  { slug: 'f6000-pro', name: 'F6000 Pro Handheld XRF Analyzer', sku: 'JIEBO-F6000', category: 'handheld', short: 'Si-PIN handheld XRF, Ti to U, 8-hour battery, WiFi/BT' },
  { slug: 'f7000-pro', name: 'F7000 Pro Handheld LIBS Analyzer', sku: 'JIEBO-F7000', category: 'handheld', short: 'Class 3B laser LIBS, sub-second analysis, 1.25 kg handheld' },
] as const;

export type ProductSlug = (typeof PRODUCTS)[number]['slug'];

export const INDUSTRIES = [
  'Foundry & Casting',
  'Metallurgy & Steel Mills',
  'Aerospace',
  'Automotive',
  'Machinery Manufacturing',
  'Scrap Metal Recycling',
  'Scientific Research',
  'Nuclear Power',
  'Mining & Ore Analysis',
  'New Energy Materials',
] as const;
