import type { ProductRecord } from './_types';

export const product: ProductRecord = {
  slug: 'cs996',
  name: {
    en: 'CS996 Carbon & Sulfur Analyzer',
    ru: 'CS996 — анализатор углерода и серы',
    es: 'CS996 — analizador de carbono y azufre',
    ar: 'CS996 — محلّل الكربون والكبريت',
  },
  sku: 'JIEBO-CS996',
  category: 'elemental',
  image: '/products/cs996.jpg',
  specs: [
    { labelKey: 'detection_range', value: 'C 0.0001–10.0000 %; S 0.0001–2.0000 %' },
    { labelKey: 'detection_cell', value: 'One carbon + one sulfur pool (expandable to low-carbon / high-sulfur cells)' },
    { labelKey: 'furnace_power', value: '2.5 kW' },
    { labelKey: 'analyzing_time', value: 'Typically 30–60 seconds' },
    { labelKey: 'power', value: 'AC 220 V / 50 Hz' },
    { labelKey: 'dimensions', value: '1360 × 610 × 770 mm and 680 × 510 × 1260 mm (operating table layout)' },
    { labelKey: 'weight', value: '215 kg' },
  ],
  overview: {
    en: 'The CS996 is a floor-standing high-frequency infrared carbon and sulfur analyzer with an operating-table layout that integrates the detector, vertical furnace and balance in one workstation. Wider detection range (down to 0.0001 %) and expandable cells make it suited to plants running mixed-grade workloads — from ultra-low-carbon steel to high-carbon cast iron — on the same instrument.',
    ru: 'CS996 — напольный высокочастотный ИК-анализатор углерода и серы в исполнении «рабочий стол», объединяющий детектор, вертикальную печь и весы в одной рабочей станции. Более широкий диапазон (до 0,0001 %) и расширяемые ячейки делают его подходящим для производств со смешанной номенклатурой марок — от низкоуглеродистой стали до высокоуглеродистого чугуна на одном приборе.',
    es: 'El CS996 es un analizador de carbono y azufre por infrarrojos de alta frecuencia de pie con disposición de mesa de trabajo que integra detector, horno vertical y balanza en una sola estación. Rango ampliado (hasta 0,0001 %) y celdas expandibles lo hacen apto para plantas con cargas de trabajo de grado mixto — desde acero de muy bajo carbono hasta fundición de alto carbono — en el mismo equipo.',
    ar: 'الجهاز CS996 محلّل كربون وكبريت أرضي بالأشعة تحت الحمراء عالي التردّد بتصميم طاولة عمل تجمع الكاشف والفرن العمودي والميزان في محطّة واحدة. نطاق كشف أوسع (حتى 0.0001 %) وخلايا قابلة للتوسعة يجعلانه مناسباً للمصانع ذات أعباء العمل المختلطة الدرجات — من الصلب منخفض الكربون جداً إلى الحديد الزهر عالي الكربون — على نفس الجهاز.',
  },
  applications: {
    en: [
      'Steel mills handling both low- and high-carbon products',
      'Ferro-alloy producers — ferro-silicon, ferro-manganese, ferro-chrome',
      'Foundry production-line QC — carbon equivalent during pouring',
      'Refractory and chemical-industry sulfur control',
      'Ore-dressing plants — high-throughput C/S sample queues',
    ],
    ru: [
      'Сталелитейные заводы с низко- и высокоуглеродистыми марками',
      'Производство ферросплавов — ферросилиций, ферромарганец, феррохром',
      'Контроль литейного производства — углеродный эквивалент при разливке',
      'Огнеупорные и химические производства — контроль серы',
      'Обогатительные фабрики — высокопоточные очереди образцов C/S',
    ],
    es: [
      'Acerías con productos de bajo y alto carbono',
      'Productores de ferroaleaciones — ferrosilicio, ferromanganeso, ferrocromo',
      'QC de línea de fundición — carbono equivalente durante la colada',
      'Control de azufre en refractarios e industria química',
      'Plantas de beneficio mineral — colas de muestras C/S de alto rendimiento',
    ],
    ar: [
      'مصانع الصلب التي تنتج منتجات منخفضة ومرتفعة الكربون',
      'منتجو سبائك الحديد — حديد السيليكون والمنغنيز والكروم',
      'ضبط جودة خطوط المسابك — معادل الكربون أثناء الصبّ',
      'ضبط الكبريت في الصناعات الحرارية والكيميائية',
      'مصانع إثراء الخامات — صفوف عيّنات كربون-كبريت بإنتاجية عالية',
    ],
  },
  faq: {
    en: [
      { q: 'How is the operating-table layout different from a bench design?', a: 'The detector, furnace and balance are integrated on a single ergonomic worktable. Operators stand at one station instead of moving between bench, scale and furnace — useful for continuous production-shift workflows.' },
      { q: 'What does "expandable cells" mean in practice?', a: 'The base configuration ships with one C and one S cell. Additional low-carbon and high-sulfur cells can be installed at the factory or in the field, extending the working range and improving precision at the extremes.' },
      { q: 'Lead time and warranty?', a: '15 working days for stock configurations, 30 days for non-standard cell configurations. 12-month parts-and-labor warranty, optional 24-month extension.' },
      { q: 'What argon / oxygen consumption should I plan for?', a: 'Carrier oxygen (power gas 0.2 MPa, blow oxygen 0.18 MPa) typical 3–5 L/min during analysis. The CO2 absorber and CO2 IR cell paths are pre-plumbed in the workstation.' },
    ],
    ru: [
      { q: 'Чем компоновка «рабочий стол» отличается от настольной?', a: 'Детектор, печь и весы интегрированы в одну эргономичную рабочую станцию. Оператор не перемещается между столом, весами и печью — полезно для непрерывного производственного цикла.' },
      { q: 'Что значит «расширяемые ячейки» на практике?', a: 'Базовая комплектация — одна C и одна S ячейка. Дополнительные низкоуглеродные и высокосернистые ячейки устанавливаются на заводе или на месте, расширяя рабочий диапазон и улучшая точность по краям.' },
      { q: 'Срок поставки и гарантия?', a: '15 рабочих дней для складских конфигураций, 30 дней для нестандартных. Гарантия 12 месяцев на запчасти и работу, опциональное продление до 24 месяцев.' },
      { q: 'Какой расход аргона / кислорода планировать?', a: 'Несущий кислород (газ давлением 0,2 МПа, продувка 0,18 МПа) — обычно 3–5 л/мин в ходе анализа. Поглотитель CO2 и тракты CO2-ИК-ячейки заранее подключены в рабочей станции.' },
    ],
    es: [
      { q: '¿En qué se diferencia la disposición de mesa de trabajo de un diseño de mesa simple?', a: 'Detector, horno y balanza integrados en una sola mesa ergonómica. El operador trabaja en una estación sin moverse entre mesa, balanza y horno — útil para turnos de producción continua.' },
      { q: '¿Qué significa "celdas expandibles" en la práctica?', a: 'La configuración base trae una celda C y una S. Se pueden añadir celdas de bajo carbono y alto azufre en fábrica o en campo, ampliando el rango operativo y mejorando la precisión en los extremos.' },
      { q: '¿Plazo y garantía?', a: '15 días hábiles para configuraciones en stock, 30 días para no estándar. Garantía 12 meses piezas y mano de obra, ampliable a 24 meses.' },
      { q: '¿Qué consumo de argón / oxígeno planear?', a: 'Oxígeno portador (gas a 0,2 MPa, soplado 0,18 MPa) típico 3–5 L/min durante el análisis. El absorbedor de CO2 y los caminos de la celda IR de CO2 vienen pre-conectados en la estación.' },
    ],
    ar: [
      { q: 'كيف تختلف هيئة طاولة العمل عن التصميم المكتبي؟', a: 'يجتمع الكاشف والفرن والميزان في طاولة عمل واحدة مريحة. يعمل المشغّل في محطّة واحدة دون الحاجة للتنقّل بين المنضدة والميزان والفرن — مفيد للورديات الإنتاجية المستمرّة.' },
      { q: 'ماذا يعني "خلايا قابلة للتوسعة" عملياً؟', a: 'يأتي التكوين الأساسي بخليّة كربون وأخرى كبريت. يمكن إضافة خلايا للكربون المنخفض والكبريت المرتفع في المصنع أو في الموقع، ممّا يوسّع نطاق التشغيل ويُحسّن الدقّة عند الحدود.' },
      { q: 'مدّة التسليم والضمان؟', a: '15 يوم عمل للتكوينات المتوفّرة في المخزون و30 يوماً للتكوينات غير القياسية. ضمان 12 شهراً على القطع واليد العاملة، قابل للتمديد إلى 24 شهراً.' },
      { q: 'ما استهلاك الأرغون والأكسجين الذي يجب توقّعه؟', a: 'الأكسجين الحامل (غاز بضغط 0.2 ميغاباسكال ونفخ 0.18 ميغاباسكال) عادةً 3 إلى 5 لتر/دقيقة أثناء التحليل. مسارات ماصّ ثاني أكسيد الكربون وخليّة الأشعة تحت الحمراء لثاني أكسيد الكربون موصّلة مسبقاً في المحطّة.' },
    ],
  },
};
