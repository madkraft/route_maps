import React from 'react'
import ReactDOM from 'react-dom'
import L from 'leaflet'

const mapConfig = {
  mapLayer: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW50b25rb3N0aXVjaGtvdiIsImEiOiJBbUp4SDdjIn0.mexw18yLVszuY_brcfcFAw',
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  initialZoom: 5,
  maxZoom: 7,
  minZoom: 4,
  allowLocation: true,
  maxBounds: {
    southWest: [32.970699, -12.33664],
    northEast: [73.042122, 38.0415]
  }
}

export default React.createClass({
  displayName: 'Map',

  createMap (map) {
    map.locate({
      setView: mapConfig.allowLocation
    })

    map.options.minZoom = mapConfig.minZoom
    map.options.maxZoom = mapConfig.maxZoom

    L.tileLayer(mapConfig.mapLayer, {
      attribution: mapConfig.attribution
    }).addTo(map)
  },

  addMarker (map, latLng, route = {start: false}) {
    // let outerCirlde = L.circle(latLng, {
    //   stroke: false,
    //   fillColor: '#989898',
    //   fillOpacity: 0.5,
    //   radius: route.start ? 100000 : 50000
    // }).addTo(map)

    L.circle(latLng, {
      stroke: false,
      fillColor: '#7ac087',
      fillOpacity: 0.7,
      radius: route.start ? 30000 : 15000
    }).addTo(map)
  },

  componentDidMount () {
    const myMap = L.map(ReactDOM.findDOMNode(this), {
      zoom: mapConfig.initialZoom,
      maxBounds: [mapConfig.maxBounds.southWest, mapConfig.maxBounds.northEast]
    })

    const {airports} = this.props

    this.createMap(myMap)

    airports.map(airport => {
      this.addMarker(myMap, [airport.latitude, airport.longitude])
    })
  },

  render () {
    return (
      <div className='map' />
    )
  }
})
