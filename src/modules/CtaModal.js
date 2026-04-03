import gsap from 'gsap'

class CtaModal {
	selectors = {
		trigger: '[data-js-cta-trigger]',
		dialog: '[data-js-cta-dialog]',
		close: '[data-js-cta-close]'
	}

	stateClasses = {
		isLock: 'is-lock'
	}

	constructor() {
		this.triggers = document.querySelectorAll(this.selectors.trigger)
		this.dialogElement = document.querySelector(this.selectors.dialog)
		this.closeElement = this.dialogElement?.querySelector(this.selectors.close)

		if (!this.dialogElement) return

		// Создаём оверлей
		this.overlay = document.createElement('div')
		this.overlay.classList.add('cta-overlay')
		document.body.appendChild(this.overlay)

		this.bindEvents()
	}

	open = () => {
		window.lenis?.stop()
		this.dialogElement.show()
		document.documentElement.classList.add(this.stateClasses.isLock)

		// Анимируем оверлей и диалог вместе
		gsap.to(this.overlay, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' })
		gsap.fromTo(
			this.dialogElement,
			{ x: '100%' },
			{ x: '0%', duration: 0.5, ease: 'power3.out' }
		)

		gsap.fromTo(
			this.linkElements,
			{ autoAlpha: 0, x: 50 },
			{
				autoAlpha: 1,
				x: 0,
				duration: 0.4,
				stagger: 0.1,
				ease: 'power2.out',
				delay: 0.2
			}
		)
	}

	close = () => {
		window.lenis?.start()
		document.documentElement.classList.remove(this.stateClasses.isLock)

		gsap.to(this.overlay, { autoAlpha: 0, delay: 0.4, duration: 0.3 })
		gsap.to(this.dialogElement, {
			x: '100%',
			duration: 0.4,
			delay: 0.4,
			ease: 'power3.in',
			onComplete: () => this.dialogElement.close()
		})
	}

	onBackdropClick = e => {
		const rect = this.dialogElement.getBoundingClientRect()
		const isOutside =
			e.clientX < rect.left ||
			e.clientX > rect.right ||
			e.clientY < rect.top ||
			e.clientY > rect.bottom

		if (isOutside) this.close()
	}

	bindEvents() {
		this.triggers.forEach(trigger =>
			trigger.addEventListener('click', this.open)
		)
		this.closeElement?.addEventListener('click', this.close)
		this.dialogElement.addEventListener('click', this.onBackdropClick)
		this.overlay.addEventListener('click', this.close)
	}
}

export default CtaModal
