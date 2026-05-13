import type { CompareRecord } from './_types';

export const compare: CompareRecord = {
  slug: 'exquis-t4-vs-innovate-t5',
  datePublished: '2026-05-14',
  sideA: {
    name: 'Exquis T4',
    productSlug: 'exquis-t4',
    blurb: {
      en: 'Entry-level benchtop OES — 33 kg, sealed-cycle argon, 4 base matrices',
      ru: 'Бюджетный настольный ОЭС — 33 кг, замкнутый аргон, 4 базовые матрицы',
      es: 'OES de mesa nivel de entrada — 33 kg, argón en ciclo cerrado, 4 matrices base',
      ar: 'OES مكتبي لمستوى الدخول — 33 كغ، أرغون بدورة مغلقة، 4 مصفوفات أساسية',
    },
  },
  sideB: {
    name: 'Innovate T5',
    productSlug: 'innovate-t5',
    blurb: {
      en: 'Production-floor workhorse — 78 kg, vacuum chamber, 10 base matrices',
      ru: 'Цеховая рабочая лошадка — 78 кг, вакуумная оптика, 10 базовых матриц',
      es: 'Caballo de planta — 78 kg, cámara al vacío, 10 matrices base',
      ar: 'خيار خطّ الإنتاج — 78 كغ، غرفة بصرية مفرّغة، 10 مصفوفات أساسية',
    },
  },
  title: {
    en: 'Exquis T4 vs Innovate T5 — JIEBO benchtop OES comparison',
    ru: 'Exquis T4 vs Innovate T5 — сравнение настольных ОЭС JIEBO',
    es: 'Exquis T4 vs Innovate T5 — comparativa de OES de mesa JIEBO',
    ar: 'مقارنة Exquis T4 و Innovate T5 — أجهزة OES المكتبية من JIEBO',
  },
  description: {
    en: 'Side-by-side comparison of JIEBO Exquis T4 (entry-level benchtop OES, sealed argon) and Innovate T5 (production-floor OES, vacuum chamber): wavelength range, matrices covered, weight, footprint, and budget guidance.',
    ru: 'Прямое сравнение JIEBO Exquis T4 (бюджетный настольный ОЭС, замкнутый аргон) и Innovate T5 (цеховой ОЭС, вакуумная оптика): диапазон, матрицы, масса, габариты и рекомендации по бюджету.',
    es: 'Comparativa directa entre JIEBO Exquis T4 (OES de mesa de entrada, argón sellado) e Innovate T5 (OES de planta, cámara al vacío): rango espectral, matrices, peso, huella y orientación de presupuesto.',
    ar: 'مقارنة جانبية بين JIEBO Exquis T4 (OES مكتبي لمستوى الدخول بأرغون مغلق) و Innovate T5 (OES لخط الإنتاج بغرفة مفرّغة): النطاق الطيفي والمصفوفات والوزن والحجم وإرشادات الميزانية.',
  },
  intro: {
    en: 'Both the Exquis T4 and Innovate T5 are JIEBO benchtop spark OES instruments built on the same 401 mm Paschen-Runge optics. The T4 is the budget-and-space-conscious choice — 33 kg, sealed argon recirculation, 4 base matrices — and serves a single-matrix QC workflow. The T5 trades footprint for capability: a vacuum optical chamber, wider 140–680 nm window and 10 base matrices, suitable for plants that need multi-alloy coverage on one instrument.',
    ru: 'Оба прибора, Exquis T4 и Innovate T5, — настольные искровые ОЭС от JIEBO на общей оптике Пашен-Рунге с фокусом 401 мм. T4 — выбор для ограниченного бюджета и места: 33 кг, замкнутая циркуляция аргона, 4 базовые матрицы — подходит для одноматричного QC-цикла. T5 жертвует габаритом ради возможностей: вакуумная оптика, шире окно 140–680 нм и 10 базовых матриц — для производств, которым нужна универсальность на одном приборе.',
    es: 'Tanto el Exquis T4 como el Innovate T5 son OES de chispa de mesa de JIEBO construidos sobre la misma óptica Paschen-Runge de 401 mm. El T4 es la opción para presupuesto y espacio ajustados — 33 kg, recirculación cerrada de argón, 4 matrices base — y atiende un flujo de QC monomatriz. El T5 cambia tamaño por capacidad: cámara al vacío, ventana más amplia 140–680 nm y 10 matrices base, apto para plantas que requieren cobertura multi-aleación en un solo equipo.',
    ar: 'كلٌّ من Exquis T4 و Innovate T5 جهازا OES مكتبيان من JIEBO، مبنيّان على نفس البصرية Paschen-Runge بطول 401 ملم. يمثّل T4 خيار الميزانية والمساحة: 33 كغ ودورة أرغون مغلقة و4 مصفوفات أساسية — يلائم سير عمل ضبط الجودة بمصفوفة واحدة. أمّا T5 فيتنازل عن الحجم مقابل القدرة: غرفة مفرّغة ونافذة أوسع 140–680 نانومتر و10 مصفوفات أساسية — مناسب للمصانع التي تحتاج تغطية متعدّدة السبائك على جهاز واحد.',
  },
  specRows: [
    { labelKey: 'optical_system', valueA: 'Sealed-cycle argon chamber', valueB: 'Vacuum optical chamber' },
    { labelKey: 'wavelength', valueA: '160–580 nm', valueB: '140–680 nm' },
    { labelKey: 'detector', valueA: 'Low-noise integrated CMOS', valueB: 'Hamamatsu CMOS, per-channel config' },
    { labelKey: 'matrices', valueA: 'Fe, Al, Cu, Zn (4 base)', valueB: 'Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb (10 base)' },
    { labelKey: 'dimensions', valueA: '525 × 635 × 290 mm', valueB: '590 × 790 × 350 mm' },
    { labelKey: 'weight', valueA: '33 kg', valueB: '78 kg' },
    { labelKey: 'best_for', valueA: 'Furnace-side single-matrix QC', valueB: 'Multi-alloy production QC' },
  ],
  chooseA: {
    en: [
      'Budget is the deciding constraint and your workflow centres on a single matrix (Fe, Al, Cu or Zn)',
      'You need furnace-side or rolling-cart deployment — 33 kg is one-person installable',
      'Argon supply is expensive or restricted and the sealed-cycle chamber materially lowers monthly consumption',
      'You only need standard 160–580 nm coverage; trace elements below the T4 window are not part of your method',
    ],
    ru: [
      'Бюджет — главный ограничитель, а рабочий процесс сосредоточен на одной матрице (Fe, Al, Cu или Zn)',
      'Нужно использование у печи или на тележке — 33 кг ставит один человек',
      'Аргон дорогой или ограничен, и замкнутая циркуляция заметно снижает месячный расход',
      'Достаточно стандартного покрытия 160–580 нм; следовые элементы за пределами окна T4 не входят в метод',
    ],
    es: [
      'El presupuesto es el factor decisivo y su flujo se centra en una sola matriz (Fe, Al, Cu o Zn)',
      'Necesita despliegue junto al horno o en carro — 33 kg se instala con una persona',
      'El suministro de argón es caro o limitado y la cámara de ciclo cerrado reduce de forma notable el consumo mensual',
      'Solo necesita la cobertura estándar 160–580 nm; las trazas fuera de la ventana del T4 no forman parte de su método',
    ],
    ar: [
      'الميزانية هي القيد الحاسم وسير عملك يدور حول مصفوفة واحدة (Fe أو Al أو Cu أو Zn)',
      'تحتاج تشغيلاً بجوار الفرن أو على عربة دفع — 33 كغ يثبّتها شخص واحد',
      'تزويد الأرغون مكلف أو محدود، والغرفة المغلقة تخفض الاستهلاك الشهري بشكل واضح',
      'تكتفي بالتغطية القياسية 160–580 نانومتر، ولا تتطلّب طريقتك عناصر نزرة خارج نافذة T4',
    ],
  },
  chooseB: {
    en: [
      'Your plant runs multiple alloy families (steel, aluminum, copper, magnesium, nickel) and needs one instrument to cover all',
      'You need the wider 140–680 nm range — important for elements like Mg, Ti, Sn, Pb and trace work',
      'Vacuum optics rather than sealed argon are mandated by your QA method or the customer specification',
      'Production volume justifies a 78 kg permanent QC station instead of a portable benchtop',
    ],
    ru: [
      'На предприятии работают с несколькими семействами сплавов (сталь, алюминий, медь, магний, никель) и нужен один прибор на всё',
      'Нужен расширенный диапазон 140–680 нм — важен для Mg, Ti, Sn, Pb и следового анализа',
      'Вакуумная оптика, а не закрытый аргон, требуется методикой QA или спецификацией заказчика',
      'Объём производства оправдывает стационарную QC-станцию массой 78 кг вместо переносной настольной',
    ],
    es: [
      'Su planta procesa varias familias de aleación (acero, aluminio, cobre, magnesio, níquel) y necesita un solo equipo para todas',
      'Necesita el rango ampliado 140–680 nm — importante para Mg, Ti, Sn, Pb y trabajo de trazas',
      'Su método QA o la especificación del cliente exige óptica al vacío en lugar de argón sellado',
      'El volumen de producción justifica una estación QC permanente de 78 kg en lugar de un equipo de mesa portátil',
    ],
    ar: [
      'يعمل مصنعك على عدّة عائلات سبائك (الصلب، الألمنيوم، النحاس، المغنيسيوم، النيكل) ويحتاج جهازاً واحداً يغطّيها كلّها',
      'تحتاج النطاق الموسّع 140–680 نانومتر — مهم لـ Mg و Ti و Sn و Pb وأعمال العناصر النزرة',
      'تشترط طريقتك في ضبط الجودة أو مواصفات العميل بصريات مفرّغة بدل الأرغون المغلق',
      'يبرّر حجم الإنتاج محطّة QC ثابتة بوزن 78 كغ بدل جهاز مكتبي محمول',
    ],
  },
  faq: {
    en: [
      { q: 'Can a T4 calibration be moved to a T5?', a: 'Calibration curves don\'t port directly — the T5 has a different optical chamber (vacuum vs sealed argon) and a wider wavelength range. The chemistry knowledge and operator training transfer fully, but expect re-standardisation when migrating a method.' },
      { q: 'How different is argon consumption?', a: 'The T4\'s sealed-cycle chamber uses noticeably less argon for routine work — useful in regions where 5N argon is expensive or hard to source. The T5 vacuum chamber still uses argon for the spark, but the chamber itself does not need continuous flushing.' },
      { q: 'Which is faster per measurement?', a: 'Both run a typical single-sample analysis in roughly the same time (tens of seconds). The T5 advantage is broader element coverage in one burn, not raw speed.' },
      { q: 'I\'m on a tight budget but might need more matrices in 2–3 years. Which do I buy?', a: 'Buy the T4 if budget is the binding constraint today — it pays back faster. When the multi-matrix need is real, the T5 typically arrives as a second instrument while the T4 stays on for incoming inspection.' },
    ],
    ru: [
      { q: 'Можно ли перенести калибровку с T4 на T5?', a: 'Калибровочные кривые напрямую не переносятся — у T5 другая оптика (вакуум против замкнутого аргона) и более широкий диапазон. Химические знания и обучение операторов переносятся полностью, но при миграции методики потребуется пересертификация.' },
      { q: 'Насколько отличается расход аргона?', a: 'Замкнутая камера T4 заметно экономит аргон при рутинной работе — полезно там, где аргон 5N дорогой или труднодоступный. Вакуумная камера T5 всё равно использует аргон для искры, но саму камеру не нужно постоянно продувать.' },
      { q: 'Кто быстрее на измерение?', a: 'Время одного анализа примерно одинаковое (десятки секунд). Преимущество T5 — более широкое покрытие элементов за один поджиг, а не сырая скорость.' },
      { q: 'Бюджет жёсткий, но через 2–3 года могут понадобиться новые матрицы. Что брать?', a: 'Берите T4, если сейчас определяющий фактор — бюджет: он окупится быстрее. Когда потребность в нескольких матрицах станет реальной, T5 обычно докупают как второй прибор, а T4 остаётся на входном контроле.' },
    ],
    es: [
      { q: '¿Se puede mover una calibración del T4 al T5?', a: 'Las curvas no portan directamente — el T5 tiene cámara óptica distinta (vacío vs argón sellado) y rango más amplio. El conocimiento químico y la formación de operadores se transfieren totalmente, pero al migrar un método hay que re-estandarizar.' },
      { q: '¿Cuánto difiere el consumo de argón?', a: 'La cámara de ciclo cerrado del T4 consume notablemente menos argón en trabajo rutinario — útil donde el 5N es caro o difícil de conseguir. La cámara al vacío del T5 sigue usando argón para la chispa, pero no necesita purgar continuamente la cámara.' },
      { q: '¿Cuál es más rápido por medición?', a: 'Una medición típica tarda lo mismo en ambos (decenas de segundos). La ventaja del T5 es la cobertura más amplia en una sola chispa, no velocidad bruta.' },
      { q: 'Presupuesto ajustado hoy pero podría necesitar más matrices en 2–3 años. ¿Qué compro?', a: 'Compre el T4 si hoy el limitante es el presupuesto — paga más rápido. Cuando la necesidad multi-matriz sea real, el T5 suele llegar como segundo equipo y el T4 permanece para inspección de recepción.' },
    ],
    ar: [
      { q: 'هل تُنقل معايرة T4 إلى T5؟', a: 'لا تنتقل المنحنيات مباشرة — يختلف T5 في غرفته البصرية (مفرّغة مقابل أرغون مغلق) ونطاقه الأوسع. تنتقل المعرفة الكيميائية وتدريب المشغّلين كاملةً، لكن عند ترحيل طريقة فعليّة توقّع إعادة معيرة.' },
      { q: 'كم يختلف استهلاك الأرغون؟', a: 'تستهلك غرفة T4 ذات الدورة المغلقة أرغوناً أقلّ بشكل ملحوظ في العمل الروتيني — مفيد حيث يكون 5N باهظاً أو يصعب توفيره. تظلّ غرفة T5 المفرّغة تستخدم الأرغون للشرارة، لكن الغرفة نفسها لا تحتاج تطهيراً مستمرّاً.' },
      { q: 'أيّهما أسرع لكل قياس؟', a: 'تستغرق العيّنة الواحدة وقتاً متقارباً في كليهما (عشرات الثواني). ميزة T5 هي تغطية أوسع للعناصر في شرارة واحدة، لا السرعة المجرّدة.' },
      { q: 'الميزانية ضيّقة اليوم، لكن قد أحتاج مصفوفات إضافية بعد 2-3 سنوات. ماذا أشتري؟', a: 'اشتر T4 إذا كانت الميزانية هي القيد الحقيقي اليوم — سيردّ كلفته أسرع. وعندما تصبح الحاجة لمصفوفات متعدّدة فعليّة، يُضاف T5 عادةً كجهاز ثانٍ ويبقى T4 لفحص الاستلام.' },
    ],
  },
};
