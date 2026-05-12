// Source: Jiebo official product brochure (2026-05-12). Spec values verified against printed datasheet.
import type { Locale } from '../consts';

export const t5Specs: Array<{ key: string; label: Record<Locale, string>; value: string }> = [
  { key: 'optical_system', label: { en: 'Optical system', ru: 'Оптическая система', es: 'Sistema óptico', ar: 'النظام البصري' }, value: 'Paschen-Runge mounting, vacuum optical chamber' },
  { key: 'focal_length', label: { en: 'Grating focal length', ru: 'Фокусное расстояние решётки', es: 'Distancia focal de la rejilla', ar: 'البُعد البؤري للمحزّز' }, value: '401 mm' },
  { key: 'wavelength', label: { en: 'Wavelength range', ru: 'Спектральный диапазон', es: 'Rango espectral', ar: 'النطاق الطيفي' }, value: '140–680 nm' },
  { key: 'detector', label: { en: 'Detector', ru: 'Детектор', es: 'Detector', ar: 'الكاشف' }, value: 'Hamamatsu CMOS, individually configurable per channel' },
  { key: 'light_source', label: { en: 'Excitation source', ru: 'Источник возбуждения', es: 'Fuente de excitación', ar: 'مصدر الإثارة' }, value: 'All-digital pulse-synthesis programmable spark source' },
  { key: 'matrices', label: { en: 'Base matrices', ru: 'Базовые матрицы', es: 'Matrices base', ar: 'المصفوفات الأساسية' }, value: 'Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb' },
  { key: 'power', label: { en: 'Operating power', ru: 'Питание', es: 'Alimentación', ar: 'مصدر الطاقة' }, value: 'AC 220 V / 50 Hz' },
  { key: 'env', label: { en: 'Operating temp / humidity', ru: 'Температура / влажность', es: 'Temperatura / humedad', ar: 'الحرارة / الرطوبة' }, value: '10–30 °C / 20–80 % RH' },
  { key: 'dimensions', label: { en: 'Dimensions (L × W × H)', ru: 'Габариты (Д × Ш × В)', es: 'Dimensiones (L × An × Al)', ar: 'الأبعاد (ط × ع × ا)' }, value: '590 × 790 × 350 mm' },
  { key: 'weight', label: { en: 'Weight', ru: 'Масса', es: 'Peso', ar: 'الوزن' }, value: '78 kg' },
];

export const t5Overview: Record<Locale, string> = {
  en: 'The Innovate T5 is a full-spectrum optical emission spectrometer with a vacuum optical chamber and all-digital programmable excitation source. It uses Hamamatsu CMOS detectors that combine the wide-spectrum coverage of CCD with the low detection limits of PMT for non-metallic elements (C, S, P, B), making it suitable for foundries, metallurgy labs, and metal-fabrication QC.',
  ru: 'Innovate T5 — полноспектральный оптико-эмиссионный спектрометр с вакуумной оптикой и полностью цифровым программируемым источником возбуждения. Использует CMOS-детекторы Hamamatsu, объединяющие широкое спектральное покрытие ПЗС с низкими пределами обнаружения ФЭУ для неметаллов (C, S, P, B). Подходит для литейных, металлургических лабораторий и контроля качества металлообработки.',
  es: 'El Innovate T5 es un espectrómetro de emisión óptica de espectro completo con cámara óptica al vacío y fuente de excitación digital programable. Utiliza detectores CMOS Hamamatsu que combinan la cobertura espectral amplia del CCD con los límites de detección bajos del PMT para elementos no metálicos (C, S, P, B), idóneo para fundiciones, laboratorios metalúrgicos y control de calidad metalmecánico.',
  ar: 'الجهاز Innovate T5 هو مطياف انبعاث ضوئي بطيف كامل مزوّد بغرفة بصرية مفرّغة ومصدر إثارة رقمي قابل للبرمجة. يستخدم كاشفات CMOS من Hamamatsu تجمع بين اتساع طيف CCD وحدود الكشف المنخفضة الخاصة بـ PMT للعناصر غير المعدنية (الكربون والكبريت والفوسفور والبورون)، ممّا يجعله مناسباً للمسابك ومختبرات المعادن وضبط جودة التصنيع المعدني.',
};

export const t5Applications: Record<Locale, string[]> = {
  en: [
    'Iron and steel foundries — incoming raw material verification and finished casting analysis',
    'Aluminum, copper, magnesium and zinc alloy production — composition control of Al-Si, Al-Mg, brass and bronze',
    'Scrap metal recycling — fast grade identification and contaminant screening',
    'Aerospace and automotive QA — trace-element inspection on Fe-, Al-, Mg-, Ti-based parts',
    'Scientific research and material development — flexible curve-fitting for unknown samples',
  ],
  ru: [
    'Чёрная металлургия — входной контроль сырья и анализ готовых отливок',
    'Производство сплавов Al, Cu, Mg, Zn — контроль состава Al-Si, Al-Mg, латуни и бронзы',
    'Переработка лома — быстрое определение марки и контроль примесей',
    'Контроль качества в аэрокосмосе и автопроме — следовые элементы в деталях на основе Fe, Al, Mg, Ti',
    'НИОКР и разработка новых материалов — гибкая подгонка калибровочных кривых для неизвестных образцов',
  ],
  es: [
    'Fundición de hierro y acero — verificación de materia prima entrante y análisis de piezas terminadas',
    'Producción de aleaciones de Al, Cu, Mg y Zn — control de composición de Al-Si, Al-Mg, latón y bronce',
    'Reciclaje de chatarra — identificación rápida de grado y detección de contaminantes',
    'QA aeroespacial y automotriz — trazas en piezas de Fe, Al, Mg, Ti',
    'Investigación y desarrollo de materiales — ajuste flexible de curvas para muestras desconocidas',
  ],
  ar: [
    'مسابك الحديد والصلب — التحقّق من المواد الخام وتحليل قطع الصبّ النهائية',
    'إنتاج سبائك الألمنيوم والنحاس والمغنيسيوم والزنك — ضبط تركيب Al-Si و Al-Mg والنحاس الأصفر والبرونز',
    'إعادة تدوير الخردة المعدنية — تحديد سريع للدرجة وفحص الملوّثات',
    'مراقبة جودة الطيران والسيارات — قياس العناصر النزرة في قطع أساسها Fe و Al و Mg و Ti',
    'البحث العلمي وتطوير المواد — مرونة في ضبط منحنيات المعايرة للعيّنات المجهولة',
  ],
};

export const t5Faq: Record<Locale, Array<{ q: string; a: string }>> = {
  en: [
    { q: 'What detector technology does the Innovate T5 use?', a: 'The T5 uses Hamamatsu CMOS detectors with per-channel parameter configuration, giving it the full-spectrum coverage of CCD together with the low detection limits of PMT for non-metallic elements such as C, S, P and B.' },
    { q: 'What sample matrices are supported?', a: 'Pre-calibrated base matrices: Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn and Pb. Additional matrices can be added by extending the calibration on the customer site.' },
    { q: 'What is the wavelength range?', a: '140–680 nm. The vacuum optical chamber gives access to the deep UV region required for C, P, S and B at low concentrations.' },
    { q: 'What is the difference between Innovate T5 and Noble T7?', a: 'Both share the 401 mm Paschen-Runge optics. The Noble T7 extends the wavelength range to 120–800 nm with a constant-temperature optical chamber (±0.1 °C) and is targeted at research-grade work requiring accuracy below 10 ppm. The T5 is the production-floor workhorse.' },
    { q: 'What is the lead time and warranty?', a: 'Lead time is 15 working days for stock configurations from confirmed order. Warranty is 12 months for parts and labor with an optional 24-month extension.' },
    { q: 'What argon purity is required?', a: 'Argon 99.999 % (5N). The vacuum chamber design reduces argon consumption compared to non-sealed instruments.' },
  ],
  ru: [
    { q: 'Какой детектор используется в Innovate T5?', a: 'CMOS-детекторы Hamamatsu с поканальной настройкой параметров. Это даёт полное спектральное покрытие, как у ПЗС, и низкие пределы обнаружения, как у ФЭУ, для неметаллов C, S, P, B.' },
    { q: 'Какие матрицы образцов поддерживаются?', a: 'Заводская калибровка: Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb. Дополнительные матрицы добавляются расширением калибровки на стороне заказчика.' },
    { q: 'Какой спектральный диапазон?', a: '140–680 нм. Вакуумная оптика обеспечивает доступ к глубокому УФ, нужному для определения C, P, S, B при низких концентрациях.' },
    { q: 'В чём разница между Innovate T5 и Noble T7?', a: 'У обоих общая оптика Пашен-Рунге с фокусом 401 мм. Noble T7 расширяет диапазон до 120–800 нм, имеет термостат ±0.1 °C и предназначен для исследовательских задач с точностью ниже 10 ppm. T5 — рабочая лошадка для цеха.' },
    { q: 'Какой срок поставки и гарантия?', a: 'Срок поставки складских конфигураций — 15 рабочих дней с момента подтверждения заказа. Гарантия 12 месяцев на запчасти и работу, опционально продление до 24 месяцев.' },
    { q: 'Какая чистота аргона требуется?', a: 'Аргон 99.999 % (5N). Вакуумная конструкция камеры снижает расход аргона по сравнению с негерметичными приборами.' },
  ],
  es: [
    { q: '¿Qué tecnología de detector usa el Innovate T5?', a: 'Detectores CMOS de Hamamatsu con parámetros configurables por canal: combinan la cobertura espectral del CCD con los bajos límites de detección del PMT para elementos no metálicos como C, S, P y B.' },
    { q: '¿Qué matrices admite?', a: 'Calibración de fábrica: Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn y Pb. Pueden añadirse matrices adicionales ampliando la calibración en sitio.' },
    { q: '¿Cuál es el rango espectral?', a: '140–680 nm. La cámara óptica al vacío permite acceder al UV profundo necesario para C, P, S y B en bajas concentraciones.' },
    { q: '¿Diferencia entre Innovate T5 y Noble T7?', a: 'Comparten la óptica Paschen-Runge de 401 mm. El Noble T7 amplía el rango a 120–800 nm con cámara termostatizada (±0.1 °C) para trabajo de investigación con precisión inferior a 10 ppm. El T5 es el caballo de batalla de producción.' },
    { q: '¿Plazo y garantía?', a: 'Plazo de 15 días hábiles desde confirmación del pedido para configuraciones en stock. Garantía de 12 meses en piezas y mano de obra, ampliable a 24 meses.' },
    { q: '¿Qué pureza de argón se requiere?', a: 'Argón 99.999 % (5N). La cámara al vacío reduce el consumo de argón frente a equipos no sellados.' },
  ],
  ar: [
    { q: 'ما تقنية الكاشف في جهاز Innovate T5؟', a: 'كاشفات CMOS من Hamamatsu يمكن ضبط معاييرها لكل قناة على حدة. يجمع ذلك بين اتساع طيف CCD وحدود الكشف المنخفضة لـ PMT في العناصر غير المعدنية مثل الكربون والكبريت والفوسفور والبورون.' },
    { q: 'ما المصفوفات المدعومة؟', a: 'المعايرة من المصنع: Fe و Al و Cu و Mg و Zn و Ni و Co و Ti و Sn و Pb. يمكن إضافة مصفوفات إضافية عبر توسيع المعايرة لدى العميل.' },
    { q: 'ما النطاق الطيفي؟', a: '140–680 نانومتر. توفّر الغرفة البصرية المفرّغة نفاذاً إلى منطقة الأشعة فوق البنفسجية العميقة اللازمة لقياس C و P و S و B بتراكيز منخفضة.' },
    { q: 'ما الفرق بين Innovate T5 و Noble T7؟', a: 'يتشاركان بصرية Paschen-Runge بطول بؤري 401 ملم. يوسّع Noble T7 النطاق إلى 120–800 نانومتر بغرفة بصرية ثابتة الحرارة (±0.1 °م)، وهو مخصّص للأعمال البحثية بدقّة أقلّ من 10 ppm. أما T5 فهو خيار خطّ الإنتاج.' },
    { q: 'ما مدّة التسليم والضمان؟', a: 'مدّة التسليم 15 يوم عمل من تأكيد الطلب للتكوينات المتوفّرة في المخزون. الضمان 12 شهراً على القطع واليد العاملة، مع إمكانية التمديد إلى 24 شهراً.' },
    { q: 'ما درجة نقاء الأرغون المطلوبة؟', a: 'أرغون 99.999 % (5N). يقلّل تصميم الغرفة المفرّغة من استهلاك الأرغون مقارنةً بالأجهزة غير المغلقة.' },
  ],
};
