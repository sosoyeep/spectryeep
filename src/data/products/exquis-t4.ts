import type { ProductRecord } from './_types';

export const product: ProductRecord = {
  slug: 'exquis-t4',
  name: {
    en: 'Exquis T4 Optical Emission Spectrometer',
    ru: 'Exquis T4 — оптико-эмиссионный спектрометр',
    es: 'Exquis T4 — espectrómetro de emisión óptica',
    ar: 'Exquis T4 — مطياف الانبعاث الضوئي',
  },
  sku: 'JIEBO-T4',
  category: 'oes',
  image: '/products/exquis-t4.jpg',
  specs: [
    { labelKey: 'optical_system', value: 'Paschen-Runge mounting, sealed-cycle argon chamber' },
    { labelKey: 'focal_length', value: '401 mm' },
    { labelKey: 'wavelength', value: '160–580 nm' },
    { labelKey: 'detector', value: 'Low-noise integrated CMOS, no coating, high UV sensitivity' },
    { labelKey: 'matrices', value: 'Fe, Al, Cu, Zn (50+ elements)' },
    { labelKey: 'power', value: 'AC 220 V / 50 Hz' },
    { labelKey: 'env', value: '10–30 °C / 20–80 % RH' },
    { labelKey: 'dimensions', value: '525 × 635 × 290 mm' },
    { labelKey: 'weight', value: '33 kg' },
  ],
  overview: {
    en: 'The Exquis T4 is a benchtop spark optical emission spectrometer with a sealed-cycle argon optical chamber that reduces gas consumption and stabilizes the light path. Its low-noise integrated CMOS detector covers 160–580 nm with high UV sensitivity for non-metallic elements (N, C, S, P), making it a price-performance choice for metal-fabrication shops moving sample analysis from lab to furnace site.',
    ru: 'Exquis T4 — настольный искровой оптико-эмиссионный спектрометр с замкнутой циркуляцией аргона: газ расходуется меньше, оптический тракт стабильнее. Низкошумный CMOS-детектор покрывает 160–580 нм с высокой УФ-чувствительностью для неметаллов (N, C, S, P). Оптимальное соотношение цены и качества для металлообрабатывающих цехов, переносящих анализ из лаборатории к печи.',
    es: 'El Exquis T4 es un espectrómetro de emisión óptica por chispa de mesa con cámara óptica de argón en circulación cerrada que reduce el consumo de gas y estabiliza el camino óptico. Su detector CMOS integrado de bajo ruido cubre 160–580 nm con alta sensibilidad en UV para elementos no metálicos (N, C, S, P). Una opción precio-rendimiento para talleres metalmecánicos que mueven el análisis del laboratorio al horno.',
    ar: 'جهاز Exquis T4 مطياف انبعاث ضوئي بالشرارة مكتبي مزوّد بغرفة بصرية بدورة أرغون مغلقة تقلّل استهلاك الغاز وتثبّت المسار البصري. كاشف CMOS متكامل منخفض الضوضاء يغطّي 160–580 نانومتر بحساسية عالية في الأشعة فوق البنفسجية للعناصر غير المعدنية (N و C و S و P). خيار جيد من حيث السعر مقابل الأداء لورش تصنيع المعادن التي تنقل التحليل من المختبر إلى موقع الفرن.',
  },
  applications: {
    en: [
      'Casting and foundry — daily QC on Fe, Al, Cu, Zn alloys',
      'Power generation and machinery manufacturing — incoming-material inspection',
      'Non-ferrous metal fabrication and processing',
      'Aerospace and automotive component verification',
      'Shipbuilding and inspection of imported metal goods',
    ],
    ru: [
      'Литейное производство — ежедневный контроль сплавов Fe, Al, Cu, Zn',
      'Энергетика и машиностроение — входной контроль материалов',
      'Производство и обработка цветных металлов',
      'Контроль компонентов для аэрокосмической и автомобильной отраслей',
      'Судостроение и инспекция импортных металлоизделий',
    ],
    es: [
      'Fundición y casting — QC diario en aleaciones Fe, Al, Cu, Zn',
      'Generación de energía y fabricación de maquinaria — inspección de materia prima',
      'Fabricación y procesamiento de metales no ferrosos',
      'Verificación de componentes aeroespaciales y automotrices',
      'Construcción naval e inspección de mercancías metálicas importadas',
    ],
    ar: [
      'السباكة والصبّ — ضبط جودة يومي لسبائك Fe و Al و Cu و Zn',
      'توليد الطاقة وصناعة الآلات — فحص المواد الواردة',
      'تصنيع المعادن غير الحديدية ومعالجتها',
      'فحص قطع الطيران والسيارات',
      'بناء السفن وفحص البضائع المعدنية المستوردة',
    ],
  },
  faq: {
    en: [
      { q: 'Is the Exquis T4 portable enough for furnace-side use?', a: 'Yes. At 33 kg with sealed argon circulation, it can be moved on a rolling cart and operated next to the furnace. The sealed chamber means lower argon consumption than open-flow benchtops.' },
      { q: 'Which elements and matrices are covered?', a: 'Base matrices: Fe, Al, Cu, Zn. Over 50 elements can be analyzed including non-metallic N, C, S, P which benefit from the deep-UV sensitivity of the CMOS detector.' },
      { q: 'When should I choose Exquis T4 over Innovate T5?', a: 'Exquis T4 fits a single-matrix QC workflow with budget constraints (33 kg, benchtop, sealed argon). Innovate T5 covers 10 base matrices, wider wavelength range (140–680 nm) and a vacuum chamber — preferred for multi-alloy plants and trace-element work.' },
      { q: 'What is the lead time and warranty?', a: '15 working days for in-stock configurations. 12-month parts-and-labor warranty, optional 24-month extension.' },
    ],
    ru: [
      { q: 'Можно ли использовать Exquis T4 у печи?', a: 'Да. Прибор массой 33 кг с замкнутой циркуляцией аргона перевозится на тележке и работает рядом с печью. Закрытая камера снижает расход аргона по сравнению с настольными приборами с открытым потоком.' },
      { q: 'Какие матрицы и элементы покрываются?', a: 'Базовые матрицы: Fe, Al, Cu, Zn. Более 50 элементов, включая неметаллы N, C, S, P, которым помогает чувствительность CMOS в глубоком УФ.' },
      { q: 'Когда выбрать Exquis T4 вместо Innovate T5?', a: 'Exquis T4 подходит для одноматричного QC-цикла при ограниченном бюджете (33 кг, настольный, закрытый аргон). Innovate T5 покрывает 10 базовых матриц, шире спектральный диапазон (140–680 нм) и имеет вакуумную камеру — предпочтителен для многосплавных производств и следового анализа.' },
      { q: 'Срок поставки и гарантия?', a: '15 рабочих дней для складских конфигураций. Гарантия 12 месяцев на запчасти и работу, продление до 24 месяцев опционально.' },
    ],
    es: [
      { q: '¿Es el Exquis T4 lo bastante portátil para uso junto al horno?', a: 'Sí. Con 33 kg y circulación cerrada de argón, se mueve en carro y opera al lado del horno. La cámara sellada reduce el consumo de argón frente a equipos de mesa de flujo abierto.' },
      { q: '¿Qué matrices y elementos cubre?', a: 'Matrices base: Fe, Al, Cu, Zn. Más de 50 elementos, incluidos no metálicos N, C, S, P que aprovechan la sensibilidad CMOS en UV profundo.' },
      { q: '¿Cuándo elegir Exquis T4 en lugar del Innovate T5?', a: 'Exquis T4 cubre un flujo de QC monomatriz con presupuesto ajustado (33 kg, mesa, argón sellado). Innovate T5 abarca 10 matrices base, rango espectral más amplio (140–680 nm) y cámara al vacío — preferido para plantas multi-aleación y trazas.' },
      { q: '¿Plazo y garantía?', a: '15 días hábiles para configuraciones en stock. Garantía de 12 meses en piezas y mano de obra, ampliable a 24 meses.' },
    ],
    ar: [
      { q: 'هل جهاز Exquis T4 محمول بما يكفي لاستخدامه قرب الفرن؟', a: 'نعم. بوزن 33 كغ ونظام أرغون بدورة مغلقة، يمكن نقله على عربة دفع وتشغيله بجوار الفرن. تقلّل الغرفة المغلقة استهلاك الأرغون مقارنةً بالأجهزة المكتبية ذات التدفّق المفتوح.' },
      { q: 'ما العناصر والمصفوفات التي يغطّيها؟', a: 'المصفوفات الأساسية: Fe و Al و Cu و Zn. أكثر من 50 عنصراً تشمل العناصر غير المعدنية N و C و S و P التي تستفيد من حساسية CMOS في الأشعة فوق البنفسجية العميقة.' },
      { q: 'متى أختار Exquis T4 بدلاً من Innovate T5؟', a: 'يناسب Exquis T4 سير عمل ضبط الجودة بمصفوفة واحدة وميزانية محدودة (33 كغ، مكتبي، أرغون مغلق). أما Innovate T5 فيغطّي 10 مصفوفات أساسية ونطاقاً طيفياً أوسع (140–680 نانومتر) مع غرفة مفرّغة — وهو المفضّل للمصانع متعدّدة السبائك ولتحليل العناصر النزرة.' },
      { q: 'ما مدّة التسليم والضمان؟', a: '15 يوم عمل للتكوينات المتوفّرة في المخزون. ضمان 12 شهراً على القطع واليد العاملة، قابل للتمديد إلى 24 شهراً.' },
    ],
  },
};
