import type { ProductRecord } from './_types';

export const product: ProductRecord = {
  slug: 'jb-750',
  name: 'JB-750 Optical Emission Spectrometer',
  sku: 'JIEBO-JB750',
  category: 'oes',
  image: '/products/jb-750.jpg',
  specs: [
    { labelKey: 'optical_system', value: 'Paschen-Runge mounting, vacuum optical chamber' },
    { labelKey: 'focal_length', value: '750 mm' },
    { labelKey: 'wavelength', value: '120–800 nm' },
    { labelKey: 'detector', value: 'PMT (photomultiplier tube) array with discrete-spark-intensity removal algorithm' },
    { labelKey: 'matrices', value: 'Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb' },
    { labelKey: 'power', value: 'AC 220 V / 50 Hz' },
    { labelKey: 'env', value: '10–30 °C / 20–80 % RH' },
    { labelKey: 'dimensions', value: '750 × 1140 × 920 mm' },
    { labelKey: 'weight', value: '256 kg' },
  ],
  overview: {
    en: 'The JB-750 is JIEBO\'s flagship PMT-based optical emission spectrometer for high-precision metal-grade certification and quality assessment. Its 750 mm Paschen-Runge optics, vacuum chamber and single-spark pulse-integral algorithm give it the spectral resolution and signal-to-noise of legacy German PMT systems at a fraction of the cost.',
    ru: 'JB-750 — флагманский ОЭС-спектрометр JIEBO на ФЭУ для высокоточной сертификации марок металла и оценки качества. Оптика Пашен-Рунге 750 мм, вакуумная камера и алгоритм пошаговой интеграции импульса искры дают спектральное разрешение и отношение сигнал/шум на уровне эталонных немецких систем — за долю их стоимости.',
    es: 'El JB-750 es el espectrómetro OES insignia de JIEBO basado en PMT, para certificación de grado de metal y evaluación de calidad de alta precisión. Su óptica Paschen-Runge de 750 mm, cámara al vacío y algoritmo de integración por chispa individual entregan la resolución espectral y la relación señal/ruido de sistemas PMT alemanes clásicos a una fracción del costo.',
    ar: 'الجهاز JB-750 هو المطياف الأرقى لدى JIEBO المبني على أنابيب PMT لاعتماد درجة المعادن وتقييم الجودة بدقّة عالية. بصرية Paschen-Runge بطول بؤري 750 ملم وغرفة مفرّغة وخوارزمية تكامل نبضة الشرارة الفردية تمنحه دقّة طيفية ونسبة إشارة إلى ضوضاء على مستوى أنظمة PMT الألمانية الكلاسيكية، وبجزء يسير من تكلفتها.',
  },
  applications: {
    en: [
      'Foundry — final-cast grade certification against AISI/GB/EN standards',
      'Metallurgy and aerospace — trace-element analysis on Fe, Al, Ti alloys',
      'Firefighting and safety material certification',
      'Metal processing and quality assessment laboratories',
      'New-material development requiring sub-ppm element verification',
    ],
    ru: [
      'Литейное производство — сертификация готовых отливок по AISI/ГОСТ/EN',
      'Металлургия и аэрокосмос — следовый анализ сплавов Fe, Al, Ti',
      'Сертификация противопожарных и материалов безопасности',
      'Лаборатории металлообработки и оценки качества',
      'Разработка новых материалов с требованием суб-ppm проверки элементов',
    ],
    es: [
      'Fundición — certificación de grado de fundido final frente a AISI/GB/EN',
      'Metalurgia y aeroespacial — análisis de trazas en aleaciones Fe, Al, Ti',
      'Certificación de materiales contra incendios y seguridad',
      'Laboratorios de procesamiento de metales y evaluación de calidad',
      'Desarrollo de nuevos materiales que requiere verificación sub-ppm',
    ],
    ar: [
      'المسابك — اعتماد درجة الصبّ النهائي وفق معايير AISI و GB و EN',
      'المعادن والطيران — تحليل العناصر النزرة في سبائك Fe و Al و Ti',
      'اعتماد مواد الإطفاء والسلامة',
      'مختبرات معالجة المعادن وتقييم الجودة',
      'تطوير المواد الجديدة التي تتطلّب التحقّق من العناصر بمستويات دون جزء في المليون',
    ],
  },
  faq: {
    en: [
      { q: 'Why choose a PMT system over CMOS in 2026?', a: 'PMT detectors still outperform CMOS for high-end trace-element work and long-term stability. The JB-750 uses PMTs because the application — certification labs and aerospace QA — demands signal-to-noise and lifetime that CMOS cannot match yet.' },
      { q: 'How does JB-750 compare to the Noble T7?', a: 'The T7 is CMOS-based and covers 120–800 nm with 401 mm optics; suitable for high-throughput research. The JB-750 uses PMT and 750 mm optics — higher spectral resolution, better trace-element sensitivity, but larger and more expensive. Choose JB-750 if your work is certification and your samples justify the precision.' },
      { q: 'What is the argon and power consumption?', a: 'Argon 99.999 % (5N) with intelligent argon management to reduce consumption between sparks. AC 220 V / 50 Hz single-phase. Anti-reflux vacuum pump prevents optical chamber contamination.' },
      { q: 'What lead time should I plan for?', a: 'Approximately 30–45 working days for built-to-order PMT configurations. Stock units (common matrix configurations) ship in 15 days.' },
    ],
    ru: [
      { q: 'Зачем выбирать ФЭУ в 2026 году, а не CMOS?', a: 'ФЭУ-детекторы по-прежнему превосходят CMOS на высокоточных задачах следового анализа и по долговечности. JB-750 использует ФЭУ потому, что его применение — лаборатории сертификации и аэрокосмическая QA — требует отношения сигнал/шум и ресурса, которые CMOS пока не обеспечивает.' },
      { q: 'Чем JB-750 отличается от Noble T7?', a: 'T7 на CMOS, диапазон 120–800 нм, оптика 401 мм — для высокопоточных исследований. JB-750 на ФЭУ с оптикой 750 мм — выше разрешение и чувствительность к следовым элементам, но больше и дороже. Выбирайте JB-750, если работаете в сертификации и образцы оправдывают такую точность.' },
      { q: 'Расход аргона и питание?', a: 'Аргон 99.999 % (5N) с интеллектуальным управлением расходом между разрядами. AC 220 В / 50 Гц одна фаза. Антиреверсный вакуумный насос защищает оптику от загрязнения.' },
      { q: 'Срок поставки?', a: 'Около 30–45 рабочих дней для конфигураций под заказ с ФЭУ. Складские (стандартные матрицы) — 15 дней.' },
    ],
    es: [
      { q: '¿Por qué elegir PMT sobre CMOS en 2026?', a: 'Los detectores PMT siguen superando al CMOS en trabajo de trazas de alta gama y estabilidad a largo plazo. El JB-750 usa PMT porque la aplicación — laboratorios de certificación y QA aeroespacial — exige una relación señal/ruido y vida útil que el CMOS aún no iguala.' },
      { q: '¿Cómo se compara el JB-750 con el Noble T7?', a: 'El T7 es CMOS con 120–800 nm y óptica de 401 mm: investigación de alto rendimiento. El JB-750 es PMT con óptica de 750 mm — mayor resolución espectral y mejor sensibilidad a trazas, pero más grande y costoso. Elija JB-750 si su trabajo es certificación.' },
      { q: '¿Consumo de argón y energía?', a: 'Argón 99.999 % (5N) con gestión inteligente para reducir consumo entre chispas. AC 220 V / 50 Hz monofásico. Bomba al vacío anti-retorno protege la cámara óptica.' },
      { q: '¿Plazo?', a: 'Aproximadamente 30–45 días hábiles para configuraciones PMT a pedido. Stock (matrices comunes) en 15 días.' },
    ],
    ar: [
      { q: 'لماذا أختار نظام PMT بدلاً من CMOS في 2026؟', a: 'لا تزال كاشفات PMT تتفوّق على CMOS في الأعمال الراقية للعناصر النزرة وفي الاستقرار طويل المدى. يعتمد JB-750 على PMT لأنّ تطبيقه — مختبرات الاعتماد ومراقبة جودة الطيران — يتطلّب نسبة إشارة إلى ضوضاء وعمراً تشغيلياً لا يضاهيه CMOS بعد.' },
      { q: 'كيف تتمّ المقارنة بين JB-750 و Noble T7؟', a: 'الـ T7 يعتمد على CMOS بنطاق 120–800 نانومتر وبصرية 401 ملم لأعمال البحث ذات الإنتاجية العالية. أما JB-750 فيستخدم PMT وبصرية 750 ملم — دقّة طيفية أعلى وحساسية أفضل للعناصر النزرة، لكنّه أكبر وأغلى. اختر JB-750 إذا كان عملك هو الاعتماد والعيّنات تستحقّ هذه الدقّة.' },
      { q: 'ما استهلاك الأرغون والكهرباء؟', a: 'أرغون 99.999 % (5N) مع إدارة ذكية للاستهلاك بين الشرارات. كهرباء AC 220 فولت / 50 هرتز أحادي الطور. مضخّة تفريغ بتصميم مانع للارتجاع تحمي الغرفة البصرية من التلوّث.' },
      { q: 'ما مدّة التسليم؟', a: 'نحو 30–45 يوم عمل لتكوينات PMT المصنوعة حسب الطلب. الوحدات الجاهزة (مصفوفات شائعة) تُشحَن خلال 15 يوماً.' },
    ],
  },
};
