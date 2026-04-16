import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class TeamAnimation {
	selectors = {
		root: '[data-js-team]',
		cards: '[data-js-team-card]'
	}

	constructor() {
		this.root = document.querySelector(this.selectors.root)
		if (!this.root) return

		this.init()
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
					stagger: 0.15
				})
			},
			start: 'top 80%',
			once: true
		})
	}
}
