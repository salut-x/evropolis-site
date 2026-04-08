import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

class HeaderScroll {
	selectors = {
		compact: '[data-js-header-compact]'
	}

	constructor() {
		this.compactElement = document.querySelector(this.selectors.compact)
		if (!this.compactElement) return

		this.init()
	}

	init() {
		// скрыт под маской — уехал вниз
		gsap.set(this.compactElement, { y: '150%' })

		if (window.scrollY > 700) {
			gsap.set(this.compactElement, { y: '0%' })
		}

		ScrollTrigger.create({
			start: '800px top',
			onEnter: () =>
				gsap.to(this.compactElement, {
					y: '0%',
					duration: 0.6,
					ease: 'power3.out'
				}),
			onLeaveBack: () =>
				gsap.to(this.compactElement, {
					y: '150%',
					duration: 0.4,
					ease: 'power3.in'
				})
		})
	}
}

export default HeaderScroll
