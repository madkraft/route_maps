import React from 'react'
import app from 'ampersand-app'

export default React.createClass({
  displayName: 'SearchBox',

  showSideNav (event) {
    event.preventDefault()
    app.trigger('sideNav:open')
  },

  render () {
    return (
      <div className='search-box'>
        <form>
          <div className='form-element'>
            <input type='text' placeholder='Search location' className='form-input' />
          </div>
          <button type='submit' className='button button-primary'>Search</button>
        </form>
        <button className='menu-toggle' onClick={this.showSideNav} >menu</button>
      </div>
    )
  }
})
