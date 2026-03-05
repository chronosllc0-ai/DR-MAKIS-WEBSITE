export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function createEl(tag, className = '', html = '') {
  const element = document.createElement(tag)
  if (className) element.className = className
  if (html) element.innerHTML = html
  return element
}

export function focusTrap(container, event) {
  if (event.key !== 'Tab') return

  const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',')

  const focusable = Array.from(container.querySelectorAll(focusableSelector)).filter((element) => {
    return element.offsetParent !== null || element.getClientRects().length > 0
  })

  if (!focusable.length) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

export function scrollLock(locked) {
  document.documentElement.classList.toggle('scroll-locked', locked)
  document.body.classList.toggle('scroll-locked', locked)
}

export function delay(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

export function toSlug(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const CONSULTATION_FORMSPREE_ENDPOINT = 'https://formspree.io/f/mblvaalz'

export async function submitFormspree(formElement, extraFields = {}) {
  const formData = new FormData(formElement)
  Object.entries(extraFields).forEach(([field, value]) => {
    formData.append(field, String(value))
  })

  const response = await fetch(CONSULTATION_FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: formData,
  })

  if (response.ok) return

  let message = 'Unable to submit your consultation request right now. Please try again.'
  try {
    const payload = await response.json()
    if (Array.isArray(payload?.errors) && payload.errors.length) {
      message = payload.errors.map((entry) => entry.message).filter(Boolean).join(' ')
    } else if (payload?.error) {
      message = payload.error
    }
  } catch {
    // Keep generic message if response payload cannot be parsed.
  }

  throw new Error(message)
}

export async function submitConsultationRequest(formElement) {
  return submitFormspree(formElement)
}
