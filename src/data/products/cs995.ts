import type { ProductRecord } from './_types';

export const product: ProductRecord = {
  slug: 'cs995',
  name: {
    en: 'CS995 Carbon & Sulfur Analyzer',
    ru: 'CS995 — анализатор углерода и серы',
    es: 'CS995 — analizador de carbono y azufre',
    ar: 'CS995 — محلّل الكربون والكبريت',
  },
  sku: 'JIEBO-CS995',
  category: 'elemental',
  image: '/products/cs995.jpg',
  specs: [
    { labelKey: 'detection_range', value: 'C 0.0005–6.0000 %; S 0.0005–0.3500 %' },
    { labelKey: 'detection_cell', value: 'One carbon + one sulfur pool' },
    { labelKey: 'furnace_power', value: '2.2 kW' },
    { labelKey: 'analyzing_time', value: 'Typically 30–60 seconds' },
    { labelKey: 'power', value: 'AC 220 V / 50 Hz' },
    { labelKey: 'dimensions', value: '530 × 370 × 195 mm (detector)' },
    { labelKey: 'weight', value: '115 kg' },
  ],
  overview: {
    en: 'The CS995 is a bench-type high-frequency infrared carbon and sulfur analyzer with a separate bench-mounted detector and induction furnace. Designed for production-floor QC in foundries, steel mills and ferrous-alloy plants, it analyzes solid metals, ferro-alloys, ores, soils and titanium dioxide with reliable accuracy at a footprint that fits any QC bench.',
    ru: 'CS995 — настольный высокочастотный ИК-анализатор углерода и серы с отдельным настольным детектором и индукционной печью. Разработан для производственного QC в литейных, сталелитейных и ферросплавных цехах. Анализирует твёрдые металлы, ферросплавы, руды, грунты и диоксид титана с надёжной точностью при компактных габаритах, помещающихся на любом QC-столе.',
    es: 'El CS995 es un analizador de carbono y azufre por infrarrojos de alta frecuencia de mesa con detector y horno de inducción separados. Diseñado para QC de planta en fundiciones, acerías y plantas de ferroaleaciones, analiza metales sólidos, ferroaleaciones, minerales, suelos y dióxido de titanio con precisión fiable en un tamaño que cabe en cualquier mesa de QC.',
    ar: 'الجهاز CS995 محلّل كربون وكبريت مكتبي بالأشعة تحت الحمراء عالي التردّد، يفصل بين الكاشف المكتبي وفرن الحثّ. مصمَّم لضبط جودة الإنتاج في المسابك ومصانع الصلب وسبائك الحديد، ويحلّل المعادن الصلبة وسبائك الحديد والخامات والتربة وثاني أكسيد التيتانيوم بدقّة موثوقة وبحجم يناسب أي طاولة QC.',
  },
  applications: {
    en: [
      'Iron and steel foundries — carbon equivalent during melt',
      'Ferro-alloy production — incoming raw material verification',
      'Mining and ore-processing QC — coal, iron ore, ferrous concentrates',
      'Soil and geological samples',
      'Titanium dioxide and other inorganic process controls',
    ],
    ru: [
      'Чёрная металлургия — углеродный эквивалент при плавке',
      'Производство ферросплавов — входной контроль сырья',
      'Горнодобыча и обогащение — уголь, железная руда, концентраты чёрных металлов',
      'Грунтовые и геологические образцы',
      'Контроль процессов производства диоксида титана и других неорганических материалов',
    ],
    es: [
      'Fundición de hierro y acero — carbono equivalente durante la colada',
      'Producción de ferroaleaciones — verificación de materia prima',
      'Minería y procesamiento de mineral — carbón, mineral de hierro, concentrados ferrosos',
      'Muestras de suelo y geológicas',
      'Control de procesos en dióxido de titanio y otros inorgánicos',
    ],
    ar: [
      'مسابك الحديد والصلب — معادل الكربون أثناء الصهر',
      'إنتاج سبائك الحديد — التحقّق من المواد الواردة',
      'التعدين ومعالجة الخامات — الفحم وخام الحديد ومركّزات الحديد',
      'عيّنات التربة والجيولوجيا',
      'ضبط عمليات ثاني أكسيد التيتانيوم وغيرها من المواد غير العضوية',
    ],
  },
  faq: {
    en: [
      { q: 'When should I choose CS995 over CS996?', a: 'CS995 has a smaller footprint (115 kg, bench design) and is ideal when bench space is limited and the workload is moderate. CS996 is floor-type with a 2.5 kW furnace and expandable cells, better for high-throughput shifts and broader concentration ranges.' },
      { q: 'What is the difference from the CS2020?', a: 'CS2020 has 4 detection cells, broader range down to 0.00001 %, automatic cleaning. CS995 is a lower-cost two-pool system suitable for the typical foundry C/S range (0.0005 % and up).' },
      { q: 'What is the typical analysis time?', a: 'Total cycle 30–60 seconds depending on sample weight, accelerator and the chosen analysis program.' },
      { q: 'Is balance and consumables included?', a: 'Yes. The standard package includes the electronic balance (0.0001 g), tungsten accelerator, ceramic crucibles and starting reference materials.' },
    ],
    ru: [
      { q: 'Когда выбрать CS995 вместо CS996?', a: 'CS995 компактнее (115 кг, настольный) и подходит при ограниченном пространстве и средней загрузке. CS996 напольный с печью 2,5 кВт и расширяемыми ячейками — лучше для высокопоточных смен и более широких диапазонов концентраций.' },
      { q: 'Чем отличается от CS2020?', a: 'CS2020 имеет 4 ячейки, диапазон до 0,00001 %, автоматическую чистку. CS995 — двухячеечная система ниже по цене, подходит для типичного литейного диапазона C/S (от 0,0005 %).' },
      { q: 'Типичное время анализа?', a: 'Полный цикл 30–60 секунд в зависимости от массы образца, ускорителя и выбранной программы.' },
      { q: 'Входят ли весы и расходники?', a: 'Да. В стандартный комплект входят электронные весы (0,0001 г), вольфрамовый ускоритель, керамические тигли и стартовые эталонные материалы.' },
    ],
    es: [
      { q: '¿Cuándo elegir CS995 sobre CS996?', a: 'El CS995 tiene menor huella (115 kg, de mesa) y es ideal con espacio limitado y carga moderada. El CS996 es de pie con horno 2,5 kW y celdas ampliables, mejor para turnos de alto rendimiento y rangos más amplios.' },
      { q: '¿Diferencia con el CS2020?', a: 'El CS2020 tiene 4 celdas, rango hasta 0,00001 % y limpieza automática. El CS995 es un sistema de dos celdas más económico, adecuado para el rango típico C/S de fundición (desde 0,0005 %).' },
      { q: '¿Tiempo típico de análisis?', a: 'Ciclo total 30–60 segundos según peso de muestra, acelerador y programa elegido.' },
      { q: '¿Incluye balanza y consumibles?', a: 'Sí. El paquete estándar incluye balanza electrónica (0,0001 g), acelerador de tungsteno, crisoles cerámicos y materiales de referencia iniciales.' },
    ],
    ar: [
      { q: 'متى أختار CS995 بدلاً من CS996؟', a: 'يأخذ CS995 مساحة أقل (115 كغ، تصميم مكتبي) ومناسب عندما تكون المساحة محدودة وعبء العمل متوسّطاً. أمّا CS996 فهو أرضي بفرن 2.5 كيلوواط وخلايا قابلة للتوسعة، أفضل للورديات عالية الإنتاجية ولنطاقات تركيز أوسع.' },
      { q: 'ما الفرق عن CS2020؟', a: 'يحتوي CS2020 على 4 خلايا ونطاق حتى 0.00001 % وتنظيف مؤتمت. أمّا CS995 فهو نظام بخلّيتَين بسعر أقل، مناسب للنطاق المعتاد في المسابك (من 0.0005 %).' },
      { q: 'ما زمن التحليل النموذجي؟', a: 'الدورة الكاملة 30 إلى 60 ثانية حسب وزن العيّنة والمعجّل والبرنامج المختار.' },
      { q: 'هل يشمل الميزان والمستهلكات؟', a: 'نعم. تتضمّن العبوة القياسية ميزاناً إلكترونياً (0.0001 غرام) ومعجّلاً من التنغستن وبواتق سيراميكية ومواد مرجعية للبدء.' },
    ],
  },
};
