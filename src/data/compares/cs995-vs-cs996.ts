import type { CompareRecord } from './_types';

export const compare: CompareRecord = {
  slug: 'cs995-vs-cs996',
  datePublished: '2026-05-14',
  sideA: {
    name: 'CS995',
    productSlug: 'cs995',
    blurb: {
      en: 'Bench-type C/S analyzer — 2.2 kW furnace, 115 kg, bench footprint',
      ru: 'Настольный C/S-анализатор — печь 2,2 кВт, 115 кг, настольный формат',
      es: 'Analizador C/S de mesa — horno 2,2 kW, 115 kg, formato bench',
      ar: 'محلّل C/S مكتبي — فرن 2.2 كيلوواط، 115 كغ، حجم منضدة',
    },
  },
  sideB: {
    name: 'CS996',
    productSlug: 'cs996',
    blurb: {
      en: 'Floor-standing workstation — 2.5 kW furnace, 215 kg, expandable cells',
      ru: 'Напольная рабочая станция — печь 2,5 кВт, 215 кг, расширяемые ячейки',
      es: 'Estación de pie — horno 2,5 kW, 215 kg, celdas expandibles',
      ar: 'محطّة أرضية — فرن 2.5 كيلوواط، 215 كغ، خلايا قابلة للتوسعة',
    },
  },
  title: {
    en: 'CS995 vs CS996 — JIEBO carbon & sulfur analyzer comparison',
    ru: 'CS995 vs CS996 — сравнение анализаторов углерода и серы JIEBO',
    es: 'CS995 vs CS996 — comparativa de analizadores de carbono y azufre JIEBO',
    ar: 'مقارنة CS995 و CS996 — محلّلا الكربون والكبريت من JIEBO',
  },
  description: {
    en: 'Side-by-side comparison of JIEBO CS995 (bench-type 2.2 kW C/S analyzer) and CS996 (floor-standing 2.5 kW C/S analyzer with expandable cells): detection range, furnace power, throughput, and selection guidance for foundries and steel mills.',
    ru: 'Прямое сравнение JIEBO CS995 (настольный анализатор C/S, 2,2 кВт) и CS996 (напольный анализатор C/S, 2,5 кВт, расширяемые ячейки): диапазон, мощность печи, производительность, рекомендации для литейных и сталелитейных производств.',
    es: 'Comparativa directa entre JIEBO CS995 (analizador C/S de mesa, 2,2 kW) y CS996 (analizador C/S de pie, 2,5 kW, celdas expandibles): rango de detección, potencia del horno, productividad y orientación para fundiciones y acerías.',
    ar: 'مقارنة جانبية بين JIEBO CS995 (محلّل كربون-كبريت مكتبي بقدرة 2.2 كيلوواط) و CS996 (محلّل أرضي بقدرة 2.5 كيلوواط مع خلايا قابلة للتوسعة): نطاق الكشف وقدرة الفرن والإنتاجية وإرشادات الاختيار للمسابك ومصانع الصلب.',
  },
  intro: {
    en: 'Both the CS995 and CS996 are JIEBO high-frequency infrared carbon and sulfur analyzers using the same combustion-and-IR-absorption method. They split on layout and concentration coverage: the CS995 is a bench-type unit with a 2.2 kW furnace and one C + one S cell, sized for tight bench space and moderate workloads. The CS996 is a floor-standing operating-table workstation with a 2.5 kW furnace, expandable cells and a wider range — better when the plant runs ultra-low-carbon steel and high-carbon cast iron on the same instrument.',
    ru: 'Оба прибора, CS995 и CS996, — высокочастотные ИК-анализаторы углерода и серы JIEBO, работающие по одному методу сжигания и ИК-поглощения. Различаются компоновкой и охватом концентраций: CS995 — настольный с печью 2,2 кВт и одной C + одной S ячейкой, под ограниченное место и умеренную загрузку. CS996 — напольная рабочая станция «стол» с печью 2,5 кВт, расширяемыми ячейками и более широким диапазоном — подходит, когда на одном приборе анализируют и сверхнизкоуглеродистую сталь, и высокоуглеродистый чугун.',
    es: 'Tanto el CS995 como el CS996 son analizadores de carbono y azufre por infrarrojos de alta frecuencia de JIEBO que usan el mismo método de combustión y absorción IR. Se diferencian en disposición y cobertura de concentración: el CS995 es de mesa con horno 2,2 kW y una celda C + una S, dimensionado para espacio limitado y carga moderada. El CS996 es una estación de pie con horno 2,5 kW, celdas expandibles y rango más amplio — mejor cuando la planta procesa acero de muy bajo carbono y fundición de alto carbono en el mismo equipo.',
    ar: 'كلٌّ من CS995 و CS996 محلّل كربون-كبريت بالأشعة تحت الحمراء عالي التردّد من JIEBO، يعتمدان طريقة الاحتراق وامتصاص الأشعة تحت الحمراء نفسها. يختلفان في التصميم وتغطية التركيز: يأتي CS995 بهيئة مكتبية مع فرن 2.2 كيلوواط وخليّة كربون وخليّة كبريت، ويناسب المساحة المحدودة وأعباء العمل المتوسطة. أمّا CS996 فهو محطّة أرضية بفرن 2.5 كيلوواط وخلايا قابلة للتوسعة ونطاق أوسع — يناسب المصانع التي تحلّل الصلب منخفض الكربون جداً والحديد الزهر عالي الكربون على نفس الجهاز.',
  },
  specRows: [
    { labelKey: 'detection_range', valueA: 'C 0.0005–6.0000 %; S 0.0005–0.3500 %', valueB: 'C 0.0001–10.0000 %; S 0.0001–2.0000 %' },
    { labelKey: 'detection_cell', valueA: 'One C + one S pool', valueB: 'One C + one S (expandable low-C / high-S cells)' },
    { labelKey: 'furnace_power', valueA: '2.2 kW', valueB: '2.5 kW' },
    { labelKey: 'analyzing_time', valueA: '30–60 s per sample', valueB: '30–60 s per sample' },
    { labelKey: 'dimensions', valueA: '530 × 370 × 195 mm (detector)', valueB: '1360 × 610 × 770 mm + 680 × 510 × 1260 mm' },
    { labelKey: 'weight', valueA: '115 kg', valueB: '215 kg' },
    { labelKey: 'best_for', valueA: 'Bench QC, moderate throughput', valueB: 'High-throughput, mixed-grade workloads' },
  ],
  chooseA: {
    en: [
      'Workload is moderate (tens to low hundreds of samples per day) and your concentration range stays within 0.0005 % up',
      'Bench space and 220 V power capacity are the binding constraints — the 115 kg bench detector fits a standard QC bench',
      'Budget is tighter; the 2.2 kW furnace covers typical foundry, ferro-alloy and ore-processing C/S work without paying for the CS996 workstation',
      'You don\'t need expandable low-carbon or high-sulfur cells — the standard C and S pools cover your grades',
    ],
    ru: [
      'Загрузка умеренная (десятки или несколько сотен образцов в сутки) и диапазон концентраций укладывается в 0,0005 % и выше',
      'Лимит — место на столе и мощность 220 В; настольный детектор 115 кг помещается на стандартном QC-столе',
      'Бюджет жёстче: печь 2,2 кВт закрывает типичные литейные, ферросплавные и горно-обогатительные задачи без переплаты за рабочую станцию CS996',
      'Не нужны расширяемые ячейки для низкого углерода или высокой серы — стандартных C и S достаточно для ваших марок',
    ],
    es: [
      'Carga moderada (decenas a pocas centenas de muestras por día) y su rango de concentración permanece desde 0,0005 % hacia arriba',
      'El espacio de mesa y la potencia 220 V son los limitantes — el detector de 115 kg cabe en una mesa de QC estándar',
      'Presupuesto más ajustado; el horno 2,2 kW cubre fundición, ferroaleaciones y procesamiento de minerales típicos sin pagar la estación CS996',
      'No necesita celdas expandibles de bajo carbono o alto azufre — las celdas C y S estándar cubren sus grados',
    ],
    ar: [
      'عبء العمل متوسّط (عشرات إلى مئات قليلة من العيّنات يومياً) ونطاق التركيز عندك يبدأ من 0.0005 % فأعلى',
      'القيد الفعلي مساحة المنضدة وطاقة 220 فولت — كاشف 115 كغ يلائم منضدة ضبط جودة قياسية',
      'الميزانية أضيق؛ فرن 2.2 كيلوواط يغطّي أعمال المسابك وسبائك الحديد ومعالجة الخامات المعتادة دون تكلفة محطّة CS996',
      'لا تحتاج خلايا قابلة للتوسعة لكربون منخفض أو كبريت مرتفع — تكفي خلايا C و S القياسية لدرجاتك',
    ],
  },
  chooseB: {
    en: [
      'Your plant runs grades from ultra-low-carbon steel (C < 0.001 %) to high-carbon cast iron on the same instrument — the wider range matters daily',
      'You expect to add low-carbon or high-sulfur cells later; the CS996 cell expansion is factory- or field-installable',
      'Throughput is high (continuous-shift sampling) and the integrated worktable layout improves operator ergonomics over moving between bench / scale / furnace',
      'Floor space exists for a 215 kg standing workstation and the 2.5 kW furnace power is acceptable on-site',
    ],
    ru: [
      'На производстве идут марки от сверхнизкоуглеродистой стали (C < 0,001 %) до высокоуглеродистого чугуна на одном приборе — широкий диапазон важен ежедневно',
      'Планируется добавление низкоуглеродных или высокосернистых ячеек; расширение CS996 устанавливается на заводе или на месте',
      'Производительность высокая (непрерывные смены); интегрированная компоновка «стол» эргономичнее, чем перемещение между столом / весами / печью',
      'Есть площадь под напольную станцию 215 кг, а мощность печи 2,5 кВт допустима на площадке',
    ],
    es: [
      'Su planta procesa desde acero de muy bajo carbono (C < 0,001 %) hasta fundición de alto carbono en el mismo equipo — el rango ampliado importa a diario',
      'Prevé añadir celdas de bajo carbono o alto azufre más adelante; la expansión del CS996 se instala en fábrica o en sitio',
      'Productividad alta (muestreo continuo de turno); la disposición integrada de mesa de trabajo es más ergonómica que moverse entre mesa / balanza / horno',
      'Hay espacio para una estación de pie de 215 kg y la potencia del horno 2,5 kW es admisible en el sitio',
    ],
    ar: [
      'يعمل مصنعك على درجات من الصلب منخفض الكربون جداً (C < 0.001 %) إلى الحديد الزهر عالي الكربون على نفس الجهاز — النطاق الأوسع مهم يومياً',
      'تتوقّع إضافة خلايا لكربون منخفض أو كبريت مرتفع لاحقاً؛ توسعة CS996 تُركّب في المصنع أو في الموقع',
      'الإنتاجية عالية (عيّنات بورديات متواصلة)؛ تصميم طاولة العمل المدمج أكثر ملاءمة من التنقّل بين المنضدة والميزان والفرن',
      'تتوفّر مساحة لمحطّة أرضية بوزن 215 كغ، وقدرة فرن 2.5 كيلوواط مقبولة في الموقع',
    ],
  },
  faq: {
    en: [
      { q: 'Do the CS995 and CS996 use the same crucibles and accelerator?', a: 'Yes. Both use the same ceramic crucibles, tungsten accelerator and reference materials. Operator training, sample preparation and the analysis workflow are interchangeable.' },
      { q: 'Can I upgrade a CS995 to CS996-level performance later?', a: 'No. The furnace power, cell architecture and the integrated worktable layout are platform-level differences. Plants that outgrow a CS995 typically keep it as a backup or for incoming inspection and add a CS996 for production.' },
      { q: 'Do both meet ISO 15349 / GB/T 20123 for C/S?', a: 'Yes. Both are designed against ISO 15349 (steel) and the Chinese GB/T 20123 standard for combustion-IR C/S analysis. The standards specify the method; the choice between bench and workstation is about throughput and range, not compliance.' },
      { q: 'What argon, oxygen and power infrastructure should I plan for?', a: 'Both require 220 V / 50 Hz single-phase power and oxygen carrier gas (typically 3–5 L/min during analysis). The CS996\'s 2.5 kW furnace needs a slightly higher current capacity at the wall socket — confirm with the site electrician before installation.' },
    ],
    ru: [
      { q: 'CS995 и CS996 используют одинаковые тигли и ускоритель?', a: 'Да. Оба работают с одинаковыми керамическими тиглями, вольфрамовым ускорителем и эталонными материалами. Обучение операторов, пробоподготовка и рабочий процесс взаимозаменяемы.' },
      { q: 'Можно ли позже модернизировать CS995 до уровня CS996?', a: 'Нет. Мощность печи, архитектура ячеек и компоновка «рабочий стол» — отличия на уровне платформы. Обычно при «вырастании» из CS995 его оставляют как резерв или для входного контроля и докупают CS996 на производство.' },
      { q: 'Оба соответствуют ISO 15349 / ГОСТ-аналогу для C/S?', a: 'Да. Оба разработаны под ISO 15349 (сталь) и китайский стандарт GB/T 20123 для метода ИК-сжигания. Стандарт определяет метод; выбор настольного или напольного исполнения — это про производительность и диапазон, а не про соответствие.' },
      { q: 'Какая инфраструктура (аргон, кислород, электропитание) нужна?', a: 'Обоим нужно 220 В / 50 Гц однофазного питания и кислород-носитель (обычно 3–5 л/мин при анализе). Печь 2,5 кВт у CS996 требует чуть большего тока на розетке — согласуйте с электриком площадки до монтажа.' },
    ],
    es: [
      { q: '¿CS995 y CS996 usan los mismos crisoles y acelerador?', a: 'Sí. Ambos usan los mismos crisoles cerámicos, acelerador de tungsteno y materiales de referencia. La formación de operadores, la preparación de muestras y el flujo de trabajo son intercambiables.' },
      { q: '¿Se puede actualizar un CS995 al nivel del CS996 después?', a: 'No. La potencia del horno, la arquitectura de celdas y la disposición de mesa de trabajo son diferencias a nivel de plataforma. Las plantas que superan el CS995 lo mantienen como respaldo o para inspección de recepción y añaden un CS996 para producción.' },
      { q: '¿Cumplen ambos con ISO 15349 / GB/T 20123 para C/S?', a: 'Sí. Ambos están diseñados según ISO 15349 (acero) y el estándar chino GB/T 20123 para análisis C/S por combustión-IR. La norma define el método; la elección entre mesa y estación es de productividad y rango, no de cumplimiento.' },
      { q: '¿Qué infraestructura de argón, oxígeno y energía necesito?', a: 'Ambos requieren 220 V / 50 Hz monofásico y oxígeno portador (típicamente 3–5 L/min durante el análisis). El horno de 2,5 kW del CS996 necesita algo más de corriente — confirme con el electricista del sitio antes de instalar.' },
    ],
    ar: [
      { q: 'هل يستخدم CS995 و CS996 نفس البواتق والمعجّل؟', a: 'نعم. كلاهما يستخدم نفس البواتق السيراميكية ومعجّل التنغستن والمواد المرجعية. تدريب المشغّلين وتحضير العيّنات وسير العمل قابلة للتبادل بين الجهازين.' },
      { q: 'هل يمكن ترقية CS995 لاحقاً ليصل أداء CS996؟', a: 'لا. قدرة الفرن وهندسة الخلايا وتصميم طاولة العمل المتكاملة فروقات على مستوى المنصّة. عادةً ما تحتفظ المصانع التي تتجاوز قدرات CS995 به للاحتياط أو لفحص الاستلام وتضيف CS996 للإنتاج.' },
      { q: 'هل يفي كلاهما بـ ISO 15349 / GB/T 20123 لتحليل C/S؟', a: 'نعم. كلاهما مصمَّم وفق ISO 15349 (الصلب) والمعيار الصيني GB/T 20123 لتحليل C/S بالاحتراق والأشعة تحت الحمراء. تحدّد المعايير الطريقة، أمّا الاختيار بين المكتبي والأرضي فيتعلّق بالإنتاجية والنطاق لا بالامتثال.' },
      { q: 'ما البنية التحتية للأرغون والأكسجين والكهرباء التي يجب توفيرها؟', a: 'يحتاج كلاهما 220 فولت / 50 هرتز أحادي الطور وأكسجين حامل (عادة 3 إلى 5 لتر/دقيقة أثناء التحليل). فرن 2.5 كيلوواط في CS996 يتطلّب تيّاراً أعلى قليلاً عند المقبس — يُؤكَّد مع كهربائي الموقع قبل التركيب.' },
    ],
  },
};
