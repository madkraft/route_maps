import Router from 'ampersand-router'
import app from 'ampersand-app'
import React from 'react'
import { render } from 'react-dom'
import xhr from 'xhr'
import MapRoutes from '../pages/map-routes'
import Info from '../pages/info'

const root = document.getElementById('root')

export default Router.extend({
  routes: {
    '': 'map',
    'info': 'info'
  },

  loadRoutes () {
    if (app.airports) {
      render(<MapRoutes airports={app.airports} />, root)
    } else {
      console.log('Making xhr call')
      xhr({
        url: 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/',
        json: true
      }, (err, req, body) => {
        if (err) {
          console.error('Something went wrong')
        }
        app.airports = body.airports
        render(<MapRoutes airports={app.airports} />, root)
      })
    }
  },

  map () {
    this.loadRoutes()
  },

  info () {
    render(<Info />, root)
  }
})
