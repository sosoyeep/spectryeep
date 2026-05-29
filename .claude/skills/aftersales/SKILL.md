---
name: aftersales
description: >-
  售后服务 workflow for JIEBO Instrument (spectryeep.com). Use when handling a
  support / service request from an EXISTING customer about a delivered
  instrument — installation, calibration & standardization, consumables (argon,
  electrodes, crucibles, standards), software/license, troubleshooting, or
  RMA/repair. Identifies the instrument by SKU, classifies and triages the
  issue, sets an SLA, drafts a response in the customer's language (en/ru/es/ar),
  defines the escalation path, and produces a service-ticket record. Triggers
  on: "售后", "客户报修", "service request", "RMA", "calibration help",
  "instrument not working", "耗材订购".
---

# 售后服务 Workflow (After-sales / Service)

Turn one support request into: instrument identification, a triaged ticket with
SLA, a drafted response, an escalation path, and a logged service record. Work
the steps in order. Safety and data integrity first — never guess at high-voltage
or argon procedures; defer to the engineering team when unsure.

## Reference data

- Products & SKUs: `src/consts.ts` → `PRODUCTS` (match the customer's unit).
- Contacts / escalation: `src/consts.ts` → `SITE` (email `sophia@wxjiebo.cc`,
  WhatsApp `8618118915721`, phone `+86-510-83211967`, factory in Xuancheng).
- Locales: `en`, `ru`, `es`, `ar` (RTL). Respond in the customer's language.

## Step 1 — Identify customer & instrument

Capture: customer name, company, country, contact, **instrument model + SKU**,
serial number (ask if missing), purchase/commission date, and whether under
warranty. If the model is unclear, map symptoms to a likely unit and confirm
before giving model-specific advice.

## Step 2 — Classify the request

Pick one primary category:
- **Installation / commissioning** — siting, power, argon hookup, first light.
- **Calibration & standardization** — drift, recalibration, type standards,
  global/standardization sample runs.
- **Consumables / spares** — argon (purity 99.999%), electrodes, crucibles,
  combustion accessories, standard samples, optical maintenance kits.
- **Software / license** — analysis software, curves, activation, data export.
- **Troubleshooting** — bad readings, no spark, vacuum/seal, detector, IR cell.
- **RMA / repair** — hardware fault needing return or on-site engineer.

## Step 3 — Triage & SLA

Severity:
- **P1 Critical** — instrument down, blocking production QC → respond same day,
  engineer contact within 24h.
- **P2 Major** — degraded/inaccurate results, workaround exists → 1–2 business
  days.
- **P3 Minor** — questions, consumables, how-to → 3 business days.

Note warranty status and whether the fix is remote-resolvable vs. needs parts
or an on-site visit.

## Step 4 — Draft the response (customer's locale)

Structure:
1. Acknowledge + restate the issue and instrument (model/SKU/serial).
2. For troubleshooting: ordered, safe diagnostic steps the customer can run
   (check argon pressure/purity → seal/vacuum → standardization → sample prep),
   asking for a photo or the error/spectrum where useful.
3. For consumables: confirm exact part for their SKU + how to order.
4. For RMA: the return/on-site process, what info engineering needs, and
   expected timeline.
5. Clear next action + who owns it. Signature with `SITE` contacts.

Safety: do not instruct customers to bypass interlocks, open high-voltage
sections, or alter argon/vacuum hardware without an engineer. Escalate instead.

For `ar`, write RTL-correct Arabic. If unsure of ru/es/ar wording, draft in
English + flagged translation for native review.

## Step 5 — Escalate / route

- P1 or hardware fault → flag for engineering + Sophia (`sophia@wxjiebo.cc`),
  offer WhatsApp/phone for live diagnosis.
- Consumables/spares → route to parts/logistics with SKU + quantity + country.
- Reseller-supported region → loop in the regional partner.

## Step 6 — Service ticket record

Emit a ticket row:
`Opened At, Ticket ID, Status, Owner, Severity, Customer, Company, Country,
Contact, Model, SKU, Serial, Warranty, Category, Issue Summary, Action Taken,
Next Action, Due Date, Locale, Notes`.

## Output format

```
TICKET:   <new id or existing> — <category> / <P1|P2|P3>
INSTRUMENT: <Model (SKU)> serial <…|unknown> — warranty <yes|no|unknown>
RESPONSE: <ready-to-send message in the customer's locale>
ESCALATION: <who/where + why, or "none — resolvable remotely">
RECORD:   <tab/comma-separated values for the service log>
NEXT:     <action + owner + due date>
```

Stop after the output block. Drafts are for the service owner to review and
send — do not contact customers or trigger RMAs yourself.
