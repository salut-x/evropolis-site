import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class AboutAnimation {
	init() {
		gsap.from('.about__desc-line-inner', {
			yPercent: 110,
			duration: 0.9,
			stagger: 0.1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.about__desc-line-inner',
				start: 'top 85%',
				once: true
			}
		})
	}
}
