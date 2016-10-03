import 'leaflet/dist/leaflet.css'
import 'normalize-css/normalize.css'
import 'octicons/build/font/octicons.css'
import './main.styl'
import app from 'ampersand-app'
import Router from './core/router'

window.app = app // for debugging purposes

app.extend({
  init () {
    window.L_PREFER_CANVAS = true // force Leaflet to use the Canvas back-end (if available) for vector layers instead of SVG
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()

let onTransitionEnd = function onTransitionEnd (element) {
  element.classList.remove('side-nav-animatable')
  element.removeEventListener('transitionEnd', onTransitionEnd)
}

app.on('sideNav:open', (payload) => {
  const element = payload.element

  element.classList.add('side-nav-animatable')
  element.classList.add('side-nav-visible')
  element.addEventListener('transitionEnd', onTransitionEnd(element))
})

app.on('sideNav:close', (payload) => {
  const element = payload.element

  element.classList.add('side-nav-animatable')
  element.classList.remove('side-nav-visible')
  element.addEventListener('transitionEnd', onTransitionEnd(element))
})
