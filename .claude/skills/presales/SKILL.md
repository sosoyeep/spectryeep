---
name: presales
description: >-
  售前销售 workflow for JIEBO Instrument (spectryeep.com). Use when processing an
  inbound inquiry / RFQ / lead — from the website inquiry form, email, WhatsApp,
  WeChat, or a trade show card. Spam-screens the lead, qualifies it, matches the
  right instrument from the JIEBO product line, drafts a reply in the buyer's
  language (en/ru/es/ar), produces a ready-to-paste CRM row, and sets a
  follow-up cadence. Triggers on: "新询盘", "处理这条 lead", "draft a quote",
  "qualify this RFQ", "回复这个客户".
---

# 售前销售 Workflow (Pre-sales)

Turn one raw inquiry into: a qualification verdict, the right product match, a
ready-to-send reply, and a CRM row + follow-up plan. Work through the steps in
order. If a step's input is missing, note the gap and keep going — never invent
customer facts.

## Reference data (single source of truth)

- Products & SKUs: `src/consts.ts` → `PRODUCTS`. Always cite the exact `name`,
  `sku`, and product page `/products/<slug>/`.
- Industries served: `src/consts.ts` → `INDUSTRIES`.
- Locales: `en` (default), `ru`, `es`, `ar` (RTL). Reply in the lead's locale.
- Contacts: `src/consts.ts` → `SITE` (email `sophia@wxjiebo.cc`, WhatsApp
  `8618118915721`, WeChat/phone `+86 181 1891 5721`).
- CRM fields: see `GOOGLE_WORKSPACE_CRM_SETUP.md`. Lead payload shape lives in
  `functions/api/inquiry.js` → `leadPayload()`.

## Step 1 — Intake & normalize

Collect into a structured record: name, company, country, email, phone,
locale, product/SKU mentioned, application, sample material, target elements,
message, source page, UTM. Map free-text to the canonical product if obvious
(e.g. "carbon sulfur analyzer" → CS995/CS996/CS2020). Flag anything missing.

## Step 2 — Spam & quality screen

Mirror the server rules in `functions/api/inquiry.js`:
- Reject if honeypot logic / spam keywords (`seo`, `backlink`, `crypto`,
  `loan`, `guest post`, `whatsapp marketing`, etc.) or >2 links dominate.
- Be wary of generic "we can boost your ranking" pitches — these are not leads.
- A real B2B lead names a metal/alloy, an element set, or an industry.

Output: `SPAM` (stop, do not reply) or `GENUINE` (continue).

## Step 3 — Qualify (industrial B2B, not generic BANT)

Score the lead on:
- **Application fit** — does their sample material + target elements map to a
  JIEBO instrument? (Fe-base/steel/cast iron → OES; C/S only → C/S analyzer;
  O/N/H → ONH-508; field/scrap sorting → handheld XRF/LIBS.)
- **Volume / role** — foundry QC lab, incoming-inspection, research, reseller?
- **Geography** — note country for argon supply, voltage, shipping, and which
  reseller/region owns it.
- **Urgency** — replacement for a broken unit (hot) vs. budgeting (warm).

Verdict: `HOT` / `WARM` / `COLD` / `RESELLER` with one line of reasoning.

## Step 4 — Match the instrument

Pick the best-fit product(s) from `PRODUCTS`. Use this rough decision guide:
- Benchtop foundry OES, 50+ elements, value → **Exquis T4** (`JIEBO-T4`)
- Full-spectrum CMOS + Hamamatsu, lab workhorse → **Innovate T5** (`JIEBO-T5`)
- Research-grade, <10 ppm accuracy → **Noble T7** (`JIEBO-T7`)
- PMT flagship, max precision → **JB-750** (`JIEBO-JB750`)
- Mobile / on-site large parts → **Surpass F1** (`JIEBO-F1`)
- Carbon & sulfur only → **CS2020 / CS995 / CS996**
- Oxygen / nitrogen / hydrogen → **ONH-508**
- Handheld alloy/scrap ID → **F6000 Pro XRF** or **F7000 Pro LIBS**

Offer a primary pick + one alternative, and link the comparison page if
relevant (`src/data/compares/`). Never quote a price unless given one — point
to a formal quotation instead.

## Step 5 — Draft the reply (in the lead's locale)

Tone: concise, technical, B2B, trustworthy. Structure:
1. Thank + restate their need in one line (shows you read it).
2. Recommended model + why it fits their sample/elements.
3. 2–3 spec bullets that answer their actual question.
4. One clarifying question that advances the deal (sample type? throughput?
   port voltage? quantity?).
5. CTA: formal quotation / spec sheet / WhatsApp for fast follow-up.
6. Signature with `SITE` contacts.

For `ar`, write RTL-friendly Arabic and keep units/numbers correct. If you are
not confident in ru/es/ar phrasing, write English + a clearly-marked draft
translation and flag it for native review (see README translation note).

## Step 6 — CRM row + follow-up

Emit a row matching the CRM headers in `GOOGLE_WORKSPACE_CRM_SETUP.md`:
`Received At, Status, Owner, Next Follow-up, Name, Company, Country, Email,
Phone, Product, Product SKU, Application, Sample Material, Target Elements,
Message, Source Page, Locale, Notes`.

Set follow-up cadence by verdict:
- HOT → follow up in 1 business day.
- WARM → 3 business days.
- COLD → add to nurture, 2 weeks.
- RESELLER → route to partner manager, note region.

## Output format

```
VERDICT: <HOT|WARM|COLD|RESELLER|SPAM> — <reason>
MATCH:   <Product name (SKU)> [+ alternative]
REPLY:   <ready-to-send message in the lead's locale>
CRM ROW: <tab/comma-separated values for the CRM sheet>
NEXT:    <follow-up action + date>
```

Stop after the output block. Do not send anything externally yourself — these
are drafts for the sales owner to review and send.
