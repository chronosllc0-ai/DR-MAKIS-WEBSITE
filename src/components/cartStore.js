const STORAGE_KEY = 'dr-makis-cart-v1'

function safeParse(value) {
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function sanitizeItem(item) {
  if (!item || typeof item !== 'object') return null
  const id = String(item.id || '').trim()
  const type = item.type === 'product' ? 'product' : 'protocol'
  const title = String(item.title || '').trim()
  const price = Number(item.price)
  const quantity = Number(item.quantity)

  if (!id || !title || Number.isNaN(price) || price < 0 || Number.isNaN(quantity) || quantity < 1) {
    return null
  }

  return {
    id,
    type,
    title,
    price: Number(price.toFixed(2)),
    quantity: Math.floor(quantity),
    image: item.image ? String(item.image) : '/placeholders/card-placeholder.svg',
  }
}

export function getCart() {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  const parsed = safeParse(raw)
  return parsed.map(sanitizeItem).filter(Boolean)
}

export function saveCart(cart) {
  const sanitized = Array.isArray(cart) ? cart.map(sanitizeItem).filter(Boolean) : []
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized))
  return sanitized
}

export function addToCart(item) {
  const nextItem = sanitizeItem(item)
  if (!nextItem) return getCart()

  const cart = getCart()
  const index = cart.findIndex((cartItem) => cartItem.id === nextItem.id && cartItem.type === nextItem.type)

  if (index >= 0) {
    cart[index] = {
      ...cart[index],
      quantity: cart[index].quantity + nextItem.quantity,
    }
  } else {
    cart.push(nextItem)
  }

  return saveCart(cart)
}

export function updateQuantity(itemId, itemType, nextQuantity) {
  const normalizedQty = Number(nextQuantity)
  const cart = getCart()
  const index = cart.findIndex((item) => item.id === itemId && item.type === itemType)
  if (index < 0) return cart

  if (Number.isNaN(normalizedQty) || normalizedQty <= 0) {
    cart.splice(index, 1)
  } else {
    cart[index] = {
      ...cart[index],
      quantity: Math.floor(normalizedQty),
    }
  }

  return saveCart(cart)
}

export function removeFromCart(itemId, itemType) {
  return saveCart(getCart().filter((item) => !(item.id === itemId && item.type === itemType)))
}

export function clearCart() {
  window.localStorage.removeItem(STORAGE_KEY)
  return []
}

export function getCartCount(cart = getCart()) {
  return cart.reduce((sum, item) => sum + item.quantity, 0)
}

export function getSubtotal(cart = getCart()) {
  return Number(cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2))
}

export function getTotals(cart = getCart()) {
  const subtotal = getSubtotal(cart)
  const shipping = 0
  const total = subtotal + shipping
  return {
    subtotal,
    shipping,
    total,
  }
}

export function formatMoney(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value) || 0)
}

export function createProtocolCartItem(program) {
  return {
    id: program.id,
    type: 'protocol',
    title: `${program.title} - ${program.subtitle}`,
    price: Number(program.price),
    quantity: 1,
    image: program.image,
  }
}

export function createProductCartItem(product) {
  return {
    id: product.id,
    type: 'product',
    title: product.name,
    price: Number(product.price),
    quantity: 1,
    image: product.image,
  }
}

export function buildCheckoutPayload(customer, cart = getCart()) {
  const totals = getTotals(cart)

  return {
    customer: {
      fullName: customer.fullName || '',
      email: customer.email || '',
      phone: customer.phone || '',
      shippingAddress: customer.shippingAddress || '',
    },
    cart: cart.map((item) => ({
      id: item.id,
      type: item.type,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    })),
    totals,
    meta: {
      source: 'dr-makis-web',
      submittedAt: new Date().toISOString(),
    },
  }
}
