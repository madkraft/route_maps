import React from 'react'
import app from 'ampersand-app'

export default React.createClass({
  displayName: 'Navigation',

  hideSideNav (event) {
    event.preventDefault()
    app.trigger('sideNav:close')
  },

  blockClick (event) {
    event.stopPropagation()
  },

  render () {
    return (
      <aside className='js-side-nav side-nav' onClick={this.hideSideNav}>
        <nav className='side-nav-container' onClick={this.blockClick}>
          <button className='side-nav-close' onClick={this.hideSideNav}>close</button>
          <header className='side-nav-header'>Route Maps</header>
          <hr />
          <ul className='side-nav-content'>
            <li>
              <a href='#0'>Information</a>
            </li>
            <li>
              <a href='#0'>Map</a>
            </li>
          </ul>
          <hr />
          <form>
            <div className='form-element'>
              <label htmlFor='location'>Search location:</label>
              <input type='text' id='location' placeholder='Departure Airport' className='form-input' />
            </div>
            <button type='submit' className='button button-primary'>Search</button>
          </form>
        </nav>
      </aside>
    )
  }
})
