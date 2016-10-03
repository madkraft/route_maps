import React from 'react'
import ReactDOM from 'react-dom'
import app from 'ampersand-app'

export default React.createClass({
  displayName: 'Navigation',

  hideSideNav (event) {
    event.preventDefault()
    app.trigger('sideNav:close', {element: ReactDOM.findDOMNode(this)})
  },

  blockClick (event) {
    event.stopPropagation()
  },

  update () {
    if (!this.state.touchingSideNav) {
      return
    }

    window.requestAnimationFrame(this.update)

    const translateX = Math.max(0, this.state.currentX - this.state.startX)
    const sideNavContainerEl = document.querySelector('.js-side-nav-container')
    sideNavContainerEl.style.transform = `translateX(${translateX}px)`
  },

  handleTouchStart (event) {
    const element = ReactDOM.findDOMNode(this)
    if (!element.classList.contains('side-nav-visible')) {
      return
    }

    this.setState({
      startX: event.touches[0].pageX,
      currentX: this.startX,
      touchingSideNav: true
    })

    window.requestAnimationFrame(this.update)
  },

  handleTouchMove (event) {
    if (!this.state.touchingSideNav) {
      return
    }

    this.setState({
      currentX: event.touches[0].pageX
    })

    const translateX = Math.max(0, this.state.currentX - this.state.startX)

    if (translateX < 0) {
      event.preventDefault()
    }
  },

  handleTouchEnd (event) {
    if (!this.state.touchingSideNav) {
      return
    }

    this.setState({
      touchingSideNav: false
    })

    const translateX = Math.max(0, this.state.currentX - this.state.startX)
    const sideNavContainerEl = document.querySelector('.js-side-nav-container')
    sideNavContainerEl.style.transform = ''

    if (translateX > 100) {
      this.hideSideNav(event)
    }
  },

  render () {
    return (
      <aside className='js-side-nav side-nav'
        onClick={this.hideSideNav}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}>
        <nav className='js-side-nav-container side-nav-container' onClick={this.blockClick}>
          <button className='side-nav-close mega-octicon octicon-x' onClick={this.hideSideNav} />
          <header className='side-nav-header'>Route Maps</header>
          <hr />
          <ul className='side-nav-content'>
            <li>
              <span className='octicon octicon-info' />
              <a href='#0'>Information</a>
            </li>
            <li>
              <span className='octicon octicon-globe' />
              <a href='#0'>Map</a>
            </li>
          </ul>
          <hr />
          <form>
            <div className='form-element'>
              <label htmlFor='location'>Search location:</label>
              <input type='text' id='location' placeholder='Departure Airport' className='form-input input-dark' />
            </div>
            <button type='submit' className='button button-block'>Search</button>
          </form>
        </nav>
      </aside>
    )
  }
})
