import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import CtaModal from './modules/CtaModal'
import HeaderScroll from './modules/HeaderScroll'
import MenuModal from './modules/MenuModal'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
	duration: 1.1,
	easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

window.lenis = lenis

gsap.ticker.add(time => {
	lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

new CtaModal()
new MenuModal()
new HeaderScroll()

/*
// Остановить скролл
window.lenis.stop()

// Запустить скролл
window.lenis.start()

// Проскроллить к элементу
window.lenis.scrollTo('#section', { duration: 1.5 })

// Проскроллить к позиции
window.lenis.scrollTo(500, { duration: 1 })

// Проскроллить наверх
window.lenis.scrollTo(0)
*/
