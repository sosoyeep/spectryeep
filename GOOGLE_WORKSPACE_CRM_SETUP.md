# Google Workspace CRM setup

This setup turns website RFQ submissions into Google Sheets CRM rows and email alerts.

## 1. Create the CRM sheet

Create a Google Sheet named:

```text
Spectryeep Leads CRM
```

Keep the first tab empty. The Apps Script will create/fill the `Leads` tab and headers automatically.

Recommended CRM fields:

```text
Received At, Status, Owner, Next Follow-up, Name, Company, Country, Email,
Phone, Product, Product SKU, Application, Sample Material, Target Elements,
Message, Source Page, UTM Source, UTM Medium, UTM Campaign, UTM Term,
UTM Content, Locale, IP, Notes
```

## 2. Add Apps Script webhook

In the Google Sheet:

1. Open `Extensions -> Apps Script`.
2. Paste `tools/google-sheets-crm-webhook.gs` into `Code.gs`.
3. Open `Project Settings -> Script Properties`.
4. Add:

```text
WEBHOOK_TOKEN=use-a-long-random-secret
NOTIFY_EMAIL=sophia@wxjiebo.cc
```

Use a random token such as 32+ letters/numbers.

## 3. Deploy as Web App

In Apps Script:

1. Click `Deploy -> New deployment`.
2. Choose `Web app`.
3. Execute as: `Me`.
4. Who has access: `Anyone`.
5. Deploy and authorize.
6. Copy the Web App URL.

The final CRM URL should look like:

```text
https://script.google.com/macros/s/DEPLOYMENT_ID/exec?token=YOUR_WEBHOOK_TOKEN
```

## 4. Configure Cloudflare Pages

In Cloudflare Pages project settings, add production environment variables:

```text
PUBLIC_INQUIRY_FORM_ACTION=/api/inquiry
CRM_WEBHOOK_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec?token=YOUR_WEBHOOK_TOKEN
FALLBACK_FORM_ACTION=https://formsubmit.co/sophia@wxjiebo.cc
MIN_SUBMIT_SECONDS=4
INQUIRY_RATE_LIMIT_MAX=5
```

Optional anti-spam:

```text
PUBLIC_TURNSTILE_SITE_KEY=your-site-key
TURNSTILE_SECRET_KEY=your-secret-key
```

After saving variables, redeploy the latest production deployment.

## 5. Test

1. Submit a test RFQ from `https://spectryeep.com/contact/`.
2. Confirm a new row appears in `Spectryeep Leads CRM -> Leads`.
3. Confirm `sophia@wxjiebo.cc` receives the Apps Script email alert.
4. Confirm the website redirects to `/thank-you/`.

If Google Sheets is misconfigured or temporarily fails, the Cloudflare Function redirects the same browser POST to FormSubmit as a safety fallback, so the inquiry can still reach `sophia@wxjiebo.cc`.
