import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Swiper from 'swiper'
import 'swiper/css'
import { FreeMode } from 'swiper/modules'

gsap.registerPlugin(ScrollTrigger)

export default class FeaturesAnimation {
	selectors = {
		root: '[data-js-features]',
		cards: '[data-js-features-card]'
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
			modules: [FreeMode],
			slidesPerView: 'auto',
			freeMode: true,
			grabCursor: true
		})
	}

	destroySwiper() {
		if (!this.swiper) return
		this.swiper.destroy(true, true)
		this.swiper = null
	}

	init() {
		ScrollTrigger.batch(this.selectors.cards, {
			onEnter: batch => {
				gsap.to(batch, {
					opacity: 1,
					y: 0,
					delay: this.mq.matches ? 1 : 0.3,
					duration: 0.7,
					ease: 'power3.out',
					stagger: 0.2
				})
			},
			start: 'top 75%',
			once: true
		})
	}
}
