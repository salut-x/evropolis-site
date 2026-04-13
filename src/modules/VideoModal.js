export default class VideoModal {
  selectors = {
    root: '[data-js-video-modal]',
    close: '[data-js-video-modal-close]',
    iframe: '[data-js-video-modal-iframe]',
    trigger: '[data-js-video-modal-trigger]',
  }

  stateClasses = {
    isOpen: 'video-modal--is-open',
  }

  constructor() {
    this.root = document.querySelector(this.selectors.root)
    if (!this.root) return

    this.close = this.root.querySelector(this.selectors.close)
    this.iframe = this.root.querySelector(this.selectors.iframe)
    this.triggers = document.querySelectorAll(this.selectors.trigger)

    this.bindEvents()
  }

  open = src => {
    this.iframe.src = src
    this.root.classList.add(this.stateClasses.isOpen)
    document.body.style.overflow = 'hidden'
  }

  closeModal = () => {
    this.root.classList.remove(this.stateClasses.isOpen)
    this.iframe.src = ''
    document.body.style.overflow = ''
  }

  onTriggerClick = e => {
    e.preventDefault()
    const src = e.currentTarget.dataset.jsVideoModalTrigger
    this.open(src)
  }

  onOverlayClick = e => {
    if (e.target === this.root) this.closeModal()
  }

  onKeyDown = e => {
    if (e.key === 'Escape') this.closeModal()
  }

  bindEvents() {
    this.close.addEventListener('click', this.closeModal)
    this.root.addEventListener('click', this.onOverlayClick)
    document.addEventListener('keydown', this.onKeyDown)
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', this.onTriggerClick)
    })
  }
}
