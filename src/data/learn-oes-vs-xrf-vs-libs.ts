import type { Locale } from '../consts';

export const title: Record<Locale, string> = {
  en: 'OES vs XRF vs LIBS: Which Technique Fits Your Application?',
  ru: 'ОЭС, РФА и LIBS: какой метод подходит вашей задаче?',
  es: 'OES vs XRF vs LIBS: ¿qué técnica conviene a su aplicación?',
  ar: 'مقارنة بين OES و XRF و LIBS: أيّ تقنية تناسب تطبيقك؟',
};

export const description: Record<Locale, string> = {
  en: 'Optical emission spectrometry (OES), X-ray fluorescence (XRF) and laser-induced breakdown spectroscopy (LIBS) all measure metallic composition, but each excels in different scenarios. OES is the standard for carbon in cast iron and steel; handheld XRF is best for fast non-destructive grade ID without carbon; handheld LIBS measures light elements and avoids X-ray regulation.',
  ru: 'Оптико-эмиссионная спектрометрия (ОЭС), рентгенофлуоресцентный анализ (РФА) и лазерно-индуцированная плазменная спектроскопия (LIBS) измеряют состав металла, но каждая сильна в своих сценариях. ОЭС — стандарт для углерода в чугуне и стали; ручной РФА — для быстрой неразрушающей идентификации марки без углерода; ручной LIBS — для лёгких элементов и обхода радиационного регулирования.',
  es: 'La espectrometría de emisión óptica (OES), la fluorescencia de rayos X (XRF) y la espectroscopia LIBS miden composición metálica, pero cada una destaca en escenarios distintos. OES es el estándar para carbono en hierro fundido y acero; XRF portátil es óptimo para identificación rápida no destructiva sin carbono; LIBS portátil mide elementos ligeros y evita regulación de rayos X.',
  ar: 'تقيس تقنيات OES و XRF و LIBS تركيب المعادن، لكن لكلّ منها سيناريوها المتميّز. تُعدّ OES الطريقة المعيارية لقياس الكربون في الحديد الزهر والصلب؛ بينما يَبرُز XRF المحمول في التعريف السريع غير المتلف من دون قياس الكربون؛ ويُستخدم LIBS المحمول لقياس العناصر الخفيفة وتجنّب التنظيم الإشعاعي للأشعة السينية.',
};

export const datePublished = '2026-05-12';

export type Section = { heading: string; paragraphs: string[] };

export const sections: Record<Locale, Section[]> = {
  en: [
    {
      heading: 'What each technique actually measures',
      paragraphs: [
        'All three are atomic-emission or atomic-absorption techniques that quantify elements in metals — but they excite the sample differently. **OES (spark optical emission spectrometry)** strikes a high-voltage electrical discharge against a solid metal in an argon atmosphere; excited atoms emit light at element-specific wavelengths. **XRF (X-ray fluorescence)** irradiates the sample with X-rays; inner-shell electrons displace and the resulting characteristic X-rays identify the element. **LIBS (laser-induced breakdown spectroscopy)** focuses a high-energy laser pulse onto the sample to create a microscopic plasma; atoms in the plasma emit element-specific light.',
        'The excitation mechanism determines which elements each technique can measure, how destructive it is, and what regulatory framework applies to its operator.',
      ],
    },
    {
      heading: 'Quick comparison table',
      paragraphs: [
        'The table below summarizes the practical differences. Pick the technique that matches the **must-have column** for your work — usually carbon, regulation, or speed.',
      ],
    },
    {
      heading: 'When OES is the right choice',
      paragraphs: [
        'OES is the workhorse of foundry and steel-mill quality control. Choose it when you need to measure carbon, sulfur, phosphorus or boron at production-relevant levels — XRF cannot reliably quantify these light elements, and LIBS is less accurate for trace carbon. Modern benchtop and floor-standing OES instruments cover up to 36 elements across 10+ base matrices in 20–30 seconds with detection limits down to 0.0001 %.',
        'JIEBO OES options span the price-performance curve: the [Exquis T4](/products/exquis-t4/) is a sealed-chamber benchtop for single-matrix shops, the [Innovate T5](/products/innovate-t5/) handles multi-alloy production lines, the [Noble T7](/products/noble-t7/) targets sub-10-ppm research work, and the [JB-750](/products/jb-750/) is a PMT-based flagship for certification labs. The [Surpass F1](/products/surpass-f1/) is the mobile OES variant that brings carbon measurement to the scrap yard.',
      ],
    },
    {
      heading: 'When XRF wins',
      paragraphs: [
        'Handheld XRF is the right tool when **non-destructive** is non-negotiable — finished parts, in-service pipework, museum artifacts, precious metals — and you do not need carbon. A typical alloy-ID measurement takes 1–2 seconds and leaves zero physical mark. XRF guns also have the broadest element range (Ti to U) of any handheld technique.',
        'Two caveats: XRF cannot quantify carbon, sulfur, phosphorus or boron reliably, and the X-ray tube means operator licensing under local radiation-safety regulations in most jurisdictions. JIEBO\'s entry is the [F6000 Pro](/products/f6000-pro/) — 50 kV X-ray tube, Si-PIN detector, 8-hour battery.',
      ],
    },
    {
      heading: 'When LIBS wins',
      paragraphs: [
        'Handheld LIBS occupies a niche that has grown rapidly in 2024–2026: when you need **light elements (Li, Be, Mg, Al, Si)** in the field, when X-ray regulation is prohibitive (import controls, transport, operator licensing), or when you want sub-second readouts. LIBS leaves a sub-millimeter burn mark — technically destructive, but PMI workflows usually treat it as practically non-destructive.',
        'JIEBO\'s [F7000 Pro](/products/f7000-pro/) is a Class 3B laser LIBS gun, 1.25 kg with battery, measuring Be, Mg, Al, Si, Ti, Cr, Mn, Fe, Ni, Cu, Zn and more in well under one second per shot.',
      ],
    },
    {
      heading: 'Decision tree',
      paragraphs: [
        '**Need carbon quantified?** → OES (benchtop or mobile). XRF and LIBS cannot deliver reliable carbon. **Working on a finished part you cannot mark?** → XRF first; LIBS if you need light elements. **Working in a region with strict X-ray import / operator rules?** → LIBS or OES instead of XRF. **High-throughput foundry production?** → Floor-standing OES (Innovate T5 or Noble T7). **Field inspection, intermittent use?** → Handheld XRF, handheld LIBS, or mobile OES (Surpass F1) depending on the elements list.',
      ],
    },
  ],
  ru: [
    {
      heading: 'Что именно измеряет каждый метод',
      paragraphs: [
        'Все три метода — атомно-эмиссионные или флуоресцентные техники количественного определения элементов в металлах, но возбуждают образец по-разному. **ОЭС** наносит электрический разряд по твёрдому металлу в атмосфере аргона; возбуждённые атомы излучают на специфичных для элементов длинах волн. **РФА** облучает образец рентгеновскими лучами; смещение электронов внутренних оболочек даёт характерное рентгеновское излучение, по которому определяется элемент. **LIBS** фокусирует мощный лазерный импульс на образце и создаёт микроплазму; атомы в плазме излучают характерный свет.',
        'Механизм возбуждения определяет, какие элементы доступны методу, насколько он разрушающий, и какое регуляторное поле применимо к оператору.',
      ],
    },
    {
      heading: 'Сводная таблица',
      paragraphs: [
        'Таблица ниже сводит практические различия. Выбирайте метод по **колонке-критерию** для вашей задачи — обычно это углерод, регулирование или скорость.',
      ],
    },
    {
      heading: 'Когда правильно выбрать ОЭС',
      paragraphs: [
        'ОЭС — рабочая лошадка контроля качества в литейном и сталелитейном производстве. Выбирайте, когда нужно измерять углерод, серу, фосфор или бор на производственных уровнях — РФА надёжно их не определяет, а LIBS менее точен по следовому углероду. Современные настольные и напольные ОЭС определяют до 36 элементов в 10+ базовых матрицах за 20–30 секунд с пределами обнаружения до 0,0001 %.',
        'У JIEBO линейка ОЭС покрывает диапазон цена/качество: [Exquis T4](/ru/products/exquis-t4/) — настольный для одноматричных цехов, [Innovate T5](/ru/products/innovate-t5/) — для многосплавных производственных линий, [Noble T7](/ru/products/noble-t7/) — для исследовательской работы ниже 10 ppm, [JB-750](/ru/products/jb-750/) — флагман на ФЭУ для сертификации. [Surpass F1](/ru/products/surpass-f1/) — мобильный ОЭС, приносящий измерение углерода на приёмку лома.',
      ],
    },
    {
      heading: 'Когда выигрывает РФА',
      paragraphs: [
        'Ручной РФА — правильный инструмент, когда **неразрушающее измерение** обязательно: готовые детали, действующие трубопроводы, музейные экспонаты, драгоценные металлы — и когда углерод не нужен. Типичное измерение для идентификации марки занимает 1–2 секунды и не оставляет физического следа. У РФА-пистолетов также самый широкий диапазон элементов (Ti–U) среди ручных методов.',
        'Две оговорки: РФА не определяет надёжно углерод, серу, фосфор и бор; рентгеновская трубка требует лицензирования оператора по местным правилам радиационной безопасности в большинстве юрисдикций. Вариант JIEBO — [F6000 Pro](/ru/products/f6000-pro/): трубка 50 кВ, Si-PIN детектор, 8-часовая батарея.',
      ],
    },
    {
      heading: 'Когда выигрывает LIBS',
      paragraphs: [
        'Ручной LIBS занимает нишу, быстро выросшую в 2024–2026: когда нужны **лёгкие элементы (Li, Be, Mg, Al, Si)** в поле, когда регулирование рентгеновского оборудования становится барьером (импортный контроль, транспорт, лицензирование), или когда нужны доли секунды на считывание. LIBS оставляет след ожога меньше миллиметра — технически разрушающий, но в PMI обычно воспринимается как практически неразрушающий.',
        'Вариант JIEBO — [F7000 Pro](/ru/products/f7000-pro/): пистолет LIBS класса 3B, 1,25 кг с батареей, измеряет Be, Mg, Al, Si, Ti, Cr, Mn, Fe, Ni, Cu, Zn и др. меньше чем за секунду на выстрел.',
      ],
    },
    {
      heading: 'Дерево принятия решений',
      paragraphs: [
        '**Нужен углерод?** → ОЭС (настольный или мобильный). РФА и LIBS не дают надёжного углерода. **Готовая деталь, которую нельзя метить?** → сначала РФА; LIBS — если нужны лёгкие элементы. **Регион со строгими правилами по рентгену?** → LIBS или ОЭС вместо РФА. **Высокопоточное литейное производство?** → напольный ОЭС (Innovate T5 или Noble T7). **Полевой контроль, эпизодический режим?** → ручной РФА, ручной LIBS или мобильный ОЭС (Surpass F1) — по списку нужных элементов.',
      ],
    },
  ],
  es: [
    {
      heading: 'Qué mide realmente cada técnica',
      paragraphs: [
        'Las tres son técnicas de emisión o fluorescencia atómica que cuantifican elementos en metales, pero excitan la muestra de forma distinta. **OES** descarga una chispa de alto voltaje sobre metal sólido en atmósfera de argón; los átomos excitados emiten luz en longitudes de onda características. **XRF** irradia la muestra con rayos X; los electrones de capas internas se desplazan y los rayos X resultantes identifican el elemento. **LIBS** enfoca un pulso láser de alta energía sobre la muestra creando un plasma microscópico; los átomos en el plasma emiten luz característica.',
        'El mecanismo de excitación determina qué elementos puede medir, qué tan destructiva es y qué marco regulatorio aplica al operador.',
      ],
    },
    {
      heading: 'Tabla comparativa rápida',
      paragraphs: [
        'La tabla siguiente resume las diferencias prácticas. Elija la técnica que satisfaga la **columna imprescindible** de su trabajo — generalmente carbono, regulación o velocidad.',
      ],
    },
    {
      heading: 'Cuándo OES es la mejor elección',
      paragraphs: [
        'OES es el caballo de batalla del QC de fundiciones y acerías. Elíjala cuando deba medir carbono, azufre, fósforo o boro a niveles relevantes para producción — XRF no cuantifica fiablemente estos elementos ligeros y LIBS es menos preciso en trazas de carbono. Los OES modernos de mesa o de pie cubren hasta 36 elementos en 10+ matrices base en 20–30 segundos con límites de detección hasta 0,0001 %.',
        'La línea JIEBO cubre la curva precio-rendimiento: [Exquis T4](/es/products/exquis-t4/) de mesa con cámara sellada para talleres monomatriz, [Innovate T5](/es/products/innovate-t5/) para líneas de producción multi-aleación, [Noble T7](/es/products/noble-t7/) para investigación sub-10 ppm, [JB-750](/es/products/jb-750/) PMT insignia para certificación. [Surpass F1](/es/products/surpass-f1/) es el OES móvil que lleva la medición de carbono al patio de chatarra.',
      ],
    },
    {
      heading: 'Cuándo gana XRF',
      paragraphs: [
        'El XRF portátil es la herramienta correcta cuando **no destructivo** es innegociable — piezas terminadas, tuberías en servicio, artefactos, metales preciosos — y no necesita carbono. Una ID típica de aleación toma 1–2 segundos y no deja marca. Las pistolas XRF tienen además el rango elemental más amplio (Ti a U) entre técnicas portátiles.',
        'Dos advertencias: XRF no cuantifica fiablemente carbono, azufre, fósforo ni boro, y el tubo de rayos X exige licenciamiento del operador bajo regulaciones locales de seguridad radiológica en la mayoría de jurisdicciones. La opción JIEBO es la [F6000 Pro](/es/products/f6000-pro/): tubo 50 kV, detector Si-PIN, batería de 8 horas.',
      ],
    },
    {
      heading: 'Cuándo gana LIBS',
      paragraphs: [
        'El LIBS portátil ocupa un nicho que creció rápido en 2024–2026: cuando necesita **elementos ligeros (Li, Be, Mg, Al, Si)** en campo, cuando la regulación de rayos X es prohibitiva (controles de importación, transporte, licencia del operador), o cuando quiere lecturas sub-segundo. LIBS deja una marca de quemado sub-milimétrica — técnicamente destructiva, pero los flujos de PMI suelen tratarla como prácticamente no destructiva.',
        'La opción JIEBO es la [F7000 Pro](/es/products/f7000-pro/): pistola LIBS clase 3B, 1,25 kg con batería, mide Be, Mg, Al, Si, Ti, Cr, Mn, Fe, Ni, Cu, Zn y más en menos de un segundo por disparo.',
      ],
    },
    {
      heading: 'Árbol de decisión',
      paragraphs: [
        '**¿Necesita cuantificar carbono?** → OES (de mesa o móvil). XRF y LIBS no dan carbono fiable. **¿Pieza terminada que no puede marcar?** → XRF primero; LIBS si requiere elementos ligeros. **¿Región con regulación estricta de rayos X?** → LIBS u OES en vez de XRF. **¿Producción de alto rendimiento en fundición?** → OES de pie (Innovate T5 o Noble T7). **¿Inspección de campo, uso intermitente?** → XRF portátil, LIBS portátil u OES móvil (Surpass F1) según los elementos.',
      ],
    },
  ],
  ar: [
    {
      heading: 'ماذا تقيس كل تقنية فعلاً',
      paragraphs: [
        'الثلاث تقنيات هي تقنيات انبعاث أو فلورة ذرّية تقيس كميّاً العناصر في المعادن، لكنّها تُثير العيّنة بطرق مختلفة. **OES** تُطلق شرارة كهربائية عالية الجهد على معدن صلب في جوّ أرغون، فتصدر الذرّات المثارة ضوءاً على أطوال موجات خاصّة بكل عنصر. **XRF** تشعّ العيّنة بالأشعة السينية، فتنزاح إلكترونات القشور الداخلية وتنبعث أشعة سينية مميّزة تحدّد العنصر. **LIBS** تركّز نبضة ليزر عالية الطاقة على العيّنة فتنشأ بلازما مجهرية، وتُصدر ذرّاتها ضوءاً مميّزاً.',
        'تحدّد آلية الإثارة العناصر التي يمكن قياسها، ومدى الإتلاف، والإطار التنظيمي الذي ينطبق على المشغّل.',
      ],
    },
    {
      heading: 'جدول مقارنة سريع',
      paragraphs: [
        'يلخّص الجدول التالي الفروق العملية. اختر التقنية التي تلبّي **العمود الذي لا يمكن التنازل عنه** في عملك — عادةً الكربون أو التنظيم أو السرعة.',
      ],
    },
    {
      heading: 'متى يكون OES الخيار الصحيح',
      paragraphs: [
        'الـ OES هو خيار ضبط الجودة الأساسي في المسابك ومصانع الصلب. اختره عند الحاجة لقياس الكربون أو الكبريت أو الفوسفور أو البورون عند مستويات الإنتاج — فالـ XRF لا يقيس هذه العناصر الخفيفة بشكل موثوق، والـ LIBS أقلّ دقّة في قياس الكربون النزر. أجهزة OES الحديثة المكتبية والأرضية تغطّي حتى 36 عنصراً عبر 10+ مصفوفات أساسية خلال 20–30 ثانية بحدود كشف تصل إلى 0.0001 %.',
        'تغطّي خيارات JIEBO من OES منحنى السعر مقابل الأداء: [Exquis T4](/ar/products/exquis-t4/) المكتبي بغرفة مغلقة للورش ذات المصفوفة الواحدة، و[Innovate T5](/ar/products/innovate-t5/) لخطوط الإنتاج متعدّدة السبائك، و[Noble T7](/ar/products/noble-t7/) للأعمال البحثية دون 10 ppm، و[JB-750](/ar/products/jb-750/) الرائد بتقنية PMT لمختبرات الاعتماد. أمّا [Surpass F1](/ar/products/surpass-f1/) فهو OES المتنقّل الذي ينقل قياس الكربون إلى ساحة الخردة.',
      ],
    },
    {
      heading: 'متى يفوز XRF',
      paragraphs: [
        'يكون XRF المحمول الأداة الصحيحة عندما يكون **عدم الإتلاف** متطلّباً غير قابل للتفاوض — قطع نهائية وأنابيب أثناء الخدمة وقطع أثرية ومعادن ثمينة — ولا تحتاج إلى الكربون. تستغرق عملية تعريف السبيكة النموذجية 1–2 ثانية ولا تترك أيّ علامة فيزيائية. كما أنّ لمسدّسات XRF أوسع نطاق عناصر (من Ti إلى U) بين التقنيات المحمولة.',
        'تحذيران: لا يقيس XRF الكربون أو الكبريت أو الفوسفور أو البورون بشكل موثوق، وأنبوب الأشعة السينية يستلزم ترخيصاً للمشغّل وفق لوائح السلامة الإشعاعية المحلّية في معظم الولايات القضائية. خيار JIEBO هو [F6000 Pro](/ar/products/f6000-pro/): أنبوب 50 كيلوفولت وكاشف Si-PIN وبطارية 8 ساعات.',
      ],
    },
    {
      heading: 'متى يفوز LIBS',
      paragraphs: [
        'يحتلّ LIBS المحمول مكاناً نما بسرعة في 2024–2026: عندما تحتاج **عناصر خفيفة (Li و Be و Mg و Al و Si)** في الميدان، أو يكون تنظيم الأشعة السينية عائقاً (ضوابط الاستيراد، النقل، ترخيص المشغّل)، أو تحتاج قراءات دون الثانية. يترك LIBS أثر حرق دون الميليمتر — متلف تقنياً، لكنّ تدفّقات PMI تتعامل معه عملياً كغير متلف.',
        'خيار JIEBO هو [F7000 Pro](/ar/products/f7000-pro/): مسدّس LIBS من الفئة 3B، 1.25 كغ مع البطارية، يقيس Be و Mg و Al و Si و Ti و Cr و Mn و Fe و Ni و Cu و Zn وأكثر خلال أقلّ من ثانية لكل طلقة.',
      ],
    },
    {
      heading: 'شجرة القرار',
      paragraphs: [
        '**هل تحتاج قياس الكربون؟** → OES (مكتبي أو متنقّل). XRF و LIBS لا يعطيان قياس كربون موثوقاً. **قطعة نهائية لا يمكن أن تحمل علامة؟** → XRF أولاً، ثم LIBS إذا احتجت عناصر خفيفة. **منطقة بقيود صارمة على الأشعة السينية؟** → LIBS أو OES بدلاً من XRF. **إنتاج مسبكي بإنتاجية عالية؟** → OES أرضي (Innovate T5 أو Noble T7). **فحص ميداني واستخدام متقطّع؟** → XRF محمول أو LIBS محمول أو OES متنقّل (Surpass F1) حسب قائمة العناصر.',
      ],
    },
  ],
};

export const compareTable: Record<Locale, {
  cols: string[];
  rows: string[][];
  caption: string;
}> = {
  en: {
    caption: 'OES vs XRF vs LIBS — head-to-head technique comparison',
    cols: ['Property', 'OES (spark)', 'XRF (handheld)', 'LIBS (handheld)'],
    rows: [
      ['Excitation source', 'Electrical spark in argon', 'X-ray tube (50 kV)', 'Class 3B laser pulse'],
      ['Sample state', 'Solid metal, flat surface', 'Solid, any geometry', 'Solid, any geometry'],
      ['Destructive?', 'Yes — small spark mark (~1 mm²)', 'No — fully non-destructive', 'Yes — sub-mm laser mark'],
      ['Light elements (C, S, P, B)', 'Yes — production accuracy', 'No — unreliable', 'C only, less accurate than OES'],
      ['Light metals (Li, Be, Mg, Al)', 'Yes (Mg, Al)', 'Limited (Mg, Al only with helium purge)', 'Yes — including Be'],
      ['Heavy metals (Ti to U)', 'Yes, up to ~36 elements', 'Yes — full range', 'Up to ~25 elements'],
      ['Typical analysis time', '20–30 s per multi-element burn', '1–15 s', '< 1 s per shot'],
      ['Detection limit', '0.0001 % (1 ppm) with PMT', '0.01 % typical', '0.01–0.1 % typical'],
      ['Operator regulation', 'None special', 'Radiation safety license required', 'Laser safety training'],
      ['Portability', 'Benchtop / floor-standing; F1 mobile cart', 'Handheld gun, < 2 kg', 'Handheld gun, ~1.25 kg'],
      ['JIEBO products', 'Exquis T4, Innovate T5, Noble T7, JB-750, Surpass F1', 'F6000 Pro', 'F7000 Pro'],
    ],
  },
  ru: {
    caption: 'ОЭС, РФА и LIBS — прямое сравнение методов',
    cols: ['Параметр', 'ОЭС (искра)', 'РФА (ручной)', 'LIBS (ручной)'],
    rows: [
      ['Источник возбуждения', 'Электроискра в аргоне', 'Рентгеновская трубка (50 кВ)', 'Лазерный импульс класса 3B'],
      ['Состояние образца', 'Твёрдый металл, плоская поверхность', 'Твёрдый, любая форма', 'Твёрдый, любая форма'],
      ['Разрушающий?', 'Да — искровая метка (~1 мм²)', 'Нет — полностью неразрушающий', 'Да — лазерная метка <1 мм'],
      ['Лёгкие элементы (C, S, P, B)', 'Да — производственная точность', 'Нет — ненадёжно', 'Только C, менее точен чем ОЭС'],
      ['Лёгкие металлы (Li, Be, Mg, Al)', 'Да (Mg, Al)', 'Ограниченно (Mg, Al только с He-продувкой)', 'Да — включая Be'],
      ['Тяжёлые металлы (Ti–U)', 'Да, до ~36 элементов', 'Да — полный диапазон', 'До ~25 элементов'],
      ['Время измерения', '20–30 с на многоэлементную серию', '1–15 с', '< 1 с на выстрел'],
      ['Предел обнаружения', '0,0001 % (1 ppm) с ФЭУ', '0,01 % типично', '0,01–0,1 % типично'],
      ['Регулирование оператора', 'Особого нет', 'Лицензия по радиационной безопасности', 'Обучение лазерной безопасности'],
      ['Портативность', 'Настольный / напольный; F1 — мобильная тележка', 'Ручной, < 2 кг', 'Ручной, ~1,25 кг'],
      ['Продукты JIEBO', 'Exquis T4, Innovate T5, Noble T7, JB-750, Surpass F1', 'F6000 Pro', 'F7000 Pro'],
    ],
  },
  es: {
    caption: 'OES vs XRF vs LIBS — comparación directa entre técnicas',
    cols: ['Propiedad', 'OES (chispa)', 'XRF (portátil)', 'LIBS (portátil)'],
    rows: [
      ['Fuente de excitación', 'Chispa eléctrica en argón', 'Tubo de rayos X (50 kV)', 'Pulso láser clase 3B'],
      ['Estado de la muestra', 'Metal sólido, superficie plana', 'Sólido, cualquier geometría', 'Sólido, cualquier geometría'],
      ['¿Destructivo?', 'Sí — marca de chispa pequeña (~1 mm²)', 'No — totalmente no destructivo', 'Sí — marca láser sub-mm'],
      ['Elementos ligeros (C, S, P, B)', 'Sí — precisión de producción', 'No — no fiable', 'Solo C, menos preciso que OES'],
      ['Metales ligeros (Li, Be, Mg, Al)', 'Sí (Mg, Al)', 'Limitado (Mg, Al solo con purga de helio)', 'Sí — incluye Be'],
      ['Metales pesados (Ti a U)', 'Sí, hasta ~36 elementos', 'Sí — rango completo', 'Hasta ~25 elementos'],
      ['Tiempo de análisis', '20–30 s por barrido multi-elemento', '1–15 s', '< 1 s por disparo'],
      ['Límite de detección', '0,0001 % (1 ppm) con PMT', '0,01 % típico', '0,01–0,1 % típico'],
      ['Regulación del operador', 'Sin requisitos especiales', 'Licencia de seguridad radiológica', 'Formación en seguridad láser'],
      ['Portabilidad', 'Mesa / de pie; F1 móvil en carro', 'Pistola portátil, < 2 kg', 'Pistola portátil, ~1,25 kg'],
      ['Productos JIEBO', 'Exquis T4, Innovate T5, Noble T7, JB-750, Surpass F1', 'F6000 Pro', 'F7000 Pro'],
    ],
  },
  ar: {
    caption: 'مقارنة مباشرة بين OES و XRF و LIBS',
    cols: ['الخاصية', 'OES (شرارة)', 'XRF (محمول)', 'LIBS (محمول)'],
    rows: [
      ['مصدر الإثارة', 'شرارة كهربائية في الأرغون', 'أنبوب أشعة سينية (50 كيلوفولت)', 'نبضة ليزر فئة 3B'],
      ['حالة العيّنة', 'معدن صلب بسطح مستوٍ', 'صلب بأيّ شكل', 'صلب بأيّ شكل'],
      ['متلف؟', 'نعم — أثر شرارة صغير (~1 ملم²)', 'لا — غير متلف بالكامل', 'نعم — أثر ليزر دون الميليمتر'],
      ['العناصر الخفيفة (C, S, P, B)', 'نعم — بدقّة إنتاجية', 'لا — غير موثوق', 'الكربون فقط، أقلّ دقّة من OES'],
      ['المعادن الخفيفة (Li, Be, Mg, Al)', 'نعم (Mg, Al)', 'محدود (Mg, Al بتنقية الهيليوم فقط)', 'نعم — بما يشمل Be'],
      ['المعادن الثقيلة (Ti إلى U)', 'نعم، حتى ~36 عنصراً', 'نعم — النطاق الكامل', 'حتى ~25 عنصراً'],
      ['زمن التحليل', '20–30 ثانية لكلّ مسح متعدّد العناصر', '1–15 ثانية', '< ثانية لكل طلقة'],
      ['حدّ الكشف', '0.0001 % (1 ppm) مع PMT', '0.01 % نموذجي', '0.01–0.1 % نموذجي'],
      ['تنظيم المشغّل', 'لا توجد متطلّبات خاصّة', 'يلزم ترخيص سلامة إشعاعية', 'تدريب على سلامة الليزر'],
      ['قابلية الحمل', 'مكتبي / أرضي؛ F1 على عربة متنقّلة', 'مسدّس محمول، < 2 كغ', 'مسدّس محمول، ~1.25 كغ'],
      ['منتجات JIEBO', 'Exquis T4، Innovate T5، Noble T7، JB-750، Surpass F1', 'F6000 Pro', 'F7000 Pro'],
    ],
  },
};

export const faq: Record<Locale, Array<{ q: string; a: string }>> = {
  en: [
    { q: 'Can XRF measure carbon in steel?', a: 'No. Handheld XRF cannot reliably quantify carbon because carbon\'s low atomic number produces X-ray fluorescence too weak to detect through air. For carbon in iron and steel, use a spark OES (Innovate T5, Noble T7) or a mobile OES (Surpass F1) instead.' },
    { q: 'Is LIBS really faster than OES?', a: 'Yes — sub-second LIBS readouts are typical because there is no argon purge cycle and no sample preparation. But the trade-off is lower trace-element precision. For production-grade carbon and sulfur in steel, OES remains the standard despite the longer cycle.' },
    { q: 'Which technique is regulated most strictly?', a: 'Handheld XRF — most jurisdictions require an operator license under radiation-safety regulations because of the X-ray tube. LIBS uses a Class 3B laser (training but no licensing in most regions). OES has no special operator regulation. In countries with strict X-ray import controls (parts of the Middle East, parts of Africa), LIBS is often the practical choice.' },
    { q: 'Are there elements all three can measure equally well?', a: 'Iron-group transition metals (Cr, Mn, Fe, Ni, Cu, Zn) are well-covered by all three. Differences emerge at the light end (C, S, P, B — only OES) and the very heavy end (U, Th — only XRF).' },
    { q: 'Can I use one OES instrument for both bench and field work?', a: 'Yes — the Surpass F1 is a cart-mounted mobile OES with built-in battery and argon cylinder. It delivers production OES accuracy at scrap yards, in-service pipework, and large fixed components that cannot reach a lab.' },
  ],
  ru: [
    { q: 'Может ли РФА измерять углерод в стали?', a: 'Нет. Ручной РФА не определяет надёжно углерод, потому что низкий атомный номер углерода даёт слишком слабую рентгеновскую флуоресценцию, чтобы регистрировать её через воздух. Для углерода в чугуне и стали используйте искровой ОЭС (Innovate T5, Noble T7) или мобильный ОЭС (Surpass F1).' },
    { q: 'LIBS действительно быстрее ОЭС?', a: 'Да — измерения за доли секунды типичны, потому что нет цикла продувки аргоном и подготовки образца. Но плата — меньшая точность по следовым элементам. Для производственных уровней углерода и серы в стали ОЭС остаётся стандартом, несмотря на более длинный цикл.' },
    { q: 'Какой метод регулируется строже?', a: 'Ручной РФА — большинство юрисдикций требует лицензию оператора по правилам радиационной безопасности из-за рентгеновской трубки. LIBS — лазер класса 3B (обучение, но без лицензирования в большинстве регионов). У ОЭС нет особого регулирования оператора. В странах со строгим контролем импорта рентгеновских приборов (части Ближнего Востока, Африки) LIBS часто оказывается практичнее.' },
    { q: 'Есть ли элементы, которые все три метода измеряют одинаково хорошо?', a: 'Переходные металлы группы железа (Cr, Mn, Fe, Ni, Cu, Zn) хорошо охвачены всеми тремя. Различия проявляются на лёгком конце (C, S, P, B — только ОЭС) и на очень тяжёлом (U, Th — только РФА).' },
    { q: 'Можно ли одним ОЭС-прибором работать и в цехе, и в поле?', a: 'Да — Surpass F1 — мобильный ОЭС на тележке со встроенным аккумулятором и баллоном аргона. Даёт производственную точность ОЭС на приёмке лома, на действующих трубопроводах и на больших стационарных деталях.' },
  ],
  es: [
    { q: '¿El XRF mide carbono en acero?', a: 'No. El XRF portátil no cuantifica fiablemente el carbono porque su número atómico bajo produce fluorescencia de rayos X demasiado débil para detectarse a través del aire. Para carbono en hierro y acero use OES por chispa (Innovate T5, Noble T7) u OES móvil (Surpass F1).' },
    { q: '¿LIBS es realmente más rápido que OES?', a: 'Sí — lecturas sub-segundo son típicas porque no hay ciclo de purga de argón ni preparación de muestra. La compensación es menor precisión en trazas. Para carbono y azufre de grado de producción en acero, OES sigue siendo el estándar pese al ciclo más largo.' },
    { q: '¿Qué técnica está regulada con mayor estrictez?', a: 'XRF portátil — la mayoría de jurisdicciones exigen licencia de operador por la regulación de seguridad radiológica debido al tubo de rayos X. LIBS usa láser clase 3B (formación pero sin licencia en la mayoría de regiones). OES no tiene regulación especial. En países con controles estrictos de importación de rayos X (partes de Medio Oriente, África) LIBS suele ser la opción práctica.' },
    { q: '¿Hay elementos que las tres midan igual de bien?', a: 'Los metales de transición del grupo del hierro (Cr, Mn, Fe, Ni, Cu, Zn) están bien cubiertos por las tres. Las diferencias emergen en los extremos: ligeros (C, S, P, B — solo OES) y muy pesados (U, Th — solo XRF).' },
    { q: '¿Puedo usar un solo equipo OES para mesa y campo?', a: 'Sí — el Surpass F1 es un OES móvil sobre carro con batería y cilindro de argón integrados. Entrega la precisión OES de producción en patios de chatarra, tuberías en servicio y componentes fijos grandes que no llegan al laboratorio.' },
  ],
  ar: [
    { q: 'هل يقيس XRF الكربون في الصلب؟', a: 'لا. لا يقيس XRF المحمول الكربون بشكل موثوق لأنّ العدد الذرّي المنخفض للكربون يُنتج فلورة سينية أضعف من أن تُرصد عبر الهواء. لقياس الكربون في الحديد والصلب استخدم OES بالشرارة (Innovate T5 أو Noble T7) أو OES متنقّل (Surpass F1).' },
    { q: 'هل LIBS أسرع من OES فعلاً؟', a: 'نعم — قراءات دون الثانية اعتيادية لأنّه لا توجد دورة تنقية بالأرغون ولا تحضير عيّنة. لكنّ المقابل دقّة أقلّ في العناصر النزرة. لقياس الكربون والكبريت بدقّة الإنتاج في الصلب لا يزال OES هو المعيار رغم الدورة الأطول.' },
    { q: 'أيّ تقنية تخضع لأشدّ تنظيم؟', a: 'XRF المحمول — تشترط معظم الولايات القضائية ترخيصاً للمشغّل وفق لوائح السلامة الإشعاعية بسبب أنبوب الأشعة السينية. يستخدم LIBS ليزر فئة 3B (تدريب دون ترخيص في معظم المناطق). أمّا OES فلا يوجد تنظيم خاصّ بمشغّله. في الدول ذات الضوابط الصارمة على استيراد أجهزة الأشعة السينية (أجزاء من الشرق الأوسط وأفريقيا) يكون LIBS غالباً الخيار العملي.' },
    { q: 'هل هناك عناصر تقيسها التقنيات الثلاث بنفس الجودة؟', a: 'فلزّات المرحلة الانتقالية لمجموعة الحديد (Cr و Mn و Fe و Ni و Cu و Zn) تغطّيها التقنيات الثلاث جيداً. تظهر الفروق عند الطرفين: الخفيفة (C و S و P و B — OES فقط) والثقيلة جداً (U و Th — XRF فقط).' },
    { q: 'هل يمكن استخدام جهاز OES واحد للمختبر والميدان معاً؟', a: 'نعم — Surpass F1 جهاز OES متنقّل على عربة بمدمج بطارية وأسطوانة أرغون. يقدّم دقّة OES الإنتاجية في ساحات الخردة وأنابيب الخدمة والمكوّنات الثابتة الكبيرة التي لا يمكن نقلها إلى المختبر.' },
  ],
};
