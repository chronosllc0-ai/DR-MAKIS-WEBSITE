import './styles/main.css'
import { mountHomeApp } from './components/homeApp.js'
import { SITE_CONTENT } from './data/content.js'

const app = document.querySelector('#app')

if (app) {
  mountHomeApp(app, SITE_CONTENT)
}
