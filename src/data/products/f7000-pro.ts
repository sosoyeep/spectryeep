import type { ProductRecord } from './_types';

export const product: ProductRecord = {
  slug: 'f7000-pro',
  name: {
    en: 'F7000 Pro Handheld LIBS Analyzer',
    ru: 'F7000 Pro — ручной LIBS-анализатор',
    es: 'F7000 Pro — analizador LIBS portátil',
    ar: 'F7000 Pro — محلّل LIBS محمول باليد',
  },
  sku: 'JIEBO-F7000',
  category: 'handheld',
  image: '/products/f7000-pro.jpg',
  specs: [
    { labelKey: 'laser_class', value: 'Class 3B laser, high-energy pulse (eye-safe in normal use)' },
    { labelKey: 'elements', value: 'Be, Mg, Al, Si, Ti, Cr, Mn, Fe, Ni, Cu, Zn, Cd, Sn, Pb, Bi, Mo, V, Nb, W' },
    { labelKey: 'analyzing_time', value: '< 1 second per measurement' },
    { labelKey: 'weight', value: '1.25 kg (including battery)' },
    { labelKey: 'env', value: 'Optical and mechanical safety switches required for activation' },
  ],
  overview: {
    en: 'The F7000 Pro is a handheld laser-induced breakdown spectroscopy (LIBS) analyzer for on-site identification and rapid analysis of alloy elements. Unlike X-ray-based handheld systems, LIBS uses a focused laser pulse to ablate a microscopic sample and read its emission spectrum — so it measures light elements that XRF cannot, including beryllium and magnesium, with no ionizing radiation.',
    ru: 'F7000 Pro — ручной анализатор на основе лазерно-индуцированной плазменной спектроскопии (LIBS) для полевой идентификации и быстрого анализа сплавов. В отличие от РФА, LIBS использует сфокусированный лазерный импульс для абляции микроскопического объёма и считывания его эмиссионного спектра — поэтому измеряет лёгкие элементы, недоступные РФА, включая бериллий и магний, без ионизирующего излучения.',
    es: 'El F7000 Pro es un analizador portátil basado en espectroscopia de plasma inducido por láser (LIBS) para identificación in situ y análisis rápido de aleaciones. A diferencia del XRF, LIBS usa un pulso láser enfocado para ablacionar una muestra microscópica y leer su espectro de emisión — mide elementos ligeros que el XRF no puede, incluidos berilio y magnesio, sin radiación ionizante.',
    ar: 'الجهاز F7000 Pro محلّل محمول قائم على تقنية تحلّل اللّيزر الطيفي (LIBS) للتعريف الميداني والتحليل السريع للسبائك. على عكس أنظمة XRF القائمة على الأشعة السينية، يستخدم LIBS نبضة ليزر مركّزة لاستئصال عيّنة مجهرية وقراءة طيف انبعاثها — فيقيس العناصر الخفيفة التي يعجز عنها XRF بما فيها البريليوم والمغنيسيوم، دون إشعاع مؤيِّن.',
  },
  applications: {
    en: [
      'Aluminum alloy sorting where magnesium and silicon levels matter',
      'Beryllium detection in copper alloys (safety screening)',
      'Battery and lithium-related material identification',
      'Light-element verification in casting and forging',
      'Replacing radioactive XRF in regions with strict import controls',
    ],
    ru: [
      'Сортировка алюминиевых сплавов, где важны уровни магния и кремния',
      'Обнаружение бериллия в медных сплавах (контроль безопасности)',
      'Идентификация материалов аккумуляторов и литиевой химии',
      'Проверка лёгких элементов в литье и поковке',
      'Замена радиационного РФА в регионах со строгим импортным контролем',
    ],
    es: [
      'Clasificación de aleaciones de aluminio donde importan los niveles de magnesio y silicio',
      'Detección de berilio en aleaciones de cobre (cribado de seguridad)',
      'Identificación de materiales de batería y química del litio',
      'Verificación de elementos ligeros en fundición y forja',
      'Reemplazo de XRF radiactivo en regiones con controles estrictos de importación',
    ],
    ar: [
      'فرز سبائك الألمنيوم حيث تكون مستويات المغنيسيوم والسيليكون مهمّة',
      'الكشف عن البريليوم في سبائك النحاس (فرز للسلامة)',
      'التعرّف على مواد البطاريات وكيمياء الليثيوم',
      'التحقّق من العناصر الخفيفة في الصبّ والطرق',
      'بديل عن XRF المشعّ في المناطق ذات الضوابط الصارمة على الاستيراد',
    ],
  },
  faq: {
    en: [
      { q: 'LIBS vs XRF — which should I choose?', a: 'LIBS measures light elements (Li, Be, Mg, Al, Si) that XRF cannot. LIBS leaves a tiny burn mark while XRF is fully non-destructive. LIBS uses a laser — no ionizing radiation — which simplifies regulatory paperwork in many export markets. Choose XRF for non-destructive identification of heavy alloys; choose LIBS for light-element accuracy or radiation-sensitive deployments.' },
      { q: 'How small is the laser mark on the sample?', a: 'Sub-millimeter, comparable to a single OES spark. Most receiving inspections and PMI workflows treat this as non-destructive in practice.' },
      { q: 'What about laser safety?', a: 'Class 3B with multiple safeguards: a mechanical/optical safety switch requires sample contact before firing, and the laser is automatically collimated to limit eye exposure. Standard laser-safety training and goggles are recommended for the operator.' },
      { q: 'Is the F7000 Pro fast enough for production sorting?', a: 'Yes. Sub-second readouts make it competitive with handheld XRF on alloy ID, and faster on light-element work where XRF cannot quantify at all.' },
    ],
    ru: [
      { q: 'LIBS или РФА — что выбрать?', a: 'LIBS измеряет лёгкие элементы (Li, Be, Mg, Al, Si), недоступные РФА. LIBS оставляет крошечную метку ожога, тогда как РФА полностью неразрушающий. LIBS использует лазер — без ионизирующего излучения — что упрощает регулирование во многих экспортных рынках. РФА — для неразрушающей идентификации тяжёлых сплавов; LIBS — для точности по лёгким элементам или для радиационно-чувствительных применений.' },
      { q: 'Насколько маленькая метка от лазера?', a: 'Менее миллиметра, сопоставимо с одним искровым следом ОЭС. На большинстве приёмок и PMI это считается практически неразрушающим.' },
      { q: 'Безопасность лазера?', a: 'Класс 3B с несколькими защитами: механический/оптический выключатель требует контакта с образцом до выстрела, лазер автоматически коллимируется для ограничения экспозиции глаз. Рекомендуется стандартное обучение лазерной безопасности и защитные очки.' },
      { q: 'Достаточно ли быстро для производственной сортировки?', a: 'Да. Считывание за доли секунды делает его конкурентным с ручным РФА по идентификации сплавов и быстрее по лёгким элементам, где РФА вообще не считает.' },
    ],
    es: [
      { q: 'LIBS vs XRF — ¿cuál elegir?', a: 'LIBS mide elementos ligeros (Li, Be, Mg, Al, Si) que el XRF no. LIBS deja una marca minúscula de quemado mientras que el XRF es totalmente no destructivo. LIBS usa un láser — sin radiación ionizante — lo que simplifica el papeleo regulatorio en muchos mercados de exportación. XRF para identificación no destructiva de aleaciones pesadas; LIBS para precisión en elementos ligeros o implementaciones sensibles a radiación.' },
      { q: '¿Qué tan pequeña es la marca del láser?', a: 'Sub-milímetro, comparable a una sola chispa OES. La mayoría de inspecciones de recepción y PMI lo tratan como no destructivo en la práctica.' },
      { q: '¿Seguridad láser?', a: 'Clase 3B con varias salvaguardas: interruptor de seguridad mecánico/óptico exige contacto con la muestra antes de disparar, y el láser se colima automáticamente para limitar exposición ocular. Se recomienda capacitación estándar y gafas de seguridad.' },
      { q: '¿Es lo bastante rápido para clasificación en producción?', a: 'Sí. Lecturas sub-segundo lo hacen competitivo con XRF portátil en ID de aleación, y más rápido en trabajo de elementos ligeros donde el XRF no cuantifica.' },
    ],
    ar: [
      { q: 'LIBS أم XRF — أيّهما أختار؟', a: 'يقيس LIBS عناصر خفيفة (Li و Be و Mg و Al و Si) لا يستطيع XRF قياسها. يترك LIBS أثراً مجهرياً للحرق بينما XRF غير متلف بالكامل. يستخدم LIBS ليزراً — دون إشعاع مؤيِّن — ممّا يبسّط الأوراق التنظيمية في كثير من أسواق التصدير. اختر XRF للتعريف غير المتلف للسبائك الثقيلة، واختر LIBS للدقّة في العناصر الخفيفة أو حيث يكون الإشعاع حسّاساً.' },
      { q: 'كم حجم أثر الليزر على العيّنة؟', a: 'دون الميليمتر، يقارب أثر شرارة OES واحدة. تتعامل معه معظم عمليات فحص الاستلام و PMI عملياً على أنّه غير متلف.' },
      { q: 'ماذا عن سلامة الليزر؟', a: 'الفئة 3B مع عدّة وسائل حماية: مفتاح سلامة ميكانيكي/بصري يتطلّب ملامسة العيّنة قبل الإطلاق، والليزر يُجمَّع تلقائياً للحدّ من تعرّض العين. يُنصح بالتدريب القياسي على سلامة الليزر وارتداء النظّارات.' },
      { q: 'هل هو سريع بما يكفي للفرز الإنتاجي؟', a: 'نعم. تجعله القراءات دون الثانية منافساً لـ XRF المحمول في تعريف السبائك، وأسرع في أعمال العناصر الخفيفة حيث لا يقيس XRF أصلاً.' },
    ],
  },
};
