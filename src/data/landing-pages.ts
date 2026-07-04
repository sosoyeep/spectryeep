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
      { name: 'ONH-508', href: '/products/onh-508/', reason: 'Oxygen, nitrogen and hydrogen analysis for titanium and specialty alloys.' },
    ],
    proof: ['Noble T7 targets accuracy below 10 ppm.', 'ONH-508 uses inert-gas fusion up to 3000 C.'],
    faq: [
      { q: 'Which instrument measures oxygen and nitrogen in titanium?', a: 'ONH-508 is designed for oxygen, nitrogen and hydrogen analysis in titanium, zirconium, steel, copper and rare-earth alloys.' },
      { q: 'Which OES model fits aerospace labs?', a: 'Noble T7 is the preferred option for trace-element work and high-stability laboratory workflows.' },
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

const translations: Partial<Record<Locale, Record<string, Partial<LandingPageData>>>> = {
  es: {
    'foundry-oes-spectrometer': {
      title: 'Espectrómetro OES para control de fundición | JIEBO',
      description: 'Elija un espectrómetro OES JIEBO para control químico junto al horno, hierro fundido, verificación de aleaciones y liberación de coladas.',
      eyebrow: 'Aplicación · Control de fundición',
      h1: 'Espectrómetros OES para fundición y control de calidad junto al horno',
      intro: 'JIEBO ayuda a las fundiciones a verificar la química de aleaciones Fe, Al, Cu y Zn antes de colar, después del tratamiento térmico y antes del envío.',
      buyerFit: ['Control de hierro fundido, acero al carbono, acero inoxidable y aleaciones no ferrosas', 'Medición de C, S, P, B y N que XRF no cubre bien', 'Análisis rápido y repetible para liberación de horno e inspección de entrada'],
      proof: ['Fundada en 2009, exporta a más de 40 países.', 'Configuraciones en stock en 15 días hábiles.', 'Ingenieros responden por WhatsApp normalmente en 4 horas hábiles.'],
      recommended: [
        { name: 'Exquis T4', href: '/products/exquis-t4/', reason: 'OES compacto de mesa para control de una matriz.' },
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'OES de producción para plantas con aleaciones mixtas.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'Analizador C/S de alta capacidad para carbono y azufre en hierro fundido.' },
      ],
      faq: [
        { q: '¿Qué OES conviene a una fundición?', a: 'Exquis T4 sirve para control rutinario de una matriz; Innovate T5 es mejor para varias familias de aleaciones y mayor rango espectral.' },
        { q: '¿OES reemplaza un analizador C/S?', a: 'No totalmente. OES es rápido para producción; combustión C/S ofrece valores de referencia para carbono y azufre.' },
      ],
    },
    'steel-mill-carbon-sulfur-analyzer': {
      title: 'Analizador de carbono y azufre para acerías | JIEBO',
      description: 'Analizadores C/S infrarrojos de alta frecuencia para acerías, fundiciones y laboratorios metalúrgicos.',
      eyebrow: 'Aplicación · C/S en acero',
      h1: 'Analizadores de carbono y azufre para acerías y laboratorios metalúrgicos',
      intro: 'Los analizadores C/S JIEBO usan combustión de alta frecuencia y detección infrarroja para medir carbono y azufre en acero, hierro fundido, minerales y ferroaleaciones.',
      buyerFit: ['Control de cuchara, palanquilla y producto terminado', 'Flujos de bajo carbono y alto carbono en una misma familia de instrumentos', 'Laboratorios que necesitan repetibilidad y mantenimiento sencillo'],
      proof: ['CS2020 puede incorporar cuatro celdas IR físicas.', 'Limpieza automática para más de 200 ciclos sin mantenimiento.', 'Soporte para documentos de exportación y logística internacional.'],
      recommended: [
        { name: 'CS995', href: '/products/cs995/', reason: 'Modelo de mesa para control C/S rutinario.' },
        { name: 'CS996', href: '/products/cs996/', reason: 'Modelo de piso con celdas expandibles y rangos más amplios.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'Modelo de alta gama para gran volumen y bajos límites.' },
      ],
      faq: [
        { q: '¿Qué muestras puede analizar?', a: 'Acero, hierro fundido, ferroaleaciones, minerales, aleaciones de cobre y otros materiales inorgánicos preparados correctamente.' },
        { q: '¿Cuánto tarda el análisis?', a: 'Normalmente entre 20 y 60 segundos según muestra y método.' },
      ],
    },
    'scrap-metal-handheld-xrf-analyzer': {
      title: 'Analizador XRF portátil para chatarra | JIEBO',
      description: 'Use F6000 Pro para clasificación de chatarra, identificación de aleaciones, PMI e inspección de entrada.',
      eyebrow: 'Aplicación · Chatarra',
      h1: 'Analizadores XRF portátiles para clasificación de chatarra e identificación de aleaciones',
      intro: 'F6000 Pro ayuda a recicladores, equipos PMI y comerciantes de metal a identificar aleaciones rápidamente sin cortar ni destruir piezas.',
      buyerFit: ['Clasificación de inoxidables, níquel, cobre y titanio', 'PMI de tuberías, recipientes y materiales de entrada', 'Ensayos no destructivos para piezas valiosas'],
      proof: ['Batería de litio de 8 horas.', 'Formato portátil para decisiones rápidas.', 'Soporte para flujos XRF, LIBS y OES móvil.'],
      recommended: [
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF portátil de Ti a U con WiFi, Bluetooth y USB 3.0.' },
        { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'LIBS portátil para elementos ligeros.' },
        { name: 'Surpass F1', href: '/products/surpass-f1/', reason: 'OES móvil cuando C, P, S o N requieren mayor exactitud.' },
      ],
      faq: [
        { q: '¿XRF es no destructivo?', a: 'Sí. Identifica la química de aleaciones sin cortar la muestra.' },
        { q: '¿Cuándo elegir LIBS?', a: 'Cuando importan elementos ligeros como Be, Mg, Al o Si, o cuando se prefiere evitar radiación ionizante.' },
      ],
    },
    'aerospace-metal-analysis': {
      title: 'Espectrómetros para análisis de aleaciones aeroespaciales | JIEBO',
      description: 'OES, PMT OES y ONH para certificación de aleaciones, trazas y O/N/H en titanio.',
      eyebrow: 'Aplicación · Aeroespacial',
      h1: 'Análisis de metales aeroespaciales para trazas y certificación de aleaciones',
      intro: 'Los proveedores aeroespaciales necesitan datos químicos confiables para material entrante, control de proceso y verificación final.',
      buyerFit: ['Titanio, níquel, cobalto, aluminio y aceros de alta resistencia', 'Trazas y elementos ligeros donde herramientas portátiles no bastan', 'Laboratorios con necesidades de repetibilidad y auditoría'],
      proof: ['Noble T7 apunta a exactitud inferior a 10 ppm.', 'ONH-508 usa fusión en gas inerte hasta 3000 C.'],
      recommended: [
        { name: 'Noble T7', href: '/products/noble-t7/', reason: 'OES CMOS de grado investigación con óptica termostatizada.' },
        { name: 'ONH-508', href: '/products/onh-508/', reason: 'O, N y H en titanio y aleaciones especiales.' },
      ],
      faq: [
        { q: '¿Qué equipo mide O y N en titanio?', a: 'ONH-508 mide oxígeno, nitrógeno e hidrógeno en titanio, zirconio, acero, cobre y tierras raras.' },
        { q: '¿Qué OES conviene a laboratorios aeroespaciales?', a: 'Noble T7 es la opción para trazas y alta estabilidad.' },
      ],
    },
    'mining-ore-xrf-analyzer': {
      title: 'Analizador XRF portátil para minería y minerales | JIEBO',
      description: 'XRF portátil para exploración, cribado de mineral, geología de campo y análisis elemental rápido de Ti a U.',
      eyebrow: 'Aplicación · XRF minería',
      h1: 'Analizadores XRF portátiles para minería, geología y cribado de mineral',
      intro: 'Los equipos mineros usan XRF portátil para cribar mineral, identificar tendencias y priorizar muestras antes del laboratorio.',
      buyerFit: ['Geólogos que necesitan cribado elemental rápido', 'Clasificación de mineral y control de ley', 'Preselección antes de química húmeda o ICP'],
      proof: ['Análisis portátil con batería.', 'Transferencia inalámbrica de datos.', 'Experiencia de exportación en África, Latinoamérica, GCC y Asia.'],
      recommended: [
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF portátil para análisis de campo de Ti a U.' },
        { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'LIBS portátil para algunos elementos ligeros.' },
        { name: 'XRF vs LIBS guide', href: '/learn/oes-vs-xrf-vs-libs/', reason: 'Comparación para elegir XRF, LIBS u OES.' },
      ],
      faq: [
        { q: '¿Reemplaza el ensayo de laboratorio?', a: 'No. Sirve para cribado y priorización; el ensayo final requiere laboratorio.' },
        { q: '¿Qué elementos mide?', a: 'F6000 Pro está diseñado para Ti a U, según matriz, calibración y muestra.' },
      ],
    },
    'india-oes-spectrometer-supplier': {
      title: 'Proveedor de espectrómetros OES para India | JIEBO',
      description: 'JIEBO suministra OES, analizadores C/S y XRF/LIBS portátiles para fundiciones, acerías y laboratorios metalúrgicos en India.',
      eyebrow: 'País · India',
      h1: 'Proveedor de espectrómetros OES para fundiciones y laboratorios en India',
      intro: 'Los compradores en India eligen JIEBO cuando necesitan soporte directo de fábrica, documentación de exportación y respuesta técnica rápida por WhatsApp.',
      buyerFit: ['Fundiciones que necesitan control OES junto al horno', 'Acerías y plantas de ferroaleaciones comparando analizadores C/S', 'Importadores que requieren documentación clara y plazos de envío'],
      proof: ['Configuraciones en stock en 15 días hábiles.', 'Soporte de documentos de exportación y logística puerta a puerta.', 'Atención técnica en inglés por WhatsApp.'],
      recommended: [
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'OES de producción para múltiples matrices de aleación.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'Analizador C/S de alta gama para laboratorios con volumen.' },
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF portátil para inspección de material entrante y chatarra.' },
      ],
      faq: [
        { q: '¿JIEBO puede enviar instrumentos analíticos a India?', a: 'Sí. JIEBO apoya logística internacional, documentos de exportación y selección de configuración.' },
        { q: '¿Cómo elegir entre Exquis T4 e Innovate T5?', a: 'Exquis T4 conviene para una matriz principal; Innovate T5 es mejor para más familias de aleaciones y trabajo de trazas.' },
      ],
    },
    'saudi-arabia-oes-spectrometer-supplier': {
      title: 'Proveedor de espectrómetros OES para Arabia Saudita | JIEBO',
      description: 'OES, C/S, ONH y XRF/LIBS portátiles para metalurgia, PMI petrolero, fabricación y laboratorios en Arabia Saudita.',
      eyebrow: 'País · Arabia Saudita',
      h1: 'Proveedor de espectrómetros OES para compradores de análisis metálico en Arabia Saudita',
      intro: 'JIEBO apoya clientes saudíes en control de fundición, fabricación de acero, PMI, suministro aeroespacial y laboratorios de investigación.',
      buyerFit: ['Fabricadores e inspectores que necesitan PMI y verificación de aleaciones', 'Fundiciones que necesitan C/S y elementos ligeros', 'Laboratorios que comparan OES, XRF, LIBS y C/S'],
      proof: ['Experiencia de envío a mercados GCC.', 'Soporte de documentación CE/CB.', 'Respuesta técnica por WhatsApp para elegir modelo.'],
      recommended: [
        { name: 'Surpass F1', href: '/products/surpass-f1/', reason: 'OES móvil para PMI de campo y piezas grandes.' },
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF portátil para identificación no destructiva.' },
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'OES de planta para control multi-matriz.' },
      ],
      faq: [
        { q: '¿JIEBO entrega en GCC?', a: 'Sí. Coordinamos documentación de exportación y logística internacional.' },
        { q: '¿Qué analizador sirve para PMI petrolero?', a: 'F6000 Pro sirve para PMI rápido no destructivo; Surpass F1 es mejor cuando importan elementos ligeros.' },
      ],
    },
    'south-africa-xrf-analyzer-supplier': {
      title: 'Proveedor de analizadores XRF para Sudáfrica | JIEBO',
      description: 'XRF portátil, LIBS y OES para minería, chatarra y metalurgia en Sudáfrica.',
      eyebrow: 'País · Sudáfrica',
      h1: 'Proveedor de analizadores XRF para minería y chatarra en Sudáfrica',
      intro: 'Los clientes sudafricanos usan analizadores portátiles JIEBO para cribado de mineral, clasificación de chatarra y PMI metálico.',
      buyerFit: ['Equipos mineros que necesitan cribado de campo', 'Recicladores de acero inoxidable, cobre, níquel y titanio', 'Laboratorios metalúrgicos que añaden OES o C/S'],
      proof: ['Exportación a mercados africanos.', 'Opciones portátiles con batería.', 'Soporte de preventa por WhatsApp para aplicación y calibración.'],
      recommended: [
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF portátil para aleaciones y minerales.' },
        { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'LIBS portátil para algunos elementos ligeros.' },
        { name: 'Noble T7', href: '/products/noble-t7/', reason: 'OES de laboratorio para confirmación de trazas.' },
      ],
      faq: [
        { q: '¿XRF portátil sirve para minería?', a: 'Sí. Sirve para cribado rápido y priorización antes del ensayo de laboratorio.' },
        { q: '¿JIEBO suministra equipos portátiles y de laboratorio?', a: 'Sí. Suministramos XRF/LIBS portátil, OES móvil, OES de mesa y analizadores elementales.' },
      ],
    },
    'brazil-carbon-sulfur-analyzer-supplier': {
      title: 'Proveedor de analizadores carbono azufre para Brasil | JIEBO',
      description: 'Analizadores C/S, OES y analizadores portátiles para fundiciones, acerías y laboratorios en Brasil.',
      eyebrow: 'País · Brasil',
      h1: 'Proveedor de analizadores carbono azufre para fundiciones y acerías en Brasil',
      intro: 'Los compradores metalúrgicos en Brasil pueden adquirir analizadores C/S y OES JIEBO para hierro fundido, acero, ferroaleaciones y control no ferroso.',
      buyerFit: ['Fundiciones que controlan carbono y azufre en hierro fundido', 'Laboratorios de acero y ferroaleaciones', 'Importadores que necesitan soporte directo de fábrica'],
      proof: ['Exportación a Brasil, México y Argentina.', 'Modelos en stock en 15 días hábiles.', 'Soporte para acero, hierro fundido y ferroaleaciones.'],
      recommended: [
        { name: 'CS995', href: '/products/cs995/', reason: 'Analizador C/S de entrada para control rutinario.' },
        { name: 'CS996', href: '/products/cs996/', reason: 'C/S de piso con rangos más amplios.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'C/S de cuatro celdas para alto volumen.' },
      ],
      faq: [
        { q: '¿Qué C/S conviene a una fundición en Brasil?', a: 'CS995 sirve para rutina, CS996 amplía rangos y CS2020 conviene a laboratorios de mayor volumen.' },
        { q: '¿JIEBO entrega documentación de exportación?', a: 'Sí. Apoyamos documentos de exportación, certificados CE/CB cuando aplican y logística internacional.' },
      ],
    },
    'mexico-oes-spectrometer-supplier': {
      title: 'Proveedor de espectrómetros OES para México | JIEBO',
      description: 'OES y analizadores metálicos para fundiciones, proveedores automotrices, talleres de fabricación y laboratorios en México.',
      eyebrow: 'País · México',
      h1: 'Proveedor de espectrómetros OES para automotriz y fundición en México',
      intro: 'Los compradores en México usan OES y analizadores portátiles JIEBO para suministro automotriz, control de fundición, entrada de material y fabricación metálica.',
      buyerFit: ['Proveedores automotrices que verifican aluminio, acero y cobre', 'Fundiciones que necesitan OES y C/S', 'Compras que comparan equipos importados directos de fábrica'],
      proof: ['Exportación a México y Latinoamérica.', 'Contenido web en inglés y español.', 'Flujo rápido de cotización por WhatsApp.'],
      recommended: [
        { name: 'Exquis T4', href: '/products/exquis-t4/', reason: 'OES compacto para control de fundición.' },
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'OES multi-matriz para proveedores automotrices.' },
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF portátil para inspección de aleaciones entrantes.' },
      ],
      faq: [
        { q: '¿JIEBO apoya clientes en México?', a: 'Sí. Exportamos a México y apoyamos selección de modelo, documentos y envío.' },
        { q: '¿Qué OES conviene a proveedores automotrices?', a: 'Innovate T5 suele ser mejor para familias de aleaciones mixtas; Exquis T4 sirve para QC más simple.' },
      ],
    },
  },
  ru: {
    'foundry-oes-spectrometer': {
      title: 'ОЭС-спектрометр для контроля литейного производства | JIEBO',
      description: 'Искровой ОЭС JIEBO для контроля химсостава у печи, чугуна, проверки сплавов и выпуска плавки.',
      eyebrow: 'Применение · Литейный QC',
      h1: 'ОЭС-спектрометры для литейного производства и контроля у печи',
      intro: 'JIEBO помогает литейным предприятиям проверять состав Fe, Al, Cu и Zn сплавов до заливки, после термообработки и перед отгрузкой.',
      buyerFit: ['Чугун, углеродистая сталь, нержавеющая сталь и цветные сплавы', 'C, S, P, B и N, которые XRF измеряет ограниченно', 'Быстрый повторяемый анализ для выпуска плавки и входного контроля'],
      proof: ['Компания основана в 2009 году и экспортирует в 40+ стран.', 'Складские конфигурации отгружаются за 15 рабочих дней.', 'Инженеры отвечают в WhatsApp обычно в течение 4 рабочих часов.'],
      recommended: [
        { name: 'Exquis T4', href: '/products/exquis-t4/', reason: 'Компактный настольный ОЭС для одной матрицы.' },
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'Производственный ОЭС для смешанных сплавов.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'Высокопроизводительный C/S-анализатор для чугуна.' },
      ],
      faq: [
        { q: 'Какой ОЭС подходит литейному цеху?', a: 'Exquis T4 подходит для рутинного QC одной матрицы; Innovate T5 лучше для нескольких семейств сплавов.' },
        { q: 'Может ли ОЭС заменить C/S-анализатор?', a: 'Не полностью. ОЭС быстр для производства, а C/S-анализатор дает референсные значения C и S.' },
      ],
    },
    'steel-mill-carbon-sulfur-analyzer': {
      title: 'Анализатор углерода и серы для сталелитейных заводов | JIEBO',
      description: 'Высокочастотные ИК C/S-анализаторы для сталелитейных заводов, литейных и металлургических лабораторий.',
      eyebrow: 'Применение · C/S в стали',
      h1: 'Анализаторы углерода и серы для сталелитейных заводов и металлургических лабораторий',
      intro: 'C/S-анализаторы JIEBO используют высокочастотное сжигание и ИК-детекцию для стали, чугуна, руд, ферросплавов и цветных металлов.',
      buyerFit: ['Контроль ковша, заготовок и готовой продукции', 'Низкоуглеродистые и высокоуглеродистые материалы', 'Лаборатории, которым нужна повторяемость и простое обслуживание'],
      proof: ['CS2020 доступен с четырьмя физическими ИК-ячейками.', 'Автоочистка поддерживает 200+ циклов без обслуживания.', 'Поддержка экспортных документов и логистики.'],
      recommended: [
        { name: 'CS995', href: '/products/cs995/', reason: 'Настольная модель для рутинного C/S-контроля.' },
        { name: 'CS996', href: '/products/cs996/', reason: 'Напольная модель с расширяемыми ячейками.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'Высокий класс для высокой загрузки и низких пределов.' },
      ],
      faq: [
        { q: 'Какие образцы можно анализировать?', a: 'Сталь, чугун, ферросплавы, руды, медные сплавы и другие подготовленные неорганические материалы.' },
        { q: 'Сколько длится анализ?', a: 'Обычно 20-60 секунд в зависимости от образца и метода.' },
      ],
    },
    'scrap-metal-handheld-xrf-analyzer': {
      title: 'Ручной XRF-анализатор для сортировки металлолома | JIEBO',
      description: 'F6000 Pro для неразрушающей сортировки металлолома, идентификации сплавов, PMI и входного контроля.',
      eyebrow: 'Применение · Металлолом',
      h1: 'Ручные XRF-анализаторы для сортировки металлолома и идентификации сплавов',
      intro: 'F6000 Pro помогает переработчикам, PMI-командам и трейдерам быстро определять марку сплава без резки детали.',
      buyerFit: ['Сортировка нержавеющих, никелевых, медных и титановых сплавов', 'PMI трубопроводов, сосудов и входного материала', 'Неразрушающий контроль ценных деталей'],
      proof: ['Литиевая батарея на 8 часов.', 'Ручной формат для быстрых решений.', 'Поддержка XRF, LIBS и мобильного ОЭС.' ],
      recommended: [
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Ручной XRF Ti-U с WiFi, Bluetooth и USB 3.0.' },
        { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'Ручной LIBS для легких элементов.' },
        { name: 'Surpass F1', href: '/products/surpass-f1/', reason: 'Мобильный ОЭС для точного C, P, S или N.' },
      ],
      faq: [
        { q: 'XRF не разрушает образец?', a: 'Да. Он определяет состав без резки образца.' },
        { q: 'Когда выбрать LIBS?', a: 'Когда важны легкие элементы Be, Mg, Al или Si, либо нужно избежать ионизирующего излучения.' },
      ],
    },
    'aerospace-metal-analysis': {
      title: 'Спектрометры для анализа аэрокосмических сплавов | JIEBO',
      description: 'ОЭС, PMT OES и ONH-анализаторы JIEBO для сертификации сплавов, анализа следов и O/N/H в титане.',
      eyebrow: 'Применение · Аэрокосмос',
      h1: 'Анализ аэрокосмических металлов для следовых элементов и сертификации сплавов',
      intro: 'Поставщикам аэрокосмической отрасли нужны надежные данные по химсоставу для входного контроля, управления процессом и финальной проверки.',
      buyerFit: ['Титан, никель, кобальт, алюминий и высокопрочные стали', 'Следовые и легкие элементы, где ручных приборов недостаточно', 'Лаборатории, которым нужна повторяемость для сертификатов и аудитов'],
      proof: ['Noble T7 ориентирован на точность ниже 10 ppm.', 'ONH-508 использует плавление в инертном газе до 3000 C.'],
      recommended: [
        { name: 'Noble T7', href: '/products/noble-t7/', reason: 'CMOS OES исследовательского уровня с термостабильной оптикой.' },
        { name: 'ONH-508', href: '/products/onh-508/', reason: 'Анализ кислорода, азота и водорода в титане и спецсплавах.' },
      ],
      faq: [
        { q: 'Какой прибор измеряет кислород и азот в титане?', a: 'ONH-508 предназначен для анализа кислорода, азота и водорода в титане, цирконии, стали, меди и редкоземельных сплавах.' },
        { q: 'Какой ОЭС подходит аэрокосмической лаборатории?', a: 'Noble T7 подходит для следовых элементов и стабильной лабораторной работы.' },
      ],
    },
    'mining-ore-xrf-analyzer': {
      title: 'Ручной XRF-анализатор для горной отрасли и руды | JIEBO',
      description: 'Ручные XRF-анализаторы JIEBO для разведки, скрининга руды, полевой геологии и быстрого элементного анализа Ti-U.',
      eyebrow: 'Применение · XRF для руды',
      h1: 'Ручные XRF-анализаторы для горной отрасли, геологии и скрининга руды',
      intro: 'Горные команды используют ручной XRF для скрининга руды, выявления минерализации и приоритизации образцов до лаборатории.',
      buyerFit: ['Полевые геологи, которым нужен быстрый элементный скрининг', 'Сортировка руды и контроль содержания', 'Лаборатории, которым нужна предварительная проверка перед ICP или мокрой химией'],
      proof: ['Портативный анализ от батареи.', 'Беспроводная передача данных.', 'Опыт экспорта в Африку, Латинскую Америку, GCC и Азию.'],
      recommended: [
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Ручной XRF для полевого анализа элементов Ti-U.' },
        { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'Ручной LIBS для задач с легкими элементами.' },
        { name: 'XRF vs LIBS guide', href: '/learn/oes-vs-xrf-vs-libs/', reason: 'Сравнение XRF, LIBS и OES для выбора технологии.' },
      ],
      faq: [
        { q: 'Может ли ручной XRF заменить лабораторный анализ?', a: 'Нет. Он лучше всего подходит для быстрого скрининга и приоритизации образцов; финальные значения подтверждают в лаборатории.' },
        { q: 'Какие элементы измеряет ручной XRF?', a: 'F6000 Pro рассчитан на элементы Ti-U в зависимости от образца, калибровки и матрицы.' },
      ],
    },
    'india-oes-spectrometer-supplier': {
      title: 'Поставщик ОЭС-спектрометров для Индии | JIEBO',
      description: 'JIEBO поставляет ОЭС, C/S-анализаторы и ручные XRF/LIBS для индийских литейных, сталелитейных и металлургических лабораторий.',
      eyebrow: 'Страна · Индия',
      h1: 'Поставщик ОЭС-спектрометров для литейных и металлургических лабораторий Индии',
      intro: 'Индийские покупатели выбирают JIEBO, когда нужны поддержка напрямую от завода, экспортные документы и быстрый инженерный ответ в WhatsApp.',
      buyerFit: ['Литейные цеха с контролем ОЭС у печи', 'Сталелитейные и ферросплавные заводы, сравнивающие C/S-анализаторы', 'Импортеры, которым нужны английские документы и понятные сроки'],
      proof: ['Складские конфигурации отгружаются за 15 рабочих дней.', 'Поддержка экспортных документов и логистики.', 'Инженерный ответ на английском в WhatsApp.'],
      recommended: [
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'Производственный ОЭС для нескольких матриц сплавов.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'Высококлассный C/S-анализатор для лабораторной загрузки.' },
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Ручной XRF для входного контроля и металлолома.' },
      ],
      faq: [
        { q: 'Может ли JIEBO отправлять аналитические приборы в Индию?', a: 'Да. JIEBO помогает с международной логистикой, экспортными документами и подбором конфигурации.' },
        { q: 'Как выбрать между Exquis T4 и Innovate T5?', a: 'Exquis T4 подходит для одной основной матрицы; Innovate T5 лучше для разных сплавов и следовых элементов.' },
      ],
    },
    'saudi-arabia-oes-spectrometer-supplier': {
      title: 'Поставщик ОЭС-спектрометров для Саудовской Аравии | JIEBO',
      description: 'Искровые ОЭС, C/S, ONH и ручные XRF/LIBS для металлургии, нефтегазового PMI, производства и лабораторий Саудовской Аравии.',
      eyebrow: 'Страна · Саудовская Аравия',
      h1: 'Поставщик ОЭС-спектрометров для покупателей анализа металлов в Саудовской Аравии',
      intro: 'JIEBO поддерживает клиентов в Саудовской Аравии в литейном контроле, металлоконструкциях, нефтегазовом PMI, аэрокосмических поставках и лабораториях.',
      buyerFit: ['Производители и инспекторы, которым нужны PMI и проверка сплавов', 'Литейные, которым нужен C/S и легкие элементы', 'Лаборатории, сравнивающие OES, XRF, LIBS и C/S'],
      proof: ['Опыт поставок на рынки GCC.', 'Поддержка документации CE/CB.', 'Инженерный ответ в WhatsApp для выбора модели.'],
      recommended: [
        { name: 'Surpass F1', href: '/products/surpass-f1/', reason: 'Мобильный ОЭС для полевого PMI и крупных деталей.' },
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Ручной XRF для быстрой неразрушающей идентификации сплавов.' },
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'Заводской искровой ОЭС для multi-matrix QC.' },
      ],
      faq: [
        { q: 'Поддерживает ли JIEBO доставку в GCC?', a: 'Да. JIEBO координирует экспортные документы и международную логистику.' },
        { q: 'Какой анализатор подходит для нефтегазового PMI?', a: 'F6000 Pro полезен для быстрого PMI; Surpass F1 выбирают, когда важна точность по легким элементам.' },
      ],
    },
    'south-africa-xrf-analyzer-supplier': {
      title: 'Поставщик XRF-анализаторов для Южной Африки | JIEBO',
      description: 'JIEBO поставляет ручные XRF, LIBS и ОЭС для горной отрасли, металлолома и металлургии Южной Африки.',
      eyebrow: 'Страна · Южная Африка',
      h1: 'Поставщик XRF-анализаторов для горной отрасли и металлолома Южной Африки',
      intro: 'Клиенты в Южной Африке используют ручные анализаторы JIEBO для скрининга руды, сортировки металлолома и PMI металлов.',
      buyerFit: ['Горные команды, которым нужен полевой скрининг руды', 'Площадки металлолома для нержавейки, меди, никеля и титана', 'Металлургические лаборатории, добавляющие ОЭС или C/S'],
      proof: ['Экспорт на африканские рынки.', 'Ручные модели с батарейным питанием.', 'Предпродажная поддержка в WhatsApp по калибровкам и задачам.'],
      recommended: [
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Ручной XRF для сплавов и руды.' },
        { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'Ручной LIBS для выбранных легких элементов.' },
        { name: 'Noble T7', href: '/products/noble-t7/', reason: 'Лабораторный ОЭС для подтверждения следовых элементов.' },
      ],
      faq: [
        { q: 'Можно ли использовать ручной XRF в горной отрасли?', a: 'Да. Он широко используется для быстрого полевого скрининга перед лабораторным подтверждением.' },
        { q: 'Поставляет ли JIEBO ручные и лабораторные приборы?', a: 'Да. JIEBO поставляет ручные XRF/LIBS, мобильные ОЭС, настольные ОЭС и элементные анализаторы.' },
      ],
    },
    'brazil-carbon-sulfur-analyzer-supplier': {
      title: 'Поставщик анализаторов углерода и серы для Бразилии | JIEBO',
      description: 'C/S-анализаторы, ОЭС и ручные анализаторы металлов для бразильских литейных, сталелитейных и металлургических лабораторий.',
      eyebrow: 'Страна · Бразилия',
      h1: 'Поставщик анализаторов углерода и серы для литейных и сталелитейных заводов Бразилии',
      intro: 'Бразильские металлургические покупатели могут использовать C/S и ОЭС JIEBO для чугуна, стали, ферросплавов и цветных металлов.',
      buyerFit: ['Литейные, контролирующие углерод и серу в чугуне', 'Лаборатории стали и ферросплавов', 'Импортеры, которым нужна заводская поддержка и документы'],
      proof: ['Экспорт в Бразилию, Мексику и Аргентину.', 'Складские модели отгружаются за 15 рабочих дней.', 'Прикладная поддержка для стали, чугуна и ферросплавов.'],
      recommended: [
        { name: 'CS995', href: '/products/cs995/', reason: 'Начальный C/S-анализатор для рутинного QC.' },
        { name: 'CS996', href: '/products/cs996/', reason: 'Напольный C/S с более широкими диапазонами.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'Четырехъячеечный C/S для высокой загрузки.' },
      ],
      faq: [
        { q: 'Какой C/S подходит литейной в Бразилии?', a: 'CS995 подходит для рутины, CS996 расширяет диапазоны, CS2020 подходит для высокой загрузки.' },
        { q: 'Предоставляет ли JIEBO экспортные документы?', a: 'Да. JIEBO поддерживает экспортные документы, CE/CB где применимо и международную логистику.' },
      ],
    },
    'mexico-oes-spectrometer-supplier': {
      title: 'Поставщик ОЭС-спектрометров для Мексики | JIEBO',
      description: 'ОЭС и анализаторы металлов для мексиканских литейных, автопоставщиков, производственных цехов и лабораторий.',
      eyebrow: 'Страна · Мексика',
      h1: 'Поставщик ОЭС-спектрометров для автопрома и литейных Мексики',
      intro: 'Покупатели в Мексике используют ОЭС и ручные анализаторы JIEBO для автопоставок, литейного QC, входного контроля и металлообработки.',
      buyerFit: ['Автопоставщики, проверяющие алюминий, сталь и медные сплавы', 'Литейные, которым нужны ОЭС и C/S', 'Закупщики, сравнивающие импорт напрямую от завода'],
      proof: ['Экспорт в Мексику и Латинскую Америку.', 'Английский и испанский контент доступен.', 'Быстрый процесс запроса цены через WhatsApp.'],
      recommended: [
        { name: 'Exquis T4', href: '/products/exquis-t4/', reason: 'Компактный настольный ОЭС для литейного QC.' },
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'Multi-matrix OES для автопоставщиков.' },
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'Ручной XRF для входного контроля сплавов.' },
      ],
      faq: [
        { q: 'Поддерживает ли JIEBO клиентов в Мексике?', a: 'Да. JIEBO экспортирует в Мексику и помогает с выбором модели, документами и доставкой.' },
        { q: 'Какой ОЭС лучше для автопоставщиков?', a: 'Innovate T5 обычно лучше для смешанных сплавов; Exquis T4 подходит для более простого литейного QC.' },
      ],
    },
  },
  ar: {
    'foundry-oes-spectrometer': {
      title: 'مطياف OES لمراقبة جودة المسابك | JIEBO',
      description: 'اختر مطياف OES من JIEBO لفحص تركيب المعادن قرب الفرن، والتحقق من السبائك وقرارات إطلاق الصبة.',
      eyebrow: 'تطبيق · جودة المسابك',
      h1: 'مطيافات OES للمسابك ومراقبة الجودة قرب الفرن',
      intro: 'تساعد JIEBO المسابك على التحقق من كيمياء سبائك Fe وAl وCu وZn قبل الصب وبعد المعالجة وقبل الشحن.',
      buyerFit: ['فحص الحديد الزهر والصلب الكربوني والستانلس والسبائك غير الحديدية', 'قياس C وS وP وB وN التي لا يغطيها XRF جيداً', 'تحليل سريع ومتكرر لإطلاق الفرن وفحص المواد الواردة'],
      proof: ['تأسست عام 2009 وتصدر إلى أكثر من 40 دولة.', 'تشحن التكوينات المتوفرة خلال 15 يوم عمل.', 'يرد المهندسون عبر واتساب غالباً خلال 4 ساعات عمل.'],
      recommended: [
        { name: 'Exquis T4', href: '/products/exquis-t4/', reason: 'OES مكتبي مدمج لجودة مصفوفة واحدة.' },
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'OES إنتاجي لمصانع السبائك المختلطة.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'محلل C/S عالي الإنتاجية للحديد الزهر.' },
      ],
      faq: [
        { q: 'أي OES يناسب المسبك؟', a: 'Exquis T4 يناسب مراقبة مصفوفة واحدة؛ Innovate T5 أفضل لعدة عائلات سبائك ونطاق أوسع.' },
        { q: 'هل يستبدل OES محلل C/S؟', a: 'ليس تماماً. OES سريع للإنتاج، بينما يعطي محلل C/S قيماً مرجعية للكربون والكبريت.' },
      ],
    },
    'steel-mill-carbon-sulfur-analyzer': {
      title: 'محلل الكربون والكبريت لمصانع الصلب | JIEBO',
      description: 'محللات C/S بالأشعة تحت الحمراء والاحتراق عالي التردد لمصانع الصلب والمسابك ومختبرات المعادن.',
      eyebrow: 'تطبيق · C/S للصلب',
      h1: 'محللات الكربون والكبريت لمصانع الصلب ومختبرات المعادن',
      intro: 'تستخدم محللات JIEBO احتراقاً عالي التردد وكشفاً بالأشعة تحت الحمراء لقياس الكربون والكبريت في الصلب والحديد الزهر والخامات والسبائك الحديدية.',
      buyerFit: ['فحص المغرفة والبليت والمنتج النهائي', 'سير عمل للصلب منخفض الكربون والحديد الزهر عالي الكربون', 'مختبرات تحتاج إلى ثبات وتكرارية وصيانة سهلة'],
      proof: ['يتوفر CS2020 بأربع خلايا IR فعلية.', 'تنظيف تلقائي يدعم أكثر من 200 دورة بدون صيانة.', 'دعم وثائق التصدير والشحن الدولي.'],
      recommended: [
        { name: 'CS995', href: '/products/cs995/', reason: 'موديل مكتبي لاختبار C/S الروتيني.' },
        { name: 'CS996', href: '/products/cs996/', reason: 'موديل أرضي بخلايا قابلة للتوسعة ونطاقات أوسع.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'موديل عالي الإنتاجية وحدود كشف منخفضة.' },
      ],
      faq: [
        { q: 'ما العينات التي يمكن تحليلها؟', a: 'الصلب والحديد الزهر والسبائك الحديدية والخامات وسبائك النحاس ومواد غير عضوية أخرى بعد التحضير المناسب.' },
        { q: 'كم يستغرق التحليل؟', a: 'عادة بين 20 و60 ثانية حسب العينة وإعدادات الطريقة.' },
      ],
    },
    'scrap-metal-handheld-xrf-analyzer': {
      title: 'محلل XRF محمول لفرز الخردة المعدنية | JIEBO',
      description: 'استخدم F6000 Pro لفرز الخردة وتحديد السبائك وPMI وفحص المواد الواردة بدون إتلاف.',
      eyebrow: 'تطبيق · فرز الخردة',
      h1: 'محللات XRF المحمولة لفرز الخردة وتحديد السبائك',
      intro: 'يساعد F6000 Pro ساحات إعادة التدوير وفرق PMI وتجار المعادن على تحديد درجة السبيكة بسرعة دون قطع القطعة أو إتلافها.',
      buyerFit: ['فرز الستانلس والنيكل والنحاس والتيتانيوم', 'PMI للأنابيب والأوعية والمواد الواردة', 'فحص غير مدمر للمعادن غير الحديدية والقطع القيّمة'],
      proof: ['بطارية ليثيوم تعمل حتى 8 ساعات.', 'تصميم محمول لاتخاذ قرارات فرز سريعة.', 'دعم سير عمل XRF وLIBS وOES متنقل.'],
      recommended: [
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF محمول من Ti إلى U مع WiFi وBluetooth وUSB 3.0.' },
        { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'LIBS محمول للعناصر الخفيفة.' },
        { name: 'Surpass F1', href: '/products/surpass-f1/', reason: 'OES متنقل عندما تكون دقة C أو P أو S أو N مهمة.' },
      ],
      faq: [
        { q: 'هل XRF غير مدمر؟', a: 'نعم. يحدد كيمياء السبيكة دون قطع العينة.' },
        { q: 'متى أختار LIBS؟', a: 'عند أهمية عناصر خفيفة مثل Be أو Mg أو Al أو Si، أو عند تفضيل تجنب الإشعاع المؤين.' },
      ],
    },
    'aerospace-metal-analysis': {
      title: 'مطيافات تحليل السبائك الفضائية | JIEBO',
      description: 'OES وPMT OES وONH لدعم شهادات السبائك وتحليل العناصر النزرة وقياس O/N/H في التيتانيوم.',
      eyebrow: 'تطبيق · جودة الطيران',
      h1: 'تحليل المعادن الفضائية للعناصر النزرة وشهادات السبائك',
      intro: 'يحتاج موردو قطاع الطيران إلى بيانات كيميائية موثوقة للمواد الواردة ومراقبة العملية والتحقق النهائي.',
      buyerFit: ['تحليل التيتانيوم والنيكل والكوبالت والألومنيوم والصلب عالي المقاومة', 'العناصر النزرة والخفيفة عندما لا تكفي الأدوات المحمولة', 'مختبرات تحتاج إلى تكرارية للشهادات وتدقيق الموردين'],
      proof: ['يستهدف Noble T7 دقة أقل من 10 ppm.', 'يستخدم ONH-508 الانصهار في غاز خامل حتى 3000 C.'],
      recommended: [
        { name: 'Noble T7', href: '/products/noble-t7/', reason: 'OES CMOS بدرجة بحثية وبصريات ثابتة الحرارة.' },
        { name: 'ONH-508', href: '/products/onh-508/', reason: 'تحليل الأكسجين والنيتروجين والهيدروجين في التيتانيوم والسبائك الخاصة.' },
      ],
      faq: [
        { q: 'أي جهاز يقيس الأكسجين والنيتروجين في التيتانيوم؟', a: 'ONH-508 مصمم لقياس O وN وH في التيتانيوم والزركونيوم والصلب والنحاس وسبائك العناصر الأرضية النادرة.' },
        { q: 'أي OES يناسب مختبرات الطيران؟', a: 'Noble T7 هو الخيار الأفضل للعناصر النزرة وسير العمل المختبري المستقر.' },
      ],
    },
    'mining-ore-xrf-analyzer': {
      title: 'محلل XRF محمول للتعدين وتحليل الخام | JIEBO',
      description: 'محللات XRF محمولة للاستكشاف وفرز الخام وفحوصات الجيولوجيا الميدانية والتحليل العنصري من Ti إلى U.',
      eyebrow: 'تطبيق · XRF للتعدين',
      h1: 'محللات XRF المحمولة للتعدين والجيولوجيا وفرز الخام',
      intro: 'تستخدم فرق التعدين XRF المحمول لفرز الخام وتحديد اتجاهات التمعدن وترتيب أولوية العينات قبل تأكيد المختبر.',
      buyerFit: ['فرق جيولوجية تحتاج إلى فحص عنصري سريع', 'فرز الخام ومراقبة الدرجة', 'مختبرات تريد فحصاً أولياً قبل ICP أو الكيمياء الرطبة'],
      proof: ['تحليل ميداني يعمل بالبطارية.', 'خيارات نقل بيانات لاسلكية.', 'خبرة تصدير في أفريقيا وأمريكا اللاتينية وGCC وآسيا.'],
      recommended: [
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF محمول للتحليل الميداني من Ti إلى U.' },
        { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'LIBS محمول عند الحاجة إلى عناصر خفيفة.' },
        { name: 'XRF vs LIBS guide', href: '/learn/oes-vs-xrf-vs-libs/', reason: 'مقارنة تقنية لاختيار XRF أو LIBS أو OES.' },
      ],
      faq: [
        { q: 'هل يستبدل XRF المحمول تحاليل المختبر؟', a: 'لا. هو أفضل للفحص السريع وترتيب العينات؛ القيم النهائية تحتاج إلى تأكيد مختبري.' },
        { q: 'ما العناصر التي يقيسها؟', a: 'F6000 Pro مصمم لعناصر Ti إلى U حسب العينة والمعايرة والمصفوفة.' },
      ],
    },
    'india-oes-spectrometer-supplier': {
      title: 'مورد مطيافات OES للهند | JIEBO',
      description: 'تورّد JIEBO أجهزة OES ومحللات C/S وXRF/LIBS المحمولة للمسابك ومصانع الصلب ومختبرات المعادن في الهند.',
      eyebrow: 'دولة · الهند',
      h1: 'مورد مطيافات OES للمسابك ومختبرات المعادن في الهند',
      intro: 'يختار المشترون في الهند JIEBO عند الحاجة إلى دعم مباشر من المصنع ووثائق تصدير ورد هندسي سريع عبر واتساب.',
      buyerFit: ['مسابك تحتاج إلى QC بواسطة OES قرب الفرن', 'مصانع صلب وسبائك حديدية تقارن خيارات C/S', 'مستوردون يحتاجون إلى وثائق إنجليزية وجدول شحن واضح'],
      proof: ['شحن التكوينات المتوفرة خلال 15 يوم عمل.', 'دعم وثائق التصدير والخدمات اللوجستية.', 'متابعة هندسية باللغة الإنجليزية عبر واتساب.'],
      recommended: [
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'OES إنتاجي لعدة مصفوفات سبائك.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'محلل C/S عالي المستوى للمختبرات ذات الإنتاجية العالية.' },
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF محمول لفحص المواد الواردة والخردة.' },
      ],
      faq: [
        { q: 'هل تستطيع JIEBO الشحن إلى الهند؟', a: 'نعم. تدعم JIEBO الشحن الدولي ووثائق التصدير واختيار التكوين.' },
        { q: 'كيف أختار بين Exquis T4 وInnovate T5؟', a: 'Exquis T4 مناسب لمصفوفة واحدة؛ Innovate T5 أفضل لعدة عائلات سبائك وعمل العناصر النزرة.' },
      ],
    },
    'saudi-arabia-oes-spectrometer-supplier': {
      title: 'مورد مطيافات OES للسعودية | JIEBO',
      description: 'مطيافات OES ومحللات C/S وONH وأدوات XRF/LIBS المحمولة للمعدن وPMI والتصنيع والمختبرات في السعودية.',
      eyebrow: 'دولة · السعودية',
      h1: 'مورد مطيافات OES لمشتري تحليل المعادن في السعودية',
      intro: 'تدعم JIEBO العملاء في السعودية في جودة المسابك وتصنيع الصلب وPMI للنفط والغاز وسلاسل توريد الطيران والمختبرات.',
      buyerFit: ['مصنعون وفرق تفتيش يحتاجون PMI والتحقق من السبائك', 'مسابك تحتاج إلى C/S والعناصر الخفيفة', 'مختبرات تقارن OES وXRF وLIBS وC/S'],
      proof: ['خبرة في الشحن إلى أسواق GCC.', 'دعم وثائق CE/CB.', 'رد هندسي عبر واتساب لاختيار الموديل.'],
      recommended: [
        { name: 'Surpass F1', href: '/products/surpass-f1/', reason: 'OES متنقل لـ PMI الميداني والقطع الكبيرة.' },
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF محمول لتحديد السبائك بسرعة وبدون إتلاف.' },
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'OES للمصنع لمراقبة عدة مصفوفات.' },
      ],
      faq: [
        { q: 'هل تدعم JIEBO التوصيل إلى GCC؟', a: 'نعم. تنسق JIEBO وثائق التصدير والشحن الدولي.' },
        { q: 'أي محلل يناسب PMI في النفط والغاز؟', a: 'F6000 Pro مناسب لـ PMI سريع غير مدمر؛ Surpass F1 أفضل عند أهمية العناصر الخفيفة.' },
      ],
    },
    'south-africa-xrf-analyzer-supplier': {
      title: 'مورد محللات XRF لجنوب أفريقيا | JIEBO',
      description: 'XRF محمول وLIBS وOES للتعدين والخردة والمعادن في جنوب أفريقيا.',
      eyebrow: 'دولة · جنوب أفريقيا',
      h1: 'مورد محللات XRF للتعدين والخردة في جنوب أفريقيا',
      intro: 'يستخدم العملاء في جنوب أفريقيا محللات JIEBO المحمولة لفحص الخام وفرز الخردة وPMI للمعادن.',
      buyerFit: ['فرق تعدين تحتاج إلى فحص خام ميداني', 'ساحات خردة تفرز الستانلس والنحاس والنيكل والتيتانيوم', 'مختبرات معادن تضيف OES أو C/S للتأكيد'],
      proof: ['تصدير إلى أسواق أفريقية.', 'خيارات محمولة تعمل بالبطارية.', 'دعم قبل البيع عبر واتساب للتطبيق والمعايرة.'],
      recommended: [
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF محمول للسبائك والخام.' },
        { name: 'F7000 Pro', href: '/products/f7000-pro/', reason: 'LIBS محمول لبعض العناصر الخفيفة.' },
        { name: 'Noble T7', href: '/products/noble-t7/', reason: 'OES مختبري لتأكيد العناصر النزرة.' },
      ],
      faq: [
        { q: 'هل يمكن استخدام XRF المحمول في التعدين؟', a: 'نعم. يستخدم للفحص الميداني السريع وترتيب العينات قبل تأكيد المختبر.' },
        { q: 'هل توفر JIEBO أجهزة محمولة ومختبرية؟', a: 'نعم. توفر JIEBO XRF/LIBS محمول وOES متنقل وOES مكتبي ومحللات عناصر.' },
      ],
    },
    'brazil-carbon-sulfur-analyzer-supplier': {
      title: 'مورد محللات الكربون والكبريت للبرازيل | JIEBO',
      description: 'محللات C/S ومطيافات OES ومحللات معادن محمولة للمسابك ومصانع الصلب والمختبرات في البرازيل.',
      eyebrow: 'دولة · البرازيل',
      h1: 'مورد محللات الكربون والكبريت للمسابك ومصانع الصلب في البرازيل',
      intro: 'يمكن لمشتري المعادن في البرازيل استخدام محللات C/S وOES من JIEBO للحديد الزهر والصلب والسبائك الحديدية والجودة غير الحديدية.',
      buyerFit: ['مسابك تفحص الكربون والكبريت في الحديد الزهر', 'مختبرات صلب وسبائك حديدية تقارن C/S', 'مستوردون يحتاجون إلى دعم مصنع ووثائق'],
      proof: ['تصدير إلى البرازيل والمكسيك والأرجنتين.', 'النماذج المتوفرة يمكن شحنها خلال 15 يوم عمل.', 'دعم تطبيقات الصلب والحديد الزهر والسبائك الحديدية.'],
      recommended: [
        { name: 'CS995', href: '/products/cs995/', reason: 'محلل C/S ابتدائي لفحص QC الروتيني.' },
        { name: 'CS996', href: '/products/cs996/', reason: 'محلل C/S أرضي بنطاقات أوسع.' },
        { name: 'CS2020', href: '/products/cs2020/', reason: 'محلل C/S بأربع خلايا للإنتاجية العالية.' },
      ],
      faq: [
        { q: 'أي C/S يناسب مسبكاً في البرازيل؟', a: 'CS995 للروتين، CS996 لنطاقات أوسع، وCS2020 للمختبرات ذات الإنتاجية الأعلى.' },
        { q: 'هل توفر JIEBO وثائق التصدير؟', a: 'نعم. تدعم وثائق التصدير وشهادات CE/CB عند انطباقها والتنسيق اللوجستي الدولي.' },
      ],
    },
    'mexico-oes-spectrometer-supplier': {
      title: 'مورد مطيافات OES للمكسيك | JIEBO',
      description: 'مطيافات OES ومحللات معادن للمسابك وموردي السيارات وورش التصنيع والمختبرات في المكسيك.',
      eyebrow: 'دولة · المكسيك',
      h1: 'مورد مطيافات OES لقطاع السيارات والمسابك في المكسيك',
      intro: 'يستخدم المشترون في المكسيك OES والمحللات المحمولة من JIEBO لسلاسل توريد السيارات وجودة المسابك وفحص المواد الواردة والتصنيع المعدني.',
      buyerFit: ['موردو سيارات يفحصون الألومنيوم والصلب وسبائك النحاس', 'مسابك تحتاج إلى OES ومحللات C/S', 'فرق شراء تقارن أجهزة مستوردة مباشرة من المصنع'],
      proof: ['تصدير إلى المكسيك وأمريكا اللاتينية.', 'محتوى إنجليزي وإسباني متاح.', 'مسار عرض سعر سريع عبر واتساب مع توصية موديل.'],
      recommended: [
        { name: 'Exquis T4', href: '/products/exquis-t4/', reason: 'OES مكتبي مدمج لجودة المسابك.' },
        { name: 'Innovate T5', href: '/products/innovate-t5/', reason: 'OES متعدد المصفوفات لموردي السيارات.' },
        { name: 'F6000 Pro', href: '/products/f6000-pro/', reason: 'XRF محمول لفحص السبائك الواردة.' },
      ],
      faq: [
        { q: 'هل تدعم JIEBO العملاء في المكسيك؟', a: 'نعم. تصدر JIEBO إلى المكسيك وتدعم اختيار الموديل والوثائق والشحن.' },
        { q: 'أي OES يناسب موردي السيارات؟', a: 'Innovate T5 غالباً أفضل لعائلات السبائك المختلطة؛ Exquis T4 مناسب لسير عمل مسبك أبسط.' },
      ],
    },
  },
};

export function localizedLandingPage(page: LandingPageData, locale: Locale): LandingPageData {
  if (locale === 'en') return page;
  const translated = translations[locale]?.[page.slug];
  return {
    ...page,
    ...translated,
  };
}
