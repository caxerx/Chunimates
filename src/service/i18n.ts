import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../locales/en.json';
import zhHant from '../../locales/zh-Hant.json';
import log from './log';

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh-Hant'],
    resources: {
      en: {
        translation: en,
      },
      'zh-Hant': {
        translation: zhHant,
      },
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .then(() => {
    log.info('I18n Init', i18n.resolvedLanguage);
  })
  .catch((e) => {
    log.error('I18n Error', e);
  });

export default i18n;
