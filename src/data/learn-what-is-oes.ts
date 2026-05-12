import type { Locale } from '../consts';

export const title: Record<Locale, string> = {
  en: 'What is an Optical Emission Spectrometer (OES)?',
  ru: 'Что такое оптико-эмиссионный спектрометр (ОЭС)?',
  es: '¿Qué es un espectrómetro de emisión óptica (OES)?',
  ar: 'ما هو جهاز قياس طيف الانبعاث الضوئي (OES)؟',
};

export const description: Record<Locale, string> = {
  en: 'An Optical Emission Spectrometer (OES) is an analytical instrument that identifies and quantifies elements in a metallic sample by exciting atoms with an electric spark and measuring the wavelengths of emitted light. Used in foundries, metallurgy, and quality control.',
  ru: 'Оптико-эмиссионный спектрометр (ОЭС) — аналитический прибор для качественного и количественного определения элементов в металлических образцах путём возбуждения атомов электрической искрой и измерения длин волн испускаемого света. Применяется в литейном производстве, металлургии и контроле качества.',
  es: 'Un espectrómetro de emisión óptica (OES) es un instrumento analítico que identifica y cuantifica elementos en una muestra metálica excitando los átomos con una chispa eléctrica y midiendo las longitudes de onda de la luz emitida. Se usa en fundición, metalurgia y control de calidad.',
  ar: 'جهاز قياس طيف الانبعاث الضوئي (OES) أداة تحليلية تعرّف العناصر في عيّنة معدنية وتُحدّد كميّاتها عبر إثارة الذرّات بشرارة كهربائية ثم قياس أطوال موجات الضوء المنبعث. يُستخدم في السباكة والمعادن ومراقبة الجودة.',
};

export const datePublished = '2026-05-12';

export type Section = { heading: string; paragraphs: string[] };

export const sections: Record<Locale, Section[]> = {
  en: [
    {
      heading: 'Definition',
      paragraphs: [
        'An Optical Emission Spectrometer (OES) is an analytical instrument used to determine the elemental composition of solid metallic samples. The principle of operation is straightforward: a high-voltage spark or arc strikes the sample, excites its atoms, and causes them to emit light at element-specific wavelengths. A diffraction grating splits this light, and a detector — typically a CCD array or photomultiplier tube (PMT) — measures the intensity at each wavelength.',
        'OES is the dominant technique for quality control in foundries, steel mills, scrap-metal sorting, and metal-fabrication shops. A modern OES instrument can identify up to 36 elements in a metal sample within 20–30 seconds, with detection limits down to 0.0001 %.',
      ],
    },
    {
      heading: 'How OES works',
      paragraphs: [
        'A typical OES analysis follows four steps. First, the operator prepares a flat sample surface by grinding or milling. Second, the spectrometer\'s spark stand argon-purges the gap and triggers an electrical discharge of several thousand volts between an electrode and the sample. Third, the spark vaporizes a small amount of the sample, exciting atoms into emitting their characteristic wavelengths (e.g., iron at 371.99 nm, manganese at 403.07 nm). Fourth, the optical system disperses the light onto detectors, and software calculates element concentrations against a calibration curve.',
      ],
    },
    {
      heading: 'Applications',
      paragraphs: [
        'OES is the standard tool for several industrial workflows. In foundries, it verifies the composition of incoming raw material, in-process molten metal samples (via lollipop sampling), and finished castings. In steel mills, it controls alloy chemistry during ladle metallurgy. In recycling, it sorts scrap into grade categories. In aerospace and automotive QA, it inspects components for unexpected trace contaminants.',
      ],
    },
    {
      heading: 'OES vs XRF vs ICP — which to choose',
      paragraphs: [
        'OES, XRF (X-ray fluorescence), and ICP-OES (inductively coupled plasma) all measure elemental composition, but their strengths differ. OES is best for solid metals, especially when light elements (C, S, P, B) must be quantified — XRF cannot reliably measure carbon. XRF is best for non-destructive identification of solids, alloys, and finished parts, and is the only practical handheld option. ICP-OES is best for solutions and trace analysis at sub-ppm levels, but requires sample dissolution.',
        'For a working foundry or steel mill, OES is almost always the right choice: fast, accurate at production-relevant levels, and able to quantify carbon — which determines whether your iron is cast iron, steel, or somewhere in between.',
      ],
    },
    {
      heading: 'How to choose an OES spectrometer',
      paragraphs: [
        'Four criteria matter most. (1) Base matrices — which alloy systems will you analyze (iron, aluminum, copper, magnesium)? Each matrix requires its own calibration curves. (2) Element coverage — which elements at which concentration ranges? Trace elements below 10 ppm typically require PMT channels in addition to CCD. (3) Throughput — are you measuring 5 samples per shift or 50? Floor-standing instruments outperform benchtops on duty cycle. (4) Environment — air-conditioned lab or open foundry floor? Production-grade instruments must tolerate heat, dust, and electrical noise.',
      ],
    },
  ],
  ru: [
    {
      heading: 'Определение',
      paragraphs: [
        'Оптико-эмиссионный спектрометр (ОЭС) — аналитический прибор для определения элементного состава твёрдых металлических образцов. Принцип работы прост: высоковольтная искра или дуга воздействует на образец, возбуждает его атомы, и те испускают свет на характерных для каждого элемента длинах волн. Дифракционная решётка разлагает этот свет, а детектор — обычно матрица ПЗС или фотоэлектронный умножитель (ФЭУ) — измеряет интенсивность на каждой длине волны.',
        'ОЭС — основной метод контроля качества в литейных производствах, на сталелитейных заводах, при сортировке металлолома и в металлообрабатывающих цехах. Современный ОЭС-прибор определяет до 36 элементов в металлическом образце за 20–30 секунд с пределом обнаружения 0.0001 %.',
      ],
    },
    {
      heading: 'Как работает ОЭС',
      paragraphs: [
        'Типичный анализ ОЭС состоит из четырёх этапов. Сначала оператор готовит плоскую поверхность образца шлифовкой или фрезерованием. Затем искровой держатель спектрометра продувает аргон в зазор и инициирует электрический разряд в несколько тысяч вольт между электродом и образцом. Искра испаряет небольшое количество образца, возбуждая атомы, которые излучают свои характерные длины волн (например, железо на 371,99 нм, марганец на 403,07 нм). Оптическая система разлагает свет на детекторы, и программа рассчитывает концентрации элементов по калибровочной кривой.',
      ],
    },
    {
      heading: 'Применение',
      paragraphs: [
        'ОЭС — стандартный инструмент в ряде промышленных задач. В литейном производстве он проверяет состав входного сырья, расплавленного металла (через образцы-«леденцы») и готовых отливок. На сталелитейных заводах контролирует химию сплава при ковшевой металлургии. При переработке лома — сортирует по маркам. В аэрокосмическом и автомобильном QA — выявляет неожиданные следовые загрязнения.',
      ],
    },
    {
      heading: 'ОЭС, РФА и ИСП — что выбрать',
      paragraphs: [
        'ОЭС, РФА (рентгенофлуоресцентный анализ) и ИСП-ОЭС (индуктивно-связанная плазма) измеряют элементный состав, но их сильные стороны различаются. ОЭС лучше всего работает с твёрдыми металлами, особенно когда нужно определять лёгкие элементы (C, S, P, B) — РФА надёжно не определяет углерод. РФА лучше подходит для неразрушающего контроля твёрдых деталей и сплавов, и это единственный практичный портативный вариант. ИСП-ОЭС оптимален для растворов и следового анализа на уровне суб-ppm, но требует растворения образца.',
        'Для действующего литейного или сталелитейного производства ОЭС почти всегда — правильный выбор: быстрый, точный на производственных уровнях концентраций и способный количественно определять углерод, который и определяет, чугун у вас, сталь или что-то между.',
      ],
    },
    {
      heading: 'Как выбрать ОЭС-спектрометр',
      paragraphs: [
        'Важны четыре критерия. (1) Базовые матрицы — какие системы сплавов вы анализируете (железо, алюминий, медь, магний)? Каждая матрица требует своих калибровочных кривых. (2) Покрытие элементов — какие элементы и в каких диапазонах концентраций? Следовые элементы ниже 10 ppm обычно требуют ФЭУ-каналов в дополнение к ПЗС. (3) Производительность — 5 образцов в смену или 50? Напольные приборы превосходят настольные по рабочему циклу. (4) Среда — кондиционированная лаборатория или открытый литейный цех? Производственные приборы должны выдерживать жару, пыль и электрические помехи.',
      ],
    },
  ],
  es: [
    {
      heading: 'Definición',
      paragraphs: [
        'Un espectrómetro de emisión óptica (OES) es un instrumento analítico utilizado para determinar la composición elemental de muestras metálicas sólidas. Su principio es directo: una chispa o arco de alta tensión incide sobre la muestra, excita sus átomos y los hace emitir luz en longitudes de onda específicas de cada elemento. Una rejilla de difracción separa esta luz, y un detector — generalmente CCD o tubo fotomultiplicador (PMT) — mide la intensidad en cada longitud de onda.',
        'El OES es la técnica dominante en el control de calidad de fundiciones, acerías, clasificación de chatarra y talleres metalmecánicos. Un equipo OES moderno identifica hasta 36 elementos en una muestra en 20–30 segundos, con límites de detección de hasta 0.0001 %.',
      ],
    },
    {
      heading: 'Cómo funciona el OES',
      paragraphs: [
        'Un análisis OES típico sigue cuatro pasos. Primero, el operador prepara una superficie plana de la muestra mediante esmerilado o fresado. Segundo, el porta-muestras del espectrómetro purga argón en el espacio y dispara una descarga eléctrica de varios miles de voltios entre el electrodo y la muestra. Tercero, la chispa vaporiza una pequeña cantidad de muestra, excitando los átomos que emiten sus longitudes de onda características (por ejemplo, hierro a 371,99 nm, manganeso a 403,07 nm). Cuarto, el sistema óptico dispersa la luz sobre los detectores y el software calcula las concentraciones contra una curva de calibración.',
      ],
    },
    {
      heading: 'Aplicaciones',
      paragraphs: [
        'El OES es la herramienta estándar para varios procesos industriales. En fundiciones, verifica la composición de materia prima entrante, muestras de metal fundido en proceso (con muestreo tipo "lollipop") y piezas fundidas. En acerías, controla la química de la aleación durante metalurgia secundaria. En reciclaje, clasifica chatarra por grado. En QA aeroespacial y automotriz, detecta trazas inesperadas en componentes.',
      ],
    },
    {
      heading: 'OES vs XRF vs ICP — cuál elegir',
      paragraphs: [
        'OES, XRF (fluorescencia de rayos X) e ICP-OES (plasma acoplado por inducción) miden composición elemental, pero sus fortalezas difieren. El OES es el mejor para metales sólidos, especialmente cuando hay que cuantificar elementos ligeros (C, S, P, B) — el XRF no mide carbono con fiabilidad. El XRF es óptimo para identificación no destructiva de sólidos, aleaciones y piezas terminadas, y es la única opción práctica en versión portátil. El ICP-OES es óptimo para soluciones y análisis de trazas a niveles sub-ppm, pero requiere disolver la muestra.',
        'Para una fundición o acería en operación, el OES casi siempre es la elección correcta: rápido, preciso en niveles relevantes para producción, y capaz de cuantificar carbono — lo que determina si su hierro es fundición, acero o algo intermedio.',
      ],
    },
    {
      heading: 'Cómo elegir un espectrómetro OES',
      paragraphs: [
        'Cuatro criterios importan más. (1) Matrices base — ¿qué sistemas de aleación va a analizar (hierro, aluminio, cobre, magnesio)? Cada matriz requiere sus propias curvas de calibración. (2) Cobertura de elementos — ¿qué elementos y en qué rangos? Trazas por debajo de 10 ppm suelen requerir canales PMT además de CCD. (3) Rendimiento — ¿5 muestras por turno o 50? Los equipos de pie superan a los de mesa en ciclo de trabajo. (4) Entorno — ¿laboratorio climatizado o piso abierto de fundición? Los equipos de producción deben soportar calor, polvo y ruido eléctrico.',
      ],
    },
  ],
  ar: [
    {
      heading: 'التعريف',
      paragraphs: [
        'جهاز قياس طيف الانبعاث الضوئي (OES) أداة تحليلية تُستخدم لتحديد التركيب العنصري للعينات المعدنية الصلبة. مبدأ العمل بسيط: شرارة أو قوس عالي الجهد يصطدم بالعيّنة فيُثير ذرّاتها ويجعلها تُصدر ضوءاً على أطوال موجات خاصة بكل عنصر. ثم تفرّق محزّزة حيود هذا الضوء، ويقيس كاشف — عادةً مصفوفة CCD أو أنبوب مضاعف ضوئي (PMT) — شدّة الإصدار عند كل طول موجة.',
        'يُعدّ جهاز OES التقنية المهيمنة لمراقبة الجودة في مسابك المعادن ومصانع الصلب وفرز خردة المعادن وورش التصنيع المعدني. يُحدّد جهاز OES حديث ما يصل إلى 36 عنصراً في عيّنة معدنية خلال 20-30 ثانية بحدّ كشف يصل إلى 0.0001 %.',
      ],
    },
    {
      heading: 'كيف يعمل جهاز OES',
      paragraphs: [
        'يسير التحليل النموذجي على أربع مراحل. أوّلاً يُحضّر المشغّل سطحاً مستوياً للعيّنة بالطحن أو التفريز. ثانياً يحقن منصب الشرارة الأرغونَ في الفجوة ويُطلق تفريغاً كهربائياً بآلاف الفولتات بين القطب والعيّنة. ثالثاً تُبخّر الشرارة كمّيةً صغيرة من العيّنة وتُثير الذرّات لتُصدر أطوال موجاتها المميّزة (مثلاً الحديد عند 371.99 نانومتر والمنغنيز عند 403.07 نانومتر). رابعاً يُفرّق النظام البصري الضوء إلى الكواشف ويحسب البرنامج التراكيز مقابل منحنى المعايرة.',
      ],
    },
    {
      heading: 'التطبيقات',
      paragraphs: [
        'يُعدّ جهاز OES الأداة القياسية في عدّة عمليات صناعية. في المسابك يتحقّق من تركيب المواد الخام الواردة وعيّنات المعدن المنصهر أثناء المعالجة وقطع الصبّ النهائية. في مصانع الصلب يضبط كيمياء السبيكة أثناء المعالجة الميتالورجية. في إعادة التدوير يصنّف الخردة حسب الدرجة. وفي مراقبة جودة الطيران والسيارات يفحص المكوّنات لاكتشاف الملوّثات النزرة غير المتوقّعة.',
      ],
    },
    {
      heading: 'OES و XRF و ICP — كيف تختار',
      paragraphs: [
        'تقيس تقنيات OES و XRF (طيف الأشعة السينية الفلوري) و ICP-OES (بلازما مقترنة حثّياً) التركيب العنصري، لكن نقاط قوّتها مختلفة. الـ OES هو الأفضل للمعادن الصلبة، خاصّةً عند الحاجة لقياس العناصر الخفيفة (الكربون والكبريت والفوسفور والبورون) — إذ لا يقيس XRF الكربون بصورة موثوقة. الـ XRF هو الأفضل للتعريف غير المُتلف بالعيّنات الصلبة والسبائك والقطع النهائية، وهو الخيار العملي الوحيد المحمول. أمّا ICP-OES فهو الأفضل للمحاليل وتحليل العناصر النزرة دون جزء في المليون، لكنّه يتطلّب إذابة العيّنة.',
        'بالنسبة لمسبك أو مصنع صلب عامل، يكون OES في أغلب الأحيان هو الخيار الصحيح: سريع ودقيق على المستويات الإنتاجية وقادر على قياس الكربون — وهو ما يحدّد إن كان معدنك حديد زهر أو صلب أو شيئاً بينهما.',
      ],
    },
    {
      heading: 'كيف تختار جهاز OES',
      paragraphs: [
        'أربعة معايير هي الأهمّ. (1) المصفوفات الأساسية — أيّ أنظمة سبائك ستحلّل (حديد أو ألمنيوم أو نحاس أو مغنيسيوم)؟ تتطلّب كل مصفوفة منحنيات معايرة خاصّة بها. (2) تغطية العناصر — أيّ عناصر وفي أيّ نطاقات؟ العناصر النزرة دون 10 جزء في المليون تتطلّب عادةً قنوات PMT إضافةً إلى CCD. (3) الإنتاجية — هل تقيس 5 عيّنات في الوردية أم 50؟ تتفوّق الأجهزة الأرضية على المكتبية في دورة التشغيل. (4) البيئة — مختبر مكيّف أم أرضية مسبك مفتوحة؟ يجب أن تتحمّل الأجهزة الإنتاجية الحرارة والغبار والضوضاء الكهربائية.',
      ],
    },
  ],
};

export const faq: Record<Locale, Array<{ q: string; a: string }>> = {
  en: [
    { q: 'What does OES stand for?', a: 'OES stands for Optical Emission Spectrometry (or Spectrometer when referring to the instrument). The technique is also called Spark-OES or Arc-OES depending on the excitation source.' },
    { q: 'Can OES measure carbon?', a: 'Yes. OES is the standard method for quantifying carbon in iron and steel, with detection limits typically below 100 ppm. This is one of the main reasons OES dominates foundry QC — handheld XRF cannot reliably measure carbon.' },
    { q: 'How accurate is OES?', a: 'For production-grade matrices like iron and steel, OES typically achieves relative standard deviation (RSD) of 0.5 % at the 1 % concentration level, and accuracy within ±2 % of certified reference values when properly calibrated.' },
    { q: 'What sample preparation does OES require?', a: 'A flat, conductive surface roughly 20–30 mm in diameter, free of paint, oxide, and oil. A grinding wheel or milling disc is typically used. Total preparation time per sample is under 1 minute.' },
    { q: 'Is OES destructive?', a: 'Yes, but minimally. Each spark consumes 1–2 mm² of surface and leaves a small burn mark. The sample remains intact for further use; only the analyzed region is altered.' },
  ],
  ru: [
    { q: 'Что означает ОЭС?', a: 'ОЭС — оптико-эмиссионная спектрометрия (или спектрометр, если речь о приборе). В зависимости от источника возбуждения метод также называют искровым ОЭС или дуговым ОЭС.' },
    { q: 'Можно ли определять углерод методом ОЭС?', a: 'Да. ОЭС — стандартный метод количественного определения углерода в чугуне и стали, с пределами обнаружения, как правило, ниже 100 ppm. Это одна из главных причин, почему ОЭС доминирует в литейном QC: портативные РФА-анализаторы не определяют углерод надёжно.' },
    { q: 'Какая точность у ОЭС?', a: 'Для производственных матриц вроде чугуна и стали ОЭС обычно показывает относительное стандартное отклонение (RSD) 0,5 % на уровне 1 % концентрации и точность ±2 % от сертифицированного значения при правильной калибровке.' },
    { q: 'Какая подготовка образца нужна?', a: 'Плоская проводящая поверхность диаметром примерно 20–30 мм, без краски, окислов и масла. Обычно используют шлифовальный круг или фрезу. Подготовка занимает менее 1 минуты на образец.' },
    { q: 'Является ли ОЭС разрушающим методом?', a: 'Да, но в минимальной степени. Каждый разряд расходует 1–2 мм² поверхности и оставляет небольшую отметину. Образец остаётся пригоден для дальнейшего использования — изменена только зона анализа.' },
  ],
  es: [
    { q: '¿Qué significa OES?', a: 'OES significa Optical Emission Spectrometry (espectrometría de emisión óptica) — o el espectrómetro mismo. Según la fuente de excitación se denomina también Spark-OES o Arc-OES.' },
    { q: '¿El OES puede medir carbono?', a: 'Sí. El OES es el método estándar para cuantificar carbono en hierro y acero, con límites de detección típicamente por debajo de 100 ppm. Esa es una razón principal por la que el OES domina el QC de fundición: el XRF portátil no mide carbono de forma fiable.' },
    { q: '¿Qué precisión tiene el OES?', a: 'Para matrices de producción como hierro y acero, el OES suele lograr una desviación estándar relativa (RSD) del 0,5 % al nivel del 1 % de concentración, y una exactitud de ±2 % respecto a los valores de referencia certificados con buena calibración.' },
    { q: '¿Qué preparación de muestra requiere el OES?', a: 'Una superficie plana, conductora, de aproximadamente 20–30 mm de diámetro, libre de pintura, óxido y aceite. Se suele usar una muela o disco de fresa. La preparación toma menos de 1 minuto por muestra.' },
    { q: '¿El OES es destructivo?', a: 'Sí, pero mínimamente. Cada chispa consume 1–2 mm² de superficie y deja una marca de quemado. La muestra permanece útil; solo se altera la región analizada.' },
  ],
  ar: [
    { q: 'ماذا تعني الاختصارات OES؟', a: 'تعني OES اختصاراً لـ Optical Emission Spectrometry (طيفية الانبعاث الضوئي) أو الجهاز نفسه. وحسب مصدر الإثارة تُسمّى أيضاً Spark-OES أو Arc-OES.' },
    { q: 'هل يستطيع جهاز OES قياس الكربون؟', a: 'نعم. الـ OES هو الطريقة المعيارية لقياس الكربون كميّاً في الحديد والصلب، بحدود كشف غالباً أقلّ من 100 جزء في المليون. وهذا أحد أهمّ أسباب هيمنة OES على ضبط جودة المسابك، إذ لا يقيس جهاز XRF المحمول الكربون بصورة موثوقة.' },
    { q: 'ما دقّة OES؟', a: 'للمصفوفات الإنتاجية مثل الحديد والصلب يحقّق OES عادةً انحرافاً معيارياً نسبياً (RSD) قدره 0.5 % عند مستوى تركيز 1 %، ودقّةً بحدود ±2 % مقارنةً بالقيم المرجعية المعتمدة مع المعايرة الصحيحة.' },
    { q: 'ما تحضير العيّنة المطلوب لـ OES؟', a: 'سطح مستوٍ موصِل قطره نحو 20-30 ملم خالٍ من الطلاء والأكاسيد والزيت. يُستخدم عادةً قرص طحن أو تفريز. لا يستغرق التحضير أكثر من دقيقة لكل عيّنة.' },
    { q: 'هل تحليل OES متلِف؟', a: 'نعم، لكنّ التأثير محدود جداً. تستهلك كل شرارة 1-2 ملم² من السطح وتترك أثر حرق صغير. تبقى العيّنة صالحة للاستخدام، وتتغيّر فقط منطقة التحليل.' },
  ],
};
