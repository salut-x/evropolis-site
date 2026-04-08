import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class FadeIn {
	init() {
		ScrollTrigger.batch('.fade-in', {
			onEnter: batch => {
				gsap.to(batch, {
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.1,
					ease: 'power3.out'
				})
			},
			start: 'top 90%',
			once: true
		})
	}
}
