// Tiny i18n layer (no dependency). English is the only enabled language for now.
// To add Spanish or French later: create src/i18n/es.js / fr.js with the same
// keys as en.js, import them below and flip `enabled` to true.
import { ref, computed } from 'vue'
import en from './en.js'
import es from './es.js'

export const LOCALES = [
  { code: 'en', label: 'English', enabled: true, messages: en },
  { code: 'es', label: 'Español', enabled: true, messages: es },
  { code: 'fr', label: 'Français', enabled: false, messages: null },
]

const STORAGE_KEY = 'vr-locale'
const enabled = LOCALES.filter((l) => l.enabled)

function initialLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && enabled.some((l) => l.code === saved)) return saved
  } catch {}
  return 'en' // default language is English
}

const locale = ref(initialLocale())
try { document.documentElement.lang = locale.value } catch {}

function lookup(messages, key) {
  return key.split('.').reduce((o, k) => (o == null ? o : o[k]), messages)
}

export function useI18n() {
  const messages = computed(() => LOCALES.find((l) => l.code === locale.value)?.messages || en)
  // t: string, tm: raw value (arrays / objects such as lists of cards)
  const tm = (key) => {
    const v = lookup(messages.value, key)
    return v === undefined ? lookup(en, key) ?? key : v
  }
  const t = (key) => String(tm(key))
  const setLocale = (code) => {
    if (!enabled.some((l) => l.code === code)) return
    locale.value = code
    try { localStorage.setItem(STORAGE_KEY, code) } catch {}
    document.documentElement.lang = code
  }
  return { t, tm, locale, setLocale, locales: enabled, allLocales: LOCALES, hasChoice: enabled.length > 1 }
}
