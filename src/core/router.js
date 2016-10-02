import Router from 'ampersand-router'
import React from 'react'
import { render } from 'react-dom'
import MapRoutes from '../pages/map-routes'
import Info from '../pages/info'

const root = document.getElementById('root')

export default Router.extend({
  routes: {
    '': 'map',
    'info': 'info'
  },

  map () {
    render(<MapRoutes />, root)
  },

  info () {
    render(<Info />, root)
  }
})
