import type { CompareRecord } from './_types';

export const compare: CompareRecord = {
  slug: 'innovate-t5-vs-noble-t7',
  datePublished: '2026-05-13',
  sideA: {
    name: 'Innovate T5',
    productSlug: 'innovate-t5',
    blurb: {
      en: 'Production-floor workhorse — vacuum chamber, 78 kg, 10 base matrices',
      ru: 'Рабочая лошадка цеха — вакуумная оптика, 78 кг, 10 базовых матриц',
      es: 'Caballo de batalla de planta — cámara al vacío, 78 kg, 10 matrices base',
      ar: 'خيار خطّ الإنتاج — غرفة بصرية مفرّغة، 78 كغ، 10 مصفوفات أساسية',
    },
  },
  sideB: {
    name: 'Noble T7',
    productSlug: 'noble-t7',
    blurb: {
      en: 'Research-grade — constant-temp chamber (±0.1 °C), sub-10-ppm accuracy, 160 kg',
      ru: 'Исследовательский класс — термостат (±0.1 °C), точность ниже 10 ppm, 160 кг',
      es: 'Grado investigación — cámara termostatizada (±0.1 °C), precisión < 10 ppm, 160 kg',
      ar: 'بدرجة بحثية — غرفة ثابتة الحرارة (±0.1 °م)، دقّة أقلّ من 10 ppm، 160 كغ',
    },
  },
  title: {
    en: 'Innovate T5 vs Noble T7 — JIEBO OES spectrometer comparison',
    ru: 'Innovate T5 vs Noble T7 — сравнение ОЭС-спектрометров JIEBO',
    es: 'Innovate T5 vs Noble T7 — comparativa de espectrómetros OES JIEBO',
    ar: 'مقارنة Innovate T5 و Noble T7 — أجهزة طيف الانبعاث الضوئي من JIEBO',
  },
  description: {
    en: 'Side-by-side comparison of JIEBO Innovate T5 (production-floor OES) and Noble T7 (research-grade OES): wavelength range, detector, detection limit, and when to choose each model.',
    ru: 'Прямое сравнение JIEBO Innovate T5 (цеховой ОЭС) и Noble T7 (исследовательский ОЭС): диапазон, детектор, предел обнаружения и рекомендации по выбору.',
    es: 'Comparativa directa entre JIEBO Innovate T5 (OES de planta) y Noble T7 (OES de investigación): rango espectral, detector, límite de detección y criterios de elección.',
    ar: 'مقارنة جانبية بين JIEBO Innovate T5 (لخطّ الإنتاج) و Noble T7 (للأبحاث): النطاق الطيفي والكاشف وحدّ الكشف ومتى تختار أيّاً منهما.',
  },
  intro: {
    en: 'Both the Innovate T5 and Noble T7 are full-spectrum JIEBO OES spectrometers built on the same 401 mm Paschen-Runge optics. They serve different buyers: the T5 is optimised for daily production-floor QC at moderate weight and footprint, while the T7 trades portability for a wider 120–800 nm window, a constant-temperature optical chamber, and research-grade trace-element accuracy. The right choice depends on whether your bottleneck is sample throughput or analytical precision.',
    ru: 'Оба прибора, Innovate T5 и Noble T7, — полноспектральные ОЭС от JIEBO на общей оптике Пашен-Рунге с фокусом 401 мм. Они ориентированы на разных покупателей: T5 оптимизирован для ежедневного цехового QC при умеренном весе и габаритах, тогда как T7 жертвует мобильностью ради более широкого окна 120–800 нм, термостата оптики и исследовательской точности по следам. Выбор зависит от того, что для вас критичнее — производительность или прецизионность.',
    es: 'Tanto el Innovate T5 como el Noble T7 son OES de espectro completo de JIEBO construidos sobre la misma óptica Paschen-Runge de 401 mm. Atienden compradores distintos: el T5 está optimizado para QC diario en planta con peso y huella moderados, mientras que el T7 sacrifica portabilidad por una ventana más amplia de 120–800 nm, cámara termostatizada y precisión de grado investigación en trazas. La elección depende de si su cuello de botella es throughput de muestras o precisión analítica.',
    ar: 'كلٌّ من Innovate T5 و Noble T7 جهازا طيف انبعاث ضوئي بطيف كامل من JIEBO، مبنيّان على نفس البصرية Paschen-Runge بطول بؤري 401 ملم. يخدمان جمهورَين مختلفَين: T5 مُحسَّن لضبط الجودة اليومي في خطّ الإنتاج بوزن وحجم معتدلين، فيما يتنازل T7 عن المحمولية مقابل نافذة أوسع 120–800 نانومتر وغرفة بصرية ثابتة الحرارة ودقّة بحثية في العناصر النزرة. يعتمد الاختيار على ما إذا كان عنق الزجاجة لديك هو الإنتاجية أم الدقّة التحليلية.',
  },
  specRows: [
    { labelKey: 'wavelength', valueA: '140–680 nm', valueB: '120–800 nm' },
    { labelKey: 'optical_system', valueA: 'Vacuum optical chamber', valueB: 'Constant-temperature chamber (±0.1 °C)' },
    { labelKey: 'detector', valueA: 'Hamamatsu CMOS, per-channel config', valueB: 'Research-grade CMOS, <10 ppm accuracy' },
    { labelKey: 'matrices', valueA: 'Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb', valueB: 'Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb' },
    { labelKey: 'detection_limit', valueA: 'Single-digit ppm with good calibration', valueB: 'Sub-10 ppm targeted, sub-ppm achievable' },
    { labelKey: 'dimensions', valueA: '590 × 790 × 350 mm', valueB: '610 × 740 × 1140 mm' },
    { labelKey: 'weight', valueA: '78 kg', valueB: '160 kg' },
    { labelKey: 'best_for', valueA: 'Production-floor QC, daily throughput', valueB: 'Research, certification, trace work' },
  ],
  chooseA: {
    en: [
      'You run daily QC on iron, steel or non-ferrous casting and need a fast, compact instrument that fits in a 1 m² lab corner',
      'Detection at single-digit ppm is sufficient for your application (most foundry and recycling QC)',
      'Your team prefers a benchtop footprint and standard 78 kg single-person installation',
      'Your budget targets a high-volume production-floor analyzer, not a flagship lab instrument',
    ],
    ru: [
      'Вы выполняете ежедневный QC чёрных или цветных отливок и нужен быстрый компактный прибор, помещающийся в углу лаборатории 1 м²',
      'Обнаружение до единиц ppm закрывает ваши задачи (большинство литейных и металлоперерабатывающих производств)',
      'Команда предпочитает настольный форм-фактор и стандартный монтаж одним человеком (78 кг)',
      'Бюджет ориентирован на массовый цеховой анализатор, а не на флагман лаборатории',
    ],
    es: [
      'Realiza QC diario en hierro, acero o no ferrosos y necesita un equipo compacto y rápido que quepa en un rincón de 1 m²',
      'La detección en ppm de un solo dígito es suficiente para su aplicación (mayoría de fundiciones y reciclaje)',
      'Su equipo prefiere un formato de mesa con instalación estándar de una persona (78 kg)',
      'El presupuesto se orienta a un analizador de planta de alto volumen, no a un instrumento insignia',
    ],
    ar: [
      'تُجري ضبط جودة يوميّاً للحديد أو الصلب أو المعادن غير الحديدية وتحتاج جهازاً مدمجاً وسريعاً يلائم ركناً مختبرياً بمساحة 1 م²',
      'الكشف بمستوى أحادي الرقم ppm كافٍ لتطبيقك (معظم المسابك وإعادة التدوير)',
      'يفضّل فريقك جهازاً مكتبياً بتركيب قياسي يقوم به شخص واحد (78 كغ)',
      'تستهدف الميزانية محلّلاً عالي الإنتاجية لخطّ الإنتاج، لا جهازاً مختبرياً رائداً',
    ],
  },
  chooseB: {
    en: [
      'You need trace-element detection below 10 ppm (aerospace QA, certification, R&D)',
      'Spectral position must remain stable across long shifts or 24/7 operation — the ±0.1 °C thermostat eliminates drift recalibration',
      'You analyze a wide variety of matrices and need the extended 120–800 nm window for elements outside the T5 range',
      'You have lab floor space and infrastructure for a 160 kg floor-standing instrument',
    ],
    ru: [
      'Нужно определение следов ниже 10 ppm (аэрокосмическая QA, сертификация, НИОКР)',
      'Спектр должен оставаться стабильным в течение долгих смен или режима 24/7 — термостат ±0.1 °C устраняет повторные калибровки',
      'Анализируете широкий набор матриц и нужно расширенное окно 120–800 нм для элементов вне диапазона T5',
      'Есть лабораторная площадь и инфраструктура под напольный прибор массой 160 кг',
    ],
    es: [
      'Necesita detección de trazas por debajo de 10 ppm (QA aeroespacial, certificación, I+D)',
      'La posición espectral debe mantenerse estable en turnos largos o 24/7 — el termostato ±0.1 °C elimina recalibraciones de deriva',
      'Analiza una variedad amplia de matrices y necesita la ventana ampliada 120–800 nm para elementos fuera del rango del T5',
      'Dispone de espacio e infraestructura para un equipo de pie de 160 kg',
    ],
    ar: [
      'تحتاج كشفاً للعناصر النزرة دون 10 ppm (مراقبة جودة الطيران، الاعتماد، البحث والتطوير)',
      'يجب أن يبقى الموضع الطيفي ثابتاً عبر ورديات طويلة أو تشغيل 24/7 — منظّم الحرارة ±0.1 °م يلغي إعادة المعايرة بسبب الانجراف',
      'تحلّل مصفوفات متنوّعة وتحتاج النافذة الموسّعة 120–800 نانومتر لعناصر خارج نطاق T5',
      'تتوفّر مساحة مختبر وبنية تحتية لجهاز أرضي بوزن 160 كغ',
    ],
  },
  faq: {
    en: [
      { q: 'Do the T5 and T7 share calibrations and sample preparation methods?', a: 'Yes. Both use the same 401 mm Paschen-Runge optics and accept identical solid metal sample disks. Calibration curves built on one can be ported to the other with re-standardisation, and operator training transfers directly.' },
      { q: 'Can the T5 be upgraded to T7 performance later?', a: 'No — the wider wavelength range (120 nm vs 140 nm low end) and the constant-temperature chamber are hardware-level differences. A site upgrade is not offered; customers who outgrow the T5 typically keep it as a second-line instrument and add a T7.' },
      { q: 'Which model is preferred for aerospace and certification work?', a: 'The Noble T7. Trace-element requirements in aerospace (e.g. ASTM E1097, AMS specifications) usually demand sub-10 ppm reliability across long campaigns — the T7 thermostat is the deciding feature.' },
      { q: 'How much does argon consumption differ between the two?', a: 'Both run on argon 99.999 % (5N) at roughly 3 L/min during measurement. Total monthly consumption depends almost entirely on sample volume, not on which model is installed.' },
    ],
    ru: [
      { q: 'У T5 и T7 одинаковая калибровка и пробоподготовка?', a: 'Да. Оба используют общую оптику Пашен-Рунге 401 мм и работают с одинаковыми образцами твёрдого металла. Калибровочные кривые переносятся между приборами с пересертификацией, обучение операторов взаимно зачитывается.' },
      { q: 'Можно ли позже модернизировать T5 до уровня T7?', a: 'Нет — расширенный диапазон (120 нм против 140 нм по нижнему краю) и термостат — аппаратные отличия. Обновление на месте не предлагается; обычно заказчики оставляют T5 как второй прибор и докупают T7.' },
      { q: 'Какую модель выбрать для аэрокосмоса и сертификации?', a: 'Noble T7. Требования по следам в авиакосмосе (ASTM E1097, AMS) обычно требуют надёжных результатов ниже 10 ppm в длинных кампаниях — решающий фактор здесь именно термостат T7.' },
      { q: 'Насколько отличается расход аргона?', a: 'Оба работают на аргоне 99.999 % (5N), расход на искру около 3 л/мин при измерении. Месячный расход определяется объёмом образцов, а не моделью.' },
    ],
    es: [
      { q: '¿T5 y T7 comparten calibraciones y preparación de muestras?', a: 'Sí. Ambos usan la misma óptica Paschen-Runge de 401 mm y aceptan los mismos discos sólidos de metal. Las curvas de calibración se transfieren con re-estandarización y la formación de operadores aplica a ambos.' },
      { q: '¿Se puede actualizar el T5 al T7 después?', a: 'No — el rango ampliado (120 vs 140 nm) y la cámara termostatizada son diferencias de hardware. No se ofrece upgrade in situ; los clientes que superan el T5 lo mantienen como instrumento secundario y añaden un T7.' },
      { q: '¿Cuál se prefiere para aeroespacial y certificación?', a: 'El Noble T7. Los requisitos de trazas en aeroespacial (ASTM E1097, especificaciones AMS) exigen fiabilidad por debajo de 10 ppm en campañas largas — el termostato del T7 es el factor decisivo.' },
      { q: '¿Cuánto difiere el consumo de argón?', a: 'Ambos usan argón 99.999 % (5N) a ~3 L/min durante la chispa. El consumo mensual depende del volumen de muestras, no del modelo.' },
    ],
    ar: [
      { q: 'هل يتشارك T5 و T7 المعايرات وطرق تحضير العيّنات؟', a: 'نعم. كلاهما يستخدم البصرية Paschen-Runge بطول 401 ملم ويقبل أقراص العيّنات المعدنية الصلبة نفسها. تُنقل منحنيات المعايرة بينهما مع إعادة معيرة، وتنطبق دورات تدريب المشغّلين على كليهما.' },
      { q: 'هل يمكن ترقية T5 لاحقاً ليصل أداء T7؟', a: 'لا — النطاق الأوسع (120 مقابل 140 نانومتر) والغرفة ثابتة الحرارة فروقات على مستوى العتاد. لا تتوفّر ترقية موقعية؛ يحتفظ العملاء عادةً بـ T5 كجهاز ثانوي ويضيفون T7.' },
      { q: 'أيّهما أنسب لقطاع الطيران والاعتماد؟', a: 'Noble T7. متطلّبات العناصر النزرة في الطيران (ASTM E1097 ومواصفات AMS) تقتضي موثوقية أقلّ من 10 ppm في حملات طويلة — والعنصر الحاسم هنا منظّم حرارة T7.' },
      { q: 'كم يختلف استهلاك الأرغون بين الجهازين؟', a: 'كلاهما يعمل بأرغون 99.999 % (5N) بمعدّل نحو 3 لتر/دقيقة أثناء الشرارة. يعتمد الاستهلاك الشهري على عدد العيّنات، لا على الموديل.' },
    ],
  },
};
