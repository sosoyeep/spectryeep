import type { ProductRecord } from './_types';

export const product: ProductRecord = {
  slug: 'onh-508',
  name: {
    en: 'ONH-508 Oxygen, Nitrogen & Hydrogen Analyzer',
    ru: 'ONH-508 — анализатор кислорода, азота и водорода',
    es: 'ONH-508 — analizador de oxígeno, nitrógeno e hidrógeno',
    ar: 'ONH-508 — محلّل الأكسجين والنيتروجين والهيدروجين',
  },
  sku: 'JIEBO-ONH508',
  category: 'elemental',
  image: '/products/onh-508.jpg',
  specs: [
    { labelKey: 'measuring_range', value: 'O 0.5 ppm – 20 %; N 0.5 ppm – 50 %; H 0.2 ppm – 0.1 %' },
    { labelKey: 'accuracy', value: 'O 1 ppm or RSD ≤ 1.0 %; N 1 ppm or RSD ≤ 1.0 %; H 0.2 ppm or RSD ≤ 2.0 %' },
    { labelKey: 'sensitivity', value: 'Minimum reading 0.01 ppm' },
    { labelKey: 'analyzing_time', value: '120–240 seconds' },
    { labelKey: 'test_methods', value: 'O: non-dispersive infrared; N: thermal conductivity; H: non-dispersive infrared' },
    { labelKey: 'carrier_gas', value: 'Carrier: high-purity helium 99.99 % @ 0.20 MPa; Power: nitrogen or purified compressed air @ 0.35 MPa' },
    { labelKey: 'power', value: '220 V / 50 Hz single phase, 50 A; furnace 8.5 kVA max' },
    { labelKey: 'dimensions', value: '600 × 700 × 900 mm' },
    { labelKey: 'weight', value: '160 kg' },
  ],
  overview: {
    en: 'The ONH-508 simultaneously analyzes oxygen, nitrogen and hydrogen in steel, rare earth alloys, copper, zirconium, titanium, ceramics and inorganic powders. It combines pyroelectric infrared detection (for O and H) with thermal-conductivity detection (for N) and uses inert-gas-fusion sample preparation in an electrode pulse furnace (up to 3000 °C, 1500 A).',
    ru: 'ONH-508 одновременно определяет кислород, азот и водород в стали, редкоземельных сплавах, меди, цирконии, титане, керамике и неорганических порошках. Сочетает пироэлектрическое ИК-детектирование (для O и H) и детектирование по теплопроводности (для N), использует метод плавления в инертном газе в импульсной электродной печи (до 3000 °C, 1500 А).',
    es: 'El ONH-508 analiza simultáneamente oxígeno, nitrógeno e hidrógeno en acero, aleaciones de tierras raras, cobre, circonio, titanio, cerámicas y polvos inorgánicos. Combina detección infrarroja piroeléctrica (O y H) con detección por conductividad térmica (N) y emplea fusión en gas inerte en horno de pulsos por electrodo (hasta 3000 °C, 1500 A).',
    ar: 'الجهاز ONH-508 يحلّل في وقت واحد الأكسجين والنيتروجين والهيدروجين في الصلب وسبائك الأتربة النادرة والنحاس والزركونيوم والتيتانيوم والسيراميك والمساحيق غير العضوية. يجمع بين الكشف بالأشعة تحت الحمراء البيروكهربائية (للأكسجين والهيدروجين) والكشف بالتوصيل الحراري (للنيتروجين)، ويعتمد طريقة الانصهار في غاز خامل داخل فرن نبضي بالأقطاب (حتى 3000 °م و1500 أمبير).',
  },
  applications: {
    en: [
      'Steel and stainless steel — oxygen control after deoxidation',
      'Titanium and zirconium components — gas-content certification for aerospace',
      'Rare-earth and special alloys — quality control during melt',
      'Copper and electrical conductor materials — hydrogen and oxygen monitoring',
      'Ceramic and powder metallurgy — sintered gas content',
    ],
    ru: [
      'Сталь и нержавеющая сталь — контроль кислорода после раскисления',
      'Титановые и циркониевые компоненты — сертификация газового содержания для аэрокосмоса',
      'Редкоземельные и специальные сплавы — контроль качества при плавке',
      'Медь и материалы электропроводников — контроль водорода и кислорода',
      'Керамика и порошковая металлургия — содержание газов в спечённых изделиях',
    ],
    es: [
      'Acero y acero inoxidable — control de oxígeno tras desoxidación',
      'Componentes de titanio y circonio — certificación de contenido gaseoso aeroespacial',
      'Aleaciones de tierras raras y especiales — QC durante la colada',
      'Cobre y materiales conductores — monitoreo de hidrógeno y oxígeno',
      'Cerámica y metalurgia de polvos — contenido gaseoso en piezas sinterizadas',
    ],
    ar: [
      'الصلب والفولاذ المقاوم للصدأ — ضبط الأكسجين بعد إزالة الأكسدة',
      'مكوّنات التيتانيوم والزركونيوم — اعتماد محتوى الغازات لقطاع الطيران',
      'سبائك الأتربة النادرة والسبائك الخاصّة — ضبط الجودة أثناء الصهر',
      'النحاس ومواد التوصيل الكهربائي — مراقبة الهيدروجين والأكسجين',
      'السيراميك ومسحوقيات المعادن — محتوى الغازات في القطع الملبَّدة',
    ],
  },
  faq: {
    en: [
      { q: 'Why measure O, N, H together?', a: 'In high-performance materials (aerospace titanium, stainless steel, rare earths) all three light elements determine mechanical performance: oxygen embrittles, nitrogen affects strength, hydrogen causes cracking. A single instrument keeps the analysis consistent and reduces sample handling.' },
      { q: 'What sample preparation is needed?', a: 'Small solid samples 0.1–1.0 g, cleaned of surface oxide. Drop-in graphite crucibles fuse the sample at up to 3000 °C in helium carrier. Surface oxide removal is critical for hydrogen accuracy.' },
      { q: 'How does this compare with LECO-style ONH analyzers?', a: 'Same principle: inert-gas fusion + IR + TCD. The ONH-508 uses a high-stability pyroelectric IR detector and offers automatic high/low range switching. Performance is comparable for routine production work at significantly lower cost.' },
      { q: 'Lead time and consumables?', a: '30 working days from confirmed order. Consumables include graphite crucibles, getter materials and calibration standards (CRMs). We can recommend local suppliers for helium and reference materials.' },
    ],
    ru: [
      { q: 'Зачем измерять O, N, H вместе?', a: 'В высоконагруженных материалах (титан для авиации, нержавеющая сталь, редкоземельные сплавы) все три лёгких элемента определяют механические свойства: кислород охрупчивает, азот влияет на прочность, водород вызывает растрескивание. Один прибор делает анализ согласованным и снижает манипуляции с образцами.' },
      { q: 'Какая нужна подготовка образца?', a: 'Небольшие твёрдые образцы 0,1–1,0 г, очищенные от поверхностного окисла. В графитовые тигли загружаются и сплавляются при до 3000 °C в потоке гелия. Удаление поверхностного окисла критично для точности по водороду.' },
      { q: 'Чем отличается от ONH LECO?', a: 'Принцип тот же: плавление в инертном газе + ИК + ТКД. ONH-508 использует высокостабильный пироэлектрический ИК-детектор и автоматическое переключение диапазонов. Производительность сопоставима с LECO для рутинных производственных задач при значительно более низкой стоимости.' },
      { q: 'Срок поставки и расходники?', a: '30 рабочих дней с момента подтверждения заказа. Расходники: графитовые тигли, геттеры и стандартные образцы (CRM). Можем рекомендовать местных поставщиков гелия и эталонов.' },
    ],
    es: [
      { q: '¿Por qué medir O, N, H juntos?', a: 'En materiales de alto desempeño (titanio aeroespacial, acero inoxidable, tierras raras) los tres elementos ligeros determinan el rendimiento mecánico: oxígeno fragiliza, nitrógeno afecta la resistencia, hidrógeno provoca fisuras. Un solo equipo mantiene el análisis consistente y reduce manipulación.' },
      { q: '¿Qué preparación de muestra?', a: 'Muestras sólidas pequeñas 0,1–1,0 g, sin óxido superficial. Crisoles de grafito de un solo uso funden la muestra hasta 3000 °C en helio. La eliminación de óxido superficial es crítica para la exactitud de hidrógeno.' },
      { q: '¿Comparación con analizadores ONH tipo LECO?', a: 'Mismo principio: fusión en gas inerte + IR + TCD. El ONH-508 usa detector IR piroeléctrico de alta estabilidad y conmutación automática de rango. Rendimiento comparable para producción rutinaria a costo significativamente menor.' },
      { q: '¿Plazo y consumibles?', a: '30 días hábiles desde confirmación. Consumibles: crisoles de grafito, materiales getter y estándares de calibración (CRM). Podemos recomendar proveedores locales de helio y referencias.' },
    ],
    ar: [
      { q: 'لماذا قياس الأكسجين والنيتروجين والهيدروجين معاً؟', a: 'في المواد عالية الأداء (تيتانيوم الطيران، الفولاذ المقاوم للصدأ، الأتربة النادرة) تحدّد العناصر الخفيفة الثلاثة الأداء الميكانيكي: الأكسجين يُهشّش، والنيتروجين يؤثّر في المتانة، والهيدروجين يسبّب التشقّق. جهاز واحد يحافظ على اتّساق التحليل ويقلّل التعامل مع العيّنات.' },
      { q: 'ما تحضير العيّنة المطلوب؟', a: 'عيّنات صلبة صغيرة 0.1 إلى 1.0 غرام منظّفة من الأكسيد السطحي. تُحمَّل في بواتق غرافيت وتُصهر حتى 3000 °م في تيار هيليوم. إزالة الأكسيد السطحي ضرورية لدقّة قياس الهيدروجين.' },
      { q: 'كيف يقارَن مع محلّلات ONH من نوع LECO؟', a: 'المبدأ نفسه: انصهار في غاز خامل + أشعة تحت حمراء + كشف بالتوصيل الحراري. يستخدم ONH-508 كاشف أشعة تحت حمراء بيروكهربائياً عالي الاستقرار وتبديلاً تلقائياً للنطاقات. الأداء مماثل لـ LECO في الأعمال الإنتاجية الروتينية بتكلفة أقل بكثير.' },
      { q: 'مدّة التسليم والمستهلكات؟', a: '30 يوم عمل من تأكيد الطلب. المستهلكات: بواتق غرافيت ومواد جاذبة ومعايير معايرة (CRM). يمكننا التوصية بموردين محليّين للهيليوم والمعايير.' },
    ],
  },
};
