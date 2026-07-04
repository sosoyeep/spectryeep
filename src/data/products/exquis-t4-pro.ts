import type { ProductRecord } from './_types';

// Specs source: official factory page (wxjiebo.com Exquis T4 Pro) + factory PDF datasheet, 2026-07
export const product: ProductRecord = {
  slug: 'exquis-t4-pro',
  name: {
    en: 'Exquis T4 Pro Optical Emission Spectrometer',
    ru: 'Exquis T4 Pro — оптико-эмиссионный спектрометр',
    es: 'Exquis T4 Pro — espectrómetro de emisión óptica',
    ar: 'Exquis T4 Pro — مطياف الانبعاث الضوئي',
  },
  sku: 'JIEBO-T4-PRO',
  category: 'oes',
  image: '/products/exquis-t4-pro.jpg',
  specs: [
    { labelKey: 'optical_system', value: 'Paschen-Runge Rowland circle, full-spectrum sealed-cycle argon chamber' },
    { labelKey: 'detector', value: 'Low-noise 4096-pixel CMOS array, direct deep-UV response (no coating)' },
    { labelKey: 'light_source', value: 'Digital source with high-energy pre-spark (HEPS), 100–1000 Hz, max 400 A' },
    { labelKey: 'matrices', value: 'Fe, Al, Cu, Ni, Co, Mg, Ti, Zn, Pb, Sn, Ag' },
    { labelKey: 'uv_elements', value: 'N, C, S, P, B, As' },
    { labelKey: 'analyzing_time', value: '~20 s per sample (matrix-dependent)' },
    { labelKey: 'argon', value: 'Tungsten jet electrode, 4 mm gap; ~3.5 L/min at excitation, ~0.1 L/min standby' },
    { labelKey: 'power', value: 'AC 220 V / 50–60 Hz, 400 W' },
    { labelKey: 'dimensions', value: '530 × 660 × 350 mm' },
    { labelKey: 'weight', value: '≈47 kg' },
  ],
  overview: {
    en: 'The Exquis T4 Pro is the production mainstay of the T4 series: a benchtop spark OES built around a full-spectrum sealed-cycle argon optical chamber and a 4096-pixel low-noise CMOS array with direct deep-UV response — no coating needed for N, C, S, P, B and As. Its patented digital excitation source with high-energy pre-spark reaches 1000 Hz and auto-matches spark conditions to the matrix, while whole-chamber thermal control holds ±0.1 °C and cold start takes about 30 minutes. Smart curve switching selects the best analytical lines per sample and identifies the alloy grade automatically. With eleven base matrices from Fe to Ag, it covers multi-alloy foundries and processing plants in one instrument.',
    ru: 'Exquis T4 Pro — рабочая лошадка серии T4: настольный искровой ОЭС-спектрометр с полноспектральной оптической камерой с замкнутой циркуляцией аргона и малошумной CMOS-матрицей на 4096 пикселей с прямым откликом в глубоком УФ — N, C, S, P, B и As анализируются без напыления. Запатентованный цифровой источник возбуждения с высокоэнергетическим предобжигом работает до 1000 Гц и автоматически подбирает условия искры под матрицу; термостабилизация всей камеры держит ±0,1 °C, холодный старт — около 30 минут. Интеллектуальное переключение кривых само выбирает лучшие аналитические линии и автоматически определяет марку сплава. Одиннадцать базовых матриц от Fe до Ag покрывают многосплавные литейные и обрабатывающие производства одним прибором.',
    es: 'El Exquis T4 Pro es el caballo de batalla de la serie T4: un OES de chispa de sobremesa construido en torno a una cámara óptica de espectro completo con circulación cerrada de argón y una matriz CMOS de bajo ruido de 4096 píxeles con respuesta directa en UV profundo — N, C, S, P, B y As se analizan sin recubrimiento. Su fuente de excitación digital patentada con pre-chispa de alta energía alcanza 1000 Hz y ajusta automáticamente las condiciones de chispa a la matriz; el control térmico integral mantiene ±0,1 °C y el arranque en frío toma unos 30 minutos. El cambio inteligente de curvas selecciona las mejores líneas analíticas e identifica el grado de aleación automáticamente. Con once matrices base de Fe a Ag, cubre fundiciones y plantas multi-aleación con un solo equipo.',
    ar: 'جهاز Exquis T4 Pro هو العمود الفقري الإنتاجي لسلسلة T4: مطياف انبعاث ضوئي بالشرارة مكتبي مبني حول غرفة بصرية كاملة الطيف بدورة أرغون مغلقة ومصفوفة CMOS منخفضة الضوضاء بدقة 4096 بكسل ذات استجابة مباشرة في الأشعة فوق البنفسجية العميقة — تُحلَّل N و C و S و P و B و As دون طلاء. يعمل مصدر الإثارة الرقمي الحاصل على براءة اختراع مع الاحتراق المسبق عالي الطاقة حتى 1000 هرتز ويطابق ظروف الشرارة مع المصفوفة تلقائياً؛ ويحافظ التحكم الحراري الشامل على ±0.1 درجة مئوية، ويستغرق بدء التشغيل البارد نحو 30 دقيقة. يختار التبديل الذكي للمنحنيات أفضل الخطوط التحليلية ويحدّد درجة السبيكة تلقائياً. بإحدى عشرة مصفوفة أساسية من Fe إلى Ag، يغطي مسابك ومصانع المعالجة متعددة السبائك بجهاز واحد.',
  },
  applications: {
    en: [
      'Multi-alloy foundries — one instrument across Fe, Al, Cu, Ni, Co, Mg, Ti, Zn, Pb, Sn, Ag',
      'Metal fabrication and processing — grade verification with automatic alloy ID',
      'Third-party testing laboratories — routine certification work on mixed sample streams',
      'Aerospace and new-material development — non-metallic elements (N, C, S, P, B, As) in one run',
      'Incoming-material inspection — ~20 s per sample keeps goods-in moving',
    ],
    ru: [
      'Многосплавные литейные производства — один прибор для Fe, Al, Cu, Ni, Co, Mg, Ti, Zn, Pb, Sn, Ag',
      'Металлообработка — проверка марки с автоматическим определением сплава',
      'Независимые испытательные лаборатории — рутинная сертификация смешанных потоков образцов',
      'Аэрокосмическая отрасль и разработка новых материалов — неметаллы (N, C, S, P, B, As) за один анализ',
      'Входной контроль материалов — около 20 с на образец не задерживает приёмку',
    ],
    es: [
      'Fundiciones multi-aleación — un solo equipo para Fe, Al, Cu, Ni, Co, Mg, Ti, Zn, Pb, Sn, Ag',
      'Fabricación y procesamiento de metales — verificación de grado con identificación automática de aleación',
      'Laboratorios de ensayo independientes — certificación rutinaria de muestras mixtas',
      'Aeroespacial y desarrollo de nuevos materiales — no metálicos (N, C, S, P, B, As) en un solo análisis',
      'Inspección de materia prima — ~20 s por muestra mantiene la recepción en movimiento',
    ],
    ar: [
      'المسابك متعددة السبائك — جهاز واحد لـ Fe و Al و Cu و Ni و Co و Mg و Ti و Zn و Pb و Sn و Ag',
      'تصنيع المعادن ومعالجتها — التحقق من الدرجة مع تحديد تلقائي للسبيكة',
      'مختبرات الفحص المستقلة — أعمال الاعتماد الروتينية لتدفقات عينات مختلطة',
      'الطيران وتطوير المواد الجديدة — العناصر غير المعدنية (N و C و S و P و B و As) في تحليل واحد',
      'فحص المواد الواردة — نحو 20 ثانية لكل عينة تُبقي الاستلام متحركاً',
    ],
  },
  faq: {
    en: [
      { q: 'What does the Pro add over the standard Exquis T4?', a: 'Three things: matrix breadth (11 base matrices vs 4 — adding Ni, Co, Mg, Ti, Pb, Sn, Ag), a patented HEPS digital source reaching 1000 Hz with automatic spark matching and alloy-grade ID, and tighter thermal control (±0.1 °C whole-chamber stabilization). The T4 remains the lighter (33 kg vs ~47 kg) budget choice for single-matrix QC.' },
      { q: 'Can it analyze nitrogen and other non-metallic elements?', a: 'Yes. The sealed argon chamber plus the coating-free deep-UV CMOS response cover N, C, S, P, B and As directly — the elements that decide steel and cast-iron quality.' },
      { q: 'How fast is a routine analysis?', a: 'About 20 seconds per sample depending on matrix, with roughly a 30-minute cold start thanks to the full-coverage heating design. Standby argon consumption is ~0.1 L/min.' },
      { q: 'What is the lead time and warranty?', a: '15 working days for in-stock configurations. 12-month parts-and-labor warranty, optional 24-month extension.' },
    ],
    ru: [
      { q: 'Что даёт версия Pro по сравнению с обычным Exquis T4?', a: 'Три вещи: широта матриц (11 базовых против 4 — добавлены Ni, Co, Mg, Ti, Pb, Sn, Ag), запатентованный цифровой источник HEPS до 1000 Гц с автоподбором искры и определением марки сплава, и более жёсткая термостабилизация (±0,1 °C по всей камере). T4 остаётся более лёгким (33 кг против ~47 кг) бюджетным выбором для одноматричного контроля.' },
      { q: 'Анализирует ли прибор азот и другие неметаллы?', a: 'Да. Закрытая аргоновая камера и CMOS-отклик в глубоком УФ без напыления покрывают N, C, S, P, B и As напрямую — элементы, определяющие качество стали и чугуна.' },
      { q: 'Сколько длится рутинный анализ?', a: 'Около 20 секунд на образец в зависимости от матрицы; холодный старт — примерно 30 минут благодаря полному охвату нагрева. Расход аргона в режиме ожидания ~0,1 л/мин.' },
      { q: 'Срок поставки и гарантия?', a: '15 рабочих дней для складских конфигураций. Гарантия 12 месяцев на запчасти и работу, продление до 24 месяцев опционально.' },
    ],
    es: [
      { q: '¿Qué añade el Pro frente al Exquis T4 estándar?', a: 'Tres cosas: amplitud de matrices (11 base frente a 4 — añade Ni, Co, Mg, Ti, Pb, Sn, Ag), una fuente digital HEPS patentada de hasta 1000 Hz con ajuste automático de chispa e identificación de grado, y control térmico más estricto (±0,1 °C en toda la cámara). El T4 sigue siendo la opción ligera (33 kg frente a ~47 kg) y económica para QC monomatriz.' },
      { q: '¿Analiza nitrógeno y otros elementos no metálicos?', a: 'Sí. La cámara sellada de argón y la respuesta CMOS en UV profundo sin recubrimiento cubren N, C, S, P, B y As directamente — los elementos que deciden la calidad del acero y la fundición.' },
      { q: '¿Cuánto tarda un análisis rutinario?', a: 'Unos 20 segundos por muestra según la matriz, con arranque en frío de ~30 minutos gracias al calentamiento de cobertura total. Consumo de argón en espera: ~0,1 L/min.' },
      { q: '¿Plazo y garantía?', a: '15 días hábiles para configuraciones en stock. Garantía de 12 meses en piezas y mano de obra, ampliable a 24 meses.' },
    ],
    ar: [
      { q: 'ما الذي يضيفه إصدار Pro مقارنةً بـ Exquis T4 القياسي؟', a: 'ثلاثة أمور: اتساع المصفوفات (11 مصفوفة أساسية مقابل 4 — بإضافة Ni و Co و Mg و Ti و Pb و Sn و Ag)، ومصدر رقمي HEPS حاصل على براءة اختراع يصل إلى 1000 هرتز مع مطابقة تلقائية للشرارة وتحديد درجة السبيكة، وتحكّم حراري أدق (±0.1 درجة مئوية للغرفة كاملة). يبقى T4 الخيار الأخف (33 كغ مقابل نحو 47 كغ) والاقتصادي لضبط الجودة أحادي المصفوفة.' },
      { q: 'هل يحلّل النيتروجين والعناصر غير المعدنية الأخرى؟', a: 'نعم. تغطي غرفة الأرغون المغلقة واستجابة CMOS في الأشعة فوق البنفسجية العميقة دون طلاء العناصر N و C و S و P و B و As مباشرةً — وهي العناصر التي تحدّد جودة الفولاذ والحديد الزهر.' },
      { q: 'كم يستغرق التحليل الروتيني؟', a: 'نحو 20 ثانية لكل عينة حسب المصفوفة، مع بدء تشغيل بارد يستغرق نحو 30 دقيقة بفضل تصميم التسخين الشامل. استهلاك الأرغون في وضع الاستعداد نحو 0.1 لتر/دقيقة.' },
      { q: 'ما مدّة التسليم والضمان؟', a: '15 يوم عمل للتكوينات المتوفّرة في المخزون. ضمان 12 شهراً على القطع واليد العاملة، قابل للتمديد إلى 24 شهراً.' },
    ],
  },
};
