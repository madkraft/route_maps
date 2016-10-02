import '../node_modules/leaflet/dist/leaflet.css'
import './styles/main.styl'
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
