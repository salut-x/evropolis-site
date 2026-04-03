import classNames from 'classnames'
import Icon from '../Icon/Icon'
import './Button.scss'

const Button = props => {
	const {
		className,
		href,
		type = 'button',
		target,
		label,
		isLabelHidden = false,
		children,
		iconName,
		iconPosition = 'before',
		mode = '',
		...rest
	} = props

	const isLink = href !== undefined
	const Component = isLink ? 'a' : 'button'
	const linkProps = { href, target }
	const buttonProps = { type }
	const specificProps = isLink ? linkProps : buttonProps
	const title = isLabelHidden ? label : undefined
	const iconComponent = iconName && (
		<Icon
			className='button__icon'
			name={iconName}
		/>
	)

	return (
		<Component
			className={classNames(className, 'button', { [`button--${mode}`]: mode })}
			title={title}
			aria-label={title}
			{...specificProps}
			{...rest}
		>
			{iconPosition === 'before' && iconComponent}
			{!isLabelHidden && <span className='button__label'>{label}</span>}
			{iconPosition === 'after' && iconComponent}
		</Component>
	)
}

export default Button
