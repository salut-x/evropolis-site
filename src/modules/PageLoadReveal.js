import gsap from 'gsap'

export default class PageLoadReveal {
	constructor() {
		document.addEventListener('preloaderHiding', () => this.init(), {
			once: true
		})
	}

	init() {
		const items = document.querySelectorAll('.reveal-onload .reveal-onload__inner')
		if (!items.length) return

		gsap.from(items, {
			yPercent: 110,
			duration: 1,
			stagger: 0.08,
			ease: 'power3.out'
		})
	}
}
