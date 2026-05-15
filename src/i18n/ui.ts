import type { Locale } from '../consts';

export type UIKey =
  | 'nav.products'
  | 'nav.learn'
  | 'nav.compare'
  | 'nav.about'
  | 'nav.contact'
  | 'cta.whatsapp'
  | 'cta.whatsapp_fab'
  | 'cta.inquiry'
  | 'cta.request_quote'
  | 'cta.explore_products'
  | 'cta.learn_more'
  | 'hero.eyebrow'
  | 'hero.h1'
  | 'hero.lede'
  | 'facts.title'
  | 'facts.founded'
  | 'facts.headquarters'
  | 'facts.product_lines'
  | 'facts.industries'
  | 'facts.export_markets'
  | 'facts.lead_time'
  | 'facts.warranty'
  | 'section.products'
  | 'section.products_lede'
  | 'section.industries'
  | 'section.why'
  | 'why.quality'
  | 'why.quality_body'
  | 'why.lead_time'
  | 'why.lead_time_body'
  | 'why.support'
  | 'why.support_body'
  | 'footer.contact'
  | 'footer.rights'
  | 'breadcrumb.home'
  | 'breadcrumb.products'
  | 'breadcrumb.learn'
  | 'breadcrumb.compare'
  | 'product.spec_title'
  | 'product.applications_title'
  | 'product.faq_title'
  | 'product.related_title'
  | 'compare.verdict_title'
  | 'compare.choose_when'
  | 'compare.view_product'
  | 'compare.related_title'
  | 'compare.read'
  | 'whatsapp.prefill_general'
  | 'whatsapp.prefill_product'
  | 'whatsapp.prefill_learn'
  | 'whatsapp.prefill_compare';

export const ui: Record<Locale, Record<UIKey, string>> = {
  en: {
    'nav.products': 'Products',
    'nav.learn': 'Learn',
    'nav.compare': 'Compare',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'cta.whatsapp': 'Chat on WhatsApp',
    'cta.whatsapp_fab': 'WhatsApp',
    'cta.inquiry': 'Inquire on WhatsApp',
    'cta.request_quote': 'Get a Quote',
    'cta.explore_products': 'Explore Products',
    'cta.learn_more': 'Learn more',
    'hero.eyebrow': 'OES Spectrometer Manufacturer · Wuxi, China · Since 2009',
    'hero.h1': 'Optical Emission Spectrometers built for foundries, mills, and labs',
    'home.title': 'OES, Carbon-Sulfur & XRF Analyzers | JIEBO Instrument',
    'hero.lede': 'JIEBO Instrument designs and manufactures CCD and PMT optical emission spectrometers, carbon-sulfur analyzers, and custom material-analysis solutions. Trusted by metallurgy and aerospace customers in 40+ countries.',
    'facts.title': 'JIEBO at a glance',
    'facts.founded': 'Founded',
    'facts.headquarters': 'Headquarters',
    'facts.product_lines': 'Product lines',
    'facts.industries': 'Industries served',
    'facts.export_markets': 'Export markets',
    'facts.lead_time': 'Standard lead time',
    'facts.warranty': 'Warranty',
    'section.products': 'Our spectrometers',
    'section.products_lede': 'Five production models across CCD, PMT hybrid, and combustion C/S analysis. Each ships with full calibration, training, and a 12-month warranty.',
    'section.industries': 'Industries we serve',
    'section.why': 'Why customers choose JIEBO',
    'why.quality': 'Built for the line, not the lab brochure',
    'why.quality_body': 'Every spectrometer is calibrated against certified reference materials before shipment. We test for foundry-floor heat, dust, and vibration — not air-conditioned showrooms.',
    'why.lead_time': '15-day standard delivery, customs handled',
    'why.lead_time_body': 'Stock units ship in 15 days. We coordinate export documentation, CE/CB certificates, and door-to-door logistics for Russia, GCC, Latin America, and Africa.',
    'why.support': 'Engineer-level WhatsApp support',
    'why.support_body': 'You talk to spectrometer engineers, not call-center agents. Calibration help, application advice, and warranty service — usually answered within 4 working hours.',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'breadcrumb.home': 'Home',
    'breadcrumb.products': 'Products',
    'breadcrumb.learn': 'Learn',
    'breadcrumb.compare': 'Compare',
    'product.spec_title': 'Specifications',
    'product.applications_title': 'Typical applications',
    'product.faq_title': 'Frequently asked questions',
    'product.related_title': 'Other models in this category',
    'compare.verdict_title': 'When to choose which',
    'compare.choose_when': 'Choose {name} when',
    'compare.view_product': 'View {product}',
    'compare.related_title': 'Comparisons including this model',
    'compare.read': 'Read comparison',
    'whatsapp.prefill_general': 'Hi JIEBO, I found you on spectryeep.com. Could you send me the catalogue and price list?',
    'whatsapp.prefill_product': 'Hi JIEBO, I am interested in the {product}. Could you send me the spec sheet and a quote?',
    'whatsapp.prefill_learn': 'Hi JIEBO, I am reading your article on OES and have a question about my application.',
    'whatsapp.prefill_compare': 'Hi JIEBO, I am comparing {sideA} vs {sideB}. Could you help me pick the right model for my application?',
  },
  ru: {
    'nav.products': 'Продукция',
    'nav.learn': 'База знаний',
    'nav.compare': 'Сравнения',
    'nav.about': 'О компании',
    'nav.contact': 'Контакты',
    'cta.whatsapp': 'Написать в WhatsApp',
    'cta.whatsapp_fab': 'WhatsApp',
    'cta.inquiry': 'Запрос в WhatsApp',
    'cta.request_quote': 'Запросить цену',
    'cta.explore_products': 'Посмотреть продукцию',
    'cta.learn_more': 'Подробнее',
    'hero.eyebrow': 'Производитель ОЭС-спектрометров · Уси, Китай · С 2009 года',
    'hero.h1': 'Оптико-эмиссионные спектрометры для литейных, металлургических производств и лабораторий',
    'home.title': 'ОЭС, C/S и РФА-анализаторы | JIEBO Instrument',
    'hero.lede': 'JIEBO Instrument разрабатывает и производит оптико-эмиссионные спектрометры на ПЗС и ФЭУ, анализаторы углерода и серы, а также индивидуальные решения для анализа материалов. Нам доверяют металлургические и аэрокосмические предприятия в более чем 40 странах.',
    'facts.title': 'JIEBO кратко',
    'facts.founded': 'Год основания',
    'facts.headquarters': 'Штаб-квартира',
    'facts.product_lines': 'Линейки продукции',
    'facts.industries': 'Отрасли',
    'facts.export_markets': 'Экспортные рынки',
    'facts.lead_time': 'Стандартный срок поставки',
    'facts.warranty': 'Гарантия',
    'section.products': 'Наши спектрометры',
    'section.products_lede': 'Пять серийных моделей: ПЗС, гибрид ПЗС+ФЭУ и анализаторы C/S. Каждый прибор поставляется с полной калибровкой, обучением и гарантией 12 месяцев.',
    'section.industries': 'Отрасли применения',
    'section.why': 'Почему выбирают JIEBO',
    'why.quality': 'Создано для цеха, а не для брошюры',
    'why.quality_body': 'Каждый спектрометр калибруется по сертифицированным эталонам перед отгрузкой. Мы испытываем приборы на жару, пыль и вибрацию литейного цеха — а не в выставочном зале с кондиционером.',
    'why.lead_time': 'Стандартная поставка 15 дней, таможня под ключ',
    'why.lead_time_body': 'Складские модели отгружаются за 15 дней. Мы оформляем экспортные документы, сертификаты CE/CB и доставку «от двери до двери» для России, СНГ, Залива, Латинской Америки и Африки.',
    'why.support': 'Поддержка инженеров в WhatsApp',
    'why.support_body': 'Вы общаетесь с инженерами по спектрометрам, а не с операторами колл-центра. Помощь с калибровкой, советы по методике и гарантийный сервис — обычно ответ в течение 4 рабочих часов.',
    'footer.contact': 'Контакты',
    'footer.rights': 'Все права защищены.',
    'breadcrumb.home': 'Главная',
    'breadcrumb.products': 'Продукция',
    'breadcrumb.learn': 'База знаний',
    'breadcrumb.compare': 'Сравнение',
    'product.spec_title': 'Технические характеристики',
    'product.applications_title': 'Типичные применения',
    'product.faq_title': 'Частые вопросы',
    'product.related_title': 'Другие модели в этой категории',
    'compare.verdict_title': 'Когда что выбирать',
    'compare.choose_when': 'Выберите {name}, если',
    'compare.view_product': 'Открыть {product}',
    'compare.related_title': 'Сравнения с этой моделью',
    'compare.read': 'Открыть сравнение',
    'whatsapp.prefill_general': 'Здравствуйте, JIEBO! Нашёл вас на spectryeep.com. Пришлите, пожалуйста, каталог и прайс-лист.',
    'whatsapp.prefill_product': 'Здравствуйте, JIEBO! Меня интересует {product}. Пришлите, пожалуйста, спецификацию и коммерческое предложение.',
    'whatsapp.prefill_learn': 'Здравствуйте, JIEBO! Читаю вашу статью про ОЭС, есть вопрос по моей задаче.',
    'whatsapp.prefill_compare': 'Здравствуйте, JIEBO! Сравниваю {sideA} и {sideB}. Помогите, пожалуйста, выбрать модель под мою задачу.',
  },
  es: {
    'nav.products': 'Productos',
    'nav.learn': 'Aprender',
    'nav.compare': 'Comparativas',
    'nav.about': 'Empresa',
    'nav.contact': 'Contacto',
    'cta.whatsapp': 'Hablar por WhatsApp',
    'cta.whatsapp_fab': 'WhatsApp',
    'cta.inquiry': 'Consultar por WhatsApp',
    'cta.request_quote': 'Solicitar cotización',
    'cta.explore_products': 'Ver productos',
    'cta.learn_more': 'Saber más',
    'hero.eyebrow': 'Fabricante de espectrómetros OES · Wuxi, China · Desde 2009',
    'hero.h1': 'Espectrómetros de emisión óptica para fundiciones, acerías y laboratorios',
    'home.title': 'Espectrómetros OES, C/S y XRF | JIEBO Instrument',
    'hero.lede': 'JIEBO Instrument diseña y fabrica espectrómetros de emisión óptica CCD y PMT, analizadores de carbono y azufre y soluciones a medida para análisis de materiales. Clientes de metalurgia y aeroespacial en más de 40 países confían en nosotros.',
    'facts.title': 'JIEBO en datos',
    'facts.founded': 'Fundada',
    'facts.headquarters': 'Sede',
    'facts.product_lines': 'Líneas de producto',
    'facts.industries': 'Sectores atendidos',
    'facts.export_markets': 'Mercados de exportación',
    'facts.lead_time': 'Plazo estándar',
    'facts.warranty': 'Garantía',
    'section.products': 'Nuestros espectrómetros',
    'section.products_lede': 'Cinco modelos en producción: CCD, híbrido CCD+PMT y analizadores C/S por combustión. Cada equipo se envía con calibración completa, capacitación y 12 meses de garantía.',
    'section.industries': 'Sectores que atendemos',
    'section.why': 'Por qué los clientes eligen JIEBO',
    'why.quality': 'Diseñado para la planta, no para el folleto',
    'why.quality_body': 'Cada espectrómetro se calibra con materiales de referencia certificados antes del envío. Probamos en condiciones reales de fundición — calor, polvo y vibración — no en salas climatizadas.',
    'why.lead_time': 'Entrega estándar de 15 días, aduana incluida',
    'why.lead_time_body': 'Las unidades en stock se envían en 15 días. Gestionamos documentación de exportación, certificados CE/CB y logística puerta a puerta para América Latina, Rusia/CIS, Golfo y África.',
    'why.support': 'Soporte por WhatsApp con ingenieros',
    'why.support_body': 'Habla con ingenieros de espectrometría, no con un call center. Ayuda de calibración, consejos de aplicación y servicio de garantía — respuesta habitual en menos de 4 horas hábiles.',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'breadcrumb.home': 'Inicio',
    'breadcrumb.products': 'Productos',
    'breadcrumb.learn': 'Aprender',
    'breadcrumb.compare': 'Comparativas',
    'product.spec_title': 'Especificaciones',
    'product.applications_title': 'Aplicaciones típicas',
    'product.faq_title': 'Preguntas frecuentes',
    'product.related_title': 'Otros modelos de esta categoría',
    'compare.verdict_title': 'Cuándo elegir cada uno',
    'compare.choose_when': 'Elija {name} si',
    'compare.view_product': 'Ver {product}',
    'compare.related_title': 'Comparativas que incluyen este modelo',
    'compare.read': 'Ver comparativa',
    'whatsapp.prefill_general': 'Hola JIEBO, los encontré en spectryeep.com. ¿Pueden enviarme el catálogo y lista de precios?',
    'whatsapp.prefill_product': 'Hola JIEBO, me interesa el {product}. ¿Pueden enviarme la ficha técnica y una cotización?',
    'whatsapp.prefill_learn': 'Hola JIEBO, estoy leyendo su artículo sobre OES y tengo una consulta sobre mi aplicación.',
    'whatsapp.prefill_compare': 'Hola JIEBO, estoy comparando {sideA} y {sideB}. ¿Pueden ayudarme a elegir el modelo adecuado para mi aplicación?',
  },
  ar: {
    'nav.products': 'المنتجات',
    'nav.learn': 'المعرفة',
    'nav.compare': 'مقارنات',
    'nav.about': 'عن الشركة',
    'nav.contact': 'تواصل',
    'cta.whatsapp': 'محادثة عبر واتساب',
    'cta.whatsapp_fab': 'واتساب',
    'cta.inquiry': 'استفسار عبر واتساب',
    'cta.request_quote': 'طلب عرض سعر',
    'cta.explore_products': 'استعرض المنتجات',
    'cta.learn_more': 'المزيد',
    'hero.eyebrow': 'مصنّع أجهزة طيف الانبعاث الضوئي · ووشي، الصين · منذ 2009',
    'hero.h1': 'أجهزة طيف الانبعاث الضوئي لمسابك المعادن ومعامل الصلب والمختبرات',
    'home.title': 'أجهزة OES وC/S وXRF | JIEBO Instrument',
    'hero.lede': 'تصمّم JIEBO Instrument وتُصنّع أجهزة طيف الانبعاث الضوئي بتقنيتي CCD و PMT، إضافة إلى محلّلات الكربون والكبريت وحلول مخصّصة لتحليل المواد. تعتمد علينا شركات معدنية وصناعات طيران في أكثر من 40 دولة.',
    'facts.title': 'JIEBO باختصار',
    'facts.founded': 'سنة التأسيس',
    'facts.headquarters': 'المقر الرئيسي',
    'facts.product_lines': 'خطوط الإنتاج',
    'facts.industries': 'الصناعات المستهدفة',
    'facts.export_markets': 'أسواق التصدير',
    'facts.lead_time': 'مدّة التسليم القياسية',
    'facts.warranty': 'الضمان',
    'section.products': 'أجهزتنا',
    'section.products_lede': 'خمس موديلات إنتاجية بتقنيات CCD وهجين CCD+PMT ومحلّلات C/S بالاحتراق. يُسلّم كل جهاز بمعايرة كاملة وتدريب وضمان 12 شهراً.',
    'section.industries': 'القطاعات التي نخدمها',
    'section.why': 'لماذا يختار العملاء JIEBO',
    'why.quality': 'مصمَّم لخط الإنتاج، لا للكتيّب',
    'why.quality_body': 'تُعايَر كل وحدة بمواد مرجعية معتمدة قبل الشحن. نختبر في ظروف المسبك الفعلية: حرارة وغبار واهتزاز — لا في صالات عرض مكيّفة.',
    'why.lead_time': 'تسليم قياسي خلال 15 يوماً مع تخليص جمركي',
    'why.lead_time_body': 'تُشحَن الوحدات الجاهزة خلال 15 يوماً. نتولّى مستندات التصدير وشهادات CE/CB والشحن من الباب إلى الباب لدول الخليج وشمال أفريقيا وأمريكا اللاتينية وروسيا.',
    'why.support': 'دعم فني عبر واتساب من المهندسين مباشرة',
    'why.support_body': 'تتحدّث مع مهندسي أجهزة طيف، لا مع موظفي مركز اتصال. مساعدة في المعايرة ونصائح التطبيق وخدمة الضمان — عادةً ردّ خلال 4 ساعات عمل.',
    'footer.contact': 'تواصل',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'breadcrumb.home': 'الرئيسية',
    'breadcrumb.products': 'المنتجات',
    'breadcrumb.learn': 'المعرفة',
    'breadcrumb.compare': 'مقارنات',
    'product.spec_title': 'المواصفات',
    'product.applications_title': 'تطبيقات نموذجية',
    'product.faq_title': 'أسئلة شائعة',
    'product.related_title': 'موديلات أخرى من نفس الفئة',
    'compare.verdict_title': 'متى تختار أيّاً منهما',
    'compare.choose_when': 'اختر {name} إذا',
    'compare.view_product': 'عرض {product}',
    'compare.related_title': 'مقارنات تتضمّن هذا الموديل',
    'compare.read': 'افتح المقارنة',
    'whatsapp.prefill_general': 'مرحباً JIEBO، وجدتكم عبر spectryeep.com. هل يمكنكم إرسال الكتالوج وقائمة الأسعار؟',
    'whatsapp.prefill_product': 'مرحباً JIEBO، أنا مهتم بجهاز {product}. هل يمكنكم إرسال ورقة المواصفات وعرض سعر؟',
    'whatsapp.prefill_learn': 'مرحباً JIEBO، أقرأ مقالكم عن أجهزة OES ولديّ استفسار يخصّ تطبيقي.',
    'whatsapp.prefill_compare': 'مرحباً JIEBO، أقارن بين {sideA} و {sideB}. هل يمكنكم مساعدتي في اختيار الموديل المناسب لتطبيقي؟',
  },
};
