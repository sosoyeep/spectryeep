# 开发信手册（JIEBO / spectryeep.com）

配套：`growth/TARGET_ACCOUNTS.md`（名单）、`growth/target-accounts.csv`（工作表）。
仓库里没有找到旧版开发信，这是重写的成稿；若你手上有旧稿，发我一份我按这套结构再改一遍。

---

## 零、硬规则（先守住这 8 条，话术才有意义）

1. **不超过 120 词**。手机上三屏以内，超了直接删。
2. **第一封不带附件**——附件是进垃圾箱最快的方式。目录/参数表等对方回复后再发。
3. **一封信一个链接**，最多一个（产品页或对比页）。零链接的纯文本首封投递率更高。
4. **一个 CTA，且给台阶下**：「要不要我直接把 X 发过来？」比「有空开个会吗？」回复率高一倍。
5. **主题行小写、像同事写的**，不要 "Best Price!!!"、"Dear Sir/Madam"、"Quotation for you"、全大写、感叹号、💰🔥 一类符号。
6. **写他的工厂，不写我们的公司**。第一句必须包含对方的城市/产品/材质，证明不是群发。
7. **报价带区间**。中国供应商在冷邮件里给价格区间是差异化优势——它替对方省掉「问了半天才知道超预算」的风险，回复率明显更高。（区间可按当期成本自行调整。）
8. **发信节奏**：单个邮箱每天 ≤ 40 封，间隔随机；用独立发信域名（如 `jiebo-instrument.com`）保护主域；SPF + DKIM + DMARC 必须全绿；新域名先养 2 周。

---

## 一、四触点序列（每个客户跑完再判定死活）

| 触点 | 时间 | 角度 | 长度 |
|---|---|---|---|
| 1 | T+0 | 一个具体的生产痛点 + 价格区间 + 低门槛 CTA | ≤120 词 |
| 2 | T+3 | 同类客户的实测结果（案例，不吹） | ≤80 词 |
| 3 | T+7 | 免费寄样检测（最强钩子，几乎无成本） | ≤70 词 |
| 4 | T+14 | 收尾信：给"不"的出口 | ≤50 词 |

> 4 封发完没回，status 改 `lost`，90 天后换角度重进（新机型 / 新案例 / 展会）。中途任意一封有回复，立刻停序列转人工，按 `GROWTH_WORKFLOW.md` 的 SLA：1 小时内回。

---

## 二、英文正文（按客户类型选）

### A 型 · 独立铸造厂（还在送外检）

**主题行（三选一 A/B 测）**
- `carbon & silicon before you tap the heat`
- `{City} foundry — composition in 30 seconds?`
- `question about your cast iron QC`

```text
Hi {First},

{Company} pours {grey iron / ductile iron} castings in {City} — if the composition
report still comes back from an outside lab, you're correcting the next heat
instead of this one.

We manufacture the spectrometers ourselves in Wuxi (since 2009, installations in
40+ countries). A benchtop OES that reads C, S, Si, Mn, P on the shop floor in
about 30 seconds runs USD 15,000–25,000, ships in 15 working days, 12-month
warranty with engineer support on WhatsApp.

Want me to send the spec sheet and a real cast-iron measurement report, or is
a 10-minute call easier?

{Name} · JIEBO Instrument
WhatsApp +86 181 1891 5721 · spectryeep.com
```

### B 型 · 钢厂 / 熔炼厂（有旧光谱仪）

**主题行**
- `spare parts for your {Brand} spectrometer`
- `replacing a {8–15}-year-old OES — what it costs now`
- `re-standardisation drifting?`

```text
Hi {First},

Most labs we talk to in {Country} are running an OES from the 2000s and hitting
the same wall: PMT spares are discontinued, the optical chamber leaks argon, and
re-standardisation drifts within a shift.

We build CMOS-based OES in Wuxi and ship to 40+ countries. Full-spectrum vacuum
chamber, 10 base matrices, C/S/P included — USD 30,000–55,000 depending on the
matrices you need, 15 working days, calibration on CRMs for your grades before
it leaves the factory.

If you send me your grade list and the elements you report, I'll tell you which
of our models actually covers it — including if the answer is "none of them".

{Name} · JIEBO Instrument
WhatsApp +86 181 1891 5721 · spectryeep.com
```

### C 型 · 废钢回收 / PMI 检测

**主题行**
- `sorting mixed loads at the gate`
- `alloy ID in 1 second, no radiation licence`

```text
Hi {First},

At a scrap yard the expensive mistake isn't the analysis — it's the load that
gets paid as 316 and turns out to be 304.

We manufacture handheld analyzers in Wuxi: XRF (Ti–U, 8-hour battery) and a 1.25 kg LIBS gun that reads the light elements XRF can't —
Be, Mg, Al, Si — with no ionizing radiation and no licence in most countries.

Which do you sort more of: stainless grades, aluminium alloys, or mixed steel?
I'll send the model that matches, with a sample report.

{Name} · JIEBO Instrument
WhatsApp +86 181 1891 5721 · spectryeep.com
```

### 触点 2 — 案例（T+3，接在同一邮件线程里回复）

```text
Hi {First}, one more thing since I wrote.

We publish anonymised write-ups of how plants like yours are set up — an Indian
cast-iron foundry running an Innovate T5 for furnace-side chemistry, with a
combustion C/S analyzer kept as the reference method for carbon and sulfur:
spectryeep.com/cases/

Is furnace-side turnaround your bottleneck, or is it the reference numbers you
report to your customer?
```

### 触点 3 — 寄样检测（T+7，回复率最高的一封）

```text
Hi {First},

Simplest way to settle this: send us 2–3 samples of what you actually pour.

We run them in our Wuxi lab on the model we'd recommend and send you back the
raw results with repeatability data — you compare them against your current lab
report. No charge, no obligation.

Want the shipping address?
```

### 触点 4 — 收尾（T+14）

```text
Hi {First}, I'll stop here so I'm not cluttering your inbox.

If in-house analysis isn't on the plan this year, just reply "not now" and I'll
check back in {month}. If it is and I'm talking to the wrong person, point me to
whoever owns the lab and I'll take it from there.
```

---

## 三、俄语 · 西语 · 阿语首封（A 型 / B 型）

> 结构与英文一致：第一句写他的工厂 → 我们是制造商 → 价格区间 + 交期 + 质保 → 一个低门槛问题。

### Русский（A 型）
**Тема:** `углерод и кремний до выпуска плавки` / `{Город} — состав за 30 секунд?`

```text
Здравствуйте, {First}!

{Company} льёт {серый / высокопрочный чугун} в {Город}. Если анализ состава
по-прежнему приходит из сторонней лаборатории, вы корректируете уже следующую
плавку, а не эту.

Мы производим спектрометры сами в Уси (с 2009 года, поставки в 40+ стран).
Настольный ОЭС читает C, S, Si, Mn, P прямо в цехе примерно за 30 секунд:
15 000–25 000 USD, отгрузка 15 рабочих дней, гарантия 12 месяцев, поддержка
инженера в WhatsApp.

Прислать техпаспорт и реальный протокол измерения по чугуну — или удобнее
10-минутный созвон?

{Name} · JIEBO Instrument
WhatsApp +86 181 1891 5721 · spectryeep.com/ru/
```

### Русский（B 型 · замена старого прибора）
**Тема:** `запчасти к вашему спектрометру {Brand}`

```text
Здравствуйте, {First}!

В лабораториях {Country} мы постоянно слышим одно и то же: спектрометр 2000-х
годов, запчасти к ФЭУ сняты с производства, оптическая камера травит аргон,
рестандартизация уходит за смену.

Мы делаем ОЭС на КМОП-детекторах в Уси и поставляем в 40+ стран. Вакуумная
камера, полный спектр, 10 базовых матриц, C/S/P включительно — 30 000–55 000 USD
в зависимости от матриц, 15 рабочих дней, калибровка по ГСО под ваши марки
до отгрузки.

Пришлите список марок и определяемых элементов — скажу, какая модель это
реально закрывает, в том числе если ответ «никакая».

{Name} · JIEBO Instrument
WhatsApp +86 181 1891 5721 · spectryeep.com/ru/
```

### Español（A 型）
**Asunto:** `carbono y silicio antes de colar` / `{Ciudad} — composición en 30 segundos?`

```text
Hola {First}:

{Company} funde piezas de {hierro gris / nodular} en {Ciudad}. Si el análisis de
composición todavía llega de un laboratorio externo, usted corrige la colada
siguiente, no la que tiene en el horno.

Fabricamos los espectrómetros nosotros mismos en Wuxi (desde 2009, instalaciones
en más de 40 países). Un OES de mesa lee C, S, Si, Mn, P en planta en unos
30 segundos: USD 15,000–25,000, embarque en 15 días hábiles, garantía de
12 meses con soporte de ingeniería por WhatsApp.

¿Le envío la ficha técnica y un informe real de medición en hierro fundido, o
prefiere una llamada de 10 minutos?

{Name} · JIEBO Instrument
WhatsApp +86 181 1891 5721 · spectryeep.com/es/
```

### Español（C 型 · chatarra）
**Asunto:** `separar cargas mixtas en la báscula`

```text
Hola {First}:

En un patio de chatarra el error caro no es el análisis: es la carga que se paga
como 316 y resulta ser 304.

Fabricamos analizadores portátiles en Wuxi: XRF (Ti–U, batería de 8 horas) y una pistola LIBS de 1.25 kg que lee los elementos ligeros que el XRF
no ve — Be, Mg, Al, Si — sin radiación ionizante.

¿Qué separa más: inoxidables, aluminios o acero mezclado? Le mando el modelo que
corresponde, con un informe de muestra.

{Name} · JIEBO Instrument
WhatsApp +86 181 1891 5721 · spectryeep.com/es/
```

### العربية（A 型）
**الموضوع:** `الكربون والسيليكون قبل صبّ الشحنة`

```text
السلام عليكم {First}،

مسبك {Company} في {City} يصبّ {حديد رمادي / حديد مطاوع}. إذا كان تقرير التركيب
لا يزال يأتي من مختبر خارجي، فأنت تصحّح الشحنة التالية لا الشحنة الحالية.

نحن نصنّع المطيافات بأنفسنا في ووشي منذ 2009، ولدينا تركيبات في أكثر من 40 دولة.
جهاز OES مكتبي يقرأ C وS وSi وMn وP داخل الورشة خلال 30 ثانية تقريباً:
15,000–25,000 دولار، شحن خلال 15 يوم عمل، ضمان 12 شهراً مع دعم هندسي عبر واتساب.

هل أرسل لك المواصفات وتقرير قياس حقيقي على حديد الزهر، أم تفضّل مكالمة 10 دقائق؟

{Name} · JIEBO Instrument
واتساب ‎+86 181 1891 5721 · spectryeep.com/ar/
```

### العربية（C 型 · الخردة）
**الموضوع:** `فرز الأحمال المختلطة عند البوابة`

```text
السلام عليكم {First}،

في ساحة الخردة الخطأ المكلف ليس التحليل، بل الحمولة التي تُدفع على أنها 316
ثم تتبيّن 304.

نصنع أجهزة محمولة في ووشي: XRF (من Ti إلى U، بطارية 8 ساعات) ومسدّس LIBS بوزن 1.25 كجم يقرأ العناصر الخفيفة التي لا يراها
الـ XRF — البريليوم والمغنيسيوم والألمنيوم والسيليكون — بدون إشعاع مؤيّن.

ما الذي تفرزه أكثر: الفولاذ المقاوم للصدأ أم الألمنيوم أم الفولاذ المختلط؟
سأرسل لك الموديل المناسب مع تقرير عيّنة.

{Name} · JIEBO Instrument
واتساب ‎+86 181 1891 5721 · spectryeep.com/ar/
```

---

## 四、WhatsApp 首触（比邮件快，但更容易被拉黑，只对已确认号码用）

```text
Hello {First}, this is {Name} from JIEBO Instrument in China — we manufacture
OES and carbon-sulfur analyzers. I saw {Company} does {castings/recycling} in
{City}. Do you currently test composition in-house or send it out?
```
规则：不群发、不发图片、不发目录；一次一个问题；对方不回**不追第二条**（改用邮件）。

---

## 五、常见回复的应对

| 对方说 | 不要做 | 要做 |
|---|---|---|
| "Send price list" | 甩全系列报价单 | 先问基体+元素+样品量，再给**一个**推荐机型 + 一个备选。全系列价目表 = 被拿去比价 |
| "We already have a spectrometer" | 攻击对方现有品牌 | 问用了几年、备件还能不能买、标样漂移情况 → 换机线索通常在这里 |
| "Too expensive" | 立刻降价 | 问是与什么比。若与二手/国产低价比，讲质保、备件、装机、校准；价格最多让一次，且要换条件（预付比例/数量/交期） |
| "Send catalogue" | 只发 PDF 就结束 | 发 PDF + 一个具体问题（"哪个基体最关键？"），否则线索会死在这一步 |
| "No budget this year" | 放弃 | 记 `next_action_at` = 下一财年前 6 周，序列停，到期换角度重进 |
| 不回 | 一直发同样的信 | 走完 4 触点 → `lost` → 90 天后换钩子 |

---

## 六、发信前自检清单

- [ ] 主题行不含：Best Price、Quotation、Dear Sir/Madam、!!!、全大写、表情
- [ ] 正文 ≤120 词，无附件，≤1 个链接
- [ ] 第一句含对方城市 / 产品 / 材质（不是含我们公司名）
- [ ] 价格区间、交期、质保三项口径与 about 页 FAQ 一致（15 个工作日 / 12→24 个月 / 4 小时响应）
- [ ] 收件人是**具体的人**，不是 info@
- [ ] SPF / DKIM / DMARC 通过，发信域名不是主域
- [ ] CSV 里已建行，`status=contacted`、`first_touch_at`、`next_action_at` 已填
