import type { ProductRecord } from './_types';

export const product: ProductRecord = {
  slug: 'cs2020',
  name: 'CS2020 High-frequency Infrared Carbon & Sulfur Analyzer',
  sku: 'JIEBO-CS2020',
  category: 'elemental',
  image: '/products/cs2020.jpg',
  specs: [
    { labelKey: 'detection_range', value: 'Low C 0.00001–0.5 %, High C 0.1–99.99 %; Low S 0.00001–0.5 %, High S 0.1–99.99 %' },
    { labelKey: 'detection_cell', value: 'Four physical detection cells' },
    { labelKey: 'precision', value: 'C ≤ 0.001 mg (1 ppm) or 0.5 % RSD; S ≤ 0.001 mg (1 ppm) or 0.5 % RSD' },
    { labelKey: 'sensitivity', value: 'C 0.00001 %, S 0.00001 %' },
    { labelKey: 'analyzing_time', value: '20–60 seconds adjustable' },
    { labelKey: 'power', value: 'AC 220 V / 50 Hz' },
    { labelKey: 'dimensions', value: '600 × 645 × 830 mm' },
    { labelKey: 'weight', value: '110 kg' },
  ],
  overview: {
    en: 'The CS2020 is a fully automated high-frequency infrared carbon and sulfur analyzer for steel, ores, finished metals and inorganic materials. Four physical detection cells cover low- and high-concentration ranges in one instrument. Auto double-brush cleaning and vacuum dust removal keep the furnace head maintenance-free for more than 200 cycles.',
    ru: 'CS2020 — полностью автоматизированный высокочастотный ИК-анализатор углерода и серы для стали, руд, готового металла и неорганических материалов. Четыре физических аналитических ячейки покрывают низкие и высокие концентрации в одном приборе. Автоматическая двойная щётка и вакуумная пылеуборка обеспечивают необслуживаемую работу головки печи более 200 циклов.',
    es: 'El CS2020 es un analizador de carbono y azufre por infrarrojos de alta frecuencia totalmente automatizado para acero, minerales, metales acabados y materiales inorgánicos. Cuatro celdas de detección físicas cubren rangos bajos y altos de concentración en un solo equipo. El cepillado doble automático y la extracción al vacío mantienen el cabezal del horno sin mantenimiento por más de 200 ciclos.',
    ar: 'الجهاز CS2020 محلّل كربون وكبريت بالأشعة تحت الحمراء عالي التردّد ومؤتمت بالكامل، للصلب والخامات والمعادن النهائية والمواد غير العضوية. تغطّي أربع خلايا كشف فيزيائية النطاقات المنخفضة والعالية للتراكيز في جهاز واحد. التنظيف الآلي بفرشاتين وسحب الغبار بالتفريغ يحافظان على رأس الفرن دون صيانة لأكثر من 200 دورة.',
  },
  applications: {
    en: [
      'Steel and ferro-alloy production — daily C/S quality control',
      'Mining and ore processing — carbon and sulfur in coal, iron ore, slag',
      'Aerospace and new-energy materials — trace C/S verification',
      'Cement and building materials — sulfur in raw mix and clinker',
      'Geological survey labs — sample throughput on rock and soil',
    ],
    ru: [
      'Производство стали и ферросплавов — ежедневный контроль C/S',
      'Горнодобыча и переработка руды — C и S в угле, железной руде, шлаке',
      'Аэрокосмические и новые энергетические материалы — следовая проверка C/S',
      'Цемент и строительные материалы — сера в сырьевой смеси и клинкере',
      'Геологические лаборатории — высокая пропускная способность по образцам пород и почв',
    ],
    es: [
      'Producción de acero y ferroaleaciones — control diario de C/S',
      'Minería y procesamiento de mineral — carbono y azufre en carbón, mineral de hierro, escoria',
      'Aeroespacial y nuevos materiales energéticos — verificación de trazas de C/S',
      'Cemento y materiales de construcción — azufre en mezcla cruda y clínker',
      'Laboratorios de geología — alto rendimiento en muestras de roca y suelo',
    ],
    ar: [
      'إنتاج الصلب وسبائك الحديد — ضبط جودة يومي للكربون والكبريت',
      'التعدين ومعالجة الخامات — الكربون والكبريت في الفحم وخام الحديد والخبث',
      'مواد الطيران والطاقة الجديدة — التحقّق من نسب نزرة للكربون والكبريت',
      'الإسمنت ومواد البناء — الكبريت في الخلطة الخام والكلنكر',
      'مختبرات المسح الجيولوجي — إنتاجية عالية في عيّنات الصخور والتربة',
    ],
  },
  faq: {
    en: [
      { q: 'Why four detection cells instead of two?', a: 'Four cells (low/high C and low/high S) allow the instrument to switch range automatically without recalibration, so you can analyze ultra-low-carbon steel and high-carbon cast iron on the same shift.' },
      { q: 'Does it really go maintenance-free for 200 cycles?', a: 'The auto double-brush mechanism cleans the furnace tube between samples, and the vacuum dust system pulls particulates away before they accumulate. In real production use, 200+ cycles between manual maintenance is consistently achievable.' },
      { q: 'How is it different from the CS995 / CS996?', a: 'CS2020 has four detection cells, automatic cleaning, broader range (down to 0.00001 %) and tighter precision. CS995 is bench-type with one C and one S cell; CS996 is floor-type with expandable cells. Choose CS2020 for high-end labs, CS995/996 for production QC at lower cost.' },
      { q: 'What sample weight is required?', a: 'Typically 0.1–1.0 g depending on expected concentration. Balance accuracy 0.0001 g is required and is part of the standard package.' },
    ],
    ru: [
      { q: 'Зачем четыре ячейки вместо двух?', a: 'Четыре ячейки (низкий/высокий C и низкий/высокий S) позволяют автоматически переключать диапазон без перекалибровки, так что низкоуглеродистую сталь и высокоуглеродистый чугун можно анализировать в одну смену.' },
      { q: 'Действительно ли 200 циклов без обслуживания?', a: 'Автоматическая двойная щётка чистит трубку печи между образцами, а вакуумная пылеуборка удаляет частицы до их накопления. В реальной эксплуатации 200+ циклов между ручным обслуживанием — стабильно достижимая цифра.' },
      { q: 'Чем отличается от CS995 / CS996?', a: 'CS2020 имеет 4 ячейки, автоматическую чистку, более широкий диапазон (до 0,00001 %) и более жёсткую точность. CS995 — настольный с одной C и одной S ячейкой; CS996 — напольный с расширяемыми ячейками. CS2020 — для высококлассных лабораторий, CS995/996 — для производственного QC по более низкой цене.' },
      { q: 'Какая масса образца требуется?', a: 'Обычно 0,1–1,0 г в зависимости от ожидаемой концентрации. Требуются весы с точностью 0,0001 г, входят в стандартный комплект.' },
    ],
    es: [
      { q: '¿Por qué cuatro celdas en lugar de dos?', a: 'Cuatro celdas (C bajo/alto y S bajo/alto) permiten cambiar de rango sin recalibrar; así puede analizar acero de muy bajo carbono y fundición alta en carbono en el mismo turno.' },
      { q: '¿Realmente 200 ciclos sin mantenimiento?', a: 'El cepillado doble automático limpia el tubo del horno entre muestras y el sistema de vacío retira partículas antes de que se acumulen. En producción real, 200+ ciclos entre mantenimiento manual es algo consistente.' },
      { q: '¿En qué se diferencia del CS995 / CS996?', a: 'El CS2020 tiene 4 celdas, limpieza automática, rango más amplio (hasta 0,00001 %) y mejor precisión. El CS995 es de mesa con una celda C y una S; el CS996 es de pie con celdas ampliables. Elija CS2020 para laboratorios de gama alta y CS995/996 para QC de producción a menor costo.' },
      { q: '¿Qué peso de muestra se necesita?', a: 'Normalmente 0,1–1,0 g según la concentración esperada. Se requiere balanza con precisión de 0,0001 g, incluida en el paquete estándar.' },
    ],
    ar: [
      { q: 'لماذا أربع خلايا كشف بدلاً من اثنتين؟', a: 'تتيح الخلايا الأربع (كربون منخفض/مرتفع وكبريت منخفض/مرتفع) للجهاز التبديل التلقائي للنطاق دون إعادة معايرة، فيمكن تحليل صلب منخفض الكربون جداً وحديد زهر عالي الكربون في الوردية نفسها.' },
      { q: 'هل تخلو فعلاً من الصيانة لمدّة 200 دورة؟', a: 'تنظّف آلية الفرشاتين المؤتمتة أنبوب الفرن بين العيّنات، ويسحب نظام التفريغ الجسيمات قبل تراكمها. في الإنتاج الفعلي، يمكن تحقيق 200+ دورة بين أعمال الصيانة اليدوية باستمرار.' },
      { q: 'ما الفرق بينه وبين CS995 / CS996؟', a: 'يمتلك CS2020 أربع خلايا وتنظيفاً مؤتمتاً ونطاقاً أوسع (حتى 0.00001 %) ودقّةً أعلى. أما CS995 فمكتبي بخليّة كربون وأخرى كبريت؛ وCS996 أرضي بخلايا قابلة للتوسعة. اختر CS2020 للمختبرات الراقية، وCS995/996 لضبط جودة الإنتاج بتكلفة أقل.' },
      { q: 'ما وزن العيّنة المطلوب؟', a: 'عادةً 0.1 إلى 1.0 غرام حسب التركيز المتوقّع. تتطلّب ميزاناً بدقّة 0.0001 غرام، وهو ضمن العرض القياسي.' },
    ],
  },
};
