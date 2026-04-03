import { CtaModal } from '@/components/CtaModal'
import { Link } from '@/components/Link'
import { Logo } from '@/components/Logo'
import { MenuModal } from '@/components/MenuModal'
import { headerMenuItems } from '@/constants/headerData'
import classNames from 'classnames'
import './Header.scss'

const Header = props => {
	const { url, theme = 'dark' } = props

	return (
		<header
			className={classNames('header', `header--${theme}`)}
			data-js-header
		>
			<div className='header__inner container'>
				<Logo
					className='header__logo'
					loading='eager'
					variant={theme === 'light' ? 'white' : 'default'}
				/>
				<nav className='header__menu'>
					<ul className='header__menu-list'>
						{headerMenuItems.map(({ label, href }, index) => (
							<li
								className='header__menu-item'
								key={index}
							>
								<Link
									href={href}
									label={label}
									className={classNames('header__menu-link', {
										'is-active': href === url
									})}
								/>
							</li>
						))}
					</ul>
					<CtaModal className='header__cta-button' />
				</nav>
				<MenuModal className='header__menu-button' />
			</div>

			<div className='header__compact-mask'>
				<div
					className='header__compact'
					data-js-header-compact
				>
					<CtaModal className='header__compact-cta' />
					<MenuModal className='header__compact-menu' />
				</div>
			</div>
		</header>
	)
}

export default Header
