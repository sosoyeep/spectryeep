# Exposure and Lead Growth Workflow

This workflow is for turning spectryeep.com into a measurable sales channel. The operating target is simple: every week, know which pages and countries create qualified leads, then double down on those topics while fixing leaks in the funnel.

## Metrics Stack

Connect these tools first:

- Google Search Console: search impressions, clicks, CTR, average position, indexed pages.
- GA4: page views, country, traffic source, `whatsapp_click`, `generate_lead`.
- Cloudflare Web Analytics / Pages logs: uptime, 404s, redirects, high-traffic URLs.
- Inquiry forwarding target: Formspree, CRM webhook, email webhook, or a shared sales sheet.
- Sales tracker: one row per lead with status, quote amount, expected close date, and result.

## Daily 15-Minute Dashboard

Check these numbers every workday:

| Metric | Source | Good signal | Action when weak |
|---|---|---|---|
| Organic impressions | Search Console | Up week over week | Publish or improve pages for target queries |
| Organic clicks | Search Console | Up with impressions | Rewrite titles/descriptions for high-impression low-CTR pages |
| WhatsApp clicks | GA4 | 3-8% of product page sessions | Make CTA more specific and move it higher |
| Form leads | GA4 + inquiry target | Stable or rising | Test form delivery and reduce fields if drop-off is high |
| Qualified leads | Sales tracker | 40%+ of leads | Tighten landing-page keywords and countries |
| Quote sent rate | Sales tracker | 80%+ of qualified leads within 24h | Assign owner and use quote templates |
| Close rate | Sales tracker | 10-25% for export B2B | Follow up on day 1, 3, 7, 14 |

## Lead SLA

Speed matters more than polish for first contact.

- 0-15 minutes: reply on WhatsApp/email, confirm application and country.
- 15-60 minutes: ask for matrix, elements, detection limits, sample volume, budget range.
- Same day: recommend one model, one alternative, lead time, and next step.
- Day 1: send formal quote or request missing technical details.
- Day 3: follow up with application proof, similar customer use case, or sample-testing offer.
- Day 7: ask for procurement timeline and decision maker.
- Day 14: final follow-up with a concrete buying reason: stock, shipping, warranty, or calibration support.

## Weekly Growth Loop

Run every Monday.

1. Export Search Console query/page data for the last 7 and 28 days.
2. Mark pages by funnel role: product, comparison, application, country, learn.
3. Find opportunities:
   - High impressions, low CTR: improve title and meta description.
   - Position 8-20: add FAQs, comparison tables, product proof, internal links.
   - Leads but low close rate: fix offer, pricing clarity, response script, or country mismatch.
   - Traffic but no leads: improve CTA and add quote form near first product proof.
4. Pick 5 priority pages for the week.
5. Add one sales action per page: WhatsApp CTA, quote form, product comparison, country proof, or downloadable spec sheet.
6. Review lead quality with sales, not just traffic.

## 30-Day Opening Push

The fastest path to orders is not generic traffic. It is buyer-intent pages plus fast sales handling.

Week 1:
- Verify GA4, Search Console, sitemap, and lead forwarding.
- Build the daily dashboard.
- Make sure every lead creates a sales row.
- Identify top 20 target queries by product and country.

Week 2:
- Improve pages for `OES spectrometer manufacturer`, `carbon sulfur analyzer supplier`, `handheld XRF analyzer`, and country pages.
- Add internal links from learn pages to product and quote sections.
- Start LinkedIn outreach to foundry, steel, scrap, lab, and QA roles.

Week 3:
- Publish or upgrade 5 comparison/application pages.
- Add proof blocks: delivery time, warranty, export countries, calibration, standards.
- Start retargeting or search ads only for pages that already convert organically.

Week 4:
- Cut weak channels.
- Double budget/time on pages and countries producing qualified leads.
- Build case-study style pages from real conversations and sample-testing questions.

## Sales Tracker Columns

Use these exact columns in a sheet or CRM:

```text
received_at
lead_id
source
utm_source
utm_campaign
landing_page
country
company
contact_name
email
whatsapp
product_interest
application
sample_material
target_elements
lead_quality
owner
first_response_at
status
quote_value_usd
quote_sent_at
next_follow_up_at
close_result
lost_reason
notes
```

Status values:

```text
new, contacted, qualified, quoted, negotiation, won, lost, spam
```

## Weekly Targets

Start with these targets, then replace with real baseline after two weeks:

- Search impressions: +20% weekly.
- Organic clicks: +15% weekly.
- WhatsApp clicks + form leads: +20% weekly.
- First response time: under 1 hour.
- Qualified lead rate: at least 40%.
- Quote sent rate: at least 80% of qualified leads.
- Revenue target: quote pipeline should be 3-5x the monthly order target.

## What To Watch First

For JIEBO, prioritize pages that match buying intent:

- Product pages: Exquis T4, Innovate T5, Noble T7, JB-750, Surpass F1, CS2020, ONH-508, F6000 Pro, F7000 Pro.
- Comparison pages: OES vs XRF vs LIBS, CMOS vs PMT, model-vs-model pages.
- Country pages: India, Saudi Arabia, Brazil, Mexico, South Africa.
- Applications: foundry OES, scrap metal XRF, aerospace metal analysis, steel-mill C/S analysis.

Traffic that does not produce qualified leads is not the goal. The goal is qualified conversations, quote pipeline, and closed orders.
