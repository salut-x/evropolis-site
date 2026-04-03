import gsap from 'gsap'

class MenuModal {
	selectors = {
		trigger: '[data-js-menu-trigger]',
		dialog: '[data-js-menu-dialog]',
		close: '[data-js-menu-close]',
		links: '.menu-dialog__link',
		footer: '[data-js-menu-footer]'
	}

	stateClasses = {
		isLock: 'is-lock'
	}

	constructor() {
		this.triggers = document.querySelectorAll(this.selectors.trigger)
		this.dialogElement = document.querySelector(this.selectors.dialog)
		this.closeElement = this.dialogElement?.querySelector(this.selectors.close)
		this.linkElements = this.dialogElement?.querySelectorAll(
			this.selectors.links
		)
		this.footerElement = this.dialogElement?.querySelector(
			this.selectors.footer
		)

		if (!this.dialogElement) return

		// Создаём оверлей
		this.overlay = document.createElement('div')
		this.overlay.classList.add('menu-overlay')
		document.body.appendChild(this.overlay)

		this.bindEvents()
	}

	open = () => {
		window.lenis?.stop()
		this.dialogElement.show()
		document.documentElement.classList.add(this.stateClasses.isLock)

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
		gsap.fromTo(
			this.footerElement,
			{ autoAlpha: 0 },
			{ autoAlpha: 1, duration: 0.6, ease: 'power2.out', delay: 0.5 } // ← после ссылок
		)
	}

	close = () => {
		window.lenis?.start()
		document.documentElement.classList.remove(this.stateClasses.isLock)

		gsap.to(this.footerElement, {
			autoAlpha: 0,
			duration: 0.4,
			ease: 'power2.in'
		})

		gsap.to(this.overlay, { autoAlpha: 0, delay: 0.4, duration: 0.3 })
		gsap.to(this.dialogElement, {
			x: '100%',
			duration: 0.3,
			delay: 0.4,
			ease: 'power3.in',
			onComplete: () => this.dialogElement.close()
		})

		gsap.to(this.linkElements, {
			autoAlpha: 0,
			x: 50,
			duration: 0.3,
			stagger: { each: 0.08, from: 'end' }, // ← from: 'end' — обратный порядок
			ease: 'power2.in'
		})
	}

	bindEvents() {
		this.triggers.forEach(trigger =>
			trigger.addEventListener('click', this.open)
		)
		this.closeElement?.addEventListener('click', this.close)
		this.overlay.addEventListener('click', this.close)
	}
}

export default MenuModal
