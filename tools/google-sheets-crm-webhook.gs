/**
 * Google Sheets CRM webhook for spectryeep.com RFQ forms.
 *
 * Setup:
 * 1. Create a Google Sheet named "Spectryeep Leads CRM".
 * 2. Extensions -> Apps Script.
 * 3. Paste this file into Code.gs.
 * 4. Set Script Properties:
 *    - WEBHOOK_TOKEN: a long random secret
 *    - NOTIFY_EMAIL: sophia@wxjiebo.cc
 * 5. Deploy -> New deployment -> Web app:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Cloudflare Pages env:
 *    CRM_WEBHOOK_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec?token=WEBHOOK_TOKEN
 */

const SHEET_NAME = 'Leads';
const HEADERS = [
  'Received At',
  'Status',
  'Owner',
  'Next Follow-up',
  'Name',
  'Company',
  'Country',
  'Email',
  'Phone',
  'Product',
  'Product SKU',
  'Application',
  'Sample Material',
  'Target Elements',
  'Message',
  'Source Page',
  'UTM Source',
  'UTM Medium',
  'UTM Campaign',
  'UTM Term',
  'UTM Content',
  'Locale',
  'IP',
  'Notes',
];

function doPost(e) {
  const props = PropertiesService.getScriptProperties();
  const expectedToken = props.getProperty('WEBHOOK_TOKEN');
  const requestToken = e.parameter.token;

  if (expectedToken && requestToken !== expectedToken) {
    return jsonResponse({ ok: false, error: 'Unauthorized' }, 401);
  }

  const payload = parsePayload(e);
  const sheet = getLeadSheet();
  ensureHeaders(sheet);
  sheet.appendRow(toLeadRow(payload));
  sendLeadEmail(payload, props.getProperty('NOTIFY_EMAIL'));

  return jsonResponse({ ok: true });
}

function parsePayload(e) {
  if (!e.postData || !e.postData.contents) return {};
  const type = e.postData.type || '';
  if (type.indexOf('application/json') !== -1) {
    return JSON.parse(e.postData.contents);
  }
  const data = {};
  e.postData.contents.split('&').forEach((part) => {
    const pair = part.split('=');
    const key = decodeURIComponent((pair[0] || '').replace(/\+/g, ' '));
    const value = decodeURIComponent((pair.slice(1).join('=') || '').replace(/\+/g, ' '));
    data[key] = value;
  });
  return data;
}

function getLeadSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

function ensureHeaders(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeaders = firstRow.some((value) => String(value || '').trim());
  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, HEADERS.length);
  }
}

function toLeadRow(payload) {
  const utm = payload.utm || {};
  return [
    payload.received_at || new Date().toISOString(),
    'New',
    '',
    '',
    payload.name || '',
    payload.company || '',
    payload.country || '',
    payload.email || '',
    payload.phone || '',
    payload.product || '',
    payload.product_sku || '',
    payload.application || '',
    payload.sample_material || '',
    payload.target_elements || '',
    payload.message || '',
    payload.source_page || '',
    utm.source || '',
    utm.medium || '',
    utm.campaign || '',
    utm.term || '',
    utm.content || '',
    payload.locale || '',
    payload.ip || '',
    '',
  ];
}

function sendLeadEmail(payload, notifyEmail) {
  if (!notifyEmail) return;
  const subject = `New Spectryeep RFQ - ${payload.company || payload.name || 'Unknown lead'}`;
  const body = [
    'A new RFQ was added to Google Sheets CRM.',
    '',
    `Name: ${payload.name || ''}`,
    `Company: ${payload.company || ''}`,
    `Country: ${payload.country || ''}`,
    `Email: ${payload.email || ''}`,
    `Phone: ${payload.phone || ''}`,
    `Product: ${payload.product || ''}`,
    `Application: ${payload.application || ''}`,
    `Sample material: ${payload.sample_material || ''}`,
    `Target elements: ${payload.target_elements || ''}`,
    `Source page: ${payload.source_page || ''}`,
    '',
    'Message:',
    payload.message || '',
  ].join('\n');
  MailApp.sendEmail(notifyEmail, subject, body);
}

function jsonResponse(body, status) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
