class SupportForm {
  selectors = {
    form: '[data-js-support-form]',
    fields: '.contacts-form__fields',
    requiredInputs: '[required]',
  }

  stateClasses = {
    isSubmitted: 'is-submitted',
    isError: 'is-error',
    isFieldError: 'is-field-error',
    isLoading: 'is-loading',
  }

  constructor() {
    this.form = document.querySelector(this.selectors.form)
    if (!this.form) return
    this.bindEvents()
  }

  validate() {
    let isValid = true
    const inputs = this.form.querySelectorAll(this.selectors.requiredInputs)

    inputs.forEach(input => {
      const field = input.closest('.field')
      if (!field) return

      const empty = !input.value.trim()
      field.classList.toggle(this.stateClasses.isFieldError, empty)
      if (empty) isValid = false
    })

    return isValid
  }

  onSubmit = async e => {
    e.preventDefault()

    if (!this.validate()) return

    this.form.classList.add(this.stateClasses.isLoading)

    try {
      const data = new FormData(this.form)
      const response = await fetch(this.form.action || '/', {
        method: 'POST',
        body: data,
      })

      if (!response.ok) throw new Error('Server error')

      this.form.classList.add(this.stateClasses.isSubmitted)
    } catch {
      this.form.classList.add(this.stateClasses.isError)
    } finally {
      this.form.classList.remove(this.stateClasses.isLoading)
    }
  }

  bindEvents() {
    this.form.addEventListener('submit', this.onSubmit)

    this.form.querySelectorAll(this.selectors.requiredInputs).forEach(input => {
      input.addEventListener('input', () => {
        const field = input.closest('.field')
        if (field && input.value.trim()) {
          field.classList.remove(this.stateClasses.isFieldError)
        }
      })
    })
  }
}

export default SupportForm
