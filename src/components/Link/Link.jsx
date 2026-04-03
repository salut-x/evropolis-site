import classNames from 'classnames'
import './Link.scss'

const Link = ({ className, href, label, target, variant = 'mask' }) => {
	return (
		<a
			href={href}
			target={target}
			className={classNames(className, 'link', `link--${variant}`)}
		>
			{variant === 'mask' ? (
				<span className='link__mask'>
					<span className='link__container'>
						<span className='link__label'>{label}</span>
						<span className='link__label'>{label}</span>
					</span>
				</span>
			) : (
				<span className='link__label'>{label}</span>
			)}
		</a>
	)
}

export default Link
