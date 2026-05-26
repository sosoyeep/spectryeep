import type { ProductRecord } from './_types';

export const product: ProductRecord = {
  slug: 'surpass-f1',
  name: {
    en: 'Surpass F1 Mobile Optical Emission Spectrometer',
    ru: 'Surpass F1 — мобильный оптико-эмиссионный спектрометр',
    es: 'Surpass F1 — espectrómetro de emisión óptica móvil',
    ar: 'Surpass F1 — مطياف الانبعاث الضوئي المحمول',
  },
  sku: 'JIEBO-F1',
  category: 'oes',
  image: '/products/surpass-f1.jpg',
  specs: [
    { labelKey: 'optical_system', value: 'Paschen-Runge mounting, modified for portable probe' },
    { labelKey: 'focal_length', value: 'UV 350 mm + Visible 401 mm (2400 lines/mm both)' },
    { labelKey: 'dispersion', value: '0.7 nm/mm' },
    { labelKey: 'wavelength', value: '160–425 nm' },
    { labelKey: 'uv_elements', value: 'C, P, S, B, As, Sn, Se, N' },
    { labelKey: 'os', value: 'Windows 7 / 8 / 10 / 11' },
    { labelKey: 'argon', value: '≥ 99.999 % (5N)' },
    { labelKey: 'power', value: '110 / 230 V, 50 / 60 Hz' },
    { labelKey: 'battery', value: 'Built-in lithium battery, 600 continuous tests wireless' },
    { labelKey: 'dimensions', value: '400 × 280 × 600 mm' },
    { labelKey: 'weight', value: '45 kg (incl. battery)' },
  ],
  overview: {
    en: 'The Surpass F1 is a cart-mounted mobile spark optical emission spectrometer for on-site reliability testing of metal materials. With a built-in lithium battery and argon cylinder, it brings the analysis to large or fixed components that cannot be cut for the lab — scrap-yard incoming inspection, in-service pipework, reinforcing bars, and oversized castings.',
    ru: 'Surpass F1 — мобильный искровой ОЭС-спектрометр на тележке для контроля надёжности металла на месте. Встроенный литиевый аккумулятор и баллон аргона позволяют переносить анализ к крупным или стационарным деталям, которые нельзя срезать в лабораторию — приёмка лома, трубопроводы в эксплуатации, арматура и крупногабаритные отливки.',
    es: 'El Surpass F1 es un espectrómetro de emisión óptica móvil sobre carro para pruebas de confiabilidad in situ de materiales metálicos. Con batería de litio y cilindro de argón integrados, lleva el análisis a componentes grandes o fijos que no se pueden cortar para el laboratorio — recepción de chatarra, tuberías en servicio, varillas y piezas fundidas sobredimensionadas.',
    ar: 'الجهاز Surpass F1 مطياف انبعاث ضوئي متنقّل على عربة لاختبار موثوقية المواد المعدنية في الموقع. مع بطارية ليثيوم مدمجة وأسطوانة أرغون، ينقل التحليل إلى القطع الكبيرة أو الثابتة التي يتعذّر قطعها لإحضارها إلى المختبر — استلام الخردة وشبكات الأنابيب أثناء الخدمة وقضبان التسليح ومصبوبات ضخمة الأبعاد.',
  },
  applications: {
    en: [
      'Scrap-yard grade sorting — fast incoming inspection of mixed metals',
      'In-service pipework and pressure vessels — PMI (positive material identification) without cutting',
      'Reinforcing-bar and structural-steel verification on construction sites',
      'Large castings, forgings and components that cannot reach the lab',
      'Field service for OES warranty and calibration follow-up',
    ],
    ru: [
      'Сортировка лома — быстрый входной контроль смешанных металлов',
      'Контроль действующих трубопроводов и сосудов давления — PMI без разрезания',
      'Проверка арматуры и конструкционной стали на стройплощадках',
      'Крупные отливки, поковки и компоненты, не доставляемые в лабораторию',
      'Выездной сервис: проверка ОЭС по гарантии и контроль калибровки',
    ],
    es: [
      'Patios de chatarra — clasificación rápida de metales mezclados',
      'Tuberías y recipientes a presión en servicio — PMI sin cortar',
      'Verificación de varillas y aceros estructurales en obra',
      'Piezas fundidas, forjadas y componentes grandes que no llegan al laboratorio',
      'Servicio de campo: verificación OES por garantía y seguimiento de calibración',
    ],
    ar: [
      'فرز الخردة في الساحات — فحص سريع للوارد المختلط',
      'فحص الأنابيب والأوعية المضغوطة أثناء الخدمة — تعريف المواد (PMI) دون قطع',
      'فحص قضبان التسليح والصلب الإنشائي في مواقع البناء',
      'القطع المصبوبة والمطروقة والمكوّنات الكبيرة التي لا يمكن نقلها إلى المختبر',
      'الخدمة الميدانية لفحص الضمان ومتابعة المعايرة',
    ],
  },
  faq: {
    en: [
      { q: 'How long can it run on the built-in battery?', a: 'Up to 600 continuous tests in wireless mode per charge. Charging time is approximately 3–4 hours for a full cycle.' },
      { q: 'Does it really measure non-metallic elements on-site?', a: 'Yes. The modified UV optics dedicate a 350 mm channel to the UV region for C, P, S, B, As, Sn, Se and N — the elements handheld XRF cannot quantify.' },
      { q: 'How does Surpass F1 compare to a handheld XRF like the F6000 Pro?', a: 'F6000 Pro (XRF) is non-destructive, gun-form, identifies alloy grade fast — but cannot measure carbon. Surpass F1 (mobile OES) is destructive on a small spark mark but does measure C, P, S, B reliably. Use XRF for fast sorting; use F1 when grade certification requires carbon.' },
      { q: 'What argon flow does field operation require?', a: 'Argon 99.999 % (5N) via the built-in cylinder. Optical-chamber cyclic argon filling reduces consumption versus traditional open-flow probes.' },
    ],
    ru: [
      { q: 'Сколько работает от встроенного аккумулятора?', a: 'До 600 непрерывных измерений на одной зарядке в беспроводном режиме. Полный цикл зарядки — около 3–4 часов.' },
      { q: 'Действительно ли работает по неметаллам на месте?', a: 'Да. Модифицированная УФ-оптика выделяет канал 350 мм для УФ-области (C, P, S, B, As, Sn, Se, N) — элементов, которые ручной РФА количественно не определяет.' },
      { q: 'Чем Surpass F1 отличается от ручного РФА (F6000 Pro)?', a: 'F6000 Pro (РФА) неразрушающий, в форме пистолета, быстро определяет марку — но не измеряет углерод. Surpass F1 (мобильный ОЭС) оставляет небольшой искровой след, но надёжно измеряет C, P, S, B. РФА — для быстрой сортировки; F1 — когда сертификация требует углерода.' },
      { q: 'Какой расход аргона в полевых условиях?', a: 'Аргон 99.999 % (5N) из встроенного баллона. Циклическое заполнение оптической камеры снижает расход по сравнению с обычными зондами с открытым потоком.' },
    ],
    es: [
      { q: '¿Cuánto dura la batería integrada?', a: 'Hasta 600 pruebas continuas en modo inalámbrico por carga. Tiempo de carga: aproximadamente 3–4 horas para un ciclo completo.' },
      { q: '¿De verdad mide elementos no metálicos en sitio?', a: 'Sí. La óptica UV modificada dedica un canal de 350 mm a la región UV para C, P, S, B, As, Sn, Se y N — elementos que el XRF portátil no cuantifica.' },
      { q: '¿Cómo se compara el Surpass F1 con un XRF portátil como el F6000 Pro?', a: 'El F6000 Pro (XRF) no es destructivo, en forma de pistola, identifica grado rápido — pero no mide carbono. El Surpass F1 (OES móvil) deja una marca de chispa pequeña pero mide C, P, S, B de forma fiable. XRF para clasificación rápida; F1 cuando la certificación requiere carbono.' },
      { q: '¿Qué caudal de argón requiere el uso en campo?', a: 'Argón 99.999 % (5N) desde el cilindro integrado. El llenado cíclico de la cámara óptica reduce el consumo frente a sondas tradicionales de flujo abierto.' },
    ],
    ar: [
      { q: 'كم تدوم البطارية المدمجة؟', a: 'حتى 600 اختبار متواصل في وضع لاسلكي لكل شحنة. زمن الشحن الكامل نحو 3 إلى 4 ساعات.' },
      { q: 'هل يقيس فعلاً العناصر غير المعدنية في الموقع؟', a: 'نعم. تخصّص البصريات المعدّلة قناة 350 ملم لمنطقة الأشعة فوق البنفسجية لقياس C و P و S و B و As و Sn و Se و N — وهي عناصر لا يقيسها XRF المحمول كميّاً.' },
      { q: 'كيف تتمّ المقارنة بين Surpass F1 وجهاز XRF محمول مثل F6000 Pro؟', a: 'الجهاز F6000 Pro (XRF) غير متلف، بشكل مسدّس، يحدّد درجة السبيكة بسرعة — لكنّه لا يقيس الكربون. أمّا Surpass F1 (OES متنقّل) فيترك أثر شرارة صغيرة لكنّه يقيس C و P و S و B بصورة موثوقة. استخدم XRF للفرز السريع، واستخدم F1 عندما يتطلّب الاعتماد قياس الكربون.' },
      { q: 'ما تدفّق الأرغون أثناء التشغيل الميداني؟', a: 'أرغون 99.999 % (5N) من الأسطوانة المدمجة. تعبئة الغرفة البصرية بشكل دوري تقلّل الاستهلاك مقارنةً بالمسبر التقليدي ذي التدفّق المفتوح.' },
    ],
  },
};
