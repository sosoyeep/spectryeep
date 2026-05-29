// Site facts mirror for Pages Functions (runtime can't import src/consts.ts).
// Keep in sync with src/consts.ts when contact details or the product list change.
export const SITE = {
  brand: 'JIEBO Instrument',
  legalName: 'Wuxi Jiebo Instrument Technology Co., Ltd.',
  domain: 'spectryeep.com',
  whatsapp: '8618118915721',
  wechat: '+86 181 1891 5721',
  phone: '+86-510-83211967',
  email: 'sophia@wxjiebo.cc',
  // China business hours used in the response-time promise.
  businessHours: 'Mon–Sat, 09:00–18:00 (GMT+8)',
};

// Compact product knowledge used by template replies and as AI grounding context.
export const PRODUCTS = [
  { sku: 'JIEBO-T4', name: 'Exquis T4 Optical Emission Spectrometer', short: 'Sealed-cycle CMOS benchtop OES, 50+ elements, 33 kg' },
  { sku: 'JIEBO-T5', name: 'Innovate T5 Optical Emission Spectrometer', short: 'Vacuum-chamber full-spectrum CMOS OES with Hamamatsu detectors, 78 kg' },
  { sku: 'JIEBO-T7', name: 'Noble T7 Optical Emission Spectrometer', short: 'Research-grade CMOS OES with constant-temp chamber, accuracy <10 ppm' },
  { sku: 'JIEBO-JB750', name: 'JB-750 Optical Emission Spectrometer', short: 'PMT vacuum-chamber flagship OES with 750 mm focal length, 256 kg' },
  { sku: 'JIEBO-F1', name: 'Surpass F1 Mobile Optical Emission Spectrometer', short: 'Cart-mounted mobile OES with built-in battery and argon cylinder' },
  { sku: 'JIEBO-CS2020', name: 'CS2020 High-frequency Infrared Carbon & Sulfur Analyzer', short: 'Four-cell C/S analyzer with auto cleaning, 200+ maintenance-free cycles' },
  { sku: 'JIEBO-CS995', name: 'CS995 Carbon & Sulfur Analyzer', short: 'Bench-type high-frequency infrared C/S analyzer, 115 kg' },
  { sku: 'JIEBO-CS996', name: 'CS996 Carbon & Sulfur Analyzer', short: 'Floor-type high-frequency infrared C/S analyzer with expandable cells' },
  { sku: 'JIEBO-ONH508', name: 'ONH-508 Oxygen, Nitrogen & Hydrogen Analyzer', short: 'Inert-gas-fusion O/N/H analyzer for steel, rare earth, copper, titanium' },
  { sku: 'JIEBO-F6000', name: 'F6000 Pro Handheld XRF Analyzer', short: 'Si-PIN handheld XRF, Ti to U, 8-hour battery, WiFi/BT' },
  { sku: 'JIEBO-F7000', name: 'F7000 Pro Handheld LIBS Analyzer', short: 'Class 3B laser LIBS, sub-second analysis, 1.25 kg handheld' },
];

export function productKnowledge() {
  return PRODUCTS.map((p) => `- ${p.name} (${p.sku}): ${p.short}`).join('\n');
}

export function whatsappLink() {
  return `https://wa.me/${SITE.whatsapp}`;
}
