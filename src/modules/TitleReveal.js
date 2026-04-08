import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class TitleReveal {
	init() {
		gsap.set('.section .reveal__inner', { yPercent: 110 })

		ScrollTrigger.batch('.section .reveal__inner', {
			onEnter: batch => {
				gsap.fromTo(
					batch,
					{ yPercent: 110 },
					{
						yPercent: 0,
						duration: 1,
						stagger: 0.08,
						ease: 'power3.out'
					}
				)
			},
			start: 'top 100%',
			once: true
		})
	}
}
