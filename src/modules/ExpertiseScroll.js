import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class ExpertiseScroll {
	constructor(el) {
		this.el = el
		this.items = [...el.querySelectorAll('[data-js-expertise-item]')]
		this.slides = [...el.querySelectorAll('[data-js-expertise-slide]')]
		this.counter = el.querySelector('[data-js-expertise-counter]')
		this.total = this.items.length
		this.current = 0

		if (this.total && window.matchMedia('(width > 1024px)').matches) {
			this.init()
		}
	}

	fmt(n) {
		return String(n).padStart(2, '0')
	}

	init() {
		// Высота секции = кол-во слайдов × 100vh (задаётся через CSS-переменную)
		this.el.style.setProperty('--expertise-count', this.total)

		// Начальное состояние картинок:
		// первая открыта, остальные закрыты шторкой (top = 100%)
		this.slides.forEach((slide, i) => {
			gsap.set(slide, {
				clipPath: i === 0 ? 'inset(0% 0 0% 0)' : 'inset(100% 0 0% 0)'
			})
		})

		// Начальное состояние контента:
		// первый видим, остальные скрыты
		this.items.forEach((item, i) => {
			gsap.set(item, {
				visibility: i === 0 ? 'visible' : 'hidden',
				opacity: i === 0 ? 1 : 0
			})
		})

		// Для каждого перехода создаём отдельный ScrollTrigger с scrub
		// Каждый занимает 1/total часть общей высоты секции
		this.slides.forEach((slide, i) => {
			if (i === 0) return // первый уже открыт

			const prevItem = this.items[i - 1]
			const currItem = this.items[i]

			// Точки старта/конца в px внутри секции
			// каждый переход занимает равный отрезок скролла
			const start = `top+=${(i / this.total) * 100}% top`
			const end = `top+=${((i + 0.5) / this.total) * 100}% top`

			// ── Картинка: scrub привязывает шторку к скроллу напрямую ──
			// inset(top) уменьшается с 100% → 0% по мере скролла вниз
			gsap.fromTo(
				slide,
				{ clipPath: 'inset(100% 0 0% 0)' },
				{
					clipPath: 'inset(0% 0 0% 0)',
					ease: 'none', // ease: none обязателен для scrub — иначе будет рывок
					scrollTrigger: {
						trigger: this.el,
						start,
						end,
						scrub: true // шторка двигается синхронно со скроллом
					}
				}
			)

			// ── Контент: переключается в середине перехода ───────────
			ScrollTrigger.create({
				trigger: this.el,
				// середина анимации шторки — момент смены контента
				start: `top+=${((i + 0.25) / this.total) * 100}% top`,
				onEnter: () => this.showItem(i, prevItem, currItem),
				onLeaveBack: () => this.showItem(i - 1, currItem, prevItem)
			})
		})

		// Счётчик: обновляется синхронно со скроллом
		ScrollTrigger.create({
			trigger: this.el,
			start: 'top top',
			end: 'bottom bottom',
			onUpdate: self => {
				const step = Math.min(
					Math.floor(self.progress * this.total),
					this.total - 1
				)
				if (step !== this.current) {
					this.current = step
					if (this.counter) {
						this.counter.textContent = `${this.fmt(step + 1)} / ${this.fmt(
							this.total
						)}`
					}
				}
			}
		})
	}

	// Переключает видимость контента между двумя айтемами
	showItem(index, outItem, inItem) {
		// Скрываем предыдущий контент
		gsap.to(outItem, {
			opacity: 0,
			duration: 0.25,
			ease: 'power2.in',
			onComplete: () => gsap.set(outItem, { visibility: 'hidden' })
		})

		// Показываем новый контент
		gsap.set(inItem, { visibility: 'visible', opacity: 0 })

		// Заголовок едет снизу вверх из-под маски (overflow: hidden на родителе)
		const titleEl = inItem.querySelector('.expertise__title-inner')
		if (titleEl) {
			gsap.fromTo(
				titleEl,
				{ yPercent: 110 },
				{ yPercent: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 }
			)
		}

		// Подзаголовок и описание — fade in
		const fadeEls = [
			inItem.querySelector('.expertise__subtitle'),
			inItem.querySelector('.expertise__description')
		].filter(Boolean)

		if (fadeEls.length) {
			gsap.fromTo(
				fadeEls,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.2 }
			)
		}

		gsap.to(inItem, { opacity: 1, duration: 0.05, delay: 0.1 })
	}
}
