import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class AboutCompanyText {
	selectors = {
		root: '[data-js-about-company]',
		text: '[data-js-about-company-text]'
	}

	constructor() {
		this.root = document.querySelector(this.selectors.root)
		if (!this.root) return

		this.texts = this.root.querySelectorAll(this.selectors.text)
		this.init()
	}

	splitToWords(el) {
		const words = el.innerText.split(' ')
		el.innerHTML = words
			.map(
				word =>
					`<span class="word" style="opacity: 0.5; display: inline-block;">${word}</span>`
			)
			.join(' ')
		return el.querySelectorAll('.word')
	}

	init() {
		this.texts.forEach((textEl, index) => {
			const words = this.splitToWords(textEl)
			const total = this.texts.length
			const gap = 5 // % паузы между абзацами

			const segmentSize = (100 - gap * (total - 1)) / total
			const startPercent = index * (segmentSize + gap) + segmentSize * 0
			const endPercent = startPercent + segmentSize * 0.7

			gsap.to(words, {
				opacity: 1,
				stagger: 0.08,
				scrollTrigger: {
					trigger: this.root,
					start: `top+=${startPercent}% center`,
					end: `top+=${endPercent}% center`,
					scrub: 0.5
				}
			})
		})
	}
}
