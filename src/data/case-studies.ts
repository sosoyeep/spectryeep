export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  market: string;
  product: string;
  productHref: string;
  application: string;
  challenge: string[];
  solution: string[];
  result: string[];
  note: string;
  related: Array<{ label: string; href: string }>;
  faq: Array<{ q: string; a: string }>;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'india-cast-iron-foundry-innovate-t5',
    title: 'Anonymized Case: Innovate T5 OES for an India Cast Iron Foundry',
    description: 'An anonymized application case showing how an India cast iron foundry can use Innovate T5 OES and C/S analysis for furnace-side quality control.',
    eyebrow: 'Anonymized case · Foundry QC',
    h1: 'Innovate T5 OES for a cast iron foundry in India',
    market: 'India · cast iron foundry',
    product: 'Innovate T5 Optical Emission Spectrometer',
    productHref: '/products/innovate-t5/',
    application: 'Furnace-side chemistry checks for cast iron and alloyed steel production.',
    challenge: ['The buyer needed faster chemistry feedback before pouring.', 'Light elements such as carbon, sulfur and phosphorus were important for release decisions.', 'The team wanted one instrument family that could scale from routine QC to wider alloy coverage.'],
    solution: ['JIEBO recommended Innovate T5 for multi-matrix production OES work.', 'For reference carbon and sulfur values, the workflow can be paired with CS2020 or CS996.', 'The recommended RFQ data includes base matrix, target elements, expected sample volume and available argon supply.'],
    result: ['The proposed setup keeps routine chemistry checks closer to the furnace.', 'The buyer can compare OES speed with combustion C/S reference testing.', 'Engineering support can review calibration and sample-preparation questions before shipment.'],
    note: 'This is an anonymized application case. Customer name, plant name and private purchasing details are not published.',
    related: [
      { label: 'Innovate T5', href: '/products/innovate-t5/' },
      { label: 'Foundry OES application', href: '/applications/foundry-oes-spectrometer/' },
      { label: 'Carbon in cast iron guide', href: '/learn/carbon-analysis-in-cast-iron/' },
    ],
    faq: [
      { q: 'Why choose Innovate T5 instead of Exquis T4?', a: 'Innovate T5 is better when the plant handles multiple alloy families and needs a vacuum full-spectrum OES with wider matrix coverage.' },
      { q: 'Does a foundry still need a C/S analyzer?', a: 'Many foundries use both. OES is fast for production control, while combustion C/S analysis is preferred for reference carbon and sulfur values.' },
    ],
  },
  {
    slug: 'gulf-fabrication-handheld-xrf-f6000-pro',
    title: 'Anonymized Case: F6000 Pro Handheld XRF for Gulf Fabrication PMI',
    description: 'An anonymized case for fabrication and inspection teams using handheld XRF to verify alloys during incoming inspection and PMI work.',
    eyebrow: 'Anonymized case · PMI',
    h1: 'F6000 Pro handheld XRF for fabrication PMI in the Gulf region',
    market: 'GCC · fabrication and inspection',
    product: 'F6000 Pro Handheld XRF Analyzer',
    productHref: '/products/f6000-pro/',
    application: 'Non-destructive alloy identification for incoming materials, pipework and fabricated metal parts.',
    challenge: ['The buyer needed quick alloy ID without cutting parts.', 'Inspection teams worked across different metal grades and job sites.', 'Procurement needed a portable tool with clear documentation and support.'],
    solution: ['JIEBO recommended F6000 Pro for handheld XRF alloy ID from Ti to U.', 'For light-element accuracy, Surpass F1 mobile OES or F7000 Pro LIBS can be reviewed as alternatives.', 'The RFQ checklist asks for alloy families, inspection environment and data-reporting needs.'],
    result: ['The proposed workflow supports faster incoming inspection and PMI screening.', 'Non-destructive testing helps protect finished or high-value parts.', 'JIEBO can help compare XRF, LIBS and mobile OES before purchase.'],
    note: 'This case is anonymized to protect buyer identity and project details.',
    related: [
      { label: 'F6000 Pro', href: '/products/f6000-pro/' },
      { label: 'XRF vs LIBS comparison', href: '/compare/f6000-pro-vs-f7000-pro/' },
      { label: 'Saudi Arabia supplier page', href: '/countries/saudi-arabia-oes-spectrometer-supplier/' },
    ],
    faq: [
      { q: 'Is handheld XRF suitable for PMI?', a: 'Yes. It is commonly used for non-destructive alloy verification. For carbon or nitrogen accuracy, mobile OES may be needed.' },
      { q: 'Can JIEBO support GCC buyers?', a: 'Yes. JIEBO supports export documentation and international logistics for GCC buyers.' },
    ],
  },
  {
    slug: 'brazil-foundry-cs2020-carbon-sulfur',
    title: 'Anonymized Case: CS2020 Carbon Sulfur Analyzer for a Brazil Foundry',
    description: 'An anonymized foundry case for carbon and sulfur analysis in Brazil using a high-frequency infrared C/S analyzer workflow.',
    eyebrow: 'Anonymized case · C/S analysis',
    h1: 'CS2020 carbon sulfur analyzer for a Brazil foundry lab',
    market: 'Brazil · foundry laboratory',
    product: 'CS2020 High-frequency Infrared Carbon & Sulfur Analyzer',
    productHref: '/products/cs2020/',
    application: 'Carbon and sulfur testing for cast iron, steel and ferroalloy samples.',
    challenge: ['The buyer needed stable carbon and sulfur results for cast iron QC.', 'Different sample ranges made single-range detection less convenient.', 'Maintenance time and dust handling were important for routine laboratory work.'],
    solution: ['JIEBO recommended CS2020 for four physical detection cells and high-throughput C/S analysis.', 'Automatic cleaning and vacuum dust removal were matched to frequent testing workflows.', 'The buyer can compare CS995, CS996 and CS2020 according to range and sample volume.'],
    result: ['The proposed configuration supports low and high C/S ranges in one workflow.', 'Maintenance planning becomes easier for repetitive lab testing.', 'The page and RFQ form guide buyers to share range, sample type and throughput requirements.'],
    note: 'This is an anonymized technical case. It does not disclose private buyer or factory information.',
    related: [
      { label: 'CS2020', href: '/products/cs2020/' },
      { label: 'Brazil C/S supplier page', href: '/countries/brazil-carbon-sulfur-analyzer-supplier/' },
      { label: 'CS995 vs CS996', href: '/compare/cs995-vs-cs996/' },
    ],
    faq: [
      { q: 'Why choose CS2020?', a: 'CS2020 is the high-end choice when the lab needs four physical detection cells, low detection limits and automatic cleaning.' },
      { q: 'What RFQ details should a foundry send?', a: 'Send sample type, expected carbon and sulfur ranges, daily sample volume and whether standards or reference materials are already used.' },
    ],
  },
  {
    slug: 'south-africa-mining-f6000-pro-xrf',
    title: 'Anonymized Case: F6000 Pro XRF for South Africa Mining Screening',
    description: 'An anonymized mining case showing how handheld XRF can support field ore screening and sample prioritization before laboratory confirmation.',
    eyebrow: 'Anonymized case · Mining XRF',
    h1: 'F6000 Pro handheld XRF for South Africa mining screening',
    market: 'South Africa · mining and geology',
    product: 'F6000 Pro Handheld XRF Analyzer',
    productHref: '/products/f6000-pro/',
    application: 'Field ore screening, geology checks and sample prioritization.',
    challenge: ['The buyer needed faster field screening before sending samples to the lab.', 'Teams needed portable analysis outside a controlled laboratory.', 'Final assay still required confirmation, so the tool had to support screening rather than replace the lab.'],
    solution: ['JIEBO recommended F6000 Pro for rapid field elemental screening.', 'The workflow positions handheld XRF as a pre-screening and prioritization tool.', 'For light elements or special matrices, JIEBO can compare LIBS and laboratory methods.'],
    result: ['Field teams can make faster sample-prioritization decisions.', 'Laboratory resources can focus on the most relevant samples.', 'The buyer receives a clearer method boundary: screening first, laboratory confirmation second.'],
    note: 'This case is anonymized and written as a conservative application reference, not a public endorsement by the buyer.',
    related: [
      { label: 'F6000 Pro', href: '/products/f6000-pro/' },
      { label: 'Mining XRF application', href: '/applications/mining-ore-xrf-analyzer/' },
      { label: 'South Africa XRF supplier page', href: '/countries/south-africa-xrf-analyzer-supplier/' },
    ],
    faq: [
      { q: 'Can handheld XRF replace laboratory assays?', a: 'No. It is best used for field screening and sample prioritization before laboratory confirmation.' },
      { q: 'What should mining buyers include in an RFQ?', a: 'Share ore type, target elements, field conditions, sample preparation method and data-export requirements.' },
    ],
  },
  {
    slug: 'mexico-automotive-supplier-innovate-t5',
    title: 'Anonymized Case: Innovate T5 OES for a Mexico Automotive Supplier',
    description: 'An anonymized automotive supplier case for OES alloy verification in Mexico, focused on incoming-material checks and production QC.',
    eyebrow: 'Anonymized case · Automotive QC',
    h1: 'Innovate T5 OES for a Mexico automotive supplier',
    market: 'Mexico · automotive supply chain',
    product: 'Innovate T5 Optical Emission Spectrometer',
    productHref: '/products/innovate-t5/',
    application: 'Incoming-material verification and production QC for aluminum, steel and copper alloy components.',
    challenge: ['The buyer needed reliable alloy chemistry checks for supplier and production control.', 'Multiple alloy families required broader matrix support.', 'The team wanted a direct manufacturer recommendation before issuing a purchase order.'],
    solution: ['JIEBO recommended Innovate T5 for 10 base matrices and production-floor OES use.', 'F6000 Pro can support fast incoming screening where non-destructive checks are enough.', 'The RFQ process gathers alloy families, target elements and required detection limits.'],
    result: ['The proposed workflow separates fast screening from laboratory-grade OES confirmation.', 'The buyer can choose between benchtop OES and handheld XRF based on accuracy and sample-preparation needs.', 'JIEBO can provide model recommendation, price and lead time from one RFQ.'],
    note: 'This case is anonymized and excludes confidential customer, pricing and process details.',
    related: [
      { label: 'Innovate T5', href: '/products/innovate-t5/' },
      { label: 'Mexico OES supplier page', href: '/countries/mexico-oes-spectrometer-supplier/' },
      { label: 'Innovate T5 vs F6000 Pro', href: '/compare/innovate-t5-vs-f6000-pro/' },
    ],
    faq: [
      { q: 'Why do automotive suppliers use OES?', a: 'OES supports more accurate alloy chemistry confirmation than handheld screening tools, especially when light elements or trace elements matter.' },
      { q: 'Can handheld XRF be used too?', a: 'Yes. Handheld XRF is useful for fast non-destructive incoming checks, while OES is preferred for detailed composition confirmation.' },
    ],
  },
  {
    slug: 'titanium-lab-onh-508-oxygen-nitrogen-hydrogen',
    title: 'Anonymized Case: ONH-508 for Titanium Oxygen Nitrogen Hydrogen Testing',
    description: 'An anonymized laboratory case for oxygen, nitrogen and hydrogen testing in titanium and specialty alloys using ONH-508.',
    eyebrow: 'Anonymized case · ONH testing',
    h1: 'ONH-508 for titanium oxygen, nitrogen and hydrogen testing',
    market: 'Specialty alloy laboratory',
    product: 'ONH-508 Oxygen, Nitrogen & Hydrogen Analyzer',
    productHref: '/products/onh-508/',
    application: 'Oxygen, nitrogen and hydrogen measurement in titanium, zirconium, steel, copper and rare-earth alloys.',
    challenge: ['The buyer needed O/N/H values that OES and XRF cannot provide directly.', 'Titanium and specialty alloys required careful method matching.', 'Laboratory staff needed clear configuration and consumable guidance before purchase.'],
    solution: ['JIEBO recommended ONH-508 using inert-gas fusion up to 3000 C.', 'The RFQ process asks for material type, expected ranges, standards and sample preparation.', 'For full alloy chemistry, ONH-508 can be paired with Noble T7 or JB-750 OES.'],
    result: ['The proposed workflow fills the O/N/H gap left by OES and handheld analyzers.', 'The buyer receives a clearer instrument pairing for specialty alloy certification.', 'Pre-sales review reduces configuration risk before shipment.'],
    note: 'This anonymized case describes an application workflow without publishing private buyer identity.',
    related: [
      { label: 'ONH-508', href: '/products/onh-508/' },
      { label: 'Aerospace metal analysis', href: '/applications/aerospace-metal-analysis/' },
      { label: 'Noble T7', href: '/products/noble-t7/' },
    ],
    faq: [
      { q: 'Which instrument measures hydrogen in titanium?', a: 'ONH-508 measures oxygen, nitrogen and hydrogen using inert-gas fusion and suitable detectors.' },
      { q: 'Can ONH-508 replace OES?', a: 'No. ONH-508 measures O/N/H, while OES covers broader alloy chemistry. Many labs use both workflows.' },
    ],
  },
];
