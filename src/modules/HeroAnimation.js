import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class HeroAnimation {
	constructor() {
		document.addEventListener('preloaderHiding', () => this.init(), {
			once: true
		})
	}

	init() {
		const tl = gsap.timeline()

		// 1. Фон: scale от большого к нормальному
		tl.from(
			'.hero__bg',
			{
				scale: 1.5,
				duration: 1.3,
				ease: 'power3.out'
			},
			0
		)

		// 2. Header: opacity
		tl.from(
			'[data-js-header]',
			{
				opacity: 0,
				duration: 1,
				ease: 'power2.out'
			},
			0.5
		)

		// 3. Partners: opacity
		tl.from(
			'.hero__partners',
			{
				opacity: 0,
				duration: 0.9,
				ease: 'power2.out'
			},
			0.5
		)

		// 4. Midline линия рисуется слева направо
		tl.from(
			'.hero__midline-line',
			{
				scaleX: 0,
				transformOrigin: 'left center',
				duration: 1.2,
				ease: 'power2.inOut'
			},
			0.1
		)

		// 5. Midline пункты из маски снизу вверх
		tl.from(
			'.hero__midline-item',
			{
				yPercent: 110,
				duration: 1,
				stagger: 0.1,
				ease: 'power3.out'
			},
			1
		)

		// 6. H1 строки из маски снизу вверх
		tl.from(
			'.hero__title-line-inner',
			{
				yPercent: 110,
				duration: 1,
				stagger: 0.08,
				ease: 'power3.out'
			},
			1
		)

		// 7. Фон: scale при скролле вниз
		ScrollTrigger.create({
			trigger: '.hero',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
			onUpdate: self => {
				gsap.set('.hero__bg', {
					scale: 1 + self.progress * 0.15
				})
			}
		})
	}
}
