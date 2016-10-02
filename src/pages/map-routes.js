import React from 'react'
import Map from '../components/map'
import Nav from '../components/navigation'

export default React.createClass({
  displayName: 'MapRoutes',
  render () {
    return (
      <div>
        <Map {...this.props} />
      </div>
    )
  }
})
