import getIdFromTitle from '@/utils/getIdFromTitle'
import classNames from 'classnames'
import './Checkbox.scss'

const Checkbox = props => {
	const {
		className,
		label,
		id = getIdFromTitle(props.label),
		isRequired
	} = props
	return (
		<label
			className={classNames(className, 'checkbox')}
			htmlFor={id}
		>
			<input
				type='checkbox'
				className='checkbox__input'
				id={id}
				required={isRequired}
			/>
			<span
				className='checkbox__indicator'
				aria-hidden='true'
			>
				<svg
					className='checkbox__icon'
					viewBox='0 0 12 10'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1 5L4.5 8.5L11 1'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</span>
			<span className='checkbox__label'>{label}</span>
		</label>
	)
}

export default Checkbox
