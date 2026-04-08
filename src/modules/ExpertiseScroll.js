import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class ExpertiseScroll {
	constructor(el) {
		this.el = el
		this.items = [...el.querySelectorAll('[data-js-expertise-item]')]
		this.slides = [...el.querySelectorAll('[data-js-expertise-slide]')]
		this.counter = el.querySelector('[data-js-expertise-counter]')
		this.total = this.items.length
		this.current = 0

		if (!this.total) return

		this.mq = window.matchMedia('(width > 1024px)')
		this.mq.addEventListener('change', this.onBreakpoint)
		this.onBreakpoint()
	}

	onBreakpoint = () => {
		if (this.mq.matches) {
			this.resetForTablet()
			this.init()
		} else {
			this.destroy()
			this.resetForTablet()
		}
	}

	fmt(n) {
		return String(n).padStart(2, '0')
	}

	resetForTablet() {
		this.items.forEach(item => {
			item.style.removeProperty('visibility')
			item.style.removeProperty('opacity')
			item.style.removeProperty('clip-path')
		})

		this.slides.forEach(slide => {
			slide.style.removeProperty('visibility')
			slide.style.removeProperty('opacity')
			slide.style.removeProperty('clip-path')
		})
	}

	destroy() {
		ScrollTrigger.getAll()
			.filter(st => st.vars?.trigger === this.el || st.trigger === this.el)
			.forEach(st => st.kill())

		gsap.killTweensOf([...this.items, ...this.slides])
		this.el.style.removeProperty('--expertise-count')
	}

	init() {
		this.el.style.setProperty('--expertise-count', this.total)

		this.slides.forEach((slide, i) => {
			gsap.set(slide, {
				clipPath: i === 0 ? 'inset(0% 0 0% 0)' : 'inset(100% 0 0% 0)'
			})
		})

		this.items.forEach((item, i) => {
			gsap.set(item, {
				visibility: i === 0 ? 'visible' : 'hidden',
				opacity: i === 0 ? 1 : 0
			})
		})

		this.slides.forEach((slide, i) => {
			if (i === 0) return

			const prevItem = this.items[i - 1]
			const currItem = this.items[i]

			const start = `top+=${(i / this.total) * 100}% top`
			const end = `top+=${((i + 0.5) / this.total) * 100}% top`

			gsap.fromTo(
				slide,
				{ clipPath: 'inset(100% 0 0% 0)' },
				{
					clipPath: 'inset(0% 0 0% 0)',
					ease: 'none',
					scrollTrigger: {
						trigger: this.el,
						start,
						end,
						scrub: true
					}
				}
			)

			ScrollTrigger.create({
				trigger: this.el,
				start: `top+=${((i + 0.25) / this.total) * 100}% top`,
				onEnter: () => this.showItem(i, prevItem, currItem),
				onLeaveBack: () => this.showItem(i - 1, currItem, prevItem)
			})
		})

		ScrollTrigger.create({
			trigger: this.el,
			start: 'top top',
			end: 'bottom bottom',
			onUpdate: self => {
				const step = Math.min(
					Math.floor(self.progress * this.total),
					this.total - 1
				)
				if (step !== this.current) {
					this.current = step
					if (this.counter) {
						this.counter.textContent = `${this.fmt(step + 1)} / ${this.fmt(
							this.total
						)}`
					}
				}
			}
		})

		ScrollTrigger.create({
			trigger: this.el,
			start: 'bottom bottom',
			end: '+=1000',
			pin: true,
			pinSpacing: true
		})
	}

	showItem(index, outItem, inItem) {
		gsap.to(outItem, {
			opacity: 0,
			duration: 0.25,
			ease: 'power2.in',
			onComplete: () => gsap.set(outItem, { visibility: 'hidden' })
		})

		gsap.set(inItem, { visibility: 'visible', opacity: 0 })

		const titleEl = inItem.querySelector('.expertise__title-inner')
		if (titleEl) {
			gsap.fromTo(
				titleEl,
				{ yPercent: 110 },
				{ yPercent: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 }
			)
		}

		const fadeEls = [
			inItem.querySelector('.expertise__subtitle'),
			inItem.querySelector('.expertise__description')
		].filter(Boolean)

		if (fadeEls.length) {
			gsap.fromTo(
				fadeEls,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.2 }
			)
		}

		gsap.to(inItem, { opacity: 1, duration: 0.05, delay: 0.1 })
	}
}
