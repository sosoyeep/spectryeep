import type { Locale } from '../consts';

export const title: Record<Locale, string> = {
  en: 'How to Choose an Optical Emission Spectrometer: A Decision Guide',
  ru: 'Как выбрать оптико-эмиссионный спектрометр: руководство по выбору',
  es: 'Cómo elegir un espectrómetro de emisión óptica: guía de decisión',
  ar: 'كيف تختار جهاز قياس طيف الانبعاث الضوئي: دليل القرار',
};

export const description: Record<Locale, string> = {
  en: 'Choosing the right OES spectrometer is a four-question problem: which base matrices, which elements at which detection level, what daily throughput, and what working environment. This guide walks through each question and maps the answers to JIEBO\'s five OES models — Exquis T4, Innovate T5, Noble T7, JB-750 and Surpass F1.',
  ru: 'Правильный выбор ОЭС-спектрометра — задача из четырёх вопросов: какие базовые матрицы, какие элементы и до какого предела, какая суточная нагрузка, какая рабочая среда. Это руководство разбирает каждый вопрос и сопоставляет ответы с пятью моделями JIEBO — Exquis T4, Innovate T5, Noble T7, JB-750 и Surpass F1.',
  es: 'Elegir el espectrómetro OES correcto es un problema de cuatro preguntas: qué matrices base, qué elementos a qué nivel de detección, cuánto rendimiento diario y qué entorno de trabajo. Esta guía recorre cada pregunta y mapea las respuestas a los cinco modelos OES de JIEBO — Exquis T4, Innovate T5, Noble T7, JB-750 y Surpass F1.',
  ar: 'اختيار جهاز OES المناسب مسألة من أربعة أسئلة: ما المصفوفات الأساسية، وما العناصر وعند أيّ حدّ كشف، وما الإنتاجية اليومية، وما بيئة العمل. يستعرض هذا الدليل كل سؤال ويربط إجابته بأحد موديلات JIEBO الخمسة — Exquis T4 و Innovate T5 و Noble T7 و JB-750 و Surpass F1.',
};

export const datePublished = '2026-05-12';

export type Section = { heading: string; paragraphs: string[] };

export const sections: Record<Locale, Section[]> = {
  en: [
    {
      heading: 'Question 1 — Which base matrices do you analyze?',
      paragraphs: [
        'A "base matrix" is the dominant metal in your sample (iron, aluminum, copper, magnesium, etc.). Every matrix needs its own calibration curves, and a spectrometer is licensed and calibrated per matrix at the factory. The more matrices you run, the more capable the instrument needs to be.',
        'If you only run **one matrix** (typical of single-alloy aluminum die-casting plants or iron foundries), the [Exquis T4](/products/exquis-t4/) is the most cost-effective choice — Fe, Al, Cu, Zn coverage in a 33 kg benchtop. If you run **three or more matrices** on the same instrument (mixed-alloy production, contract analysis), the [Innovate T5](/products/innovate-t5/) covers ten base matrices: Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb.',
      ],
    },
    {
      heading: 'Question 2 — Which elements at which detection limit?',
      paragraphs: [
        'List the elements you must quantify and their lowest required concentration. **Production-grade carbon and sulfur in iron and steel** (typically 0.005–1.5 %) is well within any modern OES spectrometer. **Trace elements below 10 ppm** — common in aerospace alloy QA, super-alloys for power generation, and research-grade material development — start to require PMT detection or a research-grade CMOS.',
        'For most foundry and metallurgy production work the [Innovate T5](/products/innovate-t5/) (vacuum chamber, Hamamatsu CMOS, 0.0001 % detection limit) is the right answer. For sub-10-ppm work, step up to the [Noble T7](/products/noble-t7/) (constant-temperature chamber ±0.1 °C, accuracy <10 ppm). For certification work that has historically required German PMT systems, the [JB-750](/products/jb-750/) is the JIEBO equivalent — 750 mm focal length, PMT array, vacuum chamber.',
      ],
    },
    {
      heading: 'Question 3 — Daily sample throughput?',
      paragraphs: [
        'Throughput maps to detector duty cycle and operator ergonomics. Five to ten samples per shift fits a benchtop; twenty to fifty samples per shift wants a floor-standing instrument with faster recovery between burns. Continuous in-line analysis (every melt heat in a steel mill) needs both high throughput and a thermally stable optical chamber so spectral drift does not accumulate over the shift.',
        '**5–10 / shift** → Exquis T4 (benchtop) or Innovate T5 (floor-standing). **20–50 / shift** → Innovate T5 or Noble T7 floor-standing. **50+ / shift, certification** → Noble T7 or JB-750 with constant-temperature chamber.',
      ],
    },
    {
      heading: 'Question 4 — What working environment?',
      paragraphs: [
        'Foundry floors are hot, dusty, and electrically noisy. An air-conditioned QC lab is none of those. Match the instrument to where it will actually live. A vacuum optical chamber (T5, T7, JB-750) is more resilient to dust and humidity than a sealed-cycle argon chamber (T4). A constant-temperature chamber (T7) is needed when ambient temperature swings more than 5 °C through the shift.',
        'If the instrument needs to **leave the lab** — scrap-yard inspection, in-service pipework PMI, on-site QA for large fixed components — only a mobile OES will do. The [Surpass F1](/products/surpass-f1/) brings spark OES with carbon, phosphorus and sulfur measurement to the field on a cart with built-in battery and argon cylinder. It is not a replacement for a benchtop in the lab; it is the right tool when the sample cannot come to the instrument.',
      ],
    },
    {
      heading: 'Five-model summary',
      paragraphs: [
        'In one paragraph: **Exquis T4** is the price-performance single-matrix benchtop. **Innovate T5** is the multi-alloy production workhorse with vacuum chamber and CMOS detection. **Noble T7** adds research-grade trace-element accuracy and a thermostatted chamber. **JB-750** is the PMT-class flagship for certification labs and aerospace QA. **Surpass F1** is the mobile OES for field work.',
      ],
    },
    {
      heading: 'What\'s not on this list',
      paragraphs: [
        'If your bottleneck is **non-destructive testing of finished parts**, OES is the wrong family — see our [OES vs XRF vs LIBS guide](/learn/oes-vs-xrf-vs-libs/). If your bottleneck is **measuring carbon and sulfur specifically** at very low or very high levels, you may want a dedicated combustion analyzer in addition to OES — see the [CS995](/products/cs995/), [CS996](/products/cs996/) or [CS2020](/products/cs2020/). If your work is **oxygen, nitrogen and hydrogen in titanium, zirconium or rare-earth alloys**, OES does not measure those gases — use the [ONH-508](/products/onh-508/).',
      ],
    },
  ],
  ru: [
    {
      heading: 'Вопрос 1 — Какие базовые матрицы вы анализируете?',
      paragraphs: [
        '«Базовая матрица» — преобладающий металл в вашем образце (железо, алюминий, медь, магний и т. д.). У каждой матрицы свои калибровочные кривые, и спектрометр калибруется на заводе под конкретные матрицы. Чем больше матриц нужно, тем мощнее должен быть прибор.',
        'Если у вас **одна матрица** (типично для алюминиевого литья под давлением или чугунного литья), [Exquis T4](/ru/products/exquis-t4/) — наиболее рациональный выбор: Fe/Al/Cu/Zn в 33 кг настольном корпусе. Если **три и более матриц** на одном приборе (смешанное производство, контрактный анализ), [Innovate T5](/ru/products/innovate-t5/) покрывает десять базовых матриц: Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb.',
      ],
    },
    {
      heading: 'Вопрос 2 — Какие элементы и до какого предела?',
      paragraphs: [
        'Перечислите элементы, которые надо определять, и минимальную требуемую концентрацию. **Производственные уровни углерода и серы в чугуне и стали** (обычно 0,005–1,5 %) — в пределах любого современного ОЭС. **Следовые элементы ниже 10 ppm** — характерно для аэрокосмического QA, суперсплавов и НИОКР — требуют ФЭУ или исследовательского CMOS.',
        'Для большинства литейных и металлургических задач [Innovate T5](/ru/products/innovate-t5/) (вакуумная камера, Hamamatsu CMOS, предел 0,0001 %) — правильный ответ. Для работы ниже 10 ppm берите [Noble T7](/ru/products/noble-t7/) (термостат ±0,1 °C, точность <10 ppm). Для сертификации, исторически требовавшей немецких ФЭУ-систем, аналогом JIEBO будет [JB-750](/ru/products/jb-750/) — фокус 750 мм, массив ФЭУ, вакуумная камера.',
      ],
    },
    {
      heading: 'Вопрос 3 — Суточная пропускная способность?',
      paragraphs: [
        'Пропускная способность определяет рабочий цикл детектора и эргономику оператора. 5–10 образцов за смену — настольный; 20–50 — напольный с быстрым восстановлением между сериями. Непрерывный анализ (каждая плавка в стали) требует и высокой пропускной способности, и термостабильной оптики, чтобы спектральный дрейф не накапливался за смену.',
        '**5–10 / смену** → Exquis T4 (настольный) или Innovate T5 (напольный). **20–50 / смену** → Innovate T5 или Noble T7 напольные. **50+ / смену, сертификация** → Noble T7 или JB-750 с термостатом.',
      ],
    },
    {
      heading: 'Вопрос 4 — Какая рабочая среда?',
      paragraphs: [
        'Литейный цех — жаркий, пыльный, электрически шумный. Кондиционируемая QC-лаборатория — нет. Подбирайте прибор под реальное место работы. Вакуумная оптика (T5, T7, JB-750) устойчивее к пыли и влажности, чем закрытая аргонная камера (T4). Термостат (T7) нужен при колебаниях температуры более 5 °C за смену.',
        'Если прибор должен **выходить из лаборатории** — приёмка лома, PMI трубопроводов в эксплуатации, выездной QA крупных стационарных деталей — нужен мобильный ОЭС. [Surpass F1](/ru/products/surpass-f1/) переносит искровой ОЭС с измерением углерода, фосфора и серы в поле — тележка со встроенным аккумулятором и баллоном аргона. Не замена настольному, а правильный инструмент, когда образец не приходит к прибору.',
      ],
    },
    {
      heading: 'Сводка по пяти моделям',
      paragraphs: [
        'Одним абзацем: **Exquis T4** — настольный с лучшей ценой по одной матрице. **Innovate T5** — рабочая лошадка многосплавного производства с вакуумной камерой и CMOS-детектированием. **Noble T7** добавляет исследовательскую точность по следовым элементам и термостат. **JB-750** — флагман на ФЭУ для сертификационных лабораторий и аэрокосмического QA. **Surpass F1** — мобильный ОЭС для полевых работ.',
      ],
    },
    {
      heading: 'Чего нет в списке',
      paragraphs: [
        'Если узкое место — **неразрушающий контроль готовых деталей**, ОЭС не та группа: см. [ОЭС vs РФА vs LIBS](/ru/learn/oes-vs-xrf-vs-libs/). Если узкое место — **именно углерод и сера** на очень низких или очень высоких уровнях, может понадобиться выделенный анализатор сжигания в дополнение к ОЭС: см. [CS995](/ru/products/cs995/), [CS996](/ru/products/cs996/) или [CS2020](/ru/products/cs2020/). Если задача — **кислород, азот и водород в титане, цирконии или РЗМ-сплавах**, ОЭС эти газы не определяет — используйте [ONH-508](/ru/products/onh-508/).',
      ],
    },
  ],
  es: [
    {
      heading: 'Pregunta 1 — ¿Qué matrices base analiza?',
      paragraphs: [
        'Una "matriz base" es el metal dominante de su muestra (hierro, aluminio, cobre, magnesio, etc.). Cada matriz necesita sus propias curvas de calibración, y el espectrómetro se calibra de fábrica por matriz. Cuantas más matrices, más capaz debe ser el equipo.',
        'Si solo opera **una matriz** (típico de plantas de aluminio a presión o fundiciones de hierro), el [Exquis T4](/es/products/exquis-t4/) es la elección con mejor precio-rendimiento: cobertura Fe / Al / Cu / Zn en 33 kg de mesa. Si opera **tres o más matrices** en el mismo equipo (producción multi-aleación, análisis por contrato), el [Innovate T5](/es/products/innovate-t5/) cubre diez matrices base: Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb.',
      ],
    },
    {
      heading: 'Pregunta 2 — ¿Qué elementos a qué límite?',
      paragraphs: [
        'Liste los elementos que debe cuantificar y su concentración mínima requerida. **Carbono y azufre de producción en hierro y acero** (típicamente 0,005–1,5 %) están al alcance de cualquier OES moderno. **Trazas por debajo de 10 ppm** — comunes en QA aeroespacial, superaleaciones y I+D — empiezan a requerir detección PMT o CMOS de grado investigación.',
        'Para la mayoría del trabajo de fundición y metalurgia el [Innovate T5](/es/products/innovate-t5/) (cámara al vacío, Hamamatsu CMOS, límite 0,0001 %) es la respuesta. Para sub-10 ppm suba al [Noble T7](/es/products/noble-t7/) (cámara termostatizada ±0,1 °C, precisión <10 ppm). Para certificación que históricamente requería sistemas PMT alemanes, el equivalente JIEBO es el [JB-750](/es/products/jb-750/) — distancia focal 750 mm, arreglo PMT, cámara al vacío.',
      ],
    },
    {
      heading: 'Pregunta 3 — ¿Rendimiento diario de muestras?',
      paragraphs: [
        'El rendimiento marca el ciclo de trabajo del detector y la ergonomía del operador. 5–10 muestras por turno encajan en un equipo de mesa; 20–50 por turno requieren un equipo de pie con recuperación más rápida entre disparos. El análisis continuo en línea (cada colada en una acería) necesita tanto alto rendimiento como cámara óptica térmicamente estable para que la deriva no se acumule.',
        '**5–10 / turno** → Exquis T4 (mesa) o Innovate T5 (de pie). **20–50 / turno** → Innovate T5 o Noble T7 de pie. **50+ / turno, certificación** → Noble T7 o JB-750 con cámara termostatizada.',
      ],
    },
    {
      heading: 'Pregunta 4 — ¿Qué entorno de trabajo?',
      paragraphs: [
        'El piso de fundición es caliente, polvoriento y eléctricamente ruidoso. Un laboratorio QC climatizado no lo es. Adapte el equipo al lugar real. Una cámara óptica al vacío (T5, T7, JB-750) resiste mejor polvo y humedad que una cámara de argón sellado (T4). Una cámara termostatizada (T7) es necesaria si la temperatura ambiente varía más de 5 °C durante el turno.',
        'Si el equipo debe **salir del laboratorio** — inspección en patios de chatarra, PMI de tuberías en servicio, QA en sitio de componentes fijos grandes — solo un OES móvil sirve. El [Surpass F1](/es/products/surpass-f1/) lleva OES por chispa con medición de carbono, fósforo y azufre al campo en un carro con batería y cilindro de argón integrados. No reemplaza a un equipo de mesa en el laboratorio; es la herramienta correcta cuando la muestra no puede ir al equipo.',
      ],
    },
    {
      heading: 'Resumen de los cinco modelos',
      paragraphs: [
        'En un párrafo: **Exquis T4** es el de mesa precio-rendimiento para una sola matriz. **Innovate T5** es el caballo de batalla multi-aleación con cámara al vacío y detección CMOS. **Noble T7** añade precisión de trazas de grado investigación y cámara termostatizada. **JB-750** es el insignia PMT para laboratorios de certificación y QA aeroespacial. **Surpass F1** es el OES móvil para trabajo de campo.',
      ],
    },
    {
      heading: 'Lo que no está en esta lista',
      paragraphs: [
        'Si su cuello de botella es **ensayo no destructivo de piezas terminadas**, OES no es la familia correcta — vea [OES vs XRF vs LIBS](/es/learn/oes-vs-xrf-vs-libs/). Si es **carbono y azufre específicamente** a niveles muy bajos o muy altos, considere un analizador dedicado por combustión además del OES — vea [CS995](/es/products/cs995/), [CS996](/es/products/cs996/) o [CS2020](/es/products/cs2020/). Si es **oxígeno, nitrógeno e hidrógeno en titanio, circonio o tierras raras**, OES no mide esos gases — use el [ONH-508](/es/products/onh-508/).',
      ],
    },
  ],
  ar: [
    {
      heading: 'السؤال 1 — ما المصفوفات الأساسية التي تحلّلها؟',
      paragraphs: [
        '«المصفوفة الأساسية» هي المعدن السائد في عيّنتك (حديد أو ألمنيوم أو نحاس أو مغنيسيوم … إلخ). كل مصفوفة تحتاج منحنياتِ معايرة خاصّة بها، ويُعايَر الجهاز من المصنع لكل مصفوفة. كلّما زادت المصفوفات لديك، احتجت جهازاً أقدر.',
        'إذا كنت تشغّل **مصفوفة واحدة فقط** (نموذجي لمسابك الألمنيوم بالضغط أو مسابك الحديد)، فإنّ [Exquis T4](/ar/products/exquis-t4/) هو الخيار الأفضل من حيث السعر والأداء: تغطية Fe/Al/Cu/Zn في جهاز مكتبي بوزن 33 كغ. أمّا إذا كنت تشغّل **ثلاث مصفوفات أو أكثر** على الجهاز نفسه (إنتاج متعدّد السبائك، تحليل بعقود)، فإنّ [Innovate T5](/ar/products/innovate-t5/) يغطّي عشر مصفوفات أساسية: Fe و Al و Cu و Mg و Zn و Ni و Co و Ti و Sn و Pb.',
      ],
    },
    {
      heading: 'السؤال 2 — أيّ عناصر وبأيّ حدّ كشف؟',
      paragraphs: [
        'اكتب قائمة العناصر التي يجب قياسها كميّاً وأدنى تركيز مطلوب. **مستويات الإنتاج للكربون والكبريت في الحديد والصلب** (عادةً 0.005–1.5 %) في متناول أيّ جهاز OES حديث. أمّا **العناصر النزرة دون 10 ppm** — وهي شائعة في ضبط جودة الطيران والسبائك العالية الأداء والأبحاث — فتبدأ بطلب كشف PMT أو CMOS بدرجة بحثية.',
        'لمعظم أعمال المسابك والمعادن يكون [Innovate T5](/ar/products/innovate-t5/) (غرفة مفرّغة وكواشف Hamamatsu CMOS وحدّ كشف 0.0001 %) هو الإجابة. للأعمال دون 10 ppm ارتقِ إلى [Noble T7](/ar/products/noble-t7/) (غرفة ثابتة الحرارة ±0.1 °م ودقّة <10 ppm). أمّا لأعمال الاعتماد التي تتطلّب تاريخياً أنظمة PMT ألمانية، فإنّ [JB-750](/ar/products/jb-750/) هو نظير JIEBO — بطول بؤري 750 ملم ومصفوفة PMT وغرفة مفرّغة.',
      ],
    },
    {
      heading: 'السؤال 3 — ما الإنتاجية اليومية؟',
      paragraphs: [
        'تحدّد الإنتاجية دورة عمل الكاشف وراحة المشغّل. من 5 إلى 10 عيّنات لكل وردية تناسب جهازاً مكتبياً؛ ومن 20 إلى 50 عيّنة تتطلّب جهازاً أرضياً بسرعة استرداد أعلى بين الومضات. أمّا التحليل المستمر داخل الخطّ (كلّ صبّة في مصنع صلب) فيتطلّب إنتاجية عالية وغرفة بصرية ثابتة حرارياً حتى لا يتراكم الانجراف الطيفي عبر الوردية.',
        '**5–10 / وردية** → Exquis T4 (مكتبي) أو Innovate T5 (أرضي). **20–50 / وردية** → Innovate T5 أو Noble T7 الأرضيان. **50+ / وردية واعتماد** → Noble T7 أو JB-750 مع غرفة ثابتة الحرارة.',
      ],
    },
    {
      heading: 'السؤال 4 — ما بيئة العمل؟',
      paragraphs: [
        'أرضيات المسابك حارّة ومُغبَرّة وذات ضوضاء كهربائية، أمّا مختبر الجودة المكيَّف فلا. اختر الجهاز للمكان الذي سيعمل فيه فعلاً. تتحمّل الغرفة البصرية المفرّغة (T5 و T7 و JB-750) الغبار والرطوبة أكثر من غرفة الأرغون المغلقة (T4). الغرفة الثابتة الحرارة (T7) ضرورية عند تذبذب درجة حرارة المحيط بأكثر من 5 °م خلال الوردية.',
        'إذا كان يجب أن **يخرج الجهاز من المختبر** — فحص ساحات الخردة، PMI لأنابيب الخدمة، ضبط جودة في الموقع لمكوّنات ثابتة كبيرة — فلا بديل عن OES متنقّل. ينقل [Surpass F1](/ar/products/surpass-f1/) جهاز OES بالشرارة مع قياس الكربون والفوسفور والكبريت إلى الميدان على عربة ببطارية وأسطوانة أرغون مدمجتَين. ليس بديلاً عن المكتبي في المختبر، بل الأداة الصحيحة عندما لا تستطيع العيّنة الوصول إلى الجهاز.',
      ],
    },
    {
      heading: 'ملخّص الموديلات الخمسة',
      paragraphs: [
        'في فقرة واحدة: **Exquis T4** هو المكتبي ذو السعر-الأداء الأفضل لمصفوفة واحدة. **Innovate T5** هو خيار الإنتاج متعدّد السبائك بغرفة مفرّغة وكشف CMOS. يضيف **Noble T7** دقّةً بحثية للعناصر النزرة وغرفة مُنظِّمة حرارياً. **JB-750** هو رائد فئة PMT لمختبرات الاعتماد وضبط جودة الطيران. **Surpass F1** هو OES المتنقّل للأعمال الميدانية.',
      ],
    },
    {
      heading: 'ما ليس في هذه القائمة',
      paragraphs: [
        'إذا كان عنق الزجاجة لديك هو **الفحص غير المتلف لقطع نهائية**، فالـ OES ليست العائلة الصحيحة — راجع [دليل OES و XRF و LIBS](/ar/learn/oes-vs-xrf-vs-libs/). وإذا كان عنق الزجاجة هو **الكربون والكبريت تحديداً** عند مستويات منخفضة أو عالية جداً، فقد تحتاج محلّلاً مخصّصاً للاحتراق بجانب OES — راجع [CS995](/ar/products/cs995/) أو [CS996](/ar/products/cs996/) أو [CS2020](/ar/products/cs2020/). وإذا كان العمل هو **الأكسجين والنيتروجين والهيدروجين في التيتانيوم والزركونيوم وسبائك الأتربة النادرة**، فالـ OES لا يقيس هذه الغازات — استخدم [ONH-508](/ar/products/onh-508/).',
      ],
    },
  ],
};

export const faq: Record<Locale, Array<{ q: string; a: string }>> = {
  en: [
    { q: 'Can I add matrices after delivery?', a: 'Yes. Calibration curves for additional matrices can be installed at the customer site by a JIEBO engineer or remotely guided. Most matrix additions take 1–2 days including calibration verification with certified reference materials.' },
    { q: 'Do I need PMT or can CMOS do the job?', a: 'For typical foundry, steel-mill and metallurgy production work, modern CMOS detectors (Innovate T5, Noble T7) reach 0.0001 % detection limits — sufficient for production-grade trace analysis. PMT (JB-750) is needed when certification requires sub-ppm performance, especially in aerospace QA or super-alloy R&D.' },
    { q: 'How much argon will the instrument actually use?', a: 'Modern vacuum-chamber instruments (T5, T7, JB-750) consume approximately 0.5–2 L/min in standby and 3–5 L/min during sparking. The sealed-cycle design of the Exquis T4 reduces consumption further. Plan on one 40 L argon cylinder per 2–4 weeks of normal QC use.' },
    { q: 'How do I budget calibration over time?', a: 'Re-calibrate against certified reference materials every 6 months in normal production environments; every 3 months in heavy-throughput or temperature-variable rooms. Budget around USD 1,000–2,500 per year per instrument for CRMs, accelerator chips, and electrodes.' },
    { q: 'Can JIEBO ship outside China?', a: 'Yes — current installations in 40+ countries across the Middle East, Africa, Southeast Asia, Latin America and CIS. Standard 15-day lead time, CE/CB certificates and door-to-door logistics handled by the Wuxi sales team. Talk to us on WhatsApp at +86 181 1891 5721.' },
  ],
  ru: [
    { q: 'Можно ли добавить матрицы после поставки?', a: 'Да. Калибровочные кривые под дополнительные матрицы устанавливаются на стороне заказчика инженером JIEBO или под удалённым руководством. Добавление матрицы обычно занимает 1–2 дня с проверкой по сертифицированным эталонам.' },
    { q: 'Нужен ли ФЭУ или достаточно CMOS?', a: 'Для типичных литейных, сталелитейных и металлургических задач современные CMOS-детекторы (Innovate T5, Noble T7) дают предел 0,0001 % — этого достаточно для производственной следовой работы. ФЭУ (JB-750) нужен, когда сертификация требует суб-ppm, особенно в аэрокосмическом QA или R&D суперсплавов.' },
    { q: 'Каков реальный расход аргона?', a: 'Современные вакуумные приборы (T5, T7, JB-750) расходуют около 0,5–2 л/мин в режиме ожидания и 3–5 л/мин при разряде. Закрытая схема Exquis T4 снижает расход ещё больше. Рассчитывайте на один 40-литровый баллон аргона на 2–4 недели нормальной QC-работы.' },
    { q: 'Как планировать калибровку по времени?', a: 'Калибровать по сертифицированным эталонам каждые 6 месяцев в обычных условиях; каждые 3 месяца — при высокой нагрузке или большом разбросе температуры. Закладывайте 1 000–2 500 USD в год на прибор: CRM, ускорительные чипы, электроды.' },
    { q: 'Поставляет ли JIEBO за пределы Китая?', a: 'Да — действующие установки в 40+ странах Ближнего Востока, Африки, ЮВА, Латинской Америки и СНГ. Стандартный срок 15 дней, сертификаты CE/CB и доставка «от двери до двери» — через коммерческую службу в Уси. Пишите в WhatsApp на +86 181 1891 5721.' },
  ],
  es: [
    { q: '¿Puedo añadir matrices después de la entrega?', a: 'Sí. Las curvas de calibración para matrices adicionales se instalan en sitio por un ingeniero JIEBO o guiados remotamente. Una matriz nueva suele tardar 1–2 días incluyendo verificación con materiales de referencia certificados.' },
    { q: '¿Necesito PMT o me sirve CMOS?', a: 'Para fundición, acería y metalurgia de producción típica, los CMOS modernos (Innovate T5, Noble T7) alcanzan límite de 0,0001 % — suficiente para trazas de producción. PMT (JB-750) se requiere cuando la certificación exige sub-ppm, especialmente en QA aeroespacial o I+D de superaleaciones.' },
    { q: '¿Cuánto argón usará realmente el equipo?', a: 'Los equipos modernos al vacío (T5, T7, JB-750) consumen ~0,5–2 L/min en reposo y 3–5 L/min al chispear. El diseño sellado del Exquis T4 reduce aún más el consumo. Calcule un cilindro de 40 L cada 2–4 semanas de QC normal.' },
    { q: '¿Cómo presupuesto la calibración en el tiempo?', a: 'Recalibrar contra materiales certificados cada 6 meses en producción normal; cada 3 meses en alta carga o ambientes con variación térmica. Presupueste USD 1 000–2 500 por año por equipo en CRMs, aceleradores y electrodos.' },
    { q: '¿JIEBO envía fuera de China?', a: 'Sí — instalaciones actuales en 40+ países en Medio Oriente, África, Sudeste Asiático, América Latina y CEI. Plazo estándar 15 días, certificados CE/CB y logística puerta a puerta gestionados por el equipo comercial en Wuxi. Escríbanos por WhatsApp al +86 181 1891 5721.' },
  ],
  ar: [
    { q: 'هل يمكن إضافة مصفوفات بعد التسليم؟', a: 'نعم. تُثبَّت منحنيات معايرة المصفوفات الإضافية لدى العميل بواسطة مهندس JIEBO أو بإرشاد عن بُعد. تستغرق إضافة المصفوفة عادةً يوماً إلى يومين بما يشمل التحقّق بمواد مرجعية معتمدة.' },
    { q: 'هل أحتاج PMT أم يكفيني CMOS؟', a: 'لأعمال المسابك ومصانع الصلب والإنتاج المعدني المعتادة، تصل كاشفات CMOS الحديثة (Innovate T5 و Noble T7) إلى حدود كشف 0.0001 % — وهو يكفي لقياس العناصر النزرة بدرجة الإنتاج. يلزم PMT (JB-750) عند طلب الاعتماد لمستويات دون جزء في المليون، خاصّةً في ضبط جودة الطيران أو أبحاث السبائك العالية.' },
    { q: 'كم سيستهلك الجهاز من الأرغون فعلاً؟', a: 'تستهلك الأجهزة المفرّغة الحديثة (T5 و T7 و JB-750) نحو 0.5–2 لتر/دقيقة في الاستعداد، و3–5 لتر/دقيقة أثناء الشرارة. يخفّض تصميم Exquis T4 المغلق الاستهلاك أكثر. خطّط لاسطوانة أرغون 40 لتراً كلّ 2–4 أسابيع من استخدام QC اعتيادي.' },
    { q: 'كيف أحتسب ميزانية المعايرة عبر الزمن؟', a: 'أعد المعايرة بمواد مرجعية معتمدة كلّ 6 أشهر في ظروف الإنتاج العادية، وكلّ 3 أشهر في الإنتاجية العالية أو الغرف ذات تذبذب الحرارة. خطّط لميزانية تتراوح بين 1 000 و2 500 دولار سنوياً للجهاز الواحد على المعايير ومسرّعات الاحتراق والأقطاب.' },
    { q: 'هل تشحن JIEBO خارج الصين؟', a: 'نعم — تركيبات حالية في أكثر من 40 دولة عبر الشرق الأوسط وأفريقيا وجنوب شرق آسيا وأمريكا اللاتينية وكومنولث الدول المستقلّة. مدّة قياسية 15 يوماً وشهادات CE/CB وشحن من الباب إلى الباب يتولّاها فريق المبيعات في ووشي. تواصل عبر واتساب +86 181 1891 5721.' },
  ],
};
