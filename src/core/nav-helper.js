import app from 'ampersand-app'
import localLinks from 'local-links'

export default function navHelper (event) {
  const pathname = localLinks.getLocalPathname(event)
  if (pathname) {
    event.preventDefault()
    app.router.history.navigate(pathname)
  }
}
