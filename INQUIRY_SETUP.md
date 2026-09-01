# Inquiry form setup

The site has formal inquiry forms on product pages and the contact page. By default, forms submit to the Cloudflare Pages Function:

```text
/api/inquiry
```

The function validates spam controls before forwarding qualified leads.

## Cloudflare Pages deployment

Use these Cloudflare Pages settings:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Functions directory: functions
```

Cloudflare Pages will deploy automatically when the connected GitHub branch receives a new commit.

## Required environment variables

Set these in Cloudflare Pages:

```text
PUBLIC_INQUIRY_FORM_ACTION=/api/inquiry
PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-site-key
TURNSTILE_SITE_KEY=your-turnstile-site-key
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
TURNSTILE_SECRET_KEY=your-turnstile-secret-key
MIN_SUBMIT_SECONDS=4
INQUIRY_RATE_LIMIT_MAX=5
```

Add at least one forwarding target:

```text
FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
CRM_WEBHOOK_URL=
CRM_WEBHOOK_TOKEN=
EMAIL_WEBHOOK_URL=
EMAIL_WEBHOOK_TOKEN=
```

The visitor is redirected to `/thank-you/` **only when at least one channel confirms
delivery**. If every configured channel fails the form answers `502` with a page offering
WhatsApp and email; if nothing is configured at all it answers `503`. The form never
reports success for a lead it did not manage to hand off.

Delivery is judged on positive evidence, not on the absence of an error status. This
matters because several of these services answer `HTTP 200` while dropping the message:

- **formsubmit.co** answers `200` with *"This form needs Activation"* until you click the
  activation link it emails to the target inbox, and `200` with *"Unable to submit form"*
  when the post arrives without a browser origin. **A new `FALLBACK_FORM_ACTION` address
  delivers nothing until it is activated.**
- **Google Apps Script** `/exec` answers `302` on success and can answer `200` with an
  HTML error page when the script itself throws.

Set `ENABLE_SERVER_SIDE_FALLBACK=true` to enable the formsubmit.co fallback at all; it is
off unless that variable is exactly `true`.

For Google Workspace CRM, see `GOOGLE_WORKSPACE_CRM_SETUP.md` and use:

```text
PUBLIC_INQUIRY_FORM_ACTION=/api/inquiry
CRM_WEBHOOK_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec?token=YOUR_WEBHOOK_TOKEN
FALLBACK_FORM_ACTION=https://formsubmit.co/info@spectryeep.com
```

## Cloudflare Turnstile

Create a Turnstile widget in Cloudflare and add these hostnames:

```text
spectryeep.com
www.spectryeep.com
```

Then copy:

- Site key → `PUBLIC_TURNSTILE_SITE_KEY`
- Secret key → `TURNSTILE_SECRET_KEY`

The CSP in `public/_headers` already allows Turnstile scripts and frames from `https://challenges.cloudflare.com`.

## Anti-spam layers

- Hidden honeypot field: `company_website`.
- Minimum submit time: `MIN_SUBMIT_SECONDS`, default `4`.
- Cloudflare Turnstile server-side verification when keys are configured.
- Required B2B fields and email validation.
- Keyword and excessive-link blocking.
- In-memory IP rate limit per Cloudflare isolate: `INQUIRY_RATE_LIMIT_MAX`, default `5` per 10 minutes.
- Failure fallback displays WhatsApp and email details.

For heavy spam, add a Cloudflare WAF custom rule:

```text
URI Path equals /api/inquiry
AND Request Method equals POST
```

Suggested actions:

- Managed Challenge for suspicious countries or empty user agents.
- Rate limit repeated POST requests to `/api/inquiry`.
- Block obvious bot ASNs if they dominate the logs.

## Production test checklist

After deployment:

1. Submit a real test inquiry from `/contact/`.
2. Confirm redirect to `/thank-you/`.
3. Confirm sales email, CRM, or webhook receives the lead.
4. Confirm a spam test with the honeypot field is blocked.
5. Confirm GA4 receives `generate_lead`.

## Lead tracking events

When `PUBLIC_GA_MEASUREMENT_ID` is set, the site sends:

- `page_view` for normal page traffic.
- `whatsapp_click` when a visitor clicks WhatsApp CTAs.
- `generate_lead` when a formal inquiry form is submitted.

Use these events with Google Search Console queries and the lead forwarding payload to calculate the funnel:

```text
Search impressions -> organic clicks -> WhatsApp clicks / form leads -> qualified leads -> quotes -> paid orders
```
