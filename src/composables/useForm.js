import { ref } from 'vue'

// Sends form messages to Valen's inbox through Web3Forms (free, no server needed).
// Put the access key in a .env file:  VITE_WEB3FORMS_KEY=your-key
// Until the key exists, the form falls back to opening the visitor's email app.
const ENDPOINT = 'https://api.web3forms.com/submit'
const KEY = import.meta.env.VITE_WEB3FORMS_KEY
const EMAIL = 'vrotondaro@hotmail.com'

export function useForm(subject) {
  const status = ref('idle') // idle | sending | sent | error
  async function submit(fields) {
    status.value = 'sending'
    if (!KEY) {
      const body = Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      status.value = 'idle'
      return
    }
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: KEY, subject, from_name: 'valenrotondaro.com', ...fields }),
      })
      const data = await res.json()
      status.value = data.success ? 'sent' : 'error'
    } catch {
      status.value = 'error'
    }
  }
  return { status, submit }
}
