import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class AboutAnimation {
	init() {
		if (document.querySelector('.about-company')) {
			document.addEventListener(
				'preloaderHiding',
				() => {
					gsap.from('.about-company__title .reveal__inner', {
						yPercent: 110,
						duration: 1,
						stagger: 0.08,
						ease: 'power3.out'
					})
				},
				{ once: true }
			)

			gsap.fromTo(
				'.about-company__bg',
				{ yPercent: 0 },
				{
					yPercent: -15,
					ease: 'none',
					scrollTrigger: {
						trigger: '.about-company',
						start: 'top bottom',
						end: 'bottom top',
						scrub: true
					}
				}
			)
		}

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
