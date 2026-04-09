import FilterTabs from './modules/FilterTabs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import AboutAnimation from './modules/AboutAnimation'
import CtaModal from './modules/CtaModal'
import ExpertiseScroll from './modules/ExpertiseScroll'
import FadeIn from './modules/FadeIn'
import FeaturesAnimation from './modules/FeaturesAnimation'
import HeaderScroll from './modules/HeaderScroll'
import HeroAnimation from './modules/HeroAnimation'
import MenuModal from './modules/MenuModal'
import PageLoadReveal from './modules/PageLoadReveal'
import Preloader from './modules/Preloader'
import TitleReveal from './modules/TitleReveal'

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

lenis.on('scroll', ScrollTrigger.update)

new Preloader()
new HeroAnimation()
new AboutAnimation().init()
new FadeIn().init()
new CtaModal()
new MenuModal()
new HeaderScroll()
new FeaturesAnimation()

document.querySelectorAll('[data-js-expertise]').forEach(el => {
	new ExpertiseScroll(el)
})

new TitleReveal().init()
new PageLoadReveal()

document.querySelectorAll('[data-js-filter]').forEach(el => {
	new FilterTabs(el)
})
