import React from 'react'
import app from 'ampersand-app'

export default React.createClass({
  displayName: 'SearchBox',

  showSideNav (event) {
    event.preventDefault()
    app.trigger('sideNav:open', {element: document.querySelector('.js-side-nav')})
  },

  render () {
    return (
      <div className='search-box'>
        <form className='search-form'>
          <div className='form-element'>
            <input type='text' placeholder='Search location' className='form-input' />
          </div>
          <button type='submit' className='button button-search mega-octicon octicon-search' />
        </form>
        <button className='button menu-toggle octicon octicon-three-bars' onClick={this.showSideNav} />
      </div>
    )
  }
})
