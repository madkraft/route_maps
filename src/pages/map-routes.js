import React from 'react'
import Map from '../components/map/map'
import Nav from '../components/navigation/navigation'
import Search from '../components/search-box/search-box'

export default React.createClass({
  displayName: 'MapRoutes',
  render () {
    return (
      <div className='page'>
        <Search />
        <Map {...this.props} />
        <Nav />
      </div>
    )
  }
})
