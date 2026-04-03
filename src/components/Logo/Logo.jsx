import classNames from 'classnames'
import './Logo.scss'

const logoSources = {
	default: '/logo.svg',
	footer: '/logo-footer.svg',
	light: '/logo-light.svg'
}

const Logo = props => {
	const { className, loading = 'lazy', variant = 'default' } = props

	const title = 'Home'

	return (
		<a
			href='/'
			className={classNames(className, 'logo')}
			title={title}
			aria-label={title}
		>
			<img
				src={logoSources[variant]}
				alt=''
				className='logo__image'
				width={230}
				height={34}
				loading={loading}
			/>
		</a>
	)
}

export default Logo
