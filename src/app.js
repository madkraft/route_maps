import '../node_modules/leaflet/dist/leaflet.css'
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

app.on('sideNav:open', () => {
  const sideNavEl = document.querySelector('.js-side-nav')

  sideNavEl.classList.add('side-nav-animatable')
  sideNavEl.classList.add('side-nav-visible')
  sideNavEl.addEventListener('transitionEnd', onTransitionEnd(sideNavEl))
})

app.on('sideNav:close', () => {
  const sideNavEl = document.querySelector('.js-side-nav')

  sideNavEl.classList.add('side-nav-animatable')
  sideNavEl.classList.remove('side-nav-visible')
  sideNavEl.addEventListener('transitionEnd', onTransitionEnd(sideNavEl))
})
