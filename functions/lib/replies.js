// Intent classification + multilingual auto-reply templates.
import { SITE, whatsappLink } from './site.js';

const SUPPORTED_LOCALES = ['en', 'ru', 'es', 'ar'];

// After-sales / service intent keywords (case-insensitive, multilingual).
const AFTERSALE_PATTERNS = [
  /\b(repair|broken|not working|error|fault|fail|defect|warranty|spare part|replace|calibrat|maintenance|service|complain|refund|return|rma)\b/i,
  /(ремонт|неисправ|гаранти|ошибк|обслуживан|калибров|запчаст|жалоб|возврат)/i,
  /(reparaci|garant[ií]a|aver[ií]a|no funciona|mantenimiento|calibraci|repuesto|queja|devoluci)/i,
  /(صيانة|عطل|ضمان|إصلاح|معايرة|قطع غيار|شكوى|استرجاع)/i,
];

export function normalizeLocale(input) {
  const value = String(input || '').toLowerCase().slice(0, 2);
  return SUPPORTED_LOCALES.includes(value) ? value : 'en';
}

// Returns 'aftersale' when the message reads like a support/service request,
// otherwise 'presale' (the default for new buyers).
export function classifyIntent(text) {
  const body = String(text || '');
  return AFTERSALE_PATTERNS.some((re) => re.test(body)) ? 'aftersale' : 'presale';
}

const TEMPLATES = {
  presale: {
    en: ({ name, product }) =>
`Hi ${name || 'there'}, thank you for contacting ${SITE.brand}.

We have received your inquiry${product ? ` about the ${product}` : ''}. A spectroscopy engineer will reply with specifications and a quotation within 24 hours (${SITE.businessHours}).

For a faster response you can reach us on WhatsApp: ${whatsappLink()}

Best regards,
${SITE.brand} Sales Team`,
    ru: ({ name, product }) =>
`Здравствуйте, ${name || ''}! Спасибо, что связались с ${SITE.brand}.

Мы получили ваш запрос${product ? ` по ${product}` : ''}. Инженер ответит со спецификациями и коммерческим предложением в течение 24 часов (${SITE.businessHours}).

Для более быстрого ответа пишите в WhatsApp: ${whatsappLink()}

С уважением,
отдел продаж ${SITE.brand}`,
    es: ({ name, product }) =>
`Hola ${name || ''}, gracias por contactar con ${SITE.brand}.

Hemos recibido su consulta${product ? ` sobre el ${product}` : ''}. Un ingeniero le responderá con especificaciones y presupuesto en un plazo de 24 horas (${SITE.businessHours}).

Para una respuesta más rápida, escríbanos por WhatsApp: ${whatsappLink()}

Atentamente,
Equipo de ventas de ${SITE.brand}`,
    ar: ({ name, product }) =>
`مرحبًا ${name || ''}، شكرًا لتواصلك مع ${SITE.brand}.

لقد استلمنا استفسارك${product ? ` حول ${product}` : ''}. سيرد عليك مهندس بالمواصفات وعرض السعر خلال 24 ساعة (${SITE.businessHours}).

للرد الأسرع تواصل معنا عبر واتساب: ${whatsappLink()}

مع التحية،
فريق مبيعات ${SITE.brand}`,
  },
  aftersale: {
    en: ({ name }) =>
`Hi ${name || 'there'}, thank you for reaching ${SITE.brand} after-sales support.

We have logged your service request and our support engineer will respond within 24 hours (${SITE.businessHours}). To speed things up, please have your instrument serial number and a short description (or photo/video) of the issue ready.

For equipment-down emergencies, contact us directly on WhatsApp: ${whatsappLink()} or call ${SITE.phone}.

Best regards,
${SITE.brand} Service Team`,
    ru: ({ name }) =>
`Здравствуйте, ${name || ''}! Спасибо за обращение в поддержку ${SITE.brand}.

Ваша заявка зарегистрирована, инженер поддержки ответит в течение 24 часов (${SITE.businessHours}). Пожалуйста, подготовьте серийный номер прибора и краткое описание (или фото/видео) проблемы.

При аварийной остановке оборудования пишите в WhatsApp: ${whatsappLink()} или звоните ${SITE.phone}.

С уважением,
сервисная служба ${SITE.brand}`,
    es: ({ name }) =>
`Hola ${name || ''}, gracias por contactar con el soporte posventa de ${SITE.brand}.

Hemos registrado su solicitud y un ingeniero de soporte responderá en un plazo de 24 horas (${SITE.businessHours}). Para agilizar, tenga a mano el número de serie del equipo y una breve descripción (o foto/vídeo) del problema.

Para emergencias con el equipo parado, escríbanos por WhatsApp: ${whatsappLink()} o llame al ${SITE.phone}.

Atentamente,
Equipo de servicio de ${SITE.brand}`,
    ar: ({ name }) =>
`مرحبًا ${name || ''}، شكرًا لتواصلك مع دعم ما بعد البيع لدى ${SITE.brand}.

لقد سجّلنا طلب الخدمة الخاص بك وسيرد مهندس الدعم خلال 24 ساعة (${SITE.businessHours}). لتسريع المعالجة، يُرجى تجهيز الرقم التسلسلي للجهاز ووصف موجز (أو صورة/فيديو) للمشكلة.

في حالات توقف الجهاز الطارئة، تواصل معنا عبر واتساب: ${whatsappLink()} أو اتصل على ${SITE.phone}.

مع التحية،
فريق خدمة ${SITE.brand}`,
  },
};

// Builds the instant template reply for a normalized message.
export function buildTemplateReply({ intent, locale, name, product }) {
  const safeIntent = intent === 'aftersale' ? 'aftersale' : 'presale';
  const safeLocale = normalizeLocale(locale);
  const render = TEMPLATES[safeIntent][safeLocale] || TEMPLATES[safeIntent].en;
  return render({ name, product });
}
