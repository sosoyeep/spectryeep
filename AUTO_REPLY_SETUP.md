# Automated pre-sales / after-sales reply system

This turns incoming customer messages from **multiple platforms** into one
pipeline that **replies instantly** and **drafts a tailored answer** for the
sales team.

## How it works

```
                  ┌─────────────────────────────────────────────┐
Website RFQ form ─┤                                             │
WhatsApp         ─┤   Auto-reply engine (functions/lib)         │
Inbound email    ─┤   1. normalize message                      │
Alibaba / social ─┘   2. classify intent (pre-sale / after-sale)│
   (forwarded         3. send instant multilingual TEMPLATE     │──▶ customer
    as email)         4. generate Claude AI DRAFT               │──▶ sales (for approval)
                      5. log to Google Sheets CRM               │──▶ CRM
                  └─────────────────────────────────────────────┘
```

- **Template + AI hybrid**: every customer gets an instant, professional
  template reply (EN/RU/ES/AR). In parallel, Claude writes a tailored draft
  answer — grounded in the product catalogue — that lands in the sales inbox for
  a human to review and send. No spec/price is ever invented.
- **Intent routing**: messages mentioning repair / warranty / calibration /
  fault (in any of the 4 languages) are treated as **after-sales**; everything
  else is **pre-sales**.
- **Fail-safe**: every external call is best-effort. If Claude, WhatsApp, or
  email is down or unconfigured, the rest of the pipeline still runs.

### Code map

| File | Role |
|---|---|
| `functions/lib/site.js` | Brand facts + product catalogue (mirror of `src/consts.ts`) |
| `functions/lib/replies.js` | Intent classifier + multilingual templates |
| `functions/lib/ai.js` | Claude API draft generator |
| `functions/lib/channels.js` | Email (Resend), WhatsApp Cloud API, CRM, sales notify |
| `functions/lib/engine.js` | Orchestrator (`runAutoReply`) |
| `functions/api/inquiry.js` | Website RFQ form → confirmation reply + AI draft |
| `functions/api/webhooks/whatsapp.js` | WhatsApp Cloud API webhook |
| `functions/api/webhooks/email.js` | Inbound email / forwarded-platform webhook |

## Environment variables (Cloudflare Pages)

```text
# Customer-facing email replies (Resend — https://resend.com)
RESEND_API_KEY=re_xxx
AUTOREPLY_FROM=JIEBO Instrument <sales@spectryeep.com>
NOTIFY_EMAIL=sophia@wxjiebo.cc

# AI draft (optional; without it customers still get the template reply)
CLAUDE_API_KEY=sk-ant-xxx
CLAUDE_MODEL=claude-haiku-4-5-20251001

# WhatsApp Business Cloud API
WHATSAPP_VERIFY_TOKEN=any-long-random-string
WHATSAPP_TOKEN=EAAB...        # permanent system-user token
WHATSAPP_PHONE_ID=1234567890  # phone number ID from Meta

# Inbound email webhook secret (optional)
INBOUND_EMAIL_TOKEN=any-long-random-string
```

Re-use the existing `CRM_WEBHOOK_URL` / `CRM_WEBHOOK_TOKEN` from
`GOOGLE_WORKSPACE_CRM_SETUP.md` for CRM logging.

---

## Platform 1 — Website RFQ form (already live)

No setup beyond the variables above. Once `RESEND_API_KEY` is set, every form
submission triggers a confirmation email to the buyer in their language, and the
sales inbox receives the AI draft. (The lead row still comes from the existing
CRM forwarder, so no duplicate row is created.)

> **Sender domain**: add `spectryeep.com` to Resend and verify its DNS
> (SPF/DKIM) so confirmation emails don't land in spam.

## Platform 2 — WhatsApp

1. Create a Meta app at <https://developers.facebook.com> → add **WhatsApp**.
2. Note the **Phone number ID** → `WHATSAPP_PHONE_ID`, and create a permanent
   **System User token** with `whatsapp_business_messaging` → `WHATSAPP_TOKEN`.
3. In **WhatsApp → Configuration → Webhook**:
   - Callback URL: `https://spectryeep.com/api/webhooks/whatsapp`
   - Verify token: the value you set for `WHATSAPP_VERIFY_TOKEN`
   - Subscribe to the **messages** field.
4. Click *Verify and Save* — Meta calls the `GET` handler and expects the
   challenge echoed back (handled automatically).

> WhatsApp's 24-hour rule: free-form replies are allowed within 24h of the
> customer's last message — which always covers an auto-reply, so no paid
> template message is required.

## Platform 3 — Inbound email

Point a parsed-email provider at `https://spectryeep.com/api/webhooks/email`
(append `?token=INBOUND_EMAIL_TOKEN` if you set the secret). Options:

- **Cloudflare Email Routing** → Email Worker that `fetch()`es the webhook with
  `{ from, subject, text }` JSON.
- **Postmark inbound** / **SendGrid Inbound Parse** / **Mailgun routes** — set
  the webhook URL; the handler accepts their common field names.

## Platform 4 — Alibaba / Facebook / Instagram / other

These platforms don't all expose an open reply API, so route them through email:

1. In the platform's notification settings, forward new-message alerts to a
   dedicated address (e.g. `leads@spectryeep.com`).
2. Have that address feed the **inbound email webhook** (Platform 3).

The reply then goes to the forwarding address; sales relays it inside the
platform. As each platform's API access is approved, add a dedicated webhook
under `functions/api/webhooks/` following the WhatsApp handler pattern.

---

## Test checklist

1. **Website**: submit a test RFQ → buyer receives a confirmation email in the
   page's language; sales inbox gets the `[SALES] website …` draft email.
2. **After-sales routing**: submit a message containing "calibration" or
   "repair" → reply uses the service template; sales email subject is `[SERVICE]`.
3. **WhatsApp**: send "price for T5 spectrometer" to the business number → an
   instant text reply arrives; sales inbox gets the draft.
4. **Email**: POST a sample JSON to `/api/webhooks/email` → sender receives a
   `Re:` reply.
5. **AI off**: unset `CLAUDE_API_KEY` → customers still get the template reply;
   the sales email shows "AI draft unavailable — reply manually".

## Customizing replies

- Edit templates and the response-time promise in `functions/lib/replies.js`.
- Add after-sales keywords (any language) to `AFTERSALE_PATTERNS` there.
- Tune the AI tone / guardrails in the system prompt in `functions/lib/ai.js`.
- Keep `functions/lib/site.js` in sync with `src/consts.ts` (contacts, products).
