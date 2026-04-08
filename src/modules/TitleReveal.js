import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class TitleReveal {
	init() {
		ScrollTrigger.batch('.section .reveal__inner', {
			onEnter: batch => {
				gsap.from(batch, {
					yPercent: 110,
					duration: 1,
					stagger: 0.08,
					ease: 'power3.out'
				})
			},
			start: 'top 100%',
			once: true
		})
	}
}
