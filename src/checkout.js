import './styles/main.css'
import { mountCheckoutApp } from './components/checkoutApp.js'
import { SITE_CONTENT } from './data/content.js'

const app = document.querySelector('#app')

if (app) {
  mountCheckoutApp(app, SITE_CONTENT)
}
