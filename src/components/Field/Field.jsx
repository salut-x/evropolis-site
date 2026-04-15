import getIdFromTitle from '@/utils/getIdFromTitle'
import classNames from 'classnames'
import './Field.scss'

const Field = props => {
	const {
		className,

		label,
		id = getIdFromTitle(props.label),
		/**
		 * undefined (default) | 'email | 'textarea'
		 */
		type,
		placeholder,
		isRequired,
		inputMode,
		mask
	} = props

	const Component = type === 'textarea' ? 'textarea' : 'input'

	const extraAttrs = {}

	if (mask) {
		extraAttrs['data-js-input-mask'] = mask
	}

	return (
		<div className={classNames(className, 'field')}>
			<label
				className='field__label'
				htmlFor={id}
			>
				{label}{' '}
				{isRequired && (
					<span
						className='field__required-star'
						aria-hidden='true'
					>
						*
					</span>
				)}
			</label>
			<div className='field__body'>
				<Component
					className='field__control text-base'
					id={id}
					type={type}
					placeholder={placeholder}
					required={isRequired}
					inputMode={inputMode}
					{...extraAttrs}
				/>
			</div>
		</div>
	)
}

export default Field
