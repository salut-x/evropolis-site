import gsap from 'gsap'

class CtaModal {
  selectors = {
    trigger: '[data-js-cta-trigger]',
    dialog: '[data-js-cta-dialog]',
    close: '[data-js-cta-close]',
    header: '.cta-dialog__header',
    form: '.contacts-form',
  }

  stateClasses = {
    isLock: 'is-lock',
  }

  constructor() {
    this.triggers = document.querySelectorAll(this.selectors.trigger)
    this.dialogElement = document.querySelector(this.selectors.dialog)
    this.closeElement = this.dialogElement?.querySelector(this.selectors.close)
    this.headerElements = this.dialogElement?.querySelectorAll(
      `${this.selectors.header} > *`
    )
    this.formElement = this.dialogElement?.querySelector(this.selectors.form)

    if (!this.dialogElement) return

    this.overlay = document.createElement('div')
    this.overlay.classList.add('cta-overlay')
    document.body.appendChild(this.overlay)

    this.bindEvents()
  }

  open = () => {
    window.lenis?.stop()
    this.dialogElement.show()
    document.documentElement.classList.add(this.stateClasses.isLock)

    gsap.to(this.overlay, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' })
    gsap.fromTo(
      this.dialogElement,
      { x: '100%' },
      { x: '0%', duration: 0.5, ease: 'power3.out' }
    )
    gsap.fromTo(
      this.headerElements,
      { autoAlpha: 0, x: 50 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2,
      }
    )
    gsap.fromTo(
      this.formElement,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.5, ease: 'power2.out', delay: 0.4 }
    )
  }

  close = () => {
    window.lenis?.start()
    document.documentElement.classList.remove(this.stateClasses.isLock)

    gsap.to(this.formElement, { autoAlpha: 0, duration: 0.2, ease: 'power2.in' })
    gsap.to(this.headerElements, {
      autoAlpha: 0,
      x: 50,
      delay: 0.1,
      duration: 0.3,
      stagger: { each: 0.08, from: 'end' },
      ease: 'power2.in',
    })
    gsap.to(this.overlay, { autoAlpha: 0, delay: 0.3, duration: 0.3 })
    gsap.to(this.dialogElement, {
      x: '100%',
      duration: 0.4,
      delay: 0.3,
      ease: 'power3.in',
      onComplete: () => this.dialogElement.close(),
    })
  }

  onOverlayClick = () => {
    this.close()
  }

  bindEvents() {
    this.triggers.forEach(trigger =>
      trigger.addEventListener('click', this.open)
    )
    this.closeElement?.addEventListener('click', this.close)
    this.overlay.addEventListener('click', this.onOverlayClick)
  }
}

export default CtaModal
