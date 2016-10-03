import React from 'react'
import navHelper from '../../core/nav-helper'

export default React.createClass({
  displayName: 'Information',

  onClick (event) {
    navHelper(event)
  },

  render () {
    return (
      <div className='info-page' onClick={this.onClick}>
        <a href='/' className='button'>Back</a>
        <div className='info'>
          <h1 className='info-title'>Info</h1>
          <p>I took this project as a chance to try react</p>
        </div>
      </div>
    )
  }
})
