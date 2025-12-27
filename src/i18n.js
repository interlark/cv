import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en.json'
import translationRU from './locales/ru.json'

const getUserLanguage = () => {
  const storedUserLang = localStorage.getItem('user-lang')
  const navigatorUserLang = navigator.language || navigator.userLanguage
  return storedUserLang
    ? storedUserLang
    : navigatorUserLang.startsWith('ru')
    ? 'ru'
    : 'en'
}

i18n
  .use(initReactI18next)
  .init({
  resources: {
    ru: { translation: translationRU },
    en: { translation: translationEN }
  },
  lng: getUserLanguage(),
  interpolation: {
    escapeValue: false
  }
})

const applyLangToDocument = (lang) => {
  document.title = `${i18n.t('profile_name')} - ${i18n.t('title')}`
  document.documentElement.setAttribute('lang', lang)
}

applyLangToDocument(i18n.language)
i18n.on('languageChanged', applyLangToDocument)

export default i18n
