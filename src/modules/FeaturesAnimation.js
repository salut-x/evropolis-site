import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class FeaturesAnimation {
	init() {
		ScrollTrigger.batch('[data-js-features-card]', {
			onEnter: batch => {
				gsap.to(batch, {
					opacity: 1,
					delay: 1.2,
					y: -10,
					duration: 0.7,
					ease: 'power3.out',
					stagger: 0.2
				})
			},
			start: 'top 90%',
			once: true
		})
	}
}
