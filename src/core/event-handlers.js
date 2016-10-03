import app from 'ampersand-app'

export default function registerEventBus () {
  let onTransitionEnd = function onTransitionEnd (element) {
    element.classList.remove('side-nav-animatable')
    element.removeEventListener('transitionEnd', onTransitionEnd)
  }

  app.on('sideNav:open', (payload) => {
    const element = payload.element

    element.classList.add('side-nav-animatable')
    element.classList.add('side-nav-visible')
    element.addEventListener('transitionEnd', onTransitionEnd(element))
  })

  app.on('sideNav:close', (payload) => {
    const element = payload.element
    element.classList.add('side-nav-animatable')
    element.classList.remove('side-nav-visible')
    element.addEventListener('transitionEnd', onTransitionEnd(element))
  })
}
