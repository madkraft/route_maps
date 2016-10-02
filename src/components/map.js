import React from 'react'
import ReactDOM from 'react-dom'
import L from 'leaflet'

const mapConfig = {
  mapLayer: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW50b25rb3N0aXVjaGtvdiIsImEiOiJBbUp4SDdjIn0.mexw18yLVszuY_brcfcFAw',
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  initialZoom: 5,
  maxZoom: 6,
  minZoom: 4,
  allowLocation: true,
  maxBounds: {
    southWest: [32.970699, -12.33664],
    northEast: [73.042122, 38.0415]
  }
}

export default React.createClass({
  displayName: 'Map',

  componentDidMount () {
    const myMap = L.map(ReactDOM.findDOMNode(this), {
      zoom: mapConfig.initialZoom,
      maxBounds: [mapConfig.maxBounds.southWest, mapConfig.maxBounds.northEast]
    })

    L.tileLayer(mapConfig.mapLayer, {
      attribution: mapConfig.attribution
    }).addTo(myMap)

    myMap.locate({
      setView: mapConfig.allowLocation
    })

    myMap.options.minZoom = mapConfig.minZoom
    myMap.options.maxZoom = mapConfig.maxZoom
  },

  render () {
    return (
      <div className='map' />
    )
  }
})
