import catalan from './ca.json'
import spanish from './es.json'

const LANGUAGES = {
  CATALAN: 'ca',
  SPANISH: 'es'
}

export function getI18n ({currentLocale}: {currentLocale : string | undefined} ) {
  if (currentLocale === LANGUAGES.CATALAN) return catalan
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  return spanish
}