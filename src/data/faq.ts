import type { Locale } from '../consts';

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQ_GENERAL: Record<Locale, FAQItem[]> = {
  en: [
    {
      q: 'What is an Optical Emission Spectrometer (OES)?',
      a: 'An OES analyzes the elemental composition of solid metals by generating a spark on the sample surface. The emitted light is split into wavelengths, and each wavelength corresponds to a specific element. JIEBO manufactures five OES models — from the 33 kg benchtop <a href="/products/exquis-t4/">Exquis T4</a> to the research-grade <a href="/products/noble-t7/">Noble T7</a>.',
    },
    {
      q: 'How does OES compare to XRF and LIBS?',
      a: 'OES delivers the best accuracy for light elements (C, S, P, B, N) in metals, which XRF cannot detect. LIBS is fast and portable but less precise. XRF is non-destructive and covers Ti–U. For a full comparison, see our <a href="/learn/oes-vs-xrf-vs-libs/">OES vs XRF vs LIBS guide</a>.',
    },
    {
      q: 'Which JIEBO spectrometer should I choose?',
      a: 'It depends on your matrices, detection limits, and environment: the <a href="/products/exquis-t4/">Exquis T4</a> is ideal for single-matrix foundry QC; the <a href="/products/innovate-t5/">Innovate T5</a> handles 10 base matrices for production floors; the <a href="/products/noble-t7/">Noble T7</a> suits research labs needing &lt;10 ppm accuracy; and the <a href="/products/surpass-f1/">Surpass F1</a> is our mobile unit for scrapyards and field PMI. Our <a href="/learn/how-to-choose-oes-spectrometer/">buyer\'s guide</a> walks through the decision.',
    },
    {
      q: 'What is the delivery time?',
      a: 'Stock configurations ship within 15 working days. The ONH-508 requires 30 days for custom builds. We handle export documentation, CE/CB certificates, and door-to-door logistics worldwide.',
    },
    {
      q: 'What warranty does JIEBO offer?',
      a: '12 months standard parts-and-labor warranty, with an optional extension to 24 months. Our engineers provide WhatsApp support — calibration help, application advice, and troubleshooting within 4 working hours.',
    },
    {
      q: 'Do you ship internationally?',
      a: 'Yes. JIEBO exports to 40+ countries, including Russia, Kazakhstan, Saudi Arabia, Egypt, Nigeria, South Africa, Brazil, Mexico, Argentina, Spain, India, Pakistan, Vietnam, and Australia. We handle customs clearance and international logistics.',
    },
    {
      q: 'What is a Carbon & Sulfur Analyzer?',
      a: 'A C/S analyzer determines carbon and sulfur content in metals by high-frequency combustion and infrared absorption. JIEBO offers three models: the entry-level <a href="/products/cs995/">CS995</a>, the expandable <a href="/products/cs996/">CS996</a>, and the high-end <a href="/products/cs2020/">CS2020</a> with four detection cells and auto-cleaning.',
    },
    {
      q: 'Can I analyze oxygen, nitrogen, and hydrogen in metals?',
      a: 'Yes. The <a href="/products/onh-508/">ONH-508</a> uses inert-gas fusion at up to 3000 °C to measure O, N, and H in steel, titanium, zirconium, copper, and rare-earth alloys. Detection limits: O 0.5 ppm, N 0.5 ppm, H 0.2 ppm.',
    },
    {
      q: 'What is the difference between handheld XRF and LIBS?',
      a: 'The <a href="/products/f6000-pro/">F6000 Pro XRF</a> uses X-ray fluorescence (Ti to U) — excellent for alloy ID and precious metals. The <a href="/products/f7000-pro/">F7000 Pro LIBS</a> uses laser-induced breakdown spectroscopy and can detect light elements (Be, Mg, Al, Si) that XRF cannot, with no ionizing radiation.',
    },
    {
      q: 'How do I contact JIEBO?',
      a: 'The fastest way is <a href="https://wa.me/8618118915721" target="_blank" rel="noopener">WhatsApp</a> — our engineers answer most messages within 4 working hours. You can also email <a href="mailto:info@spectryeep.com">info@spectryeep.com</a> or send the details through our <a href="/contact/">contact form</a>. Office hours are Mon–Fri 8:30–17:30 CST.',
    },
  ],
  ru: [
    {
      q: 'Что такое оптический эмиссионный спектрометр (ОЭС)?',
      a: 'ОЭС анализирует элементный состав твёрдых металлов, генерируя искру на поверхности образца. Излучённый свет разделяется на длины волн, каждая из которых соответствует определённому элементу. JIEBO производит пять моделей ОЭС — от настольного <a href="/ru/products/exquis-t4/">Exquis T4</a> (33 кг) до исследовательского <a href="/ru/products/noble-t7/">Noble T7</a>.',
    },
    {
      q: 'Чем ОЭС отличается от XRF и LIBS?',
      a: 'ОЭС обеспечивает наилучшую точность для лёгких элементов (C, S, P, B, N) в металлах, которые XRF не может обнаружить. LIBS быстрый и портативный, но менее точный. Подробнее: <a href="/ru/learn/oes-vs-xrf-vs-libs/">Сравнение ОЭС, XRF и LIBS</a>.',
    },
    {
      q: 'Какой спектрометр JIEBO мне подойдёт?',
      a: '<a href="/ru/products/exquis-t4/">Exquis T4</a> — для литейного контроля одной матрицы; <a href="/ru/products/innovate-t5/">Innovate T5</a> — 10 базовых матриц для производства; <a href="/ru/products/noble-t7/">Noble T7</a> — для исследовательских лабораторий; <a href="/ru/products/surpass-f1/">Surpass F1</a> — мобильный для полевой работы.',
    },
    {
      q: 'Каковы сроки доставки?',
      a: 'Стандартные конфигурации отправляются в течение 15 рабочих дней. ONH-508 — 30 дней. Мы оформляем экспортную документацию и доставку до двери.',
    },
    {
      q: 'Какая гарантия?',
      a: '12 месяцев стандартной гарантии на запчасти и работу, с возможностью продления до 24 месяцев. Поддержка инженеров через WhatsApp.',
    },
  ],
  es: [
    {
      q: '¿Qué es un espectrómetro de emisión óptica (OES)?',
      a: 'Un OES analiza la composición elemental de metales sólidos generando una chispa en la superficie de la muestra. JIEBO fabrica cinco modelos OES — desde el compacto <a href="/es/products/exquis-t4/">Exquis T4</a> (33 kg) hasta el <a href="/es/products/noble-t7/">Noble T7</a> de grado investigación.',
    },
    {
      q: '¿Cuál es la diferencia entre OES, XRF y LIBS?',
      a: 'OES ofrece la mejor precisión para elementos ligeros (C, S, P, B, N). XRF no puede detectarlos. LIBS es rápido pero menos preciso. Consulte nuestra <a href="/es/learn/oes-vs-xrf-vs-libs/">guía de comparación</a>.',
    },
    {
      q: '¿Cuál espectrómetro JIEBO debo elegir?',
      a: '<a href="/es/products/exquis-t4/">Exquis T4</a> para fundición; <a href="/es/products/innovate-t5/">Innovate T5</a> para producción; <a href="/es/products/noble-t7/">Noble T7</a> para laboratorios; <a href="/es/products/surpass-f1/">Surpass F1</a> para campo.',
    },
    {
      q: '¿Cuáles son los plazos de entrega?',
      a: 'Configuraciones estándar en 15 días hábiles. ONH-508 en 30 días. Gestionamos documentación de exportación y logística puerta a puerta.',
    },
    {
      q: '¿Qué garantía ofrece JIEBO?',
      a: '12 meses de garantía estándar, extensible a 24 meses. Soporte de ingenieros por WhatsApp en menos de 4 horas.',
    },
  ],
  ar: [
    {
      q: 'ما هو مطياف الانبعاث الضوئي (OES)؟',
      a: 'يحلل OES التركيب العنصري للمعادن الصلبة عن طريق توليد شرارة على سطح العينة. تنتج JIEBO خمسة نماذج — من <a href="/ar/products/exquis-t4/">Exquis T4</a> المكتبي (33 كجم) إلى <a href="/ar/products/noble-t7/">Noble T7</a> البحثي.',
    },
    {
      q: 'ما الفرق بين OES و XRF و LIBS؟',
      a: 'يوفر OES أفضل دقة للعناصر الخفيفة (C, S, P, B, N) التي لا يمكن لـ XRF اكتشافها. LIBS سريع لكن أقل دقة. راجع <a href="/ar/learn/oes-vs-xrf-vs-libs/">دليل المقارنة</a>.',
    },
    {
      q: 'ما هي مدة التسليم؟',
      a: 'التكوينات القياسية خلال 15 يوم عمل. ONH-508 خلال 30 يومًا. نتولى وثائق التصدير والشحن حتى باب المستلم.',
    },
    {
      q: 'ما هي شروط الضمان؟',
      a: '12 شهرًا ضمان قياسي قابل للتمديد إلى 24 شهرًا. دعم فني عبر واتساب في أقل من 4 ساعات عمل.',
    },
  ],
};
