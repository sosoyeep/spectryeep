export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  market: string;
  /** Month the instrument was commissioned on site. */
  commissioned: string;
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

/**
 * Real installations, anonymized. Every entry below is a delivered and commissioned
 * project — country, industry, instrument and configuration are as supplied.
 * Buyer names are withheld: we publish a customer identity only with written permission.
 */
const DISCLOSURE =
  'Real installation, customer anonymized. The country, industry, instrument and configuration are as delivered and commissioned. The buyer is not named because we publish customer identities only with written permission. Production volumes, prices and contract terms are never published. Named write-ups of several of these projects are published on our group site jiebo-instrument.com.';

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'turkey-investment-casting-innovate-t5',
    title: 'Innovate T5 OES at a Turkish Investment-Casting Foundry',
    description: 'A Turkish investment-casting foundry replaced third-party lab testing with an Innovate T5 OES, moving C, Cr, Ni, Mo, S and P checks into the melt shop.',
    eyebrow: 'Installed case · Investment casting',
    h1: 'Innovate T5 OES for an investment-casting foundry in Turkey',
    market: 'Turkey · investment casting, stainless and alloy steel',
    commissioned: 'July 2026',
    product: 'Innovate T5 Optical Emission Spectrometer',
    productHref: '/products/innovate-t5/',
    application: 'Full-process quality control for investment castings supplied to automotive, machinery and engineering customers.',
    challenge: [
      'Material testing was outsourced to third-party laboratories, so composition results arrived after the melt had already been poured.',
      'The delay drove rejected castings and made production scheduling unpredictable.',
      'Trace control of C, Cr, Ni, Mo, S and P was mandatory to guarantee the mechanical performance of the castings.',
    ],
    solution: [
      'Innovate T5 full-spectrum OES: results in about 20 seconds, ppm-level detection limits for both metallic and non-metallic elements.',
      '401 mm Paschen-Runge optical bench in a vacuum optical system with independent CMOS sensors and automatic drift correction — built for the heat and dust of a casting shop.',
      'Multi-matrix calibration so stainless and alloy steel are analysed on the same instrument without a second unit.',
    ],
    result: [
      'Composition checks moved from an outside lab into the foundry, so the melt is corrected during the heat instead of after it.',
      'The instrument covers the full process — incoming material, melt control and finished casting — on one calibration set.',
      'Installation and commissioning were completed on site before the instrument went into production use.',
    ],
    note: DISCLOSURE,
    related: [
      { label: 'Innovate T5', href: '/products/innovate-t5/' },
      { label: 'Foundry OES application', href: '/applications/foundry-oes-spectrometer/' },
      { label: 'How to choose an OES', href: '/learn/how-to-choose-oes-spectrometer/' },
    ],
    faq: [
      { q: 'Can one OES cover both stainless and alloy steel?', a: 'Yes, provided the working curves for each matrix are built at calibration. The Innovate T5 covers 10 base matrices; this foundry runs stainless and alloy steel on the same instrument.' },
      { q: 'Does an OES replace a carbon-sulfur analyzer in a foundry?', a: 'For production control, usually yes. Plants that certify carbon and sulfur to a customer specification often keep a combustion C/S analyzer as the reference method — see the Ethiopia steel case for that pairing.' },
    ],
  },
  {
    slug: 'uzbekistan-cable-manufacturer-exquis-t4',
    title: 'Exquis T4 OES at an Uzbek Metal Processing Plant',
    description: 'An industrial manufacturer in Uzbekistan installed an Exquis T4 OES covering incoming inspection, process control, product certification and scrap analysis on one benchtop unit.',
    eyebrow: 'Installed case · Metal processing',
    h1: 'Exquis T4 OES for a metal processing plant in Uzbekistan',
    market: 'Uzbekistan · industrial metal processing',
    commissioned: 'June 2026',
    product: 'Exquis T4 Optical Emission Spectrometer',
    productHref: '/products/exquis-t4/',
    application: 'Incoming raw-material inspection, in-process control, finished-product quality certification and scrap-metal recycling analysis.',
    challenge: [
      'Four separate workflows — incoming material, process control, product certification and scrap recycling — all needed elemental analysis.',
      'Both ferrous and non-ferrous stock had to be covered without buying a dedicated instrument per material.',
      'The plant asked for hands-on operator training as part of the scope, not just delivery of a crate.',
    ],
    solution: [
      'Exquis T4 benchtop OES with a sealed optical chamber and CMOS detection, 160–580 nm, roughly 20 seconds per analysis.',
      'Matrix coverage across Fe, Al, Cu, Zn, Ni, Mg, Ti, Sn and Pb.',
      'JIEBO engineers travelled to the plant for assembly, optical calibration, system performance verification and operator training.',
    ],
    result: [
      'Performance was verified on site against specification before the instrument was handed over for production use.',
      'All four analysis workflows now run in-house on a single 33 kg benchtop instrument.',
      'Ongoing scope covers remote technical support, scheduled maintenance, spare parts and software updates.',
    ],
    note: DISCLOSURE,
    related: [
      { label: 'Exquis T4', href: '/products/exquis-t4/' },
      { label: 'Exquis T4 vs Innovate T5', href: '/compare/exquis-t4-vs-innovate-t5/' },
      { label: 'What is OES', href: '/learn/what-is-oes/' },
    ],
    faq: [
      { q: 'Is the Exquis T4 enough for non-ferrous work?', a: 'Yes for Al, Cu, Zn, Ni, Mg, Ti, Sn and Pb bases, provided the relevant working curves are calibrated. Plants running many alloy families at tight limits usually move up to the Innovate T5.' },
      { q: 'Do JIEBO engineers travel for installation?', a: 'On-site commissioning is available and was used for this project. Where travel is impractical, we run remote-guided installation with a video walkthrough instead.' },
    ],
  },
  {
    slug: 'brazil-steel-tube-mill-exquis-t4-pro',
    title: 'Exquis T4 Pro OES at a Brazilian Steel Tube Mill',
    description: 'A Brazilian manufacturer of steel pipes and structural profiles commissioned an Exquis T4 Pro for material certification across carbon, alloy and stainless steel.',
    eyebrow: 'Installed case · Pipe and profile mill',
    h1: 'Exquis T4 Pro OES for a steel tube mill in Brazil',
    market: 'Brazil · steel pipe and structural profile manufacturing',
    commissioned: 'June 2026',
    product: 'Exquis T4 Pro Optical Emission Spectrometer',
    productHref: '/products/exquis-t4-pro/',
    application: 'Raw-material and finished-tube quality inspection against Brazilian industrial material certification requirements.',
    challenge: [
      'Continuous production inspection demanded analytical stability over long runs, not just accuracy on a single spark.',
      'Carbon steel, alloy steel and stainless steel all had to be certified on the same instrument.',
      'Material certification for pipe production required trace-level results, not indicative readings.',
    ],
    solution: [
      'Exquis T4 Pro with a sealed circulating-argon optical chamber and high-precision CMOS full-spectrum detection.',
      'Digital high-energy pre-burn excitation: a full analysis in 20–30 seconds per specimen, covering 25+ elements including C, Si, Mn, P, S, Cr, Ni, Mo and Cu.',
      'Calibration set covering carbon steel, alloy steel and stainless steel raw material and finished tubular products.',
    ],
    result: [
      'The instrument entered formal quality-inspection service after commissioning.',
      'One instrument now certifies raw material and finished product across three steel families.',
      'ppm-level trace analysis supports the material certification the mill has to issue with its pipe.',
    ],
    note: DISCLOSURE,
    related: [
      { label: 'Exquis T4 Pro', href: '/products/exquis-t4-pro/' },
      { label: 'Brazil supply page', href: '/countries/brazil-carbon-sulfur-analyzer-supplier/' },
      { label: 'CMOS vs PMT detectors', href: '/learn/cmos-vs-pmt-detectors-oes/' },
    ],
    faq: [
      { q: 'What does the sealed circulating-argon chamber change?', a: 'It keeps the optical path under a controlled argon atmosphere without a vacuum pump, which holds analytical stability through long continuous inspection runs and keeps argon consumption down.' },
      { q: 'How many elements can be read in one spark?', a: 'On the T4 Pro, 25+ elements simultaneously in 20–30 seconds, including the light elements C, S and P that XRF cannot measure.' },
    ],
  },
  {
    slug: 'uae-steel-plant-innovate-t5-noble-t7',
    title: 'Innovate T5 and Noble T7 OES at a UAE Steel Plant',
    description: 'A steel plant in the UAE commissioned two OES units — an Innovate T5 on the production floor and a Noble T7 for wide-range reference analysis.',
    eyebrow: 'Installed case · Steel manufacturing',
    h1: 'Innovate T5 and Noble T7 OES for a steel plant in the UAE',
    market: 'UAE · steel manufacturing',
    commissioned: 'November 2025',
    product: 'Innovate T5 and Noble T7 Optical Emission Spectrometers',
    productHref: '/products/innovate-t5/',
    application: 'Real-time quality control of steel raw material and intermediates in the production workshop, backed by wide-range reference analysis.',
    challenge: [
      'The workshop is hot and dusty and runs on a continuous production cadence — instruments had to hold calibration in those conditions.',
      'Turnaround had to be fast enough that molten steel was not held waiting on a result.',
      'The plant wanted both production-speed testing and a wider-coverage reference instrument.',
    ],
    solution: [
      'Innovate T5 with a vacuum optical chamber and all-digital excitation source: about 20 seconds per test using high-energy pre-ignition, with no complex sample pretreatment.',
      'Noble T7 with wide-range full-spectrum CMOS acquisition for reference-grade coverage, including light elements in the deep UV.',
      'Both instruments configured for the plant\'s steel grades and installed in the production workshop rather than a separate lab.',
    ],
    result: [
      'Testing turnaround shortened enough to cut heat-holding time, reducing energy loss on molten steel.',
      'Routine production control and reference analysis are handled by two instruments from one calibration and support workflow.',
      'Both units were installed and commissioned on site before entering production.',
    ],
    note: DISCLOSURE,
    related: [
      { label: 'Innovate T5', href: '/products/innovate-t5/' },
      { label: 'Noble T7', href: '/products/noble-t7/' },
      { label: 'Innovate T5 vs Noble T7', href: '/compare/innovate-t5-vs-noble-t7/' },
    ],
    faq: [
      { q: 'Why run two spectrometers instead of one?', a: 'A production unit is optimised for speed at the furnace; a reference unit is optimised for accuracy and element coverage. Plants that certify material for customers often keep both so a re-check never competes with production throughput.' },
      { q: 'Can an OES sit on the shop floor rather than in a lab?', a: 'Yes. The Innovate T5 uses a vacuum optical chamber with automatic drift correction, and both units in this project were installed in the production workshop.' },
    ],
  },
  {
    slug: 'ethiopia-steel-plant-innovate-t5-cs996',
    title: 'Innovate T5 OES and CS996 Analyzer at an Ethiopian Steel Plant',
    description: 'An Ethiopian steel producer paired an Innovate T5 OES with a CS996 carbon-sulfur analyzer to control composition from raw ore through finished product.',
    eyebrow: 'Installed case · Steel manufacturing',
    h1: 'Innovate T5 OES and CS996 C/S analyzer for a steel plant in Ethiopia',
    market: 'Ethiopia · steel manufacturing',
    commissioned: 'September 2025',
    product: 'Innovate T5 OES + CS996 Carbon & Sulfur Analyzer',
    productHref: '/products/innovate-t5/',
    application: 'Composition control from raw material through finished steel products, with combustion C/S as the reference method.',
    challenge: [
      'Composition had to be tracked across the whole chain — raw material, intermediates and finished product — not only at final inspection.',
      'Traditional testing routes introduced delays and errors that made batch strength and toughness hard to keep inside spec.',
      'The producer was targeting markets across Africa and beyond, where material data has to hold up to customer scrutiny.',
    ],
    solution: [
      'Innovate T5 full-spectrum OES for fast multi-element analysis during production.',
      'CS996 floor-type high-frequency infrared carbon-sulfur analyzer as the reference method for C and S, with expandable detection cells.',
      'The two instruments were commissioned together so OES results and combustion reference values are cross-checked on the same samples.',
    ],
    result: [
      'Element ratios are quantified in real time during production instead of after the fact.',
      'Strength and toughness indicators stay controllable batch to batch because the chemistry is corrected upstream.',
      'The plant issues material data backed by a reference method, which matters for export customers.',
    ],
    note: DISCLOSURE,
    related: [
      { label: 'Innovate T5', href: '/products/innovate-t5/' },
      { label: 'CS996 C/S analyzer', href: '/products/cs996/' },
      { label: 'Carbon-sulfur analyzer guide', href: '/learn/carbon-sulfur-analyzer-guide/' },
    ],
    faq: [
      { q: 'Why buy both an OES and a C/S analyzer?', a: 'OES is fast enough for production control and reads the full element set; combustion C/S analysis gives the reference carbon and sulfur values many customers and standards require. Steel plants commonly run both, as this one does.' },
      { q: 'What does the CS996 add over the CS995?', a: 'A wider range (C 0.0001-10%, S 0.0001-2%), a 2.5 kW furnace and expandable low-carbon / high-sulfur cells. The CS995 is the bench-type unit for narrower ranges.' },
    ],
  },
  {
    slug: 'kenya-pipeline-components-exquis-t4',
    title: 'Exquis T4 OES at a Kenyan Pipeline Components Manufacturer',
    description: 'A Kenyan manufacturer of engineered pipeline products and precision utensils commissioned an Exquis T4 OES to support its ISO-certified quality system.',
    eyebrow: 'Installed case · Oil, gas and precision manufacturing',
    h1: 'Exquis T4 OES for a pipeline components manufacturer in Kenya',
    market: 'Kenya · engineered pipeline products and precision utensils',
    commissioned: 'May 2026',
    product: 'Exquis T4 Optical Emission Spectrometer',
    productHref: '/products/exquis-t4/',
    application: 'Elemental verification of metal components used in pipeline testing tools, seals and precision utensils.',
    challenge: [
      'The manufacturer serves oil and gas, petrochemical, construction and industrial customers in more than 20 countries, where component failure is expensive.',
      'ISO 9001, ISO 14001 and ISO 45001 certified operations require documented, accurate elemental analysis — not supplier assurances.',
      'Components have to hold up in harsh operating environments, so material verification could not stay outsourced.',
    ],
    solution: [
      'Exquis T4 full-spectrum OES with a sealed optical chamber and CMOS detection.',
      'Calibration matched to the alloys used in pipeline tooling, sealing components and precision utensils.',
      'Installation and commissioning completed on site, with operator training for the quality team.',
    ],
    result: [
      'Elemental verification moved in-house, feeding the existing ISO quality system with its own measurement data.',
      'Incoming material and finished components are checked on the same instrument.',
      'Quality assurance no longer waits on an external laboratory schedule.',
    ],
    note: DISCLOSURE,
    related: [
      { label: 'Exquis T4', href: '/products/exquis-t4/' },
      { label: 'Aerospace and precision alloy analysis', href: '/applications/aerospace-metal-analysis/' },
      { label: 'OES sample preparation', href: '/learn/oes-sample-preparation/' },
    ],
    faq: [
      { q: 'Does an OES help with ISO 9001 certification?', a: 'It does not grant certification, but it gives the quality system its own traceable measurement data for material verification, which auditors expect to see documented rather than assumed from supplier certificates.' },
      { q: 'How long does commissioning take on site?', a: 'A benchtop OES is typically assembled, calibrated, performance-verified and handed over with operator training within a few days, depending on how many matrices are being calibrated.' },
    ],
  },
  {
    slug: 'indonesia-testing-laboratory-innovate-t5',
    title: 'Innovate T5 OES at an Indonesian Certification Laboratory',
    description: 'An Indonesian certification and testing services provider installed an Innovate T5 OES for stainless steel analysis, cutting testing time by over 60% against its previous method.',
    eyebrow: 'Installed case · Third-party testing lab',
    h1: 'Innovate T5 OES for a certification laboratory in Indonesia',
    market: 'Indonesia · certification and materials testing services',
    commissioned: 'October 2025',
    product: 'Innovate T5 Optical Emission Spectrometer',
    productHref: '/products/innovate-t5/',
    application: 'Stainless steel elemental analysis for incoming material inspection and finished product verification on behalf of client companies.',
    challenge: [
      'As a testing provider, turnaround time is the product — clients wait on the report before releasing material.',
      'Stainless grades required accurate chromium, nickel and molybdenum values, not indicative readings.',
      'Results had to meet international industry benchmarks to be usable in client certification.',
    ],
    solution: [
      'Innovate T5 full-spectrum OES configured for stainless steel work, covering Cr, Ni and Mo along with the rest of the grade specification.',
      'Vacuum optical chamber and all-digital excitation source for stable results across a testing workload.',
      'Commissioning included calibration against certified reference materials for the grades the lab reports on.',
    ],
    result: [
      'Testing time fell by more than 60% compared with the laboratory\'s previous method.',
      'The lab reports both incoming material inspection and finished product verification from one instrument.',
      'Results meet the international benchmarks the lab\'s clients require for their own certification.',
    ],
    note: DISCLOSURE,
    related: [
      { label: 'Innovate T5', href: '/products/innovate-t5/' },
      { label: 'OES vs XRF vs LIBS', href: '/learn/oes-vs-xrf-vs-libs/' },
      { label: 'Innovate T5 vs Noble T7', href: '/compare/innovate-t5-vs-noble-t7/' },
    ],
    faq: [
      { q: 'Is an OES suitable for a third-party testing laboratory?', a: 'Yes — it is the standard method for solid metal composition. Labs choose the model by the range of matrices they accept: the Innovate T5 covers 10 base matrices, while the Noble T7 suits labs needing sub-10 ppm accuracy.' },
      { q: 'What limits stainless steel accuracy on an OES?', a: 'Sample preparation and calibration, more than the instrument. Grinding must be consistent and the working curve has to be built on certified reference materials that bracket the grades being reported.' },
    ],
  },
  {
    slug: 'south-korea-advanced-materials-cs995',
    title: 'CS995 Carbon-Sulfur Analyzer at a South Korean Materials Producer',
    description: 'An advanced materials producer in South Korea deployed a CS995 high-frequency infrared carbon-sulfur analyzer for semiconductor and alloy material testing.',
    eyebrow: 'Installed case · Advanced materials',
    h1: 'CS995 carbon-sulfur analyzer for an advanced materials producer in South Korea',
    market: 'South Korea · advanced materials, semiconductor and alloy',
    commissioned: 'January 2026',
    product: 'CS995 Carbon & Sulfur Analyzer',
    productHref: '/products/cs995/',
    application: 'High-precision carbon and sulfur determination in semiconductor and alloy materials.',
    challenge: [
      'Semiconductor and alloy material testing sets some of the strictest precision requirements in the industry.',
      'Analysis cycle time had to fit a production testing schedule, not a research pace.',
      'Test data had to be defensible against international standards to be usable in customer documentation.',
    ],
    solution: [
      'CS995 bench-type high-frequency infrared C/S analyzer with the detector and furnace separated to limit interference.',
      'Detection precision of 0.0005% with a typical analysis in about 35 seconds.',
      'Modular anti-interference structure and a long-life motor to keep maintenance intervals long in continuous use.',
    ],
    result: [
      'Carbon and sulfur are determined in-house at the precision the material specifications demand.',
      'Analysis time fits inside the production testing cycle rather than extending it.',
      'Methods align with ISO standards, so results carry into customer-facing documentation.',
    ],
    note: DISCLOSURE,
    related: [
      { label: 'CS995', href: '/products/cs995/' },
      { label: 'CS995 vs CS996', href: '/compare/cs995-vs-cs996/' },
      { label: 'Carbon-sulfur analyzer guide', href: '/learn/carbon-sulfur-analyzer-guide/' },
    ],
    faq: [
      { q: 'Why use combustion C/S analysis instead of OES for carbon?', a: 'High-frequency combustion with infrared detection reaches far lower carbon and sulfur limits than spark OES and is the reference method where certified values are required. OES stays the faster choice for full-spectrum production control.' },
      { q: 'What precision does the CS995 reach?', a: 'Detection precision of 0.0005% on carbon and sulfur, with a scope of C 0.0005-6.0000% and S 0.0005-0.3500%.' },
    ],
  },
  {
    slug: 'tajikistan-metallurgical-plant-noble-t7',
    title: 'Noble T7 OES at a Tajik Metallurgical Enterprise',
    description: 'A leading metallurgical enterprise in Tajikistan put a Noble T7 research-grade OES into operation for metal composition analysis and process standardization.',
    eyebrow: 'Installed case · Metallurgy',
    h1: 'Noble T7 OES for a metallurgical enterprise in Tajikistan',
    market: 'Tajikistan · metallurgy',
    commissioned: 'February 2026',
    product: 'Noble T7 Optical Emission Spectrometer',
    productHref: '/products/noble-t7/',
    application: 'High-precision metal composition analysis supporting process standardization and product qualification rates.',
    challenge: [
      'Composition analysis requirements were strict enough that a production-grade instrument alone would not cover them.',
      'Process standardization depended on measurement data the plant could trust batch to batch.',
      'The instrument had to stay stable in a working industrial environment, not a climate-controlled lab.',
    ],
    solution: [
      'Noble T7 research-grade full-spectrum OES with a constant-temperature optical chamber and high-performance CMOS acquisition.',
      'Accuracy specified to under 10 ppm for demanding composition work.',
      'Installation, calibration and commissioning carried out before the plant put it into formal operation.',
    ],
    result: [
      'The plant standardized its production process against its own measurement data.',
      'Product qualification rate is tracked on in-house analysis rather than external reports.',
      'The instrument holds calibration in the plant environment through the constant-temperature chamber.',
    ],
    note: DISCLOSURE,
    related: [
      { label: 'Noble T7', href: '/products/noble-t7/' },
      { label: 'Innovate T5 vs Noble T7', href: '/compare/innovate-t5-vs-noble-t7/' },
      { label: 'How to choose an OES', href: '/learn/how-to-choose-oes-spectrometer/' },
    ],
    faq: [
      { q: 'When is a Noble T7 worth it over an Innovate T5?', a: 'When accuracy requirements approach sub-10 ppm, when the element list runs wide, or when the instrument has to double as the reference method for other production units. For routine multi-matrix production control, the T5 is the working choice.' },
      { q: 'What does the constant-temperature chamber do?', a: 'It holds the optical bench at a controlled temperature (±0.1 °C), which is what keeps wavelength positions and calibration stable when the surrounding plant temperature swings.' },
    ],
  },
  {
    slug: 'bangladesh-manufacturing-exquis-t4',
    title: 'Exquis T4 OES at a Bangladeshi Manufacturing Group',
    description: 'A large manufacturing group in Bangladesh installed an Exquis T4 OES for multi-element analysis inside an automated production environment.',
    eyebrow: 'Installed case · Manufacturing group',
    h1: 'Exquis T4 OES for a manufacturing group in Bangladesh',
    market: 'Bangladesh · high-tech manufacturing',
    commissioned: 'November 2025',
    product: 'Exquis T4 Optical Emission Spectrometer',
    productHref: '/products/exquis-t4/',
    application: 'Simultaneous multi-element analysis supporting automated production lines and internal material standards.',
    challenge: [
      'Automated production means testing has to keep pace with the line rather than batch up at the end of a shift.',
      'Running costs mattered: argon consumption is a recurring expense at production testing volumes.',
      'The quality team needed calibration, quality control and unknown-sample analysis in one software workflow.',
    ],
    solution: [
      'Exquis T4 with a sealed optical chamber and cyclic argon flushing, which keeps argon consumption low at production volumes.',
      'High-resolution CMOS full-spectrum detection completing simultaneous multi-element analysis in about 20 seconds.',
      'Operating software covering intelligent calibration, quality control and quantitative analysis of unknown samples.',
    ],
    result: [
      'Analysis keeps pace with automated production instead of holding it up.',
      'Low argon consumption keeps the per-test running cost down at high testing volumes.',
      'The compact benchtop footprint fits production areas without a dedicated lab build-out.',
    ],
    note: DISCLOSURE,
    related: [
      { label: 'Exquis T4', href: '/products/exquis-t4/' },
      { label: 'Exquis T4 vs Innovate T5', href: '/compare/exquis-t4-vs-innovate-t5/' },
      { label: 'OES buyer guide 2026', href: '/learn/oes-buyer-guide-2026/' },
    ],
    faq: [
      { q: 'How much argon does a benchtop OES use?', a: 'It depends on the chamber design. A sealed chamber with cyclic argon flushing, as on the Exquis T4, consumes far less than an open-flush design — which is what makes high daily test counts affordable.' },
      { q: 'Can an OES analyse an unknown sample?', a: 'Yes, within the matrices it is calibrated for. The software identifies the base metal and quantifies against the working curves; a material completely outside the calibrated matrices needs a new curve built first.' },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
