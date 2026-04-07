import gsap from 'gsap'

export default class Preloader {
	constructor() {
		this.el = document.getElementById('preloader')
		this.spinner = this.el?.querySelector('.preloader__spinner')

		if (!this.el) return

		window.lenis?.stop()

		const minDelay = new Promise(resolve => setTimeout(resolve, 1200))
		const pageLoad = new Promise(resolve =>
			window.addEventListener('load', resolve)
		)

		Promise.all([minDelay, pageLoad]).then(() => this.hide())
	}

	hide() {
		const tl = gsap.timeline()

		tl.to(this.spinner, {
			opacity: 0,
			duration: 0.3,
			ease: 'power2.in'
		})

		tl.to(this.el, {
			opacity: 0,
			duration: 2,
			ease: 'power3.out', // строчная .out — важно
			onStart: () => {
				// диспатчим когда прелоадер начал уходить
				document.dispatchEvent(new Event('preloaderHiding'))
			},
			onComplete: () => {
				this.el.style.visibility = 'hidden'
				window.lenis?.start()
				document.dispatchEvent(new Event('preloaderDone'))
			}
		})
	}
}
