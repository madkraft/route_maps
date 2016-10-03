import React from 'react'
import app from 'ampersand-app'
import {debounce} from 'throttle-debounce'

export default React.createClass({
  displayName: 'SearchBox',

  getInitialState () {
    return {location: ''}
  },

  appendList (target, arr) {
    let targetEl = document.querySelector(target)
    targetEl.innerHTML = null

    arr.map(city => {
      let div = document.createElement('div')
      div.classList.add('button')
      div.innerHTML = `${city.name} / ${city.country.name}`
      targetEl.appendChild(div)
    })
  },

  handleChange (event) {
    this.setState({
      location: event.target.value
    })

    debounce(1000, () => {
      if (this.state.location.length >= 3) {
        let cities = app.airports.filter(airport => {
          return airport.name.includes(this.state.location)
        })

        this.appendList('.form-autocomplete', cities)
      }
    })()
  },

  onSubmit (event) {
    event.preventDefault()
    app.airports.map(airport => {
      if (airport.name === this.state.location) {
        // selectMarker(airport.name)
      }
    })
  },

  showSideNav (event) {
    event.preventDefault()
    app.trigger('sideNav:open', {element: document.querySelector('.js-side-nav')})
  },

  render () {
    return (
      <div className='search-box'>
        <form className='search-form' onSubmit={this.onSubmit}>
          <div className='form-element'>
            <input type='text' placeholder='Search location' className='form-input' onChange={this.handleChange} value={this.state.location} />
            <div className='form-autocomplete' />
          </div>
          <button type='submit' className='button button-search mega-octicon octicon-search' />
        </form>
        <button className='button menu-toggle octicon octicon-three-bars' onClick={this.showSideNav} />
      </div>
    )
  }
})
