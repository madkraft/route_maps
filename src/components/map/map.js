import React from 'react'
import ReactDOM from 'react-dom'
import L from 'leaflet'

const mapConfig = {
  mapLayer: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW50b25rb3N0aXVjaGtvdiIsImEiOiJBbUp4SDdjIn0.mexw18yLVszuY_brcfcFAw',
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  initialZoom: 5,
  maxZoom: 7,
  minZoom: 4,
  initialView: [50.110, 8.682],
  maxBounds: {
    southWest: [32.970699, -12.33664],
    northEast: [73.042122, 38.0415]
  }
}

export default React.createClass({
  displayName: 'Map',

  createMap (element, map) {
    const myMap = L.map(element, {
      zoom: mapConfig.initialZoom,
      maxBounds: [mapConfig.maxBounds.southWest, mapConfig.maxBounds.northEast]
    }).setView(mapConfig.initialView)

    this.addLayerAndOptions(myMap)
    this.positionAirports(myMap)
  },

  addLayerAndOptions (map) {
    map.options.minZoom = mapConfig.minZoom
    map.options.maxZoom = mapConfig.maxZoom
    L.tileLayer(mapConfig.mapLayer, {
      attribution: mapConfig.attribution
    }).addTo(map)
  },

  positionAirports (myMap) {
    const {airports} = this.props
    if (airports) {
      airports.map(airport => {
        this.addMarker(myMap, [airport.latitude, airport.longitude], airport.name, airport.country.name)
      })
    }
  },

  addMarker (map, latLng, airportName, airportCountry) {
    L.circle(latLng, {
      stroke: false,
      fillColor: '#7ac087',
      fillOpacity: 0.7,
      radius: 15000
    }).addTo(map)

    let outerCirlde = L.circle(latLng, {
      stroke: false,
      fillColor: '#989898',
      fillOpacity: 0.1,
      radius: 50000
    }).addTo(map)

    outerCirlde.bindPopup(
      `${airportName} / ${airportCountry}` +
      '<button class="button">Book now</button>'
    )
  },

  componentDidMount () {
    const element = ReactDOM.findDOMNode(this)
    this.createMap(element)
  },

  render () {
    return (
      <div className='map' />
    )
  }
})
