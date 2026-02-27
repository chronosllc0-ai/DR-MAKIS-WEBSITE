import {
  addToCart,
  clearCart,
  createProductCartItem,
  formatMoney,
  getCart,
  getCartCount,
  getTotals,
  removeFromCart,
  updateQuantity,
} from './components/cartStore.js'
import { icon } from './components/icons.js'
import { escapeHtml, focusTrap, scrollLock } from './components/utils.js'
import { SITE_CONTENT } from './data/content.js'

function renderStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let stars = '★'.repeat(fullStars)
  if (hasHalfStar) {
    stars += '☆' // This would be a half-star in CSS
  }
  stars += '☆'.repeat(5 - Math.ceil(rating))
  return '<span class="stars" aria-label="' + rating + ' star rating">' + stars + '</span>'
}

function productCardTemplate(product) {
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" class="product-image" />
        ${product.inStock ? '<span class="pill-tag in-stock">In Stock</span>' : '<span class="pill-tag out-of-stock">Out of Stock</span>'}
      </div>
      <div class="product-body">
        <h3>${escapeHtml(product.name)}</h3>
        <p class="rating-line">${renderStars(product.rating)} (${escapeHtml(product.reviews)})</p>
        <p class="muted-text">${escapeHtml(product.shortDescription)}</p>
        <div class="product-actions-row">
          <strong>${formatMoney(product.price)}</strong>
          <div class="inline-actions">
            <button class="icon-action" data-open-product="${escapeHtml(product.id)}" aria-label="View ${escapeHtml(product.name)} details">${icon('eye', '', { attrs: 'stroke-width="1.75"' })}</button>
            <button class="cart-action" data-quick-add-product="${escapeHtml(product.id)}" aria-label="Add ${escapeHtml(product.name)} to cart">${icon('cart')}</button>
          </div>
        </div>
      </div>
    </article>
  `
}

function filtersTemplate(filters) {
  return `
    <div class="filter-bar">
      ${filters.map(filter => `
        <button class="filter-button ${filter === 'All Products' ? 'is-active' : ''}" data-filter="${escapeHtml(filter)}">${escapeHtml(filter)}</button>
      `).join('')}
    </div>
  `
}

function paginationTemplate(currentPage, totalPages) {
  return `
    <div class="pagination">
      <span class="pagination-info">Page ${currentPage} of ${totalPages}</span>
      <div class="pagination-controls">
        <button class="pagination-button" data-page="prev" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>
        <button class="pagination-button" data-page="next" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
      </div>
    </div>
  `
}

function renderSupplementsLayout(content) {
  const { brand, contact, supplementsPage, supplements } = content
  const productsPerPage = 12
  const totalPages = Math.ceil(supplements.length / productsPerPage)

  return `
    <div class="site-wrap">
      <header class="site-header full-bleed content-shell">
        <a class="brand" href="/" aria-label="Dr. William Makis home">
          <img src="${escapeHtml(brand.logo)}" alt="Dr. William Makis logo" class="brand-logo" />
          <span class="brand-text">Dr. William <strong>Makis</strong></span>
        </a>
        
        <!-- Main Navigation -->
        <nav class="main-nav" aria-label="Main navigation">
          <a href="/#expertise" class="nav-link">Expertise</a>
          <a href="/#protocols" class="nav-link">Protocols</a>
          <a href="/#process" class="nav-link">Process</a>
          <a href="/#testimonials" class="nav-link">Testimonials</a>
          <a href="/#research" class="nav-link">Research</a>
          <a href="/#credentials" class="nav-link">Achievements</a>
        </nav>

        <div class="header-actions" aria-label="Site controls">
          <!-- Language Selector -->
          <button class="language-selector" aria-label="Select language">
            <span class="language-text">US EN</span>
            ${icon('chevronDown')}
          </button>
          
          <!-- Shopping Cart -->
          <button class="icon-button cart-open" aria-label="Open cart" data-open-cart>
            ${icon('cart')}
            <span class="cart-count js-cart-count" aria-live="polite">0</span>
          </button>
          
          <!-- Patient Portal -->
          <button class="btn btn-secondary patient-portal" aria-label="Open patient portal">Patient Portal</button>
          
          <!-- Book Consultation -->
          <button class="btn btn-primary book-consultation" aria-label="Book a consultation" data-open-consultation>
            Book Consultation
          </button>
          
          <!-- Mobile Menu Button -->
          <button class="icon-button" aria-label="Open menu" data-open-nav>${icon('menu')}</button>
        </div>
      </header>

      <main id="top">
        <section class="hero-section section-panel content-shell" id="supplements-hero">
          <div class="hero-content">
            <h1>${escapeHtml(supplementsPage.hero.title)}</h1>
            <p>${escapeHtml(supplementsPage.hero.subtitle)}</p>
          </div>
        </section>

        <section class="section-panel content-shell" id="products">
          <div class="section-header">
            <div class="product-count">${escapeHtml(supplementsPage.productCount)}</div>
            ${filtersTemplate(supplementsPage.filters)}
          </div>

          <div class="products-grid">
            ${supplements.slice(0, productsPerPage).map(productCardTemplate).join('')}
          </div>

          ${paginationTemplate(1, totalPages)}
        </section>
      </main>

      <footer class="site-footer full-bleed content-shell" id="footer">
        <div class="footer-brand">
          <img src="${escapeHtml(brand.logo)}" alt="Dr. Makis" class="brand-logo" />
          <div>
            <h2>Dr. William <strong>Makis</strong></h2>
            <p>${escapeHtml(brand.tagline)}</p>
          </div>
        </div>
        <div class="social-row">
          <button class="icon-button ghost" aria-label="Facebook">${icon('facebook')}</button>
          <button class="icon-button ghost" aria-label="Twitter">${icon('twitter')}</button>
          <button class="icon-button ghost" aria-label="LinkedIn">${icon('linkedin')}</button>
          <button class="icon-button ghost" aria-label="Instagram">${icon('instagram')}</button>
        </div>

        <div class="footer-columns">
          <div>
            <h3>Services</h3>
            <ul>${content.footer.services.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>${content.footer.resources.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </div>
          <div>
            <h3>About</h3>
            <ul>${content.footer.about.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>${icon('telegram')} <a href="${escapeHtml(contact.telegramUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(contact.telegramHandle)}</a></li>
              <li>${icon('mail')} <a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></li>
              <li>${escapeHtml(content.footer.todo)}</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>${escapeHtml(content.footer.copyright)}</p>
          <div class="legal-links">${content.footer.legal.map((item) => `<a href="#">${escapeHtml(item)}</a>`).join('')}</div>
        </div>
      </footer>

      <a class="floating-whatsapp" href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        ${icon('whatsapp')}
        <span class="pulse-dot"></span>
      </a>
      <a class="floating-messenger" href="https://m.me/drmakis" target="_blank" rel="noopener noreferrer" aria-label="Chat on Messenger">
        ${icon('facebook')}
        <span class="pulse-dot"></span>
      </a>
    </div>

    <div class="overlay" data-overlay="nav" hidden></div>
    <aside class="side-drawer" data-drawer="nav" aria-hidden="true" aria-label="Navigation menu">
      <button class="icon-button close-btn" data-close-nav aria-label="Close menu">${icon('close')}</button>
      <nav>
        <a href="/" data-nav-link>Home</a>
        <a href="/supplements.html" data-nav-link>Supplements</a>
        <a href="/#shop" data-nav-link>Shop by Category</a>
        <a href="/#expertise" data-nav-link>Our Expertise</a>
        <a href="/#protocols" data-nav-link>Treatment Protocols</a>
        <a href="/#process" data-nav-link>Our Process</a>
        <a href="/#products" data-nav-link>Cancer Support Products</a>
        <a href="/#videos" data-nav-link>Featured YouTube Videos</a>
        <a href="/#credentials" data-nav-link>Professional Certifications</a>
        <a href="/#testimonials" data-nav-link>Stories of Hope & Recovery</a>
        <a href="/#research" data-nav-link>Research & Publications</a>
        <a href="/#contact" data-nav-link>Contact Us</a>
      </nav>
    </aside>

    <div class="overlay" data-overlay="cart" hidden></div>
    <aside class="side-drawer cart-drawer" data-drawer="cart" aria-hidden="true" aria-label="Cart drawer">
      <div class="drawer-head">
        <h2>Your Cart</h2>
        <button class="icon-button close-btn" data-close-cart aria-label="Close cart">${icon('close')}</button>
      </div>
      <div class="drawer-content js-cart-content"></div>
    </aside>

    <div class="overlay" data-overlay="modal" hidden></div>
    <div class="detail-modal" data-modal hidden role="dialog" aria-modal="true" aria-label="Details modal">
      <div class="detail-modal-panel js-modal-content"></div>
    </div>

    <!-- Book Consultation Modal -->
    <div class="overlay" data-overlay="consultation" hidden></div>
    <div class="consultation-modal" data-modal="consultation" hidden role="dialog" aria-modal="true" aria-label="Book a consultation">
      <div class="consultation-modal-panel">
        <button class="icon-button close-btn modal-close" data-close-consultation aria-label="Close consultation form">${icon('close')}</button>
        <div class="modal-header">
          <span class="modal-icon">${icon('calendar')}</span>
          <h2>Book a Consultation</h2>
          <p class="modal-subtitle">Schedule a consultation with Dr. Makis to discuss your treatment options</p>
        </div>
        
        <form class="consultation-form" data-consultation-form>
          <div class="form-group">
            <label for="fullName">Full Name *</label>
            <input type="text" id="fullName" name="fullName" required placeholder="Enter your full name">
          </div>
          
          <div class="form-group">
            <label for="email">Email Address *</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email address">
          </div>
          
          <div class="form-group">
            <label for="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number">
          </div>
          
          <div class="form-group">
            <label for="consultationType">Consultation Type *</label>
            <select id="consultationType" name="consultationType" required>
              <option value="">Select a consultation type</option>
              <option value="initial">Initial Consultation</option>
              <option value="follow-up">Follow-up Consultation</option>
              <option value="second-opinion">Second Opinion</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="preferredDate">Preferred Date *</label>
            <input type="date" id="preferredDate" name="preferredDate" required>
          </div>
          
          <div class="form-group">
            <label for="preferredTime">Preferred Time *</label>
            <select id="preferredTime" name="preferredTime" required>
              <option value="">Select a time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="additionalInfo">Additional Information</label>
            <textarea id="additionalInfo" name="additionalInfo" rows="4" placeholder="Please provide any additional information about your condition or questions you may have"></textarea>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn btn-primary block">Request Consultation</button>
          </div>
          
          <p class="hipaa-note">
            ${icon('shield')} Your information is protected by HIPAA compliance standards
          </p>
        </form>
      </div>
    </div>
  `
}

function productModalTemplate(product) {
  return `
    <button class="icon-button close-btn modal-close" data-close-modal aria-label="Close details">${icon('close')}</button>
    <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" class="modal-hero" />
    <div class="modal-body">
      <h2>${escapeHtml(product.name)}</h2>
      <p class="rating-line">${renderStars(product.rating)} (${escapeHtml(product.reviews)} reviews)</p>
      <p class="modal-price">${formatMoney(product.price)}</p>
      <p>${escapeHtml(product.description)}</p>

      <div class="trust-row">
        <span>${icon('box')}Quality Tested</span>
        <span>${icon('shield')}Safe & Secure</span>
        <span>${icon('truck')}Fast Shipping</span>
      </div>

      <button class="btn btn-cart block" type="button" data-add-product-cart="${escapeHtml(product.id)}">${icon('cart')}Add to Cart - ${formatMoney(product.price)}</button>
    </div>
  `
}

export function mountSupplementsApp(root, content) {
  root.innerHTML = renderSupplementsLayout(content)

  const products = new Map(content.supplements.map((item) => [item.id, item]))
  const productsPerPage = 12
  const totalPages = Math.ceil(content.supplements.length / productsPerPage)

  const overlays = {
    nav: root.querySelector('[data-overlay="nav"]'),
    cart: root.querySelector('[data-overlay="cart"]'),
    modal: root.querySelector('[data-overlay="modal"]'),
    consultation: root.querySelector('[data-overlay="consultation"]'),
  }

  const drawers = {
    nav: root.querySelector('[data-drawer="nav"]'),
    cart: root.querySelector('[data-drawer="cart"]'),
  }

  const modal = root.querySelector('[data-modal]')
  const modalContent = root.querySelector('.js-modal-content')
  const cartContent = root.querySelector('.js-cart-content')
  const consultationModal = root.querySelector('[data-modal="consultation"]')

  const state = {
    activeSurface: null,
    previousFocus: null,
    currentPage: 1,
    totalPages: totalPages,
  }

  function renderProducts() {
    const start = (state.currentPage - 1) * productsPerPage
    const end = start + productsPerPage
    const pageProducts = content.supplements.slice(start, end)
    
    const productsGrid = root.querySelector('.products-grid')
    if (productsGrid) {
      productsGrid.innerHTML = pageProducts.map(productCardTemplate).join('')
    }
    
    const paginationContainer = root.querySelector('.pagination')
    if (paginationContainer) {
      paginationContainer.innerHTML = paginationTemplate(state.currentPage, state.totalPages)
    }
  }

  function updatePagination(page) {
    if (page < 1 || page > state.totalPages) return
    state.currentPage = page
    renderProducts()
  }

  function updateCartCount() {
    const count = getCartCount()
    root.querySelectorAll('.js-cart-count').forEach((node) => {
      node.textContent = String(count)
      node.classList.toggle('is-empty', count === 0)
    })
  }

  function cartItemTemplate(item) {
    return `
      <article class="cart-item" data-cart-id="${escapeHtml(item.id)}" data-cart-type="${escapeHtml(item.type)}">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" />
        <div class="cart-item-info">
          <span class="type-pill">${escapeHtml(item.type === 'product' ? 'Product' : content.misc.cartTypeLabel)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${formatMoney(item.price)}</p>
          <div class="qty-controls">
            <button class="qty-btn" data-cart-action="decrement" aria-label="Decrease quantity">${icon('minus')}</button>
            <span aria-live="polite">${item.quantity}</span>
            <button class="qty-btn" data-cart-action="increment" aria-label="Increase quantity">${icon('plus')}</button>
          </div>
        </div>
        <button class="icon-button ghost remove-btn" data-cart-action="remove" aria-label="Remove item">${icon('trash')}</button>
      </article>
    `
  }

  function renderCart() {
    const cart = getCart()
    const totals = getTotals(cart)

    if (cart.length === 0) {
      cartContent.innerHTML = `
        <div class="cart-empty">
          <p>Your cart is empty.</p>
          <p>Add a protocol or product to continue.</p>
        </div>
      `
      updateCartCount()
      return
    }

    cartContent.innerHTML = `
      <div class="cart-list">
        ${cart.map(cartItemTemplate).join('')}
      </div>
      <div class="cart-summary">
        <div class="summary-row"><span>Subtotal</span><strong>${formatMoney(totals.subtotal)}</strong></div>
        <a class="btn btn-primary block" href="/checkout">Proceed to Checkout</a>
        <button class="btn btn-secondary block" type="button" data-clear-cart>Clear Cart</button>
        <p class="footnote">${escapeHtml(content.misc.cartShippingText)}</p>
      </div>
    `

    updateCartCount()
  }

  function openSurface(type, focusSource) {
    state.activeSurface = type
    state.previousFocus = focusSource || document.activeElement

    if (type === 'modal') {
      overlays.modal.hidden = false
      modal.hidden = false
      requestAnimationFrame(() => {
        overlays.modal.classList.add('is-open')
        modal.classList.add('is-open')
        const target = modal.querySelector('button, a, input, textarea')
        if (target) target.focus()
      })
    }

    if (type === 'consultation') {
      overlays.consultation.hidden = false
      consultationModal.hidden = false
      requestAnimationFrame(() => {
        overlays.consultation.classList.add('is-open')
        consultationModal.classList.add('is-open')
        const target = consultationModal.querySelector('button, a, input, textarea')
        if (target) target.focus()
      })
    }

    if (type === 'nav' || type === 'cart') {
      const overlay = overlays[type]
      const drawer = drawers[type]
      overlay.hidden = false
      drawer.setAttribute('aria-hidden', 'false')
      requestAnimationFrame(() => {
        overlay.classList.add('is-open')
        drawer.classList.add('is-open')
        const target = drawer.querySelector('button, a')
        if (target) target.focus()
      })
    }

    scrollLock(true)
  }

  function closeSurface(type) {
    if (type === 'modal') {
      overlays.modal.classList.remove('is-open')
      modal.classList.remove('is-open')
      window.setTimeout(() => {
        overlays.modal.hidden = true
        modal.hidden = true
        modalContent.innerHTML = ''
      }, 180)
    }

    if (type === 'consultation') {
      overlays.consultation.classList.remove('is-open')
      consultationModal.classList.remove('is-open')
      window.setTimeout(() => {
        overlays.consultation.hidden = true
        consultationModal.hidden = true
      }, 180)
    }

    if (type === 'nav' || type === 'cart') {
      const overlay = overlays[type]
      const drawer = drawers[type]
      overlay.classList.remove('is-open')
      drawer.classList.remove('is-open')
      window.setTimeout(() => {
        overlay.hidden = true
        drawer.setAttribute('aria-hidden', 'true')
      }, 180)
    }

    state.activeSurface = null
    scrollLock(false)
    if (state.previousFocus instanceof HTMLElement) {
      state.previousFocus.focus()
    }
  }

  function closeAnySurface() {
    if (state.activeSurface) {
      closeSurface(state.activeSurface)
    }
  }

  function openProductModal(productId, trigger) {
    const product = products.get(productId)
    if (!product) return

    modalContent.innerHTML = productModalTemplate(product)
    openSurface('modal', trigger)
  }

  function addProduct(productId) {
    const product = products.get(productId)
    if (!product) return
    addToCart(createProductCartItem(product))
    renderCart()
  }

  root.addEventListener('submit', (event) => {
    if (event.target.matches('[data-consultation-form]')) {
      event.preventDefault()
      
      // Get form data
      const formData = new FormData(event.target)
      const data = Object.fromEntries(formData)
      
      // Placeholder for actual form submission
      console.log('Consultation request submitted:', data)
      
      // Show success message (placeholder)
      alert('Thank you for your consultation request! We will contact you shortly to confirm your appointment.')
      
      // Close the modal
      closeSurface('consultation')
      
      // Reset the form
      event.target.reset()
    }
  })

  root.addEventListener('click', (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null
    if (!target) return

    const pageButton = target.closest('[data-page]')
    if (pageButton) {
      const action = pageButton.getAttribute('data-page')
      if (action === 'prev') {
        updatePagination(state.currentPage - 1)
      } else if (action === 'next') {
        updatePagination(state.currentPage + 1)
      }
      return
    }

    const openNavBtn = target.closest('[data-open-nav]')
    if (openNavBtn) {
      openSurface('nav', openNavBtn)
      return
    }

    const openCartBtn = target.closest('[data-open-cart]')
    if (openCartBtn) {
      renderCart()
      openSurface('cart', openCartBtn)
      return
    }

    const openConsultationBtn = target.closest('[data-open-consultation]')
    if (openConsultationBtn) {
      openSurface('consultation', openConsultationBtn)
      return
    }

    if (target.closest('[data-close-consultation]') || target.matches('[data-overlay="consultation"]')) {
      closeSurface('consultation')
      return
    }

    if (target.closest('[data-close-nav]')) {
      closeSurface('nav')
      return
    }

    if (target.closest('[data-close-cart]')) {
      closeSurface('cart')
      return
    }

    if (target.matches('[data-overlay="nav"]')) {
      closeSurface('nav')
      return
    }

    if (target.matches('[data-overlay="cart"]')) {
      closeSurface('cart')
      return
    }

    if (target.closest('[data-close-modal]') || target.matches('[data-overlay="modal"]')) {
      closeSurface('modal')
      return
    }

    const openProductBtn = target.closest('[data-open-product]')
    if (openProductBtn) {
      const productId = openProductBtn.getAttribute('data-open-product')
      if (productId) openProductModal(productId, openProductBtn)
      return
    }

    const addProductBtn = target.closest('[data-add-product-cart]')
    if (addProductBtn) {
      const productId = addProductBtn.getAttribute('data-add-product-cart')
      if (productId) addProduct(productId)
      return
    }

    const quickProductAdd = target.closest('[data-quick-add-product]')
    if (quickProductAdd) {
      const productId = quickProductAdd.getAttribute('data-quick-add-product')
      if (productId) addProduct(productId)
      return
    }

    const navLink = target.closest('[data-nav-link]')
    if (navLink instanceof HTMLAnchorElement) {
      closeSurface('nav')
    }

    const clearButton = target.closest('[data-clear-cart]')
    if (clearButton) {
      clearCart()
      renderCart()
      return
    }

    const cartActionButton = target.closest('[data-cart-action]')
    if (cartActionButton) {
      const action = cartActionButton.getAttribute('data-cart-action')
      const cartItem = cartActionButton.closest('[data-cart-id]')
      if (!cartItem) return

      const itemId = cartItem.getAttribute('data-cart-id')
      const itemType = cartItem.getAttribute('data-cart-type')
      const current = getCart().find((entry) => entry.id === itemId && entry.type === itemType)

      if (!itemId || !itemType || !current) return

      if (action === 'increment') {
        updateQuantity(itemId, itemType, current.quantity + 1)
      }

      if (action === 'decrement') {
        updateQuantity(itemId, itemType, current.quantity - 1)
      }

      if (action === 'remove') {
        removeFromCart(itemId, itemType)
      }

      renderCart()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.activeSurface) {
      closeAnySurface()
      return
    }

    if (state.activeSurface === 'modal') {
      focusTrap(modal, event)
    }

    if (state.activeSurface === 'consultation') {
      focusTrap(consultationModal, event)
    }

    if (state.activeSurface === 'nav') {
      focusTrap(drawers.nav, event)
    }

    if (state.activeSurface === 'cart') {
      focusTrap(drawers.cart, event)
    }
  })

  renderCart()
  renderProducts()
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app')
  mountSupplementsApp(root, SITE_CONTENT)
})
