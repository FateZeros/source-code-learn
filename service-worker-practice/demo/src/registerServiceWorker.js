/* eslint-disable */
import { register } from 'register-service-worker'
import alertify from 'alertify.js'

const noticeServiceWorkerUpdate = worker => {
  alertify.confirm('new Content', () => {
    console.log(3333)
    worker.postMessage({ action: 'updated' })
  })
}

register(`/service-worker.js`, {
  registrationOptions: { scope: './' },
  ready(registration) {
    console.log(
      'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
    )
  },
  registered(registration) {
    console.log('Service worker has been registered.')
    // setInterval(() => {
    //   registration.update()
    // }, 1000 * 60 * 60) // e.g. hourly checks
  },
  cached(registration) {
    console.log('Content has been cached for offline use.')
  },
  updatefound(registration) {
    console.log('New content is downloading.')
  },
  updated(registration) {
    console.log('New content is available; please refresh.')
    console.log(registration.waiting, '3 service-worker updated')

    // noticeServiceWorkerUpdate(registration.waiting)
    document.dispatchEvent(
      new CustomEvent('serviceWorkerUpdateEvent', { detail: registration })
    )
  },
  offline() {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error(error) {
    console.error('Error during service worker registration:', error)
  }
})
// }
