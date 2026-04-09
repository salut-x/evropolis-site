import gsap from 'gsap'

export default class FilterTabs {
  selectors = {
    root:    '[data-js-filter]',
    buttons: '[data-js-filter-btn]',
    items:   '[data-js-filter-item]',
  }

  stateClasses = {
    active: 'project-filter__btn--active',
  }

  constructor(rootEl) {
    this.root = rootEl
    if (!this.root) return

    this.buttons = [...this.root.querySelectorAll(this.selectors.buttons)]
    this.items = [...document.querySelectorAll(this.selectors.items)]
    this.originalOrder = [...this.items]
    this.container = this.items[0]?.parentElement

    this.activeCategory = 'all'

    this.bindEvents()
  }

  bindEvents() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', this.onBtnClick)
    })
  }

  onBtnClick = e => {
    const category = e.currentTarget.dataset.category
    if (category === this.activeCategory) return

    this.activeCategory = category
    this.updateButtons()
    this.filterItems()
  }

  updateButtons() {
    this.buttons.forEach(btn => {
      btn.classList.toggle(
        this.stateClasses.active,
        btn.dataset.category === this.activeCategory
      )
    })
  }

  filterItems() {
    const isAll = this.activeCategory === 'all'

    const toShow = isAll
      ? [...this.originalOrder]
      : this.originalOrder.filter(item => item.dataset.category === this.activeCategory)

    const toHide = this.originalOrder.filter(item => !toShow.includes(item))

    if (!this.container) return

    // Сначала фейдим все что сейчас в контейнере
    const current = [...this.container.children]

    gsap.to(current, {
      opacity: 0,
      scale: 0.97,
      duration: 0.2,
      onComplete: () => {
        // Удаляем все из контейнера
        current.forEach(el => this.container.removeChild(el))

        // Добавляем только нужные в правильном порядке
        toShow.forEach(el => this.container.appendChild(el))

        // Показываем
        gsap.fromTo(
          toShow,
          { opacity: 0, scale: 0.97 },
          { opacity: 1, scale: 1, duration: 0.25, stagger: 0.04 }
        )
      },
    })
  }
}
