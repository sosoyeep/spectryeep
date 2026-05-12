import type { Locale } from '../consts';

export const title: Record<Locale, string> = {
  en: 'Carbon Analysis in Cast Iron: OES vs Combustion C/S Analyzer',
  ru: 'Анализ углерода в чугуне: ОЭС или C/S-анализатор сжигания',
  es: 'Análisis de carbono en hierro fundido: OES vs analizador C/S por combustión',
  ar: 'تحليل الكربون في الحديد الزهر: OES أم محلّل الكربون والكبريت بالاحتراق',
};

export const description: Record<Locale, string> = {
  en: 'Carbon defines whether your casting is gray iron, ductile iron, white iron or steel. This guide explains how spark optical emission spectrometry (OES) and high-frequency infrared combustion analyzers measure carbon, where each technique wins, and how production foundries use both — with practical mapping to JIEBO Innovate T5, Noble T7, CS995, CS996 and CS2020.',
  ru: 'Углерод определяет, серый ли у вас чугун, ковкий, белый или сталь. Это руководство объясняет, как искровая ОЭС и высокочастотный ИК-анализатор сжигания измеряют углерод, где каждый метод выигрывает, и как литейные производства используют оба — с практическим сопоставлением с JIEBO Innovate T5, Noble T7, CS995, CS996 и CS2020.',
  es: 'El carbono define si su fundición es hierro gris, dúctil, blanco o acero. Esta guía explica cómo OES por chispa y los analizadores de combustión por infrarrojos miden el carbono, dónde gana cada técnica y cómo las fundiciones usan ambas — con mapeo práctico a JIEBO Innovate T5, Noble T7, CS995, CS996 y CS2020.',
  ar: 'يحدّد الكربون ما إذا كانت قطعة الصبّ من الحديد الزهر الرمادي أو المرن أو الأبيض أو من الصلب. يشرح هذا الدليل كيفية قياس الكربون عبر OES بالشرارة ومحلّلات الاحتراق بالأشعة تحت الحمراء عالية التردّد، ومتى تفوز كلّ تقنية، وكيف تستخدم المسابك كلتيهما — مع ربط عملي بأجهزة JIEBO Innovate T5 و Noble T7 و CS995 و CS996 و CS2020.',
};

export const datePublished = '2026-05-12';

export type Section = { heading: string; paragraphs: string[] };

export const sections: Record<Locale, Section[]> = {
  en: [
    {
      heading: 'Why carbon matters in cast iron',
      paragraphs: [
        'Carbon is the single most important alloying element in iron casting. The carbon content — together with silicon and the cooling rate — determines whether the casting solidifies as gray iron (carbon as flake graphite, 2.5–4.0 % C), ductile iron (carbon as spheroidal graphite, 3.0–4.0 % C), white iron (carbon as iron carbide, 1.8–3.6 % C), or steel (<2.0 % C). A 0.1 % error in carbon measurement can shift the casting between grades — with direct mechanical and commercial consequences.',
        'Foundries therefore measure carbon at three points: incoming raw material (pig iron, scrap, returns), in-process molten metal (spoon or chill-cup samples before pouring), and finished castings (post-cooling QC). Each point has different speed and accuracy requirements.',
      ],
    },
    {
      heading: 'Two techniques, both useful',
      paragraphs: [
        '**Spark optical emission spectrometry (OES)** measures carbon by exciting a solid metal sample with an electrical spark in argon and reading the carbon emission line at 193.09 nm (and others). It returns 20–30 elements in a single 20–30-second burn, making it ideal for in-process composition control where you need carbon plus silicon, manganese, phosphorus and sulfur at once.',
        '**High-frequency infrared combustion C/S analyzers** measure carbon by burning a weighed metal sample in oxygen inside an induction furnace; the resulting CO₂ is measured by a non-dispersive infrared (NDIR) cell. The technique is more accurate at very low (<0.05 %) and very high (>4 %) carbon levels, but it analyzes only carbon and sulfur — not the other ten elements you also need for grade specification.',
      ],
    },
    {
      heading: 'Where spark OES wins',
      paragraphs: [
        'Use OES for **in-process production control**. When the melt is in the holding furnace and you have 60 seconds to decide whether to add carbon, silicon or manganese, an OES burn gives you the full composition in one shot. The [Innovate T5](/products/innovate-t5/) with its Hamamatsu CMOS detector covers the typical foundry range (2.5–4.0 % C in gray iron, sulfur 0.005–0.15 %) at production-grade accuracy.',
        'For research-grade or aerospace foundry work where the carbon must be reported to ±0.005 %, step up to the [Noble T7](/products/noble-t7/) with constant-temperature optics. Carbon is a non-metallic element with low excitation energy — accurate OES carbon measurement depends on tight calibration, dry argon, and a vacuum or thermostatted optical chamber.',
      ],
    },
    {
      heading: 'Where combustion C/S wins',
      paragraphs: [
        'Use a dedicated combustion analyzer for **certification and the extreme ends of the carbon range**. When you must report 0.001 % C in a low-carbon stainless steel, or 4.5 % C in a hyper-eutectic gray iron, the combustion technique is more accurate than OES. The integrated calibration is also simpler — combustion uses a weight basis, not a spectral line ratio, so calibration drift is slower.',
        'JIEBO offers three combustion C/S analyzers spanning entry-level to high-end: the [CS995](/products/cs995/) (bench-type, 0.0005–6 % carbon range, ideal for foundry production), the [CS996](/products/cs996/) (floor-type with expandable cells, 0.0001–10 % range, for mixed-grade plants), and the [CS2020](/products/cs2020/) (four-cell auto-cleaning unit, 0.00001–99.99 % range, for high-throughput labs and certification).',
      ],
    },
    {
      heading: 'How real foundries use both',
      paragraphs: [
        'Most well-run iron foundries run OES on the production floor for in-process control and keep a combustion C/S analyzer in the QC lab for incoming-material certification and finished-casting verification. The two techniques cross-check each other: if the OES carbon reading drifts from the combustion analyzer over a week, the OES needs recalibration. This dual-instrument workflow is the industry standard at every reputable ductile iron foundry we ship to.',
        'The investment cost of running both is lower than people expect. A typical foundry pairing — Innovate T5 plus CS995 — covers the full QC workflow at well under the cost of a single high-end European OES system. We routinely quote both as a package for new foundry customers.',
      ],
    },
    {
      heading: 'Cast iron grade specifications',
      paragraphs: [
        'Quick reference for the most common iron casting grades and the carbon range each must hit:',
      ],
    },
  ],
  ru: [
    {
      heading: 'Почему углерод важен в чугуне',
      paragraphs: [
        'Углерод — самый важный легирующий элемент в литье чугуна. Его содержание вместе с кремнием и скоростью охлаждения определяет, отлично ли это серый чугун (углерод как пластинчатый графит, 2,5–4,0 % C), ковкий чугун (сфероидальный графит, 3,0–4,0 % C), белый чугун (карбид железа, 1,8–3,6 % C) или сталь (<2,0 % C). Ошибка 0,1 % в измерении углерода может перевести отливку из одной марки в другую — с прямыми механическими и коммерческими последствиями.',
        'Поэтому литейные измеряют углерод в трёх точках: входной материал (чушковой чугун, лом, возврат), процессный расплав (ложка или ленточная проба перед разливкой), готовая отливка (QC после охлаждения). У каждой точки свои требования к скорости и точности.',
      ],
    },
    {
      heading: 'Два метода — оба нужны',
      paragraphs: [
        '**Искровая оптико-эмиссионная спектрометрия (ОЭС)** определяет углерод, возбуждая твёрдый образец искрой в аргоне и считывая эмиссионную линию углерода 193,09 нм (и другие). Возвращает 20–30 элементов за один 20–30-секундный разряд — идеально для контроля состава в процессе, когда нужны углерод, кремний, марганец, фосфор и сера сразу.',
        '**Высокочастотные ИК-анализаторы углерода-серы методом сжигания** определяют углерод сжиганием взвешенного образца в кислороде в индукционной печи; образовавшийся CO₂ измеряется недисперсионной ИК-ячейкой (NDIR). Метод точнее на очень низких (<0,05 %) и очень высоких (>4 %) уровнях углерода, но анализирует только углерод и серу — а не остальные десять элементов спецификации марки.',
      ],
    },
    {
      heading: 'Где выигрывает искровой ОЭС',
      paragraphs: [
        'Используйте ОЭС для **контроля производства в процессе**. Когда плавка в копильнике и у вас 60 секунд решить — добавить углерод, кремний или марганец — разряд ОЭС даёт полный состав за один выстрел. [Innovate T5](/ru/products/innovate-t5/) с CMOS-детектором Hamamatsu покрывает типичный литейный диапазон (2,5–4,0 % C в сером чугуне, S 0,005–0,15 %) с производственной точностью.',
        'Для исследовательской или аэрокосмической литейной задачи, где углерод нужно сообщать с ±0,005 %, берите [Noble T7](/ru/products/noble-t7/) с термостатированной оптикой. Углерод — неметалл с низкой энергией возбуждения; точное измерение зависит от строгой калибровки, сухого аргона и вакуумной или термостатированной оптики.',
      ],
    },
    {
      heading: 'Где выигрывает анализатор сжигания',
      paragraphs: [
        'Используйте выделенный анализатор сжигания для **сертификации и крайних значений диапазона**. Когда надо отчитаться 0,001 % C в низкоуглеродистой нержавейке или 4,5 % C в гипер-эвтектическом сером чугуне, метод сжигания точнее ОЭС. Калибровка проще — основа гравиметрия, а не спектральное отношение, поэтому дрейф медленнее.',
        'JIEBO предлагает три анализатора C/S — от начального до топового: [CS995](/ru/products/cs995/) (настольный, диапазон C 0,0005–6 %, для литейного производства), [CS996](/ru/products/cs996/) (напольный с расширяемыми ячейками, 0,0001–10 %, для смешанных марок), [CS2020](/ru/products/cs2020/) (4 ячейки, автоматическая чистка, 0,00001–99,99 %, для высокопоточных лабораторий и сертификации).',
      ],
    },
    {
      heading: 'Как реальные литейные используют оба',
      paragraphs: [
        'Большинство хорошо организованных литейных держат ОЭС в цехе для процессного контроля и анализатор C/S в QC-лаборатории для сертификации входного материала и готовых отливок. Методы перекрёстно проверяют друг друга: если показания углерода по ОЭС за неделю расходятся с анализатором сжигания, ОЭС требует перекалибровки. Это отраслевой стандарт во всех серьёзных литейных ковкого чугуна, куда мы поставляем.',
        'Совокупная стоимость двух приборов меньше, чем кажется. Типичная пара — Innovate T5 + CS995 — покрывает весь QC-процесс ощутимо дешевле одного топового европейского ОЭС. Мы регулярно делаем пакетное предложение для новых литейных клиентов.',
      ],
    },
    {
      heading: 'Спецификации марок чугуна',
      paragraphs: [
        'Краткая справка по наиболее распространённым маркам чугунного литья и требуемым диапазонам углерода:',
      ],
    },
  ],
  es: [
    {
      heading: 'Por qué importa el carbono en el hierro fundido',
      paragraphs: [
        'El carbono es el elemento de aleación más importante en la fundición de hierro. Su contenido — junto con el silicio y la velocidad de enfriamiento — determina si la pieza solidifica como hierro gris (carbono como grafito laminar, 2,5–4,0 % C), hierro dúctil (grafito esferoidal, 3,0–4,0 % C), hierro blanco (carburo de hierro, 1,8–3,6 % C) o acero (<2,0 % C). Un error de 0,1 % en la medición puede cambiar la pieza de grado — con consecuencias mecánicas y comerciales directas.',
        'Las fundiciones miden carbono en tres puntos: materia prima entrante (arrabio, chatarra, retornos), metal en proceso (cuchara o copilla antes de vaciar) y pieza terminada (QC post-enfriado). Cada punto tiene requerimientos distintos de velocidad y precisión.',
      ],
    },
    {
      heading: 'Dos técnicas, ambas útiles',
      paragraphs: [
        '**OES por chispa** mide carbono excitando una muestra sólida con chispa en argón y leyendo la línea de emisión del carbono a 193,09 nm (entre otras). Retorna 20–30 elementos en un único disparo de 20–30 segundos — ideal para control de composición en proceso cuando necesita carbono, silicio, manganeso, fósforo y azufre a la vez.',
        '**Analizadores C/S por combustión infrarroja de alta frecuencia** miden carbono quemando una muestra pesada en oxígeno dentro de un horno de inducción; el CO₂ resultante se mide por celda NDIR. La técnica es más precisa en valores muy bajos (<0,05 %) y muy altos (>4 %), pero solo analiza C y S — no los otros diez elementos que también necesita para especificar el grado.',
      ],
    },
    {
      heading: 'Cuándo gana OES por chispa',
      paragraphs: [
        'Use OES para **control de producción en proceso**. Cuando el metal está en el horno de mantenimiento y tiene 60 segundos para decidir si añadir carbono, silicio o manganeso, un disparo OES le da la composición completa. El [Innovate T5](/es/products/innovate-t5/) con detector CMOS Hamamatsu cubre el rango típico de fundición (2,5–4,0 % C en gris, S 0,005–0,15 %) con precisión de producción.',
        'Para fundición de investigación o aeroespacial donde el carbono debe reportarse a ±0,005 %, suba al [Noble T7](/es/products/noble-t7/) con óptica termostatizada. El carbono es no metálico de baja energía de excitación; su medición precisa depende de calibración estricta, argón seco y cámara óptica al vacío o termostatizada.',
      ],
    },
    {
      heading: 'Cuándo gana el analizador por combustión',
      paragraphs: [
        'Use un analizador dedicado para **certificación y los extremos del rango**. Cuando debe reportar 0,001 % C en un inoxidable bajo carbono o 4,5 % C en un gris hipereutéctico, la combustión es más precisa que OES. La calibración es más simple — base gravimétrica, no espectral — por lo que la deriva es más lenta.',
        'JIEBO ofrece tres analizadores C/S de entrada a alta gama: [CS995](/es/products/cs995/) (de mesa, rango C 0,0005–6 %, ideal para producción de fundición), [CS996](/es/products/cs996/) (de pie con celdas ampliables, 0,0001–10 %, para plantas multi-grado), [CS2020](/es/products/cs2020/) (4 celdas, autolimpieza, 0,00001–99,99 %, para laboratorios de alto volumen y certificación).',
      ],
    },
    {
      heading: 'Cómo las fundiciones reales usan ambos',
      paragraphs: [
        'La mayoría de las fundiciones bien gestionadas mantiene OES en planta para control en proceso y analizador C/S en el laboratorio QC para certificación de materia prima y verificación final. Las dos técnicas se cruzan: si la lectura de carbono OES se aleja del analizador por combustión durante una semana, el OES necesita recalibración. Es el estándar en toda fundición seria de hierro dúctil a la que enviamos.',
        'La inversión combinada es menor de lo que la gente espera. Una pareja típica — Innovate T5 + CS995 — cubre todo el flujo de QC bastante por debajo del costo de un OES europeo de gama alta. Cotizamos rutinariamente este paquete para clientes nuevos de fundición.',
      ],
    },
    {
      heading: 'Especificaciones de grados de hierro fundido',
      paragraphs: [
        'Referencia rápida de los grados de fundición más comunes y el rango de carbono que cada uno debe cumplir:',
      ],
    },
  ],
  ar: [
    {
      heading: 'لماذا يهمّ الكربون في الحديد الزهر',
      paragraphs: [
        'الكربون أهم عنصر سبائكي في صبّ الحديد. يحدّد محتواه — مع السيليكون ومعدّل التبريد — ما إذا كانت القطعة تتجمّد كحديد رمادي (كربون كغرافيت رقائقي، 2.5–4.0 %)، أو حديد مرن (غرافيت كروي، 3.0–4.0 %)، أو حديد أبيض (كربيد الحديد، 1.8–3.6 %)، أو صلب (<2.0 %). خطأ بنسبة 0.1 % في قياس الكربون قد يُحوِّل القطعة بين الدرجات — مع تبعات ميكانيكية وتجارية مباشرة.',
        'لذلك تقيس المسابك الكربون عند ثلاث نقاط: المواد الواردة (الحديد الخامي والخردة والعائد)، والمعدن المنصهر أثناء الإنتاج (عيّنة المغرفة أو القالب البارد قبل الصبّ)، والقطعة النهائية (QC بعد التبريد). ولكل نقطة متطلّبات مختلفة في السرعة والدقّة.',
      ],
    },
    {
      heading: 'تقنيتان، كلتاهما مفيدة',
      paragraphs: [
        '**مطيافيّة الانبعاث الضوئي بالشرارة (OES)** تقيس الكربون بإثارة عيّنة معدنية صلبة بشرارة في الأرغون وقراءة خطّ انبعاث الكربون عند 193.09 نانومتر (وغيره). تُعطي 20–30 عنصراً في طلقة واحدة مدّتها 20–30 ثانية — مثاليّة لضبط التركيب أثناء الإنتاج حين تحتاج الكربون والسيليكون والمنغنيز والفوسفور والكبريت دفعةً واحدة.',
        '**محلّلات الكربون والكبريت بالاحتراق بالأشعة تحت الحمراء العالية التردّد** تقيس الكربون بحرق عيّنة معدنية موزونة في الأكسجين داخل فرن حثّي؛ ويُقاس ثاني أكسيد الكربون الناتج بخلية NDIR. التقنية أدقّ في المستويات المنخفضة جداً (<0.05 %) أو المرتفعة جداً (>4 %)، لكنّها لا تقيس سوى الكربون والكبريت — لا العناصر العشرة الأخرى التي تحتاجها لتحديد الدرجة.',
      ],
    },
    {
      heading: 'متى يفوز OES بالشرارة',
      paragraphs: [
        'استخدم OES لـ **ضبط الإنتاج أثناء العمليّة**. حين يكون المعدن في فرن الإمساك ولديك 60 ثانية لتقرّر إضافة كربون أو سيليكون أو منغنيز، تعطيك طلقة OES التركيب الكامل. يغطّي [Innovate T5](/ar/products/innovate-t5/) بكاشف Hamamatsu CMOS النطاق الاعتيادي للمسابك (2.5–4.0 % كربون في الرمادي، وكبريت 0.005–0.15 %) بدقّة إنتاجية.',
        'للأعمال البحثية أو مسابك الطيران حيث يجب تسجيل الكربون بدقّة ±0.005 %، ارتقِ إلى [Noble T7](/ar/products/noble-t7/) ببصريات ثابتة الحرارة. الكربون عنصر غير معدني بطاقة إثارة منخفضة؛ ودقّة قياسه في OES تعتمد على معايرة محكمة وأرغون جافّ وغرفة بصرية مفرّغة أو منظَّمة حرارياً.',
      ],
    },
    {
      heading: 'متى يفوز محلّل الاحتراق',
      paragraphs: [
        'استخدم محلّلاً مخصّصاً لـ **الاعتماد ومستويات أطراف النطاق**. حين تحتاج تسجيل 0.001 % كربون في صلب مقاوم للصدأ منخفض الكربون أو 4.5 % كربون في حديد رمادي فوق-سحبي، يتفوّق الاحتراق على OES في الدقّة. كما أنّ المعايرة أبسط — أساسها الوزن لا نسبة طيفية — فينجرف ببطء أكثر.',
        'تقدّم JIEBO ثلاثة محلّلات C/S من المستوى المبتدئ إلى الراقي: [CS995](/ar/products/cs995/) (مكتبي بنطاق كربون 0.0005–6 %، مثالي لإنتاج المسابك)، و[CS996](/ar/products/cs996/) (أرضي بخلايا قابلة للتوسعة، 0.0001–10 %، لمصانع متعدّدة الدرجات)، و[CS2020](/ar/products/cs2020/) (أربع خلايا وتنظيف آلي، 0.00001–99.99 %، للمختبرات عالية الإنتاجية والاعتماد).',
      ],
    },
    {
      heading: 'كيف تستخدم المسابك الواقعية كليهما',
      paragraphs: [
        'تحتفظ معظم المسابك المُدارة جيداً بـ OES في أرضية الإنتاج لضبط العمليّة، ومحلّل C/S في مختبر الجودة لاعتماد المواد الواردة والتحقّق من القطع النهائية. تتقاطع التقنيتان: إذا ابتعدت قراءة الكربون من OES عن محلّل الاحتراق على مدى أسبوع، فهذا يعني أنّ OES يحتاج إعادة معايرة. هذا هو المعيار الصناعي في كلّ مسبك حديد مرن جادّ نشحن إليه.',
        'تكلفة الجمع بين الجهازَين أقلّ ممّا يظنّ الناس. الزوج النموذجي — Innovate T5 و CS995 — يغطّي سير العمل QC بكلفة أقلّ بكثير من جهاز OES أوروبي راقٍ منفرد. نقدّم هذه الحزمة بشكل اعتيادي للعملاء الجدد في مجال المسابك.',
      ],
    },
    {
      heading: 'مواصفات درجات الحديد الزهر',
      paragraphs: [
        'مرجع سريع لأكثر درجات صبّ الحديد شيوعاً ونطاق الكربون الذي يجب أن تلتزم به كلّ درجة:',
      ],
    },
  ],
};

export const gradesTable: Record<Locale, { cols: string[]; rows: string[][]; caption: string }> = {
  en: {
    caption: 'Common cast iron and cast steel grades — carbon ranges (typical international standards)',
    cols: ['Grade', 'Carbon (%)', 'Silicon (%)', 'Typical use'],
    rows: [
      ['Gray iron (GG / FC / Class 30)', '2.8 – 3.5', '1.8 – 2.5', 'Engine blocks, machine bases, brake drums'],
      ['Ductile iron (GGG / FCD / 60-40-18)', '3.2 – 3.8', '1.8 – 2.8', 'Crankshafts, pipe fittings, valve bodies'],
      ['White iron', '1.8 – 3.6', '0.5 – 1.5', 'Wear plates, grinding balls, hardened liners'],
      ['Malleable iron', '2.0 – 2.6', '1.0 – 1.5', 'Pipe fittings, agricultural hardware'],
      ['Compacted graphite iron (CGI)', '3.5 – 3.9', '1.9 – 2.5', 'Heavy-duty engine blocks, exhaust manifolds'],
      ['Cast carbon steel (WCB)', '0.20 – 0.30', '0.60 max', 'Valve bodies, structural castings'],
      ['Cast low-alloy steel (WC6, WC9)', '0.10 – 0.20', '0.60 max', 'High-pressure steam service'],
    ],
  },
  ru: {
    caption: 'Распространённые марки чугуна и литой стали — диапазоны углерода (типовые международные стандарты)',
    cols: ['Марка', 'Углерод (%)', 'Кремний (%)', 'Типовое применение'],
    rows: [
      ['Серый чугун (СЧ / GG / Class 30)', '2,8 – 3,5', '1,8 – 2,5', 'Блоки цилиндров, станины, тормозные барабаны'],
      ['Высокопрочный чугун (ВЧ / GGG / 60-40-18)', '3,2 – 3,8', '1,8 – 2,8', 'Коленвалы, фитинги, корпуса арматуры'],
      ['Белый чугун', '1,8 – 3,6', '0,5 – 1,5', 'Изн. пластины, мельничные шары, закалённые футеровки'],
      ['Ковкий чугун', '2,0 – 2,6', '1,0 – 1,5', 'Фитинги, сельхоз-фурнитура'],
      ['Чугун с вермикулярным графитом (CGI)', '3,5 – 3,9', '1,9 – 2,5', 'Тяжелонагруженные блоки цилиндров, выпускные коллекторы'],
      ['Литая углеродистая сталь (WCB)', '0,20 – 0,30', '0,60 макс.', 'Корпуса арматуры, конструкционное литьё'],
      ['Литая низколегированная сталь (WC6, WC9)', '0,10 – 0,20', '0,60 макс.', 'Паровая аппаратура высокого давления'],
    ],
  },
  es: {
    caption: 'Grados comunes de hierro y acero fundido — rangos de carbono (estándares internacionales típicos)',
    cols: ['Grado', 'Carbono (%)', 'Silicio (%)', 'Uso típico'],
    rows: [
      ['Hierro gris (GG / FC / Clase 30)', '2,8 – 3,5', '1,8 – 2,5', 'Bloques de motor, bancadas, tambores de freno'],
      ['Hierro dúctil (GGG / FCD / 60-40-18)', '3,2 – 3,8', '1,8 – 2,8', 'Cigüeñales, racores de tubería, cuerpos de válvula'],
      ['Hierro blanco', '1,8 – 3,6', '0,5 – 1,5', 'Placas de desgaste, bolas de molienda, revestimientos endurecidos'],
      ['Hierro maleable', '2,0 – 2,6', '1,0 – 1,5', 'Racores, hardware agrícola'],
      ['Hierro de grafito compacto (CGI)', '3,5 – 3,9', '1,9 – 2,5', 'Bloques de motor pesados, colectores de escape'],
      ['Acero fundido al carbono (WCB)', '0,20 – 0,30', '0,60 máx.', 'Cuerpos de válvula, fundiciones estructurales'],
      ['Acero fundido baja aleación (WC6, WC9)', '0,10 – 0,20', '0,60 máx.', 'Servicio de vapor de alta presión'],
    ],
  },
  ar: {
    caption: 'درجات شائعة للحديد الزهر والصلب المصبوب — نطاقات الكربون (معايير دولية اعتيادية)',
    cols: ['الدرجة', 'الكربون (%)', 'السيليكون (%)', 'الاستخدام النموذجي'],
    rows: [
      ['الحديد الرمادي (GG / FC / Class 30)', '2.8 – 3.5', '1.8 – 2.5', 'كتل المحرّكات وقواعد الآلات وأسطوانات الفرامل'],
      ['الحديد المرن (GGG / FCD / 60-40-18)', '3.2 – 3.8', '1.8 – 2.8', 'أعمدة الكرنك وتجهيزات الأنابيب وأجسام الصمّامات'],
      ['الحديد الأبيض', '1.8 – 3.6', '0.5 – 1.5', 'ألواح مقاومة للتآكل وكرات الطحن وبطانات مقساة'],
      ['الحديد القابل للطرق', '2.0 – 2.6', '1.0 – 1.5', 'تجهيزات الأنابيب ومعدّات زراعية'],
      ['حديد الغرافيت المضغوط (CGI)', '3.5 – 3.9', '1.9 – 2.5', 'كتل محرّكات للأحمال الثقيلة ومجمّعات العادم'],
      ['الصلب الكربوني المصبوب (WCB)', '0.20 – 0.30', '0.60 كحدّ أقصى', 'أجسام الصمّامات والمصبوبات الإنشائية'],
      ['الصلب المصبوب منخفض السبائكية (WC6, WC9)', '0.10 – 0.20', '0.60 كحدّ أقصى', 'خدمة البخار العالية الضغط'],
    ],
  },
};

export const faq: Record<Locale, Array<{ q: string; a: string }>> = {
  en: [
    { q: 'Can I use only an OES and skip the C/S analyzer?', a: 'For most cast-iron foundries running standard ductile or gray grades, yes. An OES handles the typical 2.5–4.0 % C range with sufficient accuracy. You need the dedicated C/S analyzer mainly for certification, very low-carbon steels, or very high-carbon hyper-eutectic irons.' },
    { q: 'Can I use only a C/S analyzer and skip the OES?', a: 'No — a combustion analyzer measures only carbon and sulfur. You also need silicon, manganese, phosphorus, copper, chromium, nickel and several others to qualify a casting. OES gives you all of those at once; combustion does not.' },
    { q: 'How often must each instrument be calibrated?', a: 'OES: re-check daily with a control sample, full recalibration every 1–6 months depending on use. Combustion C/S analyzer: re-check every shift with a CRM, full recalibration every 1–3 months. Calibration drift is slower for combustion because it is gravimetric, not spectral.' },
    { q: 'Which sample preparation does each technique need?', a: 'OES needs a flat conductive surface ground or milled to ~20–30 mm diameter, free of paint and oil. C/S analyzer needs a small chip or drilling (0.1–1.0 g) loaded into a graphite or ceramic crucible with tungsten / iron accelerator chips.' },
    { q: 'Is the answer different for steel vs cast iron?', a: 'Yes. For cast iron (carbon 2–4 %) OES is usually accurate enough for production; combustion is needed only for certification. For low-carbon stainless steel (<0.05 %) the combustion analyzer is essential because OES carbon measurement at sub-0.05 % needs careful calibration and dry argon.' },
  ],
  ru: [
    { q: 'Можно ли обойтись только ОЭС без анализатора C/S?', a: 'Для большинства литейных, делающих стандартный ковкий или серый чугун — да. ОЭС покрывает типичный диапазон 2,5–4,0 % C с достаточной точностью. Выделенный C/S-анализатор нужен в основном для сертификации, очень низкоуглеродистых сталей и очень высокоуглеродистых гипер-эвтектических чугунов.' },
    { q: 'Можно ли обойтись только C/S-анализатором без ОЭС?', a: 'Нет — анализатор сжигания определяет только углерод и серу. Для аттестации отливки также нужны кремний, марганец, фосфор, медь, хром, никель и другие. ОЭС даёт всё это в одном измерении; сжигание — нет.' },
    { q: 'Как часто калибровать каждый прибор?', a: 'ОЭС: ежедневная проверка по контрольному образцу, полная калибровка раз в 1–6 месяцев в зависимости от нагрузки. C/S-анализатор: проверка по CRM каждую смену, полная калибровка раз в 1–3 месяца. Дрейф у сжигания медленнее, потому что метод гравиметрический, а не спектральный.' },
    { q: 'Какая подготовка образца нужна каждому методу?', a: 'ОЭС: плоская проводящая поверхность ∅ ~20–30 мм, без краски и масла. C/S: стружка или сверление 0,1–1,0 г в графитовом или керамическом тигле с вольфрамовыми/железными ускорителями.' },
    { q: 'Ответ другой для стали по сравнению с чугуном?', a: 'Да. Для чугуна (углерод 2–4 %) ОЭС обычно точен для производства; сжигание нужно лишь для сертификации. Для низкоуглеродистой нержавейки (<0,05 %) анализатор сжигания обязателен — измерение углерода ОЭС ниже 0,05 % требует тщательной калибровки и сухого аргона.' },
  ],
  es: [
    { q: '¿Puedo usar solo OES y omitir el analizador C/S?', a: 'Para la mayoría de fundiciones de hierro con grados dúctil o gris estándar, sí. Un OES maneja el rango típico 2,5–4,0 % C con precisión suficiente. El analizador C/S dedicado se necesita principalmente para certificación, aceros muy bajos en carbono o hierros hipereutécticos muy altos.' },
    { q: '¿Puedo usar solo el analizador C/S y omitir el OES?', a: 'No — el analizador por combustión solo mide carbono y azufre. También necesita silicio, manganeso, fósforo, cobre, cromo, níquel y otros para calificar una fundición. OES le da todo eso a la vez; la combustión no.' },
    { q: '¿Con qué frecuencia hay que calibrar cada equipo?', a: 'OES: verificación diaria con una muestra de control, recalibración total cada 1–6 meses según uso. Analizador C/S: verificación por turno con CRM, recalibración total cada 1–3 meses. La deriva es más lenta en combustión por ser gravimétrico, no espectral.' },
    { q: '¿Qué preparación de muestra requiere cada técnica?', a: 'OES: superficie plana conductora ~20–30 mm de diámetro, libre de pintura y aceite. C/S: viruta o pequeña perforación de 0,1–1,0 g cargada en crisol de grafito o cerámica con aceleradores de tungsteno / hierro.' },
    { q: '¿La respuesta es distinta para acero vs hierro fundido?', a: 'Sí. Para hierro fundido (carbono 2–4 %) OES suele ser suficientemente preciso para producción; la combustión solo se necesita en certificación. Para inoxidable bajo carbono (<0,05 %) el analizador por combustión es esencial porque el carbono OES bajo 0,05 % exige calibración cuidadosa y argón seco.' },
  ],
  ar: [
    { q: 'هل يكفي OES وحده دون محلّل C/S؟', a: 'لمعظم مسابك الحديد ذات الدرجات المعيارية (المرن أو الرمادي): نعم. يغطّي OES النطاق الاعتيادي 2.5–4.0 % كربون بدقّة كافية. تحتاج محلّل C/S المخصّص أساساً للاعتماد، أو للصلب منخفض الكربون جداً، أو الحديد الزهر العالي الكربون فوق-السحبي.' },
    { q: 'هل يكفي محلّل C/S وحده دون OES؟', a: 'لا — محلّل الاحتراق يقيس الكربون والكبريت فقط. تحتاج أيضاً السيليكون والمنغنيز والفوسفور والنحاس والكروم والنيكل وغيرها لتأهيل القطعة. يعطيك OES كل هذا في قياس واحد بينما لا يعطيه الاحتراق.' },
    { q: 'كم مرّة يلزم معايرة كلّ جهاز؟', a: 'OES: تحقّق يومي بعيّنة ضبط، معايرة كاملة كلّ 1–6 أشهر حسب الاستخدام. محلّل C/S: تحقّق كلّ وردية بمادة مرجعية معتمدة، معايرة كاملة كلّ 1–3 أشهر. الانجراف أبطأ في الاحتراق لأنّه وزني لا طيفي.' },
    { q: 'ما تحضير العيّنة لكلّ تقنية؟', a: 'OES: سطح مستوٍ موصِل قطره نحو 20–30 ملم خالٍ من الطلاء والزيت. C/S: قطعة صغيرة أو ثقب 0.1–1.0 غرام في بوتقة غرافيت أو سيراميك مع معجِّلات من التنغستن أو الحديد.' },
    { q: 'هل تختلف الإجابة في الصلب عن الحديد الزهر؟', a: 'نعم. للحديد الزهر (كربون 2–4 %) يكفي OES عادةً للإنتاج، ولا يلزم الاحتراق إلا للاعتماد. أما للصلب المقاوم للصدأ منخفض الكربون (<0.05 %) فمحلّل الاحتراق ضروري لأنّ قياس OES للكربون دون 0.05 % يحتاج معايرة دقيقة وأرغوناً جافّاً.' },
  ],
};
