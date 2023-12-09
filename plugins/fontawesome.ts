import { library, config } from '@fortawesome/fontawesome-svg-core'
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faEnvelope, faGithub, faLinkedin, faAngleDown)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FA', FontAwesomeIcon)
})
