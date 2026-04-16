
import Swiper from 'swiper'
import { FreeMode } from 'swiper/modules'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class HistorySlider {
  selectors = {
    root: '[data-js-history]',
    cards: '[data-js-history-card]',
  }

  constructor() {
    this.root = document.querySelector(this.selectors.root)
    if (!this.root) return

    this.swiper = null
    this.mq = window.matchMedia('(width <= 1024px)')

    this.mq.addEventListener('change', this.onBreakpoint)
    this.onBreakpoint()
    this.init()
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
      slidesPerView: 'auto',
      grabCursor: true,
    })
  }

  destroySwiper() {
    if (!this.swiper) return
    this.swiper.destroy(true, true)
    this.swiper = null
  }

  init() {
    gsap.set(this.selectors.cards, { opacity: 0, y: 40 })

    ScrollTrigger.batch(this.selectors.cards, {
      onEnter: batch => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.2,
        })
      },
      start: 'top 75%',
      once: true,
    })
  }
}
