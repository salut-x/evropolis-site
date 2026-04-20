import gsap from 'gsap'

const STORAGE_KEY = 'cookie_consent'

class CookieBanner {
	selectors = {
		banner: '[data-js-cookie-banner]',
		accept: '[data-js-cookie-accept]',
		decline: '[data-js-cookie-decline]'
	}

	constructor() {
		if (localStorage.getItem(STORAGE_KEY)) return

		this.banner = document.querySelector(this.selectors.banner)
		if (!this.banner) return

		this.acceptBtn = this.banner.querySelector(this.selectors.accept)
		this.declineBtn = this.banner.querySelector(this.selectors.decline)

		this.bindEvents()
		this.show()
	}

	show() {
		gsap.to(this.banner, {
			translateY: '0%',
			duration: 0.5,
			ease: 'power3.out',
			delay: 1.5
		})
	}

	hide(onComplete) {
		gsap.to(this.banner, {
			translateY: 'calc(100% + 16px)',
			duration: 0.4,
			ease: 'power3.in',
			onComplete
		})
	}

	onAccept = () => {
		localStorage.setItem(STORAGE_KEY, 'accepted')
		this.hide(() => this.banner.remove())
	}

	onDecline = () => {
		localStorage.setItem(STORAGE_KEY, 'declined')
		this.hide(() => this.banner.remove())
	}

	bindEvents() {
		this.acceptBtn?.addEventListener('click', this.onAccept)
		this.declineBtn?.addEventListener('click', this.onDecline)
	}

	static hasConsent() {
		return localStorage.getItem(STORAGE_KEY) === 'accepted'
	}
}

export default CookieBanner
