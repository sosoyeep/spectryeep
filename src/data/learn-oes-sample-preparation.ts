import type { Locale } from '../consts';

export const title: Record<Locale, string> = {
  en: 'OES Sample Preparation: How to Get Accurate Spark Spectrometer Readings',
  ru: 'Подготовка образца для ОЭС: как добиться точных показаний искрового спектрометра',
  es: 'Preparación de muestras para OES: cómo obtener lecturas precisas del espectrómetro de chispa',
  ar: 'تحضير عيّنات OES: كيف تحصل على قراءات دقيقة من مطياف الشرارة',
};

export const description: Record<Locale, string> = {
  en: 'Sample preparation is the single largest source of error in spark OES analysis. This guide walks through surface preparation, electrode maintenance, argon purity, and the five most common mistakes that throw OES readings out of tolerance — with practical fixes that take minutes, not hours.',
  ru: 'Подготовка образца — главный источник ошибок в искровом ОЭС-анализе. Это руководство охватывает подготовку поверхности, обслуживание электродов, чистоту аргона и пять самых распространённых ошибок, выводящих показания ОЭС за допуски — с практическими исправлениями за минуты, а не часы.',
  es: 'La preparación de muestra es la fuente de error más grande en análisis OES por chispa. Esta guía recorre preparación de superficie, mantenimiento de electrodos, pureza del argón y los cinco errores más comunes que sacan las lecturas OES de tolerancia — con soluciones prácticas que toman minutos, no horas.',
  ar: 'تحضير العيّنة هو أكبر مصدر للأخطاء في تحليل OES بالشرارة. يستعرض هذا الدليل تحضير السطح وصيانة الأقطاب ونقاء الأرغون وأكثر خمسة أخطاء شيوعاً تُخرج قراءات OES عن السماحية — مع حلول عملية تستغرق دقائق لا ساعات.',
};

export const datePublished = '2026-05-12';

export type Section = { heading: string; paragraphs: string[] };

export const sections: Record<Locale, Section[]> = {
  en: [
    {
      heading: 'The 80/20 rule of OES accuracy',
      paragraphs: [
        'In ten years of installing OES instruments across foundries in 40+ countries, JIEBO engineers see the same pattern: instrument hardware is the cause of inaccurate readings perhaps 20 % of the time. The other 80 % is sample preparation, argon supply, or electrode wear. The instrument is rarely the problem.',
        'This guide is a checklist. Run through it before you call us about a drift, an out-of-tolerance reading, or a "broken" instrument. Most calls we receive resolve at one of the five mistakes below.',
      ],
    },
    {
      heading: '1. Surface preparation — flat, fresh, dry',
      paragraphs: [
        'The spark must strike a flat, conductive, oxide-free surface. The standard preparation is to grind or mill the sample so the analysis area is a smooth disk of bare metal at least 20 mm in diameter. Three rules: **flat** (no rocking on the spark stand), **fresh** (analyzed within 5 minutes of grinding so surface oxide does not regrow), **dry** (no coolant residue, no grinding oil).',
        'Recommended grinding media: 60-grit aluminum oxide belt for iron-base samples, 80-grit silicon carbide for aluminum and copper alloys. Do not use the same belt across base matrices — silicon carbide cross-contaminates aluminum readings with embedded Si grit.',
      ],
    },
    {
      heading: '2. Argon purity — the silent killer',
      paragraphs: [
        'OES requires argon at 99.999 % (5N) purity. Lower-grade argon contains oxygen and nitrogen that quench the plasma and shift element intensities — especially for low-emission elements (C, S, P, B). A 100 ppm oxygen contamination can shift the carbon reading by 10–30 % at production-grade levels.',
        'Symptoms of bad argon: low elements suddenly drift low, calibration drift accelerates, the spark sounds different (more crackle, less clean snap). Fix: replace the cylinder, verify with a known reference sample, and check the argon regulator and lines for leaks. Cheap fitting tape on argon lines is a frequent culprit.',
      ],
    },
    {
      heading: '3. Electrode wear and gap',
      paragraphs: [
        'The counter-electrode (the small tungsten or silver pin opposite the sample) wears down with every burn. As it wears, the spark gap widens, the discharge characteristics shift, and intensities drift. JIEBO standard is to clean the electrode every 50–100 burns with a wire brush and re-tip every 1,000–2,000 burns depending on matrix.',
        'For iron-base sparking, tungsten electrodes typically last 1,500 burns. For aluminum and zinc (which deposit material on the electrode), expect 800–1,200 burns before re-tipping. Keep a log: burns since last re-tip is one of the four numbers an OES technician should know without looking.',
      ],
    },
    {
      heading: '4. The sample stand and clamping pressure',
      paragraphs: [
        'A flat surface that does not clamp tightly to the spark stand is no better than a rough surface. The sample must seal the argon flow path; an uneven seal leaks air into the plasma and produces the same symptoms as bad argon. Test by listening: a clean seal produces a sharp single-pitch spark sound; an air-leaking seal sounds raspy.',
        'For irregular samples (chip drillings, broken cast iron pieces), use the sample fixture supplied with the spectrometer. JIEBO\'s Innovate T5 and Noble T7 ship with adjustable holders that accommodate samples down to 15 mm diameter. The [Surpass F1](/products/surpass-f1/) mobile OES has a specialized fixture for irregular field samples like rebar and large castings.',
      ],
    },
    {
      heading: '5. Calibration drift vs sample-prep drift',
      paragraphs: [
        'Calibration drift is slow — a few percent over months. Sample-prep drift is fast — readings change between consecutive burns of nominally the same sample. If your sample-to-sample variation exceeds 1 % RSD for a stable matrix like Mn in steel, it is sample preparation, not calibration. Recalibrating does not fix a sample-prep problem; it just hides it for a few shifts.',
        'Daily routine: run a control sample (a piece of certified reference material) as the first burn of every shift. Log the result. A trend chart of the control-sample carbon over 30 days will tell you instantly whether you have argon problems, electrode wear, or a real calibration drift.',
      ],
    },
    {
      heading: 'Quick-fix table',
      paragraphs: [
        'When a reading is out of tolerance, run through this table top-to-bottom. Most problems resolve in the first three rows.',
      ],
    },
  ],
  ru: [
    {
      heading: 'Правило 80/20 точности ОЭС',
      paragraphs: [
        'За десять лет установок ОЭС в литейных в 40+ странах инженеры JIEBO видят один и тот же шаблон: аппаратура — причина неточных показаний примерно в 20 % случаев. Остальные 80 % — это подготовка образца, аргон или износ электрода. Прибор редко является проблемой.',
        'Это руководство — чек-лист. Пробегите его, прежде чем звонить нам по поводу дрейфа, выхода из допуска или «сломанного» прибора. Большинство таких обращений решается на одной из пяти ошибок ниже.',
      ],
    },
    {
      heading: '1. Подготовка поверхности — плоская, свежая, сухая',
      paragraphs: [
        'Искра должна попадать на плоскую, проводящую, свободную от окислов поверхность. Стандартная подготовка — обточить или отфрезеровать образец так, чтобы зона анализа была ровным диском голого металла диаметром не менее 20 мм. Три правила: **плоская** (не качается на держателе), **свежая** (анализ в течение 5 минут после обработки, чтобы окисел не нарос), **сухая** (без следов СОЖ и масла).',
        'Рекомендованный абразив: лента 60 grit с электрокорундом для образцов на основе железа, 80 grit с карбидом кремния для алюминия и меди. Не используйте одну ленту для разных матриц — карбид кремния переносит Si в алюминиевые показания.',
      ],
    },
    {
      heading: '2. Чистота аргона — тихий убийца',
      paragraphs: [
        'ОЭС требует аргон 99,999 % (5N). Аргон ниже сорта содержит O₂ и N₂, гасящие плазму и смещающие интенсивности — особенно для слабоэмитирующих C, S, P, B. Загрязнение 100 ppm O₂ может сместить показание углерода на 10–30 % на производственных уровнях.',
        'Симптомы плохого аргона: низкие элементы внезапно дрейфуют вниз, ускоряется дрейф калибровки, искра звучит иначе (треск, нет чистого щелчка). Решение: сменить баллон, проверить по известному эталону, осмотреть редуктор и линии на утечки. Дешёвая фум-лента на линиях аргона — частый виновник.',
      ],
    },
    {
      heading: '3. Износ и зазор электрода',
      paragraphs: [
        'Противоэлектрод (маленький вольфрамовый или серебряный штифт напротив образца) изнашивается каждым разрядом. По мере износа зазор расширяется, характеристики разряда смещаются, интенсивности дрейфуют. Стандарт JIEBO — чистка электрода каждые 50–100 разрядов проволочной щёткой и пере-заточка каждые 1 000–2 000 разрядов в зависимости от матрицы.',
        'Для искрения по железу вольфрамовый электрод обычно живёт 1 500 разрядов. Для алюминия и цинка (откладывают материал на электроде) — 800–1 200 разрядов до пере-заточки. Ведите журнал: «разрядов с последней заточки» — одна из четырёх цифр, которые техник по ОЭС должен помнить наизусть.',
      ],
    },
    {
      heading: '4. Держатель образца и прижимное усилие',
      paragraphs: [
        'Плоская поверхность, которая не плотно прижата к держателю — не лучше шероховатой. Образец должен герметизировать поток аргона; неровная посадка пропускает воздух в плазму, что даёт те же симптомы, что и плохой аргон. Тест на слух: чистая посадка даёт резкий одно-тоновый звук искры; протекающая — хриплый.',
        'Для неправильной формы (стружка, обломки чугуна) используйте оснастку, поставленную со спектрометром. Innovate T5 и Noble T7 идут с регулируемыми держателями для образцов от ∅ 15 мм. У [Surpass F1](/ru/products/surpass-f1/) — специальная оснастка для нестандартных полевых образцов (арматура, крупные отливки).',
      ],
    },
    {
      heading: '5. Дрейф калибровки vs дрейф подготовки',
      paragraphs: [
        'Дрейф калибровки медленный — несколько процентов за месяцы. Дрейф подготовки быстрый — показания меняются между соседними разрядами на одном и том же образце. Если разброс между образцами превышает 1 % RSD для стабильной матрицы вроде Mn в стали — это подготовка, не калибровка. Перекалибровка не лечит подготовку, лишь скрывает на несколько смен.',
        'Суточный режим: запускайте контрольный образец (кусок сертифицированного эталона) как первый разряд каждой смены. Журналируйте результат. Тренд углерода контрольного образца за 30 дней мгновенно скажет, что у вас: проблемы с аргоном, износ электрода или настоящий дрейф калибровки.',
      ],
    },
    {
      heading: 'Таблица быстрого устранения',
      paragraphs: [
        'Если показание выходит из допуска, пройдитесь по таблице сверху вниз. Большинство проблем решается в первых трёх строках.',
      ],
    },
  ],
  es: [
    {
      heading: 'Regla 80/20 de la precisión OES',
      paragraphs: [
        'En diez años instalando OES en fundiciones de 40+ países, los ingenieros de JIEBO ven el mismo patrón: el hardware causa las lecturas inexactas en quizá un 20 % de los casos. El 80 % restante es preparación de muestra, suministro de argón o desgaste de electrodo. El instrumento rara vez es el problema.',
        'Esta guía es una lista de comprobación. Recórrala antes de llamarnos por deriva, lectura fuera de tolerancia o equipo "averiado". La mayoría de esas llamadas se resuelven en uno de los cinco errores siguientes.',
      ],
    },
    {
      heading: '1. Preparación de superficie — plana, fresca, seca',
      paragraphs: [
        'La chispa debe golpear una superficie plana, conductora y sin óxido. La preparación estándar es esmerilar o fresar la muestra para que la zona de análisis sea un disco liso de metal desnudo de al menos 20 mm de diámetro. Tres reglas: **plana** (no se balancea en el porta-muestras), **fresca** (analizada en menos de 5 minutos tras el esmerilado para que el óxido no vuelva a crecer), **seca** (sin residuo de refrigerante ni aceite).',
        'Medio de esmerilado recomendado: cinta de óxido de aluminio grano 60 para hierro, carburo de silicio grano 80 para aluminio y cobre. No use la misma cinta entre matrices — el SiC contamina las lecturas de aluminio con granos de Si.',
      ],
    },
    {
      heading: '2. Pureza del argón — el asesino silencioso',
      paragraphs: [
        'OES requiere argón 99,999 % (5N). Argón de menor grado contiene O₂ y N₂ que apagan el plasma y desplazan intensidades — especialmente C, S, P, B. Una contaminación de 100 ppm de oxígeno puede desplazar la lectura de carbono 10–30 % a niveles de producción.',
        'Síntomas: elementos bajos derivan súbitamente hacia abajo, la deriva de calibración se acelera, la chispa suena distinta (más chisporroteo). Solución: reemplazar el cilindro, verificar con una muestra de referencia, revisar el regulador y las líneas en busca de fugas. Cinta de sellado barata en líneas de argón es culpable frecuente.',
      ],
    },
    {
      heading: '3. Desgaste y gap del electrodo',
      paragraphs: [
        'El contraelectrodo (la pequeña aguja de tungsteno o plata frente a la muestra) se desgasta con cada disparo. Al desgastarse, el gap se ensancha, la descarga cambia y las intensidades derivan. Estándar JIEBO: limpiar el electrodo cada 50–100 disparos con cepillo de alambre y re-puntear cada 1.000–2.000 disparos según la matriz.',
        'Para hierro, electrodos de tungsteno duran ~1.500 disparos. Para aluminio y zinc (depositan material en el electrodo), 800–1.200 disparos antes de re-puntear. Lleve un registro: "disparos desde el último puntee" es uno de los cuatro números que un técnico OES debe saber de memoria.',
      ],
    },
    {
      heading: '4. El porta-muestras y la presión de sujeción',
      paragraphs: [
        'Una superficie plana mal sujetada al porta-muestras no es mejor que una superficie rugosa. La muestra debe sellar el flujo de argón; un sello desigual deja entrar aire al plasma y produce los mismos síntomas que el argón malo. Pruebe escuchando: un sello limpio produce un sonido de chispa agudo de un solo tono; un sello con fuga suena ronco.',
        'Para muestras irregulares (virutas, trozos de fundición), use la fijación suministrada con el espectrómetro. Innovate T5 y Noble T7 incluyen porta-muestras ajustables para piezas desde Ø 15 mm. El [Surpass F1](/es/products/surpass-f1/) tiene una fijación especializada para muestras de campo irregulares como varillas y fundiciones grandes.',
      ],
    },
    {
      heading: '5. Deriva de calibración vs deriva de preparación',
      paragraphs: [
        'La deriva de calibración es lenta — pocos por ciento en meses. La de preparación es rápida — las lecturas cambian entre disparos consecutivos de la misma muestra. Si su variación muestra a muestra excede 1 % RSD en una matriz estable como Mn en acero, es preparación, no calibración. Recalibrar no arregla preparación; solo la oculta unos turnos.',
        'Rutina diaria: dispare una muestra de control (pieza de material certificado) como primer disparo de cada turno. Registre. Un gráfico de tendencia del carbono de la muestra de control sobre 30 días le dirá al instante si tiene problemas de argón, desgaste de electrodo o deriva real de calibración.',
      ],
    },
    {
      heading: 'Tabla de solución rápida',
      paragraphs: [
        'Cuando una lectura está fuera de tolerancia, recorra la tabla de arriba abajo. La mayoría de problemas se resuelve en las primeras tres filas.',
      ],
    },
  ],
  ar: [
    {
      heading: 'قاعدة 80/20 لدقّة OES',
      paragraphs: [
        'خلال عشر سنوات من تركيب أجهزة OES في مسابك في أكثر من 40 دولة، يرى مهندسو JIEBO النمط ذاته: العتاد هو سبب القراءات غير الدقيقة في نحو 20 % من الحالات. أمّا الـ 80 % المتبقّية فهي تحضير العيّنة أو الأرغون أو تآكل القطب. الجهاز نادراً ما يكون هو المشكلة.',
        'هذا الدليل عبارة عن قائمة تحقّق. راجعها قبل أن تتّصل بنا بسبب الانجراف أو خروج عن السماحية أو جهاز "معطّل". معظم تلك الاتصالات تُحلّ عند أحد الأخطاء الخمسة التالية.',
      ],
    },
    {
      heading: '1. تحضير السطح — مستوٍ وحديث وجافّ',
      paragraphs: [
        'يجب أن تضرب الشرارة سطحاً مستوياً موصِلاً خالياً من الأكسيد. الإجراء القياسي هو طحن أو تفريز العيّنة بحيث تكون منطقة التحليل قرصاً أملس من المعدن العاري بقطر 20 ملم على الأقل. ثلاث قواعد: **مستوية** (لا تتأرجح على منصب الشرارة)، **حديثة** (تُحلَّل خلال 5 دقائق من الطحن قبل أن ينمو الأكسيد)، **جافّة** (دون بقايا مبرّد أو زيت طحن).',
        'الوسائط الموصى بها: شريط أكسيد ألمنيوم 60 grit للعيّنات الحديدية، وكربيد سيليكون 80 grit للألمنيوم والنحاس. لا تستخدم الشريط نفسه لمصفوفات مختلفة — يلوّث SiC قراءات الألمنيوم بحبيبات Si.',
      ],
    },
    {
      heading: '2. نقاء الأرغون — القاتل الصامت',
      paragraphs: [
        'يتطلّب OES أرغوناً بنقاء 99.999 % (5N). الأرغون الأقلّ نقاءً يحوي O₂ و N₂ يخمدان البلازما ويزيحان شدّات الانبعاث — خصوصاً للعناصر منخفضة الانبعاث (C و S و P و B). تلوّث بـ 100 ppm من الأكسجين قد يزيح قراءة الكربون بنسبة 10–30 % عند مستويات الإنتاج.',
        'أعراض الأرغون السيّئ: انجراف مفاجئ للعناصر منخفضة الانبعاث، تسارع انجراف المعايرة، صوت الشرارة مختلف (طقطقة، لا طقّة نظيفة). الحلّ: استبدال الاسطوانة، التحقّق بعيّنة مرجعية معروفة، فحص المنظّم والخطوط بحثاً عن تسرّبات. شريط لفّ رخيص على خطوط الأرغون من أكثر الأسباب الشائعة.',
      ],
    },
    {
      heading: '3. تآكل القطب وفجوته',
      paragraphs: [
        'يتآكل القطب المقابل (إبرة صغيرة من التنغستن أو الفضّة مقابل العيّنة) مع كلّ شرارة. مع التآكل تتّسع الفجوة، وتتغيّر خصائص التفريغ، وتنجرف الشدّات. معيار JIEBO: تنظيف القطب كلّ 50–100 شرارة بفرشاة سلكية، وإعادة تشكيل الرأس كلّ 1000–2000 شرارة حسب المصفوفة.',
        'للشرارة على الحديد يدوم قطب التنغستن نحو 1500 شرارة. للألمنيوم والزنك (يترسّبان على القطب) من 800 إلى 1200 شرارة قبل إعادة التشكيل. احتفظ بسجلّ: «الشرارات منذ آخر إعادة تشكيل» أحد الأرقام الأربعة التي يجب أن يحفظها فنّي OES.',
      ],
    },
    {
      heading: '4. منصب العيّنة وضغط التثبيت',
      paragraphs: [
        'السطح المستوي الذي لا يُثبَّت بإحكام على منصب الشرارة لا يَفضُل سطحاً خشناً. يجب أن تُحكم العيّنة مسار تدفّق الأرغون؛ والإحكام غير المتساوي يُدخل هواءً إلى البلازما فيُنتج أعراضاً مماثلة للأرغون السيّئ. اختبر بالاستماع: الإحكام النظيف يُنتج صوت شرارة حادّاً بنغمة واحدة؛ والإحكام المسرِّب يُصدر صوتاً خشناً.',
        'للعيّنات غير المنتظمة (نشارة، قطع حديد زهر مكسورة) استخدم التثبيت المرفق مع الجهاز. يأتي Innovate T5 و Noble T7 بحوامل قابلة للضبط تستوعب عيّنات من ∅ 15 ملم. ولـ [Surpass F1](/ar/products/surpass-f1/) المتنقّل تثبيت متخصّص للعيّنات الميدانية غير المنتظمة كقضبان التسليح والقطع الكبيرة.',
      ],
    },
    {
      heading: '5. انجراف المعايرة مقابل انجراف التحضير',
      paragraphs: [
        'انجراف المعايرة بطيء — نسب قليلة على مدى أشهر. انجراف التحضير سريع — تتغيّر القراءات بين شرارات متعاقبة لنفس العيّنة. إذا تجاوز التباين بين العيّنات 1 % RSD في مصفوفة مستقرّة كالمنغنيز في الصلب، فإنّ السبب هو التحضير لا المعايرة. إعادة المعايرة لا تُصلح مشكلة تحضير، بل تخفيها لورديات قليلة.',
        'الروتين اليومي: شغّل عيّنة ضبط (قطعة من مادة مرجعية معتمدة) كأوّل شرارة في كلّ وردية. سجّل النتيجة. سيُخبرك مخطّط اتجاه الكربون لعيّنة الضبط خلال 30 يوماً فوراً بما إذا كانت لديك مشكلات أرغون أو تآكل قطب أو انجراف معايرة حقيقي.',
      ],
    },
    {
      heading: 'جدول الحلول السريعة',
      paragraphs: [
        'حين تخرج قراءة عن السماحية، اتبع الجدول من الأعلى إلى الأسفل. تُحلّ معظم المشكلات في الصفوف الثلاثة الأولى.',
      ],
    },
  ],
};

export const quickFixTable: Record<Locale, { cols: string[]; rows: string[][]; caption: string }> = {
  en: {
    caption: 'OES reading out of tolerance — diagnostic checklist (run top to bottom)',
    cols: ['Symptom', 'Likely cause', 'Quick fix', 'Time'],
    rows: [
      ['All elements low simultaneously', 'Argon contamination or leak', 'Swap argon cylinder, check fittings for leaks', '10 min'],
      ['Light elements (C, S, P, B) drift, metals stable', 'Argon humidity / oxygen contamination', 'Replace argon line dryer; check 5N grade', '15 min'],
      ['Intensity drops gradually over a shift', 'Electrode wear', 'Clean electrode with wire brush; re-tip if needed', '5 min'],
      ['Single-sample-to-sample variation > 1 % RSD', 'Surface preparation inconsistent', 'Re-grind with fresh belt; analyze within 5 min', '10 min'],
      ['Calibration shifts over 1–4 weeks', 'True calibration drift', 'Recalibrate with CRMs', '30–60 min'],
      ['Crackling spark sound', 'Sample-stand seal leaking air', 'Clean sample stand, check clamp pressure', '5 min'],
      ['Aluminum readings high on Si only', 'Cross-contamination from SiC belt', 'Switch to dedicated Al-grade abrasive', '5 min'],
    ],
  },
  ru: {
    caption: 'Показание ОЭС вне допуска — диагностический чек-лист (сверху вниз)',
    cols: ['Симптом', 'Вероятная причина', 'Быстрое решение', 'Время'],
    rows: [
      ['Все элементы низкие одновременно', 'Загрязнение или утечка аргона', 'Сменить баллон, проверить фитинги', '10 мин'],
      ['Лёгкие элементы (C, S, P, B) дрейфуют, металлы стабильны', 'Влажность / O₂ в аргоне', 'Заменить осушитель линии; проверить класс 5N', '15 мин'],
      ['Интенсивность плавно падает за смену', 'Износ электрода', 'Чистка проволочной щёткой; пере-заточка при необходимости', '5 мин'],
      ['Разброс образец-образец > 1 % RSD', 'Непостоянство подготовки', 'Перешлифовать свежей лентой; анализ в 5 мин', '10 мин'],
      ['Калибровка уходит за 1–4 недели', 'Реальный дрейф калибровки', 'Перекалибровать по CRM', '30–60 мин'],
      ['Трескучий звук искры', 'Утечка воздуха в держателе', 'Очистить держатель, проверить прижим', '5 мин'],
      ['Алюминиевые показания высокие только по Si', 'Перенос от ленты SiC', 'Перейти на абразив для Al', '5 мин'],
    ],
  },
  es: {
    caption: 'Lectura OES fuera de tolerancia — checklist diagnóstico (de arriba abajo)',
    cols: ['Síntoma', 'Causa probable', 'Solución rápida', 'Tiempo'],
    rows: [
      ['Todos los elementos bajos a la vez', 'Contaminación o fuga de argón', 'Cambiar cilindro, revisar uniones', '10 min'],
      ['Elementos ligeros (C, S, P, B) derivan, metales estables', 'Humedad / O₂ en el argón', 'Reemplazar secador de línea; verificar grado 5N', '15 min'],
      ['Intensidad cae gradualmente durante el turno', 'Desgaste de electrodo', 'Limpiar con cepillo; re-puntear si hace falta', '5 min'],
      ['Variación muestra a muestra > 1 % RSD', 'Preparación inconsistente', 'Re-esmerilar con cinta fresca; analizar en 5 min', '10 min'],
      ['Calibración se mueve en 1–4 semanas', 'Deriva real de calibración', 'Recalibrar con CRMs', '30–60 min'],
      ['Sonido de chispa crepitante', 'Sello del porta-muestras con fuga', 'Limpiar porta-muestras, verificar presión', '5 min'],
      ['Aluminio alto solo en Si', 'Contaminación cruzada de cinta SiC', 'Cambiar a abrasivo dedicado para Al', '5 min'],
    ],
  },
  ar: {
    caption: 'قراءة OES خارج السماحية — قائمة تشخيص (من الأعلى إلى الأسفل)',
    cols: ['العَرَض', 'السبب المحتمل', 'الحلّ السريع', 'الزمن'],
    rows: [
      ['كلّ العناصر منخفضة في الوقت نفسه', 'تلوّث أو تسرّب في الأرغون', 'استبدال الاسطوانة وفحص التوصيلات', '10 دقائق'],
      ['العناصر الخفيفة (C, S, P, B) منجرفة والمعادن مستقرّة', 'رطوبة / أكسجين في الأرغون', 'استبدال مجفّف خطّ الأرغون وفحص الدرجة 5N', '15 دقيقة'],
      ['تنخفض الشدّة تدريجياً خلال الوردية', 'تآكل القطب', 'تنظيف بفرشاة سلكية وإعادة تشكيل عند اللزوم', '5 دقائق'],
      ['تباين عيّنة-عيّنة > 1 % RSD', 'تحضير غير ثابت', 'إعادة الطحن بشريط جديد والتحليل خلال 5 دقائق', '10 دقائق'],
      ['انجراف معايرة خلال 1–4 أسابيع', 'انجراف معايرة حقيقي', 'إعادة المعايرة بمواد مرجعية معتمدة', '30–60 دقيقة'],
      ['صوت شرارة طقطقة', 'تسرّب هواء في إحكام المنصب', 'تنظيف المنصب وفحص ضغط التثبيت', '5 دقائق'],
      ['قراءات ألمنيوم مرتفعة على Si فقط', 'تلوّث متقاطع من شريط SiC', 'الانتقال إلى مادة كاشطة مخصّصة للألمنيوم', '5 دقائق'],
    ],
  },
};

export const faq: Record<Locale, Array<{ q: string; a: string }>> = {
  en: [
    { q: 'How fresh does "fresh" really mean?', a: 'Analyze within 5 minutes of grinding for iron and copper alloys. For aluminum, less — surface oxide forms in 60 seconds at room humidity, so analyze immediately after grinding for aluminum work.' },
    { q: 'Do I need a dedicated grinding belt per matrix?', a: 'Yes for aluminum and copper sample matrices. Silicon carbide grit embeds in aluminum and copper surfaces and shows up as a false Si peak; keep a separate aluminum-oxide belt for those matrices.' },
    { q: 'What argon flow rate should I run?', a: 'Approximately 3 L/min during sparking is the JIEBO Innovate T5 / Noble T7 specification. The instrument controls flow automatically; your job is to ensure the cylinder regulator outputs 0.3 MPa and the line is leak-free.' },
    { q: 'Can I detect bad argon without buying expensive gas analyzers?', a: 'Yes — burn a certified reference sample twice, swap to a fresh argon cylinder, burn again. If carbon, sulfur or phosphorus shifts more than 5 % between cylinders, your "old" cylinder was contaminated.' },
    { q: 'How often should I clean the spark stand?', a: 'Daily wipe-down at shift start, full cleaning weekly. The spark stand accumulates argon-fired material from previous samples; over a few weeks this becomes a cross-contamination source.' },
  ],
  ru: [
    { q: 'Что значит «свежий» по факту?', a: 'Анализ в течение 5 минут после обработки для железа и меди. Для алюминия меньше — окисел образуется за 60 секунд при комнатной влажности, так что анализируйте сразу после шлифовки.' },
    { q: 'Нужна ли отдельная лента для каждой матрицы?', a: 'Да для алюминия и меди. Карбид кремния вкрапляется в поверхности этих матриц и проявляется как ложный пик Si; держите отдельную ленту с электрокорундом для них.' },
    { q: 'Какой расход аргона выставить?', a: 'Примерно 3 л/мин при разряде — спецификация Innovate T5 / Noble T7. Прибор управляет потоком автоматически; ваша задача — обеспечить 0,3 МПа на выходе редуктора и герметичную линию.' },
    { q: 'Можно ли понять, что аргон плохой, без дорогих газоанализаторов?', a: 'Да — измерьте сертифицированный эталон дважды, смените баллон, измерьте снова. Если C, S или P смещается больше 5 % между баллонами, «старый» баллон был загрязнён.' },
    { q: 'Как часто чистить искровой держатель?', a: 'Протирать ежедневно в начале смены, полная чистка раз в неделю. На держателе скапливается материал из предыдущих образцов; за пару недель это становится источником перекрёстного загрязнения.' },
  ],
  es: [
    { q: '¿Qué tan "fresca" debe estar la muestra?', a: 'Análisis en menos de 5 minutos tras esmerilado para hierro y cobre. Para aluminio, menos — el óxido superficial se forma en 60 segundos a humedad ambiente, así que analice inmediatamente después.' },
    { q: '¿Necesito una cinta de esmerilado dedicada por matriz?', a: 'Sí para aluminio y cobre. El SiC se incrusta en estas superficies y aparece como pico falso de Si; mantenga una cinta de óxido de aluminio separada para esas matrices.' },
    { q: '¿Qué caudal de argón usar?', a: 'Unos 3 L/min durante la chispa — especificación Innovate T5 / Noble T7. El equipo controla el flujo; su trabajo es asegurar 0,3 MPa en el regulador y línea sin fugas.' },
    { q: '¿Puedo detectar argón malo sin analizadores de gas costosos?', a: 'Sí — queme un material de referencia certificado dos veces, cambie de cilindro, queme otra vez. Si C, S o P se mueven más de 5 % entre cilindros, el cilindro "viejo" estaba contaminado.' },
    { q: '¿Cada cuánto limpiar el porta-muestras?', a: 'Limpieza diaria al inicio del turno, limpieza completa semanal. El porta acumula material quemado de muestras previas; en pocas semanas se vuelve fuente de contaminación cruzada.' },
  ],
  ar: [
    { q: 'ما المقصود بـ "حديثة" فعلاً؟', a: 'التحليل خلال 5 دقائق من الطحن لسبائك الحديد والنحاس. للألمنيوم أقل — يتكوّن الأكسيد السطحي خلال 60 ثانية في الرطوبة الاعتيادية، فحلّل فور الطحن.' },
    { q: 'هل أحتاج شريط طحن مخصّصاً لكلّ مصفوفة؟', a: 'نعم لمصفوفتي الألمنيوم والنحاس. تترسّب حبيبات كربيد السيليكون في سطح الألمنيوم والنحاس وتظهر كقمّة Si زائفة؛ احتفظ بشريط أكسيد ألمنيوم منفصل لهاتَين المصفوفتَين.' },
    { q: 'ما معدّل تدفّق الأرغون المناسب؟', a: 'نحو 3 لتر/دقيقة أثناء الشرارة — مواصفة Innovate T5 و Noble T7. يضبط الجهاز التدفّق تلقائياً؛ مهمّتك التأكّد من خروج 0.3 ميغاباسكال من المنظّم وأنّ الخطّ غير مسرِّب.' },
    { q: 'هل يمكن كشف أرغون سيّئ دون محلّلات غاز باهظة؟', a: 'نعم — حلّل عيّنة مرجعية معتمدة مرّتين، ثم بدّل الاسطوانة وحلّل مجدّداً. إذا تحرّك C أو S أو P بأكثر من 5 % بين الاسطوانتَين، فإنّ الاسطوانة «القديمة» كانت ملوّثة.' },
    { q: 'كم مرّة يجب تنظيف منصب الشرارة؟', a: 'مسح يومي في بداية الوردية، وتنظيف كامل أسبوعياً. يتراكم على المنصب مادة محترقة من العيّنات السابقة؛ ويصبح خلال أسابيع مصدراً للتلوّث المتقاطع.' },
  ],
};
