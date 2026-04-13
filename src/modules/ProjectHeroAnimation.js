import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class ProjectHeroAnimation {
	constructor() {
		if (!document.querySelector('.project-hero')) return

		document.addEventListener('preloaderHiding', () => this.init(), {
			once: true
		})
	}

	init() {
		const tl = gsap.timeline()

		tl.from(
			'.project-hero__bg',
			{
				scale: 1.5,
				duration: 1.3,
				ease: 'power3.out'
			},
			0
		)

		tl.from(
			'.project-hero__title .reveal__inner',
			{
				yPercent: 110,
				duration: 1,
				stagger: 0.08,
				ease: 'power3.out'
			},
			0.8
		)
		ScrollTrigger.create({
			trigger: '.project-hero',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
			onUpdate: self => {
				gsap.set('.project-hero__bg', {
					scale: 1 + self.progress * 0.15
				})
			}
		})
	}
}
