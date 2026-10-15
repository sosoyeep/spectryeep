// Per-URL <lastmod> for the sitemap: the latest last-modified date among the
// source files that produce the page (page file, its template and data files).
//
// "Last modified" is the file's last git commit date. On a build server every
// file's mtime is the checkout time, so mtime is only the fallback when git
// history is unavailable. A shallow clone still works; files untouched since
// the clone boundary just get that boundary commit's date.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

const ROOT = dirname(new URL(import.meta.url).pathname);
const PAGES = join(ROOT, 'src/pages');
const LOCALES = ['ru', 'es', 'ar'];

// Site-wide chrome. Every page uses these, so letting them count would give
// every URL the same date whenever the header or a UI string changes.
const SHARED = [
  'src/layouts/',
  'src/i18n/',
  'src/styles/',
  'src/consts.ts',
  'src/components/Header.astro',
  'src/components/Footer.astro',
  'src/components/SchemaOrg.astro',
  'src/components/WhatsAppFab.astro',
  'src/components/Analytics.astro',
];
const isShared = (file) => SHARED.some((s) => relative(ROOT, file).startsWith(s));

// Dynamic routes: the template plus the data file for that slug.
const DYNAMIC = {
  products: (slug) => ['src/components/ProductPage.astro', `src/data/products/${slug}.ts`, `src/data/products/${slug}-product.ts`],
  compare: (slug) => ['src/components/ComparePage.astro', `src/data/compares/${slug}.ts`],
  cases: () => ['src/components/CaseStudyPage.astro', 'src/data/case-studies.ts'],
  applications: () => ['src/components/SeoLandingPage.astro', 'src/data/landing-pages.ts'],
  countries: () => ['src/components/SeoLandingPage.astro', 'src/data/landing-pages.ts'],
};

const dateCache = new Map();
function fileDate(file) {
  if (dateCache.has(file)) return dateCache.get(file);
  let date;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { cwd: ROOT, encoding: 'utf8' }).trim();
    if (out) date = new Date(out);
  } catch {
    // not a git checkout: fall through to mtime
  }
  if (!date || Number.isNaN(date.getTime())) date = statSync(file).mtime;
  dateCache.set(file, date);
  return date;
}

// Relative imports of .astro / .ts files, followed transitively.
function importsOf(file, seen = new Set()) {
  if (seen.has(file) || !existsSync(file) || isShared(file)) return seen;
  seen.add(file);
  const src = readFileSync(file, 'utf8');
  for (const [, spec] of src.matchAll(/import\s[^'"]*?['"](\.{1,2}\/[^'"]+)['"]/g)) {
    const base = resolve(dirname(file), spec);
    for (const candidate of [base, `${base}.ts`, `${base}.astro`]) {
      if (/\.(astro|ts)$/.test(candidate) && existsSync(candidate)) {
        importsOf(candidate, seen);
        break;
      }
    }
  }
  return seen;
}

function sourceFiles(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  const locale = LOCALES.includes(parts[0]) ? parts.shift() : null;
  const route = parts.join('/');
  const dirs = locale ? [join(PAGES, locale), PAGES] : [PAGES];

  for (const dir of dirs) {
    for (const f of [join(dir, `${route}.astro`), join(dir, route, 'index.astro')]) {
      if (route !== '' || f.endsWith('index.astro')) {
        if (existsSync(f)) return [...importsOf(f)];
      }
    }
  }
  const [section, slug] = parts;
  const dynamic = DYNAMIC[section];
  if (dynamic && slug) {
    const page = dirs.map((d) => join(d, section, '[slug].astro')).find(existsSync);
    return [page, ...dynamic(slug).map((f) => join(ROOT, f))].filter((f) => f && existsSync(f));
  }
  return [];
}

export function lastmodFor(url) {
  const files = sourceFiles(new URL(url).pathname);
  if (files.length === 0) return undefined;
  return new Date(Math.max(...files.map((f) => fileDate(f).getTime()))).toISOString();
}
