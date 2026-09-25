import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../../i18n/LocalizationContext';

interface SEOProps {
  title: string;
  description: string;
}

function upsertMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string, hrefLang?: string) {
  const selector = hrefLang ? `link[rel="${rel}"][hreflang="${hrefLang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    if (hrefLang) element.hreflang = hrefLang;
    document.head.appendChild(element);
  }
  element.href = href;
}

export function SEO({ title, description }: SEOProps) {
  const { language } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | MORVIX`;
    document.title = fullTitle;
    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', language === 'ar' ? 'ar_EG' : 'en_US');

    const origin = window.location.origin;
    const canonical = `${origin}${location.pathname}`;
    upsertLink('canonical', canonical);

    const pathWithoutLocale = location.pathname.replace(/^\/(en|ar)/, '');
    upsertLink('alternate', `${origin}/en${pathWithoutLocale}`, 'en');
    upsertLink('alternate', `${origin}/ar${pathWithoutLocale}`, 'ar');
  }, [title, description, language, location.pathname]);

  return null;
}
