import { getLocales } from 'expo-localization';
import { I18n, I18nOptions } from 'i18n-js';

import { en, ru } from './translations';

const setLanguage = () => {
  const [locales] = getLocales();

  const translations = { en, ru };
  const options: Partial<I18nOptions> = {
    defaultLocale: 'en',
    locale: locales.languageCode,
    enableFallback: true,
    missingBehavior: 'error'
  };

  return new I18n(translations, options);
};

const i18n = setLanguage();

export default i18n;
