import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class ExpertiseScroll {
  selectors = {
    root: '[data-js-expertise]',
    sticky: '[data-js-expertise-sticky]',
    items: '[data-js-expertise-item]',
    image: '.service-card__image',
    content: '.service-card__body',
    header: '.service-card__header',
  }

  constructor(rootEl) {
    this.root = rootEl
    if (!this.root) return

    this.sticky = this.root.querySelector(this.selectors.sticky)
    this.items = [...this.root.querySelectorAll(this.selectors.items)]

    if (this.items.length < 2) return

    this.init()
  }

  init() {
    const total = this.items.length

    gsap.set(this.root, { height: `${total * 100}vh` })

    this.items.forEach((item, i) => {
      const nextItem = this.items[i + 1]
      if (!nextItem) return

      const currentImage = item.querySelector(this.selectors.image)
      const nextImage = nextItem.querySelector(this.selectors.image)
      const nextContent = nextItem.querySelector(this.selectors.content)
      const nextHeader = nextItem.querySelector(this.selectors.header)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.root,
          start: `${i * 100}vh top`,
          end: `${(i + 1) * 100}vh top`,
          scrub: true,
        },
      })

      tl.set(nextItem, { opacity: 1, visibility: 'visible' }, 0)

      tl.fromTo(
        nextImage,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.5, ease: 'power2.inOut' },
        0
      )

      tl.fromTo(
        [nextContent, nextHeader],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.05 },
        0.1
      )

      tl.to(
        currentImage,
        { clipPath: 'inset(0 0% 0 100%)', duration: 0.5, ease: 'power2.inOut' },
        0.5
      )

      tl.to(
        item,
        { opacity: 0, visibility: 'hidden', duration: 0.2 },
        0.8
      )
    })
  }
}
