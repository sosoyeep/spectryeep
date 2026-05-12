import type { ProductRecord } from './_types';

export const product: ProductRecord = {
  slug: 'f6000-pro',
  name: 'F6000 Pro Handheld XRF Analyzer',
  sku: 'JIEBO-F6000',
  category: 'handheld',
  image: '/products/f6000-pro.jpg',
  specs: [
    { labelKey: 'excitation', value: 'High-power miniature X-ray tube, 50 kV / 100 mA / 4 W' },
    { labelKey: 'detector', value: 'High-resolution Si-PIN X-ray detector' },
    { labelKey: 'elements', value: 'Ti to U (alloying elements, full range)' },
    { labelKey: 'analyzing_time', value: '1–5 seconds typical' },
    { labelKey: 'connectivity', value: 'Built-in WiFi, Bluetooth, USB 3.0' },
    { labelKey: 'battery', value: '6800 mAh lithium, 8 hours continuous operation' },
    { labelKey: 'env', value: 'Operating up to 50 °C ambient' },
    { labelKey: 'weight', value: 'Handheld gun form factor' },
  ],
  overview: {
    en: 'The F6000 Pro is a handheld X-ray fluorescence (XRF) analyzer for non-destructive identification of alloy grade and elemental composition. With a high-power 50 kV X-ray tube, six switchable collimation filters and a Si-PIN detector, it identifies elements from titanium to uranium in seconds — putting a "lab in your pocket" for scrap yards, pipework inspection and precious-metal verification.',
    ru: 'F6000 Pro — ручной рентгенофлуоресцентный (РФА) анализатор для неразрушающей идентификации марки сплава и элементного состава. Мощная рентгеновская трубка 50 кВ, шесть переключаемых коллимационных фильтров и Si-PIN детектор определяют элементы от титана до урана за секунды — «лаборатория в кармане» для приёмки лома, контроля трубопроводов и проверки драгметаллов.',
    es: 'El F6000 Pro es un analizador XRF portátil para identificación no destructiva de grado de aleación y composición elemental. Con tubo de rayos X de alta potencia 50 kV, seis filtros de colimación conmutables y detector Si-PIN, identifica elementos desde titanio hasta uranio en segundos — un "laboratorio en el bolsillo" para patios de chatarra, inspección de tuberías y verificación de metales preciosos.',
    ar: 'الجهاز F6000 Pro محلّل فلوريسنت أشعة سينية (XRF) محمول للتعرّف غير المتلف على درجة السبيكة والتركيب العنصري. أنبوب أشعة سينية بقدرة عالية 50 كيلوفولت وستّة مرشّحات تجميع قابلة للتبديل وكاشف Si-PIN، تحدّد العناصر من التيتانيوم إلى اليورانيوم في ثوانٍ — مختبر في الجيب لساحات الخردة وفحص الأنابيب والتحقّق من المعادن الثمينة.',
  },
  applications: {
    en: [
      'Metal recycling — fast non-destructive grade sorting',
      'Unknown alloy identification — receiving inspection in fabrication shops',
      'Petrochemical and pipeline PMI (positive material identification)',
      'Stainless and mold steel verification',
      'Precious metals and specialty alloys',
    ],
    ru: [
      'Переработка металла — быстрая неразрушающая сортировка по маркам',
      'Идентификация неизвестных сплавов — приёмка на производствах',
      'PMI для нефтехимии и трубопроводов',
      'Контроль нержавеющей и инструментальной стали',
      'Драгоценные металлы и специальные сплавы',
    ],
    es: [
      'Reciclaje de metales — clasificación rápida no destructiva',
      'Identificación de aleaciones desconocidas — recepción en talleres',
      'PMI en petroquímica y tuberías',
      'Verificación de acero inoxidable y de molde',
      'Metales preciosos y aleaciones especiales',
    ],
    ar: [
      'إعادة تدوير المعادن — فرز سريع غير متلف بالدرجات',
      'التعرّف على السبائك المجهولة — فحص الاستلام في ورش التصنيع',
      'تعريف المواد الإيجابي (PMI) في البتروكيماويات والأنابيب',
      'التحقّق من الفولاذ المقاوم للصدأ وفولاذ القوالب',
      'المعادن الثمينة والسبائك الخاصّة',
    ],
  },
  faq: {
    en: [
      { q: 'Can the F6000 Pro measure carbon?', a: 'No. Handheld XRF physics cannot reliably measure carbon, sulfur, phosphorus or boron. For those elements use the Surpass F1 mobile OES or a benchtop OES like the Innovate T5.' },
      { q: 'How fast is one measurement?', a: 'Typical alloy ID returns in 1–2 seconds. Quantitative analysis with full filter sweep takes 5–15 seconds depending on required precision.' },
      { q: 'Is it safe to use without lead shielding?', a: 'Yes when used correctly. The optical path is designed so radiation exits only into the sample, and a safety switch requires sample contact before the tube energizes. Standard radiation training is required for the operator in most jurisdictions.' },
      { q: 'What about radiation regulation in export markets?', a: 'XRF guns are regulated by local nuclear/radiation safety bodies (e.g. Rostekhnadzor in Russia, CNSC in Canada, IAEA-aligned regimes in GCC). We provide a CE/CB certificate plus a radiation safety dossier. Operator licensing is the customer\'s responsibility.' },
    ],
    ru: [
      { q: 'Может ли F6000 Pro измерять углерод?', a: 'Нет. Физика портативного РФА не позволяет надёжно определять углерод, серу, фосфор и бор. Для этих элементов используйте мобильный ОЭС Surpass F1 или настольный ОЭС вроде Innovate T5.' },
      { q: 'Сколько занимает одно измерение?', a: 'Типичная идентификация марки — 1–2 секунды. Полный количественный анализ с прохождением всех фильтров — 5–15 секунд в зависимости от требуемой точности.' },
      { q: 'Безопасно ли использовать без свинцовой защиты?', a: 'Да при правильном применении. Оптический тракт направляет излучение только в образец, а защитный выключатель требует контакта с образцом до подачи питания на трубку. Стандартное обучение по радиационной безопасности необходимо в большинстве юрисдикций.' },
      { q: 'Что насчёт регулирования радиации в экспортных рынках?', a: 'РФА-пистолеты регулируются местными органами ядерной/радиационной безопасности (например, Ростехнадзор в России, CNSC в Канаде, режимы МАГАТЭ в странах Залива). Предоставляем сертификат CE/CB и досье по радиационной безопасности. Лицензирование оператора — ответственность заказчика.' },
    ],
    es: [
      { q: '¿El F6000 Pro mide carbono?', a: 'No. La física del XRF portátil no permite medir carbono, azufre, fósforo o boro de forma fiable. Para esos elementos use el OES móvil Surpass F1 o un OES de mesa como el Innovate T5.' },
      { q: '¿Qué tan rápida es una medición?', a: 'Identificación típica de aleación: 1–2 segundos. Análisis cuantitativo con barrido completo de filtros: 5–15 segundos según la precisión requerida.' },
      { q: '¿Es seguro usarlo sin blindaje de plomo?', a: 'Sí cuando se usa correctamente. El camino óptico dirige la radiación solo hacia la muestra, y un interruptor de seguridad requiere contacto con la muestra antes de energizar el tubo. Se requiere capacitación estándar en seguridad radiológica para el operador en la mayoría de jurisdicciones.' },
      { q: '¿Y la regulación de radiación en los mercados de exportación?', a: 'Las pistolas XRF están reguladas por organismos locales de seguridad radiológica/nuclear (CNSN en Argentina/México, regímenes alineados con OIEA en Golfo, etc.). Suministramos certificado CE/CB y dossier de seguridad radiológica. La licencia del operador es responsabilidad del cliente.' },
    ],
    ar: [
      { q: 'هل يستطيع F6000 Pro قياس الكربون؟', a: 'لا. لا تسمح فيزياء XRF المحمول بقياس الكربون والكبريت والفوسفور والبورون بصورة موثوقة. لهذه العناصر استخدم Surpass F1 المتنقّل أو OES مكتبياً مثل Innovate T5.' },
      { q: 'كم تستغرق المعيار الواحد؟', a: 'تعريف الدرجة النموذجي 1 إلى 2 ثانية. التحليل الكمّي مع مسح مرشّحات كامل 5 إلى 15 ثانية حسب الدقّة المطلوبة.' },
      { q: 'هل يَأمَن استخدامه دون درع رصاص؟', a: 'نعم عند الاستخدام الصحيح. يوجّه المسار البصري الإشعاع إلى العيّنة فقط، ويتطلّب مفتاح الأمان ملامسة العيّنة قبل تفعيل الأنبوب. التدريب القياسي على السلامة الإشعاعية مطلوب للمشغّل في معظم الولايات القضائية.' },
      { q: 'ما تنظيم الإشعاع في أسواق التصدير؟', a: 'تخضع مسدّسات XRF لتنظيم الهيئات المحلية للسلامة الإشعاعية/النووية (الوكالة الذرّية في دول الخليج، الهيئات الموازية في روسيا وأمريكا اللاتينية وأفريقيا). نقدّم شهادة CE/CB وملف السلامة الإشعاعية. ترخيص المشغّل من مسؤولية العميل.' },
    ],
  },
};
