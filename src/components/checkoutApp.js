import {
  buildCheckoutPayload,
  clearCart,
  formatMoney,
  getCart,
  getCartCount,
  getTotals,
} from './cartStore.js'
import { icon } from './icons.js'
import { escapeHtml } from './utils.js'

function cartSummaryItems(items) {
  if (!items.length) {
    return '<p class="empty-summary">Your cart is currently empty.</p>'
  }

  return items
    .map(
      (item) => `
      <article class="checkout-item-row">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" />
        <div>
          <h4>${escapeHtml(item.title)}</h4>
          <p>Qty: ${item.quantity}</p>
          <p class="checkout-item-price">${formatMoney(item.price)}</p>
        </div>
      </article>
    `
    )
    .join('')
}

function checkoutTemplate(content, cart, statusMessage = '') {
  const totals = getTotals(cart)
  const disabled = cart.length === 0

  return `
    <div class="site-wrap checkout-wrap">
      <header class="site-header full-bleed content-shell">
        <a class="brand" href="/" aria-label="Back to home">
          <img src="${escapeHtml(content.brand.logo)}" alt="Dr. William Makis logo" class="brand-logo" />
          <span class="brand-text">Dr. William <strong>Makis</strong></span>
        </a>
        <div class="header-actions">
          <a class="icon-button" href="/" aria-label="Back to website">${icon('arrowLeft')}</a>
          <a class="icon-button cart-open" href="/" aria-label="Return to cart drawer">
            ${icon('cart')}
            <span class="cart-count">${getCartCount(cart)}</span>
          </a>
        </div>
      </header>

      <main class="checkout-main">
        <section class="section-panel checkout-panel content-shell">
          <h1>Checkout</h1>

          <form class="checkout-form" id="checkout-form" novalidate>
            <article class="form-card">
              <h2>Customer Information</h2>
              <label>
                Full Name *
                <input type="text" name="fullName" placeholder="John Doe" required autocomplete="name" />
              </label>
              <label>
                Email Address *
                <input type="email" name="email" placeholder="john@example.com" required autocomplete="email" />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="+1 234 567 8900" autocomplete="tel" />
              </label>
              <label>
                Shipping Address
                <input type="text" name="shippingAddress" placeholder="123 Main St, City, Country" autocomplete="street-address" />
              </label>
            </article>

            <article class="form-card muted-card">
              <h2>Select Payment Method</h2>
              <div class="payment-empty-state">
                <span class="payment-icon">${icon('cart')}</span>
                <p>${escapeHtml(content.misc.noPaymentMethods)}</p>
              </div>
            </article>

            <article class="form-card">
              <h2>Order Summary</h2>
              <div class="checkout-item-list">
                ${cartSummaryItems(cart)}
              </div>
              <div class="totals-block">
                <div class="summary-row"><span>Subtotal</span><strong>${formatMoney(totals.subtotal)}</strong></div>
                <div class="summary-row"><span>Shipping</span><strong>Free</strong></div>
                <div class="summary-row total"><span>Total</span><strong>${formatMoney(totals.total)}</strong></div>
              </div>

              <button class="btn btn-primary block" type="submit" ${disabled ? 'disabled' : ''}>Place Order</button>
              <p class="footnote">${escapeHtml(content.misc.placeOrderNote)}</p>
              ${statusMessage ? `<p class="form-status">${escapeHtml(statusMessage)}</p>` : ''}
            </article>
          </form>
        </section>
      </main>

      <a class="floating-telegram" href="${escapeHtml(content.contact.telegramUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Open Telegram chat">
        ${icon('telegram')}
        <span class="pulse-dot"></span>
      </a>
      <button class="floating-chat-placeholder" aria-label="Chat placeholder for Smartsupp" type="button">
        ${icon('chat')}
      </button>
    </div>
  `
}

function emailLooksValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function mountCheckoutApp(root, content) {
  let message = ''

  function render(nextMessage = '') {
    message = nextMessage
    const cart = getCart()
    root.innerHTML = checkoutTemplate(content, cart, message)

    const form = root.querySelector('#checkout-form')
    if (!form) return

    form.addEventListener('submit', async (event) => {
      event.preventDefault()
      const currentCart = getCart()
      if (!currentCart.length) {
        render('Your cart is empty. Add products or protocols before placing an order.')
        return
      }

      const formData = new FormData(form)
      const customer = {
        fullName: String(formData.get('fullName') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        shippingAddress: String(formData.get('shippingAddress') || '').trim(),
      }

      if (!customer.fullName || !customer.email) {
        render('Please provide Full Name and Email Address.')
        return
      }

      if (!emailLooksValid(customer.email)) {
        render('Please enter a valid email address.')
        return
      }

      const submitButton = form.querySelector('button[type="submit"]')
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = true
        submitButton.textContent = 'Submitting...'
      }

      try {
        const payload = buildCheckoutPayload(customer, currentCart)
        const response = await fetch('/.netlify/functions/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        const result = await response.json().catch(() => null)

        if (!response.ok || !result?.ok) {
          render(result?.message || 'Unable to submit your order request right now. Please try again.')
          return
        }

        clearCart()
        form.reset()
        render(result.message || 'Order request submitted successfully. We will contact you soon.')
      } catch {
        render('Unable to submit your order request right now. Please try again.')
      }
    })
  }

  render()
}
