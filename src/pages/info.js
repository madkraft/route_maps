import React from 'react'
import Information from '../components/information/information'

export default React.createClass({
  displayName: 'InfoPage',
  render () {
    return (
      <div className='page'>
        <Information />
      </div>
    )
  }
})
