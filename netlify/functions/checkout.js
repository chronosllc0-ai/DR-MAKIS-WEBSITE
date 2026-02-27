const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: JSON_HEADERS,
    body: JSON.stringify(body),
  }
}

function sanitizeText(value, maxLength = 4000) {
  return String(value || '')
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, maxLength)
}

function sanitizeCart(cart) {
  if (!Array.isArray(cart)) return []

  return cart
    .map((item) => {
      const id = sanitizeText(item?.id, 120)
      const type = item?.type === 'product' ? 'product' : 'protocol'
      const title = sanitizeText(item?.title, 180)
      const price = Number(item?.price)
      const quantity = Number(item?.quantity)

      if (!id || !title || Number.isNaN(price) || Number.isNaN(quantity) || quantity <= 0 || price < 0) {
        return null
      }

      return {
        id,
        type,
        title,
        price: Number(price.toFixed(2)),
        quantity: Math.floor(quantity),
      }
    })
    .filter(Boolean)
}

function emailLooksValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { ok: false, message: 'Method not allowed' })
  }

  const formId = process.env.FORMSPREE_FORM_ID
  const bearerToken = process.env.FORMSPREE_BEARER_TOKEN
  const siteBaseUrl = sanitizeText(process.env.SITE_BASE_URL || '', 200)

  if (!formId || !bearerToken) {
    return json(500, {
      ok: false,
      message: 'Server is not configured for checkout submissions.',
    })
  }

  let payload
  try {
    payload = JSON.parse(event.body || '{}')
  } catch {
    return json(400, { ok: false, message: 'Invalid JSON payload.' })
  }

  const customer = payload?.customer || {}
  const fullName = sanitizeText(customer.fullName, 160)
  const email = sanitizeText(customer.email, 160)
  const phone = sanitizeText(customer.phone, 80)
  const shippingAddress = sanitizeText(customer.shippingAddress, 260)
  const cart = sanitizeCart(payload?.cart)

  if (!fullName || !email) {
    return json(400, { ok: false, message: 'Full Name and Email are required.' })
  }

  if (!emailLooksValid(email)) {
    return json(400, { ok: false, message: 'A valid email is required.' })
  }

  if (!cart.length) {
    return json(400, { ok: false, message: 'Cart cannot be empty.' })
  }

  const subtotal = Number(payload?.totals?.subtotal || 0)
  const shipping = Number(payload?.totals?.shipping || 0)
  const total = Number(payload?.totals?.total || 0)
  const submittedAt = sanitizeText(payload?.meta?.submittedAt, 60) || new Date().toISOString()

  const formspreePayload = {
    fullName,
    email,
    phone,
    shippingAddress,
    source: 'dr-makis-web',
    siteBaseUrl,
    submittedAt,
    subtotal,
    shipping,
    total,
    orderItems: JSON.stringify(cart),
    message: `New checkout request from ${fullName} (${email}).`,
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(formspreePayload),
    })

    const responseBody = await response.json().catch(() => null)

    if (!response.ok) {
      return json(502, {
        ok: false,
        message: 'Unable to submit order request right now. Please try again shortly.',
      })
    }

    return json(200, {
      ok: true,
      message: 'Order request submitted successfully. We will contact you by email shortly.',
      submissionId: responseBody?.id || null,
    })
  } catch {
    return json(502, {
      ok: false,
      message: 'Unable to submit order request right now. Please try again shortly.',
    })
  }
}
