import type { Locale } from '../consts';

export type LandingKind = 'applications' | 'countries';

export interface LandingPageData {
  kind: LandingKind;
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  buyerFit: string[];
  recommended: Array<{ name: string; href: string; reason: string }>;
  proof: string[];
  faq: Array<{ q: string; a: string }>;
}

const applicationPages: LandingPageData[] = [
  {
    kind: 'applications',
    slug: 'foundry-oes-spectrometer',
    title: 'Foundry OES Spectrometer for Casting QC | JIEBO',
    description: 'Choose a JIEBO spark OES spectrometer for foundry-side metal composition checks, cast iron QC, alloy verification and furnace release decisions.',
    eyebrow: 'Application · Foundry QC',
    h1: 'Foundry OES spectrometers for casting and furnace-side quality control',
    intro: 'JIEBO helps foundries verify Fe, Al, Cu and Zn alloy chemistry before pouring, after heat treatment and before shipment. Our OES models cover routine production QC through trace-element certification.',
    buyerFit: ['Cast iron, carbon steel, stainless steel and non-ferrous alloy checks', 'Carbon, sulfur, phosphorus, boron and nitrogen measurements that XRF cannot cover well', 'Fast repeatable analysis for furnace release and incoming-material control'],
    recommended: [
      { name: 'Exquis T4', href: '/products/exquis-t4/', reason: 'Compact benchtop OES for single-matrix foundry QC.' },
      { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'Production-floor full-spectrum OES for mixed alloy plants.' },
      { name: 'CS2020', href: '/products/cs2020/', reason: 'High-throughput combustion C/S analyzer for cast iron carbon and sulfur.' },
    ],
    proof: ['Founded in 2009 with exports to 40+ countries.', 'Stock configurations ship in 15 working days.', 'Engineers answer application questions by WhatsApp, usually within 4 working hours.'],
    faq: [
      { q: 'Which OES is best for a foundry?', a: 'Exquis T4 fits routine single-matrix QC; Innovate T5 is better for plants running multiple alloy families or requiring a wider wavelength range.' },
      { q: 'Can OES replace a carbon sulfur analyzer?', a: 'Not fully. OES is fast for production control, while combustion C/S analyzers provide reference-grade carbon and sulfur values for cast iron and steel.' },
    ],
  },
  {
    kind: 'applications',
    slug: 'steel-mill-carbon-sulfur-analyzer',
    title: 'Carbon Sulfur Analyzer for Steel Mills | JIEBO',
    description: 'High-frequency infrared carbon sulfur analyzers for steel mills, foundries and metallurgy labs that need accurate C/S results from ppm to high percent ranges.',
    eyebrow: 'Application · Steel C/S',
    h1: 'Carbon sulfur analyzers for steel mills and metallurgy laboratories',
    intro: 'JIEBO C/S analyzers use high-frequency combustion and infrared detection to measure carbon and sulfur in steel, cast iron, ores, ferroalloys and non-ferrous metals.',
    buyerFit: ['Steel mill ladle, billet and finished-product quality checks', 'Low-carbon steel and high-carbon cast iron workflows on one instrument family', 'Laboratories that need stable repeatability and easy maintenance'],
    recommended: [
      { name: 'CS995', href: '/products/cs995/', reason: 'Bench-type entry model for production-floor carbon and sulfur testing.' },
      { name: 'CS996', href: '/products/cs996/', reason: 'Floor-standing model with expandable detection cells and wider ranges.' },
      { name: 'CS2020', href: '/products/cs2020/', reason: 'Four-cell high-end model for high throughput and low detection limits.' },
    ],
    proof: ['Four physical IR cells available on CS2020.', 'Automatic cleaning supports 200+ maintenance-free cycles.', 'Door-to-door export support and CE/CB documentation.'],
    faq: [
      { q: 'What sample types can JIEBO C/S analyzers test?', a: 'They are used for steel, cast iron, ferroalloys, ores, copper alloys and other inorganic materials with suitable sample preparation.' },
      { q: 'How fast is each analysis?', a: 'Typical carbon and sulfur analysis takes about 20 to 60 seconds depending on sample and method settings.' },
    ],
  },
  {
    kind: 'applications',
    slug: 'scrap-metal-handheld-xrf-analyzer',
    title: 'Handheld XRF Analyzer for Scrap Metal Sorting | JIEBO',
    description: 'Use JIEBO F6000 Pro handheld XRF for fast non-destructive scrap metal sorting, alloy ID, PMI and incoming-material verification.',
    eyebrow: 'Application · Scrap Sorting',
    h1: 'Handheld XRF analyzers for scrap metal sorting and alloy identification',
    intro: 'The F6000 Pro handheld XRF helps recycling yards, PMI teams and metal traders identify alloy grade quickly without cutting or destroying the part.',
    buyerFit: ['Scrap yards sorting stainless, nickel, copper and titanium alloys', 'PMI teams checking pipework, vessels and incoming material', 'Precious-metal and non-ferrous metal screening where non-destructive testing matters'],
    recommended: [
      { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Handheld XRF covering Ti to U with WiFi, Bluetooth and USB 3.0.' },
      { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'Handheld LIBS for light elements that XRF cannot measure well.' },
      { name: 'Surpass F1', href: '/products/surpass-f1/', reason: 'Mobile spark OES when carbon, phosphorus, sulfur or nitrogen accuracy matters.' },
    ],
    proof: ['8-hour lithium battery for field work.', 'Handheld form factor for fast sorting decisions.', 'Support for XRF, LIBS and mobile OES workflows.'],
    faq: [
      { q: 'Is XRF non-destructive?', a: 'Yes. Handheld XRF identifies alloy chemistry without cutting the sample, making it useful for scrap and PMI workflows.' },
      { q: 'When should I choose LIBS instead of XRF?', a: 'Choose LIBS when light elements such as Be, Mg, Al or Si are important, or when avoiding ionizing radiation is a priority.' },
    ],
  },
  {
    kind: 'applications',
    slug: 'aerospace-metal-analysis',
    title: 'Aerospace Alloy Analysis Spectrometers | JIEBO',
    description: 'JIEBO OES, PMT OES and ONH analyzers support aerospace alloy certification, trace-element analysis and titanium oxygen nitrogen hydrogen testing.',
    eyebrow: 'Application · Aerospace QA',
    h1: 'Aerospace metal analysis for trace elements and alloy certification',
    intro: 'Aerospace suppliers need reliable chemistry data for incoming material, process control and final verification. JIEBO supplies high-stability OES and ONH instruments for demanding alloy workflows.',
    buyerFit: ['Titanium, nickel, cobalt, aluminum and high-strength steel analysis', 'Trace-element and light-element workflows where handheld tools are not enough', 'Laboratories needing repeatability for certificates and supplier audits'],
    recommended: [
      { name: 'Noble T7', href: '/products/noble-t7/', reason: 'Research-grade CMOS OES with constant-temperature optics.' },
      { name: 'JB-750', href: '/products/jb-750/', reason: 'PMT flagship OES with 750 mm focal length for high spectral resolution.' },
      { name: 'ONH-508', href: '/products/onh-508/', reason: 'Oxygen, nitrogen and hydrogen analysis for titanium and specialty alloys.' },
    ],
    proof: ['Noble T7 targets accuracy below 10 ppm.', 'JB-750 supports certification-grade trace-element analysis.', 'ONH-508 uses inert-gas fusion up to 3000 C.'],
    faq: [
      { q: 'Which instrument measures oxygen and nitrogen in titanium?', a: 'ONH-508 is designed for oxygen, nitrogen and hydrogen analysis in titanium, zirconium, steel, copper and rare-earth alloys.' },
      { q: 'Which OES model fits aerospace labs?', a: 'Noble T7 and JB-750 are the preferred options for trace-element work and high-stability laboratory workflows.' },
    ],
  },
  {
    kind: 'applications',
    slug: 'mining-ore-xrf-analyzer',
    title: 'Handheld XRF Analyzer for Mining and Ore Analysis | JIEBO',
    description: 'JIEBO handheld XRF analyzers support mining exploration, ore screening, geology field checks and fast elemental analysis from Ti to U.',
    eyebrow: 'Application · Mining XRF',
    h1: 'Handheld XRF analyzers for mining, geology and ore screening',
    intro: 'Mining teams use handheld XRF to screen ore, identify mineralization trends and prioritize samples before laboratory confirmation.',
    buyerFit: ['Field geology teams needing rapid elemental screening', 'Ore sorting and grade-control workflows', 'Mining labs that want fast pre-screening before wet chemistry or ICP confirmation'],
    recommended: [
      { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Handheld XRF for field elemental analysis from Ti to U.' },
      { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'Handheld LIBS where light-element detection is needed.' },
      { name: 'XRF vs LIBS guide', href: '/learn/oes-vs-xrf-vs-libs/', reason: 'Technique comparison for buyers choosing between XRF, LIBS and OES.' },
    ],
    proof: ['Portable battery-powered analysis.', 'Wireless data transfer options.', 'Export experience across Africa, Latin America, GCC and Asia.'],
    faq: [
      { q: 'Can handheld XRF replace laboratory assays?', a: 'No. It is best for fast field screening and sample prioritization; laboratory confirmation is still needed for final assay values.' },
      { q: 'Which elements can handheld XRF measure?', a: 'F6000 Pro is designed for elements from Ti to U, depending on sample, calibration and matrix.' },
    ],
  },
];

const countryPages: LandingPageData[] = [
  {
    kind: 'countries',
    slug: 'india-oes-spectrometer-supplier',
    title: 'OES Spectrometer Supplier for India | JIEBO',
    description: 'JIEBO supplies OES spectrometers, C/S analyzers and handheld XRF/LIBS analyzers to Indian foundries, steel mills and metallurgy laboratories.',
    eyebrow: 'Country · India',
    h1: 'OES spectrometer supplier for India foundries and metallurgy labs',
    intro: 'Indian buyers choose JIEBO for OES, C/S and handheld analyzers when they need factory-direct configuration support, export documentation and fast WhatsApp engineering response.',
    buyerFit: ['Foundries and casting shops in need of furnace-side OES QC', 'Steel and ferroalloy plants comparing C/S analyzer options', 'Importers needing English documentation and clear shipping timelines'],
    recommended: [
      { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'Production-floor OES for multiple alloy matrices.' },
      { name: 'CS2020', href: '/products/cs2020/', reason: 'High-end C/S analyzer for laboratory throughput.' },
      { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Handheld XRF for incoming-material and scrap checks.' },
    ],
    proof: ['15 working days for stock configurations.', 'Export documents and door-to-door logistics support.', 'WhatsApp support in English with engineering follow-up.'],
    faq: [
      { q: 'Can JIEBO ship analytical instruments to India?', a: 'Yes. JIEBO supports international logistics, export documents and configuration guidance for Indian customers.' },
      { q: 'How should an Indian foundry choose between Exquis T4 and Innovate T5?', a: 'Exquis T4 suits focused single-matrix QC; Innovate T5 is better for plants handling more alloy families and trace-element work.' },
    ],
  },
  {
    kind: 'countries',
    slug: 'saudi-arabia-oes-spectrometer-supplier',
    title: 'OES Spectrometer Supplier for Saudi Arabia | JIEBO',
    description: 'JIEBO supplies spark OES, C/S analyzers, ONH analyzers and handheld XRF/LIBS tools for Saudi metallurgy, oilfield PMI and fabrication buyers.',
    eyebrow: 'Country · Saudi Arabia',
    h1: 'OES spectrometer supplier for Saudi Arabia metal analysis buyers',
    intro: 'JIEBO supports Saudi customers in foundry QC, steel fabrication, oilfield PMI, aerospace supply and research laboratories with export-ready analytical instruments.',
    buyerFit: ['Fabricators and inspection teams needing PMI and alloy verification', 'Foundries needing carbon, sulfur and light-element coverage', 'Laboratories comparing OES, XRF, LIBS and C/S analyzer options'],
    recommended: [
      { name: 'Surpass F1', href: '/products/surpass-f1/', reason: 'Mobile OES for field PMI and oversized metal parts.' },
      { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Handheld XRF for fast non-destructive alloy ID.' },
      { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'Factory-floor spark OES for multi-matrix QC.' },
    ],
    proof: ['Experience shipping to GCC markets.', 'CE/CB documentation support.', 'Engineer-level WhatsApp response for model selection.'],
    faq: [
      { q: 'Does JIEBO support GCC delivery?', a: 'Yes. JIEBO coordinates export documentation and international logistics for GCC customers.' },
      { q: 'Which analyzer fits oilfield PMI?', a: 'F6000 Pro handheld XRF is useful for fast non-destructive PMI; Surpass F1 mobile OES is preferred when light-element accuracy matters.' },
    ],
  },
  {
    kind: 'countries',
    slug: 'south-africa-xrf-analyzer-supplier',
    title: 'XRF Analyzer Supplier for South Africa | JIEBO',
    description: 'JIEBO supplies handheld XRF analyzers, LIBS analyzers and OES spectrometers for South African mining, scrap metal and metallurgy customers.',
    eyebrow: 'Country · South Africa',
    h1: 'XRF analyzer supplier for South Africa mining and scrap metal buyers',
    intro: 'South African customers use JIEBO handheld analyzers for mining screening, scrap sorting and metal PMI, with OES and C/S analyzers available for laboratory confirmation.',
    buyerFit: ['Mining teams needing field ore screening', 'Scrap yards sorting stainless, copper, nickel and titanium alloys', 'Metallurgy laboratories adding OES or C/S confirmation'],
    recommended: [
      { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Handheld XRF for non-destructive alloy and ore screening.' },
      { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'Handheld LIBS for selected light-element workflows.' },
      { name: 'Noble T7', href: '/products/noble-t7/', reason: 'Laboratory OES for trace-element confirmation.' },
    ],
    proof: ['Exports to African markets including South Africa and Nigeria.', 'Battery-powered handheld options.', 'WhatsApp pre-sales support for calibration and application matching.'],
    faq: [
      { q: 'Can handheld XRF be used for mining?', a: 'Yes. It is widely used for rapid field screening and sample prioritization before laboratory assay confirmation.' },
      { q: 'Can JIEBO supply both handheld and lab instruments?', a: 'Yes. JIEBO supplies handheld XRF/LIBS, mobile OES, benchtop OES and elemental analyzers.' },
    ],
  },
  {
    kind: 'countries',
    slug: 'brazil-carbon-sulfur-analyzer-supplier',
    title: 'Carbon Sulfur Analyzer Supplier for Brazil | JIEBO',
    description: 'JIEBO supplies carbon sulfur analyzers, OES spectrometers and handheld metal analyzers to Brazilian foundries, steel plants and metallurgy labs.',
    eyebrow: 'Country · Brazil',
    h1: 'Carbon sulfur analyzer supplier for Brazil foundries and steel plants',
    intro: 'Brazilian metallurgy buyers can source C/S analyzers and OES spectrometers from JIEBO for cast iron, steel, ferroalloy and non-ferrous quality control.',
    buyerFit: ['Foundries checking carbon and sulfur in cast iron', 'Steel and ferroalloy laboratories comparing combustion C/S analyzers', 'Importers needing direct factory support and documentation'],
    recommended: [
      { name: 'CS995', href: '/products/cs995/', reason: 'Entry C/S analyzer for routine production QC.' },
      { name: 'CS996', href: '/products/cs996/', reason: 'Expandable floor-standing C/S analyzer for mixed ranges.' },
      { name: 'CS2020', href: '/products/cs2020/', reason: 'High-throughput four-cell C/S analyzer.' },
    ],
    proof: ['Exports to Brazil, Mexico and Argentina.', 'Stock models can ship within 15 working days.', 'Application support for steel, cast iron and ferroalloy testing.'],
    faq: [
      { q: 'Which C/S analyzer fits a Brazilian foundry?', a: 'CS995 is suitable for routine QC, CS996 adds wider ranges and expandable cells, and CS2020 fits high-throughput labs.' },
      { q: 'Does JIEBO provide export documentation?', a: 'Yes. JIEBO supports export documents, CE/CB certificates where applicable and international logistics coordination.' },
    ],
  },
  {
    kind: 'countries',
    slug: 'mexico-oes-spectrometer-supplier',
    title: 'OES Spectrometer Supplier for Mexico | JIEBO',
    description: 'JIEBO supplies optical emission spectrometers and metal analyzers to Mexico foundries, automotive suppliers, fabrication shops and metallurgy labs.',
    eyebrow: 'Country · Mexico',
    h1: 'OES spectrometer supplier for Mexico automotive and foundry buyers',
    intro: 'Mexico buyers use JIEBO OES and handheld analyzers for automotive supply, foundry QC, incoming-material control and metal fabrication verification.',
    buyerFit: ['Automotive suppliers checking aluminum, steel and copper alloys', 'Foundries needing spark OES and C/S analyzer workflows', 'Procurement teams comparing factory-direct imported instruments'],
    recommended: [
      { name: 'Exquis T4', href: '/products/exquis-t4/', reason: 'Compact benchtop OES for foundry-side QC.' },
      { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'Multi-matrix production OES for automotive suppliers.' },
      { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Handheld XRF for incoming alloy checks.' },
    ],
    proof: ['Exports to Mexico and wider Latin America.', 'English and Spanish web content available.', 'Fast WhatsApp quote workflow with model recommendation.'],
    faq: [
      { q: 'Does JIEBO support Mexico customers?', a: 'Yes. JIEBO exports to Mexico and can support buyers with model selection, documentation and shipping coordination.' },
      { q: 'Which OES is best for automotive suppliers?', a: 'Innovate T5 is often the better fit for mixed alloy families; Exquis T4 fits simpler foundry-side QC workflows.' },
    ],
  },
];

export const LANDING_PAGES = [...applicationPages, ...countryPages];

export function getLandingPage(kind: LandingKind, slug: string) {
  return LANDING_PAGES.find((p) => p.kind === kind && p.slug === slug);
}

export function localizedLandingPage(page: LandingPageData, locale: Locale): LandingPageData {
  if (locale === 'en') return page;
  const prefix: Record<Locale, string> = {
    en: '',
    ru: 'Global supplier page',
    es: 'Página internacional',
    ar: 'صفحة دولية',
  };
  return {
    ...page,
    eyebrow: prefix[locale] || page.eyebrow,
    title: page.title,
    description: page.description,
  };
}
