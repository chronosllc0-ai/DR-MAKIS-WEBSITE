import { mountConsultationsApp } from './consultationsApp.js'
import { SITE_CONTENT } from './data/content.js'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app')
  if (!root) return
  mountConsultationsApp(root, SITE_CONTENT)
})
