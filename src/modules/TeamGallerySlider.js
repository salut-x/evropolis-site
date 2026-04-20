
import Swiper from 'swiper'
import { FreeMode } from 'swiper/modules'

export default class TeamGallerySlider {
  selectors = {
    root: '[data-js-team-gallery]',
  }

  constructor() {
    this.root = document.querySelector(this.selectors.root)
    if (!this.root) return

    this.swiper = null
    this.mq = window.matchMedia('(width <= 1024px)')

    this.mq.addEventListener('change', this.onBreakpoint)
    this.onBreakpoint()
  }

  onBreakpoint = () => {
    if (this.mq.matches) {
      this.initSwiper()
    } else {
      this.destroySwiper()
    }
  }

  initSwiper() {
    if (this.swiper) return
    this.swiper = new Swiper(this.root, {
      modules: [FreeMode],
      slidesPerView: 'auto',
      grabCursor: true,
      freeMode: true,
    })
  }

  destroySwiper() {
    if (!this.swiper) return
    this.swiper.destroy(true, true)
    this.swiper = null
  }
}
