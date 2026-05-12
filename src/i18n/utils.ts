import { DEFAULT_LOCALE, LOCALE_META, LOCALES, type Locale } from '../consts';
import { ui, type UIKey } from './ui';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return seg && isLocale(seg) ? seg : DEFAULT_LOCALE;
}

export function t(locale: Locale, key: UIKey, vars?: Record<string, string>): string {
  let s = ui[locale][key] ?? ui[DEFAULT_LOCALE][key] ?? key;
  if (vars) for (const k in vars) s = s.replaceAll(`{${k}}`, vars[k]);
  return s;
}

export function localizedPath(locale: Locale, path: string): string {
  const p = path.startsWith('/') ? path : '/' + path;
  return locale === DEFAULT_LOCALE ? p : `/${locale}${p}`;
}

export function localizedHome(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}

export function localeMeta(locale: Locale) {
  return LOCALE_META[locale];
}

export function whatsappUrl(phone: string, text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const alternates = (path: string) =>
  LOCALES.map((l) => ({
    lang: LOCALE_META[l].htmlLang,
    href: localizedPath(l, path),
  }));
